const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const htmlFilePath = path.join(__dirname, 'views', 'index.html');
const indexEjsFilePath = path.join(__dirname, 'views', 'ejs', 'index.ejs');

// Function to compile the index.ejs file
const compileIndexEjs = () => {
  if (fs.existsSync(indexEjsFilePath)) {
    const ejsContent = fs.readFileSync(indexEjsFilePath, 'utf-8');
    fs.mkdirSync(path.dirname(htmlFilePath), { recursive: true });
    const html = ejs.render(ejsContent, { filename: indexEjsFilePath });
    fs.writeFileSync(htmlFilePath, html, 'utf-8');
    console.log(`Compiled ${indexEjsFilePath} to ${htmlFilePath}`);
  } else {
    console.error('index.ejs file not found.');
  }
};

compileIndexEjs();
