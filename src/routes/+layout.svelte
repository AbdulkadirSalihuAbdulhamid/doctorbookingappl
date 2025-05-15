<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import '../styles/global.scss';
</script>

<div class="app">
  <Header />
  <Navigation />
  <main>
    <slot />
  </main>
  <Footer />
</div>