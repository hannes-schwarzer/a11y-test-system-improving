export const RefreshingPage = () => {
  document.title = "Refreshing Page";
  return (
    <>
      <head>
        <meta http-equiv="refresh" content="5" />
      </head>
      <p>This page refreshes every 5 seconds.</p>
    </>
  );
};
