
export interface BaseRecord {
    id: string;
}

export interface DataBase<T extends BaseRecord> {
    set(newValue: T): void
    get(id: string): T | undefined
    getAll(): T[]
}

export function createDatabase<T extends BaseRecord>() {
    class InMemoryDatabase implements DataBase<T>{
        private db: T[] = [];

        static instance: InMemoryDatabase = new InMemoryDatabase()

        private constructor() {
            
        }

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