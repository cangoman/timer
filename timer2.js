//found this article that helped me understand and setup my program:
// https://thisdavej.com/making-interactive-node-js-console-apps-that-listen-for-keypress-events/

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const beep = () => {
  process.stdout.write('\x07');
};

process.stdout.write('Please enter an option:\nb: beep\n1-9 set a timer in seconds\nctrl=c to exit:\n');

process.stdin.on('keypress', (str, key) => {
  let timeout;
  if (key.ctrl && key.name === 'c') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
  else {
    if (key.name === 'b') beep();
    if (key.name > 0 && key.name < 10) {
      timeout = Number(key.name) * 1000;
      process.stdout.write(`setting timer for ${key.name} seconds...\n`)
      setTimeout( beep, timeout);
    }
  }
});