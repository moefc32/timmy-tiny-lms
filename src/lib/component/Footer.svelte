<script>
    const getYear = new Date().getFullYear();
    const currentYear = (getYear > 2025 ? `2025 - ` : '') + getYear;
</script>

<footer class="p-3 text-gray-500 text-center text-sm">
    <a href="https://mf-chan.com" target="_blank">Mfc</a>
    &copy; {currentYear}
</footer>
