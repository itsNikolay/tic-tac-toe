import React, { useEffect } from 'react'

const UserContext = React.createContext({id: null, name: null})

const UserProvider = UserContext.Provider

export { UserProvider, UserContext }

// Component

// Usage:
//
// import React, { useContext } from 'react';
// import { UserContext } from './UserContext';
//
// const Auth = (props) => {
//   const currentUser = useContext(UserContext)

import { connect } from "react-redux"
import { create, build } from '../features/currentUserSlice';

const UserProviderComponent = (props) => {
  return (
    <UserProvider value={props.currentUser}>
      {props.children}
    </UserProvider>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return { currentUser }
}

const mapDispatchToProps = (dispatch, props) => {
  const received = result => dispatch(build(result))
  dispatch(create({ room: 'AuthChannel', received }))

  return props
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProviderComponent)
