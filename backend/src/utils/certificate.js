const PDFDocument = require('pdfkit');

const generateCertificate = ({ name }) => {
  const doc = new PDFDocument({ size: 'A4', margin: 50 });

  doc.fontSize(24).text('Certificate of Membership', { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text('This is to certify that', { align: 'center' });
  doc.moveDown(0.5);
  doc.fontSize(20).text(name, { align: 'center' });
  doc.moveDown(0.5);
  doc.fontSize(14).text('has joined Samvidhan Shiksha Foundation', { align: 'center' });

  doc.moveDown(2);
  doc.fontSize(10).text('This is a non-profit, non-political organization working for education and social awareness.', { align: 'center' });

  return doc;
};

module.exports = { generateCertificate };
