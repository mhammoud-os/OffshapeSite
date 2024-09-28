<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<style>
    .layout-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .content {
        flex-grow: 1;
    }
</style>

<div class="layout-container">
	<div class="content">
		<slot></slot>
	</div>
	<Navbar />
    <Footer />
</div>
