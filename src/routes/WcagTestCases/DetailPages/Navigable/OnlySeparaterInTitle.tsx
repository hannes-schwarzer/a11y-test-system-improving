import { Helmet } from "react-helmet";

export const OnlySeparaterInTitle = () => {
  return (
    <>
      <Helmet>
        <title> </title>
      </Helmet>
      <main>
        <h1>Only Separator as Title</h1>
        <p>This page only has a separater as page title</p>
      </main>
    </>
  );
};
