import { init as cuid2 } from '@paralleldrive/cuid2';
import sqlite from '../sqlite';
import { TABLE_COURSE } from './tables';

export default {
    searchData: async (keyword) => {
        try {
            const search = `%${keyword}%`;

            const result = sqlite(`
                SELECT
                    id,
                    slug,
                    title,
                    timestamp
                FROM ${TABLE_COURSE}
                WHERE LOWER(title) LIKE LOWER(?);
            `, [search]);

            return result;
        } catch (e) {
            console.error(e);
            throw new Error('Error when getting data!');
        }
    },
    getData: async (slug) => {
        try {
            const result = !slug
                ? sqlite(`
                    SELECT
                        id,
                        slug,
                        title
                    FROM ${TABLE_COURSE}
                    ORDER BY timestamp DESC;
                `)
                : sqlite(`
                    SELECT
                        id,
                        slug,
                        title,
                        description,
                        content,
                        timestamp
                    FROM ${TABLE_COURSE}
                    WHERE slug = ?;
                `, [slug]);

            return result;
        } catch (e) {
            console.error(e);
            throw new Error('Error when getting data!');
        }
    },
    createData: async (data) => {
        try {
            const timestamp = Date.now();
            const cuid = cuid2({ length: 12 })();

            const result = sqlite(`
                INSERT INTO ${TABLE_COURSE} (
                    id,
                    slug,
                    title,
                    description,
                    content,
                    timestamp
                ) VALUES (?, ?, ?, ?, ?, ?);
            `, [
                cuid,
                data.slug,
                data.title,
                data.description,
                data.content,
                timestamp
            ]);

            return {
                column: {
                    id: cuid,
                    slug: data.slug,
                    title: data.title,
                    timestamp,
                },
                ...result,
            };
        } catch (e) {
            console.error(e);
            throw new Error('Error when creating data!');
        }
    },
    editData: async (data, id) => {
        try {
            const timestamp = Date.now();

            const result = sqlite(`
                UPDATE ${TABLE_COURSE} SET
                    slug        = COALESCE(?, slug),
                    title       = COALESCE(?, title),
                    description = COALESCE(?, description),
                    content     = COALESCE(?, content),
                    timestamp   = ?
                WHERE id = ?;
            `, [
                data.slug || null,
                data.title || null,
                data.description || null,
                data.content || null,
                timestamp,
                id
            ]);

            return {
                column: {
                    id,
                    slug: data.slug,
                    title: data.title,
                    timestamp,
                },
                ...result,
            };
        } catch (e) {
            console.error(e);
            throw new Error('Error when editing data!');
        }
    },
    deleteData: async (id) => {
        try {
            const result = sqlite(`
                DELETE FROM ${TABLE_COURSE}
                WHERE id = ?;
            `, [id]);

            return result;
        } catch (e) {
            console.error(e);
            throw new Error('Error when deleting data!');
        }
    },
}
