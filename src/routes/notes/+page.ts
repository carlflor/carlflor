import { base } from '$app/paths';
import processMarkdown from "$lib/processMarkdown";

export const prerender = true

/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function load() {
    const modules = import.meta.glob(`../../posts/*.md`, { as: "raw" });
    const posts = [];

    for (const [filePath, loadContent] of Object.entries(modules)) {

        const contentString = await loadContent()
        const content = await processMarkdown(contentString);
        const { metadata } = content;
        posts.push( metadata );
    }

    return {
        posts
    };
}
