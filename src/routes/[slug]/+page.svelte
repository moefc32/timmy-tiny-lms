<script>
    import LessonContent from '$lib/component/LessonContent.svelte';
    import LessonDescription from '$lib/component/LessonDescription.svelte';
</script>

<section class="flex flex-1 flex-col gap-6 mb-12 p-6 w-full">
    <div class="tabs tabs-lift">
        <input
            type="radio"
            name="course_tab"
            class="tab"
            aria-label="Lesson"
            checked="checked"
        />
        <div class="tab-content bg-base-100 border-base-300 p-6">
            <LessonContent />
        </div>
        <input
            type="radio"
            name="course_tab"
            class="tab"
            aria-label="Description"
        />
        <div class="tab-content bg-base-100 border-base-300 p-6">
            <LessonDescription />
        </div>
    </div>
</section>
