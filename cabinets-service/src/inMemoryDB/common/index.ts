
export interface BaseRecord {
    id: string;
}

export interface DataBase<T extends BaseRecord> {
    set(newValue: T): void
    get(id: string): T | undefined
    getAll(): T[]
}