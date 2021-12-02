import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const HeadingsAndLabels = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        {/*2.4.6 & 2.4.10*/}
        <GuidelineError
          title={"Headings not structured in a hierarchical manner"}
          successCriterionInWords={"Headings and Labels"}
          serial={1}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels"
          }
          successCriterionNumber={"2.4.6"}
          level={Level.AA}
        >
          <h3>Heading h3</h3>
          <p>
            Pages should be structured in a hierarchical manner, generally with
            one 1st degree headings (h1) being the most important (usually page
            titles or main content heading), then 2nd degree headings (h2 -
            usually major section headings), down to 3rd degree headings
            (sub-sections of the h2), and so on.
          </p>
          <h5>Heading h5</h5>
          <p>
            Technically, lower degree headings should be contained within
            headings of the next highest degree (i.e., one should not skip
            heading levels, such as from an h2 to an h4, going down the
            document).
          </p>
          <h4>Heading h4</h4>
          <p>
            This is an example where heading levels have been skipped and are
            not in a logical order, which makes the page difficult to understand
            and navigate for people using assistive technologies such as screen
            reader.
          </p>
        </GuidelineError>

        <GuidelineError
          title={
            "Labels missing when they would look clumsy for some form controls"
          }
          successCriterionInWords={"Headings and Labels"}
          serial={2}
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
        </GuidelineError>

        <GuidelineError
          title={"Form element has no label"}
          successCriterionInWords={"Headings and Labels"}
          serial={3}
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
        </GuidelineError>

        <GuidelineError
          title={"Empty label found"}
          successCriterionInWords={"Headings and Labels"}
          successCriterionNumber={"2.4.6"}
          serial={4}
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
        </GuidelineError>

        <GuidelineError
          title={"Non-unique field label found"}
          successCriterionInWords={"Headings and Labels"}
          serial={5}
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
        </GuidelineError>

        <GuidelineError
          title={"Missing labels in checkboxes"}
          successCriterionInWords={"Headings and Labels"}
          serial={6}
          successCriterionNumber={"2.4.6"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels"
          }
          level={Level.AA}
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
          successCriterionInWords={"Headings and Labels"}
          successCriterionNumber={"2.4.6"}
          serial={7}
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
        </GuidelineError>
      </Frame>
    </>
  );
};
