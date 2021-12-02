import {
  Level,
  GuidelineError,
} from "../../../../components/GuidelineError/GuidelineError";

export const Interruptions = () => {
  return (
    <>
      <GuidelineError
        title={
          "F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit"
        }
        successCriterion={"2.2.4 Interruptions"}
        serial={1}
        explanation={
          "The page below is a failure because it will redirect to the URI http://www.example.com/newpage after a time limit of 5 seconds."
        }
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#interruptions"
        }
        guideline={"2.2.4"}
        level={Level.AAA}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F40.html"
        }
      >
        {/*      <head>
          <title>Do not use this!</title>
          <meta
            http-equiv="refresh"
            content="5; url=http://www.example.com/newpage"
          />
        </head>
        <body>
          <p>
            If your browser supports Refresh, you'll be transported to our{" "}
            <a href="http://www.example.com/newpage">new site</a> in 5 seconds,
            otherwise, select the link manually.
          </p>
        </body> */}
      </GuidelineError>
      <GuidelineError
        title={
          "F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page"
        }
        successCriterion={"2.2.4 Interruptions"}
        serial={1}
        explanation={
          'This is a deprecated example that changes the user\'s page at regular intervals. Content developers should not use this technique to simulate "push" technology. Developers cannot predict how much time a user will require to read a page; premature refresh can disorient users. Content developers should avoid periodic refresh and allow users to choose when they want the latest information. (The number in the content attribute is the refresh interval in seconds.)'
        }
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#interruptions"
        }
        guideline={"2.2.4"}
        level={Level.AAA}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F41.html"
        }
      >
        {/*       <head>
          <title>HTML Techniques for WCAG 2.0</title>
          <meta http-equiv="refresh" content="60" />
        </head>
        <body>...</body> */}
      </GuidelineError>
    </>
  );
};
