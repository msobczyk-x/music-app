import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useRouteError, useNavigate } from 'react-router-dom'
const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);
  const navigate = useNavigate();
  const user = useSelector (({UserSlice} :any) => UserSlice.user);
  useEffect(() => {
    if (user.email) {
      localStorage.removeItem('token');
      navigate('/setup-api-key');
    }
    
  }, [])
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage