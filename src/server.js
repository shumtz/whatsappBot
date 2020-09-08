const fs = require('fs');
const DataJson = require('./util/dataJson.js')
const venom = require('venom-bot');

venom.create().then((client) => start(client));

function start(client) {
    client.onMessage((message) => {
        if (message.body == "message" || DataJson.listMessage()) {
            client.sendText(message.from, `${DataJson.randMessage()}`)
        }
    })
}