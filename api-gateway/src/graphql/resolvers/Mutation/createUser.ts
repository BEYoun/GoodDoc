import UsersService from "#root/adapters/UsersService";

interface Args {
  password: string;
  username: string;
  role: string;
}

const createUserResolver = async (obj: any, { password, username, role }: Args) => {
  return await UsersService.createUser({ password, username, role });
};

export default createUserResolver;
