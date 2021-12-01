import { GuidelineError, Level } from "../../../GuidelineError";

export const TargetSize = () => {
  return (
    <>
      <GuidelineError
        title={"Inadequately-sized clickable targets found"}
        successCriterion={"2.5.5 Target Size"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#target-size"}
        level={Level.AAA}
        serial={1}
        guideline={"2.5.5"}
        linkToExplanation={
          "https://dequeuniversity.com/resources/wcag2.1/2.5.5-target-size"
        }
      >
        <a href={"a.html"}>a</a>
        <a href={"b.html"}>b</a>
        <a href={"c.html"}>c</a>
        <a href={"d.html"}>d</a>
        <a href={"e.html"}>e</a>
        <a href={"f.html"}>f</a>
        <a href={"g.html"}>g</a>
        <a href={"h.html"}>h</a>
        <a href={"i.html"}>i</a>
        <a href={"j.html"}>j</a>
        <a href={"k.html"}>k</a>
        <a href={"l.html"}>l</a>
        <a href={"m.html"}>m</a>
        <a href={"n.html"}>n</a>
        <a href={"o.html"}>o</a>
        <a href={"p.html"}>p</a>
        <a href={"q.html"}>q</a>
        <a href={"r.html"}>r</a>
        <a href={"s.html"}>s</a>
        <a href={"t.html"}>t</a>
        <a href={"u.html"}>u</a>
        <a href={"v.html"}>v</a>
        <a href={"w.html"}>w</a>
        <a href={"x.html"}>x</a>
        <a href={"y.html"}>y</a>
        <a href={"z.html"}>z</a>
      </GuidelineError>
    </>
  );
};
