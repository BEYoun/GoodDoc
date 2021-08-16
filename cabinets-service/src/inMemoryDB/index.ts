import {createDatabase, Doctors} from './Doctors'

const DoctorsDb = createDatabase<Doctors>();
DoctorsDb.instance.set({
    id: "1",
    firstName: "daz",
    lastName: "dzad",
    Adresse: "dazzda",
    numberPhone: "dazdaz"
});
DoctorsDb.instance.set({
    id: "2",
    firstName: "daz",
    lastName: "dzad",
    Adresse: "dazzda",
    numberPhone: "dazdaz"
});

export default DoctorsDb;