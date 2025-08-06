import { error } from '@sveltejs/kit';
import model from '$lib/server/model/lesson';

export async function entries() {
    const lessons = await model.getData();
    return lessons;
}

export async function load({ params }) {
    const { slug } = params;
    const lessons = await model.getData(slug);

    if (!lessons.length) {
        throw error(404, 'Not Found');
    }

    return {
        lessons,
    };
}
