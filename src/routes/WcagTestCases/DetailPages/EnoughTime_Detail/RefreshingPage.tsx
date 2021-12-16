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
      <h1>Refreshing Page</h1>
      <p>This page refreshes every 5 seconds.</p>
    </>
  );
};
