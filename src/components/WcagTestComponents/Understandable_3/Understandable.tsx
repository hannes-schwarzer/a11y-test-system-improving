import { OnFocus } from "./Predictable_3.2/OnFocus";
import { OnInput } from "./Predictable_3.2/OnInput";
import { ConsistentIdentification } from "./Predictable_3.2/ConsistentIdentification";
import { LangOfParts } from "./Readable_3.1/LangOfParts";
import { LangOfPage } from "./Readable_3.1/LangOfPage";

export const Understandable = () => {
  return (
    <>
      <LangOfPage /> {/*3.1.1*/}
      <LangOfParts /> {/*3.1.2*/}
      <OnFocus /> {/*3.2.1*/}
      <OnInput /> {/*3.2.2*/}
      <ConsistentIdentification /> {/*3.2.4*/}
    </>
  );
};
