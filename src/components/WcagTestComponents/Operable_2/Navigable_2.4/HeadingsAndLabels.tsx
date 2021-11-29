import { GuidelineError, Level } from "../../../GuidelineError";

export const HeadingsAndLabels = () => {
  return (
    <>
      {/*2.4.6 & 2.4.10*/}
      <GuidelineError
        title={"Headings not structured in a hierarchical manner"}
        category={"2.4.6 Headings and Labels"}
        serial={1}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels"
        }
        guideline={"2.4.6"}
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
          Technically, lower degree headings should be contained within headings
          of the next highest degree (i.e., one should not skip heading levels,
          such as from an h2 to an h4, going down the document).
        </p>
        <h4>Heading h4</h4>
        <p>
          This is an example where heading levels have been skipped and are not
          in a logical order, which makes the page difficult to understand and
          navigate for people using assistive technologies such as screen
          reader.
        </p>
      </GuidelineError>
    </>
  );
};
