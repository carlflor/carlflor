<script context="module" lang="ts">
    export async function load({url, fetch}) {
  
      const post = await fetch(`${url.pathname}.json`).then((r) => r.json())
  
      return {
          props: {post}
      }
    }
</script>

<script lang="ts">
    export let post: any;
</script>

<svelte:head>
    <title>{post.metadata.title}</title>
    <meta name="description" content={post.metadata.description}>
</svelte:head>
  
<article>
    {@html post.html}
</article>