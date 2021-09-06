import getConnection from "#root/db/connection";
import Cabinet from "#root/db/entities/Cabinet";
import Patient from "#root/db/entities/Patients";
import Profile from "#root/db/entities/Profile";
import generateUUID from "#root/helpers/generateUUID";
import DoctorsDb from "#root/inMemoryDB";
import CityDB from "#root/inMemoryDB/Cities";
import SpecialityDb from "#root/inMemoryDB/Specialities";
import { Express } from "express";
import { getRepository } from "typeorm";


const setupRoutes = (app: Express) => {
  const connection = getConnection();
  const cabinetRepository = getRepository(Cabinet);
  const profileRepository = getRepository(Profile);
  const patientRepository = getRepository(Patient);

  const dotorsInMemoRepo = DoctorsDb.instance;
  const cytiesInMemoRepo = CityDB.instance;
  const specialitiesInMemoRepo = SpecialityDb.instance;
  app.post("/cabinet", async (req, res, next) => {
    if (!req.body.name) {
      return next(new Error("Invalid body!"));
    }

    try {
      const newCabinet = {
        id: generateUUID(),
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address
      };

      await connection.createQueryBuilder().insert().into(Cabinet).values([newCabinet]).execute();

      return res.json(newCabinet);
    } catch (err) {
      return next(err);
    }
  });
  app.post("/profile", async (req, res, next) => {
    if (!req.body.username && !req.body.cabinetId) {
      return next(new Error("Invalid body!"));
    }

    try {
      const profile = new Profile()
      profile.id = generateUUID()
      profile.username = req.body.username
      const cabinet = await cabinetRepository.findOne(req.body.cabinetId)
      if (!cabinet) {
        return next(new Error("cabinet invalid!"));
      }
      profile.cabinet = cabinet
      profileRepository.save(profile)
      return res.json(profile);
    } catch (err) {
      return next(err);
    }
  });
  app.get("/cabinets", async (req, res, next) => {
    try {
      const user = await cabinetRepository.find();

      if (!user) return next(new Error("Invalid user ID!"));

      return res.json(user);
    } catch (err) {
      return next(err);
    }
  });
  app.get("/cabinet/:userId", async (req, res, next) => {
    try {
      const user = await cabinetRepository.findOne(req.params.userId);

      if (!user) return next(new Error("Invalid user ID!"));

      return res.json(user);
    } catch (err) {
      return next(err);
    }
  });
  app.post("/patient", async (req, res, next) => {
    if (!req.body.cin) {
      return next(new Error("no cin in body!!"));
    }

    try {
      const newPatient = {
        id: generateUUID(),
        ...req.body
      };

      await connection.createQueryBuilder().insert().into(Patient).values([newPatient]).execute();

      return res.json(newPatient);
    } catch (err) {
      return next(err);
    }
  });
  app.get("/patients", async (req, res, next) => {
    try {
      const patients = await patientRepository.find();

      if (!patients) return next(new Error("Invalid patients ID!"));

      return res.json(patients);
    } catch (err) {
      return next(err);
    }
  });
  app.get("/patient/:patientId", async (req, res, next) => {
    try {
      const patient = await patientRepository.findOne(req.params.patientId);

      if (!patient) return next(new Error("Invalid patients ID!"));

      return res.json(patient);
    } catch (err) {
      return next(err);
    }
  });
  app.get('/inMemoryDoctors', async (req, res, next) => {
    const doctors = dotorsInMemoRepo.getAll();
    const response = {
      doctors: doctors.slice(0,9),
      nbrPages: 10,
      page: 1
    }
    return res.json(response);
  })
  app.get('/inMemoryCities', async (req, res, next) => {
    const cyties = cytiesInMemoRepo.getAll();
    return res.json(cyties);
  })
  app.get('/inMemorySpecialities', async (req, res, next) => {
    const specialities = specialitiesInMemoRepo.getAll();
    return res.json(specialities);
  })
};

export default setupRoutes;
