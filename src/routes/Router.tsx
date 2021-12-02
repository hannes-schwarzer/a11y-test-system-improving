import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inappropriate } from "./WcagTestCases/DetailPages/Inappropriate";
import { Empty } from "./WcagTestCases/DetailPages/Empty";
import { Missing } from "./WcagTestCases/DetailPages/Missing";
import { MissingHOne } from "./WcagTestCases/DetailPages/MissingHOne";
import { KeyboardTrap } from "./WcagTestCases/DetailPages/KeyboardTrap";
import { DemoPage } from "./WcagTestCases/DetailPages/DemoPage";
import { Homepage } from "./Homepage/Homepage";
import { Misc } from "./Misc/Misc";
import { NonTextContent } from "./WcagTestCases/1_Perceivable/1.1_TextAlternatives/NonTextContent";
import { AudioOnlyVideoOnlyPrerecorded } from "./WcagTestCases/1_Perceivable/1.2_TimeBasedMedia/AudioOnlyVideoOnlyPrerecorded";
import { MediaAlternativePrerecorded } from "./WcagTestCases/1_Perceivable/1.2_TimeBasedMedia/MediaAlternativePrerecorded";
import { InfoAndRelationships } from "./WcagTestCases/1_Perceivable/1.3_Adaptable/InfoAndRelationships";
import { MeaningfulSequence } from "./WcagTestCases/1_Perceivable/1.3_Adaptable/MeaningfulSequence";
import { UseOfColor } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/UseOfColor";
import { AudioControl } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/AudioControl";
import { ContrastMinimum } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/ContrastMinimum";
import { ResizeText } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/ResizeText";
import { ContrastEnhanced } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/ContrastEnhanced";
import { VisualPresentation } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/VisualPresentation";
import { Reflow } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/Reflow";
import { NonTextContrast } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/NonTextContrast";
import { TextSpacing } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/TextSpacing";
import { ContentOnHoverOrFocus } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/ContentOnHoverOrFocus";
import { Keyboard } from "./WcagTestCases/2_Operable/2.1_KeyboardAccessible/Keyboard";
import { NoKeyboardTrap } from "./WcagTestCases/2_Operable/2.1_KeyboardAccessible/NoKeyboardTrap";
import { CharacterKeyShortcuts } from "./WcagTestCases/2_Operable/2.1_KeyboardAccessible/CharacterKeyShortcuts";
import { TimingAdjustable } from "./WcagTestCases/2_Operable/2.2_EnoughTime/TimingAdjustable";
import { PauseStopHide } from "./WcagTestCases/2_Operable/2.2_EnoughTime/PauseStopHide";
import { Interruptions } from "./WcagTestCases/2_Operable/2.2_EnoughTime/Interruptions";
import { ThreeFlashesOrBelowThroshold } from "./WcagTestCases/2_Operable/2.3_SeizuresAndPhysical/ThreeFlashesOrBelowThroshold";
import { BypassBlocks } from "./WcagTestCases/2_Operable/2.4_Navigable/BypassBlocks";
import { PageTitled } from "./WcagTestCases/2_Operable/2.4_Navigable/PageTitled";
import { FocusOrder } from "./WcagTestCases/2_Operable/2.4_Navigable/FocusOrder";
import { LinkPurposeInContext } from "./WcagTestCases/2_Operable/2.4_Navigable/LinkPurposeInContext";
import { HeadingsAndLabels } from "./WcagTestCases/2_Operable/2.4_Navigable/HeadingsAndLabels";
import { FocusVisible } from "./WcagTestCases/2_Operable/2.4_Navigable/FocusVisible";
import { LinkPurposeLinkOnly } from "./WcagTestCases/2_Operable/2.4_Navigable/LinkPurposeLinkOnly";
import { LabelInName } from "./WcagTestCases/2_Operable/2.5_InputModalities/LabelInName";
import { TargetSize } from "./WcagTestCases/2_Operable/2.5_InputModalities/TargetSize";
import { LangOfParts } from "./WcagTestCases/3_Understandable/3.1_Readable/LangOfParts";
import { LangOfPage } from "./WcagTestCases/3_Understandable/3.1_Readable/LangOfPage";
import { ReadingLevel } from "./WcagTestCases/3_Understandable/3.1_Readable/ReadingLevel";
import { OnFocus } from "./WcagTestCases/3_Understandable/3.2_Predictable/OnFocus";
import { OnInput } from "./WcagTestCases/3_Understandable/3.2_Predictable/OnInput";
import { ConsistentNavigation } from "./WcagTestCases/3_Understandable/3.2_Predictable/ConsistentNavigation";
import { ConsistentIdentification } from "./WcagTestCases/3_Understandable/3.2_Predictable/ConsistentIdentification";
import { ChangeOnRequest } from "./WcagTestCases/3_Understandable/3.2_Predictable/ChangeOnRequest";
import { ErrorIdentification } from "./WcagTestCases/3_Understandable/3.3_InputAssistance/ErrorIdentification";
import { LabelsOrInstructions } from "./WcagTestCases/3_Understandable/3.3_InputAssistance/LabelsOrInstructions";
import { ErrorSuggestions } from "./WcagTestCases/3_Understandable/3.3_InputAssistance/ErrorSuggestions";
import { Parsing } from "./WcagTestCases/4_Robust/Compatible_4.1/Parsing";
import { NameRoleValue } from "./WcagTestCases/4_Robust/Compatible_4.1/NameRoleValue";

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
          element={
            <AudioOnlyVideoOnlyPrerecorded
              pageTitle={"1.2.1 Audio-only and Video-only (Prerecorded)"}
            />
          }
        />
        <Route
          path={"/wcag/media-alternative-prerecorded"}
          element={
            <MediaAlternativePrerecorded
              pageTitle={"1.2.8 Media Alternative (Prerecorded)"}
            />
          }
        />
        <Route
          path={"/wcag/info-and-relationships"}
          element={
            <InfoAndRelationships pageTitle={"1.3.1 Info and Relationships"} />
          }
        />
        <Route
          path={"/wcag/meaningful-sequence"}
          element={
            <MeaningfulSequence pageTitle={"1.3.2 Meaningful Sequence"} />
          }
        />
        <Route
          path={"/wcag/use-of-color"}
          element={<UseOfColor pageTitle={"1.4.1 Use of Color"} />}
        />
        <Route
          path={"/wcag/audio-control"}
          element={<AudioControl pageTitle={"1.4.2 Audio Control"} />}
        />
        <Route
          path={"/wcag/contrast-minimum"}
          element={<ContrastMinimum pageTitle={"1.4.3 Contrast (Minimum)"} />}
        />
        <Route
          path={"/wcag/resize-text"}
          element={<ResizeText pageTitle={"1.4.4 ResizeText text"} />}
        />
        <Route
          path={"/wcag/contrast-enhanced"}
          element={<ContrastEnhanced pageTitle={"1.4.6 Contrast (Enhanced)"} />}
        />
        <Route
          path={"/wcag/visual-presentation"}
          element={
            <VisualPresentation pageTitle={"1.4.8 Visual Presentation"} />
          }
        />
        <Route
          path={"/wcag/reflow"}
          element={<Reflow pageTitle={"1.4.10 Reflow"} />}
        />
        <Route
          path={"/wcag/non-text-contrast"}
          element={<NonTextContrast pageTitle={"1.4.11 Non-text Contrast"} />}
        />
        <Route
          path={"/wcag/text-spacing"}
          element={<TextSpacing pageTitle={"1.4.12 Text Spacing"} />}
        />
        <Route
          path={"/wcag/content-on-hover-or-focus"}
          element={
            <ContentOnHoverOrFocus
              pageTitle={"1.4.13 Content on Hover or Focus"}
            />
          }
        />
        {/*Operable*/}
        <Route
          path={"/wcag/keyboard"}
          element={<Keyboard pageTitle={"2.1.1 Keyboard"} />}
        />
        <Route
          path={"/wcag/no-keyboard-trap"}
          element={<NoKeyboardTrap pageTitle={"2.1.2 No Keyboard Trap"} />}
        />
        <Route
          path={"/wcag/character-key-shortcuts"}
          element={
            <CharacterKeyShortcuts
              pageTitle={"2.1.4 Character Key Shortcuts"}
            />
          }
        />
        <Route
          path={"/wcag/timing-adjustable"}
          element={<TimingAdjustable pageTitle={"2.2.1 Timing Adjustable"} />}
        />
        <Route
          path={"/wcag/pause-stop-hide"}
          element={<PauseStopHide pageTitle={"2.2.2 Pause, Stop, Hide"} />}
        />
        <Route
          path={"/wcag/interruptions"}
          element={<Interruptions pageTitle={"2.2.4 Interruptions"} />}
        />
        <Route
          path={"/wcag/three-flashes-or-below-threshold"}
          element={
            <ThreeFlashesOrBelowThroshold
              pageTitle={"2.3.1 Three Flashes or Below Threshold"}
            />
          }
        />
        <Route
          path={"/wcag/bypass-blocks"}
          element={<BypassBlocks pageTitle={"2.4.1 Bypass Blocks"} />}
        />
        <Route
          path={"/wcag/page-titled"}
          element={<PageTitled pageTitle={"2.4.2 Page Titled"} />}
        />
        <Route
          path={"/wcag/focus-order"}
          element={<FocusOrder pageTitle={"2.4.3 Focus Order"} />}
        />
        <Route
          path={"/wcag/link-purpose-in-context"}
          element={
            <LinkPurposeInContext
              pageTitle={"2.4.4 Link Purpose (In Context)"}
            />
          }
        />
        <Route
          path={"/wcag/headings-and-labels"}
          element={
            <HeadingsAndLabels pageTitle={"2.4.6 Headings and Labels"} />
          }
        />
        <Route
          path={"/wcag/focus-visible"}
          element={<FocusVisible pageTitle={"2.4.7 Focus Visible"} />}
        />
        <Route
          path={"/wcag/link-purpose-link-only"}
          element={
            <LinkPurposeLinkOnly pageTitle={"2.4.9 Link Purpose (Link Only)"} />
          }
        />
        <Route
          path={"/wcag/label-in-name"}
          element={<LabelInName pageTitle={"2.5.3 Label in Name"} />}
        />
        <Route
          path={"/wcag/target-size"}
          element={<TargetSize pageTitle={"2.5.5 Target Size"} />}
        />
        {/*Understandable*/}
        <Route
          path={"/wcag/language-of-page"}
          element={<LangOfPage pageTitle={"3.1.1 Language of Page"} />}
        />
        <Route
          path={"/wcag/language-of-parts"}
          element={<LangOfParts pageTitle={"3.1.2 Language of Parts"} />}
        />
        <Route
          path={"/wcag/reading-level"}
          element={<ReadingLevel pageTitle={"3.1.5 Reading Level"} />}
        />
        <Route
          path={"/wcag/on-focus"}
          element={<OnFocus pageTitle={"3.2.1 On Focus"} />}
        />
        <Route
          path={"/wcag/on-input"}
          element={<OnInput pageTitle={"3.2.2 On Input"} />}
        />
        <Route
          path={"/wcag/consistent-navigation"}
          element={
            <ConsistentNavigation pageTitle={"3.2.3 Consistent Navigation"} />
          }
        />
        <Route
          path={"/wcag/consistent-identification"}
          element={
            <ConsistentIdentification
              pageTitle={"3.2.4 Consistent Identification"}
            />
          }
        />
        <Route
          path={"/wcag/change-on-request"}
          element={<ChangeOnRequest pageTitle={"3.2.5 Change on Request"} />}
        />
        <Route
          path={"/wcag/error-identification"}
          element={
            <ErrorIdentification pageTitle={"3.3.1 Error Identification"} />
          }
        />
        <Route
          path={"/wcag/labels-or-instructions"}
          element={
            <LabelsOrInstructions pageTitle={"3.3.2 Labels or Instructions"} />
          }
        />
        <Route
          path={"/wcag/error-suggestion"}
          element={<ErrorSuggestions pageTitle={"3.3.3 Error Suggestion"} />}
        />
        {/*Robust*/}
        <Route
          path={"/wcag/parsing"}
          element={<Parsing pageTitle={"4.1.1 Parsing"} />}
        />
        <Route
          path={"/wcag/name-role-value"}
          element={<NameRoleValue pageTitle={"4.1.2 Name, Role, Value"} />}
        />
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
