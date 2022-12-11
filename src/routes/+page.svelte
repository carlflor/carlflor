<svelte:head>
	<title>Carl Flor</title>
	<meta name="description" content="I like helping people by writing code" />
</svelte:head>

<script lang="ts">
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    export let visible: any;
    onMount(() => visible = true)
</script>

{#if visible}
<section class="home" in:fade="{{ delay: 300, duration: 200 }}">
    <h1 class="greeting">🙋🏻‍♂ Hi!</h1>
    <p class="bio">
        I am Carl Flor, a software engineer who likes to build things that make people's lives a little easier.
    </p>
    <p class="bio">
        I currently work at <a class="desc-link" href="https://www.grab.com/sg/" target="_blank" rel="noreferrer">Grab</a> where I build tools and systems that make customer support journey more pleasant. My favorite tool is Javascript, while I sometimes dabble with Golang and Ruby. Once in a while, I dedicate my weekends <a class="desc-link" href="https://www.linkedin.com/feed/update/urn:li:share:6884006384460009472?utm_source=linkedin_share&utm_medium=member_desktop_share&utm_content=post">teaching coding</a>.
        When I am not coding, I am most likely taking <a class="desc-link" href="https://www.flickr.com/photos/132863000@N07/" target="_blank" rel="noreferrer">pictures</a> or <span class="rainbow-text">dancing</span>.

    </p>
    <img class="gif" alt="yoda-dancing-gif" src="https://i.pinimg.com/originals/bd/43/93/bd439311d5ddb4362a407413239b07d3.gif" />
    <p class="email">
        Feel free to drop me a message at <a class="desc-link" href="mailto:hello@carlflor.com" target="_top">hello@carlflor.com</a> for anything.
    </p>
</section>
{/if}

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

    .rainbow-text {
        background: linear-gradient( 92deg, #95d7e3, #eb76ff );
        background: -webkit-linear-gradient( 92deg, #95d7e3, #eb76ff );
        background-size:600vw 600vw;
  
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textAnimate 0.5s linear infinite alternate;
    }

    @keyframes textAnimate {
        from {
            filter: hue-rotate(0deg);
            background-position-x: 0%;
            
        }
        to {
            filter: hue-rotate(360deg);
            background-position-x: 600vw;
            
        }
    }

    .gif {
        width: 100%;
    }
</style>
