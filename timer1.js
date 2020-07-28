
const getArgs = () => {
  return process.argv.slice(2);
};
const beep = () => {
  process.stdout.write('\x07');
};

const args = getArgs();

for (let i of args) {
  if (isNaN(i) || i < 0) continue;
  setTimeout(() => beep(), i  * 1000);
};

