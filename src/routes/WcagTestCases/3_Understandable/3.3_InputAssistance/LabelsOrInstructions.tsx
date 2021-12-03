import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import "./LabelsOrInstructions.css";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const LabelsOrInstructions = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "Labels missing when they would look clumsy for some form controls"
          }
          successCriterionInWords={"Labels or Instructions"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions"
          }
          successCriterionNumber={"3.3.2"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
          explanation={"Only one input has an associated label."}
        >
          <form>
            <label htmlFor={"label-day"}>Your child's date of birth</label>
            <p>
              <input id={"label-day"} type={"text"} />
              <input id={"missing-labels-month"} type={"text"} />
              <input id={"missing-labels-year"} type={"text"} />
            </p>
          </form>
        </TestCase>

        <TestCase
          title={"Left aligned form labels with too much white space"}
          successCriterionInWords={"Labels or Instructions"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions"
          }
          successCriterionNumber={"3.3.2"}
          level={Level.A}
          explanation={
            "Label and input are programatically associated but visually too far away from each other."
          }
        >
          <form>
            <p className={"too-much-whitespace"}>
              <label htmlFor={"input-too-far-away"}>Country</label>
              <input id={"input-too-far-away"} type={"text"} />
            </p>
          </form>
        </TestCase>

        <TestCase
          title={"Group of radio buttons not enclosed in a fieldset"}
          successCriterionInWords={"Labels or Instructions"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions"
          }
          successCriterionNumber={"3.3.2"}
          level={Level.A}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/grouping/"}
        >
          <h4>Do you already have a personal user account?</h4>
          <label className={"block-label"} htmlFor={"radio-inline-1"}>
            <input
              id={"radio-inline-1"}
              name={"radio-inline-group"}
              type={"radio"}
              value={"Yes"}
            />
            Yes
          </label>
          <br />
          <label className={"block-label"} htmlFor={"radio-inline-2"}>
            <input
              id={"radio-inline-2"}
              name={"radio-inline-group"}
              type={"radio"}
              value={"No"}
            />
            No
          </label>
        </TestCase>

        <TestCase
          title={"Fieldset without a legend"}
          successCriterionInWords={"Labels or Instructions"}
          successCriterionNumber={"3.3.2"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions"
          }
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H71.html"}
          explanation={
            "Form controls can be grouped by enclosing them within the fieldset element. All controls within a given fieldset are then related. The first element inside the fieldset must be a legend element, which provides a label or description for the group. Authors should avoid nesting fieldsets unnecessarily, as this can lead to confusion."
          }
        >
          <form>
            <fieldset>I am a fieldset without a legend</fieldset>
          </form>
        </TestCase>

        <TestCase
          title={"EmptyPageTitle legend"}
          successCriterionInWords={"Labels or Instructions"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions"
          }
          successCriterionNumber={"3.3.2"}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H71.html"}
        >
          <form>
            <fieldset>
              <legend></legend>
            </fieldset>
          </form>
        </TestCase>

        <TestCase
          title={
            "Label element with for= attribute but not matching id= attribute of form control"
          }
          successCriterionInWords={"Labels or Instructions"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions"
          }
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H44.html"}
          explanation={
            "The objective of this technique is to use the label element to explicitly associate a form control with a label. A label is attached to a specific form control through the use of the for attribute. The value of the for attribute must be the same as the value of the id attribute of the form control."
          }
          successCriterionNumber={"3.3.2"}
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

        <TestCase
          title={"Group of check boxes not enclosed in a fieldset"}
          successCriterionInWords={"Labels or Instructions"}
          successCriterionNumber={"3.3.2"}
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H71.html"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions"
          }
        >
          <h4>Which types of waste do you transport regularly?</h4>
          <label className={"block-label"} htmlFor={"waste-type-1"}>
            <input
              id={"waste-type-1"}
              name={"waste-types"}
              type={"checkbox"}
              value={"waste-animal"}
            />
            Waste from animal carcasses
          </label>
          <br />
          <label className={"block-label"} htmlFor={"waste-type-2"}>
            <input
              id={"waste-type-2"}
              name={"waste-types"}
              type={"checkbox"}
              value={"waste-mines"}
            />
            Waste from mines or quarries
          </label>
          <br />
          <label className={"block-label"} htmlFor={"waste-type-3"}>
            <input
              id={"waste-type-3"}
              name={"waste-types"}
              type={"checkbox"}
              value={"waste-farm-agricultural"}
            />
            Farm or agricultural waste
          </label>
        </TestCase>

        <TestCase
          title={"EmptyPageTitle label found"}
          successCriterionInWords={"Labels or Instructions"}
          successCriterionNumber={"3.3.2"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions"
          }
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
        >
          <form>
            <label htmlFor={"empty"}></label>
            <input id={"empty"} type={"text"} />
          </form>
        </TestCase>

        <TestCase
          title={"Two unique labels, but identical for= attributes"}
          successCriterionInWords={"Labels or Instructions"}
          successCriterionNumber={"3.3.2"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions"
          }
          linkToExplanation={
            "https://stackoverflow.com/questions/59490259/wcag-2-0-level-aa-input-element-error-no-input-on-code"
          }
        >
          <form>
            <label htmlFor={"two-labels-day"}>Date of issue</label>
            <p>
              <label htmlFor={"two-labels-day"}>Day</label>
              <input id={"two-labels-day"} type={"text"} />
              <label htmlFor={"two-labels-month"}>Month</label>
              <input id={"two-labels-month"} type={"text"} />
              <label htmlFor={"two-labels-year"}>Year</label>
              <input id={"two-labels-year"} type={"text"} />
            </p>
          </form>
        </TestCase>

        <TestCase
          title={"Missing labels in checkboxes"}
          successCriterionInWords={"Labels or Instructions"}
          successCriterionNumber={"3.3.2"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions"
          }
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
        >
          <form>
            <fieldset>
              <legend>What is your nationality?</legend>
              <label>
                British (including English, Scottish, Welsh and Northern Irish)
              </label>
              <input
                id={"nationality_british"}
                name={"nationality.british"}
                type={"checkbox"}
                value={"true"}
              />
              <label>Irish</label>
              <input
                id={"nationality_irish"}
                name={"nationality.irish"}
                type={"checkbox"}
                value={"true"}
              />
              <label>Citizen of a different country</label>
              <input
                id={"nationality_hasOtherCountry"}
                name={"nationality.hasOtherCountry"}
                type={"checkbox"}
                value={"true"}
              />
            </fieldset>
          </form>
        </TestCase>

        <TestCase
          title={"Placeholder no label"}
          successCriterionInWords={"Labels or Instructions"}
          successCriterionNumber={"3.3.2"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/tutorials/forms/instructions/"
          }
          explanation={
            "While placeholder text provides valuable guidance for many users, placeholder text is not a replacement for labels. Assistive technologies, such as screen readers, do not treat placeholder text as labels. Moreover, at the time of writing this tutorial, placeholder text is not broadly supported across assistive technologies and not displayed in older web browsers."
          }
        >
          <form>
            <input
              id={"search-main"}
              name={"q"}
              placeholder={"Search"}
              type={"search"}
            />
            <input className={"submit"} type={"submit"} value={"Search"} />
          </form>
        </TestCase>
      </Frame>
    </>
  );
};
