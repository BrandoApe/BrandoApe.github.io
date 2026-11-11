import { getCollection } from 'astro:content';

const newestFirst = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
	b.data.date.valueOf() - a.data.date.valueOf();

/** All projects, newest first. */
export const getProjects = async () => (await getCollection('projects')).sort(newestFirst);

/** All notes, newest first. */
export const getNotes = async () => (await getCollection('notes')).sort(newestFirst);

/** A date as YYYY-MM-DD. */
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
