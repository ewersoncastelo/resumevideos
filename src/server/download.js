import ytdl from "ytdl-core";
import fs from "fs";
import { info } from "console";

export const download = (videoID) => {
  const videoURL = "https://www.youtube.com/watch?v=" + videoID;

  console.log("downloading video...", videoURL);

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" }).on(
    "info",
    (info) => {
      // info.formats in milliseconds => changed to seconds
      const seconds = info.formats[0].approxDurationMs / 1000;

      console.log(seconds);

      // check if video is more than 900 seconds
      if (seconds > 900) {
        throw new Error("O video deve ter menos de 15 minutos");
      }
    },
  );
};
