import processMarkdown from "$lib/processMarkdown";

export async function get() {
    const modules = import.meta.glob(`../../posts/*.md`, { as: "raw" });
    const posts = [];

    for (const [filePath, contentString] of Object.entries(modules)) {

        const content = await processMarkdown(contentString);
        const { metadata } = content;
        posts.push( metadata );
    }
    return {
        body: posts
    }
}