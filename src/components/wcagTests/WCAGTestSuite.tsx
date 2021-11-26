import { NonTextContent } from "./TextAlternatives_1.1/NonTextContent";
import { AudioVideoOnly } from "./TimeBasedMedia_1.2/AudioVideoOnly";
import { InfoAndRelationship } from "./Adaptable_1.3/InfoAndRelationship";
import { MeaningfulSequence } from "./Adaptable_1.3/MeaningfulSequence";
import { UseOfColor } from "./Distinguishable_1.4/UseOfColor";
import { AudioControl } from "./Distinguishable_1.4/AudioControl";

export const WCAGTestSuite = () => {
  return (
    <>
      <header id={"globalHeader"}>WCAG TEST SUITE</header>
      <main id={"main"}>
        <NonTextContent /> {/*1.1.1*/}
        <AudioVideoOnly /> {/*1.2.1*/}
        <InfoAndRelationship /> {/*1.3.1*/}
        <MeaningfulSequence /> {/*1.3.2*/}
        <UseOfColor /> {/*1.4.1*/}
        <AudioControl /> {/*1.4.2*/}
      </main>
    </>
  );
};
