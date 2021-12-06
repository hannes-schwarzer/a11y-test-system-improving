//import { Level, TestCase } from "../../components/TestCase/TestCase";

export const Duplicates = () => {
  return (
    <>
      {/*}      <TestCase
        title={"Duplicate id"}
        successCriterionInWords={"Parsing"}
        successCriterionNumber={"4.1.1"}
        linkToSuccessCriterion={
          "https://www.w3.org/WAI/WCAG21/quickref/#parsing"
        }
        level={Level.A}
        linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F77.html"}
        explanation={
          "In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features."
        }
      >
        <div id={"nav"}>global nav</div>
        <div id={"nav"}>page nav</div>
      </TestCase>

      <TestCase
        title={"EmptyPageTitle h1"}
        successCriterionInWords={"Name, Role, Value"}
        successCriterionNumber={"4.1.2"}
        linkToSuccessCriterion={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        level={Level.A}
      >
        <h1></h1>
        <p>This paragraph is preceded by an empty h1</p>
      </TestCase>

      <TestCase
        title={"Form element has no label"}
        successCriterionInWords={"Name, Role, Value"}
        successCriterionNumber={"4.1.2"}
        level={Level.A}
        linkToSuccessCriterion={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
      >
        <form>
          <input type={"text"} />
        </form>
      </TestCase>

      <TestCase
        title={"Form element has no label"}
        successCriterionInWords={"Labels or Instructions"}
        linkToSuccessCriterion={
          "https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions"
        }
        successCriterionNumber={"3.3.2"}
        level={Level.A}
        linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
      >
        <form>
          <input type={"text"} />
        </form>
      </TestCase>

      <TestCase
        title={"This page has a title element that is empty."}
        successCriterionInWords={"Page Titled"}
        successCriterionNumber={"2.4.2"}
        linkToSuccessCriterion={
          "https://www.w3.org/WAI/WCAG21/quickref/#page-titled"
        }
        level={Level.A}
        linkToExplanation={
          "https://www.w3.org/WAI/standards-guidelines/act/rules/html-page-non-empty-title-2779a5/"
        }
      >
        <html>
          <title></title>
        </html>
      </TestCase>

              <TestCase
          level={Level.AAA}
          title={
            "F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without " +
            "specifying background colors or vice versa"
          }
          successCriterionInWords={"Visual Presentation"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation"
          }
          successCriterionNumber={"1.4.8"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html"
          }
          explanation={
            "Specifying foreground color of link text with CSS: In the example below the link text (foreground) color is " +
            "defined. However, the background color is not defined. Therefore, the example fails the " +
            "Success Criterion."
          }
        >
          <p>
            ... document body... <a href="foo.htm">Foo</a>
          </p>
        </TestCase>

<TestCase
          title={
            "F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision"
          }
          successCriterionInWords={"Use of Color"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"
          }
          successCriterionNumber={"1.4.1"}
          level={Level.A}
          explanation={
            "Links miss the underline and are only identifiable by their blue color."
          }
        >
          <p>
            To find out more about the{" "}
            <a
              className={"use-of-color__no-decoration"}
              href="rain_in_spain.html"
            >
              rain in spain
            </a>{" "}
            there are many resources.
          </p>
        </TestCase>

                <TestCase
          title={
            "F87: Failure of Success Criterion 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the 'content' property in CSS"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "In the following example, :before and :after are used to indicate speaker changes and to insert quotation marks in a screenplay."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F87.html"
          }
        >
          <p className="iar__jim">
            <q className={"iar__quote"}>Do you think he's going to make it?</q>
          </p>
          <p className="iar__mary">
            <q className={"iar__quote"}>It's not looking good.</q>
          </p>
        </TestCase>

        <TestCase
          title={"Text formatting used instead of an actual heading"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
        >
          <div className={"fake-heading"}>Fake Heading</div>
          <p>
            This paragraph is preceded by a div that is styled to look like a
            heading
          </p>
        </TestCase>

                <TestCase
          title={
            "Improperly nested lists: ul and ol must only directly contain li, script or template elements"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          linkToExplanation={
            "https://dequeuniversity.com/rules/axe/4.3/list?application=AxeChrome"
          }
          explanation={
            "Screen readers have a specific way of announcing lists. This feature makes lists clearer to understand, but will only work if lists are properly structured. When content elements other than list items are contained within a set of list elements, screen readers cannot inform the listener that they are listening to items within the list. For a list to be valid, it must have both parent elements (a set of ul elements or a set of ol elements) and child elements (declared inside of these tags using the li element), and any other content elements are invalid. Although some non-content elements such as script, template, style, meta, link, map, area, and datalist are permitted within lists, content elements other than li are not permitted."
          }
        >
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <ul>
              Incorrect sublist
              <li>Subitem 1</li>
              <li>Subitem 2</li>
            </ul>
            <li>Item 3</li>
          </ul>
        </TestCase>

        <TestCase
          title={"Table has no table headings"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/tutorials/tables/one-header/"
          }
        >
          <table>
            <caption>Shelly's Daughters</caption>
            <thead>
              <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Birthday</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jackie</td>
                <td>5</td>
                <td>April 5</td>
              </tr>
              <tr>
                <td>Beth</td>
                <td>8</td>
                <td>January 14</td>
              </tr>
            </tbody>
          </table>
        </TestCase>

                <TestCase
          title={"Non-decorative content inserted using CSS"}
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/GL/2013/WD-WCAG20-TECHS-20130711/F87"
          }
        >
          <p id={"css-generated-text"}>My favourite food is </p>
        </TestCase>
      */}
    </>
  );
};
