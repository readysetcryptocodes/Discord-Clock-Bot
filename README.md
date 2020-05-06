## Discord JS Clock Bot

This bot dynamically updates a Voice Channel on your Discord server

### Features

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

1. Adds the current time (in 24H format) for UTC-4 and UTC0 using moment js library
2. Clock emoji added based on time
3. Display update is self-adjusting regardless of compute time
4. Built for cloud based hosting like Heroku to ensure 24/7 uptime. Requires 12-13MB of mem usage.
5. Async to ensure bot can process other tasks

### Checklist to turn on:

- Need a voice channel that is set NEGATIVE for everything except View Channel for most server roles
- You need a bot in your server to connect this to, and must ensure bot can Manage Channel for voice channel
- Copy the voice channel ID to the marked locations in this code
- Change the timezones as needed
- Add bot token to .env file
- You need somewhere to host 24/7. This bot was built for Heroku.

Lastly, this bot **MAY VIOLATE** Discord API ToS. The discord team has said it's fine (given it only makes 1 call per minute)...
**BUT**, _you are responsible_ for this bot and your own server. I am not liable for what you do :)


### Support or Contact

Having trouble with the bot? Join our server at https://discord.gg/UGZr4jR we’ll help you sort it out.
