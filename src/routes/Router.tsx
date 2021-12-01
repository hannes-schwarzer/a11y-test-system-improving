import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inappropriate } from "../components/WcagTestCases/2_Operable/2.4_Navigable/Inappropriate";
import { Empty } from "../components/WcagTestCases/2_Operable/2.4_Navigable/Empty";
import { Missing } from "../components/WcagTestCases/2_Operable/2.4_Navigable/Missing";
import { MissingHOne } from "../components/WcagTestCases/DemoPages/MissingHOne";
import { KeyboardTrap } from "../components/WcagTestCases/2_Operable/2.1_KeyboardAccessible/KeyboardTrap";
import { DemoPage } from "../components/WcagTestCases/DemoPages/DemoPage";
import { Homepage } from "./Homepage/Homepage";
import { Misc } from "./Misc/Misc";
import { NonTextContent } from "../components/WcagTestCases/1_Perceivable/1.1_TextAlternatives/NonTextContent";
import { AudioOnlyVideoOnlyPrerecorded } from "../components/WcagTestCases/1_Perceivable/1.2_TimeBasedMedia/AudioOnlyVideoOnlyPrerecorded";
import { MediaAlternativePrerecorded } from "../components/WcagTestCases/1_Perceivable/1.2_TimeBasedMedia/MediaAlternativePrerecorded";
import { InfoAndRelationships } from "../components/WcagTestCases/1_Perceivable/1.3_Adaptable/InfoAndRelationships";
import { MeaningfulSequence } from "../components/WcagTestCases/1_Perceivable/1.3_Adaptable/MeaningfulSequence";
import { UseOfColor } from "../components/WcagTestCases/1_Perceivable/1.4_Distinguishable/UseOfColor";
import { AudioControl } from "../components/WcagTestCases/1_Perceivable/1.4_Distinguishable/AudioControl";
import { ContrastMinimum } from "../components/WcagTestCases/1_Perceivable/1.4_Distinguishable/ContrastMinimum";
import { ResizeText } from "../components/WcagTestCases/1_Perceivable/1.4_Distinguishable/ResizeText";
import { ContrastEnhanced } from "../components/WcagTestCases/1_Perceivable/1.4_Distinguishable/ContrastEnhanced";
import { VisualPresentation } from "../components/WcagTestCases/1_Perceivable/1.4_Distinguishable/VisualPresentation";
import { Reflow } from "../components/WcagTestCases/1_Perceivable/1.4_Distinguishable/Reflow";
import { NonTextContrast } from "../components/WcagTestCases/1_Perceivable/1.4_Distinguishable/NonTextContrast";
import { TextSpacing } from "../components/WcagTestCases/1_Perceivable/1.4_Distinguishable/TextSpacing";
import { ContentOnHoverOrFocus } from "../components/WcagTestCases/1_Perceivable/1.4_Distinguishable/ContentOnHoverOrFocus";
import { Keyboard } from "../components/WcagTestCases/2_Operable/2.1_KeyboardAccessible/Keyboard";
import { NoKeyboardTrap } from "../components/WcagTestCases/2_Operable/2.1_KeyboardAccessible/NoKeyboardTrap";
import { CharacterKeyShortcuts } from "../components/WcagTestCases/2_Operable/2.1_KeyboardAccessible/CharacterKeyShortcuts";
import { TimingAdjustable } from "../components/WcagTestCases/2_Operable/2.2_EnoughTime/TimingAdjustable";
import { PauseStopHide } from "../components/WcagTestCases/2_Operable/2.2_EnoughTime/PauseStopHide";
import { Interruptions } from "../components/WcagTestCases/2_Operable/2.2_EnoughTime/Interruptions";
import { ThreeFlashesOrBelowThroshold } from "../components/WcagTestCases/2_Operable/2.3_SeizuresAndPhysical/ThreeFlashesOrBelowThroshold";
import { BypassBlocks } from "../components/WcagTestCases/2_Operable/2.4_Navigable/BypassBlocks";
import { PageTitled } from "../components/WcagTestCases/2_Operable/2.4_Navigable/PageTitled";
import { FocusOrder } from "../components/WcagTestCases/2_Operable/2.4_Navigable/FocusOrder";
import { LinkPurposeInContext } from "../components/WcagTestCases/2_Operable/2.4_Navigable/LinkPurposeInContext";
import { HeadingsAndLabels } from "../components/WcagTestCases/2_Operable/2.4_Navigable/HeadingsAndLabels";
import { FocusVisible } from "../components/WcagTestCases/2_Operable/2.4_Navigable/FocusVisible";
import { LinkPurposeLinkOnly } from "../components/WcagTestCases/2_Operable/2.4_Navigable/LinkPurposeLinkOnly";
import { LabelInName } from "../components/WcagTestCases/2_Operable/2.5_InputModalities/LabelInName";
import { TargetSize } from "../components/WcagTestCases/2_Operable/2.5_InputModalities/TargetSize";
import { LangOfParts } from "../components/WcagTestCases/3_Understandable/3.1_Readable/LangOfParts";
import { LangOfPage } from "../components/WcagTestCases/3_Understandable/3.1_Readable/LangOfPage";
import { ReadingLevel } from "../components/WcagTestCases/3_Understandable/3.1_Readable/ReadingLevel";
import { OnFocus } from "../components/WcagTestCases/3_Understandable/3.2_Predictable/OnFocus";
import { OnInput } from "../components/WcagTestCases/3_Understandable/3.2_Predictable/OnInput";
import { ConsistentNavigation } from "../components/WcagTestCases/3_Understandable/3.2_Predictable/ConsistentNavigation";
import { ConsistentIdentification } from "../components/WcagTestCases/3_Understandable/3.2_Predictable/ConsistentIdentification";
import { ChangeOnRequest } from "../components/WcagTestCases/3_Understandable/3.2_Predictable/ChangeOnRequest";
import { ErrorIdentification } from "../components/WcagTestCases/3_Understandable/3.3_InputAssistance/ErrorIdentification";
import { LabelsOrInstructions } from "../components/WcagTestCases/3_Understandable/3.3_InputAssistance/LabelsOrInstructions";
import { ErrorSuggestions } from "../components/WcagTestCases/3_Understandable/3.3_InputAssistance/ErrorSuggestions";
import { Parsing } from "../components/WcagTestCases/4_Robust/Compatible_4.1/Parsing";
import { NameRoleValue } from "../components/WcagTestCases/4_Robust/Compatible_4.1/NameRoleValue";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Homepage*/}
        <Route
          path={"/"}
          element={<Homepage pageTitle={"A11Y TEST SYSTEM"} />}
        />
        {/*Perceivable*/}
        <Route
          path={"/wcag/non-text-content"}
          element={<NonTextContent pageTitle={"1.1.1 Non-text Content"} />}
        />
        <Route
          path={"/wcag/audio-only-and-video-only-prerecorded"}
          element={<AudioOnlyVideoOnlyPrerecorded />}
        />
        <Route
          path={"/wcag/info-and-relationships"}
          element={<InfoAndRelationships />}
        />
        <Route
          path={"/wcag/media-alternative-prerecorded"}
          element={<MediaAlternativePrerecorded />}
        />
        <Route
          path={"/wcag/meaningful-sequence"}
          element={<MeaningfulSequence />}
        />
        <Route path={"/wcag/use-of-color"} element={<UseOfColor />} />
        <Route path={"/wcag/audio-control"} element={<AudioControl />} />
        <Route path={"/wcag/contrast-minimum"} element={<ContrastMinimum />} />
        <Route path={"/wcag/resize-text"} element={<ResizeText />} />
        <Route
          path={"/wcag/contrast-enhanced"}
          element={<ContrastEnhanced />}
        />
        <Route
          path={"/wcag/visual-presentation"}
          element={<VisualPresentation />}
        />
        <Route path={"/wcag/reflow"} element={<Reflow />} />
        <Route path={"/wcag/non-text-contrast"} element={<NonTextContrast />} />
        <Route path={"/wcag/text-spacing"} element={<TextSpacing />} />
        <Route
          path={"/wcag/content-on-hover-or-focus"}
          element={<ContentOnHoverOrFocus />}
        />
        {/*Operable*/}
        <Route path={"/wcag/keyboard"} element={<Keyboard />} />
        <Route path={"/wcag/no-keyboard-trap"} element={<NoKeyboardTrap />} />
        <Route
          path={"/wcag/character-key-shortcuts"}
          element={<CharacterKeyShortcuts />}
        />
        <Route
          path={"/wcag/timing-adjustable"}
          element={<TimingAdjustable />}
        />
        <Route path={"/wcag/pause-stop-hide"} element={<PauseStopHide />} />
        <Route path={"/wcag/interruptions"} element={<Interruptions />} />
        <Route
          path={"/wcag/three-flashes-or-below-threshold"}
          element={<ThreeFlashesOrBelowThroshold />}
        />
        <Route path={"/wcag/bypass-blocks"} element={<BypassBlocks />} />
        <Route path={"/wcag/page-titled"} element={<PageTitled />} />
        <Route path={"/wcag/focus-order"} element={<FocusOrder />} />
        <Route
          path={"/wcag/link-purpose-in-context"}
          element={<LinkPurposeInContext />}
        />
        <Route
          path={"/wcag/headings-and-labels"}
          element={<HeadingsAndLabels />}
        />
        <Route path={"/wcag/focus-visible"} element={<FocusVisible />} />
        <Route
          path={"/wcag/link-purpose-link-only"}
          element={<LinkPurposeLinkOnly />}
        />
        <Route path={"/wcag/label-in-name"} element={<LabelInName />} />
        <Route path={"/wcag/target-size"} element={<TargetSize />} />
        {/*Understandable*/}
        <Route path={"/wcag/language-of-page"} element={<LangOfPage />} />
        <Route path={"/wcag/language-of-parts"} element={<LangOfParts />} />
        <Route path={"/wcag/reading-level"} element={<ReadingLevel />} />
        <Route path={"/wcag/on-focus"} element={<OnFocus />} />
        <Route path={"/wcag/on-input"} element={<OnInput />} />
        <Route
          path={"/wcag/consistent-navigation"}
          element={<ConsistentNavigation />}
        />
        <Route
          path={"/wcag/consistent-identification"}
          element={<ConsistentIdentification />}
        />
        <Route path={"/wcag/change-on-request"} element={<ChangeOnRequest />} />
        <Route
          path={"/wcag/error-identification"}
          element={<ErrorIdentification />}
        />
        <Route
          path={"/wcag/labels-or-instructions"}
          element={<LabelsOrInstructions />}
        />
        <Route path={"/wcag/error-suggestion"} element={<ErrorSuggestions />} />
        {/*Robust*/}
        <Route path={"/wcag/parsing"} element={<Parsing />} />
        <Route path={"/wcag/name-role-value"} element={<NameRoleValue />} />
        {/*Misc & Detail pages*/}
        <Route path={"/page-title/inappropriate"} element={<Inappropriate />} />
        <Route path={"/page-title/empty"} element={<Empty />} />
        <Route path={"/page-title/missing"} element={<Missing />} />
        <Route path={"/headings/missingh1"} element={<MissingHOne />} />
        <Route path={"/keyboard/trap"} element={<KeyboardTrap />} />
        <Route path={"/demo-page"} element={<DemoPage />} />
        <Route path={"/misc"} element={<Misc />} />
      </Routes>
    </BrowserRouter>
  );
};
