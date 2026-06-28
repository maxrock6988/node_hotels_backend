const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require('./models/person')

//Configure Passport
passport.use(new LocalStrategy(async (USERNAME, password, done) => {
    try {
       // console.log('recieved credendtial:', USERNAME, password);
        const user = await Person.findOne({ username: USERNAME });
        if (!user)
            return done(null, false, { message: 'incorrect username.' });  //done(error, user, info) parameters of done
        const ispasswordMatch = user.password === password ? true : false;

        if (ispasswordMatch) {
            return done(null, user)
        }
        else {
            return done(null, false, { message: 'incorrect password.' })
        }
    } catch (error) {
        return done(error)
    }
}))

module.exports=passport;// export Configure Passport