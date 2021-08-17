import { createDatabase } from "../common";
import data from './specialities.json'

export interface Speciality {
    id: string;
    name: string;
}

const SpecialityDb = createDatabase<Speciality>();
const specialityDb = SpecialityDb.instance;
data.forEach((x) => {
    specialityDb.set({
        ...x
    })
})

export default SpecialityDb;