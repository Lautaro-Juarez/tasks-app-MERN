import * as bcrypt from 'bcrypt';

export const encodePassword = (rowPassword: string) => {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(rowPassword, SALT);
};

export const comparePassword = (rowPasword:string, hash: string) => {
    return bcrypt.compareSync(rowPasword, hash)
}