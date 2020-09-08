import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from "react-redux"

function get_cookie(name){
  return document.cookie.split(';').some(c => {
    return c.trim().startsWith(name + '=');
  });
}

const delete_cookie =( name, path, domain ) =>  {
  if( get_cookie( name ) ) {
    document.cookie = name + "=" +
      ((path) ? ";path="+path:"")+
      ((domain)?";domain="+domain:"") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
}

const logOut = () => {
  delete_cookie('user_id', '/', null);
  window.location = '/'
};

const Auth = (props) => (
  <ul>
    { props.currentUserName
      ?
        <div>
          <h2>You logged in as {props.currentUserName}</h2>
          <a onClick={logOut} style={{cursor: 'pointer'}}>
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


const mapStateToProps = (state) => {
  return {
    currentUserName: state.board.currentUserName
  }
}

export default connect(mapStateToProps)(Auth)

