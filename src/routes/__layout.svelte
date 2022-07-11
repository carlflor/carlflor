
<script lang="ts">
    import "../app.css"
    import { fade } from 'svelte/transition';
    let visible = false;
    setTimeout(() => { visible = true}, 500)
</script>

{#if visible}
<main transition:fade="{{ duration: 200 }}">
    <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/notes">Notes</a>
    </div>
    <slot />
</main>
{/if}