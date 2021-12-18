import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";
import "./Reflow.css";

interface Props {
  pageTitle: string;
}

export const Reflow = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Wide page forces users to scroll horizontally"}
          successCriterionInWords={"Reflow"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#reflow"
          }
          successCriterionNumber={"1.4.10"}
          level={Level.AA}
          explanation={
            "Failure due to using fixed sized containers and fixed position content (CSS): When sites are constructed to require horizontal scrolling in order to navigate or read content at a normal size of 100% using standard screen sizes, additional problems can arise for users with low vision or mobility impairments."
          }
          id={"1.4.10_1"}
        >
          <div className={"reflow__constrained-box"}>
            <p className={"reflow__constrained"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p className={"reflow__constrained-extra"}>
              This is some text you have to horizontally scroll to read.
            </p>
          </div>
        </TestCase>
      </Frame>
    </>
  );
};
