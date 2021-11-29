import { Parsing } from "./Compatible_4.1/Parsing";
import { NameRoleValue } from "./Compatible_4.1/NameRoleValue";

export const Robust = () => {
  return (
    <>
      <Parsing /> {/*4.1.1"*/}
      <NameRoleValue /> {/*4.1.2*/}
    </>
  );
};
