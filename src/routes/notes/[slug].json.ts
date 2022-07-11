import processMarkdown from "$lib/processMarkdown";
import slugFromPath from "$lib/slugFromPath";

export async function get({ params }) {

    const modules = import.meta.glob(`../../posts/*.md`, { as: "raw" });

    for (const [filePath, contentString] of Object.entries(modules)) {

        if (slugFromPath(filePath) === params.slug) {
            const content = await processMarkdown(contentString);
            const { metadata, html } = content;

            return {
                body: {
                    metadata,
                    html,
                },
            }
        }
    }

    return {
        status: 404,
    }
}