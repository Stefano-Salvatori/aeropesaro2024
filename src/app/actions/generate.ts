"use server";
import { generatePdf } from "../../lib/pdf"

export async function generate({
  name,
}: { name: string }) {

  const pdf = await generatePdf(name);
  return pdf
}
