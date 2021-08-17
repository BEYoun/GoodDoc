import CabinetsService from "#root/adapters/CabinetsService";

const getDoctors = async () => {
  return await CabinetsService.doctors();
};

export default getDoctors;