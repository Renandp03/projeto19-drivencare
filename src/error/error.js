
function conflictError(message) {
    return {
      status: 409,
      message,
    };
  }

  function invalidCredentials() {
    return {
      status: 401,
      message: "Email or password are incorrect",
    };
  }

function notFound(message){
  return {
    status: 404,
    message
  }
}


  export default { conflictError, invalidCredentials, notFound }