import { Level, TestCase } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";
import { useEffect } from "react";

interface Props {
  pageTitle: string;
}

export const BypassBlocks = (props: Props) => {
  useEffect(() => {
    if (document.getElementById("skip-to-main")) {
      document.getElementById("skip-to-main")!.remove();
    }
  });
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
          id={"2.4.1_1"}
        >
          <iframe width="100%" src={"/some-page"}></iframe>
        </TestCase>
        <TestCase
          title={"Second main role present"}
          successCriterionNumber={"2.4.1"}
          level={Level.A}
          successCriterionInWords={"Bypass Blocks"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks"
          }
          explanation={
            'The <main> element has an implicit landmark role of "main" that represents the central topic of the document. This provides a non-obtrusive alternative for a “skip to main content” link. It is possible, but not desirable, to have more than one element with a "main" role'
          }
          id={"2.4.1_2"}
        >
          <div role={"main"}>
            <h3>Important Notice</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </TestCase>
        <TestCase
          title={
            "Failure against G1: Missing a link at the top of each page that goes directly to the main content area"
          }
          level={Level.A}
          successCriterionInWords={"Bypass Blocks"}
          successCriterionNumber={"2.4.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/general/G1.html"
          }
          explanation={
            "The objective of this technique is to provide a mechanism to bypass blocks of material that are repeated on multiple Web pages by skipping directly to the main content of the Web page. The first interactive item in the Web page is a link to the beginning of the main content. Activating the link sets focus beyond the other content to the main content. This technique is most useful when a Web page has one main content area, rather than a set of content areas that are equally important, and when there are not multiple navigation sections on the page."
          }
          id={"2.4.1_3"}
        >
          <p>
            There is no means to skip to main content on this page, because the
            corresponding navigation element has been deleted.
          </p>
        </TestCase>
      </Frame>
    </>
  );
};
