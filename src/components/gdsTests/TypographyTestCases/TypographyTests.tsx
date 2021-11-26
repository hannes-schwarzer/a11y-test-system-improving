import "./TypographyTests.css";
import { TestCase } from "../../TestCase";

export const TypographyTestCases = () => {
  return (
    <>
      <h2>Typography</h2>
      <TestCase
        testCaseTitle={"Inadequate line height used"}
        testCategory={"typography"}
        testCaseNumber={13}
      >
        <p className={"line-height"}>
          Many people with cognitive disabilities have trouble tracking lines of
          text when a block of text is single spaced. Providing spacing between
          1.5 to 2 allows them to start a new line more easily once they have
          finished the previous one.
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"All caps text found"}
        testCategory={"typography"}
        testCaseNumber={14}
      >
        <p className={"all-caps"}>
          Typing sentences or phrases IN ALL CAPITALS is rarely a good idea. It
          may make sense under some circumstances, but only rarely. Lengthy
          segments of capitalized content are more difficult to read. In some
          cases, a screen reader may interpret ALL CAPITAL text as being an
          acronym and may read it as letters rather than words. For example, a
          screen reader may read the uppercase text CONTACT US as "Contact U.
          S." because it interprets the uppercase "US" as being an acronym for
          "United States".
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"Blink element found"}
        testCategory={"typography"}
        testCaseNumber={15}
      >
        {" "}
      </TestCase>
      <TestCase
        testCaseTitle={"Italics used on long sections of text"}
        testCategory={"typography"}
        testCaseNumber={16}
      >
        <p className={"italic"}>
          Italics are sometimes used to highlight text. But you shouldn't use
          italicized text because they make letters hard to read. The letters
          have a jagged line compared to non-italic fonts. The letters also lean
          over making it hard for dyslexic users to make out the words. When the
          text size is small, the text is even more illegible.
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"Marquee element found"}
        testCategory={"typography"}
        testCaseNumber={17}
      >
        {" "}
      </TestCase>
      <TestCase
        testCaseTitle={"Long lines of text"}
        testCategory={"typography"}
        testCaseNumber={18}
      >
        <p>
          For people with some reading or vision disabilities, long lines of
          text can become a significant barrier. They have trouble keeping their
          place and following the flow of text. Having a narrow block of text
          makes it easier for them to continue on to the next line in a block.
          Lines should not exceed 80 characters
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"Very small text found"}
        testCategory={"typography"}
        testCaseNumber={19}
      >
        <p className={"small-text"}>
          This is some tiny text, much too small for some people to read
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"Justified text found"}
        testCategory={"typography"}
        testCaseNumber={20}
      >
        <p className={"justify"}>
          When text is justified to both margins it may add additional spaces
          between words which may be difficult for users with visual or
          cognitive impairments to read. Full text justification can also cause
          words to be spaced closely together thus making it difficult to
          determine where a word starts and ends.
        </p>
      </TestCase>
    </>
  );
};
