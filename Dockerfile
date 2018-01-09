FROM node

RUN printf "deb http://httpredir.debian.org/debian jessie-backports main non-free\ndeb-src http://httpredir.debian.org/debian jessie-backports main non-free" > /etc/apt/sources.list.d/backports.list
RUN apt-get update && apt-get -y install ffmpeg

WORKDIR /usr/src/app

COPY . .

ENV PORT=80

RUN npm install
RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]