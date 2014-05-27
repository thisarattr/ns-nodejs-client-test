var nsClient = require('ns-nodejs-client');

var notification = '{"notificationType":3,"smsData":{"subject":"Test","content":"This is test msg from REDMART","recipients":["6592329052"]},"ack":true,"errorUrl":""}';

nsClient.sendNotification(nsClient.LOCAL, notification);

console.log("notification success!!!");