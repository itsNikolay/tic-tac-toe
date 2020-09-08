import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from "react-redux"

const Auth = (props) => (
  <ul>
    { props.currentUserName
      ? <h2>You logged in as {props.currentUserName}</h2>
      :
      <div>
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
      </div>
    }
  </ul>
);


const mapStateToProps = (state) => {
  return {
    currentUserName: state.board.currentUserName
  }
}

export default connect(mapStateToProps)(Auth)

