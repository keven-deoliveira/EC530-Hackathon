# EC530-Hackathon
Python P2P Chat

The ```python-scripts``` directory contains some simple p2p scripts that I used to refresh my memory and as a starting point.

However, seeing as I wanted some kind of GUI, I figured I would use React Native to create a simple web app for the chatroom. The source code for this app is located inside the ```p2p-chat``` directory.

Currently the project supports:
- A simple peer-to-peer chatroom that allows multiple clients to connect and chat
- A barebones interface

Things to Implement:
- Incorporate a database (likely MongoDB) to store chat information locally for each client.
- Ability to set a "Nickname" so that users can identify one another better
- Ability to mute/unmute certain users so that you no longer see their messages
- Multiple rooms and/or the ability to private message (in new, private, room) other users