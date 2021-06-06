import CabinetsService, { PatientInput } from "#root/adapters/CabinetsService";
import { ResolverContext } from "#root/graphql/types";


const createPatient = async (obj: any, patient: PatientInput, context: ResolverContext) => {
    if (!context.res.locals.userSession) throw new Error("Not logged in!");
    return await CabinetsService.createPatient({ ...patient });
};

export default createPatient;
