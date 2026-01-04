const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const guiManager = require('../BusinessLayer/guiManager'); 
const { users, findUser } = require('../DataLayer/users.js');

function findUserById(id) {
  return users.find(user => user.id === id);
}

function initializePassport(passport) {
  // Local Strategy for username/password authentication
  passport.use(new LocalStrategy((username, password, done) => {
    const user = findUser(username);
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    if (user.password !== password) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }));

  // Serialize/Deserialize user
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    const user = findUserById(id);
    done(null, user);
  });
}

function verifyRole(authorizedRoles) {
  return (req, res, next) => {
    if (!req.isAuthenticated()) {
      res.end(guiManager.renderHtmlResult(`Unauthenticated user, please try again...`, [])); 
      return;
    }
    if (!req.user || !authorizedRoles.includes(req.user.role)) {
      res.end(guiManager.renderHtmlResult(`Sorry ${req.user.username}: Unauthorized access to the requested resource...`, [])); 
      return;
    }
    next();
  };
}

module.exports = { verifyRole, initializePassport };