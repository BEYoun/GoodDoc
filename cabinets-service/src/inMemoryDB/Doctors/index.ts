import generateUUID from '#root/helpers/generateUUID';
import { createDatabase } from '../common';
import SpecialityDb, { Speciality } from '../Specialities';
import CityDB, { City } from '../Cities';
import data from './doctors.json'

export interface Doctors {
    id: number;
    lastName: string;
    firstName: string;
    adresse: string;
    numberPhone: string;
    speciality: Speciality;
    ville: City;
    email: string;

}

const DoctorsDb = createDatabase<Doctors>();
const doctorsDb = DoctorsDb.instance;
data.forEach((x) => {
    doctorsDb.set({
        ...x,
        speciality: SpecialityDb.instance.get(x.speciality)!,
        ville: CityDB.instance.get(x.ville)!
    })
})

export default DoctorsDb;

