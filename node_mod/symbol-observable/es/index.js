/* global window */import ponyfill from"./ponyfill.js";var root;if("undefined"!==typeof self){root=self}else if("undefined"!==typeof window){root=window}else if("undefined"!==typeof global){root=global}else if("undefined"!==typeof module){root=module}else{root=Function("return this")()}var result=ponyfill(root);export default result;