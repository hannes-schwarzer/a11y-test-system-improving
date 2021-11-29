import { Perceivable } from "./Perceivable_1/Perceivable";
import { Operable } from "./Operable_2/Operable";
import { Robust } from "./Robust_4/Robust";
import { Understandable } from "./Understandable_3/Understandable";

export const WCAGTestSuite = () => {
  return (
    <>
      <header id={"globalHeader"}>WCAG TEST SUITE</header>
      <main id={"main"}>
        <Perceivable /> {/*1*/}
        <Operable /> {/*2*/}
        <Understandable /> {/*3*/}
        <Robust /> {/*4*/}
      </main>
    </>
  );
};
