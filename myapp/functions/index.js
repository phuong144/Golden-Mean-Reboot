const functions = require('firebase-functions');
const firebase = require("firebase-admin");
const nodemailer = require('nodemailer');
const gmail = require('./gmail-config');
firebase.initializeApp();

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: gmail.user,
        pass: gmail.pass
    }
});


//This Function will be an Authentication trigger that adds a users email and name to
//firestore that is essentially the emailing subscribers list

exports.addEmailList = functions.auth.user().onCreate((user) => {
    const email = user.email;
    const displayName = user.displayName;
    const uid = user.uid;

    var db = firebase.firestore().collection("MailingList");

    db.doc(uid).set({
        uid: uid,
        email: email,
        displayName: displayName
    }).then(() => {
        console.log('Added to mailing list');
    });
    return uid;
});



exports.sendMail = functions.firestore
    .document('podcasts/{podcastId}')
    .onCreate((snap, context) => {
      // Get an object representing the document
      // e.g. {'name': 'Marie', 'age': 66}
      const newValue = snap.data();

      // access a particular field as you would any JS property
      const title = newValue.title;
      const description = newValue.description;
      const intro = newValue.intro;

      
      // perform desired operations ...  

    var db = firebase.firestore();
    db.collection("MailingList").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            //doc.email, doc.displayName, doc.uid

            const dest = doc.data().email;

            const mailOptions = {
                from: 'The Golden Mean <goldenmeants@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
                to: dest,
                subject: "New Podcast! " + title, // email subject,
                text: description,
                html: `
                    <p style="font-size: 16px;">We just released a new podcast! Come check it out <a href="https://the-golden-mean.web.app/">here</a>!</p>
                    <br />
                    <img src="cid:logoattachment@unique.com" style="width:400px; height:400px;" />
                    <a href="https://the-golden-mean.web.app/">The Golden Mean</a>
                ` ,// email content in HTML
                attachments: [
                    {
                        filename: 'Logo.jpg',
                        path: 'Logo.jpg',
                        cid:'logoattachment@unique.com'
                    }
                ]
            };
            return transporter.sendMail(mailOptions, (erro, info) => {
                if(erro){
                    console.log(erro);
                    return erro;
                }
                
                return info;
            
            });    

        });
        
    }).then(console.log("Email finished")
    );
    return title;
    
});
    
