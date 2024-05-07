import { IEncrypter } from "../presenters/interfaces/encrypter";
import bcrypt from "bcrypt";
export class EncrypterAdapter implements IEncrypter {
  constructor(readonly salt: number = 12) {}
  async encrypt(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash;
  }
}
