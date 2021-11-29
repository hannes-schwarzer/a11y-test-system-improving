import { GuidelineError } from "../../GuidelineError";
import classNames from "classnames";
import "./FormsTestCases.css";

export const FormsTestCases = () => {
  const formClassNameNinetyTwo = classNames(
    "errors-badly-identified",
    "errors-colour-only"
  );
  const formClassNameHundredFour = classNames(
    "errors-badly-identified",
    "error-poor-contrast"
  );
  const formClassHundredSeven = classNames(
    "errors-badly-identified",
    "errors-not-identified"
  );

  return (
    <>
      <GuidelineError
        title={"Errors identified by colour only"}
        category={"forms"}
        serial={92}
      >
        <form className={formClassNameNinetyTwo}>
          <div className={"validation-summary"} role={"alert"}>
            You need to fix the errors on this page before continuing.
          </div>
          <label>
            Passport number{" "}
            <input className={"has-errors"} name={"name"} type={"text"} />
          </label>
          <label>
            Name on passport <input name={"surname"} type={"text"} />
          </label>
          <label>
            Date of expiry{" "}
            <input
              className={"has-errors"}
              name={"date-of-birth"}
              type={"text"}
            />
          </label>
        </form>
      </GuidelineError>
      <GuidelineError
        title={
          "Labels missing when they would look clumsy for some form controls"
        }
        category={"forms"}
        serial={93}
      >
        <form>
          <label htmlFor={"missing-labels-day"}>
            Your child's date of birth
          </label>
          <p>
            <input id={"missing-labels-day"} type={"text"} />
            <input id={"missing-labels-month"} type={"text"} />
            <input id={"missing-labels-year"} type={"text"} />
          </p>
        </form>
      </GuidelineError>
      <GuidelineError
        title={
          "Error messages - no suggestion for corrections given, e.g. required format"
        }
        category={"forms"}
        serial={94}
      >
        <form>
          <label className={"required-format-not-given"}>
            Phone number
            <span className={"error-message"}>is not valid</span>
            <input
              className={"has-errors"}
              pattern={"7[0-9]{9}"}
              required={true}
              type={"tel"}
            />
          </label>
        </form>
      </GuidelineError>
      <GuidelineError
        title={"Left aligned form labels with too much white space"}
        category={"forms"}
        serial={95}
      >
        <form>
          <p className={"too-much-whitespace"}>
            <label htmlFor={"input-too-far-away"}>Country</label>
            <input id={"input-too-far-away"} type={"text"} />
          </p>
        </form>
      </GuidelineError>
      <GuidelineError
        title={"Group of radio buttons not enclosed in a fieldset"}
        category={"forms"}
        serial={96}
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
      </GuidelineError>
      <GuidelineError
        title={"Form element has no label"}
        category={"forms"}
        serial={97}
      >
        <form>
          <input type={"text"} />
        </form>
      </GuidelineError>
      <GuidelineError
        title={"Fieldset without a legend"}
        category={"forms"}
        serial={98}
      >
        <form>
          <fieldset>I am a fieldset without a legend</fieldset>
        </form>
      </GuidelineError>
      <GuidelineError title={"Empty legend"} category={"forms"} serial={99}>
        <form>
          <fieldset>
            <legend></legend>
          </fieldset>
        </form>
      </GuidelineError>
      <GuidelineError
        title={
          "Label element with for= attribute but not matching id= attribute of form control"
        }
        category={"forms"}
        serial={100}
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
      <GuidelineError
        title={"Group of check boxes not enclosed in a fieldset"}
        category={"forms"}
        serial={101}
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
      </GuidelineError>
      <GuidelineError
        title={"Empty label found"}
        category={"forms"}
        serial={102}
      >
        <form>
          <label htmlFor={"empty"}></label>
          <input id={"empty"} type={"text"} />
        </form>
      </GuidelineError>
      <GuidelineError
        title={"Two unique labels, but identical for= attributes"}
        category={"forms"}
        serial={103}
      >
        <form>
          <label htmlFor={"two-labels-day"}>Date od issue</label>
          <p>
            <label htmlFor={"two-labels-day"}>Day</label>
            <input id={"two-labels-day"} type={"text"} />
            <label htmlFor={"two-labels-month"}>Month</label>
            <input id={"two-labels-month"} type={"text"} />
            <label htmlFor={"two-labels-year"}>Year</label>
            <input id={"two-labels-year"} type={"text"} />
          </p>
        </form>
      </GuidelineError>
      <GuidelineError
        title={"Errors identified with a poor colour contrast"}
        category={"forms"}
        serial={104}
      >
        <form className={formClassNameHundredFour}>
          <div className={"validation-summary"} role={"alert"}>
            You need to fix the errors on this page before continuing.
          </div>
          <label>
            Claimant's name
            <input className={"has-errors"} name={"name"} type={"text"} />
          </label>
          <label>
            Claimant's surname
            <input name={"surname"} type={"text"} />
          </label>
          <label>
            Claimant's date of birth
            <input
              className={"has-errors"}
              name={"date-of-birth"}
              type={"text"}
            />
          </label>
        </form>
      </GuidelineError>
      <GuidelineError
        title={"Non-unique field label found"}
        category={"forms"}
        serial={105}
      >
        <form>
          <label htmlFor={"x_3"}>
            Name
            <input id={"x_3"} name={"x_3"} type={"text"} />
          </label>
          <br />
          <label htmlFor={"x_4"}>
            Name
            <input id={"x_4"} name={"x_4"} type={"text"} />
          </label>
        </form>
      </GuidelineError>
      <GuidelineError
        title={"Missing labels in checkboxes"}
        category={"forms"}
        serial={106}
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
      </GuidelineError>
      <GuidelineError
        title={"Field hint not associated with input"}
        category={"forms"}
        serial={107}
      >
        <form>
          <label className={"form-label"} htmlFor={"ni-number"}>
            National Insurance number
          </label>
          <p className={"form-hint"}>
            It'll be on your last payslip. For example, JH 21 90 0A.
          </p>
          <input className={"form-control"} id={"ni-number"} type={"text"} />
        </form>
      </GuidelineError>
      <GuidelineError
        title={"Placeholder no label"}
        category={"forms"}
        serial={107}
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
      </GuidelineError>
      <GuidelineError
        title={"Errors are not identified"}
        category={"forms"}
        serial={107}
      >
        <form className={formClassHundredSeven}>
          <div className={"validation-summary"} role={"alert"}>
            You need to fix the errors on this page before continuing.
          </div>
          <label>
            Name
            <input name={"name"} type={"text"} />
          </label>
          <label>
            Surname
            <input name={"surname"} type={"text"} />
          </label>
          <label>
            Date of birth
            <input name={"date-of-birth"} type={"text"} />
          </label>
        </form>
      </GuidelineError>
      <GuidelineError
        title={"Form control that changes context without warning"}
        category={"forms"}
        serial={107}
      >
        <form>
          <label htmlFor={"language-selector"}>Select your language</label>
          <select className={"language-selector"} id={"language-selector"}>
            <option value={""}>Change your language</option>
            <option value={"en"}>English</option>
            <option value={"de"}>Deutsch</option>
            <option value={"fr"}>Français</option>
          </select>
        </form>
      </GuidelineError>
    </>
  );
};
