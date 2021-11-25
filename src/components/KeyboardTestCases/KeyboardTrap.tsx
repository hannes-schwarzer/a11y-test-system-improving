export const KeyboardTrap = () => {
  return (
    <>
      <h1>Example Keyboard Trap</h1>
      <p>
        There are 2 links on this page. If you are using a keyboard you won't be
        able to get to the second link. The keydown event has been used to open
        a new window. When a person using a keyboard attempts to move focus away
        from the first link, the keydown event will be triggered and the
        resulting function will be executed.
      </p>
      <ul>
        <li>
          <a
            className={"trap"}
            href={"https://en.wikipedia.org/wiki/Booby_trap"}
          >
            trap
          </a>
        </li>
        <li>
          <a href={"https://en.wikipedia.org/wiki/Honey"}>honey</a>
        </li>
      </ul>
    </>
  );
};
