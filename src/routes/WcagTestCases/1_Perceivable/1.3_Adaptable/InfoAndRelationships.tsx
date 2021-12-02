import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import "./InfoAndRelationships.css";
import CHAPTER from "../../../../assets/chapter.png";
import GO from "../../../../assets/go.png";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const InfoAndRelationships = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={
            "F2: Failure of Success Criterion 1.3.1 due to using changes in text presentation to convey information without using the appropriate markup or text"
          }
          successCriterion={"1.3.1 Info and Relationships"}
          serial={1}
          guideline={"1.3.1"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
        >
          <h4>
            Example 1: Using CSS to style the p element to look like a heading
          </h4>
          <p>
            The author intended to make a heading but didn't want the look of
            the default HTML heading. So they used CSS to style the P element to
            look like a heading and they called it a heading. But they failed to
            use the proper HTML heading element. Therefore, the Assisitive
            Technology could not distinguish it as a heading.
          </p>
          <p className="heading1">Introduction</p>
          <p>
            This introduction provides detailed information about how to use
            this ........
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
            The following example fails because the information conveyed by
            using the CSS font-weight property to change to a bold font is not
            conveyed through semantic markup or stated explicitly in the text.
          </p>
          <p>
            "I said, <span className="yell">no</span>, not before dinner!", was
            the exasperated response when Timmy asked his mother for the fourth
            time for an ice cream cone.
          </p>
        </GuidelineError>

        <GuidelineError
          title={
            "F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content"
          }
          successCriterion={"1.3.1 Info and Relationships"}
          serial={2}
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
        </GuidelineError>

        <GuidelineError
          title={
            "F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content"
          }
          successCriterion={"1.3.1 Info and Relationships"}
          serial={3}
          guideline={"1.3.1"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
        >
          <p>
            The following example incorrectly uses white space to format a Menu
            as a visual table.
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
        </GuidelineError>

        <GuidelineError
          title={
            "F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links"
          }
          successCriterion={"1.3.1 Info and Relationships"}
          serial={4}
          guideline={"1.3.1"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
        >
          <div>
            <h4>Example 1: Scripting a span element</h4>
            <p>
              Scripted event handling is added to a span element so that it
              functions as a link when clicked with a mouse. Assistive
              technology does not recognize this element as a link.
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
              functions as a link when clicked with a mouse. Assistive
              technology does not recognize this element as a link.
            </p>
            <img
              src={GO}
              alt="go to the new page"
              onClick={() => {
                document.location.href = "newpage.html";
              }}
            />
          </div>
        </GuidelineError>
        <GuidelineError
          title={
            "F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content"
          }
          successCriterion={"1.3.1 Info and Relationships"}
          serial={5}
          guideline={"1.3.1"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
        >
          <div>
            <h4>Example 1: A heading used only for visual effect</h4>
            <p>
              In this example, a heading element is used to display an address
              in a large, bold font. The address does not identify a new section
              of the document, however, so it should not be marked as a heading.
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
              document as a whole and the beginning of the abstract. However,
              the h3 and h4 elements between the title and the abstract are used
              only for visual effect — to control the fonts used to display the
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
        </GuidelineError>

        <GuidelineError
          title={
            "F46: Failure of Success Criterion 1.3.1 due to using th elements, layout tables"
          }
          successCriterion={"1.3.1 Info and Relationships"}
          serial={6}
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
        </GuidelineError>
        <GuidelineError
          title={
            "F48: Failure of Success Criterion 1.3.1 due to using the pre element to markup tabular information"
          }
          successCriterion={"1.3.1 Info and Relationships"}
          serial={7}
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
            <h4>
              Example 2: Election results displayed using preformatted text
            </h4>
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
        </GuidelineError>

        <GuidelineError
          title={
            "F87: Failure of Success Criterion 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the 'content' property in CSS"
          }
          successCriterion={"1.3.1 Info and Relationships"}
          serial={8}
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
        </GuidelineError>

        <GuidelineError
          title={
            "F90: Failure of Success Criterion 1.3.1 for incorrectly associating table headers and content via the headers and id attributes"
          }
          successCriterion={"1.3.1 Info and Relationships"}
          serial={9}
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
            the last three columns which should reference header 'Projects'.
            Also, the referencing of the second level column headers has been
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
        </GuidelineError>
        <GuidelineError
          title={
            "F91: Failure of Success Criterion 1.3.1 for not correctly marking up table headers"
          }
          successCriterion={"1.3.1 Info and Relationships"}
          serial={10}
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
        </GuidelineError>
        <GuidelineError
          title={
            "F92: Failure of Success Criterion 1.3.1 due to the use of role presentation on content which conveys semantic information"
          }
          successCriterion={"1.3.1 Info and Relationships"}
          serial={11}
          guideline={"1.3.1"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
        >
          <h4>Example 1</h4>
          <p>
            In this example, tabular data is marked up with role=presentation.
            Though design layout tables can be marked up in such a way, data
            tables need to retain their semantic information and should
            therefore not be marked up with role=presentation.
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
        </GuidelineError>
        <GuidelineError
          title={"Implicit heading"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={12}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
        >
          <div className={"h1-style"}>
            This is a div which is being styled to look like an h1
          </div>
        </GuidelineError>

        <GuidelineError
          title={"Text formatting used instead of an actual heading"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={13}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
        >
          <div className={"fake-heading"}>Fake Heading</div>
          <p>
            This paragraph is preceded by a div that is styled to look like a
            heading
          </p>
        </GuidelineError>

        <GuidelineError
          title={"Li element with no parent"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={14}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
        >
          <li>no parent</li>
        </GuidelineError>

        <GuidelineError
          title={"List not marked up as a list"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={15}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
        >
          * fake list object 1
          <br />
          * fake list object 2
          <br />
          * fake list object 3
          <br />
          * fake list object 4
          <br />
        </GuidelineError>

        <GuidelineError
          title={"DT or DD elements that are not contained within a DL element"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={16}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
        >
          <dt>html</dt>
          <dd>a markup language for describing web documents</dd>
        </GuidelineError>

        <GuidelineError
          title={"Improperly nested lists"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={17}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
        >
          <ul>
            <ul>
              <li>improperly nested</li>
            </ul>
          </ul>
        </GuidelineError>

        <GuidelineError
          title={"Table with column headers and double row headers"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={18}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/tutorials/tables/irregular/"
          }
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
        </GuidelineError>

        <GuidelineError
          title={"Table has no scope attributes"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={19}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/tutorials/tables/irregular/"
          }
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
        </GuidelineError>

        <GuidelineError
          title={"Table nested within table header"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={18}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/tutorials/tables/irregular/"
          }
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
        </GuidelineError>

        <GuidelineError
          title={"Table nested within table"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={19}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/tables/"}
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
        </GuidelineError>

        <GuidelineError
          title={"Table has no table headings"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={20}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
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
        </GuidelineError>

        <GuidelineError
          title={"Table with inconsistent numbers of columns in rows"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={21}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/tables/"}
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
        </GuidelineError>

        <GuidelineError
          title={"Table that only has TH elements in it"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={22}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/tables/"}
        >
          <table>
            <thead>
              <tr>
                <th>Foo</th>
                <th>Bar</th>
                <th>Bat</th>
                <th>Baz</th>
              </tr>
            </thead>
          </table>
        </GuidelineError>

        <GuidelineError
          title={"Table is missing a caption"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={23}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/tables/"}
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
        </GuidelineError>

        <GuidelineError
          title={"Table has an empty table header"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={24}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
          linkToExplanation={
            "https://equalizedigital.com/accessibility-checker/empty-missing-table-header/"
          }
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
        </GuidelineError>

        <GuidelineError
          title={
            "Labels missing when they would look clumsy for some form controls"
          }
          successCriterion={"1.3.1 Info and Relationships"}
          serial={25}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
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
        </GuidelineError>

        <GuidelineError
          title={"Group of radio buttons not enclosed in a fieldset"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={26}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/grouping/"}
        >
          <h4>Do you already have a personal user account?</h4>
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
        </GuidelineError>

        <GuidelineError
          title={"Form element has no label"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={27}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          guideline={"1.3.1"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
        >
          <form>
            <input type={"text"} />
          </form>
        </GuidelineError>

        <GuidelineError
          title={"Fieldset without a legend"}
          successCriterion={"forms"}
          guideline={"1.3.1"}
          serial={28}
          level={Level.A}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H71.html"}
          explanation={
            "Form controls can be grouped by enclosing them within the fieldset element. All controls within a given fieldset are then related. The first element inside the fieldset must be a legend element, which provides a label or description for the group. Authors should avoid nesting fieldsets unnecessarily, as this can lead to confusion."
          }
        >
          <form>
            <fieldset>I am a fieldset without a legend</fieldset>
          </form>
        </GuidelineError>

        <GuidelineError
          title={"Empty legend"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={29}
          guideline={"1.3.1"}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H71.html"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
        >
          <form>
            <fieldset>
              <legend></legend>
            </fieldset>
          </form>
        </GuidelineError>

        <GuidelineError
          title={
            "Label element with for= attribute but not matching id= attribute of form control"
          }
          successCriterion={"1.3.1 Info and Relationships"}
          serial={30}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H44.html"}
          explanation={
            "The objective of this technique is to use the label element to explicitly associate a form control with a label. A label is attached to a specific form control through the use of the for attribute. The value of the for attribute must be the same as the value of the id attribute of the form control."
          }
          level={Level.A}
          guideline={"1.3.1"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
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
        </GuidelineError>

        <GuidelineError
          title={"Group of check boxes not enclosed in a fieldset"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={31}
          guideline={"1.3.1"}
          level={Level.A}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H71.html"}
        >
          <h4>Which types of waste do you transport regularly?</h4>
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
        </GuidelineError>

        <GuidelineError
          title={"Empty label found"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={32}
          guideline={"1.3.1"}
          level={Level.A}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
        >
          <form>
            <label htmlFor={"empty"}></label>
            <input id={"empty"} type={"text"} />
          </form>
        </GuidelineError>

        <GuidelineError
          title={"Missing labels in checkboxes"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={33}
          guideline={"1.3.1"}
          level={Level.A}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
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
        </GuidelineError>

        <GuidelineError
          title={"Placeholder no label"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={34}
          guideline={"1.3.1"}
          level={Level.A}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/tutorials/forms/instructions/"
          }
          explanation={
            "While placeholder text provides valuable guidance for many users, placeholder text is not a replacement for labels. Assistive technologies, such as screen readers, do not treat placeholder text as labels. Moreover, at the time of writing this tutorial, placeholder text is not broadly supported across assistive technologies and not displayed in older web browsers."
          }
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
        </GuidelineError>

        <GuidelineError
          title={
            "Article element used to mark-up an element that's actually not an article element."
          }
          successCriterion={"html"}
          serial={35}
          guideline={"1.3.1"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/GL/wiki/Using_HTML5_article_element"
          }
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
        </GuidelineError>

        <GuidelineError
          title={"Non-decorative content inserted using CSS"}
          successCriterion={"1.3.1 Info and Relationships"}
          guideline={"1.3.1"}
          serial={36}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/GL/2013/WD-WCAG20-TECHS-20130711/F87"
          }
        >
          <p id={"css-generated-text"}>My favourite food is </p>
        </GuidelineError>

        <GuidelineError
          title={"Link with a role=button does not work with space bar"}
          successCriterion={"1.3.1 Info and Relationships"}
          serial={37}
          guideline={"1.3.1"}
          level={Level.A}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html"
          }
        >
          <a className={"button"} href={"next.html"} role={"button"}>
            Continue
          </a>
        </GuidelineError>
      </Frame>
    </>
  );
};
