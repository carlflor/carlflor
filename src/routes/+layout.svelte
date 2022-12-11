<script context="module">
    export const prerender = true
    import "../app.css"
</script>

<main>
    <!-- <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/notes">Notes</a>
    </div> -->
    <slot />
</main>