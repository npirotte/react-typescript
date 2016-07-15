/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";

interface P extends React.Props<{}> {
  title: string;
}

interface S {
  timer: number;
}

export default class HelloComponent extends React.Component<P, S> {
  interval: number;
  
  incrementTimer: () => void = () => {
    this.setState({
      timer: this.state.timer + 1
    });
  };
  
  constructor (props: P) {
    super(props);
    
    this.state = {
      timer: 0
    };
    
    this.interval = window.setInterval(this.incrementTimer, 1000);
  }

  componentWillUnmount (): void {
    window.clearInterval(this.interval);
  }
  
  render (): React.ReactElement<{}> {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>Time: {this.state.timer}s</div>
      </div>
    );
  }
}