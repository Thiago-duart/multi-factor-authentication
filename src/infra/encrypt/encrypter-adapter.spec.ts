import { EncrypterAdapter } from "./encrypter-adapter";
import bcrypt from "bcrypt";
describe("Encrypter", () => {
  function makeSut() {
    const sut = new EncrypterAdapter();
    return sut;
  }
  test("must call Encrypter with data from the password corretly", async () => {
    const sut = makeSut();
    const bcryptSpy = jest.spyOn(bcrypt, "hash");
    const password = "valid-password";
    await sut.encrypt(password);
    expect(bcryptSpy).toHaveBeenCalledWith(password, 12);
  });
});
