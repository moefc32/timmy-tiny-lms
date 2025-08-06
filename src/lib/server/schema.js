import sqlite from './sqlite';
import { TABLE_LESSON } from './model/tables';

export default function setSchema() {
    const queries = [
        `CREATE TABLE IF NOT EXISTS ${TABLE_LESSON} (
            id TEXT PRIMARY KEY NOT NULL,
            slug TEXT NOT NULL,
            title TEXT NOT NULL,
            description TEXT,
            content TEXT,
            timestamp INTEGER NOT NULL
        );`,
    ];

    for (const query of queries) {
        sqlite(query);
    }
}
