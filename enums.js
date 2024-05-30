// unauthorized, user doesn't exist, wrong credentials, internal..
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "user doesn't exist";
    LoginError["WrongCredentials"] = "wrong credentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
var printErrorMessage = function (error) {
    if (error == LoginError.Unauthorized) {
        console.log('User not authorized');
    }
    else if (error == LoginError.NoUser) {
        console.log('No user was found with that username');
    }
    else if (error == LoginError.WrongCredentials) {
        console.log('Wrong username/password combination');
    }
    else {
        console.log('Internal Error');
    }
};
printErrorMessage(LoginError.WrongCredentials);
