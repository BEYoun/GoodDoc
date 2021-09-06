import UsersService from "#root/adapters/UsersService";

interface Args {
  password: string;
  email: string;
  role: string;
}

const createUserResolver = async (obj: any, { password, email, role }: Args) => {
  return await UsersService.createUser({ password, email, role });
};

export default createUserResolver;
