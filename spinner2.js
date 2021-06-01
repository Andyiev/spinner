process.stdout.write('hello from spinner1.js... \rheyyy\n');
const chars = ["|  ", "/  ", "-  ", "\\  ", "|  ", "/  ", "-  ", "\\  ", "|  "];
let when = 0;
for (const char of chars) {
  setTimeout(() => {
    process.stdout.write(`\r ${char}`)
  }, when);
  when +=200;
};