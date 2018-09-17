const fs = require('fs');
const { inlineSource } = require('inline-source');

inlineSource("index.html", {
    compress: true,
    rootpath: "./",
  }).then(html => {
    fs.writeFileSync("../htdocs.go", 
    `package main
    
    func GetRenderHTML() string {
        return \`` + 
        html + 
        `\`
    }
    `);
  }).catch(err => {
    // Handle error
  });



// https://gist.github.com/getify/3667624
