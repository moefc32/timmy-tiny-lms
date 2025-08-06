<script>
    import '../app.css';
    import { Toasts } from 'svoast';

    import Header from '$lib/component/Header.svelte';
    import Footer from '$lib/component/Footer.svelte';
</script>

<svelte:head>
    <title>
        {import.meta.env.VITE_APP_NAME}
    </title>
</svelte:head>

<Header />
<slot />
<Footer />
<Toasts position={'bottom-center'} />
