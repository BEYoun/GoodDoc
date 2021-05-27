import UsersService from "#root/adapters/UsersService";
import CabinetsService from "#root/adapters/CabinetsService";

interface Args {
  password: string;
  username: string;
  role: string;
  cabinetId: string;
}

const createUserClient = async (obj: any, { password, username, role, cabinetId }: Args) => {
  const user = await UsersService.createUser({ password, username, role });
  const profile = await CabinetsService.createProfile({ username: user.username, cabinetId });
  return profile;
};

export default createUserClient;
