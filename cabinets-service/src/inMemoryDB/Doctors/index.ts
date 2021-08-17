import generateUUID from '#root/helpers/generateUUID';
import { createDatabase } from '../common';
import SpecialityDb from '../Specialities';
import data from './doctorsDB.json'

export interface Doctors {
    id: string;
    lastName: string;
    firstName: string;
    adresse: string;
    numberPhone: string;
    speciality: string;
}

const DoctorsDb = createDatabase<Doctors>();
const doctorsDb = DoctorsDb.instance;
data.forEach((x) => {
    doctorsDb.set({
        ...x,
        speciality: SpecialityDb.instance.get(x.speciality)?.name!,
        id: generateUUID()
    })
})

export default DoctorsDb;

