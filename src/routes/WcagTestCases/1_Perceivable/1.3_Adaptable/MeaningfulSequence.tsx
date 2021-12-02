import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import "./MeaningfulSequence.css";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const MeaningfulSequence = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={
            "F34: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to format tables in plain text content"
          }
          successCriterionInWords={"Meaningful Sequence"}
          serial={1}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
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
            "F33: Failure of Success Criterion 1.3.1 and 1.3.2 due to using white space characters to create multiple columns in plain text content"
          }
          successCriterionInWords={"Meaningful Sequence"}
          serial={2}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
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
            "F32: Failure of Success Criterion 1.3.2 due to using white space characters to control spacing within a word"
          }
          successCriterionInWords={"Meaningful Sequence"}
          serial={3}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
        >
          <div>
            <h4>
              Example 1: Failure due to adding white space in the middle of a
              word
            </h4>
            <p>
              This example has white spaces within a word to space out the
              letters in a heading. Screen readers may read each letter
              individually instead of the word "Welcome."
            </p>
            <h1>W e l c o m e</h1>
            <p>
              {`&nbsp;`} can also be used to add white space, producing similar
              failures:
            </p>
            <h1>H&nbsp;E&nbsp;L&nbsp;L&nbsp;O</h1>
          </div>
          <div>
            <h4>
              Example 2: White space in the middle of a word changing its
              meaning
            </h4>
            <p>
              In Japanese, Han characters (Kanji) may have multiple readings
              that mean very different things. In this example, the word is read
              incorrectly because screen readers may not recognize these
              characters as a word because of the white space between the
              characters. The characters mean "Tokyo," but screen readers say
              "Higashi Kyo".
            </p>
            <h1>東　京</h1>
          </div>
          <div>
            <h4>
              Example 3: Using line break characters to format vertical text
            </h4>
            <p>
              In the row header cell of a data table containing Japanese text,
              authors often create vertical text by using line break characters.
              However screen readers are not able to read the words in vertical
              text correctly because the line breaks occur within the word. In
              the following example, "東京都"(Tokyo-to) will be read "Higashi
              Kyo Miyako".
            </p>

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
          </div>
        </GuidelineError>
        <GuidelineError
          title={
            "F49: Failure of Success Criterion 1.3.2 due to using an HTML layout table that does not make sense when linearized"
          }
          successCriterionInWords={"Meaningful Sequence"}
          serial={4}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
        >
          <div>
            <h4>Example 1: A layout table that does not linearize correctly</h4>
            <p>
              An advertisement makes clever use of visual positioning, but
              changes meaning when linearized.
            </p>

            <table>
              <tr>
                <td>
                  <img src="logo.gif" alt="XYZ mountaineering" />
                </td>
                <td rowSpan={2} valign="bottom">
                  top!
                </td>
              </tr>
              <tr>
                <td>XYZ gets you to the</td>
              </tr>
            </table>
          </div>

          <div>
            <h4>
              Example 2: A layout table that separates a meaningful sequence
              when linearized
            </h4>
            <p>
              A layout table is used to position the elements of the page. The
              links in the navigation bar are split into different cells in the
              leftmost column. Because the navigation bar links are interleaved
              with the content describing the image, screen readers cannot
              present the content in a meaningful sequence corresponding to the
              sequence presented visually.
            </p>

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
          </div>
        </GuidelineError>

        <GuidelineError
          title={
            "F1: Failure of Success Criterion 1.3.2 due to changing the meaning of content by positioning information with CSS"
          }
          successCriterionInWords={"Meaningful Sequence"}
          serial={5}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
        >
          <p>
            The following example demonstrates how CSS has been improperly used
            to create a set of columns. In addition, the text appears visually
            in the browser in a different order than in the markup.
          </p>
          <p>
            In this example a class is defined for each object that is being
            positioned. When style sheets are applied, the text appears in two
            columns. Elements of class "menu1" (Products) and "menu2"
            (Locations) appear as column headings. "Telephones, Computers, and
            Portable MP3 Players" are listed under Products and "Idaho" and
            "Wisconsin" are listed under Locations (note the different order for
            Idaho and Wisconsin in the source code order).
          </p>
          <p>
            Since appropriate structural elements have not been used, when style
            sheets are not applied, all of the text appears in one line in the
            source order, "Products Locations Telephones Computers Portable MP3
            Players Wisconsin Idaho."
          </p>

          <div className="box">
            <span className="menu1">Products</span>
            <span className="menu2">Locations</span>
            <span className="item1">Telephones</span>
            <span className="item2">Computers</span>
            <span className="item3">Portable MP3 Players</span>
            <span className="item5">Wisconsin</span>
            <span className="item4">Idaho</span>
          </div>
        </GuidelineError>
        <GuidelineError
          title={"Content identified by location"}
          serial={6}
          successCriterionInWords={"Meaningful Sequence"}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
        >
          <p>The artist on the right won the Album of the year</p>
          <a href="swift.html" style={{ float: "right" }}>
            Tailor Swift
          </a>
          <a href="sheeran.html" style={{ float: "left" }}>
            Ed Sheeran
          </a>
        </GuidelineError>

        <GuidelineError
          title={"Table used for layout"}
          serial={7}
          successCriterionInWords={"Meaningful Sequence"}
          successCriterionNumber={"1.3.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F49.html"}
        >
          <table>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>
                      <a href={"home.html"}>HOME</a>
                    </li>
                    <li>
                      <a href={"about-us.html"}>About us</a>
                    </li>
                    <li>
                      <a href={"products.html"}>Our products</a>
                    </li>
                  </ul>
                </td>
                <td>
                  <h2>Welcome to our homepage</h2>
                  <p>
                    Here you can find out who we are, what we do and why you
                    should buy our products.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </GuidelineError>
      </Frame>
    </>
  );
};
