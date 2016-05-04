/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import Text from "./Text.tsx";

interface P {}
interface S {
  inputValue: string
}

export default class HelloForm extends React.Component<P, S> {
  handleChange: (e: React.FormEvent) => void = (e: React.FormEvent) => {
    const elm = e.target as HTMLInputElement;
    
    this.setState({
      inputValue: elm.value 
    });
  }
  
  constructor () {
    super();
    
    this.state = {
      inputValue: ''
    }
  }
  
  render (): React.ReactElement<{}> {
    return (
      <div>
        <input placeholder="Type something" className="form-control" value={this.state.inputValue} onChange={this.handleChange} />
        <Text text={"You typed: " + this.state.inputValue} />
        <Text text={"Char nbr: " + this.state.inputValue.length} />
      </div>
    );
  }
}