const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const htmlFilePath = path.join(__dirname, 'index.html');
const indexEjsFilePath = path.join(__dirname, 'views', 'ejs', 'index.ejs');

// Function to compile the index.ejs file
const compileIndexEjs = () => {
  if (fs.existsSync(indexEjsFilePath)) {
    const ejsContent = fs.readFileSync(indexEjsFilePath, 'utf-8');
    fs.mkdirSync(path.dirname(htmlFilePath), { recursive: true });

    var html = ejs.render(ejsContent, { filename: indexEjsFilePath });

    html = html.replace(/"images/g, '"public/images');      
    html = html.replace('/css/output.css', 'public/css/output.css');      
    html = html.replace('/js', 'public/js');      

    fs.writeFileSync(htmlFilePath, html, 'utf-8');

    console.log(`Compiled ${indexEjsFilePath} to ${htmlFilePath}`);
  } else {
    console.error('index.ejs file not found.');
  }
};

compileIndexEjs();
