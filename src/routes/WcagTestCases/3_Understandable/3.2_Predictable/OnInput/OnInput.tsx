import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";
import React, { useEffect, useState } from "react";

interface Props {
  pageTitle: string;
}

export const OnInput = (props: Props) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    window.open(`http://download.${event.target.value}/`);
  };

  const changeContext = (event: any) => {
    document.documentElement.lang = event.target.value;
  };

  //for 3.2.2_1
  const [name, setName] = useState("");
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  useEffect(() => {
    if (!focused && name !== "")
      document.getElementById("formSubmitButton1")!.click();
  });

  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F36: Failure of Success Criterion 3.2.2 due to automatically submitting a form and given a value"
          }
          successCriterionInWords={"On Input"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#on-input"
          }
          successCriterionNumber={"3.2.2"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F36.html"
          }
          explanation={
            "This failure example submits a form when the user leaves the input field of the form after editing it, even navigating backwards in the tab order. Developers should not use this method to submit a form, and should instead use a submit button, or rely on the form's default behavior of submitting when the user hits enter in a text field."
          }
          level={Level.A}
          id={"3.2.2_1"}
        >
          <form method="get">
            <label htmlFor={"oi__autoSubmitName"}>Name</label>
            <input
              onFocus={onFocus}
              onBlur={onBlur}
              id={"oi__autoSubmitName"}
              type="text"
              name="name"
              maxLength={30}
              value={name}
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                setName(e.currentTarget.value);
              }}
            />
            <input type="submit" value="Submit" id={"formSubmitButton1"} />
          </form>
        </TestCase>

        <TestCase
          title={
            "F36: Failure of Success Criterion 3.2.2 due to automatically submitting a form and given a value"
          }
          successCriterionInWords={"On Input"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#on-input"
          }
          successCriterionNumber={"3.2.2"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F36.html"
          }
          explanation={
            "This is an example that submits a form when the user selects an option from the menu. There is no warning of this behavior in advance. The form will submit as soon as an item from the menu is selected. Blind users and users with hand tremors can easily make a mistake on which item on the dropdown menu to choose and they are taken to the wrong destination before they can correct it."
          }
          level={Level.A}
          id={"3.2.2_2"}
        >
          <form method="get">
            <label htmlFor={"oi__select"}>Chose: </label>
            <select
              id={"oi__select"}
              name="select1"
              onChange={() => {
                document.getElementById("formSubmitButton2")!.click();
              }}
            >
              <option label={"one"}>one</option>
              <option label={"two"}>two</option>
              <option label={"three"}>three</option>
              <option label={"four"}>four</option>
            </select>
            <input type="submit" value="Submit" id={"formSubmitButton2"} />
          </form>
        </TestCase>

        <TestCase
          title={
            "F37: Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the selection of a radio button, check box or select list is changed"
          }
          successCriterionInWords={"On Input"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#on-input"
          }
          successCriterionNumber={"3.2.2"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F37.html"
          }
          explanation={
            "The example below fails the Success Criterion because it processes the form when a radio button is changed instead of using a submit button."
          }
          level={Level.A}
          id={"3.2.2_3"}
        >
          <form name="mirror_form" id="mirror_form" action="" method="get">
            <p>Please select a mirror download site:</p>
            <p>
              <input
                type="radio"
                onChange={onChange}
                name="mirror"
                id="mirror_belnet"
                value="belnet.be"
              />
              <label htmlFor="mirror_belnet">
                belnet (<abbr>BE</abbr>)
              </label>
              <br />
              <input
                type="radio"
                onChange={onChange}
                name="mirror"
                id="mirror_surfnet"
                value="surfnet.nl"
              />
              <label htmlFor="mirror_surfnet">
                surfnet (<abbr>NL</abbr>)
              </label>
            </p>
          </form>
        </TestCase>

        <TestCase
          title={"Form control that changes context without warning"}
          successCriterionInWords={"On Input"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#on-input"
          }
          successCriterionNumber={"3.2.2"}
          id={"3.2.2_4"}
        >
          <form
            onChange={(event: any) => {
              changeContext(event);
            }}
          >
            <label htmlFor={"language-selector"}>Select your language </label>
            <select className={"language-selector"} id={"language-selector"}>
              <option value={""}>Change your language</option>
              <option value={"en"}>English</option>
              <option value={"de"}>Deutsch</option>
              <option value={"fr"}>Français</option>
            </select>
          </form>
        </TestCase>
      </Frame>
    </>
  );
};
