import fs from 'fs';
import path from 'path';

export async function GET() {
    
    const starting = 0
    const amount = 6

    const articlesPath = path.join(process.cwd(), '/app/blogs');

    try {
        const articleFiles = fs.readdirSync(articlesPath);

        const articles = articleFiles.map((file) => {
            const filePath = path.join(articlesPath, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const article = JSON.parse(fileContent);
            return { fileName: file.replace('.json', ''), ...article };
        });

        const selectedArticles = articles.slice(starting, starting + amount);

        return Response.json(selectedArticles);
    } catch (error) {
        console.error(error);
        return Response.json({ error: 'Internal Server Error' });
    }

}