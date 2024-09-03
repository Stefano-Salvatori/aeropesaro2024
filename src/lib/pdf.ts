import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

import fs from "node:fs";
import path from "node:path";

export const generatePdf = async (name: string) => {
  const startTime = Date.now();

  const assetsPath = path.join(process.cwd(), "assets");
  const basePdfBytes = fs.readFileSync(path.join(assetsPath, "diploma-aeropesaro2024.pdf"));
  const pdfDoc = await PDFDocument.load(basePdfBytes);

  pdfDoc.registerFontkit(fontkit);
  const fontBytes = fs.readFileSync(path.join(assetsPath, "Poppins-Italic.ttf"));
  const customFont = await pdfDoc.embedFont(fontBytes);

  const pages = pdfDoc.getPages();
  const [firstPage] = pages;
  const { width: pageWidth } = firstPage.getSize();

  const text = name.toUpperCase();

  const color = rgb(0.9, 0.9, 0.9);
  const fontSize = 35;

  const textWidth = text.length * (fontSize / 1.8); // approx
  const x = (pageWidth - textWidth) / 2;

  firstPage.drawText(text, {
    size: fontSize,
    font: customFont,
    color,
    x,
    y: 340,
  });

  const outPdfBytes = await pdfDoc.save();

  const endTime = Date.now();
  const timeTaken = endTime - startTime;
  console.log(`Certificate generated for ${text} - time taken: ${timeTaken}ms`);

  return outPdfBytes
};
