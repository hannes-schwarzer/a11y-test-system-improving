import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import "./InfoAndRelationships.css";
import CHAPTER from "../../../../../assets/chapter.png";
import GO from "../../../../../assets/go.png";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const InfoAndRelationships = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "Implicit heading: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "Using CSS to style the p element to look like a heading: The author intended to make a heading but didn't want the look of the default HTML heading. So they used CSS to style the P element to look like a heading and they called it a heading. But they failed to use the proper HTML heading element. Therefore, the Assisitive Technology could not distinguish it as a heading."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F2.html"
          }
          id={"1.3.1_1"}
        >
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <p className="iar__paragraph-as-heading">Introduction</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </TestCase>

        <TestCase
          title={
            "Implicit heading: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text"
          }
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          explanation={"This is a div which is being styled to look like an h1"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F2.html"
          }
          id={"1.3.1_2"}
        >
          <div className={"iar__div-as-heading"}>Looks like Page Heading</div>
          <p>
            This paragraph is preceded by a div that is styled to look like a
            heading
          </p>
        </TestCase>

        <TestCase
          title={
            "F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "Images of text used as headings where the images are not marked up with heading tags: This is a failure because at a minimum the img element should be enclosed within a header element. A better solution would be to eliminate the image and to enclose the text within a header element which has been styled using CSS."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F2.html"
          }
          id={"1.3.1_3"}
        >
          <img src={CHAPTER} alt="Chapter One" />
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </TestCase>

        <TestCase
          title={
            "F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "Using CSS to visually emphasize a phrase or word without conveying that emphasis semantically: The following example fails because the information conveyed by using the CSS font-weight property to change to a bold font is not conveyed through semantic markup or stated explicitly in the text."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F2.html"
          }
          id={"1.3.1_4"}
        >
          <p>
            "I said, <span className="iar__yell">no</span>, not before dinner!",
            was the exasperated response when Timmy asked his mother for the
            fourth time for an ice cream cone.
          </p>
        </TestCase>

        <TestCase
          title={
            "F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "The following example incorrectly uses white space characters to format a paragraph into a two column format."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F33.html"
          }
          id={"1.3.1_5"}
        >
          <pre>
            {`
Web Content Accessibility Guidelines      including blindness and low vision, 
2.0 (WCAG 2.0) covers a wide range of     deafness and hearing loss, learning 
issues and recommendations for making     difficulties, cognitive limitations, limited 
Web content more accessible. This         movement, speech difficulties, and 
document contains principles,             others. Following these guidelines will 
guidelines, Success Criteria, benefits,   also make your Web content more 
and examples that define and explain      accessible to the vast majority of users, 
the requirements for making Web-based     including older users. It will also enable
information and applications accessible.  people to access Web content using 
"Accessible" means usable to a wide       many different devices - including a 
range of people with disabilities,        wide variety of assistive technologies.
            `}
          </pre>
        </TestCase>

        <TestCase
          title={
            "F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "The following example incorrectly uses white space to format a Menu as a visual table."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F34.html"
          }
          id={"1.3.1_6"}
        >
          <pre>
            {`
Menu
         Breakfast        Lunch           Dinner

Monday   2 fried eggs    tomato soup     garden salad
         bacon           hamburger       Fried Chicken
         toast           onion rings     green beans
                         Oatmeal cookie  mashed potatoes

Tuesday   Pancakes       vegetable soup  Caesar salad
          sausage        hot dogs        Spaghetti with meatballs
          orange juice   potato salad    Italian bread
                         brownie         ice cream
          `}
          </pre>
        </TestCase>

        <TestCase
          title={
            "F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "Scripting a span element: Scripted event handling is added to a span element so that it functions as a link when clicked with a mouse. Assistive technology does not recognize this element as a link."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html"
          }
          id={"1.3.1_7"}
        >
          <span
            onClick={() => {
              document.location.href = "/some-page";
            }}
          >
            Fake link
          </span>
        </TestCase>

        <TestCase
          title={
            "F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "Scripting an img element: Scripted event handling is added to an img element so that it functions as a link when clicked with a mouse. Assistive technology does not recognize this element as a link."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html"
          }
          id={"1.3.1_8"}
        >
          <img
            src={GO}
            alt="go to the new page"
            onClick={() => {
              document.location.href = "newpage.html";
            }}
          />
        </TestCase>

        <TestCase
          title={
            "F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "A heading used only for visual effect: In this example, a heading element is used to display an address in a large, bold font. The address does not identify a new section of the document, however, so it should not be marked as a heading."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F43.html"
          }
          id={"1.3.1_9"}
        >
          <div>
            <p>Interested in learning more? Write to us at</p>
            <h3>3333 Third Avenue, Suite 300 · New York City</h3>
            <p>
              And we'll send you the complete informational packet absolutely
              Free!
            </p>
          </div>
        </TestCase>

        <TestCase
          title={
            "F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "Using heading elements for presentational effect: In this example, heading markup is used in two different ways: to convey document structure and to create visual effects. The h1 and h2 elements are used appropriately to mark the beginning of the document as a whole and the beginning of the abstract. However, the h3 and h4 elements between the title and the abstract are used only for visual effect — to control the fonts used to display the authors' names and the date."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F43.html"
          }
          id={"1.3.1_10"}
        >
          <h1>Study on the Use of Heading Elements in Web Pages</h1>
          <h3>Joe Jones and Mary Smith</h3>
          <h4>March 14, 2006</h4>
          <h2>Abstract</h2>
          <p>A study was conducted in early 2006 ..</p>
        </TestCase>

        <TestCase
          title={
            "F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "Using blockquote elements to provide additional indentation: The following example uses blockquote for text that is not a quotation to give it prominence by indenting it when displayed in graphical browsers."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F43.html"
          }
          id={"1.3.1_11"}
        >
          <p>
            After extensive study of the company Web site, the task force
            identified the following common problem.
          </p>
          <blockquote>
            <p>
              The use of markup for presentational effects made Web pages
              confusing to screen reader users.
            </p>
          </blockquote>
          <p>
            The committee lists particular examples of the problems introduced
            by this practice below.
          </p>
        </TestCase>

        <TestCase
          title={
            "F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "Using the fieldset and legend elements to give a border to text: "
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F43.html"
          }
          id={"1.3.1_12"}
        >
          <fieldset>
            <legend>Bargain Corner</legend>
            <p>Buy today, and save 20%</p>
          </fieldset>
        </TestCase>

        <TestCase
          title={
            "F46: Failure of Success Criterion 1.3.1 due to using th elements, layout tables"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F46.html"
          }
          explanation={
            "Here is a simple example that uses a table to layout content in a three column format."
          }
          id={"1.3.1_13"}
        >
          <table summary="layout table">
            <tr>
              <th colSpan={3}>Page Title</th>
            </tr>
            <tr>
              <td>
                <div>Navigation content</div>
              </td>
              <td>
                <div>Main content</div>
              </td>
              <td>
                <div>Right sidebar content</div>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>footer</td>
            </tr>
          </table>
        </TestCase>

        <TestCase
          title={
            "F48: Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={"This is a schedule formatted with tabs between columns"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F48.html"
          }
          id={"1.3.1_14"}
        >
          <pre>
            {`
\tMonday\tTuesday\tWednesday\tThursday\tFriday
8:00-
9:00\tMeet with Sam\t\t\t\t
9:00-
10:00\t\t\tDr. Williams\tSam again\tLeave for San Antonio
          `}
          </pre>
        </TestCase>

        <TestCase
          title={
            "F48: Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "Preformatted text is used to display election results in a tabular manner."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F48.html"
          }
          id={"1.3.1_15"}
        >
          <pre>
            {`
CIRCUIT COURT JUDGE BRANCH 3
                                                  W
                                                   R
                                          M R E     I
                                           A . L     T
                                     M L    R   B     E
                                      I A    Y   E     -
                                       K N        R     I
                                        E G        T     N
                                       -----   -----   -----
0001 TOWN OF ALBION WDS 1-2               22      99       0
0002 TOWN OF BERRY WDS 1-2                52     178       0
0003 TOWN OF BLACK EARTH                  16      49       0
0004 TOWN OF BLOOMING GROVE WDS 1-3       44     125       0
0005 TOWN OF BLUE MOUNDS                  33     117       0
0006 TOWN OF BRISTOL WDS 1-3             139     639       1
0007 TOWN OF BURKE WDS 1-4                80     300       0
0008 TOWN OF CHRISTIANA WDS 1-2           22      50       0
            `}
          </pre>
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
            "In this example, :before is used to differentiate facts from opinions."
          }
          id={"1.3.1_16"}
        >
          <p className="iar__fact">
            The defendant was at the scene of the crime when it occurred.
          </p>
          <p className="iar__opinion">The defendant committed the crime.</p>
        </TestCase>

        <TestCase
          title={
            "F90: Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F90.html"
          }
          explanation={
            "Table content not correctly associated to nested headers: In this example, nested headers are used, but the content cells are incorrectly associated via the id and headers attributes. All cells reference top level header 'Exams' (id=\"e\") - this isn't correct for the last three columns which should reference header 'Projects'. Also, the referencing of the second level column headers has been accidentally swapped even though in this example this makes no difference as the contents (1, 2, Final) are repeated."
          }
          id={"1.3.1_17"}
        >
          <table>
            <tr>
              <th rowSpan={2} id="h">
                Homework
              </th>
              <th colSpan={3} id="e">
                Exams
              </th>
              <th colSpan={3} id="p">
                Projects
              </th>
            </tr>
            <tr>
              <th id="e1" headers="e">
                1
              </th>
              <th id="e2" headers="e">
                2
              </th>
              <th id="ef" headers="e">
                Final
              </th>
              <th id="p1" headers="p">
                1
              </th>
              <th id="p2" headers="p">
                2
              </th>
              <th id="pf" headers="p">
                Final
              </th>
            </tr>
            <tr>
              <td headers="h">15%</td>
              <td headers="e p1">15%</td> {/* should be "e e1"*/}
              <td headers="e p2">15%</td> {/* should be "e e2"*/}
              <td headers="e pf">20%</td> {/* should be "e ef"*/}
              <td headers="e e1">10%</td> {/* should be "p p1"*/}
              <td headers="e e2">10%</td> {/* should be "p p2"*/}
              <td headers="e ef">15%</td> {/* should be "p pf"*/}
            </tr>
          </table>
        </TestCase>

        <TestCase
          title={
            "F91: Failure of Success Criterion 1.3.1 for not correctly marking up table headers"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "Headers not marked up appropriately: This table does not use th (or other appropriate header markup) for headers. Instead, it uses td elements for all cells. Navigating cell by cell, screen readers will often fail to read the header cells associated with content."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F91.html"
          }
          id={"1.3.1_18"}
        >
          <table>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Height (cm)</td>
              <td>Weight (kg)</td>
            </tr>

            <tr>
              <td>Linda</td>
              <td>33</td>
              <td>169</td>
              <td>59</td>
            </tr>

            <tr>
              <td>Jack</td>
              <td>37</td>
              <td>184</td>
              <td>74</td>
            </tr>

            <tr>
              <td>Kira</td>
              <td>8</td>
              <td>120</td>
              <td>21</td>
            </tr>

            <tr>
              <td>Daniel</td>
              <td>3</td>
              <td>79</td>
              <td>14</td>
            </tr>
          </table>
        </TestCase>

        <TestCase
          title={
            "F92: Failure of Success Criterion 1.3.1 due to the use of role presentation on content which conveys semantic information"
          }
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          explanation={
            "In this example, tabular data is marked up with role=presentation. Though design layout tables can be marked up in such a way, data tables need to retain their semantic information and should therefore not be marked up with role=presentation."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F92.html"
          }
          id={"1.3.1_19"}
        >
          <table role="presentation">
            <caption>Fruits and their colors</caption>
            <tr>
              <th>Name</th>
              <th>Color</th>
            </tr>
            <tr>
              <td scope="row">banana</td>
              <td>yellow</td>
            </tr>
            <tr>
              <td scope="row">orange</td>
              <td>orange</td>
            </tr>
          </table>
        </TestCase>

        <TestCase
          title={"Li element with no parent"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={
            "https://accessibilityinsights.io/info-examples/web/listitem/"
          }
          explanation={
            "In a properly structured list, all list items ( <li> elements) are contained within a <ul> or <ol> element. When an assistive technology encounters a list that’s poorly structured, it might respond in an unexpected way. As a result, people who use assistive technologies might find it difficult to interpret the list."
          }
          id={"1.3.1_20"}
        >
          <li>no parent</li>
        </TestCase>

        <TestCase
          title={"List not marked up as a list"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H48.html"}
          explanation={
            "When markup is used that visually formats items as a list but does not indicate the list relationship, users may have difficulty in navigating the information. An example of such visual formatting is including asterisks in the content at the beginning of each list item and using <br> elements to separate the list items."
          }
          id={"1.3.1_21"}
        >
          * fake list object 1
          <br />
          * fake list object 2
          <br />
          * fake list object 3
          <br />
          * fake list object 4
          <br />
        </TestCase>

        <TestCase
          title={"DT or DD elements that are not contained within a DL element"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://dequeuniversity.com/rules/axe/4.1/dlitem"}
          explanation={
            "A definition list item must be wrapped in parent dl elements, otherwise it will be invalid. A definition list must follow a specific hierarchy. A list is defined using the dl element. What follows are alternating sets of dt and dd elements, starting with the dt element. dt elements define a term while dd elements denote a term's description. Each set of dt elements must have a corresponding set of dd elements. Only dt and dd elements are allowed in definition list. If this hierarchy is not followed, the list will be invalid."
          }
          id={"1.3.1_22"}
        >
          <dt>html</dt>
          <dd>a markup language for describing web documents</dd>
        </TestCase>

        <TestCase
          title={
            "Improperly nested lists: ul and ol must only directly contain li, script or template elements"
          }
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://dequeuniversity.com/rules/axe/3.5/list"}
          explanation={
            "Screen readers have a specific way of announcing lists. This feature makes lists clearer to understand, but will only work if lists are properly structured. When content elements other than list items are contained within a set of list elements, screen readers cannot inform the listener that they are listening to items within the list. For a list to be valid, it must have both parent elements (a set of ul elements or a set of ol elements) and child elements (declared inside of these tags using the li element), and any other content elements are invalid. Although some non-content elements such as script, template, style, meta, link, map, area, and datalist are permitted within lists, content elements other than li are not permitted."
          }
          id={"1.3.1_23"}
        >
          <ul>
            <ul>
              <li>improperly nested</li>
            </ul>
          </ul>
        </TestCase>

        <TestCase
          title={"Table with column headers and double row headers"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/tutorials/tables/irregular/"
          }
          explanation={
            "To make sure that such header cells that span multiple rows are correctly associated with all the cells in those rows, the rows must be grouped. To define row groups wrap the corresponding rows in <tbody> elements (table body). Additionally, the scope attribute of header cells spanning rows has to be set to rowgroup. If a header spans multiple header rows, wrap the rows in a <thead> element instead of a <tbody> element. Use a <tfoot> element if a header spans multiple rows in the footer area of a table."
          }
          id={"1.3.1_24"}
        >
          <table>
            <caption>Road Traffic at Junctions</caption>
            <tbody>
              <tr>
                <th>Road</th>
                <th>Junction</th>
                <th>Car</th>
                <th>Bus</th>
              </tr>
              <tr>
                <th>Regent Street</th>
                <th>Oxford Street</th>
                <td>307</td>
                <td>12</td>
              </tr>
              <tr>
                <th>Regent Street</th>
                <th>Bond Street</th>
                <td>1731</td>
                <td>58</td>
              </tr>
              <tr>
                <th>Southwark Street</th>
                <th>Union Street</th>
                <td>1975</td>
                <td>51</td>
              </tr>
            </tbody>
          </table>
        </TestCase>

        <TestCase
          title={"Table has no scope attributes"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/tutorials/tables/irregular/"
          }
          explanation={
            "For example, a header cell that spans three columns should be associated with corresponding data cells in the column group. This can be done by setting the scope attribute of the header cell to the value colgroup. The same principle applies to header cells spanning multiple rows. In this case, they are associated with by using the value rowgroup in the scope attribute."
          }
          id={"1.3.1_25"}
        >
          <table>
            <caption>Opening times</caption>
            <tbody>
              <tr>
                <td></td>
                <th>Monday-Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
              </tr>
              <tr>
                <th>08:00 - 12:00</th>
                <td>open</td>
                <td>open</td>
                <td>closed</td>
              </tr>
              <tr>
                <th>12:00 - 16:00</th>
                <td>open</td>
                <td>closed</td>
                <td>closed</td>
              </tr>
            </tbody>
          </table>
        </TestCase>

        <TestCase
          title={"Table nested within table header"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/tutorials/tables/irregular/"
          }
          explanation={
            "A table is nested within another table. Here withing a header cell."
          }
          id={"1.3.1_26"}
        >
          <table>
            <tbody>
              <tr>
                <th>Item</th>
                <th>Cost</th>
              </tr>
              <tr>
                <td>Lunch</td>
                <td>£6.99</td>
              </tr>
              <tr>
                <th>
                  Holiday
                  <table>
                    <tbody>
                      <tr>
                        <th>Item</th>
                        <th>Cost</th>
                      </tr>
                      <tr>
                        <td>Accomodation</td>
                        <td>£499.99</td>
                      </tr>
                      <tr>
                        <td>Travel</td>
                        <td>£109.99</td>
                      </tr>
                    </tbody>
                  </table>
                </th>
                <td>£609.99</td>
              </tr>
            </tbody>
          </table>
        </TestCase>

        <TestCase
          title={"Table nested within table"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/tables/"}
          explanation={
            "A table is nested within another table. Here withing a body cell."
          }
          id={"1.3.1_27"}
        >
          <table>
            <tbody>
              <tr>
                <th>Item</th>
                <th>Cost</th>
              </tr>
              <tr>
                <td>Lunch</td>
                <td>£6.99</td>
              </tr>
              <tr>
                <td>
                  Holiday
                  <table>
                    <tbody>
                      <tr>
                        <th>Item</th>
                        <th>Cost</th>
                      </tr>
                      <tr>
                        <td>Accomodation</td>
                        <td>£499.99</td>
                      </tr>
                      <tr>
                        <td>Travel</td>
                        <td>£109.99</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>£609.99</td>
              </tr>
            </tbody>
          </table>
        </TestCase>

        <TestCase
          title={"Table with inconsistent numbers of columns in rows"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/tables/"}
          explanation={
            "Data tables are used to organize data with a logical relationship in grids. Accessible tables need HTML markup that indicates header cells and data cells and defines their relationship. Assistive technologies use this information to provide context to users. If the structure is broken or irregular, tables can be very confusing."
          }
          id={"1.3.1_28"}
        >
          <table>
            <caption>Requester information</caption>
            <thead>
              <tr>
                <th colSpan={10}>Requester information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={"label"} colSpan={1} id={"name"}>
                  Name
                </th>
                <td colSpan={7} headers={"name"}>
                  Jon Smith
                </td>
                <th className={"label"} colSpan={1} id={"date"}>
                  Date
                </th>
                <td colSpan={1} headers={"date"}>
                  9/9/2005
                </td>
              </tr>
              <tr>
                <th className={"label"} colSpan={1} id={"dept"}>
                  Department
                </th>
                <td colSpan={9} headers={"dept"}>
                  Customer Service
                </td>
              </tr>
              <tr>
                <th className={"label"} colSpan={1} id={"remail"}>
                  E-Mail
                </th>
                <td colSpan={4} headers={"remail"}>
                  jon.smith@gov.uk
                </td>
                <th className={"label"} colSpan={1} id={"rphone"}>
                  Phone
                </th>
                <td colSpan={4} headers={"rphone"}>
                  07700 900258
                </td>
              </tr>
            </tbody>
          </table>
        </TestCase>

        <TestCase
          title={"Table that only has TH elements in it"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/tables/"}
          explanation={
            "Header cells must be marked up with <th>, and data cells with <td> to make tables accessible. For more complex tables, explicit associations may be needed using scope, id, and headers attributes. Here, id and scope are provided, but no <td> Elements."
          }
          id={"1.3.1_29"}
        >
          <table>
            <thead>
              <tr>
                <th scope="col" id="1.3.1_29_foo">
                  Foo
                </th>
                <th scope="col" id="1.3.1_29_bar">
                  Bar
                </th>
                <th scope="col" id="1.3.1_29_bat">
                  Bat
                </th>
                <th scope="col" id="1.3.1_29_baz">
                  Baz
                </th>
              </tr>
            </thead>
          </table>
        </TestCase>

        <TestCase
          title={"Table is missing a caption"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/tutorials/tables/caption-summary/"
          }
          explanation={
            "A caption functions like a heading for a table. Most screen readers announce the content of captions. Captions help users to find a table and understand what it’s about and decide if they want to read it. If the user uses “Tables Mode”, captions are the primary mechanism to identify tables. The caption is provided by the <caption> element."
          }
          id={"1.3.1_30"}
        >
          <table>
            <thead>
              <tr>
                <th scope={"col"}>Name</th>
                <th scope={"col"}>Age</th>
                <th scope={"col"}>Birthday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope={"row"}>Jackie</th>
                <td>5</td>
                <td>April 5</td>
              </tr>
              <tr>
                <th scope={"row"}>Beth</th>
                <td>8</td>
                <td>January 14</td>
              </tr>
            </tbody>
          </table>
        </TestCase>

        <TestCase
          title={"Table has an empty table header"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={
            "https://equalizedigital.com/accessibility-checker/empty-missing-table-header/"
          }
          explanation={
            "A table header helps establish a relationship between table cells across rows or columns and to explain what the data is in each individual cell. Sighted people can rather quickly scan across rows and columns in a table and find the information that they want. For a blind or visually impaired person who is using assistive technology to read the table to them, it can be very challenging to interpret and understand how different data points in the various cells connect to one another."
          }
          id={"1.3.1_31"}
        >
          <table>
            <caption>Shelly's Daughters</caption>
            <thead>
              <tr>
                <th></th>
                <th scope={"col"}>Age</th>
                <th scope={"col"}>Birthday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope={"row"}>Jackie</td>
                <td>5</td>
                <td>April 5</td>
              </tr>
              <tr>
                <td scope={"row"}>Beth</td>
                <td>8</td>
                <td>January 14</td>
              </tr>
            </tbody>
          </table>
        </TestCase>

        <TestCase
          title={"Form element has no label"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
          explanation={
            "Provide labels to identify all form controls, including text fields, checkboxes, radio buttons, and drop-down menus. In most cases, this is done by using the <label> element. Labels need to describe the purpose of the form control."
          }
          id={"1.3.1_32"}
        >
          <form>
            <input type={"text"} />
          </form>
        </TestCase>

        <TestCase
          title={"Empty label found"}
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
          explanation={
            "Provide labels to identify all form controls, including text fields, checkboxes, radio buttons, and drop-down menus. In most cases, this is done by using the <label> element. Labels need to describe the purpose of the form control."
          }
          id={"1.3.1_33"}
        >
          <form>
            <label htmlFor={"empty"}></label>
            <input id={"empty"} type={"text"} />
          </form>
        </TestCase>

        <TestCase
          title={
            "Labels missing when they would look clumsy for some form controls"
          }
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
          explanation={
            "Provide labels to identify all form controls, including text fields, checkboxes, radio buttons, and drop-down menus. In most cases, this is done by using the <label> element. Labels need to describe the purpose of the form control."
          }
          id={"1.3.1_34"}
        >
          <form>
            <label htmlFor={"missing-labels-day"}>
              Your child's date of birth
            </label>
            <p>
              <input id={"missing-labels-day"} type={"text"} />
              <input id={"missing-labels-month"} type={"text"} />
              <input id={"missing-labels-year"} type={"text"} />
            </p>
          </form>
        </TestCase>

        <TestCase
          title={"Group of radio buttons not enclosed in a fieldset"}
          successCriterionInWords={"Info and Relationships"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/grouping/"}
          explanation={
            "Grouping related form controls makes forms more understandable for all users, as related controls are easier to identify. It also makes it easier for people to focus on smaller and more manageable groups rather than try to grasp the entire form at once. Grouping needs to be carried out visually and in the code, for example, by using the <fieldset> and <legend> elements to associate related form controls."
          }
          id={"1.3.1_35"}
        >
          <h3>Do you already have a personal user account?</h3>
          <label className={"block-label"} htmlFor={"radio-inline-1"}>
            <input
              id={"radio-inline-1"}
              name={"radio-inline-group"}
              type={"radio"}
              value={"Yes"}
            />
            Yes
          </label>
          <br />
          <label className={"block-label"} htmlFor={"radio-inline-2"}>
            <input
              id={"radio-inline-2"}
              name={"radio-inline-group"}
              type={"radio"}
              value={"No"}
            />
            No
          </label>
        </TestCase>

        <TestCase
          title={"Group of check boxes not enclosed in a fieldset"}
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/grouping/"}
          explanation={
            "Grouping related form controls makes forms more understandable for all users, as related controls are easier to identify. It also makes it easier for people to focus on smaller and more manageable groups rather than try to grasp the entire form at once. Grouping needs to be carried out visually and in the code, for example, by using the <fieldset> and <legend> elements to associate related form controls."
          }
          id={"1.3.1_36"}
        >
          <h3>Which types of waste do you transport regularly?</h3>
          <label className={"block-label"} htmlFor={"waste-type-1"}>
            <input
              id={"waste-type-1"}
              name={"waste-types"}
              type={"checkbox"}
              value={"waste-animal"}
            />
            Waste from animal carcasses
          </label>
          <br />
          <label className={"block-label"} htmlFor={"waste-type-2"}>
            <input
              id={"waste-type-2"}
              name={"waste-types"}
              type={"checkbox"}
              value={"waste-mines"}
            />
            Waste from mines or quarries
          </label>
          <br />
          <label className={"block-label"} htmlFor={"waste-type-3"}>
            <input
              id={"waste-type-3"}
              name={"waste-types"}
              type={"checkbox"}
              value={"waste-farm-agricultural"}
            />
            Farm or agricultural waste
          </label>
        </TestCase>

        <TestCase
          title={"Fieldset without a legend"}
          successCriterionInWords={"forms"}
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H71.html"}
          explanation={
            "Form controls can be grouped by enclosing them within the fieldset element. All controls within a given fieldset are then related. The first element inside the fieldset must be a legend element, which provides a label or description for the group. Authors should avoid nesting fieldsets unnecessarily, as this can lead to confusion."
          }
          id={"1.3.1_37"}
        >
          <form>
            <fieldset>I am a fieldset without a legend</fieldset>
          </form>
        </TestCase>

        <TestCase
          title={"Empty legend and fieldset"}
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H71.html"}
          explanation={
            "Hard to judge if this is rather a semantic or a syntactic failure."
          }
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          id={"1.3.1_38"}
        >
          <p>
            <a href="https://www.w3.org/TR/WCAG20-TECHS/F70.html">
              Link to failure description of 4.1.1
            </a>
          </p>
          <form>
            <fieldset>
              <legend></legend>
            </fieldset>
          </form>
        </TestCase>

        <TestCase
          title={
            "Label element with for= attribute but not matching id= attribute of form control"
          }
          successCriterionInWords={"Info and Relationships"}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H44.html"}
          explanation={
            "The objective of this technique is to use the label element to explicitly associate a form control with a label. A label is attached to a specific form control through the use of the for attribute. The value of the for attribute must be the same as the value of the id attribute of the form control."
          }
          level={Level.A}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          id={"1.3.1_39"}
        >
          <form>
            <fieldset>
              <legend>Non-matching for attribute</legend>
              <label htmlFor={"not-matching-anything"}>form</label>
              <input
                id={"label-for-not-matching"}
                type={"checkbox"}
                value={"yes"}
              />
            </fieldset>
          </form>
        </TestCase>

        <TestCase
          title={"Missing labels in checkboxes"}
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
          id={"1.3.1_40"}
        >
          <form>
            <fieldset>
              <legend>What is your nationality?</legend>
              <label>
                British (including English, Scottish, Welsh and Northern Irish)
              </label>
              <input
                id={"nationality_british"}
                name={"nationality.british"}
                type={"checkbox"}
                value={"true"}
              />
              <label>Irish</label>
              <input
                id={"nationality_irish"}
                name={"nationality.irish"}
                type={"checkbox"}
                value={"true"}
              />
              <label>Citizen of a different country</label>
              <input
                id={"nationality_hasOtherCountry"}
                name={"nationality.hasOtherCountry"}
                type={"checkbox"}
                value={"true"}
              />
            </fieldset>
          </form>
        </TestCase>

        <TestCase
          title={"Placeholder no label"}
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/tutorials/forms/instructions/"
          }
          explanation={
            "While placeholder text provides valuable guidance for many users, placeholder text is not a replacement for labels. Assistive technologies, such as screen readers, do not treat placeholder text as labels. Moreover, at the time of writing this tutorial, placeholder text is not broadly supported across assistive technologies and not displayed in older web browsers."
          }
          id={"1.3.1_41"}
        >
          <form>
            <input
              id={"search-main"}
              name={"q"}
              placeholder={"Search"}
              type={"search"}
            />
            <input className={"submit"} type={"submit"} value={"Search"} />
          </form>
        </TestCase>

        <TestCase
          title={
            "Article element used to mark-up an element that's actually not an article element."
          }
          successCriterionInWords={"html"}
          successCriterionNumber={"1.3.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/GL/wiki/Using_HTML5_article_element"
          }
          explanation={
            "The <article> element is self-contained as it is used to outline a self-contained composition that can be spread around the Web if required for example for syndication purposes."
          }
          id={"1.3.1_42"}
        >
          <article className={"not-article-content"}>
            <h2 id={"parent-other"}>Elsewhere on GOV.UK</h2>
            <nav aria-labelledby={"parent-other"} role={"navigation"}>
              <ul>
                <li>
                  <a href={"/somewhere"}>Some link somewhere</a>
                </li>
                <li>
                  <a href={"/somewhere-else"}>Some link somewhere else</a>
                </li>
              </ul>
            </nav>
          </article>
        </TestCase>

        <TestCase
          title={"Link with a role=button does not work with space bar"}
          successCriterionInWords={"Info and Relationships"}
          successCriterionNumber={"1.3.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html"
          }
          explanation={"Only reacts on enter."}
          id={"1.3.1_43"}
        >
          <a className={"iar__button"} href={"/some-page"} role={"button"}>
            Continue
          </a>
        </TestCase>
      </Frame>
    </>
  );
};
