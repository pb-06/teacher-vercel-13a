// api/teacher.js

import { globalTeachers } from './globals.js';

export default async function handler(req, res) {
    let global = globalTeachers;
    console.log('globalTeachers', globalTeachers);
    console.log('global', global);

    let found = null;
    if (global) found = global.teachers.find(teacher=>teacher.favorite);

    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404).json({error: 'Not Found'});
    }
}