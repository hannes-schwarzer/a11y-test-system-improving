import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import REDPANDA from "../../../../../assets/220px-RedPandaFullBody.jpeg";
import { Frame } from "../../../../../components/Frame/Frame";
import { Link } from "react-router-dom";

interface Props {
  pageTitle: string;
}

export const LinkPurposeInContext = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link"
          }
          successCriterionInWords={"Link Purpose (In Context)"}
          successCriterionNumber={"2.4.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
          }
          explanation={
            "A Link in an Adjacent Paragraph: A news service lists the first few sentences of an article in a " +
            'paragraph. The next paragraph contains the link "Read More...". Because the link is not in the same ' +
            "paragraph as the lead sentence, the user cannot easily discover what the link will let the user read more about."
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F63.html"
          }
          id={"2.4.4_1"}
        >
          <p>
            A British businessman has racked up 2 million flyer miles and plans
            to travel on the world's first commercial tourism flights to space.
          </p>
          <p>
            <Link to={"/some-page"}>Read More...</Link>
          </p>
        </TestCase>

        <TestCase
          title={
            "F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link"
          }
          successCriterionInWords={"Link Purpose (In Context)"}
          successCriterionNumber={"2.4.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
          }
          explanation={
            "A Link in an Adjacent Cell Within a Layout Table: An audio site provides links to where its " +
            "player can be downloaded. The information about what would be downloaded by the link is in the preceding row " +
            "of the layout table, which is not programmatically determined context for the link."
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F63.html"
          }
          id={"2.4.4_2"}
        >
          <table>
            <tr>
              <td>Play music from your browser</td>
            </tr>
            <tr>
              <td>
                <a href="http://www.example.com/download.htm">
                  <img
                    src="download.jpg"
                    width="165"
                    height="32"
                    alt="Download now"
                  />
                </a>
              </td>
            </tr>
          </table>
        </TestCase>

        <TestCase
          title={
            "F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link"
          }
          successCriterionInWords={"Link Purpose (In Context)"}
          successCriterionNumber={"2.4.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
          }
          explanation={
            'HTML Search Results: A search site returns search results that include both a text link and an image link to the match site. The image has a null alt attribute, since the result already contains a link with a text description. However, the screen reader does not ignore the image link but uses heuristics to find some text that might describe the purpose of the link. For example, the screen reader might announce, "football dot gif Football Scorecard."'
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F89.html"
          }
          id={"2.4.4_3"}
        >
          <a href="scores.html">
            <img src="football.gif" alt="" />
          </a>
          <a href="scores.html">Football Scoreboard</a>
        </TestCase>

        <TestCase
          title={"Link to javascript, invalid hypertext reference"}
          successCriterionInWords={"Link Purpose (In Context)"}
          successCriterionNumber={"2.4.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
          }
          level={Level.A}
          id={"2.4.4_4"}
        >
          <a href={"javascript:alert('Hello World!')"}>Press me!</a>
        </TestCase>

        <TestCase
          title={"Uninformative link text"}
          successCriterionInWords={"Link Purpose (In Context)"}
          successCriterionNumber={"2.4.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
          }
          level={Level.A}
          id={"2.4.4_5"}
        >
          <h4>Polar bear</h4>
          <p>
            The polar bear is a carnivorous bear whose native range lies largely
            within the Arctic Circle, encompassing the Arctic Ocean, its
            surrounding seas and surrounding land masses.
          </p>
          <a href={"https://en.wikipedia.org/wiki/Polar_bear"}>Read more</a>
        </TestCase>
        <TestCase
          title={"Link text with identical title"}
          successCriterionInWords={"Link Purpose (In Context)"}
          successCriterionNumber={"2.4.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
          }
          level={Level.A}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H33.html"}
          explanation={
            "The objective of this technique is to demonstrate how to use a title attribute on an anchor element to provide additional text describing a link. The title attribute is used to provide additional information to help clarify or further describe the purpose of a link. If the supplementary information provided through the title attribute is something the user should know before following the link, such as a warning, then it should be provided in the link text rather than in the title attribute."
          }
          id={"2.4.4_6"}
        >
          <a href={"http://www.google.com/"} title={"Google"}>
            Google
          </a>
        </TestCase>

        <TestCase
          title={
            "Link to PDF does not include information on file format and file size"
          }
          successCriterionInWords={"Link Purpose (In Context)"}
          linkToExplanation={
            "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html"
          }
          successCriterionNumber={"2.4.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
          }
          level={Level.A}
          id={"2.4.4_7"}
        >
          <a
            href={
              "https://cdn.bdadyslexia.org.uk/uploads/documents/Advice/style-guide/Dyslexia_Style_Guide_2018-final-1.pdf"
            }
          >
            Dyslexia style guide
          </a>
        </TestCase>

        <TestCase
          title={"Links with the same text go to different pages"}
          successCriterionInWords={"Link Purpose (In Context)"}
          successCriterionNumber={"2.4.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
          }
          level={Level.A}
          id={"2.4.4_8"}
        >
          <a href={"https://en.wikipedia.org/wiki/Lion"}>Lions</a> are the only
          truly social cats, with related females living together in prides
          overseen by male coalition that compete for possession in fierce and
          often fatal battles.
          <a
            href={
              "http://animals.nationalgeographic.com/animals/mammals/african-lion/"
            }
          >
            {" "}
            Lions
          </a>{" "}
          are predatory carnivores and it's the females that perform most of the
          hunting at night; the majority of the prey being antelope, zebra and
          wildebeest.
        </TestCase>

        <TestCase
          title={"Adjacent links going to the same destination"}
          successCriterionInWords={"Link Purpose (In Context)"}
          successCriterionNumber={"2.4.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
          }
          level={Level.A}
          id={"2.4.4_9"}
        >
          <a href={"https://en.wikipedia.org/wiki/Red_panda"}>
            <img alt={"Red Panda"} height={165} src={REDPANDA} width={220} />
          </a>
          <a href={"https://en.wikipedia.org/wiki/Red_panda"}>Red Panda</a>
        </TestCase>

        <TestCase
          title={"Link contains only a full stop"}
          successCriterionInWords={"Link Purpose (In Context)"}
          successCriterionNumber={"2.4.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
          }
          level={Level.A}
          id={"2.4.4_10"}
        >
          <p>
            Visit the GOV.UK website <a href={"https://www.gov.uk/"}>.</a>
          </p>
        </TestCase>

        <TestCase
          title={"Non-specific link text"}
          successCriterionInWords={"Link Purpose (In Context)"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
          }
          successCriterionNumber={"2.4.4"}
          level={Level.A}
          id={"2.4.4_11"}
        >
          <a href={"rockies.html"}>Click here</a> for more information on the
          Rocky Mountains.
        </TestCase>

        <TestCase
          title={"Blank link text"}
          successCriterionInWords={"Link Purpose (In Context)"}
          level={Level.A}
          successCriterionNumber={"2.4.4"}
          explanation={
            "The objective of this technique is to describe the purpose of a link in the text of the link. The description lets a user distinguish this link from links in the Web page that lead to other destinations and helps the user determine whether to follow the link. The URI of the destination is generally not sufficiently descriptive."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/general/G91.html"
          }
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
          }
          id={"2.4.4_12"}
        >
          <a href={"http://www.google.com"}></a>
        </TestCase>
      </Frame>
    </>
  );
};
