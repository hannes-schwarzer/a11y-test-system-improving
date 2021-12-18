import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";
import MOUNTAINEERING from "../../../../../assets/mountaineering.jpg";
import { Link } from "react-router-dom";

interface Props {
  pageTitle: string;
}

export const MeaningfulSequence = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content"
          }
          successCriterionInWords={"Meaningful Sequence"}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
          explanation={
            "The following example incorrectly uses white space to format a Menu as a visual table. This visually conveyed meaning is lost if a screen reader is used."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F34.html"
          }
          id={"1.3.2_1"}
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
            "F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content"
          }
          successCriterionInWords={"Meaningful Sequence"}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F33.html"
          }
          explanation={
            "The following example incorrectly uses white space characters to format a paragraph into a two column format. If this table was to be interpreted and spoken by a screen reader it would speak the following lines: 'Web Content Accessibility Guidelines including blindness and low vision,...'"
          }
          id={"1.3.2_2"}
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
            "F32: Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word"
          }
          successCriterionInWords={"Meaningful Sequence"}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
          explanation={
            'Failure due to adding white space in the middle of a word: This example has white spaces within a word to space out the letters in a heading. Screen readers may read each letter individually instead of the word "Welcome."'
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F32.html"
          }
          id={"1.3.2_3"}
        >
          <h1>W e l c o m e</h1>
        </TestCase>

        <TestCase
          title={
            "F32: Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word"
          }
          successCriterionInWords={"Meaningful Sequence"}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
          explanation={
            'Failure due to adding white space in the middle of a word: This example has white spaces within a word to space out the letters in a heading. Screen readers may read each letter individually instead of the word "Welcome."'
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F32.html"
          }
          id={"1.3.2_4"}
        >
          <p>
            {`&nbsp;`} can also be used to add white space, producing similar
            failures:
          </p>
          <h1>H&nbsp;E&nbsp;L&nbsp;L&nbsp;O</h1>
        </TestCase>

        <TestCase
          title={
            "F32: Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word"
          }
          successCriterionInWords={"Meaningful Sequence"}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
          explanation={
            'Failure due to adding white space in the middle of a word changing its meaning: In Japanese, Han characters (Kanji) may have multiple readings that mean very different things. In this example, the word is read incorrectly because screen readers may not recognize these characters as a word because of the white space between the characters. The characters mean "Tokyo," but screen readers say "Higashi Kyo".'
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F32.html"
          }
          id={"1.3.2_5"}
        >
          <h1>東　京</h1>
        </TestCase>

        <TestCase
          title={
            "F32: Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word"
          }
          successCriterionInWords={"Meaningful Sequence"}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
          explanation={
            'Failure due to using line break characters to format vertical text: In the row header cell of a data table containing Japanese text, authors often create vertical text by using line break characters. However screen readers are not able to read the words in vertical text correctly because the line breaks occur within the word. In the following example, "東京都"(Tokyo-to) will be read "Higashi Kyo Miyako".'
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F32.html"
          }
          id={"1.3.2_6"}
        >
          <table>
            <caption>表1.　都道府県別一覧表</caption>
            <tr>
              <td></td>
              <th scope="col">（見出しセル 1.）</th>
              <th scope="col">（見出しセル 2.）</th>
            </tr>
            <tr>
              <th scope="row">
                東<br />京<br />都
              </th>
              <td>（データセル 1.）</td>
              <td>（データセル 2.）</td>
            </tr>
          </table>
        </TestCase>

        <TestCase
          title={
            "F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized"
          }
          successCriterionInWords={"Meaningful Sequence"}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
          explanation={
            "A layout table that does not linearize correctly: An advertisement makes clever use of visual positioning, but changes meaning when linearized."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F49.html"
          }
          id={"1.3.2_7"}
        >
          <table>
            <tr>
              <td>
                <img
                  src={MOUNTAINEERING}
                  height={"250px"}
                  width={"auto"}
                  alt="Mountain Hiking Club mountaineering"
                />
              </td>
              <td rowSpan={2} valign="bottom">
                top!
              </td>
            </tr>
            <tr>
              <td>Mountain Hiking Club gets you to the</td>
            </tr>
          </table>
          <p>
            The reading order from this example would be:
            <ol>
              <li>Mountain Hiking Club mountaineering top!</li>
              <li>Mountain Hiking Club gets you to the</li>
            </ol>
          </p>
        </TestCase>

        <TestCase
          title={
            "F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized"
          }
          successCriterionInWords={"Meaningful Sequence"}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
          explanation={
            "A layout table that separates a meaningful sequence when linearized: A layout table is used to position the elements of the page. The links in the navigation bar are split into different cells in the leftmost column. Because the navigation bar links are interleaved with the content describing the image, screen readers cannot present the content in a meaningful sequence corresponding to the sequence presented visually."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F49.html"
          }
          id={"1.3.2_8"}
        >
          <table>
            <tr>
              <td>
                <a href="#">Link 1</a>
              </td>
              <td rowSpan={20}>
                <img src="img.png" alt="Museum Picture" />
              </td>
              <td rowSpan={6}>
                <img src="placard.png" alt="Placard text" />
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Link 2</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Link 3</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Link 4</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Link 5</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Link 6</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Link 7</a>
              </td>
              <td rowSpan={2}>
                <h2>Image Heading</h2>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Link 8</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">Link 9</a>
              </td>
              <td rowSpan={12}>Description of the image</td>
            </tr>
            <tr>
              <td>
                <a href="#">Link 10</a>
              </td>
            </tr>
            ...
            <tr>
              <td>
                <a href="#">Link 20</a>
              </td>
            </tr>
          </table>
        </TestCase>

        <TestCase
          title={
            "F1: Failure of Success Criterion 1.3.2 due to changing the meaning of content by positioning information with CSS"
          }
          successCriterionInWords={"Meaningful Sequence"}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
          explanation={
            'The following example demonstrates how CSS has been improperly used to create a set of columns. In addition, the text appears visually in the browser in a different order than in the markup. Since appropriate structural elements have not been used, when style sheets are not applied, all of the text appears in one line in the source order, "Products Locations Telephones Computers Portable MP3 Players Wisconsin Idaho."'
          }
          id={"1.3.2_9"}
        >
          <p>
            For this test you need to visit the following page:{" "}
            <Link
              to={
                "/wcag/perceivable/adaptable/meaningful-sequence/changed-meaning-through-formatting"
              }
            >
              Link to page with changed content meaning
            </Link>
          </p>
        </TestCase>
      </Frame>
    </>
  );
};
