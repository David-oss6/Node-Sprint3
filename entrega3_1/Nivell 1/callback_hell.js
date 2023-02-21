const { execFileSync } = require("child_process");
const { readdir, readFile, writeFile } = require("fs");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = (str) => str.split("").reverse().join("");

const escribirArchivo = (file, data) => {
  writeFile(join(outbox, file), reverseText(data), (error) => {
    if (error) return console.log("Error: File could not be saved!");
    console.log(`${file} was successfully saved in the outbox!`);
  });
};
const leerArchivo = (files) => {
  files.forEach((file) => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) return console.log("Error: File error");
      escribirArchivo(file, data);
    });
  });
};
const leerDirectorio = () => {
  readdir(inbox, (error, files) => {
    if (error) return console.log("Error: Folder inaccessible");
    leerArchivo(files);
  });
};
leerDirectorio(inbox);
