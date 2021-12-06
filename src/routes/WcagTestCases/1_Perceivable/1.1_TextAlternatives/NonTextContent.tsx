import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import "./NonTextContent.css";
import BBC from "../../../../assets/bbc-blocks-dark.png";
import DECO from "../../../../assets/decoration.png";
import SPACER from "../../../../assets/spacer.gif";
import SUBMIT from "../../../../assets/submit.png";
import SALE from "../../../../assets/sale.jpeg";
import REDPANDA from "../../../../assets/220px-RedPandaFullBody.jpeg";
import BAT from "../../../../assets/bat.jpeg";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const NonTextContent = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F3: Failure of Success Criterion 1.1.1 due to using CSS to include images that convey important information"
          }
          successCriterionInWords={"Non-text Content"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            "CSS is used to include the image, which is important and not just for decoration."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F3.html"
          }
        >
          <p id="ntc__bestinterest">
            Where else would you find a better interest rate?
          </p>
        </TestCase>

        <TestCase
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Non-text Content"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            "empty placeholder \"\" that is put into the 'text alternative' location on images or pictures."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F30.html"
          }
        >
          <img src={BBC} alt={""} />
        </TestCase>

        <TestCase
          title={"Empty alt attribute on image button (<input>)"}
          successCriterionInWords={"Non-text Content"}
          successCriterionNumber={"1.1.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          level={Level.A}
          explanation={
            "The alt attribute is necessary for visually impaired people to know the contained info of the image."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F30.html"
          }
        >
          <input alt={""} src={SUBMIT} type={"image"} />
        </TestCase>

        <TestCase
          title={"Image link with no alternative text"}
          successCriterionInWords={"Non-text Content"}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/tutorials/images/functional/"
          }
          explanation={
            "Visually impaired users would not know the purpose of this link image."
          }
        >
          <a href={"http://www.bbc.co.uk/"}>
            <img alt={""} src={BBC} />
          </a>
        </TestCase>

        <TestCase
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Non-text Content"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            'placeholder text such as "spacer" or "image" or "picture" etc that are put into the \'text alternative\' location on images or pictures.'
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F30.html"
          }
        >
          <img src={BBC} alt={"spacer"} />
        </TestCase>

        <TestCase
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Non-text Content"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            'programming references that do not convey the information or function of the non-text content such as "picture 1", "picture 2" or "0001", "0002" or "Intro#1", "Intro#2".'
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F30.html"
          }
        >
          <img src={BBC} alt={"picture 1"} />
        </TestCase>

        <TestCase
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Non-text Content"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            'filenames that are not valid text alternatives in their own right such as "Oct.jpg" or "Chart.jpg" or "sales\\\\oct\\\\top3.jpg"'
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F30.html"
          }
        >
          <img src={BBC} alt={"bbc-blocks-dark.png"} />
        </TestCase>

        <TestCase
          title={
            "F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them\n"
          }
          successCriterionInWords={"Non-text Content"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            'This describes a failure condition for text alternatives for images that should be ignored by assistive technology (AT). If an image has the attribute role="presentation", it will be ignored by AT. However, if it does not have role="presentation", and if there is no alt attribute at all assistive technologies are not able to ignore the image. For decorative images which need to be ignored by AT, either role="presentation" must be used or the alt attribute must be provided and have a null value (i.e., alt="") to avoid a failure of this Success Criterion.'
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F38.html"
          }
        >
          <img height={"60px"} src={DECO} width={"180px"} />
        </TestCase>

        <TestCase
          title={
            'F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image") for images that should be ignored by assistive technology'
          }
          successCriterionInWords={"Non-text Content"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            'An image is used to create a blank space between content, where the spacing itself is not meaningful to the content. The image has an alt text value of "spacer". This image fails the Success Criterion because the text alternative does not serve an equivalent purpose. The image is meant to be ignored but its alternative text "spacer" is announced by screen readers and displayed in some alternate color schemes.'
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F39.html"
          }
        >
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
            <img alt="spacer" height={"1px"} src={SPACER} width={"180px"} />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </TestCase>

        <TestCase
          title={
            'F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image" (<img>)'
          }
          successCriterionInWords={"Non-text Content"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            "Because of the missing text alternative in the code example below, the person using a screen reader would not know the purpose of the image."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F65.html"
          }
        >
          <img src={BBC} />
        </TestCase>

        <TestCase
          title={"Image <input> has no alt attribute"}
          successCriterionInWords={"Non-text Content"}
          level={Level.A}
          successCriterionNumber={"1.1.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          explanation={
            "The alt attribute is necessary for visually impaired people to know the contained info of the image."
          }
          linkToExplanation={
            "https://equalizedigital.com/accessibility-checker/missing-alternative-text/"
          }
        >
          <input src={SUBMIT} type={"image"} />
        </TestCase>

        <TestCase
          title={"Uninformative alt attribute value on image button (<input>)"}
          successCriterionInWords={"Non-text Content"}
          successCriterionNumber={"1.1.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          level={Level.A}
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
          explanation={
            "The alt attribute must convey the same information the image does."
          }
        >
          <input alt={"click"} src={SUBMIT} type={"image"} />
        </TestCase>

        <TestCase
          title={
            "Image (<img>) that conveys information has inappropriate alt text"
          }
          successCriterionInWords={"Non-text Content"}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
          explanation={
            "The alt attribute must convey the same information the image does."
          }
        >
          <img src={BBC} alt={"Twitter"} />
        </TestCase>

        <TestCase
          title={
            "F71: Failure of Success Criterion 1.1.1 due to using text look-alikes to represent text without providing a text alternative"
          }
          successCriterionInWords={"Non-text Content"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            'The following example, will look like the English word "cook" when rendered in browsers with appropriate font support. In this case, the characters are implemented with character entities, but the word will still not be processed meaningfully, and a text alternative is not provided.'
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F71.html"
          }
        >
          <p>&#x03F2;&#x043E;&#x03BF;&#x006B;</p>
        </TestCase>

        <TestCase
          title={
            "F72: Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative"
          }
          successCriterionInWords={"Non-text Content"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            "The following ASCII art chart lacks a text alternative and therefore does not meet Success Criterion 1.1.1."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F72.html"
          }
        >
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

        <TestCase
          title={"Image has alt and title that are different"}
          successCriterionInWords={"Non-text Content"}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            "The TITLE attribute of an IMG text can be used to generate a tooltip for sighted users. But please be aware that: 1. The TITLE attribute is NOT read aloud by default in most screen readers. 2: The ALT Text is not usually displayed as a tool tip in most browsers. If a tool tip is needed for sighted users, then both a TITLE and ALT attribute with the same information can be used to ensure that the same information is delivered to both audiences."
          }
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
        >
          <img alt={"BBC"} src={BBC} title={"BBC homepage"} />
        </TestCase>

        <TestCase
          title={"Image with presentation role has non-empty alt"}
          successCriterionInWords={"Non-text Content"}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
          explanation={
            "If the image only serves as decoration it doesn't need an alt."
          }
        >
          <img
            alt={"Decorative line clipart"}
            height={"118"}
            role={"presentation"}
            src={DECO}
            width={"368"}
          />
        </TestCase>

        <TestCase
          title={"Image has empty alt and non-empty title"}
          successCriterionInWords={"Non-text Content"}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
          explanation={
            "If a tool tip is needed for sighted users, then both a TITLE and ALT attribute with the same information can be used to ensure that the same information is delivered to both audiences."
          }
        >
          <img src={BBC} alt={""} title={"BBC"} />
        </TestCase>

        <TestCase
          title={"Image has no alt and non-empty title"}
          successCriterionInWords={"Non-text Content"}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
          explanation={
            "If a tool tip is needed for sighted users, then both a TITLE and ALT attribute with the same information can be used to ensure that the same information is delivered to both audiences."
          }
        >
          <img src={BBC} title={"BBC"} />
        </TestCase>

        <TestCase
          title={"Image with partial text alternative"}
          successCriterionInWords={"Non-text Content"}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
          explanation={
            'The image below contains a lot of information, such as which departments the sale is on. The text alternative in the alt attribute does not include this information, only a partial "25% off sale"'
          }
        >
          <img alt={"25% off sale"} src={SALE} />
        </TestCase>

        <TestCase
          title={"Image link alt text repeats text in the link"}
          successCriterionInWords={"Non-text Content"}
          linkToExplanation={
            "https://dequeuniversity.com/rules/axe/3.0/image-redundant-alt"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          explanation={
            "For images used as navigational elements to trigger functions such as printing, uploading or saving, the ALT text should describe the destination or function, not the image."
          }
        >
          <a href={"https://en.wikipedia.org/wiki/Red_panda"}>
            <img alt={"Red Panda"} height={165} src={REDPANDA} width={220} />{" "}
            Red Panda
          </a>
        </TestCase>

        <TestCase
          title={"Link to a multimedia file, no transcript"}
          successCriterionInWords={"Non-text Content"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/general/G73.html"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          explanation={
            "It is necessary to provide a way to link to remote long descriptions in technologies that do not have a long description feature built directly into them (e.g., longdesc)"
          }
        >
          <a href={"interview.mov"}>Watch the interview</a>
        </TestCase>

        <TestCase
          title={"Link to an image, no text alternative"}
          successCriterionInWords={"Non-text Content"}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          explanation={
            "When an image is the only content of a link, the text alternative for the image describes the unique function of the link."
          }
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H30.html"}
        >
          My favourite <a href={BAT}>bat</a>.
        </TestCase>

        <TestCase
          title={
            "Label element with for= attribute but not matching id= attribute of form control"
          }
          successCriterionInWords={"Non-text Content"}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H44.html"}
          explanation={
            "The objective of this technique is to use the label element to explicitly associate a form control with a label. A label is attached to a specific form control through the use of the for attribute. The value of the for attribute must be the same as the value of the id attribute of the form control."
          }
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
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
      </Frame>
    </>
  );
};
