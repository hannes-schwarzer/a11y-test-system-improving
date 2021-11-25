import { TestCase } from "../TestCase";
import "./LanguageTestCases.css";

export const LanguageTestCases = () => {
  return (
    <>
      <h2>Language of content</h2>
      <TestCase
        testCaseTitle={
          "Text language changed without required change in direction"
        }
        testCategory={"language"}
        testCaseNumber={21}
      >
        <p lang={"ar"}>الإعفاء الإلكتروني من التأشيرة</p>
      </TestCase>
      <TestCase
        testCaseTitle={"html element has an empty lang attribute"}
        testCategory={"language"}
        testCaseNumber={22}
      >
        <p>
          Placeholder and Reminder: This page has an empty lang attribute: "html
          lang"
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"Empty H1"}
        testCategory={"language"}
        testCaseNumber={23}
      >
        <h1></h1>
        <p>Here is an empty h1</p>
      </TestCase>
      <TestCase
        testCaseTitle={"Implicit heading"}
        testCategory={"language"}
        testCaseNumber={24}
      >
        <div className={"h1-style"}>
          This is a div which is being styled to look like an h1
        </div>
      </TestCase>
      <TestCase
        testCaseTitle={"Empty page title"}
        testCategory={"language"}
        testCaseNumber={25}
      >
        Placeholder and Reminder: This page has an empty page title
      </TestCase>
      <TestCase
        testCaseTitle={"lang attribute not used to identify change of language"}
        testCategory={"language"}
        testCaseNumber={26}
      >
        <p>
          Mother, he's asking you to go. He's saying, "Allons, Madame
          plaisante!"
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"Text language is in the wrong direction"}
        testCategory={"language"}
        testCaseNumber={27}
      >
        <p dir={"rlt"} lang={"en"}>
          Electronic visa waiver
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={
          "html element has an invalid value in the lang attribute"
        }
        testCategory={"language"}
        testCaseNumber={28}
      >
        <p lang={"foobar"}>
          This paragraph has a lang attribute set to an invalid value
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={
          "lang attribute used to identify change of language, but with invalid value"
        }
        testCategory={"language"}
        testCaseNumber={29}
      >
        <p>
          Mother, he's asking you to go. He's saying,{" "}
          <span lang={"frrr"}>""Allons, Madame plaisante!""</span>
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"html element has lang attribute set to wrong language"}
        testCategory={"language"}
        testCaseNumber={30}
      >
        <p lang={"fr"}>This is in english but the lang is nominally french.</p>
      </TestCase>
      <TestCase
        testCaseTitle={
          "lang attribute used to identify change of language, but with wrong language"
        }
        testCategory={"language"}
        testCaseNumber={31}
      >
        <p>
          Mother, he's asking you to go. He's saying,{" "}
          <span lang={"es"}>""Allons, Madame plaisante!""</span>
        </p>
      </TestCase>
    </>
  );
};
