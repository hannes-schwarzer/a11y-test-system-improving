import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const BypassBlocks = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"iframe is missing a title attribute"}
          successCriterionInWords={"Bypass Blocks"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks"
          }
          linkToExplanation={
            "https://equalizedigital.com/accessibility-checker/iframe-missing-title/"
          }
          successCriterionNumber={"2.4.1"}
          level={Level.A}
          explanation={
            "Sighted users can see iFrames and quickly decide if they want to engage with the content inside the frame or not. They don’t click the navigation or submit the form that is contained within the frame – because they can tell at a glance that the iFrame is provided as an example and doesn’t contain content important to understanding this page. A blind or visually impaired user, on the other hand, does not have the ability to quickly glance at an iFrame and decide whether they want to engage with it. iFrame titles are important because they allow screen reader users to learn the purpose of each frame and then choose whether they want to go into the frame to hear the content inside it or whether they want to skip the iFrame and continue down the page."
          }
        >
          <iframe width="100%" height="400" src={"/some-page"}></iframe>
        </TestCase>
      </Frame>
    </>
  );
};
