import { IDBKeyRange, indexedDB } from 'fake-indexeddb';
import 'fake-indexeddb/auto';
import Dexie, { liveQuery } from 'dexie';

Dexie.dependencies.indexedDB = indexedDB;
Dexie.dependencies.IDBKeyRange = IDBKeyRange;

describe("failing tests", () => {
  it('should succeed but fails', () => {
    const db = new Dexie('FriendDatabase');
    db.version(1).stores({
      friends: '++id, name, age'
    });

    liveQuery (
      () => (db as any).friends
    );


    expect(true).toBe(true);
  })
})