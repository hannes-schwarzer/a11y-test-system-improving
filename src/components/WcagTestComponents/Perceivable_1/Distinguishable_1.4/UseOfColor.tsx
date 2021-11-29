import { GuidelineError } from "../../../GuidelineError";
import "./UseOfColor.css";

export const UseOfColor = () => {
  return (
    <>
      <GuidelineError
        title={
          "F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision"
        }
        category={"1.4.1 Use of Color"}
        serial={1}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"}
        guideline={"1.4.1"}
      >
        <p>
          To find out more about the{" "}
          <a href="rain_in_spain.htm">rain in spain</a> there are many
          resources.
        </p>
      </GuidelineError>

      <GuidelineError
        title={"Color alone is used to convey content"}
        category={"1.4.1 Use of Color"}
        serial={2}
        guideline={"1.4.1"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#use-of-color"}
      >
        <p>
          The green mushrooms listed here are OK to eat. The red mushrooms will
          kill you.
        </p>
        <ul>
          <li className={"poisonous"}>Amanita</li>
          <li className={"safe"}>Chanterelle</li>
          <li className={"safe"}>Porcini</li>
          <li className={"safe"}>Shitake</li>
          <li className={"poisonous"}>Tylopilus</li>
        </ul>
      </GuidelineError>
    </>
  );
};
