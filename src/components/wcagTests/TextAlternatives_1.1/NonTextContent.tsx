import { TestCase } from "../../TestCase";
import "./NonTextContent.css";
import BBC from "../../../assets/bbc-blocks-dark.png";
import DECO from "../../../assets/decoration.png";
import SPACER from "../../../assets/spacer.gif";

export const NonTextContent = () => {
  return (
    <>
      <h2>1.1.1 Non-text Content</h2>
      <TestCase
        testCaseTitle={
          "F3: Failure of Success Criterion 1.1.1 due to using CSS to include images that convey important information"
        }
        testCategory={"1.1.1 Non-text Content"}
        testCaseNumber={1}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
        }
        guideline={"1.1.1"}
      >
        <p id="bestinterest">
          Where else would you find a better interest rate?
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={
          "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
        }
        testCategory={"1.1.1 Non-text Content"}
        testCaseNumber={2}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
        }
        guideline={"1.1.1"}
      >
        <h4>empty placeholder ""</h4>
        <p>
          empty placeholder "" that is put into the 'text alternative' location
          on images or pictures.
        </p>
        <img src={BBC} alt={""} />
        <h4>placeholder text such as "spacer"</h4>
        <p>
          placeholder text such as "spacer" or "image" or "picture" etc that are
          put into the 'text alternative' location on images or pictures.
        </p>
        <img src={BBC} alt={"spacer"} />
        <h4>programming references</h4>
        <p>
          programming references that do not convey the information or function
          of the non-text content such as "picture 1", "picture 2" or "0001",
          "0002" or "Intro#1", "Intro#2".
        </p>
        <img src={BBC} alt={"picture 1"} />
        <h4>filenames</h4>
        <p>
          filenames that are not valid text alternatives in their own right such
          as "Oct.jpg" or "Chart.jpg" or "sales\\oct\\top3.jpg"
        </p>
        <img src={BBC} alt={"Oct.jpg"} />
      </TestCase>
      <TestCase
        testCaseTitle={
          "F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them\n"
        }
        testCategory={"1.1.1 Non-text Content"}
        testCaseNumber={3}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
        }
        guideline={"1.1.1"}
      >
        <p>
          This describes a failure condition for text alternatives for images
          that should be ignored by assistive technology (AT). If an image has
          the attribute role="presentation", it will be ignored by AT.
        </p>
        <p>
          However, if it does not have role="presentation", and if there is no
          alt attribute at all assistive technologies are not able to ignore the
          image. For decorative images which need to be ignored by AT, either
          role="presentation" must be used or the alt attribute must be provided
          and have a null value (i.e., alt="") to avoid a failure of this
          Success Criterion.
        </p>
        <img height={"60px"} src={DECO} width={"180px"} />
      </TestCase>
      <TestCase
        testCaseTitle={
          'F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image") for images that should be ignored by assistive technology'
        }
        testCategory={"1.1.1 Non-text Content"}
        testCaseNumber={4}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
        }
        guideline={"1.1.1"}
      >
        <p>
          An image is used to create a blank space between content, where the
          spacing itself is not meaningful to the content.
          <img alt="spacer" height={"1px"} src={SPACER} width={"180px"} /> The
          image has an alt text value of "spacer". This image fails the Success
          Criterion because the text alternative does not serve an equivalent
          purpose. The image is meant to be ignored but its alternative text
          "spacer" is announced by screen readers and displayed in some
          alternate color schemes.
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={
          'F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"'
        }
        testCategory={"1.1.1 Non-text Content"}
        testCaseNumber={5}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
        }
        guideline={"1.1.1"}
      >
        <p>
          Because of the missing text alternative in the code example below, the
          person using a screen reader would not know the purpose of the image.
        </p>
        <img src={BBC} alt={"Oct.jpg"} />
      </TestCase>
      <TestCase
        testCaseTitle={
          "F71: Failure of Success Criterion 1.1.1 due to using text look-alikes to represent text without providing a text alternative"
        }
        testCategory={"1.1.1 Non-text Content"}
        testCaseNumber={6}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
        }
        guideline={"1.1.1"}
      >
        <p>
          The following example, will look like the English word "cook" when
          rendered in browsers with appropriate font support. In this case, the
          characters are implemented with character entities, but the word will
          still not be processed meaningfully, and a text alternative is not
          provided.
        </p>
        <p>&#x03F2;&#x043E;&#x03BF;&#x006B;</p>
      </TestCase>
      <TestCase
        testCaseTitle={
          "F72: Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative"
        }
        testCategory={"1.1.1 Non-text Content"}
        testCaseNumber={6}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
        }
        guideline={"1.1.1"}
      >
        <p>
          The following ASCII art chart lacks a text alternative and therefore
          does not meet Success Criterion 1.1.1.
        </p>
        <pre>
          {`
%   __ __ __ __ __ __ __ __ __ __ __ __ __ __
100 |             *                             |
 90 |                *  *                       |
 80 |          *           *                    |
 70 |             @           *                 |
 60 |          @                 *              |
 50 |       *        @              *           |
 40 |                   @              *        |
 30 |    *  @              @  @           *     |
 20 |                                           |
 10 |    @                       @  @  @  @     |
      0  5 10 15 20 25 30 35 40 45 50 55 60 65 70
      Flash frequency (Hz)
          `}
        </pre>
      </TestCase>
    </>
  );
};
