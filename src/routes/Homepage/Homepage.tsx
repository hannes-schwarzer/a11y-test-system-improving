import "./Homepage.css";
import { Header } from "../../components/structural/Header/Header";
import { Navigation } from "../../components/structural/Navigation/Navigation";

interface HomepageProps {
  pageTitle: string;
}

export const Homepage = (homepageProps: HomepageProps) => {
  document.title = homepageProps.pageTitle;
  return (
    <>
      <Header pageTitle={homepageProps.pageTitle} />
      <main className={"main-content"}>
        <Navigation />
        <section className={"middle-section"}>
          <h2 className={"section__heading"}>
            What this is, what to do and how to do it
          </h2>
          <p className={"section__content"}>Here come the explanation...</p>
        </section>
      </main>
    </>
  );
};
