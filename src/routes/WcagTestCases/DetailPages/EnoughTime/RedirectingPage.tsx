import { Helmet } from "react-helmet";

export const RedirectingPage = () => {
  return (
    <>
      <Helmet>
        <title>Redirecting Page</title>
      </Helmet>
      <head>
        <meta
          http-equiv="refresh"
          content="20; url=http://www.example.com/newpage"
        />
      </head>
      <body>
        <main>
          <h1>Redirecting Page</h1>
          <p>
            If your browser supports 'refresh', you'll be transported to our{" "}
            <a href="http://www.example.com/newpage">new site</a> in 20 seconds,
            otherwise, select the link manually.
          </p>
        </main>
      </body>
    </>
  );
};
