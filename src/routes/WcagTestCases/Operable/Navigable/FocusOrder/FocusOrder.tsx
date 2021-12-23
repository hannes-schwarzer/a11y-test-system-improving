import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import "./FocusOrder.css";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const FocusOrder = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Link with tabindex greater than 0"}
          successCriterionInWords={"Focus Order"}
          linkToExplanation={
            "https://dequeuniversity.com/rules/axe/4.0/tabindex"
          }
          successCriterionNumber={"2.4.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#focus-order"
          }
          level={Level.A}
          explanation={
            "Using tabindex with a value greater than 0 can create as many problems as it solves. " +
            "It creates an unexpected tab order, which makes the page less intuitive and can give " +
            "the appearance of skipping certain elements entirely."
          }
          id={"2.4.3_1"}
        >
          <a href={"/some-page"} tabIndex={5}>
            A link with a tabindex greater than 0
          </a>
        </TestCase>

        <TestCase
          title={
            "F44: Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that " +
            "does not preserve meaning and operability"
          }
          successCriterionInWords={"Focus Order"}
          successCriterionNumber={"2.4.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#focus-order"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F44.html"
          }
          level={Level.A}
          explanation={
            "The following example incorrectly uses tabindex to specify an alternative " +
            "tab order: If this list is navigated by the tab key, the list is navigated in the order Some Page, " +
            "chapter 3, chapter 2, chapter 1, which does not follow the sequence in the content."
          }
          id={"2.4.3_2"}
        >
          <ol>
            <li>
              <a href="/some-page" tabIndex={1}>
                Some Page
              </a>
            </li>
            <li>
              <a href="chapter1.html" tabIndex={4}>
                Chapter 1
              </a>
            </li>
            <li>
              <a href="chapter2.html" tabIndex={3}>
                Chapter 2
              </a>
            </li>
            <li>
              <a href="chapter3.html" tabIndex={2}>
                Chapter 3
              </a>
            </li>
          </ol>
        </TestCase>

        <TestCase
          title={"Focus order in wrong order"}
          successCriterionInWords={"Focus Order"}
          successCriterionNumber={"2.4.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#focus-order"
          }
          level={Level.A}
          explanation={
            "Here CSS is used to visually rearrange the order of the links. Because of this it " +
            "clashes with the element order of the HTML tree. This produces a counter intuitive " +
            "order when tabbed through."
          }
          id={"2.4.3_3"}
        >
          <div className={"focus-order-broken"}>
            <a className={"first"} href={"/some-page"}>
              First link
            </a>
            <a className={"second"} href={"/some-page"}>
              Second link
            </a>
            <a className={"third"} href={"/some-page"}>
              Third link
            </a>
          </div>
        </TestCase>
      </Frame>
    </>
  );
};
