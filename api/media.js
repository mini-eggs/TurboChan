import { Router } from "express";
import Axios from "axios";
// import FS from "fs";
// import Path from "path";
// import Transcoder from "stream-transcoder";

const router = Router();

const opts = { method: "get", responseType: "stream" };

// const transcode = s =>
//   new Transcoder(s)
//     .maxSize(320, 240)
//     .videoCodec("h264")
//     .videoBitrate(800 * 1000)
//     .fps(25)
//     .sampleRate(44100)
//     .channels(2)
//     .audioBitrate(128 * 1000)
//     .format("mp4")
//     .custom("strict", "experimental")
//     .stream();

router.get("/media/:thread/:media", async (req, res) => {
  const { thread, media } = req.params;
  const url = `http://i.4cdn.org/${thread}/${media}`;
  Axios({ ...opts, url: url }).then(({ data }) => data.pipe(res));
  // Not feasible for RPI + This method is slow (creating + deleting files)
  // const { thread, media } = req.params;
  // const convert = media.indexOf(".mp4") !== -1;
  // const url = `http://i.4cdn.org/${thread}/${media}`.replace(".mp4", ".webm");
  // const getStream = convert
  //   ? ({ data }) => transcode(data)
  //   : ({ data }) => data;
  // Axios({ ...opts, url: url }).then(i => {
  //   const stream = getStream(i);
  //   if (!convert || true) {
  //     stream.pipe(res);
  //     return;
  //   }
  //   const name = `${media}_${new Date().getTime()}`;
  //   const loc = Path.join(__dirname, `../static/${name}`);
  //   const file = FS.createWriteStream(loc);
  //   stream.pipe(file).on("finish", () => {
  //     res.sendFile(`${media}`, { root: __dirname + "/../static/" });
  //     FS.unlink(loc, () => undefined);
  //   });
  // });
});

export default router;
