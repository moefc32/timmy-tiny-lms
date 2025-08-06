import { error } from '@sveltejs/kit';
import model from '$lib/server/model/course';

export async function entries() {
    const courses = await model.getData();
    return courses;
}

export async function load({ params }) {
    const { slug } = params;
    const course = await model.getData(slug);

    if (!course.length) {
        throw error(404, 'Not Found');
    }

    return {
        courses,
    };
}
