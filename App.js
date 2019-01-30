// @flow
import { Provider } from "react-redux"

import React from "react"
import Navigator from "./src/containers/Navigator"

import {store} from "./store"

export default class App extends React.PureComponent<null> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
