const fs = require('fs');
const messages = fs.readFileSync(__dirname + '/message.json');
const commands = fs.readFileSync(__dirname + '/command.json');

class DataJson {
    // turns .json readable for whatsapp
    listMessage() {
        let arrayObject = JSON.parse(commands)
        let consultObject = arrayObject.command
        let arrayString = JSON.stringify(consultObject)
        let stringSlice = arrayString.slice(1, arrayString.length - 1)
        let stringReplace = stringSlice.replace(/\,/g, ' || ')
        JSON.stringify(stringReplace)
        return stringReplace
        console.log(stringReplace)
    }
    // function to pick up data randomly
    randMessage() {
        let arrayObject = JSON.parse(messages);
        let consultObject = arrayObject.lorem
        let randomMessage = consultObject[Math.floor(Math.random() * consultObject.length)];
        return randomMessage
    }
}

module.exports = new DataJson()