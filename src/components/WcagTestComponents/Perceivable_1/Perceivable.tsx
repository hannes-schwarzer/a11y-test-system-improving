import { NonTextContent } from "./TextAlternatives_1.1/NonTextContent";
import { AudioVideoOnly } from "./TimeBasedMedia_1.2/AudioVideoOnly";
import { InfoAndRelationship } from "./Adaptable_1.3/InfoAndRelationship";
import { MeaningfulSequence } from "./Adaptable_1.3/MeaningfulSequence";
import { UseOfColor } from "./Distinguishable_1.4/UseOfColor";
import { AudioControl } from "./Distinguishable_1.4/AudioControl";
import { ContrastMinimum } from "./Distinguishable_1.4/ContrastMinimum";
import { Resize } from "./Distinguishable_1.4/Resize";
import { ContrastEnhanced } from "./Distinguishable_1.4/ContrastEnhanced";
import { VisualPresentation } from "./Distinguishable_1.4/VisualPresentation";
import { Reflow } from "./Distinguishable_1.4/Reflow";
import { NonTextContrast } from "./Distinguishable_1.4/NonTextContrast";
import { TextSpacing } from "./Distinguishable_1.4/TextSpacing";
import { MediaAlternativePrerecorded } from "./TimeBasedMedia_1.2/MediaAlternativePrerecorded";

export const Perceivable = () => {
  return (
    <>
      <NonTextContent /> {/*1.1.1*/}
      <AudioVideoOnly /> {/*1.2.1*/}
      <MediaAlternativePrerecorded /> {/*1.2.8*/}
      <InfoAndRelationship /> {/*1.3.1*/}
      <MeaningfulSequence /> {/*1.3.2*/}
      <UseOfColor /> {/*1.4.1*/}
      <AudioControl /> {/*1.4.2*/}
      <ContrastMinimum /> {/*1.4.3*/}
      <Resize /> {/*1.4.4*/}
      <ContrastEnhanced /> {/*1.4.6*/}
      <VisualPresentation /> {/*1.4.8*/}
      <Reflow /> {/*1.4.10*/}
      <NonTextContrast /> {/*1.4.11*/}
      <TextSpacing /> {/*1.4.12*/}
    </>
  );
};
