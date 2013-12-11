Package.describe({
	summary: "An HTML5 Canvas JavaScript framework that enables high performance animations, transitions, node nesting, layering, filtering, caching, event handling for desktop and mobile applications, and much more."
});

Package.on_use(function (api) {
	api.add_files([
		'kinetic-v4.7.4.js'
		], 'client');
	if (typeof api.export !== 'undefined') {
    	api.export(['Kinetic'], 'client'); 
  	}
});
