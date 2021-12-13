import { Frame } from "../../../../../components/Frame/Frame";
import { Level, TestCase } from "../../../../../components/TestCase/TestCase";
import { useEffect } from "react";

interface Props {
  pageTitle: string;
}

export const Orientation = (props: Props) => {
  //TODO: Does this work?
  const lockDisplay = () => {
    window.screen.orientation.lock("portrait").finally(() => {
      alert("locked");
    });
  };
  useEffect(() => {
    lockDisplay();
  });
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F97: Failure due to locking the orientation to landscape or portrait view"
          }
          level={Level.AA}
          successCriterionInWords={"Orientation"}
          successCriterionNumber={"1.3.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#orientation"
          }
          id={"1.3.4_1"}
        >
          {/*TODO: Implement this feature*/}
          <p>This page locks the display orientation in portait.</p>
        </TestCase>
      </Frame>
    </>
  );
};
