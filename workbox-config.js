module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{html,css,ico,webp,jpg,svg,js,json,txt,xml}'
	],
	swDest: '_site/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};