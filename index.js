var parser = new require('argparse').ArgumentParser({
	addHelp: true,
	description: 'Quickly serve files for download in your localnetwork. Software USB Stick alternative.'
});
var app = require('express')();

parser.addArgument('file', {
	help: 'File to share.'
});
parser.addArgument(['-p', '--port'], {
	help: 'Port for sharing, default 5000.'
});
parser.addArgument(['-s', '--single'], {
	help: 'Only serve one file. Close after serving.'
});
parser.addArgument(['-d', '--direct'], {
	help: 'Don\'t generate hash as link. Allow download direct from address.'
});
var args = parser.parseArgs();

var port = args.port || 5000;
var single = args.single || false;

var route = '/';
if(!args.direct) {
	route += Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

app.get(route, function(req, res) {
	res.download(args.file);
	console.log('Served!');
	if(single) {
		console.log('Closing now!');
		process.exit();
	}
});

app.listen(port, function() {
	console.log('Listening on port ' + port + '!');
	console.log('Avariable at 127.0.0.1:' + port + '' + route);
});
