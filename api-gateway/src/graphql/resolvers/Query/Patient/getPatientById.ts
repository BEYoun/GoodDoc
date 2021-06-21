import CabinetsService from "#root/adapters/CabinetsService";
import { ResolverContext } from "#root/graphql/types";

interface Args {
  patientId: string;
}

const getPatientByIdResolver = async (obj: any, { patientId }: Args, context: ResolverContext) => {
  return CabinetsService.patientById({ patientId });
};

export default getPatientByIdResolver;
