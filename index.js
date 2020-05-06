const Discord = require('discord.js');
require('dotenv').config(); 
const { prefix, token, } = require('./config.json');
const client = new Discord.Client();
const moment = require('moment');

// Checklist to turn on:

// Need a voice channel that is set NEGATIVE for everything except View Channel for most server roles
// You need a bot in your server to connect this to, and must ensure bot can Manage Channel for voice channel
// Copy the voice channel ID to the marked locations in this code
// Change the timezones as needed
// Add bot token to .env file
// You need somewhere to host 24/7. This bot was built for Heroku.

// Lastly, this bot MAY VIOLATE Discord API ToS. The discord team has said it's fine (given it only makes 1 call per minute)...
// BUT, you are responsible for this bot and your own server. I am not liable for what you do :)

client.once('ready', async () => {
	console.log('Oh, look at the time!')
	client.user.setActivity('The Clock', {type: 'WATCHING'})

	var now = moment().utcOffset(-4).format("HH:mm"); //defaulted to EST
	var gmt = moment().utcOffset(0).format("HH:mm z"); //defaulted to GMT
	var clocktime = '';

	function timeClock(now) // sets clocktime to clock emoji based on hour. 
		{ // there's probably a better way to do this but working with emojis in discord is annoying, so this is easier
		console.log(`Calling timeClock`); 
		if (now.includes('00:') || now.includes('12:')) 
			{
			clocktime = '🕛'; 
			return clocktime;
			}
		else if (now.includes('01:') || now.includes('13:')) 
			{
			clocktime = '🕐';
			return clocktime;
			}
		else if (now.includes('02:') || now.includes('14:')) 
			{
			clocktime = '🕑';
			return clocktime;
			}
		else if (now.includes('03:') || now.includes('15:')) 
			{
			clocktime = '🕒';
			return clocktime;
			}
		else if (now.includes('04:') || now.includes('16:')) 
			{
			clocktime = '🕓';
			return clocktime;
			}
		else if (now.includes('05:') || now.includes('17:')) 
			{
			clocktime = '🕔';
			return clocktime;
			}
		else if (now.includes('06:') || now.includes('18:')) 
			{
			clocktime = '🕕';
			return clocktime;
			}
		else if (now.includes('07:') || now.includes('19:')) 
			{
			clocktime = '🕖';
			return clocktime;
			}
		else if (now.includes('08:') || now.includes('20:')) 
			{
			clocktime = '🕗';
			return clocktime;
			}
		else if (now.includes('09:') || now.includes('21:')) 
			{
			clocktime = '🕘';
			return clocktime;
			}
		else if (now.includes('10:') || now.includes('22:')) 
			{
			clocktime = '🕙';
			return clocktime;
			}
		else if (now.includes('11:') || now.includes('23:')) 
			{
			clocktime = '🕚';
			return clocktime;
			}
		else
			{
			clocktime = '🕛';
			return clocktime;
			}
		}

	async function timeout() // time async func to delay output until seconds == 0
		{
		console.log(`Calling timeout`);
		var current = new Date();
		var timeToNextTick = (60 - current.getSeconds()) * 1000 - current.getMilliseconds();
		console.log(`Timeout Engaged For ${timeToNextTick}`);
		return await new Promise(resolve => setTimeout(resolve,timeToNextTick));
		}

	async function asyncGenerator() // main async func that recursively calls itself 
		{
		console.log(`Calling asyncGenerator`);
		try
			{
			var now = new Date();
			var minutes = now.getMinutes();
			var seconds = now.getSeconds();
			if( minutes != '00' && seconds == '00' )
				{
				now = moment().utcOffset(-4).format("HH:mm"); // using moment 
				gmt = moment().utcOffset(0).format("HH:mm z");
				console.log(`Here's The New Time: ${clocktime}${now} EST•${gmt}`);
				await client.channels.cache.get('YOUR VOICE CHANNEL ID').setName(clocktime+now+' EST'+'•'+gmt);
				console.log(`Loop Completed!`);
				await timeout();
				return asyncGenerator();
				}
			else if( minutes == '00' && seconds == '00' )
				{
				console.log(`New Hour!`);
				now = moment().utcOffset(-4).format("HH:mm");
				gmt = moment().utcOffset(0).format("HH:mm z");
				clocktime = timeClock(now);
				console.log(`Here's The New Time: ${clocktime}${now} EST•${gmt}`);
				await client.channels.cache.get('YOUR VOICE CHANNEL ID').setName(clocktime+now+' EST'+'•'+gmt);
				console.log(`Loop Completed!`);
				await timeout();
				return asyncGenerator();
				}
			else{
				await timeout();
				return asyncGenerator();
				}
			}
		catch (error) {console.log(`Error In asyncGenerator Loop!`)}
		}

	while (true) // main while loop to start async functions
		{
		console.log(`Starting The Clock!`);
		now = moment().utcOffset(-4).format("HH:mm");
		clocktime = timeClock(now);
		console.log(`Here's The Current Time: ${clocktime}${now} EST•${gmt}`);
		try {
			console.log(`Calling timeout start`);
			await timeout();
			console.log(`Calling asyncGenerator start`);
			return asyncGenerator();
			} 
		catch (error) {console.log('Error In Main While Loop!')}
		console.log('Main Loop Completed!');
		}
});

client.login(token);