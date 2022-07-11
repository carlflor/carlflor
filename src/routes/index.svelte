<svelte:head>
	<title>carlflor</title>
	<meta name="description" content="I like helping people by writing code" />
</svelte:head>

<section class="home">
    <h1 class="greeting">🙋🏻‍♂ Hi!</h1>
    <p class="bio">
        I am Carl Flor, a software engineer who likes building things that make people's lives a little easier.
    </p>
    <p class="bio">
        I currently work at <a class="desc-link" href="https://www.grab.com/sg/" target="_blank">Grab</a> where I build tools and systems that make customer support journey more pleasant. My favorite tool is Javascript, while I sometimes dabble with Golang and Ruby. Once in a while, I dedicate my weekends teaching coding.
        When I am not coding, I am most likely taking <a class="desc-link" href="https://www.flickr.com/photos/132863000@N07/" target="_blank">pictures</a> or <a class="desc-link" href="https://media.giphy.com/media/6fScAIQR0P0xW/giphy.gif" target="_blank">dancing</a>.
    </p>
    <p class="email">
        Feel free to drop me a message at <a class="desc-link" href="mailto:hello@carlflor.com" target="_top">hello@carlflor.com</a> for anything.
    </p>
</section>

<style>
    .home {
        margin: 50px 0;
        max-width: 580px;
        font-size: 1.1em;
        line-height: 1.6em;
    }
    
    .greeting {
        margin-top: 150px;
        font-size: 2.5em;
    }

    p + p {
        margin-top: 32px;
    }
</style>