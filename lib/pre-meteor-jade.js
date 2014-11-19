Npm = {
	require: function(what) {
		if (what !== 'jade')
			throw new Error('[jade-client] npm.require for non jade');
		return module.exports;
	}
}
