import { Keyboard } from "./KeyboardAccessible_2.1/Keyboard";
import { TimingAdjustable } from "./EnoughTime_2.2/TimingAdjustable";
import { PauseStopHide } from "./EnoughTime_2.2/PauseStopHide";
import { Interruptions } from "./EnoughTime_2.2/Interruptions";
import { FocusOrder } from "./Navigable_2.4/FocusOrder";
import { LinkPurposeInContext } from "./Navigable_2.4/LinkPurposeInContext";
import { FocusVisible } from "./Navigable_2.4/FocusVisible";
import { LinkPurposeLinkOnly } from "./Navigable_2.4/LinkPurposeLinkOnly";
import { PageTitled } from "./Navigable_2.4/PageTitled";
import { HeadingsAndLabels } from "./Navigable_2.4/HeadingsAndLabels";

export const Operable = () => {
  return (
    <>
      <Keyboard /> {/*2.1.1*/}
      <TimingAdjustable /> {/*2.2.1*/}
      <PauseStopHide /> {/*2.2.2*/}
      <Interruptions /> {/*2.2.4*/}
      <PageTitled /> {/*2.4.2*/}
      <FocusOrder /> {/*2.4.3*/}
      <LinkPurposeInContext /> {/*2.4.4*/}
      <HeadingsAndLabels /> {/*2.4.6*/}
      <FocusVisible /> {/*2.4.7*/}
      <LinkPurposeLinkOnly /> {/*2.4.9*/}
    </>
  );
};
