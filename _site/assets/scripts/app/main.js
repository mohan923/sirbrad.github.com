require.config({ 
	paths: {
		jquery: '../utils/jquery',
		async: '../plugins/async',
		tpl: '../plugins/tpl'
	}
});

require(['comment-listing', 'oauth']);
