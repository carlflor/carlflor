<script>
    import { fade } from 'svelte/transition';
    let visible = false;
    setTimeout(() => { visible = true}, 500)
</script>

<svelte:head>
	<title>carlflor</title>
	<meta name="description" content="I like helping people by writing code" />
</svelte:head>

{#if visible}
<section transition:fade="{{ duration: 200 }}" class="home">
    <h1 class="greeting">🙋🏻‍♂ Hi!</h1>
    <p class="bio">
        I am Carl Flor, and I am currently working as a senior software engineer at <a class="desc-link" href="https://www.grab.com/sg/" target="_blank">Grab</a> in Singapore. I like working on projects that make people's lives easier. My favorite tool is Javascript, while I sometimes dabble with Golang and Ruby. Once in a while, I dedicate my weekends teaching coding.
        When I am not coding, I am most likely taking <a class="desc-link" href="https://www.flickr.com/photos/132863000@N07/" target="_blank">pictures</a> or <a class="desc-link" href="https://media.giphy.com/media/6fScAIQR0P0xW/giphy.gif" target="_blank">dancing</a>.
    </p>
    <p class="email">
        Feel free to drop me a message at <a class="desc-link" href="mailto:hello@carlflor.com" target="_top">hello@carlflor.com</a> for anything.
    </p>
</section>
{/if}


<style>
    .home {
        margin: 50px;
        max-width: 550px;
    }
    
    .greeting {
        margin-top: 150px;
        font-size: 2.5em;
    }

    p + p {
        margin-top: 32px;
    }
</style>