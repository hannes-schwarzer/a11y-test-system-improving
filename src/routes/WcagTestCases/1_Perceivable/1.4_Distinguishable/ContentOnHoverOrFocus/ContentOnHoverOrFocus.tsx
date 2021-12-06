import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import "./ContentOnHoverOrFocus.css";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ContentOnHoverOrFocus = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Tooltips don't receive keyboard focus"}
          successCriterionInWords={"Content on Hover or Focus"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html"
          }
          successCriterionNumber={"1.4.13"}
          level={Level.AA}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#content-on-hover-or-focus"
          }
        >
          <label className={"cohof__block-form"} htmlFor={"drivers-licence-no"}>
            Your driving licence number{" "}
            <span className={"cohof__tooltip-icon"}>?</span>{" "}
            <span className={"cohof__tooltip-information"}>
              Your driving licence number can be found in section 5 of your
              driving licence photocard
            </span>
          </label>
          <input id={"drivers-licence-no"} type={"text"} />
        </TestCase>
      </Frame>
    </>
  );
};
