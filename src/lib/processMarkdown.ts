import {read} from 'to-vfile'
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkFrontmatter from 'remark-frontmatter'
import remarkExtractFrontmatter from "remark-extract-frontmatter"
import remarkStringify from "remark-stringify";
import yaml from 'yaml';

const processMarkdown = async (absoluteFilePath: any) => {
    const file = await read(absoluteFilePath);

    let pipeline = await unified()
        .use(remarkParse)
        .use(remarkFrontmatter, ["yaml"])
        .use(remarkStringify)
        .use(remarkExtractFrontmatter, { yaml: yaml.parse })
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(file)

    return {
        metadata: pipeline.data,
        html: pipeline.value,
    };
}

export default processMarkdown;