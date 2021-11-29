import { Level, GuidelineError } from "../../../GuidelineError";
import "./Resize.css";

export const Resize = () => {
  return (
    <>
      <GuidelineError
        level={Level.AA}
        title={
          "F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured"
        }
        category={"1.4.4 Resize text"}
        serial={1}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#resize-text"}
        guideline={"1.4.4"}
        explanation={
          "The font size is set in a scalable way, but the container is set to a fixed pixel size. A gray " +
          "border shows the boundaries of the text container. When the text is resized, it spills out of its container, " +
          "and obsures the next paragraph."
        }
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F69.html"
        }
      >
        <div
          style={{
            fontSize: "100%",
            width: "120px",
            height: "100px",
            border: "thin solid gray",
          }}
        >
          Now is the time for all good men to come to the aid of their country.
        </div>
        <p>
          Now is the time for all good men to come to the aid of their country.
        </p>
      </GuidelineError>
      <GuidelineError
        level={Level.AA}
        title={
          "F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured"
        }
        category={"1.4.4 Resize text"}
        serial={2}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#resize-text"}
        guideline={"1.4.4"}
        explanation={
          "The font size is set in a scalable way, but the container is set to a fixed pixel size. A gray border " +
          "shows the boundaries of the text container. The container is set to clip the text, so it is truncated."
        }
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F69.html"
        }
      >
        <div
          style={{
            fontSize: "100%",
            width: "120px",
            height: "100px",
            border: "thin solid gray",
          }}
        >
          Now is the time for all good men to come to the aid of their country.
        </div>
        <p>
          Now is the time for all good men to come to the aid of their country.
        </p>
      </GuidelineError>
      <GuidelineError
        level={Level.AA}
        title={
          "F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered " +
          "text is resized up to 200%"
        }
        category={"1.4.4 Resize text"}
        serial={3}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#resize-text"}
        guideline={"1.4.4"}
        explanation={
          "A Contact Form: A Contact Us form has some introductory information and then form controls for " +
          "users to enter their first name, last name, telephone number and email address. The heading, introductory text " +
          "and form control labels have been implemented in a scalable way but the form controls themselves have not."
        }
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F80.html"
        }
      >
        <h1 style={{ fontSize: "2em" }}>Contact Us</h1>
        <p style={{ fontSize: "1em" }}>
          Please provide us with your details and we will contact you as soon as
          we can. Note that all of the form fields are required.
        </p>
        <label style={{ fontSize: "1em" }} htmlFor="fname">
          First Name
        </label>
        <input
          style={{ fontSize: "12pt" }}
          type="text"
          name="fname"
          id="fname"
        />
        <br />
        <label style={{ fontSize: "1em" }} htmlFor="lname">
          Last Name
        </label>
        <input
          style={{ fontSize: "12pt" }}
          type="text"
          name="lname"
          id="lname"
        />
        <br />
        <label style={{ fontSize: "1em" }} htmlFor="phone">
          Telephone
        </label>
        <input
          style={{ fontSize: "12pt" }}
          type="text"
          name="phone"
          id="phone"
        />
        <br />
        <label style={{ fontSize: "1em" }} htmlFor="email">
          Email
        </label>
        <input
          style={{ fontSize: "12pt" }}
          type="text"
          name="email"
          id="email"
        />
        <br />
        <input
          style={{ fontSize: "12pt" }}
          type="submit"
          name="Submit"
          value="Submit"
          id="Submit"
        />
      </GuidelineError>
      <GuidelineError
        level={Level.AA}
        title={
          "F94: Failure of Success Criterion 1.4.4 due to text sized in viewport units"
        }
        category={"1.4.4 Resize text"}
        serial={4}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#resize-text"}
        guideline={"1.4.4"}
        explanation={
          "The following CSS and HTML snippet uses VW units to size the text."
        }
        linkToExplanation={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F94.html"
        }
      >
        <p className="callout">Text that scales by viewport units</p>
      </GuidelineError>
      <GuidelineError
        title={"Very small text found"}
        category={"typography"}
        serial={5}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#resize-text"}
        guideline={"1.4.4"}
        level={Level.AA}
        linkToExplanation={"https://accessibility.psu.edu/fontsizehtml/"}
      >
        <p className={"small-text"}>
          This is some tiny text, much too small for some people to read
        </p>
      </GuidelineError>
    </>
  );
};
