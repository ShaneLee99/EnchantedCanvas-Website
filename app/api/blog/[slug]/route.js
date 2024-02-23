import fs from 'fs';
import path from 'path';

export async function GET(req, res) {
  const pathname = req.url
  const getSlug = pathname.split("/")[4]
  const slug = getSlug;
  if (!slug) {
    return Response.json({ error: 'Slug is required' })
  }
  // Assuming your JSON files are in the 'articles' folder
  const filePath = path.join(process.cwd(), '/app/blogs', `${slug}.json`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return Response.json({ error: 'Blog not found' });
  }

  // Read and parse the JSON content
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const jsonData = JSON.parse(fileContent);

  return Response.json(jsonData);
}