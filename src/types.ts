import User from "./User.ts";

export type boolOrUndefOrVoid = boolean | undefined | void;
export type PasswordStrength = keyof typeof User.passwordStrength;
