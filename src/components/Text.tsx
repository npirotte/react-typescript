import * as React from "react";

interface P extends React.Props<{}> {
  text: string
}

export default (props: P): React.ReactElement<P> => {
  return (
    <p>{props.text}</p>  
  );
}
