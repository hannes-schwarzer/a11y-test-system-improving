import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
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
        <GuidelineError
          title={
            "F3: Failure of Success Criterion 1.1.1 due to using CSS to include images that convey important information"
          }
          successCriterionInWords={"Non-text Content"}
          serial={1}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            "CSS is used to include the image, which is important and not just for decoration."
          }
        >
          <p id="bestinterest">
            Where else would you find a better interest rate?
          </p>
        </GuidelineError>

        <GuidelineError
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Non-text Content"}
          serial={2}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            'empty placeholder "": empty placeholder "" that is put into the "text alternative" location on images or pictures.'
          }
        >
          <img src={BBC} alt={""} />
        </GuidelineError>

        <GuidelineError
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Non-text Content"}
          serial={3}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            'placeholder text such as "spacer": placeholder text such as "spacer" or "image" or "picture" etc that are put into the \'text alternative\' location on images or pictures.'
          }
        >
          <img src={BBC} alt={"spacer"} />
        </GuidelineError>

        <GuidelineError
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Non-text Content"}
          serial={4}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            'programming references: programming references that do not convey the information or function of the non-text content such as "picture 1", "picture 2" or "0001", "0002" or "Intro#1", "Intro#2".'
          }
        >
          <img src={BBC} alt={"picture 1"} />
        </GuidelineError>

        <GuidelineError
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Non-text Content"}
          serial={5}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            'filenames: filenames that are not valid text alternatives in their own right such as "Oct.jpg" or "Chart.jpg" or "sales\\\\oct\\\\top3.jpg"'
          }
        >
          <img src={BBC} alt={"Oct.jpg"} />
        </GuidelineError>

        <GuidelineError
          title={
            "F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them\n"
          }
          successCriterionInWords={"Non-text Content"}
          serial={3}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            'This describes a failure condition for text alternatives for images that should be ignored by assistive technology (AT). If an image has the attribute role="presentation", it will be ignored by AT. However, if it does not have role="presentation", and if there is no alt attribute at all assistive technologies are not able to ignore the image. For decorative images which need to be ignored by AT, either role="presentation" must be used or the alt attribute must be provided and have a null value (i.e., alt="") to avoid a failure of this Success Criterion.'
          }
        >
          <img height={"60px"} src={DECO} width={"180px"} />
        </GuidelineError>
        <GuidelineError
          title={
            'F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image") for images that should be ignored by assistive technology'
          }
          successCriterionInWords={"Non-text Content"}
          serial={4}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
        >
          <p>
            An image is used to create a blank space between content, where the
            spacing itself is not meaningful to the content.
            <img alt="spacer" height={"1px"} src={SPACER} width={"180px"} /> The
            image has an alt text value of "spacer". This image fails the
            Success Criterion because the text alternative does not serve an
            equivalent purpose. The image is meant to be ignored but its
            alternative text "spacer" is announced by screen readers and
            displayed in some alternate color schemes.
          </p>
        </GuidelineError>
        <GuidelineError
          title={
            'F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"'
          }
          successCriterionInWords={"Non-text Content"}
          serial={5}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            "Because of the missing text alternative in the code example below, the person using a screen reader would not know the purpose of the image."
          }
        >
          <img src={BBC} alt={"Oct.jpg"} />
        </GuidelineError>
        <GuidelineError
          title={
            "F71: Failure of Success Criterion 1.1.1 due to using text look-alikes to represent text without providing a text alternative"
          }
          successCriterionInWords={"Non-text Content"}
          serial={6}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
        >
          <p>
            The following example, will look like the English word "cook" when
            rendered in browsers with appropriate font support. In this case,
            the characters are implemented with character entities, but the word
            will still not be processed meaningfully, and a text alternative is
            not provided.
          </p>
          <p>&#x03F2;&#x043E;&#x03BF;&#x006B;</p>
        </GuidelineError>
        <GuidelineError
          title={
            "F72: Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative"
          }
          successCriterionInWords={"Non-text Content"}
          serial={6}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          explanation={
            "The following ASCII art chart lacks a text alternative and therefore does not meet Success Criterion 1.1.1."
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
        </GuidelineError>
        <GuidelineError
          title={"Image button has no alt attribute"}
          successCriterionInWords={"Non-text Content"}
          serial={7}
          level={Level.A}
          successCriterionNumber={"1.1.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
        >
          <input src={SUBMIT} type={"image"} />
        </GuidelineError>
        <GuidelineError
          title={"Uninformative alt attribute value on image button"}
          successCriterionInWords={"Non-text Content"}
          serial={8}
          successCriterionNumber={"1.1.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          level={Level.A}
        >
          <input alt={"click"} src={SUBMIT} type={"image"} />
        </GuidelineError>

        <GuidelineError
          title={"Empty alt attribute on image button"}
          successCriterionInWords={"Non-text Content"}
          serial={9}
          successCriterionNumber={"1.1.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          level={Level.A}
        >
          <input alt={""} src={SUBMIT} type={"image"} />
        </GuidelineError>

        <GuidelineError
          title={"Image has alt and title that are different"}
          successCriterionInWords={"Non-text Content"}
          serial={10}
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
        </GuidelineError>

        <GuidelineError
          title={"Image with presentation role has non-empty alt"}
          successCriterionInWords={"Non-text Content"}
          serial={11}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
        >
          <img
            alt={"Decorative line clipart"}
            height={"118"}
            role={"presentation"}
            src={DECO}
            width={"368"}
          />
        </GuidelineError>

        <GuidelineError
          title={"Image with no alt attribute"}
          successCriterionInWords={"Non-text Content"}
          serial={12}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
        >
          <img src={BBC} />
        </GuidelineError>

        <GuidelineError
          title={
            "Background image that conveys information does not have a text alternative"
          }
          successCriterionInWords={"Non-text Content"}
          serial={13}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
        >
          <div className={"warning-icon"}>
            Taking too much of your pension money in early retirement could mean
            you don't have enough for later.
          </div>
        </GuidelineError>

        <GuidelineError
          title={"Image has empty alt and non-empty title"}
          successCriterionInWords={"Non-text Content"}
          serial={14}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
        >
          <img src={BBC} alt={""} title={"BBC"} />
        </GuidelineError>

        <GuidelineError
          title={"Image has no alt and non-empty title"}
          successCriterionInWords={"Non-text Content"}
          serial={15}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
        >
          <img src={BBC} title={"BBC"} />
        </GuidelineError>

        <GuidelineError
          title={"Image that conveys information has an empty alt attribute"}
          successCriterionInWords={"Non-text Content"}
          serial={16}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
        >
          <img src={BBC} alt={""} />
        </GuidelineError>

        <GuidelineError
          title={"Image that conveys information has inappropriate alt text"}
          successCriterionInWords={"Non-text Content"}
          serial={17}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
        >
          <img src={BBC} alt={"Twitter"} />
        </GuidelineError>

        <GuidelineError
          title={"Image alt attribute contains image file name"}
          successCriterionInWords={"Non-text Content"}
          serial={18}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://accessibility.psu.edu/images/imageshtml/"}
        >
          <img src={BBC} alt={"bbc-blocks-dark.png"} />
        </GuidelineError>

        <GuidelineError
          title={"Image with partial text alternative"}
          successCriterionInWords={"Non-text Content"}
          serial={19}
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
        </GuidelineError>

        <GuidelineError
          title={"Image link with no alternative text"}
          successCriterionInWords={"Non-text Content"}
          serial={20}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/tutorials/images/functional/"
          }
        >
          <a href={"http://www.bbc.co.uk/"}>
            <img alt={""} src={BBC} />
          </a>
        </GuidelineError>

        <GuidelineError
          title={"Image link alt text repeats text in the link"}
          successCriterionInWords={"Non-text Content"}
          serial={21}
          linkToExplanation={
            "https://dequeuniversity.com/rules/axe/3.0/image-redundant-alt"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
        >
          <a href={"https://en.wikipedia.org/wiki/Red_panda"}>
            <img alt={"Red Panda"} height={165} src={REDPANDA} width={220} />{" "}
            Red Panda
          </a>
        </GuidelineError>

        <GuidelineError
          title={"Link to a multimedia file, no transcript"}
          successCriterionInWords={"Non-text Content"}
          serial={22}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/general/G73.html"
          }
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
        >
          <a href={"interview.mov"}>Watch the interview</a>
        </GuidelineError>

        <GuidelineError
          title={"Link to an image, no text alternative"}
          successCriterionInWords={"Non-text Content"}
          serial={23}
          successCriterionNumber={"1.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
        >
          My favourite <a href={BAT}>bat</a>.
        </GuidelineError>

        <GuidelineError
          title={
            "Label element with for= attribute but not matching id= attribute of form control"
          }
          successCriterionInWords={"Non-text Content"}
          serial={24}
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
        </GuidelineError>
      </Frame>
    </>
  );
};
