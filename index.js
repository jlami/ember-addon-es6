/* jshint node: true */
'use strict';

let debug = require('debug');
debug.enable('broccoli-stew:*');

var stew = require('broccoli-stew');
var Funnel = require('broccoli-funnel');
var path = require('path');

module.exports = {
  name: 'addon-es6',
  
  treeForAddon() {
  	let modES6 = stew.find(require.resolve('npm-es6'));//, { files: ['index.js'] });
//  	modES6 = stew.rename(modES6, () => path.join('modules',/* 'npm-es6',*/ 'npm-es6.js'));
  	modES6 = Funnel(modES6, {
  		destDir: 'modules/npm-es6/',
  		getDestinationPath: () => path.join(/*'modules', 'npm-es6',*/ 'index.js')
  	});
  	
  	//let root = this._super.apply(this, arguments);
  	
  	let res = modES6;//stew.find([root, modES6]);
  	
  	res = stew.log(res);
  	
  	return res;
  },
  
  isDevelopingAddon() {
  	return true;
  },
};
