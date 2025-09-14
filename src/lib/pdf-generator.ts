"use server";

import jsPDF from "jspdf";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs/promises";

export async function generatePDF(
  content: string,
  type: "text" | "table" = "text"
): Promise<string> {
  try {
    const pdf = new jsPDF();
    const uniqueId = uuidv4();
    const timestamp = Date.now();
    const filename = `NurtureTalk-Report-${uniqueId}-${timestamp}.pdf`;

    // Configure PDF styling
    pdf.setFont("helvetica");
    pdf.setFontSize(12);

    // Add header
    pdf.setFontSize(16);
    pdf.text("NurtureTalk Report", 20, 20);
    pdf.setFontSize(12);

    // Add content based on type
    if (type === "table") {
      // Parse and add table content
      const tableData = JSON.parse(content);
      let yPos = 40;

      // Add table headers
      const headers = Object.keys(tableData[0]);
      pdf.setFillColor(240, 240, 240);
      headers.forEach((header, i) => {
        pdf.text(header, 20 + i * 40, yPos);
      });

      // Add table rows
      tableData.forEach((row: any, rowIndex: number) => {
        yPos += 10;
        Object.values(row).forEach((value, colIndex) => {
          pdf.text(String(value), 20 + colIndex * 40, yPos);
        });
      });
    } else {
      // Add text content with word wrap
      const splitText = pdf.splitTextToSize(content, 170);
      pdf.text(splitText, 20, 40);
    }

    // Add footer with timestamp
    pdf.setFontSize(10);
    pdf.text(
      new Date().toLocaleString(),
      20,
      pdf.internal.pageSize.height - 10
    );

    // Save PDF to public directory
    const publicDir = path.join(process.cwd(), "public", "pdfs");
    await fs.mkdir(publicDir, { recursive: true });

    const pdfPath = path.join(publicDir, filename);
    await fs.writeFile(pdfPath, pdf.output());

    // Return the public URL for the PDF
    return `/pdfs/${filename}`;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
}
