
<script lang="ts">
    import "../app.css"
    import { fade } from 'svelte/transition';
    let visible = false;
    setTimeout(() => { visible = true}, 500)
</script>

{#if visible}
<main transition:fade="{{ duration: 200 }}">
    <slot />
</main>
{/if}