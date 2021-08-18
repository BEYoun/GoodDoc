import UsersService from "#root/adapters/UsersService";
import { ResolverContext } from "#root/graphql/types";

interface Args {
  password: string;
  username: string;
}

const createUserSessionResolver = async (obj: any, { password, username }: Args, context: ResolverContext) => {
  const userSession = await UsersService.createUserSession({ password, username });

  context.res.cookie("userSessionId", userSession.id, { httpOnly: true });
  // context.res.cookie("userSessionId", userSession.id, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 365 * 10, sameSite: "lax", secure: true, domain: ".goodoc.co" });

  return userSession;
};

export default createUserSessionResolver;
