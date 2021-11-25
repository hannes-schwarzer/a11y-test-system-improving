import "./TestCases.css";
import { ContentTestCases } from "./ContentTestCases/ContentTestCases";
import { LayoutTestCases } from "./LayoutTestCases/LayoutTestCases";
import { ColorTestCases } from "./ColorTestCases/ColorTestCases";
import { FocusTestCases } from "./FocusTestCases/FocusTestCases";
import { TypographyTestCases } from "./TypographyTestCases/TypographyTests";
import { LanguageTestCases } from "./LanguageTestCases/LanguageTestCases";
import { TitleTestCases } from "./TitleTestCases/TitleTestCases";
import { HeadingsTestCases } from "./HeadingTestCases/HeadingsTestCases";
import { ListTestCases } from "./ListTestCases/ListTestCases";
import { TableTestCases } from "./TableTestCases/TableTestCases";
import { ImageTestCases } from "./ImageTestCases/ImageTestCases";
import { MultimediaTestCases } from "./MultimediaTestCases/MultimediaTestCases";
import { LinkTestCases } from "./LinkTestCases/LinkTestCases";
import { ButtonTestCases } from "./ButtonTestCases/ButtonTestCases";
import { FormsTestCases } from "./FormsTestCases/FormsTestCases";
import { NavigationTestCases } from "./NavigationTestCases/NavigationTestCases";
import { KeyboardTestCases } from "./KeyboardTestCases/KeyboardTestCases";
import { FrameTestCases } from "./FrameTestCases/FrameTestCases";
import { CssTestCases } from "./CssTestCases/CssTestCases";
import { HtmlTestCases } from "./HtmlTestCases/HtmlTestCases";

function TestSuite() {
  return (
    <>
      <header id={"globalHeader"}>A11Y TEST SYSTEM</header>
      <main id={"main"}>
        {/*TODO Something is unclear in ContentTestCases*/}
        <ContentTestCases />
        <LayoutTestCases />
        <ColorTestCases />
        <FocusTestCases />
        <TypographyTestCases />
        <LanguageTestCases />
        {/*TODO Miising page title is not yet done*/}
        <TitleTestCases />
        <HeadingsTestCases />
        <ListTestCases />
        <TableTestCases />
        <ImageTestCases />
        <MultimediaTestCases />
        {/*TODO There is still one to be implemented*/}
        <LinkTestCases />
        <ButtonTestCases />
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

export default TestSuite;
