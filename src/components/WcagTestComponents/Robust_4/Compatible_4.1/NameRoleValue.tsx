import { GuidelineError, Level } from "../../../GuidelineError";
import CHECKED from "../../../../assets/checkbox-checked.svg";
import UNCHECKED from "../../../../assets/checkbox-unchecked.svg";

export const NameRoleValue = () => {
  function toggleCheckbox(imgId: any) {
    const theImg: any = document.getElementById(imgId);
    if (theImg.src.lastIndexOf(CHECKED) != -1) {
      theImg.src = UNCHECKED;
      // additional code to implement unchecked action
    } else {
      theImg.src = CHECKED;
      // additional code to implement checked action
    }
  }

  return (
    <>
      <GuidelineError
        title={
          "F59: Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML without providing a role for the control"
        }
        category={"4.1.2 Name, Role, Value"}
        serial={1}
        guideline={"4.1.2"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        explanation={
          "The following example fails because it creates a checkbox using a span and an image. A checkbox created in this manner will not work with assistive technology since there is no information that identifies it as a checkbox. In addition, this example is also not operable from the keyboard and would fail guideline 2.1."
        }
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F59.html"
        }
        level={Level.A}
      >
        <p>
          <span onClick={() => toggleCheckbox("chkbox")}>
            <img
              src={UNCHECKED}
              id="chkbox"
              alt=""
              height={"60px"}
              width={"60px"}
            />{" "}
            Include Signature
          </span>
        </p>
      </GuidelineError>

      <GuidelineError
        title={
          "F68: Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name"
        }
        category={"4.1.2 Name, Role, Value"}
        serial={2}
        guideline={"4.1.2"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        explanation={
          "The following example demonstrates a form that visually presents labels for form controls, but does not use the label element to associate them with their controls. The code example below is a failure because assistive technology may not be able to determine which label goes with which control."
        }
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F68.html"
        }
        level={Level.A}
      >
        <form>
          First name: <input type="text" name="firstname" />
          <br />
          Last name: <input type="text" name="lastname" />
          <br />
          I have a dog <input type="checkbox" name="pet" value="dog" />
          <br />
          I have a cat <input type="checkbox" name="pet" value="cat" />
        </form>
      </GuidelineError>

      <GuidelineError
        title={
          "F68: Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name"
        }
        category={"4.1.2 Name, Role, Value"}
        serial={3}
        guideline={"4.1.2"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        explanation={
          "In the following code example, label elements are present, but they are not programmatically linked to the corresponding input controls and may therefore not be properly determined by assistive technology."
        }
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F68.html"
        }
        level={Level.A}
      >
        <form action="..." method="post">
          <p>
            <label>First Name</label>
            <input type="text" name="firstname" />
            <label>Last Name</label>
            <input type="text" name="lastname" />
          </p>
        </form>
      </GuidelineError>

      <GuidelineError
        title={
          "F68: Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name"
        }
        category={"4.1.2 Name, Role, Value"}
        serial={4}
        guideline={"4.1.2"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        explanation={
          "The search text box in the following code example does not have a programmatically determinable name."
        }
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F68.html"
        }
        level={Level.A}
      >
        <input type="text" value="Type your search here" />
        <input type="submit" value="Search" />
      </GuidelineError>

      <GuidelineError
        title={
          "F86: Failure of Success Criterion 4.1.2 due to not providing names for each part of a multi-part form field, such as a US telephone number"
        }
        category={"4.1.2 Name, Role, Value"}
        serial={5}
        guideline={"4.1.2"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        explanation={
          'A US telephone number consists of a 3-digit area code, a 3-digit prefix, and a 4-digit suffix. They are typically formatted as follows ([area code]) [prefix]-[suffix], such as (206) 555-1212. Often, forms asking for a telephone number will include 3 separate fields, but with a single label, such as the following. The failure occurs when there is not a name for each of the 3 fields in the Accessibility API. A user with assistive technology will experience these as three undefined text fields. Some assistive technologies will read the punctuation as identification for the text fields, which can be even more confusing. In the case of a 3-field US phone number, some assistive technologies would name the fields "(", ")" and "-", which is not very useful.'
        }
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F86.html"
        }
        level={Level.A}
      >
        Phone number: (<input type="text" size={3} />){" "}
        <input type="text" size={3} />-<input type="text" size={4} />
      </GuidelineError>

      <GuidelineError
        title={
          "F86: Failure of Success Criterion 4.1.2 due to not providing names for each part of a multi-part form field, such as a US telephone number"
        }
        category={"4.1.2 Name, Role, Value"}
        serial={6}
        guideline={"4.1.2"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        explanation={
          "In this case of the US telephone number example, the label is programatically associated with only the first part. A user with assistive technology will be led to believe that the first field is for the entire phone number, and will experience the second and third fields as undefined text fields."
        }
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F86.html"
        }
        level={Level.A}
      >
        <label htmlFor="area">Phone number:</label>
        (<input id="area" type="text" size={3} />){" "}
        <input type="text" size={3} />-<input type="text" size={4} />
      </GuidelineError>

      <GuidelineError
        title={
          "F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link"
        }
        category={"4.1.2 Name, Role, Value"}
        serial={7}
        guideline={"4.1.2"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        explanation={
          'HTML Search Results: A search site returns search results that include both a text link and an image link to the match site. The image has a null alt attribute, since the result already contains a link with a text description. However, the screen reader does not ignore the image link but uses heuristics to find some text that might describe the purpose of the link. For example, the screen reader might announce, "football dot gif Football Scorecard."'
        }
        level={Level.A}
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F89.html"
        }
      >
        <a href="scores.html">
          <img src="football.gif" alt="" />
        </a>
        <a href="scores.html">Football Scoreboard</a>
      </GuidelineError>

      <GuidelineError
        title={"Empty button"}
        category={"4.1.2 Name, Role, Value"}
        serial={8}
        guideline={"4.1.2"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        level={Level.A}
      >
        <button></button>
      </GuidelineError>

      <GuidelineError
        title={"Empty H1"}
        category={"4.1.2 Name, Role, Value"}
        serial={9}
        guideline={"4.1.2"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        level={Level.A}
      >
        <h1></h1>
        <p>Here is an empty h1</p>
      </GuidelineError>

      <GuidelineError
        title={"Empty heading"}
        category={"4.1.2 Name, Role, Value"}
        serial={10}
        guideline={"4.1.2"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        level={Level.A}
      >
        <h4></h4>
        <p>This paragraph is preceded by an empty h4</p>
      </GuidelineError>

      <GuidelineError
        title={"Link to #, invalid hypertext reference"}
        category={"4.1.2 Name, Role, Value"}
        serial={11}
        guideline={"4.1.2"}
        level={Level.A}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        linkToExplanation={
          "https://www.eqafy.com/component/content/article/49-blog/185-6-accessibility-fixes-for-university-and-college-websites.html?Itemid=293"
        }
      >
        <a href={"#"}>Do something</a>
      </GuidelineError>

      <GuidelineError
        title={
          "Labels missing when they would look clumsy for some form controls"
        }
        category={"4.1.2 Name, Role, Value"}
        guideline={"4.1.2"}
        level={Level.A}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        serial={12}
        linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
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
        title={"Form element has no label"}
        category={"4.1.2 Name, Role, Value"}
        serial={13}
        guideline={"4.1.2"}
        level={Level.A}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
      >
        <form>
          <input type={"text"} />
        </form>
      </GuidelineError>

      <GuidelineError
        title={
          "Label element with for= attribute but not matching id= attribute of form control"
        }
        category={"4.1.2 Name, Role, Value"}
        serial={14}
        level={Level.A}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/H44.html"}
        explanation={
          "The objective of this technique is to use the label element to explicitly associate a form control with a label. A label is attached to a specific form control through the use of the for attribute. The value of the for attribute must be the same as the value of the id attribute of the form control."
        }
        guideline={"4.1.2"}
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
        title={"Empty label found"}
        category={"4.1.2 Name, Role, Value"}
        guideline={"4.1.2"}
        serial={15}
        level={Level.A}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
      >
        <form>
          <label htmlFor={"empty"}></label>
          <input id={"empty"} type={"text"} />
        </form>
      </GuidelineError>

      <GuidelineError
        title={"Missing labels in checkboxes"}
        category={"4.1.2 Name, Role, Value"}
        serial={16}
        guideline={"4.1.2"}
        level={Level.A}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
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
      </GuidelineError>

      <GuidelineError
        title={"Placeholder no label"}
        category={"4.1.2 Name, Role, Value"}
        serial={17}
        guideline={"4.1.2"}
        level={Level.A}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
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
      </GuidelineError>

      <GuidelineError
        title={"Invalid ARIA role names"}
        category={"4.1.2 Name, Role, Value"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        serial={18}
        level={Level.A}
        linkToExplanation={
          "https://dequeuniversity.com/rules/axe/4.3/aria-valid-attr"
        }
        guideline={"4.1.2"}
      >
        <div className={"header-context"} id={"global-breadcrumb"}>
          <ol className={"group"} role={"breadcrumb"}>
            <li>
              <a href={"/"}>Home</a>
            </li>
            <li>
              <a href={"/some-page"}>Some page</a>
            </li>
            <li>
              <strong>
                <a href={"/some-other-page"}>Some other page</a>
              </strong>
            </li>
          </ol>
        </div>
      </GuidelineError>

      <GuidelineError
        title={"iframe is missing a title attribute"}
        category={"4.1.2 Name, Role, Value"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#name-role-value"
        }
        serial={18}
        guideline={"4.1.2"}
        level={Level.A}
        linkToExplanation={
          "https://equalizedigital.com/accessibility-checker/iframe-missing-title/"
        }
      >
        <iframe height={100} src={"/demo-page"} width={300}></iframe>
      </GuidelineError>
    </>
  );
};
