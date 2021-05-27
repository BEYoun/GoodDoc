import CabinetsService from "#root/adapters/CabinetsService";

const listingsResolver = async () => {
  return await CabinetsService.allCabinet();
};

export default listingsResolver;