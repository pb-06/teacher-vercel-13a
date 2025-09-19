// api/teacher.js

import { globalTeachers } from './globals.js';

export default async function handler(req, res) {
    let found = null;
    if (globalTeachers) found = globalTeachers.teachers.find(teacher=>teacher.favorite);

    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404).json({error: 'Not Found'});
    }
}