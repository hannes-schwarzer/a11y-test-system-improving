import { Helmet } from "react-helmet";

export const OnlySeparaterInTitle = () => {
  return (
    <>
      <Helmet>
        <title> </title>
      </Helmet>
      <p>This page only has a separater as page title</p>
    </>
  );
};
