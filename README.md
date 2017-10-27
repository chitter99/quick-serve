# Quick Serve
Quickly serve files for download in your local network. Software USB Stick alternative.

## Installation
1.	Make sure you have NodeJS and npm Installed.
2.	Clone or download this repository. For cloning use `clone https://github.com/chitter99/quick-serve`.
3.	Run `npm install` inside your local directory for this repository.
4.	Done!

## Usage
Navigate with your console to the directory where you installed this repository. Run the following command to start the application and share a file.
```
node index.js {path}
```
Replace the {path} placeholder with the location of your file you want to share. Now you can visit `localhost:5000` to download your file. To share your file to some else in your network, you need to know your local ip4 address. You can find this easily via cmd or bash on linux / mac. Just replace localhost in the URL above. 

### Port
You can change the port on which the application will share the file. Per default the port 5000 is used. You can change the port via a parameter, like this `node index.js {path} --port 80`.
