const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let count = 100;
for(let i = 0; i < spinner.length; i++){
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}   `);
  }, count);
  count += 200
}
