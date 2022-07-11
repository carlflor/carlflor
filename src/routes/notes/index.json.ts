import processMarkdown from "$lib/processMarkdown";
import path from "path";
import {fileURLToPath} from 'url';

export async function get() {
    console.log("WAT", import.meta.url);

    const modules = import.meta.glob(`../../posts/*.md`);
    const posts = [];

    for (const [filePath, resolver] of Object.entries(modules)) {

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const absoluteFilePath = path.join(__dirname, filePath);

        const content = await processMarkdown( absoluteFilePath )
        const { metadata } = content;
        posts.push( metadata );
    }

    return {
        body: posts
    }
}