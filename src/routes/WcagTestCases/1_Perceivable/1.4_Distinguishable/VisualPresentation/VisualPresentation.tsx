import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import "./VisualPresentation.css";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const VisualPresentation = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
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
            "Specifying only background color with CSS: In the example below the background color is defined on the " +
            "CSS stylesheet, however the foreground color is not defined. Therefore, the example fails the Success " +
            "Criterion."
          }
          id={"1.4.8_1"}
        >
          <p className={"visual-presentation__whiteBackground"}>
            My background is white.
          </p>
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
            "Specifying only foreground color (font color) with CSS: In the example below the foreground color is defined" +
            " on the CSS stylesheet, however the background color is not defined. Therefore, the example fails the Success " +
            "Criterion."
          }
          id={"1.4.8_2"}
        >
          <p className={"visual-presentation__whiteForeground"}>
            My foreground is white.
          </p>
        </TestCase>

        <TestCase
          title={
            "F88: Failure of Success Criterion 1.4.8 due to using text that is justified (aligned to both the left and the right margins)"
          }
          successCriterionInWords={"Visual Presentation"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation"
          }
          successCriterionNumber={"1.4.8"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F88.html"
          }
          level={Level.AAA}
          explanation={
            "When text is justified to both margins it may add additional spaces between words which may be difficult for users with visual or cognitive impairments to read. Full text justification can also cause words to be spaced closely together thus making it difficult to determine where a word starts and ends."
          }
          id={"1.4.8_3"}
        >
          <p className={"visual-presentation__justified-text"}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum
            sit amet pede. Phasellus nec sem id mauris vehicula tincidunt. Morbi
            ac arcu. Maecenas vehicula velit et orci. Donec ullamcorper
            porttitor velit. Sed arcu lorem, cursus sit amet, auctor eu,
            convallis ut, purus. Vivamus imperdiet accumsan nunc. Maecenas
            pellentesque nunc a libero. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Curabitur pharetra
            commodo justo.
          </p>
        </TestCase>

        <TestCase
          title={"All caps text found"}
          successCriterionInWords={"Visual Presentation"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation"
          }
          successCriterionNumber={"1.4.8"}
          level={Level.AAA}
          linkToExplanation={
            "https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Capitalization"
          }
          explanation={
            'Typing sentences or phrases IN ALL CAPITALS is rarely a good idea. It may make sense under some circumstances, but only rarely. Lengthy segments of capitalized content are more difficult to read. In some cases, a screen reader may interpret ALL CAPITAL text as being an acronym and may read it as letters rather than words. For example, a screen reader may read the uppercase text CONTACT US as "Contact U. S." because it interprets the uppercase "US" as being an acronym for "United States".'
          }
          id={"1.4.8_4"}
        >
          <p className={"visual-presentation__all-caps"}>
            Text in all capital letters is more difficult to read for most
            people, with and without disabilities. User Need: Users can change
            the capitalization (all capital letters, small capital letters,
            sentence style) of blocks of text.
          </p>
        </TestCase>
        <TestCase
          title={"Italics used on long sections of text"}
          successCriterionInWords={"Visual Presentation"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation"
          }
          successCriterionNumber={"1.4.8"}
          level={Level.AAA}
          linkToExplanation={
            "https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning.html"
          }
          explanation={
            "Italics are sometimes used to highlight text. But you shouldn't use italicized text because they make letters hard to read. The letters have a jagged line compared to non-italic fonts. The letters also lean over making it hard for dyslexic users to make out the words. When the text size is small, the text is even more illegible."
          }
          id={"1.4.8_5"}
        >
          <p className={"visual-presentation__italic"}>
            Italics are sometimes used to highlight text. But you shouldn't use
            italicized text because they make letters hard to read. The letters
            have a jagged line compared to non-italic fonts. The letters also
            lean over making it hard for dyslexic users to make out the words.
            When the text size is small, the text is even more illegible.
          </p>
        </TestCase>
      </Frame>
    </>
  );
};
