function userCredentials(req, res, next){
    console.log("Username: (Jon Snow)")
    console.log("Email: (jon@got.com)");
    console.log("Password: (north)");
    next();
}

export default userCredentials