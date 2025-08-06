<script>
    import Hero from '$lib/component/Hero.svelte';
    import LessonCard from '$lib/component/LessonCard.svelte';
    import Pagination from '$lib/component/Pagination.svelte';
</script>

<Hero />
<section class="flex flex-1 flex-col gap-6 my-12 p-6 w-full">
    <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6 max-w-screen-xl mx-auto"
    >
        {#each Array(6) as _, i}
            <LessonCard />
        {/each}
    </div>
    <Pagination />
</section>
