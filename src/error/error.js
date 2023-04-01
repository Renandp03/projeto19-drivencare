
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


  export default { conflictError, invalidCredentials }