import { GuidelineError, Level } from "../../../GuidelineError";

export const ChangeOnRequest = () => {
  return (
    <>
      <GuidelineError
        title={"Link launches new window with no warning"}
        category={"3.2.5 Change on Request"}
        serial={71}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#change-on-request"
        }
        guideline={"3.2.5"}
        level={Level.A}
        linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/G201.html"}
        explanation={
          'The objective of this technique is to provide a warning before automatically opening a new window or tab. Opening new windows automatically when a link is activated can be disorienting for people who have difficulty perceiving visual content, and for some people with cognitive disabilities, if they are not warned in advance. Providing a warning allows the user to decide it they want to leave the current window, and the warning will help them find their way back, if they do decide they would like to go to the new window. It will help them understand that the "back" button will not work and that they have to return to the last window they had open, in order to find their previous location.'
        }
      >
        <a href={"https://twitter.com/"} target={"_blank"}>
          Twitter
        </a>
      </GuidelineError>
    </>
  );
};
