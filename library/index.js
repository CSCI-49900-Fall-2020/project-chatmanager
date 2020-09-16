const   { WebClient }           = require('@slack/web-api'),
        { createEventAdapter }  = require('@slack/events-api'),
        { createReadStream }    = require('fs');


// get access token from slack bot and set you enviroment variable SLACK_TOKEN using export SLACK_TOKEN="slack token" in your terminal
const token = process.env.SLACK_TOKEN;
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID.
const channelId = 'C01AA5U5BGT';


// sends file to slack works for both private and group depends on the channel id
async function sendFile(filename,channelId){
    const response = await web.files.upload({
        filename, file: createReadStream(filename), channels: channelId
    })
    //we can collect from data from the response such as slack link to file, id, etc
    //console.log(response);
}

// sets up server if you havent set a port it defaults to 3000
const port = process.env.PORT || 3000;


// starts server and waits for events to arrive
(async () => {
    const server = await slackEvents.start(port);
    console.log("Server starter on port %s", port);
  })();

//test to to check it is working should send a 
//sendFile('test files/source.gif', channelId);