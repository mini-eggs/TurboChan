import { Router } from "express";
import Axios from "axios";
import FS from "fs";
import Path from "path";
import Transcoder from "stream-transcoder";

const router = Router();

const opts = { method: "get", responseType: "stream" };

const transcode = s =>
  new Transcoder(s)
    .maxSize(320 / 2, 240 / 2)
    .videoCodec("h264")
    .videoBitrate(800 * 1000)
    .fps(20)
    .sampleRate(44100)
    .channels(2)
    .audioBitrate(128 * 1000)
    .format("mp4")
    .custom("strict", "experimental")
    .stream();

router.get("/media/:thread/:media", async (req, res) => {
  const { thread, media } = req.params;
  const convert = media.indexOf(".mp4") !== -1;
  const url = `http://i.4cdn.org/${thread}/${media}`.replace(".mp4", ".webm");

  const getStream = convert
    ? ({ data }) => transcode(data)
    : ({ data }) => data;

  const onError = e => {
    console.log("Error requesting item from external server.");
    console.log(e);
    res.status(404).send();
  };

  try {
    const stream = getStream(await Axios({ ...opts, url }));
    stream.on("error", onError);

    if (!convert) {
      stream.pipe(res);
      return;
    }

    /**
     * This method isn't great. But sending file works
     * for Safari + Safari mobile.
     */
    const loc = `/tmp/${media}`;
    const whenExists = () => res.sendFile(`${media}`, { root: "/tmp/" });

    FS.exists(loc, exists => {
      if (exists) {
        whenExists();
        return;
      }

      const fileStream = FS.createWriteStream(loc);
      fileStream.on("error", onError);
      stream.pipe(fileStream).on("finish", whenExists);
    });
  } catch (e) {
    onError(e);
  }
});

export default router;
