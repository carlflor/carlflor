<script lang="ts">
    export let data: any;
</script>

<h1>Notes</h1>
{#each data.posts as { slug, title, date }}
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