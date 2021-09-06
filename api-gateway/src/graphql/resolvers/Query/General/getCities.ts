import CabinetsService from "#root/adapters/CabinetsService";

const getCities = async () => {
  return await CabinetsService.cities();
};

export default getCities;