const express = require("express");
const userDets = require('./UserDtails')
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const session = require("express-session")
const accessToken = userDets.accessToken
const refreshToken = userDets.refreshToken
const app = express()

app.use(session({
  secret: 'ysgwyedygywu',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize())
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: userDets.clientId,
  clientSecret: userDets.clientSecret,
  callbackURL: userDets.URI
},
  (accessToken, refreshToken, profile, done) => {
    console.log(profile)
    
  }))