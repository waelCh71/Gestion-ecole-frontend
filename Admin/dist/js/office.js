const officegen= require('officegen');

const fs= require('fs');

const docx= officegen('docx');

const p= docx.createP();

p.addText("firs paragraph");

const out= fs.createWriteStream("result.docx");

docx.generate(out);

