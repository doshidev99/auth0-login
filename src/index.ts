
const auth0 = require("auth0-js");

require("dotenv").config();
const testFn = () => {
  console.log("hello auth0 login");
};

const auth0Config = {
  // domain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  // clientID: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID,
  // audience: process.env.NEXT_PUBLIC_AUTH_AUDIENCE,
  // redirectUri: process.env.NEXT_PUBLIC_AUTH_URI,
  // responseType: "code",
  // scope: process.env.NEXT_PUBLIC_AUTH_SCOPE,
};

class AuthService {
  webAuth = new auth0.WebAuth(auth0Config);
  authenticate = new auth0.Authentication(auth0Config);

  // login(params?: AuthorizeOptions) {
  //   this.webAuth.authorize({ ...params, prompt: "select_account" });
  // }
}

module.exports = {
  test: testFn,
  // auth0: new AuthService(),
};
