import * as React from "react";

interface IP extends React.Props<{}> {
  text: string;
}

export default (props): React.ReactElement<IP> => {
  return (
    <p>{props.text}</p>
  );
};
