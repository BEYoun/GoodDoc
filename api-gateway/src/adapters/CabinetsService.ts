import accessEnv from "#root/helpers/accessEnv";
import got from "got";
import { Cabinet, Doctors, Patient, PatientInput, Profile } from "./types/Cabinets";

const CABINETS_SERVICE_URI = accessEnv("CABINETS_SERVICE_URI");



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
  static async createProfile({ email, cabinetId }: { cabinetId: string; email: string; }) {
    const body = await got.post(`${CABINETS_SERVICE_URI}/profile`, { json: { cabinetId, email} }).json();
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
  
  // filter doctor front
  static async doctors() {
    const body = await got.get(`${CABINETS_SERVICE_URI}/inMemoryDoctors`).json();
    return <Doctors[]>body;
  }
    
}
