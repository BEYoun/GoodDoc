import getConnection from "#root/db/connection";
import Cabinet from "#root/db/entities/Cabinet";
import Profile from "#root/db/entities/Profile";
import generateUUID from "#root/helpers/generateUUID";
import { Express } from "express";
import { getRepository } from "typeorm";


const setupRoutes = (app: Express) => {
  const connection = getConnection();
  const cabinetRepository = getRepository(Cabinet);
  const profileRepository = getRepository(Profile);
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
};

export default setupRoutes;
