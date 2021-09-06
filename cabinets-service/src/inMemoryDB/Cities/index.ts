import generateUUID from "#root/helpers/generateUUID";
import { createDatabase } from "../common";
import RegionDb, { Region } from "../Regions";
import data from './cities.json'

export interface City {
    id: number;
    name: string;
    region_id: Region;
}

const CityDB = createDatabase<City>();
const cityDB = CityDB.instance;
data.forEach((x) => {
    cityDB.set({
        ...x,
        region_id: RegionDb.instance.get(x.region_id)!
    })
})

export default CityDB;