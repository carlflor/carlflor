<script context="module" lang="ts">
    import { base } from '$app/paths';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		// Use a `limit` querystring parameter to fetch a limited number of posts
		// e.g. fetch('posts.json?limit=5') for 5 most recent posts
		const posts = await fetch(`${base}/notes.json`).then((res) => res.json());
		return {
			props: {
				posts
			}
		};
	}
</script>

<script lang="ts">
    export let posts: any;
</script>

<h1>Notes</h1>
{#each posts as { slug, title, date }}
	<div class="post">
		<a href="/notes/{slug}">
			{title}
			<br>
			{date}
		</a>
	</div>
{/each}


<style>
	.post + .post {
		margin-top: 32px;
	}
</style>