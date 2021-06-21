import accessEnv from "#root/helpers/accessEnv";
import got from "got";

const CABINETS_SERVICE_URI = accessEnv("CABINETS_SERVICE_URI");

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


export default class CabinetsService {
    static async createCabinet({ name, address, phone }: { name: string; address: string; phone: string }) {
      const body = await got.post(`${CABINETS_SERVICE_URI}/cabinet`, { json: { name, address, phone } }).json();
      return <Cabinet>body;
    }
    static async createPatient(patient: PatientInput) {
      const body = await got.post(`${CABINETS_SERVICE_URI}/patient`, { json: { ...patient } }).json();
      return <Patient>body;
    }
    static async getAllPatient() {
      const body = await got.get(`${CABINETS_SERVICE_URI}/patients`).json();
      return <Patient[]>body;
    }
    static async createProfile({ username, cabinetId }: { cabinetId: string; username: string; }) {
      const body = await got.post(`${CABINETS_SERVICE_URI}/profile`, { json: { cabinetId, username} }).json();
      return <Profile>body;
    }
    static async allCabinet(): Promise<Cabinet[] | null> {
      const body = await got.get(`${CABINETS_SERVICE_URI}/cabinets`).json();
      return <Cabinet[]>body;
    }
    static async cabinetById({ cabinetId }: { cabinetId: string }): Promise<Cabinet | null> {
      const body = await got.get(`${CABINETS_SERVICE_URI}/cabinet/${cabinetId}`).json();
      return <Cabinet>body;
    }
    static async patientById({ patientId }: { patientId: string }): Promise<Cabinet | null> {
      const body = await got.get(`${CABINETS_SERVICE_URI}/patient/${patientId}`).json();
      return <Cabinet>body;
    }
}
