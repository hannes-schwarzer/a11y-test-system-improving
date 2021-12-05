import { Level, TestCase } from "../../../../components/TestCase/TestCase";
import "./ResizeText.css";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ResizeText = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Page zoom - boxes that don't expand with the text"}
          successCriterionInWords={"Resize Text"}
          successCriterionNumber={"1.4.4"}
          level={Level.AA}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#resize-text"
          }
          explanation={
            "The objective of this failure condition is to describe a problem that occurs when changing the size of text causes text to be clipped, truncated, or obscured, so that it is no longer available to the user. In general, this failure occurs when there is no way for a user agent's layout engine to honor all the layout hints in the HTML at the new font size."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F69.html"
          }
        >
          <div className={"resize-text__wont-expand-box"}>
            The box below this example won't expand to fit the text contained
            within when zoomed in.
            <p className={"resize-text__wont-expand"}>
              This service is for England and Wales only. You must contact
              individual{" "}
              <a
                href={
                  "https://www.justice-ni.gov.uk/topics/prisons/prison-visits"
                }
              >
                prisons in Northern Ireland
              </a>{" "}
              or{" "}
              <a href={"http://www.sps.gov.uk/Corporate/Prisons/Prisons.aspx"}>
                Scotland
              </a>{" "}
              to book a visit.
            </p>
          </div>
        </TestCase>

        <TestCase
          level={Level.AA}
          title={
            "F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured"
          }
          successCriterionInWords={"Resize Text"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#resize-text"
          }
          successCriterionNumber={"1.4.4"}
          explanation={
            "The font size is set in a scalable way, but the container is set to a fixed pixel size. A gray " +
            "border shows the boundaries of the text container. When the text is resized, it spills out of its container, " +
            "and obsures the next paragraph."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F69.html"
          }
        >
          <div className={"resize-text__unscalable-container"}>
            Now is the time for all good men to come to the aid of their
            country.
          </div>
          <p>
            Now is the time for all good men to come to the aid of their
            country.
          </p>
        </TestCase>

        <TestCase
          level={Level.AA}
          title={
            "F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured"
          }
          successCriterionInWords={"Resize Text"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#resize-text"
          }
          successCriterionNumber={"1.4.4"}
          explanation={
            "The font size is set in a scalable way, but the container is set to a fixed pixel size. A gray border " +
            "shows the boundaries of the text container. The container is set to clip the text, so it is truncated."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F69.html"
          }
        >
          <div className={"resize-text__clipping-unscalable-container"}>
            Now is the time for all good men to come to the aid of their
            country.
          </div>
          <p>
            Now is the time for all good men to come to the aid of their
            country.
          </p>
        </TestCase>

        <TestCase
          level={Level.AA}
          title={
            "F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered " +
            "text is resized up to 200%"
          }
          successCriterionInWords={"Resize Text"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#resize-text"
          }
          successCriterionNumber={"1.4.4"}
          explanation={
            "A Contact Form: A Contact Us form has some introductory information and then form controls for " +
            "users to enter their first name, last name, telephone number and email address. The heading, introductory text " +
            "and form control labels have been implemented in a scalable way but the form controls themselves have not."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F80.html"
          }
        >
          <h1 className={"resize-text__form-heading"}>Contact Us</h1>
          <p className={"resize-text__form-paragraph"}>
            Please provide us with your details and we will contact you as soon
            as we can. Note that all of the form fields are required.
          </p>
          <label className={"resize-text__form-label"} htmlFor="fname">
            First Name
          </label>{" "}
          <input
            className={"resize-text__form-input"}
            type="text"
            name="fname"
            id="fname"
          />
          <br />
          <label resize-text__form-label htmlFor="lname">
            Last Name
          </label>{" "}
          <input
            className={"resize-text__form-input"}
            type="text"
            name="lname"
            id="lname"
          />
          <br />
          <label className={"resize-text__form-label"} htmlFor="phone">
            Telephone
          </label>{" "}
          <input
            className={"resize-text__form-input"}
            type="text"
            name="phone"
            id="phone"
          />
          <br />
          <label className={"resize-text__form-label"} htmlFor="email">
            Email
          </label>{" "}
          <input
            className={"resize-text__form-input"}
            type="text"
            name="email"
            id="email"
          />
          <br />
          <input
            className={"resize-text__form-input"}
            type="submit"
            name="Submit"
            value="Submit"
            id="Submit"
          />
        </TestCase>

        <TestCase
          level={Level.AA}
          title={
            "F94: Failure of Success Criterion 1.4.4 due to text sized in viewport units"
          }
          successCriterionInWords={"Resize Text"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#resize-text"
          }
          successCriterionNumber={"1.4.4"}
          explanation={
            "The following CSS and HTML snippet uses VW units to size the text."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F94.html"
          }
        >
          <p className="resize-text__callout">
            Text that scales by viewport units
          </p>
        </TestCase>

        <TestCase
          title={"Very small text found"}
          successCriterionInWords={"Resize Text"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#resize-text"
          }
          successCriterionNumber={"1.4.4"}
          level={Level.AA}
          linkToExplanation={"https://accessibility.psu.edu/fontsizehtml/"}
          explanation={
            "For traditional computer monitors, a size of 12pt (=16px) for body is generally recommended for body text (depending on audience)."
          }
        >
          <p className={"resize-text__small-text"}>
            This is some tiny text, much too small for some people to read
          </p>
        </TestCase>

        <TestCase
          title={
            "Content is not readable and functional when text-size is increased"
          }
          successCriterionInWords={"Resize Text"}
          successCriterionNumber={"1.4.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#resize-text"
          }
          level={Level.AA}
        >
          <p className={"resize-text__resize"}>
            This text becomes unreadable when you increase the text-size (Zoom
            text only) in{" "}
            <a href={"https://www.mozilla.org/en-GB/firefox/desktop/"}>
              Firefox
            </a>
            .
          </p>
        </TestCase>
      </Frame>
    </>
  );
};
