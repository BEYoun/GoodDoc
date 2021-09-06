import UsersService from "#root/adapters/UsersService";
import CabinetsService from "#root/adapters/CabinetsService";

interface Args {
  password: string;
  email: string;
  role: string;
  cabinetId: string;
}

const createUserClient = async (obj: any, { password, email, role, cabinetId }: Args) => {
  const user = await UsersService.createUser({ password, email, role });
  const profile = await CabinetsService.createProfile({ email: user.email, cabinetId });
  return profile;
};

export default createUserClient;
