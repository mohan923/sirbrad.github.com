require.config({ 
	paths: {
		jquery: '../utils/jquery',
		tpl: '../plugins/tpl'
	}
});

//require(['comment-listing', 'oauth']);
require(['comcom'], function(comcom){
	
	comcom.init('sirbrad')
	
});
