var admin = require("firebase-admin");
var serviceAccount = require('../config/nodejskuu-firebase-adminsdk-fga2s-4dc4bee0f9.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://nodejskuu.firebaseio.com"
});

var topic = 'general';

const pushNotification = (message) => {
    return new Promise(async (resolve, reject) => {
        admin.messaging().send(message)
            .then((response) => {
                resolve('Message Successfully send')
                // Response is a message ID string.
                console.log('Successfully sent message:', response);
            })
            .catch((error) => {
                reject(error)
                console.log('Error sending message:', error);
            });
    })
}
    
exports.sendPush = (req, res) => {

    let title, message
    title = req.body.title,
    message = req.body.message

    var messages = {
        notification: {
            title: title,
            body: message
        },
        topic: topic
    };

    pushNotification(messages)
        .then(data => {
            return res.status(200).json({
                'status': true,
                'message': "Success",
            });
        })
        .catch(err => {

        })


    
}