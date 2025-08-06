<script>
</script>

<header
    class="flex items-center mb-[-65px] px-6 bg-primary text-primary-content w-full h-[65px] shadow-lg z-50"
>
    <a href="/" class="text-xl font-bold">
        {import.meta.env.VITE_APP_NAME}
    </a>
    <label class="input ms-auto text-black">
        <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
            </g>
        </svg>
        <input type="search" class="grow" placeholder="Search" />
        <kbd class="kbd kbd-sm">⌘</kbd>
        <kbd class="kbd kbd-sm">K</kbd>
    </label>
</header>
