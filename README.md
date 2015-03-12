# Simple Photobooth

**Status:** WIP

**Goal** Create a very simple **Node.js** based photobooth, that can be run on a tablet for a party or similar event.

It takes photos from the client's webcam, and then writes them to a directry on the server.


##Running

The server is responsible for runnign the client, and saving the images to the filesystem.

#####Downlaod & install node

https://nodejs.org/download/

#####1. Change to photobooth source directory

	 cd photobooth

#####2. Install node modules

	 npm install
	 
#####3. Run

	 node main.js
	 
#####4. View
	
Then, open a browser and go to: **http://localhost:3000**