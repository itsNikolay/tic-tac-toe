import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from "react-redux"

const Auth = (props) => (
  <ul>
    <li>
      <a href="/auth?name=Tobias" data-method="post">
        Log in as Tobias
      </a>
    </li>
    <li>
      <a href="/auth?name=Nikolay" data-method="post">
        Log in as Nikolay
      </a>
    </li>
  </ul>
);


const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Auth)

