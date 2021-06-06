import CabinetsService from "#root/adapters/CabinetsService";

const getAllPatient = async () => {
  return await CabinetsService.getAllPatient();
};

export default getAllPatient;