# Simple Photobooth

A very simple **Node.js** based photobooth, that can be run on a tablet for a party or similar event.

It takes photos from the client's webcam, and then writes them to a directory on the server.

A second client, displays a slideshow of the images which have been taken.

**Status:** Personal project. It works, but it's very rough. Proceed with caution :)

##Running

The server is responsible for running the client, and saving the images to the filesystem.

#####Downlaod & install node

https://nodejs.org/download/

#####1. Change to photobooth source directory

	 cd photobooth

#####2. Install node modules

	 npm install

#####3. Run

	 node main.js

#####4. View

Then, open a browser and go to: **http://localhost:3000 & http://localhost:3000/viewer/**


-






####Making a thumbnail grid

If you want to make a thumbnail grid afterwards, here's a useful ImageMagick command:

	montage -geometry 360x480 -tile 13x8 -border 5  *.jpg montage.png
