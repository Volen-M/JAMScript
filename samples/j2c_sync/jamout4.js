var jamlib = require('/usr/local/share/jam/lib/jserver/jamlib');
var jnode = require('/usr/local/share/jam/lib/jserver/jnode');
var JLogger = require('/usr/local/share/jam/lib/jserver/jlogger');
var JManager = require('/usr/local/share/jam/lib/jserver/jmanager');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var http = require('http');
var cbor = require('cbor');
var qs = require('querystring');
var path = require('path');
var mime = require('mime');
var fs = require('fs');
var jamlib = require('/usr/local/share/jam/lib/jserver/jamlib');
var jnode = require('/usr/local/share/jam/lib/jserver/jnode');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var http = require('http');
var cbor = require('cbor');
var qs = require('querystring');
var path = require('path');
var mime = require('mime');
var fs = require('fs');
var jcondition = new Map();

function trigger() {

    hello('testing string..').then(q => {
	    console.log("Trigger hello");
	    console.log(q);
	});
}

hello = async(function(s) {
await (jnode.remoteSyncExec("hello", [s], "true", 0));
});

var mbox = {
"functions": {
"trigger": trigger,
},
"signatures": {
"trigger": "",
}
}
jamlib.registerFuncs(mbox);
jamlib.run(function() { console.log("Running..."); } );