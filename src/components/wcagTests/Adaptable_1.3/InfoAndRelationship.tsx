import { TestCase } from "../../TestCase";
import "./InfoAndRelationship.css";
import CHAPTER from "../../../assets/chapter.png";
import GO from "../../../assets/go.png";

export const InfoAndRelationship = () => {
  return (
    <>
      <h2>1.3.1 Info and Relationships</h2>
      <TestCase
        testCaseTitle={
          "F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text"
        }
        testCategory={"1.3.1 Info and Relationships"}
        testCaseNumber={1}
        guideline={"1.3.1"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
        }
      >
        <h4>
          Example 1: Using CSS to style the p element to look like a heading
        </h4>
        <p>
          The author intended to make a heading but didn't want the look of the
          default HTML heading. So they used CSS to style the P element to look
          like a heading and they called it a heading. But they failed to use
          the proper HTML heading element. Therefore, the Assisitive Technology
          could not distinguish it as a heading.
        </p>
        <p className="heading1">Introduction</p>
        <p>
          This introduction provides detailed information about how to use this
          ........
        </p>
        <h4>
          Example 2: Images of text used as headings where the images are not
          marked up with heading tags
        </h4>
        <p>
          This is a failure because at a minimum the img element should be
          enclosed within a header element. A better solution would be to
          eliminate the image and to enclose the text within a header element
          which has been styled using CSS.
        </p>
        <img src={CHAPTER} alt="Chapter One" />
        <h4>
          Example 3: Using CSS to visually emphasize a phrase or word without
          conveying that emphasis semantically
        </h4>
        <p>
          The following example fails because the information conveyed by using
          the CSS font-weight property to change to a bold font is not conveyed
          through semantic markup or stated explicitly in the text.
        </p>
        <p>
          "I said, <span className="yell">no</span>, not before dinner!", was
          the exasperated response when Timmy asked his mother for the fourth
          time for an ice cream cone.
        </p>
      </TestCase>

      <TestCase
        testCaseTitle={
          "F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content"
        }
        testCategory={"1.3.1 Info and Relationships"}
        testCaseNumber={2}
        guideline={"1.3.1"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
        }
      >
        <p>
          The following example incorrectly uses white space characters to
          format a paragraph into a two column format.
        </p>
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
        testCaseTitle={
          "F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content"
        }
        testCategory={"1.3.1 Info and Relationships"}
        testCaseNumber={3}
        guideline={"1.3.1"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
        }
      >
        <p>
          The following example incorrectly uses white space to format a Menu as
          a visual table.
        </p>
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
        testCaseTitle={
          "F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links"
        }
        testCategory={"1.3.1 Info and Relationships"}
        testCaseNumber={4}
        guideline={"1.3.1"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
        }
      >
        <div>
          <h4>Example 1: Scripting a span element</h4>
          <p>
            Scripted event handling is added to a span element so that it
            functions as a link when clicked with a mouse. Assistive technology
            does not recognize this element as a link.
          </p>
          <span
            onClick={() => {
              document.location.href = "newpage.html";
            }}
          >
            Fake link
          </span>
        </div>
        <div>
          <h4>Example 2: Scripting an img element</h4>
          <p>
            Scripted event handling is added to an img element so that it
            functions as a link when clicked with a mouse. Assistive technology
            does not recognize this element as a link.
          </p>
          <img
            src={GO}
            alt="go to the new page"
            onClick={() => {
              document.location.href = "newpage.html";
            }}
          />
        </div>
      </TestCase>
      <TestCase
        testCaseTitle={
          "F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content"
        }
        testCategory={"1.3.1 Info and Relationships"}
        testCaseNumber={5}
        guideline={"1.3.1"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
        }
      >
        <div>
          <h4>Example 1: A heading used only for visual effect</h4>
          <p>
            In this example, a heading element is used to display an address in
            a large, bold font. The address does not identify a new section of
            the document, however, so it should not be marked as a heading.
          </p>

          <p>Interested in learning more? Write to us at</p>
          <h4>3333 Third Avenue, Suite 300 · New York City</h4>

          <p>
            And we'll send you the complete informational packet absolutely
            Free!
          </p>
        </div>

        <div>
          <h4>Example 2: Using heading elements for presentational effect</h4>
          <p>
            In this example, heading markup is used in two different ways: to
            convey document structure and to create visual effects. The h1 and
            h2 elements are used appropriately to mark the beginning of the
            document as a whole and the beginning of the abstract. However, the
            h3 and h4 elements between the title and the abstract are used only
            for visual effect — to control the fonts used to display the
            authors' names and the date.
          </p>

          <h1>Study on the Use of Heading Elements in Web Pages</h1>
          <h3>Joe Jones and Mary Smith</h3>
          <h4>March 14, 2006</h4>
          <h2>Abstract</h2>
          <p>A study was conducted in early 2006 ..</p>
        </div>

        <div>
          <h4>
            Example 3: Using blockquote elements to provide additional
            indentation
          </h4>
          <p>
            The following example uses blockquote for text that is not a
            quotation to give it prominence by indenting it when displayed in
            graphical browsers.
          </p>

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
        </div>

        <div>
          <h4>
            Example 4: Using the fieldset and legend elements to give a border
            to text
          </h4>
          <fieldset>
            <legend>Bargain Corner</legend>
            <p>Buy today, and save 20%</p>
          </fieldset>
        </div>
      </TestCase>

      <TestCase
        testCaseTitle={
          "F46: Failure of Success Criterion 1.3.1 due to using th elements, layout tables"
        }
        testCategory={"1.3.1 Info and Relationships"}
        testCaseNumber={6}
        guideline={"1.3.1"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
        }
      >
        <p>
          Here is a simple example that uses a table to layout content in a
          three column format.
        </p>

        <table summary="layout table">
          <tr>
            <th colSpan={3}>Page Title</th>
          </tr>
          <tr>
            <td>
              <div>navigation content</div>
            </td>
            <td>
              <div>main content</div>
            </td>
            <td>
              <div>right sidebar content</div>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>footer</td>
          </tr>
        </table>
      </TestCase>
      <TestCase
        testCaseTitle={
          "F48: Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information"
        }
        testCategory={"1.3.1 Info and Relationships"}
        testCaseNumber={7}
        guideline={"1.3.1"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
        }
      >
        <div>
          <h4>Example 1: A schedule formatted with tabs between columns</h4>
          <pre>
            {`
\tMonday\tTuesday\tWednesday\tThursday\tFriday
8:00-
9:00\tMeet with Sam\t\t\t\t
9:00-
10:00\t\t\tDr. Williams\tSam again\tLeave for San Antonio
          `}
          </pre>
        </div>

        <div>
          <h4>Example 2: Election results displayed using preformatted text</h4>
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
        </div>
      </TestCase>

      <TestCase
        testCaseTitle={
          "F87: Failure of Success Criterion 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the 'content' property in CSS"
        }
        testCategory={"1.3.1 Info and Relationships"}
        testCaseNumber={8}
        guideline={"1.3.1"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
        }
      >
        <div>
          <h4>Example 1</h4>
          <p>
            In the following example, :before and :after are used to indicate
            speaker changes and to insert quotation marks in a screenplay.
          </p>

          <p className="jim">
            <q>Do you think he's going to make it?</q>
          </p>
          <p className="mary">
            <q>It's not looking good.</q>
          </p>
        </div>

        <div>
          <h4>Example 2</h4>
          <p>
            In this example, :before is used to differentiate facts from
            opinions.
          </p>

          <p className="fact">
            The defendant was at the scene of the crime when it occurred.
          </p>
          <p className="opinion">The defendant committed the crime.</p>
        </div>
      </TestCase>

      <TestCase
        testCaseTitle={
          "F90: Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes"
        }
        testCategory={"1.3.1 Info and Relationships"}
        testCaseNumber={9}
        guideline={"1.3.1"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
        }
      >
        <h4>Table content not correctly associated to nested headers</h4>
        <p>
          In this example, nested headers are used, but the content cells are
          incorrectly associated via the id and headers attributes. All cells
          reference top level header 'Exams' (id="e") - this isn't correct for
          the last three columns which should reference header 'Projects'. Also,
          the referencing of the second level column headers has been
          accidentally swapped even though in this example this makes no
          difference as the contents (1, 2, Final) are repeated.
        </p>

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
            <td headers="e p1">15%</td>
            {/* should be "e e1"*/}
            <td headers="e p2">15%</td> {/* should be "e e2"*/}
            <td headers="e pf">20%</td> {/* should be "e ef"*/}
            <td headers="e e1">10%</td> {/* should be "p p1"*/}
            <td headers="e e2">10%</td> {/* should be "p p2"*/}
            <td headers="e ef">15%</td> {/* should be "p pf"*/}
          </tr>
        </table>
      </TestCase>
      <TestCase
        testCaseTitle={
          "F91: Failure of Success Criterion 1.3.1 for not correctly marking up table headers"
        }
        testCategory={"1.3.1 Info and Relationships"}
        testCaseNumber={10}
        guideline={"1.3.1"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
        }
      >
        <h4>Example 1: Headers not marked up appropriately</h4>
        <p>
          This table does not use th (or other appropriate header markup) for
          headers. Instead, it uses td elements for all cells. Navigating cell
          by cell, screen readers will often fail to read the header cells
          associated with content.
        </p>

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
        testCaseTitle={
          "F92: Failure of Success Criterion 1.3.1 due to the use of role presentation on content which conveys semantic information"
        }
        testCategory={"1.3.1 Info and Relationships"}
        testCaseNumber={11}
        guideline={"1.3.1"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
        }
      >
        <h4>Example 1</h4>
        <p>
          In this example, tabular data is marked up with role=presentation.
          Though design layout tables can be marked up in such a way, data
          tables need to retain their semantic information and should therefore
          not be marked up with role=presentation.
        </p>

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
    </>
  );
};
