import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import "./ContentOnHoverOrFocus.css";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ContentOnHoverOrFocus = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={"Tooltips don't receive keyboard focus"}
          successCriterion={"Content on Hover or Focus"}
          serial={120}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
          }
          guideline={"1.4.13"}
          level={Level.AA}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#content-on-hover-or-focus"
          }
        >
          <label
            className={"tooltips-not-focusable"}
            htmlFor={"drivers-licence-no"}
          >
            Your driving licence number{" "}
            <span className={"tooltip-icon"}>?</span>{" "}
            <span className={"tooltip-information"}>
              Your driving licence number can be found in section 5 of your
              driving licence photocard
            </span>
          </label>
          <input id={"drivers-licence-no"} type={"text"} />
        </GuidelineError>
      </Frame>
    </>
  );
};
