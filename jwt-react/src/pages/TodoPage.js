import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";

import { UserContext } from '../contexts/userContext.js'
import AuthenticatedTodoComp from '../components/Todo/AuthenticatedTodoComp.js';


function AuthenticatedTodo() {
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const {user, setUser, isUserLoggedIn} = useContext(UserContext)
  
    /**
     * redirectUnauthenticatedUser
     * the following redirects the user to the login page
     * if they aren't logged in.
    **/
    const redirectUnauthenticatedUser = () => {
      if (!isUserLoggedIn()) {
        history.push('/login?next=/ping');
      }
    }
  
    /**
     * calls redirectUnauthenticatedUser on mount and user changes.
    **/
    // eslint-disable-next-line no-sparse-arrays
    useEffect(redirectUnauthenticatedUser, [,user])
  
  
    return <div>

      <h1>Authenticated Todo</h1>
      <AuthenticatedTodoComp/>

    </div>
  }

export default AuthenticatedTodo;
