import { Frame } from "../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const Operable = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <p>TODO: Overview over number ov test cases</p>
      </Frame>
    </>
  );
};
