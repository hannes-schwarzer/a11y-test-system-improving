import {
  GuidelineError,
  Level,
} from "../../../structural/GuidelineError/GuidelineError";
import REDPANDA from "../../../../assets/220px-RedPandaFullBody.jpeg";

export const LinkPurposeInContext = () => {
  return (
    <>
      <GuidelineError
        title={
          "F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link"
        }
        successCriterion={"2.4.4 Link Purpose (In Context)"}
        serial={1}
        guideline={"2.4.4"}
        linkToGuideline={
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
      >
        <p>
          A British businessman has racked up 2 million flyer miles and plans to
          travel on the world's first commercial tourism flights to space.
        </p>

        <p>
          <a href="ff.html">Read More...</a>
        </p>
      </GuidelineError>
      <GuidelineError
        title={
          "F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link"
        }
        successCriterion={"2.4.4 Link Purpose (In Context)"}
        serial={2}
        guideline={"2.4.4"}
        linkToGuideline={
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
      </GuidelineError>

      <GuidelineError
        title={
          "F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link"
        }
        successCriterion={"2.4.4 Link Purpose (In Context)"}
        serial={3}
        guideline={"2.4.4"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
        }
        explanation={
          'HTML Search Results: A search site returns search results that include both a text link and an image link to the match site. The image has a null alt attribute, since the result already contains a link with a text description. However, the screen reader does not ignore the image link but uses heuristics to find some text that might describe the purpose of the link. For example, the screen reader might announce, "football dot gif Football Scorecard."'
        }
        level={Level.A}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F89.html"
        }
      >
        <a href="scores.html">
          <img src="football.gif" alt="" />
        </a>
        <a href="scores.html">Football Scoreboard</a>
      </GuidelineError>

      <GuidelineError
        title={"Link to javascript, invalid hypertext reference"}
        successCriterion={"2.4.4 Link Purpose (In Context)"}
        serial={4}
        guideline={"2.4.4"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
        }
        level={Level.A}
      >
        <a href={"javascript:alert('Hello World!')"}>Press me!</a>
      </GuidelineError>

      <GuidelineError
        title={"Uninformative link text"}
        successCriterion={"2.4.4 Link Purpose (In Context)"}
        serial={4}
        guideline={"2.4.4"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
        }
        level={Level.A}
      >
        <h4>Polar bear</h4>
        <p>
          The polar bear is a carnivorous bear whose native range lies largely
          within the Arctic Circle, encompassing the Arctic Ocean, its
          surrounding seas and surrounding land masses.
        </p>
        <a href={"https://en.wikipedia.org/wiki/Polar_bear"}>Read more</a>
      </GuidelineError>
      <GuidelineError
        title={"Link text with identical title"}
        successCriterion={"2.4.4 Link Purpose (In Context)"}
        serial={5}
        guideline={"2.4.4"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
        }
        level={Level.A}
        linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H33.html"}
        explanation={
          "The objective of this technique is to demonstrate how to use a title attribute on an anchor element to provide additional text describing a link. The title attribute is used to provide additional information to help clarify or further describe the purpose of a link. If the supplementary information provided through the title attribute is something the user should know before following the link, such as a warning, then it should be provided in the link text rather than in the title attribute."
        }
      >
        <a href={"http://www.google.com/"} title={"Google"}>
          Google
        </a>
      </GuidelineError>

      <GuidelineError
        title={
          "Link to PDF does not include information on file format and file size"
        }
        successCriterion={"2.4.4 Link Purpose (In Context)"}
        serial={6}
        linkToExplanation={
          "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html"
        }
        guideline={"2.4.4"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
        }
        level={Level.A}
      >
        <a
          href={
            "https://cdn.bdadyslexia.org.uk/uploads/documents/Advice/style-guide/Dyslexia_Style_Guide_2018-final-1.pdf"
          }
        >
          Dyslexia style guide
        </a>
      </GuidelineError>

      <GuidelineError
        title={"Blank link text"}
        successCriterion={"2.4.4 Link Purpose (In Context)"}
        serial={7}
        level={Level.A}
        guideline={"2.4.4"}
        explanation={
          "The objective of this technique is to describe the purpose of a link in the text of the link. The description lets a user distinguish this link from links in the Web page that lead to other destinations and helps the user determine whether to follow the link. The URI of the destination is generally not sufficiently descriptive."
        }
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/general/G91.html"
        }
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
        }
      >
        <a href={"http://www.google.com"}></a>
      </GuidelineError>

      <GuidelineError
        title={"Links with the same text go to different pages"}
        successCriterion={"2.4.4 Link Purpose (In Context)"}
        serial={8}
        guideline={"2.4.4"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
        }
        level={Level.A}
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
      </GuidelineError>

      <GuidelineError
        title={"Adjacent links going to the same destination"}
        successCriterion={"2.4.4 Link Purpose (In Context)"}
        serial={9}
        guideline={"2.4.4"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
        }
        level={Level.A}
      >
        <a href={"https://en.wikipedia.org/wiki/Red_panda"}>
          <img alt={"Red Panda"} height={165} src={REDPANDA} width={220} />
        </a>
        <a href={"https://en.wikipedia.org/wiki/Red_panda"}>Red Panda</a>
      </GuidelineError>

      <GuidelineError
        title={"Link contains only a full stop"}
        successCriterion={"2.4.4 Link Purpose (In Context)"}
        serial={10}
        guideline={"2.4.4"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
        }
        level={Level.A}
      >
        <p>
          Visit the GOV.UK website <a href={"https://www.gov.uk/"}>.</a>
        </p>
      </GuidelineError>

      <GuidelineError
        title={"Non-specific link text"}
        successCriterion={"links"}
        serial={11}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context"
        }
        guideline={"2.4.4"}
        level={Level.A}
      >
        <a href={"rockies.html"}>Click here</a> for more information on the
        Rocky Mountains.
      </GuidelineError>
    </>
  );
};
