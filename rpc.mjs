// find all files with .html in all folders and subfolders
// and replace all instances of "data-domain="adfree-sz-games.github.io" with "data-domain="teen.media"

import fs from "fs";
import path from "path";


function replaceDataDomain(dir) {
  fs.readdirSync(dir).forEach((file) => {
    // if file is .html
    if (file.endsWith(".html")) {
      console.log(file);
      const filePath = path.join(dir, file);
      // if file is a directory
      if (fs.lstatSync(filePath).isDirectory()) {
        // recursively call replaceDataDomain
        replaceDataDomain(filePath);
      } else {
        // read file
        const data = fs.readFileSync(filePath, "utf8");
        const newData = data.replace(
          /data-domain="adfree-sz-games.github.io"/g,
          'data-domain="teen.media"'
        );
        fs.writeFileSync(filePath, newData);
      }
    }
  });
}

replaceDataDomain(".");
