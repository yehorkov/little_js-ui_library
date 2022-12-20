import $ from './lib/lib';

$('active').setAttr('test', 'hello');

console.log($('active').hasAttribute('test'));