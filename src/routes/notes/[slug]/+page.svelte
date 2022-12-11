<script lang="ts">
    export let data: any;
    let { post } = data;
</script>

<svelte:head>
    <title>{post.metadata.title}</title>
    <meta name="description" content={post.metadata.description}>
</svelte:head>
  
<article>
    {@html post.html}
</article>