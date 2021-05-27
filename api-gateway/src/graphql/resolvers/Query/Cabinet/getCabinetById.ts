import CabinetsService from "#root/adapters/CabinetsService";
import { ResolverContext } from "#root/graphql/types";

interface Args {
  cabinetId: string;
}

const getCabinetByIdResolver = async (obj: any, { cabinetId }: Args, context: ResolverContext) => {
  return CabinetsService.cabinetById({ cabinetId });
};

export default getCabinetByIdResolver;
