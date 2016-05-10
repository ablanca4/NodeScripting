#!/usr/bin/env node
//Inserted this yay!

var sys = require('sys');
var exec = require('child_process').exec;
var child;

//pwd command
child = exec("pwd", function(error, stdout, stderr){
	sys.print('stdout: '+ stdout );
	sys.print('stderr: '+ stderr);
	if(error!==null){
		console.log("stderr: "+ error);
	}
}); 
