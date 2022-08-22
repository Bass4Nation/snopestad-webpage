import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  posts: '++id, title, description', // Primary key and indexed props
});