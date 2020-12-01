---
layout: post
title: "slash command"
date:   2020-11-18 11:18:47 -0500
categories: jekyll update

---

1. /ls (list: list all of the channels/members of slack/discord) 
    
    `/ls ${command_option} ${platform}`
    ```sh
    $ /ls channel discord
    $ /ls member discord
    $ /ls channel slack
    $ /ls member slack
    ``` 
   
2. /gm (group message: send messages to a group channel): 
    
    `/gm ${platform} ${channel_id} ${message}`  
     ```sh
     $ /gm discord ${channel_id} hello 
     $ /gm slack ${channel_id} hello
     ``` 