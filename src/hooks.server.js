import { VITE_APP_NAME } from '$env/static/private';
import { json } from '@sveltejs/kit';
import setSchema from '$lib/server/schema';

setSchema();

export const handle = async ({ event, resolve }) => {
    return resolve(event);
}
