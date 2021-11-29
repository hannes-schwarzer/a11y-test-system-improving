import { GuidelineError, Level } from "../../../GuidelineError";

export const LinkPurposeInContext = () => {
  return (
    <>
      <GuidelineError
        title={
          "F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link"
        }
        category={"2.4.4 Link Purpose (In Context)"}
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
        category={"2.4.4 Link Purpose (In Context)"}
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
        category={"2.4.4 Link Purpose (In Context)"}
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
    </>
  );
};
