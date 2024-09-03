import { generatePdf } from "@/lib/pdf"

export const POST = async (request: Request) => {
  const { name } = await request.json();

  try {
    const pdfBytes = await generatePdf(name);
    return Response.json({ error: false, pdf: Buffer.from(pdfBytes).toString('base64') });
  } catch (e) {
    return Response.json({ error: (e as Error).message });
  }
};
