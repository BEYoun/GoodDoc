import CabinetsService from "#root/adapters/CabinetsService";
import { ResolverContext } from "#root/graphql/types";

interface Args {
  name: string;
  phone: string;
  address: string;
}

const createCabinet = async (obj: any, { name, phone, address }: Args, context: ResolverContext) => {
    if (!context.res.locals.userSession) throw new Error("Not logged in!");
  return await CabinetsService.createCabinet({ name, address, phone });
};

export default createCabinet;
