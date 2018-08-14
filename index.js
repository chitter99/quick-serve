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
var args = parser.parseArgs();

var port = args.port || 5000;
var single = args.single || false;

app.get('/', function(req, res) {
	res.download(args.file);
	console.log('Served!');
	if(single) {
		console.log('Closing now!');
		process.exit();
	}
});

app.listen(port, function() {
	console.log('Listening on port ' + port + '!');
});
