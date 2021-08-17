export interface Cabinet {
    createdAt: string;
    name: string;
    address: string;
    phone: string;
    id: string;
}
export interface Patient {
    createdAt: string;
    name: string;
    address: string;
    phone: string;
    id: string;
}

export interface PatientInput {
    cin: string;
    sex: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    zipCode: number;
    assurance: string;
    birthday: string;
    profession: string;
    country: string;
    numberPhone: string;
}
export interface Profile {
    createdAt: string;
    username: string;
    cabinet: Cabinet;
    id: string;
}

export interface Doctors {
    id: string;
    lastName: string;
    firstName: string;
    adresse: string;
    numberPhone: string;
    speciality: string;
}
