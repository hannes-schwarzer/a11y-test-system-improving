import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const LinkPurposeLinkOnly = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F84: Failure of Success Criterion 2.4.9 due to using a non-specific link such as 'click here' or 'more' without a mechanism to change the link text to specific text."
          }
          successCriterionInWords={"Link Purpose (Link Only)"}
          successCriterionNumber={"2.4.9"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-link-only"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F84.html"
          }
          level={Level.AAA}
          explanation={
            'This failure describes a common condition where links such as "click here" or "more" are used as anchor elements where you need to have the surrounding text to understand their purpose and where there isn\'t any mechanism to make the destination clear by itself, such as a button to expand the link text. Many blind people who use screen readers call up a dialog box that has a list of links from the page. They use this list of links to decide where they will go. But if many of the links in that list simply say "click here" or "more" they will be unable to use this feature in their screen reader, which is a core navigation strategy. That\'s why it\'s a failure of 2.4.9 to not provide any way of allowing them to know the destination from the link text alone. It is also true for people who tab through links. If all they hear as they tab through the document is "click here, click here, click here etc." they will become confused.'
          }
        >
          <a href="file110.htm">Click here</a> for more information on the Rocky
          Mountains.
        </TestCase>
        <TestCase
          title={
            "F84: Failure of Success Criterion 2.4.9 due to using a non-specific link such as 'click here' or 'more' without a mechanism to change the link text to specific text."
          }
          successCriterionInWords={"Link Purpose (Link Only)"}
          successCriterionNumber={"2.4.9"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-link-only"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F84.html"
          }
          level={Level.AAA}
          explanation={
            'This failure describes a common condition where links such as "click here" or "more" are used as anchor elements where you need to have the surrounding text to understand their purpose and where there isn\'t any mechanism to make the destination clear by itself, such as a button to expand the link text. Many blind people who use screen readers call up a dialog box that has a list of links from the page. They use this list of links to decide where they will go. But if many of the links in that list simply say "click here" or "more" they will be unable to use this feature in their screen reader, which is a core navigation strategy. That\'s why it\'s a failure of 2.4.9 to not provide any way of allowing them to know the destination from the link text alone. It is also true for people who tab through links. If all they hear as they tab through the document is "click here, click here, click here etc." they will become confused.'
          }
        >
          <h2>News headlines</h2>
          The middle east peace meetings have yielded fruitful dialogue.{" "}
          <a href="r4300.htm">Read more</a>
        </TestCase>

        <TestCase
          title={
            "F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link"
          }
          successCriterionInWords={"Link Purpose (Link Only)"}
          successCriterionNumber={"2.4.9"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-link-only"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F89.html"
          }
          level={Level.AAA}
          explanation={
            'HTML Search Results: A search site returns search results that include both a text link and an image link to the match site. The image has a null alt attribute, since the result already contains a link with a text description. However, the screen reader does not ignore the image link but uses heuristics to find some text that might describe the purpose of the link. For example, the screen reader might announce, "football dot gif Football Scorecard."'
          }
        >
          <a href="scores.html">
            <img src="football.gif" alt="" />
          </a>
          <a href="scores.html">Football Scoreboard</a>
        </TestCase>

        <TestCase
          title={"Link text does not make sense out of context"}
          successCriterionInWords={"Link Purpose (Link Only)"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-link-only"
          }
          successCriterionNumber={"2.4.9"}
          level={Level.AAA}
        >
          <p>
            To know more about me, visit my <a href={"page.html"}>page</a>.
          </p>
        </TestCase>
      </Frame>
    </>
  );
};
