const slugFromPath = (path: string) => path.match(/([\w-]+)\_([\w-]+)\.(svelte\.md|md|svx)/i)?.[2] ?? null;
export default slugFromPath;