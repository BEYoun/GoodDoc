import CabinetsService from "#root/adapters/CabinetsService";

const getSpecialities = async () => {
  return await CabinetsService.specialities();
};

export default getSpecialities;