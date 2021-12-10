import { Helmet } from "react-helmet";

export const RefreshingPage = () => {
  return (
    <>
      <Helmet>
        <title>Refreshing Page</title>
      </Helmet>
      <head>
        <meta http-equiv="refresh" content="5" />
      </head>
      <p>This page refreshes every 5 seconds.</p>
    </>
  );
};
