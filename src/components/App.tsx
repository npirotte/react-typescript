/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";

import HelloComponent from "./HelloComponent.tsx";
import HelloForm from "./HelloForm.tsx";

export default () => (
  <div className="container">
    <HelloComponent title="React <3 TypeScript" />
    <hr />
    <HelloForm />
  </div>
);
