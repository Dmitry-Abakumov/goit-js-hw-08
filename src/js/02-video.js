import Player from '@vimeo/player';
import { throttle } from 'lodash';

refs = {
  iframe: document.querySelector('iframe[id="vimeo-player"]'),
};

const player = new Player(refs.iframe);

player
  .setCurrentTime(window.localStorage.getItem('videoplayer-current-time'))
  // .then(function (seconds) {
  //   // seconds = the actual time that the player seeked to
  // })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

const onTimeUpdate = data => {
  window.localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));
