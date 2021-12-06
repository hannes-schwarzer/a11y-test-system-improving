import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inappropriate } from "./WcagTestCases/DetailPages/Navigable_Detail/Inappropriate";
import { EmptyPageTitle } from "./WcagTestCases/DetailPages/Navigable_Detail/EmptyPageTitle";
import { OnlySeparaterInTitle } from "./WcagTestCases/DetailPages/Navigable_Detail/OnlySeparaterInTitle";
import { KeyboardTrap } from "./WcagTestCases/DetailPages/KeyboardAccessible/KeyboardTrap";
import { Homepage } from "./Homepage/Homepage";
import { NonTextContent } from "./WcagTestCases/1_Perceivable/1.1_TextAlternatives/NonTextContent/NonTextContent";
import { AudioOnlyVideoOnlyPrerecorded } from "./WcagTestCases/1_Perceivable/1.2_TimeBasedMedia/AudioOnlyVideoOnlyPrerecorded/AudioOnlyVideoOnlyPrerecorded";
import { MediaAlternativePrerecorded } from "./WcagTestCases/1_Perceivable/1.2_TimeBasedMedia/MediaAlternativePrerecorded/MediaAlternativePrerecorded";
import { InfoAndRelationships } from "./WcagTestCases/1_Perceivable/1.3_Adaptable/InfoAndRelationships/InfoAndRelationships";
import { MeaningfulSequence } from "./WcagTestCases/1_Perceivable/1.3_Adaptable/MeaningfulSequence/MeaningfulSequence";
import { UseOfColor } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/UseOfColor/UseOfColor";
import { AudioControl } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/AudioControl/AudioControl";
import { ContrastMinimum } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/ContrastMinimum/ContrastMinimum";
import { ResizeText } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/ResizeText/ResizeText";
import { ContrastEnhanced } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/ContrastEnhanced/ContrastEnhanced";
import { VisualPresentation } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/VisualPresentation/VisualPresentation";
import { Reflow } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/Reflow/Reflow";
import { NonTextContrast } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/NonTextContrast/NonTextContrast";
import { TextSpacing } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/TextSpacing/TextSpacing";
import { ContentOnHoverOrFocus } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/ContentOnHoverOrFocus/ContentOnHoverOrFocus";
import { Keyboard } from "./WcagTestCases/2_Operable/2.1_KeyboardAccessible/Keyboard/Keyboard";
import { NoKeyboardTrap } from "./WcagTestCases/2_Operable/2.1_KeyboardAccessible/NoKeyboardTrap/NoKeyboardTrap";
import { CharacterKeyShortcuts } from "./WcagTestCases/2_Operable/2.1_KeyboardAccessible/CharacterKeyShortcuts/CharacterKeyShortcuts";
import { TimingAdjustable } from "./WcagTestCases/2_Operable/2.2_EnoughTime/TimingAdjustable/TimingAdjustable";
import { PauseStopHide } from "./WcagTestCases/2_Operable/2.2_EnoughTime/PauseStopHide/PauseStopHide";
import { Interruptions } from "./WcagTestCases/2_Operable/2.2_EnoughTime/Interruptions/Interruptions";
import { ThreeFlashesOrBelowThreshold } from "./WcagTestCases/2_Operable/2.3_SeizuresAndPhysical/ThreeFlashesOrBelowThreshold/ThreeFlashesOrBelowThreshold";
import { BypassBlocks } from "./WcagTestCases/2_Operable/2.4_Navigable/BypassBlocks/BypassBlocks";
import { PageTitled } from "./WcagTestCases/2_Operable/2.4_Navigable/PageTitled/PageTitled";
import { FocusOrder } from "./WcagTestCases/2_Operable/2.4_Navigable/FocusOrder/FocusOrder";
import { LinkPurposeInContext } from "./WcagTestCases/2_Operable/2.4_Navigable/LinkPurposeInContext/LinkPurposeInContext";
import { HeadingsAndLabels } from "./WcagTestCases/2_Operable/2.4_Navigable/HeadingsAndLabels/HeadingsAndLabels";
import { FocusVisible } from "./WcagTestCases/2_Operable/2.4_Navigable/FocusVisible/FocusVisible";
import { LinkPurposeLinkOnly } from "./WcagTestCases/2_Operable/2.4_Navigable/LinkPurposeLinkOnly/LinkPurposeLinkOnly";
import { LabelInName } from "./WcagTestCases/2_Operable/2.5_InputModalities/LabelInName";
import { TargetSize } from "./WcagTestCases/2_Operable/2.5_InputModalities/TargetSize";
import { LangOfParts } from "./WcagTestCases/3_Understandable/3.1_Readable/LangOfParts/LangOfParts";
import { LangOfPage } from "./WcagTestCases/3_Understandable/3.1_Readable/LangOfPage/LangOfPage";
import { ReadingLevel } from "./WcagTestCases/3_Understandable/3.1_Readable/ReadingLevel/ReadingLevel";
import { OnFocus } from "./WcagTestCases/3_Understandable/3.2_Predictable/OnFocus/OnFocus";
import { OnInput } from "./WcagTestCases/3_Understandable/3.2_Predictable/OnInput/OnInput";
import { ConsistentNavigation } from "./WcagTestCases/3_Understandable/3.2_Predictable/ConsistentNavigation/ConsistentNavigation";
import { ConsistentIdentification } from "./WcagTestCases/3_Understandable/3.2_Predictable/ConsistentIdentification/ConsistentIdentification";
import { ChangeOnRequest } from "./WcagTestCases/3_Understandable/3.2_Predictable/ChangeOnRequest/ChangeOnRequest";
import { ErrorIdentification } from "./WcagTestCases/3_Understandable/3.3_InputAssistance/ErrorIdentification/ErrorIdentification";
import { LabelsOrInstructions } from "./WcagTestCases/3_Understandable/3.3_InputAssistance/LabelsOrInstructions/LabelsOrInstructions";
import { ErrorSuggestions } from "./WcagTestCases/3_Understandable/3.3_InputAssistance/ErrorSuggestions/ErrorSuggestions";
import { Parsing } from "./WcagTestCases/4_Robust/Compatible_4.1/Parsing/Parsing";
import { NameRoleValue } from "./WcagTestCases/4_Robust/Compatible_4.1/NameRoleValue/NameRoleValue";
import { SomePage } from "./WcagTestCases/DetailPages/SomePage";
import { NoPageTitle } from "./WcagTestCases/DetailPages/Navigable_Detail/NoPageTitle";
import { TwoPageTitles } from "./WcagTestCases/DetailPages/Navigable_Detail/TwoPageTitles";
import { RedirectingPage } from "./WcagTestCases/DetailPages/EnoughTime_Detail/RedirectingPage";
import { RefreshingPage } from "./WcagTestCases/DetailPages/EnoughTime_Detail/RefreshingPage";
import { ChangedMeaningThroughFormatting } from "./WcagTestCases/DetailPages/Adaptable/ChangedMeaningThroughFormatting";
import { SensoryCharacteristics } from "./WcagTestCases/1_Perceivable/1.3_Adaptable/SensoryCharacteristics/SensoryCharacteristics";
import { Orientation } from "./WcagTestCases/1_Perceivable/1.3_Adaptable/Orientation/Orientation";
import { IdentifyInputPurpose } from "./WcagTestCases/1_Perceivable/1.3_Adaptable/IdentifyInputPurpose/IdentifyInputPurpose";
import { ImagesOfText } from "./WcagTestCases/1_Perceivable/1.4_Distinguishable/ImagesOfText/ImagesOfText";
import { StatusMessages } from "./WcagTestCases/4_Robust/Compatible_4.1/StatusMessages/StatusMessages";

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
          path={"/wcag/perceivable/text-alternatives/non-text-content"}
          element={<NonTextContent pageTitle={"1.1.1 Non-text Content"} />}
        />
        <Route
          path={
            "/wcag/perceivable/time-based-media/audio-only-and-video-only-prerecorded"
          }
          element={
            <AudioOnlyVideoOnlyPrerecorded
              pageTitle={"1.2.1 Audio-only and Video-only (Prerecorded)"}
            />
          }
        />
        <Route
          path={
            "/wcag/perceivable/time-based-media/media-alternative-prerecorded"
          }
          element={
            <MediaAlternativePrerecorded
              pageTitle={"1.2.8 Media Alternative (Prerecorded)"}
            />
          }
        />
        <Route
          path={"/wcag/perceivable/adaptable/info-and-relationships"}
          element={
            <InfoAndRelationships pageTitle={"1.3.1 Info and Relationships"} />
          }
        />
        <Route
          path={"/wcag/perceivable/adaptable/meaningful-sequence"}
          element={
            <MeaningfulSequence pageTitle={"1.3.2 Meaningful Sequence"} />
          }
        />
        <Route
          path={"/wcag/perceivable/adaptable/sensory-characteristics"}
          element={
            <SensoryCharacteristics
              pageTitle={"1.3.3 Sensory Characteristics"}
            />
          }
        />
        <Route
          path={"/wcag/perceivable/adaptable/orientation"}
          element={<Orientation pageTitle={"1.3.4 Orientation"} />}
        />
        <Route
          path={"/wcag/perceivable/adaptable/identify-input-purpose"}
          element={
            <IdentifyInputPurpose pageTitle={"1.3.5 Identify Input Purpose"} />
          }
        />
        <Route
          path={"/wcag/perceivable/distinguishable/use-of-color"}
          element={<UseOfColor pageTitle={"1.4.1 Use of Color"} />}
        />
        <Route
          path={"/wcag/perceivable/distinguishable/audio-control"}
          element={<AudioControl pageTitle={"1.4.2 Audio Control"} />}
        />
        <Route
          path={"/wcag/perceivable/distinguishable/contrast-minimum"}
          element={<ContrastMinimum pageTitle={"1.4.3 Contrast (Minimum)"} />}
        />
        <Route
          path={"/wcag/perceivable/distinguishable/resize-text"}
          element={<ResizeText pageTitle={"1.4.4 Resize text"} />}
        />
        <Route
          path={"/wcag/perceivable/distinguishable/images-of-text"}
          element={<ImagesOfText pageTitle={"1.4.5 Images of text"} />}
        />
        <Route
          path={"/wcag/perceivable/distinguishable/contrast-enhanced"}
          element={<ContrastEnhanced pageTitle={"1.4.6 Contrast (Enhanced)"} />}
        />
        <Route
          path={"/wcag/perceivable/distinguishable/visual-presentation"}
          element={
            <VisualPresentation pageTitle={"1.4.8 Visual Presentation"} />
          }
        />
        <Route
          path={"/wcag/perceivable/distinguishable/reflow"}
          element={<Reflow pageTitle={"1.4.10 Reflow"} />}
        />
        <Route
          path={"/wcag/perceivable/distinguishable/non-text-contrast"}
          element={<NonTextContrast pageTitle={"1.4.11 Non-text Contrast"} />}
        />
        <Route
          path={"/wcag/perceivable/distinguishable/text-spacing"}
          element={<TextSpacing pageTitle={"1.4.12 Text Spacing"} />}
        />
        <Route
          path={"/wcag/perceivable/distinguishable/content-on-hover-or-focus"}
          element={
            <ContentOnHoverOrFocus
              pageTitle={"1.4.13 Content on Hover or Focus"}
            />
          }
        />
        {/*Operable*/}
        <Route
          path={"/wcag/operable/keyboard-accessible/keyboard"}
          element={<Keyboard pageTitle={"2.1.1 Keyboard"} />}
        />
        <Route
          path={"/wcag/operable/keyboard-accessible/no-keyboard-trap"}
          element={<NoKeyboardTrap pageTitle={"2.1.2 No Keyboard Trap"} />}
        />
        <Route
          path={"/wcag/operable/keyboard-accessible/character-key-shortcuts"}
          element={
            <CharacterKeyShortcuts
              pageTitle={"2.1.4 Character Key Shortcuts"}
            />
          }
        />
        <Route
          path={"/wcag/operable/enough-time/timing-adjustable"}
          element={<TimingAdjustable pageTitle={"2.2.1 Timing Adjustable"} />}
        />
        <Route
          path={"/wcag/operable/enough-time/pause-stop-hide"}
          element={<PauseStopHide pageTitle={"2.2.2 Pause, Stop, Hide"} />}
        />
        <Route
          path={"/wcag/operable/enough-time/interruptions"}
          element={<Interruptions pageTitle={"2.2.4 Interruptions"} />}
        />
        <Route
          path={
            "/wcag/operable/seizures-and-physical-reactions/three-flashes-or-below-threshold"
          }
          element={
            <ThreeFlashesOrBelowThreshold
              pageTitle={"2.3.1 Three Flashes or Below Threshold"}
            />
          }
        />
        <Route
          path={"/wcag/operable/navigable/bypass-blocks"}
          element={<BypassBlocks pageTitle={"2.4.1 Bypass Blocks"} />}
        />
        <Route
          path={"/wcag/operable/navigable/page-titled"}
          element={<PageTitled pageTitle={"2.4.2 Page Titled"} />}
        />
        <Route
          path={"/wcag/operable/navigable/focus-order"}
          element={<FocusOrder pageTitle={"2.4.3 Focus Order"} />}
        />
        <Route
          path={"/wcag/operable/navigable/link-purpose-in-context"}
          element={
            <LinkPurposeInContext
              pageTitle={"2.4.4 Link Purpose (In Context)"}
            />
          }
        />
        <Route
          path={"/wcag/operable/navigable/headings-and-labels"}
          element={
            <HeadingsAndLabels pageTitle={"2.4.6 Headings and Labels"} />
          }
        />
        <Route
          path={"/wcag/operable/navigable/focus-visible"}
          element={<FocusVisible pageTitle={"2.4.7 Focus Visible"} />}
        />
        <Route
          path={"/wcag/operable/navigable/link-purpose-link-only"}
          element={
            <LinkPurposeLinkOnly pageTitle={"2.4.9 Link Purpose (Link Only)"} />
          }
        />
        <Route
          path={"/wcag/operable/input-modalities/label-in-name"}
          element={<LabelInName pageTitle={"2.5.3 Label in Name"} />}
        />
        <Route
          path={"/wcag/operable/input-modalities/target-size"}
          element={<TargetSize pageTitle={"2.5.5 Target Size"} />}
        />
        {/*Understandable*/}
        <Route
          path={"/wcag/understandable/readable/language-of-page"}
          element={<LangOfPage pageTitle={"3.1.1 Language of Page"} />}
        />
        <Route
          path={"/wcag/understandable/readable/language-of-parts"}
          element={<LangOfParts pageTitle={"3.1.2 Language of Parts"} />}
        />
        <Route
          path={"/wcag/understandable/readable/reading-level"}
          element={<ReadingLevel pageTitle={"3.1.5 Reading Level"} />}
        />
        <Route
          path={"/wcag/understandable/predictable/on-focus"}
          element={<OnFocus pageTitle={"3.2.1 On Focus"} />}
        />
        <Route
          path={"/wcag/understandable/predictable/on-input"}
          element={<OnInput pageTitle={"3.2.2 On Input"} />}
        />
        <Route
          path={"/wcag/understandable/predictable/consistent-navigation"}
          element={
            <ConsistentNavigation pageTitle={"3.2.3 Consistent Navigation"} />
          }
        />
        <Route
          path={"/wcag/understandable/predictable/consistent-identification"}
          element={
            <ConsistentIdentification
              pageTitle={"3.2.4 Consistent Identification"}
            />
          }
        />
        <Route
          path={"/wcag/understandable/predictable/change-on-request"}
          element={<ChangeOnRequest pageTitle={"3.2.5 Change on Request"} />}
        />
        <Route
          path={"/wcag/understandable/input-assistance/error-identification"}
          element={
            <ErrorIdentification pageTitle={"3.3.1 Error Identification"} />
          }
        />
        <Route
          path={"/wcag/understandable/input-assistance/labels-or-instructions"}
          element={
            <LabelsOrInstructions pageTitle={"3.3.2 Labels or Instructions"} />
          }
        />
        <Route
          path={"/wcag/understandable/input-assistance/error-suggestion"}
          element={<ErrorSuggestions pageTitle={"3.3.3 Error Suggestion"} />}
        />
        {/*Robust*/}
        <Route
          path={"/wcag/robust/compatible/parsing"}
          element={<Parsing pageTitle={"4.1.1 Parsing"} />}
        />
        <Route
          path={"/wcag/robust/compatible/name-role-value"}
          element={<NameRoleValue pageTitle={"4.1.2 Name, Role, Value"} />}
        />
        <Route
          path={"/wcag/robust/compatible/status-messages"}
          element={<StatusMessages pageTitle={"4.1.3 Status Messages"} />}
        />
        {/*Detail pages*/}
        <Route
          path={"/wcag/operable/navigable/page-titled/inappropriate-page-title"}
          element={<Inappropriate />}
        />
        <Route
          path={"/wcag/operable/navigable/page-titled/empty-title"}
          element={<EmptyPageTitle />}
        />
        <Route
          path={"/wcag/operable/navigable/page-titled/no-page-title"}
          element={<NoPageTitle />}
        />
        <Route
          path={"/wcag/operable/navigable/page-titled/two-page-titles"}
          element={<TwoPageTitles />}
        />
        <Route
          path={"/wcag/operable/navigable/page-titled/only-separater-in-title"}
          element={<OnlySeparaterInTitle />}
        />
        <Route
          path={"/wcag/operable/keyboard-accessible/no-keyboard-trap/trap"}
          element={<KeyboardTrap />}
        />
        <Route
          path={
            "/wcag/perceivable/adaptable/meaningful-sequence/changed-meaning-through-formatting"
          }
          element={<ChangedMeaningThroughFormatting />}
        />
        <Route
          path={
            "/wcag/operable/enough-time/timing-adjustable/redirect-to-other-page"
          }
          element={<RedirectingPage />}
        />
        <Route
          path={"/wcag/operable/enough-time/timing-adjustable/refreshing-page"}
          element={<RefreshingPage />}
        />
        <Route path={"/some-page"} element={<SomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
