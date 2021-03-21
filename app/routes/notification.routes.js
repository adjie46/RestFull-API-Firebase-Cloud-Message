const notifController = require('../controller/notification.controller');

module.exports = app => {
    app
        .route("/api/send/notification")
        .post(notifController.sendPush)
}