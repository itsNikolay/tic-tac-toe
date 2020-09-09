import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom'
import { connect } from "react-redux"
import { signOut } from '../features/currentUserSlice';
import { UserContext } from './UserContext';

const Auth = (props) => {
  const currentUser = useContext(UserContext)

  return (
    <ul>
      { currentUser.id
        ?
          <div>
            <h2>You logged in as {currentUser.name}</h2>
            <a onClick={props.signOut} style={{cursor: 'pointer'}}>
              Log Out
            </a>
          </div>
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
};


const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)

