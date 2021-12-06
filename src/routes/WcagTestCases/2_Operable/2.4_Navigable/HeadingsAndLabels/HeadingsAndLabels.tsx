import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const HeadingsAndLabels = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        {/*2.4.6 & 2.4.10*/}
        <TestCase
          title={"Headings not structured in a hierarchical manner"}
          successCriterionInWords={"Headings and Labels"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels"
          }
          successCriterionNumber={"2.4.6"}
          level={Level.AA}
          explanation={
            "Pages should be structured in a hierarchical manner, generally with one 1st degree headings (h1) being the most important (usually page titles or main content heading), then 2nd degree headings (h2 - usually major section headings), down to 3rd degree headings (sub-sections of the h2), and so on. Technically, lower degree headings should be contained within headings of the next highest degree (i.e., one should not ski heading levels, such as from an h2 to an h4, going down the document). This is an example where heading levels have been skipped and are not in a logical order, which makes the page difficult to understand and navigate for people using assistive technologies such as screen reader."
          }
        >
          <h3>Heading h3</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <h5>Heading h5</h5>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <h4>Heading h4</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </TestCase>

        <TestCase
          title={
            "Labels missing when they would look clumsy for some form controls"
          }
          successCriterionInWords={"Headings and Labels"}
          successCriterionNumber={"2.4.6"}
          level={Level.AA}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels"
          }
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
        </TestCase>

        <TestCase
          title={"Form element has no label"}
          successCriterionInWords={"Headings and Labels"}
          successCriterionNumber={"2.4.6"}
          level={Level.AA}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels"
          }
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
        >
          <form>
            <input type={"text"} />
          </form>
        </TestCase>

        <TestCase
          title={"Empty label found"}
          successCriterionInWords={"Headings and Labels"}
          successCriterionNumber={"2.4.6"}
          level={Level.AA}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels"
          }
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
        >
          <form>
            <label htmlFor={"empty"}></label>
            <input id={"empty"} type={"text"} />
          </form>
        </TestCase>

        <TestCase
          title={"Non-unique field label found"}
          successCriterionInWords={"Headings and Labels"}
          successCriterionNumber={"2.4.6"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels"
          }
          level={Level.AA}
          explanation={
            "This success criterion does not require headings or labels. This success criterion requires that if headings or labels are provided, they be descriptive."
          }
          linkToExplanation={
            "https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html"
          }
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
        </TestCase>

        <TestCase
          title={"Missing/ not connected labels in checkboxes"}
          successCriterionInWords={"Headings and Labels"}
          successCriterionNumber={"2.4.6"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels"
          }
          level={Level.AA}
          linkToExplanation={"https://www.w3.org/WAI/tutorials/forms/labels/"}
          explanation={
            "Labels are present but not connected to the inputs/ checkboxes."
          }
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
          title={"Usage of placeholder but no label available"}
          successCriterionInWords={"Headings and Labels"}
          successCriterionNumber={"2.4.6"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels"
          }
          level={Level.AA}
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
