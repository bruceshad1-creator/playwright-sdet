import fs from 'fs';
import pdf from 'pdf-extraction';

export async function readPDF(filePath: string): Promise<string> {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);

    return data.text;
}
