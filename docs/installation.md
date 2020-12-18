**Getting Started**
- Create if not found the .env file which is under `/project-chatmanager/backend`
- Copy your discord bot token, slack bot token and stack signing secret on your .env file, after doing that, you .env file should look like this
    >DISCORD_BOT_TOKEN=discord bot token
    SLACK_BOT_OAUTH_TOKEN=slack bot token
    SLACK_SIGNING_SECRET=slack signing secret
    PORT=3030
    BACKEND_API_KEY=YOUR_APK_KEY

    Tips: how to find these tokens:
    - discord
        - click **Bot**, **Click to Reveal Token**
    - slack
        - slack token: click **OAuth & Permissions**
        - slack signing secret: click **Basic Information**, you will find your **Signing Secret** under **App Credentials**
- Initialize submodule for chatManagerLibrary
`git submodule init`
`git submodule update`
- Go to library folder `cd Project-chatmanagerlibrary/`
- Install the dependencies for the library
`npm install`
- Go to backend folder `cd backend/`
- Install the dependencies
`npm install`
- Start the backend node server
`npm run dev`

**Deploy to Heroku**
- Log in to Container Registry (`heroku login` is required)
`heroku container:login`
- Make sure you're in the root path of the repo, Build the image and push to Container Registry
`heroku container:push web`
- Deploy 
`heroku container:release web`

**Creating a feathers service**
Use [feather-cli](https://github.com/feathersjs/cli) to create a web service