import processMarkdown from "$lib/processMarkdown";
import slugFromPath from "$lib/slugFromPath";

export const prerender = true

export async function load({params}) {
    const modules = import.meta.glob(`../../../posts/*.md`, { as: "raw" });

    for (const [filePath, loadContent] of Object.entries(modules)) {
        if (slugFromPath(filePath) === params.slug) {
            const contentString = await loadContent();
            const content = await processMarkdown(contentString);

            const { metadata, html } = content;

            return {
                post: {
                    metadata,
                    html,
                }
            }
        }
    }


    return { post: {}}
}
