import "../Home.css";
import { LinkTestCases } from "./LinkTestCases/LinkTestCases";
import { FormsTestCases } from "./FormsTestCases/FormsTestCases";
import { NavigationTestCases } from "./NavigationTestCases/NavigationTestCases";
import { KeyboardTestCases } from "./KeyboardTestCases/KeyboardTestCases";
import { FrameTestCases } from "./FrameTestCases/FrameTestCases";
import { CssTestCases } from "./CssTestCases/CssTestCases";
import { HtmlTestCases } from "./HtmlTestCases/HtmlTestCases";

function GDSTestSuite() {
  return (
    <>
      <header id={"globalHeader"}>GDS TEST SUITE</header>
      <main id={"main"}>
        {/*TODO There is still one to be implemented*/}
        <LinkTestCases />
        <FormsTestCases />
        <NavigationTestCases />
        {/*TODO Concertina doesn't function*/}
        {/*TODO Lightbox doesn't function*/}
        <KeyboardTestCases />
        <FrameTestCases />
        <CssTestCases />
        {/*<center> is not supported in react*/}
        <HtmlTestCases />
      </main>
    </>
  );
}

export default GDSTestSuite;
