import generateUUID from "#root/helpers/generateUUID";
import { createDatabase } from "../common";
import data from './regions.json'

export interface Region {
    id: number;
    name: string;
}

const RegionDb = createDatabase<Region>();
const regionDb = RegionDb.instance;
data.forEach((x) => {
    regionDb.set({
        ...x
    })
})

export default RegionDb;