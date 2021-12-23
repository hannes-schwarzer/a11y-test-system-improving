import { Helmet } from "react-helmet";

export const InappropriatePageTitle = () => {
  return (
    <>
      <Helmet>
        <title>tbd: Insert Page Title</title>
      </Helmet>
      <main>
        <h1>Inappropriate Page Title</h1>
        <p>This page has an inappropriate page title.</p>
      </main>
    </>
  );
};
