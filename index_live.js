let options = {
  width: 70%,
  height: 80%,
  channel: "{7xSev}",
  //video: "{VIDEO_ID}"
};
let player = new Twitch.Player("{PLAYER_DIV_ID}", options);
player.setVolume(0.5);