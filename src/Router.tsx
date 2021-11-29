import { BrowserRouter, Route, Routes } from "react-router-dom";
import GDSTestSuite from "./components/gdsTests/GDSTestSuite";
import { Inappropriate } from "./components/WcagTestComponents/Operable_2/Navigable_2.4/Inappropriate";
import { Empty } from "./components/WcagTestComponents/Operable_2/Navigable_2.4/Empty";
import { Missing } from "./components/WcagTestComponents/Operable_2/Navigable_2.4/Missing";
import { MissingHOne } from "./components/gdsTests/DemoPages/MissingHOne";
import { KeyboardTrap } from "./components/gdsTests/KeyboardTestCases/KeyboardTrap";
import { DemoPage } from "./components/gdsTests/DemoPages/DemoPage";
import { Home } from "./components/Home";
import { WCAGTestSuite } from "./components/WcagTestComponents/WCAGTestSuite";
import { Perceivable } from "./components/WcagTestComponents/Perceivable_1/Perceivable";
import { Operable } from "./components/WcagTestComponents/Operable_2/Operable";
import { Understandable } from "./components/WcagTestComponents/Understandable_3/Understandable";
import { Robust } from "./components/WcagTestComponents/Robust_4/Robust";
import { Header } from "./components/Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/gds"} element={<GDSTestSuite />} />
        <Route path={"/wcag"} element={<WCAGTestSuite />} />
        <Route path={"/wcag/perceivable"} element={<Perceivable />} />
        <Route path={"/wcag/operable"} element={<Operable />} />
        <Route path={"/wcag/understandable"} element={<Understandable />} />
        <Route path={"/wcag/robust"} element={<Robust />} />
        <Route path={"/page-title/inappropriate"} element={<Inappropriate />} />
        <Route path={"/page-title/empty"} element={<Empty />} />
        <Route path={"/page-title/missing"} element={<Missing />} />
        <Route path={"/headings/missingh1"} element={<MissingHOne />} />
        <Route path={"/keyboard/trap"} element={<KeyboardTrap />} />
        <Route path={"/demo-page"} element={<DemoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
