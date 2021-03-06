import '/node_modules/gun/gun.min.js';
import '/node_modules/gun/lib/path.js';
import '/node_modules/gun/lib/open.js';

Gun.chain.load = function(cb, opt, at){
	(opt = opt || {}).off = !0;
	return this.open(cb, opt, at);
}

var paths = [Cfg.gun.path];
if(Cfg.gun.path.indexOf('localhost')<0) paths.push('http://localhost:8765/gun');
var gun = window.gun = Gun(paths);

export default gun;