'use babel';

/* jshint esversion:6 */

// https://atom.io/docs/api/v1.2.0/Config
module.exports = {
	config: {
		goDark: {
			title: "Go dark!",
			description: "Check this if you’re using a dark theme.",
			type: 'boolean',
			"default": false
		}
	}
};

function putClass(goDark) {
	// Docs are all in CoffeeScript ... Not a fan. Doing all this loosely just to get it working!
	if (goDark) {
		document.body.classList.add('magical-selection-dark');
		document.body.classList.remove('magical-selection-light');
	} else {
		document.body.classList.add('magical-selection-light');
		document.body.classList.remove('magical-selection-dark');
	}
}

atom.config.onDidChange('magical-selection.goDark', function(arg) {
	var newValue = arg.newValue;
	var oldValue = arg.oldValue;
	putClass(newValue);
});

// On startup (I know, this is all hackish ...):
putClass(atom.config.get('magical-selection.goDark'));
