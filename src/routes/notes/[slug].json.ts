import processMarkdown from "$lib/processMarkdown";
import slugFromPath from "$lib/slugFromPath";
import path from "path";
import {fileURLToPath} from 'url';

export async function get({ params }) {

    const modules = import.meta.glob(`../../posts/*.md`);

    for (const [filePath, resolver] of Object.entries(modules)) {

        if (slugFromPath(filePath) === params.slug) {
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const absoluteFilePath = path.join(__dirname, filePath);

            const content = await processMarkdown( absoluteFilePath )
            const { metadata, html } = content;

            return {
                body: {
                    metadata,
                    html,

                    text: "test body",
                },
            }
        }
    }

    return {
        status: 404,
    }
}