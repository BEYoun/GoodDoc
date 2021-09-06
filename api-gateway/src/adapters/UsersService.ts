import accessEnv from "#root/helpers/accessEnv";
import got from "got";

const USERS_SERVICE_URI = accessEnv("USERS_SERVICE_URI");

export interface User {
  createdAt: string;
  id: string;
  email: string;
}

export interface UserSession {
  createdAt: string;
  expiresAt: string;
  id: string;
  userId: string;
}

export default class UsersService {
  static async createUser({ password, email, role }: { password: string; email: string; role: string }): Promise<User> {
    const body = await got.post(`${USERS_SERVICE_URI}/users`, { json: { password, email, role } }).json();
    return <User>body;
  }

  static async createUserSession({ password, email }: { password: string; email: string }) {
    const body = <UserSession>await got.post(`${USERS_SERVICE_URI}/sessions`, { json: { password, email } }).json();
    return body;
  }

  static async deleteUserSession({ sessionId }: { sessionId: string }) {
    const body = await got.delete(`${USERS_SERVICE_URI}/sessions/${sessionId}`).json();
    return body;
  }

  static async fetchUser({ userId }: { userId: string }): Promise<User | null> {
    const body = await got.get(`${USERS_SERVICE_URI}/users/${userId}`).json();
    if (!body) return null;
    return <User>body;
  }

  static async fetchUserSession({ sessionId }: { sessionId: string }): Promise<UserSession | null> {
    let body = undefined;
    try {
      body = await got.get(`${USERS_SERVICE_URI}/sessions/${sessionId}`).json();
    } catch {
      return null
    }
    return <UserSession>body;
  }
}
