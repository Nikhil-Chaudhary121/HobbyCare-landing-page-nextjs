import { atom } from "recoil";

const authScreenAtom = atom({
  key: "authScreenAtom",
  default: "sign",
});

export default authScreenAtom;
