export const RedirectingPage = () => {
  document.title = "Do not use this!";
  return (
    <>
      <head>
        <meta
          http-equiv="refresh"
          content="5; url=http://www.example.com/newpage"
        />
      </head>
      <body>
        <p>
          If your browser supports Refresh, you'll be transported to our{" "}
          <a href="http://www.example.com/newpage">new site</a> in 5 seconds,
          otherwise, select the link manually.
        </p>
      </body>
    </>
  );
};
