import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter(),
        paths: {
            base: process.env.VITE_BASE_PATH,
        },
    },
};

export default config;
