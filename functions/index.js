const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.createProfileDocument = functions.auth.user().onCreate((user) => {
  db.collection("profiles")
    .doc(user.uid)
    .set(JSON.parse(JSON.stringify(user)));
});
