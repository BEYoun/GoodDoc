import { BaseRecord, DataBase } from "../common";

export interface Doctors {
    id: string;
    lastName: string;
    firstName: string;
    Adresse: string;
    numberPhone: string;
}

export function createDatabase<T extends BaseRecord>() {
    class InMemoryDatabase implements DataBase<T>{
        private db: T[] = [];

        static instance: InMemoryDatabase = new InMemoryDatabase()

        private constructor() {}

        public set(newValue: T): void {
            this.db.push(newValue);
        }
        public get(id: string): T | undefined {
            return this.db.find((x)=>x.id===id)
        }
        public getAll() {
            return this.db;
        }
    }

    return InMemoryDatabase;
}