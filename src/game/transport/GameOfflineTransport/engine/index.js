"use strict";
(function() {

var $global,$module;if(Error.stackTraceLimit=1/0,"undefined"!=typeof window?$global=window:"undefined"!=typeof self?$global=self:"undefined"!=typeof global?($global=global).require=require:$global=this,void 0===$global||void 0===$global.Array)throw new Error("no global object found");"undefined"!=typeof module&&($module=module);var $throwRuntimeError,$packages={},$idCounter=0,$keys=function(e){return e?Object.keys(e):[]},$flushConsole=function(){},$throwNilPointerError=function(){$throwRuntimeError("invalid memory address or nil pointer dereference")},$call=function(e,n,r){return e.apply(n,r)},$makeFunc=function(e){return function(){return $externalize(e(this,new($sliceType($jsObjectPtr))($global.Array.prototype.slice.call(arguments,[]))),$emptyInterface)}},$unused=function(e){},$mapArray=function(e,n){for(var r=new e.constructor(e.length),t=0;t<e.length;t++)r[t]=n(e[t]);return r},$methodVal=function(e,n){var r=e.$methodVals||{};e.$methodVals=r;var t=r[n];if(void 0!==t)return t;var i=e[n];return t=function(){$stackDepthOffset--;try{return i.apply(e,arguments)}finally{$stackDepthOffset++}},r[n]=t,t},$methodExpr=function(e,n){var r=e.prototype[n];return void 0===r.$expr&&(r.$expr=function(){$stackDepthOffset--;try{return e.wrapped&&(arguments[0]=new e(arguments[0])),Function.call.apply(r,arguments)}finally{$stackDepthOffset++}}),r.$expr},$ifaceMethodExprs={},$ifaceMethodExpr=function(e){var n=$ifaceMethodExprs["$"+e];return void 0===n&&(n=$ifaceMethodExprs["$"+e]=function(){$stackDepthOffset--;try{return Function.call.apply(arguments[0][e],arguments)}finally{$stackDepthOffset++}}),n},$subslice=function(e,n,r,t){if(void 0===r&&(r=e.$length),void 0===t&&(t=e.$capacity),(n<0||r<n||t<r||r>e.$capacity||t>e.$capacity)&&$throwRuntimeError("slice bounds out of range"),e===e.constructor.nil)return e;var i=new e.constructor(e.$array);return i.$offset=e.$offset+n,i.$length=r-n,i.$capacity=t-n,i},$substring=function(e,n,r){return(n<0||r<n||r>e.length)&&$throwRuntimeError("slice bounds out of range"),e.substring(n,r)},$sliceToArray=function(e){return e.$array.constructor!==Array?e.$array.subarray(e.$offset,e.$offset+e.$length):e.$array.slice(e.$offset,e.$offset+e.$length)},$decodeRune=function(e,n){var r=e.charCodeAt(n);if(r<128)return[r,1];if(r!=r||r<192)return[65533,1];var t=e.charCodeAt(n+1);if(t!=t||t<128||192<=t)return[65533,1];if(r<224)return(a=(31&r)<<6|63&t)<=127?[65533,1]:[a,2];var i=e.charCodeAt(n+2);if(i!=i||i<128||192<=i)return[65533,1];if(r<240)return(a=(15&r)<<12|(63&t)<<6|63&i)<=2047?[65533,1]:55296<=a&&a<=57343?[65533,1]:[a,3];var a,o=e.charCodeAt(n+3);return o!=o||o<128||192<=o?[65533,1]:r<248?(a=(7&r)<<18|(63&t)<<12|(63&i)<<6|63&o)<=65535||1114111<a?[65533,1]:[a,4]:[65533,1]},$encodeRune=function(e){return(e<0||e>1114111||55296<=e&&e<=57343)&&(e=65533),e<=127?String.fromCharCode(e):e<=2047?String.fromCharCode(192|e>>6,128|63&e):e<=65535?String.fromCharCode(224|e>>12,128|e>>6&63,128|63&e):String.fromCharCode(240|e>>18,128|e>>12&63,128|e>>6&63,128|63&e)},$stringToBytes=function(e){for(var n=new Uint8Array(e.length),r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n},$bytesToString=function(e){if(0===e.$length)return"";for(var n="",r=0;r<e.$length;r+=1e4)n+=String.fromCharCode.apply(void 0,e.$array.subarray(e.$offset+r,e.$offset+Math.min(e.$length,r+1e4)));return n},$stringToRunes=function(e){for(var n,r=new Int32Array(e.length),t=0,i=0;i<e.length;i+=n[1],t++)n=$decodeRune(e,i),r[t]=n[0];return r.subarray(0,t)},$runesToString=function(e){if(0===e.$length)return"";for(var n="",r=0;r<e.$length;r++)n+=$encodeRune(e.$array[e.$offset+r]);return n},$copyString=function(e,n){for(var r=Math.min(n.length,e.$length),t=0;t<r;t++)e.$array[e.$offset+t]=n.charCodeAt(t);return r},$copySlice=function(e,n){var r=Math.min(n.$length,e.$length);return $copyArray(e.$array,n.$array,e.$offset,n.$offset,r,e.constructor.elem),r},$copyArray=function(e,n,r,t,i,a){if(0!==i&&(e!==n||r!==t))if(n.subarray)e.set(n.subarray(t,t+i),r);else{switch(a.kind){case $kindArray:case $kindStruct:if(e===n&&r>t){for(var o=i-1;o>=0;o--)a.copy(e[r+o],n[t+o]);return}for(o=0;o<i;o++)a.copy(e[r+o],n[t+o]);return}if(e===n&&r>t)for(o=i-1;o>=0;o--)e[r+o]=n[t+o];else for(o=0;o<i;o++)e[r+o]=n[t+o]}},$clone=function(e,n){var r=n.zero();return n.copy(r,e),r},$pointerOfStructConversion=function(e,n){void 0===e.$proxies&&(e.$proxies={},e.$proxies[e.constructor.string]=e);var r=e.$proxies[n.string];if(void 0===r){for(var t={},i=0;i<n.elem.fields.length;i++)!function(n){t[n]={get:function(){return e[n]},set:function(r){e[n]=r}}}(n.elem.fields[i].prop);(r=Object.create(n.prototype,t)).$val=r,e.$proxies[n.string]=r,r.$proxies=e.$proxies}return r},$append=function(e){return $internalAppend(e,arguments,1,arguments.length-1)},$appendSlice=function(e,n){if(n.constructor===String){var r=$stringToBytes(n);return $internalAppend(e,r,0,r.length)}return $internalAppend(e,n.$array,n.$offset,n.$length)},$internalAppend=function(e,n,r,t){if(0===t)return e;var i=e.$array,a=e.$offset,o=e.$length+t,$=e.$capacity;if(o>$)if(a=0,$=Math.max(o,e.$capacity<1024?2*e.$capacity:Math.floor(5*e.$capacity/4)),e.$array.constructor===Array){(i=e.$array.slice(e.$offset,e.$offset+e.$length)).length=$;for(var c=e.constructor.elem.zero,u=e.$length;u<$;u++)i[u]=c()}else(i=new e.$array.constructor($)).set(e.$array.subarray(e.$offset,e.$offset+e.$length));$copyArray(i,n,a+e.$length,r,t,e.constructor.elem);var l=new e.constructor(i);return l.$offset=a,l.$length=o,l.$capacity=$,l},$equal=function(e,n,r){if(r===$jsObjectPtr)return e===n;switch(r.kind){case $kindComplex64:case $kindComplex128:return e.$real===n.$real&&e.$imag===n.$imag;case $kindInt64:case $kindUint64:return e.$high===n.$high&&e.$low===n.$low;case $kindArray:if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(!$equal(e[t],n[t],r.elem))return!1;return!0;case $kindStruct:for(t=0;t<r.fields.length;t++){var i=r.fields[t];if(!$equal(e[i.prop],n[i.prop],i.typ))return!1}return!0;case $kindInterface:return $interfaceIsEqual(e,n);default:return e===n}},$interfaceIsEqual=function(e,n){return e===$ifaceNil||n===$ifaceNil?e===n:e.constructor===n.constructor&&(e.constructor===$jsObjectPtr?e.object===n.object:(e.constructor.comparable||$throwRuntimeError("comparing uncomparable type "+e.constructor.string),$equal(e.$val,n.$val,e.constructor)))},$min=Math.min,$mod=function(e,n){return e%n},$parseInt=parseInt,$parseFloat=function(e){return void 0!==e&&null!==e&&e.constructor===Number?e:parseFloat(e)},$froundBuf=new Float32Array(1),$fround=Math.fround||function(e){return $froundBuf[0]=e,$froundBuf[0]},$imul=Math.imul||function(e,n){var r=65535&e,t=65535&n;return r*t+((e>>>16&65535)*t+r*(n>>>16&65535)<<16>>>0)>>0},$floatKey=function(e){return e!=e?"NaN$"+ ++$idCounter:String(e)},$flatten64=function(e){return 4294967296*e.$high+e.$low},$shiftLeft64=function(e,n){return 0===n?e:n<32?new e.constructor(e.$high<<n|e.$low>>>32-n,e.$low<<n>>>0):n<64?new e.constructor(e.$low<<n-32,0):new e.constructor(0,0)},$shiftRightInt64=function(e,n){return 0===n?e:n<32?new e.constructor(e.$high>>n,(e.$low>>>n|e.$high<<32-n)>>>0):n<64?new e.constructor(e.$high>>31,e.$high>>n-32>>>0):e.$high<0?new e.constructor(-1,4294967295):new e.constructor(0,0)},$shiftRightUint64=function(e,n){return 0===n?e:n<32?new e.constructor(e.$high>>>n,(e.$low>>>n|e.$high<<32-n)>>>0):n<64?new e.constructor(0,e.$high>>>n-32):new e.constructor(0,0)},$mul64=function(e,n){var r=0,t=0;0!=(1&n.$low)&&(r=e.$high,t=e.$low);for(var i=1;i<32;i++)0!=(n.$low&1<<i)&&(r+=e.$high<<i|e.$low>>>32-i,t+=e.$low<<i>>>0);for(i=0;i<32;i++)0!=(n.$high&1<<i)&&(r+=e.$low<<i);return new e.constructor(r,t)},$div64=function(e,n,r){0===n.$high&&0===n.$low&&$throwRuntimeError("integer divide by zero");var t=1,i=1,a=e.$high,o=e.$low;a<0&&(t=-1,i=-1,a=-a,0!==o&&(a--,o=4294967296-o));var $=n.$high,c=n.$low;n.$high<0&&(t*=-1,$=-$,0!==c&&($--,c=4294967296-c));for(var u=0,l=0,s=0;$<2147483648&&(a>$||a===$&&o>c);)$=($<<1|c>>>31)>>>0,c=c<<1>>>0,s++;for(var f=0;f<=s;f++)u=u<<1|l>>>31,l=l<<1>>>0,(a>$||a===$&&o>=c)&&(a-=$,(o-=c)<0&&(a--,o+=4294967296),4294967296===++l&&(u++,l=0)),c=(c>>>1|$<<31)>>>0,$>>>=1;return r?new e.constructor(a*i,o*i):new e.constructor(u*t,l*t)},$divComplex=function(e,n){var r=e.$real===1/0||e.$real===-1/0||e.$imag===1/0||e.$imag===-1/0,t=n.$real===1/0||n.$real===-1/0||n.$imag===1/0||n.$imag===-1/0,i=!r&&(e.$real!=e.$real||e.$imag!=e.$imag),a=!t&&(n.$real!=n.$real||n.$imag!=n.$imag);if(i||a)return new e.constructor(NaN,NaN);if(r&&!t)return new e.constructor(1/0,1/0);if(!r&&t)return new e.constructor(0,0);if(0===n.$real&&0===n.$imag)return 0===e.$real&&0===e.$imag?new e.constructor(NaN,NaN):new e.constructor(1/0,1/0);if(Math.abs(n.$real)<=Math.abs(n.$imag)){var o=n.$real/n.$imag,$=n.$real*o+n.$imag;return new e.constructor((e.$real*o+e.$imag)/$,(e.$imag*o-e.$real)/$)}o=n.$imag/n.$real,$=n.$imag*o+n.$real;return new e.constructor((e.$imag*o+e.$real)/$,(e.$imag-e.$real*o)/$)},$kindBool=1,$kindInt=2,$kindInt8=3,$kindInt16=4,$kindInt32=5,$kindInt64=6,$kindUint=7,$kindUint8=8,$kindUint16=9,$kindUint32=10,$kindUint64=11,$kindUintptr=12,$kindFloat32=13,$kindFloat64=14,$kindComplex64=15,$kindComplex128=16,$kindArray=17,$kindChan=18,$kindFunc=19,$kindInterface=20,$kindMap=21,$kindPtr=22,$kindSlice=23,$kindString=24,$kindStruct=25,$kindUnsafePointer=26,$methodSynthesizers=[],$addMethodSynthesizer=function(e){null!==$methodSynthesizers?$methodSynthesizers.push(e):e()},$synthesizeMethods=function(){$methodSynthesizers.forEach(function(e){e()}),$methodSynthesizers=null},$ifaceKeyFor=function(e){if(e===$ifaceNil)return"nil";var n=e.constructor;return n.string+"$"+n.keyFor(e.$val)},$identity=function(e){return e},$typeIDCounter=0,$idKey=function(e){return void 0===e.$id&&($idCounter++,e.$id=$idCounter),String(e.$id)},$newType=function(e,n,r,t,i,a,o){var $;switch(n){case $kindBool:case $kindInt:case $kindInt8:case $kindInt16:case $kindInt32:case $kindUint:case $kindUint8:case $kindUint16:case $kindUint32:case $kindUintptr:case $kindUnsafePointer:($=function(e){this.$val=e}).wrapped=!0,$.keyFor=$identity;break;case $kindString:($=function(e){this.$val=e}).wrapped=!0,$.keyFor=function(e){return"$"+e};break;case $kindFloat32:case $kindFloat64:($=function(e){this.$val=e}).wrapped=!0,$.keyFor=function(e){return $floatKey(e)};break;case $kindInt64:($=function(e,n){this.$high=e+Math.floor(Math.ceil(n)/4294967296)>>0,this.$low=n>>>0,this.$val=this}).keyFor=function(e){return e.$high+"$"+e.$low};break;case $kindUint64:($=function(e,n){this.$high=e+Math.floor(Math.ceil(n)/4294967296)>>>0,this.$low=n>>>0,this.$val=this}).keyFor=function(e){return e.$high+"$"+e.$low};break;case $kindComplex64:($=function(e,n){this.$real=$fround(e),this.$imag=$fround(n),this.$val=this}).keyFor=function(e){return e.$real+"$"+e.$imag};break;case $kindComplex128:($=function(e,n){this.$real=e,this.$imag=n,this.$val=this}).keyFor=function(e){return e.$real+"$"+e.$imag};break;case $kindArray:($=function(e){this.$val=e}).wrapped=!0,$.ptr=$newType(4,$kindPtr,"*"+r,!1,"",!1,function(e){this.$get=function(){return e},this.$set=function(e){$.copy(this,e)},this.$val=e}),$.init=function(e,n){$.elem=e,$.len=n,$.comparable=e.comparable,$.keyFor=function(n){return Array.prototype.join.call($mapArray(n,function(n){return String(e.keyFor(n)).replace(/\\/g,"\\\\").replace(/\$/g,"\\$")}),"$")},$.copy=function(n,r){$copyArray(n,r,0,0,r.length,e)},$.ptr.init($),Object.defineProperty($.ptr.nil,"nilCheck",{get:$throwNilPointerError})};break;case $kindChan:($=function(e){this.$val=e}).wrapped=!0,$.keyFor=$idKey,$.init=function(e,n,r){$.elem=e,$.sendOnly=n,$.recvOnly=r};break;case $kindFunc:($=function(e){this.$val=e}).wrapped=!0,$.init=function(e,n,r){$.params=e,$.results=n,$.variadic=r,$.comparable=!1};break;case $kindInterface:($={implementedBy:{},missingMethodFor:{}}).keyFor=$ifaceKeyFor,$.init=function(e){$.methods=e,e.forEach(function(e){$ifaceNil[e.prop]=$throwNilPointerError})};break;case $kindMap:($=function(e){this.$val=e}).wrapped=!0,$.init=function(e,n){$.key=e,$.elem=n,$.comparable=!1};break;case $kindPtr:($=o||function(e,n,r){this.$get=e,this.$set=n,this.$target=r,this.$val=this}).keyFor=$idKey,$.init=function(e){$.elem=e,$.wrapped=e.kind===$kindArray,$.nil=new $($throwNilPointerError,$throwNilPointerError)};break;case $kindSlice:($=function(e){e.constructor!==$.nativeArray&&(e=new $.nativeArray(e)),this.$array=e,this.$offset=0,this.$length=e.length,this.$capacity=e.length,this.$val=this}).init=function(e){$.elem=e,$.comparable=!1,$.nativeArray=$nativeArray(e.kind),$.nil=new $([])};break;case $kindStruct:($=function(e){this.$val=e}).wrapped=!0,$.ptr=$newType(4,$kindPtr,"*"+r,!1,i,a,o),$.ptr.elem=$,$.ptr.prototype.$get=function(){return this},$.ptr.prototype.$set=function(e){$.copy(this,e)},$.init=function(e,n){$.pkgPath=e,$.fields=n,n.forEach(function(e){e.typ.comparable||($.comparable=!1)}),$.keyFor=function(e){var r=e.$val;return $mapArray(n,function(e){return String(e.typ.keyFor(r[e.prop])).replace(/\\/g,"\\\\").replace(/\$/g,"\\$")}).join("$")},$.copy=function(e,r){for(var t=0;t<n.length;t++){var i=n[t];switch(i.typ.kind){case $kindArray:case $kindStruct:i.typ.copy(e[i.prop],r[i.prop]);continue;default:e[i.prop]=r[i.prop];continue}}};var r={};n.forEach(function(e){r[e.prop]={get:$throwNilPointerError,set:$throwNilPointerError}}),$.ptr.nil=Object.create(o.prototype,r),$.ptr.nil.$val=$.ptr.nil,$addMethodSynthesizer(function(){var e=function(e,n,r){void 0===e.prototype[n.prop]&&(e.prototype[n.prop]=function(){var e=this.$val[r.prop];return r.typ===$jsObjectPtr&&(e=new $jsObjectPtr(e)),void 0===e.$val&&(e=new r.typ(e)),e[n.prop].apply(e,arguments)})};n.forEach(function(n){n.embedded&&($methodSet(n.typ).forEach(function(r){e($,r,n),e($.ptr,r,n)}),$methodSet($ptrType(n.typ)).forEach(function(r){e($.ptr,r,n)}))})})};break;default:$panic(new $String("invalid kind: "+n))}switch(n){case $kindBool:case $kindMap:$.zero=function(){return!1};break;case $kindInt:case $kindInt8:case $kindInt16:case $kindInt32:case $kindUint:case $kindUint8:case $kindUint16:case $kindUint32:case $kindUintptr:case $kindUnsafePointer:case $kindFloat32:case $kindFloat64:$.zero=function(){return 0};break;case $kindString:$.zero=function(){return""};break;case $kindInt64:case $kindUint64:case $kindComplex64:case $kindComplex128:var c=new $(0,0);$.zero=function(){return c};break;case $kindPtr:case $kindSlice:$.zero=function(){return $.nil};break;case $kindChan:$.zero=function(){return $chanNil};break;case $kindFunc:$.zero=function(){return $throwNilPointerError};break;case $kindInterface:$.zero=function(){return $ifaceNil};break;case $kindArray:$.zero=function(){var e=$nativeArray($.elem.kind);if(e!==Array)return new e($.len);for(var n=new Array($.len),r=0;r<$.len;r++)n[r]=$.elem.zero();return n};break;case $kindStruct:$.zero=function(){return new $.ptr};break;default:$panic(new $String("invalid kind: "+n))}return $.id=$typeIDCounter,$typeIDCounter++,$.size=e,$.kind=n,$.string=r,$.named=t,$.pkg=i,$.exported=a,$.methods=[],$.methodSetCache=null,$.comparable=!0,$},$methodSet=function(e){if(null!==e.methodSetCache)return e.methodSetCache;var n={},r=e.kind===$kindPtr;if(r&&e.elem.kind===$kindInterface)return e.methodSetCache=[],[];for(var t=[{typ:r?e.elem:e,indirect:r}],i={};t.length>0;){var a=[],o=[];t.forEach(function(e){if(!i[e.typ.string])switch(i[e.typ.string]=!0,e.typ.named&&(o=o.concat(e.typ.methods),e.indirect&&(o=o.concat($ptrType(e.typ).methods))),e.typ.kind){case $kindStruct:e.typ.fields.forEach(function(n){if(n.embedded){var r=n.typ,t=r.kind===$kindPtr;a.push({typ:t?r.elem:r,indirect:e.indirect||t})}});break;case $kindInterface:o=o.concat(e.typ.methods)}}),o.forEach(function(e){void 0===n[e.name]&&(n[e.name]=e)}),t=a}return e.methodSetCache=[],Object.keys(n).sort().forEach(function(r){e.methodSetCache.push(n[r])}),e.methodSetCache},$Bool=$newType(1,$kindBool,"bool",!0,"",!1,null),$Int=$newType(4,$kindInt,"int",!0,"",!1,null),$Int8=$newType(1,$kindInt8,"int8",!0,"",!1,null),$Int16=$newType(2,$kindInt16,"int16",!0,"",!1,null),$Int32=$newType(4,$kindInt32,"int32",!0,"",!1,null),$Int64=$newType(8,$kindInt64,"int64",!0,"",!1,null),$Uint=$newType(4,$kindUint,"uint",!0,"",!1,null),$Uint8=$newType(1,$kindUint8,"uint8",!0,"",!1,null),$Uint16=$newType(2,$kindUint16,"uint16",!0,"",!1,null),$Uint32=$newType(4,$kindUint32,"uint32",!0,"",!1,null),$Uint64=$newType(8,$kindUint64,"uint64",!0,"",!1,null),$Uintptr=$newType(4,$kindUintptr,"uintptr",!0,"",!1,null),$Float32=$newType(4,$kindFloat32,"float32",!0,"",!1,null),$Float64=$newType(8,$kindFloat64,"float64",!0,"",!1,null),$Complex64=$newType(8,$kindComplex64,"complex64",!0,"",!1,null),$Complex128=$newType(16,$kindComplex128,"complex128",!0,"",!1,null),$String=$newType(8,$kindString,"string",!0,"",!1,null),$UnsafePointer=$newType(4,$kindUnsafePointer,"unsafe.Pointer",!0,"",!1,null),$nativeArray=function(e){switch(e){case $kindInt:return Int32Array;case $kindInt8:return Int8Array;case $kindInt16:return Int16Array;case $kindInt32:return Int32Array;case $kindUint:return Uint32Array;case $kindUint8:return Uint8Array;case $kindUint16:return Uint16Array;case $kindUint32:case $kindUintptr:return Uint32Array;case $kindFloat32:return Float32Array;case $kindFloat64:return Float64Array;default:return Array}},$toNativeArray=function(e,n){var r=$nativeArray(e);return r===Array?n:new r(n)},$arrayTypes={},$arrayType=function(e,n){var r=e.id+"$"+n,t=$arrayTypes[r];return void 0===t&&(t=$newType(12,$kindArray,"["+n+"]"+e.string,!1,"",!1,null),$arrayTypes[r]=t,t.init(e,n)),t},$chanType=function(e,n,r){var t=(r?"<-":"")+"chan"+(n?"<- ":" ")+e.string,i=n?"SendChan":r?"RecvChan":"Chan",a=e[i];return void 0===a&&(a=$newType(4,$kindChan,t,!1,"",!1,null),e[i]=a,a.init(e,n,r)),a},$Chan=function(e,n){(n<0||n>2147483647)&&$throwRuntimeError("makechan: size out of range"),this.$elem=e,this.$capacity=n,this.$buffer=[],this.$sendQueue=[],this.$recvQueue=[],this.$closed=!1},$chanNil=new $Chan(null,0);$chanNil.$sendQueue=$chanNil.$recvQueue={length:0,push:function(){},shift:function(){},indexOf:function(){return-1}};var $funcTypes={},$funcType=function(e,n,r){var t=$mapArray(e,function(e){return e.id}).join(",")+"$"+$mapArray(n,function(e){return e.id}).join(",")+"$"+r,i=$funcTypes[t];if(void 0===i){var a=$mapArray(e,function(e){return e.string});r&&(a[a.length-1]="..."+a[a.length-1].substr(2));var o="func("+a.join(", ")+")";1===n.length?o+=" "+n[0].string:n.length>1&&(o+=" ("+$mapArray(n,function(e){return e.string}).join(", ")+")"),i=$newType(4,$kindFunc,o,!1,"",!1,null),$funcTypes[t]=i,i.init(e,n,r)}return i},$interfaceTypes={},$interfaceType=function(e){var n=$mapArray(e,function(e){return e.pkg+","+e.name+","+e.typ.id}).join("$"),r=$interfaceTypes[n];if(void 0===r){var t="interface {}";0!==e.length&&(t="interface { "+$mapArray(e,function(e){return(""!==e.pkg?e.pkg+".":"")+e.name+e.typ.string.substr(4)}).join("; ")+" }"),r=$newType(8,$kindInterface,t,!1,"",!1,null),$interfaceTypes[n]=r,r.init(e)}return r},$emptyInterface=$interfaceType([]),$ifaceNil={},$error=$newType(8,$kindInterface,"error",!0,"",!1,null);$error.init([{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],!1)}]);var $panicValue,$jsObjectPtr,$jsErrorPtr,$mapTypes={},$mapType=function(e,n){var r=e.id+"$"+n.id,t=$mapTypes[r];return void 0===t&&(t=$newType(4,$kindMap,"map["+e.string+"]"+n.string,!1,"",!1,null),$mapTypes[r]=t,t.init(e,n)),t},$makeMap=function(e,n){for(var r={},t=0;t<n.length;t++){var i=n[t];r[e(i.k)]=i}return r},$ptrType=function(e){var n=e.ptr;return void 0===n&&(n=$newType(4,$kindPtr,"*"+e.string,!1,"",e.exported,null),e.ptr=n,n.init(e)),n},$newDataPointer=function(e,n){return n.elem.kind===$kindStruct?e:new n(function(){return e},function(n){e=n})},$indexPtr=function(e,n,r){return e.$ptr=e.$ptr||{},e.$ptr[n]||(e.$ptr[n]=new r(function(){return e[n]},function(r){e[n]=r}))},$sliceType=function(e){var n=e.slice;return void 0===n&&(n=$newType(12,$kindSlice,"[]"+e.string,!1,"",!1,null),e.slice=n,n.init(e)),n},$makeSlice=function(e,n,r){r=r||n,(n<0||n>2147483647)&&$throwRuntimeError("makeslice: len out of range"),(r<0||r<n||r>2147483647)&&$throwRuntimeError("makeslice: cap out of range");var t=new e.nativeArray(r);if(e.nativeArray===Array)for(var i=0;i<r;i++)t[i]=e.elem.zero();var a=new e(t);return a.$length=n,a},$structTypes={},$structType=function(e,n){var r=$mapArray(n,function(e){return e.name+","+e.typ.id+","+e.tag}).join("$"),t=$structTypes[r];if(void 0===t){var i="struct { "+$mapArray(n,function(e){return e.name+" "+e.typ.string+(""!==e.tag?' "'+e.tag.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"':"")}).join("; ")+" }";0===n.length&&(i="struct {}"),t=$newType(0,$kindStruct,i,!1,"",!1,function(){this.$val=this;for(var e=0;e<n.length;e++){var r=n[e],t=arguments[e];this[r.prop]=void 0!==t?t:r.typ.zero()}}),$structTypes[r]=t,t.init(e,n)}return t},$assertType=function(e,n,r){var t,i=n.kind===$kindInterface,a="";if(e===$ifaceNil)t=!1;else if(i){var o=e.constructor.string;if(void 0===(t=n.implementedBy[o])){t=!0;for(var $=$methodSet(e.constructor),c=n.methods,u=0;u<c.length;u++){for(var l=c[u],s=!1,f=0;f<$.length;f++){var d=$[f];if(d.name===l.name&&d.pkg===l.pkg&&d.typ===l.typ){s=!0;break}}if(!s){t=!1,n.missingMethodFor[o]=l.name;break}}n.implementedBy[o]=t}t||(a=n.missingMethodFor[o])}else t=e.constructor===n;if(!t){if(r)return[n.zero(),!1];$panic(new $packages.runtime.TypeAssertionError.ptr($packages.runtime._type.ptr.nil,e===$ifaceNil?$packages.runtime._type.ptr.nil:new $packages.runtime._type.ptr(e.constructor.string),new $packages.runtime._type.ptr(n.string),a))}return i||(e=e.$val),n===$jsObjectPtr&&(e=e.object),r?[e,!0]:e},$stackDepthOffset=0,$getStackDepth=function(){var e=new Error;if(void 0!==e.stack)return $stackDepthOffset+e.stack.split("\n").length},$panicStackDepth=null,$callDeferred=function(e,n,r){if(!r&&null!==e&&e.index>=$curGoroutine.deferStack.length)throw n;if(null!==n){var t=null;try{$curGoroutine.deferStack.push(e),$panic(new $jsErrorPtr(n))}catch(e){t=e}return $curGoroutine.deferStack.pop(),void $callDeferred(e,t)}if(!$curGoroutine.asleep){$stackDepthOffset--;var i=$panicStackDepth,a=$panicValue,o=$curGoroutine.panicStack.pop();void 0!==o&&($panicStackDepth=$getStackDepth(),$panicValue=o);try{for(;;){if(null===e&&void 0===(e=$curGoroutine.deferStack[$curGoroutine.deferStack.length-1])){if($panicStackDepth=null,o.Object instanceof Error)throw o.Object;var $;throw $=o.constructor===$String?o.$val:void 0!==o.Error?o.Error():void 0!==o.String?o.String():o,new Error($)}var c=e.pop();if(void 0===c){if($curGoroutine.deferStack.pop(),void 0!==o){e=null;continue}return}var u=c[0].apply(c[2],c[1]);if(u&&void 0!==u.$blk){if(e.push([u.$blk,[],u]),r)throw null;return}if(void 0!==o&&null===$panicStackDepth)throw null}}finally{void 0!==o&&(null!==$panicStackDepth&&$curGoroutine.panicStack.push(o),$panicStackDepth=i,$panicValue=a),$stackDepthOffset++}}},$panic=function(e){$curGoroutine.panicStack.push(e),$callDeferred(null,null,!0)},$recover=function(){return null===$panicStackDepth||void 0!==$panicStackDepth&&$panicStackDepth!==$getStackDepth()-2?$ifaceNil:($panicStackDepth=null,$panicValue)},$throw=function(e){throw e},$noGoroutine={asleep:!1,exit:!1,deferStack:[],panicStack:[]},$curGoroutine=$noGoroutine,$totalGoroutines=0,$awakeGoroutines=0,$checkForDeadlock=!0,$mainFinished=!1,$go=function(e,n){$totalGoroutines++,$awakeGoroutines++;var r=function(){try{$curGoroutine=r;var t=e.apply(void 0,n);if(t&&void 0!==t.$blk)return e=function(){return t.$blk()},void(n=[]);r.exit=!0}catch(e){if(!r.exit)throw e}finally{$curGoroutine=$noGoroutine,r.exit&&($totalGoroutines--,r.asleep=!0),r.asleep&&($awakeGoroutines--,!$mainFinished&&0===$awakeGoroutines&&$checkForDeadlock&&(console.error("fatal error: all goroutines are asleep - deadlock!"),void 0!==$global.process&&$global.process.exit(2)))}};r.asleep=!1,r.exit=!1,r.deferStack=[],r.panicStack=[],$schedule(r)},$scheduled=[],$runScheduled=function(){try{for(var e;void 0!==(e=$scheduled.shift());)e()}finally{$scheduled.length>0&&setTimeout($runScheduled,0)}},$schedule=function(e){e.asleep&&(e.asleep=!1,$awakeGoroutines++),$scheduled.push(e),$curGoroutine===$noGoroutine&&$runScheduled()},$setTimeout=function(e,n){return $awakeGoroutines++,setTimeout(function(){$awakeGoroutines--,e()},n)},$block=function(){$curGoroutine===$noGoroutine&&$throwRuntimeError("cannot block in JavaScript callback, fix by wrapping code in goroutine"),$curGoroutine.asleep=!0},$send=function(e,n){e.$closed&&$throwRuntimeError("send on closed channel");var r=e.$recvQueue.shift();if(void 0===r){if(!(e.$buffer.length<e.$capacity)){var t,i=$curGoroutine;return e.$sendQueue.push(function(e){return t=e,$schedule(i),n}),$block(),{$blk:function(){t&&$throwRuntimeError("send on closed channel")}}}e.$buffer.push(n)}else r([n,!0])},$recv=function(e){var n=e.$sendQueue.shift();void 0!==n&&e.$buffer.push(n(!1));var r=e.$buffer.shift();if(void 0!==r)return[r,!0];if(e.$closed)return[e.$elem.zero(),!1];var t=$curGoroutine,i={$blk:function(){return this.value}};return e.$recvQueue.push(function(e){i.value=e,$schedule(t)}),$block(),i},$close=function(e){for(e.$closed&&$throwRuntimeError("close of closed channel"),e.$closed=!0;;){var n=e.$sendQueue.shift();if(void 0===n)break;n(!0)}for(;;){var r=e.$recvQueue.shift();if(void 0===r)break;r([e.$elem.zero(),!1])}},$select=function(e){for(var n=[],r=-1,t=0;t<e.length;t++){var i,a=(i=e[t])[0];switch(i.length){case 0:r=t;break;case 1:(0!==a.$sendQueue.length||0!==a.$buffer.length||a.$closed)&&n.push(t);break;case 2:a.$closed&&$throwRuntimeError("send on closed channel"),(0!==a.$recvQueue.length||a.$buffer.length<a.$capacity)&&n.push(t)}}if(0!==n.length&&(r=n[Math.floor(Math.random()*n.length)]),-1!==r)switch((i=e[r]).length){case 0:return[r];case 1:return[r,$recv(i[0])];case 2:return $send(i[0],i[1]),[r]}var o=[],$=$curGoroutine,c={$blk:function(){return this.selection}},u=function(){for(var e=0;e<o.length;e++){var n=o[e],r=n[0],t=r.indexOf(n[1]);-1!==t&&r.splice(t,1)}};for(t=0;t<e.length;t++)!function(n){var r=e[n];switch(r.length){case 1:var t=function(e){c.selection=[n,e],u(),$schedule($)};o.push([r[0].$recvQueue,t]),r[0].$recvQueue.push(t);break;case 2:t=function(){return r[0].$closed&&$throwRuntimeError("send on closed channel"),c.selection=[n],u(),$schedule($),r[1]};o.push([r[0].$sendQueue,t]),r[0].$sendQueue.push(t)}}(t);return $block(),c},$needsExternalization=function(e){switch(e.kind){case $kindBool:case $kindInt:case $kindInt8:case $kindInt16:case $kindInt32:case $kindUint:case $kindUint8:case $kindUint16:case $kindUint32:case $kindUintptr:case $kindFloat32:case $kindFloat64:return!1;default:return e!==$jsObjectPtr}},$externalize=function(e,n,r){if(n===$jsObjectPtr)return e;switch(n.kind){case $kindBool:case $kindInt:case $kindInt8:case $kindInt16:case $kindInt32:case $kindUint:case $kindUint8:case $kindUint16:case $kindUint32:case $kindUintptr:case $kindFloat32:case $kindFloat64:return e;case $kindInt64:case $kindUint64:return $flatten64(e);case $kindArray:return $needsExternalization(n.elem)?$mapArray(e,function(e){return $externalize(e,n.elem,r)}):e;case $kindFunc:return $externalizeFunction(e,n,!1,r);case $kindInterface:return e===$ifaceNil?null:e.constructor===$jsObjectPtr?e.$val.object:$externalize(e.$val,e.constructor,r);case $kindMap:for(var t={},i=$keys(e),a=0;a<i.length;a++){var o=e[i[a]];t[$externalize(o.k,n.key,r)]=$externalize(o.v,n.elem,r)}return t;case $kindPtr:return e===n.nil?null:$externalize(e.$get(),n.elem,r);case $kindSlice:return $needsExternalization(n.elem)?$mapArray($sliceToArray(e),function(e){return $externalize(e,n.elem,r)}):$sliceToArray(e);case $kindString:if($isASCII(e))return e;var $,c="";for(a=0;a<e.length;a+=$[1]){var u=($=$decodeRune(e,a))[0];if(u>65535){var l=Math.floor((u-65536)/1024)+55296,s=(u-65536)%1024+56320;c+=String.fromCharCode(l,s)}else c+=String.fromCharCode(u)}return c;case $kindStruct:var f=$packages.time;if(void 0!==f&&e.constructor===f.Time.ptr){var d=$div64(e.UnixNano(),new $Int64(0,1e6));return new Date($flatten64(d))}var p={},h=function(e,n){if(n===$jsObjectPtr)return e;switch(n.kind){case $kindPtr:return e===n.nil?p:h(e.$get(),n.elem);case $kindStruct:var r=n.fields[0];return h(e[r.prop],r.typ);case $kindInterface:return h(e.$val,e.constructor);default:return p}},k=h(e,n);if(k!==p)return k;if(void 0!==r)return r(e);k={};for(a=0;a<n.fields.length;a++){var y=n.fields[a];y.exported&&(k[y.name]=$externalize(e[y.prop],y.typ,r))}return k}$throwRuntimeError("cannot externalize "+n.string)},$externalizeFunction=function(e,n,r,t){return e===$throwNilPointerError?null:(void 0===e.$externalizeWrapper&&($checkForDeadlock=!1,e.$externalizeWrapper=function(){for(var i=[],a=0;a<n.params.length;a++){if(n.variadic&&a===n.params.length-1){for(var o=n.params[a].elem,$=[],c=a;c<arguments.length;c++)$.push($internalize(arguments[c],o,t));i.push(new n.params[a]($));break}i.push($internalize(arguments[a],n.params[a],t))}var u=e.apply(r?this:void 0,i);switch(n.results.length){case 0:return;case 1:return $externalize($copyIfRequired(u,n.results[0]),n.results[0],t);default:for(a=0;a<n.results.length;a++)u[a]=$externalize($copyIfRequired(u[a],n.results[a]),n.results[a],t);return u}}),e.$externalizeWrapper)},$internalize=function(e,n,r,t){if(n===$jsObjectPtr)return e;if(n===$jsObjectPtr.elem&&$throwRuntimeError("cannot internalize js.Object, use *js.Object instead"),e&&void 0!==e.__internal_object__)return $assertType(e.__internal_object__,n,!1);var i=$packages.time;if(void 0!==i&&n===i.Time)return null!==e&&void 0!==e&&e.constructor===Date||$throwRuntimeError("cannot internalize time.Time from "+typeof e+", must be Date"),i.Unix(new $Int64(0,0),new $Int64(0,1e6*e.getTime()));switch(n.kind){case $kindBool:return!!e;case $kindInt:return parseInt(e);case $kindInt8:return parseInt(e)<<24>>24;case $kindInt16:return parseInt(e)<<16>>16;case $kindInt32:return parseInt(e)>>0;case $kindUint:return parseInt(e);case $kindUint8:return parseInt(e)<<24>>>24;case $kindUint16:return parseInt(e)<<16>>>16;case $kindUint32:case $kindUintptr:return parseInt(e)>>>0;case $kindInt64:case $kindUint64:return new n(0,e);case $kindFloat32:case $kindFloat64:return parseFloat(e);case $kindArray:return e.length!==n.len&&$throwRuntimeError("got array with wrong size from JavaScript native"),$mapArray(e,function(e){return $internalize(e,n.elem,t)});case $kindFunc:return function(){for(var i=[],a=0;a<n.params.length;a++){if(n.variadic&&a===n.params.length-1){for(var o=n.params[a].elem,$=arguments[a],c=0;c<$.$length;c++)i.push($externalize($.$array[$.$offset+c],o,t));break}i.push($externalize(arguments[a],n.params[a],t))}var u=e.apply(r,i);switch(n.results.length){case 0:return;case 1:return $internalize(u,n.results[0],t);default:for(a=0;a<n.results.length;a++)u[a]=$internalize(u[a],n.results[a],t);return u}};case $kindInterface:if(0!==n.methods.length&&$throwRuntimeError("cannot internalize "+n.string),null===e)return $ifaceNil;if(void 0===e)return new $jsObjectPtr(void 0);switch(e.constructor){case Int8Array:return new($sliceType($Int8))(e);case Int16Array:return new($sliceType($Int16))(e);case Int32Array:return new($sliceType($Int))(e);case Uint8Array:return new($sliceType($Uint8))(e);case Uint16Array:return new($sliceType($Uint16))(e);case Uint32Array:return new($sliceType($Uint))(e);case Float32Array:return new($sliceType($Float32))(e);case Float64Array:return new($sliceType($Float64))(e);case Array:return $internalize(e,$sliceType($emptyInterface),t);case Boolean:return new $Bool(!!e);case Date:return void 0===i?new $jsObjectPtr(e):new i.Time($internalize(e,i.Time,t));case Function:var a=$funcType([$sliceType($emptyInterface)],[$jsObjectPtr],!0);return new a($internalize(e,a,t));case Number:return new $Float64(parseFloat(e));case String:return new $String($internalize(e,$String,t));default:if($global.Node&&e instanceof $global.Node)return new $jsObjectPtr(e);var o=$mapType($String,$emptyInterface);return new o($internalize(e,o,t))}case $kindMap:for(var $={},c=$keys(e),u=0;u<c.length;u++){var l=$internalize(c[u],n.key,t);$[n.key.keyFor(l)]={k:l,v:$internalize(e[c[u]],n.elem,t)}}return $;case $kindPtr:if(n.elem.kind===$kindStruct)return $internalize(e,n.elem,t);case $kindSlice:return new n($mapArray(e,function(e){return $internalize(e,n.elem,t)}));case $kindString:if(e=String(e),$isASCII(e))return e;var s="";for(u=0;u<e.length;){var f=e.charCodeAt(u);if(55296<=f&&f<=56319){var d=e.charCodeAt(u+1);s+=$encodeRune(1024*(f-55296)+d-56320+65536),u+=2}else s+=$encodeRune(f),u++}return s;case $kindStruct:var p={},h=function(n){if(n===$jsObjectPtr)return e;switch(n===$jsObjectPtr.elem&&$throwRuntimeError("cannot internalize js.Object, use *js.Object instead"),n.kind){case $kindPtr:return h(n.elem);case $kindStruct:var r=n.fields[0],t=h(r.typ);if(t!==p){var i=new n.ptr;return i[r.prop]=t,i}return p;default:return p}},k=h(n);if(k!==p)return k}$throwRuntimeError("cannot internalize "+n.string)},$isASCII=function(e){for(var n=0;n<e.length;n++)if(e.charCodeAt(n)>=128)return!1;return!0},$copyIfRequired=function(e,n){if(void 0==e)return e;if(e.constructor.copy)return new e.constructor($clone(e.$val,e.constructor));if(n.copy){var r=n.zero();return n.copy(r,e),r}return e};

$packages["github.com/gopherjs/gopherjs/js"]=(function(){var $pkg={},$init,Object,Error,sliceType,ptrType,ptrType$1,MakeFunc,init;	Object = $pkg.Object = $newType(0, $kindStruct, "js.Object", true, "github.com/gopherjs/gopherjs/js", true, function(object_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.object = null;
			return;
		}
		this.object = object_;
	});
	Error = $pkg.Error = $newType(0, $kindStruct, "js.Error", true, "github.com/gopherjs/gopherjs/js", true, function(Object_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Object = null;
			return;
		}
		this.Object = Object_;
	});
	sliceType = $sliceType($emptyInterface);
	ptrType = $ptrType(Object);
	ptrType$1 = $ptrType(Error);
	Object.ptr.prototype.Get = function(key) {
		var key, o;
		o = this;
		return o.object[$externalize(key, $String)];
	};
	Object.prototype.Get = function(key) { return this.$val.Get(key); };
	Object.ptr.prototype.Set = function(key, value) {
		var key, o, value;
		o = this;
		o.object[$externalize(key, $String)] = $externalize(value, $emptyInterface);
	};
	Object.prototype.Set = function(key, value) { return this.$val.Set(key, value); };
	Object.ptr.prototype.Delete = function(key) {
		var key, o;
		o = this;
		delete o.object[$externalize(key, $String)];
	};
	Object.prototype.Delete = function(key) { return this.$val.Delete(key); };
	Object.ptr.prototype.Length = function() {
		var o;
		o = this;
		return $parseInt(o.object.length);
	};
	Object.prototype.Length = function() { return this.$val.Length(); };
	Object.ptr.prototype.Index = function(i) {
		var i, o;
		o = this;
		return o.object[i];
	};
	Object.prototype.Index = function(i) { return this.$val.Index(i); };
	Object.ptr.prototype.SetIndex = function(i, value) {
		var i, o, value;
		o = this;
		o.object[i] = $externalize(value, $emptyInterface);
	};
	Object.prototype.SetIndex = function(i, value) { return this.$val.SetIndex(i, value); };
	Object.ptr.prototype.Call = function(name, args) {
		var args, name, o, obj;
		o = this;
		return (obj = o.object, obj[$externalize(name, $String)].apply(obj, $externalize(args, sliceType)));
	};
	Object.prototype.Call = function(name, args) { return this.$val.Call(name, args); };
	Object.ptr.prototype.Invoke = function(args) {
		var args, o;
		o = this;
		return o.object.apply(undefined, $externalize(args, sliceType));
	};
	Object.prototype.Invoke = function(args) { return this.$val.Invoke(args); };
	Object.ptr.prototype.New = function(args) {
		var args, o;
		o = this;
		return new ($global.Function.prototype.bind.apply(o.object, [undefined].concat($externalize(args, sliceType))));
	};
	Object.prototype.New = function(args) { return this.$val.New(args); };
	Object.ptr.prototype.Bool = function() {
		var o;
		o = this;
		return !!(o.object);
	};
	Object.prototype.Bool = function() { return this.$val.Bool(); };
	Object.ptr.prototype.String = function() {
		var o;
		o = this;
		return $internalize(o.object, $String);
	};
	Object.prototype.String = function() { return this.$val.String(); };
	Object.ptr.prototype.Int = function() {
		var o;
		o = this;
		return $parseInt(o.object) >> 0;
	};
	Object.prototype.Int = function() { return this.$val.Int(); };
	Object.ptr.prototype.Int64 = function() {
		var o;
		o = this;
		return $internalize(o.object, $Int64);
	};
	Object.prototype.Int64 = function() { return this.$val.Int64(); };
	Object.ptr.prototype.Uint64 = function() {
		var o;
		o = this;
		return $internalize(o.object, $Uint64);
	};
	Object.prototype.Uint64 = function() { return this.$val.Uint64(); };
	Object.ptr.prototype.Float = function() {
		var o;
		o = this;
		return $parseFloat(o.object);
	};
	Object.prototype.Float = function() { return this.$val.Float(); };
	Object.ptr.prototype.Interface = function() {
		var o;
		o = this;
		return $internalize(o.object, $emptyInterface);
	};
	Object.prototype.Interface = function() { return this.$val.Interface(); };
	Object.ptr.prototype.Unsafe = function() {
		var o;
		o = this;
		return o.object;
	};
	Object.prototype.Unsafe = function() { return this.$val.Unsafe(); };
	Error.ptr.prototype.Error = function() {
		var err;
		err = this;
		return "JavaScript error: " + $internalize(err.Object.message, $String);
	};
	Error.prototype.Error = function() { return this.$val.Error(); };
	Error.ptr.prototype.Stack = function() {
		var err;
		err = this;
		return $internalize(err.Object.stack, $String);
	};
	Error.prototype.Stack = function() { return this.$val.Stack(); };
	MakeFunc = function(fn) {
		var fn;
		return $makeFunc(fn);
	};
	$pkg.MakeFunc = MakeFunc;
	init = function() {
		var e;
		e = new Error.ptr(null);
		$unused(e);
	};
	ptrType.methods = [{prop: "Get", name: "Get", pkg: "", typ: $funcType([$String], [ptrType], false)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([$String, $emptyInterface], [], false)}, {prop: "Delete", name: "Delete", pkg: "", typ: $funcType([$String], [], false)}, {prop: "Length", name: "Length", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Index", name: "Index", pkg: "", typ: $funcType([$Int], [ptrType], false)}, {prop: "SetIndex", name: "SetIndex", pkg: "", typ: $funcType([$Int, $emptyInterface], [], false)}, {prop: "Call", name: "Call", pkg: "", typ: $funcType([$String, sliceType], [ptrType], true)}, {prop: "Invoke", name: "Invoke", pkg: "", typ: $funcType([sliceType], [ptrType], true)}, {prop: "New", name: "New", pkg: "", typ: $funcType([sliceType], [ptrType], true)}, {prop: "Bool", name: "Bool", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Int", name: "Int", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Int64", name: "Int64", pkg: "", typ: $funcType([], [$Int64], false)}, {prop: "Uint64", name: "Uint64", pkg: "", typ: $funcType([], [$Uint64], false)}, {prop: "Float", name: "Float", pkg: "", typ: $funcType([], [$Float64], false)}, {prop: "Interface", name: "Interface", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Unsafe", name: "Unsafe", pkg: "", typ: $funcType([], [$Uintptr], false)}];
	ptrType$1.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Stack", name: "Stack", pkg: "", typ: $funcType([], [$String], false)}];
	Object.init("github.com/gopherjs/gopherjs/js", [{prop: "object", name: "object", embedded: false, exported: false, typ: ptrType, tag: ""}]);
	Error.init("", [{prop: "Object", name: "Object", embedded: true, exported: true, typ: ptrType, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		init();
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["internal/cpu"]=(function(){var $pkg={},$init;$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["internal/bytealg"]=(function(){var $pkg={},$init,cpu,IndexByteString;	cpu = $packages["internal/cpu"];
	IndexByteString = function(s, c) {
		var c, i, s;
		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
			if (s.charCodeAt(i) === c) {
				return i;
			}
			i = i + (1) >> 0;
		}
		return -1;
	};
	$pkg.IndexByteString = IndexByteString;
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = cpu.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["runtime/internal/sys"]=(function(){var $pkg={},$init;$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["runtime"]=(function(){var $pkg={},$init,js,bytealg,sys,_type,Error,TypeAssertionError,errorString,ptrType,ptrType$4,init,GOROOT,Goexit,throw$1;	js = $packages["github.com/gopherjs/gopherjs/js"];
	bytealg = $packages["internal/bytealg"];
	sys = $packages["runtime/internal/sys"];
	_type = $pkg._type = $newType(0, $kindStruct, "runtime._type", true, "runtime", false, function(str_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.str = "";
			return;
		}
		this.str = str_;
	});
	Error = $pkg.Error = $newType(8, $kindInterface, "runtime.Error", true, "runtime", true, null);
	TypeAssertionError = $pkg.TypeAssertionError = $newType(0, $kindStruct, "runtime.TypeAssertionError", true, "runtime", true, function(_interface_, concrete_, asserted_, missingMethod_) {
		this.$val = this;
		if (arguments.length === 0) {
			this._interface = ptrType.nil;
			this.concrete = ptrType.nil;
			this.asserted = ptrType.nil;
			this.missingMethod = "";
			return;
		}
		this._interface = _interface_;
		this.concrete = concrete_;
		this.asserted = asserted_;
		this.missingMethod = missingMethod_;
	});
	errorString = $pkg.errorString = $newType(8, $kindString, "runtime.errorString", true, "runtime", false, null);
	ptrType = $ptrType(_type);
	ptrType$4 = $ptrType(TypeAssertionError);
	_type.ptr.prototype.string = function() {
		var t;
		t = this;
		return t.str;
	};
	_type.prototype.string = function() { return this.$val.string(); };
	_type.ptr.prototype.pkgpath = function() {
		var t;
		t = this;
		return "";
	};
	_type.prototype.pkgpath = function() { return this.$val.pkgpath(); };
	init = function() {
		var e, jsPkg;
		jsPkg = $packages[$externalize("github.com/gopherjs/gopherjs/js", $String)];
		$jsObjectPtr = jsPkg.Object.ptr;
		$jsErrorPtr = jsPkg.Error.ptr;
		$throwRuntimeError = throw$1;
		e = $ifaceNil;
		e = new TypeAssertionError.ptr(ptrType.nil, ptrType.nil, ptrType.nil, "");
		$unused(e);
	};
	GOROOT = function() {
		var goroot, process;
		process = $global.process;
		if (process === undefined) {
			return "/";
		}
		goroot = process.env.GOROOT;
		if (!(goroot === undefined)) {
			return $internalize(goroot, $String);
		}
		return "/usr/local/go";
	};
	$pkg.GOROOT = GOROOT;
	Goexit = function() {
		$curGoroutine.exit = $externalize(true, $Bool);
		$throw(null);
	};
	$pkg.Goexit = Goexit;
	throw$1 = function(s) {
		var s;
		$panic(new errorString((s)));
	};
	TypeAssertionError.ptr.prototype.RuntimeError = function() {
	};
	TypeAssertionError.prototype.RuntimeError = function() { return this.$val.RuntimeError(); };
	TypeAssertionError.ptr.prototype.Error = function() {
		var as, cs, e, inter, msg;
		e = this;
		inter = "interface";
		if (!(e._interface === ptrType.nil)) {
			inter = e._interface.string();
		}
		as = e.asserted.string();
		if (e.concrete === ptrType.nil) {
			return "interface conversion: " + inter + " is nil, not " + as;
		}
		cs = e.concrete.string();
		if (e.missingMethod === "") {
			msg = "interface conversion: " + inter + " is " + cs + ", not " + as;
			if (cs === as) {
				if (!(e.concrete.pkgpath() === e.asserted.pkgpath())) {
					msg = msg + (" (types from different packages)");
				} else {
					msg = msg + (" (types from different scopes)");
				}
			}
			return msg;
		}
		return "interface conversion: " + cs + " is not " + as + ": missing method " + e.missingMethod;
	};
	TypeAssertionError.prototype.Error = function() { return this.$val.Error(); };
	errorString.prototype.RuntimeError = function() {
		var e;
		e = this.$val;
	};
	$ptrType(errorString).prototype.RuntimeError = function() { return new errorString(this.$get()).RuntimeError(); };
	errorString.prototype.Error = function() {
		var e;
		e = this.$val;
		return "runtime error: " + (e);
	};
	$ptrType(errorString).prototype.Error = function() { return new errorString(this.$get()).Error(); };
	ptrType.methods = [{prop: "string", name: "string", pkg: "runtime", typ: $funcType([], [$String], false)}, {prop: "pkgpath", name: "pkgpath", pkg: "runtime", typ: $funcType([], [$String], false)}];
	ptrType$4.methods = [{prop: "RuntimeError", name: "RuntimeError", pkg: "", typ: $funcType([], [], false)}, {prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
	errorString.methods = [{prop: "RuntimeError", name: "RuntimeError", pkg: "", typ: $funcType([], [], false)}, {prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
	_type.init("runtime", [{prop: "str", name: "str", embedded: false, exported: false, typ: $String, tag: ""}]);
	Error.init([{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "RuntimeError", name: "RuntimeError", pkg: "", typ: $funcType([], [], false)}]);
	TypeAssertionError.init("runtime", [{prop: "_interface", name: "_interface", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "concrete", name: "concrete", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "asserted", name: "asserted", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "missingMethod", name: "missingMethod", embedded: false, exported: false, typ: $String, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = js.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = bytealg.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = sys.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		init();
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["errors"]=(function(){var $pkg={},$init,errorString,ptrType,New;	errorString = $pkg.errorString = $newType(0, $kindStruct, "errors.errorString", true, "errors", false, function(s_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.s = "";
			return;
		}
		this.s = s_;
	});
	ptrType = $ptrType(errorString);
	New = function(text) {
		var text;
		return new errorString.ptr(text);
	};
	$pkg.New = New;
	errorString.ptr.prototype.Error = function() {
		var e;
		e = this;
		return e.s;
	};
	errorString.prototype.Error = function() { return this.$val.Error(); };
	ptrType.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
	errorString.init("errors", [{prop: "s", name: "s", embedded: false, exported: false, typ: $String, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["internal/race"]=(function(){var $pkg={},$init,Acquire,Release,ReleaseMerge,Disable,Enable;	Acquire = function(addr) {
		var addr;
	};
	$pkg.Acquire = Acquire;
	Release = function(addr) {
		var addr;
	};
	$pkg.Release = Release;
	ReleaseMerge = function(addr) {
		var addr;
	};
	$pkg.ReleaseMerge = ReleaseMerge;
	Disable = function() {
	};
	$pkg.Disable = Disable;
	Enable = function() {
	};
	$pkg.Enable = Enable;
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["sync/atomic"]=(function(){var $pkg={},$init,js,Value,ptrType,CompareAndSwapInt32,CompareAndSwapPointer,AddInt32,LoadPointer,StorePointer;	js = $packages["github.com/gopherjs/gopherjs/js"];
	Value = $pkg.Value = $newType(0, $kindStruct, "atomic.Value", true, "sync/atomic", true, function(v_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.v = $ifaceNil;
			return;
		}
		this.v = v_;
	});
	ptrType = $ptrType(Value);
	CompareAndSwapInt32 = function(addr, old, new$1) {
		var addr, new$1, old;
		if (addr.$get() === old) {
			addr.$set(new$1);
			return true;
		}
		return false;
	};
	$pkg.CompareAndSwapInt32 = CompareAndSwapInt32;
	CompareAndSwapPointer = function(addr, old, new$1) {
		var addr, new$1, old;
		if (addr.$get() === old) {
			addr.$set(new$1);
			return true;
		}
		return false;
	};
	$pkg.CompareAndSwapPointer = CompareAndSwapPointer;
	AddInt32 = function(addr, delta) {
		var addr, delta, new$1;
		new$1 = addr.$get() + delta >> 0;
		addr.$set(new$1);
		return new$1;
	};
	$pkg.AddInt32 = AddInt32;
	LoadPointer = function(addr) {
		var addr;
		return addr.$get();
	};
	$pkg.LoadPointer = LoadPointer;
	StorePointer = function(addr, val) {
		var addr, val;
		addr.$set(val);
	};
	$pkg.StorePointer = StorePointer;
	Value.ptr.prototype.Load = function() {
		var v, x;
		x = $ifaceNil;
		v = this;
		x = v.v;
		return x;
	};
	Value.prototype.Load = function() { return this.$val.Load(); };
	Value.ptr.prototype.Store = function(x) {
		var v, x;
		v = this;
		if ($interfaceIsEqual(x, $ifaceNil)) {
			$panic(new $String("sync/atomic: store of nil value into Value"));
		}
		if (!($interfaceIsEqual(v.v, $ifaceNil)) && !(x.constructor === v.v.constructor)) {
			$panic(new $String("sync/atomic: store of inconsistently typed value into Value"));
		}
		v.v = x;
	};
	Value.prototype.Store = function(x) { return this.$val.Store(x); };
	ptrType.methods = [{prop: "Load", name: "Load", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Store", name: "Store", pkg: "", typ: $funcType([$emptyInterface], [], false)}];
	Value.init("sync/atomic", [{prop: "v", name: "v", embedded: false, exported: false, typ: $emptyInterface, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = js.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["sync"]=(function(){var $pkg={},$init,js,race,runtime,atomic,Pool,WaitGroup,Map,readOnly,entry,Mutex,Locker,poolLocalInternal,poolLocal,notifyList,RWMutex,rlocker,ptrType,sliceType,ptrType$1,chanType,sliceType$1,structType,ptrType$3,ptrType$4,ptrType$5,ptrType$6,ptrType$7,sliceType$4,ptrType$8,ptrType$9,ptrType$10,funcType,arrayType$1,ptrType$12,chanType$1,funcType$1,ptrType$15,mapType,ptrType$16,arrayType$2,semWaiters,semAwoken,expunged,allPools,runtime_registerPoolCleanup,runtime_SemacquireMutex,runtime_Semrelease,runtime_notifyListCheck,runtime_canSpin,runtime_nanotime,throw$1,newEntry,poolCleanup,init,indexLocal,init$1,runtime_doSpin;	js = $packages["github.com/gopherjs/gopherjs/js"];
	race = $packages["internal/race"];
	runtime = $packages["runtime"];
	atomic = $packages["sync/atomic"];
	Pool = $pkg.Pool = $newType(0, $kindStruct, "sync.Pool", true, "sync", true, function(local_, localSize_, store_, New_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.local = 0;
			this.localSize = 0;
			this.store = sliceType$4.nil;
			this.New = $throwNilPointerError;
			return;
		}
		this.local = local_;
		this.localSize = localSize_;
		this.store = store_;
		this.New = New_;
	});
	WaitGroup = $pkg.WaitGroup = $newType(0, $kindStruct, "sync.WaitGroup", true, "sync", true, function(counter_, ch_, state1_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.counter = 0;
			this.ch = $chanNil;
			this.state1 = arrayType$1.zero();
			return;
		}
		this.counter = counter_;
		this.ch = ch_;
		this.state1 = state1_;
	});
	Map = $pkg.Map = $newType(0, $kindStruct, "sync.Map", true, "sync", true, function(mu_, read_, dirty_, misses_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.mu = new Mutex.ptr(0, 0);
			this.read = new atomic.Value.ptr($ifaceNil);
			this.dirty = false;
			this.misses = 0;
			return;
		}
		this.mu = mu_;
		this.read = read_;
		this.dirty = dirty_;
		this.misses = misses_;
	});
	readOnly = $pkg.readOnly = $newType(0, $kindStruct, "sync.readOnly", true, "sync", false, function(m_, amended_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.m = false;
			this.amended = false;
			return;
		}
		this.m = m_;
		this.amended = amended_;
	});
	entry = $pkg.entry = $newType(0, $kindStruct, "sync.entry", true, "sync", false, function(p_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.p = 0;
			return;
		}
		this.p = p_;
	});
	Mutex = $pkg.Mutex = $newType(0, $kindStruct, "sync.Mutex", true, "sync", true, function(state_, sema_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.state = 0;
			this.sema = 0;
			return;
		}
		this.state = state_;
		this.sema = sema_;
	});
	Locker = $pkg.Locker = $newType(8, $kindInterface, "sync.Locker", true, "sync", true, null);
	poolLocalInternal = $pkg.poolLocalInternal = $newType(0, $kindStruct, "sync.poolLocalInternal", true, "sync", false, function(private$0_, shared_, Mutex_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.private$0 = $ifaceNil;
			this.shared = sliceType$4.nil;
			this.Mutex = new Mutex.ptr(0, 0);
			return;
		}
		this.private$0 = private$0_;
		this.shared = shared_;
		this.Mutex = Mutex_;
	});
	poolLocal = $pkg.poolLocal = $newType(0, $kindStruct, "sync.poolLocal", true, "sync", false, function(poolLocalInternal_, pad_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.poolLocalInternal = new poolLocalInternal.ptr($ifaceNil, sliceType$4.nil, new Mutex.ptr(0, 0));
			this.pad = arrayType$2.zero();
			return;
		}
		this.poolLocalInternal = poolLocalInternal_;
		this.pad = pad_;
	});
	notifyList = $pkg.notifyList = $newType(0, $kindStruct, "sync.notifyList", true, "sync", false, function(wait_, notify_, lock_, head_, tail_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.wait = 0;
			this.notify = 0;
			this.lock = 0;
			this.head = 0;
			this.tail = 0;
			return;
		}
		this.wait = wait_;
		this.notify = notify_;
		this.lock = lock_;
		this.head = head_;
		this.tail = tail_;
	});
	RWMutex = $pkg.RWMutex = $newType(0, $kindStruct, "sync.RWMutex", true, "sync", true, function(w_, writerSem_, readerSem_, readerCount_, readerWait_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.w = new Mutex.ptr(0, 0);
			this.writerSem = 0;
			this.readerSem = 0;
			this.readerCount = 0;
			this.readerWait = 0;
			return;
		}
		this.w = w_;
		this.writerSem = writerSem_;
		this.readerSem = readerSem_;
		this.readerCount = readerCount_;
		this.readerWait = readerWait_;
	});
	rlocker = $pkg.rlocker = $newType(0, $kindStruct, "sync.rlocker", true, "sync", false, function(w_, writerSem_, readerSem_, readerCount_, readerWait_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.w = new Mutex.ptr(0, 0);
			this.writerSem = 0;
			this.readerSem = 0;
			this.readerCount = 0;
			this.readerWait = 0;
			return;
		}
		this.w = w_;
		this.writerSem = writerSem_;
		this.readerSem = readerSem_;
		this.readerCount = readerCount_;
		this.readerWait = readerWait_;
	});
	ptrType = $ptrType(Pool);
	sliceType = $sliceType(ptrType);
	ptrType$1 = $ptrType($Uint32);
	chanType = $chanType($Bool, false, false);
	sliceType$1 = $sliceType(chanType);
	structType = $structType("", []);
	ptrType$3 = $ptrType($emptyInterface);
	ptrType$4 = $ptrType(entry);
	ptrType$5 = $ptrType($UnsafePointer);
	ptrType$6 = $ptrType($Int32);
	ptrType$7 = $ptrType(poolLocal);
	sliceType$4 = $sliceType($emptyInterface);
	ptrType$8 = $ptrType(rlocker);
	ptrType$9 = $ptrType(RWMutex);
	ptrType$10 = $ptrType($Uint64);
	funcType = $funcType([], [$emptyInterface], false);
	arrayType$1 = $arrayType($Uint32, 3);
	ptrType$12 = $ptrType(WaitGroup);
	chanType$1 = $chanType(structType, false, false);
	funcType$1 = $funcType([$emptyInterface, $emptyInterface], [$Bool], false);
	ptrType$15 = $ptrType(Map);
	mapType = $mapType($emptyInterface, ptrType$4);
	ptrType$16 = $ptrType(Mutex);
	arrayType$2 = $arrayType($Uint8, 100);
	Pool.ptr.prototype.Get = function() {
		var _r, p, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; p = $f.p; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
		/* */ if (p.store.$length === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (p.store.$length === 0) { */ case 1:
			/* */ if (!(p.New === $throwNilPointerError)) { $s = 3; continue; }
			/* */ $s = 4; continue;
			/* if (!(p.New === $throwNilPointerError)) { */ case 3:
				_r = p.New(); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$s = -1; return _r;
			/* } */ case 4:
			$s = -1; return $ifaceNil;
		/* } */ case 2:
		x$2 = (x = p.store, x$1 = p.store.$length - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
		p.store = $subslice(p.store, 0, (p.store.$length - 1 >> 0));
		$s = -1; return x$2;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Pool.ptr.prototype.Get }; } $f._r = _r; $f.p = p; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Pool.prototype.Get = function() { return this.$val.Get(); };
	Pool.ptr.prototype.Put = function(x) {
		var p, x;
		p = this;
		if ($interfaceIsEqual(x, $ifaceNil)) {
			return;
		}
		p.store = $append(p.store, x);
	};
	Pool.prototype.Put = function(x) { return this.$val.Put(x); };
	runtime_registerPoolCleanup = function(cleanup) {
		var cleanup;
	};
	runtime_SemacquireMutex = function(s, lifo) {
		var _entry, _entry$1, _entry$2, _entry$3, _entry$4, _key, _key$1, _key$2, _r, ch, lifo, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _entry$2 = $f._entry$2; _entry$3 = $f._entry$3; _entry$4 = $f._entry$4; _key = $f._key; _key$1 = $f._key$1; _key$2 = $f._key$2; _r = $f._r; ch = $f.ch; lifo = $f.lifo; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		/* */ if (((s.$get() - (_entry = semAwoken[ptrType$1.keyFor(s)], _entry !== undefined ? _entry.v : 0) >>> 0)) === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (((s.$get() - (_entry = semAwoken[ptrType$1.keyFor(s)], _entry !== undefined ? _entry.v : 0) >>> 0)) === 0) { */ case 1:
			ch = new $Chan($Bool, 0);
			if (lifo) {
				_key = s; (semWaiters || $throwRuntimeError("assignment to entry in nil map"))[ptrType$1.keyFor(_key)] = { k: _key, v: $appendSlice(new sliceType$1([ch]), (_entry$1 = semWaiters[ptrType$1.keyFor(s)], _entry$1 !== undefined ? _entry$1.v : sliceType$1.nil)) };
			} else {
				_key$1 = s; (semWaiters || $throwRuntimeError("assignment to entry in nil map"))[ptrType$1.keyFor(_key$1)] = { k: _key$1, v: $append((_entry$2 = semWaiters[ptrType$1.keyFor(s)], _entry$2 !== undefined ? _entry$2.v : sliceType$1.nil), ch) };
			}
			_r = $recv(ch); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r[0];
			_key$2 = s; (semAwoken || $throwRuntimeError("assignment to entry in nil map"))[ptrType$1.keyFor(_key$2)] = { k: _key$2, v: (_entry$3 = semAwoken[ptrType$1.keyFor(s)], _entry$3 !== undefined ? _entry$3.v : 0) - (1) >>> 0 };
			if ((_entry$4 = semAwoken[ptrType$1.keyFor(s)], _entry$4 !== undefined ? _entry$4.v : 0) === 0) {
				delete semAwoken[ptrType$1.keyFor(s)];
			}
		/* } */ case 2:
		s.$set(s.$get() - (1) >>> 0);
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: runtime_SemacquireMutex }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._entry$2 = _entry$2; $f._entry$3 = _entry$3; $f._entry$4 = _entry$4; $f._key = _key; $f._key$1 = _key$1; $f._key$2 = _key$2; $f._r = _r; $f.ch = ch; $f.lifo = lifo; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	runtime_Semrelease = function(s, handoff) {
		var _entry, _entry$1, _key, _key$1, ch, handoff, s, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _key = $f._key; _key$1 = $f._key$1; ch = $f.ch; handoff = $f.handoff; s = $f.s; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s.$set(s.$get() + (1) >>> 0);
		w = (_entry = semWaiters[ptrType$1.keyFor(s)], _entry !== undefined ? _entry.v : sliceType$1.nil);
		if (w.$length === 0) {
			$s = -1; return;
		}
		ch = (0 >= w.$length ? ($throwRuntimeError("index out of range"), undefined) : w.$array[w.$offset + 0]);
		w = $subslice(w, 1);
		_key = s; (semWaiters || $throwRuntimeError("assignment to entry in nil map"))[ptrType$1.keyFor(_key)] = { k: _key, v: w };
		if (w.$length === 0) {
			delete semWaiters[ptrType$1.keyFor(s)];
		}
		_key$1 = s; (semAwoken || $throwRuntimeError("assignment to entry in nil map"))[ptrType$1.keyFor(_key$1)] = { k: _key$1, v: (_entry$1 = semAwoken[ptrType$1.keyFor(s)], _entry$1 !== undefined ? _entry$1.v : 0) + (1) >>> 0 };
		$r = $send(ch, true); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: runtime_Semrelease }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._key = _key; $f._key$1 = _key$1; $f.ch = ch; $f.handoff = handoff; $f.s = s; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	runtime_notifyListCheck = function(size) {
		var size;
	};
	runtime_canSpin = function(i) {
		var i;
		return false;
	};
	runtime_nanotime = function() {
		return $mul64($internalize(new ($global.Date)().getTime(), $Int64), new $Int64(0, 1000000));
	};
	throw$1 = function(s) {
		var s;
		$throwRuntimeError($externalize(s, $String));
	};
	WaitGroup.ptr.prototype.Add = function(delta) {
		var delta, wg;
		wg = this;
		wg.counter = wg.counter + (delta) >> 0;
		if (wg.counter < 0) {
			$panic(new $String("sync: negative WaitGroup counter"));
		}
		if (wg.counter > 0 && wg.ch === $chanNil) {
			wg.ch = new $Chan(structType, 0);
		}
		if ((wg.counter === 0) && !(wg.ch === $chanNil)) {
			$close(wg.ch);
			wg.ch = $chanNil;
		}
	};
	WaitGroup.prototype.Add = function(delta) { return this.$val.Add(delta); };
	WaitGroup.ptr.prototype.Wait = function() {
		var _r, wg, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; wg = $f.wg; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		wg = this;
		/* */ if (wg.counter > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (wg.counter > 0) { */ case 1:
			_r = $recv(wg.ch); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r[0];
		/* } */ case 2:
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: WaitGroup.ptr.prototype.Wait }; } $f._r = _r; $f.wg = wg; $f.$s = $s; $f.$r = $r; return $f;
	};
	WaitGroup.prototype.Wait = function() { return this.$val.Wait(); };
	newEntry = function(i) {
		var i, i$24ptr;
		return new entry.ptr(((i$24ptr || (i$24ptr = new ptrType$3(function() { return i; }, function($v) { i = $v; })))));
	};
	Map.ptr.prototype.Load = function(key) {
		var _entry, _entry$1, _entry$2, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, e, key, m, ok, read, value, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _entry$2 = $f._entry$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; e = $f.e; key = $f.key; m = $f.m; ok = $f.ok; read = $f.read; value = $f.value; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		value = $ifaceNil;
		ok = false;
		m = this;
		_tuple = $assertType(m.read.Load(), readOnly, true);
		read = $clone(_tuple[0], readOnly);
		_tuple$1 = (_entry = read.m[$emptyInterface.keyFor(key)], _entry !== undefined ? [_entry.v, true] : [ptrType$4.nil, false]);
		e = _tuple$1[0];
		ok = _tuple$1[1];
		/* */ if (!ok && read.amended) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!ok && read.amended) { */ case 1:
			$r = m.mu.Lock(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			_tuple$2 = $assertType(m.read.Load(), readOnly, true);
			readOnly.copy(read, _tuple$2[0]);
			_tuple$3 = (_entry$1 = read.m[$emptyInterface.keyFor(key)], _entry$1 !== undefined ? [_entry$1.v, true] : [ptrType$4.nil, false]);
			e = _tuple$3[0];
			ok = _tuple$3[1];
			if (!ok && read.amended) {
				_tuple$4 = (_entry$2 = m.dirty[$emptyInterface.keyFor(key)], _entry$2 !== undefined ? [_entry$2.v, true] : [ptrType$4.nil, false]);
				e = _tuple$4[0];
				ok = _tuple$4[1];
				m.missLocked();
			}
			$r = m.mu.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* } */ case 2:
		if (!ok) {
			_tmp = $ifaceNil;
			_tmp$1 = false;
			value = _tmp;
			ok = _tmp$1;
			$s = -1; return [value, ok];
		}
		_tuple$5 = e.load();
		value = _tuple$5[0];
		ok = _tuple$5[1];
		$s = -1; return [value, ok];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Map.ptr.prototype.Load }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._entry$2 = _entry$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f.e = e; $f.key = key; $f.m = m; $f.ok = ok; $f.read = read; $f.value = value; $f.$s = $s; $f.$r = $r; return $f;
	};
	Map.prototype.Load = function(key) { return this.$val.Load(key); };
	entry.ptr.prototype.load = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, e, ok, p, value;
		value = $ifaceNil;
		ok = false;
		e = this;
		p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$5(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
		if (p === 0 || p === expunged) {
			_tmp = $ifaceNil;
			_tmp$1 = false;
			value = _tmp;
			ok = _tmp$1;
			return [value, ok];
		}
		_tmp$2 = (p).$get();
		_tmp$3 = true;
		value = _tmp$2;
		ok = _tmp$3;
		return [value, ok];
	};
	entry.prototype.load = function() { return this.$val.load(); };
	Map.ptr.prototype.Store = function(key, value) {
		var _entry, _entry$1, _entry$2, _key, _key$1, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, e, e$1, e$2, key, m, ok, ok$1, ok$2, read, value, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _entry$2 = $f._entry$2; _key = $f._key; _key$1 = $f._key$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; e = $f.e; e$1 = $f.e$1; e$2 = $f.e$2; key = $f.key; m = $f.m; ok = $f.ok; ok$1 = $f.ok$1; ok$2 = $f.ok$2; read = $f.read; value = $f.value; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		value = [value];
		m = this;
		_tuple = $assertType(m.read.Load(), readOnly, true);
		read = $clone(_tuple[0], readOnly);
		_tuple$1 = (_entry = read.m[$emptyInterface.keyFor(key)], _entry !== undefined ? [_entry.v, true] : [ptrType$4.nil, false]);
		e = _tuple$1[0];
		ok = _tuple$1[1];
		if (ok && e.tryStore((value.$ptr || (value.$ptr = new ptrType$3(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, value))))) {
			$s = -1; return;
		}
		$r = m.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		_tuple$2 = $assertType(m.read.Load(), readOnly, true);
		readOnly.copy(read, _tuple$2[0]);
		_tuple$3 = (_entry$1 = read.m[$emptyInterface.keyFor(key)], _entry$1 !== undefined ? [_entry$1.v, true] : [ptrType$4.nil, false]);
		e$1 = _tuple$3[0];
		ok$1 = _tuple$3[1];
		if (ok$1) {
			if (e$1.unexpungeLocked()) {
				_key = key; (m.dirty || $throwRuntimeError("assignment to entry in nil map"))[$emptyInterface.keyFor(_key)] = { k: _key, v: e$1 };
			}
			e$1.storeLocked((value.$ptr || (value.$ptr = new ptrType$3(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, value))));
		} else {
			_tuple$4 = (_entry$2 = m.dirty[$emptyInterface.keyFor(key)], _entry$2 !== undefined ? [_entry$2.v, true] : [ptrType$4.nil, false]);
			e$2 = _tuple$4[0];
			ok$2 = _tuple$4[1];
			if (ok$2) {
				e$2.storeLocked((value.$ptr || (value.$ptr = new ptrType$3(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, value))));
			} else {
				if (!read.amended) {
					m.dirtyLocked();
					m.read.Store((x = new readOnly.ptr(read.m, true), new x.constructor.elem(x)));
				}
				_key$1 = key; (m.dirty || $throwRuntimeError("assignment to entry in nil map"))[$emptyInterface.keyFor(_key$1)] = { k: _key$1, v: newEntry(value[0]) };
			}
		}
		$r = m.mu.Unlock(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Map.ptr.prototype.Store }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._entry$2 = _entry$2; $f._key = _key; $f._key$1 = _key$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f.e = e; $f.e$1 = e$1; $f.e$2 = e$2; $f.key = key; $f.m = m; $f.ok = ok; $f.ok$1 = ok$1; $f.ok$2 = ok$2; $f.read = read; $f.value = value; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Map.prototype.Store = function(key, value) { return this.$val.Store(key, value); };
	entry.ptr.prototype.tryStore = function(i) {
		var e, i, p;
		e = this;
		while (true) {
			p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$5(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
			if (p === expunged) {
				return false;
			}
			if (atomic.CompareAndSwapPointer((e.$ptr_p || (e.$ptr_p = new ptrType$5(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))), p, (i))) {
				return true;
			}
		}
	};
	entry.prototype.tryStore = function(i) { return this.$val.tryStore(i); };
	entry.ptr.prototype.unexpungeLocked = function() {
		var e, wasExpunged;
		wasExpunged = false;
		e = this;
		wasExpunged = atomic.CompareAndSwapPointer((e.$ptr_p || (e.$ptr_p = new ptrType$5(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))), expunged, 0);
		return wasExpunged;
	};
	entry.prototype.unexpungeLocked = function() { return this.$val.unexpungeLocked(); };
	entry.ptr.prototype.storeLocked = function(i) {
		var e, i;
		e = this;
		atomic.StorePointer((e.$ptr_p || (e.$ptr_p = new ptrType$5(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))), (i));
	};
	entry.prototype.storeLocked = function(i) { return this.$val.storeLocked(i); };
	Map.ptr.prototype.LoadOrStore = function(key, value) {
		var _entry, _entry$1, _entry$2, _key, _key$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, actual, actual$1, e, e$1, e$2, key, loaded, loaded$1, m, ok, ok$1, ok$2, ok$3, read, value, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _entry$2 = $f._entry$2; _key = $f._key; _key$1 = $f._key$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; _tuple$7 = $f._tuple$7; actual = $f.actual; actual$1 = $f.actual$1; e = $f.e; e$1 = $f.e$1; e$2 = $f.e$2; key = $f.key; loaded = $f.loaded; loaded$1 = $f.loaded$1; m = $f.m; ok = $f.ok; ok$1 = $f.ok$1; ok$2 = $f.ok$2; ok$3 = $f.ok$3; read = $f.read; value = $f.value; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		actual = $ifaceNil;
		loaded = false;
		m = this;
		_tuple = $assertType(m.read.Load(), readOnly, true);
		read = $clone(_tuple[0], readOnly);
		_tuple$1 = (_entry = read.m[$emptyInterface.keyFor(key)], _entry !== undefined ? [_entry.v, true] : [ptrType$4.nil, false]);
		e = _tuple$1[0];
		ok = _tuple$1[1];
		if (ok) {
			_tuple$2 = e.tryLoadOrStore(value);
			actual$1 = _tuple$2[0];
			loaded$1 = _tuple$2[1];
			ok$1 = _tuple$2[2];
			if (ok$1) {
				_tmp = actual$1;
				_tmp$1 = loaded$1;
				actual = _tmp;
				loaded = _tmp$1;
				$s = -1; return [actual, loaded];
			}
		}
		$r = m.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		_tuple$3 = $assertType(m.read.Load(), readOnly, true);
		readOnly.copy(read, _tuple$3[0]);
		_tuple$4 = (_entry$1 = read.m[$emptyInterface.keyFor(key)], _entry$1 !== undefined ? [_entry$1.v, true] : [ptrType$4.nil, false]);
		e$1 = _tuple$4[0];
		ok$2 = _tuple$4[1];
		if (ok$2) {
			if (e$1.unexpungeLocked()) {
				_key = key; (m.dirty || $throwRuntimeError("assignment to entry in nil map"))[$emptyInterface.keyFor(_key)] = { k: _key, v: e$1 };
			}
			_tuple$5 = e$1.tryLoadOrStore(value);
			actual = _tuple$5[0];
			loaded = _tuple$5[1];
		} else {
			_tuple$6 = (_entry$2 = m.dirty[$emptyInterface.keyFor(key)], _entry$2 !== undefined ? [_entry$2.v, true] : [ptrType$4.nil, false]);
			e$2 = _tuple$6[0];
			ok$3 = _tuple$6[1];
			if (ok$3) {
				_tuple$7 = e$2.tryLoadOrStore(value);
				actual = _tuple$7[0];
				loaded = _tuple$7[1];
				m.missLocked();
			} else {
				if (!read.amended) {
					m.dirtyLocked();
					m.read.Store((x = new readOnly.ptr(read.m, true), new x.constructor.elem(x)));
				}
				_key$1 = key; (m.dirty || $throwRuntimeError("assignment to entry in nil map"))[$emptyInterface.keyFor(_key$1)] = { k: _key$1, v: newEntry(value) };
				_tmp$2 = value;
				_tmp$3 = false;
				actual = _tmp$2;
				loaded = _tmp$3;
			}
		}
		$r = m.mu.Unlock(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		_tmp$4 = actual;
		_tmp$5 = loaded;
		actual = _tmp$4;
		loaded = _tmp$5;
		$s = -1; return [actual, loaded];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Map.ptr.prototype.LoadOrStore }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._entry$2 = _entry$2; $f._key = _key; $f._key$1 = _key$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f._tuple$7 = _tuple$7; $f.actual = actual; $f.actual$1 = actual$1; $f.e = e; $f.e$1 = e$1; $f.e$2 = e$2; $f.key = key; $f.loaded = loaded; $f.loaded$1 = loaded$1; $f.m = m; $f.ok = ok; $f.ok$1 = ok$1; $f.ok$2 = ok$2; $f.ok$3 = ok$3; $f.read = read; $f.value = value; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Map.prototype.LoadOrStore = function(key, value) { return this.$val.LoadOrStore(key, value); };
	entry.ptr.prototype.tryLoadOrStore = function(i) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, actual, e, i, ic, ic$24ptr, loaded, ok, p;
		actual = $ifaceNil;
		loaded = false;
		ok = false;
		e = this;
		p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$5(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
		if (p === expunged) {
			_tmp = $ifaceNil;
			_tmp$1 = false;
			_tmp$2 = false;
			actual = _tmp;
			loaded = _tmp$1;
			ok = _tmp$2;
			return [actual, loaded, ok];
		}
		if (!(p === 0)) {
			_tmp$3 = (p).$get();
			_tmp$4 = true;
			_tmp$5 = true;
			actual = _tmp$3;
			loaded = _tmp$4;
			ok = _tmp$5;
			return [actual, loaded, ok];
		}
		ic = i;
		while (true) {
			if (atomic.CompareAndSwapPointer((e.$ptr_p || (e.$ptr_p = new ptrType$5(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))), 0, ((ic$24ptr || (ic$24ptr = new ptrType$3(function() { return ic; }, function($v) { ic = $v; })))))) {
				_tmp$6 = i;
				_tmp$7 = false;
				_tmp$8 = true;
				actual = _tmp$6;
				loaded = _tmp$7;
				ok = _tmp$8;
				return [actual, loaded, ok];
			}
			p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$5(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
			if (p === expunged) {
				_tmp$9 = $ifaceNil;
				_tmp$10 = false;
				_tmp$11 = false;
				actual = _tmp$9;
				loaded = _tmp$10;
				ok = _tmp$11;
				return [actual, loaded, ok];
			}
			if (!(p === 0)) {
				_tmp$12 = (p).$get();
				_tmp$13 = true;
				_tmp$14 = true;
				actual = _tmp$12;
				loaded = _tmp$13;
				ok = _tmp$14;
				return [actual, loaded, ok];
			}
		}
	};
	entry.prototype.tryLoadOrStore = function(i) { return this.$val.tryLoadOrStore(i); };
	Map.ptr.prototype.Delete = function(key) {
		var _entry, _entry$1, _tuple, _tuple$1, _tuple$2, _tuple$3, e, key, m, ok, read, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; e = $f.e; key = $f.key; m = $f.m; ok = $f.ok; read = $f.read; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = this;
		_tuple = $assertType(m.read.Load(), readOnly, true);
		read = $clone(_tuple[0], readOnly);
		_tuple$1 = (_entry = read.m[$emptyInterface.keyFor(key)], _entry !== undefined ? [_entry.v, true] : [ptrType$4.nil, false]);
		e = _tuple$1[0];
		ok = _tuple$1[1];
		/* */ if (!ok && read.amended) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!ok && read.amended) { */ case 1:
			$r = m.mu.Lock(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			_tuple$2 = $assertType(m.read.Load(), readOnly, true);
			readOnly.copy(read, _tuple$2[0]);
			_tuple$3 = (_entry$1 = read.m[$emptyInterface.keyFor(key)], _entry$1 !== undefined ? [_entry$1.v, true] : [ptrType$4.nil, false]);
			e = _tuple$3[0];
			ok = _tuple$3[1];
			if (!ok && read.amended) {
				delete m.dirty[$emptyInterface.keyFor(key)];
			}
			$r = m.mu.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* } */ case 2:
		if (ok) {
			e.delete$();
		}
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Map.ptr.prototype.Delete }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.e = e; $f.key = key; $f.m = m; $f.ok = ok; $f.read = read; $f.$s = $s; $f.$r = $r; return $f;
	};
	Map.prototype.Delete = function(key) { return this.$val.Delete(key); };
	entry.ptr.prototype.delete$ = function() {
		var e, hadValue, p;
		hadValue = false;
		e = this;
		while (true) {
			p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$5(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
			if (p === 0 || p === expunged) {
				hadValue = false;
				return hadValue;
			}
			if (atomic.CompareAndSwapPointer((e.$ptr_p || (e.$ptr_p = new ptrType$5(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))), p, 0)) {
				hadValue = true;
				return hadValue;
			}
		}
	};
	entry.prototype.delete$ = function() { return this.$val.delete$(); };
	Map.ptr.prototype.Range = function(f) {
		var _entry, _i, _keys, _r, _ref, _tuple, _tuple$1, _tuple$2, e, f, k, m, ok, read, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _i = $f._i; _keys = $f._keys; _r = $f._r; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; e = $f.e; f = $f.f; k = $f.k; m = $f.m; ok = $f.ok; read = $f.read; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = this;
		_tuple = $assertType(m.read.Load(), readOnly, true);
		read = $clone(_tuple[0], readOnly);
		/* */ if (read.amended) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (read.amended) { */ case 1:
			$r = m.mu.Lock(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			_tuple$1 = $assertType(m.read.Load(), readOnly, true);
			readOnly.copy(read, _tuple$1[0]);
			if (read.amended) {
				readOnly.copy(read, new readOnly.ptr(m.dirty, false));
				m.read.Store(new read.constructor.elem(read));
				m.dirty = false;
				m.misses = 0;
			}
			$r = m.mu.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* } */ case 2:
		_ref = read.m;
		_i = 0;
		_keys = $keys(_ref);
		/* while (true) { */ case 5:
			/* if (!(_i < _keys.length)) { break; } */ if(!(_i < _keys.length)) { $s = 6; continue; }
			_entry = _ref[_keys[_i]];
			if (_entry === undefined) {
				_i++;
				/* continue; */ $s = 5; continue;
			}
			k = _entry.k;
			e = _entry.v;
			_tuple$2 = e.load();
			v = _tuple$2[0];
			ok = _tuple$2[1];
			/* */ if (!ok) { $s = 7; continue; }
			/* */ $s = 8; continue;
			/* if (!ok) { */ case 7:
				_i++;
				/* continue; */ $s = 5; continue;
			/* } */ case 8:
			_r = f(k, v); /* */ $s = 11; case 11: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (!_r) { $s = 9; continue; }
			/* */ $s = 10; continue;
			/* if (!_r) { */ case 9:
				/* break; */ $s = 6; continue;
			/* } */ case 10:
			_i++;
		/* } */ $s = 5; continue; case 6:
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Map.ptr.prototype.Range }; } $f._entry = _entry; $f._i = _i; $f._keys = _keys; $f._r = _r; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.e = e; $f.f = f; $f.k = k; $f.m = m; $f.ok = ok; $f.read = read; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Map.prototype.Range = function(f) { return this.$val.Range(f); };
	Map.ptr.prototype.missLocked = function() {
		var m, x;
		m = this;
		m.misses = m.misses + (1) >> 0;
		if (m.misses < $keys(m.dirty).length) {
			return;
		}
		m.read.Store((x = new readOnly.ptr(m.dirty, false), new x.constructor.elem(x)));
		m.dirty = false;
		m.misses = 0;
	};
	Map.prototype.missLocked = function() { return this.$val.missLocked(); };
	Map.ptr.prototype.dirtyLocked = function() {
		var _entry, _i, _key, _keys, _ref, _tuple, e, k, m, read, x;
		m = this;
		if (!(m.dirty === false)) {
			return;
		}
		_tuple = $assertType(m.read.Load(), readOnly, true);
		read = $clone(_tuple[0], readOnly);
		m.dirty = (x = $keys(read.m).length, ((x < 0 || x > 2147483647) ? $throwRuntimeError("makemap: size out of range") : {}));
		_ref = read.m;
		_i = 0;
		_keys = $keys(_ref);
		while (true) {
			if (!(_i < _keys.length)) { break; }
			_entry = _ref[_keys[_i]];
			if (_entry === undefined) {
				_i++;
				continue;
			}
			k = _entry.k;
			e = _entry.v;
			if (!e.tryExpungeLocked()) {
				_key = k; (m.dirty || $throwRuntimeError("assignment to entry in nil map"))[$emptyInterface.keyFor(_key)] = { k: _key, v: e };
			}
			_i++;
		}
	};
	Map.prototype.dirtyLocked = function() { return this.$val.dirtyLocked(); };
	entry.ptr.prototype.tryExpungeLocked = function() {
		var e, isExpunged, p;
		isExpunged = false;
		e = this;
		p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$5(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
		while (true) {
			if (!(p === 0)) { break; }
			if (atomic.CompareAndSwapPointer((e.$ptr_p || (e.$ptr_p = new ptrType$5(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))), 0, expunged)) {
				isExpunged = true;
				return isExpunged;
			}
			p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$5(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
		}
		isExpunged = p === expunged;
		return isExpunged;
	};
	entry.prototype.tryExpungeLocked = function() { return this.$val.tryExpungeLocked(); };
	Mutex.ptr.prototype.Lock = function() {
		var awoke, delta, iter, m, new$1, old, queueLifo, starving, waitStartTime, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; awoke = $f.awoke; delta = $f.delta; iter = $f.iter; m = $f.m; new$1 = $f.new$1; old = $f.old; queueLifo = $f.queueLifo; starving = $f.starving; waitStartTime = $f.waitStartTime; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = this;
		if (atomic.CompareAndSwapInt32((m.$ptr_state || (m.$ptr_state = new ptrType$6(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), 0, 1)) {
			if (false) {
				race.Acquire((m));
			}
			$s = -1; return;
		}
		waitStartTime = new $Int64(0, 0);
		starving = false;
		awoke = false;
		iter = 0;
		old = m.state;
		/* while (true) { */ case 1:
			/* */ if (((old & 5) === 1) && runtime_canSpin(iter)) { $s = 3; continue; }
			/* */ $s = 4; continue;
			/* if (((old & 5) === 1) && runtime_canSpin(iter)) { */ case 3:
				if (!awoke && ((old & 2) === 0) && !(((old >> 3 >> 0) === 0)) && atomic.CompareAndSwapInt32((m.$ptr_state || (m.$ptr_state = new ptrType$6(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), old, old | 2)) {
					awoke = true;
				}
				runtime_doSpin();
				iter = iter + (1) >> 0;
				old = m.state;
				/* continue; */ $s = 1; continue;
			/* } */ case 4:
			new$1 = old;
			if ((old & 4) === 0) {
				new$1 = new$1 | (1);
			}
			if (!(((old & 5) === 0))) {
				new$1 = new$1 + (8) >> 0;
			}
			if (starving && !(((old & 1) === 0))) {
				new$1 = new$1 | (4);
			}
			if (awoke) {
				if ((new$1 & 2) === 0) {
					throw$1("sync: inconsistent mutex state");
				}
				new$1 = (new$1 & ~(2)) >> 0;
			}
			/* */ if (atomic.CompareAndSwapInt32((m.$ptr_state || (m.$ptr_state = new ptrType$6(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), old, new$1)) { $s = 5; continue; }
			/* */ $s = 6; continue;
			/* if (atomic.CompareAndSwapInt32((m.$ptr_state || (m.$ptr_state = new ptrType$6(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), old, new$1)) { */ case 5:
				if ((old & 5) === 0) {
					/* break; */ $s = 2; continue;
				}
				queueLifo = !((waitStartTime.$high === 0 && waitStartTime.$low === 0));
				if ((waitStartTime.$high === 0 && waitStartTime.$low === 0)) {
					waitStartTime = runtime_nanotime();
				}
				$r = runtime_SemacquireMutex((m.$ptr_sema || (m.$ptr_sema = new ptrType$1(function() { return this.$target.sema; }, function($v) { this.$target.sema = $v; }, m))), queueLifo); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
				starving = starving || (x = (x$1 = runtime_nanotime(), new $Int64(x$1.$high - waitStartTime.$high, x$1.$low - waitStartTime.$low)), (x.$high > 0 || (x.$high === 0 && x.$low > 1000000)));
				old = m.state;
				if (!(((old & 4) === 0))) {
					if (!(((old & 3) === 0)) || ((old >> 3 >> 0) === 0)) {
						throw$1("sync: inconsistent mutex state");
					}
					delta = -7;
					if (!starving || ((old >> 3 >> 0) === 1)) {
						delta = delta - (4) >> 0;
					}
					atomic.AddInt32((m.$ptr_state || (m.$ptr_state = new ptrType$6(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), delta);
					/* break; */ $s = 2; continue;
				}
				awoke = true;
				iter = 0;
				$s = 7; continue;
			/* } else { */ case 6:
				old = m.state;
			/* } */ case 7:
		/* } */ $s = 1; continue; case 2:
		if (false) {
			race.Acquire((m));
		}
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Mutex.ptr.prototype.Lock }; } $f.awoke = awoke; $f.delta = delta; $f.iter = iter; $f.m = m; $f.new$1 = new$1; $f.old = old; $f.queueLifo = queueLifo; $f.starving = starving; $f.waitStartTime = waitStartTime; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Mutex.prototype.Lock = function() { return this.$val.Lock(); };
	Mutex.ptr.prototype.Unlock = function() {
		var m, new$1, old, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; m = $f.m; new$1 = $f.new$1; old = $f.old; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = this;
		if (false) {
			$unused(m.state);
			race.Release((m));
		}
		new$1 = atomic.AddInt32((m.$ptr_state || (m.$ptr_state = new ptrType$6(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), -1);
		if ((((new$1 + 1 >> 0)) & 1) === 0) {
			throw$1("sync: unlock of unlocked mutex");
		}
		/* */ if ((new$1 & 4) === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if ((new$1 & 4) === 0) { */ case 1:
			old = new$1;
			/* while (true) { */ case 4:
				if (((old >> 3 >> 0) === 0) || !(((old & 7) === 0))) {
					$s = -1; return;
				}
				new$1 = ((old - 8 >> 0)) | 2;
				/* */ if (atomic.CompareAndSwapInt32((m.$ptr_state || (m.$ptr_state = new ptrType$6(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), old, new$1)) { $s = 6; continue; }
				/* */ $s = 7; continue;
				/* if (atomic.CompareAndSwapInt32((m.$ptr_state || (m.$ptr_state = new ptrType$6(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), old, new$1)) { */ case 6:
					$r = runtime_Semrelease((m.$ptr_sema || (m.$ptr_sema = new ptrType$1(function() { return this.$target.sema; }, function($v) { this.$target.sema = $v; }, m))), false); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
					$s = -1; return;
				/* } */ case 7:
				old = m.state;
			/* } */ $s = 4; continue; case 5:
			$s = 3; continue;
		/* } else { */ case 2:
			$r = runtime_Semrelease((m.$ptr_sema || (m.$ptr_sema = new ptrType$1(function() { return this.$target.sema; }, function($v) { this.$target.sema = $v; }, m))), true); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* } */ case 3:
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Mutex.ptr.prototype.Unlock }; } $f.m = m; $f.new$1 = new$1; $f.old = old; $f.$s = $s; $f.$r = $r; return $f;
	};
	Mutex.prototype.Unlock = function() { return this.$val.Unlock(); };
	poolCleanup = function() {
		var _i, _i$1, _ref, _ref$1, i, i$1, j, l, p, x;
		_ref = allPools;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			p = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
			((i < 0 || i >= allPools.$length) ? ($throwRuntimeError("index out of range"), undefined) : allPools.$array[allPools.$offset + i] = ptrType.nil);
			i$1 = 0;
			while (true) {
				if (!(i$1 < ((p.localSize >> 0)))) { break; }
				l = indexLocal(p.local, i$1);
				l.poolLocalInternal.private$0 = $ifaceNil;
				_ref$1 = l.poolLocalInternal.shared;
				_i$1 = 0;
				while (true) {
					if (!(_i$1 < _ref$1.$length)) { break; }
					j = _i$1;
					(x = l.poolLocalInternal.shared, ((j < 0 || j >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + j] = $ifaceNil));
					_i$1++;
				}
				l.poolLocalInternal.shared = sliceType$4.nil;
				i$1 = i$1 + (1) >> 0;
			}
			p.local = 0;
			p.localSize = 0;
			_i++;
		}
		allPools = new sliceType([]);
	};
	init = function() {
		runtime_registerPoolCleanup(poolCleanup);
	};
	indexLocal = function(l, i) {
		var i, l, lp;
		lp = (((l) + ($imul(((i >>> 0)), 128) >>> 0) >>> 0));
		return ($pointerOfStructConversion(lp, ptrType$7));
	};
	init$1 = function() {
		var n;
		n = new notifyList.ptr(0, 0, 0, 0, 0);
		runtime_notifyListCheck(20);
	};
	runtime_doSpin = function() {
		$throwRuntimeError("native function not implemented: sync.runtime_doSpin");
	};
	RWMutex.ptr.prototype.RLock = function() {
		var rw, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; rw = $f.rw; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		rw = this;
		if (false) {
			$unused(rw.w.state);
			race.Disable();
		}
		/* */ if (atomic.AddInt32((rw.$ptr_readerCount || (rw.$ptr_readerCount = new ptrType$6(function() { return this.$target.readerCount; }, function($v) { this.$target.readerCount = $v; }, rw))), 1) < 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (atomic.AddInt32((rw.$ptr_readerCount || (rw.$ptr_readerCount = new ptrType$6(function() { return this.$target.readerCount; }, function($v) { this.$target.readerCount = $v; }, rw))), 1) < 0) { */ case 1:
			$r = runtime_SemacquireMutex((rw.$ptr_readerSem || (rw.$ptr_readerSem = new ptrType$1(function() { return this.$target.readerSem; }, function($v) { this.$target.readerSem = $v; }, rw))), false); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* } */ case 2:
		if (false) {
			race.Enable();
			race.Acquire(((rw.$ptr_readerSem || (rw.$ptr_readerSem = new ptrType$1(function() { return this.$target.readerSem; }, function($v) { this.$target.readerSem = $v; }, rw)))));
		}
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: RWMutex.ptr.prototype.RLock }; } $f.rw = rw; $f.$s = $s; $f.$r = $r; return $f;
	};
	RWMutex.prototype.RLock = function() { return this.$val.RLock(); };
	RWMutex.ptr.prototype.RUnlock = function() {
		var r, rw, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; r = $f.r; rw = $f.rw; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		rw = this;
		if (false) {
			$unused(rw.w.state);
			race.ReleaseMerge(((rw.$ptr_writerSem || (rw.$ptr_writerSem = new ptrType$1(function() { return this.$target.writerSem; }, function($v) { this.$target.writerSem = $v; }, rw)))));
			race.Disable();
		}
		r = atomic.AddInt32((rw.$ptr_readerCount || (rw.$ptr_readerCount = new ptrType$6(function() { return this.$target.readerCount; }, function($v) { this.$target.readerCount = $v; }, rw))), -1);
		/* */ if (r < 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (r < 0) { */ case 1:
			if (((r + 1 >> 0) === 0) || ((r + 1 >> 0) === -1073741824)) {
				race.Enable();
				throw$1("sync: RUnlock of unlocked RWMutex");
			}
			/* */ if (atomic.AddInt32((rw.$ptr_readerWait || (rw.$ptr_readerWait = new ptrType$6(function() { return this.$target.readerWait; }, function($v) { this.$target.readerWait = $v; }, rw))), -1) === 0) { $s = 3; continue; }
			/* */ $s = 4; continue;
			/* if (atomic.AddInt32((rw.$ptr_readerWait || (rw.$ptr_readerWait = new ptrType$6(function() { return this.$target.readerWait; }, function($v) { this.$target.readerWait = $v; }, rw))), -1) === 0) { */ case 3:
				$r = runtime_Semrelease((rw.$ptr_writerSem || (rw.$ptr_writerSem = new ptrType$1(function() { return this.$target.writerSem; }, function($v) { this.$target.writerSem = $v; }, rw))), false); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			/* } */ case 4:
		/* } */ case 2:
		if (false) {
			race.Enable();
		}
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: RWMutex.ptr.prototype.RUnlock }; } $f.r = r; $f.rw = rw; $f.$s = $s; $f.$r = $r; return $f;
	};
	RWMutex.prototype.RUnlock = function() { return this.$val.RUnlock(); };
	RWMutex.ptr.prototype.Lock = function() {
		var r, rw, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; r = $f.r; rw = $f.rw; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		rw = this;
		if (false) {
			$unused(rw.w.state);
			race.Disable();
		}
		$r = rw.w.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		r = atomic.AddInt32((rw.$ptr_readerCount || (rw.$ptr_readerCount = new ptrType$6(function() { return this.$target.readerCount; }, function($v) { this.$target.readerCount = $v; }, rw))), -1073741824) + 1073741824 >> 0;
		/* */ if (!((r === 0)) && !((atomic.AddInt32((rw.$ptr_readerWait || (rw.$ptr_readerWait = new ptrType$6(function() { return this.$target.readerWait; }, function($v) { this.$target.readerWait = $v; }, rw))), r) === 0))) { $s = 2; continue; }
		/* */ $s = 3; continue;
		/* if (!((r === 0)) && !((atomic.AddInt32((rw.$ptr_readerWait || (rw.$ptr_readerWait = new ptrType$6(function() { return this.$target.readerWait; }, function($v) { this.$target.readerWait = $v; }, rw))), r) === 0))) { */ case 2:
			$r = runtime_SemacquireMutex((rw.$ptr_writerSem || (rw.$ptr_writerSem = new ptrType$1(function() { return this.$target.writerSem; }, function($v) { this.$target.writerSem = $v; }, rw))), false); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* } */ case 3:
		if (false) {
			race.Enable();
			race.Acquire(((rw.$ptr_readerSem || (rw.$ptr_readerSem = new ptrType$1(function() { return this.$target.readerSem; }, function($v) { this.$target.readerSem = $v; }, rw)))));
			race.Acquire(((rw.$ptr_writerSem || (rw.$ptr_writerSem = new ptrType$1(function() { return this.$target.writerSem; }, function($v) { this.$target.writerSem = $v; }, rw)))));
		}
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: RWMutex.ptr.prototype.Lock }; } $f.r = r; $f.rw = rw; $f.$s = $s; $f.$r = $r; return $f;
	};
	RWMutex.prototype.Lock = function() { return this.$val.Lock(); };
	RWMutex.ptr.prototype.Unlock = function() {
		var i, r, rw, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; i = $f.i; r = $f.r; rw = $f.rw; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		rw = this;
		if (false) {
			$unused(rw.w.state);
			race.Release(((rw.$ptr_readerSem || (rw.$ptr_readerSem = new ptrType$1(function() { return this.$target.readerSem; }, function($v) { this.$target.readerSem = $v; }, rw)))));
			race.Disable();
		}
		r = atomic.AddInt32((rw.$ptr_readerCount || (rw.$ptr_readerCount = new ptrType$6(function() { return this.$target.readerCount; }, function($v) { this.$target.readerCount = $v; }, rw))), 1073741824);
		if (r >= 1073741824) {
			race.Enable();
			throw$1("sync: Unlock of unlocked RWMutex");
		}
		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i < ((r >> 0)))) { break; } */ if(!(i < ((r >> 0)))) { $s = 2; continue; }
			$r = runtime_Semrelease((rw.$ptr_readerSem || (rw.$ptr_readerSem = new ptrType$1(function() { return this.$target.readerSem; }, function($v) { this.$target.readerSem = $v; }, rw))), false); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			i = i + (1) >> 0;
		/* } */ $s = 1; continue; case 2:
		$r = rw.w.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		if (false) {
			race.Enable();
		}
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: RWMutex.ptr.prototype.Unlock }; } $f.i = i; $f.r = r; $f.rw = rw; $f.$s = $s; $f.$r = $r; return $f;
	};
	RWMutex.prototype.Unlock = function() { return this.$val.Unlock(); };
	RWMutex.ptr.prototype.RLocker = function() {
		var rw;
		rw = this;
		return ($pointerOfStructConversion(rw, ptrType$8));
	};
	RWMutex.prototype.RLocker = function() { return this.$val.RLocker(); };
	rlocker.ptr.prototype.Lock = function() {
		var r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
		$r = ($pointerOfStructConversion(r, ptrType$9)).RLock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: rlocker.ptr.prototype.Lock }; } $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	rlocker.prototype.Lock = function() { return this.$val.Lock(); };
	rlocker.ptr.prototype.Unlock = function() {
		var r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
		$r = ($pointerOfStructConversion(r, ptrType$9)).RUnlock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: rlocker.ptr.prototype.Unlock }; } $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	rlocker.prototype.Unlock = function() { return this.$val.Unlock(); };
	WaitGroup.ptr.prototype.Done = function() {
		var wg;
		wg = this;
		wg.Add(-1);
	};
	WaitGroup.prototype.Done = function() { return this.$val.Done(); };
	ptrType.methods = [{prop: "Get", name: "Get", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Put", name: "Put", pkg: "", typ: $funcType([$emptyInterface], [], false)}, {prop: "getSlow", name: "getSlow", pkg: "sync", typ: $funcType([], [$emptyInterface], false)}, {prop: "pin", name: "pin", pkg: "sync", typ: $funcType([], [ptrType$7], false)}, {prop: "pinSlow", name: "pinSlow", pkg: "sync", typ: $funcType([], [ptrType$7], false)}];
	ptrType$12.methods = [{prop: "Add", name: "Add", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Wait", name: "Wait", pkg: "", typ: $funcType([], [], false)}, {prop: "state", name: "state", pkg: "sync", typ: $funcType([], [ptrType$10, ptrType$1], false)}, {prop: "Done", name: "Done", pkg: "", typ: $funcType([], [], false)}];
	ptrType$15.methods = [{prop: "Load", name: "Load", pkg: "", typ: $funcType([$emptyInterface], [$emptyInterface, $Bool], false)}, {prop: "Store", name: "Store", pkg: "", typ: $funcType([$emptyInterface, $emptyInterface], [], false)}, {prop: "LoadOrStore", name: "LoadOrStore", pkg: "", typ: $funcType([$emptyInterface, $emptyInterface], [$emptyInterface, $Bool], false)}, {prop: "Delete", name: "Delete", pkg: "", typ: $funcType([$emptyInterface], [], false)}, {prop: "Range", name: "Range", pkg: "", typ: $funcType([funcType$1], [], false)}, {prop: "missLocked", name: "missLocked", pkg: "sync", typ: $funcType([], [], false)}, {prop: "dirtyLocked", name: "dirtyLocked", pkg: "sync", typ: $funcType([], [], false)}];
	ptrType$4.methods = [{prop: "load", name: "load", pkg: "sync", typ: $funcType([], [$emptyInterface, $Bool], false)}, {prop: "tryStore", name: "tryStore", pkg: "sync", typ: $funcType([ptrType$3], [$Bool], false)}, {prop: "unexpungeLocked", name: "unexpungeLocked", pkg: "sync", typ: $funcType([], [$Bool], false)}, {prop: "storeLocked", name: "storeLocked", pkg: "sync", typ: $funcType([ptrType$3], [], false)}, {prop: "tryLoadOrStore", name: "tryLoadOrStore", pkg: "sync", typ: $funcType([$emptyInterface], [$emptyInterface, $Bool, $Bool], false)}, {prop: "delete$", name: "delete", pkg: "sync", typ: $funcType([], [$Bool], false)}, {prop: "tryExpungeLocked", name: "tryExpungeLocked", pkg: "sync", typ: $funcType([], [$Bool], false)}];
	ptrType$16.methods = [{prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}];
	ptrType$9.methods = [{prop: "RLock", name: "RLock", pkg: "", typ: $funcType([], [], false)}, {prop: "RUnlock", name: "RUnlock", pkg: "", typ: $funcType([], [], false)}, {prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}, {prop: "RLocker", name: "RLocker", pkg: "", typ: $funcType([], [Locker], false)}];
	ptrType$8.methods = [{prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}];
	Pool.init("sync", [{prop: "local", name: "local", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}, {prop: "localSize", name: "localSize", embedded: false, exported: false, typ: $Uintptr, tag: ""}, {prop: "store", name: "store", embedded: false, exported: false, typ: sliceType$4, tag: ""}, {prop: "New", name: "New", embedded: false, exported: true, typ: funcType, tag: ""}]);
	WaitGroup.init("sync", [{prop: "counter", name: "counter", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "ch", name: "ch", embedded: false, exported: false, typ: chanType$1, tag: ""}, {prop: "state1", name: "state1", embedded: false, exported: false, typ: arrayType$1, tag: ""}]);
	Map.init("sync", [{prop: "mu", name: "mu", embedded: false, exported: false, typ: Mutex, tag: ""}, {prop: "read", name: "read", embedded: false, exported: false, typ: atomic.Value, tag: ""}, {prop: "dirty", name: "dirty", embedded: false, exported: false, typ: mapType, tag: ""}, {prop: "misses", name: "misses", embedded: false, exported: false, typ: $Int, tag: ""}]);
	readOnly.init("sync", [{prop: "m", name: "m", embedded: false, exported: false, typ: mapType, tag: ""}, {prop: "amended", name: "amended", embedded: false, exported: false, typ: $Bool, tag: ""}]);
	entry.init("sync", [{prop: "p", name: "p", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}]);
	Mutex.init("sync", [{prop: "state", name: "state", embedded: false, exported: false, typ: $Int32, tag: ""}, {prop: "sema", name: "sema", embedded: false, exported: false, typ: $Uint32, tag: ""}]);
	Locker.init([{prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}]);
	poolLocalInternal.init("sync", [{prop: "private$0", name: "private", embedded: false, exported: false, typ: $emptyInterface, tag: ""}, {prop: "shared", name: "shared", embedded: false, exported: false, typ: sliceType$4, tag: ""}, {prop: "Mutex", name: "Mutex", embedded: true, exported: true, typ: Mutex, tag: ""}]);
	poolLocal.init("sync", [{prop: "poolLocalInternal", name: "poolLocalInternal", embedded: true, exported: false, typ: poolLocalInternal, tag: ""}, {prop: "pad", name: "pad", embedded: false, exported: false, typ: arrayType$2, tag: ""}]);
	notifyList.init("sync", [{prop: "wait", name: "wait", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "notify", name: "notify", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "lock", name: "lock", embedded: false, exported: false, typ: $Uintptr, tag: ""}, {prop: "head", name: "head", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}, {prop: "tail", name: "tail", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}]);
	RWMutex.init("sync", [{prop: "w", name: "w", embedded: false, exported: false, typ: Mutex, tag: ""}, {prop: "writerSem", name: "writerSem", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "readerSem", name: "readerSem", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "readerCount", name: "readerCount", embedded: false, exported: false, typ: $Int32, tag: ""}, {prop: "readerWait", name: "readerWait", embedded: false, exported: false, typ: $Int32, tag: ""}]);
	rlocker.init("sync", [{prop: "w", name: "w", embedded: false, exported: false, typ: Mutex, tag: ""}, {prop: "writerSem", name: "writerSem", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "readerSem", name: "readerSem", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "readerCount", name: "readerCount", embedded: false, exported: false, typ: $Int32, tag: ""}, {prop: "readerWait", name: "readerWait", embedded: false, exported: false, typ: $Int32, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = js.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = race.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = runtime.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = atomic.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		allPools = sliceType.nil;
		semWaiters = {};
		semAwoken = {};
		expunged = (new Uint8Array(8));
		init();
		init$1();
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["io"]=(function(){var $pkg={},$init,errors,sync,atomic,Reader,Writer,sliceType,errWhence,errOffset;	errors = $packages["errors"];
	sync = $packages["sync"];
	atomic = $packages["sync/atomic"];
	Reader = $pkg.Reader = $newType(8, $kindInterface, "io.Reader", true, "io", true, null);
	Writer = $pkg.Writer = $newType(8, $kindInterface, "io.Writer", true, "io", true, null);
	sliceType = $sliceType($Uint8);
	Reader.init([{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}]);
	Writer.init([{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = sync.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = atomic.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$pkg.ErrShortWrite = errors.New("short write");
		$pkg.ErrShortBuffer = errors.New("short buffer");
		$pkg.EOF = errors.New("EOF");
		$pkg.ErrUnexpectedEOF = errors.New("unexpected EOF");
		$pkg.ErrNoProgress = errors.New("multiple Read calls return no data or error");
		errWhence = errors.New("Seek: invalid whence");
		errOffset = errors.New("Seek: invalid offset");
		$pkg.ErrClosedPipe = errors.New("io: read/write on closed pipe");
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["unicode"]=(function(){var $pkg={},$init,RangeTable,Range16,Range32,CaseRange,d,foldPair,arrayType,sliceType,sliceType$1,sliceType$3,sliceType$4,_L,_Nd,_CaseRanges,properties,asciiFold,caseOrbit,to,IsDigit,IsLetter,is16,is32,isExcludingLatin,To,ToUpper,ToLower,SimpleFold;	RangeTable = $pkg.RangeTable = $newType(0, $kindStruct, "unicode.RangeTable", true, "unicode", true, function(R16_, R32_, LatinOffset_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.R16 = sliceType.nil;
			this.R32 = sliceType$1.nil;
			this.LatinOffset = 0;
			return;
		}
		this.R16 = R16_;
		this.R32 = R32_;
		this.LatinOffset = LatinOffset_;
	});
	Range16 = $pkg.Range16 = $newType(0, $kindStruct, "unicode.Range16", true, "unicode", true, function(Lo_, Hi_, Stride_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Lo = 0;
			this.Hi = 0;
			this.Stride = 0;
			return;
		}
		this.Lo = Lo_;
		this.Hi = Hi_;
		this.Stride = Stride_;
	});
	Range32 = $pkg.Range32 = $newType(0, $kindStruct, "unicode.Range32", true, "unicode", true, function(Lo_, Hi_, Stride_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Lo = 0;
			this.Hi = 0;
			this.Stride = 0;
			return;
		}
		this.Lo = Lo_;
		this.Hi = Hi_;
		this.Stride = Stride_;
	});
	CaseRange = $pkg.CaseRange = $newType(0, $kindStruct, "unicode.CaseRange", true, "unicode", true, function(Lo_, Hi_, Delta_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Lo = 0;
			this.Hi = 0;
			this.Delta = arrayType.zero();
			return;
		}
		this.Lo = Lo_;
		this.Hi = Hi_;
		this.Delta = Delta_;
	});
	d = $pkg.d = $newType(12, $kindArray, "unicode.d", true, "unicode", false, null);
	foldPair = $pkg.foldPair = $newType(0, $kindStruct, "unicode.foldPair", true, "unicode", false, function(From_, To_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.From = 0;
			this.To = 0;
			return;
		}
		this.From = From_;
		this.To = To_;
	});
	arrayType = $arrayType($Int32, 3);
	sliceType = $sliceType(Range16);
	sliceType$1 = $sliceType(Range32);
	sliceType$3 = $sliceType(CaseRange);
	sliceType$4 = $sliceType(foldPair);
	to = function(_case, r, caseRange) {
		var _case, _q, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, caseRange, cr, delta, foundMapping, hi, lo, m, mappedRune, r, x;
		mappedRune = 0;
		foundMapping = false;
		if (_case < 0 || 3 <= _case) {
			_tmp = 65533;
			_tmp$1 = false;
			mappedRune = _tmp;
			foundMapping = _tmp$1;
			return [mappedRune, foundMapping];
		}
		lo = 0;
		hi = caseRange.$length;
		while (true) {
			if (!(lo < hi)) { break; }
			m = lo + (_q = ((hi - lo >> 0)) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) >> 0;
			cr = ((m < 0 || m >= caseRange.$length) ? ($throwRuntimeError("index out of range"), undefined) : caseRange.$array[caseRange.$offset + m]);
			if (((cr.Lo >> 0)) <= r && r <= ((cr.Hi >> 0))) {
				delta = ((x = cr.Delta, ((_case < 0 || _case >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[_case])));
				if (delta > 1114111) {
					_tmp$2 = ((cr.Lo >> 0)) + ((((((r - ((cr.Lo >> 0)) >> 0)) & ~1) >> 0) | (((_case & 1) >> 0)))) >> 0;
					_tmp$3 = true;
					mappedRune = _tmp$2;
					foundMapping = _tmp$3;
					return [mappedRune, foundMapping];
				}
				_tmp$4 = r + delta >> 0;
				_tmp$5 = true;
				mappedRune = _tmp$4;
				foundMapping = _tmp$5;
				return [mappedRune, foundMapping];
			}
			if (r < ((cr.Lo >> 0))) {
				hi = m;
			} else {
				lo = m + 1 >> 0;
			}
		}
		_tmp$6 = r;
		_tmp$7 = false;
		mappedRune = _tmp$6;
		foundMapping = _tmp$7;
		return [mappedRune, foundMapping];
	};
	IsDigit = function(r) {
		var r;
		if (r <= 255) {
			return 48 <= r && r <= 57;
		}
		return isExcludingLatin($pkg.Digit, r);
	};
	$pkg.IsDigit = IsDigit;
	IsLetter = function(r) {
		var r, x;
		if (((r >>> 0)) <= 255) {
			return !(((((x = ((r << 24 >>> 24)), ((x < 0 || x >= properties.length) ? ($throwRuntimeError("index out of range"), undefined) : properties[x])) & 96) >>> 0) === 0));
		}
		return isExcludingLatin($pkg.Letter, r);
	};
	$pkg.IsLetter = IsLetter;
	is16 = function(ranges, r) {
		var _i, _q, _r, _r$1, _ref, hi, i, lo, m, r, range_, range_$1, ranges;
		if (ranges.$length <= 18 || r <= 255) {
			_ref = ranges;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
				range_ = ((i < 0 || i >= ranges.$length) ? ($throwRuntimeError("index out of range"), undefined) : ranges.$array[ranges.$offset + i]);
				if (r < range_.Lo) {
					return false;
				}
				if (r <= range_.Hi) {
					return (range_.Stride === 1) || ((_r = ((r - range_.Lo << 16 >>> 16)) % range_.Stride, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0);
				}
				_i++;
			}
			return false;
		}
		lo = 0;
		hi = ranges.$length;
		while (true) {
			if (!(lo < hi)) { break; }
			m = lo + (_q = ((hi - lo >> 0)) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) >> 0;
			range_$1 = ((m < 0 || m >= ranges.$length) ? ($throwRuntimeError("index out of range"), undefined) : ranges.$array[ranges.$offset + m]);
			if (range_$1.Lo <= r && r <= range_$1.Hi) {
				return (range_$1.Stride === 1) || ((_r$1 = ((r - range_$1.Lo << 16 >>> 16)) % range_$1.Stride, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) === 0);
			}
			if (r < range_$1.Lo) {
				hi = m;
			} else {
				lo = m + 1 >> 0;
			}
		}
		return false;
	};
	is32 = function(ranges, r) {
		var _i, _q, _r, _r$1, _ref, hi, i, lo, m, r, range_, range_$1, ranges;
		if (ranges.$length <= 18) {
			_ref = ranges;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
				range_ = ((i < 0 || i >= ranges.$length) ? ($throwRuntimeError("index out of range"), undefined) : ranges.$array[ranges.$offset + i]);
				if (r < range_.Lo) {
					return false;
				}
				if (r <= range_.Hi) {
					return (range_.Stride === 1) || ((_r = ((r - range_.Lo >>> 0)) % range_.Stride, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0);
				}
				_i++;
			}
			return false;
		}
		lo = 0;
		hi = ranges.$length;
		while (true) {
			if (!(lo < hi)) { break; }
			m = lo + (_q = ((hi - lo >> 0)) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) >> 0;
			range_$1 = $clone(((m < 0 || m >= ranges.$length) ? ($throwRuntimeError("index out of range"), undefined) : ranges.$array[ranges.$offset + m]), Range32);
			if (range_$1.Lo <= r && r <= range_$1.Hi) {
				return (range_$1.Stride === 1) || ((_r$1 = ((r - range_$1.Lo >>> 0)) % range_$1.Stride, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) === 0);
			}
			if (r < range_$1.Lo) {
				hi = m;
			} else {
				lo = m + 1 >> 0;
			}
		}
		return false;
	};
	isExcludingLatin = function(rangeTab, r) {
		var off, r, r16, r32, rangeTab, x;
		r16 = rangeTab.R16;
		off = rangeTab.LatinOffset;
		if (r16.$length > off && r <= (((x = r16.$length - 1 >> 0, ((x < 0 || x >= r16.$length) ? ($throwRuntimeError("index out of range"), undefined) : r16.$array[r16.$offset + x])).Hi >> 0))) {
			return is16($subslice(r16, off), ((r << 16 >>> 16)));
		}
		r32 = rangeTab.R32;
		if (r32.$length > 0 && r >= (((0 >= r32.$length ? ($throwRuntimeError("index out of range"), undefined) : r32.$array[r32.$offset + 0]).Lo >> 0))) {
			return is32(r32, ((r >>> 0)));
		}
		return false;
	};
	To = function(_case, r) {
		var _case, _tuple, r;
		_tuple = to(_case, r, $pkg.CaseRanges);
		r = _tuple[0];
		return r;
	};
	$pkg.To = To;
	ToUpper = function(r) {
		var r;
		if (r <= 127) {
			if (97 <= r && r <= 122) {
				r = r - (32) >> 0;
			}
			return r;
		}
		return To(0, r);
	};
	$pkg.ToUpper = ToUpper;
	ToLower = function(r) {
		var r;
		if (r <= 127) {
			if (65 <= r && r <= 90) {
				r = r + (32) >> 0;
			}
			return r;
		}
		return To(1, r);
	};
	$pkg.ToLower = ToLower;
	SimpleFold = function(r) {
		var _q, hi, l, lo, m, r;
		if (r < 0 || r > 1114111) {
			return r;
		}
		if (((r >> 0)) < 128) {
			return ((((r < 0 || r >= asciiFold.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiFold[r]) >> 0));
		}
		lo = 0;
		hi = caseOrbit.$length;
		while (true) {
			if (!(lo < hi)) { break; }
			m = lo + (_q = ((hi - lo >> 0)) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) >> 0;
			if (((((m < 0 || m >= caseOrbit.$length) ? ($throwRuntimeError("index out of range"), undefined) : caseOrbit.$array[caseOrbit.$offset + m]).From >> 0)) < r) {
				lo = m + 1 >> 0;
			} else {
				hi = m;
			}
		}
		if (lo < caseOrbit.$length && (((((lo < 0 || lo >= caseOrbit.$length) ? ($throwRuntimeError("index out of range"), undefined) : caseOrbit.$array[caseOrbit.$offset + lo]).From >> 0)) === r)) {
			return ((((lo < 0 || lo >= caseOrbit.$length) ? ($throwRuntimeError("index out of range"), undefined) : caseOrbit.$array[caseOrbit.$offset + lo]).To >> 0));
		}
		l = ToLower(r);
		if (!((l === r))) {
			return l;
		}
		return ToUpper(r);
	};
	$pkg.SimpleFold = SimpleFold;
	RangeTable.init("", [{prop: "R16", name: "R16", embedded: false, exported: true, typ: sliceType, tag: ""}, {prop: "R32", name: "R32", embedded: false, exported: true, typ: sliceType$1, tag: ""}, {prop: "LatinOffset", name: "LatinOffset", embedded: false, exported: true, typ: $Int, tag: ""}]);
	Range16.init("", [{prop: "Lo", name: "Lo", embedded: false, exported: true, typ: $Uint16, tag: ""}, {prop: "Hi", name: "Hi", embedded: false, exported: true, typ: $Uint16, tag: ""}, {prop: "Stride", name: "Stride", embedded: false, exported: true, typ: $Uint16, tag: ""}]);
	Range32.init("", [{prop: "Lo", name: "Lo", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Hi", name: "Hi", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Stride", name: "Stride", embedded: false, exported: true, typ: $Uint32, tag: ""}]);
	CaseRange.init("", [{prop: "Lo", name: "Lo", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Hi", name: "Hi", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Delta", name: "Delta", embedded: false, exported: true, typ: d, tag: ""}]);
	d.init($Int32, 3);
	foldPair.init("", [{prop: "From", name: "From", embedded: false, exported: true, typ: $Uint16, tag: ""}, {prop: "To", name: "To", embedded: false, exported: true, typ: $Uint16, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		_L = new RangeTable.ptr(new sliceType([new Range16.ptr(65, 90, 1), new Range16.ptr(97, 122, 1), new Range16.ptr(170, 181, 11), new Range16.ptr(186, 192, 6), new Range16.ptr(193, 214, 1), new Range16.ptr(216, 246, 1), new Range16.ptr(248, 705, 1), new Range16.ptr(710, 721, 1), new Range16.ptr(736, 740, 1), new Range16.ptr(748, 750, 2), new Range16.ptr(880, 884, 1), new Range16.ptr(886, 887, 1), new Range16.ptr(890, 893, 1), new Range16.ptr(895, 902, 7), new Range16.ptr(904, 906, 1), new Range16.ptr(908, 910, 2), new Range16.ptr(911, 929, 1), new Range16.ptr(931, 1013, 1), new Range16.ptr(1015, 1153, 1), new Range16.ptr(1162, 1327, 1), new Range16.ptr(1329, 1366, 1), new Range16.ptr(1369, 1377, 8), new Range16.ptr(1378, 1415, 1), new Range16.ptr(1488, 1514, 1), new Range16.ptr(1520, 1522, 1), new Range16.ptr(1568, 1610, 1), new Range16.ptr(1646, 1647, 1), new Range16.ptr(1649, 1747, 1), new Range16.ptr(1749, 1765, 16), new Range16.ptr(1766, 1774, 8), new Range16.ptr(1775, 1786, 11), new Range16.ptr(1787, 1788, 1), new Range16.ptr(1791, 1808, 17), new Range16.ptr(1810, 1839, 1), new Range16.ptr(1869, 1957, 1), new Range16.ptr(1969, 1994, 25), new Range16.ptr(1995, 2026, 1), new Range16.ptr(2036, 2037, 1), new Range16.ptr(2042, 2048, 6), new Range16.ptr(2049, 2069, 1), new Range16.ptr(2074, 2084, 10), new Range16.ptr(2088, 2112, 24), new Range16.ptr(2113, 2136, 1), new Range16.ptr(2144, 2154, 1), new Range16.ptr(2208, 2228, 1), new Range16.ptr(2230, 2237, 1), new Range16.ptr(2308, 2361, 1), new Range16.ptr(2365, 2384, 19), new Range16.ptr(2392, 2401, 1), new Range16.ptr(2417, 2432, 1), new Range16.ptr(2437, 2444, 1), new Range16.ptr(2447, 2448, 1), new Range16.ptr(2451, 2472, 1), new Range16.ptr(2474, 2480, 1), new Range16.ptr(2482, 2486, 4), new Range16.ptr(2487, 2489, 1), new Range16.ptr(2493, 2510, 17), new Range16.ptr(2524, 2525, 1), new Range16.ptr(2527, 2529, 1), new Range16.ptr(2544, 2545, 1), new Range16.ptr(2556, 2565, 9), new Range16.ptr(2566, 2570, 1), new Range16.ptr(2575, 2576, 1), new Range16.ptr(2579, 2600, 1), new Range16.ptr(2602, 2608, 1), new Range16.ptr(2610, 2611, 1), new Range16.ptr(2613, 2614, 1), new Range16.ptr(2616, 2617, 1), new Range16.ptr(2649, 2652, 1), new Range16.ptr(2654, 2674, 20), new Range16.ptr(2675, 2676, 1), new Range16.ptr(2693, 2701, 1), new Range16.ptr(2703, 2705, 1), new Range16.ptr(2707, 2728, 1), new Range16.ptr(2730, 2736, 1), new Range16.ptr(2738, 2739, 1), new Range16.ptr(2741, 2745, 1), new Range16.ptr(2749, 2768, 19), new Range16.ptr(2784, 2785, 1), new Range16.ptr(2809, 2821, 12), new Range16.ptr(2822, 2828, 1), new Range16.ptr(2831, 2832, 1), new Range16.ptr(2835, 2856, 1), new Range16.ptr(2858, 2864, 1), new Range16.ptr(2866, 2867, 1), new Range16.ptr(2869, 2873, 1), new Range16.ptr(2877, 2908, 31), new Range16.ptr(2909, 2911, 2), new Range16.ptr(2912, 2913, 1), new Range16.ptr(2929, 2947, 18), new Range16.ptr(2949, 2954, 1), new Range16.ptr(2958, 2960, 1), new Range16.ptr(2962, 2965, 1), new Range16.ptr(2969, 2970, 1), new Range16.ptr(2972, 2974, 2), new Range16.ptr(2975, 2979, 4), new Range16.ptr(2980, 2984, 4), new Range16.ptr(2985, 2986, 1), new Range16.ptr(2990, 3001, 1), new Range16.ptr(3024, 3077, 53), new Range16.ptr(3078, 3084, 1), new Range16.ptr(3086, 3088, 1), new Range16.ptr(3090, 3112, 1), new Range16.ptr(3114, 3129, 1), new Range16.ptr(3133, 3160, 27), new Range16.ptr(3161, 3162, 1), new Range16.ptr(3168, 3169, 1), new Range16.ptr(3200, 3205, 5), new Range16.ptr(3206, 3212, 1), new Range16.ptr(3214, 3216, 1), new Range16.ptr(3218, 3240, 1), new Range16.ptr(3242, 3251, 1), new Range16.ptr(3253, 3257, 1), new Range16.ptr(3261, 3294, 33), new Range16.ptr(3296, 3297, 1), new Range16.ptr(3313, 3314, 1), new Range16.ptr(3333, 3340, 1), new Range16.ptr(3342, 3344, 1), new Range16.ptr(3346, 3386, 1), new Range16.ptr(3389, 3406, 17), new Range16.ptr(3412, 3414, 1), new Range16.ptr(3423, 3425, 1), new Range16.ptr(3450, 3455, 1), new Range16.ptr(3461, 3478, 1), new Range16.ptr(3482, 3505, 1), new Range16.ptr(3507, 3515, 1), new Range16.ptr(3517, 3520, 3), new Range16.ptr(3521, 3526, 1), new Range16.ptr(3585, 3632, 1), new Range16.ptr(3634, 3635, 1), new Range16.ptr(3648, 3654, 1), new Range16.ptr(3713, 3714, 1), new Range16.ptr(3716, 3719, 3), new Range16.ptr(3720, 3722, 2), new Range16.ptr(3725, 3732, 7), new Range16.ptr(3733, 3735, 1), new Range16.ptr(3737, 3743, 1), new Range16.ptr(3745, 3747, 1), new Range16.ptr(3749, 3751, 2), new Range16.ptr(3754, 3755, 1), new Range16.ptr(3757, 3760, 1), new Range16.ptr(3762, 3763, 1), new Range16.ptr(3773, 3776, 3), new Range16.ptr(3777, 3780, 1), new Range16.ptr(3782, 3804, 22), new Range16.ptr(3805, 3807, 1), new Range16.ptr(3840, 3904, 64), new Range16.ptr(3905, 3911, 1), new Range16.ptr(3913, 3948, 1), new Range16.ptr(3976, 3980, 1), new Range16.ptr(4096, 4138, 1), new Range16.ptr(4159, 4176, 17), new Range16.ptr(4177, 4181, 1), new Range16.ptr(4186, 4189, 1), new Range16.ptr(4193, 4197, 4), new Range16.ptr(4198, 4206, 8), new Range16.ptr(4207, 4208, 1), new Range16.ptr(4213, 4225, 1), new Range16.ptr(4238, 4256, 18), new Range16.ptr(4257, 4293, 1), new Range16.ptr(4295, 4301, 6), new Range16.ptr(4304, 4346, 1), new Range16.ptr(4348, 4680, 1), new Range16.ptr(4682, 4685, 1), new Range16.ptr(4688, 4694, 1), new Range16.ptr(4696, 4698, 2), new Range16.ptr(4699, 4701, 1), new Range16.ptr(4704, 4744, 1), new Range16.ptr(4746, 4749, 1), new Range16.ptr(4752, 4784, 1), new Range16.ptr(4786, 4789, 1), new Range16.ptr(4792, 4798, 1), new Range16.ptr(4800, 4802, 2), new Range16.ptr(4803, 4805, 1), new Range16.ptr(4808, 4822, 1), new Range16.ptr(4824, 4880, 1), new Range16.ptr(4882, 4885, 1), new Range16.ptr(4888, 4954, 1), new Range16.ptr(4992, 5007, 1), new Range16.ptr(5024, 5109, 1), new Range16.ptr(5112, 5117, 1), new Range16.ptr(5121, 5740, 1), new Range16.ptr(5743, 5759, 1), new Range16.ptr(5761, 5786, 1), new Range16.ptr(5792, 5866, 1), new Range16.ptr(5873, 5880, 1), new Range16.ptr(5888, 5900, 1), new Range16.ptr(5902, 5905, 1), new Range16.ptr(5920, 5937, 1), new Range16.ptr(5952, 5969, 1), new Range16.ptr(5984, 5996, 1), new Range16.ptr(5998, 6000, 1), new Range16.ptr(6016, 6067, 1), new Range16.ptr(6103, 6108, 5), new Range16.ptr(6176, 6263, 1), new Range16.ptr(6272, 6276, 1), new Range16.ptr(6279, 6312, 1), new Range16.ptr(6314, 6320, 6), new Range16.ptr(6321, 6389, 1), new Range16.ptr(6400, 6430, 1), new Range16.ptr(6480, 6509, 1), new Range16.ptr(6512, 6516, 1), new Range16.ptr(6528, 6571, 1), new Range16.ptr(6576, 6601, 1), new Range16.ptr(6656, 6678, 1), new Range16.ptr(6688, 6740, 1), new Range16.ptr(6823, 6917, 94), new Range16.ptr(6918, 6963, 1), new Range16.ptr(6981, 6987, 1), new Range16.ptr(7043, 7072, 1), new Range16.ptr(7086, 7087, 1), new Range16.ptr(7098, 7141, 1), new Range16.ptr(7168, 7203, 1), new Range16.ptr(7245, 7247, 1), new Range16.ptr(7258, 7293, 1), new Range16.ptr(7296, 7304, 1), new Range16.ptr(7401, 7404, 1), new Range16.ptr(7406, 7409, 1), new Range16.ptr(7413, 7414, 1), new Range16.ptr(7424, 7615, 1), new Range16.ptr(7680, 7957, 1), new Range16.ptr(7960, 7965, 1), new Range16.ptr(7968, 8005, 1), new Range16.ptr(8008, 8013, 1), new Range16.ptr(8016, 8023, 1), new Range16.ptr(8025, 8031, 2), new Range16.ptr(8032, 8061, 1), new Range16.ptr(8064, 8116, 1), new Range16.ptr(8118, 8124, 1), new Range16.ptr(8126, 8130, 4), new Range16.ptr(8131, 8132, 1), new Range16.ptr(8134, 8140, 1), new Range16.ptr(8144, 8147, 1), new Range16.ptr(8150, 8155, 1), new Range16.ptr(8160, 8172, 1), new Range16.ptr(8178, 8180, 1), new Range16.ptr(8182, 8188, 1), new Range16.ptr(8305, 8319, 14), new Range16.ptr(8336, 8348, 1), new Range16.ptr(8450, 8455, 5), new Range16.ptr(8458, 8467, 1), new Range16.ptr(8469, 8473, 4), new Range16.ptr(8474, 8477, 1), new Range16.ptr(8484, 8490, 2), new Range16.ptr(8491, 8493, 1), new Range16.ptr(8495, 8505, 1), new Range16.ptr(8508, 8511, 1), new Range16.ptr(8517, 8521, 1), new Range16.ptr(8526, 8579, 53), new Range16.ptr(8580, 11264, 2684), new Range16.ptr(11265, 11310, 1), new Range16.ptr(11312, 11358, 1), new Range16.ptr(11360, 11492, 1), new Range16.ptr(11499, 11502, 1), new Range16.ptr(11506, 11507, 1), new Range16.ptr(11520, 11557, 1), new Range16.ptr(11559, 11565, 6), new Range16.ptr(11568, 11623, 1), new Range16.ptr(11631, 11648, 17), new Range16.ptr(11649, 11670, 1), new Range16.ptr(11680, 11686, 1), new Range16.ptr(11688, 11694, 1), new Range16.ptr(11696, 11702, 1), new Range16.ptr(11704, 11710, 1), new Range16.ptr(11712, 11718, 1), new Range16.ptr(11720, 11726, 1), new Range16.ptr(11728, 11734, 1), new Range16.ptr(11736, 11742, 1), new Range16.ptr(11823, 12293, 470), new Range16.ptr(12294, 12337, 43), new Range16.ptr(12338, 12341, 1), new Range16.ptr(12347, 12348, 1), new Range16.ptr(12353, 12438, 1), new Range16.ptr(12445, 12447, 1), new Range16.ptr(12449, 12538, 1), new Range16.ptr(12540, 12543, 1), new Range16.ptr(12549, 12590, 1), new Range16.ptr(12593, 12686, 1), new Range16.ptr(12704, 12730, 1), new Range16.ptr(12784, 12799, 1), new Range16.ptr(13312, 19893, 1), new Range16.ptr(19968, 40938, 1), new Range16.ptr(40960, 42124, 1), new Range16.ptr(42192, 42237, 1), new Range16.ptr(42240, 42508, 1), new Range16.ptr(42512, 42527, 1), new Range16.ptr(42538, 42539, 1), new Range16.ptr(42560, 42606, 1), new Range16.ptr(42623, 42653, 1), new Range16.ptr(42656, 42725, 1), new Range16.ptr(42775, 42783, 1), new Range16.ptr(42786, 42888, 1), new Range16.ptr(42891, 42926, 1), new Range16.ptr(42928, 42935, 1), new Range16.ptr(42999, 43009, 1), new Range16.ptr(43011, 43013, 1), new Range16.ptr(43015, 43018, 1), new Range16.ptr(43020, 43042, 1), new Range16.ptr(43072, 43123, 1), new Range16.ptr(43138, 43187, 1), new Range16.ptr(43250, 43255, 1), new Range16.ptr(43259, 43261, 2), new Range16.ptr(43274, 43301, 1), new Range16.ptr(43312, 43334, 1), new Range16.ptr(43360, 43388, 1), new Range16.ptr(43396, 43442, 1), new Range16.ptr(43471, 43488, 17), new Range16.ptr(43489, 43492, 1), new Range16.ptr(43494, 43503, 1), new Range16.ptr(43514, 43518, 1), new Range16.ptr(43520, 43560, 1), new Range16.ptr(43584, 43586, 1), new Range16.ptr(43588, 43595, 1), new Range16.ptr(43616, 43638, 1), new Range16.ptr(43642, 43646, 4), new Range16.ptr(43647, 43695, 1), new Range16.ptr(43697, 43701, 4), new Range16.ptr(43702, 43705, 3), new Range16.ptr(43706, 43709, 1), new Range16.ptr(43712, 43714, 2), new Range16.ptr(43739, 43741, 1), new Range16.ptr(43744, 43754, 1), new Range16.ptr(43762, 43764, 1), new Range16.ptr(43777, 43782, 1), new Range16.ptr(43785, 43790, 1), new Range16.ptr(43793, 43798, 1), new Range16.ptr(43808, 43814, 1), new Range16.ptr(43816, 43822, 1), new Range16.ptr(43824, 43866, 1), new Range16.ptr(43868, 43877, 1), new Range16.ptr(43888, 44002, 1), new Range16.ptr(44032, 55203, 1), new Range16.ptr(55216, 55238, 1), new Range16.ptr(55243, 55291, 1), new Range16.ptr(63744, 64109, 1), new Range16.ptr(64112, 64217, 1), new Range16.ptr(64256, 64262, 1), new Range16.ptr(64275, 64279, 1), new Range16.ptr(64285, 64287, 2), new Range16.ptr(64288, 64296, 1), new Range16.ptr(64298, 64310, 1), new Range16.ptr(64312, 64316, 1), new Range16.ptr(64318, 64320, 2), new Range16.ptr(64321, 64323, 2), new Range16.ptr(64324, 64326, 2), new Range16.ptr(64327, 64433, 1), new Range16.ptr(64467, 64829, 1), new Range16.ptr(64848, 64911, 1), new Range16.ptr(64914, 64967, 1), new Range16.ptr(65008, 65019, 1), new Range16.ptr(65136, 65140, 1), new Range16.ptr(65142, 65276, 1), new Range16.ptr(65313, 65338, 1), new Range16.ptr(65345, 65370, 1), new Range16.ptr(65382, 65470, 1), new Range16.ptr(65474, 65479, 1), new Range16.ptr(65482, 65487, 1), new Range16.ptr(65490, 65495, 1), new Range16.ptr(65498, 65500, 1)]), new sliceType$1([new Range32.ptr(65536, 65547, 1), new Range32.ptr(65549, 65574, 1), new Range32.ptr(65576, 65594, 1), new Range32.ptr(65596, 65597, 1), new Range32.ptr(65599, 65613, 1), new Range32.ptr(65616, 65629, 1), new Range32.ptr(65664, 65786, 1), new Range32.ptr(66176, 66204, 1), new Range32.ptr(66208, 66256, 1), new Range32.ptr(66304, 66335, 1), new Range32.ptr(66349, 66368, 1), new Range32.ptr(66370, 66377, 1), new Range32.ptr(66384, 66421, 1), new Range32.ptr(66432, 66461, 1), new Range32.ptr(66464, 66499, 1), new Range32.ptr(66504, 66511, 1), new Range32.ptr(66560, 66717, 1), new Range32.ptr(66736, 66771, 1), new Range32.ptr(66776, 66811, 1), new Range32.ptr(66816, 66855, 1), new Range32.ptr(66864, 66915, 1), new Range32.ptr(67072, 67382, 1), new Range32.ptr(67392, 67413, 1), new Range32.ptr(67424, 67431, 1), new Range32.ptr(67584, 67589, 1), new Range32.ptr(67592, 67594, 2), new Range32.ptr(67595, 67637, 1), new Range32.ptr(67639, 67640, 1), new Range32.ptr(67644, 67647, 3), new Range32.ptr(67648, 67669, 1), new Range32.ptr(67680, 67702, 1), new Range32.ptr(67712, 67742, 1), new Range32.ptr(67808, 67826, 1), new Range32.ptr(67828, 67829, 1), new Range32.ptr(67840, 67861, 1), new Range32.ptr(67872, 67897, 1), new Range32.ptr(67968, 68023, 1), new Range32.ptr(68030, 68031, 1), new Range32.ptr(68096, 68112, 16), new Range32.ptr(68113, 68115, 1), new Range32.ptr(68117, 68119, 1), new Range32.ptr(68121, 68147, 1), new Range32.ptr(68192, 68220, 1), new Range32.ptr(68224, 68252, 1), new Range32.ptr(68288, 68295, 1), new Range32.ptr(68297, 68324, 1), new Range32.ptr(68352, 68405, 1), new Range32.ptr(68416, 68437, 1), new Range32.ptr(68448, 68466, 1), new Range32.ptr(68480, 68497, 1), new Range32.ptr(68608, 68680, 1), new Range32.ptr(68736, 68786, 1), new Range32.ptr(68800, 68850, 1), new Range32.ptr(69635, 69687, 1), new Range32.ptr(69763, 69807, 1), new Range32.ptr(69840, 69864, 1), new Range32.ptr(69891, 69926, 1), new Range32.ptr(69968, 70002, 1), new Range32.ptr(70006, 70019, 13), new Range32.ptr(70020, 70066, 1), new Range32.ptr(70081, 70084, 1), new Range32.ptr(70106, 70108, 2), new Range32.ptr(70144, 70161, 1), new Range32.ptr(70163, 70187, 1), new Range32.ptr(70272, 70278, 1), new Range32.ptr(70280, 70282, 2), new Range32.ptr(70283, 70285, 1), new Range32.ptr(70287, 70301, 1), new Range32.ptr(70303, 70312, 1), new Range32.ptr(70320, 70366, 1), new Range32.ptr(70405, 70412, 1), new Range32.ptr(70415, 70416, 1), new Range32.ptr(70419, 70440, 1), new Range32.ptr(70442, 70448, 1), new Range32.ptr(70450, 70451, 1), new Range32.ptr(70453, 70457, 1), new Range32.ptr(70461, 70480, 19), new Range32.ptr(70493, 70497, 1), new Range32.ptr(70656, 70708, 1), new Range32.ptr(70727, 70730, 1), new Range32.ptr(70784, 70831, 1), new Range32.ptr(70852, 70853, 1), new Range32.ptr(70855, 71040, 185), new Range32.ptr(71041, 71086, 1), new Range32.ptr(71128, 71131, 1), new Range32.ptr(71168, 71215, 1), new Range32.ptr(71236, 71296, 60), new Range32.ptr(71297, 71338, 1), new Range32.ptr(71424, 71449, 1), new Range32.ptr(71840, 71903, 1), new Range32.ptr(71935, 72192, 257), new Range32.ptr(72203, 72242, 1), new Range32.ptr(72250, 72272, 22), new Range32.ptr(72284, 72323, 1), new Range32.ptr(72326, 72329, 1), new Range32.ptr(72384, 72440, 1), new Range32.ptr(72704, 72712, 1), new Range32.ptr(72714, 72750, 1), new Range32.ptr(72768, 72818, 50), new Range32.ptr(72819, 72847, 1), new Range32.ptr(72960, 72966, 1), new Range32.ptr(72968, 72969, 1), new Range32.ptr(72971, 73008, 1), new Range32.ptr(73030, 73728, 698), new Range32.ptr(73729, 74649, 1), new Range32.ptr(74880, 75075, 1), new Range32.ptr(77824, 78894, 1), new Range32.ptr(82944, 83526, 1), new Range32.ptr(92160, 92728, 1), new Range32.ptr(92736, 92766, 1), new Range32.ptr(92880, 92909, 1), new Range32.ptr(92928, 92975, 1), new Range32.ptr(92992, 92995, 1), new Range32.ptr(93027, 93047, 1), new Range32.ptr(93053, 93071, 1), new Range32.ptr(93952, 94020, 1), new Range32.ptr(94032, 94099, 67), new Range32.ptr(94100, 94111, 1), new Range32.ptr(94176, 94177, 1), new Range32.ptr(94208, 100332, 1), new Range32.ptr(100352, 101106, 1), new Range32.ptr(110592, 110878, 1), new Range32.ptr(110960, 111355, 1), new Range32.ptr(113664, 113770, 1), new Range32.ptr(113776, 113788, 1), new Range32.ptr(113792, 113800, 1), new Range32.ptr(113808, 113817, 1), new Range32.ptr(119808, 119892, 1), new Range32.ptr(119894, 119964, 1), new Range32.ptr(119966, 119967, 1), new Range32.ptr(119970, 119973, 3), new Range32.ptr(119974, 119977, 3), new Range32.ptr(119978, 119980, 1), new Range32.ptr(119982, 119993, 1), new Range32.ptr(119995, 119997, 2), new Range32.ptr(119998, 120003, 1), new Range32.ptr(120005, 120069, 1), new Range32.ptr(120071, 120074, 1), new Range32.ptr(120077, 120084, 1), new Range32.ptr(120086, 120092, 1), new Range32.ptr(120094, 120121, 1), new Range32.ptr(120123, 120126, 1), new Range32.ptr(120128, 120132, 1), new Range32.ptr(120134, 120138, 4), new Range32.ptr(120139, 120144, 1), new Range32.ptr(120146, 120485, 1), new Range32.ptr(120488, 120512, 1), new Range32.ptr(120514, 120538, 1), new Range32.ptr(120540, 120570, 1), new Range32.ptr(120572, 120596, 1), new Range32.ptr(120598, 120628, 1), new Range32.ptr(120630, 120654, 1), new Range32.ptr(120656, 120686, 1), new Range32.ptr(120688, 120712, 1), new Range32.ptr(120714, 120744, 1), new Range32.ptr(120746, 120770, 1), new Range32.ptr(120772, 120779, 1), new Range32.ptr(124928, 125124, 1), new Range32.ptr(125184, 125251, 1), new Range32.ptr(126464, 126467, 1), new Range32.ptr(126469, 126495, 1), new Range32.ptr(126497, 126498, 1), new Range32.ptr(126500, 126503, 3), new Range32.ptr(126505, 126514, 1), new Range32.ptr(126516, 126519, 1), new Range32.ptr(126521, 126523, 2), new Range32.ptr(126530, 126535, 5), new Range32.ptr(126537, 126541, 2), new Range32.ptr(126542, 126543, 1), new Range32.ptr(126545, 126546, 1), new Range32.ptr(126548, 126551, 3), new Range32.ptr(126553, 126561, 2), new Range32.ptr(126562, 126564, 2), new Range32.ptr(126567, 126570, 1), new Range32.ptr(126572, 126578, 1), new Range32.ptr(126580, 126583, 1), new Range32.ptr(126585, 126588, 1), new Range32.ptr(126590, 126592, 2), new Range32.ptr(126593, 126601, 1), new Range32.ptr(126603, 126619, 1), new Range32.ptr(126625, 126627, 1), new Range32.ptr(126629, 126633, 1), new Range32.ptr(126635, 126651, 1), new Range32.ptr(131072, 173782, 1), new Range32.ptr(173824, 177972, 1), new Range32.ptr(177984, 178205, 1), new Range32.ptr(178208, 183969, 1), new Range32.ptr(183984, 191456, 1), new Range32.ptr(194560, 195101, 1)]), 6);
		_Nd = new RangeTable.ptr(new sliceType([new Range16.ptr(48, 57, 1), new Range16.ptr(1632, 1641, 1), new Range16.ptr(1776, 1785, 1), new Range16.ptr(1984, 1993, 1), new Range16.ptr(2406, 2415, 1), new Range16.ptr(2534, 2543, 1), new Range16.ptr(2662, 2671, 1), new Range16.ptr(2790, 2799, 1), new Range16.ptr(2918, 2927, 1), new Range16.ptr(3046, 3055, 1), new Range16.ptr(3174, 3183, 1), new Range16.ptr(3302, 3311, 1), new Range16.ptr(3430, 3439, 1), new Range16.ptr(3558, 3567, 1), new Range16.ptr(3664, 3673, 1), new Range16.ptr(3792, 3801, 1), new Range16.ptr(3872, 3881, 1), new Range16.ptr(4160, 4169, 1), new Range16.ptr(4240, 4249, 1), new Range16.ptr(6112, 6121, 1), new Range16.ptr(6160, 6169, 1), new Range16.ptr(6470, 6479, 1), new Range16.ptr(6608, 6617, 1), new Range16.ptr(6784, 6793, 1), new Range16.ptr(6800, 6809, 1), new Range16.ptr(6992, 7001, 1), new Range16.ptr(7088, 7097, 1), new Range16.ptr(7232, 7241, 1), new Range16.ptr(7248, 7257, 1), new Range16.ptr(42528, 42537, 1), new Range16.ptr(43216, 43225, 1), new Range16.ptr(43264, 43273, 1), new Range16.ptr(43472, 43481, 1), new Range16.ptr(43504, 43513, 1), new Range16.ptr(43600, 43609, 1), new Range16.ptr(44016, 44025, 1), new Range16.ptr(65296, 65305, 1)]), new sliceType$1([new Range32.ptr(66720, 66729, 1), new Range32.ptr(69734, 69743, 1), new Range32.ptr(69872, 69881, 1), new Range32.ptr(69942, 69951, 1), new Range32.ptr(70096, 70105, 1), new Range32.ptr(70384, 70393, 1), new Range32.ptr(70736, 70745, 1), new Range32.ptr(70864, 70873, 1), new Range32.ptr(71248, 71257, 1), new Range32.ptr(71360, 71369, 1), new Range32.ptr(71472, 71481, 1), new Range32.ptr(71904, 71913, 1), new Range32.ptr(72784, 72793, 1), new Range32.ptr(73040, 73049, 1), new Range32.ptr(92768, 92777, 1), new Range32.ptr(93008, 93017, 1), new Range32.ptr(120782, 120831, 1), new Range32.ptr(125264, 125273, 1)]), 1);
		$pkg.Digit = _Nd;
		$pkg.Letter = _L;
		_CaseRanges = new sliceType$3([new CaseRange.ptr(65, 90, $toNativeArray($kindInt32, [0, 32, 0])), new CaseRange.ptr(97, 122, $toNativeArray($kindInt32, [-32, 0, -32])), new CaseRange.ptr(181, 181, $toNativeArray($kindInt32, [743, 0, 743])), new CaseRange.ptr(192, 214, $toNativeArray($kindInt32, [0, 32, 0])), new CaseRange.ptr(216, 222, $toNativeArray($kindInt32, [0, 32, 0])), new CaseRange.ptr(224, 246, $toNativeArray($kindInt32, [-32, 0, -32])), new CaseRange.ptr(248, 254, $toNativeArray($kindInt32, [-32, 0, -32])), new CaseRange.ptr(255, 255, $toNativeArray($kindInt32, [121, 0, 121])), new CaseRange.ptr(256, 303, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(304, 304, $toNativeArray($kindInt32, [0, -199, 0])), new CaseRange.ptr(305, 305, $toNativeArray($kindInt32, [-232, 0, -232])), new CaseRange.ptr(306, 311, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(313, 328, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(330, 375, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(376, 376, $toNativeArray($kindInt32, [0, -121, 0])), new CaseRange.ptr(377, 382, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(383, 383, $toNativeArray($kindInt32, [-300, 0, -300])), new CaseRange.ptr(384, 384, $toNativeArray($kindInt32, [195, 0, 195])), new CaseRange.ptr(385, 385, $toNativeArray($kindInt32, [0, 210, 0])), new CaseRange.ptr(386, 389, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(390, 390, $toNativeArray($kindInt32, [0, 206, 0])), new CaseRange.ptr(391, 392, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(393, 394, $toNativeArray($kindInt32, [0, 205, 0])), new CaseRange.ptr(395, 396, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(398, 398, $toNativeArray($kindInt32, [0, 79, 0])), new CaseRange.ptr(399, 399, $toNativeArray($kindInt32, [0, 202, 0])), new CaseRange.ptr(400, 400, $toNativeArray($kindInt32, [0, 203, 0])), new CaseRange.ptr(401, 402, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(403, 403, $toNativeArray($kindInt32, [0, 205, 0])), new CaseRange.ptr(404, 404, $toNativeArray($kindInt32, [0, 207, 0])), new CaseRange.ptr(405, 405, $toNativeArray($kindInt32, [97, 0, 97])), new CaseRange.ptr(406, 406, $toNativeArray($kindInt32, [0, 211, 0])), new CaseRange.ptr(407, 407, $toNativeArray($kindInt32, [0, 209, 0])), new CaseRange.ptr(408, 409, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(410, 410, $toNativeArray($kindInt32, [163, 0, 163])), new CaseRange.ptr(412, 412, $toNativeArray($kindInt32, [0, 211, 0])), new CaseRange.ptr(413, 413, $toNativeArray($kindInt32, [0, 213, 0])), new CaseRange.ptr(414, 414, $toNativeArray($kindInt32, [130, 0, 130])), new CaseRange.ptr(415, 415, $toNativeArray($kindInt32, [0, 214, 0])), new CaseRange.ptr(416, 421, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(422, 422, $toNativeArray($kindInt32, [0, 218, 0])), new CaseRange.ptr(423, 424, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(425, 425, $toNativeArray($kindInt32, [0, 218, 0])), new CaseRange.ptr(428, 429, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(430, 430, $toNativeArray($kindInt32, [0, 218, 0])), new CaseRange.ptr(431, 432, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(433, 434, $toNativeArray($kindInt32, [0, 217, 0])), new CaseRange.ptr(435, 438, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(439, 439, $toNativeArray($kindInt32, [0, 219, 0])), new CaseRange.ptr(440, 441, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(444, 445, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(447, 447, $toNativeArray($kindInt32, [56, 0, 56])), new CaseRange.ptr(452, 452, $toNativeArray($kindInt32, [0, 2, 1])), new CaseRange.ptr(453, 453, $toNativeArray($kindInt32, [-1, 1, 0])), new CaseRange.ptr(454, 454, $toNativeArray($kindInt32, [-2, 0, -1])), new CaseRange.ptr(455, 455, $toNativeArray($kindInt32, [0, 2, 1])), new CaseRange.ptr(456, 456, $toNativeArray($kindInt32, [-1, 1, 0])), new CaseRange.ptr(457, 457, $toNativeArray($kindInt32, [-2, 0, -1])), new CaseRange.ptr(458, 458, $toNativeArray($kindInt32, [0, 2, 1])), new CaseRange.ptr(459, 459, $toNativeArray($kindInt32, [-1, 1, 0])), new CaseRange.ptr(460, 460, $toNativeArray($kindInt32, [-2, 0, -1])), new CaseRange.ptr(461, 476, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(477, 477, $toNativeArray($kindInt32, [-79, 0, -79])), new CaseRange.ptr(478, 495, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(497, 497, $toNativeArray($kindInt32, [0, 2, 1])), new CaseRange.ptr(498, 498, $toNativeArray($kindInt32, [-1, 1, 0])), new CaseRange.ptr(499, 499, $toNativeArray($kindInt32, [-2, 0, -1])), new CaseRange.ptr(500, 501, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(502, 502, $toNativeArray($kindInt32, [0, -97, 0])), new CaseRange.ptr(503, 503, $toNativeArray($kindInt32, [0, -56, 0])), new CaseRange.ptr(504, 543, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(544, 544, $toNativeArray($kindInt32, [0, -130, 0])), new CaseRange.ptr(546, 563, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(570, 570, $toNativeArray($kindInt32, [0, 10795, 0])), new CaseRange.ptr(571, 572, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(573, 573, $toNativeArray($kindInt32, [0, -163, 0])), new CaseRange.ptr(574, 574, $toNativeArray($kindInt32, [0, 10792, 0])), new CaseRange.ptr(575, 576, $toNativeArray($kindInt32, [10815, 0, 10815])), new CaseRange.ptr(577, 578, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(579, 579, $toNativeArray($kindInt32, [0, -195, 0])), new CaseRange.ptr(580, 580, $toNativeArray($kindInt32, [0, 69, 0])), new CaseRange.ptr(581, 581, $toNativeArray($kindInt32, [0, 71, 0])), new CaseRange.ptr(582, 591, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(592, 592, $toNativeArray($kindInt32, [10783, 0, 10783])), new CaseRange.ptr(593, 593, $toNativeArray($kindInt32, [10780, 0, 10780])), new CaseRange.ptr(594, 594, $toNativeArray($kindInt32, [10782, 0, 10782])), new CaseRange.ptr(595, 595, $toNativeArray($kindInt32, [-210, 0, -210])), new CaseRange.ptr(596, 596, $toNativeArray($kindInt32, [-206, 0, -206])), new CaseRange.ptr(598, 599, $toNativeArray($kindInt32, [-205, 0, -205])), new CaseRange.ptr(601, 601, $toNativeArray($kindInt32, [-202, 0, -202])), new CaseRange.ptr(603, 603, $toNativeArray($kindInt32, [-203, 0, -203])), new CaseRange.ptr(604, 604, $toNativeArray($kindInt32, [42319, 0, 42319])), new CaseRange.ptr(608, 608, $toNativeArray($kindInt32, [-205, 0, -205])), new CaseRange.ptr(609, 609, $toNativeArray($kindInt32, [42315, 0, 42315])), new CaseRange.ptr(611, 611, $toNativeArray($kindInt32, [-207, 0, -207])), new CaseRange.ptr(613, 613, $toNativeArray($kindInt32, [42280, 0, 42280])), new CaseRange.ptr(614, 614, $toNativeArray($kindInt32, [42308, 0, 42308])), new CaseRange.ptr(616, 616, $toNativeArray($kindInt32, [-209, 0, -209])), new CaseRange.ptr(617, 617, $toNativeArray($kindInt32, [-211, 0, -211])), new CaseRange.ptr(618, 618, $toNativeArray($kindInt32, [42308, 0, 42308])), new CaseRange.ptr(619, 619, $toNativeArray($kindInt32, [10743, 0, 10743])), new CaseRange.ptr(620, 620, $toNativeArray($kindInt32, [42305, 0, 42305])), new CaseRange.ptr(623, 623, $toNativeArray($kindInt32, [-211, 0, -211])), new CaseRange.ptr(625, 625, $toNativeArray($kindInt32, [10749, 0, 10749])), new CaseRange.ptr(626, 626, $toNativeArray($kindInt32, [-213, 0, -213])), new CaseRange.ptr(629, 629, $toNativeArray($kindInt32, [-214, 0, -214])), new CaseRange.ptr(637, 637, $toNativeArray($kindInt32, [10727, 0, 10727])), new CaseRange.ptr(640, 640, $toNativeArray($kindInt32, [-218, 0, -218])), new CaseRange.ptr(643, 643, $toNativeArray($kindInt32, [-218, 0, -218])), new CaseRange.ptr(647, 647, $toNativeArray($kindInt32, [42282, 0, 42282])), new CaseRange.ptr(648, 648, $toNativeArray($kindInt32, [-218, 0, -218])), new CaseRange.ptr(649, 649, $toNativeArray($kindInt32, [-69, 0, -69])), new CaseRange.ptr(650, 651, $toNativeArray($kindInt32, [-217, 0, -217])), new CaseRange.ptr(652, 652, $toNativeArray($kindInt32, [-71, 0, -71])), new CaseRange.ptr(658, 658, $toNativeArray($kindInt32, [-219, 0, -219])), new CaseRange.ptr(669, 669, $toNativeArray($kindInt32, [42261, 0, 42261])), new CaseRange.ptr(670, 670, $toNativeArray($kindInt32, [42258, 0, 42258])), new CaseRange.ptr(837, 837, $toNativeArray($kindInt32, [84, 0, 84])), new CaseRange.ptr(880, 883, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(886, 887, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(891, 893, $toNativeArray($kindInt32, [130, 0, 130])), new CaseRange.ptr(895, 895, $toNativeArray($kindInt32, [0, 116, 0])), new CaseRange.ptr(902, 902, $toNativeArray($kindInt32, [0, 38, 0])), new CaseRange.ptr(904, 906, $toNativeArray($kindInt32, [0, 37, 0])), new CaseRange.ptr(908, 908, $toNativeArray($kindInt32, [0, 64, 0])), new CaseRange.ptr(910, 911, $toNativeArray($kindInt32, [0, 63, 0])), new CaseRange.ptr(913, 929, $toNativeArray($kindInt32, [0, 32, 0])), new CaseRange.ptr(931, 939, $toNativeArray($kindInt32, [0, 32, 0])), new CaseRange.ptr(940, 940, $toNativeArray($kindInt32, [-38, 0, -38])), new CaseRange.ptr(941, 943, $toNativeArray($kindInt32, [-37, 0, -37])), new CaseRange.ptr(945, 961, $toNativeArray($kindInt32, [-32, 0, -32])), new CaseRange.ptr(962, 962, $toNativeArray($kindInt32, [-31, 0, -31])), new CaseRange.ptr(963, 971, $toNativeArray($kindInt32, [-32, 0, -32])), new CaseRange.ptr(972, 972, $toNativeArray($kindInt32, [-64, 0, -64])), new CaseRange.ptr(973, 974, $toNativeArray($kindInt32, [-63, 0, -63])), new CaseRange.ptr(975, 975, $toNativeArray($kindInt32, [0, 8, 0])), new CaseRange.ptr(976, 976, $toNativeArray($kindInt32, [-62, 0, -62])), new CaseRange.ptr(977, 977, $toNativeArray($kindInt32, [-57, 0, -57])), new CaseRange.ptr(981, 981, $toNativeArray($kindInt32, [-47, 0, -47])), new CaseRange.ptr(982, 982, $toNativeArray($kindInt32, [-54, 0, -54])), new CaseRange.ptr(983, 983, $toNativeArray($kindInt32, [-8, 0, -8])), new CaseRange.ptr(984, 1007, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(1008, 1008, $toNativeArray($kindInt32, [-86, 0, -86])), new CaseRange.ptr(1009, 1009, $toNativeArray($kindInt32, [-80, 0, -80])), new CaseRange.ptr(1010, 1010, $toNativeArray($kindInt32, [7, 0, 7])), new CaseRange.ptr(1011, 1011, $toNativeArray($kindInt32, [-116, 0, -116])), new CaseRange.ptr(1012, 1012, $toNativeArray($kindInt32, [0, -60, 0])), new CaseRange.ptr(1013, 1013, $toNativeArray($kindInt32, [-96, 0, -96])), new CaseRange.ptr(1015, 1016, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(1017, 1017, $toNativeArray($kindInt32, [0, -7, 0])), new CaseRange.ptr(1018, 1019, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(1021, 1023, $toNativeArray($kindInt32, [0, -130, 0])), new CaseRange.ptr(1024, 1039, $toNativeArray($kindInt32, [0, 80, 0])), new CaseRange.ptr(1040, 1071, $toNativeArray($kindInt32, [0, 32, 0])), new CaseRange.ptr(1072, 1103, $toNativeArray($kindInt32, [-32, 0, -32])), new CaseRange.ptr(1104, 1119, $toNativeArray($kindInt32, [-80, 0, -80])), new CaseRange.ptr(1120, 1153, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(1162, 1215, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(1216, 1216, $toNativeArray($kindInt32, [0, 15, 0])), new CaseRange.ptr(1217, 1230, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(1231, 1231, $toNativeArray($kindInt32, [-15, 0, -15])), new CaseRange.ptr(1232, 1327, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(1329, 1366, $toNativeArray($kindInt32, [0, 48, 0])), new CaseRange.ptr(1377, 1414, $toNativeArray($kindInt32, [-48, 0, -48])), new CaseRange.ptr(4256, 4293, $toNativeArray($kindInt32, [0, 7264, 0])), new CaseRange.ptr(4295, 4295, $toNativeArray($kindInt32, [0, 7264, 0])), new CaseRange.ptr(4301, 4301, $toNativeArray($kindInt32, [0, 7264, 0])), new CaseRange.ptr(5024, 5103, $toNativeArray($kindInt32, [0, 38864, 0])), new CaseRange.ptr(5104, 5109, $toNativeArray($kindInt32, [0, 8, 0])), new CaseRange.ptr(5112, 5117, $toNativeArray($kindInt32, [-8, 0, -8])), new CaseRange.ptr(7296, 7296, $toNativeArray($kindInt32, [-6254, 0, -6254])), new CaseRange.ptr(7297, 7297, $toNativeArray($kindInt32, [-6253, 0, -6253])), new CaseRange.ptr(7298, 7298, $toNativeArray($kindInt32, [-6244, 0, -6244])), new CaseRange.ptr(7299, 7300, $toNativeArray($kindInt32, [-6242, 0, -6242])), new CaseRange.ptr(7301, 7301, $toNativeArray($kindInt32, [-6243, 0, -6243])), new CaseRange.ptr(7302, 7302, $toNativeArray($kindInt32, [-6236, 0, -6236])), new CaseRange.ptr(7303, 7303, $toNativeArray($kindInt32, [-6181, 0, -6181])), new CaseRange.ptr(7304, 7304, $toNativeArray($kindInt32, [35266, 0, 35266])), new CaseRange.ptr(7545, 7545, $toNativeArray($kindInt32, [35332, 0, 35332])), new CaseRange.ptr(7549, 7549, $toNativeArray($kindInt32, [3814, 0, 3814])), new CaseRange.ptr(7680, 7829, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(7835, 7835, $toNativeArray($kindInt32, [-59, 0, -59])), new CaseRange.ptr(7838, 7838, $toNativeArray($kindInt32, [0, -7615, 0])), new CaseRange.ptr(7840, 7935, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(7936, 7943, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(7944, 7951, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(7952, 7957, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(7960, 7965, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(7968, 7975, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(7976, 7983, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(7984, 7991, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(7992, 7999, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(8000, 8005, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(8008, 8013, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(8017, 8017, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(8019, 8019, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(8021, 8021, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(8023, 8023, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(8025, 8025, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(8027, 8027, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(8029, 8029, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(8031, 8031, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(8032, 8039, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(8040, 8047, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(8048, 8049, $toNativeArray($kindInt32, [74, 0, 74])), new CaseRange.ptr(8050, 8053, $toNativeArray($kindInt32, [86, 0, 86])), new CaseRange.ptr(8054, 8055, $toNativeArray($kindInt32, [100, 0, 100])), new CaseRange.ptr(8056, 8057, $toNativeArray($kindInt32, [128, 0, 128])), new CaseRange.ptr(8058, 8059, $toNativeArray($kindInt32, [112, 0, 112])), new CaseRange.ptr(8060, 8061, $toNativeArray($kindInt32, [126, 0, 126])), new CaseRange.ptr(8064, 8071, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(8072, 8079, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(8080, 8087, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(8088, 8095, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(8096, 8103, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(8104, 8111, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(8112, 8113, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(8115, 8115, $toNativeArray($kindInt32, [9, 0, 9])), new CaseRange.ptr(8120, 8121, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(8122, 8123, $toNativeArray($kindInt32, [0, -74, 0])), new CaseRange.ptr(8124, 8124, $toNativeArray($kindInt32, [0, -9, 0])), new CaseRange.ptr(8126, 8126, $toNativeArray($kindInt32, [-7205, 0, -7205])), new CaseRange.ptr(8131, 8131, $toNativeArray($kindInt32, [9, 0, 9])), new CaseRange.ptr(8136, 8139, $toNativeArray($kindInt32, [0, -86, 0])), new CaseRange.ptr(8140, 8140, $toNativeArray($kindInt32, [0, -9, 0])), new CaseRange.ptr(8144, 8145, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(8152, 8153, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(8154, 8155, $toNativeArray($kindInt32, [0, -100, 0])), new CaseRange.ptr(8160, 8161, $toNativeArray($kindInt32, [8, 0, 8])), new CaseRange.ptr(8165, 8165, $toNativeArray($kindInt32, [7, 0, 7])), new CaseRange.ptr(8168, 8169, $toNativeArray($kindInt32, [0, -8, 0])), new CaseRange.ptr(8170, 8171, $toNativeArray($kindInt32, [0, -112, 0])), new CaseRange.ptr(8172, 8172, $toNativeArray($kindInt32, [0, -7, 0])), new CaseRange.ptr(8179, 8179, $toNativeArray($kindInt32, [9, 0, 9])), new CaseRange.ptr(8184, 8185, $toNativeArray($kindInt32, [0, -128, 0])), new CaseRange.ptr(8186, 8187, $toNativeArray($kindInt32, [0, -126, 0])), new CaseRange.ptr(8188, 8188, $toNativeArray($kindInt32, [0, -9, 0])), new CaseRange.ptr(8486, 8486, $toNativeArray($kindInt32, [0, -7517, 0])), new CaseRange.ptr(8490, 8490, $toNativeArray($kindInt32, [0, -8383, 0])), new CaseRange.ptr(8491, 8491, $toNativeArray($kindInt32, [0, -8262, 0])), new CaseRange.ptr(8498, 8498, $toNativeArray($kindInt32, [0, 28, 0])), new CaseRange.ptr(8526, 8526, $toNativeArray($kindInt32, [-28, 0, -28])), new CaseRange.ptr(8544, 8559, $toNativeArray($kindInt32, [0, 16, 0])), new CaseRange.ptr(8560, 8575, $toNativeArray($kindInt32, [-16, 0, -16])), new CaseRange.ptr(8579, 8580, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(9398, 9423, $toNativeArray($kindInt32, [0, 26, 0])), new CaseRange.ptr(9424, 9449, $toNativeArray($kindInt32, [-26, 0, -26])), new CaseRange.ptr(11264, 11310, $toNativeArray($kindInt32, [0, 48, 0])), new CaseRange.ptr(11312, 11358, $toNativeArray($kindInt32, [-48, 0, -48])), new CaseRange.ptr(11360, 11361, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(11362, 11362, $toNativeArray($kindInt32, [0, -10743, 0])), new CaseRange.ptr(11363, 11363, $toNativeArray($kindInt32, [0, -3814, 0])), new CaseRange.ptr(11364, 11364, $toNativeArray($kindInt32, [0, -10727, 0])), new CaseRange.ptr(11365, 11365, $toNativeArray($kindInt32, [-10795, 0, -10795])), new CaseRange.ptr(11366, 11366, $toNativeArray($kindInt32, [-10792, 0, -10792])), new CaseRange.ptr(11367, 11372, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(11373, 11373, $toNativeArray($kindInt32, [0, -10780, 0])), new CaseRange.ptr(11374, 11374, $toNativeArray($kindInt32, [0, -10749, 0])), new CaseRange.ptr(11375, 11375, $toNativeArray($kindInt32, [0, -10783, 0])), new CaseRange.ptr(11376, 11376, $toNativeArray($kindInt32, [0, -10782, 0])), new CaseRange.ptr(11378, 11379, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(11381, 11382, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(11390, 11391, $toNativeArray($kindInt32, [0, -10815, 0])), new CaseRange.ptr(11392, 11491, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(11499, 11502, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(11506, 11507, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(11520, 11557, $toNativeArray($kindInt32, [-7264, 0, -7264])), new CaseRange.ptr(11559, 11559, $toNativeArray($kindInt32, [-7264, 0, -7264])), new CaseRange.ptr(11565, 11565, $toNativeArray($kindInt32, [-7264, 0, -7264])), new CaseRange.ptr(42560, 42605, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(42624, 42651, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(42786, 42799, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(42802, 42863, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(42873, 42876, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(42877, 42877, $toNativeArray($kindInt32, [0, -35332, 0])), new CaseRange.ptr(42878, 42887, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(42891, 42892, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(42893, 42893, $toNativeArray($kindInt32, [0, -42280, 0])), new CaseRange.ptr(42896, 42899, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(42902, 42921, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(42922, 42922, $toNativeArray($kindInt32, [0, -42308, 0])), new CaseRange.ptr(42923, 42923, $toNativeArray($kindInt32, [0, -42319, 0])), new CaseRange.ptr(42924, 42924, $toNativeArray($kindInt32, [0, -42315, 0])), new CaseRange.ptr(42925, 42925, $toNativeArray($kindInt32, [0, -42305, 0])), new CaseRange.ptr(42926, 42926, $toNativeArray($kindInt32, [0, -42308, 0])), new CaseRange.ptr(42928, 42928, $toNativeArray($kindInt32, [0, -42258, 0])), new CaseRange.ptr(42929, 42929, $toNativeArray($kindInt32, [0, -42282, 0])), new CaseRange.ptr(42930, 42930, $toNativeArray($kindInt32, [0, -42261, 0])), new CaseRange.ptr(42931, 42931, $toNativeArray($kindInt32, [0, 928, 0])), new CaseRange.ptr(42932, 42935, $toNativeArray($kindInt32, [1114112, 1114112, 1114112])), new CaseRange.ptr(43859, 43859, $toNativeArray($kindInt32, [-928, 0, -928])), new CaseRange.ptr(43888, 43967, $toNativeArray($kindInt32, [-38864, 0, -38864])), new CaseRange.ptr(65313, 65338, $toNativeArray($kindInt32, [0, 32, 0])), new CaseRange.ptr(65345, 65370, $toNativeArray($kindInt32, [-32, 0, -32])), new CaseRange.ptr(66560, 66599, $toNativeArray($kindInt32, [0, 40, 0])), new CaseRange.ptr(66600, 66639, $toNativeArray($kindInt32, [-40, 0, -40])), new CaseRange.ptr(66736, 66771, $toNativeArray($kindInt32, [0, 40, 0])), new CaseRange.ptr(66776, 66811, $toNativeArray($kindInt32, [-40, 0, -40])), new CaseRange.ptr(68736, 68786, $toNativeArray($kindInt32, [0, 64, 0])), new CaseRange.ptr(68800, 68850, $toNativeArray($kindInt32, [-64, 0, -64])), new CaseRange.ptr(71840, 71871, $toNativeArray($kindInt32, [0, 32, 0])), new CaseRange.ptr(71872, 71903, $toNativeArray($kindInt32, [-32, 0, -32])), new CaseRange.ptr(125184, 125217, $toNativeArray($kindInt32, [0, 34, 0])), new CaseRange.ptr(125218, 125251, $toNativeArray($kindInt32, [-34, 0, -34]))]);
		$pkg.CaseRanges = _CaseRanges;
		properties = $toNativeArray($kindUint8, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 144, 130, 130, 130, 136, 130, 130, 130, 130, 130, 130, 136, 130, 130, 130, 130, 132, 132, 132, 132, 132, 132, 132, 132, 132, 132, 130, 130, 136, 136, 136, 130, 130, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 130, 130, 130, 136, 130, 136, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 130, 136, 130, 136, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 16, 130, 136, 136, 136, 136, 136, 130, 136, 136, 224, 130, 136, 0, 136, 136, 136, 136, 132, 132, 136, 192, 130, 130, 136, 132, 224, 130, 132, 132, 132, 130, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 160, 136, 160, 160, 160, 160, 160, 160, 160, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 192, 136, 192, 192, 192, 192, 192, 192, 192, 192]);
		asciiFold = $toNativeArray($kindUint16, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 91, 92, 93, 94, 95, 96, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 8490, 76, 77, 78, 79, 80, 81, 82, 383, 84, 85, 86, 87, 88, 89, 90, 123, 124, 125, 126, 127]);
		caseOrbit = new sliceType$4([new foldPair.ptr(75, 107), new foldPair.ptr(83, 115), new foldPair.ptr(107, 8490), new foldPair.ptr(115, 383), new foldPair.ptr(181, 924), new foldPair.ptr(197, 229), new foldPair.ptr(223, 7838), new foldPair.ptr(229, 8491), new foldPair.ptr(304, 304), new foldPair.ptr(305, 305), new foldPair.ptr(383, 83), new foldPair.ptr(452, 453), new foldPair.ptr(453, 454), new foldPair.ptr(454, 452), new foldPair.ptr(455, 456), new foldPair.ptr(456, 457), new foldPair.ptr(457, 455), new foldPair.ptr(458, 459), new foldPair.ptr(459, 460), new foldPair.ptr(460, 458), new foldPair.ptr(497, 498), new foldPair.ptr(498, 499), new foldPair.ptr(499, 497), new foldPair.ptr(837, 921), new foldPair.ptr(914, 946), new foldPair.ptr(917, 949), new foldPair.ptr(920, 952), new foldPair.ptr(921, 953), new foldPair.ptr(922, 954), new foldPair.ptr(924, 956), new foldPair.ptr(928, 960), new foldPair.ptr(929, 961), new foldPair.ptr(931, 962), new foldPair.ptr(934, 966), new foldPair.ptr(937, 969), new foldPair.ptr(946, 976), new foldPair.ptr(949, 1013), new foldPair.ptr(952, 977), new foldPair.ptr(953, 8126), new foldPair.ptr(954, 1008), new foldPair.ptr(956, 181), new foldPair.ptr(960, 982), new foldPair.ptr(961, 1009), new foldPair.ptr(962, 963), new foldPair.ptr(963, 931), new foldPair.ptr(966, 981), new foldPair.ptr(969, 8486), new foldPair.ptr(976, 914), new foldPair.ptr(977, 1012), new foldPair.ptr(981, 934), new foldPair.ptr(982, 928), new foldPair.ptr(1008, 922), new foldPair.ptr(1009, 929), new foldPair.ptr(1012, 920), new foldPair.ptr(1013, 917), new foldPair.ptr(1042, 1074), new foldPair.ptr(1044, 1076), new foldPair.ptr(1054, 1086), new foldPair.ptr(1057, 1089), new foldPair.ptr(1058, 1090), new foldPair.ptr(1066, 1098), new foldPair.ptr(1074, 7296), new foldPair.ptr(1076, 7297), new foldPair.ptr(1086, 7298), new foldPair.ptr(1089, 7299), new foldPair.ptr(1090, 7300), new foldPair.ptr(1098, 7302), new foldPair.ptr(1122, 1123), new foldPair.ptr(1123, 7303), new foldPair.ptr(7296, 1042), new foldPair.ptr(7297, 1044), new foldPair.ptr(7298, 1054), new foldPair.ptr(7299, 1057), new foldPair.ptr(7300, 7301), new foldPair.ptr(7301, 1058), new foldPair.ptr(7302, 1066), new foldPair.ptr(7303, 1122), new foldPair.ptr(7304, 42570), new foldPair.ptr(7776, 7777), new foldPair.ptr(7777, 7835), new foldPair.ptr(7835, 7776), new foldPair.ptr(7838, 223), new foldPair.ptr(8126, 837), new foldPair.ptr(8486, 937), new foldPair.ptr(8490, 75), new foldPair.ptr(8491, 197), new foldPair.ptr(42570, 42571), new foldPair.ptr(42571, 7304)]);
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["unicode/utf8"]=(function(){var $pkg={},$init,acceptRange,first,acceptRanges,DecodeRune,DecodeRuneInString,RuneLen,EncodeRune,ValidString,ValidRune;	acceptRange = $pkg.acceptRange = $newType(0, $kindStruct, "utf8.acceptRange", true, "unicode/utf8", false, function(lo_, hi_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.lo = 0;
			this.hi = 0;
			return;
		}
		this.lo = lo_;
		this.hi = hi_;
	});
	DecodeRune = function(p) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, accept, b1, b2, b3, mask, n, p, p0, r, size, sz, x, x$1;
		r = 0;
		size = 0;
		n = p.$length;
		if (n < 1) {
			_tmp = 65533;
			_tmp$1 = 0;
			r = _tmp;
			size = _tmp$1;
			return [r, size];
		}
		p0 = (0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]);
		x = ((p0 < 0 || p0 >= first.length) ? ($throwRuntimeError("index out of range"), undefined) : first[p0]);
		if (x >= 240) {
			mask = (((x >> 0)) << 31 >> 0) >> 31 >> 0;
			_tmp$2 = (((((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) >> 0)) & ~mask) >> 0) | (65533 & mask);
			_tmp$3 = 1;
			r = _tmp$2;
			size = _tmp$3;
			return [r, size];
		}
		sz = (x & 7) >>> 0;
		accept = $clone((x$1 = x >>> 4 << 24 >>> 24, ((x$1 < 0 || x$1 >= acceptRanges.length) ? ($throwRuntimeError("index out of range"), undefined) : acceptRanges[x$1])), acceptRange);
		if (n < ((sz >> 0))) {
			_tmp$4 = 65533;
			_tmp$5 = 1;
			r = _tmp$4;
			size = _tmp$5;
			return [r, size];
		}
		b1 = (1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1]);
		if (b1 < accept.lo || accept.hi < b1) {
			_tmp$6 = 65533;
			_tmp$7 = 1;
			r = _tmp$6;
			size = _tmp$7;
			return [r, size];
		}
		if (sz === 2) {
			_tmp$8 = (((((p0 & 31) >>> 0) >> 0)) << 6 >> 0) | ((((b1 & 63) >>> 0) >> 0));
			_tmp$9 = 2;
			r = _tmp$8;
			size = _tmp$9;
			return [r, size];
		}
		b2 = (2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2]);
		if (b2 < 128 || 191 < b2) {
			_tmp$10 = 65533;
			_tmp$11 = 1;
			r = _tmp$10;
			size = _tmp$11;
			return [r, size];
		}
		if (sz === 3) {
			_tmp$12 = ((((((p0 & 15) >>> 0) >> 0)) << 12 >> 0) | (((((b1 & 63) >>> 0) >> 0)) << 6 >> 0)) | ((((b2 & 63) >>> 0) >> 0));
			_tmp$13 = 3;
			r = _tmp$12;
			size = _tmp$13;
			return [r, size];
		}
		b3 = (3 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 3]);
		if (b3 < 128 || 191 < b3) {
			_tmp$14 = 65533;
			_tmp$15 = 1;
			r = _tmp$14;
			size = _tmp$15;
			return [r, size];
		}
		_tmp$16 = (((((((p0 & 7) >>> 0) >> 0)) << 18 >> 0) | (((((b1 & 63) >>> 0) >> 0)) << 12 >> 0)) | (((((b2 & 63) >>> 0) >> 0)) << 6 >> 0)) | ((((b3 & 63) >>> 0) >> 0));
		_tmp$17 = 4;
		r = _tmp$16;
		size = _tmp$17;
		return [r, size];
	};
	$pkg.DecodeRune = DecodeRune;
	DecodeRuneInString = function(s) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, accept, mask, n, r, s, s0, s1, s2, s3, size, sz, x, x$1;
		r = 0;
		size = 0;
		n = s.length;
		if (n < 1) {
			_tmp = 65533;
			_tmp$1 = 0;
			r = _tmp;
			size = _tmp$1;
			return [r, size];
		}
		s0 = s.charCodeAt(0);
		x = ((s0 < 0 || s0 >= first.length) ? ($throwRuntimeError("index out of range"), undefined) : first[s0]);
		if (x >= 240) {
			mask = (((x >> 0)) << 31 >> 0) >> 31 >> 0;
			_tmp$2 = ((((s.charCodeAt(0) >> 0)) & ~mask) >> 0) | (65533 & mask);
			_tmp$3 = 1;
			r = _tmp$2;
			size = _tmp$3;
			return [r, size];
		}
		sz = (x & 7) >>> 0;
		accept = $clone((x$1 = x >>> 4 << 24 >>> 24, ((x$1 < 0 || x$1 >= acceptRanges.length) ? ($throwRuntimeError("index out of range"), undefined) : acceptRanges[x$1])), acceptRange);
		if (n < ((sz >> 0))) {
			_tmp$4 = 65533;
			_tmp$5 = 1;
			r = _tmp$4;
			size = _tmp$5;
			return [r, size];
		}
		s1 = s.charCodeAt(1);
		if (s1 < accept.lo || accept.hi < s1) {
			_tmp$6 = 65533;
			_tmp$7 = 1;
			r = _tmp$6;
			size = _tmp$7;
			return [r, size];
		}
		if (sz === 2) {
			_tmp$8 = (((((s0 & 31) >>> 0) >> 0)) << 6 >> 0) | ((((s1 & 63) >>> 0) >> 0));
			_tmp$9 = 2;
			r = _tmp$8;
			size = _tmp$9;
			return [r, size];
		}
		s2 = s.charCodeAt(2);
		if (s2 < 128 || 191 < s2) {
			_tmp$10 = 65533;
			_tmp$11 = 1;
			r = _tmp$10;
			size = _tmp$11;
			return [r, size];
		}
		if (sz === 3) {
			_tmp$12 = ((((((s0 & 15) >>> 0) >> 0)) << 12 >> 0) | (((((s1 & 63) >>> 0) >> 0)) << 6 >> 0)) | ((((s2 & 63) >>> 0) >> 0));
			_tmp$13 = 3;
			r = _tmp$12;
			size = _tmp$13;
			return [r, size];
		}
		s3 = s.charCodeAt(3);
		if (s3 < 128 || 191 < s3) {
			_tmp$14 = 65533;
			_tmp$15 = 1;
			r = _tmp$14;
			size = _tmp$15;
			return [r, size];
		}
		_tmp$16 = (((((((s0 & 7) >>> 0) >> 0)) << 18 >> 0) | (((((s1 & 63) >>> 0) >> 0)) << 12 >> 0)) | (((((s2 & 63) >>> 0) >> 0)) << 6 >> 0)) | ((((s3 & 63) >>> 0) >> 0));
		_tmp$17 = 4;
		r = _tmp$16;
		size = _tmp$17;
		return [r, size];
	};
	$pkg.DecodeRuneInString = DecodeRuneInString;
	RuneLen = function(r) {
		var r;
		if (r < 0) {
			return -1;
		} else if (r <= 127) {
			return 1;
		} else if (r <= 2047) {
			return 2;
		} else if (55296 <= r && r <= 57343) {
			return -1;
		} else if (r <= 65535) {
			return 3;
		} else if (r <= 1114111) {
			return 4;
		}
		return -1;
	};
	$pkg.RuneLen = RuneLen;
	EncodeRune = function(p, r) {
		var i, p, r;
		i = ((r >>> 0));
		if (i <= 127) {
			(0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0] = ((r << 24 >>> 24)));
			return 1;
		} else if (i <= 2047) {
			$unused((1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1]));
			(0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0] = ((192 | (((r >> 6 >> 0) << 24 >>> 24))) >>> 0));
			(1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1] = ((128 | ((((r << 24 >>> 24)) & 63) >>> 0)) >>> 0));
			return 2;
		} else if ((i > 1114111) || (55296 <= i && i <= 57343)) {
			r = 65533;
			$unused((2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2]));
			(0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0] = ((224 | (((r >> 12 >> 0) << 24 >>> 24))) >>> 0));
			(1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1] = ((128 | (((((r >> 6 >> 0) << 24 >>> 24)) & 63) >>> 0)) >>> 0));
			(2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2] = ((128 | ((((r << 24 >>> 24)) & 63) >>> 0)) >>> 0));
			return 3;
		} else if (i <= 65535) {
			$unused((2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2]));
			(0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0] = ((224 | (((r >> 12 >> 0) << 24 >>> 24))) >>> 0));
			(1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1] = ((128 | (((((r >> 6 >> 0) << 24 >>> 24)) & 63) >>> 0)) >>> 0));
			(2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2] = ((128 | ((((r << 24 >>> 24)) & 63) >>> 0)) >>> 0));
			return 3;
		} else {
			$unused((3 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 3]));
			(0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0] = ((240 | (((r >> 18 >> 0) << 24 >>> 24))) >>> 0));
			(1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1] = ((128 | (((((r >> 12 >> 0) << 24 >>> 24)) & 63) >>> 0)) >>> 0));
			(2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2] = ((128 | (((((r >> 6 >> 0) << 24 >>> 24)) & 63) >>> 0)) >>> 0));
			(3 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 3] = ((128 | ((((r << 24 >>> 24)) & 63) >>> 0)) >>> 0));
			return 4;
		}
	};
	$pkg.EncodeRune = EncodeRune;
	ValidString = function(s) {
		var accept, c, c$1, c$2, i, n, s, si, size, x, x$1;
		n = s.length;
		i = 0;
		while (true) {
			if (!(i < n)) { break; }
			si = s.charCodeAt(i);
			if (si < 128) {
				i = i + (1) >> 0;
				continue;
			}
			x = ((si < 0 || si >= first.length) ? ($throwRuntimeError("index out of range"), undefined) : first[si]);
			if (x === 241) {
				return false;
			}
			size = ((((x & 7) >>> 0) >> 0));
			if ((i + size >> 0) > n) {
				return false;
			}
			accept = $clone((x$1 = x >>> 4 << 24 >>> 24, ((x$1 < 0 || x$1 >= acceptRanges.length) ? ($throwRuntimeError("index out of range"), undefined) : acceptRanges[x$1])), acceptRange);
			c = s.charCodeAt((i + 1 >> 0));
			if (c < accept.lo || accept.hi < c) {
				return false;
			} else if (size === 2) {
			} else {
				c$1 = s.charCodeAt((i + 2 >> 0));
				if (c$1 < 128 || 191 < c$1) {
					return false;
				} else if (size === 3) {
				} else {
					c$2 = s.charCodeAt((i + 3 >> 0));
					if (c$2 < 128 || 191 < c$2) {
						return false;
					}
				}
			}
			i = i + (size) >> 0;
		}
		return true;
	};
	$pkg.ValidString = ValidString;
	ValidRune = function(r) {
		var r;
		if (0 <= r && r < 55296) {
			return true;
		} else if (57343 < r && r <= 1114111) {
			return true;
		}
		return false;
	};
	$pkg.ValidRune = ValidRune;
	acceptRange.init("unicode/utf8", [{prop: "lo", name: "lo", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "hi", name: "hi", embedded: false, exported: false, typ: $Uint8, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		first = $toNativeArray($kindUint8, [240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 19, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 35, 3, 3, 52, 4, 4, 4, 68, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241]);
		acceptRanges = $toNativeArray($kindStruct, [new acceptRange.ptr(128, 191), new acceptRange.ptr(160, 191), new acceptRange.ptr(128, 159), new acceptRange.ptr(144, 191), new acceptRange.ptr(128, 143)]);
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["bytes"]=(function(){var $pkg={},$init,errors,bytealg,io,unicode,utf8,Buffer,readOp,ptrType,sliceType,errNegativeRead,IndexByte,Equal,makeSlice,EqualFold;	errors = $packages["errors"];
	bytealg = $packages["internal/bytealg"];
	io = $packages["io"];
	unicode = $packages["unicode"];
	utf8 = $packages["unicode/utf8"];
	Buffer = $pkg.Buffer = $newType(0, $kindStruct, "bytes.Buffer", true, "bytes", true, function(buf_, off_, lastRead_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.buf = sliceType.nil;
			this.off = 0;
			this.lastRead = 0;
			return;
		}
		this.buf = buf_;
		this.off = off_;
		this.lastRead = lastRead_;
	});
	readOp = $pkg.readOp = $newType(1, $kindInt8, "bytes.readOp", true, "bytes", false, null);
	ptrType = $ptrType(Buffer);
	sliceType = $sliceType($Uint8);
	IndexByte = function(s, c) {
		var _i, _ref, b, c, i, s;
		_ref = s;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
			if (b === c) {
				return i;
			}
			_i++;
		}
		return -1;
	};
	$pkg.IndexByte = IndexByte;
	Equal = function(a, b) {
		var _i, _ref, a, b, c, i;
		if (!((a.$length === b.$length))) {
			return false;
		}
		_ref = a;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
			if (!((c === ((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i])))) {
				return false;
			}
			_i++;
		}
		return true;
	};
	$pkg.Equal = Equal;
	Buffer.ptr.prototype.Bytes = function() {
		var b;
		b = this;
		return $subslice(b.buf, b.off);
	};
	Buffer.prototype.Bytes = function() { return this.$val.Bytes(); };
	Buffer.ptr.prototype.String = function() {
		var b;
		b = this;
		if (b === ptrType.nil) {
			return "<nil>";
		}
		return ($bytesToString($subslice(b.buf, b.off)));
	};
	Buffer.prototype.String = function() { return this.$val.String(); };
	Buffer.ptr.prototype.empty = function() {
		var b;
		b = this;
		return b.buf.$length <= b.off;
	};
	Buffer.prototype.empty = function() { return this.$val.empty(); };
	Buffer.ptr.prototype.Len = function() {
		var b;
		b = this;
		return b.buf.$length - b.off >> 0;
	};
	Buffer.prototype.Len = function() { return this.$val.Len(); };
	Buffer.ptr.prototype.Cap = function() {
		var b;
		b = this;
		return b.buf.$capacity;
	};
	Buffer.prototype.Cap = function() { return this.$val.Cap(); };
	Buffer.ptr.prototype.Truncate = function(n) {
		var b, n;
		b = this;
		if (n === 0) {
			b.Reset();
			return;
		}
		b.lastRead = 0;
		if (n < 0 || n > b.Len()) {
			$panic(new $String("bytes.Buffer: truncation out of range"));
		}
		b.buf = $subslice(b.buf, 0, (b.off + n >> 0));
	};
	Buffer.prototype.Truncate = function(n) { return this.$val.Truncate(n); };
	Buffer.ptr.prototype.Reset = function() {
		var b;
		b = this;
		b.buf = $subslice(b.buf, 0, 0);
		b.off = 0;
		b.lastRead = 0;
	};
	Buffer.prototype.Reset = function() { return this.$val.Reset(); };
	Buffer.ptr.prototype.tryGrowByReslice = function(n) {
		var b, l, n;
		b = this;
		l = b.buf.$length;
		if (n <= (b.buf.$capacity - l >> 0)) {
			b.buf = $subslice(b.buf, 0, (l + n >> 0));
			return [l, true];
		}
		return [0, false];
	};
	Buffer.prototype.tryGrowByReslice = function(n) { return this.$val.tryGrowByReslice(n); };
	Buffer.ptr.prototype.grow = function(n) {
		var _q, _tuple, b, buf, c, i, m, n, ok;
		b = this;
		m = b.Len();
		if ((m === 0) && !((b.off === 0))) {
			b.Reset();
		}
		_tuple = b.tryGrowByReslice(n);
		i = _tuple[0];
		ok = _tuple[1];
		if (ok) {
			return i;
		}
		if (b.buf === sliceType.nil && n <= 64) {
			b.buf = $makeSlice(sliceType, n, 64);
			return 0;
		}
		c = b.buf.$capacity;
		if (n <= ((_q = c / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) - m >> 0)) {
			$copySlice(b.buf, $subslice(b.buf, b.off));
		} else if (c > ((2147483647 - c >> 0) - n >> 0)) {
			$panic($pkg.ErrTooLarge);
		} else {
			buf = makeSlice(($imul(2, c)) + n >> 0);
			$copySlice(buf, $subslice(b.buf, b.off));
			b.buf = buf;
		}
		b.off = 0;
		b.buf = $subslice(b.buf, 0, (m + n >> 0));
		return m;
	};
	Buffer.prototype.grow = function(n) { return this.$val.grow(n); };
	Buffer.ptr.prototype.Grow = function(n) {
		var b, m, n;
		b = this;
		if (n < 0) {
			$panic(new $String("bytes.Buffer.Grow: negative count"));
		}
		m = b.grow(n);
		b.buf = $subslice(b.buf, 0, m);
	};
	Buffer.prototype.Grow = function(n) { return this.$val.Grow(n); };
	Buffer.ptr.prototype.Write = function(p) {
		var _tmp, _tmp$1, _tuple, b, err, m, n, ok, p;
		n = 0;
		err = $ifaceNil;
		b = this;
		b.lastRead = 0;
		_tuple = b.tryGrowByReslice(p.$length);
		m = _tuple[0];
		ok = _tuple[1];
		if (!ok) {
			m = b.grow(p.$length);
		}
		_tmp = $copySlice($subslice(b.buf, m), p);
		_tmp$1 = $ifaceNil;
		n = _tmp;
		err = _tmp$1;
		return [n, err];
	};
	Buffer.prototype.Write = function(p) { return this.$val.Write(p); };
	Buffer.ptr.prototype.WriteString = function(s) {
		var _tmp, _tmp$1, _tuple, b, err, m, n, ok, s;
		n = 0;
		err = $ifaceNil;
		b = this;
		b.lastRead = 0;
		_tuple = b.tryGrowByReslice(s.length);
		m = _tuple[0];
		ok = _tuple[1];
		if (!ok) {
			m = b.grow(s.length);
		}
		_tmp = $copyString($subslice(b.buf, m), s);
		_tmp$1 = $ifaceNil;
		n = _tmp;
		err = _tmp$1;
		return [n, err];
	};
	Buffer.prototype.WriteString = function(s) { return this.$val.WriteString(s); };
	Buffer.ptr.prototype.ReadFrom = function(r) {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, b, e, err, i, m, n, r, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; b = $f.b; e = $f.e; err = $f.err; i = $f.i; m = $f.m; n = $f.n; r = $f.r; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = new $Int64(0, 0);
		err = $ifaceNil;
		b = this;
		b.lastRead = 0;
		/* while (true) { */ case 1:
			i = b.grow(512);
			b.buf = $subslice(b.buf, 0, i);
			_r = r.Read($subslice(b.buf, i, b.buf.$capacity)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			m = _tuple[0];
			e = _tuple[1];
			if (m < 0) {
				$panic(errNegativeRead);
			}
			b.buf = $subslice(b.buf, 0, (i + m >> 0));
			n = (x = (new $Int64(0, m)), new $Int64(n.$high + x.$high, n.$low + x.$low));
			if ($interfaceIsEqual(e, io.EOF)) {
				_tmp = n;
				_tmp$1 = $ifaceNil;
				n = _tmp;
				err = _tmp$1;
				$s = -1; return [n, err];
			}
			if (!($interfaceIsEqual(e, $ifaceNil))) {
				_tmp$2 = n;
				_tmp$3 = e;
				n = _tmp$2;
				err = _tmp$3;
				$s = -1; return [n, err];
			}
		/* } */ $s = 1; continue; case 2:
		$s = -1; return [n, err];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Buffer.ptr.prototype.ReadFrom }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f.b = b; $f.e = e; $f.err = err; $f.i = i; $f.m = m; $f.n = n; $f.r = r; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Buffer.prototype.ReadFrom = function(r) { return this.$val.ReadFrom(r); };
	makeSlice = function(n) {
		var n, $deferred;
		/* */ var $err = null; try { $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		$deferred.push([(function() {
			if (!($interfaceIsEqual($recover(), $ifaceNil))) {
				$panic($pkg.ErrTooLarge);
			}
		}), []]);
		return $makeSlice(sliceType, n);
		/* */ } catch(err) { $err = err; return sliceType.nil; } finally { $callDeferred($deferred, $err); }
	};
	Buffer.ptr.prototype.WriteTo = function(w) {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, b, e, err, m, n, nBytes, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; b = $f.b; e = $f.e; err = $f.err; m = $f.m; n = $f.n; nBytes = $f.nBytes; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = new $Int64(0, 0);
		err = $ifaceNil;
		b = this;
		b.lastRead = 0;
		nBytes = b.Len();
		/* */ if (nBytes > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (nBytes > 0) { */ case 1:
			_r = w.Write($subslice(b.buf, b.off)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			m = _tuple[0];
			e = _tuple[1];
			if (m > nBytes) {
				$panic(new $String("bytes.Buffer.WriteTo: invalid Write count"));
			}
			b.off = b.off + (m) >> 0;
			n = (new $Int64(0, m));
			if (!($interfaceIsEqual(e, $ifaceNil))) {
				_tmp = n;
				_tmp$1 = e;
				n = _tmp;
				err = _tmp$1;
				$s = -1; return [n, err];
			}
			if (!((m === nBytes))) {
				_tmp$2 = n;
				_tmp$3 = io.ErrShortWrite;
				n = _tmp$2;
				err = _tmp$3;
				$s = -1; return [n, err];
			}
		/* } */ case 2:
		b.Reset();
		_tmp$4 = n;
		_tmp$5 = $ifaceNil;
		n = _tmp$4;
		err = _tmp$5;
		$s = -1; return [n, err];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Buffer.ptr.prototype.WriteTo }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f.b = b; $f.e = e; $f.err = err; $f.m = m; $f.n = n; $f.nBytes = nBytes; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	Buffer.prototype.WriteTo = function(w) { return this.$val.WriteTo(w); };
	Buffer.ptr.prototype.WriteByte = function(c) {
		var _tuple, b, c, m, ok, x;
		b = this;
		b.lastRead = 0;
		_tuple = b.tryGrowByReslice(1);
		m = _tuple[0];
		ok = _tuple[1];
		if (!ok) {
			m = b.grow(1);
		}
		(x = b.buf, ((m < 0 || m >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + m] = c));
		return $ifaceNil;
	};
	Buffer.prototype.WriteByte = function(c) { return this.$val.WriteByte(c); };
	Buffer.ptr.prototype.WriteRune = function(r) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, b, err, m, n, ok, r;
		n = 0;
		err = $ifaceNil;
		b = this;
		if (r < 128) {
			b.WriteByte(((r << 24 >>> 24)));
			_tmp = 1;
			_tmp$1 = $ifaceNil;
			n = _tmp;
			err = _tmp$1;
			return [n, err];
		}
		b.lastRead = 0;
		_tuple = b.tryGrowByReslice(4);
		m = _tuple[0];
		ok = _tuple[1];
		if (!ok) {
			m = b.grow(4);
		}
		n = utf8.EncodeRune($subslice(b.buf, m, (m + 4 >> 0)), r);
		b.buf = $subslice(b.buf, 0, (m + n >> 0));
		_tmp$2 = n;
		_tmp$3 = $ifaceNil;
		n = _tmp$2;
		err = _tmp$3;
		return [n, err];
	};
	Buffer.prototype.WriteRune = function(r) { return this.$val.WriteRune(r); };
	Buffer.ptr.prototype.Read = function(p) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, b, err, n, p;
		n = 0;
		err = $ifaceNil;
		b = this;
		b.lastRead = 0;
		if (b.empty()) {
			b.Reset();
			if (p.$length === 0) {
				_tmp = 0;
				_tmp$1 = $ifaceNil;
				n = _tmp;
				err = _tmp$1;
				return [n, err];
			}
			_tmp$2 = 0;
			_tmp$3 = io.EOF;
			n = _tmp$2;
			err = _tmp$3;
			return [n, err];
		}
		n = $copySlice(p, $subslice(b.buf, b.off));
		b.off = b.off + (n) >> 0;
		if (n > 0) {
			b.lastRead = -1;
		}
		_tmp$4 = n;
		_tmp$5 = $ifaceNil;
		n = _tmp$4;
		err = _tmp$5;
		return [n, err];
	};
	Buffer.prototype.Read = function(p) { return this.$val.Read(p); };
	Buffer.ptr.prototype.Next = function(n) {
		var b, data, m, n;
		b = this;
		b.lastRead = 0;
		m = b.Len();
		if (n > m) {
			n = m;
		}
		data = $subslice(b.buf, b.off, (b.off + n >> 0));
		b.off = b.off + (n) >> 0;
		if (n > 0) {
			b.lastRead = -1;
		}
		return data;
	};
	Buffer.prototype.Next = function(n) { return this.$val.Next(n); };
	Buffer.ptr.prototype.ReadByte = function() {
		var b, c, x, x$1;
		b = this;
		if (b.empty()) {
			b.Reset();
			return [0, io.EOF];
		}
		c = (x = b.buf, x$1 = b.off, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
		b.off = b.off + (1) >> 0;
		b.lastRead = -1;
		return [c, $ifaceNil];
	};
	Buffer.prototype.ReadByte = function() { return this.$val.ReadByte(); };
	Buffer.ptr.prototype.ReadRune = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tuple, b, c, err, n, r, size, x, x$1;
		r = 0;
		size = 0;
		err = $ifaceNil;
		b = this;
		if (b.empty()) {
			b.Reset();
			_tmp = 0;
			_tmp$1 = 0;
			_tmp$2 = io.EOF;
			r = _tmp;
			size = _tmp$1;
			err = _tmp$2;
			return [r, size, err];
		}
		c = (x = b.buf, x$1 = b.off, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
		if (c < 128) {
			b.off = b.off + (1) >> 0;
			b.lastRead = 1;
			_tmp$3 = ((c >> 0));
			_tmp$4 = 1;
			_tmp$5 = $ifaceNil;
			r = _tmp$3;
			size = _tmp$4;
			err = _tmp$5;
			return [r, size, err];
		}
		_tuple = utf8.DecodeRune($subslice(b.buf, b.off));
		r = _tuple[0];
		n = _tuple[1];
		b.off = b.off + (n) >> 0;
		b.lastRead = ((n << 24 >> 24));
		_tmp$6 = r;
		_tmp$7 = n;
		_tmp$8 = $ifaceNil;
		r = _tmp$6;
		size = _tmp$7;
		err = _tmp$8;
		return [r, size, err];
	};
	Buffer.prototype.ReadRune = function() { return this.$val.ReadRune(); };
	Buffer.ptr.prototype.UnreadRune = function() {
		var b;
		b = this;
		if (b.lastRead <= 0) {
			return errors.New("bytes.Buffer: UnreadRune: previous operation was not a successful ReadRune");
		}
		if (b.off >= ((b.lastRead >> 0))) {
			b.off = b.off - (((b.lastRead >> 0))) >> 0;
		}
		b.lastRead = 0;
		return $ifaceNil;
	};
	Buffer.prototype.UnreadRune = function() { return this.$val.UnreadRune(); };
	Buffer.ptr.prototype.UnreadByte = function() {
		var b;
		b = this;
		if (b.lastRead === 0) {
			return errors.New("bytes.Buffer: UnreadByte: previous operation was not a successful read");
		}
		b.lastRead = 0;
		if (b.off > 0) {
			b.off = b.off - (1) >> 0;
		}
		return $ifaceNil;
	};
	Buffer.prototype.UnreadByte = function() { return this.$val.UnreadByte(); };
	Buffer.ptr.prototype.ReadBytes = function(delim) {
		var _tmp, _tmp$1, _tuple, b, delim, err, line, slice;
		line = sliceType.nil;
		err = $ifaceNil;
		b = this;
		_tuple = b.readSlice(delim);
		slice = _tuple[0];
		err = _tuple[1];
		line = $appendSlice(line, slice);
		_tmp = line;
		_tmp$1 = err;
		line = _tmp;
		err = _tmp$1;
		return [line, err];
	};
	Buffer.prototype.ReadBytes = function(delim) { return this.$val.ReadBytes(delim); };
	Buffer.ptr.prototype.readSlice = function(delim) {
		var _tmp, _tmp$1, b, delim, end, err, i, line;
		line = sliceType.nil;
		err = $ifaceNil;
		b = this;
		i = IndexByte($subslice(b.buf, b.off), delim);
		end = (b.off + i >> 0) + 1 >> 0;
		if (i < 0) {
			end = b.buf.$length;
			err = io.EOF;
		}
		line = $subslice(b.buf, b.off, end);
		b.off = end;
		b.lastRead = -1;
		_tmp = line;
		_tmp$1 = err;
		line = _tmp;
		err = _tmp$1;
		return [line, err];
	};
	Buffer.prototype.readSlice = function(delim) { return this.$val.readSlice(delim); };
	Buffer.ptr.prototype.ReadString = function(delim) {
		var _tmp, _tmp$1, _tuple, b, delim, err, line, slice;
		line = "";
		err = $ifaceNil;
		b = this;
		_tuple = b.readSlice(delim);
		slice = _tuple[0];
		err = _tuple[1];
		_tmp = ($bytesToString(slice));
		_tmp$1 = err;
		line = _tmp;
		err = _tmp$1;
		return [line, err];
	};
	Buffer.prototype.ReadString = function(delim) { return this.$val.ReadString(delim); };
	EqualFold = function(s, t) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, r, r$1, r$2, s, size, size$1, sr, t, tr;
		while (true) {
			if (!(!((s.$length === 0)) && !((t.$length === 0)))) { break; }
			_tmp = 0;
			_tmp$1 = 0;
			sr = _tmp;
			tr = _tmp$1;
			if ((0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]) < 128) {
				_tmp$2 = (((0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]) >> 0));
				_tmp$3 = $subslice(s, 1);
				sr = _tmp$2;
				s = _tmp$3;
			} else {
				_tuple = utf8.DecodeRune(s);
				r = _tuple[0];
				size = _tuple[1];
				_tmp$4 = r;
				_tmp$5 = $subslice(s, size);
				sr = _tmp$4;
				s = _tmp$5;
			}
			if ((0 >= t.$length ? ($throwRuntimeError("index out of range"), undefined) : t.$array[t.$offset + 0]) < 128) {
				_tmp$6 = (((0 >= t.$length ? ($throwRuntimeError("index out of range"), undefined) : t.$array[t.$offset + 0]) >> 0));
				_tmp$7 = $subslice(t, 1);
				tr = _tmp$6;
				t = _tmp$7;
			} else {
				_tuple$1 = utf8.DecodeRune(t);
				r$1 = _tuple$1[0];
				size$1 = _tuple$1[1];
				_tmp$8 = r$1;
				_tmp$9 = $subslice(t, size$1);
				tr = _tmp$8;
				t = _tmp$9;
			}
			if (tr === sr) {
				continue;
			}
			if (tr < sr) {
				_tmp$10 = sr;
				_tmp$11 = tr;
				tr = _tmp$10;
				sr = _tmp$11;
			}
			if (tr < 128) {
				if (65 <= sr && sr <= 90 && (tr === ((sr + 97 >> 0) - 65 >> 0))) {
					continue;
				}
				return false;
			}
			r$2 = unicode.SimpleFold(sr);
			while (true) {
				if (!(!((r$2 === sr)) && r$2 < tr)) { break; }
				r$2 = unicode.SimpleFold(r$2);
			}
			if (r$2 === tr) {
				continue;
			}
			return false;
		}
		return s.$length === t.$length;
	};
	$pkg.EqualFold = EqualFold;
	ptrType.methods = [{prop: "Bytes", name: "Bytes", pkg: "", typ: $funcType([], [sliceType], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "empty", name: "empty", pkg: "bytes", typ: $funcType([], [$Bool], false)}, {prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Cap", name: "Cap", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Truncate", name: "Truncate", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "tryGrowByReslice", name: "tryGrowByReslice", pkg: "bytes", typ: $funcType([$Int], [$Int, $Bool], false)}, {prop: "grow", name: "grow", pkg: "bytes", typ: $funcType([$Int], [$Int], false)}, {prop: "Grow", name: "Grow", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([$String], [$Int, $error], false)}, {prop: "ReadFrom", name: "ReadFrom", pkg: "", typ: $funcType([io.Reader], [$Int64, $error], false)}, {prop: "WriteTo", name: "WriteTo", pkg: "", typ: $funcType([io.Writer], [$Int64, $error], false)}, {prop: "WriteByte", name: "WriteByte", pkg: "", typ: $funcType([$Uint8], [$error], false)}, {prop: "WriteRune", name: "WriteRune", pkg: "", typ: $funcType([$Int32], [$Int, $error], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Next", name: "Next", pkg: "", typ: $funcType([$Int], [sliceType], false)}, {prop: "ReadByte", name: "ReadByte", pkg: "", typ: $funcType([], [$Uint8, $error], false)}, {prop: "ReadRune", name: "ReadRune", pkg: "", typ: $funcType([], [$Int32, $Int, $error], false)}, {prop: "UnreadRune", name: "UnreadRune", pkg: "", typ: $funcType([], [$error], false)}, {prop: "UnreadByte", name: "UnreadByte", pkg: "", typ: $funcType([], [$error], false)}, {prop: "ReadBytes", name: "ReadBytes", pkg: "", typ: $funcType([$Uint8], [sliceType, $error], false)}, {prop: "readSlice", name: "readSlice", pkg: "bytes", typ: $funcType([$Uint8], [sliceType, $error], false)}, {prop: "ReadString", name: "ReadString", pkg: "", typ: $funcType([$Uint8], [$String, $error], false)}];
	Buffer.init("bytes", [{prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "off", name: "off", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "lastRead", name: "lastRead", embedded: false, exported: false, typ: readOp, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = bytealg.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = io.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = unicode.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = utf8.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$pkg.ErrTooLarge = errors.New("bytes.Buffer: too large");
		errNegativeRead = errors.New("bytes.Buffer: reader returned negative count from Read");
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["encoding"]=(function(){var $pkg={},$init,TextMarshaler,TextUnmarshaler,sliceType;	TextMarshaler = $pkg.TextMarshaler = $newType(8, $kindInterface, "encoding.TextMarshaler", true, "encoding", true, null);
	TextUnmarshaler = $pkg.TextUnmarshaler = $newType(8, $kindInterface, "encoding.TextUnmarshaler", true, "encoding", true, null);
	sliceType = $sliceType($Uint8);
	TextMarshaler.init([{prop: "MarshalText", name: "MarshalText", pkg: "", typ: $funcType([], [sliceType, $error], false)}]);
	TextUnmarshaler.init([{prop: "UnmarshalText", name: "UnmarshalText", pkg: "", typ: $funcType([sliceType], [$error], false)}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["math/bits"]=(function(){var $pkg={},$init,deBruijn32tab,deBruijn64tab,len8tab,LeadingZeros64,TrailingZeros,TrailingZeros32,TrailingZeros64,Len64;	LeadingZeros64 = function(x) {
		var x;
		return 64 - Len64(x) >> 0;
	};
	$pkg.LeadingZeros64 = LeadingZeros64;
	TrailingZeros = function(x) {
		var x;
		if (true) {
			return TrailingZeros32(((x >>> 0)));
		}
		return TrailingZeros64((new $Uint64(0, x)));
	};
	$pkg.TrailingZeros = TrailingZeros;
	TrailingZeros32 = function(x) {
		var x, x$1;
		if (x === 0) {
			return 32;
		}
		return (((x$1 = ($imul((((x & (-x >>> 0)) >>> 0)), 125613361) >>> 0) >>> 27 >>> 0, ((x$1 < 0 || x$1 >= deBruijn32tab.length) ? ($throwRuntimeError("index out of range"), undefined) : deBruijn32tab[x$1])) >> 0));
	};
	$pkg.TrailingZeros32 = TrailingZeros32;
	TrailingZeros64 = function(x) {
		var x, x$1, x$2;
		if ((x.$high === 0 && x.$low === 0)) {
			return 64;
		}
		return (((x$1 = $shiftRightUint64($mul64(((x$2 = new $Uint64(-x.$high, -x.$low), new $Uint64(x.$high & x$2.$high, (x.$low & x$2.$low) >>> 0))), new $Uint64(66559345, 3033172745)), 58), (($flatten64(x$1) < 0 || $flatten64(x$1) >= deBruijn64tab.length) ? ($throwRuntimeError("index out of range"), undefined) : deBruijn64tab[$flatten64(x$1)])) >> 0));
	};
	$pkg.TrailingZeros64 = TrailingZeros64;
	Len64 = function(x) {
		var n, x;
		n = 0;
		if ((x.$high > 1 || (x.$high === 1 && x.$low >= 0))) {
			x = $shiftRightUint64(x, (32));
			n = 32;
		}
		if ((x.$high > 0 || (x.$high === 0 && x.$low >= 65536))) {
			x = $shiftRightUint64(x, (16));
			n = n + (16) >> 0;
		}
		if ((x.$high > 0 || (x.$high === 0 && x.$low >= 256))) {
			x = $shiftRightUint64(x, (8));
			n = n + (8) >> 0;
		}
		n = n + (((($flatten64(x) < 0 || $flatten64(x) >= len8tab.length) ? ($throwRuntimeError("index out of range"), undefined) : len8tab[$flatten64(x)]) >> 0)) >> 0;
		return n;
	};
	$pkg.Len64 = Len64;
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		deBruijn32tab = $toNativeArray($kindUint8, [0, 1, 28, 2, 29, 14, 24, 3, 30, 22, 20, 15, 25, 17, 4, 8, 31, 27, 13, 23, 21, 19, 16, 7, 26, 12, 18, 6, 11, 5, 10, 9]);
		deBruijn64tab = $toNativeArray($kindUint8, [0, 1, 56, 2, 57, 49, 28, 3, 61, 58, 42, 50, 38, 29, 17, 4, 62, 47, 59, 36, 45, 43, 51, 22, 53, 39, 33, 30, 24, 18, 12, 5, 63, 55, 48, 27, 60, 41, 37, 16, 46, 35, 44, 21, 52, 32, 23, 11, 54, 26, 40, 15, 34, 20, 31, 10, 25, 14, 19, 9, 13, 8, 7, 6]);
		len8tab = $toNativeArray($kindUint8, [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]);
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["math"]=(function(){var $pkg={},$init,js,bits,arrayType,arrayType$1,arrayType$2,structType,math,zero,posInf,negInf,nan,buf,Inf,IsInf,IsNaN,NaN,init,Float32bits,Float32frombits,Float64bits,Float64frombits;	js = $packages["github.com/gopherjs/gopherjs/js"];
	bits = $packages["math/bits"];
	arrayType = $arrayType($Uint32, 2);
	arrayType$1 = $arrayType($Float32, 2);
	arrayType$2 = $arrayType($Float64, 1);
	structType = $structType("math", [{prop: "uint32array", name: "uint32array", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "float32array", name: "float32array", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "float64array", name: "float64array", embedded: false, exported: false, typ: arrayType$2, tag: ""}]);
	Inf = function(sign) {
		var sign;
		if (sign >= 0) {
			return posInf;
		} else {
			return negInf;
		}
	};
	$pkg.Inf = Inf;
	IsInf = function(f, sign) {
		var f, sign;
		if (f === posInf) {
			return sign >= 0;
		}
		if (f === negInf) {
			return sign <= 0;
		}
		return false;
	};
	$pkg.IsInf = IsInf;
	IsNaN = function(f) {
		var f, is;
		is = false;
		is = !((f === f));
		return is;
	};
	$pkg.IsNaN = IsNaN;
	NaN = function() {
		return nan;
	};
	$pkg.NaN = NaN;
	init = function() {
		var ab;
		ab = new ($global.ArrayBuffer)(8);
		buf.uint32array = new ($global.Uint32Array)(ab);
		buf.float32array = new ($global.Float32Array)(ab);
		buf.float64array = new ($global.Float64Array)(ab);
	};
	Float32bits = function(f) {
		var f;
		buf.float32array[0] = f;
		return buf.uint32array[0];
	};
	$pkg.Float32bits = Float32bits;
	Float32frombits = function(b) {
		var b;
		buf.uint32array[0] = b;
		return buf.float32array[0];
	};
	$pkg.Float32frombits = Float32frombits;
	Float64bits = function(f) {
		var f, x, x$1;
		buf.float64array[0] = f;
		return (x = $shiftLeft64((new $Uint64(0, buf.uint32array[1])), 32), x$1 = (new $Uint64(0, buf.uint32array[0])), new $Uint64(x.$high + x$1.$high, x.$low + x$1.$low));
	};
	$pkg.Float64bits = Float64bits;
	Float64frombits = function(b) {
		var b;
		buf.uint32array[0] = ((b.$low >>> 0));
		buf.uint32array[1] = (($shiftRightUint64(b, 32).$low >>> 0));
		return buf.float64array[0];
	};
	$pkg.Float64frombits = Float64frombits;
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = js.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = bits.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		buf = new structType.ptr(arrayType.zero(), arrayType$1.zero(), arrayType$2.zero());
		math = $global.Math;
		zero = 0;
		posInf = 1 / zero;
		negInf = -1 / zero;
		nan = 0 / zero;
		init();
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["strconv"]=(function(){var $pkg={},$init,errors,bytealg,math,bits,utf8,NumError,decimal,leftCheat,extFloat,floatInfo,decimalSlice,sliceType,sliceType$1,sliceType$2,sliceType$3,sliceType$4,sliceType$5,arrayType,sliceType$6,ptrType,arrayType$1,arrayType$2,ptrType$1,arrayType$3,arrayType$4,ptrType$2,ptrType$3,ptrType$4,optimize,powtab,float64pow10,float32pow10,leftcheats,smallPowersOfTen,powersOfTen,uint64pow10,float32info,float32info$24ptr,float64info,float64info$24ptr,isPrint16,isNotPrint16,isPrint32,isNotPrint32,isGraphic,equalIgnoreCase,special,readFloat,atof64exact,atof32exact,atof32,atof64,ParseFloat,syntaxError,rangeError,baseError,bitSizeError,ParseUint,ParseInt,digitZero,trim,rightShift,prefixIsLessThan,leftShift,shouldRoundUp,frexp10Many,adjustLastDigitFixed,adjustLastDigit,FormatFloat,AppendFloat,genericFtoa,bigFtoa,formatDigits,roundShortest,fmtE,fmtF,fmtB,min,max,FormatUint,FormatInt,Itoa,AppendInt,AppendUint,small,formatBits,isPowerOfTwo,quoteWith,appendQuotedWith,appendEscapedRune,Quote,unhex,UnquoteChar,Unquote,contains,bsearch16,bsearch32,IsPrint,isInGraphicList;	errors = $packages["errors"];
	bytealg = $packages["internal/bytealg"];
	math = $packages["math"];
	bits = $packages["math/bits"];
	utf8 = $packages["unicode/utf8"];
	NumError = $pkg.NumError = $newType(0, $kindStruct, "strconv.NumError", true, "strconv", true, function(Func_, Num_, Err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Func = "";
			this.Num = "";
			this.Err = $ifaceNil;
			return;
		}
		this.Func = Func_;
		this.Num = Num_;
		this.Err = Err_;
	});
	decimal = $pkg.decimal = $newType(0, $kindStruct, "strconv.decimal", true, "strconv", false, function(d_, nd_, dp_, neg_, trunc_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.d = arrayType.zero();
			this.nd = 0;
			this.dp = 0;
			this.neg = false;
			this.trunc = false;
			return;
		}
		this.d = d_;
		this.nd = nd_;
		this.dp = dp_;
		this.neg = neg_;
		this.trunc = trunc_;
	});
	leftCheat = $pkg.leftCheat = $newType(0, $kindStruct, "strconv.leftCheat", true, "strconv", false, function(delta_, cutoff_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.delta = 0;
			this.cutoff = "";
			return;
		}
		this.delta = delta_;
		this.cutoff = cutoff_;
	});
	extFloat = $pkg.extFloat = $newType(0, $kindStruct, "strconv.extFloat", true, "strconv", false, function(mant_, exp_, neg_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.mant = new $Uint64(0, 0);
			this.exp = 0;
			this.neg = false;
			return;
		}
		this.mant = mant_;
		this.exp = exp_;
		this.neg = neg_;
	});
	floatInfo = $pkg.floatInfo = $newType(0, $kindStruct, "strconv.floatInfo", true, "strconv", false, function(mantbits_, expbits_, bias_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.mantbits = 0;
			this.expbits = 0;
			this.bias = 0;
			return;
		}
		this.mantbits = mantbits_;
		this.expbits = expbits_;
		this.bias = bias_;
	});
	decimalSlice = $pkg.decimalSlice = $newType(0, $kindStruct, "strconv.decimalSlice", true, "strconv", false, function(d_, nd_, dp_, neg_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.d = sliceType$6.nil;
			this.nd = 0;
			this.dp = 0;
			this.neg = false;
			return;
		}
		this.d = d_;
		this.nd = nd_;
		this.dp = dp_;
		this.neg = neg_;
	});
	sliceType = $sliceType($Int);
	sliceType$1 = $sliceType($Float64);
	sliceType$2 = $sliceType($Float32);
	sliceType$3 = $sliceType(leftCheat);
	sliceType$4 = $sliceType($Uint16);
	sliceType$5 = $sliceType($Uint32);
	arrayType = $arrayType($Uint8, 800);
	sliceType$6 = $sliceType($Uint8);
	ptrType = $ptrType(NumError);
	arrayType$1 = $arrayType($Uint8, 24);
	arrayType$2 = $arrayType($Uint8, 32);
	ptrType$1 = $ptrType(floatInfo);
	arrayType$3 = $arrayType($Uint8, 65);
	arrayType$4 = $arrayType($Uint8, 4);
	ptrType$2 = $ptrType(decimal);
	ptrType$3 = $ptrType(decimalSlice);
	ptrType$4 = $ptrType(extFloat);
	equalIgnoreCase = function(s1, s2) {
		var c1, c2, i, s1, s2;
		if (!((s1.length === s2.length))) {
			return false;
		}
		i = 0;
		while (true) {
			if (!(i < s1.length)) { break; }
			c1 = s1.charCodeAt(i);
			if (65 <= c1 && c1 <= 90) {
				c1 = c1 + (32) << 24 >>> 24;
			}
			c2 = s2.charCodeAt(i);
			if (65 <= c2 && c2 <= 90) {
				c2 = c2 + (32) << 24 >>> 24;
			}
			if (!((c1 === c2))) {
				return false;
			}
			i = i + (1) >> 0;
		}
		return true;
	};
	special = function(s) {
		var _1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, f, ok, s;
		f = 0;
		ok = false;
		if (s.length === 0) {
			return [f, ok];
		}
		_1 = s.charCodeAt(0);
		if (_1 === (43)) {
			if (equalIgnoreCase(s, "+inf") || equalIgnoreCase(s, "+infinity")) {
				_tmp = math.Inf(1);
				_tmp$1 = true;
				f = _tmp;
				ok = _tmp$1;
				return [f, ok];
			}
		} else if (_1 === (45)) {
			if (equalIgnoreCase(s, "-inf") || equalIgnoreCase(s, "-infinity")) {
				_tmp$2 = math.Inf(-1);
				_tmp$3 = true;
				f = _tmp$2;
				ok = _tmp$3;
				return [f, ok];
			}
		} else if ((_1 === (110)) || (_1 === (78))) {
			if (equalIgnoreCase(s, "nan")) {
				_tmp$4 = math.NaN();
				_tmp$5 = true;
				f = _tmp$4;
				ok = _tmp$5;
				return [f, ok];
			}
		} else if ((_1 === (105)) || (_1 === (73))) {
			if (equalIgnoreCase(s, "inf") || equalIgnoreCase(s, "infinity")) {
				_tmp$6 = math.Inf(1);
				_tmp$7 = true;
				f = _tmp$6;
				ok = _tmp$7;
				return [f, ok];
			}
		} else {
			return [f, ok];
		}
		return [f, ok];
	};
	decimal.ptr.prototype.set = function(s) {
		var b, e, esign, i, ok, s, sawdigits, sawdot, x, x$1;
		ok = false;
		b = this;
		i = 0;
		b.neg = false;
		b.trunc = false;
		if (i >= s.length) {
			return ok;
		}
		if ((s.charCodeAt(i) === 43)) {
			i = i + (1) >> 0;
		} else if ((s.charCodeAt(i) === 45)) {
			b.neg = true;
			i = i + (1) >> 0;
		}
		sawdot = false;
		sawdigits = false;
		while (true) {
			if (!(i < s.length)) { break; }
			if ((s.charCodeAt(i) === 46)) {
				if (sawdot) {
					return ok;
				}
				sawdot = true;
				b.dp = b.nd;
				i = i + (1) >> 0;
				continue;
			} else if (48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57) {
				sawdigits = true;
				if ((s.charCodeAt(i) === 48) && (b.nd === 0)) {
					b.dp = b.dp - (1) >> 0;
					i = i + (1) >> 0;
					continue;
				}
				if (b.nd < 800) {
					(x = b.d, x$1 = b.nd, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1] = s.charCodeAt(i)));
					b.nd = b.nd + (1) >> 0;
				} else if (!((s.charCodeAt(i) === 48))) {
					b.trunc = true;
				}
				i = i + (1) >> 0;
				continue;
			}
			break;
		}
		if (!sawdigits) {
			return ok;
		}
		if (!sawdot) {
			b.dp = b.nd;
		}
		if (i < s.length && ((s.charCodeAt(i) === 101) || (s.charCodeAt(i) === 69))) {
			i = i + (1) >> 0;
			if (i >= s.length) {
				return ok;
			}
			esign = 1;
			if (s.charCodeAt(i) === 43) {
				i = i + (1) >> 0;
			} else if (s.charCodeAt(i) === 45) {
				i = i + (1) >> 0;
				esign = -1;
			}
			if (i >= s.length || s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) {
				return ok;
			}
			e = 0;
			while (true) {
				if (!(i < s.length && 48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57)) { break; }
				if (e < 10000) {
					e = (($imul(e, 10)) + ((s.charCodeAt(i) >> 0)) >> 0) - 48 >> 0;
				}
				i = i + (1) >> 0;
			}
			b.dp = b.dp + (($imul(e, esign))) >> 0;
		}
		if (!((i === s.length))) {
			return ok;
		}
		ok = true;
		return ok;
	};
	decimal.prototype.set = function(s) { return this.$val.set(s); };
	readFloat = function(s) {
		var _1, c, dp, e, esign, exp, i, mantissa, nd, ndMant, neg, ok, s, sawdigits, sawdot, trunc, x;
		mantissa = new $Uint64(0, 0);
		exp = 0;
		neg = false;
		trunc = false;
		ok = false;
		i = 0;
		if (i >= s.length) {
			return [mantissa, exp, neg, trunc, ok];
		}
		if ((s.charCodeAt(i) === 43)) {
			i = i + (1) >> 0;
		} else if ((s.charCodeAt(i) === 45)) {
			neg = true;
			i = i + (1) >> 0;
		}
		sawdot = false;
		sawdigits = false;
		nd = 0;
		ndMant = 0;
		dp = 0;
		while (true) {
			if (!(i < s.length)) { break; }
			c = s.charCodeAt(i);
			_1 = true;
			if (_1 === ((c === 46))) {
				if (sawdot) {
					return [mantissa, exp, neg, trunc, ok];
				}
				sawdot = true;
				dp = nd;
				i = i + (1) >> 0;
				continue;
			} else if (_1 === (48 <= c && c <= 57)) {
				sawdigits = true;
				if ((c === 48) && (nd === 0)) {
					dp = dp - (1) >> 0;
					i = i + (1) >> 0;
					continue;
				}
				nd = nd + (1) >> 0;
				if (ndMant < 19) {
					mantissa = $mul64(mantissa, (new $Uint64(0, 10)));
					mantissa = (x = (new $Uint64(0, (c - 48 << 24 >>> 24))), new $Uint64(mantissa.$high + x.$high, mantissa.$low + x.$low));
					ndMant = ndMant + (1) >> 0;
				} else if (!((s.charCodeAt(i) === 48))) {
					trunc = true;
				}
				i = i + (1) >> 0;
				continue;
			}
			break;
		}
		if (!sawdigits) {
			return [mantissa, exp, neg, trunc, ok];
		}
		if (!sawdot) {
			dp = nd;
		}
		if (i < s.length && ((s.charCodeAt(i) === 101) || (s.charCodeAt(i) === 69))) {
			i = i + (1) >> 0;
			if (i >= s.length) {
				return [mantissa, exp, neg, trunc, ok];
			}
			esign = 1;
			if (s.charCodeAt(i) === 43) {
				i = i + (1) >> 0;
			} else if (s.charCodeAt(i) === 45) {
				i = i + (1) >> 0;
				esign = -1;
			}
			if (i >= s.length || s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) {
				return [mantissa, exp, neg, trunc, ok];
			}
			e = 0;
			while (true) {
				if (!(i < s.length && 48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57)) { break; }
				if (e < 10000) {
					e = (($imul(e, 10)) + ((s.charCodeAt(i) >> 0)) >> 0) - 48 >> 0;
				}
				i = i + (1) >> 0;
			}
			dp = dp + (($imul(e, esign))) >> 0;
		}
		if (!((i === s.length))) {
			return [mantissa, exp, neg, trunc, ok];
		}
		if (!((mantissa.$high === 0 && mantissa.$low === 0))) {
			exp = dp - ndMant >> 0;
		}
		ok = true;
		return [mantissa, exp, neg, trunc, ok];
	};
	decimal.ptr.prototype.floatBits = function(flt) {
		var _tmp, _tmp$1, b, bits$1, d, exp, flt, mant, n, n$1, n$2, overflow, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, y, y$1, y$2, y$3, $s;
		/* */ $s = 0; s: while (true) { switch ($s) { case 0:
		b = new $Uint64(0, 0);
		overflow = false;
		d = this;
		exp = 0;
		mant = new $Uint64(0, 0);
		/* */ if (d.nd === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (d.nd === 0) { */ case 1:
			mant = new $Uint64(0, 0);
			exp = flt.bias;
			/* goto out */ $s = 3; continue;
		/* } */ case 2:
		/* */ if (d.dp > 310) { $s = 4; continue; }
		/* */ $s = 5; continue;
		/* if (d.dp > 310) { */ case 4:
			/* goto overflow */ $s = 6; continue;
		/* } */ case 5:
		/* */ if (d.dp < -330) { $s = 7; continue; }
		/* */ $s = 8; continue;
		/* if (d.dp < -330) { */ case 7:
			mant = new $Uint64(0, 0);
			exp = flt.bias;
			/* goto out */ $s = 3; continue;
		/* } */ case 8:
		exp = 0;
		while (true) {
			if (!(d.dp > 0)) { break; }
			n = 0;
			if (d.dp >= powtab.$length) {
				n = 27;
			} else {
				n = (x = d.dp, ((x < 0 || x >= powtab.$length) ? ($throwRuntimeError("index out of range"), undefined) : powtab.$array[powtab.$offset + x]));
			}
			d.Shift(-n);
			exp = exp + (n) >> 0;
		}
		while (true) {
			if (!(d.dp < 0 || (d.dp === 0) && d.d[0] < 53)) { break; }
			n$1 = 0;
			if (-d.dp >= powtab.$length) {
				n$1 = 27;
			} else {
				n$1 = (x$1 = -d.dp, ((x$1 < 0 || x$1 >= powtab.$length) ? ($throwRuntimeError("index out of range"), undefined) : powtab.$array[powtab.$offset + x$1]));
			}
			d.Shift(n$1);
			exp = exp - (n$1) >> 0;
		}
		exp = exp - (1) >> 0;
		if (exp < (flt.bias + 1 >> 0)) {
			n$2 = (flt.bias + 1 >> 0) - exp >> 0;
			d.Shift(-n$2);
			exp = exp + (n$2) >> 0;
		}
		/* */ if ((exp - flt.bias >> 0) >= (((y = flt.expbits, y < 32 ? (1 << y) : 0) >> 0) - 1 >> 0)) { $s = 9; continue; }
		/* */ $s = 10; continue;
		/* if ((exp - flt.bias >> 0) >= (((y = flt.expbits, y < 32 ? (1 << y) : 0) >> 0) - 1 >> 0)) { */ case 9:
			/* goto overflow */ $s = 6; continue;
		/* } */ case 10:
		d.Shift((((1 + flt.mantbits >>> 0) >> 0)));
		mant = d.RoundedInteger();
		/* */ if ((x$2 = $shiftLeft64(new $Uint64(0, 2), flt.mantbits), (mant.$high === x$2.$high && mant.$low === x$2.$low))) { $s = 11; continue; }
		/* */ $s = 12; continue;
		/* if ((x$2 = $shiftLeft64(new $Uint64(0, 2), flt.mantbits), (mant.$high === x$2.$high && mant.$low === x$2.$low))) { */ case 11:
			mant = $shiftRightUint64(mant, (1));
			exp = exp + (1) >> 0;
			/* */ if ((exp - flt.bias >> 0) >= (((y$1 = flt.expbits, y$1 < 32 ? (1 << y$1) : 0) >> 0) - 1 >> 0)) { $s = 13; continue; }
			/* */ $s = 14; continue;
			/* if ((exp - flt.bias >> 0) >= (((y$1 = flt.expbits, y$1 < 32 ? (1 << y$1) : 0) >> 0) - 1 >> 0)) { */ case 13:
				/* goto overflow */ $s = 6; continue;
			/* } */ case 14:
		/* } */ case 12:
		if ((x$3 = (x$4 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), new $Uint64(mant.$high & x$4.$high, (mant.$low & x$4.$low) >>> 0)), (x$3.$high === 0 && x$3.$low === 0))) {
			exp = flt.bias;
		}
		/* goto out */ $s = 3; continue;
		/* overflow: */ case 6:
		mant = new $Uint64(0, 0);
		exp = (((y$2 = flt.expbits, y$2 < 32 ? (1 << y$2) : 0) >> 0) - 1 >> 0) + flt.bias >> 0;
		overflow = true;
		/* out: */ case 3:
		bits$1 = (x$5 = (x$6 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), new $Uint64(x$6.$high - 0, x$6.$low - 1)), new $Uint64(mant.$high & x$5.$high, (mant.$low & x$5.$low) >>> 0));
		bits$1 = (x$7 = $shiftLeft64((new $Uint64(0, (((exp - flt.bias >> 0)) & ((((y$3 = flt.expbits, y$3 < 32 ? (1 << y$3) : 0) >> 0) - 1 >> 0))))), flt.mantbits), new $Uint64(bits$1.$high | x$7.$high, (bits$1.$low | x$7.$low) >>> 0));
		if (d.neg) {
			bits$1 = (x$8 = $shiftLeft64($shiftLeft64(new $Uint64(0, 1), flt.mantbits), flt.expbits), new $Uint64(bits$1.$high | x$8.$high, (bits$1.$low | x$8.$low) >>> 0));
		}
		_tmp = bits$1;
		_tmp$1 = overflow;
		b = _tmp;
		overflow = _tmp$1;
		$s = -1; return [b, overflow];
		/* */ } return; }
	};
	decimal.prototype.floatBits = function(flt) { return this.$val.floatBits(flt); };
	atof64exact = function(mantissa, exp, neg) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, exp, f, mantissa, neg, ok, x, x$1, x$2;
		f = 0;
		ok = false;
		if (!((x = $shiftRightUint64(mantissa, float64info.mantbits), (x.$high === 0 && x.$low === 0)))) {
			return [f, ok];
		}
		f = ($flatten64(mantissa));
		if (neg) {
			f = -f;
		}
		if ((exp === 0)) {
			_tmp = f;
			_tmp$1 = true;
			f = _tmp;
			ok = _tmp$1;
			return [f, ok];
		} else if (exp > 0 && exp <= 37) {
			if (exp > 22) {
				f = f * ((x$1 = exp - 22 >> 0, ((x$1 < 0 || x$1 >= float64pow10.$length) ? ($throwRuntimeError("index out of range"), undefined) : float64pow10.$array[float64pow10.$offset + x$1])));
				exp = 22;
			}
			if (f > 1e+15 || f < -1e+15) {
				return [f, ok];
			}
			_tmp$2 = f * ((exp < 0 || exp >= float64pow10.$length) ? ($throwRuntimeError("index out of range"), undefined) : float64pow10.$array[float64pow10.$offset + exp]);
			_tmp$3 = true;
			f = _tmp$2;
			ok = _tmp$3;
			return [f, ok];
		} else if (exp < 0 && exp >= -22) {
			_tmp$4 = f / (x$2 = -exp, ((x$2 < 0 || x$2 >= float64pow10.$length) ? ($throwRuntimeError("index out of range"), undefined) : float64pow10.$array[float64pow10.$offset + x$2]));
			_tmp$5 = true;
			f = _tmp$4;
			ok = _tmp$5;
			return [f, ok];
		}
		return [f, ok];
	};
	atof32exact = function(mantissa, exp, neg) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, exp, f, mantissa, neg, ok, x, x$1, x$2;
		f = 0;
		ok = false;
		if (!((x = $shiftRightUint64(mantissa, float32info.mantbits), (x.$high === 0 && x.$low === 0)))) {
			return [f, ok];
		}
		f = ($flatten64(mantissa));
		if (neg) {
			f = -f;
		}
		if ((exp === 0)) {
			_tmp = f;
			_tmp$1 = true;
			f = _tmp;
			ok = _tmp$1;
			return [f, ok];
		} else if (exp > 0 && exp <= 17) {
			if (exp > 10) {
				f = $fround(f * ((x$1 = exp - 10 >> 0, ((x$1 < 0 || x$1 >= float32pow10.$length) ? ($throwRuntimeError("index out of range"), undefined) : float32pow10.$array[float32pow10.$offset + x$1]))));
				exp = 10;
			}
			if (f > 1e+07 || f < -1e+07) {
				return [f, ok];
			}
			_tmp$2 = $fround(f * ((exp < 0 || exp >= float32pow10.$length) ? ($throwRuntimeError("index out of range"), undefined) : float32pow10.$array[float32pow10.$offset + exp]));
			_tmp$3 = true;
			f = _tmp$2;
			ok = _tmp$3;
			return [f, ok];
		} else if (exp < 0 && exp >= -10) {
			_tmp$4 = $fround(f / (x$2 = -exp, ((x$2 < 0 || x$2 >= float32pow10.$length) ? ($throwRuntimeError("index out of range"), undefined) : float32pow10.$array[float32pow10.$offset + x$2])));
			_tmp$5 = true;
			f = _tmp$4;
			ok = _tmp$5;
			return [f, ok];
		}
		return [f, ok];
	};
	atof32 = function(s) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, b, b$1, d, err, exp, ext, f, f$1, mantissa, neg, ok, ok$1, ok$2, ok$3, ovf, ovf$1, s, trunc, val;
		f = 0;
		err = $ifaceNil;
		_tuple = special(s);
		val = _tuple[0];
		ok = _tuple[1];
		if (ok) {
			_tmp = ($fround(val));
			_tmp$1 = $ifaceNil;
			f = _tmp;
			err = _tmp$1;
			return [f, err];
		}
		if (optimize) {
			_tuple$1 = readFloat(s);
			mantissa = _tuple$1[0];
			exp = _tuple$1[1];
			neg = _tuple$1[2];
			trunc = _tuple$1[3];
			ok$1 = _tuple$1[4];
			if (ok$1) {
				if (!trunc) {
					_tuple$2 = atof32exact(mantissa, exp, neg);
					f$1 = _tuple$2[0];
					ok$2 = _tuple$2[1];
					if (ok$2) {
						_tmp$2 = f$1;
						_tmp$3 = $ifaceNil;
						f = _tmp$2;
						err = _tmp$3;
						return [f, err];
					}
				}
				ext = new extFloat.ptr(new $Uint64(0, 0), 0, false);
				ok$3 = ext.AssignDecimal(mantissa, exp, neg, trunc, float32info);
				if (ok$3) {
					_tuple$3 = ext.floatBits(float32info);
					b = _tuple$3[0];
					ovf = _tuple$3[1];
					f = math.Float32frombits(((b.$low >>> 0)));
					if (ovf) {
						err = rangeError("ParseFloat", s);
					}
					_tmp$4 = f;
					_tmp$5 = err;
					f = _tmp$4;
					err = _tmp$5;
					return [f, err];
				}
			}
		}
		d = new decimal.ptr(arrayType.zero(), 0, 0, false, false);
		if (!d.set(s)) {
			_tmp$6 = 0;
			_tmp$7 = syntaxError("ParseFloat", s);
			f = _tmp$6;
			err = _tmp$7;
			return [f, err];
		}
		_tuple$4 = d.floatBits(float32info);
		b$1 = _tuple$4[0];
		ovf$1 = _tuple$4[1];
		f = math.Float32frombits(((b$1.$low >>> 0)));
		if (ovf$1) {
			err = rangeError("ParseFloat", s);
		}
		_tmp$8 = f;
		_tmp$9 = err;
		f = _tmp$8;
		err = _tmp$9;
		return [f, err];
	};
	atof64 = function(s) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, b, b$1, d, err, exp, ext, f, f$1, mantissa, neg, ok, ok$1, ok$2, ok$3, ovf, ovf$1, s, trunc, val;
		f = 0;
		err = $ifaceNil;
		_tuple = special(s);
		val = _tuple[0];
		ok = _tuple[1];
		if (ok) {
			_tmp = val;
			_tmp$1 = $ifaceNil;
			f = _tmp;
			err = _tmp$1;
			return [f, err];
		}
		if (optimize) {
			_tuple$1 = readFloat(s);
			mantissa = _tuple$1[0];
			exp = _tuple$1[1];
			neg = _tuple$1[2];
			trunc = _tuple$1[3];
			ok$1 = _tuple$1[4];
			if (ok$1) {
				if (!trunc) {
					_tuple$2 = atof64exact(mantissa, exp, neg);
					f$1 = _tuple$2[0];
					ok$2 = _tuple$2[1];
					if (ok$2) {
						_tmp$2 = f$1;
						_tmp$3 = $ifaceNil;
						f = _tmp$2;
						err = _tmp$3;
						return [f, err];
					}
				}
				ext = new extFloat.ptr(new $Uint64(0, 0), 0, false);
				ok$3 = ext.AssignDecimal(mantissa, exp, neg, trunc, float64info);
				if (ok$3) {
					_tuple$3 = ext.floatBits(float64info);
					b = _tuple$3[0];
					ovf = _tuple$3[1];
					f = math.Float64frombits(b);
					if (ovf) {
						err = rangeError("ParseFloat", s);
					}
					_tmp$4 = f;
					_tmp$5 = err;
					f = _tmp$4;
					err = _tmp$5;
					return [f, err];
				}
			}
		}
		d = new decimal.ptr(arrayType.zero(), 0, 0, false, false);
		if (!d.set(s)) {
			_tmp$6 = 0;
			_tmp$7 = syntaxError("ParseFloat", s);
			f = _tmp$6;
			err = _tmp$7;
			return [f, err];
		}
		_tuple$4 = d.floatBits(float64info);
		b$1 = _tuple$4[0];
		ovf$1 = _tuple$4[1];
		f = math.Float64frombits(b$1);
		if (ovf$1) {
			err = rangeError("ParseFloat", s);
		}
		_tmp$8 = f;
		_tmp$9 = err;
		f = _tmp$8;
		err = _tmp$9;
		return [f, err];
	};
	ParseFloat = function(s, bitSize) {
		var _tuple, bitSize, err, f, s;
		if (bitSize === 32) {
			_tuple = atof32(s);
			f = _tuple[0];
			err = _tuple[1];
			return [(f), err];
		}
		return atof64(s);
	};
	$pkg.ParseFloat = ParseFloat;
	NumError.ptr.prototype.Error = function() {
		var _r, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
		_r = e.Err.Error(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return "strconv." + e.Func + ": " + "parsing " + Quote(e.Num) + ": " + _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: NumError.ptr.prototype.Error }; } $f._r = _r; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	NumError.prototype.Error = function() { return this.$val.Error(); };
	syntaxError = function(fn, str) {
		var fn, str;
		return new NumError.ptr(fn, str, $pkg.ErrSyntax);
	};
	rangeError = function(fn, str) {
		var fn, str;
		return new NumError.ptr(fn, str, $pkg.ErrRange);
	};
	baseError = function(fn, str, base) {
		var base, fn, str;
		return new NumError.ptr(fn, str, errors.New("invalid base " + Itoa(base)));
	};
	bitSizeError = function(fn, str, bitSize) {
		var bitSize, fn, str;
		return new NumError.ptr(fn, str, errors.New("invalid bit size " + Itoa(bitSize)));
	};
	ParseUint = function(s, base, bitSize) {
		var _1, _i, _ref, base, bitSize, c, cutoff, d, maxVal, n, n1, s, s0, x, x$1, x$2;
		if (s.length === 0) {
			return [new $Uint64(0, 0), syntaxError("ParseUint", s)];
		}
		s0 = s;
		if (2 <= base && base <= 36) {
		} else if ((base === 0)) {
			if ((s.charCodeAt(0) === 48) && s.length > 1 && ((s.charCodeAt(1) === 120) || (s.charCodeAt(1) === 88))) {
				if (s.length < 3) {
					return [new $Uint64(0, 0), syntaxError("ParseUint", s0)];
				}
				base = 16;
				s = $substring(s, 2);
			} else if ((s.charCodeAt(0) === 48)) {
				base = 8;
				s = $substring(s, 1);
			} else {
				base = 10;
			}
		} else {
			return [new $Uint64(0, 0), baseError("ParseUint", s0, base)];
		}
		if (bitSize === 0) {
			bitSize = 32;
		} else if (bitSize < 0 || bitSize > 64) {
			return [new $Uint64(0, 0), bitSizeError("ParseUint", s0, bitSize)];
		}
		cutoff = new $Uint64(0, 0);
		_1 = base;
		if (_1 === (10)) {
			cutoff = new $Uint64(429496729, 2576980378);
		} else if (_1 === (16)) {
			cutoff = new $Uint64(268435456, 0);
		} else {
			cutoff = (x = $div64(new $Uint64(4294967295, 4294967295), (new $Uint64(0, base)), false), new $Uint64(x.$high + 0, x.$low + 1));
		}
		maxVal = (x$1 = $shiftLeft64(new $Uint64(0, 1), ((bitSize >>> 0))), new $Uint64(x$1.$high - 0, x$1.$low - 1));
		n = new $Uint64(0, 0);
		_ref = (new sliceType$6($stringToBytes(s)));
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
			d = 0;
			if (48 <= c && c <= 57) {
				d = c - 48 << 24 >>> 24;
			} else if (97 <= c && c <= 122) {
				d = (c - 97 << 24 >>> 24) + 10 << 24 >>> 24;
			} else if (65 <= c && c <= 90) {
				d = (c - 65 << 24 >>> 24) + 10 << 24 >>> 24;
			} else {
				return [new $Uint64(0, 0), syntaxError("ParseUint", s0)];
			}
			if (d >= ((base << 24 >>> 24))) {
				return [new $Uint64(0, 0), syntaxError("ParseUint", s0)];
			}
			if ((n.$high > cutoff.$high || (n.$high === cutoff.$high && n.$low >= cutoff.$low))) {
				return [maxVal, rangeError("ParseUint", s0)];
			}
			n = $mul64(n, ((new $Uint64(0, base))));
			n1 = (x$2 = (new $Uint64(0, d)), new $Uint64(n.$high + x$2.$high, n.$low + x$2.$low));
			if ((n1.$high < n.$high || (n1.$high === n.$high && n1.$low < n.$low)) || (n1.$high > maxVal.$high || (n1.$high === maxVal.$high && n1.$low > maxVal.$low))) {
				return [maxVal, rangeError("ParseUint", s0)];
			}
			n = n1;
			_i++;
		}
		return [n, $ifaceNil];
	};
	$pkg.ParseUint = ParseUint;
	ParseInt = function(s, base, bitSize) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, base, bitSize, cutoff, err, i, n, neg, s, s0, un, x, x$1;
		i = new $Int64(0, 0);
		err = $ifaceNil;
		if (s.length === 0) {
			_tmp = new $Int64(0, 0);
			_tmp$1 = syntaxError("ParseInt", s);
			i = _tmp;
			err = _tmp$1;
			return [i, err];
		}
		s0 = s;
		neg = false;
		if (s.charCodeAt(0) === 43) {
			s = $substring(s, 1);
		} else if (s.charCodeAt(0) === 45) {
			neg = true;
			s = $substring(s, 1);
		}
		un = new $Uint64(0, 0);
		_tuple = ParseUint(s, base, bitSize);
		un = _tuple[0];
		err = _tuple[1];
		if (!($interfaceIsEqual(err, $ifaceNil)) && !($interfaceIsEqual($assertType(err, ptrType).Err, $pkg.ErrRange))) {
			$assertType(err, ptrType).Func = "ParseInt";
			$assertType(err, ptrType).Num = s0;
			_tmp$2 = new $Int64(0, 0);
			_tmp$3 = err;
			i = _tmp$2;
			err = _tmp$3;
			return [i, err];
		}
		if (bitSize === 0) {
			bitSize = 32;
		}
		cutoff = ($shiftLeft64(new $Uint64(0, 1), (((bitSize - 1 >> 0) >>> 0))));
		if (!neg && (un.$high > cutoff.$high || (un.$high === cutoff.$high && un.$low >= cutoff.$low))) {
			_tmp$4 = ((x = new $Uint64(cutoff.$high - 0, cutoff.$low - 1), new $Int64(x.$high, x.$low)));
			_tmp$5 = rangeError("ParseInt", s0);
			i = _tmp$4;
			err = _tmp$5;
			return [i, err];
		}
		if (neg && (un.$high > cutoff.$high || (un.$high === cutoff.$high && un.$low > cutoff.$low))) {
			_tmp$6 = (x$1 = (new $Int64(cutoff.$high, cutoff.$low)), new $Int64(-x$1.$high, -x$1.$low));
			_tmp$7 = rangeError("ParseInt", s0);
			i = _tmp$6;
			err = _tmp$7;
			return [i, err];
		}
		n = (new $Int64(un.$high, un.$low));
		if (neg) {
			n = new $Int64(-n.$high, -n.$low);
		}
		_tmp$8 = n;
		_tmp$9 = $ifaceNil;
		i = _tmp$8;
		err = _tmp$9;
		return [i, err];
	};
	$pkg.ParseInt = ParseInt;
	decimal.ptr.prototype.String = function() {
		var a, buf, n, w;
		a = this;
		n = 10 + a.nd >> 0;
		if (a.dp > 0) {
			n = n + (a.dp) >> 0;
		}
		if (a.dp < 0) {
			n = n + (-a.dp) >> 0;
		}
		buf = $makeSlice(sliceType$6, n);
		w = 0;
		if ((a.nd === 0)) {
			return "0";
		} else if (a.dp <= 0) {
			((w < 0 || w >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + w] = 48);
			w = w + (1) >> 0;
			((w < 0 || w >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + w] = 46);
			w = w + (1) >> 0;
			w = w + (digitZero($subslice(buf, w, (w + -a.dp >> 0)))) >> 0;
			w = w + ($copySlice($subslice(buf, w), $subslice(new sliceType$6(a.d), 0, a.nd))) >> 0;
		} else if (a.dp < a.nd) {
			w = w + ($copySlice($subslice(buf, w), $subslice(new sliceType$6(a.d), 0, a.dp))) >> 0;
			((w < 0 || w >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + w] = 46);
			w = w + (1) >> 0;
			w = w + ($copySlice($subslice(buf, w), $subslice(new sliceType$6(a.d), a.dp, a.nd))) >> 0;
		} else {
			w = w + ($copySlice($subslice(buf, w), $subslice(new sliceType$6(a.d), 0, a.nd))) >> 0;
			w = w + (digitZero($subslice(buf, w, ((w + a.dp >> 0) - a.nd >> 0)))) >> 0;
		}
		return ($bytesToString($subslice(buf, 0, w)));
	};
	decimal.prototype.String = function() { return this.$val.String(); };
	digitZero = function(dst) {
		var _i, _ref, dst, i;
		_ref = dst;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			((i < 0 || i >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + i] = 48);
			_i++;
		}
		return dst.$length;
	};
	trim = function(a) {
		var a, x, x$1;
		while (true) {
			if (!(a.nd > 0 && ((x = a.d, x$1 = a.nd - 1 >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])) === 48))) { break; }
			a.nd = a.nd - (1) >> 0;
		}
		if (a.nd === 0) {
			a.dp = 0;
		}
	};
	decimal.ptr.prototype.Assign = function(v) {
		var a, buf, n, v, v1, x, x$1, x$2;
		a = this;
		buf = arrayType$1.zero();
		n = 0;
		while (true) {
			if (!((v.$high > 0 || (v.$high === 0 && v.$low > 0)))) { break; }
			v1 = $div64(v, new $Uint64(0, 10), false);
			v = (x = $mul64(new $Uint64(0, 10), v1), new $Uint64(v.$high - x.$high, v.$low - x.$low));
			((n < 0 || n >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[n] = ((new $Uint64(v.$high + 0, v.$low + 48).$low << 24 >>> 24)));
			n = n + (1) >> 0;
			v = v1;
		}
		a.nd = 0;
		n = n - (1) >> 0;
		while (true) {
			if (!(n >= 0)) { break; }
			(x$1 = a.d, x$2 = a.nd, ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2] = ((n < 0 || n >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[n])));
			a.nd = a.nd + (1) >> 0;
			n = n - (1) >> 0;
		}
		a.dp = a.nd;
		trim(a);
	};
	decimal.prototype.Assign = function(v) { return this.$val.Assign(v); };
	rightShift = function(a, k) {
		var a, c, c$1, dig, dig$1, k, mask, n, r, w, x, x$1, x$2, x$3, y, y$1, y$2, y$3, y$4;
		r = 0;
		w = 0;
		n = 0;
		while (true) {
			if (!(((y = k, y < 32 ? (n >>> y) : 0) >>> 0) === 0)) { break; }
			if (r >= a.nd) {
				if (n === 0) {
					a.nd = 0;
					return;
				}
				while (true) {
					if (!(((y$1 = k, y$1 < 32 ? (n >>> y$1) : 0) >>> 0) === 0)) { break; }
					n = n * 10 >>> 0;
					r = r + (1) >> 0;
				}
				break;
			}
			c = (((x = a.d, ((r < 0 || r >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[r])) >>> 0));
			n = ((n * 10 >>> 0) + c >>> 0) - 48 >>> 0;
			r = r + (1) >> 0;
		}
		a.dp = a.dp - ((r - 1 >> 0)) >> 0;
		mask = (((y$2 = k, y$2 < 32 ? (1 << y$2) : 0) >>> 0)) - 1 >>> 0;
		while (true) {
			if (!(r < a.nd)) { break; }
			c$1 = (((x$1 = a.d, ((r < 0 || r >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[r])) >>> 0));
			dig = (y$3 = k, y$3 < 32 ? (n >>> y$3) : 0) >>> 0;
			n = (n & (mask)) >>> 0;
			(x$2 = a.d, ((w < 0 || w >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[w] = (((dig + 48 >>> 0) << 24 >>> 24))));
			w = w + (1) >> 0;
			n = ((n * 10 >>> 0) + c$1 >>> 0) - 48 >>> 0;
			r = r + (1) >> 0;
		}
		while (true) {
			if (!(n > 0)) { break; }
			dig$1 = (y$4 = k, y$4 < 32 ? (n >>> y$4) : 0) >>> 0;
			n = (n & (mask)) >>> 0;
			if (w < 800) {
				(x$3 = a.d, ((w < 0 || w >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[w] = (((dig$1 + 48 >>> 0) << 24 >>> 24))));
				w = w + (1) >> 0;
			} else if (dig$1 > 0) {
				a.trunc = true;
			}
			n = n * 10 >>> 0;
		}
		a.nd = w;
		trim(a);
	};
	prefixIsLessThan = function(b, s) {
		var b, i, s;
		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
			if (i >= b.$length) {
				return true;
			}
			if (!((((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i]) === s.charCodeAt(i)))) {
				return ((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i]) < s.charCodeAt(i);
			}
			i = i + (1) >> 0;
		}
		return false;
	};
	leftShift = function(a, k) {
		var _q, _q$1, a, delta, k, n, quo, quo$1, r, rem, rem$1, w, x, x$1, x$2, y;
		delta = ((k < 0 || k >= leftcheats.$length) ? ($throwRuntimeError("index out of range"), undefined) : leftcheats.$array[leftcheats.$offset + k]).delta;
		if (prefixIsLessThan($subslice(new sliceType$6(a.d), 0, a.nd), ((k < 0 || k >= leftcheats.$length) ? ($throwRuntimeError("index out of range"), undefined) : leftcheats.$array[leftcheats.$offset + k]).cutoff)) {
			delta = delta - (1) >> 0;
		}
		r = a.nd;
		w = a.nd + delta >> 0;
		n = 0;
		r = r - (1) >> 0;
		while (true) {
			if (!(r >= 0)) { break; }
			n = n + (((y = k, y < 32 ? ((((((x = a.d, ((r < 0 || r >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[r])) >>> 0)) - 48 >>> 0)) << y) : 0) >>> 0)) >>> 0;
			quo = (_q = n / 10, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
			rem = n - (10 * quo >>> 0) >>> 0;
			w = w - (1) >> 0;
			if (w < 800) {
				(x$1 = a.d, ((w < 0 || w >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[w] = (((rem + 48 >>> 0) << 24 >>> 24))));
			} else if (!((rem === 0))) {
				a.trunc = true;
			}
			n = quo;
			r = r - (1) >> 0;
		}
		while (true) {
			if (!(n > 0)) { break; }
			quo$1 = (_q$1 = n / 10, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
			rem$1 = n - (10 * quo$1 >>> 0) >>> 0;
			w = w - (1) >> 0;
			if (w < 800) {
				(x$2 = a.d, ((w < 0 || w >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[w] = (((rem$1 + 48 >>> 0) << 24 >>> 24))));
			} else if (!((rem$1 === 0))) {
				a.trunc = true;
			}
			n = quo$1;
		}
		a.nd = a.nd + (delta) >> 0;
		if (a.nd >= 800) {
			a.nd = 800;
		}
		a.dp = a.dp + (delta) >> 0;
		trim(a);
	};
	decimal.ptr.prototype.Shift = function(k) {
		var a, k;
		a = this;
		if ((a.nd === 0)) {
		} else if (k > 0) {
			while (true) {
				if (!(k > 28)) { break; }
				leftShift(a, 28);
				k = k - (28) >> 0;
			}
			leftShift(a, ((k >>> 0)));
		} else if (k < 0) {
			while (true) {
				if (!(k < -28)) { break; }
				rightShift(a, 28);
				k = k + (28) >> 0;
			}
			rightShift(a, ((-k >>> 0)));
		}
	};
	decimal.prototype.Shift = function(k) { return this.$val.Shift(k); };
	shouldRoundUp = function(a, nd) {
		var _r, a, nd, x, x$1, x$2, x$3;
		if (nd < 0 || nd >= a.nd) {
			return false;
		}
		if (((x = a.d, ((nd < 0 || nd >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[nd])) === 53) && ((nd + 1 >> 0) === a.nd)) {
			if (a.trunc) {
				return true;
			}
			return nd > 0 && !(((_r = (((x$1 = a.d, x$2 = nd - 1 >> 0, ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2])) - 48 << 24 >>> 24)) % 2, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0));
		}
		return (x$3 = a.d, ((nd < 0 || nd >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[nd])) >= 53;
	};
	decimal.ptr.prototype.Round = function(nd) {
		var a, nd;
		a = this;
		if (nd < 0 || nd >= a.nd) {
			return;
		}
		if (shouldRoundUp(a, nd)) {
			a.RoundUp(nd);
		} else {
			a.RoundDown(nd);
		}
	};
	decimal.prototype.Round = function(nd) { return this.$val.Round(nd); };
	decimal.ptr.prototype.RoundDown = function(nd) {
		var a, nd;
		a = this;
		if (nd < 0 || nd >= a.nd) {
			return;
		}
		a.nd = nd;
		trim(a);
	};
	decimal.prototype.RoundDown = function(nd) { return this.$val.RoundDown(nd); };
	decimal.ptr.prototype.RoundUp = function(nd) {
		var a, c, i, nd, x, x$1, x$2;
		a = this;
		if (nd < 0 || nd >= a.nd) {
			return;
		}
		i = nd - 1 >> 0;
		while (true) {
			if (!(i >= 0)) { break; }
			c = (x = a.d, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i]));
			if (c < 57) {
				(x$2 = a.d, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i] = ((x$1 = a.d, ((i < 0 || i >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[i])) + (1) << 24 >>> 24)));
				a.nd = i + 1 >> 0;
				return;
			}
			i = i - (1) >> 0;
		}
		a.d[0] = 49;
		a.nd = 1;
		a.dp = a.dp + (1) >> 0;
	};
	decimal.prototype.RoundUp = function(nd) { return this.$val.RoundUp(nd); };
	decimal.ptr.prototype.RoundedInteger = function() {
		var a, i, n, x, x$1, x$2, x$3;
		a = this;
		if (a.dp > 20) {
			return new $Uint64(4294967295, 4294967295);
		}
		i = 0;
		n = new $Uint64(0, 0);
		i = 0;
		while (true) {
			if (!(i < a.dp && i < a.nd)) { break; }
			n = (x = $mul64(n, new $Uint64(0, 10)), x$1 = (new $Uint64(0, ((x$2 = a.d, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i])) - 48 << 24 >>> 24))), new $Uint64(x.$high + x$1.$high, x.$low + x$1.$low));
			i = i + (1) >> 0;
		}
		while (true) {
			if (!(i < a.dp)) { break; }
			n = $mul64(n, (new $Uint64(0, 10)));
			i = i + (1) >> 0;
		}
		if (shouldRoundUp(a, a.dp)) {
			n = (x$3 = new $Uint64(0, 1), new $Uint64(n.$high + x$3.$high, n.$low + x$3.$low));
		}
		return n;
	};
	decimal.prototype.RoundedInteger = function() { return this.$val.RoundedInteger(); };
	extFloat.ptr.prototype.floatBits = function(flt) {
		var bits$1, exp, f, flt, mant, n, overflow, x, x$1, x$10, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y, y$1, y$2;
		bits$1 = new $Uint64(0, 0);
		overflow = false;
		f = this;
		f.Normalize();
		exp = f.exp + 63 >> 0;
		if (exp < (flt.bias + 1 >> 0)) {
			n = (flt.bias + 1 >> 0) - exp >> 0;
			f.mant = $shiftRightUint64(f.mant, (((n >>> 0))));
			exp = exp + (n) >> 0;
		}
		mant = $shiftRightUint64(f.mant, ((63 - flt.mantbits >>> 0)));
		if (!((x = (x$1 = f.mant, x$2 = $shiftLeft64(new $Uint64(0, 1), ((62 - flt.mantbits >>> 0))), new $Uint64(x$1.$high & x$2.$high, (x$1.$low & x$2.$low) >>> 0)), (x.$high === 0 && x.$low === 0)))) {
			mant = (x$3 = new $Uint64(0, 1), new $Uint64(mant.$high + x$3.$high, mant.$low + x$3.$low));
		}
		if ((x$4 = $shiftLeft64(new $Uint64(0, 2), flt.mantbits), (mant.$high === x$4.$high && mant.$low === x$4.$low))) {
			mant = $shiftRightUint64(mant, (1));
			exp = exp + (1) >> 0;
		}
		if ((exp - flt.bias >> 0) >= (((y = flt.expbits, y < 32 ? (1 << y) : 0) >> 0) - 1 >> 0)) {
			mant = new $Uint64(0, 0);
			exp = (((y$1 = flt.expbits, y$1 < 32 ? (1 << y$1) : 0) >> 0) - 1 >> 0) + flt.bias >> 0;
			overflow = true;
		} else if ((x$5 = (x$6 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), new $Uint64(mant.$high & x$6.$high, (mant.$low & x$6.$low) >>> 0)), (x$5.$high === 0 && x$5.$low === 0))) {
			exp = flt.bias;
		}
		bits$1 = (x$7 = (x$8 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), new $Uint64(x$8.$high - 0, x$8.$low - 1)), new $Uint64(mant.$high & x$7.$high, (mant.$low & x$7.$low) >>> 0));
		bits$1 = (x$9 = $shiftLeft64((new $Uint64(0, (((exp - flt.bias >> 0)) & ((((y$2 = flt.expbits, y$2 < 32 ? (1 << y$2) : 0) >> 0) - 1 >> 0))))), flt.mantbits), new $Uint64(bits$1.$high | x$9.$high, (bits$1.$low | x$9.$low) >>> 0));
		if (f.neg) {
			bits$1 = (x$10 = $shiftLeft64(new $Uint64(0, 1), ((flt.mantbits + flt.expbits >>> 0))), new $Uint64(bits$1.$high | x$10.$high, (bits$1.$low | x$10.$low) >>> 0));
		}
		return [bits$1, overflow];
	};
	extFloat.prototype.floatBits = function(flt) { return this.$val.floatBits(flt); };
	extFloat.ptr.prototype.AssignComputeBounds = function(mant, exp, neg, flt) {
		var _tmp, _tmp$1, exp, expBiased, f, flt, lower, mant, neg, upper, x, x$1, x$2, x$3, x$4;
		lower = new extFloat.ptr(new $Uint64(0, 0), 0, false);
		upper = new extFloat.ptr(new $Uint64(0, 0), 0, false);
		f = this;
		f.mant = mant;
		f.exp = exp - ((flt.mantbits >> 0)) >> 0;
		f.neg = neg;
		if (f.exp <= 0 && (x = $shiftLeft64(($shiftRightUint64(mant, ((-f.exp >>> 0)))), ((-f.exp >>> 0))), (mant.$high === x.$high && mant.$low === x.$low))) {
			f.mant = $shiftRightUint64(f.mant, (((-f.exp >>> 0))));
			f.exp = 0;
			_tmp = $clone(f, extFloat);
			_tmp$1 = $clone(f, extFloat);
			extFloat.copy(lower, _tmp);
			extFloat.copy(upper, _tmp$1);
			return [lower, upper];
		}
		expBiased = exp - flt.bias >> 0;
		extFloat.copy(upper, new extFloat.ptr((x$1 = $mul64(new $Uint64(0, 2), f.mant), new $Uint64(x$1.$high + 0, x$1.$low + 1)), f.exp - 1 >> 0, f.neg));
		if (!((x$2 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), (mant.$high === x$2.$high && mant.$low === x$2.$low))) || (expBiased === 1)) {
			extFloat.copy(lower, new extFloat.ptr((x$3 = $mul64(new $Uint64(0, 2), f.mant), new $Uint64(x$3.$high - 0, x$3.$low - 1)), f.exp - 1 >> 0, f.neg));
		} else {
			extFloat.copy(lower, new extFloat.ptr((x$4 = $mul64(new $Uint64(0, 4), f.mant), new $Uint64(x$4.$high - 0, x$4.$low - 1)), f.exp - 2 >> 0, f.neg));
		}
		return [lower, upper];
	};
	extFloat.prototype.AssignComputeBounds = function(mant, exp, neg, flt) { return this.$val.AssignComputeBounds(mant, exp, neg, flt); };
	extFloat.ptr.prototype.Normalize = function() {
		var f, shift, x;
		f = this;
		if ((x = f.mant, (x.$high === 0 && x.$low === 0))) {
			return 0;
		}
		shift = bits.LeadingZeros64(f.mant);
		f.mant = $shiftLeft64(f.mant, (((shift >>> 0))));
		f.exp = f.exp - (shift) >> 0;
		return ((shift >>> 0));
	};
	extFloat.prototype.Normalize = function() { return this.$val.Normalize(); };
	extFloat.ptr.prototype.Multiply = function(g) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, cross1, cross2, f, fhi, flo, g, ghi, glo, rem, x, x$1, x$10, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		f = this;
		_tmp = $shiftRightUint64(f.mant, 32);
		_tmp$1 = (new $Uint64(0, ((f.mant.$low >>> 0))));
		fhi = _tmp;
		flo = _tmp$1;
		_tmp$2 = $shiftRightUint64(g.mant, 32);
		_tmp$3 = (new $Uint64(0, ((g.mant.$low >>> 0))));
		ghi = _tmp$2;
		glo = _tmp$3;
		cross1 = $mul64(fhi, glo);
		cross2 = $mul64(flo, ghi);
		f.mant = (x = (x$1 = $mul64(fhi, ghi), x$2 = $shiftRightUint64(cross1, 32), new $Uint64(x$1.$high + x$2.$high, x$1.$low + x$2.$low)), x$3 = $shiftRightUint64(cross2, 32), new $Uint64(x.$high + x$3.$high, x.$low + x$3.$low));
		rem = (x$4 = (x$5 = (new $Uint64(0, ((cross1.$low >>> 0)))), x$6 = (new $Uint64(0, ((cross2.$low >>> 0)))), new $Uint64(x$5.$high + x$6.$high, x$5.$low + x$6.$low)), x$7 = $shiftRightUint64(($mul64(flo, glo)), 32), new $Uint64(x$4.$high + x$7.$high, x$4.$low + x$7.$low));
		rem = (x$8 = new $Uint64(0, 2147483648), new $Uint64(rem.$high + x$8.$high, rem.$low + x$8.$low));
		f.mant = (x$9 = f.mant, x$10 = ($shiftRightUint64(rem, 32)), new $Uint64(x$9.$high + x$10.$high, x$9.$low + x$10.$low));
		f.exp = (f.exp + g.exp >> 0) + 64 >> 0;
	};
	extFloat.prototype.Multiply = function(g) { return this.$val.Multiply(g); };
	extFloat.ptr.prototype.AssignDecimal = function(mantissa, exp10, neg, trunc, flt) {
		var _q, _r, adjExp, denormalExp, errors$1, exp10, extrabits, f, flt, halfway, i, mant_extra, mantissa, neg, ok, shift, trunc, x, x$1, x$10, x$11, x$12, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y;
		ok = false;
		f = this;
		errors$1 = 0;
		if (trunc) {
			errors$1 = errors$1 + (4) >> 0;
		}
		f.mant = mantissa;
		f.exp = 0;
		f.neg = neg;
		i = (_q = ((exp10 - -348 >> 0)) / 8, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
		if (exp10 < -348 || i >= 87) {
			ok = false;
			return ok;
		}
		adjExp = (_r = ((exp10 - -348 >> 0)) % 8, _r === _r ? _r : $throwRuntimeError("integer divide by zero"));
		if (adjExp < 19 && (x = (x$1 = 19 - adjExp >> 0, ((x$1 < 0 || x$1 >= uint64pow10.length) ? ($throwRuntimeError("index out of range"), undefined) : uint64pow10[x$1])), (mantissa.$high < x.$high || (mantissa.$high === x.$high && mantissa.$low < x.$low)))) {
			f.mant = $mul64(f.mant, (((adjExp < 0 || adjExp >= uint64pow10.length) ? ($throwRuntimeError("index out of range"), undefined) : uint64pow10[adjExp])));
			f.Normalize();
		} else {
			f.Normalize();
			f.Multiply($clone(((adjExp < 0 || adjExp >= smallPowersOfTen.length) ? ($throwRuntimeError("index out of range"), undefined) : smallPowersOfTen[adjExp]), extFloat));
			errors$1 = errors$1 + (4) >> 0;
		}
		f.Multiply($clone(((i < 0 || i >= powersOfTen.length) ? ($throwRuntimeError("index out of range"), undefined) : powersOfTen[i]), extFloat));
		if (errors$1 > 0) {
			errors$1 = errors$1 + (1) >> 0;
		}
		errors$1 = errors$1 + (4) >> 0;
		shift = f.Normalize();
		errors$1 = (y = (shift), y < 32 ? (errors$1 << y) : 0) >> 0;
		denormalExp = flt.bias - 63 >> 0;
		extrabits = 0;
		if (f.exp <= denormalExp) {
			extrabits = ((63 - flt.mantbits >>> 0) + 1 >>> 0) + (((denormalExp - f.exp >> 0) >>> 0)) >>> 0;
		} else {
			extrabits = 63 - flt.mantbits >>> 0;
		}
		halfway = $shiftLeft64(new $Uint64(0, 1), ((extrabits - 1 >>> 0)));
		mant_extra = (x$2 = f.mant, x$3 = (x$4 = $shiftLeft64(new $Uint64(0, 1), extrabits), new $Uint64(x$4.$high - 0, x$4.$low - 1)), new $Uint64(x$2.$high & x$3.$high, (x$2.$low & x$3.$low) >>> 0));
		if ((x$5 = (x$6 = (new $Int64(halfway.$high, halfway.$low)), x$7 = (new $Int64(0, errors$1)), new $Int64(x$6.$high - x$7.$high, x$6.$low - x$7.$low)), x$8 = (new $Int64(mant_extra.$high, mant_extra.$low)), (x$5.$high < x$8.$high || (x$5.$high === x$8.$high && x$5.$low < x$8.$low))) && (x$9 = (new $Int64(mant_extra.$high, mant_extra.$low)), x$10 = (x$11 = (new $Int64(halfway.$high, halfway.$low)), x$12 = (new $Int64(0, errors$1)), new $Int64(x$11.$high + x$12.$high, x$11.$low + x$12.$low)), (x$9.$high < x$10.$high || (x$9.$high === x$10.$high && x$9.$low < x$10.$low)))) {
			ok = false;
			return ok;
		}
		ok = true;
		return ok;
	};
	extFloat.prototype.AssignDecimal = function(mantissa, exp10, neg, trunc, flt) { return this.$val.AssignDecimal(mantissa, exp10, neg, trunc, flt); };
	extFloat.ptr.prototype.frexp10 = function() {
		var _q, _q$1, _tmp, _tmp$1, approxExp10, exp, exp10, f, i, index;
		exp10 = 0;
		index = 0;
		f = this;
		approxExp10 = (_q = ($imul(((-46 - f.exp >> 0)), 28)) / 93, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
		i = (_q$1 = ((approxExp10 - -348 >> 0)) / 8, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero"));
		Loop:
		while (true) {
			exp = (f.exp + ((i < 0 || i >= powersOfTen.length) ? ($throwRuntimeError("index out of range"), undefined) : powersOfTen[i]).exp >> 0) + 64 >> 0;
			if (exp < -60) {
				i = i + (1) >> 0;
			} else if (exp > -32) {
				i = i - (1) >> 0;
			} else {
				break Loop;
			}
		}
		f.Multiply($clone(((i < 0 || i >= powersOfTen.length) ? ($throwRuntimeError("index out of range"), undefined) : powersOfTen[i]), extFloat));
		_tmp = -((-348 + ($imul(i, 8)) >> 0));
		_tmp$1 = i;
		exp10 = _tmp;
		index = _tmp$1;
		return [exp10, index];
	};
	extFloat.prototype.frexp10 = function() { return this.$val.frexp10(); };
	frexp10Many = function(a, b, c) {
		var _tuple, a, b, c, exp10, i;
		exp10 = 0;
		_tuple = c.frexp10();
		exp10 = _tuple[0];
		i = _tuple[1];
		a.Multiply($clone(((i < 0 || i >= powersOfTen.length) ? ($throwRuntimeError("index out of range"), undefined) : powersOfTen[i]), extFloat));
		b.Multiply($clone(((i < 0 || i >= powersOfTen.length) ? ($throwRuntimeError("index out of range"), undefined) : powersOfTen[i]), extFloat));
		return exp10;
	};
	extFloat.ptr.prototype.FixedDecimal = function(d, n) {
		var $CE$B5, _q, _q$1, _tmp, _tmp$1, _tuple, buf, d, digit, exp10, f, fraction, i, i$1, i$2, integer, integerDigits, n, nd, needed, ok, pos, pow, pow10, rest, shift, v, v1, x, x$1, x$10, x$11, x$12, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		f = this;
		if ((x = f.mant, (x.$high === 0 && x.$low === 0))) {
			d.nd = 0;
			d.dp = 0;
			d.neg = f.neg;
			return true;
		}
		if (n === 0) {
			$panic(new $String("strconv: internal error: extFloat.FixedDecimal called with n == 0"));
		}
		f.Normalize();
		_tuple = f.frexp10();
		exp10 = _tuple[0];
		shift = ((-f.exp >>> 0));
		integer = (($shiftRightUint64(f.mant, shift).$low >>> 0));
		fraction = (x$1 = f.mant, x$2 = $shiftLeft64((new $Uint64(0, integer)), shift), new $Uint64(x$1.$high - x$2.$high, x$1.$low - x$2.$low));
		$CE$B5 = new $Uint64(0, 1);
		needed = n;
		integerDigits = 0;
		pow10 = new $Uint64(0, 1);
		_tmp = 0;
		_tmp$1 = new $Uint64(0, 1);
		i = _tmp;
		pow = _tmp$1;
		while (true) {
			if (!(i < 20)) { break; }
			if ((x$3 = (new $Uint64(0, integer)), (pow.$high > x$3.$high || (pow.$high === x$3.$high && pow.$low > x$3.$low)))) {
				integerDigits = i;
				break;
			}
			pow = $mul64(pow, (new $Uint64(0, 10)));
			i = i + (1) >> 0;
		}
		rest = integer;
		if (integerDigits > needed) {
			pow10 = (x$4 = integerDigits - needed >> 0, ((x$4 < 0 || x$4 >= uint64pow10.length) ? ($throwRuntimeError("index out of range"), undefined) : uint64pow10[x$4]));
			integer = (_q = integer / (((pow10.$low >>> 0))), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
			rest = rest - (($imul(integer, ((pow10.$low >>> 0))) >>> 0)) >>> 0;
		} else {
			rest = 0;
		}
		buf = arrayType$2.zero();
		pos = 32;
		v = integer;
		while (true) {
			if (!(v > 0)) { break; }
			v1 = (_q$1 = v / 10, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
			v = v - (($imul(10, v1) >>> 0)) >>> 0;
			pos = pos - (1) >> 0;
			((pos < 0 || pos >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[pos] = (((v + 48 >>> 0) << 24 >>> 24)));
			v = v1;
		}
		i$1 = pos;
		while (true) {
			if (!(i$1 < 32)) { break; }
			(x$5 = d.d, x$6 = i$1 - pos >> 0, ((x$6 < 0 || x$6 >= x$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + x$6] = ((i$1 < 0 || i$1 >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[i$1])));
			i$1 = i$1 + (1) >> 0;
		}
		nd = 32 - pos >> 0;
		d.nd = nd;
		d.dp = integerDigits + exp10 >> 0;
		needed = needed - (nd) >> 0;
		if (needed > 0) {
			if (!((rest === 0)) || !((pow10.$high === 0 && pow10.$low === 1))) {
				$panic(new $String("strconv: internal error, rest != 0 but needed > 0"));
			}
			while (true) {
				if (!(needed > 0)) { break; }
				fraction = $mul64(fraction, (new $Uint64(0, 10)));
				$CE$B5 = $mul64($CE$B5, (new $Uint64(0, 10)));
				if ((x$7 = $mul64(new $Uint64(0, 2), $CE$B5), x$8 = $shiftLeft64(new $Uint64(0, 1), shift), (x$7.$high > x$8.$high || (x$7.$high === x$8.$high && x$7.$low > x$8.$low)))) {
					return false;
				}
				digit = $shiftRightUint64(fraction, shift);
				(x$9 = d.d, ((nd < 0 || nd >= x$9.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$9.$array[x$9.$offset + nd] = ((new $Uint64(digit.$high + 0, digit.$low + 48).$low << 24 >>> 24))));
				fraction = (x$10 = $shiftLeft64(digit, shift), new $Uint64(fraction.$high - x$10.$high, fraction.$low - x$10.$low));
				nd = nd + (1) >> 0;
				needed = needed - (1) >> 0;
			}
			d.nd = nd;
		}
		ok = adjustLastDigitFixed(d, (x$11 = $shiftLeft64((new $Uint64(0, rest)), shift), new $Uint64(x$11.$high | fraction.$high, (x$11.$low | fraction.$low) >>> 0)), pow10, shift, $CE$B5);
		if (!ok) {
			return false;
		}
		i$2 = d.nd - 1 >> 0;
		while (true) {
			if (!(i$2 >= 0)) { break; }
			if (!(((x$12 = d.d, ((i$2 < 0 || i$2 >= x$12.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$12.$array[x$12.$offset + i$2])) === 48))) {
				d.nd = i$2 + 1 >> 0;
				break;
			}
			i$2 = i$2 - (1) >> 0;
		}
		return true;
	};
	extFloat.prototype.FixedDecimal = function(d, n) { return this.$val.FixedDecimal(d, n); };
	adjustLastDigitFixed = function(d, num, den, shift, $CE$B5) {
		var $CE$B5, d, den, i, num, shift, x, x$1, x$10, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		if ((x = $shiftLeft64(den, shift), (num.$high > x.$high || (num.$high === x.$high && num.$low > x.$low)))) {
			$panic(new $String("strconv: num > den<<shift in adjustLastDigitFixed"));
		}
		if ((x$1 = $mul64(new $Uint64(0, 2), $CE$B5), x$2 = $shiftLeft64(den, shift), (x$1.$high > x$2.$high || (x$1.$high === x$2.$high && x$1.$low > x$2.$low)))) {
			$panic(new $String("strconv: \xCE\xB5 > (den<<shift)/2"));
		}
		if ((x$3 = $mul64(new $Uint64(0, 2), (new $Uint64(num.$high + $CE$B5.$high, num.$low + $CE$B5.$low))), x$4 = $shiftLeft64(den, shift), (x$3.$high < x$4.$high || (x$3.$high === x$4.$high && x$3.$low < x$4.$low)))) {
			return true;
		}
		if ((x$5 = $mul64(new $Uint64(0, 2), (new $Uint64(num.$high - $CE$B5.$high, num.$low - $CE$B5.$low))), x$6 = $shiftLeft64(den, shift), (x$5.$high > x$6.$high || (x$5.$high === x$6.$high && x$5.$low > x$6.$low)))) {
			i = d.nd - 1 >> 0;
			while (true) {
				if (!(i >= 0)) { break; }
				if ((x$7 = d.d, ((i < 0 || i >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + i])) === 57) {
					d.nd = d.nd - (1) >> 0;
				} else {
					break;
				}
				i = i - (1) >> 0;
			}
			if (i < 0) {
				(x$8 = d.d, (0 >= x$8.$length ? ($throwRuntimeError("index out of range"), undefined) : x$8.$array[x$8.$offset + 0] = 49));
				d.nd = 1;
				d.dp = d.dp + (1) >> 0;
			} else {
				(x$10 = d.d, ((i < 0 || i >= x$10.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$10.$array[x$10.$offset + i] = ((x$9 = d.d, ((i < 0 || i >= x$9.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$9.$array[x$9.$offset + i])) + (1) << 24 >>> 24)));
			}
			return true;
		}
		return false;
	};
	extFloat.ptr.prototype.ShortestDecimal = function(d, lower, upper) {
		var _q, _tmp, _tmp$1, _tmp$2, _tmp$3, allowance, buf, currentDiff, d, digit, digit$1, exp10, f, fraction, i, i$1, i$2, integer, integerDigits, lower, multiplier, n, nd, pow, pow$1, shift, targetDiff, upper, v, v1, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		f = this;
		if ((x = f.mant, (x.$high === 0 && x.$low === 0))) {
			d.nd = 0;
			d.dp = 0;
			d.neg = f.neg;
			return true;
		}
		if ((f.exp === 0) && $equal(lower, f, extFloat) && $equal(lower, upper, extFloat)) {
			buf = arrayType$1.zero();
			n = 23;
			v = f.mant;
			while (true) {
				if (!((v.$high > 0 || (v.$high === 0 && v.$low > 0)))) { break; }
				v1 = $div64(v, new $Uint64(0, 10), false);
				v = (x$1 = $mul64(new $Uint64(0, 10), v1), new $Uint64(v.$high - x$1.$high, v.$low - x$1.$low));
				((n < 0 || n >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[n] = ((new $Uint64(v.$high + 0, v.$low + 48).$low << 24 >>> 24)));
				n = n - (1) >> 0;
				v = v1;
			}
			nd = (24 - n >> 0) - 1 >> 0;
			i = 0;
			while (true) {
				if (!(i < nd)) { break; }
				(x$3 = d.d, ((i < 0 || i >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + i] = (x$2 = (n + 1 >> 0) + i >> 0, ((x$2 < 0 || x$2 >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[x$2]))));
				i = i + (1) >> 0;
			}
			_tmp = nd;
			_tmp$1 = nd;
			d.nd = _tmp;
			d.dp = _tmp$1;
			while (true) {
				if (!(d.nd > 0 && ((x$4 = d.d, x$5 = d.nd - 1 >> 0, ((x$5 < 0 || x$5 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + x$5])) === 48))) { break; }
				d.nd = d.nd - (1) >> 0;
			}
			if (d.nd === 0) {
				d.dp = 0;
			}
			d.neg = f.neg;
			return true;
		}
		upper.Normalize();
		if (f.exp > upper.exp) {
			f.mant = $shiftLeft64(f.mant, ((((f.exp - upper.exp >> 0) >>> 0))));
			f.exp = upper.exp;
		}
		if (lower.exp > upper.exp) {
			lower.mant = $shiftLeft64(lower.mant, ((((lower.exp - upper.exp >> 0) >>> 0))));
			lower.exp = upper.exp;
		}
		exp10 = frexp10Many(lower, f, upper);
		upper.mant = (x$6 = upper.mant, x$7 = new $Uint64(0, 1), new $Uint64(x$6.$high + x$7.$high, x$6.$low + x$7.$low));
		lower.mant = (x$8 = lower.mant, x$9 = new $Uint64(0, 1), new $Uint64(x$8.$high - x$9.$high, x$8.$low - x$9.$low));
		shift = ((-upper.exp >>> 0));
		integer = (($shiftRightUint64(upper.mant, shift).$low >>> 0));
		fraction = (x$10 = upper.mant, x$11 = $shiftLeft64((new $Uint64(0, integer)), shift), new $Uint64(x$10.$high - x$11.$high, x$10.$low - x$11.$low));
		allowance = (x$12 = upper.mant, x$13 = lower.mant, new $Uint64(x$12.$high - x$13.$high, x$12.$low - x$13.$low));
		targetDiff = (x$14 = upper.mant, x$15 = f.mant, new $Uint64(x$14.$high - x$15.$high, x$14.$low - x$15.$low));
		integerDigits = 0;
		_tmp$2 = 0;
		_tmp$3 = new $Uint64(0, 1);
		i$1 = _tmp$2;
		pow = _tmp$3;
		while (true) {
			if (!(i$1 < 20)) { break; }
			if ((x$16 = (new $Uint64(0, integer)), (pow.$high > x$16.$high || (pow.$high === x$16.$high && pow.$low > x$16.$low)))) {
				integerDigits = i$1;
				break;
			}
			pow = $mul64(pow, (new $Uint64(0, 10)));
			i$1 = i$1 + (1) >> 0;
		}
		i$2 = 0;
		while (true) {
			if (!(i$2 < integerDigits)) { break; }
			pow$1 = (x$17 = (integerDigits - i$2 >> 0) - 1 >> 0, ((x$17 < 0 || x$17 >= uint64pow10.length) ? ($throwRuntimeError("index out of range"), undefined) : uint64pow10[x$17]));
			digit = (_q = integer / ((pow$1.$low >>> 0)), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
			(x$18 = d.d, ((i$2 < 0 || i$2 >= x$18.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$18.$array[x$18.$offset + i$2] = (((digit + 48 >>> 0) << 24 >>> 24))));
			integer = integer - (($imul(digit, ((pow$1.$low >>> 0))) >>> 0)) >>> 0;
			currentDiff = (x$19 = $shiftLeft64((new $Uint64(0, integer)), shift), new $Uint64(x$19.$high + fraction.$high, x$19.$low + fraction.$low));
			if ((currentDiff.$high < allowance.$high || (currentDiff.$high === allowance.$high && currentDiff.$low < allowance.$low))) {
				d.nd = i$2 + 1 >> 0;
				d.dp = integerDigits + exp10 >> 0;
				d.neg = f.neg;
				return adjustLastDigit(d, currentDiff, targetDiff, allowance, $shiftLeft64(pow$1, shift), new $Uint64(0, 2));
			}
			i$2 = i$2 + (1) >> 0;
		}
		d.nd = integerDigits;
		d.dp = d.nd + exp10 >> 0;
		d.neg = f.neg;
		digit$1 = 0;
		multiplier = new $Uint64(0, 1);
		while (true) {
			fraction = $mul64(fraction, (new $Uint64(0, 10)));
			multiplier = $mul64(multiplier, (new $Uint64(0, 10)));
			digit$1 = (($shiftRightUint64(fraction, shift).$low >> 0));
			(x$20 = d.d, x$21 = d.nd, ((x$21 < 0 || x$21 >= x$20.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$20.$array[x$20.$offset + x$21] = (((digit$1 + 48 >> 0) << 24 >>> 24))));
			d.nd = d.nd + (1) >> 0;
			fraction = (x$22 = $shiftLeft64((new $Uint64(0, digit$1)), shift), new $Uint64(fraction.$high - x$22.$high, fraction.$low - x$22.$low));
			if ((x$23 = $mul64(allowance, multiplier), (fraction.$high < x$23.$high || (fraction.$high === x$23.$high && fraction.$low < x$23.$low)))) {
				return adjustLastDigit(d, fraction, $mul64(targetDiff, multiplier), $mul64(allowance, multiplier), $shiftLeft64(new $Uint64(0, 1), shift), $mul64(multiplier, new $Uint64(0, 2)));
			}
		}
	};
	extFloat.prototype.ShortestDecimal = function(d, lower, upper) { return this.$val.ShortestDecimal(d, lower, upper); };
	adjustLastDigit = function(d, currentDiff, targetDiff, maxDiff, ulpDecimal, ulpBinary) {
		var _index, currentDiff, d, maxDiff, targetDiff, ulpBinary, ulpDecimal, x, x$1, x$10, x$11, x$12, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		if ((x = $mul64(new $Uint64(0, 2), ulpBinary), (ulpDecimal.$high < x.$high || (ulpDecimal.$high === x.$high && ulpDecimal.$low < x.$low)))) {
			return false;
		}
		while (true) {
			if (!((x$1 = (x$2 = (x$3 = $div64(ulpDecimal, new $Uint64(0, 2), false), new $Uint64(currentDiff.$high + x$3.$high, currentDiff.$low + x$3.$low)), new $Uint64(x$2.$high + ulpBinary.$high, x$2.$low + ulpBinary.$low)), (x$1.$high < targetDiff.$high || (x$1.$high === targetDiff.$high && x$1.$low < targetDiff.$low))))) { break; }
			_index = d.nd - 1 >> 0;
			(x$5 = d.d, ((_index < 0 || _index >= x$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + _index] = ((x$4 = d.d, ((_index < 0 || _index >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + _index])) - (1) << 24 >>> 24)));
			currentDiff = (x$6 = ulpDecimal, new $Uint64(currentDiff.$high + x$6.$high, currentDiff.$low + x$6.$low));
		}
		if ((x$7 = new $Uint64(currentDiff.$high + ulpDecimal.$high, currentDiff.$low + ulpDecimal.$low), x$8 = (x$9 = (x$10 = $div64(ulpDecimal, new $Uint64(0, 2), false), new $Uint64(targetDiff.$high + x$10.$high, targetDiff.$low + x$10.$low)), new $Uint64(x$9.$high + ulpBinary.$high, x$9.$low + ulpBinary.$low)), (x$7.$high < x$8.$high || (x$7.$high === x$8.$high && x$7.$low <= x$8.$low)))) {
			return false;
		}
		if ((currentDiff.$high < ulpBinary.$high || (currentDiff.$high === ulpBinary.$high && currentDiff.$low < ulpBinary.$low)) || (x$11 = new $Uint64(maxDiff.$high - ulpBinary.$high, maxDiff.$low - ulpBinary.$low), (currentDiff.$high > x$11.$high || (currentDiff.$high === x$11.$high && currentDiff.$low > x$11.$low)))) {
			return false;
		}
		if ((d.nd === 1) && ((x$12 = d.d, (0 >= x$12.$length ? ($throwRuntimeError("index out of range"), undefined) : x$12.$array[x$12.$offset + 0])) === 48)) {
			d.nd = 0;
			d.dp = 0;
		}
		return true;
	};
	FormatFloat = function(f, fmt, prec, bitSize) {
		var bitSize, f, fmt, prec;
		return ($bytesToString(genericFtoa($makeSlice(sliceType$6, 0, max(prec + 4 >> 0, 24)), f, fmt, prec, bitSize)));
	};
	$pkg.FormatFloat = FormatFloat;
	AppendFloat = function(dst, f, fmt, prec, bitSize) {
		var bitSize, dst, f, fmt, prec;
		return genericFtoa(dst, f, fmt, prec, bitSize);
	};
	$pkg.AppendFloat = AppendFloat;
	genericFtoa = function(dst, val, fmt, prec, bitSize) {
		var _1, _2, _3, _4, _tuple, bitSize, bits$1, buf, buf$1, digits, digs, dst, exp, f, f$1, flt, fmt, lower, mant, neg, ok, prec, s, shortest, upper, val, x, x$1, x$2, x$3, y, y$1;
		bits$1 = new $Uint64(0, 0);
		flt = ptrType$1.nil;
		_1 = bitSize;
		if (_1 === (32)) {
			bits$1 = (new $Uint64(0, math.Float32bits(($fround(val)))));
			flt = float32info;
		} else if (_1 === (64)) {
			bits$1 = math.Float64bits(val);
			flt = float64info;
		} else {
			$panic(new $String("strconv: illegal AppendFloat/FormatFloat bitSize"));
		}
		neg = !((x = $shiftRightUint64(bits$1, ((flt.expbits + flt.mantbits >>> 0))), (x.$high === 0 && x.$low === 0)));
		exp = (($shiftRightUint64(bits$1, flt.mantbits).$low >> 0)) & ((((y = flt.expbits, y < 32 ? (1 << y) : 0) >> 0) - 1 >> 0));
		mant = (x$1 = (x$2 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), new $Uint64(x$2.$high - 0, x$2.$low - 1)), new $Uint64(bits$1.$high & x$1.$high, (bits$1.$low & x$1.$low) >>> 0));
		_2 = exp;
		if (_2 === ((((y$1 = flt.expbits, y$1 < 32 ? (1 << y$1) : 0) >> 0) - 1 >> 0))) {
			s = "";
			if (!((mant.$high === 0 && mant.$low === 0))) {
				s = "NaN";
			} else if (neg) {
				s = "-Inf";
			} else {
				s = "+Inf";
			}
			return $appendSlice(dst, s);
		} else if (_2 === (0)) {
			exp = exp + (1) >> 0;
		} else {
			mant = (x$3 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), new $Uint64(mant.$high | x$3.$high, (mant.$low | x$3.$low) >>> 0));
		}
		exp = exp + (flt.bias) >> 0;
		if (fmt === 98) {
			return fmtB(dst, neg, mant, exp, flt);
		}
		if (!optimize) {
			return bigFtoa(dst, prec, fmt, neg, mant, exp, flt);
		}
		digs = new decimalSlice.ptr(sliceType$6.nil, 0, 0, false);
		ok = false;
		shortest = prec < 0;
		if (shortest) {
			f = new extFloat.ptr(new $Uint64(0, 0), 0, false);
			_tuple = f.AssignComputeBounds(mant, exp, neg, flt);
			lower = $clone(_tuple[0], extFloat);
			upper = $clone(_tuple[1], extFloat);
			buf = arrayType$2.zero();
			digs.d = new sliceType$6(buf);
			ok = f.ShortestDecimal(digs, lower, upper);
			if (!ok) {
				return bigFtoa(dst, prec, fmt, neg, mant, exp, flt);
			}
			_3 = fmt;
			if ((_3 === (101)) || (_3 === (69))) {
				prec = max(digs.nd - 1 >> 0, 0);
			} else if (_3 === (102)) {
				prec = max(digs.nd - digs.dp >> 0, 0);
			} else if ((_3 === (103)) || (_3 === (71))) {
				prec = digs.nd;
			}
		} else if (!((fmt === 102))) {
			digits = prec;
			_4 = fmt;
			if ((_4 === (101)) || (_4 === (69))) {
				digits = digits + (1) >> 0;
			} else if ((_4 === (103)) || (_4 === (71))) {
				if (prec === 0) {
					prec = 1;
				}
				digits = prec;
			}
			if (digits <= 15) {
				buf$1 = arrayType$1.zero();
				digs.d = new sliceType$6(buf$1);
				f$1 = new extFloat.ptr(mant, exp - ((flt.mantbits >> 0)) >> 0, neg);
				ok = f$1.FixedDecimal(digs, digits);
			}
		}
		if (!ok) {
			return bigFtoa(dst, prec, fmt, neg, mant, exp, flt);
		}
		return formatDigits(dst, shortest, neg, $clone(digs, decimalSlice), prec, fmt);
	};
	bigFtoa = function(dst, prec, fmt, neg, mant, exp, flt) {
		var _1, _2, d, digs, dst, exp, flt, fmt, mant, neg, prec, shortest;
		d = new decimal.ptr(arrayType.zero(), 0, 0, false, false);
		d.Assign(mant);
		d.Shift(exp - ((flt.mantbits >> 0)) >> 0);
		digs = new decimalSlice.ptr(sliceType$6.nil, 0, 0, false);
		shortest = prec < 0;
		if (shortest) {
			roundShortest(d, mant, exp, flt);
			decimalSlice.copy(digs, new decimalSlice.ptr(new sliceType$6(d.d), d.nd, d.dp, false));
			_1 = fmt;
			if ((_1 === (101)) || (_1 === (69))) {
				prec = digs.nd - 1 >> 0;
			} else if (_1 === (102)) {
				prec = max(digs.nd - digs.dp >> 0, 0);
			} else if ((_1 === (103)) || (_1 === (71))) {
				prec = digs.nd;
			}
		} else {
			_2 = fmt;
			if ((_2 === (101)) || (_2 === (69))) {
				d.Round(prec + 1 >> 0);
			} else if (_2 === (102)) {
				d.Round(d.dp + prec >> 0);
			} else if ((_2 === (103)) || (_2 === (71))) {
				if (prec === 0) {
					prec = 1;
				}
				d.Round(prec);
			}
			decimalSlice.copy(digs, new decimalSlice.ptr(new sliceType$6(d.d), d.nd, d.dp, false));
		}
		return formatDigits(dst, shortest, neg, $clone(digs, decimalSlice), prec, fmt);
	};
	formatDigits = function(dst, shortest, neg, digs, prec, fmt) {
		var _1, digs, dst, eprec, exp, fmt, neg, prec, shortest;
		_1 = fmt;
		if ((_1 === (101)) || (_1 === (69))) {
			return fmtE(dst, neg, $clone(digs, decimalSlice), prec, fmt);
		} else if (_1 === (102)) {
			return fmtF(dst, neg, $clone(digs, decimalSlice), prec);
		} else if ((_1 === (103)) || (_1 === (71))) {
			eprec = prec;
			if (eprec > digs.nd && digs.nd >= digs.dp) {
				eprec = digs.nd;
			}
			if (shortest) {
				eprec = 6;
			}
			exp = digs.dp - 1 >> 0;
			if (exp < -4 || exp >= eprec) {
				if (prec > digs.nd) {
					prec = digs.nd;
				}
				return fmtE(dst, neg, $clone(digs, decimalSlice), prec - 1 >> 0, (fmt + 101 << 24 >>> 24) - 103 << 24 >>> 24);
			}
			if (prec > digs.dp) {
				prec = digs.nd;
			}
			return fmtF(dst, neg, $clone(digs, decimalSlice), max(prec - digs.dp >> 0, 0));
		}
		return $append(dst, 37, fmt);
	};
	roundShortest = function(d, mant, exp, flt) {
		var d, exp, explo, flt, i, inclusive, l, lower, m, mant, mantlo, minexp, okdown, okup, u, upper, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7;
		if ((mant.$high === 0 && mant.$low === 0)) {
			d.nd = 0;
			return;
		}
		minexp = flt.bias + 1 >> 0;
		if (exp > minexp && ($imul(332, ((d.dp - d.nd >> 0)))) >= ($imul(100, ((exp - ((flt.mantbits >> 0)) >> 0))))) {
			return;
		}
		upper = new decimal.ptr(arrayType.zero(), 0, 0, false, false);
		upper.Assign((x = $mul64(mant, new $Uint64(0, 2)), new $Uint64(x.$high + 0, x.$low + 1)));
		upper.Shift((exp - ((flt.mantbits >> 0)) >> 0) - 1 >> 0);
		mantlo = new $Uint64(0, 0);
		explo = 0;
		if ((x$1 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), (mant.$high > x$1.$high || (mant.$high === x$1.$high && mant.$low > x$1.$low))) || (exp === minexp)) {
			mantlo = new $Uint64(mant.$high - 0, mant.$low - 1);
			explo = exp;
		} else {
			mantlo = (x$2 = $mul64(mant, new $Uint64(0, 2)), new $Uint64(x$2.$high - 0, x$2.$low - 1));
			explo = exp - 1 >> 0;
		}
		lower = new decimal.ptr(arrayType.zero(), 0, 0, false, false);
		lower.Assign((x$3 = $mul64(mantlo, new $Uint64(0, 2)), new $Uint64(x$3.$high + 0, x$3.$low + 1)));
		lower.Shift((explo - ((flt.mantbits >> 0)) >> 0) - 1 >> 0);
		inclusive = (x$4 = $div64(mant, new $Uint64(0, 2), true), (x$4.$high === 0 && x$4.$low === 0));
		i = 0;
		while (true) {
			if (!(i < d.nd)) { break; }
			l = 48;
			if (i < lower.nd) {
				l = (x$5 = lower.d, ((i < 0 || i >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[i]));
			}
			m = (x$6 = d.d, ((i < 0 || i >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[i]));
			u = 48;
			if (i < upper.nd) {
				u = (x$7 = upper.d, ((i < 0 || i >= x$7.length) ? ($throwRuntimeError("index out of range"), undefined) : x$7[i]));
			}
			okdown = !((l === m)) || inclusive && ((i + 1 >> 0) === lower.nd);
			okup = !((m === u)) && (inclusive || (m + 1 << 24 >>> 24) < u || (i + 1 >> 0) < upper.nd);
			if (okdown && okup) {
				d.Round(i + 1 >> 0);
				return;
			} else if (okdown) {
				d.RoundDown(i + 1 >> 0);
				return;
			} else if (okup) {
				d.RoundUp(i + 1 >> 0);
				return;
			}
			i = i + (1) >> 0;
		}
	};
	fmtE = function(dst, neg, d, prec, fmt) {
		var _q, _q$1, _q$2, _r, _r$1, _r$2, ch, d, dst, exp, fmt, i, m, neg, prec, x;
		if (neg) {
			dst = $append(dst, 45);
		}
		ch = 48;
		if (!((d.nd === 0))) {
			ch = (x = d.d, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0]));
		}
		dst = $append(dst, ch);
		if (prec > 0) {
			dst = $append(dst, 46);
			i = 1;
			m = min(d.nd, prec + 1 >> 0);
			if (i < m) {
				dst = $appendSlice(dst, $subslice(d.d, i, m));
				i = m;
			}
			while (true) {
				if (!(i <= prec)) { break; }
				dst = $append(dst, 48);
				i = i + (1) >> 0;
			}
		}
		dst = $append(dst, fmt);
		exp = d.dp - 1 >> 0;
		if (d.nd === 0) {
			exp = 0;
		}
		if (exp < 0) {
			ch = 45;
			exp = -exp;
		} else {
			ch = 43;
		}
		dst = $append(dst, ch);
		if (exp < 10) {
			dst = $append(dst, 48, ((exp << 24 >>> 24)) + 48 << 24 >>> 24);
		} else if (exp < 100) {
			dst = $append(dst, (((_q = exp / 10, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24, (((_r = exp % 10, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24);
		} else {
			dst = $append(dst, (((_q$1 = exp / 100, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24, (_r$1 = (((_q$2 = exp / 10, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >> 0 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) % 10, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) + 48 << 24 >>> 24, (((_r$2 = exp % 10, _r$2 === _r$2 ? _r$2 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24);
		}
		return dst;
	};
	fmtF = function(dst, neg, d, prec) {
		var ch, d, dst, i, j, m, neg, prec, x;
		if (neg) {
			dst = $append(dst, 45);
		}
		if (d.dp > 0) {
			m = min(d.nd, d.dp);
			dst = $appendSlice(dst, $subslice(d.d, 0, m));
			while (true) {
				if (!(m < d.dp)) { break; }
				dst = $append(dst, 48);
				m = m + (1) >> 0;
			}
		} else {
			dst = $append(dst, 48);
		}
		if (prec > 0) {
			dst = $append(dst, 46);
			i = 0;
			while (true) {
				if (!(i < prec)) { break; }
				ch = 48;
				j = d.dp + i >> 0;
				if (0 <= j && j < d.nd) {
					ch = (x = d.d, ((j < 0 || j >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + j]));
				}
				dst = $append(dst, ch);
				i = i + (1) >> 0;
			}
		}
		return dst;
	};
	fmtB = function(dst, neg, mant, exp, flt) {
		var _tuple, _tuple$1, dst, exp, flt, mant, neg;
		if (neg) {
			dst = $append(dst, 45);
		}
		_tuple = formatBits(dst, mant, 10, false, true);
		dst = _tuple[0];
		dst = $append(dst, 112);
		exp = exp - (((flt.mantbits >> 0))) >> 0;
		if (exp >= 0) {
			dst = $append(dst, 43);
		}
		_tuple$1 = formatBits(dst, (new $Uint64(0, exp)), 10, exp < 0, true);
		dst = _tuple$1[0];
		return dst;
	};
	min = function(a, b) {
		var a, b;
		if (a < b) {
			return a;
		}
		return b;
	};
	max = function(a, b) {
		var a, b;
		if (a > b) {
			return a;
		}
		return b;
	};
	FormatUint = function(i, base) {
		var _tuple, base, i, s;
		if (true && (i.$high < 0 || (i.$high === 0 && i.$low < 100)) && (base === 10)) {
			return small(((i.$low >> 0)));
		}
		_tuple = formatBits(sliceType$6.nil, i, base, false, false);
		s = _tuple[1];
		return s;
	};
	$pkg.FormatUint = FormatUint;
	FormatInt = function(i, base) {
		var _tuple, base, i, s;
		if (true && (0 < i.$high || (0 === i.$high && 0 <= i.$low)) && (i.$high < 0 || (i.$high === 0 && i.$low < 100)) && (base === 10)) {
			return small((((i.$low + ((i.$high >> 31) * 4294967296)) >> 0)));
		}
		_tuple = formatBits(sliceType$6.nil, (new $Uint64(i.$high, i.$low)), base, (i.$high < 0 || (i.$high === 0 && i.$low < 0)), false);
		s = _tuple[1];
		return s;
	};
	$pkg.FormatInt = FormatInt;
	Itoa = function(i) {
		var i;
		return FormatInt((new $Int64(0, i)), 10);
	};
	$pkg.Itoa = Itoa;
	AppendInt = function(dst, i, base) {
		var _tuple, base, dst, i;
		if (true && (0 < i.$high || (0 === i.$high && 0 <= i.$low)) && (i.$high < 0 || (i.$high === 0 && i.$low < 100)) && (base === 10)) {
			return $appendSlice(dst, small((((i.$low + ((i.$high >> 31) * 4294967296)) >> 0))));
		}
		_tuple = formatBits(dst, (new $Uint64(i.$high, i.$low)), base, (i.$high < 0 || (i.$high === 0 && i.$low < 0)), true);
		dst = _tuple[0];
		return dst;
	};
	$pkg.AppendInt = AppendInt;
	AppendUint = function(dst, i, base) {
		var _tuple, base, dst, i;
		if (true && (i.$high < 0 || (i.$high === 0 && i.$low < 100)) && (base === 10)) {
			return $appendSlice(dst, small(((i.$low >> 0))));
		}
		_tuple = formatBits(dst, i, base, false, true);
		dst = _tuple[0];
		return dst;
	};
	$pkg.AppendUint = AppendUint;
	small = function(i) {
		var i;
		if (i < 10) {
			return $substring("0123456789abcdefghijklmnopqrstuvwxyz", i, (i + 1 >> 0));
		}
		return $substring("00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899", ($imul(i, 2)), (($imul(i, 2)) + 2 >> 0));
	};
	formatBits = function(dst, u, base, neg, append_) {
		var _q, _q$1, _r, _r$1, a, append_, b, b$1, base, d, dst, i, is, is$1, is$2, j, m, neg, q, q$1, s, shift, u, us, us$1, x, x$1, x$2, x$3, x$4, x$5;
		d = sliceType$6.nil;
		s = "";
		if (base < 2 || base > 36) {
			$panic(new $String("strconv: illegal AppendInt/FormatInt base"));
		}
		a = arrayType$3.zero();
		i = 65;
		if (neg) {
			u = new $Uint64(-u.$high, -u.$low);
		}
		if (base === 10) {
			if (true) {
				while (true) {
					if (!((u.$high > 0 || (u.$high === 0 && u.$low >= 1000000000)))) { break; }
					q = $div64(u, new $Uint64(0, 1000000000), false);
					us = (((x = $mul64(q, new $Uint64(0, 1000000000)), new $Uint64(u.$high - x.$high, u.$low - x.$low)).$low >>> 0));
					j = 4;
					while (true) {
						if (!(j > 0)) { break; }
						is = (_r = us % 100, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) * 2 >>> 0;
						us = (_q = us / (100), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
						i = i - (2) >> 0;
						(x$1 = i + 1 >> 0, ((x$1 < 0 || x$1 >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[x$1] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt((is + 1 >>> 0))));
						(x$2 = i + 0 >> 0, ((x$2 < 0 || x$2 >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[x$2] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt((is + 0 >>> 0))));
						j = j - (1) >> 0;
					}
					i = i - (1) >> 0;
					((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt(((us * 2 >>> 0) + 1 >>> 0)));
					u = q;
				}
			}
			us$1 = ((u.$low >>> 0));
			while (true) {
				if (!(us$1 >= 100)) { break; }
				is$1 = (_r$1 = us$1 % 100, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) * 2 >>> 0;
				us$1 = (_q$1 = us$1 / (100), (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
				i = i - (2) >> 0;
				(x$3 = i + 1 >> 0, ((x$3 < 0 || x$3 >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[x$3] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt((is$1 + 1 >>> 0))));
				(x$4 = i + 0 >> 0, ((x$4 < 0 || x$4 >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[x$4] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt((is$1 + 0 >>> 0))));
			}
			is$2 = us$1 * 2 >>> 0;
			i = i - (1) >> 0;
			((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt((is$2 + 1 >>> 0)));
			if (us$1 >= 10) {
				i = i - (1) >> 0;
				((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt(is$2));
			}
		} else if (isPowerOfTwo(base)) {
			shift = (((bits.TrailingZeros(((base >>> 0))) >>> 0)) & 7) >>> 0;
			b = (new $Uint64(0, base));
			m = ((base >>> 0)) - 1 >>> 0;
			while (true) {
				if (!((u.$high > b.$high || (u.$high === b.$high && u.$low >= b.$low)))) { break; }
				i = i - (1) >> 0;
				((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(((((u.$low >>> 0)) & m) >>> 0)));
				u = $shiftRightUint64(u, (shift));
			}
			i = i - (1) >> 0;
			((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(((u.$low >>> 0))));
		} else {
			b$1 = (new $Uint64(0, base));
			while (true) {
				if (!((u.$high > b$1.$high || (u.$high === b$1.$high && u.$low >= b$1.$low)))) { break; }
				i = i - (1) >> 0;
				q$1 = $div64(u, b$1, false);
				((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt((((x$5 = $mul64(q$1, b$1), new $Uint64(u.$high - x$5.$high, u.$low - x$5.$low)).$low >>> 0))));
				u = q$1;
			}
			i = i - (1) >> 0;
			((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(((u.$low >>> 0))));
		}
		if (neg) {
			i = i - (1) >> 0;
			((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = 45);
		}
		if (append_) {
			d = $appendSlice(dst, $subslice(new sliceType$6(a), i));
			return [d, s];
		}
		s = ($bytesToString($subslice(new sliceType$6(a), i)));
		return [d, s];
	};
	isPowerOfTwo = function(x) {
		var x;
		return (x & ((x - 1 >> 0))) === 0;
	};
	quoteWith = function(s, quote, ASCIIonly, graphicOnly) {
		var ASCIIonly, _q, graphicOnly, quote, s;
		return ($bytesToString(appendQuotedWith($makeSlice(sliceType$6, 0, (_q = ($imul(3, s.length)) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"))), s, quote, ASCIIonly, graphicOnly)));
	};
	appendQuotedWith = function(buf, s, quote, ASCIIonly, graphicOnly) {
		var ASCIIonly, _tuple, buf, graphicOnly, quote, r, s, width;
		buf = $append(buf, quote);
		width = 0;
		while (true) {
			if (!(s.length > 0)) { break; }
			r = ((s.charCodeAt(0) >> 0));
			width = 1;
			if (r >= 128) {
				_tuple = utf8.DecodeRuneInString(s);
				r = _tuple[0];
				width = _tuple[1];
			}
			if ((width === 1) && (r === 65533)) {
				buf = $appendSlice(buf, "\\x");
				buf = $append(buf, "0123456789abcdef".charCodeAt((s.charCodeAt(0) >>> 4 << 24 >>> 24)));
				buf = $append(buf, "0123456789abcdef".charCodeAt(((s.charCodeAt(0) & 15) >>> 0)));
				s = $substring(s, width);
				continue;
			}
			buf = appendEscapedRune(buf, r, quote, ASCIIonly, graphicOnly);
			s = $substring(s, width);
		}
		buf = $append(buf, quote);
		return buf;
	};
	appendEscapedRune = function(buf, r, quote, ASCIIonly, graphicOnly) {
		var ASCIIonly, _1, buf, graphicOnly, n, quote, r, runeTmp, s, s$1;
		runeTmp = arrayType$4.zero();
		if ((r === ((quote >> 0))) || (r === 92)) {
			buf = $append(buf, 92);
			buf = $append(buf, ((r << 24 >>> 24)));
			return buf;
		}
		if (ASCIIonly) {
			if (r < 128 && IsPrint(r)) {
				buf = $append(buf, ((r << 24 >>> 24)));
				return buf;
			}
		} else if (IsPrint(r) || graphicOnly && isInGraphicList(r)) {
			n = utf8.EncodeRune(new sliceType$6(runeTmp), r);
			buf = $appendSlice(buf, $subslice(new sliceType$6(runeTmp), 0, n));
			return buf;
		}
		_1 = r;
		if (_1 === (7)) {
			buf = $appendSlice(buf, "\\a");
		} else if (_1 === (8)) {
			buf = $appendSlice(buf, "\\b");
		} else if (_1 === (12)) {
			buf = $appendSlice(buf, "\\f");
		} else if (_1 === (10)) {
			buf = $appendSlice(buf, "\\n");
		} else if (_1 === (13)) {
			buf = $appendSlice(buf, "\\r");
		} else if (_1 === (9)) {
			buf = $appendSlice(buf, "\\t");
		} else if (_1 === (11)) {
			buf = $appendSlice(buf, "\\v");
		} else {
			if (r < 32) {
				buf = $appendSlice(buf, "\\x");
				buf = $append(buf, "0123456789abcdef".charCodeAt((((r << 24 >>> 24)) >>> 4 << 24 >>> 24)));
				buf = $append(buf, "0123456789abcdef".charCodeAt(((((r << 24 >>> 24)) & 15) >>> 0)));
			} else if (r > 1114111) {
				r = 65533;
				buf = $appendSlice(buf, "\\u");
				s = 12;
				while (true) {
					if (!(s >= 0)) { break; }
					buf = $append(buf, "0123456789abcdef".charCodeAt((((r >> $min(((s >>> 0)), 31)) >> 0) & 15)));
					s = s - (4) >> 0;
				}
			} else if (r < 65536) {
				buf = $appendSlice(buf, "\\u");
				s = 12;
				while (true) {
					if (!(s >= 0)) { break; }
					buf = $append(buf, "0123456789abcdef".charCodeAt((((r >> $min(((s >>> 0)), 31)) >> 0) & 15)));
					s = s - (4) >> 0;
				}
			} else {
				buf = $appendSlice(buf, "\\U");
				s$1 = 28;
				while (true) {
					if (!(s$1 >= 0)) { break; }
					buf = $append(buf, "0123456789abcdef".charCodeAt((((r >> $min(((s$1 >>> 0)), 31)) >> 0) & 15)));
					s$1 = s$1 - (4) >> 0;
				}
			}
		}
		return buf;
	};
	Quote = function(s) {
		var s;
		return quoteWith(s, 34, false, false);
	};
	$pkg.Quote = Quote;
	unhex = function(b) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, b, c, ok, v;
		v = 0;
		ok = false;
		c = ((b >> 0));
		if (48 <= c && c <= 57) {
			_tmp = c - 48 >> 0;
			_tmp$1 = true;
			v = _tmp;
			ok = _tmp$1;
			return [v, ok];
		} else if (97 <= c && c <= 102) {
			_tmp$2 = (c - 97 >> 0) + 10 >> 0;
			_tmp$3 = true;
			v = _tmp$2;
			ok = _tmp$3;
			return [v, ok];
		} else if (65 <= c && c <= 70) {
			_tmp$4 = (c - 65 >> 0) + 10 >> 0;
			_tmp$5 = true;
			v = _tmp$4;
			ok = _tmp$5;
			return [v, ok];
		}
		return [v, ok];
	};
	UnquoteChar = function(s, quote) {
		var _1, _2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tuple, _tuple$1, c, c$1, err, j, j$1, multibyte, n, ok, quote, r, s, size, tail, v, v$1, value, x, x$1;
		value = 0;
		multibyte = false;
		tail = "";
		err = $ifaceNil;
		if (s.length === 0) {
			err = $pkg.ErrSyntax;
			return [value, multibyte, tail, err];
		}
		c = s.charCodeAt(0);
		if ((c === quote) && ((quote === 39) || (quote === 34))) {
			err = $pkg.ErrSyntax;
			return [value, multibyte, tail, err];
		} else if (c >= 128) {
			_tuple = utf8.DecodeRuneInString(s);
			r = _tuple[0];
			size = _tuple[1];
			_tmp = r;
			_tmp$1 = true;
			_tmp$2 = $substring(s, size);
			_tmp$3 = $ifaceNil;
			value = _tmp;
			multibyte = _tmp$1;
			tail = _tmp$2;
			err = _tmp$3;
			return [value, multibyte, tail, err];
		} else if (!((c === 92))) {
			_tmp$4 = ((s.charCodeAt(0) >> 0));
			_tmp$5 = false;
			_tmp$6 = $substring(s, 1);
			_tmp$7 = $ifaceNil;
			value = _tmp$4;
			multibyte = _tmp$5;
			tail = _tmp$6;
			err = _tmp$7;
			return [value, multibyte, tail, err];
		}
		if (s.length <= 1) {
			err = $pkg.ErrSyntax;
			return [value, multibyte, tail, err];
		}
		c$1 = s.charCodeAt(1);
		s = $substring(s, 2);
		switch (0) { default:
			_1 = c$1;
			if (_1 === (97)) {
				value = 7;
			} else if (_1 === (98)) {
				value = 8;
			} else if (_1 === (102)) {
				value = 12;
			} else if (_1 === (110)) {
				value = 10;
			} else if (_1 === (114)) {
				value = 13;
			} else if (_1 === (116)) {
				value = 9;
			} else if (_1 === (118)) {
				value = 11;
			} else if ((_1 === (120)) || (_1 === (117)) || (_1 === (85))) {
				n = 0;
				_2 = c$1;
				if (_2 === (120)) {
					n = 2;
				} else if (_2 === (117)) {
					n = 4;
				} else if (_2 === (85)) {
					n = 8;
				}
				v = 0;
				if (s.length < n) {
					err = $pkg.ErrSyntax;
					return [value, multibyte, tail, err];
				}
				j = 0;
				while (true) {
					if (!(j < n)) { break; }
					_tuple$1 = unhex(s.charCodeAt(j));
					x = _tuple$1[0];
					ok = _tuple$1[1];
					if (!ok) {
						err = $pkg.ErrSyntax;
						return [value, multibyte, tail, err];
					}
					v = (v << 4 >> 0) | x;
					j = j + (1) >> 0;
				}
				s = $substring(s, n);
				if (c$1 === 120) {
					value = v;
					break;
				}
				if (v > 1114111) {
					err = $pkg.ErrSyntax;
					return [value, multibyte, tail, err];
				}
				value = v;
				multibyte = true;
			} else if ((_1 === (48)) || (_1 === (49)) || (_1 === (50)) || (_1 === (51)) || (_1 === (52)) || (_1 === (53)) || (_1 === (54)) || (_1 === (55))) {
				v$1 = ((c$1 >> 0)) - 48 >> 0;
				if (s.length < 2) {
					err = $pkg.ErrSyntax;
					return [value, multibyte, tail, err];
				}
				j$1 = 0;
				while (true) {
					if (!(j$1 < 2)) { break; }
					x$1 = ((s.charCodeAt(j$1) >> 0)) - 48 >> 0;
					if (x$1 < 0 || x$1 > 7) {
						err = $pkg.ErrSyntax;
						return [value, multibyte, tail, err];
					}
					v$1 = ((v$1 << 3 >> 0)) | x$1;
					j$1 = j$1 + (1) >> 0;
				}
				s = $substring(s, 2);
				if (v$1 > 255) {
					err = $pkg.ErrSyntax;
					return [value, multibyte, tail, err];
				}
				value = v$1;
			} else if (_1 === (92)) {
				value = 92;
			} else if ((_1 === (39)) || (_1 === (34))) {
				if (!((c$1 === quote))) {
					err = $pkg.ErrSyntax;
					return [value, multibyte, tail, err];
				}
				value = ((c$1 >> 0));
			} else {
				err = $pkg.ErrSyntax;
				return [value, multibyte, tail, err];
			}
		}
		tail = s;
		return [value, multibyte, tail, err];
	};
	$pkg.UnquoteChar = UnquoteChar;
	Unquote = function(s) {
		var _1, _q, _tuple, _tuple$1, buf, buf$1, c, err, i, multibyte, n, n$1, quote, r, runeTmp, s, size, ss;
		n = s.length;
		if (n < 2) {
			return ["", $pkg.ErrSyntax];
		}
		quote = s.charCodeAt(0);
		if (!((quote === s.charCodeAt((n - 1 >> 0))))) {
			return ["", $pkg.ErrSyntax];
		}
		s = $substring(s, 1, (n - 1 >> 0));
		if (quote === 96) {
			if (contains(s, 96)) {
				return ["", $pkg.ErrSyntax];
			}
			if (contains(s, 13)) {
				buf = $makeSlice(sliceType$6, 0, (s.length - 1 >> 0));
				i = 0;
				while (true) {
					if (!(i < s.length)) { break; }
					if (!((s.charCodeAt(i) === 13))) {
						buf = $append(buf, s.charCodeAt(i));
					}
					i = i + (1) >> 0;
				}
				return [($bytesToString(buf)), $ifaceNil];
			}
			return [s, $ifaceNil];
		}
		if (!((quote === 34)) && !((quote === 39))) {
			return ["", $pkg.ErrSyntax];
		}
		if (contains(s, 10)) {
			return ["", $pkg.ErrSyntax];
		}
		if (!contains(s, 92) && !contains(s, quote)) {
			_1 = quote;
			if (_1 === (34)) {
				if (utf8.ValidString(s)) {
					return [s, $ifaceNil];
				}
			} else if (_1 === (39)) {
				_tuple = utf8.DecodeRuneInString(s);
				r = _tuple[0];
				size = _tuple[1];
				if ((size === s.length) && (!((r === 65533)) || !((size === 1)))) {
					return [s, $ifaceNil];
				}
			}
		}
		runeTmp = arrayType$4.zero();
		buf$1 = $makeSlice(sliceType$6, 0, (_q = ($imul(3, s.length)) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")));
		while (true) {
			if (!(s.length > 0)) { break; }
			_tuple$1 = UnquoteChar(s, quote);
			c = _tuple$1[0];
			multibyte = _tuple$1[1];
			ss = _tuple$1[2];
			err = _tuple$1[3];
			if (!($interfaceIsEqual(err, $ifaceNil))) {
				return ["", err];
			}
			s = ss;
			if (c < 128 || !multibyte) {
				buf$1 = $append(buf$1, ((c << 24 >>> 24)));
			} else {
				n$1 = utf8.EncodeRune(new sliceType$6(runeTmp), c);
				buf$1 = $appendSlice(buf$1, $subslice(new sliceType$6(runeTmp), 0, n$1));
			}
			if ((quote === 39) && !((s.length === 0))) {
				return ["", $pkg.ErrSyntax];
			}
		}
		return [($bytesToString(buf$1)), $ifaceNil];
	};
	$pkg.Unquote = Unquote;
	contains = function(s, c) {
		var c, s;
		return !((bytealg.IndexByteString(s, c) === -1));
	};
	bsearch16 = function(a, x) {
		var _q, _tmp, _tmp$1, a, h, i, j, x;
		_tmp = 0;
		_tmp$1 = a.$length;
		i = _tmp;
		j = _tmp$1;
		while (true) {
			if (!(i < j)) { break; }
			h = i + (_q = ((j - i >> 0)) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) >> 0;
			if (((h < 0 || h >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + h]) < x) {
				i = h + 1 >> 0;
			} else {
				j = h;
			}
		}
		return i;
	};
	bsearch32 = function(a, x) {
		var _q, _tmp, _tmp$1, a, h, i, j, x;
		_tmp = 0;
		_tmp$1 = a.$length;
		i = _tmp;
		j = _tmp$1;
		while (true) {
			if (!(i < j)) { break; }
			h = i + (_q = ((j - i >> 0)) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) >> 0;
			if (((h < 0 || h >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + h]) < x) {
				i = h + 1 >> 0;
			} else {
				j = h;
			}
		}
		return i;
	};
	IsPrint = function(r) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, i, i$1, isNotPrint, isNotPrint$1, isPrint, isPrint$1, j, j$1, r, rr, rr$1, x, x$1, x$2, x$3;
		if (r <= 255) {
			if (32 <= r && r <= 126) {
				return true;
			}
			if (161 <= r && r <= 255) {
				return !((r === 173));
			}
			return false;
		}
		if (0 <= r && r < 65536) {
			_tmp = ((r << 16 >>> 16));
			_tmp$1 = isPrint16;
			_tmp$2 = isNotPrint16;
			rr = _tmp;
			isPrint = _tmp$1;
			isNotPrint = _tmp$2;
			i = bsearch16(isPrint, rr);
			if (i >= isPrint.$length || rr < (x = (i & ~1) >> 0, ((x < 0 || x >= isPrint.$length) ? ($throwRuntimeError("index out of range"), undefined) : isPrint.$array[isPrint.$offset + x])) || (x$1 = i | 1, ((x$1 < 0 || x$1 >= isPrint.$length) ? ($throwRuntimeError("index out of range"), undefined) : isPrint.$array[isPrint.$offset + x$1])) < rr) {
				return false;
			}
			j = bsearch16(isNotPrint, rr);
			return j >= isNotPrint.$length || !((((j < 0 || j >= isNotPrint.$length) ? ($throwRuntimeError("index out of range"), undefined) : isNotPrint.$array[isNotPrint.$offset + j]) === rr));
		}
		_tmp$3 = ((r >>> 0));
		_tmp$4 = isPrint32;
		_tmp$5 = isNotPrint32;
		rr$1 = _tmp$3;
		isPrint$1 = _tmp$4;
		isNotPrint$1 = _tmp$5;
		i$1 = bsearch32(isPrint$1, rr$1);
		if (i$1 >= isPrint$1.$length || rr$1 < (x$2 = (i$1 & ~1) >> 0, ((x$2 < 0 || x$2 >= isPrint$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : isPrint$1.$array[isPrint$1.$offset + x$2])) || (x$3 = i$1 | 1, ((x$3 < 0 || x$3 >= isPrint$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : isPrint$1.$array[isPrint$1.$offset + x$3])) < rr$1) {
			return false;
		}
		if (r >= 131072) {
			return true;
		}
		r = r - (65536) >> 0;
		j$1 = bsearch16(isNotPrint$1, ((r << 16 >>> 16)));
		return j$1 >= isNotPrint$1.$length || !((((j$1 < 0 || j$1 >= isNotPrint$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : isNotPrint$1.$array[isNotPrint$1.$offset + j$1]) === ((r << 16 >>> 16))));
	};
	$pkg.IsPrint = IsPrint;
	isInGraphicList = function(r) {
		var i, r, rr;
		if (r > 65535) {
			return false;
		}
		rr = ((r << 16 >>> 16));
		i = bsearch16(isGraphic, rr);
		return i < isGraphic.$length && (rr === ((i < 0 || i >= isGraphic.$length) ? ($throwRuntimeError("index out of range"), undefined) : isGraphic.$array[isGraphic.$offset + i]));
	};
	ptrType.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
	ptrType$2.methods = [{prop: "set", name: "set", pkg: "strconv", typ: $funcType([$String], [$Bool], false)}, {prop: "floatBits", name: "floatBits", pkg: "strconv", typ: $funcType([ptrType$1], [$Uint64, $Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Assign", name: "Assign", pkg: "", typ: $funcType([$Uint64], [], false)}, {prop: "Shift", name: "Shift", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Round", name: "Round", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "RoundDown", name: "RoundDown", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "RoundUp", name: "RoundUp", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "RoundedInteger", name: "RoundedInteger", pkg: "", typ: $funcType([], [$Uint64], false)}];
	ptrType$4.methods = [{prop: "floatBits", name: "floatBits", pkg: "strconv", typ: $funcType([ptrType$1], [$Uint64, $Bool], false)}, {prop: "AssignComputeBounds", name: "AssignComputeBounds", pkg: "", typ: $funcType([$Uint64, $Int, $Bool, ptrType$1], [extFloat, extFloat], false)}, {prop: "Normalize", name: "Normalize", pkg: "", typ: $funcType([], [$Uint], false)}, {prop: "Multiply", name: "Multiply", pkg: "", typ: $funcType([extFloat], [], false)}, {prop: "AssignDecimal", name: "AssignDecimal", pkg: "", typ: $funcType([$Uint64, $Int, $Bool, $Bool, ptrType$1], [$Bool], false)}, {prop: "frexp10", name: "frexp10", pkg: "strconv", typ: $funcType([], [$Int, $Int], false)}, {prop: "FixedDecimal", name: "FixedDecimal", pkg: "", typ: $funcType([ptrType$3, $Int], [$Bool], false)}, {prop: "ShortestDecimal", name: "ShortestDecimal", pkg: "", typ: $funcType([ptrType$3, ptrType$4, ptrType$4], [$Bool], false)}];
	NumError.init("", [{prop: "Func", name: "Func", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Num", name: "Num", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Err", name: "Err", embedded: false, exported: true, typ: $error, tag: ""}]);
	decimal.init("strconv", [{prop: "d", name: "d", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "nd", name: "nd", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "dp", name: "dp", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "neg", name: "neg", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "trunc", name: "trunc", embedded: false, exported: false, typ: $Bool, tag: ""}]);
	leftCheat.init("strconv", [{prop: "delta", name: "delta", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "cutoff", name: "cutoff", embedded: false, exported: false, typ: $String, tag: ""}]);
	extFloat.init("strconv", [{prop: "mant", name: "mant", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "exp", name: "exp", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "neg", name: "neg", embedded: false, exported: false, typ: $Bool, tag: ""}]);
	floatInfo.init("strconv", [{prop: "mantbits", name: "mantbits", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "expbits", name: "expbits", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "bias", name: "bias", embedded: false, exported: false, typ: $Int, tag: ""}]);
	decimalSlice.init("strconv", [{prop: "d", name: "d", embedded: false, exported: false, typ: sliceType$6, tag: ""}, {prop: "nd", name: "nd", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "dp", name: "dp", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "neg", name: "neg", embedded: false, exported: false, typ: $Bool, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = bytealg.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = math.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = bits.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = utf8.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		optimize = true;
		powtab = new sliceType([1, 3, 6, 9, 13, 16, 19, 23, 26]);
		float64pow10 = new sliceType$1([1, 10, 100, 1000, 10000, 100000, 1e+06, 1e+07, 1e+08, 1e+09, 1e+10, 1e+11, 1e+12, 1e+13, 1e+14, 1e+15, 1e+16, 1e+17, 1e+18, 1e+19, 1e+20, 1e+21, 1e+22]);
		float32pow10 = new sliceType$2([1, 10, 100, 1000, 10000, 100000, 1e+06, 1e+07, 1e+08, 1e+09, 1e+10]);
		$pkg.ErrRange = errors.New("value out of range");
		$pkg.ErrSyntax = errors.New("invalid syntax");
		leftcheats = new sliceType$3([new leftCheat.ptr(0, ""), new leftCheat.ptr(1, "5"), new leftCheat.ptr(1, "25"), new leftCheat.ptr(1, "125"), new leftCheat.ptr(2, "625"), new leftCheat.ptr(2, "3125"), new leftCheat.ptr(2, "15625"), new leftCheat.ptr(3, "78125"), new leftCheat.ptr(3, "390625"), new leftCheat.ptr(3, "1953125"), new leftCheat.ptr(4, "9765625"), new leftCheat.ptr(4, "48828125"), new leftCheat.ptr(4, "244140625"), new leftCheat.ptr(4, "1220703125"), new leftCheat.ptr(5, "6103515625"), new leftCheat.ptr(5, "30517578125"), new leftCheat.ptr(5, "152587890625"), new leftCheat.ptr(6, "762939453125"), new leftCheat.ptr(6, "3814697265625"), new leftCheat.ptr(6, "19073486328125"), new leftCheat.ptr(7, "95367431640625"), new leftCheat.ptr(7, "476837158203125"), new leftCheat.ptr(7, "2384185791015625"), new leftCheat.ptr(7, "11920928955078125"), new leftCheat.ptr(8, "59604644775390625"), new leftCheat.ptr(8, "298023223876953125"), new leftCheat.ptr(8, "1490116119384765625"), new leftCheat.ptr(9, "7450580596923828125"), new leftCheat.ptr(9, "37252902984619140625"), new leftCheat.ptr(9, "186264514923095703125"), new leftCheat.ptr(10, "931322574615478515625"), new leftCheat.ptr(10, "4656612873077392578125"), new leftCheat.ptr(10, "23283064365386962890625"), new leftCheat.ptr(10, "116415321826934814453125"), new leftCheat.ptr(11, "582076609134674072265625"), new leftCheat.ptr(11, "2910383045673370361328125"), new leftCheat.ptr(11, "14551915228366851806640625"), new leftCheat.ptr(12, "72759576141834259033203125"), new leftCheat.ptr(12, "363797880709171295166015625"), new leftCheat.ptr(12, "1818989403545856475830078125"), new leftCheat.ptr(13, "9094947017729282379150390625"), new leftCheat.ptr(13, "45474735088646411895751953125"), new leftCheat.ptr(13, "227373675443232059478759765625"), new leftCheat.ptr(13, "1136868377216160297393798828125"), new leftCheat.ptr(14, "5684341886080801486968994140625"), new leftCheat.ptr(14, "28421709430404007434844970703125"), new leftCheat.ptr(14, "142108547152020037174224853515625"), new leftCheat.ptr(15, "710542735760100185871124267578125"), new leftCheat.ptr(15, "3552713678800500929355621337890625"), new leftCheat.ptr(15, "17763568394002504646778106689453125"), new leftCheat.ptr(16, "88817841970012523233890533447265625"), new leftCheat.ptr(16, "444089209850062616169452667236328125"), new leftCheat.ptr(16, "2220446049250313080847263336181640625"), new leftCheat.ptr(16, "11102230246251565404236316680908203125"), new leftCheat.ptr(17, "55511151231257827021181583404541015625"), new leftCheat.ptr(17, "277555756156289135105907917022705078125"), new leftCheat.ptr(17, "1387778780781445675529539585113525390625"), new leftCheat.ptr(18, "6938893903907228377647697925567626953125"), new leftCheat.ptr(18, "34694469519536141888238489627838134765625"), new leftCheat.ptr(18, "173472347597680709441192448139190673828125"), new leftCheat.ptr(19, "867361737988403547205962240695953369140625")]);
		smallPowersOfTen = $toNativeArray($kindStruct, [new extFloat.ptr(new $Uint64(2147483648, 0), -63, false), new extFloat.ptr(new $Uint64(2684354560, 0), -60, false), new extFloat.ptr(new $Uint64(3355443200, 0), -57, false), new extFloat.ptr(new $Uint64(4194304000, 0), -54, false), new extFloat.ptr(new $Uint64(2621440000, 0), -50, false), new extFloat.ptr(new $Uint64(3276800000, 0), -47, false), new extFloat.ptr(new $Uint64(4096000000, 0), -44, false), new extFloat.ptr(new $Uint64(2560000000, 0), -40, false)]);
		powersOfTen = $toNativeArray($kindStruct, [new extFloat.ptr(new $Uint64(4203730336, 136053384), -1220, false), new extFloat.ptr(new $Uint64(3132023167, 2722021238), -1193, false), new extFloat.ptr(new $Uint64(2333539104, 810921078), -1166, false), new extFloat.ptr(new $Uint64(3477244234, 1573795306), -1140, false), new extFloat.ptr(new $Uint64(2590748842, 1432697645), -1113, false), new extFloat.ptr(new $Uint64(3860516611, 1025131999), -1087, false), new extFloat.ptr(new $Uint64(2876309015, 3348809418), -1060, false), new extFloat.ptr(new $Uint64(4286034428, 3200048207), -1034, false), new extFloat.ptr(new $Uint64(3193344495, 1097586188), -1007, false), new extFloat.ptr(new $Uint64(2379227053, 2424306748), -980, false), new extFloat.ptr(new $Uint64(3545324584, 827693699), -954, false), new extFloat.ptr(new $Uint64(2641472655, 2913388981), -927, false), new extFloat.ptr(new $Uint64(3936100983, 602835915), -901, false), new extFloat.ptr(new $Uint64(2932623761, 1081627501), -874, false), new extFloat.ptr(new $Uint64(2184974969, 1572261463), -847, false), new extFloat.ptr(new $Uint64(3255866422, 1308317239), -821, false), new extFloat.ptr(new $Uint64(2425809519, 944281679), -794, false), new extFloat.ptr(new $Uint64(3614737867, 629291719), -768, false), new extFloat.ptr(new $Uint64(2693189581, 2545915892), -741, false), new extFloat.ptr(new $Uint64(4013165208, 388672741), -715, false), new extFloat.ptr(new $Uint64(2990041083, 708162190), -688, false), new extFloat.ptr(new $Uint64(2227754207, 3536207675), -661, false), new extFloat.ptr(new $Uint64(3319612455, 450088378), -635, false), new extFloat.ptr(new $Uint64(2473304014, 3139815830), -608, false), new extFloat.ptr(new $Uint64(3685510180, 2103616900), -582, false), new extFloat.ptr(new $Uint64(2745919064, 224385782), -555, false), new extFloat.ptr(new $Uint64(4091738259, 3737383206), -529, false), new extFloat.ptr(new $Uint64(3048582568, 2868871352), -502, false), new extFloat.ptr(new $Uint64(2271371013, 1820084875), -475, false), new extFloat.ptr(new $Uint64(3384606560, 885076051), -449, false), new extFloat.ptr(new $Uint64(2521728396, 2444895829), -422, false), new extFloat.ptr(new $Uint64(3757668132, 1881767613), -396, false), new extFloat.ptr(new $Uint64(2799680927, 3102062735), -369, false), new extFloat.ptr(new $Uint64(4171849679, 2289335700), -343, false), new extFloat.ptr(new $Uint64(3108270227, 2410191823), -316, false), new extFloat.ptr(new $Uint64(2315841784, 3205436779), -289, false), new extFloat.ptr(new $Uint64(3450873173, 1697722806), -263, false), new extFloat.ptr(new $Uint64(2571100870, 3497754540), -236, false), new extFloat.ptr(new $Uint64(3831238852, 707476230), -210, false), new extFloat.ptr(new $Uint64(2854495385, 1769181907), -183, false), new extFloat.ptr(new $Uint64(4253529586, 2197867022), -157, false), new extFloat.ptr(new $Uint64(3169126500, 2450594539), -130, false), new extFloat.ptr(new $Uint64(2361183241, 1867548876), -103, false), new extFloat.ptr(new $Uint64(3518437208, 3793315116), -77, false), new extFloat.ptr(new $Uint64(2621440000, 0), -50, false), new extFloat.ptr(new $Uint64(3906250000, 0), -24, false), new extFloat.ptr(new $Uint64(2910383045, 2892103680), 3, false), new extFloat.ptr(new $Uint64(2168404344, 4170451332), 30, false), new extFloat.ptr(new $Uint64(3231174267, 3372684723), 56, false), new extFloat.ptr(new $Uint64(2407412430, 2078956656), 83, false), new extFloat.ptr(new $Uint64(3587324068, 2884206696), 109, false), new extFloat.ptr(new $Uint64(2672764710, 395977285), 136, false), new extFloat.ptr(new $Uint64(3982729777, 3569679143), 162, false), new extFloat.ptr(new $Uint64(2967364920, 2361961896), 189, false), new extFloat.ptr(new $Uint64(2210859150, 447440347), 216, false), new extFloat.ptr(new $Uint64(3294436857, 1114709402), 242, false), new extFloat.ptr(new $Uint64(2454546732, 2786846552), 269, false), new extFloat.ptr(new $Uint64(3657559652, 443583978), 295, false), new extFloat.ptr(new $Uint64(2725094297, 2599384906), 322, false), new extFloat.ptr(new $Uint64(4060706939, 3028118405), 348, false), new extFloat.ptr(new $Uint64(3025462433, 2044532855), 375, false), new extFloat.ptr(new $Uint64(2254145170, 1536935362), 402, false), new extFloat.ptr(new $Uint64(3358938053, 3365297469), 428, false), new extFloat.ptr(new $Uint64(2502603868, 4204241075), 455, false), new extFloat.ptr(new $Uint64(3729170365, 2577424355), 481, false), new extFloat.ptr(new $Uint64(2778448436, 3677981733), 508, false), new extFloat.ptr(new $Uint64(4140210802, 2744688476), 534, false), new extFloat.ptr(new $Uint64(3084697427, 1424604878), 561, false), new extFloat.ptr(new $Uint64(2298278679, 4062331362), 588, false), new extFloat.ptr(new $Uint64(3424702107, 3546052773), 614, false), new extFloat.ptr(new $Uint64(2551601907, 2065781727), 641, false), new extFloat.ptr(new $Uint64(3802183132, 2535403578), 667, false), new extFloat.ptr(new $Uint64(2832847187, 1558426518), 694, false), new extFloat.ptr(new $Uint64(4221271257, 2762425404), 720, false), new extFloat.ptr(new $Uint64(3145092172, 2812560400), 747, false), new extFloat.ptr(new $Uint64(2343276271, 3057687578), 774, false), new extFloat.ptr(new $Uint64(3491753744, 2790753324), 800, false), new extFloat.ptr(new $Uint64(2601559269, 3918606633), 827, false), new extFloat.ptr(new $Uint64(3876625403, 2711358621), 853, false), new extFloat.ptr(new $Uint64(2888311001, 1648096297), 880, false), new extFloat.ptr(new $Uint64(2151959390, 2057817989), 907, false), new extFloat.ptr(new $Uint64(3206669376, 61660461), 933, false), new extFloat.ptr(new $Uint64(2389154863, 1581580175), 960, false), new extFloat.ptr(new $Uint64(3560118173, 2626467905), 986, false), new extFloat.ptr(new $Uint64(2652494738, 3034782633), 1013, false), new extFloat.ptr(new $Uint64(3952525166, 3135207385), 1039, false), new extFloat.ptr(new $Uint64(2944860731, 2616258155), 1066, false)]);
		uint64pow10 = $toNativeArray($kindUint64, [new $Uint64(0, 1), new $Uint64(0, 10), new $Uint64(0, 100), new $Uint64(0, 1000), new $Uint64(0, 10000), new $Uint64(0, 100000), new $Uint64(0, 1000000), new $Uint64(0, 10000000), new $Uint64(0, 100000000), new $Uint64(0, 1000000000), new $Uint64(2, 1410065408), new $Uint64(23, 1215752192), new $Uint64(232, 3567587328), new $Uint64(2328, 1316134912), new $Uint64(23283, 276447232), new $Uint64(232830, 2764472320), new $Uint64(2328306, 1874919424), new $Uint64(23283064, 1569325056), new $Uint64(232830643, 2808348672), new $Uint64(2328306436, 2313682944)]);
		float32info = new floatInfo.ptr(23, 8, -127);
		float64info = new floatInfo.ptr(52, 11, -1023);
		isPrint16 = new sliceType$4([32, 126, 161, 887, 890, 895, 900, 1366, 1369, 1418, 1421, 1479, 1488, 1514, 1520, 1524, 1542, 1563, 1566, 1805, 1808, 1866, 1869, 1969, 1984, 2042, 2048, 2093, 2096, 2139, 2142, 2154, 2208, 2237, 2260, 2444, 2447, 2448, 2451, 2482, 2486, 2489, 2492, 2500, 2503, 2504, 2507, 2510, 2519, 2519, 2524, 2531, 2534, 2557, 2561, 2570, 2575, 2576, 2579, 2617, 2620, 2626, 2631, 2632, 2635, 2637, 2641, 2641, 2649, 2654, 2662, 2677, 2689, 2745, 2748, 2765, 2768, 2768, 2784, 2787, 2790, 2801, 2809, 2828, 2831, 2832, 2835, 2873, 2876, 2884, 2887, 2888, 2891, 2893, 2902, 2903, 2908, 2915, 2918, 2935, 2946, 2954, 2958, 2965, 2969, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3006, 3010, 3014, 3021, 3024, 3024, 3031, 3031, 3046, 3066, 3072, 3129, 3133, 3149, 3157, 3162, 3168, 3171, 3174, 3183, 3192, 3257, 3260, 3277, 3285, 3286, 3294, 3299, 3302, 3314, 3328, 3407, 3412, 3427, 3430, 3455, 3458, 3478, 3482, 3517, 3520, 3526, 3530, 3530, 3535, 3551, 3558, 3567, 3570, 3572, 3585, 3642, 3647, 3675, 3713, 3716, 3719, 3722, 3725, 3725, 3732, 3751, 3754, 3773, 3776, 3789, 3792, 3801, 3804, 3807, 3840, 3948, 3953, 4058, 4096, 4295, 4301, 4301, 4304, 4685, 4688, 4701, 4704, 4749, 4752, 4789, 4792, 4805, 4808, 4885, 4888, 4954, 4957, 4988, 4992, 5017, 5024, 5109, 5112, 5117, 5120, 5788, 5792, 5880, 5888, 5908, 5920, 5942, 5952, 5971, 5984, 6003, 6016, 6109, 6112, 6121, 6128, 6137, 6144, 6157, 6160, 6169, 6176, 6263, 6272, 6314, 6320, 6389, 6400, 6443, 6448, 6459, 6464, 6464, 6468, 6509, 6512, 6516, 6528, 6571, 6576, 6601, 6608, 6618, 6622, 6683, 6686, 6780, 6783, 6793, 6800, 6809, 6816, 6829, 6832, 6846, 6912, 6987, 6992, 7036, 7040, 7155, 7164, 7223, 7227, 7241, 7245, 7304, 7360, 7367, 7376, 7417, 7424, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8061, 8064, 8147, 8150, 8175, 8178, 8190, 8208, 8231, 8240, 8286, 8304, 8305, 8308, 8348, 8352, 8383, 8400, 8432, 8448, 8587, 8592, 9254, 9280, 9290, 9312, 11123, 11126, 11157, 11160, 11193, 11197, 11218, 11244, 11247, 11264, 11507, 11513, 11559, 11565, 11565, 11568, 11623, 11631, 11632, 11647, 11670, 11680, 11849, 11904, 12019, 12032, 12245, 12272, 12283, 12289, 12438, 12441, 12543, 12549, 12590, 12593, 12730, 12736, 12771, 12784, 19893, 19904, 40938, 40960, 42124, 42128, 42182, 42192, 42539, 42560, 42743, 42752, 42935, 42999, 43051, 43056, 43065, 43072, 43127, 43136, 43205, 43214, 43225, 43232, 43261, 43264, 43347, 43359, 43388, 43392, 43481, 43486, 43574, 43584, 43597, 43600, 43609, 43612, 43714, 43739, 43766, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43877, 43888, 44013, 44016, 44025, 44032, 55203, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64449, 64467, 64831, 64848, 64911, 64914, 64967, 65008, 65021, 65024, 65049, 65056, 65131, 65136, 65276, 65281, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65504, 65518, 65532, 65533]);
		isNotPrint16 = new sliceType$4([173, 907, 909, 930, 1328, 1376, 1416, 1424, 1757, 2111, 2143, 2229, 2274, 2436, 2473, 2481, 2526, 2564, 2601, 2609, 2612, 2615, 2621, 2653, 2692, 2702, 2706, 2729, 2737, 2740, 2758, 2762, 2816, 2820, 2857, 2865, 2868, 2910, 2948, 2961, 2971, 2973, 3017, 3076, 3085, 3089, 3113, 3141, 3145, 3159, 3204, 3213, 3217, 3241, 3252, 3269, 3273, 3295, 3312, 3332, 3341, 3345, 3397, 3401, 3460, 3506, 3516, 3541, 3543, 3715, 3721, 3736, 3744, 3748, 3750, 3756, 3770, 3781, 3783, 3912, 3992, 4029, 4045, 4294, 4681, 4695, 4697, 4745, 4785, 4799, 4801, 4823, 4881, 5760, 5901, 5997, 6001, 6431, 6751, 7674, 8024, 8026, 8028, 8030, 8117, 8133, 8156, 8181, 8335, 11209, 11311, 11359, 11558, 11687, 11695, 11703, 11711, 11719, 11727, 11735, 11743, 11930, 12352, 12687, 12831, 13055, 42927, 43470, 43519, 43815, 43823, 64311, 64317, 64319, 64322, 64325, 65107, 65127, 65141, 65511]);
		isPrint32 = new sliceType$5([65536, 65613, 65616, 65629, 65664, 65786, 65792, 65794, 65799, 65843, 65847, 65947, 65952, 65952, 66000, 66045, 66176, 66204, 66208, 66256, 66272, 66299, 66304, 66339, 66349, 66378, 66384, 66426, 66432, 66499, 66504, 66517, 66560, 66717, 66720, 66729, 66736, 66771, 66776, 66811, 66816, 66855, 66864, 66915, 66927, 66927, 67072, 67382, 67392, 67413, 67424, 67431, 67584, 67589, 67592, 67640, 67644, 67644, 67647, 67742, 67751, 67759, 67808, 67829, 67835, 67867, 67871, 67897, 67903, 67903, 67968, 68023, 68028, 68047, 68050, 68102, 68108, 68147, 68152, 68154, 68159, 68167, 68176, 68184, 68192, 68255, 68288, 68326, 68331, 68342, 68352, 68405, 68409, 68437, 68440, 68466, 68472, 68497, 68505, 68508, 68521, 68527, 68608, 68680, 68736, 68786, 68800, 68850, 68858, 68863, 69216, 69246, 69632, 69709, 69714, 69743, 69759, 69825, 69840, 69864, 69872, 69881, 69888, 69955, 69968, 70006, 70016, 70093, 70096, 70132, 70144, 70206, 70272, 70313, 70320, 70378, 70384, 70393, 70400, 70412, 70415, 70416, 70419, 70457, 70460, 70468, 70471, 70472, 70475, 70477, 70480, 70480, 70487, 70487, 70493, 70499, 70502, 70508, 70512, 70516, 70656, 70749, 70784, 70855, 70864, 70873, 71040, 71093, 71096, 71133, 71168, 71236, 71248, 71257, 71264, 71276, 71296, 71351, 71360, 71369, 71424, 71449, 71453, 71467, 71472, 71487, 71840, 71922, 71935, 71935, 72192, 72263, 72272, 72323, 72326, 72354, 72384, 72440, 72704, 72773, 72784, 72812, 72816, 72847, 72850, 72886, 72960, 73014, 73018, 73031, 73040, 73049, 73728, 74649, 74752, 74868, 74880, 75075, 77824, 78894, 82944, 83526, 92160, 92728, 92736, 92777, 92782, 92783, 92880, 92909, 92912, 92917, 92928, 92997, 93008, 93047, 93053, 93071, 93952, 94020, 94032, 94078, 94095, 94111, 94176, 94177, 94208, 100332, 100352, 101106, 110592, 110878, 110960, 111355, 113664, 113770, 113776, 113788, 113792, 113800, 113808, 113817, 113820, 113823, 118784, 119029, 119040, 119078, 119081, 119154, 119163, 119272, 119296, 119365, 119552, 119638, 119648, 119665, 119808, 119967, 119970, 119970, 119973, 119974, 119977, 120074, 120077, 120134, 120138, 120485, 120488, 120779, 120782, 121483, 121499, 121519, 122880, 122904, 122907, 122922, 124928, 125124, 125127, 125142, 125184, 125258, 125264, 125273, 125278, 125279, 126464, 126500, 126503, 126523, 126530, 126530, 126535, 126548, 126551, 126564, 126567, 126619, 126625, 126651, 126704, 126705, 126976, 127019, 127024, 127123, 127136, 127150, 127153, 127221, 127232, 127244, 127248, 127339, 127344, 127404, 127462, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 128724, 128736, 128748, 128752, 128760, 128768, 128883, 128896, 128980, 129024, 129035, 129040, 129095, 129104, 129113, 129120, 129159, 129168, 129197, 129280, 129291, 129296, 129356, 129360, 129387, 129408, 129431, 129472, 129472, 129488, 129510, 131072, 173782, 173824, 177972, 177984, 178205, 178208, 183969, 183984, 191456, 194560, 195101, 917760, 917999]);
		isNotPrint32 = new sliceType$4([12, 39, 59, 62, 399, 926, 2057, 2102, 2134, 2291, 2564, 2580, 2584, 4285, 4405, 4576, 4626, 4743, 4745, 4750, 4766, 4868, 4905, 4913, 4916, 5210, 5212, 6813, 7177, 7223, 7336, 7431, 7434, 7483, 7486, 9327, 27231, 27482, 27490, 54357, 54429, 54445, 54458, 54460, 54468, 54534, 54549, 54557, 54586, 54591, 54597, 54609, 55968, 57351, 57378, 57381, 60932, 60960, 60963, 60968, 60979, 60984, 60986, 61000, 61002, 61004, 61008, 61011, 61016, 61018, 61020, 61022, 61024, 61027, 61035, 61043, 61048, 61053, 61055, 61066, 61092, 61098, 61632, 61648, 61743, 63807]);
		isGraphic = new sliceType$4([160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288]);
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["reflect"]=(function(){var $pkg={},$init,errors,js,math,runtime,strconv,sync,unicode,utf8,uncommonType,funcType,name,nameData,mapIter,Type,Kind,tflag,rtype,typeAlg,method,ChanDir,arrayType,chanType,imethod,interfaceType,mapType,ptrType,sliceType,structField,structType,Method,nameOff,typeOff,textOff,StructField,StructTag,fieldScan,Value,flag,ValueError,MapIter,sliceType$1,ptrType$1,sliceType$2,sliceType$3,ptrType$2,funcType$1,sliceType$4,ptrType$3,ptrType$4,sliceType$5,sliceType$6,sliceType$7,ptrType$5,ptrType$6,structType$3,sliceType$8,sliceType$9,ptrType$7,sliceType$10,sliceType$11,ptrType$8,ptrType$9,ptrType$10,sliceType$13,sliceType$14,ptrType$11,sliceType$15,ptrType$17,sliceType$18,funcType$3,funcType$4,funcType$5,ptrType$18,arrayType$8,ptrType$19,ptrType$20,initialized,uncommonTypeMap,nameMap,nameOffList,typeOffList,callHelper,jsObjectPtr,selectHelper,kindNames,uint8Type,init,jsType,reflectType,setKindType,newName,newNameOff,newTypeOff,internalStr,isWrapped,copyStruct,makeValue,MakeSlice,TypeOf,ValueOf,FuncOf,SliceOf,Zero,unsafe_New,makeInt,typedmemmove,makemap,keyFor,mapaccess,mapassign,mapdelete,mapiterinit,mapiterkey,mapitervalue,mapiternext,maplen,cvtDirect,Copy,valueInterface,ifaceE2I,methodName,makeMethodValue,wrapJsObject,unwrapJsObject,getJsTag,chanrecv,chansend,methodReceiver,PtrTo,implements$1,directlyAssignable,haveIdenticalType,haveIdenticalUnderlyingType,toType,ifaceIndir,copyVal,overflowFloat32,typesMustMatch,MakeMap,MakeMapWithSize,New,convertOp,makeFloat,makeComplex,makeString,makeBytes,makeRunes,cvtInt,cvtUint,cvtFloatInt,cvtFloatUint,cvtIntFloat,cvtUintFloat,cvtFloat,cvtComplex,cvtIntString,cvtUintString,cvtBytesString,cvtStringBytes,cvtRunesString,cvtStringRunes,cvtT2I,cvtI2I;	errors = $packages["errors"];
	js = $packages["github.com/gopherjs/gopherjs/js"];
	math = $packages["math"];
	runtime = $packages["runtime"];
	strconv = $packages["strconv"];
	sync = $packages["sync"];
	unicode = $packages["unicode"];
	utf8 = $packages["unicode/utf8"];
	uncommonType = $pkg.uncommonType = $newType(0, $kindStruct, "reflect.uncommonType", true, "reflect", false, function(pkgPath_, mcount_, xcount_, moff_, _methods_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.pkgPath = 0;
			this.mcount = 0;
			this.xcount = 0;
			this.moff = 0;
			this._methods = sliceType$5.nil;
			return;
		}
		this.pkgPath = pkgPath_;
		this.mcount = mcount_;
		this.xcount = xcount_;
		this.moff = moff_;
		this._methods = _methods_;
	});
	funcType = $pkg.funcType = $newType(0, $kindStruct, "reflect.funcType", true, "reflect", false, function(rtype_, inCount_, outCount_, _in_, _out_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.rtype = new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0);
			this.inCount = 0;
			this.outCount = 0;
			this._in = sliceType$2.nil;
			this._out = sliceType$2.nil;
			return;
		}
		this.rtype = rtype_;
		this.inCount = inCount_;
		this.outCount = outCount_;
		this._in = _in_;
		this._out = _out_;
	});
	name = $pkg.name = $newType(0, $kindStruct, "reflect.name", true, "reflect", false, function(bytes_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.bytes = ptrType$4.nil;
			return;
		}
		this.bytes = bytes_;
	});
	nameData = $pkg.nameData = $newType(0, $kindStruct, "reflect.nameData", true, "reflect", false, function(name_, tag_, exported_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.name = "";
			this.tag = "";
			this.exported = false;
			return;
		}
		this.name = name_;
		this.tag = tag_;
		this.exported = exported_;
	});
	mapIter = $pkg.mapIter = $newType(0, $kindStruct, "reflect.mapIter", true, "reflect", false, function(t_, m_, keys_, i_, last_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.t = $ifaceNil;
			this.m = null;
			this.keys = null;
			this.i = 0;
			this.last = null;
			return;
		}
		this.t = t_;
		this.m = m_;
		this.keys = keys_;
		this.i = i_;
		this.last = last_;
	});
	Type = $pkg.Type = $newType(8, $kindInterface, "reflect.Type", true, "reflect", true, null);
	Kind = $pkg.Kind = $newType(4, $kindUint, "reflect.Kind", true, "reflect", true, null);
	tflag = $pkg.tflag = $newType(1, $kindUint8, "reflect.tflag", true, "reflect", false, null);
	rtype = $pkg.rtype = $newType(0, $kindStruct, "reflect.rtype", true, "reflect", false, function(size_, ptrdata_, hash_, tflag_, align_, fieldAlign_, kind_, alg_, gcdata_, str_, ptrToThis_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.size = 0;
			this.ptrdata = 0;
			this.hash = 0;
			this.tflag = 0;
			this.align = 0;
			this.fieldAlign = 0;
			this.kind = 0;
			this.alg = ptrType$3.nil;
			this.gcdata = ptrType$4.nil;
			this.str = 0;
			this.ptrToThis = 0;
			return;
		}
		this.size = size_;
		this.ptrdata = ptrdata_;
		this.hash = hash_;
		this.tflag = tflag_;
		this.align = align_;
		this.fieldAlign = fieldAlign_;
		this.kind = kind_;
		this.alg = alg_;
		this.gcdata = gcdata_;
		this.str = str_;
		this.ptrToThis = ptrToThis_;
	});
	typeAlg = $pkg.typeAlg = $newType(0, $kindStruct, "reflect.typeAlg", true, "reflect", false, function(hash_, equal_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.hash = $throwNilPointerError;
			this.equal = $throwNilPointerError;
			return;
		}
		this.hash = hash_;
		this.equal = equal_;
	});
	method = $pkg.method = $newType(0, $kindStruct, "reflect.method", true, "reflect", false, function(name_, mtyp_, ifn_, tfn_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.name = 0;
			this.mtyp = 0;
			this.ifn = 0;
			this.tfn = 0;
			return;
		}
		this.name = name_;
		this.mtyp = mtyp_;
		this.ifn = ifn_;
		this.tfn = tfn_;
	});
	ChanDir = $pkg.ChanDir = $newType(4, $kindInt, "reflect.ChanDir", true, "reflect", true, null);
	arrayType = $pkg.arrayType = $newType(0, $kindStruct, "reflect.arrayType", true, "reflect", false, function(rtype_, elem_, slice_, len_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.rtype = new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0);
			this.elem = ptrType$1.nil;
			this.slice = ptrType$1.nil;
			this.len = 0;
			return;
		}
		this.rtype = rtype_;
		this.elem = elem_;
		this.slice = slice_;
		this.len = len_;
	});
	chanType = $pkg.chanType = $newType(0, $kindStruct, "reflect.chanType", true, "reflect", false, function(rtype_, elem_, dir_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.rtype = new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0);
			this.elem = ptrType$1.nil;
			this.dir = 0;
			return;
		}
		this.rtype = rtype_;
		this.elem = elem_;
		this.dir = dir_;
	});
	imethod = $pkg.imethod = $newType(0, $kindStruct, "reflect.imethod", true, "reflect", false, function(name_, typ_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.name = 0;
			this.typ = 0;
			return;
		}
		this.name = name_;
		this.typ = typ_;
	});
	interfaceType = $pkg.interfaceType = $newType(0, $kindStruct, "reflect.interfaceType", true, "reflect", false, function(rtype_, pkgPath_, methods_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.rtype = new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0);
			this.pkgPath = new name.ptr(ptrType$4.nil);
			this.methods = sliceType$6.nil;
			return;
		}
		this.rtype = rtype_;
		this.pkgPath = pkgPath_;
		this.methods = methods_;
	});
	mapType = $pkg.mapType = $newType(0, $kindStruct, "reflect.mapType", true, "reflect", false, function(rtype_, key_, elem_, bucket_, keysize_, valuesize_, bucketsize_, flags_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.rtype = new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0);
			this.key = ptrType$1.nil;
			this.elem = ptrType$1.nil;
			this.bucket = ptrType$1.nil;
			this.keysize = 0;
			this.valuesize = 0;
			this.bucketsize = 0;
			this.flags = 0;
			return;
		}
		this.rtype = rtype_;
		this.key = key_;
		this.elem = elem_;
		this.bucket = bucket_;
		this.keysize = keysize_;
		this.valuesize = valuesize_;
		this.bucketsize = bucketsize_;
		this.flags = flags_;
	});
	ptrType = $pkg.ptrType = $newType(0, $kindStruct, "reflect.ptrType", true, "reflect", false, function(rtype_, elem_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.rtype = new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0);
			this.elem = ptrType$1.nil;
			return;
		}
		this.rtype = rtype_;
		this.elem = elem_;
	});
	sliceType = $pkg.sliceType = $newType(0, $kindStruct, "reflect.sliceType", true, "reflect", false, function(rtype_, elem_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.rtype = new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0);
			this.elem = ptrType$1.nil;
			return;
		}
		this.rtype = rtype_;
		this.elem = elem_;
	});
	structField = $pkg.structField = $newType(0, $kindStruct, "reflect.structField", true, "reflect", false, function(name_, typ_, offsetEmbed_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.name = new name.ptr(ptrType$4.nil);
			this.typ = ptrType$1.nil;
			this.offsetEmbed = 0;
			return;
		}
		this.name = name_;
		this.typ = typ_;
		this.offsetEmbed = offsetEmbed_;
	});
	structType = $pkg.structType = $newType(0, $kindStruct, "reflect.structType", true, "reflect", false, function(rtype_, pkgPath_, fields_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.rtype = new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0);
			this.pkgPath = new name.ptr(ptrType$4.nil);
			this.fields = sliceType$7.nil;
			return;
		}
		this.rtype = rtype_;
		this.pkgPath = pkgPath_;
		this.fields = fields_;
	});
	Method = $pkg.Method = $newType(0, $kindStruct, "reflect.Method", true, "reflect", true, function(Name_, PkgPath_, Type_, Func_, Index_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Name = "";
			this.PkgPath = "";
			this.Type = $ifaceNil;
			this.Func = new Value.ptr(ptrType$1.nil, 0, 0);
			this.Index = 0;
			return;
		}
		this.Name = Name_;
		this.PkgPath = PkgPath_;
		this.Type = Type_;
		this.Func = Func_;
		this.Index = Index_;
	});
	nameOff = $pkg.nameOff = $newType(4, $kindInt32, "reflect.nameOff", true, "reflect", false, null);
	typeOff = $pkg.typeOff = $newType(4, $kindInt32, "reflect.typeOff", true, "reflect", false, null);
	textOff = $pkg.textOff = $newType(4, $kindInt32, "reflect.textOff", true, "reflect", false, null);
	StructField = $pkg.StructField = $newType(0, $kindStruct, "reflect.StructField", true, "reflect", true, function(Name_, PkgPath_, Type_, Tag_, Offset_, Index_, Anonymous_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Name = "";
			this.PkgPath = "";
			this.Type = $ifaceNil;
			this.Tag = "";
			this.Offset = 0;
			this.Index = sliceType$13.nil;
			this.Anonymous = false;
			return;
		}
		this.Name = Name_;
		this.PkgPath = PkgPath_;
		this.Type = Type_;
		this.Tag = Tag_;
		this.Offset = Offset_;
		this.Index = Index_;
		this.Anonymous = Anonymous_;
	});
	StructTag = $pkg.StructTag = $newType(8, $kindString, "reflect.StructTag", true, "reflect", true, null);
	fieldScan = $pkg.fieldScan = $newType(0, $kindStruct, "reflect.fieldScan", true, "reflect", false, function(typ_, index_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.typ = ptrType$11.nil;
			this.index = sliceType$13.nil;
			return;
		}
		this.typ = typ_;
		this.index = index_;
	});
	Value = $pkg.Value = $newType(0, $kindStruct, "reflect.Value", true, "reflect", true, function(typ_, ptr_, flag_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.typ = ptrType$1.nil;
			this.ptr = 0;
			this.flag = 0;
			return;
		}
		this.typ = typ_;
		this.ptr = ptr_;
		this.flag = flag_;
	});
	flag = $pkg.flag = $newType(4, $kindUintptr, "reflect.flag", true, "reflect", false, null);
	ValueError = $pkg.ValueError = $newType(0, $kindStruct, "reflect.ValueError", true, "reflect", true, function(Method_, Kind_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Method = "";
			this.Kind = 0;
			return;
		}
		this.Method = Method_;
		this.Kind = Kind_;
	});
	MapIter = $pkg.MapIter = $newType(0, $kindStruct, "reflect.MapIter", true, "reflect", true, function(m_, it_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.m = new Value.ptr(ptrType$1.nil, 0, 0);
			this.it = 0;
			return;
		}
		this.m = m_;
		this.it = it_;
	});
	sliceType$1 = $sliceType(name);
	ptrType$1 = $ptrType(rtype);
	sliceType$2 = $sliceType(ptrType$1);
	sliceType$3 = $sliceType($emptyInterface);
	ptrType$2 = $ptrType(js.Object);
	funcType$1 = $funcType([sliceType$3], [ptrType$2], true);
	sliceType$4 = $sliceType($String);
	ptrType$3 = $ptrType(typeAlg);
	ptrType$4 = $ptrType($Uint8);
	sliceType$5 = $sliceType(method);
	sliceType$6 = $sliceType(imethod);
	sliceType$7 = $sliceType(structField);
	ptrType$5 = $ptrType(uncommonType);
	ptrType$6 = $ptrType(nameData);
	structType$3 = $structType("reflect", [{prop: "str", name: "str", embedded: false, exported: false, typ: $String, tag: ""}]);
	sliceType$8 = $sliceType(ptrType$2);
	sliceType$9 = $sliceType(Value);
	ptrType$7 = $ptrType(mapIter);
	sliceType$10 = $sliceType(Type);
	sliceType$11 = $sliceType(sliceType$8);
	ptrType$8 = $ptrType(funcType);
	ptrType$9 = $ptrType(interfaceType);
	ptrType$10 = $ptrType(imethod);
	sliceType$13 = $sliceType($Int);
	sliceType$14 = $sliceType(fieldScan);
	ptrType$11 = $ptrType(structType);
	sliceType$15 = $sliceType($Uint8);
	ptrType$17 = $ptrType($UnsafePointer);
	sliceType$18 = $sliceType($Int32);
	funcType$3 = $funcType([$String], [$Bool], false);
	funcType$4 = $funcType([$UnsafePointer, $Uintptr], [$Uintptr], false);
	funcType$5 = $funcType([$UnsafePointer, $UnsafePointer], [$Bool], false);
	ptrType$18 = $ptrType(structField);
	arrayType$8 = $arrayType($Uintptr, 2);
	ptrType$19 = $ptrType(MapIter);
	ptrType$20 = $ptrType(ValueError);
	init = function() {
		var used, x, x$1, x$10, x$11, x$12, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; used = $f.used; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$12 = $f.x$12; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		used = (function(i) {
			var i;
		});
		$r = used((x = new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), new x.constructor.elem(x))); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = used((x$1 = new uncommonType.ptr(0, 0, 0, 0, sliceType$5.nil), new x$1.constructor.elem(x$1))); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = used((x$2 = new method.ptr(0, 0, 0, 0), new x$2.constructor.elem(x$2))); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = used((x$3 = new arrayType.ptr(new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), ptrType$1.nil, ptrType$1.nil, 0), new x$3.constructor.elem(x$3))); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = used((x$4 = new chanType.ptr(new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), ptrType$1.nil, 0), new x$4.constructor.elem(x$4))); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = used((x$5 = new funcType.ptr(new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), 0, 0, sliceType$2.nil, sliceType$2.nil), new x$5.constructor.elem(x$5))); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = used((x$6 = new interfaceType.ptr(new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), new name.ptr(ptrType$4.nil), sliceType$6.nil), new x$6.constructor.elem(x$6))); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = used((x$7 = new mapType.ptr(new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), ptrType$1.nil, ptrType$1.nil, ptrType$1.nil, 0, 0, 0, 0), new x$7.constructor.elem(x$7))); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = used((x$8 = new ptrType.ptr(new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), ptrType$1.nil), new x$8.constructor.elem(x$8))); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = used((x$9 = new sliceType.ptr(new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), ptrType$1.nil), new x$9.constructor.elem(x$9))); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = used((x$10 = new structType.ptr(new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), new name.ptr(ptrType$4.nil), sliceType$7.nil), new x$10.constructor.elem(x$10))); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = used((x$11 = new imethod.ptr(0, 0), new x$11.constructor.elem(x$11))); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = used((x$12 = new structField.ptr(new name.ptr(ptrType$4.nil), ptrType$1.nil, 0), new x$12.constructor.elem(x$12))); /* */ $s = 13; case 13: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		initialized = true;
		uint8Type = $assertType(TypeOf(new $Uint8(0)), ptrType$1);
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: init }; } $f.used = used; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$12 = x$12; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	jsType = function(typ) {
		var typ;
		return typ.jsType;
	};
	reflectType = function(typ) {
		var _1, _i, _i$1, _i$2, _i$3, _key, _ref, _ref$1, _ref$2, _ref$3, dir, exported, exported$1, f, fields, i, i$1, i$2, i$3, i$4, i$5, imethods, in$1, m, m$1, m$2, methodSet, methods, offsetEmbed, out, outCount, params, reflectFields, reflectMethods, results, rt, typ, ut, xcount;
		if (typ.reflectType === undefined) {
			rt = new rtype.ptr(((($parseInt(typ.size) >> 0) >>> 0)), 0, 0, 0, 0, 0, ((($parseInt(typ.kind) >> 0) << 24 >>> 24)), ptrType$3.nil, ptrType$4.nil, newNameOff($clone(newName(internalStr(typ.string), "", !!(typ.exported)), name)), 0);
			rt.jsType = typ;
			typ.reflectType = rt;
			methodSet = $methodSet(typ);
			if (!(($parseInt(methodSet.length) === 0)) || !!(typ.named)) {
				rt.tflag = (rt.tflag | (1)) >>> 0;
				if (!!(typ.named)) {
					rt.tflag = (rt.tflag | (4)) >>> 0;
				}
				reflectMethods = sliceType$5.nil;
				i = 0;
				while (true) {
					if (!(i < $parseInt(methodSet.length))) { break; }
					m = methodSet[i];
					exported = internalStr(m.pkg) === "";
					if (!exported) {
						i = i + (1) >> 0;
						continue;
					}
					reflectMethods = $append(reflectMethods, new method.ptr(newNameOff($clone(newName(internalStr(m.name), "", exported), name)), newTypeOff(reflectType(m.typ)), 0, 0));
					i = i + (1) >> 0;
				}
				xcount = ((reflectMethods.$length << 16 >>> 16));
				i$1 = 0;
				while (true) {
					if (!(i$1 < $parseInt(methodSet.length))) { break; }
					m$1 = methodSet[i$1];
					exported$1 = internalStr(m$1.pkg) === "";
					if (exported$1) {
						i$1 = i$1 + (1) >> 0;
						continue;
					}
					reflectMethods = $append(reflectMethods, new method.ptr(newNameOff($clone(newName(internalStr(m$1.name), "", exported$1), name)), newTypeOff(reflectType(m$1.typ)), 0, 0));
					i$1 = i$1 + (1) >> 0;
				}
				ut = new uncommonType.ptr(newNameOff($clone(newName(internalStr(typ.pkg), "", false), name)), (($parseInt(methodSet.length) << 16 >>> 16)), xcount, 0, reflectMethods);
				_key = rt; (uncommonTypeMap || $throwRuntimeError("assignment to entry in nil map"))[ptrType$1.keyFor(_key)] = { k: _key, v: ut };
				ut.jsType = typ;
			}
			_1 = rt.Kind();
			if (_1 === (17)) {
				setKindType(rt, new arrayType.ptr(new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), reflectType(typ.elem), ptrType$1.nil, ((($parseInt(typ.len) >> 0) >>> 0))));
			} else if (_1 === (18)) {
				dir = 3;
				if (!!(typ.sendOnly)) {
					dir = 2;
				}
				if (!!(typ.recvOnly)) {
					dir = 1;
				}
				setKindType(rt, new chanType.ptr(new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), reflectType(typ.elem), ((dir >>> 0))));
			} else if (_1 === (19)) {
				params = typ.params;
				in$1 = $makeSlice(sliceType$2, $parseInt(params.length));
				_ref = in$1;
				_i = 0;
				while (true) {
					if (!(_i < _ref.$length)) { break; }
					i$2 = _i;
					((i$2 < 0 || i$2 >= in$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + i$2] = reflectType(params[i$2]));
					_i++;
				}
				results = typ.results;
				out = $makeSlice(sliceType$2, $parseInt(results.length));
				_ref$1 = out;
				_i$1 = 0;
				while (true) {
					if (!(_i$1 < _ref$1.$length)) { break; }
					i$3 = _i$1;
					((i$3 < 0 || i$3 >= out.$length) ? ($throwRuntimeError("index out of range"), undefined) : out.$array[out.$offset + i$3] = reflectType(results[i$3]));
					_i$1++;
				}
				outCount = (($parseInt(results.length) << 16 >>> 16));
				if (!!(typ.variadic)) {
					outCount = (outCount | (32768)) >>> 0;
				}
				setKindType(rt, new funcType.ptr($clone(rt, rtype), (($parseInt(params.length) << 16 >>> 16)), outCount, in$1, out));
			} else if (_1 === (20)) {
				methods = typ.methods;
				imethods = $makeSlice(sliceType$6, $parseInt(methods.length));
				_ref$2 = imethods;
				_i$2 = 0;
				while (true) {
					if (!(_i$2 < _ref$2.$length)) { break; }
					i$4 = _i$2;
					m$2 = methods[i$4];
					imethod.copy(((i$4 < 0 || i$4 >= imethods.$length) ? ($throwRuntimeError("index out of range"), undefined) : imethods.$array[imethods.$offset + i$4]), new imethod.ptr(newNameOff($clone(newName(internalStr(m$2.name), "", internalStr(m$2.pkg) === ""), name)), newTypeOff(reflectType(m$2.typ))));
					_i$2++;
				}
				setKindType(rt, new interfaceType.ptr($clone(rt, rtype), $clone(newName(internalStr(typ.pkg), "", false), name), imethods));
			} else if (_1 === (21)) {
				setKindType(rt, new mapType.ptr(new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), reflectType(typ.key), reflectType(typ.elem), ptrType$1.nil, 0, 0, 0, 0));
			} else if (_1 === (22)) {
				setKindType(rt, new ptrType.ptr(new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), reflectType(typ.elem)));
			} else if (_1 === (23)) {
				setKindType(rt, new sliceType.ptr(new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0), reflectType(typ.elem)));
			} else if (_1 === (25)) {
				fields = typ.fields;
				reflectFields = $makeSlice(sliceType$7, $parseInt(fields.length));
				_ref$3 = reflectFields;
				_i$3 = 0;
				while (true) {
					if (!(_i$3 < _ref$3.$length)) { break; }
					i$5 = _i$3;
					f = fields[i$5];
					offsetEmbed = ((i$5 >>> 0)) << 1 >>> 0;
					if (!!(f.embedded)) {
						offsetEmbed = (offsetEmbed | (1)) >>> 0;
					}
					structField.copy(((i$5 < 0 || i$5 >= reflectFields.$length) ? ($throwRuntimeError("index out of range"), undefined) : reflectFields.$array[reflectFields.$offset + i$5]), new structField.ptr($clone(newName(internalStr(f.name), internalStr(f.tag), !!(f.exported)), name), reflectType(f.typ), offsetEmbed));
					_i$3++;
				}
				setKindType(rt, new structType.ptr($clone(rt, rtype), $clone(newName(internalStr(typ.pkgPath), "", false), name), reflectFields));
			}
		}
		return ((typ.reflectType));
	};
	setKindType = function(rt, kindType) {
		var kindType, rt;
		rt.kindType = kindType;
		kindType.rtype = rt;
	};
	uncommonType.ptr.prototype.methods = function() {
		var t;
		t = this;
		return t._methods;
	};
	uncommonType.prototype.methods = function() { return this.$val.methods(); };
	uncommonType.ptr.prototype.exportedMethods = function() {
		var t;
		t = this;
		return $subslice(t._methods, 0, t.xcount, t.xcount);
	};
	uncommonType.prototype.exportedMethods = function() { return this.$val.exportedMethods(); };
	rtype.ptr.prototype.uncommon = function() {
		var _entry, t;
		t = this;
		return (_entry = uncommonTypeMap[ptrType$1.keyFor(t)], _entry !== undefined ? _entry.v : ptrType$5.nil);
	};
	rtype.prototype.uncommon = function() { return this.$val.uncommon(); };
	funcType.ptr.prototype.in$ = function() {
		var t;
		t = this;
		return t._in;
	};
	funcType.prototype.in$ = function() { return this.$val.in$(); };
	funcType.ptr.prototype.out = function() {
		var t;
		t = this;
		return t._out;
	};
	funcType.prototype.out = function() { return this.$val.out(); };
	name.ptr.prototype.name = function() {
		var _entry, n, s;
		s = "";
		n = this;
		s = (_entry = nameMap[ptrType$4.keyFor(n.bytes)], _entry !== undefined ? _entry.v : ptrType$6.nil).name;
		return s;
	};
	name.prototype.name = function() { return this.$val.name(); };
	name.ptr.prototype.tag = function() {
		var _entry, n, s;
		s = "";
		n = this;
		s = (_entry = nameMap[ptrType$4.keyFor(n.bytes)], _entry !== undefined ? _entry.v : ptrType$6.nil).tag;
		return s;
	};
	name.prototype.tag = function() { return this.$val.tag(); };
	name.ptr.prototype.pkgPath = function() {
		var n;
		n = this;
		return "";
	};
	name.prototype.pkgPath = function() { return this.$val.pkgPath(); };
	name.ptr.prototype.isExported = function() {
		var _entry, n;
		n = this;
		return (_entry = nameMap[ptrType$4.keyFor(n.bytes)], _entry !== undefined ? _entry.v : ptrType$6.nil).exported;
	};
	name.prototype.isExported = function() { return this.$val.isExported(); };
	newName = function(n, tag, exported) {
		var _key, b, exported, n, tag;
		b = $newDataPointer(0, ptrType$4);
		_key = b; (nameMap || $throwRuntimeError("assignment to entry in nil map"))[ptrType$4.keyFor(_key)] = { k: _key, v: new nameData.ptr(n, tag, exported) };
		return new name.ptr(b);
	};
	rtype.ptr.prototype.nameOff = function(off) {
		var off, t, x;
		t = this;
		return (x = ((off >> 0)), ((x < 0 || x >= nameOffList.$length) ? ($throwRuntimeError("index out of range"), undefined) : nameOffList.$array[nameOffList.$offset + x]));
	};
	rtype.prototype.nameOff = function(off) { return this.$val.nameOff(off); };
	newNameOff = function(n) {
		var i, n;
		i = nameOffList.$length;
		nameOffList = $append(nameOffList, n);
		return ((i >> 0));
	};
	rtype.ptr.prototype.typeOff = function(off) {
		var off, t, x;
		t = this;
		return (x = ((off >> 0)), ((x < 0 || x >= typeOffList.$length) ? ($throwRuntimeError("index out of range"), undefined) : typeOffList.$array[typeOffList.$offset + x]));
	};
	rtype.prototype.typeOff = function(off) { return this.$val.typeOff(off); };
	newTypeOff = function(t) {
		var i, t;
		i = typeOffList.$length;
		typeOffList = $append(typeOffList, t);
		return ((i >> 0));
	};
	internalStr = function(strObj) {
		var c, strObj;
		c = new structType$3.ptr("");
		c.str = strObj;
		return c.str;
	};
	isWrapped = function(typ) {
		var typ;
		return !!(jsType(typ).wrapped);
	};
	copyStruct = function(dst, src, typ) {
		var dst, fields, i, prop, src, typ;
		fields = jsType(typ).fields;
		i = 0;
		while (true) {
			if (!(i < $parseInt(fields.length))) { break; }
			prop = $internalize(fields[i].prop, $String);
			dst[$externalize(prop, $String)] = src[$externalize(prop, $String)];
			i = i + (1) >> 0;
		}
	};
	makeValue = function(t, v, fl) {
		var _r, _r$1, _r$2, _r$3, _r$4, _r$5, _v, _v$1, fl, rt, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _v = $f._v; _v$1 = $f._v$1; fl = $f.fl; rt = $f.rt; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = t.common(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		rt = _r;
		_r$1 = t.Kind(); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		if (_r$1 === 17) { _v$1 = true; $s = 5; continue s; }
		_r$2 = t.Kind(); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_v$1 = _r$2 === 25; case 5:
		if (_v$1) { _v = true; $s = 4; continue s; }
		_r$3 = t.Kind(); /* */ $s = 8; case 8: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_v = _r$3 === 22; case 4:
		/* */ if (_v) { $s = 2; continue; }
		/* */ $s = 3; continue;
		/* if (_v) { */ case 2:
			_r$4 = t.Kind(); /* */ $s = 9; case 9: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			$s = -1; return new Value.ptr(rt, (v), (fl | ((_r$4 >>> 0))) >>> 0);
		/* } */ case 3:
		_r$5 = t.Kind(); /* */ $s = 10; case 10: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		$s = -1; return new Value.ptr(rt, ($newDataPointer(v, jsType(rt.ptrTo()))), (((fl | ((_r$5 >>> 0))) >>> 0) | 128) >>> 0);
		/* */ } return; } if ($f === undefined) { $f = { $blk: makeValue }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._v = _v; $f._v$1 = _v$1; $f.fl = fl; $f.rt = rt; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	MakeSlice = function(typ, len, cap) {
		var _r, _r$1, cap, len, typ, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; cap = $f.cap; len = $f.len; typ = $f.typ; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		typ = [typ];
		_r = typ[0].Kind(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((_r === 23))) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!((_r === 23))) { */ case 1:
			$panic(new $String("reflect.MakeSlice of non-slice type"));
		/* } */ case 2:
		if (len < 0) {
			$panic(new $String("reflect.MakeSlice: negative len"));
		}
		if (cap < 0) {
			$panic(new $String("reflect.MakeSlice: negative cap"));
		}
		if (len > cap) {
			$panic(new $String("reflect.MakeSlice: len > cap"));
		}
		_r$1 = makeValue(typ[0], $makeSlice(jsType(typ[0]), len, cap, (function(typ) { return function $b() {
			var _r$1, _r$2, $s, $r;
			/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _r$2 = $f._r$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
			_r$1 = typ[0].Elem(); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$2 = jsType(_r$1); /* */ $s = 2; case 2: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			$s = -1; return _r$2.zero();
			/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f._r$1 = _r$1; $f._r$2 = _r$2; $f.$s = $s; $f.$r = $r; return $f;
		}; })(typ)), 0); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$s = -1; return _r$1;
		/* */ } return; } if ($f === undefined) { $f = { $blk: MakeSlice }; } $f._r = _r; $f._r$1 = _r$1; $f.cap = cap; $f.len = len; $f.typ = typ; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.MakeSlice = MakeSlice;
	TypeOf = function(i) {
		var i;
		if (!initialized) {
			return new rtype.ptr(0, 0, 0, 0, 0, 0, 0, ptrType$3.nil, ptrType$4.nil, 0, 0);
		}
		if ($interfaceIsEqual(i, $ifaceNil)) {
			return $ifaceNil;
		}
		return reflectType(i.constructor);
	};
	$pkg.TypeOf = TypeOf;
	ValueOf = function(i) {
		var _r, i, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; i = $f.i; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		if ($interfaceIsEqual(i, $ifaceNil)) {
			$s = -1; return new Value.ptr(ptrType$1.nil, 0, 0);
		}
		_r = makeValue(reflectType(i.constructor), i.$val, 0); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: ValueOf }; } $f._r = _r; $f.i = i; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ValueOf = ValueOf;
	FuncOf = function(in$1, out, variadic) {
		var _i, _i$1, _r, _ref, _ref$1, _v, _v$1, i, i$1, in$1, jsIn, jsOut, out, v, v$1, variadic, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _ref = $f._ref; _ref$1 = $f._ref$1; _v = $f._v; _v$1 = $f._v$1; i = $f.i; i$1 = $f.i$1; in$1 = $f.in$1; jsIn = $f.jsIn; jsOut = $f.jsOut; out = $f.out; v = $f.v; v$1 = $f.v$1; variadic = $f.variadic; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		if (!(variadic)) { _v = false; $s = 3; continue s; }
		if (in$1.$length === 0) { _v$1 = true; $s = 4; continue s; }
		_r = (x = in$1.$length - 1 >> 0, ((x < 0 || x >= in$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + x])).Kind(); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_v$1 = !((_r === 23)); case 4:
		_v = _v$1; case 3:
		/* */ if (_v) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (_v) { */ case 1:
			$panic(new $String("reflect.FuncOf: last arg of variadic func must be slice"));
		/* } */ case 2:
		jsIn = $makeSlice(sliceType$8, in$1.$length);
		_ref = in$1;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
			((i < 0 || i >= jsIn.$length) ? ($throwRuntimeError("index out of range"), undefined) : jsIn.$array[jsIn.$offset + i] = jsType(v));
			_i++;
		}
		jsOut = $makeSlice(sliceType$8, out.$length);
		_ref$1 = out;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			i$1 = _i$1;
			v$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
			((i$1 < 0 || i$1 >= jsOut.$length) ? ($throwRuntimeError("index out of range"), undefined) : jsOut.$array[jsOut.$offset + i$1] = jsType(v$1));
			_i$1++;
		}
		$s = -1; return reflectType($funcType($externalize(jsIn, sliceType$8), $externalize(jsOut, sliceType$8), $externalize(variadic, $Bool)));
		/* */ } return; } if ($f === undefined) { $f = { $blk: FuncOf }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._ref = _ref; $f._ref$1 = _ref$1; $f._v = _v; $f._v$1 = _v$1; $f.i = i; $f.i$1 = i$1; $f.in$1 = in$1; $f.jsIn = jsIn; $f.jsOut = jsOut; $f.out = out; $f.v = v; $f.v$1 = v$1; $f.variadic = variadic; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.FuncOf = FuncOf;
	rtype.ptr.prototype.ptrTo = function() {
		var t;
		t = this;
		return reflectType($ptrType(jsType(t)));
	};
	rtype.prototype.ptrTo = function() { return this.$val.ptrTo(); };
	SliceOf = function(t) {
		var t;
		return reflectType($sliceType(jsType(t)));
	};
	$pkg.SliceOf = SliceOf;
	Zero = function(typ) {
		var _r, typ, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; typ = $f.typ; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = makeValue(typ, jsType(typ).zero(), 0); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Zero }; } $f._r = _r; $f.typ = typ; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Zero = Zero;
	unsafe_New = function(typ) {
		var _1, typ;
		_1 = typ.Kind();
		if (_1 === (25)) {
			return (new (jsType(typ).ptr)());
		} else if (_1 === (17)) {
			return (jsType(typ).zero());
		} else {
			return ($newDataPointer(jsType(typ).zero(), jsType(typ.ptrTo())));
		}
	};
	makeInt = function(f, bits, t) {
		var _1, _r, bits, f, ptr, t, typ, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; bits = $f.bits; f = $f.f; ptr = $f.ptr; t = $f.t; typ = $f.typ; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = t.common(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		typ = _r;
		ptr = unsafe_New(typ);
		_1 = typ.Kind();
		if (_1 === (3)) {
			(ptr).$set(((bits.$low << 24 >> 24)));
		} else if (_1 === (4)) {
			(ptr).$set(((bits.$low << 16 >> 16)));
		} else if ((_1 === (2)) || (_1 === (5))) {
			(ptr).$set(((bits.$low >> 0)));
		} else if (_1 === (6)) {
			(ptr).$set((new $Int64(bits.$high, bits.$low)));
		} else if (_1 === (8)) {
			(ptr).$set(((bits.$low << 24 >>> 24)));
		} else if (_1 === (9)) {
			(ptr).$set(((bits.$low << 16 >>> 16)));
		} else if ((_1 === (7)) || (_1 === (10)) || (_1 === (12))) {
			(ptr).$set(((bits.$low >>> 0)));
		} else if (_1 === (11)) {
			(ptr).$set((bits));
		}
		$s = -1; return new Value.ptr(typ, ptr, (((f | 128) >>> 0) | ((typ.Kind() >>> 0))) >>> 0);
		/* */ } return; } if ($f === undefined) { $f = { $blk: makeInt }; } $f._1 = _1; $f._r = _r; $f.bits = bits; $f.f = f; $f.ptr = ptr; $f.t = t; $f.typ = typ; $f.$s = $s; $f.$r = $r; return $f;
	};
	typedmemmove = function(t, dst, src) {
		var dst, src, t;
		dst.$set(src.$get());
	};
	makemap = function(t, cap) {
		var cap, m, t;
		m = 0;
		m = (new ($global.Object)());
		return m;
	};
	keyFor = function(t, key) {
		var k, key, kv, t;
		kv = key;
		if (!(kv.$get === undefined)) {
			kv = kv.$get();
		}
		k = $internalize(jsType(t.Key()).keyFor(kv), $String);
		return [kv, k];
	};
	mapaccess = function(t, m, key) {
		var _tuple, entry, k, key, m, t;
		_tuple = keyFor(t, key);
		k = _tuple[1];
		entry = m[$externalize(k, $String)];
		if (entry === undefined) {
			return 0;
		}
		return ($newDataPointer(entry.v, jsType(PtrTo(t.Elem()))));
	};
	mapassign = function(t, m, key, val) {
		var _r, _tuple, entry, et, jsVal, k, key, kv, m, newVal, t, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; entry = $f.entry; et = $f.et; jsVal = $f.jsVal; k = $f.k; key = $f.key; kv = $f.kv; m = $f.m; newVal = $f.newVal; t = $f.t; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_tuple = keyFor(t, key);
		kv = _tuple[0];
		k = _tuple[1];
		jsVal = val.$get();
		et = t.Elem();
		_r = et.Kind(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (_r === 25) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (_r === 25) { */ case 1:
			newVal = jsType(et).zero();
			copyStruct(newVal, jsVal, et);
			jsVal = newVal;
		/* } */ case 2:
		entry = new ($global.Object)();
		entry.k = kv;
		entry.v = jsVal;
		m[$externalize(k, $String)] = entry;
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: mapassign }; } $f._r = _r; $f._tuple = _tuple; $f.entry = entry; $f.et = et; $f.jsVal = jsVal; $f.k = k; $f.key = key; $f.kv = kv; $f.m = m; $f.newVal = newVal; $f.t = t; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	mapdelete = function(t, m, key) {
		var _tuple, k, key, m, t;
		_tuple = keyFor(t, key);
		k = _tuple[1];
		delete m[$externalize(k, $String)];
	};
	mapIter.ptr.prototype.skipUntilValidKey = function() {
		var iter, k;
		iter = this;
		while (true) {
			if (!(iter.i < $parseInt(iter.keys.length))) { break; }
			k = iter.keys[iter.i];
			if (!(iter.m[$externalize($internalize(k, $String), $String)] === undefined)) {
				break;
			}
			iter.i = iter.i + (1) >> 0;
		}
	};
	mapIter.prototype.skipUntilValidKey = function() { return this.$val.skipUntilValidKey(); };
	mapiterinit = function(t, m) {
		var m, t;
		return (new mapIter.ptr(t, m, $keys(m), 0, null));
	};
	mapiterkey = function(it) {
		var _r, _r$1, _r$2, it, iter, k, kv, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; it = $f.it; iter = $f.iter; k = $f.k; kv = $f.kv; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		iter = ($pointerOfStructConversion(it, ptrType$7));
		kv = null;
		if (!(iter.last === null)) {
			kv = iter.last;
		} else {
			iter.skipUntilValidKey();
			if (iter.i === $parseInt(iter.keys.length)) {
				$s = -1; return 0;
			}
			k = iter.keys[iter.i];
			kv = iter.m[$externalize($internalize(k, $String), $String)];
			iter.last = kv;
		}
		_r = iter.t.Key(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = PtrTo(_r); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = jsType(_r$1); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$s = -1; return ($newDataPointer(kv.k, _r$2));
		/* */ } return; } if ($f === undefined) { $f = { $blk: mapiterkey }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.it = it; $f.iter = iter; $f.k = k; $f.kv = kv; $f.$s = $s; $f.$r = $r; return $f;
	};
	mapitervalue = function(it) {
		var _r, _r$1, _r$2, it, iter, k, kv, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; it = $f.it; iter = $f.iter; k = $f.k; kv = $f.kv; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		iter = ($pointerOfStructConversion(it, ptrType$7));
		kv = null;
		if (!(iter.last === null)) {
			kv = iter.last;
		} else {
			iter.skipUntilValidKey();
			if (iter.i === $parseInt(iter.keys.length)) {
				$s = -1; return 0;
			}
			k = iter.keys[iter.i];
			kv = iter.m[$externalize($internalize(k, $String), $String)];
			iter.last = kv;
		}
		_r = iter.t.Elem(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = PtrTo(_r); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = jsType(_r$1); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$s = -1; return ($newDataPointer(kv.v, _r$2));
		/* */ } return; } if ($f === undefined) { $f = { $blk: mapitervalue }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.it = it; $f.iter = iter; $f.k = k; $f.kv = kv; $f.$s = $s; $f.$r = $r; return $f;
	};
	mapiternext = function(it) {
		var it, iter;
		iter = ($pointerOfStructConversion(it, ptrType$7));
		iter.last = null;
		iter.i = iter.i + (1) >> 0;
	};
	maplen = function(m) {
		var m;
		return $parseInt($keys(m).length);
	};
	cvtDirect = function(v, typ) {
		var _1, _arg, _arg$1, _arg$2, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, k, slice, srcVal, typ, v, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; k = $f.k; slice = $f.slice; srcVal = $f.srcVal; typ = $f.typ; v = $f.v; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		srcVal = $clone(v, Value).object();
		/* */ if (srcVal === jsType(v.typ).nil) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (srcVal === jsType(v.typ).nil) { */ case 1:
			_r = makeValue(typ, jsType(typ).nil, v.flag); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$s = -1; return _r;
		/* } */ case 2:
		val = null;
			_r$1 = typ.Kind(); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			k = _r$1;
			_1 = k;
			/* */ if (_1 === (23)) { $s = 6; continue; }
			/* */ if (_1 === (22)) { $s = 7; continue; }
			/* */ if (_1 === (25)) { $s = 8; continue; }
			/* */ if ((_1 === (17)) || (_1 === (1)) || (_1 === (18)) || (_1 === (19)) || (_1 === (20)) || (_1 === (21)) || (_1 === (24))) { $s = 9; continue; }
			/* */ $s = 10; continue;
			/* if (_1 === (23)) { */ case 6:
				slice = new (jsType(typ))(srcVal.$array);
				slice.$offset = srcVal.$offset;
				slice.$length = srcVal.$length;
				slice.$capacity = srcVal.$capacity;
				val = $newDataPointer(slice, jsType(PtrTo(typ)));
				$s = 11; continue;
			/* } else if (_1 === (22)) { */ case 7:
				_r$2 = typ.Elem(); /* */ $s = 14; case 14: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_r$3 = _r$2.Kind(); /* */ $s = 15; case 15: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				/* */ if (_r$3 === 25) { $s = 12; continue; }
				/* */ $s = 13; continue;
				/* if (_r$3 === 25) { */ case 12:
					_r$4 = typ.Elem(); /* */ $s = 18; case 18: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
					/* */ if ($interfaceIsEqual(_r$4, v.typ.Elem())) { $s = 16; continue; }
					/* */ $s = 17; continue;
					/* if ($interfaceIsEqual(_r$4, v.typ.Elem())) { */ case 16:
						val = srcVal;
						/* break; */ $s = 4; continue;
					/* } */ case 17:
					val = new (jsType(typ))();
					_arg = val;
					_arg$1 = srcVal;
					_r$5 = typ.Elem(); /* */ $s = 19; case 19: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
					_arg$2 = _r$5;
					$r = copyStruct(_arg, _arg$1, _arg$2); /* */ $s = 20; case 20: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
					/* break; */ $s = 4; continue;
				/* } */ case 13:
				val = new (jsType(typ))(srcVal.$get, srcVal.$set);
				$s = 11; continue;
			/* } else if (_1 === (25)) { */ case 8:
				val = new (jsType(typ).ptr)();
				copyStruct(val, srcVal, typ);
				$s = 11; continue;
			/* } else if ((_1 === (17)) || (_1 === (1)) || (_1 === (18)) || (_1 === (19)) || (_1 === (20)) || (_1 === (21)) || (_1 === (24))) { */ case 9:
				val = v.ptr;
				$s = 11; continue;
			/* } else { */ case 10:
				$panic(new ValueError.ptr("reflect.Convert", k));
			/* } */ case 11:
		case 4:
		_r$6 = typ.common(); /* */ $s = 21; case 21: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		_r$7 = typ.Kind(); /* */ $s = 22; case 22: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
		$s = -1; return new Value.ptr(_r$6, (val), (((new flag(v.flag).ro() | ((v.flag & 128) >>> 0)) >>> 0) | ((_r$7 >>> 0))) >>> 0);
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtDirect }; } $f._1 = _1; $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f.k = k; $f.slice = slice; $f.srcVal = srcVal; $f.typ = typ; $f.v = v; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	Copy = function(dst, src) {
		var _r, _v, dk, dst, dstVal, sk, src, srcVal, stringCopy, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _v = $f._v; dk = $f.dk; dst = $f.dst; dstVal = $f.dstVal; sk = $f.sk; src = $f.src; srcVal = $f.srcVal; stringCopy = $f.stringCopy; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		dk = new flag(dst.flag).kind();
		if (!((dk === 17)) && !((dk === 23))) {
			$panic(new ValueError.ptr("reflect.Copy", dk));
		}
		if (dk === 17) {
			new flag(dst.flag).mustBeAssignable();
		}
		new flag(dst.flag).mustBeExported();
		sk = new flag(src.flag).kind();
		stringCopy = false;
		/* */ if (!((sk === 17)) && !((sk === 23))) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!((sk === 17)) && !((sk === 23))) { */ case 1:
			if (!(sk === 24)) { _v = false; $s = 3; continue s; }
			_r = dst.typ.Elem().Kind(); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_v = _r === 8; case 3:
			stringCopy = _v;
			if (!stringCopy) {
				$panic(new ValueError.ptr("reflect.Copy", sk));
			}
		/* } */ case 2:
		new flag(src.flag).mustBeExported();
		/* */ if (!stringCopy) { $s = 5; continue; }
		/* */ $s = 6; continue;
		/* if (!stringCopy) { */ case 5:
			$r = typesMustMatch("reflect.Copy", dst.typ.Elem(), src.typ.Elem()); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* } */ case 6:
		dstVal = $clone(dst, Value).object();
		if (dk === 17) {
			dstVal = new (jsType(SliceOf(dst.typ.Elem())))(dstVal);
		}
		srcVal = $clone(src, Value).object();
		if (sk === 17) {
			srcVal = new (jsType(SliceOf(src.typ.Elem())))(srcVal);
		}
		if (stringCopy) {
			$s = -1; return $parseInt($copyString(dstVal, srcVal)) >> 0;
		}
		$s = -1; return $parseInt($copySlice(dstVal, srcVal)) >> 0;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Copy }; } $f._r = _r; $f._v = _v; $f.dk = dk; $f.dst = dst; $f.dstVal = dstVal; $f.sk = sk; $f.src = src; $f.srcVal = srcVal; $f.stringCopy = stringCopy; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Copy = Copy;
	valueInterface = function(v, safe) {
		var _r, safe, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; safe = $f.safe; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		if (v.flag === 0) {
			$panic(new ValueError.ptr("reflect.Value.Interface", 0));
		}
		if (safe && !((((v.flag & 96) >>> 0) === 0))) {
			$panic(new $String("reflect.Value.Interface: cannot return value obtained from unexported field or method"));
		}
		/* */ if (!((((v.flag & 512) >>> 0) === 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!((((v.flag & 512) >>> 0) === 0))) { */ case 1:
			_r = makeMethodValue("Interface", $clone(v, Value)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			v = _r;
		/* } */ case 2:
		if (isWrapped(v.typ)) {
			$s = -1; return ((new (jsType(v.typ))($clone(v, Value).object())));
		}
		$s = -1; return (($clone(v, Value).object()));
		/* */ } return; } if ($f === undefined) { $f = { $blk: valueInterface }; } $f._r = _r; $f.safe = safe; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	ifaceE2I = function(t, src, dst) {
		var dst, src, t;
		dst.$set(src);
	};
	methodName = function() {
		return "?FIXME?";
	};
	makeMethodValue = function(op, v) {
		var _r, _tuple, fn, fv, op, rcvr, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; fn = $f.fn; fv = $f.fv; op = $f.op; rcvr = $f.rcvr; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		fn = [fn];
		rcvr = [rcvr];
		if (((v.flag & 512) >>> 0) === 0) {
			$panic(new $String("reflect: internal error: invalid use of makePartialFunc"));
		}
		_tuple = methodReceiver(op, $clone(v, Value), ((v.flag >> 0)) >> 10 >> 0);
		fn[0] = _tuple[2];
		rcvr[0] = $clone(v, Value).object();
		if (isWrapped(v.typ)) {
			rcvr[0] = new (jsType(v.typ))(rcvr[0]);
		}
		fv = js.MakeFunc((function(fn, rcvr) { return function(this$1, arguments$1) {
			var arguments$1, this$1;
			return new $jsObjectPtr(fn[0].apply(rcvr[0], $externalize(arguments$1, sliceType$8)));
		}; })(fn, rcvr));
		_r = $clone(v, Value).Type().common(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return new Value.ptr(_r, (fv), (new flag(v.flag).ro() | 19) >>> 0);
		/* */ } return; } if ($f === undefined) { $f = { $blk: makeMethodValue }; } $f._r = _r; $f._tuple = _tuple; $f.fn = fn; $f.fv = fv; $f.op = op; $f.rcvr = rcvr; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	rtype.ptr.prototype.pointers = function() {
		var _1, t;
		t = this;
		_1 = t.Kind();
		if ((_1 === (22)) || (_1 === (21)) || (_1 === (18)) || (_1 === (19)) || (_1 === (25)) || (_1 === (17))) {
			return true;
		} else {
			return false;
		}
	};
	rtype.prototype.pointers = function() { return this.$val.pointers(); };
	rtype.ptr.prototype.Comparable = function() {
		var _1, _r, _r$1, i, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; i = $f.i; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
			_1 = t.Kind();
			/* */ if ((_1 === (19)) || (_1 === (23)) || (_1 === (21))) { $s = 2; continue; }
			/* */ if (_1 === (17)) { $s = 3; continue; }
			/* */ if (_1 === (25)) { $s = 4; continue; }
			/* */ $s = 5; continue;
			/* if ((_1 === (19)) || (_1 === (23)) || (_1 === (21))) { */ case 2:
				$s = -1; return false;
			/* } else if (_1 === (17)) { */ case 3:
				_r = t.Elem().Comparable(); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$s = -1; return _r;
			/* } else if (_1 === (25)) { */ case 4:
				i = 0;
				/* while (true) { */ case 7:
					/* if (!(i < t.NumField())) { break; } */ if(!(i < t.NumField())) { $s = 8; continue; }
					_r$1 = t.Field(i).Type.Comparable(); /* */ $s = 11; case 11: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					/* */ if (!_r$1) { $s = 9; continue; }
					/* */ $s = 10; continue;
					/* if (!_r$1) { */ case 9:
						$s = -1; return false;
					/* } */ case 10:
					i = i + (1) >> 0;
				/* } */ $s = 7; continue; case 8:
			/* } */ case 5:
		case 1:
		$s = -1; return true;
		/* */ } return; } if ($f === undefined) { $f = { $blk: rtype.ptr.prototype.Comparable }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f.i = i; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	rtype.prototype.Comparable = function() { return this.$val.Comparable(); };
	rtype.ptr.prototype.Method = function(i) {
		var _i, _i$1, _r, _ref, _ref$1, arg, fl, fn, ft, i, in$1, m, methods, mt, mtyp, out, p, pname, prop, ret, t, tt, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _ref = $f._ref; _ref$1 = $f._ref$1; arg = $f.arg; fl = $f.fl; fn = $f.fn; ft = $f.ft; i = $f.i; in$1 = $f.in$1; m = $f.m; methods = $f.methods; mt = $f.mt; mtyp = $f.mtyp; out = $f.out; p = $f.p; pname = $f.pname; prop = $f.prop; ret = $f.ret; t = $f.t; tt = $f.tt; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		prop = [prop];
		m = new Method.ptr("", "", $ifaceNil, new Value.ptr(ptrType$1.nil, 0, 0), 0);
		t = this;
		if (t.Kind() === 20) {
			tt = (t.kindType);
			Method.copy(m, tt.Method(i));
			$s = -1; return m;
		}
		methods = t.exportedMethods();
		if (i < 0 || i >= methods.$length) {
			$panic(new $String("reflect: Method index out of range"));
		}
		p = $clone(((i < 0 || i >= methods.$length) ? ($throwRuntimeError("index out of range"), undefined) : methods.$array[methods.$offset + i]), method);
		pname = $clone(t.nameOff(p.name), name);
		m.Name = $clone(pname, name).name();
		fl = 19;
		mtyp = t.typeOff(p.mtyp);
		ft = (mtyp.kindType);
		in$1 = $makeSlice(sliceType$10, 0, (1 + ft.in$().$length >> 0));
		in$1 = $append(in$1, t);
		_ref = ft.in$();
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			arg = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
			in$1 = $append(in$1, arg);
			_i++;
		}
		out = $makeSlice(sliceType$10, 0, ft.out().$length);
		_ref$1 = ft.out();
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			ret = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
			out = $append(out, ret);
			_i$1++;
		}
		_r = FuncOf(in$1, out, ft.rtype.IsVariadic()); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		mt = _r;
		m.Type = mt;
		prop[0] = $internalize($methodSet(t.jsType)[i].prop, $String);
		fn = js.MakeFunc((function(prop) { return function(this$1, arguments$1) {
			var arguments$1, rcvr, this$1;
			rcvr = (0 >= arguments$1.$length ? ($throwRuntimeError("index out of range"), undefined) : arguments$1.$array[arguments$1.$offset + 0]);
			return new $jsObjectPtr(rcvr[$externalize(prop[0], $String)].apply(rcvr, $externalize($subslice(arguments$1, 1), sliceType$8)));
		}; })(prop));
		m.Func = new Value.ptr($assertType(mt, ptrType$1), (fn), fl);
		m.Index = i;
		Method.copy(m, m);
		$s = -1; return m;
		/* */ } return; } if ($f === undefined) { $f = { $blk: rtype.ptr.prototype.Method }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._ref = _ref; $f._ref$1 = _ref$1; $f.arg = arg; $f.fl = fl; $f.fn = fn; $f.ft = ft; $f.i = i; $f.in$1 = in$1; $f.m = m; $f.methods = methods; $f.mt = mt; $f.mtyp = mtyp; $f.out = out; $f.p = p; $f.pname = pname; $f.prop = prop; $f.ret = ret; $f.t = t; $f.tt = tt; $f.$s = $s; $f.$r = $r; return $f;
	};
	rtype.prototype.Method = function(i) { return this.$val.Method(i); };
	Value.ptr.prototype.object = function() {
		var _1, newVal, v, val;
		v = this;
		if ((v.typ.Kind() === 17) || (v.typ.Kind() === 25)) {
			return v.ptr;
		}
		if (!((((v.flag & 128) >>> 0) === 0))) {
			val = v.ptr.$get();
			if (!(val === $ifaceNil) && !(val.constructor === jsType(v.typ))) {
				switch (0) { default:
					_1 = v.typ.Kind();
					if ((_1 === (11)) || (_1 === (6))) {
						val = new (jsType(v.typ))(val.$high, val.$low);
					} else if ((_1 === (15)) || (_1 === (16))) {
						val = new (jsType(v.typ))(val.$real, val.$imag);
					} else if (_1 === (23)) {
						if (val === val.constructor.nil) {
							val = jsType(v.typ).nil;
							break;
						}
						newVal = new (jsType(v.typ))(val.$array);
						newVal.$offset = val.$offset;
						newVal.$length = val.$length;
						newVal.$capacity = val.$capacity;
						val = newVal;
					}
				}
			}
			return val;
		}
		return v.ptr;
	};
	Value.prototype.object = function() { return this.$val.object(); };
	Value.ptr.prototype.assignTo = function(context, dst, target) {
		var _r, _r$1, _r$2, context, dst, fl, target, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; context = $f.context; dst = $f.dst; fl = $f.fl; target = $f.target; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		/* */ if (!((((v.flag & 512) >>> 0) === 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!((((v.flag & 512) >>> 0) === 0))) { */ case 1:
			_r = makeMethodValue(context, $clone(v, Value)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			v = _r;
		/* } */ case 2:
			_r$1 = directlyAssignable(dst, v.typ); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			/* */ if (_r$1) { $s = 5; continue; }
			/* */ if (implements$1(dst, v.typ)) { $s = 6; continue; }
			/* */ $s = 7; continue;
			/* if (_r$1) { */ case 5:
				fl = (((v.flag & 384) >>> 0) | new flag(v.flag).ro()) >>> 0;
				fl = (fl | (((dst.Kind() >>> 0)))) >>> 0;
				$s = -1; return new Value.ptr(dst, v.ptr, fl);
			/* } else if (implements$1(dst, v.typ)) { */ case 6:
				if (target === 0) {
					target = unsafe_New(dst);
				}
				_r$2 = valueInterface($clone(v, Value), false); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				x = _r$2;
				if (dst.NumMethod() === 0) {
					(target).$set(x);
				} else {
					ifaceE2I(dst, x, target);
				}
				$s = -1; return new Value.ptr(dst, target, 148);
			/* } */ case 7:
		case 4:
		$panic(new $String(context + ": value of type " + v.typ.String() + " is not assignable to type " + dst.String()));
		$s = -1; return new Value.ptr(ptrType$1.nil, 0, 0);
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.assignTo }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.context = context; $f.dst = dst; $f.fl = fl; $f.target = target; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.assignTo = function(context, dst, target) { return this.$val.assignTo(context, dst, target); };
	Value.ptr.prototype.Cap = function() {
		var _1, k, v;
		v = this;
		k = new flag(v.flag).kind();
		_1 = k;
		if (_1 === (17)) {
			return v.typ.Len();
		} else if ((_1 === (18)) || (_1 === (23))) {
			return $parseInt($clone(v, Value).object().$capacity) >> 0;
		}
		$panic(new ValueError.ptr("reflect.Value.Cap", k));
	};
	Value.prototype.Cap = function() { return this.$val.Cap(); };
	wrapJsObject = function(typ, val) {
		var typ, val;
		if ($interfaceIsEqual(typ, jsObjectPtr)) {
			return new (jsType(jsObjectPtr))(val);
		}
		return val;
	};
	unwrapJsObject = function(typ, val) {
		var typ, val;
		if ($interfaceIsEqual(typ, jsObjectPtr)) {
			return val.object;
		}
		return val;
	};
	Value.ptr.prototype.Elem = function() {
		var _1, _r, fl, k, tt, typ, v, val, val$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; fl = $f.fl; k = $f.k; tt = $f.tt; typ = $f.typ; v = $f.v; val = $f.val; val$1 = $f.val$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
			k = new flag(v.flag).kind();
			_1 = k;
			/* */ if (_1 === (20)) { $s = 2; continue; }
			/* */ if (_1 === (22)) { $s = 3; continue; }
			/* */ $s = 4; continue;
			/* if (_1 === (20)) { */ case 2:
				val = $clone(v, Value).object();
				if (val === $ifaceNil) {
					$s = -1; return new Value.ptr(ptrType$1.nil, 0, 0);
				}
				typ = reflectType(val.constructor);
				_r = makeValue(typ, val.$val, new flag(v.flag).ro()); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$s = -1; return _r;
			/* } else if (_1 === (22)) { */ case 3:
				if ($clone(v, Value).IsNil()) {
					$s = -1; return new Value.ptr(ptrType$1.nil, 0, 0);
				}
				val$1 = $clone(v, Value).object();
				tt = (v.typ.kindType);
				fl = (((((v.flag & 96) >>> 0) | 128) >>> 0) | 256) >>> 0;
				fl = (fl | (((tt.elem.Kind() >>> 0)))) >>> 0;
				$s = -1; return new Value.ptr(tt.elem, (wrapJsObject(tt.elem, val$1)), fl);
			/* } else { */ case 4:
				$panic(new ValueError.ptr("reflect.Value.Elem", k));
			/* } */ case 5:
		case 1:
		$s = -1; return new Value.ptr(ptrType$1.nil, 0, 0);
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Elem }; } $f._1 = _1; $f._r = _r; $f.fl = fl; $f.k = k; $f.tt = tt; $f.typ = typ; $f.v = v; $f.val = val; $f.val$1 = val$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Elem = function() { return this.$val.Elem(); };
	Value.ptr.prototype.Field = function(i) {
		var _r, _r$1, _r$2, field, fl, i, jsTag, o, prop, s, tag, tt, typ, v, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; field = $f.field; fl = $f.fl; i = $f.i; jsTag = $f.jsTag; o = $f.o; prop = $f.prop; s = $f.s; tag = $f.tag; tt = $f.tt; typ = $f.typ; v = $f.v; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		jsTag = [jsTag];
		prop = [prop];
		s = [s];
		typ = [typ];
		v = this;
		if (!((new flag(v.flag).kind() === 25))) {
			$panic(new ValueError.ptr("reflect.Value.Field", new flag(v.flag).kind()));
		}
		tt = (v.typ.kindType);
		if (((i >>> 0)) >= ((tt.fields.$length >>> 0))) {
			$panic(new $String("reflect: Field index out of range"));
		}
		prop[0] = $internalize(jsType(v.typ).fields[i].prop, $String);
		field = (x = tt.fields, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
		typ[0] = field.typ;
		fl = (((v.flag & 416) >>> 0) | ((typ[0].Kind() >>> 0))) >>> 0;
		if (!$clone(field.name, name).isExported()) {
			if (field.embedded()) {
				fl = (fl | (64)) >>> 0;
			} else {
				fl = (fl | (32)) >>> 0;
			}
		}
		tag = $clone((x$1 = tt.fields, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i])).name, name).tag();
		/* */ if (!(tag === "") && !((i === 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!(tag === "") && !((i === 0))) { */ case 1:
			jsTag[0] = getJsTag(tag);
			/* */ if (!(jsTag[0] === "")) { $s = 3; continue; }
			/* */ $s = 4; continue;
			/* if (!(jsTag[0] === "")) { */ case 3:
				/* while (true) { */ case 5:
					o = [o];
					_r = $clone(v, Value).Field(0); /* */ $s = 7; case 7: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
					v = _r;
					/* */ if (v.typ === jsObjectPtr) { $s = 8; continue; }
					/* */ $s = 9; continue;
					/* if (v.typ === jsObjectPtr) { */ case 8:
						o[0] = $clone(v, Value).object().object;
						$s = -1; return new Value.ptr(typ[0], (new (jsType(PtrTo(typ[0])))((function(jsTag, o, prop, s, typ) { return function() {
							return $internalize(o[0][$externalize(jsTag[0], $String)], jsType(typ[0]));
						}; })(jsTag, o, prop, s, typ), (function(jsTag, o, prop, s, typ) { return function(x$2) {
							var x$2;
							o[0][$externalize(jsTag[0], $String)] = $externalize(x$2, jsType(typ[0]));
						}; })(jsTag, o, prop, s, typ))), fl);
					/* } */ case 9:
					/* */ if (v.typ.Kind() === 22) { $s = 10; continue; }
					/* */ $s = 11; continue;
					/* if (v.typ.Kind() === 22) { */ case 10:
						_r$1 = $clone(v, Value).Elem(); /* */ $s = 12; case 12: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
						v = _r$1;
					/* } */ case 11:
				/* } */ $s = 5; continue; case 6:
			/* } */ case 4:
		/* } */ case 2:
		s[0] = v.ptr;
		/* */ if (!((((fl & 128) >>> 0) === 0)) && !((typ[0].Kind() === 17)) && !((typ[0].Kind() === 25))) { $s = 13; continue; }
		/* */ $s = 14; continue;
		/* if (!((((fl & 128) >>> 0) === 0)) && !((typ[0].Kind() === 17)) && !((typ[0].Kind() === 25))) { */ case 13:
			$s = -1; return new Value.ptr(typ[0], (new (jsType(PtrTo(typ[0])))((function(jsTag, prop, s, typ) { return function() {
				return wrapJsObject(typ[0], s[0][$externalize(prop[0], $String)]);
			}; })(jsTag, prop, s, typ), (function(jsTag, prop, s, typ) { return function(x$2) {
				var x$2;
				s[0][$externalize(prop[0], $String)] = unwrapJsObject(typ[0], x$2);
			}; })(jsTag, prop, s, typ))), fl);
		/* } */ case 14:
		_r$2 = makeValue(typ[0], wrapJsObject(typ[0], s[0][$externalize(prop[0], $String)]), fl); /* */ $s = 15; case 15: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$s = -1; return _r$2;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Field }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.field = field; $f.fl = fl; $f.i = i; $f.jsTag = jsTag; $f.o = o; $f.prop = prop; $f.s = s; $f.tag = tag; $f.tt = tt; $f.typ = typ; $f.v = v; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Field = function(i) { return this.$val.Field(i); };
	getJsTag = function(tag) {
		var _tuple, i, name$1, qvalue, tag, value;
		while (true) {
			if (!(!(tag === ""))) { break; }
			i = 0;
			while (true) {
				if (!(i < tag.length && (tag.charCodeAt(i) === 32))) { break; }
				i = i + (1) >> 0;
			}
			tag = $substring(tag, i);
			if (tag === "") {
				break;
			}
			i = 0;
			while (true) {
				if (!(i < tag.length && !((tag.charCodeAt(i) === 32)) && !((tag.charCodeAt(i) === 58)) && !((tag.charCodeAt(i) === 34)))) { break; }
				i = i + (1) >> 0;
			}
			if ((i + 1 >> 0) >= tag.length || !((tag.charCodeAt(i) === 58)) || !((tag.charCodeAt((i + 1 >> 0)) === 34))) {
				break;
			}
			name$1 = ($substring(tag, 0, i));
			tag = $substring(tag, (i + 1 >> 0));
			i = 1;
			while (true) {
				if (!(i < tag.length && !((tag.charCodeAt(i) === 34)))) { break; }
				if (tag.charCodeAt(i) === 92) {
					i = i + (1) >> 0;
				}
				i = i + (1) >> 0;
			}
			if (i >= tag.length) {
				break;
			}
			qvalue = ($substring(tag, 0, (i + 1 >> 0)));
			tag = $substring(tag, (i + 1 >> 0));
			if (name$1 === "js") {
				_tuple = strconv.Unquote(qvalue);
				value = _tuple[0];
				return value;
			}
		}
		return "";
	};
	Value.ptr.prototype.Index = function(i) {
		var _1, _r, _r$1, a, a$1, c, fl, fl$1, fl$2, i, k, s, str, tt, tt$1, typ, typ$1, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; a = $f.a; a$1 = $f.a$1; c = $f.c; fl = $f.fl; fl$1 = $f.fl$1; fl$2 = $f.fl$2; i = $f.i; k = $f.k; s = $f.s; str = $f.str; tt = $f.tt; tt$1 = $f.tt$1; typ = $f.typ; typ$1 = $f.typ$1; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		a = [a];
		a$1 = [a$1];
		c = [c];
		i = [i];
		typ = [typ];
		typ$1 = [typ$1];
		v = this;
			k = new flag(v.flag).kind();
			_1 = k;
			/* */ if (_1 === (17)) { $s = 2; continue; }
			/* */ if (_1 === (23)) { $s = 3; continue; }
			/* */ if (_1 === (24)) { $s = 4; continue; }
			/* */ $s = 5; continue;
			/* if (_1 === (17)) { */ case 2:
				tt = (v.typ.kindType);
				if (i[0] < 0 || i[0] > ((tt.len >> 0))) {
					$panic(new $String("reflect: array index out of range"));
				}
				typ[0] = tt.elem;
				fl = (((((v.flag & 384) >>> 0) | new flag(v.flag).ro()) >>> 0) | ((typ[0].Kind() >>> 0))) >>> 0;
				a[0] = v.ptr;
				/* */ if (!((((fl & 128) >>> 0) === 0)) && !((typ[0].Kind() === 17)) && !((typ[0].Kind() === 25))) { $s = 7; continue; }
				/* */ $s = 8; continue;
				/* if (!((((fl & 128) >>> 0) === 0)) && !((typ[0].Kind() === 17)) && !((typ[0].Kind() === 25))) { */ case 7:
					$s = -1; return new Value.ptr(typ[0], (new (jsType(PtrTo(typ[0])))((function(a, a$1, c, i, typ, typ$1) { return function() {
						return wrapJsObject(typ[0], a[0][i[0]]);
					}; })(a, a$1, c, i, typ, typ$1), (function(a, a$1, c, i, typ, typ$1) { return function(x) {
						var x;
						a[0][i[0]] = unwrapJsObject(typ[0], x);
					}; })(a, a$1, c, i, typ, typ$1))), fl);
				/* } */ case 8:
				_r = makeValue(typ[0], wrapJsObject(typ[0], a[0][i[0]]), fl); /* */ $s = 9; case 9: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$s = -1; return _r;
			/* } else if (_1 === (23)) { */ case 3:
				s = $clone(v, Value).object();
				if (i[0] < 0 || i[0] >= ($parseInt(s.$length) >> 0)) {
					$panic(new $String("reflect: slice index out of range"));
				}
				tt$1 = (v.typ.kindType);
				typ$1[0] = tt$1.elem;
				fl$1 = (((384 | new flag(v.flag).ro()) >>> 0) | ((typ$1[0].Kind() >>> 0))) >>> 0;
				i[0] = i[0] + (($parseInt(s.$offset) >> 0)) >> 0;
				a$1[0] = s.$array;
				/* */ if (!((((fl$1 & 128) >>> 0) === 0)) && !((typ$1[0].Kind() === 17)) && !((typ$1[0].Kind() === 25))) { $s = 10; continue; }
				/* */ $s = 11; continue;
				/* if (!((((fl$1 & 128) >>> 0) === 0)) && !((typ$1[0].Kind() === 17)) && !((typ$1[0].Kind() === 25))) { */ case 10:
					$s = -1; return new Value.ptr(typ$1[0], (new (jsType(PtrTo(typ$1[0])))((function(a, a$1, c, i, typ, typ$1) { return function() {
						return wrapJsObject(typ$1[0], a$1[0][i[0]]);
					}; })(a, a$1, c, i, typ, typ$1), (function(a, a$1, c, i, typ, typ$1) { return function(x) {
						var x;
						a$1[0][i[0]] = unwrapJsObject(typ$1[0], x);
					}; })(a, a$1, c, i, typ, typ$1))), fl$1);
				/* } */ case 11:
				_r$1 = makeValue(typ$1[0], wrapJsObject(typ$1[0], a$1[0][i[0]]), fl$1); /* */ $s = 12; case 12: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				$s = -1; return _r$1;
			/* } else if (_1 === (24)) { */ case 4:
				str = (v.ptr).$get();
				if (i[0] < 0 || i[0] >= str.length) {
					$panic(new $String("reflect: string index out of range"));
				}
				fl$2 = (((new flag(v.flag).ro() | 8) >>> 0) | 128) >>> 0;
				c[0] = str.charCodeAt(i[0]);
				$s = -1; return new Value.ptr(uint8Type, ((c.$ptr || (c.$ptr = new ptrType$4(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, c)))), fl$2);
			/* } else { */ case 5:
				$panic(new ValueError.ptr("reflect.Value.Index", k));
			/* } */ case 6:
		case 1:
		$s = -1; return new Value.ptr(ptrType$1.nil, 0, 0);
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Index }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f.a = a; $f.a$1 = a$1; $f.c = c; $f.fl = fl; $f.fl$1 = fl$1; $f.fl$2 = fl$2; $f.i = i; $f.k = k; $f.s = s; $f.str = str; $f.tt = tt; $f.tt$1 = tt$1; $f.typ = typ; $f.typ$1 = typ$1; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Index = function(i) { return this.$val.Index(i); };
	Value.ptr.prototype.InterfaceData = function() {
		var v;
		v = this;
		$panic(errors.New("InterfaceData is not supported by GopherJS"));
	};
	Value.prototype.InterfaceData = function() { return this.$val.InterfaceData(); };
	Value.ptr.prototype.IsNil = function() {
		var _1, k, v;
		v = this;
		k = new flag(v.flag).kind();
		_1 = k;
		if ((_1 === (22)) || (_1 === (23))) {
			return $clone(v, Value).object() === jsType(v.typ).nil;
		} else if (_1 === (18)) {
			return $clone(v, Value).object() === $chanNil;
		} else if (_1 === (19)) {
			return $clone(v, Value).object() === $throwNilPointerError;
		} else if (_1 === (21)) {
			return $clone(v, Value).object() === false;
		} else if (_1 === (20)) {
			return $clone(v, Value).object() === $ifaceNil;
		} else if (_1 === (26)) {
			return $clone(v, Value).object() === 0;
		} else {
			$panic(new ValueError.ptr("reflect.Value.IsNil", k));
		}
	};
	Value.prototype.IsNil = function() { return this.$val.IsNil(); };
	Value.ptr.prototype.Len = function() {
		var _1, k, v;
		v = this;
		k = new flag(v.flag).kind();
		_1 = k;
		if ((_1 === (17)) || (_1 === (24))) {
			return $parseInt($clone(v, Value).object().length);
		} else if (_1 === (23)) {
			return $parseInt($clone(v, Value).object().$length) >> 0;
		} else if (_1 === (18)) {
			return $parseInt($clone(v, Value).object().$buffer.length) >> 0;
		} else if (_1 === (21)) {
			return $parseInt($keys($clone(v, Value).object()).length);
		} else {
			$panic(new ValueError.ptr("reflect.Value.Len", k));
		}
	};
	Value.prototype.Len = function() { return this.$val.Len(); };
	Value.ptr.prototype.Pointer = function() {
		var _1, k, v;
		v = this;
		k = new flag(v.flag).kind();
		_1 = k;
		if ((_1 === (18)) || (_1 === (21)) || (_1 === (22)) || (_1 === (26))) {
			if ($clone(v, Value).IsNil()) {
				return 0;
			}
			return $clone(v, Value).object();
		} else if (_1 === (19)) {
			if ($clone(v, Value).IsNil()) {
				return 0;
			}
			return 1;
		} else if (_1 === (23)) {
			if ($clone(v, Value).IsNil()) {
				return 0;
			}
			return $clone(v, Value).object().$array;
		} else {
			$panic(new ValueError.ptr("reflect.Value.Pointer", k));
		}
	};
	Value.prototype.Pointer = function() { return this.$val.Pointer(); };
	Value.ptr.prototype.Set = function(x) {
		var _1, _r, _r$1, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		new flag(v.flag).mustBeAssignable();
		new flag(x.flag).mustBeExported();
		_r = $clone(x, Value).assignTo("reflect.Set", v.typ, 0); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		x = _r;
		/* */ if (!((((v.flag & 128) >>> 0) === 0))) { $s = 2; continue; }
		/* */ $s = 3; continue;
		/* if (!((((v.flag & 128) >>> 0) === 0))) { */ case 2:
				_1 = v.typ.Kind();
				/* */ if (_1 === (17)) { $s = 5; continue; }
				/* */ if (_1 === (20)) { $s = 6; continue; }
				/* */ if (_1 === (25)) { $s = 7; continue; }
				/* */ $s = 8; continue;
				/* if (_1 === (17)) { */ case 5:
					jsType(v.typ).copy(v.ptr, x.ptr);
					$s = 9; continue;
				/* } else if (_1 === (20)) { */ case 6:
					_r$1 = valueInterface($clone(x, Value), false); /* */ $s = 10; case 10: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					v.ptr.$set(_r$1);
					$s = 9; continue;
				/* } else if (_1 === (25)) { */ case 7:
					copyStruct(v.ptr, x.ptr, v.typ);
					$s = 9; continue;
				/* } else { */ case 8:
					v.ptr.$set($clone(x, Value).object());
				/* } */ case 9:
			case 4:
			$s = -1; return;
		/* } */ case 3:
		v.ptr = x.ptr;
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Set }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Set = function(x) { return this.$val.Set(x); };
	Value.ptr.prototype.SetBytes = function(x) {
		var _r, _r$1, _v, slice, typedSlice, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _v = $f._v; slice = $f.slice; typedSlice = $f.typedSlice; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		new flag(v.flag).mustBeAssignable();
		new flag(v.flag).mustBe(23);
		_r = v.typ.Elem().Kind(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((_r === 8))) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!((_r === 8))) { */ case 1:
			$panic(new $String("reflect.Value.SetBytes of non-byte slice"));
		/* } */ case 2:
		slice = x;
		if (!(v.typ.Name() === "")) { _v = true; $s = 6; continue s; }
		_r$1 = v.typ.Elem().Name(); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_v = !(_r$1 === ""); case 6:
		/* */ if (_v) { $s = 4; continue; }
		/* */ $s = 5; continue;
		/* if (_v) { */ case 4:
			typedSlice = new (jsType(v.typ))(slice.$array);
			typedSlice.$offset = slice.$offset;
			typedSlice.$length = slice.$length;
			typedSlice.$capacity = slice.$capacity;
			slice = typedSlice;
		/* } */ case 5:
		v.ptr.$set(slice);
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.SetBytes }; } $f._r = _r; $f._r$1 = _r$1; $f._v = _v; $f.slice = slice; $f.typedSlice = typedSlice; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.SetBytes = function(x) { return this.$val.SetBytes(x); };
	Value.ptr.prototype.SetCap = function(n) {
		var n, newSlice, s, v;
		v = this;
		new flag(v.flag).mustBeAssignable();
		new flag(v.flag).mustBe(23);
		s = v.ptr.$get();
		if (n < ($parseInt(s.$length) >> 0) || n > ($parseInt(s.$capacity) >> 0)) {
			$panic(new $String("reflect: slice capacity out of range in SetCap"));
		}
		newSlice = new (jsType(v.typ))(s.$array);
		newSlice.$offset = s.$offset;
		newSlice.$length = s.$length;
		newSlice.$capacity = n;
		v.ptr.$set(newSlice);
	};
	Value.prototype.SetCap = function(n) { return this.$val.SetCap(n); };
	Value.ptr.prototype.SetLen = function(n) {
		var n, newSlice, s, v;
		v = this;
		new flag(v.flag).mustBeAssignable();
		new flag(v.flag).mustBe(23);
		s = v.ptr.$get();
		if (n < 0 || n > ($parseInt(s.$capacity) >> 0)) {
			$panic(new $String("reflect: slice length out of range in SetLen"));
		}
		newSlice = new (jsType(v.typ))(s.$array);
		newSlice.$offset = s.$offset;
		newSlice.$length = n;
		newSlice.$capacity = s.$capacity;
		v.ptr.$set(newSlice);
	};
	Value.prototype.SetLen = function(n) { return this.$val.SetLen(n); };
	Value.ptr.prototype.Slice = function(i, j) {
		var _1, _r, _r$1, cap, i, j, kind, s, str, tt, typ, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; cap = $f.cap; i = $f.i; j = $f.j; kind = $f.kind; s = $f.s; str = $f.str; tt = $f.tt; typ = $f.typ; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		cap = 0;
		typ = $ifaceNil;
		s = null;
			kind = new flag(v.flag).kind();
			_1 = kind;
			/* */ if (_1 === (17)) { $s = 2; continue; }
			/* */ if (_1 === (23)) { $s = 3; continue; }
			/* */ if (_1 === (24)) { $s = 4; continue; }
			/* */ $s = 5; continue;
			/* if (_1 === (17)) { */ case 2:
				if (((v.flag & 256) >>> 0) === 0) {
					$panic(new $String("reflect.Value.Slice: slice of unaddressable array"));
				}
				tt = (v.typ.kindType);
				cap = ((tt.len >> 0));
				typ = SliceOf(tt.elem);
				s = new (jsType(typ))($clone(v, Value).object());
				$s = 6; continue;
			/* } else if (_1 === (23)) { */ case 3:
				typ = v.typ;
				s = $clone(v, Value).object();
				cap = $parseInt(s.$capacity) >> 0;
				$s = 6; continue;
			/* } else if (_1 === (24)) { */ case 4:
				str = (v.ptr).$get();
				if (i < 0 || j < i || j > str.length) {
					$panic(new $String("reflect.Value.Slice: string slice index out of bounds"));
				}
				_r = ValueOf(new $String($substring(str, i, j))); /* */ $s = 7; case 7: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$s = -1; return _r;
			/* } else { */ case 5:
				$panic(new ValueError.ptr("reflect.Value.Slice", kind));
			/* } */ case 6:
		case 1:
		if (i < 0 || j < i || j > cap) {
			$panic(new $String("reflect.Value.Slice: slice index out of bounds"));
		}
		_r$1 = makeValue(typ, $subslice(s, i, j), new flag(v.flag).ro()); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$s = -1; return _r$1;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Slice }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f.cap = cap; $f.i = i; $f.j = j; $f.kind = kind; $f.s = s; $f.str = str; $f.tt = tt; $f.typ = typ; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Slice = function(i, j) { return this.$val.Slice(i, j); };
	Value.ptr.prototype.Slice3 = function(i, j, k) {
		var _1, _r, cap, i, j, k, kind, s, tt, typ, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; cap = $f.cap; i = $f.i; j = $f.j; k = $f.k; kind = $f.kind; s = $f.s; tt = $f.tt; typ = $f.typ; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		cap = 0;
		typ = $ifaceNil;
		s = null;
		kind = new flag(v.flag).kind();
		_1 = kind;
		if (_1 === (17)) {
			if (((v.flag & 256) >>> 0) === 0) {
				$panic(new $String("reflect.Value.Slice: slice of unaddressable array"));
			}
			tt = (v.typ.kindType);
			cap = ((tt.len >> 0));
			typ = SliceOf(tt.elem);
			s = new (jsType(typ))($clone(v, Value).object());
		} else if (_1 === (23)) {
			typ = v.typ;
			s = $clone(v, Value).object();
			cap = $parseInt(s.$capacity) >> 0;
		} else {
			$panic(new ValueError.ptr("reflect.Value.Slice3", kind));
		}
		if (i < 0 || j < i || k < j || k > cap) {
			$panic(new $String("reflect.Value.Slice3: slice index out of bounds"));
		}
		_r = makeValue(typ, $subslice(s, i, j, k), new flag(v.flag).ro()); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Slice3 }; } $f._1 = _1; $f._r = _r; $f.cap = cap; $f.i = i; $f.j = j; $f.k = k; $f.kind = kind; $f.s = s; $f.tt = tt; $f.typ = typ; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Slice3 = function(i, j, k) { return this.$val.Slice3(i, j, k); };
	Value.ptr.prototype.Close = function() {
		var v;
		v = this;
		new flag(v.flag).mustBe(18);
		new flag(v.flag).mustBeExported();
		$close($clone(v, Value).object());
	};
	Value.prototype.Close = function() { return this.$val.Close(); };
	chanrecv = function(ch, nb, val) {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, ch, comms, nb, received, recvRes, selectRes, selected, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; ch = $f.ch; comms = $f.comms; nb = $f.nb; received = $f.received; recvRes = $f.recvRes; selectRes = $f.selectRes; selected = $f.selected; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		selected = false;
		received = false;
		comms = new sliceType$11([new sliceType$8([ch])]);
		if (nb) {
			comms = $append(comms, new sliceType$8([]));
		}
		_r = selectHelper(new sliceType$3([comms])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		selectRes = _r;
		if (nb && (($parseInt(selectRes[0]) >> 0) === 1)) {
			_tmp = false;
			_tmp$1 = false;
			selected = _tmp;
			received = _tmp$1;
			$s = -1; return [selected, received];
		}
		recvRes = selectRes[1];
		val.$set(recvRes[0]);
		_tmp$2 = true;
		_tmp$3 = !!(recvRes[1]);
		selected = _tmp$2;
		received = _tmp$3;
		$s = -1; return [selected, received];
		/* */ } return; } if ($f === undefined) { $f = { $blk: chanrecv }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.ch = ch; $f.comms = comms; $f.nb = nb; $f.received = received; $f.recvRes = recvRes; $f.selectRes = selectRes; $f.selected = selected; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	chansend = function(ch, val, nb) {
		var _r, ch, comms, nb, selectRes, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; ch = $f.ch; comms = $f.comms; nb = $f.nb; selectRes = $f.selectRes; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		comms = new sliceType$11([new sliceType$8([ch, val.$get()])]);
		if (nb) {
			comms = $append(comms, new sliceType$8([]));
		}
		_r = selectHelper(new sliceType$3([comms])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		selectRes = _r;
		if (nb && (($parseInt(selectRes[0]) >> 0) === 1)) {
			$s = -1; return false;
		}
		$s = -1; return true;
		/* */ } return; } if ($f === undefined) { $f = { $blk: chansend }; } $f._r = _r; $f.ch = ch; $f.comms = comms; $f.nb = nb; $f.selectRes = selectRes; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	methodReceiver = function(op, v, i) {
		var _$39, fn, i, m, m$1, ms, op, prop, rcvr, t, tt, v, x;
		_$39 = ptrType$1.nil;
		t = ptrType$8.nil;
		fn = 0;
		prop = "";
		if (v.typ.Kind() === 20) {
			tt = (v.typ.kindType);
			if (i < 0 || i >= tt.methods.$length) {
				$panic(new $String("reflect: internal error: invalid method index"));
			}
			m = (x = tt.methods, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
			if (!$clone(tt.rtype.nameOff(m.name), name).isExported()) {
				$panic(new $String("reflect: " + op + " of unexported method"));
			}
			t = (tt.rtype.typeOff(m.typ).kindType);
			prop = $clone(tt.rtype.nameOff(m.name), name).name();
		} else {
			ms = v.typ.exportedMethods();
			if (((i >>> 0)) >= ((ms.$length >>> 0))) {
				$panic(new $String("reflect: internal error: invalid method index"));
			}
			m$1 = $clone(((i < 0 || i >= ms.$length) ? ($throwRuntimeError("index out of range"), undefined) : ms.$array[ms.$offset + i]), method);
			if (!$clone(v.typ.nameOff(m$1.name), name).isExported()) {
				$panic(new $String("reflect: " + op + " of unexported method"));
			}
			t = (v.typ.typeOff(m$1.mtyp).kindType);
			prop = $internalize($methodSet(jsType(v.typ))[i].prop, $String);
		}
		rcvr = $clone(v, Value).object();
		if (isWrapped(v.typ)) {
			rcvr = new (jsType(v.typ))(rcvr);
		}
		fn = (rcvr[$externalize(prop, $String)]);
		return [_$39, t, fn];
	};
	Value.ptr.prototype.call = function(op, in$1) {
		var _1, _arg, _arg$1, _arg$2, _arg$3, _i, _i$1, _i$2, _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _ref$1, _ref$2, _tmp, _tmp$1, _tuple, arg, argsArray, elem, fn, i, i$1, i$2, i$3, in$1, isSlice, m, n, nin, nout, op, origIn, rcvr, results, ret, slice, t, targ, v, x, x$1, x$2, xt, xt$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _arg$3 = $f._arg$3; _i = $f._i; _i$1 = $f._i$1; _i$2 = $f._i$2; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; arg = $f.arg; argsArray = $f.argsArray; elem = $f.elem; fn = $f.fn; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; i$3 = $f.i$3; in$1 = $f.in$1; isSlice = $f.isSlice; m = $f.m; n = $f.n; nin = $f.nin; nout = $f.nout; op = $f.op; origIn = $f.origIn; rcvr = $f.rcvr; results = $f.results; ret = $f.ret; slice = $f.slice; t = $f.t; targ = $f.targ; v = $f.v; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; xt = $f.xt; xt$1 = $f.xt$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		t = ptrType$8.nil;
		fn = 0;
		rcvr = null;
		if (!((((v.flag & 512) >>> 0) === 0))) {
			_tuple = methodReceiver(op, $clone(v, Value), ((v.flag >> 0)) >> 10 >> 0);
			t = _tuple[1];
			fn = _tuple[2];
			rcvr = $clone(v, Value).object();
			if (isWrapped(v.typ)) {
				rcvr = new (jsType(v.typ))(rcvr);
			}
		} else {
			t = (v.typ.kindType);
			fn = ($clone(v, Value).object());
			rcvr = undefined;
		}
		if (fn === 0) {
			$panic(new $String("reflect.Value.Call: call of nil function"));
		}
		isSlice = op === "CallSlice";
		n = t.rtype.NumIn();
		if (isSlice) {
			if (!t.rtype.IsVariadic()) {
				$panic(new $String("reflect: CallSlice of non-variadic function"));
			}
			if (in$1.$length < n) {
				$panic(new $String("reflect: CallSlice with too few input arguments"));
			}
			if (in$1.$length > n) {
				$panic(new $String("reflect: CallSlice with too many input arguments"));
			}
		} else {
			if (t.rtype.IsVariadic()) {
				n = n - (1) >> 0;
			}
			if (in$1.$length < n) {
				$panic(new $String("reflect: Call with too few input arguments"));
			}
			if (!t.rtype.IsVariadic() && in$1.$length > n) {
				$panic(new $String("reflect: Call with too many input arguments"));
			}
		}
		_ref = in$1;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			x = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
			if ($clone(x, Value).Kind() === 0) {
				$panic(new $String("reflect: " + op + " using zero Value argument"));
			}
			_i++;
		}
		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i < n)) { break; } */ if(!(i < n)) { $s = 2; continue; }
			_tmp = $clone(((i < 0 || i >= in$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + i]), Value).Type();
			_tmp$1 = t.rtype.In(i);
			xt = _tmp;
			targ = _tmp$1;
			_r = xt.AssignableTo(targ); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (!_r) { $s = 3; continue; }
			/* */ $s = 4; continue;
			/* if (!_r) { */ case 3:
				_r$1 = xt.String(); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_r$2 = targ.String(); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				$panic(new $String("reflect: " + op + " using " + _r$1 + " as type " + _r$2));
			/* } */ case 4:
			i = i + (1) >> 0;
		/* } */ $s = 1; continue; case 2:
		/* */ if (!isSlice && t.rtype.IsVariadic()) { $s = 8; continue; }
		/* */ $s = 9; continue;
		/* if (!isSlice && t.rtype.IsVariadic()) { */ case 8:
			m = in$1.$length - n >> 0;
			_r$3 = MakeSlice(t.rtype.In(n), m, m); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			slice = _r$3;
			_r$4 = t.rtype.In(n).Elem(); /* */ $s = 11; case 11: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			elem = _r$4;
			i$1 = 0;
			/* while (true) { */ case 12:
				/* if (!(i$1 < m)) { break; } */ if(!(i$1 < m)) { $s = 13; continue; }
				x$2 = (x$1 = n + i$1 >> 0, ((x$1 < 0 || x$1 >= in$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + x$1]));
				xt$1 = $clone(x$2, Value).Type();
				_r$5 = xt$1.AssignableTo(elem); /* */ $s = 16; case 16: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				/* */ if (!_r$5) { $s = 14; continue; }
				/* */ $s = 15; continue;
				/* if (!_r$5) { */ case 14:
					_r$6 = xt$1.String(); /* */ $s = 17; case 17: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
					_r$7 = elem.String(); /* */ $s = 18; case 18: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
					$panic(new $String("reflect: cannot use " + _r$6 + " as type " + _r$7 + " in " + op));
				/* } */ case 15:
				_r$8 = $clone(slice, Value).Index(i$1); /* */ $s = 19; case 19: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
				$r = $clone(_r$8, Value).Set($clone(x$2, Value)); /* */ $s = 20; case 20: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
				i$1 = i$1 + (1) >> 0;
			/* } */ $s = 12; continue; case 13:
			origIn = in$1;
			in$1 = $makeSlice(sliceType$9, (n + 1 >> 0));
			$copySlice($subslice(in$1, 0, n), origIn);
			((n < 0 || n >= in$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + n] = slice);
		/* } */ case 9:
		nin = in$1.$length;
		if (!((nin === t.rtype.NumIn()))) {
			$panic(new $String("reflect.Value.Call: wrong argument count"));
		}
		nout = t.rtype.NumOut();
		argsArray = new ($global.Array)(t.rtype.NumIn());
		_ref$1 = in$1;
		_i$1 = 0;
		/* while (true) { */ case 21:
			/* if (!(_i$1 < _ref$1.$length)) { break; } */ if(!(_i$1 < _ref$1.$length)) { $s = 22; continue; }
			i$2 = _i$1;
			arg = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
			_arg = t.rtype.In(i$2);
			_r$9 = t.rtype.In(i$2).common(); /* */ $s = 23; case 23: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			_arg$1 = _r$9;
			_arg$2 = 0;
			_r$10 = $clone(arg, Value).assignTo("reflect.Value.Call", _arg$1, _arg$2); /* */ $s = 24; case 24: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
			_r$11 = $clone(_r$10, Value).object(); /* */ $s = 25; case 25: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
			_arg$3 = _r$11;
			_r$12 = unwrapJsObject(_arg, _arg$3); /* */ $s = 26; case 26: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
			argsArray[i$2] = _r$12;
			_i$1++;
		/* } */ $s = 21; continue; case 22:
		_r$13 = callHelper(new sliceType$3([new $jsObjectPtr(fn), new $jsObjectPtr(rcvr), new $jsObjectPtr(argsArray)])); /* */ $s = 27; case 27: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
		results = _r$13;
			_1 = nout;
			/* */ if (_1 === (0)) { $s = 29; continue; }
			/* */ if (_1 === (1)) { $s = 30; continue; }
			/* */ $s = 31; continue;
			/* if (_1 === (0)) { */ case 29:
				$s = -1; return sliceType$9.nil;
			/* } else if (_1 === (1)) { */ case 30:
				_r$14 = makeValue(t.rtype.Out(0), wrapJsObject(t.rtype.Out(0), results), 0); /* */ $s = 33; case 33: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
				$s = -1; return new sliceType$9([$clone(_r$14, Value)]);
			/* } else { */ case 31:
				ret = $makeSlice(sliceType$9, nout);
				_ref$2 = ret;
				_i$2 = 0;
				/* while (true) { */ case 34:
					/* if (!(_i$2 < _ref$2.$length)) { break; } */ if(!(_i$2 < _ref$2.$length)) { $s = 35; continue; }
					i$3 = _i$2;
					_r$15 = makeValue(t.rtype.Out(i$3), wrapJsObject(t.rtype.Out(i$3), results[i$3]), 0); /* */ $s = 36; case 36: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
					((i$3 < 0 || i$3 >= ret.$length) ? ($throwRuntimeError("index out of range"), undefined) : ret.$array[ret.$offset + i$3] = _r$15);
					_i$2++;
				/* } */ $s = 34; continue; case 35:
				$s = -1; return ret;
			/* } */ case 32:
		case 28:
		$s = -1; return sliceType$9.nil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.call }; } $f._1 = _1; $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._arg$3 = _arg$3; $f._i = _i; $f._i$1 = _i$1; $f._i$2 = _i$2; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.arg = arg; $f.argsArray = argsArray; $f.elem = elem; $f.fn = fn; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.i$3 = i$3; $f.in$1 = in$1; $f.isSlice = isSlice; $f.m = m; $f.n = n; $f.nin = nin; $f.nout = nout; $f.op = op; $f.origIn = origIn; $f.rcvr = rcvr; $f.results = results; $f.ret = ret; $f.slice = slice; $f.t = t; $f.targ = targ; $f.v = v; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.xt = xt; $f.xt$1 = xt$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.call = function(op, in$1) { return this.$val.call(op, in$1); };
	structField.ptr.prototype.offset = function() {
		var f;
		f = this;
		return f.offsetEmbed >>> 1 >>> 0;
	};
	structField.prototype.offset = function() { return this.$val.offset(); };
	structField.ptr.prototype.embedded = function() {
		var f;
		f = this;
		return !((((f.offsetEmbed & 1) >>> 0) === 0));
	};
	structField.prototype.embedded = function() { return this.$val.embedded(); };
	Kind.prototype.String = function() {
		var k;
		k = this.$val;
		if (((k >> 0)) < kindNames.$length) {
			return ((k < 0 || k >= kindNames.$length) ? ($throwRuntimeError("index out of range"), undefined) : kindNames.$array[kindNames.$offset + k]);
		}
		return "kind" + strconv.Itoa(((k >> 0)));
	};
	$ptrType(Kind).prototype.String = function() { return new Kind(this.$get()).String(); };
	rtype.ptr.prototype.String = function() {
		var s, t;
		t = this;
		s = $clone(t.nameOff(t.str), name).name();
		if (!((((t.tflag & 2) >>> 0) === 0))) {
			return $substring(s, 1);
		}
		return s;
	};
	rtype.prototype.String = function() { return this.$val.String(); };
	rtype.ptr.prototype.Size = function() {
		var t;
		t = this;
		return t.size;
	};
	rtype.prototype.Size = function() { return this.$val.Size(); };
	rtype.ptr.prototype.Bits = function() {
		var k, t;
		t = this;
		if (t === ptrType$1.nil) {
			$panic(new $String("reflect: Bits of nil Type"));
		}
		k = t.Kind();
		if (k < 2 || k > 16) {
			$panic(new $String("reflect: Bits of non-arithmetic Type " + t.String()));
		}
		return $imul(((t.size >> 0)), 8);
	};
	rtype.prototype.Bits = function() { return this.$val.Bits(); };
	rtype.ptr.prototype.Align = function() {
		var t;
		t = this;
		return ((t.align >> 0));
	};
	rtype.prototype.Align = function() { return this.$val.Align(); };
	rtype.ptr.prototype.FieldAlign = function() {
		var t;
		t = this;
		return ((t.fieldAlign >> 0));
	};
	rtype.prototype.FieldAlign = function() { return this.$val.FieldAlign(); };
	rtype.ptr.prototype.Kind = function() {
		var t;
		t = this;
		return ((((t.kind & 31) >>> 0) >>> 0));
	};
	rtype.prototype.Kind = function() { return this.$val.Kind(); };
	rtype.ptr.prototype.common = function() {
		var t;
		t = this;
		return t;
	};
	rtype.prototype.common = function() { return this.$val.common(); };
	rtype.ptr.prototype.exportedMethods = function() {
		var t, ut;
		t = this;
		ut = t.uncommon();
		if (ut === ptrType$5.nil) {
			return sliceType$5.nil;
		}
		return ut.exportedMethods();
	};
	rtype.prototype.exportedMethods = function() { return this.$val.exportedMethods(); };
	rtype.ptr.prototype.NumMethod = function() {
		var t, tt;
		t = this;
		if (t.Kind() === 20) {
			tt = (t.kindType);
			return tt.NumMethod();
		}
		return t.exportedMethods().$length;
	};
	rtype.prototype.NumMethod = function() { return this.$val.NumMethod(); };
	rtype.ptr.prototype.MethodByName = function(name$1) {
		var _i, _r, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, i, m, name$1, ok, p, t, tt, ut, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; i = $f.i; m = $f.m; name$1 = $f.name$1; ok = $f.ok; p = $f.p; t = $f.t; tt = $f.tt; ut = $f.ut; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = new Method.ptr("", "", $ifaceNil, new Value.ptr(ptrType$1.nil, 0, 0), 0);
		ok = false;
		t = this;
		if (t.Kind() === 20) {
			tt = (t.kindType);
			_tuple = tt.MethodByName(name$1);
			Method.copy(m, _tuple[0]);
			ok = _tuple[1];
			$s = -1; return [m, ok];
		}
		ut = t.uncommon();
		if (ut === ptrType$5.nil) {
			_tmp = new Method.ptr("", "", $ifaceNil, new Value.ptr(ptrType$1.nil, 0, 0), 0);
			_tmp$1 = false;
			Method.copy(m, _tmp);
			ok = _tmp$1;
			$s = -1; return [m, ok];
		}
		_ref = ut.exportedMethods();
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			i = _i;
			p = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), method);
			/* */ if ($clone(t.nameOff(p.name), name).name() === name$1) { $s = 3; continue; }
			/* */ $s = 4; continue;
			/* if ($clone(t.nameOff(p.name), name).name() === name$1) { */ case 3:
				_r = t.Method(i); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tmp$2 = $clone(_r, Method);
				_tmp$3 = true;
				Method.copy(m, _tmp$2);
				ok = _tmp$3;
				$s = -1; return [m, ok];
			/* } */ case 4:
			_i++;
		/* } */ $s = 1; continue; case 2:
		_tmp$4 = new Method.ptr("", "", $ifaceNil, new Value.ptr(ptrType$1.nil, 0, 0), 0);
		_tmp$5 = false;
		Method.copy(m, _tmp$4);
		ok = _tmp$5;
		$s = -1; return [m, ok];
		/* */ } return; } if ($f === undefined) { $f = { $blk: rtype.ptr.prototype.MethodByName }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f.i = i; $f.m = m; $f.name$1 = name$1; $f.ok = ok; $f.p = p; $f.t = t; $f.tt = tt; $f.ut = ut; $f.$s = $s; $f.$r = $r; return $f;
	};
	rtype.prototype.MethodByName = function(name$1) { return this.$val.MethodByName(name$1); };
	rtype.ptr.prototype.PkgPath = function() {
		var t, ut;
		t = this;
		if (((t.tflag & 4) >>> 0) === 0) {
			return "";
		}
		ut = t.uncommon();
		if (ut === ptrType$5.nil) {
			return "";
		}
		return $clone(t.nameOff(ut.pkgPath), name).name();
	};
	rtype.prototype.PkgPath = function() { return this.$val.PkgPath(); };
	rtype.ptr.prototype.Name = function() {
		var i, s, t;
		t = this;
		if (((t.tflag & 4) >>> 0) === 0) {
			return "";
		}
		s = t.String();
		i = s.length - 1 >> 0;
		while (true) {
			if (!(i >= 0)) { break; }
			if (s.charCodeAt(i) === 46) {
				break;
			}
			i = i - (1) >> 0;
		}
		return $substring(s, (i + 1 >> 0));
	};
	rtype.prototype.Name = function() { return this.$val.Name(); };
	rtype.ptr.prototype.ChanDir = function() {
		var t, tt;
		t = this;
		if (!((t.Kind() === 18))) {
			$panic(new $String("reflect: ChanDir of non-chan type"));
		}
		tt = (t.kindType);
		return ((tt.dir >> 0));
	};
	rtype.prototype.ChanDir = function() { return this.$val.ChanDir(); };
	rtype.ptr.prototype.IsVariadic = function() {
		var t, tt;
		t = this;
		if (!((t.Kind() === 19))) {
			$panic(new $String("reflect: IsVariadic of non-func type"));
		}
		tt = (t.kindType);
		return !((((tt.outCount & 32768) >>> 0) === 0));
	};
	rtype.prototype.IsVariadic = function() { return this.$val.IsVariadic(); };
	rtype.ptr.prototype.Elem = function() {
		var _1, t, tt, tt$1, tt$2, tt$3, tt$4;
		t = this;
		_1 = t.Kind();
		if (_1 === (17)) {
			tt = (t.kindType);
			return toType(tt.elem);
		} else if (_1 === (18)) {
			tt$1 = (t.kindType);
			return toType(tt$1.elem);
		} else if (_1 === (21)) {
			tt$2 = (t.kindType);
			return toType(tt$2.elem);
		} else if (_1 === (22)) {
			tt$3 = (t.kindType);
			return toType(tt$3.elem);
		} else if (_1 === (23)) {
			tt$4 = (t.kindType);
			return toType(tt$4.elem);
		}
		$panic(new $String("reflect: Elem of invalid type"));
	};
	rtype.prototype.Elem = function() { return this.$val.Elem(); };
	rtype.ptr.prototype.Field = function(i) {
		var i, t, tt;
		t = this;
		if (!((t.Kind() === 25))) {
			$panic(new $String("reflect: Field of non-struct type"));
		}
		tt = (t.kindType);
		return tt.Field(i);
	};
	rtype.prototype.Field = function(i) { return this.$val.Field(i); };
	rtype.ptr.prototype.FieldByIndex = function(index) {
		var _r, index, t, tt, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; index = $f.index; t = $f.t; tt = $f.tt; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		if (!((t.Kind() === 25))) {
			$panic(new $String("reflect: FieldByIndex of non-struct type"));
		}
		tt = (t.kindType);
		_r = tt.FieldByIndex(index); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: rtype.ptr.prototype.FieldByIndex }; } $f._r = _r; $f.index = index; $f.t = t; $f.tt = tt; $f.$s = $s; $f.$r = $r; return $f;
	};
	rtype.prototype.FieldByIndex = function(index) { return this.$val.FieldByIndex(index); };
	rtype.ptr.prototype.FieldByName = function(name$1) {
		var _r, name$1, t, tt, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; name$1 = $f.name$1; t = $f.t; tt = $f.tt; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		if (!((t.Kind() === 25))) {
			$panic(new $String("reflect: FieldByName of non-struct type"));
		}
		tt = (t.kindType);
		_r = tt.FieldByName(name$1); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: rtype.ptr.prototype.FieldByName }; } $f._r = _r; $f.name$1 = name$1; $f.t = t; $f.tt = tt; $f.$s = $s; $f.$r = $r; return $f;
	};
	rtype.prototype.FieldByName = function(name$1) { return this.$val.FieldByName(name$1); };
	rtype.ptr.prototype.FieldByNameFunc = function(match) {
		var _r, match, t, tt, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; match = $f.match; t = $f.t; tt = $f.tt; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		if (!((t.Kind() === 25))) {
			$panic(new $String("reflect: FieldByNameFunc of non-struct type"));
		}
		tt = (t.kindType);
		_r = tt.FieldByNameFunc(match); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: rtype.ptr.prototype.FieldByNameFunc }; } $f._r = _r; $f.match = match; $f.t = t; $f.tt = tt; $f.$s = $s; $f.$r = $r; return $f;
	};
	rtype.prototype.FieldByNameFunc = function(match) { return this.$val.FieldByNameFunc(match); };
	rtype.ptr.prototype.In = function(i) {
		var i, t, tt, x;
		t = this;
		if (!((t.Kind() === 19))) {
			$panic(new $String("reflect: In of non-func type"));
		}
		tt = (t.kindType);
		return toType((x = tt.in$(), ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i])));
	};
	rtype.prototype.In = function(i) { return this.$val.In(i); };
	rtype.ptr.prototype.Key = function() {
		var t, tt;
		t = this;
		if (!((t.Kind() === 21))) {
			$panic(new $String("reflect: Key of non-map type"));
		}
		tt = (t.kindType);
		return toType(tt.key);
	};
	rtype.prototype.Key = function() { return this.$val.Key(); };
	rtype.ptr.prototype.Len = function() {
		var t, tt;
		t = this;
		if (!((t.Kind() === 17))) {
			$panic(new $String("reflect: Len of non-array type"));
		}
		tt = (t.kindType);
		return ((tt.len >> 0));
	};
	rtype.prototype.Len = function() { return this.$val.Len(); };
	rtype.ptr.prototype.NumField = function() {
		var t, tt;
		t = this;
		if (!((t.Kind() === 25))) {
			$panic(new $String("reflect: NumField of non-struct type"));
		}
		tt = (t.kindType);
		return tt.fields.$length;
	};
	rtype.prototype.NumField = function() { return this.$val.NumField(); };
	rtype.ptr.prototype.NumIn = function() {
		var t, tt;
		t = this;
		if (!((t.Kind() === 19))) {
			$panic(new $String("reflect: NumIn of non-func type"));
		}
		tt = (t.kindType);
		return ((tt.inCount >> 0));
	};
	rtype.prototype.NumIn = function() { return this.$val.NumIn(); };
	rtype.ptr.prototype.NumOut = function() {
		var t, tt;
		t = this;
		if (!((t.Kind() === 19))) {
			$panic(new $String("reflect: NumOut of non-func type"));
		}
		tt = (t.kindType);
		return tt.out().$length;
	};
	rtype.prototype.NumOut = function() { return this.$val.NumOut(); };
	rtype.ptr.prototype.Out = function(i) {
		var i, t, tt, x;
		t = this;
		if (!((t.Kind() === 19))) {
			$panic(new $String("reflect: Out of non-func type"));
		}
		tt = (t.kindType);
		return toType((x = tt.out(), ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i])));
	};
	rtype.prototype.Out = function(i) { return this.$val.Out(i); };
	ChanDir.prototype.String = function() {
		var _1, d;
		d = this.$val;
		_1 = d;
		if (_1 === (2)) {
			return "chan<-";
		} else if (_1 === (1)) {
			return "<-chan";
		} else if (_1 === (3)) {
			return "chan";
		}
		return "ChanDir" + strconv.Itoa(((d >> 0)));
	};
	$ptrType(ChanDir).prototype.String = function() { return new ChanDir(this.$get()).String(); };
	interfaceType.ptr.prototype.Method = function(i) {
		var i, m, p, pname, t, x;
		m = new Method.ptr("", "", $ifaceNil, new Value.ptr(ptrType$1.nil, 0, 0), 0);
		t = this;
		if (i < 0 || i >= t.methods.$length) {
			return m;
		}
		p = (x = t.methods, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
		pname = $clone(t.rtype.nameOff(p.name), name);
		m.Name = $clone(pname, name).name();
		if (!$clone(pname, name).isExported()) {
			m.PkgPath = $clone(pname, name).pkgPath();
			if (m.PkgPath === "") {
				m.PkgPath = $clone(t.pkgPath, name).name();
			}
		}
		m.Type = toType(t.rtype.typeOff(p.typ));
		m.Index = i;
		return m;
	};
	interfaceType.prototype.Method = function(i) { return this.$val.Method(i); };
	interfaceType.ptr.prototype.NumMethod = function() {
		var t;
		t = this;
		return t.methods.$length;
	};
	interfaceType.prototype.NumMethod = function() { return this.$val.NumMethod(); };
	interfaceType.ptr.prototype.MethodByName = function(name$1) {
		var _i, _ref, _tmp, _tmp$1, i, m, name$1, ok, p, t, x;
		m = new Method.ptr("", "", $ifaceNil, new Value.ptr(ptrType$1.nil, 0, 0), 0);
		ok = false;
		t = this;
		if (t === ptrType$9.nil) {
			return [m, ok];
		}
		p = ptrType$10.nil;
		_ref = t.methods;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			p = (x = t.methods, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
			if ($clone(t.rtype.nameOff(p.name), name).name() === name$1) {
				_tmp = $clone(t.Method(i), Method);
				_tmp$1 = true;
				Method.copy(m, _tmp);
				ok = _tmp$1;
				return [m, ok];
			}
			_i++;
		}
		return [m, ok];
	};
	interfaceType.prototype.MethodByName = function(name$1) { return this.$val.MethodByName(name$1); };
	StructTag.prototype.Get = function(key) {
		var _tuple, key, tag, v;
		tag = this.$val;
		_tuple = new StructTag(tag).Lookup(key);
		v = _tuple[0];
		return v;
	};
	$ptrType(StructTag).prototype.Get = function(key) { return new StructTag(this.$get()).Get(key); };
	StructTag.prototype.Lookup = function(key) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, err, i, key, name$1, ok, qvalue, tag, value, value$1;
		value = "";
		ok = false;
		tag = this.$val;
		while (true) {
			if (!(!(tag === ""))) { break; }
			i = 0;
			while (true) {
				if (!(i < tag.length && (tag.charCodeAt(i) === 32))) { break; }
				i = i + (1) >> 0;
			}
			tag = $substring(tag, i);
			if (tag === "") {
				break;
			}
			i = 0;
			while (true) {
				if (!(i < tag.length && tag.charCodeAt(i) > 32 && !((tag.charCodeAt(i) === 58)) && !((tag.charCodeAt(i) === 34)) && !((tag.charCodeAt(i) === 127)))) { break; }
				i = i + (1) >> 0;
			}
			if ((i === 0) || (i + 1 >> 0) >= tag.length || !((tag.charCodeAt(i) === 58)) || !((tag.charCodeAt((i + 1 >> 0)) === 34))) {
				break;
			}
			name$1 = ($substring(tag, 0, i));
			tag = $substring(tag, (i + 1 >> 0));
			i = 1;
			while (true) {
				if (!(i < tag.length && !((tag.charCodeAt(i) === 34)))) { break; }
				if (tag.charCodeAt(i) === 92) {
					i = i + (1) >> 0;
				}
				i = i + (1) >> 0;
			}
			if (i >= tag.length) {
				break;
			}
			qvalue = ($substring(tag, 0, (i + 1 >> 0)));
			tag = $substring(tag, (i + 1 >> 0));
			if (key === name$1) {
				_tuple = strconv.Unquote(qvalue);
				value$1 = _tuple[0];
				err = _tuple[1];
				if (!($interfaceIsEqual(err, $ifaceNil))) {
					break;
				}
				_tmp = value$1;
				_tmp$1 = true;
				value = _tmp;
				ok = _tmp$1;
				return [value, ok];
			}
		}
		_tmp$2 = "";
		_tmp$3 = false;
		value = _tmp$2;
		ok = _tmp$3;
		return [value, ok];
	};
	$ptrType(StructTag).prototype.Lookup = function(key) { return new StructTag(this.$get()).Lookup(key); };
	structType.ptr.prototype.Field = function(i) {
		var f, i, p, t, tag, x;
		f = new StructField.ptr("", "", $ifaceNil, "", 0, sliceType$13.nil, false);
		t = this;
		if (i < 0 || i >= t.fields.$length) {
			$panic(new $String("reflect: Field index out of bounds"));
		}
		p = (x = t.fields, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
		f.Type = toType(p.typ);
		f.Name = $clone(p.name, name).name();
		f.Anonymous = p.embedded();
		if (!$clone(p.name, name).isExported()) {
			f.PkgPath = $clone(t.pkgPath, name).name();
		}
		tag = $clone(p.name, name).tag();
		if (!(tag === "")) {
			f.Tag = (tag);
		}
		f.Offset = p.offset();
		f.Index = new sliceType$13([i]);
		return f;
	};
	structType.prototype.Field = function(i) { return this.$val.Field(i); };
	structType.ptr.prototype.FieldByIndex = function(index) {
		var _i, _r, _r$1, _r$2, _r$3, _r$4, _ref, _v, f, ft, i, index, t, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _ref = $f._ref; _v = $f._v; f = $f.f; ft = $f.ft; i = $f.i; index = $f.index; t = $f.t; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		f = new StructField.ptr("", "", $ifaceNil, "", 0, sliceType$13.nil, false);
		t = this;
		f.Type = toType(t.rtype);
		_ref = index;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			i = _i;
			x = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
			/* */ if (i > 0) { $s = 3; continue; }
			/* */ $s = 4; continue;
			/* if (i > 0) { */ case 3:
				ft = f.Type;
				_r = ft.Kind(); /* */ $s = 8; case 8: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				if (!(_r === 22)) { _v = false; $s = 7; continue s; }
				_r$1 = ft.Elem(); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_r$2 = _r$1.Kind(); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_v = _r$2 === 25; case 7:
				/* */ if (_v) { $s = 5; continue; }
				/* */ $s = 6; continue;
				/* if (_v) { */ case 5:
					_r$3 = ft.Elem(); /* */ $s = 11; case 11: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
					ft = _r$3;
				/* } */ case 6:
				f.Type = ft;
			/* } */ case 4:
			_r$4 = f.Type.Field(x); /* */ $s = 12; case 12: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			StructField.copy(f, _r$4);
			_i++;
		/* } */ $s = 1; continue; case 2:
		$s = -1; return f;
		/* */ } return; } if ($f === undefined) { $f = { $blk: structType.ptr.prototype.FieldByIndex }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._ref = _ref; $f._v = _v; $f.f = f; $f.ft = ft; $f.i = i; $f.index = index; $f.t = t; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	structType.prototype.FieldByIndex = function(index) { return this.$val.FieldByIndex(index); };
	structType.ptr.prototype.FieldByNameFunc = function(match) {
		var _entry, _entry$1, _entry$2, _entry$3, _i, _i$1, _key, _key$1, _key$2, _key$3, _r, _r$1, _ref, _ref$1, _tmp, _tmp$1, _tmp$2, _tmp$3, count, current, f, fname, i, index, match, next, nextCount, ntyp, ok, result, scan, styp, t, t$1, visited, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _entry$2 = $f._entry$2; _entry$3 = $f._entry$3; _i = $f._i; _i$1 = $f._i$1; _key = $f._key; _key$1 = $f._key$1; _key$2 = $f._key$2; _key$3 = $f._key$3; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _ref$1 = $f._ref$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; count = $f.count; current = $f.current; f = $f.f; fname = $f.fname; i = $f.i; index = $f.index; match = $f.match; next = $f.next; nextCount = $f.nextCount; ntyp = $f.ntyp; ok = $f.ok; result = $f.result; scan = $f.scan; styp = $f.styp; t = $f.t; t$1 = $f.t$1; visited = $f.visited; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		result = new StructField.ptr("", "", $ifaceNil, "", 0, sliceType$13.nil, false);
		ok = false;
		t = this;
		current = new sliceType$14([]);
		next = new sliceType$14([new fieldScan.ptr(t, sliceType$13.nil)]);
		nextCount = false;
		visited = $makeMap(ptrType$11.keyFor, []);
		/* while (true) { */ case 1:
			/* if (!(next.$length > 0)) { break; } */ if(!(next.$length > 0)) { $s = 2; continue; }
			_tmp = next;
			_tmp$1 = $subslice(current, 0, 0);
			current = _tmp;
			next = _tmp$1;
			count = nextCount;
			nextCount = false;
			_ref = current;
			_i = 0;
			/* while (true) { */ case 3:
				/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 4; continue; }
				scan = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), fieldScan);
				t$1 = scan.typ;
				/* */ if ((_entry = visited[ptrType$11.keyFor(t$1)], _entry !== undefined ? _entry.v : false)) { $s = 5; continue; }
				/* */ $s = 6; continue;
				/* if ((_entry = visited[ptrType$11.keyFor(t$1)], _entry !== undefined ? _entry.v : false)) { */ case 5:
					_i++;
					/* continue; */ $s = 3; continue;
				/* } */ case 6:
				_key = t$1; (visited || $throwRuntimeError("assignment to entry in nil map"))[ptrType$11.keyFor(_key)] = { k: _key, v: true };
				_ref$1 = t$1.fields;
				_i$1 = 0;
				/* while (true) { */ case 7:
					/* if (!(_i$1 < _ref$1.$length)) { break; } */ if(!(_i$1 < _ref$1.$length)) { $s = 8; continue; }
					i = _i$1;
					f = (x = t$1.fields, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
					fname = $clone(f.name, name).name();
					ntyp = ptrType$1.nil;
					/* */ if (f.embedded()) { $s = 9; continue; }
					/* */ $s = 10; continue;
					/* if (f.embedded()) { */ case 9:
						ntyp = f.typ;
						/* */ if (ntyp.Kind() === 22) { $s = 11; continue; }
						/* */ $s = 12; continue;
						/* if (ntyp.Kind() === 22) { */ case 11:
							_r = ntyp.Elem().common(); /* */ $s = 13; case 13: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
							ntyp = _r;
						/* } */ case 12:
					/* } */ case 10:
					_r$1 = match(fname); /* */ $s = 16; case 16: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					/* */ if (_r$1) { $s = 14; continue; }
					/* */ $s = 15; continue;
					/* if (_r$1) { */ case 14:
						if ((_entry$1 = count[ptrType$11.keyFor(t$1)], _entry$1 !== undefined ? _entry$1.v : 0) > 1 || ok) {
							_tmp$2 = new StructField.ptr("", "", $ifaceNil, "", 0, sliceType$13.nil, false);
							_tmp$3 = false;
							StructField.copy(result, _tmp$2);
							ok = _tmp$3;
							$s = -1; return [result, ok];
						}
						StructField.copy(result, t$1.Field(i));
						result.Index = sliceType$13.nil;
						result.Index = $appendSlice(result.Index, scan.index);
						result.Index = $append(result.Index, i);
						ok = true;
						_i$1++;
						/* continue; */ $s = 7; continue;
					/* } */ case 15:
					if (ok || ntyp === ptrType$1.nil || !((ntyp.Kind() === 25))) {
						_i$1++;
						/* continue; */ $s = 7; continue;
					}
					styp = (ntyp.kindType);
					if ((_entry$2 = nextCount[ptrType$11.keyFor(styp)], _entry$2 !== undefined ? _entry$2.v : 0) > 0) {
						_key$1 = styp; (nextCount || $throwRuntimeError("assignment to entry in nil map"))[ptrType$11.keyFor(_key$1)] = { k: _key$1, v: 2 };
						_i$1++;
						/* continue; */ $s = 7; continue;
					}
					if (nextCount === false) {
						nextCount = $makeMap(ptrType$11.keyFor, []);
					}
					_key$2 = styp; (nextCount || $throwRuntimeError("assignment to entry in nil map"))[ptrType$11.keyFor(_key$2)] = { k: _key$2, v: 1 };
					if ((_entry$3 = count[ptrType$11.keyFor(t$1)], _entry$3 !== undefined ? _entry$3.v : 0) > 1) {
						_key$3 = styp; (nextCount || $throwRuntimeError("assignment to entry in nil map"))[ptrType$11.keyFor(_key$3)] = { k: _key$3, v: 2 };
					}
					index = sliceType$13.nil;
					index = $appendSlice(index, scan.index);
					index = $append(index, i);
					next = $append(next, new fieldScan.ptr(styp, index));
					_i$1++;
				/* } */ $s = 7; continue; case 8:
				_i++;
			/* } */ $s = 3; continue; case 4:
			if (ok) {
				/* break; */ $s = 2; continue;
			}
		/* } */ $s = 1; continue; case 2:
		$s = -1; return [result, ok];
		/* */ } return; } if ($f === undefined) { $f = { $blk: structType.ptr.prototype.FieldByNameFunc }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._entry$2 = _entry$2; $f._entry$3 = _entry$3; $f._i = _i; $f._i$1 = _i$1; $f._key = _key; $f._key$1 = _key$1; $f._key$2 = _key$2; $f._key$3 = _key$3; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._ref$1 = _ref$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.count = count; $f.current = current; $f.f = f; $f.fname = fname; $f.i = i; $f.index = index; $f.match = match; $f.next = next; $f.nextCount = nextCount; $f.ntyp = ntyp; $f.ok = ok; $f.result = result; $f.scan = scan; $f.styp = styp; $f.t = t; $f.t$1 = t$1; $f.visited = visited; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	structType.prototype.FieldByNameFunc = function(match) { return this.$val.FieldByNameFunc(match); };
	structType.ptr.prototype.FieldByName = function(name$1) {
		var _i, _r, _ref, _tmp, _tmp$1, _tuple, f, hasEmbeds, i, name$1, present, t, tf, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; f = $f.f; hasEmbeds = $f.hasEmbeds; i = $f.i; name$1 = $f.name$1; present = $f.present; t = $f.t; tf = $f.tf; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		name$1 = [name$1];
		f = new StructField.ptr("", "", $ifaceNil, "", 0, sliceType$13.nil, false);
		present = false;
		t = this;
		hasEmbeds = false;
		if (!(name$1[0] === "")) {
			_ref = t.fields;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
				tf = (x = t.fields, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
				if ($clone(tf.name, name).name() === name$1[0]) {
					_tmp = $clone(t.Field(i), StructField);
					_tmp$1 = true;
					StructField.copy(f, _tmp);
					present = _tmp$1;
					$s = -1; return [f, present];
				}
				if (tf.embedded()) {
					hasEmbeds = true;
				}
				_i++;
			}
		}
		if (!hasEmbeds) {
			$s = -1; return [f, present];
		}
		_r = t.FieldByNameFunc((function(name$1) { return function(s) {
			var s;
			return s === name$1[0];
		}; })(name$1)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		StructField.copy(f, _tuple[0]);
		present = _tuple[1];
		$s = -1; return [f, present];
		/* */ } return; } if ($f === undefined) { $f = { $blk: structType.ptr.prototype.FieldByName }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.f = f; $f.hasEmbeds = hasEmbeds; $f.i = i; $f.name$1 = name$1; $f.present = present; $f.t = t; $f.tf = tf; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	structType.prototype.FieldByName = function(name$1) { return this.$val.FieldByName(name$1); };
	PtrTo = function(t) {
		var t;
		return $assertType(t, ptrType$1).ptrTo();
	};
	$pkg.PtrTo = PtrTo;
	rtype.ptr.prototype.Implements = function(u) {
		var _r, t, u, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; u = $f.u; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		if ($interfaceIsEqual(u, $ifaceNil)) {
			$panic(new $String("reflect: nil type passed to Type.Implements"));
		}
		_r = u.Kind(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((_r === 20))) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!((_r === 20))) { */ case 1:
			$panic(new $String("reflect: non-interface type passed to Type.Implements"));
		/* } */ case 2:
		$s = -1; return implements$1($assertType(u, ptrType$1), t);
		/* */ } return; } if ($f === undefined) { $f = { $blk: rtype.ptr.prototype.Implements }; } $f._r = _r; $f.t = t; $f.u = u; $f.$s = $s; $f.$r = $r; return $f;
	};
	rtype.prototype.Implements = function(u) { return this.$val.Implements(u); };
	rtype.ptr.prototype.AssignableTo = function(u) {
		var _r, t, u, uu, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; u = $f.u; uu = $f.uu; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		if ($interfaceIsEqual(u, $ifaceNil)) {
			$panic(new $String("reflect: nil type passed to Type.AssignableTo"));
		}
		uu = $assertType(u, ptrType$1);
		_r = directlyAssignable(uu, t); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r || implements$1(uu, t);
		/* */ } return; } if ($f === undefined) { $f = { $blk: rtype.ptr.prototype.AssignableTo }; } $f._r = _r; $f.t = t; $f.u = u; $f.uu = uu; $f.$s = $s; $f.$r = $r; return $f;
	};
	rtype.prototype.AssignableTo = function(u) { return this.$val.AssignableTo(u); };
	rtype.ptr.prototype.ConvertibleTo = function(u) {
		var _r, t, u, uu, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; u = $f.u; uu = $f.uu; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		if ($interfaceIsEqual(u, $ifaceNil)) {
			$panic(new $String("reflect: nil type passed to Type.ConvertibleTo"));
		}
		uu = $assertType(u, ptrType$1);
		_r = convertOp(uu, t); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return !(_r === $throwNilPointerError);
		/* */ } return; } if ($f === undefined) { $f = { $blk: rtype.ptr.prototype.ConvertibleTo }; } $f._r = _r; $f.t = t; $f.u = u; $f.uu = uu; $f.$s = $s; $f.$r = $r; return $f;
	};
	rtype.prototype.ConvertibleTo = function(u) { return this.$val.ConvertibleTo(u); };
	implements$1 = function(T, V) {
		var T, V, i, i$1, j, j$1, t, tm, tm$1, tmName, tmName$1, tmPkgPath, tmPkgPath$1, v, v$1, vm, vm$1, vmName, vmName$1, vmPkgPath, vmPkgPath$1, vmethods, x, x$1, x$2;
		if (!((T.Kind() === 20))) {
			return false;
		}
		t = (T.kindType);
		if (t.methods.$length === 0) {
			return true;
		}
		if (V.Kind() === 20) {
			v = (V.kindType);
			i = 0;
			j = 0;
			while (true) {
				if (!(j < v.methods.$length)) { break; }
				tm = (x = t.methods, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
				tmName = $clone(t.rtype.nameOff(tm.name), name);
				vm = (x$1 = v.methods, ((j < 0 || j >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + j]));
				vmName = $clone(V.nameOff(vm.name), name);
				if ($clone(vmName, name).name() === $clone(tmName, name).name() && V.typeOff(vm.typ) === t.rtype.typeOff(tm.typ)) {
					if (!$clone(tmName, name).isExported()) {
						tmPkgPath = $clone(tmName, name).pkgPath();
						if (tmPkgPath === "") {
							tmPkgPath = $clone(t.pkgPath, name).name();
						}
						vmPkgPath = $clone(vmName, name).pkgPath();
						if (vmPkgPath === "") {
							vmPkgPath = $clone(v.pkgPath, name).name();
						}
						if (!(tmPkgPath === vmPkgPath)) {
							j = j + (1) >> 0;
							continue;
						}
					}
					i = i + (1) >> 0;
					if (i >= t.methods.$length) {
						return true;
					}
				}
				j = j + (1) >> 0;
			}
			return false;
		}
		v$1 = V.uncommon();
		if (v$1 === ptrType$5.nil) {
			return false;
		}
		i$1 = 0;
		vmethods = v$1.methods();
		j$1 = 0;
		while (true) {
			if (!(j$1 < ((v$1.mcount >> 0)))) { break; }
			tm$1 = (x$2 = t.methods, ((i$1 < 0 || i$1 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + i$1]));
			tmName$1 = $clone(t.rtype.nameOff(tm$1.name), name);
			vm$1 = $clone(((j$1 < 0 || j$1 >= vmethods.$length) ? ($throwRuntimeError("index out of range"), undefined) : vmethods.$array[vmethods.$offset + j$1]), method);
			vmName$1 = $clone(V.nameOff(vm$1.name), name);
			if ($clone(vmName$1, name).name() === $clone(tmName$1, name).name() && V.typeOff(vm$1.mtyp) === t.rtype.typeOff(tm$1.typ)) {
				if (!$clone(tmName$1, name).isExported()) {
					tmPkgPath$1 = $clone(tmName$1, name).pkgPath();
					if (tmPkgPath$1 === "") {
						tmPkgPath$1 = $clone(t.pkgPath, name).name();
					}
					vmPkgPath$1 = $clone(vmName$1, name).pkgPath();
					if (vmPkgPath$1 === "") {
						vmPkgPath$1 = $clone(V.nameOff(v$1.pkgPath), name).name();
					}
					if (!(tmPkgPath$1 === vmPkgPath$1)) {
						j$1 = j$1 + (1) >> 0;
						continue;
					}
				}
				i$1 = i$1 + (1) >> 0;
				if (i$1 >= t.methods.$length) {
					return true;
				}
			}
			j$1 = j$1 + (1) >> 0;
		}
		return false;
	};
	directlyAssignable = function(T, V) {
		var T, V, _r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; T = $f.T; V = $f.V; _r = $f._r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		if (T === V) {
			$s = -1; return true;
		}
		if (!(T.Name() === "") && !(V.Name() === "") || !((T.Kind() === V.Kind()))) {
			$s = -1; return false;
		}
		_r = haveIdenticalUnderlyingType(T, V, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: directlyAssignable }; } $f.T = T; $f.V = V; $f._r = _r; $f.$s = $s; $f.$r = $r; return $f;
	};
	haveIdenticalType = function(T, V, cmpTags) {
		var T, V, _arg, _arg$1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _v, cmpTags, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; T = $f.T; V = $f.V; _arg = $f._arg; _arg$1 = $f._arg$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _v = $f._v; cmpTags = $f.cmpTags; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		if (cmpTags) {
			$s = -1; return $interfaceIsEqual(T, V);
		}
		_r = T.Name(); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = V.Name(); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		if (!(_r === _r$1)) { _v = true; $s = 3; continue s; }
		_r$2 = T.Kind(); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_r$3 = V.Kind(); /* */ $s = 7; case 7: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_v = !((_r$2 === _r$3)); case 3:
		/* */ if (_v) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (_v) { */ case 1:
			$s = -1; return false;
		/* } */ case 2:
		_r$4 = T.common(); /* */ $s = 8; case 8: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		_arg = _r$4;
		_r$5 = V.common(); /* */ $s = 9; case 9: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		_arg$1 = _r$5;
		_r$6 = haveIdenticalUnderlyingType(_arg, _arg$1, false); /* */ $s = 10; case 10: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		$s = -1; return _r$6;
		/* */ } return; } if ($f === undefined) { $f = { $blk: haveIdenticalType }; } $f.T = T; $f.V = V; $f._arg = _arg; $f._arg$1 = _arg$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._v = _v; $f.cmpTags = cmpTags; $f.$s = $s; $f.$r = $r; return $f;
	};
	haveIdenticalUnderlyingType = function(T, V, cmpTags) {
		var T, V, _1, _i, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _ref, _v, _v$1, _v$2, _v$3, cmpTags, i, i$1, i$2, kind, t, t$1, t$2, tf, v, v$1, v$2, vf, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; T = $f.T; V = $f.V; _1 = $f._1; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _ref = $f._ref; _v = $f._v; _v$1 = $f._v$1; _v$2 = $f._v$2; _v$3 = $f._v$3; cmpTags = $f.cmpTags; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; kind = $f.kind; t = $f.t; t$1 = $f.t$1; t$2 = $f.t$2; tf = $f.tf; v = $f.v; v$1 = $f.v$1; v$2 = $f.v$2; vf = $f.vf; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		if (T === V) {
			$s = -1; return true;
		}
		kind = T.Kind();
		if (!((kind === V.Kind()))) {
			$s = -1; return false;
		}
		if (1 <= kind && kind <= 16 || (kind === 24) || (kind === 26)) {
			$s = -1; return true;
		}
			_1 = kind;
			/* */ if (_1 === (17)) { $s = 2; continue; }
			/* */ if (_1 === (18)) { $s = 3; continue; }
			/* */ if (_1 === (19)) { $s = 4; continue; }
			/* */ if (_1 === (20)) { $s = 5; continue; }
			/* */ if (_1 === (21)) { $s = 6; continue; }
			/* */ if ((_1 === (22)) || (_1 === (23))) { $s = 7; continue; }
			/* */ if (_1 === (25)) { $s = 8; continue; }
			/* */ $s = 9; continue;
			/* if (_1 === (17)) { */ case 2:
				if (!(T.Len() === V.Len())) { _v = false; $s = 10; continue s; }
				_r = haveIdenticalType(T.Elem(), V.Elem(), cmpTags); /* */ $s = 11; case 11: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_v = _r; case 10:
				$s = -1; return _v;
			/* } else if (_1 === (18)) { */ case 3:
				if (!(V.ChanDir() === 3)) { _v$1 = false; $s = 14; continue s; }
				_r$1 = haveIdenticalType(T.Elem(), V.Elem(), cmpTags); /* */ $s = 15; case 15: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_v$1 = _r$1; case 14:
				/* */ if (_v$1) { $s = 12; continue; }
				/* */ $s = 13; continue;
				/* if (_v$1) { */ case 12:
					$s = -1; return true;
				/* } */ case 13:
				if (!(V.ChanDir() === T.ChanDir())) { _v$2 = false; $s = 16; continue s; }
				_r$2 = haveIdenticalType(T.Elem(), V.Elem(), cmpTags); /* */ $s = 17; case 17: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_v$2 = _r$2; case 16:
				$s = -1; return _v$2;
			/* } else if (_1 === (19)) { */ case 4:
				t = (T.kindType);
				v = (V.kindType);
				if (!((t.outCount === v.outCount)) || !((t.inCount === v.inCount))) {
					$s = -1; return false;
				}
				i = 0;
				/* while (true) { */ case 18:
					/* if (!(i < t.rtype.NumIn())) { break; } */ if(!(i < t.rtype.NumIn())) { $s = 19; continue; }
					_r$3 = haveIdenticalType(t.rtype.In(i), v.rtype.In(i), cmpTags); /* */ $s = 22; case 22: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
					/* */ if (!_r$3) { $s = 20; continue; }
					/* */ $s = 21; continue;
					/* if (!_r$3) { */ case 20:
						$s = -1; return false;
					/* } */ case 21:
					i = i + (1) >> 0;
				/* } */ $s = 18; continue; case 19:
				i$1 = 0;
				/* while (true) { */ case 23:
					/* if (!(i$1 < t.rtype.NumOut())) { break; } */ if(!(i$1 < t.rtype.NumOut())) { $s = 24; continue; }
					_r$4 = haveIdenticalType(t.rtype.Out(i$1), v.rtype.Out(i$1), cmpTags); /* */ $s = 27; case 27: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
					/* */ if (!_r$4) { $s = 25; continue; }
					/* */ $s = 26; continue;
					/* if (!_r$4) { */ case 25:
						$s = -1; return false;
					/* } */ case 26:
					i$1 = i$1 + (1) >> 0;
				/* } */ $s = 23; continue; case 24:
				$s = -1; return true;
			/* } else if (_1 === (20)) { */ case 5:
				t$1 = (T.kindType);
				v$1 = (V.kindType);
				if ((t$1.methods.$length === 0) && (v$1.methods.$length === 0)) {
					$s = -1; return true;
				}
				$s = -1; return false;
			/* } else if (_1 === (21)) { */ case 6:
				_r$5 = haveIdenticalType(T.Key(), V.Key(), cmpTags); /* */ $s = 29; case 29: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				if (!(_r$5)) { _v$3 = false; $s = 28; continue s; }
				_r$6 = haveIdenticalType(T.Elem(), V.Elem(), cmpTags); /* */ $s = 30; case 30: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
				_v$3 = _r$6; case 28:
				$s = -1; return _v$3;
			/* } else if ((_1 === (22)) || (_1 === (23))) { */ case 7:
				_r$7 = haveIdenticalType(T.Elem(), V.Elem(), cmpTags); /* */ $s = 31; case 31: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				$s = -1; return _r$7;
			/* } else if (_1 === (25)) { */ case 8:
				t$2 = (T.kindType);
				v$2 = (V.kindType);
				if (!((t$2.fields.$length === v$2.fields.$length))) {
					$s = -1; return false;
				}
				if (!($clone(t$2.pkgPath, name).name() === $clone(v$2.pkgPath, name).name())) {
					$s = -1; return false;
				}
				_ref = t$2.fields;
				_i = 0;
				/* while (true) { */ case 32:
					/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 33; continue; }
					i$2 = _i;
					tf = (x = t$2.fields, ((i$2 < 0 || i$2 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i$2]));
					vf = (x$1 = v$2.fields, ((i$2 < 0 || i$2 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i$2]));
					if (!($clone(tf.name, name).name() === $clone(vf.name, name).name())) {
						$s = -1; return false;
					}
					_r$8 = haveIdenticalType(tf.typ, vf.typ, cmpTags); /* */ $s = 36; case 36: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
					/* */ if (!_r$8) { $s = 34; continue; }
					/* */ $s = 35; continue;
					/* if (!_r$8) { */ case 34:
						$s = -1; return false;
					/* } */ case 35:
					if (cmpTags && !($clone(tf.name, name).tag() === $clone(vf.name, name).tag())) {
						$s = -1; return false;
					}
					if (!((tf.offsetEmbed === vf.offsetEmbed))) {
						$s = -1; return false;
					}
					_i++;
				/* } */ $s = 32; continue; case 33:
				$s = -1; return true;
			/* } */ case 9:
		case 1:
		$s = -1; return false;
		/* */ } return; } if ($f === undefined) { $f = { $blk: haveIdenticalUnderlyingType }; } $f.T = T; $f.V = V; $f._1 = _1; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._ref = _ref; $f._v = _v; $f._v$1 = _v$1; $f._v$2 = _v$2; $f._v$3 = _v$3; $f.cmpTags = cmpTags; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.kind = kind; $f.t = t; $f.t$1 = t$1; $f.t$2 = t$2; $f.tf = tf; $f.v = v; $f.v$1 = v$1; $f.v$2 = v$2; $f.vf = vf; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	toType = function(t) {
		var t;
		if (t === ptrType$1.nil) {
			return $ifaceNil;
		}
		return t;
	};
	ifaceIndir = function(t) {
		var t;
		return ((t.kind & 32) >>> 0) === 0;
	};
	flag.prototype.kind = function() {
		var f;
		f = this.$val;
		return ((((f & 31) >>> 0) >>> 0));
	};
	$ptrType(flag).prototype.kind = function() { return new flag(this.$get()).kind(); };
	flag.prototype.ro = function() {
		var f;
		f = this.$val;
		if (!((((f & 96) >>> 0) === 0))) {
			return 32;
		}
		return 0;
	};
	$ptrType(flag).prototype.ro = function() { return new flag(this.$get()).ro(); };
	Value.ptr.prototype.pointer = function() {
		var v;
		v = this;
		if (!((v.typ.size === 4)) || !v.typ.pointers()) {
			$panic(new $String("can't call pointer on a non-pointer Value"));
		}
		if (!((((v.flag & 128) >>> 0) === 0))) {
			return (v.ptr).$get();
		}
		return v.ptr;
	};
	Value.prototype.pointer = function() { return this.$val.pointer(); };
	ValueError.ptr.prototype.Error = function() {
		var e;
		e = this;
		if (e.Kind === 0) {
			return "reflect: call of " + e.Method + " on zero Value";
		}
		return "reflect: call of " + e.Method + " on " + new Kind(e.Kind).String() + " Value";
	};
	ValueError.prototype.Error = function() { return this.$val.Error(); };
	flag.prototype.mustBe = function(expected) {
		var expected, f;
		f = this.$val;
		if (!((new flag(f).kind() === expected))) {
			$panic(new ValueError.ptr(methodName(), new flag(f).kind()));
		}
	};
	$ptrType(flag).prototype.mustBe = function(expected) { return new flag(this.$get()).mustBe(expected); };
	flag.prototype.mustBeExported = function() {
		var f;
		f = this.$val;
		if (f === 0) {
			$panic(new ValueError.ptr(methodName(), 0));
		}
		if (!((((f & 96) >>> 0) === 0))) {
			$panic(new $String("reflect: " + methodName() + " using value obtained using unexported field"));
		}
	};
	$ptrType(flag).prototype.mustBeExported = function() { return new flag(this.$get()).mustBeExported(); };
	flag.prototype.mustBeAssignable = function() {
		var f;
		f = this.$val;
		if (f === 0) {
			$panic(new ValueError.ptr(methodName(), 0));
		}
		if (!((((f & 96) >>> 0) === 0))) {
			$panic(new $String("reflect: " + methodName() + " using value obtained using unexported field"));
		}
		if (((f & 256) >>> 0) === 0) {
			$panic(new $String("reflect: " + methodName() + " using unaddressable value"));
		}
	};
	$ptrType(flag).prototype.mustBeAssignable = function() { return new flag(this.$get()).mustBeAssignable(); };
	Value.ptr.prototype.Addr = function() {
		var v;
		v = this;
		if (((v.flag & 256) >>> 0) === 0) {
			$panic(new $String("reflect.Value.Addr of unaddressable value"));
		}
		return new Value.ptr(v.typ.ptrTo(), v.ptr, (new flag(v.flag).ro() | 22) >>> 0);
	};
	Value.prototype.Addr = function() { return this.$val.Addr(); };
	Value.ptr.prototype.Bool = function() {
		var v;
		v = this;
		new flag(v.flag).mustBe(1);
		return (v.ptr).$get();
	};
	Value.prototype.Bool = function() { return this.$val.Bool(); };
	Value.ptr.prototype.Bytes = function() {
		var _r, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		new flag(v.flag).mustBe(23);
		_r = v.typ.Elem().Kind(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((_r === 8))) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!((_r === 8))) { */ case 1:
			$panic(new $String("reflect.Value.Bytes of non-byte slice"));
		/* } */ case 2:
		$s = -1; return (v.ptr).$get();
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Bytes }; } $f._r = _r; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Bytes = function() { return this.$val.Bytes(); };
	Value.ptr.prototype.runes = function() {
		var _r, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		new flag(v.flag).mustBe(23);
		_r = v.typ.Elem().Kind(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((_r === 5))) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!((_r === 5))) { */ case 1:
			$panic(new $String("reflect.Value.Bytes of non-rune slice"));
		/* } */ case 2:
		$s = -1; return (v.ptr).$get();
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.runes }; } $f._r = _r; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.runes = function() { return this.$val.runes(); };
	Value.ptr.prototype.CanAddr = function() {
		var v;
		v = this;
		return !((((v.flag & 256) >>> 0) === 0));
	};
	Value.prototype.CanAddr = function() { return this.$val.CanAddr(); };
	Value.ptr.prototype.CanSet = function() {
		var v;
		v = this;
		return ((v.flag & 352) >>> 0) === 256;
	};
	Value.prototype.CanSet = function() { return this.$val.CanSet(); };
	Value.ptr.prototype.Call = function(in$1) {
		var _r, in$1, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; in$1 = $f.in$1; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		new flag(v.flag).mustBe(19);
		new flag(v.flag).mustBeExported();
		_r = $clone(v, Value).call("Call", in$1); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Call }; } $f._r = _r; $f.in$1 = in$1; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Call = function(in$1) { return this.$val.Call(in$1); };
	Value.ptr.prototype.CallSlice = function(in$1) {
		var _r, in$1, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; in$1 = $f.in$1; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		new flag(v.flag).mustBe(19);
		new flag(v.flag).mustBeExported();
		_r = $clone(v, Value).call("CallSlice", in$1); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.CallSlice }; } $f._r = _r; $f.in$1 = in$1; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.CallSlice = function(in$1) { return this.$val.CallSlice(in$1); };
	Value.ptr.prototype.Complex = function() {
		var _1, k, v, x;
		v = this;
		k = new flag(v.flag).kind();
		_1 = k;
		if (_1 === (15)) {
			return ((x = (v.ptr).$get(), new $Complex128(x.$real, x.$imag)));
		} else if (_1 === (16)) {
			return (v.ptr).$get();
		}
		$panic(new ValueError.ptr("reflect.Value.Complex", new flag(v.flag).kind()));
	};
	Value.prototype.Complex = function() { return this.$val.Complex(); };
	Value.ptr.prototype.FieldByIndex = function(index) {
		var _i, _r, _r$1, _r$2, _r$3, _ref, _v, i, index, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; _v = $f._v; i = $f.i; index = $f.index; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		/* */ if (index.$length === 1) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (index.$length === 1) { */ case 1:
			_r = $clone(v, Value).Field((0 >= index.$length ? ($throwRuntimeError("index out of range"), undefined) : index.$array[index.$offset + 0])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$s = -1; return _r;
		/* } */ case 2:
		new flag(v.flag).mustBe(25);
		_ref = index;
		_i = 0;
		/* while (true) { */ case 4:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 5; continue; }
			i = _i;
			x = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
			/* */ if (i > 0) { $s = 6; continue; }
			/* */ $s = 7; continue;
			/* if (i > 0) { */ case 6:
				if (!($clone(v, Value).Kind() === 22)) { _v = false; $s = 10; continue s; }
				_r$1 = v.typ.Elem().Kind(); /* */ $s = 11; case 11: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_v = _r$1 === 25; case 10:
				/* */ if (_v) { $s = 8; continue; }
				/* */ $s = 9; continue;
				/* if (_v) { */ case 8:
					if ($clone(v, Value).IsNil()) {
						$panic(new $String("reflect: indirection through nil pointer to embedded struct"));
					}
					_r$2 = $clone(v, Value).Elem(); /* */ $s = 12; case 12: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					v = _r$2;
				/* } */ case 9:
			/* } */ case 7:
			_r$3 = $clone(v, Value).Field(x); /* */ $s = 13; case 13: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			v = _r$3;
			_i++;
		/* } */ $s = 4; continue; case 5:
		$s = -1; return v;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.FieldByIndex }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f._v = _v; $f.i = i; $f.index = index; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.FieldByIndex = function(index) { return this.$val.FieldByIndex(index); };
	Value.ptr.prototype.FieldByName = function(name$1) {
		var _r, _r$1, _tuple, f, name$1, ok, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; f = $f.f; name$1 = $f.name$1; ok = $f.ok; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		new flag(v.flag).mustBe(25);
		_r = v.typ.FieldByName(name$1); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		f = $clone(_tuple[0], StructField);
		ok = _tuple[1];
		/* */ if (ok) { $s = 2; continue; }
		/* */ $s = 3; continue;
		/* if (ok) { */ case 2:
			_r$1 = $clone(v, Value).FieldByIndex(f.Index); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$s = -1; return _r$1;
		/* } */ case 3:
		$s = -1; return new Value.ptr(ptrType$1.nil, 0, 0);
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.FieldByName }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.f = f; $f.name$1 = name$1; $f.ok = ok; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.FieldByName = function(name$1) { return this.$val.FieldByName(name$1); };
	Value.ptr.prototype.FieldByNameFunc = function(match) {
		var _r, _r$1, _tuple, f, match, ok, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; f = $f.f; match = $f.match; ok = $f.ok; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		_r = v.typ.FieldByNameFunc(match); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		f = $clone(_tuple[0], StructField);
		ok = _tuple[1];
		/* */ if (ok) { $s = 2; continue; }
		/* */ $s = 3; continue;
		/* if (ok) { */ case 2:
			_r$1 = $clone(v, Value).FieldByIndex(f.Index); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$s = -1; return _r$1;
		/* } */ case 3:
		$s = -1; return new Value.ptr(ptrType$1.nil, 0, 0);
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.FieldByNameFunc }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.f = f; $f.match = match; $f.ok = ok; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.FieldByNameFunc = function(match) { return this.$val.FieldByNameFunc(match); };
	Value.ptr.prototype.Float = function() {
		var _1, k, v;
		v = this;
		k = new flag(v.flag).kind();
		_1 = k;
		if (_1 === (13)) {
			return ((v.ptr).$get());
		} else if (_1 === (14)) {
			return (v.ptr).$get();
		}
		$panic(new ValueError.ptr("reflect.Value.Float", new flag(v.flag).kind()));
	};
	Value.prototype.Float = function() { return this.$val.Float(); };
	Value.ptr.prototype.Int = function() {
		var _1, k, p, v;
		v = this;
		k = new flag(v.flag).kind();
		p = v.ptr;
		_1 = k;
		if (_1 === (2)) {
			return (new $Int64(0, (p).$get()));
		} else if (_1 === (3)) {
			return (new $Int64(0, (p).$get()));
		} else if (_1 === (4)) {
			return (new $Int64(0, (p).$get()));
		} else if (_1 === (5)) {
			return (new $Int64(0, (p).$get()));
		} else if (_1 === (6)) {
			return (p).$get();
		}
		$panic(new ValueError.ptr("reflect.Value.Int", new flag(v.flag).kind()));
	};
	Value.prototype.Int = function() { return this.$val.Int(); };
	Value.ptr.prototype.CanInterface = function() {
		var v;
		v = this;
		if (v.flag === 0) {
			$panic(new ValueError.ptr("reflect.Value.CanInterface", 0));
		}
		return ((v.flag & 96) >>> 0) === 0;
	};
	Value.prototype.CanInterface = function() { return this.$val.CanInterface(); };
	Value.ptr.prototype.Interface = function() {
		var _r, i, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; i = $f.i; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		i = $ifaceNil;
		v = this;
		_r = valueInterface($clone(v, Value), true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		i = _r;
		$s = -1; return i;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Interface }; } $f._r = _r; $f.i = i; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Interface = function() { return this.$val.Interface(); };
	Value.ptr.prototype.IsValid = function() {
		var v;
		v = this;
		return !((v.flag === 0));
	};
	Value.prototype.IsValid = function() { return this.$val.IsValid(); };
	Value.ptr.prototype.Kind = function() {
		var v;
		v = this;
		return new flag(v.flag).kind();
	};
	Value.prototype.Kind = function() { return this.$val.Kind(); };
	Value.ptr.prototype.MapIndex = function(key) {
		var _r, e, fl, k, key, tt, typ, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; e = $f.e; fl = $f.fl; k = $f.k; key = $f.key; tt = $f.tt; typ = $f.typ; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		new flag(v.flag).mustBe(21);
		tt = (v.typ.kindType);
		_r = $clone(key, Value).assignTo("reflect.Value.MapIndex", tt.key, 0); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		key = _r;
		k = 0;
		if (!((((key.flag & 128) >>> 0) === 0))) {
			k = key.ptr;
		} else {
			k = ((key.$ptr_ptr || (key.$ptr_ptr = new ptrType$17(function() { return this.$target.ptr; }, function($v) { this.$target.ptr = $v; }, key))));
		}
		e = mapaccess(v.typ, $clone(v, Value).pointer(), k);
		if (e === 0) {
			$s = -1; return new Value.ptr(ptrType$1.nil, 0, 0);
		}
		typ = tt.elem;
		fl = new flag((((v.flag | key.flag) >>> 0))).ro();
		fl = (fl | (((typ.Kind() >>> 0)))) >>> 0;
		$s = -1; return copyVal(typ, fl, e);
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.MapIndex }; } $f._r = _r; $f.e = e; $f.fl = fl; $f.k = k; $f.key = key; $f.tt = tt; $f.typ = typ; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.MapIndex = function(key) { return this.$val.MapIndex(key); };
	Value.ptr.prototype.MapKeys = function() {
		var _r, a, fl, i, it, key, keyType, m, mlen, tt, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; a = $f.a; fl = $f.fl; i = $f.i; it = $f.it; key = $f.key; keyType = $f.keyType; m = $f.m; mlen = $f.mlen; tt = $f.tt; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		new flag(v.flag).mustBe(21);
		tt = (v.typ.kindType);
		keyType = tt.key;
		fl = (new flag(v.flag).ro() | ((keyType.Kind() >>> 0))) >>> 0;
		m = $clone(v, Value).pointer();
		mlen = 0;
		if (!(m === 0)) {
			mlen = maplen(m);
		}
		it = mapiterinit(v.typ, m);
		a = $makeSlice(sliceType$9, mlen);
		i = 0;
		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i < a.$length)) { break; } */ if(!(i < a.$length)) { $s = 2; continue; }
			_r = mapiterkey(it); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			key = _r;
			if (key === 0) {
				/* break; */ $s = 2; continue;
			}
			((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i] = copyVal(keyType, fl, key));
			mapiternext(it);
			i = i + (1) >> 0;
		/* } */ $s = 1; continue; case 2:
		$s = -1; return $subslice(a, 0, i);
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.MapKeys }; } $f._r = _r; $f.a = a; $f.fl = fl; $f.i = i; $f.it = it; $f.key = key; $f.keyType = keyType; $f.m = m; $f.mlen = mlen; $f.tt = tt; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.MapKeys = function() { return this.$val.MapKeys(); };
	MapIter.ptr.prototype.Key = function() {
		var _arg, _arg$1, _arg$2, _r, _r$1, _r$2, it, ktype, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; it = $f.it; ktype = $f.ktype; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		it = this;
		if (it.it === 0) {
			$panic(new $String("MapIter.Key called before Next"));
		}
		_r = mapiterkey(it.it); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (_r === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (_r === 0) { */ case 1:
			$panic(new $String("MapIter.Key called on exhausted iterator"));
		/* } */ case 2:
		t = (it.m.typ.kindType);
		ktype = t.key;
		_arg = ktype;
		_arg$1 = (new flag(it.m.flag).ro() | ((ktype.Kind() >>> 0))) >>> 0;
		_r$1 = mapiterkey(it.it); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_arg$2 = _r$1;
		_r$2 = copyVal(_arg, _arg$1, _arg$2); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$s = -1; return _r$2;
		/* */ } return; } if ($f === undefined) { $f = { $blk: MapIter.ptr.prototype.Key }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.it = it; $f.ktype = ktype; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	MapIter.prototype.Key = function() { return this.$val.Key(); };
	MapIter.ptr.prototype.Value = function() {
		var _arg, _arg$1, _arg$2, _r, _r$1, _r$2, it, t, vtype, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; it = $f.it; t = $f.t; vtype = $f.vtype; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		it = this;
		if (it.it === 0) {
			$panic(new $String("MapIter.Value called before Next"));
		}
		_r = mapiterkey(it.it); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (_r === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (_r === 0) { */ case 1:
			$panic(new $String("MapIter.Value called on exhausted iterator"));
		/* } */ case 2:
		t = (it.m.typ.kindType);
		vtype = t.elem;
		_arg = vtype;
		_arg$1 = (new flag(it.m.flag).ro() | ((vtype.Kind() >>> 0))) >>> 0;
		_r$1 = mapitervalue(it.it); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_arg$2 = _r$1;
		_r$2 = copyVal(_arg, _arg$1, _arg$2); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$s = -1; return _r$2;
		/* */ } return; } if ($f === undefined) { $f = { $blk: MapIter.ptr.prototype.Value }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.it = it; $f.t = t; $f.vtype = vtype; $f.$s = $s; $f.$r = $r; return $f;
	};
	MapIter.prototype.Value = function() { return this.$val.Value(); };
	MapIter.ptr.prototype.Next = function() {
		var _r, _r$1, it, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; it = $f.it; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		it = this;
		/* */ if (it.it === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (it.it === 0) { */ case 1:
			it.it = mapiterinit(it.m.typ, $clone(it.m, Value).pointer());
			$s = 3; continue;
		/* } else { */ case 2:
			_r = mapiterkey(it.it); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (_r === 0) { $s = 4; continue; }
			/* */ $s = 5; continue;
			/* if (_r === 0) { */ case 4:
				$panic(new $String("MapIter.Next called on exhausted iterator"));
			/* } */ case 5:
			mapiternext(it.it);
		/* } */ case 3:
		_r$1 = mapiterkey(it.it); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$s = -1; return !(_r$1 === 0);
		/* */ } return; } if ($f === undefined) { $f = { $blk: MapIter.ptr.prototype.Next }; } $f._r = _r; $f._r$1 = _r$1; $f.it = it; $f.$s = $s; $f.$r = $r; return $f;
	};
	MapIter.prototype.Next = function() { return this.$val.Next(); };
	Value.ptr.prototype.MapRange = function() {
		var v;
		v = this;
		new flag(v.flag).mustBe(21);
		return new MapIter.ptr($clone(v, Value), 0);
	};
	Value.prototype.MapRange = function() { return this.$val.MapRange(); };
	copyVal = function(typ, fl, ptr) {
		var c, fl, ptr, typ;
		if (ifaceIndir(typ)) {
			c = unsafe_New(typ);
			typedmemmove(typ, c, ptr);
			return new Value.ptr(typ, c, (fl | 128) >>> 0);
		}
		return new Value.ptr(typ, (ptr).$get(), fl);
	};
	Value.ptr.prototype.Method = function(i) {
		var fl, i, v;
		v = this;
		if (v.typ === ptrType$1.nil) {
			$panic(new ValueError.ptr("reflect.Value.Method", 0));
		}
		if (!((((v.flag & 512) >>> 0) === 0)) || ((i >>> 0)) >= ((v.typ.NumMethod() >>> 0))) {
			$panic(new $String("reflect: Method index out of range"));
		}
		if ((v.typ.Kind() === 20) && $clone(v, Value).IsNil()) {
			$panic(new $String("reflect: Method on nil interface value"));
		}
		fl = (v.flag & 160) >>> 0;
		fl = (fl | (19)) >>> 0;
		fl = (fl | ((((((i >>> 0)) << 10 >>> 0) | 512) >>> 0))) >>> 0;
		return new Value.ptr(v.typ, v.ptr, fl);
	};
	Value.prototype.Method = function(i) { return this.$val.Method(i); };
	Value.ptr.prototype.NumMethod = function() {
		var v;
		v = this;
		if (v.typ === ptrType$1.nil) {
			$panic(new ValueError.ptr("reflect.Value.NumMethod", 0));
		}
		if (!((((v.flag & 512) >>> 0) === 0))) {
			return 0;
		}
		return v.typ.NumMethod();
	};
	Value.prototype.NumMethod = function() { return this.$val.NumMethod(); };
	Value.ptr.prototype.MethodByName = function(name$1) {
		var _r, _tuple, m, name$1, ok, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; m = $f.m; name$1 = $f.name$1; ok = $f.ok; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		if (v.typ === ptrType$1.nil) {
			$panic(new ValueError.ptr("reflect.Value.MethodByName", 0));
		}
		if (!((((v.flag & 512) >>> 0) === 0))) {
			$s = -1; return new Value.ptr(ptrType$1.nil, 0, 0);
		}
		_r = v.typ.MethodByName(name$1); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		m = $clone(_tuple[0], Method);
		ok = _tuple[1];
		if (!ok) {
			$s = -1; return new Value.ptr(ptrType$1.nil, 0, 0);
		}
		$s = -1; return $clone(v, Value).Method(m.Index);
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.MethodByName }; } $f._r = _r; $f._tuple = _tuple; $f.m = m; $f.name$1 = name$1; $f.ok = ok; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.MethodByName = function(name$1) { return this.$val.MethodByName(name$1); };
	Value.ptr.prototype.NumField = function() {
		var tt, v;
		v = this;
		new flag(v.flag).mustBe(25);
		tt = (v.typ.kindType);
		return tt.fields.$length;
	};
	Value.prototype.NumField = function() { return this.$val.NumField(); };
	Value.ptr.prototype.OverflowComplex = function(x) {
		var _1, k, v, x;
		v = this;
		k = new flag(v.flag).kind();
		_1 = k;
		if (_1 === (15)) {
			return overflowFloat32(x.$real) || overflowFloat32(x.$imag);
		} else if (_1 === (16)) {
			return false;
		}
		$panic(new ValueError.ptr("reflect.Value.OverflowComplex", new flag(v.flag).kind()));
	};
	Value.prototype.OverflowComplex = function(x) { return this.$val.OverflowComplex(x); };
	Value.ptr.prototype.OverflowFloat = function(x) {
		var _1, k, v, x;
		v = this;
		k = new flag(v.flag).kind();
		_1 = k;
		if (_1 === (13)) {
			return overflowFloat32(x);
		} else if (_1 === (14)) {
			return false;
		}
		$panic(new ValueError.ptr("reflect.Value.OverflowFloat", new flag(v.flag).kind()));
	};
	Value.prototype.OverflowFloat = function(x) { return this.$val.OverflowFloat(x); };
	overflowFloat32 = function(x) {
		var x;
		if (x < 0) {
			x = -x;
		}
		return 3.4028234663852886e+38 < x && x <= 1.7976931348623157e+308;
	};
	Value.ptr.prototype.OverflowInt = function(x) {
		var _1, bitSize, k, trunc, v, x;
		v = this;
		k = new flag(v.flag).kind();
		_1 = k;
		if ((_1 === (2)) || (_1 === (3)) || (_1 === (4)) || (_1 === (5)) || (_1 === (6))) {
			bitSize = $imul(v.typ.size, 8) >>> 0;
			trunc = $shiftRightInt64(($shiftLeft64(x, ((64 - bitSize >>> 0)))), ((64 - bitSize >>> 0)));
			return !((x.$high === trunc.$high && x.$low === trunc.$low));
		}
		$panic(new ValueError.ptr("reflect.Value.OverflowInt", new flag(v.flag).kind()));
	};
	Value.prototype.OverflowInt = function(x) { return this.$val.OverflowInt(x); };
	Value.ptr.prototype.OverflowUint = function(x) {
		var _1, bitSize, k, trunc, v, x;
		v = this;
		k = new flag(v.flag).kind();
		_1 = k;
		if ((_1 === (7)) || (_1 === (12)) || (_1 === (8)) || (_1 === (9)) || (_1 === (10)) || (_1 === (11))) {
			bitSize = $imul(v.typ.size, 8) >>> 0;
			trunc = $shiftRightUint64(($shiftLeft64(x, ((64 - bitSize >>> 0)))), ((64 - bitSize >>> 0)));
			return !((x.$high === trunc.$high && x.$low === trunc.$low));
		}
		$panic(new ValueError.ptr("reflect.Value.OverflowUint", new flag(v.flag).kind()));
	};
	Value.prototype.OverflowUint = function(x) { return this.$val.OverflowUint(x); };
	Value.ptr.prototype.Recv = function() {
		var _r, _tuple, ok, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; ok = $f.ok; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = new Value.ptr(ptrType$1.nil, 0, 0);
		ok = false;
		v = this;
		new flag(v.flag).mustBe(18);
		new flag(v.flag).mustBeExported();
		_r = $clone(v, Value).recv(false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		x = _tuple[0];
		ok = _tuple[1];
		$s = -1; return [x, ok];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Recv }; } $f._r = _r; $f._tuple = _tuple; $f.ok = ok; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Recv = function() { return this.$val.Recv(); };
	Value.ptr.prototype.recv = function(nb) {
		var _r, _tuple, nb, ok, p, selected, t, tt, v, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; nb = $f.nb; ok = $f.ok; p = $f.p; selected = $f.selected; t = $f.t; tt = $f.tt; v = $f.v; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		val = new Value.ptr(ptrType$1.nil, 0, 0);
		ok = false;
		v = this;
		tt = (v.typ.kindType);
		if ((((tt.dir >> 0)) & 1) === 0) {
			$panic(new $String("reflect: recv on send-only channel"));
		}
		t = tt.elem;
		val = new Value.ptr(t, 0, ((t.Kind() >>> 0)));
		p = 0;
		if (ifaceIndir(t)) {
			p = unsafe_New(t);
			val.ptr = p;
			val.flag = (val.flag | (128)) >>> 0;
		} else {
			p = ((val.$ptr_ptr || (val.$ptr_ptr = new ptrType$17(function() { return this.$target.ptr; }, function($v) { this.$target.ptr = $v; }, val))));
		}
		_r = chanrecv($clone(v, Value).pointer(), nb, p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		selected = _tuple[0];
		ok = _tuple[1];
		if (!selected) {
			val = new Value.ptr(ptrType$1.nil, 0, 0);
		}
		$s = -1; return [val, ok];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.recv }; } $f._r = _r; $f._tuple = _tuple; $f.nb = nb; $f.ok = ok; $f.p = p; $f.selected = selected; $f.t = t; $f.tt = tt; $f.v = v; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.recv = function(nb) { return this.$val.recv(nb); };
	Value.ptr.prototype.Send = function(x) {
		var _r, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		new flag(v.flag).mustBe(18);
		new flag(v.flag).mustBeExported();
		_r = $clone(v, Value).send($clone(x, Value), false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Send }; } $f._r = _r; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Send = function(x) { return this.$val.Send(x); };
	Value.ptr.prototype.send = function(x, nb) {
		var _r, _r$1, nb, p, selected, tt, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; nb = $f.nb; p = $f.p; selected = $f.selected; tt = $f.tt; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		selected = false;
		v = this;
		tt = (v.typ.kindType);
		if ((((tt.dir >> 0)) & 2) === 0) {
			$panic(new $String("reflect: send on recv-only channel"));
		}
		new flag(x.flag).mustBeExported();
		_r = $clone(x, Value).assignTo("reflect.Value.Send", tt.elem, 0); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		x = _r;
		p = 0;
		if (!((((x.flag & 128) >>> 0) === 0))) {
			p = x.ptr;
		} else {
			p = ((x.$ptr_ptr || (x.$ptr_ptr = new ptrType$17(function() { return this.$target.ptr; }, function($v) { this.$target.ptr = $v; }, x))));
		}
		_r$1 = chansend($clone(v, Value).pointer(), p, nb); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		selected = _r$1;
		$s = -1; return selected;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.send }; } $f._r = _r; $f._r$1 = _r$1; $f.nb = nb; $f.p = p; $f.selected = selected; $f.tt = tt; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.send = function(x, nb) { return this.$val.send(x, nb); };
	Value.ptr.prototype.SetBool = function(x) {
		var v, x;
		v = this;
		new flag(v.flag).mustBeAssignable();
		new flag(v.flag).mustBe(1);
		(v.ptr).$set(x);
	};
	Value.prototype.SetBool = function(x) { return this.$val.SetBool(x); };
	Value.ptr.prototype.setRunes = function(x) {
		var _r, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		new flag(v.flag).mustBeAssignable();
		new flag(v.flag).mustBe(23);
		_r = v.typ.Elem().Kind(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((_r === 5))) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!((_r === 5))) { */ case 1:
			$panic(new $String("reflect.Value.setRunes of non-rune slice"));
		/* } */ case 2:
		(v.ptr).$set(x);
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.setRunes }; } $f._r = _r; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.setRunes = function(x) { return this.$val.setRunes(x); };
	Value.ptr.prototype.SetComplex = function(x) {
		var _1, k, v, x;
		v = this;
		new flag(v.flag).mustBeAssignable();
		k = new flag(v.flag).kind();
		_1 = k;
		if (_1 === (15)) {
			(v.ptr).$set((new $Complex64(x.$real, x.$imag)));
		} else if (_1 === (16)) {
			(v.ptr).$set(x);
		} else {
			$panic(new ValueError.ptr("reflect.Value.SetComplex", new flag(v.flag).kind()));
		}
	};
	Value.prototype.SetComplex = function(x) { return this.$val.SetComplex(x); };
	Value.ptr.prototype.SetFloat = function(x) {
		var _1, k, v, x;
		v = this;
		new flag(v.flag).mustBeAssignable();
		k = new flag(v.flag).kind();
		_1 = k;
		if (_1 === (13)) {
			(v.ptr).$set(($fround(x)));
		} else if (_1 === (14)) {
			(v.ptr).$set(x);
		} else {
			$panic(new ValueError.ptr("reflect.Value.SetFloat", new flag(v.flag).kind()));
		}
	};
	Value.prototype.SetFloat = function(x) { return this.$val.SetFloat(x); };
	Value.ptr.prototype.SetInt = function(x) {
		var _1, k, v, x;
		v = this;
		new flag(v.flag).mustBeAssignable();
		k = new flag(v.flag).kind();
		_1 = k;
		if (_1 === (2)) {
			(v.ptr).$set((((x.$low + ((x.$high >> 31) * 4294967296)) >> 0)));
		} else if (_1 === (3)) {
			(v.ptr).$set((((x.$low + ((x.$high >> 31) * 4294967296)) << 24 >> 24)));
		} else if (_1 === (4)) {
			(v.ptr).$set((((x.$low + ((x.$high >> 31) * 4294967296)) << 16 >> 16)));
		} else if (_1 === (5)) {
			(v.ptr).$set((((x.$low + ((x.$high >> 31) * 4294967296)) >> 0)));
		} else if (_1 === (6)) {
			(v.ptr).$set(x);
		} else {
			$panic(new ValueError.ptr("reflect.Value.SetInt", new flag(v.flag).kind()));
		}
	};
	Value.prototype.SetInt = function(x) { return this.$val.SetInt(x); };
	Value.ptr.prototype.SetMapIndex = function(key, val) {
		var _r, _r$1, e, k, key, tt, v, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; e = $f.e; k = $f.k; key = $f.key; tt = $f.tt; v = $f.v; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		new flag(v.flag).mustBe(21);
		new flag(v.flag).mustBeExported();
		new flag(key.flag).mustBeExported();
		tt = (v.typ.kindType);
		_r = $clone(key, Value).assignTo("reflect.Value.SetMapIndex", tt.key, 0); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		key = _r;
		k = 0;
		if (!((((key.flag & 128) >>> 0) === 0))) {
			k = key.ptr;
		} else {
			k = ((key.$ptr_ptr || (key.$ptr_ptr = new ptrType$17(function() { return this.$target.ptr; }, function($v) { this.$target.ptr = $v; }, key))));
		}
		if (val.typ === ptrType$1.nil) {
			mapdelete(v.typ, $clone(v, Value).pointer(), k);
			$s = -1; return;
		}
		new flag(val.flag).mustBeExported();
		_r$1 = $clone(val, Value).assignTo("reflect.Value.SetMapIndex", tt.elem, 0); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		val = _r$1;
		e = 0;
		if (!((((val.flag & 128) >>> 0) === 0))) {
			e = val.ptr;
		} else {
			e = ((val.$ptr_ptr || (val.$ptr_ptr = new ptrType$17(function() { return this.$target.ptr; }, function($v) { this.$target.ptr = $v; }, val))));
		}
		$r = mapassign(v.typ, $clone(v, Value).pointer(), k, e); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.SetMapIndex }; } $f._r = _r; $f._r$1 = _r$1; $f.e = e; $f.k = k; $f.key = key; $f.tt = tt; $f.v = v; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.SetMapIndex = function(key, val) { return this.$val.SetMapIndex(key, val); };
	Value.ptr.prototype.SetUint = function(x) {
		var _1, k, v, x;
		v = this;
		new flag(v.flag).mustBeAssignable();
		k = new flag(v.flag).kind();
		_1 = k;
		if (_1 === (7)) {
			(v.ptr).$set(((x.$low >>> 0)));
		} else if (_1 === (8)) {
			(v.ptr).$set(((x.$low << 24 >>> 24)));
		} else if (_1 === (9)) {
			(v.ptr).$set(((x.$low << 16 >>> 16)));
		} else if (_1 === (10)) {
			(v.ptr).$set(((x.$low >>> 0)));
		} else if (_1 === (11)) {
			(v.ptr).$set(x);
		} else if (_1 === (12)) {
			(v.ptr).$set(((x.$low >>> 0)));
		} else {
			$panic(new ValueError.ptr("reflect.Value.SetUint", new flag(v.flag).kind()));
		}
	};
	Value.prototype.SetUint = function(x) { return this.$val.SetUint(x); };
	Value.ptr.prototype.SetPointer = function(x) {
		var v, x;
		v = this;
		new flag(v.flag).mustBeAssignable();
		new flag(v.flag).mustBe(26);
		(v.ptr).$set(x);
	};
	Value.prototype.SetPointer = function(x) { return this.$val.SetPointer(x); };
	Value.ptr.prototype.SetString = function(x) {
		var v, x;
		v = this;
		new flag(v.flag).mustBeAssignable();
		new flag(v.flag).mustBe(24);
		(v.ptr).$set(x);
	};
	Value.prototype.SetString = function(x) { return this.$val.SetString(x); };
	Value.ptr.prototype.String = function() {
		var _1, _r, k, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; k = $f.k; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		k = new flag(v.flag).kind();
		_1 = k;
		if (_1 === (0)) {
			$s = -1; return "<invalid Value>";
		} else if (_1 === (24)) {
			$s = -1; return (v.ptr).$get();
		}
		_r = $clone(v, Value).Type().String(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return "<" + _r + " Value>";
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.String }; } $f._1 = _1; $f._r = _r; $f.k = k; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.String = function() { return this.$val.String(); };
	Value.ptr.prototype.TryRecv = function() {
		var _r, _tuple, ok, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; ok = $f.ok; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = new Value.ptr(ptrType$1.nil, 0, 0);
		ok = false;
		v = this;
		new flag(v.flag).mustBe(18);
		new flag(v.flag).mustBeExported();
		_r = $clone(v, Value).recv(true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		x = _tuple[0];
		ok = _tuple[1];
		$s = -1; return [x, ok];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.TryRecv }; } $f._r = _r; $f._tuple = _tuple; $f.ok = ok; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.TryRecv = function() { return this.$val.TryRecv(); };
	Value.ptr.prototype.TrySend = function(x) {
		var _r, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		new flag(v.flag).mustBe(18);
		new flag(v.flag).mustBeExported();
		_r = $clone(v, Value).send($clone(x, Value), true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.TrySend }; } $f._r = _r; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.TrySend = function(x) { return this.$val.TrySend(x); };
	Value.ptr.prototype.Type = function() {
		var f, i, m, m$1, ms, tt, v, x;
		v = this;
		f = v.flag;
		if (f === 0) {
			$panic(new ValueError.ptr("reflect.Value.Type", 0));
		}
		if (((f & 512) >>> 0) === 0) {
			return v.typ;
		}
		i = ((v.flag >> 0)) >> 10 >> 0;
		if (v.typ.Kind() === 20) {
			tt = (v.typ.kindType);
			if (((i >>> 0)) >= ((tt.methods.$length >>> 0))) {
				$panic(new $String("reflect: internal error: invalid method index"));
			}
			m = (x = tt.methods, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
			return v.typ.typeOff(m.typ);
		}
		ms = v.typ.exportedMethods();
		if (((i >>> 0)) >= ((ms.$length >>> 0))) {
			$panic(new $String("reflect: internal error: invalid method index"));
		}
		m$1 = $clone(((i < 0 || i >= ms.$length) ? ($throwRuntimeError("index out of range"), undefined) : ms.$array[ms.$offset + i]), method);
		return v.typ.typeOff(m$1.mtyp);
	};
	Value.prototype.Type = function() { return this.$val.Type(); };
	Value.ptr.prototype.Uint = function() {
		var _1, k, p, v, x;
		v = this;
		k = new flag(v.flag).kind();
		p = v.ptr;
		_1 = k;
		if (_1 === (7)) {
			return (new $Uint64(0, (p).$get()));
		} else if (_1 === (8)) {
			return (new $Uint64(0, (p).$get()));
		} else if (_1 === (9)) {
			return (new $Uint64(0, (p).$get()));
		} else if (_1 === (10)) {
			return (new $Uint64(0, (p).$get()));
		} else if (_1 === (11)) {
			return (p).$get();
		} else if (_1 === (12)) {
			return ((x = (p).$get(), new $Uint64(0, x.constructor === Number ? x : 1)));
		}
		$panic(new ValueError.ptr("reflect.Value.Uint", new flag(v.flag).kind()));
	};
	Value.prototype.Uint = function() { return this.$val.Uint(); };
	Value.ptr.prototype.UnsafeAddr = function() {
		var v;
		v = this;
		if (v.typ === ptrType$1.nil) {
			$panic(new ValueError.ptr("reflect.Value.UnsafeAddr", 0));
		}
		if (((v.flag & 256) >>> 0) === 0) {
			$panic(new $String("reflect.Value.UnsafeAddr of unaddressable value"));
		}
		return (v.ptr);
	};
	Value.prototype.UnsafeAddr = function() { return this.$val.UnsafeAddr(); };
	typesMustMatch = function(what, t1, t2) {
		var _r, _r$1, t1, t2, what, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; t1 = $f.t1; t2 = $f.t2; what = $f.what; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		/* */ if (!($interfaceIsEqual(t1, t2))) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!($interfaceIsEqual(t1, t2))) { */ case 1:
			_r = t1.String(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r$1 = t2.String(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$panic(new $String(what + ": " + _r + " != " + _r$1));
		/* } */ case 2:
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: typesMustMatch }; } $f._r = _r; $f._r$1 = _r$1; $f.t1 = t1; $f.t2 = t2; $f.what = what; $f.$s = $s; $f.$r = $r; return $f;
	};
	MakeMap = function(typ) {
		var _r, typ, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; typ = $f.typ; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = MakeMapWithSize(typ, 0); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: MakeMap }; } $f._r = _r; $f.typ = typ; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.MakeMap = MakeMap;
	MakeMapWithSize = function(typ, n) {
		var _r, m, n, t, typ, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; m = $f.m; n = $f.n; t = $f.t; typ = $f.typ; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = typ.Kind(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((_r === 21))) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!((_r === 21))) { */ case 1:
			$panic(new $String("reflect.MakeMapWithSize of non-map type"));
		/* } */ case 2:
		t = $assertType(typ, ptrType$1);
		m = makemap(t, n);
		$s = -1; return new Value.ptr(t, m, 21);
		/* */ } return; } if ($f === undefined) { $f = { $blk: MakeMapWithSize }; } $f._r = _r; $f.m = m; $f.n = n; $f.t = t; $f.typ = typ; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.MakeMapWithSize = MakeMapWithSize;
	New = function(typ) {
		var fl, ptr, t, typ;
		if ($interfaceIsEqual(typ, $ifaceNil)) {
			$panic(new $String("reflect: New(nil)"));
		}
		t = $assertType(typ, ptrType$1);
		ptr = unsafe_New(t);
		fl = 22;
		return new Value.ptr(t.ptrTo(), ptr, fl);
	};
	$pkg.New = New;
	Value.ptr.prototype.Convert = function(t) {
		var _r, _r$1, _r$2, _r$3, _r$4, op, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; op = $f.op; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
		/* */ if (!((((v.flag & 512) >>> 0) === 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!((((v.flag & 512) >>> 0) === 0))) { */ case 1:
			_r = makeMethodValue("Convert", $clone(v, Value)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			v = _r;
		/* } */ case 2:
		_r$1 = t.common(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = convertOp(_r$1, v.typ); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		op = _r$2;
		/* */ if (op === $throwNilPointerError) { $s = 6; continue; }
		/* */ $s = 7; continue;
		/* if (op === $throwNilPointerError) { */ case 6:
			_r$3 = t.String(); /* */ $s = 8; case 8: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			$panic(new $String("reflect.Value.Convert: value of type " + v.typ.String() + " cannot be converted to type " + _r$3));
		/* } */ case 7:
		_r$4 = op($clone(v, Value), t); /* */ $s = 9; case 9: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		$s = -1; return _r$4;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Convert }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f.op = op; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Convert = function(t) { return this.$val.Convert(t); };
	convertOp = function(dst, src) {
		var _1, _2, _3, _4, _5, _6, _7, _arg, _arg$1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _v, _v$1, _v$2, dst, src, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _2 = $f._2; _3 = $f._3; _4 = $f._4; _5 = $f._5; _6 = $f._6; _7 = $f._7; _arg = $f._arg; _arg$1 = $f._arg$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _v = $f._v; _v$1 = $f._v$1; _v$2 = $f._v$2; dst = $f.dst; src = $f.src; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
			_1 = src.Kind();
			/* */ if ((_1 === (2)) || (_1 === (3)) || (_1 === (4)) || (_1 === (5)) || (_1 === (6))) { $s = 2; continue; }
			/* */ if ((_1 === (7)) || (_1 === (8)) || (_1 === (9)) || (_1 === (10)) || (_1 === (11)) || (_1 === (12))) { $s = 3; continue; }
			/* */ if ((_1 === (13)) || (_1 === (14))) { $s = 4; continue; }
			/* */ if ((_1 === (15)) || (_1 === (16))) { $s = 5; continue; }
			/* */ if (_1 === (24)) { $s = 6; continue; }
			/* */ if (_1 === (23)) { $s = 7; continue; }
			/* */ $s = 8; continue;
			/* if ((_1 === (2)) || (_1 === (3)) || (_1 === (4)) || (_1 === (5)) || (_1 === (6))) { */ case 2:
				_2 = dst.Kind();
				if ((_2 === (2)) || (_2 === (3)) || (_2 === (4)) || (_2 === (5)) || (_2 === (6)) || (_2 === (7)) || (_2 === (8)) || (_2 === (9)) || (_2 === (10)) || (_2 === (11)) || (_2 === (12))) {
					$s = -1; return cvtInt;
				} else if ((_2 === (13)) || (_2 === (14))) {
					$s = -1; return cvtIntFloat;
				} else if (_2 === (24)) {
					$s = -1; return cvtIntString;
				}
				$s = 8; continue;
			/* } else if ((_1 === (7)) || (_1 === (8)) || (_1 === (9)) || (_1 === (10)) || (_1 === (11)) || (_1 === (12))) { */ case 3:
				_3 = dst.Kind();
				if ((_3 === (2)) || (_3 === (3)) || (_3 === (4)) || (_3 === (5)) || (_3 === (6)) || (_3 === (7)) || (_3 === (8)) || (_3 === (9)) || (_3 === (10)) || (_3 === (11)) || (_3 === (12))) {
					$s = -1; return cvtUint;
				} else if ((_3 === (13)) || (_3 === (14))) {
					$s = -1; return cvtUintFloat;
				} else if (_3 === (24)) {
					$s = -1; return cvtUintString;
				}
				$s = 8; continue;
			/* } else if ((_1 === (13)) || (_1 === (14))) { */ case 4:
				_4 = dst.Kind();
				if ((_4 === (2)) || (_4 === (3)) || (_4 === (4)) || (_4 === (5)) || (_4 === (6))) {
					$s = -1; return cvtFloatInt;
				} else if ((_4 === (7)) || (_4 === (8)) || (_4 === (9)) || (_4 === (10)) || (_4 === (11)) || (_4 === (12))) {
					$s = -1; return cvtFloatUint;
				} else if ((_4 === (13)) || (_4 === (14))) {
					$s = -1; return cvtFloat;
				}
				$s = 8; continue;
			/* } else if ((_1 === (15)) || (_1 === (16))) { */ case 5:
				_5 = dst.Kind();
				if ((_5 === (15)) || (_5 === (16))) {
					$s = -1; return cvtComplex;
				}
				$s = 8; continue;
			/* } else if (_1 === (24)) { */ case 6:
				if (!(dst.Kind() === 23)) { _v = false; $s = 11; continue s; }
				_r = dst.Elem().PkgPath(); /* */ $s = 12; case 12: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_v = _r === ""; case 11:
				/* */ if (_v) { $s = 9; continue; }
				/* */ $s = 10; continue;
				/* if (_v) { */ case 9:
						_r$1 = dst.Elem().Kind(); /* */ $s = 14; case 14: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
						_6 = _r$1;
						if (_6 === (8)) {
							$s = -1; return cvtStringBytes;
						} else if (_6 === (5)) {
							$s = -1; return cvtStringRunes;
						}
					case 13:
				/* } */ case 10:
				$s = 8; continue;
			/* } else if (_1 === (23)) { */ case 7:
				if (!(dst.Kind() === 24)) { _v$1 = false; $s = 17; continue s; }
				_r$2 = src.Elem().PkgPath(); /* */ $s = 18; case 18: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_v$1 = _r$2 === ""; case 17:
				/* */ if (_v$1) { $s = 15; continue; }
				/* */ $s = 16; continue;
				/* if (_v$1) { */ case 15:
						_r$3 = src.Elem().Kind(); /* */ $s = 20; case 20: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
						_7 = _r$3;
						if (_7 === (8)) {
							$s = -1; return cvtBytesString;
						} else if (_7 === (5)) {
							$s = -1; return cvtRunesString;
						}
					case 19:
				/* } */ case 16:
			/* } */ case 8:
		case 1:
		_r$4 = haveIdenticalUnderlyingType(dst, src, false); /* */ $s = 23; case 23: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		/* */ if (_r$4) { $s = 21; continue; }
		/* */ $s = 22; continue;
		/* if (_r$4) { */ case 21:
			$s = -1; return cvtDirect;
		/* } */ case 22:
		if (!((dst.Kind() === 22) && dst.Name() === "" && (src.Kind() === 22) && src.Name() === "")) { _v$2 = false; $s = 26; continue s; }
		_r$5 = dst.Elem().common(); /* */ $s = 27; case 27: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		_arg = _r$5;
		_r$6 = src.Elem().common(); /* */ $s = 28; case 28: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		_arg$1 = _r$6;
		_r$7 = haveIdenticalUnderlyingType(_arg, _arg$1, false); /* */ $s = 29; case 29: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
		_v$2 = _r$7; case 26:
		/* */ if (_v$2) { $s = 24; continue; }
		/* */ $s = 25; continue;
		/* if (_v$2) { */ case 24:
			$s = -1; return cvtDirect;
		/* } */ case 25:
		if (implements$1(dst, src)) {
			if (src.Kind() === 20) {
				$s = -1; return cvtI2I;
			}
			$s = -1; return cvtT2I;
		}
		$s = -1; return $throwNilPointerError;
		/* */ } return; } if ($f === undefined) { $f = { $blk: convertOp }; } $f._1 = _1; $f._2 = _2; $f._3 = _3; $f._4 = _4; $f._5 = _5; $f._6 = _6; $f._7 = _7; $f._arg = _arg; $f._arg$1 = _arg$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._v = _v; $f._v$1 = _v$1; $f._v$2 = _v$2; $f.dst = dst; $f.src = src; $f.$s = $s; $f.$r = $r; return $f;
	};
	makeFloat = function(f, v, t) {
		var _1, _r, f, ptr, t, typ, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; f = $f.f; ptr = $f.ptr; t = $f.t; typ = $f.typ; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = t.common(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		typ = _r;
		ptr = unsafe_New(typ);
		_1 = typ.size;
		if (_1 === (4)) {
			(ptr).$set(($fround(v)));
		} else if (_1 === (8)) {
			(ptr).$set(v);
		}
		$s = -1; return new Value.ptr(typ, ptr, (((f | 128) >>> 0) | ((typ.Kind() >>> 0))) >>> 0);
		/* */ } return; } if ($f === undefined) { $f = { $blk: makeFloat }; } $f._1 = _1; $f._r = _r; $f.f = f; $f.ptr = ptr; $f.t = t; $f.typ = typ; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	makeComplex = function(f, v, t) {
		var _1, _r, f, ptr, t, typ, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; f = $f.f; ptr = $f.ptr; t = $f.t; typ = $f.typ; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = t.common(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		typ = _r;
		ptr = unsafe_New(typ);
		_1 = typ.size;
		if (_1 === (8)) {
			(ptr).$set((new $Complex64(v.$real, v.$imag)));
		} else if (_1 === (16)) {
			(ptr).$set(v);
		}
		$s = -1; return new Value.ptr(typ, ptr, (((f | 128) >>> 0) | ((typ.Kind() >>> 0))) >>> 0);
		/* */ } return; } if ($f === undefined) { $f = { $blk: makeComplex }; } $f._1 = _1; $f._r = _r; $f.f = f; $f.ptr = ptr; $f.t = t; $f.typ = typ; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	makeString = function(f, v, t) {
		var _r, f, ret, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; f = $f.f; ret = $f.ret; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = $clone(New(t), Value).Elem(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		ret = _r;
		$clone(ret, Value).SetString(v);
		ret.flag = (((ret.flag & ~256) >>> 0) | f) >>> 0;
		$s = -1; return ret;
		/* */ } return; } if ($f === undefined) { $f = { $blk: makeString }; } $f._r = _r; $f.f = f; $f.ret = ret; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	makeBytes = function(f, v, t) {
		var _r, f, ret, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; f = $f.f; ret = $f.ret; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = $clone(New(t), Value).Elem(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		ret = _r;
		$r = $clone(ret, Value).SetBytes(v); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		ret.flag = (((ret.flag & ~256) >>> 0) | f) >>> 0;
		$s = -1; return ret;
		/* */ } return; } if ($f === undefined) { $f = { $blk: makeBytes }; } $f._r = _r; $f.f = f; $f.ret = ret; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	makeRunes = function(f, v, t) {
		var _r, f, ret, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; f = $f.f; ret = $f.ret; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = $clone(New(t), Value).Elem(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		ret = _r;
		$r = $clone(ret, Value).setRunes(v); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		ret.flag = (((ret.flag & ~256) >>> 0) | f) >>> 0;
		$s = -1; return ret;
		/* */ } return; } if ($f === undefined) { $f = { $blk: makeRunes }; } $f._r = _r; $f.f = f; $f.ret = ret; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtInt = function(v, t) {
		var _r, t, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = makeInt(new flag(v.flag).ro(), ((x = $clone(v, Value).Int(), new $Uint64(x.$high, x.$low))), t); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtInt }; } $f._r = _r; $f.t = t; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtUint = function(v, t) {
		var _r, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = makeInt(new flag(v.flag).ro(), $clone(v, Value).Uint(), t); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtUint }; } $f._r = _r; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtFloatInt = function(v, t) {
		var _r, t, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = makeInt(new flag(v.flag).ro(), ((x = (new $Int64(0, $clone(v, Value).Float())), new $Uint64(x.$high, x.$low))), t); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtFloatInt }; } $f._r = _r; $f.t = t; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtFloatUint = function(v, t) {
		var _r, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = makeInt(new flag(v.flag).ro(), (new $Uint64(0, $clone(v, Value).Float())), t); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtFloatUint }; } $f._r = _r; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtIntFloat = function(v, t) {
		var _r, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = makeFloat(new flag(v.flag).ro(), ($flatten64($clone(v, Value).Int())), t); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtIntFloat }; } $f._r = _r; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtUintFloat = function(v, t) {
		var _r, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = makeFloat(new flag(v.flag).ro(), ($flatten64($clone(v, Value).Uint())), t); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtUintFloat }; } $f._r = _r; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtFloat = function(v, t) {
		var _r, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = makeFloat(new flag(v.flag).ro(), $clone(v, Value).Float(), t); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtFloat }; } $f._r = _r; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtComplex = function(v, t) {
		var _r, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = makeComplex(new flag(v.flag).ro(), $clone(v, Value).Complex(), t); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtComplex }; } $f._r = _r; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtIntString = function(v, t) {
		var _r, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = makeString(new flag(v.flag).ro(), ($encodeRune($clone(v, Value).Int().$low)), t); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtIntString }; } $f._r = _r; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtUintString = function(v, t) {
		var _r, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = makeString(new flag(v.flag).ro(), ($encodeRune($clone(v, Value).Uint().$low)), t); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtUintString }; } $f._r = _r; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtBytesString = function(v, t) {
		var _arg, _arg$1, _arg$2, _r, _r$1, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _r = $f._r; _r$1 = $f._r$1; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_arg = new flag(v.flag).ro();
		_r = $clone(v, Value).Bytes(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg$1 = ($bytesToString(_r));
		_arg$2 = t;
		_r$1 = makeString(_arg, _arg$1, _arg$2); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$s = -1; return _r$1;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtBytesString }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._r = _r; $f._r$1 = _r$1; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtStringBytes = function(v, t) {
		var _arg, _arg$1, _arg$2, _r, _r$1, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _r = $f._r; _r$1 = $f._r$1; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_arg = new flag(v.flag).ro();
		_r = $clone(v, Value).String(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg$1 = (new sliceType$15($stringToBytes(_r)));
		_arg$2 = t;
		_r$1 = makeBytes(_arg, _arg$1, _arg$2); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$s = -1; return _r$1;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtStringBytes }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._r = _r; $f._r$1 = _r$1; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtRunesString = function(v, t) {
		var _arg, _arg$1, _arg$2, _r, _r$1, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _r = $f._r; _r$1 = $f._r$1; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_arg = new flag(v.flag).ro();
		_r = $clone(v, Value).runes(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg$1 = ($runesToString(_r));
		_arg$2 = t;
		_r$1 = makeString(_arg, _arg$1, _arg$2); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$s = -1; return _r$1;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtRunesString }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._r = _r; $f._r$1 = _r$1; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtStringRunes = function(v, t) {
		var _arg, _arg$1, _arg$2, _r, _r$1, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _r = $f._r; _r$1 = $f._r$1; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_arg = new flag(v.flag).ro();
		_r = $clone(v, Value).String(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg$1 = (new sliceType$18($stringToRunes(_r)));
		_arg$2 = t;
		_r$1 = makeRunes(_arg, _arg$1, _arg$2); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$s = -1; return _r$1;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtStringRunes }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._r = _r; $f._r$1 = _r$1; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtT2I = function(v, typ) {
		var _r, _r$1, _r$2, _r$3, _r$4, target, typ, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; target = $f.target; typ = $f.typ; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = typ.common(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = unsafe_New(_r); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		target = _r$1;
		_r$2 = valueInterface($clone(v, Value), false); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		x = _r$2;
		_r$3 = typ.NumMethod(); /* */ $s = 7; case 7: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		/* */ if (_r$3 === 0) { $s = 4; continue; }
		/* */ $s = 5; continue;
		/* if (_r$3 === 0) { */ case 4:
			(target).$set(x);
			$s = 6; continue;
		/* } else { */ case 5:
			ifaceE2I($assertType(typ, ptrType$1), x, target);
		/* } */ case 6:
		_r$4 = typ.common(); /* */ $s = 8; case 8: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		$s = -1; return new Value.ptr(_r$4, target, (((new flag(v.flag).ro() | 128) >>> 0) | 20) >>> 0);
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtT2I }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f.target = target; $f.typ = typ; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	cvtI2I = function(v, typ) {
		var _r, _r$1, _r$2, ret, typ, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; ret = $f.ret; typ = $f.typ; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		/* */ if ($clone(v, Value).IsNil()) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if ($clone(v, Value).IsNil()) { */ case 1:
			_r = Zero(typ); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			ret = _r;
			ret.flag = (ret.flag | (new flag(v.flag).ro())) >>> 0;
			$s = -1; return ret;
		/* } */ case 2:
		_r$1 = $clone(v, Value).Elem(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = cvtT2I($clone(_r$1, Value), typ); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$s = -1; return _r$2;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cvtI2I }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.ret = ret; $f.typ = typ; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	ptrType$5.methods = [{prop: "methods", name: "methods", pkg: "reflect", typ: $funcType([], [sliceType$5], false)}, {prop: "exportedMethods", name: "exportedMethods", pkg: "reflect", typ: $funcType([], [sliceType$5], false)}];
	ptrType$8.methods = [{prop: "in$", name: "in", pkg: "reflect", typ: $funcType([], [sliceType$2], false)}, {prop: "out", name: "out", pkg: "reflect", typ: $funcType([], [sliceType$2], false)}];
	name.methods = [{prop: "name", name: "name", pkg: "reflect", typ: $funcType([], [$String], false)}, {prop: "tag", name: "tag", pkg: "reflect", typ: $funcType([], [$String], false)}, {prop: "pkgPath", name: "pkgPath", pkg: "reflect", typ: $funcType([], [$String], false)}, {prop: "isExported", name: "isExported", pkg: "reflect", typ: $funcType([], [$Bool], false)}, {prop: "data", name: "data", pkg: "reflect", typ: $funcType([$Int, $String], [ptrType$4], false)}, {prop: "nameLen", name: "nameLen", pkg: "reflect", typ: $funcType([], [$Int], false)}, {prop: "tagLen", name: "tagLen", pkg: "reflect", typ: $funcType([], [$Int], false)}];
	ptrType$7.methods = [{prop: "skipUntilValidKey", name: "skipUntilValidKey", pkg: "reflect", typ: $funcType([], [], false)}];
	Kind.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
	ptrType$1.methods = [{prop: "uncommon", name: "uncommon", pkg: "reflect", typ: $funcType([], [ptrType$5], false)}, {prop: "nameOff", name: "nameOff", pkg: "reflect", typ: $funcType([nameOff], [name], false)}, {prop: "typeOff", name: "typeOff", pkg: "reflect", typ: $funcType([typeOff], [ptrType$1], false)}, {prop: "ptrTo", name: "ptrTo", pkg: "reflect", typ: $funcType([], [ptrType$1], false)}, {prop: "pointers", name: "pointers", pkg: "reflect", typ: $funcType([], [$Bool], false)}, {prop: "Comparable", name: "Comparable", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Method", name: "Method", pkg: "", typ: $funcType([$Int], [Method], false)}, {prop: "textOff", name: "textOff", pkg: "reflect", typ: $funcType([textOff], [$UnsafePointer], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Uintptr], false)}, {prop: "Bits", name: "Bits", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Align", name: "Align", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "FieldAlign", name: "FieldAlign", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Kind", name: "Kind", pkg: "", typ: $funcType([], [Kind], false)}, {prop: "common", name: "common", pkg: "reflect", typ: $funcType([], [ptrType$1], false)}, {prop: "exportedMethods", name: "exportedMethods", pkg: "reflect", typ: $funcType([], [sliceType$5], false)}, {prop: "NumMethod", name: "NumMethod", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "MethodByName", name: "MethodByName", pkg: "", typ: $funcType([$String], [Method, $Bool], false)}, {prop: "PkgPath", name: "PkgPath", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Name", name: "Name", pkg: "", typ: $funcType([], [$String], false)}, {prop: "ChanDir", name: "ChanDir", pkg: "", typ: $funcType([], [ChanDir], false)}, {prop: "IsVariadic", name: "IsVariadic", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Elem", name: "Elem", pkg: "", typ: $funcType([], [Type], false)}, {prop: "Field", name: "Field", pkg: "", typ: $funcType([$Int], [StructField], false)}, {prop: "FieldByIndex", name: "FieldByIndex", pkg: "", typ: $funcType([sliceType$13], [StructField], false)}, {prop: "FieldByName", name: "FieldByName", pkg: "", typ: $funcType([$String], [StructField, $Bool], false)}, {prop: "FieldByNameFunc", name: "FieldByNameFunc", pkg: "", typ: $funcType([funcType$3], [StructField, $Bool], false)}, {prop: "In", name: "In", pkg: "", typ: $funcType([$Int], [Type], false)}, {prop: "Key", name: "Key", pkg: "", typ: $funcType([], [Type], false)}, {prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "NumField", name: "NumField", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "NumIn", name: "NumIn", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "NumOut", name: "NumOut", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Out", name: "Out", pkg: "", typ: $funcType([$Int], [Type], false)}, {prop: "Implements", name: "Implements", pkg: "", typ: $funcType([Type], [$Bool], false)}, {prop: "AssignableTo", name: "AssignableTo", pkg: "", typ: $funcType([Type], [$Bool], false)}, {prop: "ConvertibleTo", name: "ConvertibleTo", pkg: "", typ: $funcType([Type], [$Bool], false)}];
	ChanDir.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
	ptrType$9.methods = [{prop: "Method", name: "Method", pkg: "", typ: $funcType([$Int], [Method], false)}, {prop: "NumMethod", name: "NumMethod", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "MethodByName", name: "MethodByName", pkg: "", typ: $funcType([$String], [Method, $Bool], false)}];
	ptrType$18.methods = [{prop: "offset", name: "offset", pkg: "reflect", typ: $funcType([], [$Uintptr], false)}, {prop: "embedded", name: "embedded", pkg: "reflect", typ: $funcType([], [$Bool], false)}];
	ptrType$11.methods = [{prop: "Field", name: "Field", pkg: "", typ: $funcType([$Int], [StructField], false)}, {prop: "FieldByIndex", name: "FieldByIndex", pkg: "", typ: $funcType([sliceType$13], [StructField], false)}, {prop: "FieldByNameFunc", name: "FieldByNameFunc", pkg: "", typ: $funcType([funcType$3], [StructField, $Bool], false)}, {prop: "FieldByName", name: "FieldByName", pkg: "", typ: $funcType([$String], [StructField, $Bool], false)}];
	StructTag.methods = [{prop: "Get", name: "Get", pkg: "", typ: $funcType([$String], [$String], false)}, {prop: "Lookup", name: "Lookup", pkg: "", typ: $funcType([$String], [$String, $Bool], false)}];
	Value.methods = [{prop: "object", name: "object", pkg: "reflect", typ: $funcType([], [ptrType$2], false)}, {prop: "assignTo", name: "assignTo", pkg: "reflect", typ: $funcType([$String, ptrType$1, $UnsafePointer], [Value], false)}, {prop: "Cap", name: "Cap", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Elem", name: "Elem", pkg: "", typ: $funcType([], [Value], false)}, {prop: "Field", name: "Field", pkg: "", typ: $funcType([$Int], [Value], false)}, {prop: "Index", name: "Index", pkg: "", typ: $funcType([$Int], [Value], false)}, {prop: "InterfaceData", name: "InterfaceData", pkg: "", typ: $funcType([], [arrayType$8], false)}, {prop: "IsNil", name: "IsNil", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Pointer", name: "Pointer", pkg: "", typ: $funcType([], [$Uintptr], false)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([Value], [], false)}, {prop: "SetBytes", name: "SetBytes", pkg: "", typ: $funcType([sliceType$15], [], false)}, {prop: "SetCap", name: "SetCap", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "SetLen", name: "SetLen", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Slice", name: "Slice", pkg: "", typ: $funcType([$Int, $Int], [Value], false)}, {prop: "Slice3", name: "Slice3", pkg: "", typ: $funcType([$Int, $Int, $Int], [Value], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [], false)}, {prop: "call", name: "call", pkg: "reflect", typ: $funcType([$String, sliceType$9], [sliceType$9], false)}, {prop: "pointer", name: "pointer", pkg: "reflect", typ: $funcType([], [$UnsafePointer], false)}, {prop: "Addr", name: "Addr", pkg: "", typ: $funcType([], [Value], false)}, {prop: "Bool", name: "Bool", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Bytes", name: "Bytes", pkg: "", typ: $funcType([], [sliceType$15], false)}, {prop: "runes", name: "runes", pkg: "reflect", typ: $funcType([], [sliceType$18], false)}, {prop: "CanAddr", name: "CanAddr", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "CanSet", name: "CanSet", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Call", name: "Call", pkg: "", typ: $funcType([sliceType$9], [sliceType$9], false)}, {prop: "CallSlice", name: "CallSlice", pkg: "", typ: $funcType([sliceType$9], [sliceType$9], false)}, {prop: "Complex", name: "Complex", pkg: "", typ: $funcType([], [$Complex128], false)}, {prop: "FieldByIndex", name: "FieldByIndex", pkg: "", typ: $funcType([sliceType$13], [Value], false)}, {prop: "FieldByName", name: "FieldByName", pkg: "", typ: $funcType([$String], [Value], false)}, {prop: "FieldByNameFunc", name: "FieldByNameFunc", pkg: "", typ: $funcType([funcType$3], [Value], false)}, {prop: "Float", name: "Float", pkg: "", typ: $funcType([], [$Float64], false)}, {prop: "Int", name: "Int", pkg: "", typ: $funcType([], [$Int64], false)}, {prop: "CanInterface", name: "CanInterface", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Interface", name: "Interface", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "IsValid", name: "IsValid", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Kind", name: "Kind", pkg: "", typ: $funcType([], [Kind], false)}, {prop: "MapIndex", name: "MapIndex", pkg: "", typ: $funcType([Value], [Value], false)}, {prop: "MapKeys", name: "MapKeys", pkg: "", typ: $funcType([], [sliceType$9], false)}, {prop: "MapRange", name: "MapRange", pkg: "", typ: $funcType([], [ptrType$19], false)}, {prop: "Method", name: "Method", pkg: "", typ: $funcType([$Int], [Value], false)}, {prop: "NumMethod", name: "NumMethod", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "MethodByName", name: "MethodByName", pkg: "", typ: $funcType([$String], [Value], false)}, {prop: "NumField", name: "NumField", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "OverflowComplex", name: "OverflowComplex", pkg: "", typ: $funcType([$Complex128], [$Bool], false)}, {prop: "OverflowFloat", name: "OverflowFloat", pkg: "", typ: $funcType([$Float64], [$Bool], false)}, {prop: "OverflowInt", name: "OverflowInt", pkg: "", typ: $funcType([$Int64], [$Bool], false)}, {prop: "OverflowUint", name: "OverflowUint", pkg: "", typ: $funcType([$Uint64], [$Bool], false)}, {prop: "Recv", name: "Recv", pkg: "", typ: $funcType([], [Value, $Bool], false)}, {prop: "recv", name: "recv", pkg: "reflect", typ: $funcType([$Bool], [Value, $Bool], false)}, {prop: "Send", name: "Send", pkg: "", typ: $funcType([Value], [], false)}, {prop: "send", name: "send", pkg: "reflect", typ: $funcType([Value, $Bool], [$Bool], false)}, {prop: "SetBool", name: "SetBool", pkg: "", typ: $funcType([$Bool], [], false)}, {prop: "setRunes", name: "setRunes", pkg: "reflect", typ: $funcType([sliceType$18], [], false)}, {prop: "SetComplex", name: "SetComplex", pkg: "", typ: $funcType([$Complex128], [], false)}, {prop: "SetFloat", name: "SetFloat", pkg: "", typ: $funcType([$Float64], [], false)}, {prop: "SetInt", name: "SetInt", pkg: "", typ: $funcType([$Int64], [], false)}, {prop: "SetMapIndex", name: "SetMapIndex", pkg: "", typ: $funcType([Value, Value], [], false)}, {prop: "SetUint", name: "SetUint", pkg: "", typ: $funcType([$Uint64], [], false)}, {prop: "SetPointer", name: "SetPointer", pkg: "", typ: $funcType([$UnsafePointer], [], false)}, {prop: "SetString", name: "SetString", pkg: "", typ: $funcType([$String], [], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "TryRecv", name: "TryRecv", pkg: "", typ: $funcType([], [Value, $Bool], false)}, {prop: "TrySend", name: "TrySend", pkg: "", typ: $funcType([Value], [$Bool], false)}, {prop: "Type", name: "Type", pkg: "", typ: $funcType([], [Type], false)}, {prop: "Uint", name: "Uint", pkg: "", typ: $funcType([], [$Uint64], false)}, {prop: "UnsafeAddr", name: "UnsafeAddr", pkg: "", typ: $funcType([], [$Uintptr], false)}, {prop: "Convert", name: "Convert", pkg: "", typ: $funcType([Type], [Value], false)}];
	flag.methods = [{prop: "kind", name: "kind", pkg: "reflect", typ: $funcType([], [Kind], false)}, {prop: "ro", name: "ro", pkg: "reflect", typ: $funcType([], [flag], false)}, {prop: "mustBe", name: "mustBe", pkg: "reflect", typ: $funcType([Kind], [], false)}, {prop: "mustBeExported", name: "mustBeExported", pkg: "reflect", typ: $funcType([], [], false)}, {prop: "mustBeAssignable", name: "mustBeAssignable", pkg: "reflect", typ: $funcType([], [], false)}];
	ptrType$20.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
	ptrType$19.methods = [{prop: "Key", name: "Key", pkg: "", typ: $funcType([], [Value], false)}, {prop: "Value", name: "Value", pkg: "", typ: $funcType([], [Value], false)}, {prop: "Next", name: "Next", pkg: "", typ: $funcType([], [$Bool], false)}];
	uncommonType.init("reflect", [{prop: "pkgPath", name: "pkgPath", embedded: false, exported: false, typ: nameOff, tag: ""}, {prop: "mcount", name: "mcount", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "xcount", name: "xcount", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "moff", name: "moff", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "_methods", name: "_methods", embedded: false, exported: false, typ: sliceType$5, tag: ""}]);
	funcType.init("reflect", [{prop: "rtype", name: "rtype", embedded: true, exported: false, typ: rtype, tag: "reflect:\"func\""}, {prop: "inCount", name: "inCount", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "outCount", name: "outCount", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "_in", name: "_in", embedded: false, exported: false, typ: sliceType$2, tag: ""}, {prop: "_out", name: "_out", embedded: false, exported: false, typ: sliceType$2, tag: ""}]);
	name.init("reflect", [{prop: "bytes", name: "bytes", embedded: false, exported: false, typ: ptrType$4, tag: ""}]);
	nameData.init("reflect", [{prop: "name", name: "name", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "tag", name: "tag", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "exported", name: "exported", embedded: false, exported: false, typ: $Bool, tag: ""}]);
	mapIter.init("reflect", [{prop: "t", name: "t", embedded: false, exported: false, typ: Type, tag: ""}, {prop: "m", name: "m", embedded: false, exported: false, typ: ptrType$2, tag: ""}, {prop: "keys", name: "keys", embedded: false, exported: false, typ: ptrType$2, tag: ""}, {prop: "i", name: "i", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "last", name: "last", embedded: false, exported: false, typ: ptrType$2, tag: ""}]);
	Type.init([{prop: "Align", name: "Align", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "AssignableTo", name: "AssignableTo", pkg: "", typ: $funcType([Type], [$Bool], false)}, {prop: "Bits", name: "Bits", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "ChanDir", name: "ChanDir", pkg: "", typ: $funcType([], [ChanDir], false)}, {prop: "Comparable", name: "Comparable", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "ConvertibleTo", name: "ConvertibleTo", pkg: "", typ: $funcType([Type], [$Bool], false)}, {prop: "Elem", name: "Elem", pkg: "", typ: $funcType([], [Type], false)}, {prop: "Field", name: "Field", pkg: "", typ: $funcType([$Int], [StructField], false)}, {prop: "FieldAlign", name: "FieldAlign", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "FieldByIndex", name: "FieldByIndex", pkg: "", typ: $funcType([sliceType$13], [StructField], false)}, {prop: "FieldByName", name: "FieldByName", pkg: "", typ: $funcType([$String], [StructField, $Bool], false)}, {prop: "FieldByNameFunc", name: "FieldByNameFunc", pkg: "", typ: $funcType([funcType$3], [StructField, $Bool], false)}, {prop: "Implements", name: "Implements", pkg: "", typ: $funcType([Type], [$Bool], false)}, {prop: "In", name: "In", pkg: "", typ: $funcType([$Int], [Type], false)}, {prop: "IsVariadic", name: "IsVariadic", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Key", name: "Key", pkg: "", typ: $funcType([], [Type], false)}, {prop: "Kind", name: "Kind", pkg: "", typ: $funcType([], [Kind], false)}, {prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Method", name: "Method", pkg: "", typ: $funcType([$Int], [Method], false)}, {prop: "MethodByName", name: "MethodByName", pkg: "", typ: $funcType([$String], [Method, $Bool], false)}, {prop: "Name", name: "Name", pkg: "", typ: $funcType([], [$String], false)}, {prop: "NumField", name: "NumField", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "NumIn", name: "NumIn", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "NumMethod", name: "NumMethod", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "NumOut", name: "NumOut", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Out", name: "Out", pkg: "", typ: $funcType([$Int], [Type], false)}, {prop: "PkgPath", name: "PkgPath", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Uintptr], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "common", name: "common", pkg: "reflect", typ: $funcType([], [ptrType$1], false)}, {prop: "uncommon", name: "uncommon", pkg: "reflect", typ: $funcType([], [ptrType$5], false)}]);
	rtype.init("reflect", [{prop: "size", name: "size", embedded: false, exported: false, typ: $Uintptr, tag: ""}, {prop: "ptrdata", name: "ptrdata", embedded: false, exported: false, typ: $Uintptr, tag: ""}, {prop: "hash", name: "hash", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "tflag", name: "tflag", embedded: false, exported: false, typ: tflag, tag: ""}, {prop: "align", name: "align", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "fieldAlign", name: "fieldAlign", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "kind", name: "kind", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "alg", name: "alg", embedded: false, exported: false, typ: ptrType$3, tag: ""}, {prop: "gcdata", name: "gcdata", embedded: false, exported: false, typ: ptrType$4, tag: ""}, {prop: "str", name: "str", embedded: false, exported: false, typ: nameOff, tag: ""}, {prop: "ptrToThis", name: "ptrToThis", embedded: false, exported: false, typ: typeOff, tag: ""}]);
	typeAlg.init("reflect", [{prop: "hash", name: "hash", embedded: false, exported: false, typ: funcType$4, tag: ""}, {prop: "equal", name: "equal", embedded: false, exported: false, typ: funcType$5, tag: ""}]);
	method.init("reflect", [{prop: "name", name: "name", embedded: false, exported: false, typ: nameOff, tag: ""}, {prop: "mtyp", name: "mtyp", embedded: false, exported: false, typ: typeOff, tag: ""}, {prop: "ifn", name: "ifn", embedded: false, exported: false, typ: textOff, tag: ""}, {prop: "tfn", name: "tfn", embedded: false, exported: false, typ: textOff, tag: ""}]);
	arrayType.init("reflect", [{prop: "rtype", name: "rtype", embedded: true, exported: false, typ: rtype, tag: ""}, {prop: "elem", name: "elem", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "slice", name: "slice", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "len", name: "len", embedded: false, exported: false, typ: $Uintptr, tag: ""}]);
	chanType.init("reflect", [{prop: "rtype", name: "rtype", embedded: true, exported: false, typ: rtype, tag: ""}, {prop: "elem", name: "elem", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "dir", name: "dir", embedded: false, exported: false, typ: $Uintptr, tag: ""}]);
	imethod.init("reflect", [{prop: "name", name: "name", embedded: false, exported: false, typ: nameOff, tag: ""}, {prop: "typ", name: "typ", embedded: false, exported: false, typ: typeOff, tag: ""}]);
	interfaceType.init("reflect", [{prop: "rtype", name: "rtype", embedded: true, exported: false, typ: rtype, tag: ""}, {prop: "pkgPath", name: "pkgPath", embedded: false, exported: false, typ: name, tag: ""}, {prop: "methods", name: "methods", embedded: false, exported: false, typ: sliceType$6, tag: ""}]);
	mapType.init("reflect", [{prop: "rtype", name: "rtype", embedded: true, exported: false, typ: rtype, tag: ""}, {prop: "key", name: "key", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "elem", name: "elem", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "bucket", name: "bucket", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "keysize", name: "keysize", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "valuesize", name: "valuesize", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "bucketsize", name: "bucketsize", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "flags", name: "flags", embedded: false, exported: false, typ: $Uint32, tag: ""}]);
	ptrType.init("reflect", [{prop: "rtype", name: "rtype", embedded: true, exported: false, typ: rtype, tag: ""}, {prop: "elem", name: "elem", embedded: false, exported: false, typ: ptrType$1, tag: ""}]);
	sliceType.init("reflect", [{prop: "rtype", name: "rtype", embedded: true, exported: false, typ: rtype, tag: ""}, {prop: "elem", name: "elem", embedded: false, exported: false, typ: ptrType$1, tag: ""}]);
	structField.init("reflect", [{prop: "name", name: "name", embedded: false, exported: false, typ: name, tag: ""}, {prop: "typ", name: "typ", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "offsetEmbed", name: "offsetEmbed", embedded: false, exported: false, typ: $Uintptr, tag: ""}]);
	structType.init("reflect", [{prop: "rtype", name: "rtype", embedded: true, exported: false, typ: rtype, tag: ""}, {prop: "pkgPath", name: "pkgPath", embedded: false, exported: false, typ: name, tag: ""}, {prop: "fields", name: "fields", embedded: false, exported: false, typ: sliceType$7, tag: ""}]);
	Method.init("", [{prop: "Name", name: "Name", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "PkgPath", name: "PkgPath", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Type", name: "Type", embedded: false, exported: true, typ: Type, tag: ""}, {prop: "Func", name: "Func", embedded: false, exported: true, typ: Value, tag: ""}, {prop: "Index", name: "Index", embedded: false, exported: true, typ: $Int, tag: ""}]);
	StructField.init("", [{prop: "Name", name: "Name", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "PkgPath", name: "PkgPath", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Type", name: "Type", embedded: false, exported: true, typ: Type, tag: ""}, {prop: "Tag", name: "Tag", embedded: false, exported: true, typ: StructTag, tag: ""}, {prop: "Offset", name: "Offset", embedded: false, exported: true, typ: $Uintptr, tag: ""}, {prop: "Index", name: "Index", embedded: false, exported: true, typ: sliceType$13, tag: ""}, {prop: "Anonymous", name: "Anonymous", embedded: false, exported: true, typ: $Bool, tag: ""}]);
	fieldScan.init("reflect", [{prop: "typ", name: "typ", embedded: false, exported: false, typ: ptrType$11, tag: ""}, {prop: "index", name: "index", embedded: false, exported: false, typ: sliceType$13, tag: ""}]);
	Value.init("reflect", [{prop: "typ", name: "typ", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "ptr", name: "ptr", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}, {prop: "flag", name: "flag", embedded: true, exported: false, typ: flag, tag: ""}]);
	ValueError.init("", [{prop: "Method", name: "Method", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Kind", name: "Kind", embedded: false, exported: true, typ: Kind, tag: ""}]);
	MapIter.init("reflect", [{prop: "m", name: "m", embedded: false, exported: false, typ: Value, tag: ""}, {prop: "it", name: "it", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = js.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = math.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = runtime.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = strconv.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = sync.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = unicode.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = utf8.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		nameOffList = sliceType$1.nil;
		typeOffList = sliceType$2.nil;
		initialized = false;
		uncommonTypeMap = {};
		nameMap = {};
		callHelper = $assertType($internalize($call, $emptyInterface), funcType$1);
		selectHelper = $assertType($internalize($select, $emptyInterface), funcType$1);
		jsObjectPtr = reflectType($jsObjectPtr);
		kindNames = new sliceType$4(["invalid", "bool", "int", "int8", "int16", "int32", "int64", "uint", "uint8", "uint16", "uint32", "uint64", "uintptr", "float32", "float64", "complex64", "complex128", "array", "chan", "func", "interface", "map", "ptr", "slice", "string", "struct", "unsafe.Pointer"]);
		uint8Type = $assertType(TypeOf(new $Uint8(0)), ptrType$1);
		$r = init(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["encoding/binary"]=(function(){var $pkg={},$init,errors,io,math,reflect,bigEndian,sliceType,overflow;	errors = $packages["errors"];
	io = $packages["io"];
	math = $packages["math"];
	reflect = $packages["reflect"];
	bigEndian = $pkg.bigEndian = $newType(0, $kindStruct, "binary.bigEndian", true, "encoding/binary", false, function() {
		this.$val = this;
		if (arguments.length === 0) {
			return;
		}
	});
	sliceType = $sliceType($Uint8);
	bigEndian.ptr.prototype.Uint16 = function(b) {
		var b;
		$unused((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]));
		return ((((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]) << 16 >>> 16)) | ((((0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]) << 16 >>> 16)) << 8 << 16 >>> 16)) >>> 0;
	};
	bigEndian.prototype.Uint16 = function(b) { return this.$val.Uint16(b); };
	bigEndian.ptr.prototype.PutUint16 = function(b, v) {
		var b, v;
		$unused((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]));
		(0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0] = (((v >>> 8 << 16 >>> 16) << 24 >>> 24)));
		(1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1] = ((v << 24 >>> 24)));
	};
	bigEndian.prototype.PutUint16 = function(b, v) { return this.$val.PutUint16(b, v); };
	bigEndian.ptr.prototype.Uint32 = function(b) {
		var b;
		$unused((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]));
		return ((((((((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]) >>> 0)) | ((((2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]) >>> 0)) << 8 >>> 0)) >>> 0) | ((((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]) >>> 0)) << 16 >>> 0)) >>> 0) | ((((0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]) >>> 0)) << 24 >>> 0)) >>> 0;
	};
	bigEndian.prototype.Uint32 = function(b) { return this.$val.Uint32(b); };
	bigEndian.ptr.prototype.PutUint32 = function(b, v) {
		var b, v;
		$unused((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]));
		(0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0] = (((v >>> 24 >>> 0) << 24 >>> 24)));
		(1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1] = (((v >>> 16 >>> 0) << 24 >>> 24)));
		(2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2] = (((v >>> 8 >>> 0) << 24 >>> 24)));
		(3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3] = ((v << 24 >>> 24)));
	};
	bigEndian.prototype.PutUint32 = function(b, v) { return this.$val.PutUint32(b, v); };
	bigEndian.ptr.prototype.Uint64 = function(b) {
		var b, x, x$1, x$10, x$11, x$12, x$13, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		$unused((7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]));
		return (x = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = (new $Uint64(0, (7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]))), x$7 = $shiftLeft64((new $Uint64(0, (6 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 6]))), 8), new $Uint64(x$6.$high | x$7.$high, (x$6.$low | x$7.$low) >>> 0)), x$8 = $shiftLeft64((new $Uint64(0, (5 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 5]))), 16), new $Uint64(x$5.$high | x$8.$high, (x$5.$low | x$8.$low) >>> 0)), x$9 = $shiftLeft64((new $Uint64(0, (4 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 4]))), 24), new $Uint64(x$4.$high | x$9.$high, (x$4.$low | x$9.$low) >>> 0)), x$10 = $shiftLeft64((new $Uint64(0, (3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]))), 32), new $Uint64(x$3.$high | x$10.$high, (x$3.$low | x$10.$low) >>> 0)), x$11 = $shiftLeft64((new $Uint64(0, (2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]))), 40), new $Uint64(x$2.$high | x$11.$high, (x$2.$low | x$11.$low) >>> 0)), x$12 = $shiftLeft64((new $Uint64(0, (1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]))), 48), new $Uint64(x$1.$high | x$12.$high, (x$1.$low | x$12.$low) >>> 0)), x$13 = $shiftLeft64((new $Uint64(0, (0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]))), 56), new $Uint64(x.$high | x$13.$high, (x.$low | x$13.$low) >>> 0));
	};
	bigEndian.prototype.Uint64 = function(b) { return this.$val.Uint64(b); };
	bigEndian.ptr.prototype.PutUint64 = function(b, v) {
		var b, v;
		$unused((7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]));
		(0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0] = (($shiftRightUint64(v, 56).$low << 24 >>> 24)));
		(1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1] = (($shiftRightUint64(v, 48).$low << 24 >>> 24)));
		(2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2] = (($shiftRightUint64(v, 40).$low << 24 >>> 24)));
		(3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3] = (($shiftRightUint64(v, 32).$low << 24 >>> 24)));
		(4 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 4] = (($shiftRightUint64(v, 24).$low << 24 >>> 24)));
		(5 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 5] = (($shiftRightUint64(v, 16).$low << 24 >>> 24)));
		(6 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 6] = (($shiftRightUint64(v, 8).$low << 24 >>> 24)));
		(7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7] = ((v.$low << 24 >>> 24)));
	};
	bigEndian.prototype.PutUint64 = function(b, v) { return this.$val.PutUint64(b, v); };
	bigEndian.ptr.prototype.String = function() {
		return "BigEndian";
	};
	bigEndian.prototype.String = function() { return this.$val.String(); };
	bigEndian.ptr.prototype.GoString = function() {
		return "binary.BigEndian";
	};
	bigEndian.prototype.GoString = function() { return this.$val.GoString(); };
	bigEndian.methods = [{prop: "Uint16", name: "Uint16", pkg: "", typ: $funcType([sliceType], [$Uint16], false)}, {prop: "PutUint16", name: "PutUint16", pkg: "", typ: $funcType([sliceType, $Uint16], [], false)}, {prop: "Uint32", name: "Uint32", pkg: "", typ: $funcType([sliceType], [$Uint32], false)}, {prop: "PutUint32", name: "PutUint32", pkg: "", typ: $funcType([sliceType, $Uint32], [], false)}, {prop: "Uint64", name: "Uint64", pkg: "", typ: $funcType([sliceType], [$Uint64], false)}, {prop: "PutUint64", name: "PutUint64", pkg: "", typ: $funcType([sliceType, $Uint64], [], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "GoString", name: "GoString", pkg: "", typ: $funcType([], [$String], false)}];
	bigEndian.init("", []);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = io.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = math.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = reflect.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$pkg.BigEndian = new bigEndian.ptr();
		overflow = errors.New("binary: varint overflows a 64-bit integer");
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["encoding/base64"]=(function(){var $pkg={},$init,binary,io,strconv,Encoding,encoder,CorruptInputError,arrayType,arrayType$1,sliceType,ptrType,arrayType$2,arrayType$3,arrayType$4,ptrType$1,NewEncoding,NewEncoder;	binary = $packages["encoding/binary"];
	io = $packages["io"];
	strconv = $packages["strconv"];
	Encoding = $pkg.Encoding = $newType(0, $kindStruct, "base64.Encoding", true, "encoding/base64", true, function(encode_, decodeMap_, padChar_, strict_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.encode = arrayType.zero();
			this.decodeMap = arrayType$1.zero();
			this.padChar = 0;
			this.strict = false;
			return;
		}
		this.encode = encode_;
		this.decodeMap = decodeMap_;
		this.padChar = padChar_;
		this.strict = strict_;
	});
	encoder = $pkg.encoder = $newType(0, $kindStruct, "base64.encoder", true, "encoding/base64", false, function(err_, enc_, w_, buf_, nbuf_, out_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.err = $ifaceNil;
			this.enc = ptrType.nil;
			this.w = $ifaceNil;
			this.buf = arrayType$2.zero();
			this.nbuf = 0;
			this.out = arrayType$3.zero();
			return;
		}
		this.err = err_;
		this.enc = enc_;
		this.w = w_;
		this.buf = buf_;
		this.nbuf = nbuf_;
		this.out = out_;
	});
	CorruptInputError = $pkg.CorruptInputError = $newType(8, $kindInt64, "base64.CorruptInputError", true, "encoding/base64", true, null);
	arrayType = $arrayType($Uint8, 64);
	arrayType$1 = $arrayType($Uint8, 256);
	sliceType = $sliceType($Uint8);
	ptrType = $ptrType(Encoding);
	arrayType$2 = $arrayType($Uint8, 3);
	arrayType$3 = $arrayType($Uint8, 1024);
	arrayType$4 = $arrayType($Uint8, 4);
	ptrType$1 = $ptrType(encoder);
	NewEncoding = function(encoder$1) {
		var e, encoder$1, i, i$1, i$2, x, x$1, x$2;
		if (!((encoder$1.length === 64))) {
			$panic(new $String("encoding alphabet is not 64-bytes long"));
		}
		i = 0;
		while (true) {
			if (!(i < encoder$1.length)) { break; }
			if ((encoder$1.charCodeAt(i) === 10) || (encoder$1.charCodeAt(i) === 13)) {
				$panic(new $String("encoding alphabet contains newline character"));
			}
			i = i + (1) >> 0;
		}
		e = new Encoding.ptr(arrayType.zero(), arrayType$1.zero(), 0, false);
		e.padChar = 61;
		$copyString(new sliceType(e.encode), encoder$1);
		i$1 = 0;
		while (true) {
			if (!(i$1 < 256)) { break; }
			(x = e.decodeMap, ((i$1 < 0 || i$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i$1] = 255));
			i$1 = i$1 + (1) >> 0;
		}
		i$2 = 0;
		while (true) {
			if (!(i$2 < encoder$1.length)) { break; }
			(x$1 = e.decodeMap, x$2 = encoder$1.charCodeAt(i$2), ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2] = ((i$2 << 24 >>> 24))));
			i$2 = i$2 + (1) >> 0;
		}
		return e;
	};
	$pkg.NewEncoding = NewEncoding;
	Encoding.ptr.prototype.WithPadding = function(padding) {
		var enc, i, padding, x;
		enc = this;
		if ((padding === 13) || (padding === 10) || padding > 255) {
			$panic(new $String("invalid padding"));
		}
		i = 0;
		while (true) {
			if (!(i < 64)) { break; }
			if ((((x = enc.encode, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])) >> 0)) === padding) {
				$panic(new $String("padding contained in alphabet"));
			}
			i = i + (1) >> 0;
		}
		enc.padChar = padding;
		return enc;
	};
	Encoding.prototype.WithPadding = function(padding) { return this.$val.WithPadding(padding); };
	Encoding.ptr.prototype.Strict = function() {
		var enc;
		enc = this;
		enc.strict = true;
		return enc;
	};
	Encoding.prototype.Strict = function() { return this.$val.Strict(); };
	Encoding.ptr.prototype.Encode = function(dst, src) {
		var _1, _q, _tmp, _tmp$1, di, dst, enc, n, remain, si, src, val, val$1, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		enc = this;
		if (src.$length === 0) {
			return;
		}
		_tmp = 0;
		_tmp$1 = 0;
		di = _tmp;
		si = _tmp$1;
		n = $imul(((_q = src.$length / 3, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"))), 3);
		while (true) {
			if (!(si < n)) { break; }
			val = (((((((x = si + 0 >> 0, ((x < 0 || x >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x])) >>> 0)) << 16 >>> 0) | ((((x$1 = si + 1 >> 0, ((x$1 < 0 || x$1 >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x$1])) >>> 0)) << 8 >>> 0)) >>> 0) | (((x$2 = si + 2 >> 0, ((x$2 < 0 || x$2 >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x$2])) >>> 0))) >>> 0;
			(x$5 = di + 0 >> 0, ((x$5 < 0 || x$5 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$5] = (x$3 = enc.encode, x$4 = ((val >>> 18 >>> 0) & 63) >>> 0, ((x$4 < 0 || x$4 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[x$4]))));
			(x$8 = di + 1 >> 0, ((x$8 < 0 || x$8 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$8] = (x$6 = enc.encode, x$7 = ((val >>> 12 >>> 0) & 63) >>> 0, ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7]))));
			(x$11 = di + 2 >> 0, ((x$11 < 0 || x$11 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$11] = (x$9 = enc.encode, x$10 = ((val >>> 6 >>> 0) & 63) >>> 0, ((x$10 < 0 || x$10 >= x$9.length) ? ($throwRuntimeError("index out of range"), undefined) : x$9[x$10]))));
			(x$14 = di + 3 >> 0, ((x$14 < 0 || x$14 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$14] = (x$12 = enc.encode, x$13 = (val & 63) >>> 0, ((x$13 < 0 || x$13 >= x$12.length) ? ($throwRuntimeError("index out of range"), undefined) : x$12[x$13]))));
			si = si + (3) >> 0;
			di = di + (4) >> 0;
		}
		remain = src.$length - si >> 0;
		if (remain === 0) {
			return;
		}
		val$1 = (((x$15 = si + 0 >> 0, ((x$15 < 0 || x$15 >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x$15])) >>> 0)) << 16 >>> 0;
		if (remain === 2) {
			val$1 = (val$1 | (((((x$16 = si + 1 >> 0, ((x$16 < 0 || x$16 >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x$16])) >>> 0)) << 8 >>> 0))) >>> 0;
		}
		(x$19 = di + 0 >> 0, ((x$19 < 0 || x$19 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$19] = (x$17 = enc.encode, x$18 = ((val$1 >>> 18 >>> 0) & 63) >>> 0, ((x$18 < 0 || x$18 >= x$17.length) ? ($throwRuntimeError("index out of range"), undefined) : x$17[x$18]))));
		(x$22 = di + 1 >> 0, ((x$22 < 0 || x$22 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$22] = (x$20 = enc.encode, x$21 = ((val$1 >>> 12 >>> 0) & 63) >>> 0, ((x$21 < 0 || x$21 >= x$20.length) ? ($throwRuntimeError("index out of range"), undefined) : x$20[x$21]))));
		_1 = remain;
		if (_1 === (2)) {
			(x$25 = di + 2 >> 0, ((x$25 < 0 || x$25 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$25] = (x$23 = enc.encode, x$24 = ((val$1 >>> 6 >>> 0) & 63) >>> 0, ((x$24 < 0 || x$24 >= x$23.length) ? ($throwRuntimeError("index out of range"), undefined) : x$23[x$24]))));
			if (!((enc.padChar === -1))) {
				(x$26 = di + 3 >> 0, ((x$26 < 0 || x$26 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$26] = ((enc.padChar << 24 >>> 24))));
			}
		} else if (_1 === (1)) {
			if (!((enc.padChar === -1))) {
				(x$27 = di + 2 >> 0, ((x$27 < 0 || x$27 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$27] = ((enc.padChar << 24 >>> 24))));
				(x$28 = di + 3 >> 0, ((x$28 < 0 || x$28 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$28] = ((enc.padChar << 24 >>> 24))));
			}
		}
	};
	Encoding.prototype.Encode = function(dst, src) { return this.$val.Encode(dst, src); };
	Encoding.ptr.prototype.EncodeToString = function(src) {
		var buf, enc, src;
		enc = this;
		buf = $makeSlice(sliceType, enc.EncodedLen(src.$length));
		enc.Encode(buf, src);
		return ($bytesToString(buf));
	};
	Encoding.prototype.EncodeToString = function(src) { return this.$val.EncodeToString(src); };
	encoder.ptr.prototype.Write = function(p) {
		var _q, _r, _r$1, _r$2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, _tuple$1, e, err, i, i$1, n, nn, p, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; e = $f.e; err = $f.err; i = $f.i; i$1 = $f.i$1; n = $f.n; nn = $f.nn; p = $f.p; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		e = this;
		if (!($interfaceIsEqual(e.err, $ifaceNil))) {
			_tmp = 0;
			_tmp$1 = e.err;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
		}
		/* */ if (e.nbuf > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (e.nbuf > 0) { */ case 1:
			i = 0;
			i = 0;
			while (true) {
				if (!(i < p.$length && e.nbuf < 3)) { break; }
				(x = e.buf, x$1 = e.nbuf, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1] = ((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i])));
				e.nbuf = e.nbuf + (1) >> 0;
				i = i + (1) >> 0;
			}
			n = n + (i) >> 0;
			p = $subslice(p, i);
			if (e.nbuf < 3) {
				$s = -1; return [n, err];
			}
			e.enc.Encode(new sliceType(e.out), new sliceType(e.buf));
			_r = e.w.Write($subslice(new sliceType(e.out), 0, 4)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			e.err = _tuple[1];
			if (!($interfaceIsEqual(e.err, $ifaceNil))) {
				_tmp$2 = n;
				_tmp$3 = e.err;
				n = _tmp$2;
				err = _tmp$3;
				$s = -1; return [n, err];
			}
			e.nbuf = 0;
		/* } */ case 2:
		/* while (true) { */ case 4:
			/* if (!(p.$length >= 3)) { break; } */ if(!(p.$length >= 3)) { $s = 5; continue; }
			nn = 768;
			if (nn > p.$length) {
				nn = p.$length;
				nn = nn - ((_r$1 = nn % 3, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero"))) >> 0;
			}
			e.enc.Encode(new sliceType(e.out), $subslice(p, 0, nn));
			_r$2 = e.w.Write($subslice(new sliceType(e.out), 0, ($imul((_q = nn / 3, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")), 4)))); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$1 = _r$2;
			e.err = _tuple$1[1];
			if (!($interfaceIsEqual(e.err, $ifaceNil))) {
				_tmp$4 = n;
				_tmp$5 = e.err;
				n = _tmp$4;
				err = _tmp$5;
				$s = -1; return [n, err];
			}
			n = n + (nn) >> 0;
			p = $subslice(p, nn);
		/* } */ $s = 4; continue; case 5:
		i$1 = 0;
		while (true) {
			if (!(i$1 < p.$length)) { break; }
			(x$2 = e.buf, ((i$1 < 0 || i$1 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i$1] = ((i$1 < 0 || i$1 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i$1])));
			i$1 = i$1 + (1) >> 0;
		}
		e.nbuf = p.$length;
		n = n + (p.$length) >> 0;
		$s = -1; return [n, err];
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.Write }; } $f._q = _q; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.e = e; $f.err = err; $f.i = i; $f.i$1 = i$1; $f.n = n; $f.nn = nn; $f.p = p; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.Write = function(p) { return this.$val.Write(p); };
	encoder.ptr.prototype.Close = function() {
		var _r, _tuple, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
		/* */ if ($interfaceIsEqual(e.err, $ifaceNil) && e.nbuf > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if ($interfaceIsEqual(e.err, $ifaceNil) && e.nbuf > 0) { */ case 1:
			e.enc.Encode(new sliceType(e.out), $subslice(new sliceType(e.buf), 0, e.nbuf));
			_r = e.w.Write($subslice(new sliceType(e.out), 0, e.enc.EncodedLen(e.nbuf))); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			e.err = _tuple[1];
			e.nbuf = 0;
		/* } */ case 2:
		$s = -1; return e.err;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.Close }; } $f._r = _r; $f._tuple = _tuple; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.Close = function() { return this.$val.Close(); };
	NewEncoder = function(enc, w) {
		var enc, w;
		return new encoder.ptr($ifaceNil, enc, w, arrayType$2.zero(), 0, arrayType$3.zero());
	};
	$pkg.NewEncoder = NewEncoder;
	Encoding.ptr.prototype.EncodedLen = function(n) {
		var _q, _q$1, enc, n;
		enc = this;
		if (enc.padChar === -1) {
			return (_q = ((($imul(n, 8)) + 5 >> 0)) / 6, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
		}
		return $imul((_q$1 = ((n + 2 >> 0)) / 3, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")), 4);
	};
	Encoding.prototype.EncodedLen = function(n) { return this.$val.EncodedLen(n); };
	CorruptInputError.prototype.Error = function() {
		var e;
		e = this;
		return "illegal base64 data at input byte " + strconv.FormatInt((new $Int64(e.$high, e.$low)), 10);
	};
	$ptrType(CorruptInputError).prototype.Error = function() { return this.$get().Error(); };
	Encoding.ptr.prototype.decodeQuantum = function(dst, src, si) {
		var _1, _2, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$27, _tmp$28, _tmp$29, _tmp$3, _tmp$30, _tmp$31, _tmp$32, _tmp$33, _tmp$34, _tmp$35, _tmp$36, _tmp$37, _tmp$38, _tmp$39, _tmp$4, _tmp$40, _tmp$41, _tmp$42, _tmp$43, _tmp$44, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, dbuf, dinc, dlen, dst, enc, err, in$1, j, n, nsi, out, si, src, val, x;
		nsi = 0;
		n = 0;
		err = $ifaceNil;
		enc = this;
		dbuf = arrayType$4.zero();
		_tmp = 3;
		_tmp$1 = 4;
		dinc = _tmp;
		dlen = _tmp$1;
		j = 0;
		while (true) {
			if (!(j < 4)) { break; }
			if (src.$length === si) {
				if ((j === 0)) {
					_tmp$2 = si;
					_tmp$3 = 0;
					_tmp$4 = $ifaceNil;
					nsi = _tmp$2;
					n = _tmp$3;
					err = _tmp$4;
					return [nsi, n, err];
				} else if (((j === 1)) || (!((enc.padChar === -1)))) {
					_tmp$5 = si;
					_tmp$6 = 0;
					_tmp$7 = (new CorruptInputError(0, (si - j >> 0)));
					nsi = _tmp$5;
					n = _tmp$6;
					err = _tmp$7;
					return [nsi, n, err];
				}
				_tmp$8 = j - 1 >> 0;
				_tmp$9 = j;
				dinc = _tmp$8;
				dlen = _tmp$9;
				break;
			}
			in$1 = ((si < 0 || si >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + si]);
			si = si + (1) >> 0;
			out = (x = enc.decodeMap, ((in$1 < 0 || in$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[in$1]));
			if (!((out === 255))) {
				((j < 0 || j >= dbuf.length) ? ($throwRuntimeError("index out of range"), undefined) : dbuf[j] = out);
				j = j + (1) >> 0;
				continue;
			}
			if ((in$1 === 10) || (in$1 === 13)) {
				j = j - (1) >> 0;
				j = j + (1) >> 0;
				continue;
			}
			if (!((((in$1 >> 0)) === enc.padChar))) {
				_tmp$10 = si;
				_tmp$11 = 0;
				_tmp$12 = (new CorruptInputError(0, (si - 1 >> 0)));
				nsi = _tmp$10;
				n = _tmp$11;
				err = _tmp$12;
				return [nsi, n, err];
			}
			_1 = j;
			if ((_1 === (0)) || (_1 === (1))) {
				_tmp$13 = si;
				_tmp$14 = 0;
				_tmp$15 = (new CorruptInputError(0, (si - 1 >> 0)));
				nsi = _tmp$13;
				n = _tmp$14;
				err = _tmp$15;
				return [nsi, n, err];
			} else if (_1 === (2)) {
				while (true) {
					if (!(si < src.$length && ((((si < 0 || si >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + si]) === 10) || (((si < 0 || si >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + si]) === 13)))) { break; }
					si = si + (1) >> 0;
				}
				if (si === src.$length) {
					_tmp$16 = si;
					_tmp$17 = 0;
					_tmp$18 = (new CorruptInputError(0, src.$length));
					nsi = _tmp$16;
					n = _tmp$17;
					err = _tmp$18;
					return [nsi, n, err];
				}
				if (!((((((si < 0 || si >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + si]) >> 0)) === enc.padChar))) {
					_tmp$19 = si;
					_tmp$20 = 0;
					_tmp$21 = (new CorruptInputError(0, (si - 1 >> 0)));
					nsi = _tmp$19;
					n = _tmp$20;
					err = _tmp$21;
					return [nsi, n, err];
				}
				si = si + (1) >> 0;
			}
			while (true) {
				if (!(si < src.$length && ((((si < 0 || si >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + si]) === 10) || (((si < 0 || si >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + si]) === 13)))) { break; }
				si = si + (1) >> 0;
			}
			if (si < src.$length) {
				err = (new CorruptInputError(0, si));
			}
			_tmp$22 = 3;
			_tmp$23 = j;
			dinc = _tmp$22;
			dlen = _tmp$23;
			break;
		}
		val = ((((((((dbuf[0] >>> 0)) << 18 >>> 0) | (((dbuf[1] >>> 0)) << 12 >>> 0)) >>> 0) | (((dbuf[2] >>> 0)) << 6 >>> 0)) >>> 0) | ((dbuf[3] >>> 0))) >>> 0;
		_tmp$24 = (((val >>> 0 >>> 0) << 24 >>> 24));
		_tmp$25 = (((val >>> 8 >>> 0) << 24 >>> 24));
		_tmp$26 = (((val >>> 16 >>> 0) << 24 >>> 24));
		dbuf[2] = _tmp$24;
		dbuf[1] = _tmp$25;
		dbuf[0] = _tmp$26;
		_2 = dlen;
		if (_2 === (4)) {
			(2 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 2] = dbuf[2]);
			dbuf[2] = 0;
			(1 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 1] = dbuf[1]);
			if (enc.strict && !((dbuf[2] === 0))) {
				_tmp$27 = si;
				_tmp$28 = 0;
				_tmp$29 = (new CorruptInputError(0, (si - 1 >> 0)));
				nsi = _tmp$27;
				n = _tmp$28;
				err = _tmp$29;
				return [nsi, n, err];
			}
			dbuf[1] = 0;
			(0 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 0] = dbuf[0]);
			if (enc.strict && (!((dbuf[1] === 0)) || !((dbuf[2] === 0)))) {
				_tmp$30 = si;
				_tmp$31 = 0;
				_tmp$32 = (new CorruptInputError(0, (si - 2 >> 0)));
				nsi = _tmp$30;
				n = _tmp$31;
				err = _tmp$32;
				return [nsi, n, err];
			}
		} else if (_2 === (3)) {
			(1 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 1] = dbuf[1]);
			if (enc.strict && !((dbuf[2] === 0))) {
				_tmp$33 = si;
				_tmp$34 = 0;
				_tmp$35 = (new CorruptInputError(0, (si - 1 >> 0)));
				nsi = _tmp$33;
				n = _tmp$34;
				err = _tmp$35;
				return [nsi, n, err];
			}
			dbuf[1] = 0;
			(0 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 0] = dbuf[0]);
			if (enc.strict && (!((dbuf[1] === 0)) || !((dbuf[2] === 0)))) {
				_tmp$36 = si;
				_tmp$37 = 0;
				_tmp$38 = (new CorruptInputError(0, (si - 2 >> 0)));
				nsi = _tmp$36;
				n = _tmp$37;
				err = _tmp$38;
				return [nsi, n, err];
			}
		} else if (_2 === (2)) {
			(0 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 0] = dbuf[0]);
			if (enc.strict && (!((dbuf[1] === 0)) || !((dbuf[2] === 0)))) {
				_tmp$39 = si;
				_tmp$40 = 0;
				_tmp$41 = (new CorruptInputError(0, (si - 2 >> 0)));
				nsi = _tmp$39;
				n = _tmp$40;
				err = _tmp$41;
				return [nsi, n, err];
			}
		}
		dst = $subslice(dst, dinc);
		_tmp$42 = si;
		_tmp$43 = dlen - 1 >> 0;
		_tmp$44 = err;
		nsi = _tmp$42;
		n = _tmp$43;
		err = _tmp$44;
		return [nsi, n, err];
	};
	Encoding.prototype.decodeQuantum = function(dst, src, si) { return this.$val.decodeQuantum(dst, src, si); };
	Encoding.ptr.prototype.DecodeString = function(s) {
		var _tuple, dbuf, enc, err, n, s;
		enc = this;
		dbuf = $makeSlice(sliceType, enc.DecodedLen(s.length));
		_tuple = enc.Decode(dbuf, (new sliceType($stringToBytes(s))));
		n = _tuple[0];
		err = _tuple[1];
		return [$subslice(dbuf, 0, n), err];
	};
	Encoding.prototype.DecodeString = function(s) { return this.$val.DecodeString(s); };
	Encoding.ptr.prototype.Decode = function(dst, src) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, dn, dn$1, dst, enc, err, n, ninc, ninc$1, ninc$2, ok, ok$1, si, src;
		n = 0;
		err = $ifaceNil;
		enc = this;
		if (src.$length === 0) {
			_tmp = 0;
			_tmp$1 = $ifaceNil;
			n = _tmp;
			err = _tmp$1;
			return [n, err];
		}
		si = 0;
		while (true) {
			if (!(false && (src.$length - si >> 0) >= 8 && (dst.$length - n >> 0) >= 8)) { break; }
			_tuple = enc.decode64($subslice(src, si));
			dn = _tuple[0];
			ok = _tuple[1];
			if (ok) {
				$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(dst, n), dn);
				n = n + (6) >> 0;
				si = si + (8) >> 0;
			} else {
				ninc = 0;
				_tuple$1 = enc.decodeQuantum($subslice(dst, n), src, si);
				si = _tuple$1[0];
				ninc = _tuple$1[1];
				err = _tuple$1[2];
				n = n + (ninc) >> 0;
				if (!($interfaceIsEqual(err, $ifaceNil))) {
					_tmp$2 = n;
					_tmp$3 = err;
					n = _tmp$2;
					err = _tmp$3;
					return [n, err];
				}
			}
		}
		while (true) {
			if (!((src.$length - si >> 0) >= 4 && (dst.$length - n >> 0) >= 4)) { break; }
			_tuple$2 = enc.decode32($subslice(src, si));
			dn$1 = _tuple$2[0];
			ok$1 = _tuple$2[1];
			if (ok$1) {
				$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(dst, n), dn$1);
				n = n + (3) >> 0;
				si = si + (4) >> 0;
			} else {
				ninc$1 = 0;
				_tuple$3 = enc.decodeQuantum($subslice(dst, n), src, si);
				si = _tuple$3[0];
				ninc$1 = _tuple$3[1];
				err = _tuple$3[2];
				n = n + (ninc$1) >> 0;
				if (!($interfaceIsEqual(err, $ifaceNil))) {
					_tmp$4 = n;
					_tmp$5 = err;
					n = _tmp$4;
					err = _tmp$5;
					return [n, err];
				}
			}
		}
		while (true) {
			if (!(si < src.$length)) { break; }
			ninc$2 = 0;
			_tuple$4 = enc.decodeQuantum($subslice(dst, n), src, si);
			si = _tuple$4[0];
			ninc$2 = _tuple$4[1];
			err = _tuple$4[2];
			n = n + (ninc$2) >> 0;
			if (!($interfaceIsEqual(err, $ifaceNil))) {
				_tmp$6 = n;
				_tmp$7 = err;
				n = _tmp$6;
				err = _tmp$7;
				return [n, err];
			}
		}
		_tmp$8 = n;
		_tmp$9 = err;
		n = _tmp$8;
		err = _tmp$9;
		return [n, err];
	};
	Encoding.prototype.Decode = function(dst, src) { return this.$val.Decode(dst, src); };
	Encoding.ptr.prototype.decode32 = function(src) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, dn, enc, n, ok, src, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7;
		dn = 0;
		ok = false;
		enc = this;
		n = 0;
		$unused((3 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 3]));
		n = (((x = enc.decodeMap, x$1 = (0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]), ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])) >>> 0));
		if (n === 255) {
			_tmp = 0;
			_tmp$1 = false;
			dn = _tmp;
			ok = _tmp$1;
			return [dn, ok];
		}
		dn = (dn | ((n << 26 >>> 0))) >>> 0;
		n = (((x$2 = enc.decodeMap, x$3 = (1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]), ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3])) >>> 0));
		if (n === 255) {
			_tmp$2 = 0;
			_tmp$3 = false;
			dn = _tmp$2;
			ok = _tmp$3;
			return [dn, ok];
		}
		dn = (dn | ((n << 20 >>> 0))) >>> 0;
		n = (((x$4 = enc.decodeMap, x$5 = (2 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 2]), ((x$5 < 0 || x$5 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[x$5])) >>> 0));
		if (n === 255) {
			_tmp$4 = 0;
			_tmp$5 = false;
			dn = _tmp$4;
			ok = _tmp$5;
			return [dn, ok];
		}
		dn = (dn | ((n << 14 >>> 0))) >>> 0;
		n = (((x$6 = enc.decodeMap, x$7 = (3 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 3]), ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7])) >>> 0));
		if (n === 255) {
			_tmp$6 = 0;
			_tmp$7 = false;
			dn = _tmp$6;
			ok = _tmp$7;
			return [dn, ok];
		}
		dn = (dn | ((n << 8 >>> 0))) >>> 0;
		_tmp$8 = dn;
		_tmp$9 = true;
		dn = _tmp$8;
		ok = _tmp$9;
		return [dn, ok];
	};
	Encoding.prototype.decode32 = function(src) { return this.$val.decode32(src); };
	Encoding.ptr.prototype.decode64 = function(src) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, dn, enc, n, ok, src, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		dn = new $Uint64(0, 0);
		ok = false;
		enc = this;
		n = new $Uint64(0, 0);
		$unused((7 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 7]));
		n = (new $Uint64(0, (x = enc.decodeMap, x$1 = (0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]), ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1]))));
		if ((n.$high === 0 && n.$low === 255)) {
			_tmp = new $Uint64(0, 0);
			_tmp$1 = false;
			dn = _tmp;
			ok = _tmp$1;
			return [dn, ok];
		}
		dn = (x$2 = $shiftLeft64(n, 58), new $Uint64(dn.$high | x$2.$high, (dn.$low | x$2.$low) >>> 0));
		n = (new $Uint64(0, (x$3 = enc.decodeMap, x$4 = (1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]), ((x$4 < 0 || x$4 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[x$4]))));
		if ((n.$high === 0 && n.$low === 255)) {
			_tmp$2 = new $Uint64(0, 0);
			_tmp$3 = false;
			dn = _tmp$2;
			ok = _tmp$3;
			return [dn, ok];
		}
		dn = (x$5 = $shiftLeft64(n, 52), new $Uint64(dn.$high | x$5.$high, (dn.$low | x$5.$low) >>> 0));
		n = (new $Uint64(0, (x$6 = enc.decodeMap, x$7 = (2 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 2]), ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7]))));
		if ((n.$high === 0 && n.$low === 255)) {
			_tmp$4 = new $Uint64(0, 0);
			_tmp$5 = false;
			dn = _tmp$4;
			ok = _tmp$5;
			return [dn, ok];
		}
		dn = (x$8 = $shiftLeft64(n, 46), new $Uint64(dn.$high | x$8.$high, (dn.$low | x$8.$low) >>> 0));
		n = (new $Uint64(0, (x$9 = enc.decodeMap, x$10 = (3 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 3]), ((x$10 < 0 || x$10 >= x$9.length) ? ($throwRuntimeError("index out of range"), undefined) : x$9[x$10]))));
		if ((n.$high === 0 && n.$low === 255)) {
			_tmp$6 = new $Uint64(0, 0);
			_tmp$7 = false;
			dn = _tmp$6;
			ok = _tmp$7;
			return [dn, ok];
		}
		dn = (x$11 = $shiftLeft64(n, 40), new $Uint64(dn.$high | x$11.$high, (dn.$low | x$11.$low) >>> 0));
		n = (new $Uint64(0, (x$12 = enc.decodeMap, x$13 = (4 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 4]), ((x$13 < 0 || x$13 >= x$12.length) ? ($throwRuntimeError("index out of range"), undefined) : x$12[x$13]))));
		if ((n.$high === 0 && n.$low === 255)) {
			_tmp$8 = new $Uint64(0, 0);
			_tmp$9 = false;
			dn = _tmp$8;
			ok = _tmp$9;
			return [dn, ok];
		}
		dn = (x$14 = $shiftLeft64(n, 34), new $Uint64(dn.$high | x$14.$high, (dn.$low | x$14.$low) >>> 0));
		n = (new $Uint64(0, (x$15 = enc.decodeMap, x$16 = (5 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 5]), ((x$16 < 0 || x$16 >= x$15.length) ? ($throwRuntimeError("index out of range"), undefined) : x$15[x$16]))));
		if ((n.$high === 0 && n.$low === 255)) {
			_tmp$10 = new $Uint64(0, 0);
			_tmp$11 = false;
			dn = _tmp$10;
			ok = _tmp$11;
			return [dn, ok];
		}
		dn = (x$17 = $shiftLeft64(n, 28), new $Uint64(dn.$high | x$17.$high, (dn.$low | x$17.$low) >>> 0));
		n = (new $Uint64(0, (x$18 = enc.decodeMap, x$19 = (6 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 6]), ((x$19 < 0 || x$19 >= x$18.length) ? ($throwRuntimeError("index out of range"), undefined) : x$18[x$19]))));
		if ((n.$high === 0 && n.$low === 255)) {
			_tmp$12 = new $Uint64(0, 0);
			_tmp$13 = false;
			dn = _tmp$12;
			ok = _tmp$13;
			return [dn, ok];
		}
		dn = (x$20 = $shiftLeft64(n, 22), new $Uint64(dn.$high | x$20.$high, (dn.$low | x$20.$low) >>> 0));
		n = (new $Uint64(0, (x$21 = enc.decodeMap, x$22 = (7 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 7]), ((x$22 < 0 || x$22 >= x$21.length) ? ($throwRuntimeError("index out of range"), undefined) : x$21[x$22]))));
		if ((n.$high === 0 && n.$low === 255)) {
			_tmp$14 = new $Uint64(0, 0);
			_tmp$15 = false;
			dn = _tmp$14;
			ok = _tmp$15;
			return [dn, ok];
		}
		dn = (x$23 = $shiftLeft64(n, 16), new $Uint64(dn.$high | x$23.$high, (dn.$low | x$23.$low) >>> 0));
		_tmp$16 = dn;
		_tmp$17 = true;
		dn = _tmp$16;
		ok = _tmp$17;
		return [dn, ok];
	};
	Encoding.prototype.decode64 = function(src) { return this.$val.decode64(src); };
	Encoding.ptr.prototype.DecodedLen = function(n) {
		var _q, _q$1, enc, n;
		enc = this;
		if (enc.padChar === -1) {
			return (_q = ($imul(n, 6)) / 8, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
		}
		return $imul((_q$1 = n / 4, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")), 3);
	};
	Encoding.prototype.DecodedLen = function(n) { return this.$val.DecodedLen(n); };
	Encoding.methods = [{prop: "WithPadding", name: "WithPadding", pkg: "", typ: $funcType([$Int32], [ptrType], false)}, {prop: "Strict", name: "Strict", pkg: "", typ: $funcType([], [ptrType], false)}];
	ptrType.methods = [{prop: "Encode", name: "Encode", pkg: "", typ: $funcType([sliceType, sliceType], [], false)}, {prop: "EncodeToString", name: "EncodeToString", pkg: "", typ: $funcType([sliceType], [$String], false)}, {prop: "EncodedLen", name: "EncodedLen", pkg: "", typ: $funcType([$Int], [$Int], false)}, {prop: "decodeQuantum", name: "decodeQuantum", pkg: "encoding/base64", typ: $funcType([sliceType, sliceType, $Int], [$Int, $Int, $error], false)}, {prop: "DecodeString", name: "DecodeString", pkg: "", typ: $funcType([$String], [sliceType, $error], false)}, {prop: "Decode", name: "Decode", pkg: "", typ: $funcType([sliceType, sliceType], [$Int, $error], false)}, {prop: "decode32", name: "decode32", pkg: "encoding/base64", typ: $funcType([sliceType], [$Uint32, $Bool], false)}, {prop: "decode64", name: "decode64", pkg: "encoding/base64", typ: $funcType([sliceType], [$Uint64, $Bool], false)}, {prop: "DecodedLen", name: "DecodedLen", pkg: "", typ: $funcType([$Int], [$Int], false)}];
	ptrType$1.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}];
	CorruptInputError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
	Encoding.init("encoding/base64", [{prop: "encode", name: "encode", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "decodeMap", name: "decodeMap", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "padChar", name: "padChar", embedded: false, exported: false, typ: $Int32, tag: ""}, {prop: "strict", name: "strict", embedded: false, exported: false, typ: $Bool, tag: ""}]);
	encoder.init("encoding/base64", [{prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "enc", name: "enc", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "w", name: "w", embedded: false, exported: false, typ: io.Writer, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "nbuf", name: "nbuf", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "out", name: "out", embedded: false, exported: false, typ: arrayType$3, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = binary.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = io.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = strconv.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$pkg.StdEncoding = NewEncoding("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
		$pkg.URLEncoding = NewEncoding("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_");
		$pkg.RawStdEncoding = $clone($pkg.StdEncoding, Encoding).WithPadding(-1);
		$pkg.RawURLEncoding = $clone($pkg.URLEncoding, Encoding).WithPadding(-1);
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["strings"]=(function(){var $pkg={},$init,errors,js,bytealg,io,sync,unicode,utf8,Builder,ptrType,sliceType,IndexByte,Index,ContainsRune,IndexRune,Join,Map,ToUpper;	errors = $packages["errors"];
	js = $packages["github.com/gopherjs/gopherjs/js"];
	bytealg = $packages["internal/bytealg"];
	io = $packages["io"];
	sync = $packages["sync"];
	unicode = $packages["unicode"];
	utf8 = $packages["unicode/utf8"];
	Builder = $pkg.Builder = $newType(0, $kindStruct, "strings.Builder", true, "strings", true, function(addr_, buf_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.addr = ptrType.nil;
			this.buf = sliceType.nil;
			return;
		}
		this.addr = addr_;
		this.buf = buf_;
	});
	ptrType = $ptrType(Builder);
	sliceType = $sliceType($Uint8);
	IndexByte = function(s, c) {
		var c, s;
		return $parseInt(s.indexOf($global.String.fromCharCode(c))) >> 0;
	};
	$pkg.IndexByte = IndexByte;
	Index = function(s, sep) {
		var s, sep;
		return $parseInt(s.indexOf(sep)) >> 0;
	};
	$pkg.Index = Index;
	Builder.ptr.prototype.String = function() {
		var b;
		b = this;
		return ($bytesToString(b.buf));
	};
	Builder.prototype.String = function() { return this.$val.String(); };
	Builder.ptr.prototype.copyCheck = function() {
		var b;
		b = this;
		if (b.addr === ptrType.nil) {
			b.addr = b;
		} else if (!(b.addr === b)) {
			$panic(new $String("strings: illegal use of non-zero Builder copied by value"));
		}
	};
	Builder.prototype.copyCheck = function() { return this.$val.copyCheck(); };
	Builder.ptr.prototype.Len = function() {
		var b;
		b = this;
		return b.buf.$length;
	};
	Builder.prototype.Len = function() { return this.$val.Len(); };
	Builder.ptr.prototype.Cap = function() {
		var b;
		b = this;
		return b.buf.$capacity;
	};
	Builder.prototype.Cap = function() { return this.$val.Cap(); };
	Builder.ptr.prototype.Reset = function() {
		var b;
		b = this;
		b.addr = ptrType.nil;
		b.buf = sliceType.nil;
	};
	Builder.prototype.Reset = function() { return this.$val.Reset(); };
	Builder.ptr.prototype.grow = function(n) {
		var b, buf, n;
		b = this;
		buf = $makeSlice(sliceType, b.buf.$length, (($imul(2, b.buf.$capacity)) + n >> 0));
		$copySlice(buf, b.buf);
		b.buf = buf;
	};
	Builder.prototype.grow = function(n) { return this.$val.grow(n); };
	Builder.ptr.prototype.Grow = function(n) {
		var b, n;
		b = this;
		b.copyCheck();
		if (n < 0) {
			$panic(new $String("strings.Builder.Grow: negative count"));
		}
		if ((b.buf.$capacity - b.buf.$length >> 0) < n) {
			b.grow(n);
		}
	};
	Builder.prototype.Grow = function(n) { return this.$val.Grow(n); };
	Builder.ptr.prototype.Write = function(p) {
		var b, p;
		b = this;
		b.copyCheck();
		b.buf = $appendSlice(b.buf, p);
		return [p.$length, $ifaceNil];
	};
	Builder.prototype.Write = function(p) { return this.$val.Write(p); };
	Builder.ptr.prototype.WriteByte = function(c) {
		var b, c;
		b = this;
		b.copyCheck();
		b.buf = $append(b.buf, c);
		return $ifaceNil;
	};
	Builder.prototype.WriteByte = function(c) { return this.$val.WriteByte(c); };
	Builder.ptr.prototype.WriteRune = function(r) {
		var b, l, n, r;
		b = this;
		b.copyCheck();
		if (r < 128) {
			b.buf = $append(b.buf, ((r << 24 >>> 24)));
			return [1, $ifaceNil];
		}
		l = b.buf.$length;
		if ((b.buf.$capacity - l >> 0) < 4) {
			b.grow(4);
		}
		n = utf8.EncodeRune($subslice(b.buf, l, (l + 4 >> 0)), r);
		b.buf = $subslice(b.buf, 0, (l + n >> 0));
		return [n, $ifaceNil];
	};
	Builder.prototype.WriteRune = function(r) { return this.$val.WriteRune(r); };
	Builder.ptr.prototype.WriteString = function(s) {
		var b, s;
		b = this;
		b.copyCheck();
		b.buf = $appendSlice(b.buf, s);
		return [s.length, $ifaceNil];
	};
	Builder.prototype.WriteString = function(s) { return this.$val.WriteString(s); };
	ContainsRune = function(s, r) {
		var r, s;
		return IndexRune(s, r) >= 0;
	};
	$pkg.ContainsRune = ContainsRune;
	IndexRune = function(s, r) {
		var _i, _ref, _rune, i, r, r$1, s;
		if (0 <= r && r < 128) {
			return IndexByte(s, ((r << 24 >>> 24)));
		} else if ((r === 65533)) {
			_ref = s;
			_i = 0;
			while (true) {
				if (!(_i < _ref.length)) { break; }
				_rune = $decodeRune(_ref, _i);
				i = _i;
				r$1 = _rune[0];
				if (r$1 === 65533) {
					return i;
				}
				_i += _rune[1];
			}
			return -1;
		} else if (!utf8.ValidRune(r)) {
			return -1;
		} else {
			return Index(s, ($encodeRune(r)));
		}
	};
	$pkg.IndexRune = IndexRune;
	Join = function(a, sep) {
		var _1, _i, _ref, a, b, i, n, s, sep;
		_1 = a.$length;
		if (_1 === (0)) {
			return "";
		} else if (_1 === (1)) {
			return (0 >= a.$length ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + 0]);
		}
		n = $imul(sep.length, ((a.$length - 1 >> 0)));
		i = 0;
		while (true) {
			if (!(i < a.$length)) { break; }
			n = n + (((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i]).length) >> 0;
			i = i + (1) >> 0;
		}
		b = new Builder.ptr(ptrType.nil, sliceType.nil);
		b.Grow(n);
		b.WriteString((0 >= a.$length ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + 0]));
		_ref = $subslice(a, 1);
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			s = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
			b.WriteString(sep);
			b.WriteString(s);
			_i++;
		}
		return b.String();
	};
	$pkg.Join = Join;
	Map = function(mapping, s) {
		var _i, _i$1, _r, _r$1, _ref, _ref$1, _rune, _rune$1, _tuple, b, c, c$1, i, mapping, r, r$1, s, width, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _ref$1 = $f._ref$1; _rune = $f._rune; _rune$1 = $f._rune$1; _tuple = $f._tuple; b = $f.b; c = $f.c; c$1 = $f.c$1; i = $f.i; mapping = $f.mapping; r = $f.r; r$1 = $f.r$1; s = $f.s; width = $f.width; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = new Builder.ptr(ptrType.nil, sliceType.nil);
		_ref = s;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.length)) { break; } */ if(!(_i < _ref.length)) { $s = 2; continue; }
			_rune = $decodeRune(_ref, _i);
			i = _i;
			c = _rune[0];
			_r = mapping(c); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			r = _r;
			if ((r === c) && !((c === 65533))) {
				_i += _rune[1];
				/* continue; */ $s = 1; continue;
			}
			width = 0;
			if (c === 65533) {
				_tuple = utf8.DecodeRuneInString($substring(s, i));
				c = _tuple[0];
				width = _tuple[1];
				if (!((width === 1)) && (r === c)) {
					_i += _rune[1];
					/* continue; */ $s = 1; continue;
				}
			} else {
				width = utf8.RuneLen(c);
			}
			b.Grow(s.length + 4 >> 0);
			b.WriteString($substring(s, 0, i));
			if (r >= 0) {
				b.WriteRune(r);
			}
			s = $substring(s, (i + width >> 0));
			/* break; */ $s = 2; continue;
		/* } */ $s = 1; continue; case 2:
		if (b.Cap() === 0) {
			$s = -1; return s;
		}
		_ref$1 = s;
		_i$1 = 0;
		/* while (true) { */ case 4:
			/* if (!(_i$1 < _ref$1.length)) { break; } */ if(!(_i$1 < _ref$1.length)) { $s = 5; continue; }
			_rune$1 = $decodeRune(_ref$1, _i$1);
			c$1 = _rune$1[0];
			_r$1 = mapping(c$1); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			r$1 = _r$1;
			if (r$1 >= 0) {
				if (r$1 < 128) {
					b.WriteByte(((r$1 << 24 >>> 24)));
				} else {
					b.WriteRune(r$1);
				}
			}
			_i$1 += _rune$1[1];
		/* } */ $s = 4; continue; case 5:
		$s = -1; return b.String();
		/* */ } return; } if ($f === undefined) { $f = { $blk: Map }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._ref$1 = _ref$1; $f._rune = _rune; $f._rune$1 = _rune$1; $f._tuple = _tuple; $f.b = b; $f.c = c; $f.c$1 = c$1; $f.i = i; $f.mapping = mapping; $f.r = r; $f.r$1 = r$1; $f.s = s; $f.width = width; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Map = Map;
	ToUpper = function(s) {
		var _r, _tmp, _tmp$1, b, c, c$1, hasLower, i, i$1, isASCII, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; b = $f.b; c = $f.c; c$1 = $f.c$1; hasLower = $f.hasLower; i = $f.i; i$1 = $f.i$1; isASCII = $f.isASCII; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_tmp = true;
		_tmp$1 = false;
		isASCII = _tmp;
		hasLower = _tmp$1;
		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
			c = s.charCodeAt(i);
			if (c >= 128) {
				isASCII = false;
				break;
			}
			hasLower = hasLower || (c >= 97 && c <= 122);
			i = i + (1) >> 0;
		}
		if (isASCII) {
			if (!hasLower) {
				$s = -1; return s;
			}
			b = new Builder.ptr(ptrType.nil, sliceType.nil);
			b.Grow(s.length);
			i$1 = 0;
			while (true) {
				if (!(i$1 < s.length)) { break; }
				c$1 = s.charCodeAt(i$1);
				if (c$1 >= 97 && c$1 <= 122) {
					c$1 = c$1 - (32) << 24 >>> 24;
				}
				b.WriteByte(c$1);
				i$1 = i$1 + (1) >> 0;
			}
			$s = -1; return b.String();
		}
		_r = Map(unicode.ToUpper, s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: ToUpper }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.b = b; $f.c = c; $f.c$1 = c$1; $f.hasLower = hasLower; $f.i = i; $f.i$1 = i$1; $f.isASCII = isASCII; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToUpper = ToUpper;
	ptrType.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "copyCheck", name: "copyCheck", pkg: "strings", typ: $funcType([], [], false)}, {prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Cap", name: "Cap", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "grow", name: "grow", pkg: "strings", typ: $funcType([$Int], [], false)}, {prop: "Grow", name: "Grow", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "WriteByte", name: "WriteByte", pkg: "", typ: $funcType([$Uint8], [$error], false)}, {prop: "WriteRune", name: "WriteRune", pkg: "", typ: $funcType([$Int32], [$Int, $error], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([$String], [$Int, $error], false)}];
	Builder.init("strings", [{prop: "addr", name: "addr", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = js.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = bytealg.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = io.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = sync.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = unicode.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = utf8.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["github.com/cathalgarvey/fmtless"]=(function(){var $pkg={},$init,A,B,C,D,L,V,W,X,Y,E,J,M,N,O,P,Q,R,S,T,U;A=$packages["errors"];B=$packages["reflect"];C=$packages["strconv"];D=$packages["strings"];L=$pkg.sprintMatch=$newType(0,$kindStruct,"fmt.sprintMatch",true,"github.com/cathalgarvey/fmtless",false,function(before_,spec_){this.$val=this;if(arguments.length===0){this.before="";this.spec="";return;}this.before=before_;this.spec=spec_;});V=$sliceType($Uint8);W=$sliceType($String);X=$sliceType($emptyInterface);Y=$sliceType(L);E=function(a,b){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=J(a,b);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=A.New(c);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;}return;}if($f===undefined){$f={$blk:E};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Errorf=E;J=function(a,b){var a,b,c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=W.nil;d=M(a);e=d;f=0;case 1:if(!(f<e.$length)){$s=2;continue;}g=f;h=$clone(((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]),L);i=$ifaceNil;i=$ifaceNil;if(g<b.$length){i=((g<0||g>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+g]);}j=$clone(h,L).render(new X([i]));$s=3;case 3:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}c=$append(c,j);f++;$s=1;continue;case 2:$s=-1;return D.Join(c,"");}return;}if($f===undefined){$f={$blk:J};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Sprintf=J;L.ptr.prototype.render=function(a){var a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;if(b.spec===""){$s=-1;return b.before;}c=O(b.spec,(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return b.before+c;}return;}if($f===undefined){$f={$blk:L.ptr.prototype.render};}$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.render=function(a){return this.$val.render(a);};M=function(a){var a,b,c,d,e,f,g,h,i,j,k,l;b=0;c=V.nil;d=Y.nil;e=37;f=0;while(true){if(!(f<a.length)){break;}g=f+3>>0;if(g>=a.length){g=a.length;}c=$subslice((new V($stringToBytes(a))),f,g);if(c.$length<2||!(((0>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+0])===e))){f=f+(1)>>0;continue;}h=N(c);i=h[0];j=h[1];if(!j){f=f+(1)>>0;continue;}k=new L.ptr($substring(a,b,f),i);d=$append(d,k);b=f+k.spec.length>>0;f=f+((k.spec.length-1>>0))>>0;f=f+(1)>>0;}if(b<a.length){l=new L.ptr($substring(a,b),"");d=$append(d,l);}return d;};N=function(a){var a,b,c,d;if(!(((0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0])===37))){return["",false];}b=0;if(((1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1])===43)||((1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1])===35)){b=3;}else{b=2;}d=(c=b-1>>0,((c<0||c>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+c]));if((d===(118))||(d===(115))||(d===(113))||(d===(100))||(d===(98))||(d===(102))||(d===(70))||(d===(103))||(d===(71))||(d===(101))||(d===(69))||(d===(111))||(d===(120))||(d===(88))||(d===(85))){return[($bytesToString($subslice(a,0,b))),true];}else{return["",false];}};O=function(a,b){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=b;if($assertType(c,B.Type,true)[1]){$s=1;continue;}if($assertType(c,$error,true)[1]){$s=2;continue;}if($assertType(c,$String,true)[1]){$s=3;continue;}if($assertType(c,V,true)[1]){$s=4;continue;}if($assertType(c,$Int32,true)[1]){$s=5;continue;}if($assertType(c,$Int,true)[1]||$assertType(c,$Int64,true)[1]){$s=6;continue;}if($assertType(c,$Float32,true)[1]||$assertType(c,$Float64,true)[1]){$s=7;continue;}$s=8;continue;case 1:d=a;e=$assertType(b,B.Type).String();$s=10;case 10:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;g=Q(d,f);$s=11;case 11:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}$s=-1;return g;case 2:h=a;i=$assertType(b,$error).Error();$s=12;case 12:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}j=i;k=Q(h,j);$s=13;case 13:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}$s=-1;return k;case 3:$s=-1;return Q(a,$assertType(b,$String));case 4:l=P(a,$assertType(b,V));$s=14;case 14:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}$s=-1;return l;case 5:m=R($assertType(b,$Int32));$s=15;case 15:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}$s=-1;return m;case 6:n=S(a,b);$s=16;case 16:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}$s=-1;return n;case 7:$s=-1;return T(a,b);case 8:$panic(new $String("Unsupported interface for fmtless.Sprintf"));case 9:$s=-1;return"";}return;}if($f===undefined){$f={$blk:O};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.$s=$s;$f.$r=$r;return $f;};P=function(a,b){var a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=a;if(c===("%v")||c===("%q")||c===("%s")){$s=2;continue;}if(c===("%x")||c===("%X")){$s=3;continue;}$s=4;continue;case 2:$s=-1;return Q(a,($bytesToString(b)));case 3:d=W.nil;e=b;f=0;while(true){if(!(f<e.$length)){break;}g=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);h=C.FormatInt((new $Int64(0,g)),16);if(h.length===1){h="0"+h;}d=$append(d,h);f++;}if(a==="%X"){$s=6;continue;}$s=7;continue;case 6:i=D.ToUpper(D.Join(d,""));$s=8;case 8:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}$s=-1;return i;case 7:$s=-1;return D.Join(d,"");$s=5;continue;case 4:$panic(new $String("Unsupported spec for []byte: "+a));case 5:case 1:$s=-1;return"";}return;}if($f===undefined){$f={$blk:P};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};Q=function(a,b){var a,b,c;c=a;if(c===("%s")||c===("%v")||c===("%#v")){return b;}else if(c===("%q")){return C.Quote(b);}else{$panic(new $String("Unsupported spec for string: "+a));}};R=function(a){var a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=D.ToUpper(C.FormatInt((new $Int64(0,a)),16));$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;c="U+"+U("0",4-c.length>>0)+c;$s=-1;return c;}return;}if($f===undefined){$f={$blk:R};}$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};S=function(a,b){var a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=new $Int64(0,0);d=0;e=b;if($assertType(e,$Int,true)[1]){c=(new $Int64(0,$assertType(b,$Int)));}else if($assertType(e,$Int32,true)[1]){c=(new $Int64(0,$assertType(b,$Int32)));}else if($assertType(e,$Int64,true)[1]){c=$assertType(b,$Int64);}f=a;if(f===("%s")||f===("%d")||f===("%v")){d=10;}else if(f===("%o")){d=8;}else if(f===("%b")){d=2;}else if(f===("%X")||f===("%x")){d=16;}g=C.FormatInt(c,d);if(a==="%X"){$s=1;continue;}$s=2;continue;case 1:h=D.ToUpper(g);$s=3;case 3:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;case 2:$s=-1;return g;}return;}if($f===undefined){$f={$blk:S};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};T=function(a,b){var a,b,c,d,e,f;c=0;d=0;e=b;if($assertType(e,$Float32,true)[1]){d=($assertType(b,$Float32));c=32;}else if($assertType(e,$Float64,true)[1]){d=$assertType(b,$Float64);c=64;}else{$panic(new $String("Unpossible"));}f=a;if(f===("%b")||f===("%f")||f===("%F")||f===("%g")||f===("%G")||f===("%e")||f===("%E")){return C.FormatFloat(d,a.charCodeAt(1),-1,c);}else if(f===("%s")||f===("%v")){return C.FormatFloat(d,102,-1,c);}else{$panic(new $String("Unsupported specifier for floats: "+a));}};U=function(a,b){var a,b,c,d;c=new W([]);d=0;while(true){if(!(d<b)){break;}c=$append(c,a);d=d+(1)>>0;}return D.Join(c,"");};$pkg.SRepeat=U;L.methods=[{prop:"render",name:"render",pkg:"github.com/cathalgarvey/fmtless",typ:$funcType([X],[$String],true)}];L.init("github.com/cathalgarvey/fmtless",[{prop:"before",name:"before",embedded:false,exported:false,typ:$String,tag:""},{prop:"spec",name:"spec",embedded:false,exported:false,typ:$String,tag:""}]);$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["sort"]=(function(){var $pkg={},$init,reflect,insertionSort,siftDown,heapSort,medianOfThree,doPivot,quickSort,Sort,maxDepth;	reflect = $packages["reflect"];
	insertionSort = function(data, a, b) {
		var _r, _v, a, b, data, i, j, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _v = $f._v; a = $f.a; b = $f.b; data = $f.data; i = $f.i; j = $f.j; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		i = a + 1 >> 0;
		/* while (true) { */ case 1:
			/* if (!(i < b)) { break; } */ if(!(i < b)) { $s = 2; continue; }
			j = i;
			/* while (true) { */ case 3:
				if (!(j > a)) { _v = false; $s = 5; continue s; }
				_r = data.Less(j, j - 1 >> 0); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_v = _r; case 5:
				/* if (!(_v)) { break; } */ if(!(_v)) { $s = 4; continue; }
				$r = data.Swap(j, j - 1 >> 0); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
				j = j - (1) >> 0;
			/* } */ $s = 3; continue; case 4:
			i = i + (1) >> 0;
		/* } */ $s = 1; continue; case 2:
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: insertionSort }; } $f._r = _r; $f._v = _v; $f.a = a; $f.b = b; $f.data = data; $f.i = i; $f.j = j; $f.$s = $s; $f.$r = $r; return $f;
	};
	siftDown = function(data, lo, hi, first) {
		var _r, _r$1, _v, child, data, first, hi, lo, root, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _v = $f._v; child = $f.child; data = $f.data; first = $f.first; hi = $f.hi; lo = $f.lo; root = $f.root; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		root = lo;
		/* while (true) { */ case 1:
			child = ($imul(2, root)) + 1 >> 0;
			if (child >= hi) {
				/* break; */ $s = 2; continue;
			}
			if (!((child + 1 >> 0) < hi)) { _v = false; $s = 5; continue s; }
			_r = data.Less(first + child >> 0, (first + child >> 0) + 1 >> 0); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_v = _r; case 5:
			/* */ if (_v) { $s = 3; continue; }
			/* */ $s = 4; continue;
			/* if (_v) { */ case 3:
				child = child + (1) >> 0;
			/* } */ case 4:
			_r$1 = data.Less(first + root >> 0, first + child >> 0); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			/* */ if (!_r$1) { $s = 7; continue; }
			/* */ $s = 8; continue;
			/* if (!_r$1) { */ case 7:
				$s = -1; return;
			/* } */ case 8:
			$r = data.Swap(first + root >> 0, first + child >> 0); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			root = child;
		/* } */ $s = 1; continue; case 2:
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: siftDown }; } $f._r = _r; $f._r$1 = _r$1; $f._v = _v; $f.child = child; $f.data = data; $f.first = first; $f.hi = hi; $f.lo = lo; $f.root = root; $f.$s = $s; $f.$r = $r; return $f;
	};
	heapSort = function(data, a, b) {
		var _q, a, b, data, first, hi, i, i$1, lo, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; a = $f.a; b = $f.b; data = $f.data; first = $f.first; hi = $f.hi; i = $f.i; i$1 = $f.i$1; lo = $f.lo; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		first = a;
		lo = 0;
		hi = b - a >> 0;
		i = (_q = ((hi - 1 >> 0)) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
		/* while (true) { */ case 1:
			/* if (!(i >= 0)) { break; } */ if(!(i >= 0)) { $s = 2; continue; }
			$r = siftDown(data, i, hi, first); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			i = i - (1) >> 0;
		/* } */ $s = 1; continue; case 2:
		i$1 = hi - 1 >> 0;
		/* while (true) { */ case 4:
			/* if (!(i$1 >= 0)) { break; } */ if(!(i$1 >= 0)) { $s = 5; continue; }
			$r = data.Swap(first, first + i$1 >> 0); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			$r = siftDown(data, lo, i$1, first); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			i$1 = i$1 - (1) >> 0;
		/* } */ $s = 4; continue; case 5:
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: heapSort }; } $f._q = _q; $f.a = a; $f.b = b; $f.data = data; $f.first = first; $f.hi = hi; $f.i = i; $f.i$1 = i$1; $f.lo = lo; $f.$s = $s; $f.$r = $r; return $f;
	};
	medianOfThree = function(data, m1, m0, m2) {
		var _r, _r$1, _r$2, data, m0, m1, m2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; data = $f.data; m0 = $f.m0; m1 = $f.m1; m2 = $f.m2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = data.Less(m1, m0); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (_r) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (_r) { */ case 1:
			$r = data.Swap(m1, m0); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* } */ case 2:
		_r$1 = data.Less(m2, m1); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		/* */ if (_r$1) { $s = 5; continue; }
		/* */ $s = 6; continue;
		/* if (_r$1) { */ case 5:
			$r = data.Swap(m2, m1); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			_r$2 = data.Less(m1, m0); /* */ $s = 11; case 11: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			/* */ if (_r$2) { $s = 9; continue; }
			/* */ $s = 10; continue;
			/* if (_r$2) { */ case 9:
				$r = data.Swap(m1, m0); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			/* } */ case 10:
		/* } */ case 6:
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: medianOfThree }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.data = data; $f.m0 = m0; $f.m1 = m1; $f.m2 = m2; $f.$s = $s; $f.$r = $r; return $f;
	};
	doPivot = function(data, lo, hi) {
		var _q, _q$1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _tmp, _tmp$1, _tmp$2, _tmp$3, _v, _v$1, _v$2, _v$3, _v$4, a, b, c, data, dups, hi, lo, m, midhi, midlo, pivot, protect, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _q$1 = $f._q$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _v = $f._v; _v$1 = $f._v$1; _v$2 = $f._v$2; _v$3 = $f._v$3; _v$4 = $f._v$4; a = $f.a; b = $f.b; c = $f.c; data = $f.data; dups = $f.dups; hi = $f.hi; lo = $f.lo; m = $f.m; midhi = $f.midhi; midlo = $f.midlo; pivot = $f.pivot; protect = $f.protect; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		midlo = 0;
		midhi = 0;
		m = ((((((lo + hi >> 0) >>> 0)) >>> 1 >>> 0) >> 0));
		/* */ if ((hi - lo >> 0) > 40) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if ((hi - lo >> 0) > 40) { */ case 1:
			s = (_q = ((hi - lo >> 0)) / 8, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
			$r = medianOfThree(data, lo, lo + s >> 0, lo + ($imul(2, s)) >> 0); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			$r = medianOfThree(data, m, m - s >> 0, m + s >> 0); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			$r = medianOfThree(data, hi - 1 >> 0, (hi - 1 >> 0) - s >> 0, (hi - 1 >> 0) - ($imul(2, s)) >> 0); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* } */ case 2:
		$r = medianOfThree(data, lo, m, hi - 1 >> 0); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		pivot = lo;
		_tmp = lo + 1 >> 0;
		_tmp$1 = hi - 1 >> 0;
		a = _tmp;
		c = _tmp$1;
		/* while (true) { */ case 7:
			if (!(a < c)) { _v = false; $s = 9; continue s; }
			_r = data.Less(a, pivot); /* */ $s = 10; case 10: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_v = _r; case 9:
			/* if (!(_v)) { break; } */ if(!(_v)) { $s = 8; continue; }
			a = a + (1) >> 0;
		/* } */ $s = 7; continue; case 8:
		b = a;
		/* while (true) { */ case 11:
			/* while (true) { */ case 13:
				if (!(b < c)) { _v$1 = false; $s = 15; continue s; }
				_r$1 = data.Less(pivot, b); /* */ $s = 16; case 16: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_v$1 = !_r$1; case 15:
				/* if (!(_v$1)) { break; } */ if(!(_v$1)) { $s = 14; continue; }
				b = b + (1) >> 0;
			/* } */ $s = 13; continue; case 14:
			/* while (true) { */ case 17:
				if (!(b < c)) { _v$2 = false; $s = 19; continue s; }
				_r$2 = data.Less(pivot, c - 1 >> 0); /* */ $s = 20; case 20: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_v$2 = _r$2; case 19:
				/* if (!(_v$2)) { break; } */ if(!(_v$2)) { $s = 18; continue; }
				c = c - (1) >> 0;
			/* } */ $s = 17; continue; case 18:
			if (b >= c) {
				/* break; */ $s = 12; continue;
			}
			$r = data.Swap(b, c - 1 >> 0); /* */ $s = 21; case 21: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
			b = b + (1) >> 0;
			c = c - (1) >> 0;
		/* } */ $s = 11; continue; case 12:
		protect = (hi - c >> 0) < 5;
		/* */ if (!protect && (hi - c >> 0) < (_q$1 = ((hi - lo >> 0)) / 4, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero"))) { $s = 22; continue; }
		/* */ $s = 23; continue;
		/* if (!protect && (hi - c >> 0) < (_q$1 = ((hi - lo >> 0)) / 4, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero"))) { */ case 22:
			dups = 0;
			_r$3 = data.Less(pivot, hi - 1 >> 0); /* */ $s = 26; case 26: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			/* */ if (!_r$3) { $s = 24; continue; }
			/* */ $s = 25; continue;
			/* if (!_r$3) { */ case 24:
				$r = data.Swap(c, hi - 1 >> 0); /* */ $s = 27; case 27: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
				c = c + (1) >> 0;
				dups = dups + (1) >> 0;
			/* } */ case 25:
			_r$4 = data.Less(b - 1 >> 0, pivot); /* */ $s = 30; case 30: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			/* */ if (!_r$4) { $s = 28; continue; }
			/* */ $s = 29; continue;
			/* if (!_r$4) { */ case 28:
				b = b - (1) >> 0;
				dups = dups + (1) >> 0;
			/* } */ case 29:
			_r$5 = data.Less(m, pivot); /* */ $s = 33; case 33: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			/* */ if (!_r$5) { $s = 31; continue; }
			/* */ $s = 32; continue;
			/* if (!_r$5) { */ case 31:
				$r = data.Swap(m, b - 1 >> 0); /* */ $s = 34; case 34: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
				b = b - (1) >> 0;
				dups = dups + (1) >> 0;
			/* } */ case 32:
			protect = dups > 1;
		/* } */ case 23:
		/* */ if (protect) { $s = 35; continue; }
		/* */ $s = 36; continue;
		/* if (protect) { */ case 35:
			/* while (true) { */ case 37:
				/* while (true) { */ case 39:
					if (!(a < b)) { _v$3 = false; $s = 41; continue s; }
					_r$6 = data.Less(b - 1 >> 0, pivot); /* */ $s = 42; case 42: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
					_v$3 = !_r$6; case 41:
					/* if (!(_v$3)) { break; } */ if(!(_v$3)) { $s = 40; continue; }
					b = b - (1) >> 0;
				/* } */ $s = 39; continue; case 40:
				/* while (true) { */ case 43:
					if (!(a < b)) { _v$4 = false; $s = 45; continue s; }
					_r$7 = data.Less(a, pivot); /* */ $s = 46; case 46: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
					_v$4 = _r$7; case 45:
					/* if (!(_v$4)) { break; } */ if(!(_v$4)) { $s = 44; continue; }
					a = a + (1) >> 0;
				/* } */ $s = 43; continue; case 44:
				if (a >= b) {
					/* break; */ $s = 38; continue;
				}
				$r = data.Swap(a, b - 1 >> 0); /* */ $s = 47; case 47: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
				a = a + (1) >> 0;
				b = b - (1) >> 0;
			/* } */ $s = 37; continue; case 38:
		/* } */ case 36:
		$r = data.Swap(pivot, b - 1 >> 0); /* */ $s = 48; case 48: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		_tmp$2 = b - 1 >> 0;
		_tmp$3 = c;
		midlo = _tmp$2;
		midhi = _tmp$3;
		$s = -1; return [midlo, midhi];
		/* */ } return; } if ($f === undefined) { $f = { $blk: doPivot }; } $f._q = _q; $f._q$1 = _q$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._v = _v; $f._v$1 = _v$1; $f._v$2 = _v$2; $f._v$3 = _v$3; $f._v$4 = _v$4; $f.a = a; $f.b = b; $f.c = c; $f.data = data; $f.dups = dups; $f.hi = hi; $f.lo = lo; $f.m = m; $f.midhi = midhi; $f.midlo = midlo; $f.pivot = pivot; $f.protect = protect; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	quickSort = function(data, a, b, maxDepth$1) {
		var _r, _r$1, _tuple, a, b, data, i, maxDepth$1, mhi, mlo, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; a = $f.a; b = $f.b; data = $f.data; i = $f.i; maxDepth$1 = $f.maxDepth$1; mhi = $f.mhi; mlo = $f.mlo; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		/* while (true) { */ case 1:
			/* if (!((b - a >> 0) > 12)) { break; } */ if(!((b - a >> 0) > 12)) { $s = 2; continue; }
			/* */ if (maxDepth$1 === 0) { $s = 3; continue; }
			/* */ $s = 4; continue;
			/* if (maxDepth$1 === 0) { */ case 3:
				$r = heapSort(data, a, b); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
				$s = -1; return;
			/* } */ case 4:
			maxDepth$1 = maxDepth$1 - (1) >> 0;
			_r = doPivot(data, a, b); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			mlo = _tuple[0];
			mhi = _tuple[1];
			/* */ if ((mlo - a >> 0) < (b - mhi >> 0)) { $s = 7; continue; }
			/* */ $s = 8; continue;
			/* if ((mlo - a >> 0) < (b - mhi >> 0)) { */ case 7:
				$r = quickSort(data, a, mlo, maxDepth$1); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
				a = mhi;
				$s = 9; continue;
			/* } else { */ case 8:
				$r = quickSort(data, mhi, b, maxDepth$1); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
				b = mlo;
			/* } */ case 9:
		/* } */ $s = 1; continue; case 2:
		/* */ if ((b - a >> 0) > 1) { $s = 12; continue; }
		/* */ $s = 13; continue;
		/* if ((b - a >> 0) > 1) { */ case 12:
			i = a + 6 >> 0;
			/* while (true) { */ case 14:
				/* if (!(i < b)) { break; } */ if(!(i < b)) { $s = 15; continue; }
				_r$1 = data.Less(i, i - 6 >> 0); /* */ $s = 18; case 18: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				/* */ if (_r$1) { $s = 16; continue; }
				/* */ $s = 17; continue;
				/* if (_r$1) { */ case 16:
					$r = data.Swap(i, i - 6 >> 0); /* */ $s = 19; case 19: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
				/* } */ case 17:
				i = i + (1) >> 0;
			/* } */ $s = 14; continue; case 15:
			$r = insertionSort(data, a, b); /* */ $s = 20; case 20: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* } */ case 13:
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: quickSort }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.a = a; $f.b = b; $f.data = data; $f.i = i; $f.maxDepth$1 = maxDepth$1; $f.mhi = mhi; $f.mlo = mlo; $f.$s = $s; $f.$r = $r; return $f;
	};
	Sort = function(data) {
		var _r, data, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; data = $f.data; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = data.Len(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		n = _r;
		$r = quickSort(data, 0, n, maxDepth(n)); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Sort }; } $f._r = _r; $f.data = data; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Sort = Sort;
	maxDepth = function(n) {
		var depth, i, n;
		depth = 0;
		i = n;
		while (true) {
			if (!(i > 0)) { break; }
			depth = depth + (1) >> 0;
			i = (i >> $min((1), 31)) >> 0;
		}
		return $imul(depth, 2);
	};
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = reflect.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["unicode/utf16"]=(function(){var $pkg={},$init,IsSurrogate,DecodeRune;	IsSurrogate = function(r) {
		var r;
		return 55296 <= r && r < 57344;
	};
	$pkg.IsSurrogate = IsSurrogate;
	DecodeRune = function(r1, r2) {
		var r1, r2;
		if (55296 <= r1 && r1 < 56320 && 56320 <= r2 && r2 < 57344) {
			return ((((r1 - 55296 >> 0)) << 10 >> 0) | ((r2 - 56320 >> 0))) + 65536 >> 0;
		}
		return 65533;
	};
	$pkg.DecodeRune = DecodeRune;
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["github.com/cathalgarvey/fmtless/encoding/json"]=(function(){var $pkg={},$init,A,B,C,D,K,P,L,E,F,M,G,N,O,H,I,J,R,S,U,V,X,Z,AI,AJ,AK,AM,AO,AS,BH,BN,BP,BS,BU,BW,BY,CD,CE,CG,CH,CW,CX,EP,ER,ES,ET,EU,EV,EW,EX,EY,EZ,FB,FC,FD,FE,FF,FG,FH,FI,FL,FM,FO,FP,FQ,FR,FT,FU,FV,FW,FX,FY,FZ,GA,GB,GC,Y,AA,AB,AN,AT,AW,AX,BI,BJ,CK,a,b,Q,W,AC,AD,AE,AF,AR,AU,AV,AY,AZ,BA,BB,BC,BD,BE,BF,BG,BK,BL,BM,BO,BQ,BR,BT,BV,BX,BZ,CA,CB,CC,CF,CI,CJ,CL,CM,CN,CO,CP,CR,CU,CV,CY,CZ,DA,DB,DC,DD,DE,DF,DG,DH,DI,DJ,DK,DL,DM,DN,DO,DP,DQ,DR,DS,DT,DU,DV,DW,DX,DY,DZ,EA,EB,EC,ED,EE,EF,EQ;A=$packages["bytes"];B=$packages["encoding"];C=$packages["encoding/base64"];D=$packages["errors"];K=$packages["github.com/cathalgarvey/fmtless"];P=$packages["io"];L=$packages["math"];E=$packages["reflect"];F=$packages["runtime"];M=$packages["sort"];G=$packages["strconv"];N=$packages["strings"];O=$packages["sync"];H=$packages["unicode"];I=$packages["unicode/utf16"];J=$packages["unicode/utf8"];R=$pkg.Unmarshaler=$newType(8,$kindInterface,"json.Unmarshaler",true,"github.com/cathalgarvey/fmtless/encoding/json",true,null);S=$pkg.UnmarshalTypeError=$newType(0,$kindStruct,"json.UnmarshalTypeError",true,"github.com/cathalgarvey/fmtless/encoding/json",true,function(Value_,Type_,Offset_){this.$val=this;if(arguments.length===0){this.Value="";this.Type=$ifaceNil;this.Offset=new $Int64(0,0);return;}this.Value=Value_;this.Type=Type_;this.Offset=Offset_;});U=$pkg.InvalidUnmarshalError=$newType(0,$kindStruct,"json.InvalidUnmarshalError",true,"github.com/cathalgarvey/fmtless/encoding/json",true,function(Type_){this.$val=this;if(arguments.length===0){this.Type=$ifaceNil;return;}this.Type=Type_;});V=$pkg.Number=$newType(8,$kindString,"json.Number",true,"github.com/cathalgarvey/fmtless/encoding/json",true,null);X=$pkg.decodeState=$newType(0,$kindStruct,"json.decodeState",true,"github.com/cathalgarvey/fmtless/encoding/json",false,function(data_,off_,scan_,nextscan_,savedError_,useNumber_){this.$val=this;if(arguments.length===0){this.data=EX.nil;this.off=0;this.scan=new CX.ptr($throwNilPointerError,false,FB.nil,$ifaceNil,false,0,$throwNilPointerError,new $Int64(0,0));this.nextscan=new CX.ptr($throwNilPointerError,false,FB.nil,$ifaceNil,false,0,$throwNilPointerError,new $Int64(0,0));this.savedError=$ifaceNil;this.useNumber=false;return;}this.data=data_;this.off=off_;this.scan=scan_;this.nextscan=nextscan_;this.savedError=savedError_;this.useNumber=useNumber_;});Z=$pkg.unquotedValue=$newType(0,$kindStruct,"json.unquotedValue",true,"github.com/cathalgarvey/fmtless/encoding/json",false,function(){this.$val=this;if(arguments.length===0){return;}});AI=$pkg.Marshaler=$newType(8,$kindInterface,"json.Marshaler",true,"github.com/cathalgarvey/fmtless/encoding/json",true,null);AJ=$pkg.UnsupportedTypeError=$newType(0,$kindStruct,"json.UnsupportedTypeError",true,"github.com/cathalgarvey/fmtless/encoding/json",true,function(Type_){this.$val=this;if(arguments.length===0){this.Type=$ifaceNil;return;}this.Type=Type_;});AK=$pkg.UnsupportedValueError=$newType(0,$kindStruct,"json.UnsupportedValueError",true,"github.com/cathalgarvey/fmtless/encoding/json",true,function(Value_,Str_){this.$val=this;if(arguments.length===0){this.Value=new E.Value.ptr(FC.nil,0,0);this.Str="";return;}this.Value=Value_;this.Str=Str_;});AM=$pkg.MarshalerError=$newType(0,$kindStruct,"json.MarshalerError",true,"github.com/cathalgarvey/fmtless/encoding/json",true,function(Type_,Err_){this.$val=this;if(arguments.length===0){this.Type=$ifaceNil;this.Err=$ifaceNil;return;}this.Type=Type_;this.Err=Err_;});AO=$pkg.encodeState=$newType(0,$kindStruct,"json.encodeState",true,"github.com/cathalgarvey/fmtless/encoding/json",false,function(Buffer_,scratch_){this.$val=this;if(arguments.length===0){this.Buffer=new A.Buffer.ptr(EX.nil,0,0);this.scratch=FF.zero();return;}this.Buffer=Buffer_;this.scratch=scratch_;});AS=$pkg.encoderFunc=$newType(4,$kindFunc,"json.encoderFunc",true,"github.com/cathalgarvey/fmtless/encoding/json",false,null);BH=$pkg.floatEncoder=$newType(4,$kindInt,"json.floatEncoder",true,"github.com/cathalgarvey/fmtless/encoding/json",false,null);BN=$pkg.structEncoder=$newType(0,$kindStruct,"json.structEncoder",true,"github.com/cathalgarvey/fmtless/encoding/json",false,function(fields_,fieldEncs_){this.$val=this;if(arguments.length===0){this.fields=EU.nil;this.fieldEncs=FI.nil;return;}this.fields=fields_;this.fieldEncs=fieldEncs_;});BP=$pkg.mapEncoder=$newType(0,$kindStruct,"json.mapEncoder",true,"github.com/cathalgarvey/fmtless/encoding/json",false,function(elemEnc_){this.$val=this;if(arguments.length===0){this.elemEnc=$throwNilPointerError;return;}this.elemEnc=elemEnc_;});BS=$pkg.sliceEncoder=$newType(0,$kindStruct,"json.sliceEncoder",true,"github.com/cathalgarvey/fmtless/encoding/json",false,function(arrayEnc_){this.$val=this;if(arguments.length===0){this.arrayEnc=$throwNilPointerError;return;}this.arrayEnc=arrayEnc_;});BU=$pkg.arrayEncoder=$newType(0,$kindStruct,"json.arrayEncoder",true,"github.com/cathalgarvey/fmtless/encoding/json",false,function(elemEnc_){this.$val=this;if(arguments.length===0){this.elemEnc=$throwNilPointerError;return;}this.elemEnc=elemEnc_;});BW=$pkg.ptrEncoder=$newType(0,$kindStruct,"json.ptrEncoder",true,"github.com/cathalgarvey/fmtless/encoding/json",false,function(elemEnc_){this.$val=this;if(arguments.length===0){this.elemEnc=$throwNilPointerError;return;}this.elemEnc=elemEnc_;});BY=$pkg.condAddrEncoder=$newType(0,$kindStruct,"json.condAddrEncoder",true,"github.com/cathalgarvey/fmtless/encoding/json",false,function(canAddrEnc_,elseEnc_){this.$val=this;if(arguments.length===0){this.canAddrEnc=$throwNilPointerError;this.elseEnc=$throwNilPointerError;return;}this.canAddrEnc=canAddrEnc_;this.elseEnc=elseEnc_;});CD=$pkg.stringValues=$newType(12,$kindSlice,"json.stringValues",true,"github.com/cathalgarvey/fmtless/encoding/json",false,null);CE=$pkg.field=$newType(0,$kindStruct,"json.field",true,"github.com/cathalgarvey/fmtless/encoding/json",false,function(name_,nameBytes_,equalFold_,tag_,index_,typ_,omitEmpty_,quoted_){this.$val=this;if(arguments.length===0){this.name="";this.nameBytes=EX.nil;this.equalFold=$throwNilPointerError;this.tag=false;this.index=FB.nil;this.typ=$ifaceNil;this.omitEmpty=false;this.quoted=false;return;}this.name=name_;this.nameBytes=nameBytes_;this.equalFold=equalFold_;this.tag=tag_;this.index=index_;this.typ=typ_;this.omitEmpty=omitEmpty_;this.quoted=quoted_;});CG=$pkg.byName=$newType(12,$kindSlice,"json.byName",true,"github.com/cathalgarvey/fmtless/encoding/json",false,null);CH=$pkg.byIndex=$newType(12,$kindSlice,"json.byIndex",true,"github.com/cathalgarvey/fmtless/encoding/json",false,null);CW=$pkg.SyntaxError=$newType(0,$kindStruct,"json.SyntaxError",true,"github.com/cathalgarvey/fmtless/encoding/json",true,function(msg_,Offset_){this.$val=this;if(arguments.length===0){this.msg="";this.Offset=new $Int64(0,0);return;}this.msg=msg_;this.Offset=Offset_;});CX=$pkg.scanner=$newType(0,$kindStruct,"json.scanner",true,"github.com/cathalgarvey/fmtless/encoding/json",false,function(step_,endTop_,parseState_,err_,redo_,redoCode_,redoState_,bytes_){this.$val=this;if(arguments.length===0){this.step=$throwNilPointerError;this.endTop=false;this.parseState=FB.nil;this.err=$ifaceNil;this.redo=false;this.redoCode=0;this.redoState=$throwNilPointerError;this.bytes=new $Int64(0,0);return;}this.step=step_;this.endTop=endTop_;this.parseState=parseState_;this.err=err_;this.redo=redo_;this.redoCode=redoCode_;this.redoState=redoState_;this.bytes=bytes_;});EP=$pkg.tagOptions=$newType(8,$kindString,"json.tagOptions",true,"github.com/cathalgarvey/fmtless/encoding/json",false,null);ER=$sliceType($emptyInterface);ES=$mapType(E.Type,AS);ET=$structType("github.com/cathalgarvey/fmtless/encoding/json",[{prop:"RWMutex",name:"RWMutex",embedded:true,exported:true,typ:O.RWMutex,tag:""},{prop:"m",name:"m",embedded:false,exported:false,typ:ES,tag:""}]);EU=$sliceType(CE);EV=$mapType(E.Type,EU);EW=$structType("github.com/cathalgarvey/fmtless/encoding/json",[{prop:"RWMutex",name:"RWMutex",embedded:true,exported:true,typ:O.RWMutex,tag:""},{prop:"m",name:"m",embedded:false,exported:false,typ:EV,tag:""}]);EX=$sliceType($Uint8);EY=$ptrType(AI);EZ=$ptrType(B.TextMarshaler);FB=$sliceType($Int);FC=$ptrType(E.rtype);FD=$mapType($String,$emptyInterface);FE=$ptrType(CE);FF=$arrayType($Uint8,64);FG=$ptrType(AO);FH=$arrayType($Uint32,3);FI=$sliceType(AS);FL=$ptrType(CW);FM=$ptrType(S);FO=$ptrType(U);FP=$ptrType(X);FQ=$ptrType(AJ);FR=$ptrType(AK);FT=$ptrType(AM);FU=$ptrType(BN);FV=$ptrType(BP);FW=$ptrType(BS);FX=$ptrType(BU);FY=$ptrType(BW);FZ=$ptrType(BY);GA=$funcType([EX,EX],[$Bool],false);GB=$ptrType(CX);GC=$funcType([GB,$Uint8],[$Int],false);Q=function(c,d){var c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:e=new X.ptr(EX.nil,0,new CX.ptr($throwNilPointerError,false,FB.nil,$ifaceNil,false,0,$throwNilPointerError,new $Int64(0,0)),new CX.ptr($throwNilPointerError,false,FB.nil,$ifaceNil,false,0,$throwNilPointerError,new $Int64(0,0)),$ifaceNil,false);f=CU(c,e.scan);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f;if(!($interfaceIsEqual(g,$ifaceNil))){$s=-1;return g;}e.init(c);h=e.unmarshal(d);$s=2;case 2:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}$s=-1;return h;}return;}if($f===undefined){$f={$blk:Q};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Unmarshal=Q;S.ptr.prototype.Error=function(){var c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;d=c.Type.String();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return"json: cannot unmarshal "+c.Value+" into Go value of type "+d;}return;}if($f===undefined){$f={$blk:S.ptr.prototype.Error};}$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};S.prototype.Error=function(){return this.$val.Error();};U.ptr.prototype.Error=function(){var c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;if($interfaceIsEqual(c.Type,$ifaceNil)){$s=-1;return"json: Unmarshal(nil)";}d=c.Type.Kind();$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}if(!((d===22))){$s=1;continue;}$s=2;continue;case 1:e=c.Type.String();$s=4;case 4:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}$s=-1;return"json: Unmarshal(non-pointer "+e+")";case 2:f=c.Type.String();$s=5;case 5:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}$s=-1;return"json: Unmarshal(nil "+f+")";}return;}if($f===undefined){$f={$blk:U.ptr.prototype.Error};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};U.prototype.Error=function(){return this.$val.Error();};X.ptr.prototype.unmarshal=function(c){var c,d,e,f,g,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);d=[d];d[0]=$ifaceNil;e=this;$deferred.push([(function(d){return function(){var f,g,h;f=$recover();if(!($interfaceIsEqual(f,$ifaceNil))){g=$assertType(f,F.Error,true);h=g[1];if(h){$panic(f);}d[0]=$assertType(f,$error);}};})(d),[]]);f=E.ValueOf(c);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f;if(!(($clone(g,E.Value).Kind()===22))||$clone(g,E.Value).IsNil()){d[0]=new U.ptr(E.TypeOf(c));$s=-1;return d[0];}e.scan.reset();$r=e.value($clone(g,E.Value));$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}d[0]=e.savedError;$s=-1;return d[0];}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return d[0];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:X.ptr.prototype.unmarshal};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};X.prototype.unmarshal=function(c){return this.$val.unmarshal(c);};V.prototype.String=function(){var c;c=this.$val;return(c);};$ptrType(V).prototype.String=function(){return new V(this.$get()).String();};V.prototype.Float64=function(){var c;c=this.$val;return G.ParseFloat((c),64);};$ptrType(V).prototype.Float64=function(){return new V(this.$get()).Float64();};V.prototype.Int64=function(){var c;c=this.$val;return G.ParseInt((c),10,64);};$ptrType(V).prototype.Int64=function(){return new V(this.$get()).Int64();};W=function(c){var c;if(c===""){return false;}if(c.charCodeAt(0)===45){c=$substring(c,1);if(c===""){return false;}}if((c.charCodeAt(0)===48)){c=$substring(c,1);}else if(49<=c.charCodeAt(0)&&c.charCodeAt(0)<=57){c=$substring(c,1);while(true){if(!(c.length>0&&48<=c.charCodeAt(0)&&c.charCodeAt(0)<=57)){break;}c=$substring(c,1);}}else{return false;}if(c.length>=2&&(c.charCodeAt(0)===46)&&48<=c.charCodeAt(1)&&c.charCodeAt(1)<=57){c=$substring(c,2);while(true){if(!(c.length>0&&48<=c.charCodeAt(0)&&c.charCodeAt(0)<=57)){break;}c=$substring(c,1);}}if(c.length>=2&&((c.charCodeAt(0)===101)||(c.charCodeAt(0)===69))){c=$substring(c,1);if((c.charCodeAt(0)===43)||(c.charCodeAt(0)===45)){c=$substring(c,1);if(c===""){return false;}}while(true){if(!(c.length>0&&48<=c.charCodeAt(0)&&c.charCodeAt(0)<=57)){break;}c=$substring(c,1);}}return c==="";};X.ptr.prototype.init=function(c){var c,d;d=this;d.data=c;d.off=0;d.savedError=$ifaceNil;return d;};X.prototype.init=function(c){return this.$val.init(c);};X.ptr.prototype.error=function(c){var c,d;d=this;$panic(c);};X.prototype.error=function(c){return this.$val.error(c);};X.ptr.prototype.saveError=function(c){var c,d;d=this;if($interfaceIsEqual(d.savedError,$ifaceNil)){d.savedError=c;}};X.prototype.saveError=function(c){return this.$val.saveError(c);};X.ptr.prototype.next=function(){var c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;f=(d=c.data,e=c.off,((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]));h=CV($subslice(c.data,c.off),c.nextscan);$s=1;case 1:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;i=g[0];j=g[1];k=g[2];if(!($interfaceIsEqual(k,$ifaceNil))){c.error(k);}c.off=c.data.$length-j.$length>>0;if(f===123){$s=2;continue;}$s=3;continue;case 2:l=c.scan.step(c.scan,125);$s=5;case 5:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}l;$s=4;continue;case 3:m=c.scan.step(c.scan,93);$s=6;case 6:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}m;case 4:$s=-1;return i;}return;}if($f===undefined){$f={$blk:X.ptr.prototype.next};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.next=function(){return this.$val.next();};X.ptr.prototype.scanWhile=function(c){var c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=this;e=0;case 1:if(d.off>=d.data.$length){$s=3;continue;}$s=4;continue;case 3:f=d.scan.eof();$s=6;case 6:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;d.off=d.data.$length+1>>0;$s=5;continue;case 4:i=(g=d.data,h=d.off,((h<0||h>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+h]));d.off=d.off+(1)>>0;j=d.scan.step(d.scan,i);$s=7;case 7:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}e=j;case 5:if(!((e===c))){$s=2;continue;}$s=1;continue;case 2:$s=-1;return e;}return;}if($f===undefined){$f={$blk:X.ptr.prototype.scanWhile};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.scanWhile=function(c){return this.$val.scanWhile(c);};X.ptr.prototype.value=function(c){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=this;if(!$clone(c,E.Value).IsValid()){$s=1;continue;}$s=2;continue;case 1:f=CV($subslice(d.data,d.off),d.nextscan);$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[1];h=e[2];if(!($interfaceIsEqual(h,$ifaceNil))){d.error(h);}d.off=d.data.$length-g.$length>>0;if(d.scan.redo){d.scan.redo=false;d.scan.step=DA;}i=d.scan.step(d.scan,34);$s=4;case 4:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}i;j=d.scan.step(d.scan,34);$s=5;case 5:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}j;k=d.scan.parseState.$length;if(k>0&&((l=d.scan.parseState,m=k-1>>0,((m<0||m>=l.$length)?($throwRuntimeError("index out of range"),undefined):l.$array[l.$offset+m]))===0)){$s=6;continue;}$s=7;continue;case 6:n=d.scan.step(d.scan,58);$s=8;case 8:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}n;o=d.scan.step(d.scan,34);$s=9;case 9:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}o;p=d.scan.step(d.scan,34);$s=10;case 10:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}p;q=d.scan.step(d.scan,125);$s=11;case 11:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}q;case 7:$s=-1;return;case 2:r=d.scanWhile(9);$s=13;case 13:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}s=r;t=s;if(t===(6)){$s=14;continue;}if(t===(2)){$s=15;continue;}if(t===(1)){$s=16;continue;}$s=17;continue;case 14:$r=d.array($clone(c,E.Value));$s=19;case 19:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=18;continue;case 15:$r=d.object($clone(c,E.Value));$s=20;case 20:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=18;continue;case 16:$r=d.literal($clone(c,E.Value));$s=21;case 21:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=18;continue;case 17:d.error(Y);case 18:case 12:$s=-1;return;}return;}if($f===undefined){$f={$blk:X.ptr.prototype.value};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.value=function(c){return this.$val.value(c);};X.ptr.prototype.valueQuoted=function(){var c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;d=c.scanWhile(9);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;f=e;if(f===(6)){$s=3;continue;}if(f===(2)){$s=4;continue;}if(f===(1)){$s=5;continue;}$s=6;continue;case 3:$r=c.array(new E.Value.ptr(FC.nil,0,0));$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=7;continue;case 4:$r=c.object(new E.Value.ptr(FC.nil,0,0));$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=7;continue;case 5:h=c.literalInterface();$s=10;case 10:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;if(g===$ifaceNil||$assertType(g,$String,true)[1]){$s=11;continue;}$s=12;continue;case 11:i=g;$s=-1;return i;case 12:$s=7;continue;case 6:c.error(Y);case 7:case 1:$s=-1;return(j=new Z.ptr(),new j.constructor.elem(j));}return;}if($f===undefined){$f={$blk:X.ptr.prototype.valueQuoted};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.valueQuoted=function(){return this.$val.valueQuoted();};X.ptr.prototype.indirect=function(c,d){var aa,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;aa=$f.aa;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:e=this;if(!(!(($clone(c,E.Value).Kind()===22)))){f=false;$s=3;continue s;}g=$clone(c,E.Value).Type().Name();$s=4;case 4:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=!(g==="");case 3:if(f&&$clone(c,E.Value).CanAddr()){$s=1;continue;}$s=2;continue;case 1:c=$clone(c,E.Value).Addr();case 2:case 5:if(($clone(c,E.Value).Kind()===20)&&!$clone(c,E.Value).IsNil()){$s=7;continue;}$s=8;continue;case 7:h=$clone(c,E.Value).Elem();$s=9;case 9:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}i=h;if(!(($clone(i,E.Value).Kind()===22)&&!$clone(i,E.Value).IsNil())){j=false;$s=12;continue s;}if(!d){k=true;$s=13;continue s;}l=$clone(i,E.Value).Elem();$s=14;case 14:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}m=$clone(l,E.Value).Kind();$s=15;case 15:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}k=m===22;case 13:j=k;case 12:if(j){$s=10;continue;}$s=11;continue;case 10:c=i;$s=5;continue;case 11:case 8:if(!(($clone(c,E.Value).Kind()===22))){$s=6;continue;}n=$clone(c,E.Value).Elem();$s=18;case 18:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}o=$clone(n,E.Value).Kind();$s=19;case 19:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}if(!((o===22))&&d&&$clone(c,E.Value).CanSet()){$s=16;continue;}$s=17;continue;case 16:$s=6;continue;case 17:if($clone(c,E.Value).IsNil()){$s=20;continue;}$s=21;continue;case 20:p=$clone(c,E.Value).Type().Elem();$s=22;case 22:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}q=E.New(p);$s=23;case 23:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}$r=$clone(c,E.Value).Set($clone(q,E.Value));$s=24;case 24:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 21:r=$clone(c,E.Value).Type().NumMethod();$s=27;case 27:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}if(r>0){$s=25;continue;}$s=26;continue;case 25:t=$clone(c,E.Value).Interface();$s=28;case 28:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}s=$assertType(t,R,true);u=s[0];v=s[1];if(v){$s=-1;return[u,$ifaceNil,new E.Value.ptr(FC.nil,0,0)];}x=$clone(c,E.Value).Interface();$s=29;case 29:if($c){$c=false;x=x.$blk();}if(x&&x.$blk!==undefined){break s;}w=$assertType(x,B.TextUnmarshaler,true);y=w[0];z=w[1];if(z){$s=-1;return[$ifaceNil,y,new E.Value.ptr(FC.nil,0,0)];}case 26:aa=$clone(c,E.Value).Elem();$s=30;case 30:if($c){$c=false;aa=aa.$blk();}if(aa&&aa.$blk!==undefined){break s;}c=aa;$s=5;continue;case 6:$s=-1;return[$ifaceNil,$ifaceNil,c];}return;}if($f===undefined){$f={$blk:X.ptr.prototype.indirect};}$f.aa=aa;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.indirect=function(c,d){return this.$val.indirect(c,d);};X.ptr.prototype.array=function(c){var aa,ab,ac,ad,ae,af,ag,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=this;f=d.indirect($clone(c,E.Value),false);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[0];h=e[1];i=e[2];if(!($interfaceIsEqual(g,$ifaceNil))){$s=2;continue;}$s=3;continue;case 2:d.off=d.off-(1)>>0;j=d.next();$s=4;case 4:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=g.UnmarshalJSON(j);$s=5;case 5:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}l=k;if(!($interfaceIsEqual(l,$ifaceNil))){d.error(l);}$s=-1;return;case 3:if(!($interfaceIsEqual(h,$ifaceNil))){$s=6;continue;}$s=7;continue;case 6:d.saveError(new S.ptr("array",$clone(c,E.Value).Type(),(new $Int64(0,d.off))));d.off=d.off-(1)>>0;m=d.next();$s=8;case 8:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}m;$s=-1;return;case 7:c=i;n=$clone(c,E.Value).Kind();if(n===(20)){$s=10;continue;}if(n===(17)){$s=11;continue;}if(n===(23)){$s=12;continue;}$s=13;continue;case 10:if($clone(c,E.Value).NumMethod()===0){$s=15;continue;}$s=16;continue;case 15:o=d.arrayInterface();$s=17;case 17:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}p=E.ValueOf(o);$s=18;case 18:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}$r=$clone(c,E.Value).Set($clone(p,E.Value));$s=19;case 19:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;case 16:d.saveError(new S.ptr("array",$clone(c,E.Value).Type(),(new $Int64(0,d.off))));d.off=d.off-(1)>>0;q=d.next();$s=20;case 20:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}q;$s=-1;return;case 11:$s=14;continue;case 12:$s=9;continue;$s=14;continue;case 13:d.saveError(new S.ptr("array",$clone(c,E.Value).Type(),(new $Int64(0,d.off))));d.off=d.off-(1)>>0;r=d.next();$s=21;case 21:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}r;$s=-1;return;case 14:case 9:s=0;case 22:t=d.scanWhile(9);$s=24;case 24:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}u=t;if(u===8){$s=23;continue;}d.off=d.off-(1)>>0;d.scan.undo(u);if($clone(c,E.Value).Kind()===23){$s=25;continue;}$s=26;continue;case 25:if(s>=$clone(c,E.Value).Cap()){$s=27;continue;}$s=28;continue;case 27:w=$clone(c,E.Value).Cap()+(v=$clone(c,E.Value).Cap()/2,(v===v&&v!==1/0&&v!==-1/0)?v>>0:$throwRuntimeError("integer divide by zero"))>>0;if(w<4){w=4;}x=E.MakeSlice($clone(c,E.Value).Type(),$clone(c,E.Value).Len(),w);$s=29;case 29:if($c){$c=false;x=x.$blk();}if(x&&x.$blk!==undefined){break s;}y=x;z=E.Copy($clone(y,E.Value),$clone(c,E.Value));$s=30;case 30:if($c){$c=false;z=z.$blk();}if(z&&z.$blk!==undefined){break s;}z;$r=$clone(c,E.Value).Set($clone(y,E.Value));$s=31;case 31:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 28:if(s>=$clone(c,E.Value).Len()){$clone(c,E.Value).SetLen(s+1>>0);}case 26:if(s<$clone(c,E.Value).Len()){$s=32;continue;}$s=33;continue;case 32:aa=$clone(c,E.Value).Index(s);$s=35;case 35:if($c){$c=false;aa=aa.$blk();}if(aa&&aa.$blk!==undefined){break s;}$r=d.value($clone(aa,E.Value));$s=36;case 36:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=34;continue;case 33:$r=d.value(new E.Value.ptr(FC.nil,0,0));$s=37;case 37:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 34:s=s+(1)>>0;ab=d.scanWhile(9);$s=38;case 38:if($c){$c=false;ab=ab.$blk();}if(ab&&ab.$blk!==undefined){break s;}u=ab;if(u===8){$s=23;continue;}if(!((u===7))){d.error(Y);}$s=22;continue;case 23:if(s<$clone(c,E.Value).Len()){$s=39;continue;}$s=40;continue;case 39:if($clone(c,E.Value).Kind()===17){$s=41;continue;}$s=42;continue;case 41:ac=$clone(c,E.Value).Type().Elem();$s=44;case 44:if($c){$c=false;ac=ac.$blk();}if(ac&&ac.$blk!==undefined){break s;}ad=E.Zero(ac);$s=45;case 45:if($c){$c=false;ad=ad.$blk();}if(ad&&ad.$blk!==undefined){break s;}ae=ad;case 46:if(!(s<$clone(c,E.Value).Len())){$s=47;continue;}af=$clone(c,E.Value).Index(s);$s=48;case 48:if($c){$c=false;af=af.$blk();}if(af&&af.$blk!==undefined){break s;}$r=$clone(af,E.Value).Set($clone(ae,E.Value));$s=49;case 49:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}s=s+(1)>>0;$s=46;continue;case 47:$s=43;continue;case 42:$clone(c,E.Value).SetLen(s);case 43:case 40:if((s===0)&&($clone(c,E.Value).Kind()===23)){$s=50;continue;}$s=51;continue;case 50:ag=E.MakeSlice($clone(c,E.Value).Type(),0,0);$s=52;case 52:if($c){$c=false;ag=ag.$blk();}if(ag&&ag.$blk!==undefined){break s;}$r=$clone(c,E.Value).Set($clone(ag,E.Value));$s=53;case 53:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 51:$s=-1;return;}return;}if($f===undefined){$f={$blk:X.ptr.prototype.array};}$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.array=function(c){return this.$val.array(c);};X.ptr.prototype.object=function(c){var aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;ai=$f.ai;aj=$f.aj;ak=$f.ak;al=$f.al;am=$f.am;an=$f.an;ao=$f.ao;ap=$f.ap;aq=$f.aq;ar=$f.ar;as=$f.as;at=$f.at;au=$f.au;av=$f.av;aw=$f.aw;ax=$f.ax;ay=$f.ay;az=$f.az;ba=$f.ba;bb=$f.bb;bc=$f.bc;bd=$f.bd;be=$f.be;bf=$f.bf;bg=$f.bg;bh=$f.bh;bi=$f.bi;bj=$f.bj;bk=$f.bk;bl=$f.bl;bm=$f.bm;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=this;f=d.indirect($clone(c,E.Value),false);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[0];h=e[1];i=e[2];if(!($interfaceIsEqual(g,$ifaceNil))){$s=2;continue;}$s=3;continue;case 2:d.off=d.off-(1)>>0;j=d.next();$s=4;case 4:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=g.UnmarshalJSON(j);$s=5;case 5:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}l=k;if(!($interfaceIsEqual(l,$ifaceNil))){d.error(l);}$s=-1;return;case 3:if(!($interfaceIsEqual(h,$ifaceNil))){$s=6;continue;}$s=7;continue;case 6:d.saveError(new S.ptr("object",$clone(c,E.Value).Type(),(new $Int64(0,d.off))));d.off=d.off-(1)>>0;m=d.next();$s=8;case 8:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}m;$s=-1;return;case 7:c=i;if(($clone(c,E.Value).Kind()===20)&&($clone(c,E.Value).NumMethod()===0)){$s=9;continue;}$s=10;continue;case 9:n=d.objectInterface();$s=11;case 11:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}o=E.ValueOf(new FD(n));$s=12;case 12:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}$r=$clone(c,E.Value).Set($clone(o,E.Value));$s=13;case 13:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;case 10:p=$clone(c,E.Value).Kind();if(p===(21)){$s=15;continue;}if(p===(25)){$s=16;continue;}$s=17;continue;case 15:q=$clone(c,E.Value).Type();r=q.Key();$s=21;case 21:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}s=r.Kind();$s=22;case 22:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}if(!((s===24))){$s=19;continue;}$s=20;continue;case 19:d.saveError(new S.ptr("object",$clone(c,E.Value).Type(),(new $Int64(0,d.off))));d.off=d.off-(1)>>0;t=d.next();$s=23;case 23:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}t;$s=-1;return;case 20:if($clone(c,E.Value).IsNil()){$s=24;continue;}$s=25;continue;case 24:u=E.MakeMap(q);$s=26;case 26:if($c){$c=false;u=u.$blk();}if(u&&u.$blk!==undefined){break s;}$r=$clone(c,E.Value).Set($clone(u,E.Value));$s=27;case 27:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 25:$s=18;continue;case 16:$s=18;continue;case 17:d.saveError(new S.ptr("object",$clone(c,E.Value).Type(),(new $Int64(0,d.off))));d.off=d.off-(1)>>0;v=d.next();$s=28;case 28:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}v;$s=-1;return;case 18:case 14:w=new E.Value.ptr(FC.nil,0,0);case 29:x=d.scanWhile(9);$s=31;case 31:if($c){$c=false;x=x.$blk();}if(x&&x.$blk!==undefined){break s;}y=x;if(y===5){$s=30;continue;}if(!((y===1))){d.error(Y);}z=d.off-1>>0;aa=d.scanWhile(0);$s=32;case 32:if($c){$c=false;aa=aa.$blk();}if(aa&&aa.$blk!==undefined){break s;}y=aa;ab=$subslice(d.data,z,(d.off-1>>0));ac=AE(ab);ad=ac[0];ae=ac[1];if(!ae){d.error(Y);}af=new E.Value.ptr(FC.nil,0,0);ag=false;if($clone(c,E.Value).Kind()===21){$s=33;continue;}$s=34;continue;case 33:ah=$clone(c,E.Value).Type().Elem();$s=36;case 36:if($c){$c=false;ah=ah.$blk();}if(ah&&ah.$blk!==undefined){break s;}ai=ah;if(!$clone(w,E.Value).IsValid()){$s=37;continue;}$s=38;continue;case 37:aj=$clone(E.New(ai),E.Value).Elem();$s=40;case 40:if($c){$c=false;aj=aj.$blk();}if(aj&&aj.$blk!==undefined){break s;}w=aj;$s=39;continue;case 38:ak=E.Zero(ai);$s=41;case 41:if($c){$c=false;ak=ak.$blk();}if(ak&&ak.$blk!==undefined){break s;}$r=$clone(w,E.Value).Set($clone(ak,E.Value));$s=42;case 42:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 39:af=w;$s=35;continue;case 34:al=FE.nil;am=CL($clone(c,E.Value).Type());$s=43;case 43:if($c){$c=false;am=am.$blk();}if(am&&am.$blk!==undefined){break s;}an=am;ao=an;ap=0;case 44:if(!(ap<ao.$length)){$s=45;continue;}aq=ap;ar=((aq<0||aq>=an.$length)?($throwRuntimeError("index out of range"),undefined):an.$array[an.$offset+aq]);if(A.Equal(ar.nameBytes,ad)){al=ar;$s=45;continue;}if(!(al===FE.nil)){as=false;$s=48;continue s;}at=ar.equalFold(ar.nameBytes,ad);$s=49;case 49:if($c){$c=false;at=at.$blk();}if(at&&at.$blk!==undefined){break s;}as=at;case 48:if(as){$s=46;continue;}$s=47;continue;case 46:al=ar;case 47:ap++;$s=44;continue;case 45:if(!(al===FE.nil)){$s=50;continue;}$s=51;continue;case 50:af=c;ag=al.quoted;au=al.index;av=0;case 52:if(!(av<au.$length)){$s=53;continue;}aw=((av<0||av>=au.$length)?($throwRuntimeError("index out of range"),undefined):au.$array[au.$offset+av]);if($clone(af,E.Value).Kind()===22){$s=54;continue;}$s=55;continue;case 54:if($clone(af,E.Value).IsNil()){$s=56;continue;}$s=57;continue;case 56:ax=$clone(af,E.Value).Type().Elem();$s=58;case 58:if($c){$c=false;ax=ax.$blk();}if(ax&&ax.$blk!==undefined){break s;}ay=E.New(ax);$s=59;case 59:if($c){$c=false;ay=ay.$blk();}if(ay&&ay.$blk!==undefined){break s;}$r=$clone(af,E.Value).Set($clone(ay,E.Value));$s=60;case 60:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 57:az=$clone(af,E.Value).Elem();$s=61;case 61:if($c){$c=false;az=az.$blk();}if(az&&az.$blk!==undefined){break s;}af=az;case 55:ba=$clone(af,E.Value).Field(aw);$s=62;case 62:if($c){$c=false;ba=ba.$blk();}if(ba&&ba.$blk!==undefined){break s;}af=ba;av++;$s=52;continue;case 53:case 51:case 35:if(y===9){$s=63;continue;}$s=64;continue;case 63:bb=d.scanWhile(9);$s=65;case 65:if($c){$c=false;bb=bb.$blk();}if(bb&&bb.$blk!==undefined){break s;}y=bb;case 64:if(!((y===3))){d.error(Y);}if(ag){$s=66;continue;}$s=67;continue;case 66:bd=d.valueQuoted();$s=69;case 69:if($c){$c=false;bd=bd.$blk();}if(bd&&bd.$blk!==undefined){break s;}bc=bd;if(bc===$ifaceNil){$s=70;continue;}if($assertType(bc,$String,true)[1]){$s=71;continue;}$s=72;continue;case 70:be=bc;$r=d.literalStore(AA,$clone(af,E.Value),false);$s=74;case 74:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=73;continue;case 71:bf=bc.$val;$r=d.literalStore((new EX($stringToBytes(bf))),$clone(af,E.Value),true);$s=75;case 75:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=73;continue;case 72:bg=bc;bh=K.Errorf("json: invalid use of ,string struct tag, trying to unmarshal unquoted value into %v",new ER([$clone(af,E.Value).Type()]));$s=76;case 76:if($c){$c=false;bh=bh.$blk();}if(bh&&bh.$blk!==undefined){break s;}$r=d.saveError(bh);$s=77;case 77:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 73:$s=68;continue;case 67:$r=d.value($clone(af,E.Value));$s=78;case 78:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 68:if($clone(c,E.Value).Kind()===21){$s=79;continue;}$s=80;continue;case 79:bi=E.ValueOf(ad);$s=81;case 81:if($c){$c=false;bi=bi.$blk();}if(bi&&bi.$blk!==undefined){break s;}bj=$clone(c,E.Value).Type().Key();$s=82;case 82:if($c){$c=false;bj=bj.$blk();}if(bj&&bj.$blk!==undefined){break s;}bk=$clone(bi,E.Value).Convert(bj);$s=83;case 83:if($c){$c=false;bk=bk.$blk();}if(bk&&bk.$blk!==undefined){break s;}bl=bk;$r=$clone(c,E.Value).SetMapIndex($clone(bl,E.Value),$clone(af,E.Value));$s=84;case 84:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 80:bm=d.scanWhile(9);$s=85;case 85:if($c){$c=false;bm=bm.$blk();}if(bm&&bm.$blk!==undefined){break s;}y=bm;if(y===5){$s=30;continue;}if(!((y===4))){d.error(Y);}$s=29;continue;case 30:$s=-1;return;}return;}if($f===undefined){$f={$blk:X.ptr.prototype.object};}$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.ai=ai;$f.aj=aj;$f.ak=ak;$f.al=al;$f.am=am;$f.an=an;$f.ao=ao;$f.ap=ap;$f.aq=aq;$f.ar=ar;$f.as=as;$f.at=at;$f.au=au;$f.av=av;$f.aw=aw;$f.ax=ax;$f.ay=ay;$f.az=az;$f.ba=ba;$f.bb=bb;$f.bc=bc;$f.bd=bd;$f.be=be;$f.bf=bf;$f.bg=bg;$f.bh=bh;$f.bi=bi;$f.bj=bj;$f.bk=bk;$f.bl=bl;$f.bm=bm;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.object=function(c){return this.$val.object(c);};X.ptr.prototype.literal=function(c){var c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=this;e=d.off-1>>0;f=d.scanWhile(0);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f;d.off=d.off-(1)>>0;d.scan.undo(g);$r=d.literalStore($subslice(d.data,e,d.off),$clone(c,E.Value),false);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;}return;}if($f===undefined){$f={$blk:X.ptr.prototype.literal};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.literal=function(c){return this.$val.literal(c);};X.ptr.prototype.convertNumber=function(c){var c,d,e,f,g;d=this;if(d.useNumber){return[new V((c)),$ifaceNil];}e=G.ParseFloat(c,64);f=e[0];g=e[1];if(!($interfaceIsEqual(g,$ifaceNil))){return[$ifaceNil,new S.ptr("number "+c,E.TypeOf(new $Float64(0)),(new $Int64(0,d.off)))];}return[new $Float64(f),$ifaceNil];};X.prototype.convertNumber=function(c){return this.$val.convertNumber(c);};X.ptr.prototype.literalStore=function(c,d,e){var aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;ai=$f.ai;aj=$f.aj;ak=$f.ak;al=$f.al;am=$f.am;an=$f.an;ao=$f.ao;ap=$f.ap;aq=$f.aq;ar=$f.ar;as=$f.as;at=$f.at;au=$f.au;av=$f.av;aw=$f.aw;ax=$f.ax;ay=$f.ay;az=$f.az;ba=$f.ba;bb=$f.bb;bc=$f.bc;bd=$f.bd;be=$f.be;bf=$f.bf;bg=$f.bg;bh=$f.bh;bi=$f.bi;bj=$f.bj;bk=$f.bk;bl=$f.bl;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:f=this;if(c.$length===0){$s=1;continue;}$s=2;continue;case 1:g=K.Errorf("json: invalid use of ,string struct tag, trying to unmarshal %q into %v",new ER([c,$clone(d,E.Value).Type()]));$s=3;case 3:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}$r=f.saveError(g);$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;case 2:h=(0>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+0])===110;j=f.indirect($clone(d,E.Value),h);$s=5;case 5:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;k=i[0];l=i[1];m=i[2];if(!($interfaceIsEqual(k,$ifaceNil))){$s=6;continue;}$s=7;continue;case 6:n=k.UnmarshalJSON(c);$s=8;case 8:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}o=n;if(!($interfaceIsEqual(o,$ifaceNil))){f.error(o);}$s=-1;return;case 7:if(!($interfaceIsEqual(l,$ifaceNil))){$s=9;continue;}$s=10;continue;case 9:if(!(((0>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+0])===34))){$s=11;continue;}$s=12;continue;case 11:if(e){$s=13;continue;}$s=14;continue;case 13:p=K.Errorf("json: invalid use of ,string struct tag, trying to unmarshal %q into %v",new ER([c,$clone(d,E.Value).Type()]));$s=16;case 16:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}$r=f.saveError(p);$s=17;case 17:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=15;continue;case 14:f.saveError(new S.ptr("string",$clone(d,E.Value).Type(),(new $Int64(0,f.off))));case 15:$s=-1;return;case 12:q=AE(c);r=q[0];s=q[1];if(!s){$s=18;continue;}$s=19;continue;case 18:if(e){$s=20;continue;}$s=21;continue;case 20:t=K.Errorf("json: invalid use of ,string struct tag, trying to unmarshal %q into %v",new ER([c,$clone(d,E.Value).Type()]));$s=23;case 23:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}$r=f.error(t);$s=24;case 24:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=22;continue;case 21:f.error(Y);case 22:case 19:u=l.UnmarshalText(r);$s=25;case 25:if($c){$c=false;u=u.$blk();}if(u&&u.$blk!==undefined){break s;}v=u;if(!($interfaceIsEqual(v,$ifaceNil))){f.error(v);}$s=-1;return;case 10:d=m;w=(0>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+0]);x=w;if(x===(110)){$s=27;continue;}if((x===(116))||(x===(102))){$s=28;continue;}if(x===(34)){$s=29;continue;}$s=30;continue;case 27:y=$clone(d,E.Value).Kind();if((y===(20))||(y===(22))||(y===(21))||(y===(23))){$s=33;continue;}$s=34;continue;case 33:z=E.Zero($clone(d,E.Value).Type());$s=35;case 35:if($c){$c=false;z=z.$blk();}if(z&&z.$blk!==undefined){break s;}$r=$clone(d,E.Value).Set($clone(z,E.Value));$s=36;case 36:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 34:case 32:$s=31;continue;case 28:aa=w===116;ab=$clone(d,E.Value).Kind();if(ab===(1)){$s=38;continue;}if(ab===(20)){$s=39;continue;}if(e){$s=40;continue;}$s=41;continue;case 38:$clone(d,E.Value).SetBool(aa);$s=42;continue;case 39:if($clone(d,E.Value).NumMethod()===0){$s=43;continue;}$s=44;continue;case 43:ac=E.ValueOf(new $Bool(aa));$s=46;case 46:if($c){$c=false;ac=ac.$blk();}if(ac&&ac.$blk!==undefined){break s;}$r=$clone(d,E.Value).Set($clone(ac,E.Value));$s=47;case 47:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=45;continue;case 44:f.saveError(new S.ptr("bool",$clone(d,E.Value).Type(),(new $Int64(0,f.off))));case 45:$s=42;continue;case 40:ad=K.Errorf("json: invalid use of ,string struct tag, trying to unmarshal %q into %v",new ER([c,$clone(d,E.Value).Type()]));$s=48;case 48:if($c){$c=false;ad=ad.$blk();}if(ad&&ad.$blk!==undefined){break s;}$r=f.saveError(ad);$s=49;case 49:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=42;continue;case 41:f.saveError(new S.ptr("bool",$clone(d,E.Value).Type(),(new $Int64(0,f.off))));case 42:case 37:$s=31;continue;case 29:ae=AE(c);af=ae[0];ag=ae[1];if(!ag){$s=50;continue;}$s=51;continue;case 50:if(e){$s=52;continue;}$s=53;continue;case 52:ah=K.Errorf("json: invalid use of ,string struct tag, trying to unmarshal %q into %v",new ER([c,$clone(d,E.Value).Type()]));$s=55;case 55:if($c){$c=false;ah=ah.$blk();}if(ah&&ah.$blk!==undefined){break s;}$r=f.error(ah);$s=56;case 56:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=54;continue;case 53:f.error(Y);case 54:case 51:ai=$clone(d,E.Value).Kind();if(ai===(23)){$s=58;continue;}if(ai===(24)){$s=59;continue;}if(ai===(20)){$s=60;continue;}$s=61;continue;case 58:aj=$clone(d,E.Value).Type().Elem();$s=65;case 65:if($c){$c=false;aj=aj.$blk();}if(aj&&aj.$blk!==undefined){break s;}ak=aj.Kind();$s=66;case 66:if($c){$c=false;ak=ak.$blk();}if(ak&&ak.$blk!==undefined){break s;}if(!((ak===8))){$s=63;continue;}$s=64;continue;case 63:f.saveError(new S.ptr("string",$clone(d,E.Value).Type(),(new $Int64(0,f.off))));$s=57;continue;case 64:al=$makeSlice(EX,C.StdEncoding.DecodedLen(af.$length));am=C.StdEncoding.Decode(al,af);an=am[0];ao=am[1];if(!($interfaceIsEqual(ao,$ifaceNil))){f.saveError(ao);$s=57;continue;}$r=$clone(d,E.Value).SetBytes($subslice(al,0,an));$s=67;case 67:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=62;continue;case 59:$clone(d,E.Value).SetString(($bytesToString(af)));$s=62;continue;case 60:if($clone(d,E.Value).NumMethod()===0){$s=68;continue;}$s=69;continue;case 68:ap=E.ValueOf(new $String(($bytesToString(af))));$s=71;case 71:if($c){$c=false;ap=ap.$blk();}if(ap&&ap.$blk!==undefined){break s;}$r=$clone(d,E.Value).Set($clone(ap,E.Value));$s=72;case 72:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=70;continue;case 69:f.saveError(new S.ptr("string",$clone(d,E.Value).Type(),(new $Int64(0,f.off))));case 70:$s=62;continue;case 61:f.saveError(new S.ptr("string",$clone(d,E.Value).Type(),(new $Int64(0,f.off))));case 62:case 57:$s=31;continue;case 30:if(!((w===45))&&(w<48||w>57)){$s=73;continue;}$s=74;continue;case 73:if(e){$s=75;continue;}$s=76;continue;case 75:aq=K.Errorf("json: invalid use of ,string struct tag, trying to unmarshal %q into %v",new ER([c,$clone(d,E.Value).Type()]));$s=78;case 78:if($c){$c=false;aq=aq.$blk();}if(aq&&aq.$blk!==undefined){break s;}$r=f.error(aq);$s=79;case 79:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=77;continue;case 76:f.error(Y);case 77:case 74:ar=($bytesToString(c));as=$clone(d,E.Value).Kind();if(as===(20)){$s=81;continue;}if((as===(2))||(as===(3))||(as===(4))||(as===(5))||(as===(6))){$s=82;continue;}if((as===(7))||(as===(8))||(as===(9))||(as===(10))||(as===(11))||(as===(12))){$s=83;continue;}if((as===(13))||(as===(14))){$s=84;continue;}$s=85;continue;case 81:at=f.convertNumber(ar);au=at[0];av=at[1];if(!($interfaceIsEqual(av,$ifaceNil))){f.saveError(av);$s=80;continue;}if(!(($clone(d,E.Value).NumMethod()===0))){f.saveError(new S.ptr("number",$clone(d,E.Value).Type(),(new $Int64(0,f.off))));$s=80;continue;}aw=E.ValueOf(au);$s=87;case 87:if($c){$c=false;aw=aw.$blk();}if(aw&&aw.$blk!==undefined){break s;}$r=$clone(d,E.Value).Set($clone(aw,E.Value));$s=88;case 88:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=86;continue;case 82:ax=G.ParseInt(ar,10,64);ay=ax[0];az=ax[1];if(!($interfaceIsEqual(az,$ifaceNil))||$clone(d,E.Value).OverflowInt(ay)){f.saveError(new S.ptr("number "+ar,$clone(d,E.Value).Type(),(new $Int64(0,f.off))));$s=80;continue;}$clone(d,E.Value).SetInt(ay);$s=86;continue;case 83:ba=G.ParseUint(ar,10,64);bb=ba[0];bc=ba[1];if(!($interfaceIsEqual(bc,$ifaceNil))||$clone(d,E.Value).OverflowUint(bb)){f.saveError(new S.ptr("number "+ar,$clone(d,E.Value).Type(),(new $Int64(0,f.off))));$s=80;continue;}$clone(d,E.Value).SetUint(bb);$s=86;continue;case 84:be=ar;bf=$clone(d,E.Value).Type().Bits();$s=89;case 89:if($c){$c=false;bf=bf.$blk();}if(bf&&bf.$blk!==undefined){break s;}bg=bf;bh=G.ParseFloat(be,bg);$s=90;case 90:if($c){$c=false;bh=bh.$blk();}if(bh&&bh.$blk!==undefined){break s;}bd=bh;bi=bd[0];bj=bd[1];if(!($interfaceIsEqual(bj,$ifaceNil))||$clone(d,E.Value).OverflowFloat(bi)){f.saveError(new S.ptr("number "+ar,$clone(d,E.Value).Type(),(new $Int64(0,f.off))));$s=80;continue;}$clone(d,E.Value).SetFloat(bi);$s=86;continue;case 85:if(($clone(d,E.Value).Kind()===24)&&$interfaceIsEqual($clone(d,E.Value).Type(),AB)){$s=91;continue;}$s=92;continue;case 91:$clone(d,E.Value).SetString(ar);if(!W(ar)){$s=93;continue;}$s=94;continue;case 93:bk=K.Errorf("json: invalid number literal, trying to unmarshal %q into Number",new ER([c]));$s=95;case 95:if($c){$c=false;bk=bk.$blk();}if(bk&&bk.$blk!==undefined){break s;}$r=f.error(bk);$s=96;case 96:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 94:$s=80;continue;case 92:if(e){$s=97;continue;}$s=98;continue;case 97:bl=K.Errorf("json: invalid use of ,string struct tag, trying to unmarshal %q into %v",new ER([c,$clone(d,E.Value).Type()]));$s=100;case 100:if($c){$c=false;bl=bl.$blk();}if(bl&&bl.$blk!==undefined){break s;}$r=f.error(bl);$s=101;case 101:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=99;continue;case 98:f.error(new S.ptr("number",$clone(d,E.Value).Type(),(new $Int64(0,f.off))));case 99:case 86:case 80:case 31:case 26:$s=-1;return;}return;}if($f===undefined){$f={$blk:X.ptr.prototype.literalStore};}$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.ai=ai;$f.aj=aj;$f.ak=ak;$f.al=al;$f.am=am;$f.an=an;$f.ao=ao;$f.ap=ap;$f.aq=aq;$f.ar=ar;$f.as=as;$f.at=at;$f.au=au;$f.av=av;$f.aw=aw;$f.ax=ax;$f.ay=ay;$f.az=az;$f.ba=ba;$f.bb=bb;$f.bc=bc;$f.bd=bd;$f.be=be;$f.bf=bf;$f.bg=bg;$f.bh=bh;$f.bi=bi;$f.bj=bj;$f.bk=bk;$f.bl=bl;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.literalStore=function(c,d,e){return this.$val.literalStore(c,d,e);};X.ptr.prototype.valueInterface=function(){var c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;d=c.scanWhile(9);$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;if(e===(6)){$s=3;continue;}if(e===(2)){$s=4;continue;}if(e===(1)){$s=5;continue;}$s=6;continue;case 3:f=c.arrayInterface();$s=8;case 8:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}$s=-1;return f;case 4:g=c.objectInterface();$s=9;case 9:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}$s=-1;return new FD(g);case 5:h=c.literalInterface();$s=10;case 10:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}$s=-1;return h;case 6:c.error(Y);$panic(new $String("unreachable"));case 7:case 1:$s=-1;return $ifaceNil;}return;}if($f===undefined){$f={$blk:X.ptr.prototype.valueInterface};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.valueInterface=function(){return this.$val.valueInterface();};X.ptr.prototype.arrayInterface=function(){var c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;d=$makeSlice(ER,0);case 1:e=c.scanWhile(9);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;if(f===8){$s=2;continue;}c.off=c.off-(1)>>0;c.scan.undo(f);g=c.valueInterface();$s=4;case 4:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}d=$append(d,g);h=c.scanWhile(9);$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}f=h;if(f===8){$s=2;continue;}if(!((f===7))){c.error(Y);}$s=1;continue;case 2:$s=-1;return d;}return;}if($f===undefined){$f={$blk:X.ptr.prototype.arrayInterface};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.arrayInterface=function(){return this.$val.arrayInterface();};X.ptr.prototype.objectInterface=function(){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;d={};case 1:e=c.scanWhile(9);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;if(f===5){$s=2;continue;}if(!((f===1))){c.error(Y);}g=c.off-1>>0;h=c.scanWhile(0);$s=4;case 4:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}f=h;i=$subslice(c.data,g,(c.off-1>>0));j=AD(i);k=j[0];l=j[1];if(!l){c.error(Y);}if(f===9){$s=5;continue;}$s=6;continue;case 5:m=c.scanWhile(9);$s=7;case 7:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}f=m;case 6:if(!((f===3))){c.error(Y);}o=c.valueInterface();$s=8;case 8:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}n=k;(d||$throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(n)]={k:n,v:o};p=c.scanWhile(9);$s=9;case 9:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}f=p;if(f===5){$s=2;continue;}if(!((f===4))){c.error(Y);}$s=1;continue;case 2:$s=-1;return d;}return;}if($f===undefined){$f={$blk:X.ptr.prototype.objectInterface};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.objectInterface=function(){return this.$val.objectInterface();};X.ptr.prototype.literalInterface=function(){var c,d,e,f,g,h,i,j,k,l,m,n,o,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;d=c.off-1>>0;e=c.scanWhile(0);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;c.off=c.off-(1)>>0;c.scan.undo(f);g=$subslice(c.data,d,c.off);h=(0>=g.$length?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+0]);i=h;if(i===(110)){$s=-1;return $ifaceNil;}else if((i===(116))||(i===(102))){$s=-1;return new $Bool((h===116));}else if(i===(34)){j=AD(g);k=j[0];l=j[1];if(!l){c.error(Y);}$s=-1;return new $String(k);}else{if(!((h===45))&&(h<48||h>57)){c.error(Y);}m=c.convertNumber(($bytesToString(g)));n=m[0];o=m[1];if(!($interfaceIsEqual(o,$ifaceNil))){c.saveError(o);}$s=-1;return n;}$s=-1;return $ifaceNil;}return;}if($f===undefined){$f={$blk:X.ptr.prototype.literalInterface};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.$s=$s;$f.$r=$r;return $f;};X.prototype.literalInterface=function(){return this.$val.literalInterface();};AC=function(c){var c,d,e,f;if(c.$length<6||!(((0>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+0])===92))||!(((1>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+1])===117))){return-1;}d=G.ParseUint(($bytesToString($subslice(c,2,6))),16,64);e=d[0];f=d[1];if(!($interfaceIsEqual(f,$ifaceNil))){return-1;}return((e.$low>>0));};AD=function(c){var c,d,e,f;d="";e=false;f=AE(c);c=f[0];e=f[1];d=($bytesToString(c));return[d,e];};AE=function(c){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;d=EX.nil;e=false;if(c.$length<2||!(((0>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+0])===34))||!(((f=c.$length-1>>0,((f<0||f>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+f]))===34))){return[d,e];}c=$subslice(c,1,(c.$length-1>>0));g=0;while(true){if(!(g<c.$length)){break;}h=((g<0||g>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+g]);if((h===92)||(h===34)||h<32){break;}if(h<128){g=g+(1)>>0;continue;}i=J.DecodeRune($subslice(c,g));j=i[0];k=i[1];if((j===65533)&&(k===1)){break;}g=g+(k)>>0;}if(g===c.$length){l=c;m=true;d=l;e=m;return[d,e];}n=$makeSlice(EX,(c.$length+8>>0));o=$copySlice(n,$subslice(c,0,g));while(true){if(!(g<c.$length)){break;}if(o>=(n.$length-8>>0)){p=$makeSlice(EX,($imul(((n.$length+4>>0)),2)));$copySlice(p,$subslice(n,0,o));n=p;}q=((g<0||g>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+g]);if((q===92)){g=g+(1)>>0;if(g>=c.$length){return[d,e];}switch(0){default:r=((g<0||g>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+g]);if((r===(34))||(r===(92))||(r===(47))||(r===(39))){((o<0||o>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+o]=((g<0||g>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+g]));g=g+(1)>>0;o=o+(1)>>0;}else if(r===(98)){((o<0||o>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+o]=8);g=g+(1)>>0;o=o+(1)>>0;}else if(r===(102)){((o<0||o>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+o]=12);g=g+(1)>>0;o=o+(1)>>0;}else if(r===(110)){((o<0||o>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+o]=10);g=g+(1)>>0;o=o+(1)>>0;}else if(r===(114)){((o<0||o>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+o]=13);g=g+(1)>>0;o=o+(1)>>0;}else if(r===(116)){((o<0||o>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+o]=9);g=g+(1)>>0;o=o+(1)>>0;}else if(r===(117)){g=g-(1)>>0;s=AC($subslice(c,g));if(s<0){return[d,e];}g=g+(6)>>0;if(I.IsSurrogate(s)){t=AC($subslice(c,g));u=I.DecodeRune(s,t);if(!((u===65533))){g=g+(6)>>0;o=o+(J.EncodeRune($subslice(n,o),u))>>0;break;}s=65533;}o=o+(J.EncodeRune($subslice(n,o),s))>>0;}else{return[d,e];}}}else if(((q===34))||(q<32)){return[d,e];}else if(q<128){((o<0||o>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+o]=q);g=g+(1)>>0;o=o+(1)>>0;}else{v=J.DecodeRune($subslice(c,g));w=v[0];x=v[1];g=g+(x)>>0;o=o+(J.EncodeRune($subslice(n,o),w))>>0;}}y=$subslice(n,0,o);z=true;d=y;e=z;return[d,e];};AF=function(c){var c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=new AO.ptr(new A.Buffer.ptr(EX.nil,0,0),FF.zero());e=d.marshal(c);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;if(!($interfaceIsEqual(f,$ifaceNil))){$s=-1;return[EX.nil,f];}$s=-1;return[d.Buffer.Bytes(),$ifaceNil];}return;}if($f===undefined){$f={$blk:AF};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Marshal=AF;AJ.ptr.prototype.Error=function(){var c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;d=c.Type.String();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return"json: unsupported type: "+d;}return;}if($f===undefined){$f={$blk:AJ.ptr.prototype.Error};}$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};AJ.prototype.Error=function(){return this.$val.Error();};AK.ptr.prototype.Error=function(){var c;c=this;return"json: unsupported value: "+c.Str;};AK.prototype.Error=function(){return this.$val.Error();};AM.ptr.prototype.Error=function(){var c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;d=c.Type.String();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=c.Err.Error();$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}$s=-1;return"json: error calling MarshalJSON for type "+d+": "+e;}return;}if($f===undefined){$f={$blk:AM.ptr.prototype.Error};}$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};AM.prototype.Error=function(){return this.$val.Error();};AO.ptr.prototype.marshal=function(c){var c,d,e,f,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);d=[d];d[0]=$ifaceNil;e=this;$deferred.push([(function(d){return function(){var f,g,h,i,j,k;f=$recover();if(!($interfaceIsEqual(f,$ifaceNil))){g=$assertType(f,F.Error,true);h=g[1];if(h){$panic(f);}i=$assertType(f,$String,true);j=i[0];k=i[1];if(k){$panic(new $String(j));}d[0]=$assertType(f,$error);}};})(d),[]]);f=E.ValueOf(c);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}$r=e.reflectValue($clone(f,E.Value));$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}d[0]=$ifaceNil;$s=-1;return d[0];}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return d[0];}if($curGoroutine.asleep){if($f===undefined){$f={$blk:AO.ptr.prototype.marshal};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};AO.prototype.marshal=function(c){return this.$val.marshal(c);};AO.ptr.prototype.error=function(c){var c,d;d=this;$panic(c);};AO.prototype.error=function(c){return this.$val.error(c);};AR=function(c){var c,d,e,f;d=$clone(c,E.Value).Kind();if((d===(17))||(d===(21))||(d===(23))||(d===(24))){return $clone(c,E.Value).Len()===0;}else if(d===(1)){return!$clone(c,E.Value).Bool();}else if((d===(2))||(d===(3))||(d===(4))||(d===(5))||(d===(6))){return(e=$clone(c,E.Value).Int(),(e.$high===0&&e.$low===0));}else if((d===(7))||(d===(8))||(d===(9))||(d===(10))||(d===(11))||(d===(12))){return(f=$clone(c,E.Value).Uint(),(f.$high===0&&f.$low===0));}else if((d===(13))||(d===(14))){return $clone(c,E.Value).Float()===0;}else if((d===(20))||(d===(22))){return $clone(c,E.Value).IsNil();}return false;};AO.ptr.prototype.reflectValue=function(c){var c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=this;e=AU($clone(c,E.Value));$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}$r=e(d,$clone(c,E.Value),false);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;}return;}if($f===undefined){$f={$blk:AO.ptr.prototype.reflectValue};}$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};AO.prototype.reflectValue=function(c){return this.$val.reflectValue(c);};AU=function(c){var c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:if(!$clone(c,E.Value).IsValid()){$s=-1;return AZ;}d=AV($clone(c,E.Value).Type());$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;}return;}if($f===undefined){$f={$blk:AU};}$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};AV=function(c){var c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=[d];e=[e];$r=AT.RWMutex.RLock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}d[0]=(f=AT.m[E.Type.keyFor(c)],f!==undefined?f.v:$throwNilPointerError);$r=AT.RWMutex.RUnlock();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}if(!(d[0]===$throwNilPointerError)){$s=-1;return d[0];}$r=AT.RWMutex.Lock();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}if(AT.m===false){AT.m={};}e[0]=new O.WaitGroup.ptr(0,$chanNil,FH.zero());e[0].Add(1);g=c;(AT.m||$throwRuntimeError("assignment to entry in nil map"))[E.Type.keyFor(g)]={k:g,v:(function(d,e){return function $b(h,i,j){var h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$r=e[0].Wait();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=d[0](h,$clone(i,E.Value),j);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;}return;}if($f===undefined){$f={$blk:$b};}$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};})(d,e)};$r=AT.RWMutex.Unlock();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}h=AY(c,true);$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}d[0]=h;e[0].Done();$r=AT.RWMutex.Lock();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}i=c;(AT.m||$throwRuntimeError("assignment to entry in nil map"))[E.Type.keyFor(i)]={k:i,v:d[0]};$r=AT.RWMutex.Unlock();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return d[0];}return;}if($f===undefined){$f={$blk:AV};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};AY=function(c,d){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:e=c.Implements(AW);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}if(e){$s=1;continue;}$s=2;continue;case 1:$s=-1;return BA;case 2:f=c.Kind();$s=6;case 6:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}if(!((f===22))&&d){$s=4;continue;}$s=5;continue;case 4:g=E.PtrTo(c).Implements(AW);$s=9;case 9:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}if(g){$s=7;continue;}$s=8;continue;case 7:h=BB;i=AY(c,false);$s=10;case 10:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}j=i;k=BZ(h,j);$s=11;case 11:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}$s=-1;return k;case 8:case 5:l=c.Implements(AX);$s=14;case 14:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}if(l){$s=12;continue;}$s=13;continue;case 12:$s=-1;return BC;case 13:m=c.Kind();$s=17;case 17:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}if(!((m===22))&&d){$s=15;continue;}$s=16;continue;case 15:n=E.PtrTo(c).Implements(AX);$s=20;case 20:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}if(n){$s=18;continue;}$s=19;continue;case 18:o=BD;p=AY(c,false);$s=21;case 21:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}q=p;r=BZ(o,q);$s=22;case 22:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}$s=-1;return r;case 19:case 16:s=c.Kind();$s=24;case 24:if($c){$c=false;s=s.$blk();}if(s&&s.$blk!==undefined){break s;}t=s;if(t===(1)){$s=25;continue;}if((t===(2))||(t===(3))||(t===(4))||(t===(5))||(t===(6))){$s=26;continue;}if((t===(7))||(t===(8))||(t===(9))||(t===(10))||(t===(11))||(t===(12))){$s=27;continue;}if(t===(13)){$s=28;continue;}if(t===(14)){$s=29;continue;}if(t===(24)){$s=30;continue;}if(t===(20)){$s=31;continue;}if(t===(25)){$s=32;continue;}if(t===(21)){$s=33;continue;}if(t===(23)){$s=34;continue;}if(t===(17)){$s=35;continue;}if(t===(22)){$s=36;continue;}$s=37;continue;case 25:$s=-1;return BE;case 26:$s=-1;return BF;case 27:$s=-1;return BG;case 28:$s=-1;return BI;case 29:$s=-1;return BJ;case 30:$s=-1;return BK;case 31:$s=-1;return BL;case 32:u=BO(c);$s=39;case 39:if($c){$c=false;u=u.$blk();}if(u&&u.$blk!==undefined){break s;}$s=-1;return u;case 33:v=BQ(c);$s=40;case 40:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}$s=-1;return v;case 34:w=BT(c);$s=41;case 41:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}$s=-1;return w;case 35:x=BV(c);$s=42;case 42:if($c){$c=false;x=x.$blk();}if(x&&x.$blk!==undefined){break s;}$s=-1;return x;case 36:y=BX(c);$s=43;case 43:if($c){$c=false;y=y.$blk();}if(y&&y.$blk!==undefined){break s;}$s=-1;return y;case 37:$s=-1;return BM;case 38:case 23:$s=-1;return $throwNilPointerError;}return;}if($f===undefined){$f={$blk:AY};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.$s=$s;$f.$r=$r;return $f;};AZ=function(c,d,e){var c,d,e;c.Buffer.WriteString("null");};BA=function(c,d,e){var c,d,e,f,g,h,i,j,k,l,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:if(($clone(d,E.Value).Kind()===22)&&$clone(d,E.Value).IsNil()){c.Buffer.WriteString("null");$s=-1;return;}f=$clone(d,E.Value).Interface();$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=$assertType(f,AI);i=g.MarshalJSON();$s=2;case 2:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;j=h[0];k=h[1];if($interfaceIsEqual(k,$ifaceNil)){$s=3;continue;}$s=4;continue;case 3:l=CR(c.Buffer,j,true);$s=5;case 5:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;case 4:if(!($interfaceIsEqual(k,$ifaceNil))){c.error(new AM.ptr($clone(d,E.Value).Type(),k));}$s=-1;return;}return;}if($f===undefined){$f={$blk:BA};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$r=$r;return $f;};BB=function(c,d,e){var c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:f=$clone(d,E.Value).Addr();if($clone(f,E.Value).IsNil()){c.Buffer.WriteString("null");$s=-1;return;}g=$clone(f,E.Value).Interface();$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}h=$assertType(g,AI);j=h.MarshalJSON();$s=2;case 2:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;k=i[0];l=i[1];if($interfaceIsEqual(l,$ifaceNil)){$s=3;continue;}$s=4;continue;case 3:m=CR(c.Buffer,k,true);$s=5;case 5:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}l=m;case 4:if(!($interfaceIsEqual(l,$ifaceNil))){c.error(new AM.ptr($clone(d,E.Value).Type(),l));}$s=-1;return;}return;}if($f===undefined){$f={$blk:BB};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};BC=function(c,d,e){var c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:if(($clone(d,E.Value).Kind()===22)&&$clone(d,E.Value).IsNil()){c.Buffer.WriteString("null");$s=-1;return;}f=$clone(d,E.Value).Interface();$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=$assertType(f,B.TextMarshaler);i=g.MarshalText();$s=2;case 2:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;j=h[0];k=h[1];if(!($interfaceIsEqual(k,$ifaceNil))){c.error(new AM.ptr($clone(d,E.Value).Type(),k));}c.stringBytes(j);$s=-1;return;}return;}if($f===undefined){$f={$blk:BC};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};BD=function(c,d,e){var c,d,e,f,g,h,i,j,k,l,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:f=$clone(d,E.Value).Addr();if($clone(f,E.Value).IsNil()){c.Buffer.WriteString("null");$s=-1;return;}g=$clone(f,E.Value).Interface();$s=1;case 1:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}h=$assertType(g,B.TextMarshaler);j=h.MarshalText();$s=2;case 2:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;k=i[0];l=i[1];if(!($interfaceIsEqual(l,$ifaceNil))){c.error(new AM.ptr($clone(d,E.Value).Type(),l));}c.stringBytes(k);$s=-1;return;}return;}if($f===undefined){$f={$blk:BD};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$r=$r;return $f;};BE=function(c,d,e){var c,d,e;if(e){c.Buffer.WriteByte(34);}if($clone(d,E.Value).Bool()){c.Buffer.WriteString("true");}else{c.Buffer.WriteString("false");}if(e){c.Buffer.WriteByte(34);}};BF=function(c,d,e){var c,d,e,f;f=G.AppendInt($subslice(new EX(c.scratch),0,0),$clone(d,E.Value).Int(),10);if(e){c.Buffer.WriteByte(34);}c.Buffer.Write(f);if(e){c.Buffer.WriteByte(34);}};BG=function(c,d,e){var c,d,e,f;f=G.AppendUint($subslice(new EX(c.scratch),0,0),$clone(d,E.Value).Uint(),10);if(e){c.Buffer.WriteByte(34);}c.Buffer.Write(f);if(e){c.Buffer.WriteByte(34);}};BH.prototype.encode=function(c,d,e){var c,d,e,f,g,h;f=this.$val;g=$clone(d,E.Value).Float();if(L.IsInf(g,0)||L.IsNaN(g)){c.error(new AK.ptr($clone(d,E.Value),G.FormatFloat(g,103,-1,((f>>0)))));}h=G.AppendFloat($subslice(new EX(c.scratch),0,0),g,103,-1,((f>>0)));if(e){c.Buffer.WriteByte(34);}c.Buffer.Write(h);if(e){c.Buffer.WriteByte(34);}};$ptrType(BH).prototype.encode=function(c,d,e){return new BH(this.$get()).encode(c,d,e);};BK=function(c,d,e){var c,d,e,f,g,h,i,j,k,l,m,n,o,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:if($interfaceIsEqual($clone(d,E.Value).Type(),AB)){$s=1;continue;}$s=2;continue;case 1:f=$clone(d,E.Value).String();$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f;if(g===""){g="0";}if(!W(g)){$s=4;continue;}$s=5;continue;case 4:h=K.Errorf("json: invalid number literal %q",new ER([new $String(g)]));$s=6;case 6:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}$r=c.error(h);$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 5:c.Buffer.WriteString(g);$s=-1;return;case 2:if(e){$s=8;continue;}$s=9;continue;case 8:j=$clone(d,E.Value).String();$s=11;case 11:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=AF(new $String(j));$s=12;case 12:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}i=k;l=i[0];m=i[1];if(!($interfaceIsEqual(m,$ifaceNil))){c.error(m);}c.string(($bytesToString(l)));$s=10;continue;case 9:n=$clone(d,E.Value).String();$s=13;case 13:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}o=c.string(n);$s=14;case 14:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}o;case 10:$s=-1;return;}return;}if($f===undefined){$f={$blk:BK};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.$s=$s;$f.$r=$r;return $f;};BL=function(c,d,e){var c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:if($clone(d,E.Value).IsNil()){c.Buffer.WriteString("null");$s=-1;return;}f=$clone(d,E.Value).Elem();$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}$r=c.reflectValue($clone(f,E.Value));$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;}return;}if($f===undefined){$f={$blk:BL};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};BM=function(c,d,e){var c,d,e;c.error(new AJ.ptr($clone(d,E.Value).Type()));};BN.ptr.prototype.encode=function(c,d,e){var c,d,e,f,g,h,i,j,k,l,m,n,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:f=this;c.Buffer.WriteByte(123);g=true;h=f.fields;i=0;case 1:if(!(i<h.$length)){$s=2;continue;}j=i;k=$clone(((i<0||i>=h.$length)?($throwRuntimeError("index out of range"),undefined):h.$array[h.$offset+i]),CE);l=CB($clone(d,E.Value),k.index);$s=3;case 3:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}m=l;if(!$clone(m,E.Value).IsValid()||k.omitEmpty&&AR($clone(m,E.Value))){$s=4;continue;}$s=5;continue;case 4:i++;$s=1;continue;case 5:if(g){g=false;}else{c.Buffer.WriteByte(44);}c.string(k.name);c.Buffer.WriteByte(58);$r=(n=f.fieldEncs,((j<0||j>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+j]))(c,$clone(m,E.Value),k.quoted);$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}i++;$s=1;continue;case 2:c.Buffer.WriteByte(125);$s=-1;return;}return;}if($f===undefined){$f={$blk:BN.ptr.prototype.encode};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.$s=$s;$f.$r=$r;return $f;};BN.prototype.encode=function(c,d,e){return this.$val.encode(c,d,e);};BO=function(c){var c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=CL(c);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;f=new BN.ptr(e,$makeSlice(FI,e.$length));g=e;h=0;case 2:if(!(h<g.$length)){$s=3;continue;}i=h;j=$clone(((h<0||h>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+h]),CE);k=CC(c,j.index);$s=4;case 4:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}l=AV(k);$s=5;case 5:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}(m=f.fieldEncs,((i<0||i>=m.$length)?($throwRuntimeError("index out of range"),undefined):m.$array[m.$offset+i]=l));h++;$s=2;continue;case 3:$s=-1;return $methodVal(f,"encode");}return;}if($f===undefined){$f={$blk:BO};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};BP.ptr.prototype.encode=function(c,d,e){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:f=this;if($clone(d,E.Value).IsNil()){c.Buffer.WriteString("null");$s=-1;return;}c.Buffer.WriteByte(123);h=$clone(d,E.Value).MapKeys();$s=1;case 1:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}i=(g=h,$subslice(new CD(g.$array),g.$offset,g.$offset+g.$length));$r=M.Sort(i);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}j=i;k=0;case 3:if(!(k<j.$length)){$s=4;continue;}l=k;m=((k<0||k>=j.$length)?($throwRuntimeError("index out of range"),undefined):j.$array[j.$offset+k]);if(l>0){c.Buffer.WriteByte(44);}n=$clone(m,E.Value).String();$s=5;case 5:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}o=c.string(n);$s=6;case 6:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}o;c.Buffer.WriteByte(58);p=c;q=$clone(d,E.Value).MapIndex($clone(m,E.Value));$s=7;case 7:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}r=$clone(q,E.Value);$r=f.elemEnc(p,r,false);$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}k++;$s=3;continue;case 4:c.Buffer.WriteByte(125);$s=-1;return;}return;}if($f===undefined){$f={$blk:BP.ptr.prototype.encode};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.$s=$s;$f.$r=$r;return $f;};BP.prototype.encode=function(c,d,e){return this.$val.encode(c,d,e);};BQ=function(c){var c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=c.Key();$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d.Kind();$s=4;case 4:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}if(!((e===24))){$s=1;continue;}$s=2;continue;case 1:$s=-1;return BM;case 2:f=c.Elem();$s=5;case 5:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=AV(f);$s=6;case 6:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}h=new BP.ptr(g);$s=-1;return $methodVal(h,"encode");}return;}if($f===undefined){$f={$blk:BQ};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};BR=function(c,d,e){var c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:if($clone(d,E.Value).IsNil()){c.Buffer.WriteString("null");$s=-1;return;}f=$clone(d,E.Value).Bytes();$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f;c.Buffer.WriteByte(34);if(g.$length<1024){$s=2;continue;}$s=3;continue;case 2:h=$makeSlice(EX,C.StdEncoding.EncodedLen(g.$length));C.StdEncoding.Encode(h,g);c.Buffer.Write(h);$s=4;continue;case 3:i=C.NewEncoder(C.StdEncoding,c);j=i.Write(g);$s=5;case 5:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}j;k=i.Close();$s=6;case 6:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}k;case 4:c.Buffer.WriteByte(34);$s=-1;return;}return;}if($f===undefined){$f={$blk:BR};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};BS.ptr.prototype.encode=function(c,d,e){var c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:f=this;if($clone(d,E.Value).IsNil()){c.Buffer.WriteString("null");$s=-1;return;}$r=f.arrayEnc(c,$clone(d,E.Value),false);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;}return;}if($f===undefined){$f={$blk:BS.ptr.prototype.encode};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};BS.prototype.encode=function(c,d,e){return this.$val.encode(c,d,e);};BT=function(c){var c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=c.Elem();$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d.Kind();$s=4;case 4:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}if(e===8){$s=1;continue;}$s=2;continue;case 1:$s=-1;return BR;case 2:f=BV(c);$s=5;case 5:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=new BS.ptr(f);$s=-1;return $methodVal(g,"encode");}return;}if($f===undefined){$f={$blk:BT};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};BU.ptr.prototype.encode=function(c,d,e){var c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:f=this;c.Buffer.WriteByte(91);g=$clone(d,E.Value).Len();h=0;case 1:if(!(h<g)){$s=2;continue;}if(h>0){c.Buffer.WriteByte(44);}i=c;j=$clone(d,E.Value).Index(h);$s=3;case 3:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=$clone(j,E.Value);$r=f.elemEnc(i,k,false);$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}h=h+(1)>>0;$s=1;continue;case 2:c.Buffer.WriteByte(93);$s=-1;return;}return;}if($f===undefined){$f={$blk:BU.ptr.prototype.encode};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};BU.prototype.encode=function(c,d,e){return this.$val.encode(c,d,e);};BV=function(c){var c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=c.Elem();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=AV(d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=new BU.ptr(e);$s=-1;return $methodVal(f,"encode");}return;}if($f===undefined){$f={$blk:BV};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};BW.ptr.prototype.encode=function(c,d,e){var c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:f=this;if($clone(d,E.Value).IsNil()){c.Buffer.WriteString("null");$s=-1;return;}g=c;h=$clone(d,E.Value).Elem();$s=1;case 1:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}i=$clone(h,E.Value);j=e;$r=f.elemEnc(g,i,j);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;}return;}if($f===undefined){$f={$blk:BW.ptr.prototype.encode};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};BW.prototype.encode=function(c,d,e){return this.$val.encode(c,d,e);};BX=function(c){var c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=c.Elem();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=AV(d);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=new BW.ptr(e);$s=-1;return $methodVal(f,"encode");}return;}if($f===undefined){$f={$blk:BX};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};BY.ptr.prototype.encode=function(c,d,e){var c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:f=this;if($clone(d,E.Value).CanAddr()){$s=1;continue;}$s=2;continue;case 1:$r=f.canAddrEnc(c,$clone(d,E.Value),e);$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=3;continue;case 2:$r=f.elseEnc(c,$clone(d,E.Value),e);$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 3:$s=-1;return;}return;}if($f===undefined){$f={$blk:BY.ptr.prototype.encode};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};BY.prototype.encode=function(c,d,e){return this.$val.encode(c,d,e);};BZ=function(c,d){var c,d,e;e=new BY.ptr(c,d);return $methodVal(e,"encode");};CA=function(c){var c,d,e,f,g;if(c===""){return false;}d=c;e=0;while(true){if(!(e<d.length)){break;}f=$decodeRune(d,e);g=f[0];if(N.ContainsRune("!#$%&()*+-./:<=>?@[]^_{|}~ ",g)){}else if(!H.IsLetter(g)&&!H.IsDigit(g)){return false;}e+=f[1];}return true;};CB=function(c,d){var c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:e=d;f=0;case 1:if(!(f<e.$length)){$s=2;continue;}g=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);if($clone(c,E.Value).Kind()===22){$s=3;continue;}$s=4;continue;case 3:if($clone(c,E.Value).IsNil()){$s=-1;return new E.Value.ptr(FC.nil,0,0);}h=$clone(c,E.Value).Elem();$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}c=h;case 4:i=$clone(c,E.Value).Field(g);$s=6;case 6:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}c=i;f++;$s=1;continue;case 2:$s=-1;return c;}return;}if($f===undefined){$f={$blk:CB};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};CC=function(c,d){var c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:e=d;f=0;case 1:if(!(f<e.$length)){$s=2;continue;}g=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);h=c.Kind();$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}if(h===22){$s=3;continue;}$s=4;continue;case 3:i=c.Elem();$s=6;case 6:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}c=i;case 4:j=c.Field(g);$s=7;case 7:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}c=j.Type;f++;$s=1;continue;case 2:$s=-1;return c;}return;}if($f===undefined){$f={$blk:CC};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};CD.prototype.Len=function(){var c;c=this;return c.$length;};$ptrType(CD).prototype.Len=function(){return this.$get().Len();};CD.prototype.Swap=function(c,d){var c,d,e,f,g;e=this;f=((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]);g=((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]);((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]=f);((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]=g);};$ptrType(CD).prototype.Swap=function(c,d){return this.$get().Swap(c,d);};CD.prototype.Less=function(c,d){var c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:e=this;f=e.get(c);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=e.get(d);$s=2;case 2:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}$s=-1;return f<g;}return;}if($f===undefined){$f={$blk:CD.prototype.Less};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};$ptrType(CD).prototype.Less=function(c,d){return this.$get().Less(c,d);};CD.prototype.get=function(c){var c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=this;e=$clone(((c<0||c>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+c]),E.Value).String();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}$s=-1;return e;}return;}if($f===undefined){$f={$blk:CD.prototype.get};}$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$ptrType(CD).prototype.get=function(c){return this.$get().get(c);};AO.ptr.prototype.string=function(c){var c,d,e,f,g,h,i,j,k,l;d=this;e=d.Buffer.Len();d.Buffer.WriteByte(34);f=0;g=0;while(true){if(!(g<c.length)){break;}h=c.charCodeAt(g);if(h<128){if(32<=h&&!((h===92))&&!((h===34))&&!((h===60))&&!((h===62))&&!((h===38))){g=g+(1)>>0;continue;}if(f<g){d.Buffer.WriteString($substring(c,f,g));}i=h;if((i===(92))||(i===(34))){d.Buffer.WriteByte(92);d.Buffer.WriteByte(h);}else if(i===(10)){d.Buffer.WriteByte(92);d.Buffer.WriteByte(110);}else if(i===(13)){d.Buffer.WriteByte(92);d.Buffer.WriteByte(114);}else if(i===(9)){d.Buffer.WriteByte(92);d.Buffer.WriteByte(116);}else{d.Buffer.WriteString("\\u00");d.Buffer.WriteByte(AN.charCodeAt((h>>>4<<24>>>24)));d.Buffer.WriteByte(AN.charCodeAt(((h&15)>>>0)));}g=g+(1)>>0;f=g;continue;}j=J.DecodeRuneInString($substring(c,g));k=j[0];l=j[1];if((k===65533)&&(l===1)){if(f<g){d.Buffer.WriteString($substring(c,f,g));}d.Buffer.WriteString("\\ufffd");g=g+(l)>>0;f=g;continue;}if((k===8232)||(k===8233)){if(f<g){d.Buffer.WriteString($substring(c,f,g));}d.Buffer.WriteString("\\u202");d.Buffer.WriteByte(AN.charCodeAt((k&15)));g=g+(l)>>0;f=g;continue;}g=g+(l)>>0;}if(f<c.length){d.Buffer.WriteString($substring(c,f));}d.Buffer.WriteByte(34);return d.Buffer.Len()-e>>0;};AO.prototype.string=function(c){return this.$val.string(c);};AO.ptr.prototype.stringBytes=function(c){var c,d,e,f,g,h,i,j,k,l;d=this;e=d.Buffer.Len();d.Buffer.WriteByte(34);f=0;g=0;while(true){if(!(g<c.$length)){break;}h=((g<0||g>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+g]);if(h<128){if(32<=h&&!((h===92))&&!((h===34))&&!((h===60))&&!((h===62))&&!((h===38))){g=g+(1)>>0;continue;}if(f<g){d.Buffer.Write($subslice(c,f,g));}i=h;if((i===(92))||(i===(34))){d.Buffer.WriteByte(92);d.Buffer.WriteByte(h);}else if(i===(10)){d.Buffer.WriteByte(92);d.Buffer.WriteByte(110);}else if(i===(13)){d.Buffer.WriteByte(92);d.Buffer.WriteByte(114);}else if(i===(9)){d.Buffer.WriteByte(92);d.Buffer.WriteByte(116);}else{d.Buffer.WriteString("\\u00");d.Buffer.WriteByte(AN.charCodeAt((h>>>4<<24>>>24)));d.Buffer.WriteByte(AN.charCodeAt(((h&15)>>>0)));}g=g+(1)>>0;f=g;continue;}j=J.DecodeRune($subslice(c,g));k=j[0];l=j[1];if((k===65533)&&(l===1)){if(f<g){d.Buffer.Write($subslice(c,f,g));}d.Buffer.WriteString("\\ufffd");g=g+(l)>>0;f=g;continue;}if((k===8232)||(k===8233)){if(f<g){d.Buffer.Write($subslice(c,f,g));}d.Buffer.WriteString("\\u202");d.Buffer.WriteByte(AN.charCodeAt((k&15)));g=g+(l)>>0;f=g;continue;}g=g+(l)>>0;}if(f<c.$length){d.Buffer.Write($subslice(c,f));}d.Buffer.WriteByte(34);return d.Buffer.Len()-e>>0;};AO.prototype.stringBytes=function(c){return this.$val.stringBytes(c);};CF=function(c){var c;c.nameBytes=(new EX($stringToBytes(c.name)));c.equalFold=CM(c.nameBytes);return c;};CG.prototype.Len=function(){var c;c=this;return c.$length;};$ptrType(CG).prototype.Len=function(){return this.$get().Len();};CG.prototype.Swap=function(c,d){var c,d,e,f,g;e=this;f=$clone(((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]),CE);g=$clone(((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]),CE);CE.copy(((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]),f);CE.copy(((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]),g);};$ptrType(CG).prototype.Swap=function(c,d){return this.$get().Swap(c,d);};CG.prototype.Less=function(c,d){var c,d,e;e=this;if(!(((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]).name===((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]).name)){return((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]).name<((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]).name;}if(!((((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]).index.$length===((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]).index.$length))){return((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]).index.$length<((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]).index.$length;}if(!(((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]).tag===((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]).tag)){return((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]).tag;}return($subslice(new CH(e.$array),e.$offset,e.$offset+e.$length)).Less(c,d);};$ptrType(CG).prototype.Less=function(c,d){return this.$get().Less(c,d);};CH.prototype.Len=function(){var c;c=this;return c.$length;};$ptrType(CH).prototype.Len=function(){return this.$get().Len();};CH.prototype.Swap=function(c,d){var c,d,e,f,g;e=this;f=$clone(((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]),CE);g=$clone(((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]),CE);CE.copy(((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]),f);CE.copy(((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]),g);};$ptrType(CH).prototype.Swap=function(c,d){return this.$get().Swap(c,d);};CH.prototype.Less=function(c,d){var c,d,e,f,g,h,i,j,k;e=this;f=((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]).index;g=0;while(true){if(!(g<f.$length)){break;}h=g;i=((g<0||g>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+g]);if(h>=((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]).index.$length){return false;}if(!((i===(j=((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]).index,((h<0||h>=j.$length)?($throwRuntimeError("index out of range"),undefined):j.$array[j.$offset+h]))))){return i<(k=((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]).index,((h<0||h>=k.$length)?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+h]));}g++;}return((c<0||c>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+c]).index.$length<((d<0||d>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+d]).index.$length;};$ptrType(CH).prototype.Less=function(c,d){return this.$get().Less(c,d);};CI=function(c){var aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,bf,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;ai=$f.ai;aj=$f.aj;ak=$f.ak;al=$f.al;am=$f.am;an=$f.an;ao=$f.ao;ap=$f.ap;aq=$f.aq;ar=$f.ar;as=$f.as;at=$f.at;au=$f.au;av=$f.av;aw=$f.aw;ax=$f.ax;ay=$f.ay;az=$f.az;ba=$f.ba;bb=$f.bb;bc=$f.bc;bd=$f.bd;be=$f.be;bf=$f.bf;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=new EU([]);e=new EU([new CE.ptr("",EX.nil,$throwNilPointerError,false,FB.nil,c,false,false)]);f=$makeMap(E.Type.keyFor,[]);g=$makeMap(E.Type.keyFor,[]);h=$makeMap(E.Type.keyFor,[]);i=EU.nil;case 1:if(!(e.$length>0)){$s=2;continue;}j=e;k=$subslice(d,0,0);d=j;e=k;l=g;m=$makeMap(E.Type.keyFor,[]);f=l;g=m;n=d;o=0;case 3:if(!(o<n.$length)){$s=4;continue;}p=$clone(((o<0||o>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+o]),CE);if((q=h[E.Type.keyFor(p.typ)],q!==undefined?q.v:false)){$s=5;continue;}$s=6;continue;case 5:o++;$s=3;continue;case 6:r=p.typ;(h||$throwRuntimeError("assignment to entry in nil map"))[E.Type.keyFor(r)]={k:r,v:true};s=0;case 7:t=p.typ.NumField();$s=9;case 9:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}if(!(s<t)){$s=8;continue;}u=p.typ.Field(s);$s=10;case 10:if($c){$c=false;u=u.$blk();}if(u&&u.$blk!==undefined){break s;}v=$clone(u,E.StructField);if(!(v.PkgPath==="")&&!v.Anonymous){$s=11;continue;}$s=12;continue;case 11:s=s+(1)>>0;$s=7;continue;case 12:w=new E.StructTag(v.Tag).Get("json");if(w==="-"){$s=13;continue;}$s=14;continue;case 13:s=s+(1)>>0;$s=7;continue;case 14:x=EQ(w);y=x[0];z=x[1];if(!CA(y)){y="";}aa=$makeSlice(FB,(p.index.$length+1>>0));$copySlice(aa,p.index);(ab=p.index.$length,((ab<0||ab>=aa.$length)?($throwRuntimeError("index out of range"),undefined):aa.$array[aa.$offset+ab]=s));ac=v.Type;ae=ac.Name();$s=18;case 18:if($c){$c=false;ae=ae.$blk();}if(ae&&ae.$blk!==undefined){break s;}if(!(ae==="")){ad=false;$s=17;continue s;}af=ac.Kind();$s=19;case 19:if($c){$c=false;af=af.$blk();}if(af&&af.$blk!==undefined){break s;}ad=af===22;case 17:if(ad){$s=15;continue;}$s=16;continue;case 15:ag=ac.Elem();$s=20;case 20:if($c){$c=false;ag=ag.$blk();}if(ag&&ag.$blk!==undefined){break s;}ac=ag;case 16:ah=false;if(new EP(z).Contains("string")){$s=21;continue;}$s=22;continue;case 21:ai=ac.Kind();$s=24;case 24:if($c){$c=false;ai=ai.$blk();}if(ai&&ai.$blk!==undefined){break s;}aj=ai;if((aj===(1))||(aj===(2))||(aj===(3))||(aj===(4))||(aj===(5))||(aj===(6))||(aj===(7))||(aj===(8))||(aj===(9))||(aj===(10))||(aj===(11))||(aj===(13))||(aj===(14))||(aj===(24))){ah=true;}case 23:case 22:if(!(y==="")||!v.Anonymous){ak=true;$s=27;continue s;}al=ac.Kind();$s=28;case 28:if($c){$c=false;al=al.$blk();}if(al&&al.$blk!==undefined){break s;}ak=!((al===25));case 27:if(ak){$s=25;continue;}$s=26;continue;case 25:am=!(y==="");if(y===""){y=v.Name;}i=$append(i,CF(new CE.ptr(y,EX.nil,$throwNilPointerError,am,aa,ac,new EP(z).Contains("omitempty"),ah)));if((an=f[E.Type.keyFor(p.typ)],an!==undefined?an.v:0)>1){i=$append(i,(ao=i.$length-1>>0,((ao<0||ao>=i.$length)?($throwRuntimeError("index out of range"),undefined):i.$array[i.$offset+ao])));}s=s+(1)>>0;$s=7;continue;case 26:ap=ac;(g||$throwRuntimeError("assignment to entry in nil map"))[E.Type.keyFor(ap)]={k:ap,v:(aq=g[E.Type.keyFor(ac)],aq!==undefined?aq.v:0)+(1)>>0};if((ar=g[E.Type.keyFor(ac)],ar!==undefined?ar.v:0)===1){$s=29;continue;}$s=30;continue;case 29:as=ac.Name();$s=31;case 31:if($c){$c=false;as=as.$blk();}if(as&&as.$blk!==undefined){break s;}at=CF(new CE.ptr(as,EX.nil,$throwNilPointerError,false,aa,ac,false,false));$s=32;case 32:if($c){$c=false;at=at.$blk();}if(at&&at.$blk!==undefined){break s;}e=$append(e,at);case 30:s=s+(1)>>0;$s=7;continue;case 8:o++;$s=3;continue;case 4:$s=1;continue;case 2:$r=M.Sort(($subslice(new CG(i.$array),i.$offset,i.$offset+i.$length)));$s=33;case 33:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}au=$subslice(i,0,0);av=0;aw=0;ax=av;ay=aw;case 34:if(!(ay<i.$length)){$s=35;continue;}az=$clone(((ay<0||ay>=i.$length)?($throwRuntimeError("index out of range"),undefined):i.$array[i.$offset+ay]),CE);ba=az.name;ax=1;while(true){if(!((ay+ax>>0)<i.$length)){break;}bc=$clone((bb=ay+ax>>0,((bb<0||bb>=i.$length)?($throwRuntimeError("index out of range"),undefined):i.$array[i.$offset+bb])),CE);if(!(bc.name===ba)){break;}ax=ax+(1)>>0;}if(ax===1){au=$append(au,az);ay=ay+(ax)>>0;$s=34;continue;}bd=CJ($subslice(i,ay,(ay+ax>>0)));be=$clone(bd[0],CE);bf=bd[1];if(bf){au=$append(au,be);}ay=ay+(ax)>>0;$s=34;continue;case 35:i=au;$r=M.Sort(($subslice(new CH(i.$array),i.$offset,i.$offset+i.$length)));$s=36;case 36:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return i;}return;}if($f===undefined){$f={$blk:CI};}$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.ai=ai;$f.aj=aj;$f.ak=ak;$f.al=al;$f.am=am;$f.an=an;$f.ao=ao;$f.ap=ap;$f.aq=aq;$f.ar=ar;$f.as=as;$f.at=at;$f.au=au;$f.av=av;$f.aw=aw;$f.ax=ax;$f.ay=ay;$f.az=az;$f.ba=ba;$f.bb=bb;$f.bc=bc;$f.bd=bd;$f.be=be;$f.bf=bf;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};CJ=function(c){var c,d,e,f,g,h,i;d=(0>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+0]).index.$length;e=-1;f=c;g=0;while(true){if(!(g<f.$length)){break;}h=g;i=$clone(((g<0||g>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+g]),CE);if(i.index.$length>d){c=$subslice(c,0,h);break;}if(i.tag){if(e>=0){return[new CE.ptr("",EX.nil,$throwNilPointerError,false,FB.nil,$ifaceNil,false,false),false];}e=h;}g++;}if(e>=0){return[((e<0||e>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+e]),true];}if(c.$length>1){return[new CE.ptr("",EX.nil,$throwNilPointerError,false,FB.nil,$ifaceNil,false,false),false];}return[(0>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+0]),true];};CL=function(c){var c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$r=CK.RWMutex.RLock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}e=(d=CK.m[E.Type.keyFor(c)],d!==undefined?d.v:EU.nil);$r=CK.RWMutex.RUnlock();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}if(!(e===EU.nil)){$s=-1;return e;}f=CI(c);$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;if(e===EU.nil){e=new EU([]);}$r=CK.RWMutex.Lock();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}if(CK.m===false){CK.m=$makeMap(E.Type.keyFor,[]);}g=c;(CK.m||$throwRuntimeError("assignment to entry in nil map"))[E.Type.keyFor(g)]={k:g,v:e};$r=CK.RWMutex.Unlock();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return e;}return;}if($f===undefined){$f={$blk:CL};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};CM=function(c){var c,d,e,f,g,h,i;d=false;e=false;f=c;g=0;while(true){if(!(g<f.$length)){break;}h=((g<0||g>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+g]);if(h>=128){return A.EqualFold;}i=(h&223)>>>0;if(i<65||i>90){d=true;}else if((i===75)||(i===83)){e=true;}g++;}if(e){return CN;}if(d){return CO;}return CP;};CN=function(c,d){var c,d,e,f,g,h,i,j,k,l,m;e=c;f=0;while(true){if(!(f<e.$length)){break;}g=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);if(d.$length===0){return false;}h=(0>=d.$length?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+0]);if(h<128){if(!((g===h))){i=(g&223)>>>0;if(65<=i&&i<=90){if(!((i===((h&223)>>>0)))){return false;}}else{return false;}}d=$subslice(d,1);f++;continue;}j=J.DecodeRune(d);k=j[0];l=j[1];m=g;if((m===(115))||(m===(83))){if(!((k===383))){return false;}}else if((m===(107))||(m===(75))){if(!((k===8490))){return false;}}else{return false;}d=$subslice(d,l);f++;}if(d.$length>0){return false;}return true;};CO=function(c,d){var c,d,e,f,g,h,i;if(!((c.$length===d.$length))){return false;}e=c;f=0;while(true){if(!(f<e.$length)){break;}g=f;h=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);i=((g<0||g>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+g]);if(h===i){f++;continue;}if((97<=h&&h<=122)||(65<=h&&h<=90)){if(!((((h&223)>>>0)===((i&223)>>>0)))){return false;}}else{return false;}f++;}return true;};CP=function(c,d){var c,d,e,f,g,h;if(!((c.$length===d.$length))){return false;}e=c;f=0;while(true){if(!(f<e.$length)){break;}g=f;h=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);if(!((((h&223)>>>0)===((((g<0||g>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+g])&223)>>>0)))){return false;}f++;}return true;};CR=function(c,d,e){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:f=[f];g=c.Len();f[0]=new CX.ptr($throwNilPointerError,false,FB.nil,$ifaceNil,false,0,$throwNilPointerError,new $Int64(0,0));f[0].reset();h=0;i=d;j=0;case 1:if(!(j<i.$length)){$s=2;continue;}k=j;l=((j<0||j>=i.$length)?($throwRuntimeError("index out of range"),undefined):i.$array[i.$offset+j]);if(e&&((l===60)||(l===62)||(l===38))){if(h<k){c.Write($subslice(d,h,k));}c.WriteString("\\u00");c.WriteByte(AN.charCodeAt((l>>>4<<24>>>24)));c.WriteByte(AN.charCodeAt(((l&15)>>>0)));h=k+1>>0;}if((l===226)&&(k+2>>0)<d.$length&&((m=k+1>>0,((m<0||m>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+m]))===128)&&((((n=k+2>>0,((n<0||n>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+n]))&~1)<<24>>>24)===168)){if(h<k){c.Write($subslice(d,h,k));}c.WriteString("\\u202");c.WriteByte(AN.charCodeAt((((o=k+2>>0,((o<0||o>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+o]))&15)>>>0)));h=k+3>>0;}p=f[0].step(f[0],l);$s=3;case 3:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}q=p;if(q>=9){if(q===11){$s=2;continue;}if(h<k){c.Write($subslice(d,h,k));}h=k+1>>0;}j++;$s=1;continue;case 2:r=f[0].eof();$s=6;case 6:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}if(r===11){$s=4;continue;}$s=5;continue;case 4:c.Truncate(g);$s=-1;return f[0].err;case 5:if(h<d.$length){c.Write($subslice(d,h));}$s=-1;return $ifaceNil;}return;}if($f===undefined){$f={$blk:CR};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.$s=$s;$f.$r=$r;return $f;};CU=function(c,d){var c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d.reset();e=c;f=0;case 1:if(!(f<e.$length)){$s=2;continue;}g=((f<0||f>=e.$length)?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+f]);d.bytes=(h=d.bytes,i=new $Int64(0,1),new $Int64(h.$high+i.$high,h.$low+i.$low));j=d.step(d,g);$s=5;case 5:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}if(j===11){$s=3;continue;}$s=4;continue;case 3:$s=-1;return d.err;case 4:f++;$s=1;continue;case 2:k=d.eof();$s=8;case 8:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}if(k===11){$s=6;continue;}$s=7;continue;case 6:$s=-1;return d.err;case 7:$s=-1;return $ifaceNil;}return;}if($f===undefined){$f={$blk:CU};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};CV=function(c,d){var aa,ab,ac,ad,ae,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:e=EX.nil;f=EX.nil;g=$ifaceNil;d.reset();h=c;i=0;case 1:if(!(i<h.$length)){$s=2;continue;}j=i;k=((i<0||i>=h.$length)?($throwRuntimeError("index out of range"),undefined):h.$array[h.$offset+i]);l=d.step(d,k);$s=3;case 3:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}m=l;if(m>=5){$s=4;continue;}$s=5;continue;case 4:n=m;if((n===(5))||(n===(8))){$s=7;continue;}if(n===(11)){$s=8;continue;}if(n===(10)){$s=9;continue;}$s=10;continue;case 7:o=d.step(d,32);$s=13;case 13:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}if(o===10){$s=11;continue;}$s=12;continue;case 11:p=$subslice(c,0,(j+1>>0));q=$subslice(c,(j+1>>0));r=$ifaceNil;e=p;f=q;g=r;$s=-1;return[e,f,g];case 12:$s=10;continue;case 8:s=EX.nil;t=EX.nil;u=d.err;e=s;f=t;g=u;$s=-1;return[e,f,g];case 9:v=$subslice(c,0,j);w=$subslice(c,j);x=$ifaceNil;e=v;f=w;g=x;$s=-1;return[e,f,g];case 10:case 6:case 5:i++;$s=1;continue;case 2:y=d.eof();$s=16;case 16:if($c){$c=false;y=y.$blk();}if(y&&y.$blk!==undefined){break s;}if(y===11){$s=14;continue;}$s=15;continue;case 14:z=EX.nil;aa=EX.nil;ab=d.err;e=z;f=aa;g=ab;$s=-1;return[e,f,g];case 15:ac=c;ad=EX.nil;ae=$ifaceNil;e=ac;f=ad;g=ae;$s=-1;return[e,f,g];}return;}if($f===undefined){$f={$blk:CV};}$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};CW.ptr.prototype.Error=function(){var c;c=this;return c.msg;};CW.prototype.Error=function(){return this.$val.Error();};CX.ptr.prototype.reset=function(){var c;c=this;c.step=DA;c.parseState=$subslice(c.parseState,0,0);c.err=$ifaceNil;c.redo=false;c.endTop=false;};CX.prototype.reset=function(){return this.$val.reset();};CX.ptr.prototype.eof=function(){var c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;if(!($interfaceIsEqual(c.err,$ifaceNil))){$s=-1;return 11;}if(c.endTop){$s=-1;return 10;}d=c.step(c,32);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;if(c.endTop){$s=-1;return 10;}if($interfaceIsEqual(c.err,$ifaceNil)){c.err=new CW.ptr("unexpected end of JSON input",c.bytes);}$s=-1;return 11;}return;}if($f===undefined){$f={$blk:CX.ptr.prototype.eof};}$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};CX.prototype.eof=function(){return this.$val.eof();};CX.ptr.prototype.pushParseState=function(c){var c,d;d=this;d.parseState=$append(d.parseState,c);};CX.prototype.pushParseState=function(c){return this.$val.pushParseState(c);};CX.ptr.prototype.popParseState=function(){var c,d;c=this;d=c.parseState.$length-1>>0;c.parseState=$subslice(c.parseState,0,d);c.redo=false;if(d===0){c.step=DE;c.endTop=true;}else{c.step=DD;}};CX.prototype.popParseState=function(){return this.$val.popParseState();};CY=function(c){var c;return(c===32)||(c===9)||(c===13)||(c===10);};CZ=function(c,d){var c,d;if(d<=32&&CY(d)){return 9;}if(d===93){return DD(c,d);}return DA(c,d);};DA=function(c,d){var c,d,e;if(d<=32&&CY(d)){return 9;}e=d;if(e===(123)){c.step=DB;c.pushParseState(0);return 2;}else if(e===(91)){c.step=CZ;c.pushParseState(2);return 6;}else if(e===(34)){c.step=DF;return 1;}else if(e===(45)){c.step=DL;return 1;}else if(e===(48)){c.step=DN;return 1;}else if(e===(116)){c.step=DT;return 1;}else if(e===(102)){c.step=DW;return 1;}else if(e===(110)){c.step=EA;return 1;}if(49<=d&&d<=57){c.step=DM;return 1;}return c.error(d,"looking for beginning of value");};DB=function(c,d){var c,d,e,f,g;if(d<=32&&CY(d)){return 9;}if(d===125){e=c.parseState.$length;(f=c.parseState,g=e-1>>0,((g<0||g>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+g]=1));return DD(c,d);}return DC(c,d);};DC=function(c,d){var c,d;if(d<=32&&CY(d)){return 9;}if(d===34){c.step=DF;return 1;}return c.error(d,"looking for beginning of object key string");};DD=function(c,d){var c,d,e,f,g,h,i,j,k,l,m;e=c.parseState.$length;if(e===0){c.step=DE;c.endTop=true;return DE(c,d);}if(d<=32&&CY(d)){c.step=DD;return 9;}h=(f=c.parseState,g=e-1>>0,((g<0||g>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+g]));i=h;if(i===(0)){if(d===58){(j=c.parseState,k=e-1>>0,((k<0||k>=j.$length)?($throwRuntimeError("index out of range"),undefined):j.$array[j.$offset+k]=1));c.step=DA;return 3;}return c.error(d,"after object key");}else if(i===(1)){if(d===44){(l=c.parseState,m=e-1>>0,((m<0||m>=l.$length)?($throwRuntimeError("index out of range"),undefined):l.$array[l.$offset+m]=0));c.step=DC;return 4;}if(d===125){c.popParseState();return 5;}return c.error(d,"after object key:value pair");}else if(i===(2)){if(d===44){c.step=DA;return 7;}if(d===93){c.popParseState();return 8;}return c.error(d,"after array element");}return c.error(d,"");};DE=function(c,d){var c,d;if(!((d===32))&&!((d===9))&&!((d===13))&&!((d===10))){c.error(d,"after top-level value");}return 10;};DF=function(c,d){var c,d;if(d===34){c.step=DD;return 0;}if(d===92){c.step=DG;return 0;}if(d<32){return c.error(d,"in string literal");}return 0;};DG=function(c,d){var c,d,e;e=d;if((e===(98))||(e===(102))||(e===(110))||(e===(114))||(e===(116))||(e===(92))||(e===(47))||(e===(34))){c.step=DF;return 0;}else if(e===(117)){c.step=DH;return 0;}return c.error(d,"in string escape code");};DH=function(c,d){var c,d;if(48<=d&&d<=57||97<=d&&d<=102||65<=d&&d<=70){c.step=DI;return 0;}return c.error(d,"in \\u hexadecimal character escape");};DI=function(c,d){var c,d;if(48<=d&&d<=57||97<=d&&d<=102||65<=d&&d<=70){c.step=DJ;return 0;}return c.error(d,"in \\u hexadecimal character escape");};DJ=function(c,d){var c,d;if(48<=d&&d<=57||97<=d&&d<=102||65<=d&&d<=70){c.step=DK;return 0;}return c.error(d,"in \\u hexadecimal character escape");};DK=function(c,d){var c,d;if(48<=d&&d<=57||97<=d&&d<=102||65<=d&&d<=70){c.step=DF;return 0;}return c.error(d,"in \\u hexadecimal character escape");};DL=function(c,d){var c,d;if(d===48){c.step=DN;return 0;}if(49<=d&&d<=57){c.step=DM;return 0;}return c.error(d,"in numeric literal");};DM=function(c,d){var c,d;if(48<=d&&d<=57){c.step=DM;return 0;}return DN(c,d);};DN=function(c,d){var c,d;if(d===46){c.step=DO;return 0;}if((d===101)||(d===69)){c.step=DQ;return 0;}return DD(c,d);};DO=function(c,d){var c,d;if(48<=d&&d<=57){c.step=DP;return 0;}return c.error(d,"after decimal point in numeric literal");};DP=function(c,d){var c,d;if(48<=d&&d<=57){return 0;}if((d===101)||(d===69)){c.step=DQ;return 0;}return DD(c,d);};DQ=function(c,d){var c,d;if((d===43)||(d===45)){c.step=DR;return 0;}return DR(c,d);};DR=function(c,d){var c,d;if(48<=d&&d<=57){c.step=DS;return 0;}return c.error(d,"in exponent of numeric literal");};DS=function(c,d){var c,d;if(48<=d&&d<=57){return 0;}return DD(c,d);};DT=function(c,d){var c,d;if(d===114){c.step=DU;return 0;}return c.error(d,"in literal true (expecting 'r')");};DU=function(c,d){var c,d;if(d===117){c.step=DV;return 0;}return c.error(d,"in literal true (expecting 'u')");};DV=function(c,d){var c,d;if(d===101){c.step=DD;return 0;}return c.error(d,"in literal true (expecting 'e')");};DW=function(c,d){var c,d;if(d===97){c.step=DX;return 0;}return c.error(d,"in literal false (expecting 'a')");};DX=function(c,d){var c,d;if(d===108){c.step=DY;return 0;}return c.error(d,"in literal false (expecting 'l')");};DY=function(c,d){var c,d;if(d===115){c.step=DZ;return 0;}return c.error(d,"in literal false (expecting 's')");};DZ=function(c,d){var c,d;if(d===101){c.step=DD;return 0;}return c.error(d,"in literal false (expecting 'e')");};EA=function(c,d){var c,d;if(d===117){c.step=EB;return 0;}return c.error(d,"in literal null (expecting 'u')");};EB=function(c,d){var c,d;if(d===108){c.step=EC;return 0;}return c.error(d,"in literal null (expecting 'l')");};EC=function(c,d){var c,d;if(d===108){c.step=DD;return 0;}return c.error(d,"in literal null (expecting 'l')");};ED=function(c,d){var c,d;return 11;};CX.ptr.prototype.error=function(c,d){var c,d,e;e=this;e.step=ED;e.err=new CW.ptr("invalid character "+EE(c)+" "+d,e.bytes);return 11;};CX.prototype.error=function(c,d){return this.$val.error(c,d);};EE=function(c){var c,d;if(c===39){return"'\\''";}if(c===34){return"'\"'";}d=G.Quote(($encodeRune(c)));return"'"+$substring(d,1,(d.length-1>>0))+"'";};CX.ptr.prototype.undo=function(c){var c,d;d=this;if(d.redo){$panic(new $String("json: invalid use of scanner"));}d.redoCode=c;d.redoState=d.step;d.step=EF;d.redo=true;};CX.prototype.undo=function(c){return this.$val.undo(c);};EF=function(c,d){var c,d;c.redo=false;c.step=c.redoState;return c.redoCode;};EQ=function(c){var c,d;d=N.Index(c,",");if(!((d===-1))){return[$substring(c,0,d),($substring(c,(d+1>>0)))];}return[c,""];};EP.prototype.Contains=function(c){var c,d,e,f,g,h,i;d=this.$val;if(d.length===0){return false;}e=(d);while(true){if(!(!(e===""))){break;}f="";g=N.Index(e,",");if(g>=0){h=$substring(e,0,g);i=$substring(e,(g+1>>0));e=h;f=i;}if(e===c){return true;}e=f;}return false;};$ptrType(EP).prototype.Contains=function(c){return new EP(this.$get()).Contains(c);};FM.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];FO.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];V.methods=[{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)},{prop:"Float64",name:"Float64",pkg:"",typ:$funcType([],[$Float64,$error],false)},{prop:"Int64",name:"Int64",pkg:"",typ:$funcType([],[$Int64,$error],false)}];FP.methods=[{prop:"unmarshal",name:"unmarshal",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([$emptyInterface],[$error],false)},{prop:"init",name:"init",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([EX],[FP],false)},{prop:"error",name:"error",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([$error],[],false)},{prop:"saveError",name:"saveError",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([$error],[],false)},{prop:"next",name:"next",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([],[EX],false)},{prop:"scanWhile",name:"scanWhile",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([$Int],[$Int],false)},{prop:"value",name:"value",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([E.Value],[],false)},{prop:"valueQuoted",name:"valueQuoted",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([],[$emptyInterface],false)},{prop:"indirect",name:"indirect",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([E.Value,$Bool],[R,B.TextUnmarshaler,E.Value],false)},{prop:"array",name:"array",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([E.Value],[],false)},{prop:"object",name:"object",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([E.Value],[],false)},{prop:"literal",name:"literal",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([E.Value],[],false)},{prop:"convertNumber",name:"convertNumber",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([$String],[$emptyInterface,$error],false)},{prop:"literalStore",name:"literalStore",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([EX,E.Value,$Bool],[],false)},{prop:"valueInterface",name:"valueInterface",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([],[$emptyInterface],false)},{prop:"arrayInterface",name:"arrayInterface",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([],[ER],false)},{prop:"objectInterface",name:"objectInterface",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([],[FD],false)},{prop:"literalInterface",name:"literalInterface",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([],[$emptyInterface],false)}];FQ.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];FR.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];FT.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];FG.methods=[{prop:"marshal",name:"marshal",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([$emptyInterface],[$error],false)},{prop:"error",name:"error",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([$error],[],false)},{prop:"reflectValue",name:"reflectValue",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([E.Value],[],false)},{prop:"string",name:"string",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([$String],[$Int],false)},{prop:"stringBytes",name:"stringBytes",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([EX],[$Int],false)}];BH.methods=[{prop:"encode",name:"encode",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([FG,E.Value,$Bool],[],false)}];FU.methods=[{prop:"encode",name:"encode",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([FG,E.Value,$Bool],[],false)}];FV.methods=[{prop:"encode",name:"encode",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([FG,E.Value,$Bool],[],false)}];FW.methods=[{prop:"encode",name:"encode",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([FG,E.Value,$Bool],[],false)}];FX.methods=[{prop:"encode",name:"encode",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([FG,E.Value,$Bool],[],false)}];FY.methods=[{prop:"encode",name:"encode",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([FG,E.Value,$Bool],[],false)}];FZ.methods=[{prop:"encode",name:"encode",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([FG,E.Value,$Bool],[],false)}];CD.methods=[{prop:"Len",name:"Len",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Swap",name:"Swap",pkg:"",typ:$funcType([$Int,$Int],[],false)},{prop:"Less",name:"Less",pkg:"",typ:$funcType([$Int,$Int],[$Bool],false)},{prop:"get",name:"get",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([$Int],[$String],false)}];CG.methods=[{prop:"Len",name:"Len",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Swap",name:"Swap",pkg:"",typ:$funcType([$Int,$Int],[],false)},{prop:"Less",name:"Less",pkg:"",typ:$funcType([$Int,$Int],[$Bool],false)}];CH.methods=[{prop:"Len",name:"Len",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Swap",name:"Swap",pkg:"",typ:$funcType([$Int,$Int],[],false)},{prop:"Less",name:"Less",pkg:"",typ:$funcType([$Int,$Int],[$Bool],false)}];FL.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];GB.methods=[{prop:"reset",name:"reset",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([],[],false)},{prop:"eof",name:"eof",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([],[$Int],false)},{prop:"pushParseState",name:"pushParseState",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([$Int],[],false)},{prop:"popParseState",name:"popParseState",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([],[],false)},{prop:"error",name:"error",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([$Uint8,$String],[$Int],false)},{prop:"undo",name:"undo",pkg:"github.com/cathalgarvey/fmtless/encoding/json",typ:$funcType([$Int],[],false)}];EP.methods=[{prop:"Contains",name:"Contains",pkg:"",typ:$funcType([$String],[$Bool],false)}];R.init([{prop:"UnmarshalJSON",name:"UnmarshalJSON",pkg:"",typ:$funcType([EX],[$error],false)}]);S.init("",[{prop:"Value",name:"Value",embedded:false,exported:true,typ:$String,tag:""},{prop:"Type",name:"Type",embedded:false,exported:true,typ:E.Type,tag:""},{prop:"Offset",name:"Offset",embedded:false,exported:true,typ:$Int64,tag:""}]);U.init("",[{prop:"Type",name:"Type",embedded:false,exported:true,typ:E.Type,tag:""}]);X.init("github.com/cathalgarvey/fmtless/encoding/json",[{prop:"data",name:"data",embedded:false,exported:false,typ:EX,tag:""},{prop:"off",name:"off",embedded:false,exported:false,typ:$Int,tag:""},{prop:"scan",name:"scan",embedded:false,exported:false,typ:CX,tag:""},{prop:"nextscan",name:"nextscan",embedded:false,exported:false,typ:CX,tag:""},{prop:"savedError",name:"savedError",embedded:false,exported:false,typ:$error,tag:""},{prop:"useNumber",name:"useNumber",embedded:false,exported:false,typ:$Bool,tag:""}]);Z.init("",[]);AI.init([{prop:"MarshalJSON",name:"MarshalJSON",pkg:"",typ:$funcType([],[EX,$error],false)}]);AJ.init("",[{prop:"Type",name:"Type",embedded:false,exported:true,typ:E.Type,tag:""}]);AK.init("",[{prop:"Value",name:"Value",embedded:false,exported:true,typ:E.Value,tag:""},{prop:"Str",name:"Str",embedded:false,exported:true,typ:$String,tag:""}]);AM.init("",[{prop:"Type",name:"Type",embedded:false,exported:true,typ:E.Type,tag:""},{prop:"Err",name:"Err",embedded:false,exported:true,typ:$error,tag:""}]);AO.init("github.com/cathalgarvey/fmtless/encoding/json",[{prop:"Buffer",name:"Buffer",embedded:true,exported:true,typ:A.Buffer,tag:""},{prop:"scratch",name:"scratch",embedded:false,exported:false,typ:FF,tag:""}]);AS.init([FG,E.Value,$Bool],[],false);BN.init("github.com/cathalgarvey/fmtless/encoding/json",[{prop:"fields",name:"fields",embedded:false,exported:false,typ:EU,tag:""},{prop:"fieldEncs",name:"fieldEncs",embedded:false,exported:false,typ:FI,tag:""}]);BP.init("github.com/cathalgarvey/fmtless/encoding/json",[{prop:"elemEnc",name:"elemEnc",embedded:false,exported:false,typ:AS,tag:""}]);BS.init("github.com/cathalgarvey/fmtless/encoding/json",[{prop:"arrayEnc",name:"arrayEnc",embedded:false,exported:false,typ:AS,tag:""}]);BU.init("github.com/cathalgarvey/fmtless/encoding/json",[{prop:"elemEnc",name:"elemEnc",embedded:false,exported:false,typ:AS,tag:""}]);BW.init("github.com/cathalgarvey/fmtless/encoding/json",[{prop:"elemEnc",name:"elemEnc",embedded:false,exported:false,typ:AS,tag:""}]);BY.init("github.com/cathalgarvey/fmtless/encoding/json",[{prop:"canAddrEnc",name:"canAddrEnc",embedded:false,exported:false,typ:AS,tag:""},{prop:"elseEnc",name:"elseEnc",embedded:false,exported:false,typ:AS,tag:""}]);CD.init(E.Value);CE.init("github.com/cathalgarvey/fmtless/encoding/json",[{prop:"name",name:"name",embedded:false,exported:false,typ:$String,tag:""},{prop:"nameBytes",name:"nameBytes",embedded:false,exported:false,typ:EX,tag:""},{prop:"equalFold",name:"equalFold",embedded:false,exported:false,typ:GA,tag:""},{prop:"tag",name:"tag",embedded:false,exported:false,typ:$Bool,tag:""},{prop:"index",name:"index",embedded:false,exported:false,typ:FB,tag:""},{prop:"typ",name:"typ",embedded:false,exported:false,typ:E.Type,tag:""},{prop:"omitEmpty",name:"omitEmpty",embedded:false,exported:false,typ:$Bool,tag:""},{prop:"quoted",name:"quoted",embedded:false,exported:false,typ:$Bool,tag:""}]);CG.init(CE);CH.init(CE);CW.init("github.com/cathalgarvey/fmtless/encoding/json",[{prop:"msg",name:"msg",embedded:false,exported:false,typ:$String,tag:""},{prop:"Offset",name:"Offset",embedded:false,exported:true,typ:$Int64,tag:""}]);CX.init("github.com/cathalgarvey/fmtless/encoding/json",[{prop:"step",name:"step",embedded:false,exported:false,typ:GC,tag:""},{prop:"endTop",name:"endTop",embedded:false,exported:false,typ:$Bool,tag:""},{prop:"parseState",name:"parseState",embedded:false,exported:false,typ:FB,tag:""},{prop:"err",name:"err",embedded:false,exported:false,typ:$error,tag:""},{prop:"redo",name:"redo",embedded:false,exported:false,typ:$Bool,tag:""},{prop:"redoCode",name:"redoCode",embedded:false,exported:false,typ:$Int,tag:""},{prop:"redoState",name:"redoState",embedded:false,exported:false,typ:GC,tag:""},{prop:"bytes",name:"bytes",embedded:false,exported:false,typ:$Int64,tag:""}]);$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=K.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=P.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=L.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=E.$init();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=F.$init();$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=M.$init();$s=10;case 10:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=G.$init();$s=11;case 11:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=N.$init();$s=12;case 12:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=O.$init();$s=13;case 13:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=H.$init();$s=14;case 14:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=I.$init();$s=15;case 15:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=J.$init();$s=16;case 16:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}AT=new ET.ptr(new O.RWMutex.ptr(new O.Mutex.ptr(0,0),0,0,0,0),false);CK=new EW.ptr(new O.RWMutex.ptr(new O.Mutex.ptr(0,0),0,0,0,0),false);Y=D.New("JSON decoder out of sync - data changing underfoot?");AA=(new EX($stringToBytes("null")));AB=E.TypeOf(new V(""));AN="0123456789abcdef";a=E.TypeOf($newDataPointer($ifaceNil,EY)).Elem();$s=17;case 17:if($c){$c=false;a=a.$blk();}if(a&&a.$blk!==undefined){break s;}AW=a;b=E.TypeOf($newDataPointer($ifaceNil,EZ)).Elem();$s=18;case 18:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}AX=b;BI=$methodVal(new BH(32),"encode");BJ=$methodVal(new BH(64),"encode");}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["github.com/gopherjs/gopherjs/nosync"]=(function(){var $pkg={},$init,Once,funcType$1,ptrType$4;	Once = $pkg.Once = $newType(0, $kindStruct, "nosync.Once", true, "github.com/gopherjs/gopherjs/nosync", true, function(doing_, done_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.doing = false;
			this.done = false;
			return;
		}
		this.doing = doing_;
		this.done = done_;
	});
	funcType$1 = $funcType([], [], false);
	ptrType$4 = $ptrType(Once);
	Once.ptr.prototype.Do = function(f) {
		var f, o, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; f = $f.f; o = $f.o; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		o = [o];
		o[0] = this;
		if (o[0].done) {
			$s = -1; return;
		}
		if (o[0].doing) {
			$panic(new $String("nosync: Do called within f"));
		}
		o[0].doing = true;
		$deferred.push([(function(o) { return function() {
			o[0].doing = false;
			o[0].done = true;
		}; })(o), []]);
		$r = f(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Once.ptr.prototype.Do }; } $f.f = f; $f.o = o; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	Once.prototype.Do = function(f) { return this.$val.Do(f); };
	ptrType$4.methods = [{prop: "Do", name: "Do", pkg: "", typ: $funcType([funcType$1], [], false)}];
	Once.init("github.com/gopherjs/gopherjs/nosync", [{prop: "doing", name: "doing", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "done", name: "done", embedded: false, exported: false, typ: $Bool, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["syscall"]=(function(){var $pkg={},$init,errors,js,race,runtime,sync,mmapper,Errno,sliceType,sliceType$1,ptrType$2,arrayType$10,structType,ptrType$28,mapType,funcType$2,funcType$3,warningPrinted,lineBuffer,syscallModule,alreadyTriedToLoad,minusOne,envs,execveDarwin,freebsdConfArch,minRoutingSockaddrLen,mapper,errEAGAIN,errEINVAL,errENOENT,errors$1,init,printWarning,printToConsole,indexByte,funcPC,syscall,syscall6X,rawSyscall,runtime_envs,syscallByName,Syscall,RawSyscall,rsaAlignOf,itoa,uitoa,init$1,errnoErr,libc_write_trampoline,mmap,libc_mmap_trampoline,munmap,libc_munmap_trampoline,execve,libc_execve_trampoline;	errors = $packages["errors"];
	js = $packages["github.com/gopherjs/gopherjs/js"];
	race = $packages["internal/race"];
	runtime = $packages["runtime"];
	sync = $packages["sync"];
	mmapper = $pkg.mmapper = $newType(0, $kindStruct, "syscall.mmapper", true, "syscall", false, function(Mutex_, active_, mmap_, munmap_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Mutex = new sync.Mutex.ptr(0, 0);
			this.active = false;
			this.mmap = $throwNilPointerError;
			this.munmap = $throwNilPointerError;
			return;
		}
		this.Mutex = Mutex_;
		this.active = active_;
		this.mmap = mmap_;
		this.munmap = munmap_;
	});
	Errno = $pkg.Errno = $newType(4, $kindUintptr, "syscall.Errno", true, "syscall", true, null);
	sliceType = $sliceType($Uint8);
	sliceType$1 = $sliceType($String);
	ptrType$2 = $ptrType($Uint8);
	arrayType$10 = $arrayType($Uint8, 32);
	structType = $structType("syscall", [{prop: "addr", name: "addr", embedded: false, exported: false, typ: $Uintptr, tag: ""}, {prop: "len", name: "len", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "cap", name: "cap", embedded: false, exported: false, typ: $Int, tag: ""}]);
	ptrType$28 = $ptrType(mmapper);
	mapType = $mapType(ptrType$2, sliceType);
	funcType$2 = $funcType([$Uintptr, $Uintptr, $Int, $Int, $Int, $Int64], [$Uintptr, $error], false);
	funcType$3 = $funcType([$Uintptr, $Uintptr], [$error], false);
	init = function() {
		$flushConsole = (function() {
			if (!((lineBuffer.$length === 0))) {
				$global.console.log($externalize(($bytesToString(lineBuffer)), $String));
				lineBuffer = sliceType.nil;
			}
		});
	};
	printWarning = function() {
		if (!warningPrinted) {
			$global.console.error($externalize("warning: system calls not available, see https://github.com/gopherjs/gopherjs/blob/master/doc/syscalls.md", $String));
		}
		warningPrinted = true;
	};
	printToConsole = function(b) {
		var b, goPrintToConsole, i;
		goPrintToConsole = $global.goPrintToConsole;
		if (!(goPrintToConsole === undefined)) {
			goPrintToConsole(b);
			return;
		}
		lineBuffer = $appendSlice(lineBuffer, b);
		while (true) {
			i = indexByte(lineBuffer, 10);
			if (i === -1) {
				break;
			}
			$global.console.log($externalize(($bytesToString($subslice(lineBuffer, 0, i))), $String));
			lineBuffer = $subslice(lineBuffer, (i + 1 >> 0));
		}
	};
	indexByte = function(s, c) {
		var _i, _ref, b, c, i, s;
		_ref = s;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
			if (b === c) {
				return i;
			}
			_i++;
		}
		return -1;
	};
	funcPC = function(f) {
		var f;
		if (f === libc_write_trampoline) {
			return 4;
		}
		return ((minusOne >>> 0));
	};
	syscall = function(trap, a1, a2, a3) {
		var _tuple, a1, a2, a3, err, r1, r2, trap;
		r1 = 0;
		r2 = 0;
		err = 0;
		_tuple = Syscall(trap, a1, a2, a3);
		r1 = _tuple[0];
		r2 = _tuple[1];
		err = _tuple[2];
		return [r1, r2, err];
	};
	syscall6X = function(trap, a1, a2, a3, a4, a5, a6) {
		var a1, a2, a3, a4, a5, a6, err, r1, r2, trap;
		r1 = 0;
		r2 = 0;
		err = 0;
		$panic(new $String("syscall6X is not implemented"));
	};
	rawSyscall = function(trap, a1, a2, a3) {
		var _tuple, a1, a2, a3, err, r1, r2, trap;
		r1 = 0;
		r2 = 0;
		err = 0;
		_tuple = RawSyscall(trap, a1, a2, a3);
		r1 = _tuple[0];
		r2 = _tuple[1];
		err = _tuple[2];
		return [r1, r2, err];
	};
	runtime_envs = function() {
		var envkeys, envs$1, i, jsEnv, key, process;
		process = $global.process;
		if (process === undefined) {
			return sliceType$1.nil;
		}
		jsEnv = process.env;
		envkeys = $global.Object.keys(jsEnv);
		envs$1 = $makeSlice(sliceType$1, $parseInt(envkeys.length));
		i = 0;
		while (true) {
			if (!(i < $parseInt(envkeys.length))) { break; }
			key = $internalize(envkeys[i], $String);
			((i < 0 || i >= envs$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : envs$1.$array[envs$1.$offset + i] = key + "=" + $internalize(jsEnv[$externalize(key, $String)], $String));
			i = i + (1) >> 0;
		}
		return envs$1;
	};
	syscallByName = function(name) {
		var name, require, $deferred;
		/* */ var $err = null; try { $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		$deferred.push([(function() {
			$recover();
		}), []]);
		if (syscallModule === null) {
			if (alreadyTriedToLoad) {
				return null;
			}
			alreadyTriedToLoad = true;
			require = $global.require;
			if (require === undefined) {
				$panic(new $String(""));
			}
			syscallModule = require($externalize("syscall", $String));
		}
		return syscallModule[$externalize(name, $String)];
		/* */ } catch(err) { $err = err; return null; } finally { $callDeferred($deferred, $err); }
	};
	Syscall = function(trap, a1, a2, a3) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, a1, a2, a3, array, err, f, r, r1, r2, slice, trap;
		r1 = 0;
		r2 = 0;
		err = 0;
		f = syscallByName("Syscall");
		if (!(f === null)) {
			r = f(trap, a1, a2, a3);
			_tmp = ((($parseInt(r[0]) >> 0) >>> 0));
			_tmp$1 = ((($parseInt(r[1]) >> 0) >>> 0));
			_tmp$2 = ((($parseInt(r[2]) >> 0) >>> 0));
			r1 = _tmp;
			r2 = _tmp$1;
			err = _tmp$2;
			return [r1, r2, err];
		}
		if ((trap === 4) && ((a1 === 1) || (a1 === 2))) {
			array = a2;
			slice = $makeSlice(sliceType, $parseInt(array.length));
			slice.$array = array;
			printToConsole(slice);
			_tmp$3 = (($parseInt(array.length) >>> 0));
			_tmp$4 = 0;
			_tmp$5 = 0;
			r1 = _tmp$3;
			r2 = _tmp$4;
			err = _tmp$5;
			return [r1, r2, err];
		}
		if (trap === 1) {
			runtime.Goexit();
		}
		printWarning();
		_tmp$6 = ((minusOne >>> 0));
		_tmp$7 = 0;
		_tmp$8 = 13;
		r1 = _tmp$6;
		r2 = _tmp$7;
		err = _tmp$8;
		return [r1, r2, err];
	};
	$pkg.Syscall = Syscall;
	RawSyscall = function(trap, a1, a2, a3) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, a1, a2, a3, err, f, r, r1, r2, trap;
		r1 = 0;
		r2 = 0;
		err = 0;
		f = syscallByName("Syscall");
		if (!(f === null)) {
			r = f(trap, a1, a2, a3);
			_tmp = ((($parseInt(r[0]) >> 0) >>> 0));
			_tmp$1 = ((($parseInt(r[1]) >> 0) >>> 0));
			_tmp$2 = ((($parseInt(r[2]) >> 0) >>> 0));
			r1 = _tmp;
			r2 = _tmp$1;
			err = _tmp$2;
			return [r1, r2, err];
		}
		printWarning();
		_tmp$3 = ((minusOne >>> 0));
		_tmp$4 = 0;
		_tmp$5 = 13;
		r1 = _tmp$3;
		r2 = _tmp$4;
		err = _tmp$5;
		return [r1, r2, err];
	};
	$pkg.RawSyscall = RawSyscall;
	rsaAlignOf = function(salen) {
		var salen, salign;
		salign = 8;
		if (true) {
			salign = 4;
		} else if (false) {
			salign = 8;
		} else if (false) {
			if (freebsdConfArch === "amd64") {
				salign = 8;
			}
		}
		if (salen === 0) {
			return salign;
		}
		return (((salen + salign >> 0) - 1 >> 0)) & (~((salign - 1 >> 0)) >> 0);
	};
	itoa = function(val) {
		var val;
		if (val < 0) {
			return "-" + uitoa(((-val >>> 0)));
		}
		return uitoa(((val >>> 0)));
	};
	uitoa = function(val) {
		var _q, _r, buf, i, val;
		buf = arrayType$10.zero();
		i = 31;
		while (true) {
			if (!(val >= 10)) { break; }
			((i < 0 || i >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[i] = ((((_r = val % 10, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) + 48 >>> 0) << 24 >>> 24)));
			i = i - (1) >> 0;
			val = (_q = val / (10), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
		}
		((i < 0 || i >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[i] = (((val + 48 >>> 0) << 24 >>> 24)));
		return ($bytesToString($subslice(new sliceType(buf), i)));
	};
	init$1 = function() {
		execveDarwin = execve;
	};
	mmapper.ptr.prototype.Mmap = function(fd, offset, length, prot, flags) {
		var _key, _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, addr, b, data, err, errno, fd, flags, length, m, offset, p, prot, sl, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _key = $f._key; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; addr = $f.addr; b = $f.b; data = $f.data; err = $f.err; errno = $f.errno; fd = $f.fd; flags = $f.flags; length = $f.length; m = $f.m; offset = $f.offset; p = $f.p; prot = $f.prot; sl = $f.sl; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		sl = [sl];
		data = sliceType.nil;
		err = $ifaceNil;
		m = this;
		if (length <= 0) {
			_tmp = sliceType.nil;
			_tmp$1 = new Errno(22);
			data = _tmp;
			err = _tmp$1;
			$s = -1; return [data, err];
		}
		_r = m.mmap(0, ((length >>> 0)), prot, flags, fd, offset); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		addr = _tuple[0];
		errno = _tuple[1];
		if (!($interfaceIsEqual(errno, $ifaceNil))) {
			_tmp$2 = sliceType.nil;
			_tmp$3 = errno;
			data = _tmp$2;
			err = _tmp$3;
			$s = -1; return [data, err];
		}
		sl[0] = new structType.ptr(addr, length, length);
		b = sl[0];
		p = $indexPtr(b.$array, b.$offset + (b.$capacity - 1 >> 0), ptrType$2);
		$r = m.Mutex.Lock(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$deferred.push([$methodVal(m.Mutex, "Unlock"), []]);
		_key = p; (m.active || $throwRuntimeError("assignment to entry in nil map"))[ptrType$2.keyFor(_key)] = { k: _key, v: b };
		_tmp$4 = b;
		_tmp$5 = $ifaceNil;
		data = _tmp$4;
		err = _tmp$5;
		$s = -1; return [data, err];
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  [data, err]; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: mmapper.ptr.prototype.Mmap }; } $f._key = _key; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f.addr = addr; $f.b = b; $f.data = data; $f.err = err; $f.errno = errno; $f.fd = fd; $f.flags = flags; $f.length = length; $f.m = m; $f.offset = offset; $f.p = p; $f.prot = prot; $f.sl = sl; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	mmapper.prototype.Mmap = function(fd, offset, length, prot, flags) { return this.$val.Mmap(fd, offset, length, prot, flags); };
	mmapper.ptr.prototype.Munmap = function(data) {
		var _entry, _r, b, data, err, errno, m, p, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _r = $f._r; b = $f.b; data = $f.data; err = $f.err; errno = $f.errno; m = $f.m; p = $f.p; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		err = $ifaceNil;
		m = this;
		if ((data.$length === 0) || !((data.$length === data.$capacity))) {
			err = new Errno(22);
			$s = -1; return err;
		}
		p = $indexPtr(data.$array, data.$offset + (data.$capacity - 1 >> 0), ptrType$2);
		$r = m.Mutex.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$deferred.push([$methodVal(m.Mutex, "Unlock"), []]);
		b = (_entry = m.active[ptrType$2.keyFor(p)], _entry !== undefined ? _entry.v : sliceType.nil);
		if (b === sliceType.nil || !($indexPtr(b.$array, b.$offset + 0, ptrType$2) === $indexPtr(data.$array, data.$offset + 0, ptrType$2))) {
			err = new Errno(22);
			$s = -1; return err;
		}
		_r = m.munmap((($sliceToArray(b))), ((b.$length >>> 0))); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		errno = _r;
		if (!($interfaceIsEqual(errno, $ifaceNil))) {
			err = errno;
			$s = -1; return err;
		}
		delete m.active[ptrType$2.keyFor(p)];
		err = $ifaceNil;
		$s = -1; return err;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  err; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: mmapper.ptr.prototype.Munmap }; } $f._entry = _entry; $f._r = _r; $f.b = b; $f.data = data; $f.err = err; $f.errno = errno; $f.m = m; $f.p = p; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	mmapper.prototype.Munmap = function(data) { return this.$val.Munmap(data); };
	Errno.prototype.Error = function() {
		var e, s;
		e = this.$val;
		if (0 <= ((e >> 0)) && ((e >> 0)) < 106) {
			s = ((e < 0 || e >= errors$1.length) ? ($throwRuntimeError("index out of range"), undefined) : errors$1[e]);
			if (!(s === "")) {
				return s;
			}
		}
		return "errno " + itoa(((e >> 0)));
	};
	$ptrType(Errno).prototype.Error = function() { return new Errno(this.$get()).Error(); };
	Errno.prototype.Temporary = function() {
		var e;
		e = this.$val;
		return (e === 4) || (e === 24) || new Errno(e).Timeout();
	};
	$ptrType(Errno).prototype.Temporary = function() { return new Errno(this.$get()).Temporary(); };
	Errno.prototype.Timeout = function() {
		var e;
		e = this.$val;
		return (e === 35) || (e === 35) || (e === 60);
	};
	$ptrType(Errno).prototype.Timeout = function() { return new Errno(this.$get()).Timeout(); };
	errnoErr = function(e) {
		var _1, e;
		_1 = e;
		if (_1 === (0)) {
			return $ifaceNil;
		} else if (_1 === (35)) {
			return errEAGAIN;
		} else if (_1 === (22)) {
			return errEINVAL;
		} else if (_1 === (2)) {
			return errENOENT;
		}
		return new Errno(e);
	};
	libc_write_trampoline = function() {
		$throwRuntimeError("native function not implemented: syscall.libc_write_trampoline");
	};
	mmap = function(addr, length, prot, flag, fd, pos) {
		var _tuple, addr, e1, err, fd, flag, length, pos, prot, r0, ret;
		ret = 0;
		err = $ifaceNil;
		_tuple = syscall6X(funcPC(libc_mmap_trampoline), (addr), (length), ((prot >>> 0)), ((flag >>> 0)), ((fd >>> 0)), ((pos.$low >>> 0)));
		r0 = _tuple[0];
		e1 = _tuple[2];
		ret = (r0);
		if (!((e1 === 0))) {
			err = errnoErr(e1);
		}
		return [ret, err];
	};
	libc_mmap_trampoline = function() {
		$throwRuntimeError("native function not implemented: syscall.libc_mmap_trampoline");
	};
	munmap = function(addr, length) {
		var _tuple, addr, e1, err, length;
		err = $ifaceNil;
		_tuple = syscall(funcPC(libc_munmap_trampoline), (addr), (length), 0);
		e1 = _tuple[2];
		if (!((e1 === 0))) {
			err = errnoErr(e1);
		}
		return err;
	};
	libc_munmap_trampoline = function() {
		$throwRuntimeError("native function not implemented: syscall.libc_munmap_trampoline");
	};
	execve = function(path, argv, envp) {
		var _tuple, argv, e1, envp, err, path;
		err = $ifaceNil;
		_tuple = rawSyscall(funcPC(libc_execve_trampoline), ((path)), ((argv)), ((envp)));
		e1 = _tuple[2];
		if (!((e1 === 0))) {
			err = errnoErr(e1);
		}
		return err;
	};
	libc_execve_trampoline = function() {
		$throwRuntimeError("native function not implemented: syscall.libc_execve_trampoline");
	};
	ptrType$28.methods = [{prop: "Mmap", name: "Mmap", pkg: "", typ: $funcType([$Int, $Int64, $Int, $Int, $Int], [sliceType, $error], false)}, {prop: "Munmap", name: "Munmap", pkg: "", typ: $funcType([sliceType], [$error], false)}];
	Errno.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Temporary", name: "Temporary", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Timeout", name: "Timeout", pkg: "", typ: $funcType([], [$Bool], false)}];
	mmapper.init("syscall", [{prop: "Mutex", name: "Mutex", embedded: true, exported: true, typ: sync.Mutex, tag: ""}, {prop: "active", name: "active", embedded: false, exported: false, typ: mapType, tag: ""}, {prop: "mmap", name: "mmap", embedded: false, exported: false, typ: funcType$2, tag: ""}, {prop: "munmap", name: "munmap", embedded: false, exported: false, typ: funcType$3, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = js.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = race.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = runtime.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = sync.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		lineBuffer = sliceType.nil;
		syscallModule = null;
		execveDarwin = $throwNilPointerError;
		freebsdConfArch = "";
		warningPrinted = false;
		alreadyTriedToLoad = false;
		minusOne = -1;
		envs = runtime_envs();
		errEAGAIN = new Errno(35);
		errEINVAL = new Errno(22);
		errENOENT = new Errno(2);
		errors$1 = $toNativeArray($kindString, ["", "operation not permitted", "no such file or directory", "no such process", "interrupted system call", "input/output error", "device not configured", "argument list too long", "exec format error", "bad file descriptor", "no child processes", "resource deadlock avoided", "cannot allocate memory", "permission denied", "bad address", "block device required", "resource busy", "file exists", "cross-device link", "operation not supported by device", "not a directory", "is a directory", "invalid argument", "too many open files in system", "too many open files", "inappropriate ioctl for device", "text file busy", "file too large", "no space left on device", "illegal seek", "read-only file system", "too many links", "broken pipe", "numerical argument out of domain", "result too large", "resource temporarily unavailable", "operation now in progress", "operation already in progress", "socket operation on non-socket", "destination address required", "message too long", "protocol wrong type for socket", "protocol not available", "protocol not supported", "socket type not supported", "operation not supported", "protocol family not supported", "address family not supported by protocol family", "address already in use", "can't assign requested address", "network is down", "network is unreachable", "network dropped connection on reset", "software caused connection abort", "connection reset by peer", "no buffer space available", "socket is already connected", "socket is not connected", "can't send after socket shutdown", "too many references: can't splice", "operation timed out", "connection refused", "too many levels of symbolic links", "file name too long", "host is down", "no route to host", "directory not empty", "too many processes", "too many users", "disc quota exceeded", "stale NFS file handle", "too many levels of remote in path", "RPC struct is bad", "RPC version wrong", "RPC prog. not avail", "program version wrong", "bad procedure for program", "no locks available", "function not implemented", "inappropriate file type or format", "authentication error", "need authenticator", "device power is off", "device error", "value too large to be stored in data type", "bad executable (or shared library)", "bad CPU type in executable", "shared library version mismatch", "malformed Mach-o file", "operation canceled", "identifier removed", "no message of desired type", "illegal byte sequence", "attribute not found", "bad message", "EMULTIHOP (Reserved)", "no message available on STREAM", "ENOLINK (Reserved)", "no STREAM resources", "not a STREAM", "protocol error", "STREAM ioctl timeout", "operation not supported on socket", "policy not found", "state not recoverable", "previous owner died"]);
		mapper = new mmapper.ptr(new sync.Mutex.ptr(0, 0), {}, mmap, munmap);
		minRoutingSockaddrLen = rsaAlignOf(0);
		init();
		init$1();
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["time"]=(function(){var $pkg={},$init,errors,js,nosync,runtime,syscall,runtimeTimer,ParseError,Timer,Ticker,Time,Month,Weekday,Duration,Location,zone,zoneTrans,sliceType,sliceType$1,ptrType,sliceType$2,arrayType,sliceType$3,arrayType$1,arrayType$2,ptrType$2,chanType,funcType,arrayType$3,funcType$1,ptrType$3,ptrType$4,ptrType$5,chanType$1,ptrType$6,ptrType$7,zoneSources,std0x,longDayNames,shortDayNames,shortMonthNames,longMonthNames,atoiError,errBad,errLeadingInt,months,days,daysBefore,startNano,utcLoc,utcLoc$24ptr,localLoc,localLoc$24ptr,localOnce,errLocation,badData,x,init,initLocal,runtimeNano,now,startTimer,stopTimer,indexByte,startsWithLowerCase,nextStdChunk,match,lookup,appendInt,atoi,formatNano,quote,isDigit,getnum,cutspace,skip,Parse,parse,parseTimeZone,parseGMT,parseSignedOffset,parseNanoseconds,leadingInt,when,sendTime,AfterFunc,goFunc,NewTicker,absWeekday,absClock,fmtFrac,fmtInt,lessThanHalf,absDate,daysIn,Now,unixTime,Unix,isLeap,norm,Date,div,FixedZone;	errors = $packages["errors"];
	js = $packages["github.com/gopherjs/gopherjs/js"];
	nosync = $packages["github.com/gopherjs/gopherjs/nosync"];
	runtime = $packages["runtime"];
	syscall = $packages["syscall"];
	runtimeTimer = $pkg.runtimeTimer = $newType(0, $kindStruct, "time.runtimeTimer", true, "time", false, function(i_, when_, period_, f_, arg_, timeout_, active_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.i = 0;
			this.when = new $Int64(0, 0);
			this.period = new $Int64(0, 0);
			this.f = $throwNilPointerError;
			this.arg = $ifaceNil;
			this.timeout = null;
			this.active = false;
			return;
		}
		this.i = i_;
		this.when = when_;
		this.period = period_;
		this.f = f_;
		this.arg = arg_;
		this.timeout = timeout_;
		this.active = active_;
	});
	ParseError = $pkg.ParseError = $newType(0, $kindStruct, "time.ParseError", true, "time", true, function(Layout_, Value_, LayoutElem_, ValueElem_, Message_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Layout = "";
			this.Value = "";
			this.LayoutElem = "";
			this.ValueElem = "";
			this.Message = "";
			return;
		}
		this.Layout = Layout_;
		this.Value = Value_;
		this.LayoutElem = LayoutElem_;
		this.ValueElem = ValueElem_;
		this.Message = Message_;
	});
	Timer = $pkg.Timer = $newType(0, $kindStruct, "time.Timer", true, "time", true, function(C_, r_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.C = $chanNil;
			this.r = new runtimeTimer.ptr(0, new $Int64(0, 0), new $Int64(0, 0), $throwNilPointerError, $ifaceNil, null, false);
			return;
		}
		this.C = C_;
		this.r = r_;
	});
	Ticker = $pkg.Ticker = $newType(0, $kindStruct, "time.Ticker", true, "time", true, function(C_, r_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.C = $chanNil;
			this.r = new runtimeTimer.ptr(0, new $Int64(0, 0), new $Int64(0, 0), $throwNilPointerError, $ifaceNil, null, false);
			return;
		}
		this.C = C_;
		this.r = r_;
	});
	Time = $pkg.Time = $newType(0, $kindStruct, "time.Time", true, "time", true, function(wall_, ext_, loc_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.wall = new $Uint64(0, 0);
			this.ext = new $Int64(0, 0);
			this.loc = ptrType$2.nil;
			return;
		}
		this.wall = wall_;
		this.ext = ext_;
		this.loc = loc_;
	});
	Month = $pkg.Month = $newType(4, $kindInt, "time.Month", true, "time", true, null);
	Weekday = $pkg.Weekday = $newType(4, $kindInt, "time.Weekday", true, "time", true, null);
	Duration = $pkg.Duration = $newType(8, $kindInt64, "time.Duration", true, "time", true, null);
	Location = $pkg.Location = $newType(0, $kindStruct, "time.Location", true, "time", true, function(name_, zone_, tx_, cacheStart_, cacheEnd_, cacheZone_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.name = "";
			this.zone = sliceType.nil;
			this.tx = sliceType$1.nil;
			this.cacheStart = new $Int64(0, 0);
			this.cacheEnd = new $Int64(0, 0);
			this.cacheZone = ptrType.nil;
			return;
		}
		this.name = name_;
		this.zone = zone_;
		this.tx = tx_;
		this.cacheStart = cacheStart_;
		this.cacheEnd = cacheEnd_;
		this.cacheZone = cacheZone_;
	});
	zone = $pkg.zone = $newType(0, $kindStruct, "time.zone", true, "time", false, function(name_, offset_, isDST_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.name = "";
			this.offset = 0;
			this.isDST = false;
			return;
		}
		this.name = name_;
		this.offset = offset_;
		this.isDST = isDST_;
	});
	zoneTrans = $pkg.zoneTrans = $newType(0, $kindStruct, "time.zoneTrans", true, "time", false, function(when_, index_, isstd_, isutc_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.when = new $Int64(0, 0);
			this.index = 0;
			this.isstd = false;
			this.isutc = false;
			return;
		}
		this.when = when_;
		this.index = index_;
		this.isstd = isstd_;
		this.isutc = isutc_;
	});
	sliceType = $sliceType(zone);
	sliceType$1 = $sliceType(zoneTrans);
	ptrType = $ptrType(zone);
	sliceType$2 = $sliceType($String);
	arrayType = $arrayType($Uint8, 20);
	sliceType$3 = $sliceType($Uint8);
	arrayType$1 = $arrayType($Uint8, 9);
	arrayType$2 = $arrayType($Uint8, 64);
	ptrType$2 = $ptrType(Location);
	chanType = $chanType(Time, false, false);
	funcType = $funcType([], [], false);
	arrayType$3 = $arrayType($Uint8, 32);
	funcType$1 = $funcType([$emptyInterface, $Uintptr], [], false);
	ptrType$3 = $ptrType(js.Object);
	ptrType$4 = $ptrType(ParseError);
	ptrType$5 = $ptrType(Timer);
	chanType$1 = $chanType(Time, false, true);
	ptrType$6 = $ptrType(Ticker);
	ptrType$7 = $ptrType(Time);
	init = function() {
		$unused(Unix(new $Int64(0, 0), new $Int64(0, 0)));
	};
	initLocal = function() {
		var d, i, j, s;
		d = new ($global.Date)();
		s = $internalize(d, $String);
		i = indexByte(s, 40);
		j = indexByte(s, 41);
		if ((i === -1) || (j === -1)) {
			localLoc.name = "UTC";
			return;
		}
		localLoc.name = $substring(s, (i + 1 >> 0), j);
		localLoc.zone = new sliceType([new zone.ptr(localLoc.name, $imul(($parseInt(d.getTimezoneOffset()) >> 0), -60), false)]);
	};
	runtimeNano = function() {
		return $mul64($internalize(new ($global.Date)().getTime(), $Int64), new $Int64(0, 1000000));
	};
	now = function() {
		var _tmp, _tmp$1, _tmp$2, mono, n, nsec, sec, x$1;
		sec = new $Int64(0, 0);
		nsec = 0;
		mono = new $Int64(0, 0);
		n = runtimeNano();
		_tmp = $div64(n, new $Int64(0, 1000000000), false);
		_tmp$1 = (((x$1 = $div64(n, new $Int64(0, 1000000000), true), x$1.$low + ((x$1.$high >> 31) * 4294967296)) >> 0));
		_tmp$2 = n;
		sec = _tmp;
		nsec = _tmp$1;
		mono = _tmp$2;
		return [sec, nsec, mono];
	};
	startTimer = function(t) {
		var diff, t, x$1, x$2;
		t.active = true;
		diff = $div64(((x$1 = t.when, x$2 = runtimeNano(), new $Int64(x$1.$high - x$2.$high, x$1.$low - x$2.$low))), new $Int64(0, 1000000), false);
		if ((diff.$high > 0 || (diff.$high === 0 && diff.$low > 2147483647))) {
			return;
		}
		if ((diff.$high < 0 || (diff.$high === 0 && diff.$low < 0))) {
			diff = new $Int64(0, 0);
		}
		t.timeout = $setTimeout((function() {
			var x$3, x$4, x$5;
			t.active = false;
			if (!((x$3 = t.period, (x$3.$high === 0 && x$3.$low === 0)))) {
				t.when = (x$4 = t.when, x$5 = t.period, new $Int64(x$4.$high + x$5.$high, x$4.$low + x$5.$low));
				startTimer(t);
			}
			$go(t.f, [t.arg, 0]);
		}), $externalize(new $Int64(diff.$high + 0, diff.$low + 1), $Int64));
	};
	stopTimer = function(t) {
		var t, wasActive;
		$global.clearTimeout(t.timeout);
		wasActive = t.active;
		t.active = false;
		return wasActive;
	};
	indexByte = function(s, c) {
		var c, s;
		return $parseInt(s.indexOf($global.String.fromCharCode(c))) >> 0;
	};
	startsWithLowerCase = function(str) {
		var c, str;
		if (str.length === 0) {
			return false;
		}
		c = str.charCodeAt(0);
		return 97 <= c && c <= 122;
	};
	nextStdChunk = function(layout) {
		var _1, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$27, _tmp$28, _tmp$29, _tmp$3, _tmp$30, _tmp$31, _tmp$32, _tmp$33, _tmp$34, _tmp$35, _tmp$36, _tmp$37, _tmp$38, _tmp$39, _tmp$4, _tmp$40, _tmp$41, _tmp$42, _tmp$43, _tmp$44, _tmp$45, _tmp$46, _tmp$47, _tmp$48, _tmp$49, _tmp$5, _tmp$50, _tmp$51, _tmp$52, _tmp$53, _tmp$54, _tmp$55, _tmp$56, _tmp$57, _tmp$58, _tmp$59, _tmp$6, _tmp$60, _tmp$61, _tmp$62, _tmp$63, _tmp$64, _tmp$65, _tmp$66, _tmp$67, _tmp$68, _tmp$69, _tmp$7, _tmp$70, _tmp$71, _tmp$72, _tmp$73, _tmp$74, _tmp$75, _tmp$76, _tmp$77, _tmp$78, _tmp$79, _tmp$8, _tmp$80, _tmp$81, _tmp$82, _tmp$83, _tmp$84, _tmp$85, _tmp$86, _tmp$9, c, ch, i, j, layout, prefix, std, std$1, suffix, x$1;
		prefix = "";
		std = 0;
		suffix = "";
		i = 0;
		while (true) {
			if (!(i < layout.length)) { break; }
			c = ((layout.charCodeAt(i) >> 0));
			_1 = c;
			if (_1 === (74)) {
				if (layout.length >= (i + 3 >> 0) && $substring(layout, i, (i + 3 >> 0)) === "Jan") {
					if (layout.length >= (i + 7 >> 0) && $substring(layout, i, (i + 7 >> 0)) === "January") {
						_tmp = $substring(layout, 0, i);
						_tmp$1 = 257;
						_tmp$2 = $substring(layout, (i + 7 >> 0));
						prefix = _tmp;
						std = _tmp$1;
						suffix = _tmp$2;
						return [prefix, std, suffix];
					}
					if (!startsWithLowerCase($substring(layout, (i + 3 >> 0)))) {
						_tmp$3 = $substring(layout, 0, i);
						_tmp$4 = 258;
						_tmp$5 = $substring(layout, (i + 3 >> 0));
						prefix = _tmp$3;
						std = _tmp$4;
						suffix = _tmp$5;
						return [prefix, std, suffix];
					}
				}
			} else if (_1 === (77)) {
				if (layout.length >= (i + 3 >> 0)) {
					if ($substring(layout, i, (i + 3 >> 0)) === "Mon") {
						if (layout.length >= (i + 6 >> 0) && $substring(layout, i, (i + 6 >> 0)) === "Monday") {
							_tmp$6 = $substring(layout, 0, i);
							_tmp$7 = 261;
							_tmp$8 = $substring(layout, (i + 6 >> 0));
							prefix = _tmp$6;
							std = _tmp$7;
							suffix = _tmp$8;
							return [prefix, std, suffix];
						}
						if (!startsWithLowerCase($substring(layout, (i + 3 >> 0)))) {
							_tmp$9 = $substring(layout, 0, i);
							_tmp$10 = 262;
							_tmp$11 = $substring(layout, (i + 3 >> 0));
							prefix = _tmp$9;
							std = _tmp$10;
							suffix = _tmp$11;
							return [prefix, std, suffix];
						}
					}
					if ($substring(layout, i, (i + 3 >> 0)) === "MST") {
						_tmp$12 = $substring(layout, 0, i);
						_tmp$13 = 21;
						_tmp$14 = $substring(layout, (i + 3 >> 0));
						prefix = _tmp$12;
						std = _tmp$13;
						suffix = _tmp$14;
						return [prefix, std, suffix];
					}
				}
			} else if (_1 === (48)) {
				if (layout.length >= (i + 2 >> 0) && 49 <= layout.charCodeAt((i + 1 >> 0)) && layout.charCodeAt((i + 1 >> 0)) <= 54) {
					_tmp$15 = $substring(layout, 0, i);
					_tmp$16 = (x$1 = layout.charCodeAt((i + 1 >> 0)) - 49 << 24 >>> 24, ((x$1 < 0 || x$1 >= std0x.length) ? ($throwRuntimeError("index out of range"), undefined) : std0x[x$1]));
					_tmp$17 = $substring(layout, (i + 2 >> 0));
					prefix = _tmp$15;
					std = _tmp$16;
					suffix = _tmp$17;
					return [prefix, std, suffix];
				}
			} else if (_1 === (49)) {
				if (layout.length >= (i + 2 >> 0) && (layout.charCodeAt((i + 1 >> 0)) === 53)) {
					_tmp$18 = $substring(layout, 0, i);
					_tmp$19 = 522;
					_tmp$20 = $substring(layout, (i + 2 >> 0));
					prefix = _tmp$18;
					std = _tmp$19;
					suffix = _tmp$20;
					return [prefix, std, suffix];
				}
				_tmp$21 = $substring(layout, 0, i);
				_tmp$22 = 259;
				_tmp$23 = $substring(layout, (i + 1 >> 0));
				prefix = _tmp$21;
				std = _tmp$22;
				suffix = _tmp$23;
				return [prefix, std, suffix];
			} else if (_1 === (50)) {
				if (layout.length >= (i + 4 >> 0) && $substring(layout, i, (i + 4 >> 0)) === "2006") {
					_tmp$24 = $substring(layout, 0, i);
					_tmp$25 = 273;
					_tmp$26 = $substring(layout, (i + 4 >> 0));
					prefix = _tmp$24;
					std = _tmp$25;
					suffix = _tmp$26;
					return [prefix, std, suffix];
				}
				_tmp$27 = $substring(layout, 0, i);
				_tmp$28 = 263;
				_tmp$29 = $substring(layout, (i + 1 >> 0));
				prefix = _tmp$27;
				std = _tmp$28;
				suffix = _tmp$29;
				return [prefix, std, suffix];
			} else if (_1 === (95)) {
				if (layout.length >= (i + 2 >> 0) && (layout.charCodeAt((i + 1 >> 0)) === 50)) {
					if (layout.length >= (i + 5 >> 0) && $substring(layout, (i + 1 >> 0), (i + 5 >> 0)) === "2006") {
						_tmp$30 = $substring(layout, 0, (i + 1 >> 0));
						_tmp$31 = 273;
						_tmp$32 = $substring(layout, (i + 5 >> 0));
						prefix = _tmp$30;
						std = _tmp$31;
						suffix = _tmp$32;
						return [prefix, std, suffix];
					}
					_tmp$33 = $substring(layout, 0, i);
					_tmp$34 = 264;
					_tmp$35 = $substring(layout, (i + 2 >> 0));
					prefix = _tmp$33;
					std = _tmp$34;
					suffix = _tmp$35;
					return [prefix, std, suffix];
				}
			} else if (_1 === (51)) {
				_tmp$36 = $substring(layout, 0, i);
				_tmp$37 = 523;
				_tmp$38 = $substring(layout, (i + 1 >> 0));
				prefix = _tmp$36;
				std = _tmp$37;
				suffix = _tmp$38;
				return [prefix, std, suffix];
			} else if (_1 === (52)) {
				_tmp$39 = $substring(layout, 0, i);
				_tmp$40 = 525;
				_tmp$41 = $substring(layout, (i + 1 >> 0));
				prefix = _tmp$39;
				std = _tmp$40;
				suffix = _tmp$41;
				return [prefix, std, suffix];
			} else if (_1 === (53)) {
				_tmp$42 = $substring(layout, 0, i);
				_tmp$43 = 527;
				_tmp$44 = $substring(layout, (i + 1 >> 0));
				prefix = _tmp$42;
				std = _tmp$43;
				suffix = _tmp$44;
				return [prefix, std, suffix];
			} else if (_1 === (80)) {
				if (layout.length >= (i + 2 >> 0) && (layout.charCodeAt((i + 1 >> 0)) === 77)) {
					_tmp$45 = $substring(layout, 0, i);
					_tmp$46 = 531;
					_tmp$47 = $substring(layout, (i + 2 >> 0));
					prefix = _tmp$45;
					std = _tmp$46;
					suffix = _tmp$47;
					return [prefix, std, suffix];
				}
			} else if (_1 === (112)) {
				if (layout.length >= (i + 2 >> 0) && (layout.charCodeAt((i + 1 >> 0)) === 109)) {
					_tmp$48 = $substring(layout, 0, i);
					_tmp$49 = 532;
					_tmp$50 = $substring(layout, (i + 2 >> 0));
					prefix = _tmp$48;
					std = _tmp$49;
					suffix = _tmp$50;
					return [prefix, std, suffix];
				}
			} else if (_1 === (45)) {
				if (layout.length >= (i + 7 >> 0) && $substring(layout, i, (i + 7 >> 0)) === "-070000") {
					_tmp$51 = $substring(layout, 0, i);
					_tmp$52 = 28;
					_tmp$53 = $substring(layout, (i + 7 >> 0));
					prefix = _tmp$51;
					std = _tmp$52;
					suffix = _tmp$53;
					return [prefix, std, suffix];
				}
				if (layout.length >= (i + 9 >> 0) && $substring(layout, i, (i + 9 >> 0)) === "-07:00:00") {
					_tmp$54 = $substring(layout, 0, i);
					_tmp$55 = 31;
					_tmp$56 = $substring(layout, (i + 9 >> 0));
					prefix = _tmp$54;
					std = _tmp$55;
					suffix = _tmp$56;
					return [prefix, std, suffix];
				}
				if (layout.length >= (i + 5 >> 0) && $substring(layout, i, (i + 5 >> 0)) === "-0700") {
					_tmp$57 = $substring(layout, 0, i);
					_tmp$58 = 27;
					_tmp$59 = $substring(layout, (i + 5 >> 0));
					prefix = _tmp$57;
					std = _tmp$58;
					suffix = _tmp$59;
					return [prefix, std, suffix];
				}
				if (layout.length >= (i + 6 >> 0) && $substring(layout, i, (i + 6 >> 0)) === "-07:00") {
					_tmp$60 = $substring(layout, 0, i);
					_tmp$61 = 30;
					_tmp$62 = $substring(layout, (i + 6 >> 0));
					prefix = _tmp$60;
					std = _tmp$61;
					suffix = _tmp$62;
					return [prefix, std, suffix];
				}
				if (layout.length >= (i + 3 >> 0) && $substring(layout, i, (i + 3 >> 0)) === "-07") {
					_tmp$63 = $substring(layout, 0, i);
					_tmp$64 = 29;
					_tmp$65 = $substring(layout, (i + 3 >> 0));
					prefix = _tmp$63;
					std = _tmp$64;
					suffix = _tmp$65;
					return [prefix, std, suffix];
				}
			} else if (_1 === (90)) {
				if (layout.length >= (i + 7 >> 0) && $substring(layout, i, (i + 7 >> 0)) === "Z070000") {
					_tmp$66 = $substring(layout, 0, i);
					_tmp$67 = 23;
					_tmp$68 = $substring(layout, (i + 7 >> 0));
					prefix = _tmp$66;
					std = _tmp$67;
					suffix = _tmp$68;
					return [prefix, std, suffix];
				}
				if (layout.length >= (i + 9 >> 0) && $substring(layout, i, (i + 9 >> 0)) === "Z07:00:00") {
					_tmp$69 = $substring(layout, 0, i);
					_tmp$70 = 26;
					_tmp$71 = $substring(layout, (i + 9 >> 0));
					prefix = _tmp$69;
					std = _tmp$70;
					suffix = _tmp$71;
					return [prefix, std, suffix];
				}
				if (layout.length >= (i + 5 >> 0) && $substring(layout, i, (i + 5 >> 0)) === "Z0700") {
					_tmp$72 = $substring(layout, 0, i);
					_tmp$73 = 22;
					_tmp$74 = $substring(layout, (i + 5 >> 0));
					prefix = _tmp$72;
					std = _tmp$73;
					suffix = _tmp$74;
					return [prefix, std, suffix];
				}
				if (layout.length >= (i + 6 >> 0) && $substring(layout, i, (i + 6 >> 0)) === "Z07:00") {
					_tmp$75 = $substring(layout, 0, i);
					_tmp$76 = 25;
					_tmp$77 = $substring(layout, (i + 6 >> 0));
					prefix = _tmp$75;
					std = _tmp$76;
					suffix = _tmp$77;
					return [prefix, std, suffix];
				}
				if (layout.length >= (i + 3 >> 0) && $substring(layout, i, (i + 3 >> 0)) === "Z07") {
					_tmp$78 = $substring(layout, 0, i);
					_tmp$79 = 24;
					_tmp$80 = $substring(layout, (i + 3 >> 0));
					prefix = _tmp$78;
					std = _tmp$79;
					suffix = _tmp$80;
					return [prefix, std, suffix];
				}
			} else if (_1 === (46)) {
				if ((i + 1 >> 0) < layout.length && ((layout.charCodeAt((i + 1 >> 0)) === 48) || (layout.charCodeAt((i + 1 >> 0)) === 57))) {
					ch = layout.charCodeAt((i + 1 >> 0));
					j = i + 1 >> 0;
					while (true) {
						if (!(j < layout.length && (layout.charCodeAt(j) === ch))) { break; }
						j = j + (1) >> 0;
					}
					if (!isDigit(layout, j)) {
						std$1 = 32;
						if (layout.charCodeAt((i + 1 >> 0)) === 57) {
							std$1 = 33;
						}
						std$1 = std$1 | ((((j - ((i + 1 >> 0)) >> 0)) << 16 >> 0));
						_tmp$81 = $substring(layout, 0, i);
						_tmp$82 = std$1;
						_tmp$83 = $substring(layout, j);
						prefix = _tmp$81;
						std = _tmp$82;
						suffix = _tmp$83;
						return [prefix, std, suffix];
					}
				}
			}
			i = i + (1) >> 0;
		}
		_tmp$84 = layout;
		_tmp$85 = 0;
		_tmp$86 = "";
		prefix = _tmp$84;
		std = _tmp$85;
		suffix = _tmp$86;
		return [prefix, std, suffix];
	};
	match = function(s1, s2) {
		var c1, c2, i, s1, s2;
		i = 0;
		while (true) {
			if (!(i < s1.length)) { break; }
			c1 = s1.charCodeAt(i);
			c2 = s2.charCodeAt(i);
			if (!((c1 === c2))) {
				c1 = (c1 | (32)) >>> 0;
				c2 = (c2 | (32)) >>> 0;
				if (!((c1 === c2)) || c1 < 97 || c1 > 122) {
					return false;
				}
			}
			i = i + (1) >> 0;
		}
		return true;
	};
	lookup = function(tab, val) {
		var _i, _ref, i, tab, v, val;
		_ref = tab;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
			if (val.length >= v.length && match($substring(val, 0, v.length), v)) {
				return [i, $substring(val, v.length), $ifaceNil];
			}
			_i++;
		}
		return [-1, val, errBad];
	};
	appendInt = function(b, x$1, width) {
		var _q, b, buf, i, q, u, w, width, x$1;
		u = ((x$1 >>> 0));
		if (x$1 < 0) {
			b = $append(b, 45);
			u = ((-x$1 >>> 0));
		}
		buf = arrayType.zero();
		i = 20;
		while (true) {
			if (!(u >= 10)) { break; }
			i = i - (1) >> 0;
			q = (_q = u / 10, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
			((i < 0 || i >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[i] = ((((48 + u >>> 0) - (q * 10 >>> 0) >>> 0) << 24 >>> 24)));
			u = q;
		}
		i = i - (1) >> 0;
		((i < 0 || i >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[i] = (((48 + u >>> 0) << 24 >>> 24)));
		w = 20 - i >> 0;
		while (true) {
			if (!(w < width)) { break; }
			b = $append(b, 48);
			w = w + (1) >> 0;
		}
		return $appendSlice(b, $subslice(new sliceType$3(buf), i));
	};
	atoi = function(s) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, err, neg, q, rem, s, x$1;
		x$1 = 0;
		err = $ifaceNil;
		neg = false;
		if (!(s === "") && ((s.charCodeAt(0) === 45) || (s.charCodeAt(0) === 43))) {
			neg = s.charCodeAt(0) === 45;
			s = $substring(s, 1);
		}
		_tuple = leadingInt(s);
		q = _tuple[0];
		rem = _tuple[1];
		err = _tuple[2];
		x$1 = (((q.$low + ((q.$high >> 31) * 4294967296)) >> 0));
		if (!($interfaceIsEqual(err, $ifaceNil)) || !(rem === "")) {
			_tmp = 0;
			_tmp$1 = atoiError;
			x$1 = _tmp;
			err = _tmp$1;
			return [x$1, err];
		}
		if (neg) {
			x$1 = -x$1;
		}
		_tmp$2 = x$1;
		_tmp$3 = $ifaceNil;
		x$1 = _tmp$2;
		err = _tmp$3;
		return [x$1, err];
	};
	formatNano = function(b, nanosec, n, trim) {
		var _q, _r, b, buf, n, nanosec, start, trim, u, x$1;
		u = nanosec;
		buf = arrayType$1.zero();
		start = 9;
		while (true) {
			if (!(start > 0)) { break; }
			start = start - (1) >> 0;
			((start < 0 || start >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[start] = ((((_r = u % 10, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) + 48 >>> 0) << 24 >>> 24)));
			u = (_q = u / (10), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
		}
		if (n > 9) {
			n = 9;
		}
		if (trim) {
			while (true) {
				if (!(n > 0 && ((x$1 = n - 1 >> 0, ((x$1 < 0 || x$1 >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[x$1])) === 48))) { break; }
				n = n - (1) >> 0;
			}
			if (n === 0) {
				return b;
			}
		}
		b = $append(b, 46);
		return $appendSlice(b, $subslice(new sliceType$3(buf), 0, n));
	};
	Time.ptr.prototype.String = function() {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, buf, m0, m1, m2, s, sign, t, wid, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; buf = $f.buf; m0 = $f.m0; m1 = $f.m1; m2 = $f.m2; s = $f.s; sign = $f.sign; t = $f.t; wid = $f.wid; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).Format("2006-01-02 15:04:05.999999999 -0700 MST"); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		s = _r;
		if (!((x$1 = (x$2 = t.wall, new $Uint64(x$2.$high & 2147483648, (x$2.$low & 0) >>> 0)), (x$1.$high === 0 && x$1.$low === 0)))) {
			m2 = ((x$3 = t.ext, new $Uint64(x$3.$high, x$3.$low)));
			sign = 43;
			if ((x$4 = t.ext, (x$4.$high < 0 || (x$4.$high === 0 && x$4.$low < 0)))) {
				sign = 45;
				m2 = new $Uint64(-m2.$high, -m2.$low);
			}
			_tmp = $div64(m2, new $Uint64(0, 1000000000), false);
			_tmp$1 = $div64(m2, new $Uint64(0, 1000000000), true);
			m1 = _tmp;
			m2 = _tmp$1;
			_tmp$2 = $div64(m1, new $Uint64(0, 1000000000), false);
			_tmp$3 = $div64(m1, new $Uint64(0, 1000000000), true);
			m0 = _tmp$2;
			m1 = _tmp$3;
			buf = sliceType$3.nil;
			buf = $appendSlice(buf, " m=");
			buf = $append(buf, sign);
			wid = 0;
			if (!((m0.$high === 0 && m0.$low === 0))) {
				buf = appendInt(buf, ((m0.$low >> 0)), 0);
				wid = 9;
			}
			buf = appendInt(buf, ((m1.$low >> 0)), wid);
			buf = $append(buf, 46);
			buf = appendInt(buf, ((m2.$low >> 0)), 9);
			s = s + (($bytesToString(buf)));
		}
		$s = -1; return s;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.String }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.buf = buf; $f.m0 = m0; $f.m1 = m1; $f.m2 = m2; $f.s = s; $f.sign = sign; $f.t = t; $f.wid = wid; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.String = function() { return this.$val.String(); };
	Time.ptr.prototype.Format = function(layout) {
		var _r, b, buf, layout, max, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; b = $f.b; buf = $f.buf; layout = $f.layout; max = $f.max; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		b = sliceType$3.nil;
		max = layout.length + 10 >> 0;
		if (max < 64) {
			buf = arrayType$2.zero();
			b = $subslice(new sliceType$3(buf), 0, 0);
		} else {
			b = $makeSlice(sliceType$3, 0, max);
		}
		_r = $clone(t, Time).AppendFormat(b, layout); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		b = _r;
		$s = -1; return ($bytesToString(b));
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.Format }; } $f._r = _r; $f.b = b; $f.buf = buf; $f.layout = layout; $f.max = max; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.Format = function(layout) { return this.$val.Format(layout); };
	Time.ptr.prototype.AppendFormat = function(b, layout) {
		var _1, _q, _q$1, _q$2, _q$3, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _tuple, _tuple$1, _tuple$2, _tuple$3, abs, absoffset, b, day, hour, hr, hr$1, layout, m, min, month, name, offset, prefix, s, sec, std, suffix, t, y, year, zone$1, zone$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _q = $f._q; _q$1 = $f._q$1; _q$2 = $f._q$2; _q$3 = $f._q$3; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; abs = $f.abs; absoffset = $f.absoffset; b = $f.b; day = $f.day; hour = $f.hour; hr = $f.hr; hr$1 = $f.hr$1; layout = $f.layout; m = $f.m; min = $f.min; month = $f.month; name = $f.name; offset = $f.offset; prefix = $f.prefix; s = $f.s; sec = $f.sec; std = $f.std; suffix = $f.suffix; t = $f.t; y = $f.y; year = $f.year; zone$1 = $f.zone$1; zone$2 = $f.zone$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).locabs(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		name = _tuple[0];
		offset = _tuple[1];
		abs = _tuple[2];
		year = -1;
		month = 0;
		day = 0;
		hour = -1;
		min = 0;
		sec = 0;
		while (true) {
			if (!(!(layout === ""))) { break; }
			_tuple$1 = nextStdChunk(layout);
			prefix = _tuple$1[0];
			std = _tuple$1[1];
			suffix = _tuple$1[2];
			if (!(prefix === "")) {
				b = $appendSlice(b, prefix);
			}
			if (std === 0) {
				break;
			}
			layout = suffix;
			if (year < 0 && !(((std & 256) === 0))) {
				_tuple$2 = absDate(abs, true);
				year = _tuple$2[0];
				month = _tuple$2[1];
				day = _tuple$2[2];
			}
			if (hour < 0 && !(((std & 512) === 0))) {
				_tuple$3 = absClock(abs);
				hour = _tuple$3[0];
				min = _tuple$3[1];
				sec = _tuple$3[2];
			}
			switch (0) { default:
				_1 = std & 65535;
				if (_1 === (274)) {
					y = year;
					if (y < 0) {
						y = -y;
					}
					b = appendInt(b, (_r$1 = y % 100, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")), 2);
				} else if (_1 === (273)) {
					b = appendInt(b, year, 4);
				} else if (_1 === (258)) {
					b = $appendSlice(b, $substring(new Month(month).String(), 0, 3));
				} else if (_1 === (257)) {
					m = new Month(month).String();
					b = $appendSlice(b, m);
				} else if (_1 === (259)) {
					b = appendInt(b, ((month >> 0)), 0);
				} else if (_1 === (260)) {
					b = appendInt(b, ((month >> 0)), 2);
				} else if (_1 === (262)) {
					b = $appendSlice(b, $substring(new Weekday(absWeekday(abs)).String(), 0, 3));
				} else if (_1 === (261)) {
					s = new Weekday(absWeekday(abs)).String();
					b = $appendSlice(b, s);
				} else if (_1 === (263)) {
					b = appendInt(b, day, 0);
				} else if (_1 === (264)) {
					if (day < 10) {
						b = $append(b, 32);
					}
					b = appendInt(b, day, 0);
				} else if (_1 === (265)) {
					b = appendInt(b, day, 2);
				} else if (_1 === (522)) {
					b = appendInt(b, hour, 2);
				} else if (_1 === (523)) {
					hr = (_r$2 = hour % 12, _r$2 === _r$2 ? _r$2 : $throwRuntimeError("integer divide by zero"));
					if (hr === 0) {
						hr = 12;
					}
					b = appendInt(b, hr, 0);
				} else if (_1 === (524)) {
					hr$1 = (_r$3 = hour % 12, _r$3 === _r$3 ? _r$3 : $throwRuntimeError("integer divide by zero"));
					if (hr$1 === 0) {
						hr$1 = 12;
					}
					b = appendInt(b, hr$1, 2);
				} else if (_1 === (525)) {
					b = appendInt(b, min, 0);
				} else if (_1 === (526)) {
					b = appendInt(b, min, 2);
				} else if (_1 === (527)) {
					b = appendInt(b, sec, 0);
				} else if (_1 === (528)) {
					b = appendInt(b, sec, 2);
				} else if (_1 === (531)) {
					if (hour >= 12) {
						b = $appendSlice(b, "PM");
					} else {
						b = $appendSlice(b, "AM");
					}
				} else if (_1 === (532)) {
					if (hour >= 12) {
						b = $appendSlice(b, "pm");
					} else {
						b = $appendSlice(b, "am");
					}
				} else if ((_1 === (22)) || (_1 === (25)) || (_1 === (23)) || (_1 === (24)) || (_1 === (26)) || (_1 === (27)) || (_1 === (30)) || (_1 === (28)) || (_1 === (29)) || (_1 === (31))) {
					if ((offset === 0) && ((std === 22) || (std === 25) || (std === 23) || (std === 24) || (std === 26))) {
						b = $append(b, 90);
						break;
					}
					zone$1 = (_q = offset / 60, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
					absoffset = offset;
					if (zone$1 < 0) {
						b = $append(b, 45);
						zone$1 = -zone$1;
						absoffset = -absoffset;
					} else {
						b = $append(b, 43);
					}
					b = appendInt(b, (_q$1 = zone$1 / 60, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")), 2);
					if ((std === 25) || (std === 30) || (std === 26) || (std === 31)) {
						b = $append(b, 58);
					}
					if (!((std === 29)) && !((std === 24))) {
						b = appendInt(b, (_r$4 = zone$1 % 60, _r$4 === _r$4 ? _r$4 : $throwRuntimeError("integer divide by zero")), 2);
					}
					if ((std === 23) || (std === 28) || (std === 31) || (std === 26)) {
						if ((std === 31) || (std === 26)) {
							b = $append(b, 58);
						}
						b = appendInt(b, (_r$5 = absoffset % 60, _r$5 === _r$5 ? _r$5 : $throwRuntimeError("integer divide by zero")), 2);
					}
				} else if (_1 === (21)) {
					if (!(name === "")) {
						b = $appendSlice(b, name);
						break;
					}
					zone$2 = (_q$2 = offset / 60, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >> 0 : $throwRuntimeError("integer divide by zero"));
					if (zone$2 < 0) {
						b = $append(b, 45);
						zone$2 = -zone$2;
					} else {
						b = $append(b, 43);
					}
					b = appendInt(b, (_q$3 = zone$2 / 60, (_q$3 === _q$3 && _q$3 !== 1/0 && _q$3 !== -1/0) ? _q$3 >> 0 : $throwRuntimeError("integer divide by zero")), 2);
					b = appendInt(b, (_r$6 = zone$2 % 60, _r$6 === _r$6 ? _r$6 : $throwRuntimeError("integer divide by zero")), 2);
				} else if ((_1 === (32)) || (_1 === (33))) {
					b = formatNano(b, (($clone(t, Time).Nanosecond() >>> 0)), std >> 16 >> 0, (std & 65535) === 33);
				}
			}
		}
		$s = -1; return b;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.AppendFormat }; } $f._1 = _1; $f._q = _q; $f._q$1 = _q$1; $f._q$2 = _q$2; $f._q$3 = _q$3; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.abs = abs; $f.absoffset = absoffset; $f.b = b; $f.day = day; $f.hour = hour; $f.hr = hr; $f.hr$1 = hr$1; $f.layout = layout; $f.m = m; $f.min = min; $f.month = month; $f.name = name; $f.offset = offset; $f.prefix = prefix; $f.s = s; $f.sec = sec; $f.std = std; $f.suffix = suffix; $f.t = t; $f.y = y; $f.year = year; $f.zone$1 = zone$1; $f.zone$2 = zone$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.AppendFormat = function(b, layout) { return this.$val.AppendFormat(b, layout); };
	quote = function(s) {
		var s;
		return "\"" + s + "\"";
	};
	ParseError.ptr.prototype.Error = function() {
		var e;
		e = this;
		if (e.Message === "") {
			return "parsing time " + quote(e.Value) + " as " + quote(e.Layout) + ": cannot parse " + quote(e.ValueElem) + " as " + quote(e.LayoutElem);
		}
		return "parsing time " + quote(e.Value) + e.Message;
	};
	ParseError.prototype.Error = function() { return this.$val.Error(); };
	isDigit = function(s, i) {
		var c, i, s;
		if (s.length <= i) {
			return false;
		}
		c = s.charCodeAt(i);
		return 48 <= c && c <= 57;
	};
	getnum = function(s, fixed) {
		var fixed, s;
		if (!isDigit(s, 0)) {
			return [0, s, errBad];
		}
		if (!isDigit(s, 1)) {
			if (fixed) {
				return [0, s, errBad];
			}
			return [(((s.charCodeAt(0) - 48 << 24 >>> 24) >> 0)), $substring(s, 1), $ifaceNil];
		}
		return [($imul((((s.charCodeAt(0) - 48 << 24 >>> 24) >> 0)), 10)) + (((s.charCodeAt(1) - 48 << 24 >>> 24) >> 0)) >> 0, $substring(s, 2), $ifaceNil];
	};
	cutspace = function(s) {
		var s;
		while (true) {
			if (!(s.length > 0 && (s.charCodeAt(0) === 32))) { break; }
			s = $substring(s, 1);
		}
		return s;
	};
	skip = function(value, prefix) {
		var prefix, value;
		while (true) {
			if (!(prefix.length > 0)) { break; }
			if (prefix.charCodeAt(0) === 32) {
				if (value.length > 0 && !((value.charCodeAt(0) === 32))) {
					return [value, errBad];
				}
				prefix = cutspace(prefix);
				value = cutspace(value);
				continue;
			}
			if ((value.length === 0) || !((value.charCodeAt(0) === prefix.charCodeAt(0)))) {
				return [value, errBad];
			}
			prefix = $substring(prefix, 1);
			value = $substring(value, 1);
		}
		return [value, $ifaceNil];
	};
	Parse = function(layout, value) {
		var _r, layout, value, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; layout = $f.layout; value = $f.value; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_r = parse(layout, value, $pkg.UTC, $pkg.Local); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Parse }; } $f._r = _r; $f.layout = layout; $f.value = value; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Parse = Parse;
	parse = function(layout, value, defaultLocation, local) {
		var _1, _2, _3, _4, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$27, _tmp$28, _tmp$29, _tmp$3, _tmp$30, _tmp$31, _tmp$32, _tmp$33, _tmp$34, _tmp$35, _tmp$36, _tmp$37, _tmp$38, _tmp$39, _tmp$4, _tmp$40, _tmp$41, _tmp$42, _tmp$43, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$10, _tuple$11, _tuple$12, _tuple$13, _tuple$14, _tuple$15, _tuple$16, _tuple$17, _tuple$18, _tuple$19, _tuple$2, _tuple$20, _tuple$21, _tuple$22, _tuple$23, _tuple$24, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, _tuple$8, _tuple$9, alayout, amSet, avalue, day, defaultLocation, err, hour, hour$1, hr, i, layout, local, min, min$1, mm, month, n, n$1, name, ndigit, nsec, offset, offset$1, ok, ok$1, p, pmSet, prefix, rangeErrString, sec, seconds, sign, ss, std, stdstr, suffix, t, t$1, value, x$1, x$2, year, z, zoneName, zoneOffset, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _2 = $f._2; _3 = $f._3; _4 = $f._4; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$15 = $f._tmp$15; _tmp$16 = $f._tmp$16; _tmp$17 = $f._tmp$17; _tmp$18 = $f._tmp$18; _tmp$19 = $f._tmp$19; _tmp$2 = $f._tmp$2; _tmp$20 = $f._tmp$20; _tmp$21 = $f._tmp$21; _tmp$22 = $f._tmp$22; _tmp$23 = $f._tmp$23; _tmp$24 = $f._tmp$24; _tmp$25 = $f._tmp$25; _tmp$26 = $f._tmp$26; _tmp$27 = $f._tmp$27; _tmp$28 = $f._tmp$28; _tmp$29 = $f._tmp$29; _tmp$3 = $f._tmp$3; _tmp$30 = $f._tmp$30; _tmp$31 = $f._tmp$31; _tmp$32 = $f._tmp$32; _tmp$33 = $f._tmp$33; _tmp$34 = $f._tmp$34; _tmp$35 = $f._tmp$35; _tmp$36 = $f._tmp$36; _tmp$37 = $f._tmp$37; _tmp$38 = $f._tmp$38; _tmp$39 = $f._tmp$39; _tmp$4 = $f._tmp$4; _tmp$40 = $f._tmp$40; _tmp$41 = $f._tmp$41; _tmp$42 = $f._tmp$42; _tmp$43 = $f._tmp$43; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$10 = $f._tuple$10; _tuple$11 = $f._tuple$11; _tuple$12 = $f._tuple$12; _tuple$13 = $f._tuple$13; _tuple$14 = $f._tuple$14; _tuple$15 = $f._tuple$15; _tuple$16 = $f._tuple$16; _tuple$17 = $f._tuple$17; _tuple$18 = $f._tuple$18; _tuple$19 = $f._tuple$19; _tuple$2 = $f._tuple$2; _tuple$20 = $f._tuple$20; _tuple$21 = $f._tuple$21; _tuple$22 = $f._tuple$22; _tuple$23 = $f._tuple$23; _tuple$24 = $f._tuple$24; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; _tuple$7 = $f._tuple$7; _tuple$8 = $f._tuple$8; _tuple$9 = $f._tuple$9; alayout = $f.alayout; amSet = $f.amSet; avalue = $f.avalue; day = $f.day; defaultLocation = $f.defaultLocation; err = $f.err; hour = $f.hour; hour$1 = $f.hour$1; hr = $f.hr; i = $f.i; layout = $f.layout; local = $f.local; min = $f.min; min$1 = $f.min$1; mm = $f.mm; month = $f.month; n = $f.n; n$1 = $f.n$1; name = $f.name; ndigit = $f.ndigit; nsec = $f.nsec; offset = $f.offset; offset$1 = $f.offset$1; ok = $f.ok; ok$1 = $f.ok$1; p = $f.p; pmSet = $f.pmSet; prefix = $f.prefix; rangeErrString = $f.rangeErrString; sec = $f.sec; seconds = $f.seconds; sign = $f.sign; ss = $f.ss; std = $f.std; stdstr = $f.stdstr; suffix = $f.suffix; t = $f.t; t$1 = $f.t$1; value = $f.value; x$1 = $f.x$1; x$2 = $f.x$2; year = $f.year; z = $f.z; zoneName = $f.zoneName; zoneOffset = $f.zoneOffset; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_tmp = layout;
		_tmp$1 = value;
		alayout = _tmp;
		avalue = _tmp$1;
		rangeErrString = "";
		amSet = false;
		pmSet = false;
		year = 0;
		month = 1;
		day = 1;
		hour = 0;
		min = 0;
		sec = 0;
		nsec = 0;
		z = ptrType$2.nil;
		zoneOffset = -1;
		zoneName = "";
		while (true) {
			err = $ifaceNil;
			_tuple = nextStdChunk(layout);
			prefix = _tuple[0];
			std = _tuple[1];
			suffix = _tuple[2];
			stdstr = $substring(layout, prefix.length, (layout.length - suffix.length >> 0));
			_tuple$1 = skip(value, prefix);
			value = _tuple$1[0];
			err = _tuple$1[1];
			if (!($interfaceIsEqual(err, $ifaceNil))) {
				$s = -1; return [new Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType$2.nil), new ParseError.ptr(alayout, avalue, prefix, value, "")];
			}
			if (std === 0) {
				if (!((value.length === 0))) {
					$s = -1; return [new Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType$2.nil), new ParseError.ptr(alayout, avalue, "", value, ": extra text: " + value)];
				}
				break;
			}
			layout = suffix;
			p = "";
			switch (0) { default:
				_1 = std & 65535;
				if (_1 === (274)) {
					if (value.length < 2) {
						err = errBad;
						break;
					}
					_tmp$2 = $substring(value, 0, 2);
					_tmp$3 = $substring(value, 2);
					p = _tmp$2;
					value = _tmp$3;
					_tuple$2 = atoi(p);
					year = _tuple$2[0];
					err = _tuple$2[1];
					if (year >= 69) {
						year = year + (1900) >> 0;
					} else {
						year = year + (2000) >> 0;
					}
				} else if (_1 === (273)) {
					if (value.length < 4 || !isDigit(value, 0)) {
						err = errBad;
						break;
					}
					_tmp$4 = $substring(value, 0, 4);
					_tmp$5 = $substring(value, 4);
					p = _tmp$4;
					value = _tmp$5;
					_tuple$3 = atoi(p);
					year = _tuple$3[0];
					err = _tuple$3[1];
				} else if (_1 === (258)) {
					_tuple$4 = lookup(shortMonthNames, value);
					month = _tuple$4[0];
					value = _tuple$4[1];
					err = _tuple$4[2];
					month = month + (1) >> 0;
				} else if (_1 === (257)) {
					_tuple$5 = lookup(longMonthNames, value);
					month = _tuple$5[0];
					value = _tuple$5[1];
					err = _tuple$5[2];
					month = month + (1) >> 0;
				} else if ((_1 === (259)) || (_1 === (260))) {
					_tuple$6 = getnum(value, std === 260);
					month = _tuple$6[0];
					value = _tuple$6[1];
					err = _tuple$6[2];
					if (month <= 0 || 12 < month) {
						rangeErrString = "month";
					}
				} else if (_1 === (262)) {
					_tuple$7 = lookup(shortDayNames, value);
					value = _tuple$7[1];
					err = _tuple$7[2];
				} else if (_1 === (261)) {
					_tuple$8 = lookup(longDayNames, value);
					value = _tuple$8[1];
					err = _tuple$8[2];
				} else if ((_1 === (263)) || (_1 === (264)) || (_1 === (265))) {
					if ((std === 264) && value.length > 0 && (value.charCodeAt(0) === 32)) {
						value = $substring(value, 1);
					}
					_tuple$9 = getnum(value, std === 265);
					day = _tuple$9[0];
					value = _tuple$9[1];
					err = _tuple$9[2];
					if (day < 0) {
						rangeErrString = "day";
					}
				} else if (_1 === (522)) {
					_tuple$10 = getnum(value, false);
					hour = _tuple$10[0];
					value = _tuple$10[1];
					err = _tuple$10[2];
					if (hour < 0 || 24 <= hour) {
						rangeErrString = "hour";
					}
				} else if ((_1 === (523)) || (_1 === (524))) {
					_tuple$11 = getnum(value, std === 524);
					hour = _tuple$11[0];
					value = _tuple$11[1];
					err = _tuple$11[2];
					if (hour < 0 || 12 < hour) {
						rangeErrString = "hour";
					}
				} else if ((_1 === (525)) || (_1 === (526))) {
					_tuple$12 = getnum(value, std === 526);
					min = _tuple$12[0];
					value = _tuple$12[1];
					err = _tuple$12[2];
					if (min < 0 || 60 <= min) {
						rangeErrString = "minute";
					}
				} else if ((_1 === (527)) || (_1 === (528))) {
					_tuple$13 = getnum(value, std === 528);
					sec = _tuple$13[0];
					value = _tuple$13[1];
					err = _tuple$13[2];
					if (sec < 0 || 60 <= sec) {
						rangeErrString = "second";
						break;
					}
					if (value.length >= 2 && (value.charCodeAt(0) === 46) && isDigit(value, 1)) {
						_tuple$14 = nextStdChunk(layout);
						std = _tuple$14[1];
						std = std & (65535);
						if ((std === 32) || (std === 33)) {
							break;
						}
						n = 2;
						while (true) {
							if (!(n < value.length && isDigit(value, n))) { break; }
							n = n + (1) >> 0;
						}
						_tuple$15 = parseNanoseconds(value, n);
						nsec = _tuple$15[0];
						rangeErrString = _tuple$15[1];
						err = _tuple$15[2];
						value = $substring(value, n);
					}
				} else if (_1 === (531)) {
					if (value.length < 2) {
						err = errBad;
						break;
					}
					_tmp$6 = $substring(value, 0, 2);
					_tmp$7 = $substring(value, 2);
					p = _tmp$6;
					value = _tmp$7;
					_2 = p;
					if (_2 === ("PM")) {
						pmSet = true;
					} else if (_2 === ("AM")) {
						amSet = true;
					} else {
						err = errBad;
					}
				} else if (_1 === (532)) {
					if (value.length < 2) {
						err = errBad;
						break;
					}
					_tmp$8 = $substring(value, 0, 2);
					_tmp$9 = $substring(value, 2);
					p = _tmp$8;
					value = _tmp$9;
					_3 = p;
					if (_3 === ("pm")) {
						pmSet = true;
					} else if (_3 === ("am")) {
						amSet = true;
					} else {
						err = errBad;
					}
				} else if ((_1 === (22)) || (_1 === (25)) || (_1 === (23)) || (_1 === (24)) || (_1 === (26)) || (_1 === (27)) || (_1 === (29)) || (_1 === (30)) || (_1 === (28)) || (_1 === (31))) {
					if (((std === 22) || (std === 24) || (std === 25)) && value.length >= 1 && (value.charCodeAt(0) === 90)) {
						value = $substring(value, 1);
						z = $pkg.UTC;
						break;
					}
					_tmp$10 = "";
					_tmp$11 = "";
					_tmp$12 = "";
					_tmp$13 = "";
					sign = _tmp$10;
					hour$1 = _tmp$11;
					min$1 = _tmp$12;
					seconds = _tmp$13;
					if ((std === 25) || (std === 30)) {
						if (value.length < 6) {
							err = errBad;
							break;
						}
						if (!((value.charCodeAt(3) === 58))) {
							err = errBad;
							break;
						}
						_tmp$14 = $substring(value, 0, 1);
						_tmp$15 = $substring(value, 1, 3);
						_tmp$16 = $substring(value, 4, 6);
						_tmp$17 = "00";
						_tmp$18 = $substring(value, 6);
						sign = _tmp$14;
						hour$1 = _tmp$15;
						min$1 = _tmp$16;
						seconds = _tmp$17;
						value = _tmp$18;
					} else if ((std === 29) || (std === 24)) {
						if (value.length < 3) {
							err = errBad;
							break;
						}
						_tmp$19 = $substring(value, 0, 1);
						_tmp$20 = $substring(value, 1, 3);
						_tmp$21 = "00";
						_tmp$22 = "00";
						_tmp$23 = $substring(value, 3);
						sign = _tmp$19;
						hour$1 = _tmp$20;
						min$1 = _tmp$21;
						seconds = _tmp$22;
						value = _tmp$23;
					} else if ((std === 26) || (std === 31)) {
						if (value.length < 9) {
							err = errBad;
							break;
						}
						if (!((value.charCodeAt(3) === 58)) || !((value.charCodeAt(6) === 58))) {
							err = errBad;
							break;
						}
						_tmp$24 = $substring(value, 0, 1);
						_tmp$25 = $substring(value, 1, 3);
						_tmp$26 = $substring(value, 4, 6);
						_tmp$27 = $substring(value, 7, 9);
						_tmp$28 = $substring(value, 9);
						sign = _tmp$24;
						hour$1 = _tmp$25;
						min$1 = _tmp$26;
						seconds = _tmp$27;
						value = _tmp$28;
					} else if ((std === 23) || (std === 28)) {
						if (value.length < 7) {
							err = errBad;
							break;
						}
						_tmp$29 = $substring(value, 0, 1);
						_tmp$30 = $substring(value, 1, 3);
						_tmp$31 = $substring(value, 3, 5);
						_tmp$32 = $substring(value, 5, 7);
						_tmp$33 = $substring(value, 7);
						sign = _tmp$29;
						hour$1 = _tmp$30;
						min$1 = _tmp$31;
						seconds = _tmp$32;
						value = _tmp$33;
					} else {
						if (value.length < 5) {
							err = errBad;
							break;
						}
						_tmp$34 = $substring(value, 0, 1);
						_tmp$35 = $substring(value, 1, 3);
						_tmp$36 = $substring(value, 3, 5);
						_tmp$37 = "00";
						_tmp$38 = $substring(value, 5);
						sign = _tmp$34;
						hour$1 = _tmp$35;
						min$1 = _tmp$36;
						seconds = _tmp$37;
						value = _tmp$38;
					}
					_tmp$39 = 0;
					_tmp$40 = 0;
					_tmp$41 = 0;
					hr = _tmp$39;
					mm = _tmp$40;
					ss = _tmp$41;
					_tuple$16 = atoi(hour$1);
					hr = _tuple$16[0];
					err = _tuple$16[1];
					if ($interfaceIsEqual(err, $ifaceNil)) {
						_tuple$17 = atoi(min$1);
						mm = _tuple$17[0];
						err = _tuple$17[1];
					}
					if ($interfaceIsEqual(err, $ifaceNil)) {
						_tuple$18 = atoi(seconds);
						ss = _tuple$18[0];
						err = _tuple$18[1];
					}
					zoneOffset = ($imul(((($imul(hr, 60)) + mm >> 0)), 60)) + ss >> 0;
					_4 = sign.charCodeAt(0);
					if (_4 === (43)) {
					} else if (_4 === (45)) {
						zoneOffset = -zoneOffset;
					} else {
						err = errBad;
					}
				} else if (_1 === (21)) {
					if (value.length >= 3 && $substring(value, 0, 3) === "UTC") {
						z = $pkg.UTC;
						value = $substring(value, 3);
						break;
					}
					_tuple$19 = parseTimeZone(value);
					n$1 = _tuple$19[0];
					ok = _tuple$19[1];
					if (!ok) {
						err = errBad;
						break;
					}
					_tmp$42 = $substring(value, 0, n$1);
					_tmp$43 = $substring(value, n$1);
					zoneName = _tmp$42;
					value = _tmp$43;
				} else if (_1 === (32)) {
					ndigit = 1 + ((std >> 16 >> 0)) >> 0;
					if (value.length < ndigit) {
						err = errBad;
						break;
					}
					_tuple$20 = parseNanoseconds(value, ndigit);
					nsec = _tuple$20[0];
					rangeErrString = _tuple$20[1];
					err = _tuple$20[2];
					value = $substring(value, ndigit);
				} else if (_1 === (33)) {
					if (value.length < 2 || !((value.charCodeAt(0) === 46)) || value.charCodeAt(1) < 48 || 57 < value.charCodeAt(1)) {
						break;
					}
					i = 0;
					while (true) {
						if (!(i < 9 && (i + 1 >> 0) < value.length && 48 <= value.charCodeAt((i + 1 >> 0)) && value.charCodeAt((i + 1 >> 0)) <= 57)) { break; }
						i = i + (1) >> 0;
					}
					_tuple$21 = parseNanoseconds(value, 1 + i >> 0);
					nsec = _tuple$21[0];
					rangeErrString = _tuple$21[1];
					err = _tuple$21[2];
					value = $substring(value, (1 + i >> 0));
				}
			}
			if (!(rangeErrString === "")) {
				$s = -1; return [new Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType$2.nil), new ParseError.ptr(alayout, avalue, stdstr, value, ": " + rangeErrString + " out of range")];
			}
			if (!($interfaceIsEqual(err, $ifaceNil))) {
				$s = -1; return [new Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType$2.nil), new ParseError.ptr(alayout, avalue, stdstr, value, "")];
			}
		}
		if (pmSet && hour < 12) {
			hour = hour + (12) >> 0;
		} else if (amSet && (hour === 12)) {
			hour = 0;
		}
		if (day < 1 || day > daysIn(((month >> 0)), year)) {
			$s = -1; return [new Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType$2.nil), new ParseError.ptr(alayout, avalue, "", value, ": day out of range")];
		}
		/* */ if (!(z === ptrType$2.nil)) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (!(z === ptrType$2.nil)) { */ case 1:
			_r = Date(year, ((month >> 0)), day, hour, min, sec, nsec, z); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$s = -1; return [_r, $ifaceNil];
		/* } */ case 2:
		/* */ if (!((zoneOffset === -1))) { $s = 4; continue; }
		/* */ $s = 5; continue;
		/* if (!((zoneOffset === -1))) { */ case 4:
			_r$1 = Date(year, ((month >> 0)), day, hour, min, sec, nsec, $pkg.UTC); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			t = $clone(_r$1, Time);
			t.addSec((x$1 = (new $Int64(0, zoneOffset)), new $Int64(-x$1.$high, -x$1.$low)));
			_r$2 = local.lookup(t.unixSec()); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$22 = _r$2;
			name = _tuple$22[0];
			offset = _tuple$22[1];
			if ((offset === zoneOffset) && (zoneName === "" || name === zoneName)) {
				t.setLoc(local);
				$s = -1; return [t, $ifaceNil];
			}
			t.setLoc(FixedZone(zoneName, zoneOffset));
			$s = -1; return [t, $ifaceNil];
		/* } */ case 5:
		/* */ if (!(zoneName === "")) { $s = 8; continue; }
		/* */ $s = 9; continue;
		/* if (!(zoneName === "")) { */ case 8:
			_r$3 = Date(year, ((month >> 0)), day, hour, min, sec, nsec, $pkg.UTC); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			t$1 = $clone(_r$3, Time);
			_r$4 = local.lookupName(zoneName, t$1.unixSec()); /* */ $s = 11; case 11: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			_tuple$23 = _r$4;
			offset$1 = _tuple$23[0];
			ok$1 = _tuple$23[1];
			if (ok$1) {
				t$1.addSec((x$2 = (new $Int64(0, offset$1)), new $Int64(-x$2.$high, -x$2.$low)));
				t$1.setLoc(local);
				$s = -1; return [t$1, $ifaceNil];
			}
			if (zoneName.length > 3 && $substring(zoneName, 0, 3) === "GMT") {
				_tuple$24 = atoi($substring(zoneName, 3));
				offset$1 = _tuple$24[0];
				offset$1 = $imul(offset$1, (3600));
			}
			t$1.setLoc(FixedZone(zoneName, offset$1));
			$s = -1; return [t$1, $ifaceNil];
		/* } */ case 9:
		_r$5 = Date(year, ((month >> 0)), day, hour, min, sec, nsec, defaultLocation); /* */ $s = 12; case 12: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		$s = -1; return [_r$5, $ifaceNil];
		/* */ } return; } if ($f === undefined) { $f = { $blk: parse }; } $f._1 = _1; $f._2 = _2; $f._3 = _3; $f._4 = _4; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$15 = _tmp$15; $f._tmp$16 = _tmp$16; $f._tmp$17 = _tmp$17; $f._tmp$18 = _tmp$18; $f._tmp$19 = _tmp$19; $f._tmp$2 = _tmp$2; $f._tmp$20 = _tmp$20; $f._tmp$21 = _tmp$21; $f._tmp$22 = _tmp$22; $f._tmp$23 = _tmp$23; $f._tmp$24 = _tmp$24; $f._tmp$25 = _tmp$25; $f._tmp$26 = _tmp$26; $f._tmp$27 = _tmp$27; $f._tmp$28 = _tmp$28; $f._tmp$29 = _tmp$29; $f._tmp$3 = _tmp$3; $f._tmp$30 = _tmp$30; $f._tmp$31 = _tmp$31; $f._tmp$32 = _tmp$32; $f._tmp$33 = _tmp$33; $f._tmp$34 = _tmp$34; $f._tmp$35 = _tmp$35; $f._tmp$36 = _tmp$36; $f._tmp$37 = _tmp$37; $f._tmp$38 = _tmp$38; $f._tmp$39 = _tmp$39; $f._tmp$4 = _tmp$4; $f._tmp$40 = _tmp$40; $f._tmp$41 = _tmp$41; $f._tmp$42 = _tmp$42; $f._tmp$43 = _tmp$43; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$10 = _tuple$10; $f._tuple$11 = _tuple$11; $f._tuple$12 = _tuple$12; $f._tuple$13 = _tuple$13; $f._tuple$14 = _tuple$14; $f._tuple$15 = _tuple$15; $f._tuple$16 = _tuple$16; $f._tuple$17 = _tuple$17; $f._tuple$18 = _tuple$18; $f._tuple$19 = _tuple$19; $f._tuple$2 = _tuple$2; $f._tuple$20 = _tuple$20; $f._tuple$21 = _tuple$21; $f._tuple$22 = _tuple$22; $f._tuple$23 = _tuple$23; $f._tuple$24 = _tuple$24; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f._tuple$7 = _tuple$7; $f._tuple$8 = _tuple$8; $f._tuple$9 = _tuple$9; $f.alayout = alayout; $f.amSet = amSet; $f.avalue = avalue; $f.day = day; $f.defaultLocation = defaultLocation; $f.err = err; $f.hour = hour; $f.hour$1 = hour$1; $f.hr = hr; $f.i = i; $f.layout = layout; $f.local = local; $f.min = min; $f.min$1 = min$1; $f.mm = mm; $f.month = month; $f.n = n; $f.n$1 = n$1; $f.name = name; $f.ndigit = ndigit; $f.nsec = nsec; $f.offset = offset; $f.offset$1 = offset$1; $f.ok = ok; $f.ok$1 = ok$1; $f.p = p; $f.pmSet = pmSet; $f.prefix = prefix; $f.rangeErrString = rangeErrString; $f.sec = sec; $f.seconds = seconds; $f.sign = sign; $f.ss = ss; $f.std = std; $f.stdstr = stdstr; $f.suffix = suffix; $f.t = t; $f.t$1 = t$1; $f.value = value; $f.x$1 = x$1; $f.x$2 = x$2; $f.year = year; $f.z = z; $f.zoneName = zoneName; $f.zoneOffset = zoneOffset; $f.$s = $s; $f.$r = $r; return $f;
	};
	parseTimeZone = function(value) {
		var _1, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, c, length, nUpper, ok, ok$1, value;
		length = 0;
		ok = false;
		if (value.length < 3) {
			_tmp = 0;
			_tmp$1 = false;
			length = _tmp;
			ok = _tmp$1;
			return [length, ok];
		}
		if (value.length >= 4 && ($substring(value, 0, 4) === "ChST" || $substring(value, 0, 4) === "MeST")) {
			_tmp$2 = 4;
			_tmp$3 = true;
			length = _tmp$2;
			ok = _tmp$3;
			return [length, ok];
		}
		if ($substring(value, 0, 3) === "GMT") {
			length = parseGMT(value);
			_tmp$4 = length;
			_tmp$5 = true;
			length = _tmp$4;
			ok = _tmp$5;
			return [length, ok];
		}
		if ((value.charCodeAt(0) === 43) || (value.charCodeAt(0) === 45)) {
			length = parseSignedOffset(value);
			ok$1 = length > 0;
			_tmp$6 = length;
			_tmp$7 = ok$1;
			length = _tmp$6;
			ok = _tmp$7;
			return [length, ok];
		}
		nUpper = 0;
		nUpper = 0;
		while (true) {
			if (!(nUpper < 6)) { break; }
			if (nUpper >= value.length) {
				break;
			}
			c = value.charCodeAt(nUpper);
			if (c < 65 || 90 < c) {
				break;
			}
			nUpper = nUpper + (1) >> 0;
		}
		_1 = nUpper;
		if ((_1 === (0)) || (_1 === (1)) || (_1 === (2)) || (_1 === (6))) {
			_tmp$8 = 0;
			_tmp$9 = false;
			length = _tmp$8;
			ok = _tmp$9;
			return [length, ok];
		} else if (_1 === (5)) {
			if (value.charCodeAt(4) === 84) {
				_tmp$10 = 5;
				_tmp$11 = true;
				length = _tmp$10;
				ok = _tmp$11;
				return [length, ok];
			}
		} else if (_1 === (4)) {
			if ((value.charCodeAt(3) === 84) || $substring(value, 0, 4) === "WITA") {
				_tmp$12 = 4;
				_tmp$13 = true;
				length = _tmp$12;
				ok = _tmp$13;
				return [length, ok];
			}
		} else if (_1 === (3)) {
			_tmp$14 = 3;
			_tmp$15 = true;
			length = _tmp$14;
			ok = _tmp$15;
			return [length, ok];
		}
		_tmp$16 = 0;
		_tmp$17 = false;
		length = _tmp$16;
		ok = _tmp$17;
		return [length, ok];
	};
	parseGMT = function(value) {
		var value;
		value = $substring(value, 3);
		if (value.length === 0) {
			return 3;
		}
		return 3 + parseSignedOffset(value) >> 0;
	};
	parseSignedOffset = function(value) {
		var _tuple, err, rem, sign, value, x$1;
		sign = value.charCodeAt(0);
		if (!((sign === 45)) && !((sign === 43))) {
			return 0;
		}
		_tuple = leadingInt($substring(value, 1));
		x$1 = _tuple[0];
		rem = _tuple[1];
		err = _tuple[2];
		if (!($interfaceIsEqual(err, $ifaceNil)) || $substring(value, 1) === rem) {
			return 0;
		}
		if (sign === 45) {
			x$1 = new $Int64(-x$1.$high, -x$1.$low);
		}
		if ((x$1.$high < -1 || (x$1.$high === -1 && x$1.$low < 4294967273)) || (0 < x$1.$high || (0 === x$1.$high && 23 < x$1.$low))) {
			return 0;
		}
		return value.length - rem.length >> 0;
	};
	parseNanoseconds = function(value, nbytes) {
		var _tuple, err, i, nbytes, ns, rangeErrString, scaleDigits, value;
		ns = 0;
		rangeErrString = "";
		err = $ifaceNil;
		if (!((value.charCodeAt(0) === 46))) {
			err = errBad;
			return [ns, rangeErrString, err];
		}
		_tuple = atoi($substring(value, 1, nbytes));
		ns = _tuple[0];
		err = _tuple[1];
		if (!($interfaceIsEqual(err, $ifaceNil))) {
			return [ns, rangeErrString, err];
		}
		if (ns < 0 || 1000000000 <= ns) {
			rangeErrString = "fractional second";
			return [ns, rangeErrString, err];
		}
		scaleDigits = 10 - nbytes >> 0;
		i = 0;
		while (true) {
			if (!(i < scaleDigits)) { break; }
			ns = $imul(ns, (10));
			i = i + (1) >> 0;
		}
		return [ns, rangeErrString, err];
	};
	leadingInt = function(s) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, c, err, i, rem, s, x$1, x$2, x$3, x$4;
		x$1 = new $Int64(0, 0);
		rem = "";
		err = $ifaceNil;
		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
			c = s.charCodeAt(i);
			if (c < 48 || c > 57) {
				break;
			}
			if ((x$1.$high > 214748364 || (x$1.$high === 214748364 && x$1.$low > 3435973836))) {
				_tmp = new $Int64(0, 0);
				_tmp$1 = "";
				_tmp$2 = errLeadingInt;
				x$1 = _tmp;
				rem = _tmp$1;
				err = _tmp$2;
				return [x$1, rem, err];
			}
			x$1 = (x$2 = (x$3 = $mul64(x$1, new $Int64(0, 10)), x$4 = (new $Int64(0, c)), new $Int64(x$3.$high + x$4.$high, x$3.$low + x$4.$low)), new $Int64(x$2.$high - 0, x$2.$low - 48));
			if ((x$1.$high < 0 || (x$1.$high === 0 && x$1.$low < 0))) {
				_tmp$3 = new $Int64(0, 0);
				_tmp$4 = "";
				_tmp$5 = errLeadingInt;
				x$1 = _tmp$3;
				rem = _tmp$4;
				err = _tmp$5;
				return [x$1, rem, err];
			}
			i = i + (1) >> 0;
		}
		_tmp$6 = x$1;
		_tmp$7 = $substring(s, i);
		_tmp$8 = $ifaceNil;
		x$1 = _tmp$6;
		rem = _tmp$7;
		err = _tmp$8;
		return [x$1, rem, err];
	};
	when = function(d) {
		var d, t, x$1, x$2;
		if ((d.$high < 0 || (d.$high === 0 && d.$low <= 0))) {
			return runtimeNano();
		}
		t = (x$1 = runtimeNano(), x$2 = (new $Int64(d.$high, d.$low)), new $Int64(x$1.$high + x$2.$high, x$1.$low + x$2.$low));
		if ((t.$high < 0 || (t.$high === 0 && t.$low < 0))) {
			t = new $Int64(2147483647, 4294967295);
		}
		return t;
	};
	Timer.ptr.prototype.Stop = function() {
		var t;
		t = this;
		if (t.r.f === $throwNilPointerError) {
			$panic(new $String("time: Stop called on uninitialized Timer"));
		}
		return stopTimer(t.r);
	};
	Timer.prototype.Stop = function() { return this.$val.Stop(); };
	Timer.ptr.prototype.Reset = function(d) {
		var active, d, t, w;
		t = this;
		if (t.r.f === $throwNilPointerError) {
			$panic(new $String("time: Reset called on uninitialized Timer"));
		}
		w = when(d);
		active = stopTimer(t.r);
		t.r.when = w;
		startTimer(t.r);
		return active;
	};
	Timer.prototype.Reset = function(d) { return this.$val.Reset(d); };
	sendTime = function(c, seq) {
		var _selection, c, seq, $r;
		/* */ var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _selection = $f._selection; c = $f.c; seq = $f.seq; $r = $f.$r; }
		_selection = $select([[$assertType(c, chanType), $clone(Now(), Time)], []]);
		if (_selection[0] === 0) {
		} else if (_selection[0] === 1) {
		}
		/* */ if ($f === undefined) { $f = { $blk: sendTime }; } $f._selection = _selection; $f.c = c; $f.seq = seq; $f.$r = $r; return $f;
	};
	AfterFunc = function(d, f) {
		var d, f, t;
		t = new Timer.ptr($chanNil, new runtimeTimer.ptr(0, when(d), new $Int64(0, 0), goFunc, new funcType(f), null, false));
		startTimer(t.r);
		return t;
	};
	$pkg.AfterFunc = AfterFunc;
	goFunc = function(arg, seq) {
		var arg, seq;
		$go($assertType(arg, funcType), []);
	};
	NewTicker = function(d) {
		var c, d, t;
		if ((d.$high < 0 || (d.$high === 0 && d.$low <= 0))) {
			$panic(errors.New("non-positive interval for NewTicker"));
		}
		c = new $Chan(Time, 1);
		t = new Ticker.ptr(c, new runtimeTimer.ptr(0, when(d), (new $Int64(d.$high, d.$low)), sendTime, new chanType(c), null, false));
		startTimer(t.r);
		return t;
	};
	$pkg.NewTicker = NewTicker;
	Ticker.ptr.prototype.Stop = function() {
		var t;
		t = this;
		stopTimer(t.r);
	};
	Ticker.prototype.Stop = function() { return this.$val.Stop(); };
	Time.ptr.prototype.nsec = function() {
		var t, x$1;
		t = this;
		return (((x$1 = t.wall, new $Uint64(x$1.$high & 0, (x$1.$low & 1073741823) >>> 0)).$low >> 0));
	};
	Time.prototype.nsec = function() { return this.$val.nsec(); };
	Time.ptr.prototype.sec = function() {
		var t, x$1, x$2, x$3, x$4;
		t = this;
		if (!((x$1 = (x$2 = t.wall, new $Uint64(x$2.$high & 2147483648, (x$2.$low & 0) >>> 0)), (x$1.$high === 0 && x$1.$low === 0)))) {
			return (x$3 = ((x$4 = $shiftRightUint64($shiftLeft64(t.wall, 1), 31), new $Int64(x$4.$high, x$4.$low))), new $Int64(13 + x$3.$high, 3618733952 + x$3.$low));
		}
		return t.ext;
	};
	Time.prototype.sec = function() { return this.$val.sec(); };
	Time.ptr.prototype.unixSec = function() {
		var t, x$1;
		t = this;
		return (x$1 = t.sec(), new $Int64(x$1.$high + -15, x$1.$low + 2288912640));
	};
	Time.prototype.unixSec = function() { return this.$val.unixSec(); };
	Time.ptr.prototype.addSec = function(d) {
		var d, dsec, sec, t, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		t = this;
		if (!((x$1 = (x$2 = t.wall, new $Uint64(x$2.$high & 2147483648, (x$2.$low & 0) >>> 0)), (x$1.$high === 0 && x$1.$low === 0)))) {
			sec = ((x$3 = $shiftRightUint64($shiftLeft64(t.wall, 1), 31), new $Int64(x$3.$high, x$3.$low)));
			dsec = new $Int64(sec.$high + d.$high, sec.$low + d.$low);
			if ((0 < dsec.$high || (0 === dsec.$high && 0 <= dsec.$low)) && (dsec.$high < 1 || (dsec.$high === 1 && dsec.$low <= 4294967295))) {
				t.wall = (x$4 = (x$5 = (x$6 = t.wall, new $Uint64(x$6.$high & 0, (x$6.$low & 1073741823) >>> 0)), x$7 = $shiftLeft64((new $Uint64(dsec.$high, dsec.$low)), 30), new $Uint64(x$5.$high | x$7.$high, (x$5.$low | x$7.$low) >>> 0)), new $Uint64(x$4.$high | 2147483648, (x$4.$low | 0) >>> 0));
				return;
			}
			t.stripMono();
		}
		t.ext = (x$8 = t.ext, x$9 = d, new $Int64(x$8.$high + x$9.$high, x$8.$low + x$9.$low));
	};
	Time.prototype.addSec = function(d) { return this.$val.addSec(d); };
	Time.ptr.prototype.setLoc = function(loc) {
		var loc, t;
		t = this;
		if (loc === utcLoc) {
			loc = ptrType$2.nil;
		}
		t.stripMono();
		t.loc = loc;
	};
	Time.prototype.setLoc = function(loc) { return this.$val.setLoc(loc); };
	Time.ptr.prototype.stripMono = function() {
		var t, x$1, x$2, x$3, x$4;
		t = this;
		if (!((x$1 = (x$2 = t.wall, new $Uint64(x$2.$high & 2147483648, (x$2.$low & 0) >>> 0)), (x$1.$high === 0 && x$1.$low === 0)))) {
			t.ext = t.sec();
			t.wall = (x$3 = t.wall, x$4 = new $Uint64(0, 1073741823), new $Uint64(x$3.$high & x$4.$high, (x$3.$low & x$4.$low) >>> 0));
		}
	};
	Time.prototype.stripMono = function() { return this.$val.stripMono(); };
	Time.ptr.prototype.After = function(u) {
		var t, ts, u, us, x$1, x$2, x$3, x$4, x$5, x$6;
		t = this;
		if (!((x$1 = (x$2 = (x$3 = t.wall, x$4 = u.wall, new $Uint64(x$3.$high & x$4.$high, (x$3.$low & x$4.$low) >>> 0)), new $Uint64(x$2.$high & 2147483648, (x$2.$low & 0) >>> 0)), (x$1.$high === 0 && x$1.$low === 0)))) {
			return (x$5 = t.ext, x$6 = u.ext, (x$5.$high > x$6.$high || (x$5.$high === x$6.$high && x$5.$low > x$6.$low)));
		}
		ts = t.sec();
		us = u.sec();
		return (ts.$high > us.$high || (ts.$high === us.$high && ts.$low > us.$low)) || (ts.$high === us.$high && ts.$low === us.$low) && t.nsec() > u.nsec();
	};
	Time.prototype.After = function(u) { return this.$val.After(u); };
	Time.ptr.prototype.Before = function(u) {
		var t, u, x$1, x$10, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		t = this;
		if (!((x$1 = (x$2 = (x$3 = t.wall, x$4 = u.wall, new $Uint64(x$3.$high & x$4.$high, (x$3.$low & x$4.$low) >>> 0)), new $Uint64(x$2.$high & 2147483648, (x$2.$low & 0) >>> 0)), (x$1.$high === 0 && x$1.$low === 0)))) {
			return (x$5 = t.ext, x$6 = u.ext, (x$5.$high < x$6.$high || (x$5.$high === x$6.$high && x$5.$low < x$6.$low)));
		}
		return (x$7 = t.sec(), x$8 = u.sec(), (x$7.$high < x$8.$high || (x$7.$high === x$8.$high && x$7.$low < x$8.$low))) || (x$9 = t.sec(), x$10 = u.sec(), (x$9.$high === x$10.$high && x$9.$low === x$10.$low)) && t.nsec() < u.nsec();
	};
	Time.prototype.Before = function(u) { return this.$val.Before(u); };
	Time.ptr.prototype.Equal = function(u) {
		var t, u, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8;
		t = this;
		if (!((x$1 = (x$2 = (x$3 = t.wall, x$4 = u.wall, new $Uint64(x$3.$high & x$4.$high, (x$3.$low & x$4.$low) >>> 0)), new $Uint64(x$2.$high & 2147483648, (x$2.$low & 0) >>> 0)), (x$1.$high === 0 && x$1.$low === 0)))) {
			return (x$5 = t.ext, x$6 = u.ext, (x$5.$high === x$6.$high && x$5.$low === x$6.$low));
		}
		return (x$7 = t.sec(), x$8 = u.sec(), (x$7.$high === x$8.$high && x$7.$low === x$8.$low)) && (t.nsec() === u.nsec());
	};
	Time.prototype.Equal = function(u) { return this.$val.Equal(u); };
	Month.prototype.String = function() {
		var buf, m, n, x$1;
		m = this.$val;
		if (1 <= m && m <= 12) {
			return (x$1 = m - 1 >> 0, ((x$1 < 0 || x$1 >= months.length) ? ($throwRuntimeError("index out of range"), undefined) : months[x$1]));
		}
		buf = $makeSlice(sliceType$3, 20);
		n = fmtInt(buf, (new $Uint64(0, m)));
		return "%!Month(" + ($bytesToString($subslice(buf, n))) + ")";
	};
	$ptrType(Month).prototype.String = function() { return new Month(this.$get()).String(); };
	Weekday.prototype.String = function() {
		var buf, d, n;
		d = this.$val;
		if (0 <= d && d <= 6) {
			return ((d < 0 || d >= days.length) ? ($throwRuntimeError("index out of range"), undefined) : days[d]);
		}
		buf = $makeSlice(sliceType$3, 20);
		n = fmtInt(buf, (new $Uint64(0, d)));
		return "%!Weekday(" + ($bytesToString($subslice(buf, n))) + ")";
	};
	$ptrType(Weekday).prototype.String = function() { return new Weekday(this.$get()).String(); };
	Time.ptr.prototype.IsZero = function() {
		var t, x$1;
		t = this;
		return (x$1 = t.sec(), (x$1.$high === 0 && x$1.$low === 0)) && (t.nsec() === 0);
	};
	Time.prototype.IsZero = function() { return this.$val.IsZero(); };
	Time.ptr.prototype.abs = function() {
		var _r, _r$1, _tuple, l, offset, sec, t, x$1, x$2, x$3, x$4, x$5, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; l = $f.l; offset = $f.offset; sec = $f.sec; t = $f.t; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		l = t.loc;
		/* */ if (l === ptrType$2.nil || l === localLoc) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (l === ptrType$2.nil || l === localLoc) { */ case 1:
			_r = l.get(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			l = _r;
		/* } */ case 2:
		sec = t.unixSec();
		/* */ if (!(l === utcLoc)) { $s = 4; continue; }
		/* */ $s = 5; continue;
		/* if (!(l === utcLoc)) { */ case 4:
			/* */ if (!(l.cacheZone === ptrType.nil) && (x$1 = l.cacheStart, (x$1.$high < sec.$high || (x$1.$high === sec.$high && x$1.$low <= sec.$low))) && (x$2 = l.cacheEnd, (sec.$high < x$2.$high || (sec.$high === x$2.$high && sec.$low < x$2.$low)))) { $s = 6; continue; }
			/* */ $s = 7; continue;
			/* if (!(l.cacheZone === ptrType.nil) && (x$1 = l.cacheStart, (x$1.$high < sec.$high || (x$1.$high === sec.$high && x$1.$low <= sec.$low))) && (x$2 = l.cacheEnd, (sec.$high < x$2.$high || (sec.$high === x$2.$high && sec.$low < x$2.$low)))) { */ case 6:
				sec = (x$3 = (new $Int64(0, l.cacheZone.offset)), new $Int64(sec.$high + x$3.$high, sec.$low + x$3.$low));
				$s = 8; continue;
			/* } else { */ case 7:
				_r$1 = l.lookup(sec); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple = _r$1;
				offset = _tuple[1];
				sec = (x$4 = (new $Int64(0, offset)), new $Int64(sec.$high + x$4.$high, sec.$low + x$4.$low));
			/* } */ case 8:
		/* } */ case 5:
		$s = -1; return ((x$5 = new $Int64(sec.$high + 2147483646, sec.$low + 450480384), new $Uint64(x$5.$high, x$5.$low)));
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.abs }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.l = l; $f.offset = offset; $f.sec = sec; $f.t = t; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.abs = function() { return this.$val.abs(); };
	Time.ptr.prototype.locabs = function() {
		var _r, _r$1, _tuple, abs, l, name, offset, sec, t, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; abs = $f.abs; l = $f.l; name = $f.name; offset = $f.offset; sec = $f.sec; t = $f.t; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		name = "";
		offset = 0;
		abs = new $Uint64(0, 0);
		t = this;
		l = t.loc;
		/* */ if (l === ptrType$2.nil || l === localLoc) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (l === ptrType$2.nil || l === localLoc) { */ case 1:
			_r = l.get(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			l = _r;
		/* } */ case 2:
		sec = t.unixSec();
		/* */ if (!(l === utcLoc)) { $s = 4; continue; }
		/* */ $s = 5; continue;
		/* if (!(l === utcLoc)) { */ case 4:
			/* */ if (!(l.cacheZone === ptrType.nil) && (x$1 = l.cacheStart, (x$1.$high < sec.$high || (x$1.$high === sec.$high && x$1.$low <= sec.$low))) && (x$2 = l.cacheEnd, (sec.$high < x$2.$high || (sec.$high === x$2.$high && sec.$low < x$2.$low)))) { $s = 7; continue; }
			/* */ $s = 8; continue;
			/* if (!(l.cacheZone === ptrType.nil) && (x$1 = l.cacheStart, (x$1.$high < sec.$high || (x$1.$high === sec.$high && x$1.$low <= sec.$low))) && (x$2 = l.cacheEnd, (sec.$high < x$2.$high || (sec.$high === x$2.$high && sec.$low < x$2.$low)))) { */ case 7:
				name = l.cacheZone.name;
				offset = l.cacheZone.offset;
				$s = 9; continue;
			/* } else { */ case 8:
				_r$1 = l.lookup(sec); /* */ $s = 10; case 10: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple = _r$1;
				name = _tuple[0];
				offset = _tuple[1];
			/* } */ case 9:
			sec = (x$3 = (new $Int64(0, offset)), new $Int64(sec.$high + x$3.$high, sec.$low + x$3.$low));
			$s = 6; continue;
		/* } else { */ case 5:
			name = "UTC";
		/* } */ case 6:
		abs = ((x$4 = new $Int64(sec.$high + 2147483646, sec.$low + 450480384), new $Uint64(x$4.$high, x$4.$low)));
		$s = -1; return [name, offset, abs];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.locabs }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.abs = abs; $f.l = l; $f.name = name; $f.offset = offset; $f.sec = sec; $f.t = t; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.locabs = function() { return this.$val.locabs(); };
	Time.ptr.prototype.Date = function() {
		var _r, _tuple, day, month, t, year, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; day = $f.day; month = $f.month; t = $f.t; year = $f.year; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		year = 0;
		month = 0;
		day = 0;
		t = this;
		_r = $clone(t, Time).date(true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		year = _tuple[0];
		month = _tuple[1];
		day = _tuple[2];
		$s = -1; return [year, month, day];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.Date }; } $f._r = _r; $f._tuple = _tuple; $f.day = day; $f.month = month; $f.t = t; $f.year = year; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.Date = function() { return this.$val.Date(); };
	Time.ptr.prototype.Year = function() {
		var _r, _tuple, t, year, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; t = $f.t; year = $f.year; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).date(false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		year = _tuple[0];
		$s = -1; return year;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.Year }; } $f._r = _r; $f._tuple = _tuple; $f.t = t; $f.year = year; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.Year = function() { return this.$val.Year(); };
	Time.ptr.prototype.Month = function() {
		var _r, _tuple, month, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; month = $f.month; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).date(true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		month = _tuple[1];
		$s = -1; return month;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.Month }; } $f._r = _r; $f._tuple = _tuple; $f.month = month; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.Month = function() { return this.$val.Month(); };
	Time.ptr.prototype.Day = function() {
		var _r, _tuple, day, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; day = $f.day; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).date(true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		day = _tuple[2];
		$s = -1; return day;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.Day }; } $f._r = _r; $f._tuple = _tuple; $f.day = day; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.Day = function() { return this.$val.Day(); };
	Time.ptr.prototype.Weekday = function() {
		var _r, _r$1, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).abs(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = absWeekday(_r); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$s = -1; return _r$1;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.Weekday }; } $f._r = _r; $f._r$1 = _r$1; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.Weekday = function() { return this.$val.Weekday(); };
	absWeekday = function(abs) {
		var _q, abs, sec;
		sec = $div64((new $Uint64(abs.$high + 0, abs.$low + 86400)), new $Uint64(0, 604800), true);
		return (((_q = ((sec.$low >> 0)) / 86400, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) >> 0));
	};
	Time.ptr.prototype.ISOWeek = function() {
		var _q, _r, _r$1, _r$2, _r$3, _r$4, _tuple, day, dec31wday, jan1wday, month, t, wday, week, yday, year, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _tuple = $f._tuple; day = $f.day; dec31wday = $f.dec31wday; jan1wday = $f.jan1wday; month = $f.month; t = $f.t; wday = $f.wday; week = $f.week; yday = $f.yday; year = $f.year; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		year = 0;
		week = 0;
		t = this;
		_r = $clone(t, Time).date(true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		year = _tuple[0];
		month = _tuple[1];
		day = _tuple[2];
		yday = _tuple[3];
		_r$2 = $clone(t, Time).Weekday(); /* */ $s = 2; case 2: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		wday = (_r$1 = (((_r$2 + 6 >> 0) >> 0)) % 7, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero"));
		week = (_q = (((yday - wday >> 0) + 7 >> 0)) / 7, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
		jan1wday = (_r$3 = (((wday - yday >> 0) + 371 >> 0)) % 7, _r$3 === _r$3 ? _r$3 : $throwRuntimeError("integer divide by zero"));
		if (1 <= jan1wday && jan1wday <= 3) {
			week = week + (1) >> 0;
		}
		if (week === 0) {
			year = year - (1) >> 0;
			week = 52;
			if ((jan1wday === 4) || ((jan1wday === 5) && isLeap(year))) {
				week = week + (1) >> 0;
			}
		}
		if ((month === 12) && day >= 29 && wday < 3) {
			dec31wday = (_r$4 = (((wday + 31 >> 0) - day >> 0)) % 7, _r$4 === _r$4 ? _r$4 : $throwRuntimeError("integer divide by zero"));
			if (0 <= dec31wday && dec31wday <= 2) {
				year = year + (1) >> 0;
				week = 1;
			}
		}
		$s = -1; return [year, week];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.ISOWeek }; } $f._q = _q; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._tuple = _tuple; $f.day = day; $f.dec31wday = dec31wday; $f.jan1wday = jan1wday; $f.month = month; $f.t = t; $f.wday = wday; $f.week = week; $f.yday = yday; $f.year = year; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.ISOWeek = function() { return this.$val.ISOWeek(); };
	Time.ptr.prototype.Clock = function() {
		var _r, _r$1, _tuple, hour, min, sec, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; hour = $f.hour; min = $f.min; sec = $f.sec; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		hour = 0;
		min = 0;
		sec = 0;
		t = this;
		_r = $clone(t, Time).abs(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = absClock(_r); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		hour = _tuple[0];
		min = _tuple[1];
		sec = _tuple[2];
		$s = -1; return [hour, min, sec];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.Clock }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.hour = hour; $f.min = min; $f.sec = sec; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.Clock = function() { return this.$val.Clock(); };
	absClock = function(abs) {
		var _q, _q$1, abs, hour, min, sec;
		hour = 0;
		min = 0;
		sec = 0;
		sec = (($div64(abs, new $Uint64(0, 86400), true).$low >> 0));
		hour = (_q = sec / 3600, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
		sec = sec - (($imul(hour, 3600))) >> 0;
		min = (_q$1 = sec / 60, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero"));
		sec = sec - (($imul(min, 60))) >> 0;
		return [hour, min, sec];
	};
	Time.ptr.prototype.Hour = function() {
		var _q, _r, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).abs(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return (_q = (($div64(_r, new $Uint64(0, 86400), true).$low >> 0)) / 3600, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.Hour }; } $f._q = _q; $f._r = _r; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.Hour = function() { return this.$val.Hour(); };
	Time.ptr.prototype.Minute = function() {
		var _q, _r, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).abs(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return (_q = (($div64(_r, new $Uint64(0, 3600), true).$low >> 0)) / 60, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.Minute }; } $f._q = _q; $f._r = _r; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.Minute = function() { return this.$val.Minute(); };
	Time.ptr.prototype.Second = function() {
		var _r, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).abs(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return (($div64(_r, new $Uint64(0, 60), true).$low >> 0));
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.Second }; } $f._r = _r; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.Second = function() { return this.$val.Second(); };
	Time.ptr.prototype.Nanosecond = function() {
		var t;
		t = this;
		return ((t.nsec() >> 0));
	};
	Time.prototype.Nanosecond = function() { return this.$val.Nanosecond(); };
	Time.ptr.prototype.YearDay = function() {
		var _r, _tuple, t, yday, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; t = $f.t; yday = $f.yday; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).date(false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		yday = _tuple[3];
		$s = -1; return yday + 1 >> 0;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.YearDay }; } $f._r = _r; $f._tuple = _tuple; $f.t = t; $f.yday = yday; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.YearDay = function() { return this.$val.YearDay(); };
	Duration.prototype.String = function() {
		var _tuple, _tuple$1, buf, d, neg, prec, u, w;
		d = this;
		buf = arrayType$3.zero();
		w = 32;
		u = (new $Uint64(d.$high, d.$low));
		neg = (d.$high < 0 || (d.$high === 0 && d.$low < 0));
		if (neg) {
			u = new $Uint64(-u.$high, -u.$low);
		}
		if ((u.$high < 0 || (u.$high === 0 && u.$low < 1000000000))) {
			prec = 0;
			w = w - (1) >> 0;
			((w < 0 || w >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[w] = 115);
			w = w - (1) >> 0;
			if ((u.$high === 0 && u.$low === 0)) {
				return "0s";
			} else if ((u.$high < 0 || (u.$high === 0 && u.$low < 1000))) {
				prec = 0;
				((w < 0 || w >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[w] = 110);
			} else if ((u.$high < 0 || (u.$high === 0 && u.$low < 1000000))) {
				prec = 3;
				w = w - (1) >> 0;
				$copyString($subslice(new sliceType$3(buf), w), "\xC2\xB5");
			} else {
				prec = 6;
				((w < 0 || w >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[w] = 109);
			}
			_tuple = fmtFrac($subslice(new sliceType$3(buf), 0, w), u, prec);
			w = _tuple[0];
			u = _tuple[1];
			w = fmtInt($subslice(new sliceType$3(buf), 0, w), u);
		} else {
			w = w - (1) >> 0;
			((w < 0 || w >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[w] = 115);
			_tuple$1 = fmtFrac($subslice(new sliceType$3(buf), 0, w), u, 9);
			w = _tuple$1[0];
			u = _tuple$1[1];
			w = fmtInt($subslice(new sliceType$3(buf), 0, w), $div64(u, new $Uint64(0, 60), true));
			u = $div64(u, (new $Uint64(0, 60)), false);
			if ((u.$high > 0 || (u.$high === 0 && u.$low > 0))) {
				w = w - (1) >> 0;
				((w < 0 || w >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[w] = 109);
				w = fmtInt($subslice(new sliceType$3(buf), 0, w), $div64(u, new $Uint64(0, 60), true));
				u = $div64(u, (new $Uint64(0, 60)), false);
				if ((u.$high > 0 || (u.$high === 0 && u.$low > 0))) {
					w = w - (1) >> 0;
					((w < 0 || w >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[w] = 104);
					w = fmtInt($subslice(new sliceType$3(buf), 0, w), u);
				}
			}
		}
		if (neg) {
			w = w - (1) >> 0;
			((w < 0 || w >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[w] = 45);
		}
		return ($bytesToString($subslice(new sliceType$3(buf), w)));
	};
	$ptrType(Duration).prototype.String = function() { return this.$get().String(); };
	fmtFrac = function(buf, v, prec) {
		var _tmp, _tmp$1, buf, digit, i, nv, nw, prec, print, v, w;
		nw = 0;
		nv = new $Uint64(0, 0);
		w = buf.$length;
		print = false;
		i = 0;
		while (true) {
			if (!(i < prec)) { break; }
			digit = $div64(v, new $Uint64(0, 10), true);
			print = print || !((digit.$high === 0 && digit.$low === 0));
			if (print) {
				w = w - (1) >> 0;
				((w < 0 || w >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + w] = (((digit.$low << 24 >>> 24)) + 48 << 24 >>> 24));
			}
			v = $div64(v, (new $Uint64(0, 10)), false);
			i = i + (1) >> 0;
		}
		if (print) {
			w = w - (1) >> 0;
			((w < 0 || w >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + w] = 46);
		}
		_tmp = w;
		_tmp$1 = v;
		nw = _tmp;
		nv = _tmp$1;
		return [nw, nv];
	};
	fmtInt = function(buf, v) {
		var buf, v, w;
		w = buf.$length;
		if ((v.$high === 0 && v.$low === 0)) {
			w = w - (1) >> 0;
			((w < 0 || w >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + w] = 48);
		} else {
			while (true) {
				if (!((v.$high > 0 || (v.$high === 0 && v.$low > 0)))) { break; }
				w = w - (1) >> 0;
				((w < 0 || w >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + w] = ((($div64(v, new $Uint64(0, 10), true).$low << 24 >>> 24)) + 48 << 24 >>> 24));
				v = $div64(v, (new $Uint64(0, 10)), false);
			}
		}
		return w;
	};
	Duration.prototype.Nanoseconds = function() {
		var d;
		d = this;
		return (new $Int64(d.$high, d.$low));
	};
	$ptrType(Duration).prototype.Nanoseconds = function() { return this.$get().Nanoseconds(); };
	Duration.prototype.Seconds = function() {
		var d, nsec, sec;
		d = this;
		sec = $div64(d, new Duration(0, 1000000000), false);
		nsec = $div64(d, new Duration(0, 1000000000), true);
		return ($flatten64(sec)) + ($flatten64(nsec)) / 1e+09;
	};
	$ptrType(Duration).prototype.Seconds = function() { return this.$get().Seconds(); };
	Duration.prototype.Minutes = function() {
		var d, min, nsec;
		d = this;
		min = $div64(d, new Duration(13, 4165425152), false);
		nsec = $div64(d, new Duration(13, 4165425152), true);
		return ($flatten64(min)) + ($flatten64(nsec)) / 6e+10;
	};
	$ptrType(Duration).prototype.Minutes = function() { return this.$get().Minutes(); };
	Duration.prototype.Hours = function() {
		var d, hour, nsec;
		d = this;
		hour = $div64(d, new Duration(838, 817405952), false);
		nsec = $div64(d, new Duration(838, 817405952), true);
		return ($flatten64(hour)) + ($flatten64(nsec)) / 3.6e+12;
	};
	$ptrType(Duration).prototype.Hours = function() { return this.$get().Hours(); };
	Duration.prototype.Truncate = function(m) {
		var d, m, x$1;
		d = this;
		if ((m.$high < 0 || (m.$high === 0 && m.$low <= 0))) {
			return d;
		}
		return (x$1 = $div64(d, m, true), new Duration(d.$high - x$1.$high, d.$low - x$1.$low));
	};
	$ptrType(Duration).prototype.Truncate = function(m) { return this.$get().Truncate(m); };
	lessThanHalf = function(x$1, y) {
		var x$1, x$2, x$3, x$4, x$5, y;
		return (x$2 = (x$3 = (new $Uint64(x$1.$high, x$1.$low)), x$4 = (new $Uint64(x$1.$high, x$1.$low)), new $Uint64(x$3.$high + x$4.$high, x$3.$low + x$4.$low)), x$5 = (new $Uint64(y.$high, y.$low)), (x$2.$high < x$5.$high || (x$2.$high === x$5.$high && x$2.$low < x$5.$low)));
	};
	Duration.prototype.Round = function(m) {
		var d, d1, d1$1, m, r, x$1, x$2;
		d = this;
		if ((m.$high < 0 || (m.$high === 0 && m.$low <= 0))) {
			return d;
		}
		r = $div64(d, m, true);
		if ((d.$high < 0 || (d.$high === 0 && d.$low < 0))) {
			r = new Duration(-r.$high, -r.$low);
			if (lessThanHalf(r, m)) {
				return new Duration(d.$high + r.$high, d.$low + r.$low);
			}
			d1 = (x$1 = new Duration(d.$high - m.$high, d.$low - m.$low), new Duration(x$1.$high + r.$high, x$1.$low + r.$low));
			if ((d1.$high < d.$high || (d1.$high === d.$high && d1.$low < d.$low))) {
				return d1;
			}
			return new Duration(-2147483648, 0);
		}
		if (lessThanHalf(r, m)) {
			return new Duration(d.$high - r.$high, d.$low - r.$low);
		}
		d1$1 = (x$2 = new Duration(d.$high + m.$high, d.$low + m.$low), new Duration(x$2.$high - r.$high, x$2.$low - r.$low));
		if ((d1$1.$high > d.$high || (d1$1.$high === d.$high && d1$1.$low > d.$low))) {
			return d1$1;
		}
		return new Duration(2147483647, 4294967295);
	};
	$ptrType(Duration).prototype.Round = function(m) { return this.$get().Round(m); };
	Time.ptr.prototype.Add = function(d) {
		var d, dsec, nsec, t, te, x$1, x$10, x$11, x$12, x$13, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		t = this;
		dsec = ((x$1 = $div64(d, new Duration(0, 1000000000), false), new $Int64(x$1.$high, x$1.$low)));
		nsec = t.nsec() + (((x$2 = $div64(d, new Duration(0, 1000000000), true), x$2.$low + ((x$2.$high >> 31) * 4294967296)) >> 0)) >> 0;
		if (nsec >= 1000000000) {
			dsec = (x$3 = new $Int64(0, 1), new $Int64(dsec.$high + x$3.$high, dsec.$low + x$3.$low));
			nsec = nsec - (1000000000) >> 0;
		} else if (nsec < 0) {
			dsec = (x$4 = new $Int64(0, 1), new $Int64(dsec.$high - x$4.$high, dsec.$low - x$4.$low));
			nsec = nsec + (1000000000) >> 0;
		}
		t.wall = (x$5 = (x$6 = t.wall, new $Uint64(x$6.$high & ~0, (x$6.$low & ~1073741823) >>> 0)), x$7 = (new $Uint64(0, nsec)), new $Uint64(x$5.$high | x$7.$high, (x$5.$low | x$7.$low) >>> 0));
		t.addSec(dsec);
		if (!((x$8 = (x$9 = t.wall, new $Uint64(x$9.$high & 2147483648, (x$9.$low & 0) >>> 0)), (x$8.$high === 0 && x$8.$low === 0)))) {
			te = (x$10 = t.ext, x$11 = (new $Int64(d.$high, d.$low)), new $Int64(x$10.$high + x$11.$high, x$10.$low + x$11.$low));
			if ((d.$high < 0 || (d.$high === 0 && d.$low < 0)) && (x$12 = t.ext, (te.$high > x$12.$high || (te.$high === x$12.$high && te.$low > x$12.$low))) || (d.$high > 0 || (d.$high === 0 && d.$low > 0)) && (x$13 = t.ext, (te.$high < x$13.$high || (te.$high === x$13.$high && te.$low < x$13.$low)))) {
				t.stripMono();
			} else {
				t.ext = te;
			}
		}
		return t;
	};
	Time.prototype.Add = function(d) { return this.$val.Add(d); };
	Time.ptr.prototype.Sub = function(u) {
		var d, d$1, t, te, u, ue, x$1, x$10, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		t = this;
		if (!((x$1 = (x$2 = (x$3 = t.wall, x$4 = u.wall, new $Uint64(x$3.$high & x$4.$high, (x$3.$low & x$4.$low) >>> 0)), new $Uint64(x$2.$high & 2147483648, (x$2.$low & 0) >>> 0)), (x$1.$high === 0 && x$1.$low === 0)))) {
			te = t.ext;
			ue = u.ext;
			d = ((x$5 = new $Int64(te.$high - ue.$high, te.$low - ue.$low), new Duration(x$5.$high, x$5.$low)));
			if ((d.$high < 0 || (d.$high === 0 && d.$low < 0)) && (te.$high > ue.$high || (te.$high === ue.$high && te.$low > ue.$low))) {
				return new Duration(2147483647, 4294967295);
			}
			if ((d.$high > 0 || (d.$high === 0 && d.$low > 0)) && (te.$high < ue.$high || (te.$high === ue.$high && te.$low < ue.$low))) {
				return new Duration(-2147483648, 0);
			}
			return d;
		}
		d$1 = (x$6 = $mul64(((x$7 = (x$8 = t.sec(), x$9 = u.sec(), new $Int64(x$8.$high - x$9.$high, x$8.$low - x$9.$low)), new Duration(x$7.$high, x$7.$low))), new Duration(0, 1000000000)), x$10 = (new Duration(0, (t.nsec() - u.nsec() >> 0))), new Duration(x$6.$high + x$10.$high, x$6.$low + x$10.$low));
		if ($clone($clone(u, Time).Add(d$1), Time).Equal($clone(t, Time))) {
			return d$1;
		} else if ($clone(t, Time).Before($clone(u, Time))) {
			return new Duration(-2147483648, 0);
		} else {
			return new Duration(2147483647, 4294967295);
		}
	};
	Time.prototype.Sub = function(u) { return this.$val.Sub(u); };
	Time.ptr.prototype.AddDate = function(years, months$1, days$1) {
		var _r, _r$1, _r$2, _tuple, _tuple$1, day, days$1, hour, min, month, months$1, sec, t, year, years, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; day = $f.day; days$1 = $f.days$1; hour = $f.hour; min = $f.min; month = $f.month; months$1 = $f.months$1; sec = $f.sec; t = $f.t; year = $f.year; years = $f.years; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).Date(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		year = _tuple[0];
		month = _tuple[1];
		day = _tuple[2];
		_r$1 = $clone(t, Time).Clock(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		hour = _tuple$1[0];
		min = _tuple$1[1];
		sec = _tuple$1[2];
		_r$2 = Date(year + years >> 0, month + ((months$1 >> 0)) >> 0, day + days$1 >> 0, hour, min, sec, ((t.nsec() >> 0)), $clone(t, Time).Location()); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$s = -1; return _r$2;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.AddDate }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.day = day; $f.days$1 = days$1; $f.hour = hour; $f.min = min; $f.month = month; $f.months$1 = months$1; $f.sec = sec; $f.t = t; $f.year = year; $f.years = years; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.AddDate = function(years, months$1, days$1) { return this.$val.AddDate(years, months$1, days$1); };
	Time.ptr.prototype.date = function(full) {
		var _r, _r$1, _tuple, day, full, month, t, yday, year, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; day = $f.day; full = $f.full; month = $f.month; t = $f.t; yday = $f.yday; year = $f.year; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		year = 0;
		month = 0;
		day = 0;
		yday = 0;
		t = this;
		_r = $clone(t, Time).abs(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = absDate(_r, full); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		year = _tuple[0];
		month = _tuple[1];
		day = _tuple[2];
		yday = _tuple[3];
		$s = -1; return [year, month, day, yday];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.date }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.day = day; $f.full = full; $f.month = month; $f.t = t; $f.yday = yday; $f.year = year; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.date = function(full) { return this.$val.date(full); };
	absDate = function(abs, full) {
		var _q, abs, begin, d, day, end, full, month, n, x$1, x$10, x$11, x$12, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y, yday, year;
		year = 0;
		month = 0;
		day = 0;
		yday = 0;
		d = $div64(abs, new $Uint64(0, 86400), false);
		n = $div64(d, new $Uint64(0, 146097), false);
		y = $mul64(new $Uint64(0, 400), n);
		d = (x$1 = $mul64(new $Uint64(0, 146097), n), new $Uint64(d.$high - x$1.$high, d.$low - x$1.$low));
		n = $div64(d, new $Uint64(0, 36524), false);
		n = (x$2 = $shiftRightUint64(n, 2), new $Uint64(n.$high - x$2.$high, n.$low - x$2.$low));
		y = (x$3 = $mul64(new $Uint64(0, 100), n), new $Uint64(y.$high + x$3.$high, y.$low + x$3.$low));
		d = (x$4 = $mul64(new $Uint64(0, 36524), n), new $Uint64(d.$high - x$4.$high, d.$low - x$4.$low));
		n = $div64(d, new $Uint64(0, 1461), false);
		y = (x$5 = $mul64(new $Uint64(0, 4), n), new $Uint64(y.$high + x$5.$high, y.$low + x$5.$low));
		d = (x$6 = $mul64(new $Uint64(0, 1461), n), new $Uint64(d.$high - x$6.$high, d.$low - x$6.$low));
		n = $div64(d, new $Uint64(0, 365), false);
		n = (x$7 = $shiftRightUint64(n, 2), new $Uint64(n.$high - x$7.$high, n.$low - x$7.$low));
		y = (x$8 = n, new $Uint64(y.$high + x$8.$high, y.$low + x$8.$low));
		d = (x$9 = $mul64(new $Uint64(0, 365), n), new $Uint64(d.$high - x$9.$high, d.$low - x$9.$low));
		year = (((x$10 = (x$11 = (new $Int64(y.$high, y.$low)), new $Int64(x$11.$high + -69, x$11.$low + 4075721025)), x$10.$low + ((x$10.$high >> 31) * 4294967296)) >> 0));
		yday = ((d.$low >> 0));
		if (!full) {
			return [year, month, day, yday];
		}
		day = yday;
		if (isLeap(year)) {
			if (day > 59) {
				day = day - (1) >> 0;
			} else if ((day === 59)) {
				month = 2;
				day = 29;
				return [year, month, day, yday];
			}
		}
		month = (((_q = day / 31, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) >> 0));
		end = (((x$12 = month + 1 >> 0, ((x$12 < 0 || x$12 >= daysBefore.length) ? ($throwRuntimeError("index out of range"), undefined) : daysBefore[x$12])) >> 0));
		begin = 0;
		if (day >= end) {
			month = month + (1) >> 0;
			begin = end;
		} else {
			begin = ((((month < 0 || month >= daysBefore.length) ? ($throwRuntimeError("index out of range"), undefined) : daysBefore[month]) >> 0));
		}
		month = month + (1) >> 0;
		day = (day - begin >> 0) + 1 >> 0;
		return [year, month, day, yday];
	};
	daysIn = function(m, year) {
		var m, x$1, year;
		if ((m === 2) && isLeap(year)) {
			return 29;
		}
		return (((((m < 0 || m >= daysBefore.length) ? ($throwRuntimeError("index out of range"), undefined) : daysBefore[m]) - (x$1 = m - 1 >> 0, ((x$1 < 0 || x$1 >= daysBefore.length) ? ($throwRuntimeError("index out of range"), undefined) : daysBefore[x$1])) >> 0) >> 0));
	};
	Now = function() {
		var _tuple, mono, nsec, sec, x$1, x$2, x$3, x$4, x$5, x$6;
		_tuple = now();
		sec = _tuple[0];
		nsec = _tuple[1];
		mono = _tuple[2];
		mono = (x$1 = startNano, new $Int64(mono.$high - x$1.$high, mono.$low - x$1.$low));
		sec = (x$2 = new $Int64(0, 2682288000), new $Int64(sec.$high + x$2.$high, sec.$low + x$2.$low));
		if (!((x$3 = $shiftRightUint64((new $Uint64(sec.$high, sec.$low)), 33), (x$3.$high === 0 && x$3.$low === 0)))) {
			return new Time.ptr((new $Uint64(0, nsec)), new $Int64(sec.$high + 13, sec.$low + 3618733952), $pkg.Local);
		}
		return new Time.ptr((x$4 = (x$5 = $shiftLeft64((new $Uint64(sec.$high, sec.$low)), 30), new $Uint64(2147483648 | x$5.$high, (0 | x$5.$low) >>> 0)), x$6 = (new $Uint64(0, nsec)), new $Uint64(x$4.$high | x$6.$high, (x$4.$low | x$6.$low) >>> 0)), mono, $pkg.Local);
	};
	$pkg.Now = Now;
	unixTime = function(sec, nsec) {
		var nsec, sec;
		return new Time.ptr((new $Uint64(0, nsec)), new $Int64(sec.$high + 14, sec.$low + 2006054656), $pkg.Local);
	};
	Time.ptr.prototype.UTC = function() {
		var t;
		t = this;
		t.setLoc(utcLoc);
		return t;
	};
	Time.prototype.UTC = function() { return this.$val.UTC(); };
	Time.ptr.prototype.Local = function() {
		var t;
		t = this;
		t.setLoc($pkg.Local);
		return t;
	};
	Time.prototype.Local = function() { return this.$val.Local(); };
	Time.ptr.prototype.In = function(loc) {
		var loc, t;
		t = this;
		if (loc === ptrType$2.nil) {
			$panic(new $String("time: missing Location in call to Time.In"));
		}
		t.setLoc(loc);
		return t;
	};
	Time.prototype.In = function(loc) { return this.$val.In(loc); };
	Time.ptr.prototype.Location = function() {
		var l, t;
		t = this;
		l = t.loc;
		if (l === ptrType$2.nil) {
			l = $pkg.UTC;
		}
		return l;
	};
	Time.prototype.Location = function() { return this.$val.Location(); };
	Time.ptr.prototype.Zone = function() {
		var _r, _tuple, name, offset, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; name = $f.name; offset = $f.offset; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		name = "";
		offset = 0;
		t = this;
		_r = t.loc.lookup(t.unixSec()); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		name = _tuple[0];
		offset = _tuple[1];
		$s = -1; return [name, offset];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.Zone }; } $f._r = _r; $f._tuple = _tuple; $f.name = name; $f.offset = offset; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.Zone = function() { return this.$val.Zone(); };
	Time.ptr.prototype.Unix = function() {
		var t;
		t = this;
		return t.unixSec();
	};
	Time.prototype.Unix = function() { return this.$val.Unix(); };
	Time.ptr.prototype.UnixNano = function() {
		var t, x$1, x$2;
		t = this;
		return (x$1 = $mul64((t.unixSec()), new $Int64(0, 1000000000)), x$2 = (new $Int64(0, t.nsec())), new $Int64(x$1.$high + x$2.$high, x$1.$low + x$2.$low));
	};
	Time.prototype.UnixNano = function() { return this.$val.UnixNano(); };
	Time.ptr.prototype.MarshalBinary = function() {
		var _q, _r, _r$1, _tuple, enc, nsec, offset, offsetMin, sec, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; enc = $f.enc; nsec = $f.nsec; offset = $f.offset; offsetMin = $f.offsetMin; sec = $f.sec; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		offsetMin = 0;
		/* */ if ($clone(t, Time).Location() === $pkg.UTC) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if ($clone(t, Time).Location() === $pkg.UTC) { */ case 1:
			offsetMin = -1;
			$s = 3; continue;
		/* } else { */ case 2:
			_r = $clone(t, Time).Zone(); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			offset = _tuple[1];
			if (!(((_r$1 = offset % 60, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) === 0))) {
				$s = -1; return [sliceType$3.nil, errors.New("Time.MarshalBinary: zone offset has fractional minute")];
			}
			offset = (_q = offset / (60), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
			if (offset < -32768 || (offset === -1) || offset > 32767) {
				$s = -1; return [sliceType$3.nil, errors.New("Time.MarshalBinary: unexpected zone offset")];
			}
			offsetMin = ((offset << 16 >> 16));
		/* } */ case 3:
		sec = t.sec();
		nsec = t.nsec();
		enc = new sliceType$3([1, (($shiftRightInt64(sec, 56).$low << 24 >>> 24)), (($shiftRightInt64(sec, 48).$low << 24 >>> 24)), (($shiftRightInt64(sec, 40).$low << 24 >>> 24)), (($shiftRightInt64(sec, 32).$low << 24 >>> 24)), (($shiftRightInt64(sec, 24).$low << 24 >>> 24)), (($shiftRightInt64(sec, 16).$low << 24 >>> 24)), (($shiftRightInt64(sec, 8).$low << 24 >>> 24)), ((sec.$low << 24 >>> 24)), (((nsec >> 24 >> 0) << 24 >>> 24)), (((nsec >> 16 >> 0) << 24 >>> 24)), (((nsec >> 8 >> 0) << 24 >>> 24)), ((nsec << 24 >>> 24)), (((offsetMin >> 8 << 16 >> 16) << 24 >>> 24)), ((offsetMin << 24 >>> 24))]);
		$s = -1; return [enc, $ifaceNil];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.MarshalBinary }; } $f._q = _q; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.enc = enc; $f.nsec = nsec; $f.offset = offset; $f.offsetMin = offsetMin; $f.sec = sec; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.MarshalBinary = function() { return this.$val.MarshalBinary(); };
	Time.ptr.prototype.UnmarshalBinary = function(data) {
		var _r, _tuple, buf, data, localoff, nsec, offset, sec, t, x$1, x$10, x$11, x$12, x$13, x$14, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; buf = $f.buf; data = $f.data; localoff = $f.localoff; nsec = $f.nsec; offset = $f.offset; sec = $f.sec; t = $f.t; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$12 = $f.x$12; x$13 = $f.x$13; x$14 = $f.x$14; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		buf = data;
		if (buf.$length === 0) {
			$s = -1; return errors.New("Time.UnmarshalBinary: no data");
		}
		if (!(((0 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 0]) === 1))) {
			$s = -1; return errors.New("Time.UnmarshalBinary: unsupported version");
		}
		if (!((buf.$length === 15))) {
			$s = -1; return errors.New("Time.UnmarshalBinary: invalid length");
		}
		buf = $subslice(buf, 1);
		sec = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = (x$7 = (new $Int64(0, (7 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 7]))), x$8 = $shiftLeft64((new $Int64(0, (6 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 6]))), 8), new $Int64(x$7.$high | x$8.$high, (x$7.$low | x$8.$low) >>> 0)), x$9 = $shiftLeft64((new $Int64(0, (5 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 5]))), 16), new $Int64(x$6.$high | x$9.$high, (x$6.$low | x$9.$low) >>> 0)), x$10 = $shiftLeft64((new $Int64(0, (4 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 4]))), 24), new $Int64(x$5.$high | x$10.$high, (x$5.$low | x$10.$low) >>> 0)), x$11 = $shiftLeft64((new $Int64(0, (3 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 3]))), 32), new $Int64(x$4.$high | x$11.$high, (x$4.$low | x$11.$low) >>> 0)), x$12 = $shiftLeft64((new $Int64(0, (2 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 2]))), 40), new $Int64(x$3.$high | x$12.$high, (x$3.$low | x$12.$low) >>> 0)), x$13 = $shiftLeft64((new $Int64(0, (1 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 1]))), 48), new $Int64(x$2.$high | x$13.$high, (x$2.$low | x$13.$low) >>> 0)), x$14 = $shiftLeft64((new $Int64(0, (0 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 0]))), 56), new $Int64(x$1.$high | x$14.$high, (x$1.$low | x$14.$low) >>> 0));
		buf = $subslice(buf, 8);
		nsec = (((((3 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 3]) >> 0)) | ((((2 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 2]) >> 0)) << 8 >> 0)) | ((((1 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 1]) >> 0)) << 16 >> 0)) | ((((0 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 0]) >> 0)) << 24 >> 0);
		buf = $subslice(buf, 4);
		offset = $imul(((((((1 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 1]) << 16 >> 16)) | ((((0 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 0]) << 16 >> 16)) << 8 << 16 >> 16)) >> 0)), 60);
		Time.copy(t, new Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType$2.nil));
		t.wall = (new $Uint64(0, nsec));
		t.ext = sec;
		/* */ if (offset === -60) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (offset === -60) { */ case 1:
			t.setLoc(utcLoc);
			$s = 3; continue;
		/* } else { */ case 2:
			_r = $pkg.Local.lookup(t.unixSec()); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			localoff = _tuple[1];
			if (offset === localoff) {
				t.setLoc($pkg.Local);
			} else {
				t.setLoc(FixedZone("", offset));
			}
		/* } */ case 3:
		$s = -1; return $ifaceNil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.UnmarshalBinary }; } $f._r = _r; $f._tuple = _tuple; $f.buf = buf; $f.data = data; $f.localoff = localoff; $f.nsec = nsec; $f.offset = offset; $f.sec = sec; $f.t = t; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$12 = x$12; $f.x$13 = x$13; $f.x$14 = x$14; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.UnmarshalBinary = function(data) { return this.$val.UnmarshalBinary(data); };
	Time.ptr.prototype.GobEncode = function() {
		var _r, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).MarshalBinary(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.GobEncode }; } $f._r = _r; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.GobEncode = function() { return this.$val.GobEncode(); };
	Time.ptr.prototype.GobDecode = function(data) {
		var _r, data, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; data = $f.data; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = t.UnmarshalBinary(data); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.GobDecode }; } $f._r = _r; $f.data = data; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.GobDecode = function(data) { return this.$val.GobDecode(data); };
	Time.ptr.prototype.MarshalJSON = function() {
		var _r, _r$1, b, t, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; b = $f.b; t = $f.t; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).Year(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		y = _r;
		if (y < 0 || y >= 10000) {
			$s = -1; return [sliceType$3.nil, errors.New("Time.MarshalJSON: year outside of range [0,9999]")];
		}
		b = $makeSlice(sliceType$3, 0, 37);
		b = $append(b, 34);
		_r$1 = $clone(t, Time).AppendFormat(b, "2006-01-02T15:04:05.999999999Z07:00"); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		b = _r$1;
		b = $append(b, 34);
		$s = -1; return [b, $ifaceNil];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.MarshalJSON }; } $f._r = _r; $f._r$1 = _r$1; $f.b = b; $f.t = t; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.MarshalJSON = function() { return this.$val.MarshalJSON(); };
	Time.ptr.prototype.UnmarshalJSON = function(data) {
		var _r, _tuple, data, err, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; data = $f.data; err = $f.err; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		if (($bytesToString(data)) === "null") {
			$s = -1; return $ifaceNil;
		}
		err = $ifaceNil;
		_r = Parse("\"2006-01-02T15:04:05Z07:00\"", ($bytesToString(data))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		Time.copy(t, _tuple[0]);
		err = _tuple[1];
		$s = -1; return err;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.UnmarshalJSON }; } $f._r = _r; $f._tuple = _tuple; $f.data = data; $f.err = err; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.UnmarshalJSON = function(data) { return this.$val.UnmarshalJSON(data); };
	Time.ptr.prototype.MarshalText = function() {
		var _r, _r$1, b, t, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; b = $f.b; t = $f.t; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		_r = $clone(t, Time).Year(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		y = _r;
		if (y < 0 || y >= 10000) {
			$s = -1; return [sliceType$3.nil, errors.New("Time.MarshalText: year outside of range [0,9999]")];
		}
		b = $makeSlice(sliceType$3, 0, 35);
		_r$1 = $clone(t, Time).AppendFormat(b, "2006-01-02T15:04:05.999999999Z07:00"); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$s = -1; return [_r$1, $ifaceNil];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.MarshalText }; } $f._r = _r; $f._r$1 = _r$1; $f.b = b; $f.t = t; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.MarshalText = function() { return this.$val.MarshalText(); };
	Time.ptr.prototype.UnmarshalText = function(data) {
		var _r, _tuple, data, err, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; data = $f.data; err = $f.err; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
		err = $ifaceNil;
		_r = Parse("2006-01-02T15:04:05Z07:00", ($bytesToString(data))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		Time.copy(t, _tuple[0]);
		err = _tuple[1];
		$s = -1; return err;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Time.ptr.prototype.UnmarshalText }; } $f._r = _r; $f._tuple = _tuple; $f.data = data; $f.err = err; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Time.prototype.UnmarshalText = function(data) { return this.$val.UnmarshalText(data); };
	Unix = function(sec, nsec) {
		var n, nsec, sec, x$1, x$2, x$3, x$4;
		if ((nsec.$high < 0 || (nsec.$high === 0 && nsec.$low < 0)) || (nsec.$high > 0 || (nsec.$high === 0 && nsec.$low >= 1000000000))) {
			n = $div64(nsec, new $Int64(0, 1000000000), false);
			sec = (x$1 = n, new $Int64(sec.$high + x$1.$high, sec.$low + x$1.$low));
			nsec = (x$2 = $mul64(n, new $Int64(0, 1000000000)), new $Int64(nsec.$high - x$2.$high, nsec.$low - x$2.$low));
			if ((nsec.$high < 0 || (nsec.$high === 0 && nsec.$low < 0))) {
				nsec = (x$3 = new $Int64(0, 1000000000), new $Int64(nsec.$high + x$3.$high, nsec.$low + x$3.$low));
				sec = (x$4 = new $Int64(0, 1), new $Int64(sec.$high - x$4.$high, sec.$low - x$4.$low));
			}
		}
		return unixTime(sec, (((nsec.$low + ((nsec.$high >> 31) * 4294967296)) >> 0)));
	};
	$pkg.Unix = Unix;
	isLeap = function(year) {
		var _r, _r$1, _r$2, year;
		return ((_r = year % 4, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0) && (!(((_r$1 = year % 100, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) === 0)) || ((_r$2 = year % 400, _r$2 === _r$2 ? _r$2 : $throwRuntimeError("integer divide by zero")) === 0));
	};
	norm = function(hi, lo, base) {
		var _q, _q$1, _tmp, _tmp$1, base, hi, lo, n, n$1, nhi, nlo;
		nhi = 0;
		nlo = 0;
		if (lo < 0) {
			n = (_q = ((-lo - 1 >> 0)) / base, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) + 1 >> 0;
			hi = hi - (n) >> 0;
			lo = lo + (($imul(n, base))) >> 0;
		}
		if (lo >= base) {
			n$1 = (_q$1 = lo / base, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero"));
			hi = hi + (n$1) >> 0;
			lo = lo - (($imul(n$1, base))) >> 0;
		}
		_tmp = hi;
		_tmp$1 = lo;
		nhi = _tmp;
		nlo = _tmp$1;
		return [nhi, nlo];
	};
	Date = function(year, month, day, hour, min, sec, nsec, loc) {
		var _r, _r$1, _r$2, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, abs, d, day, end, hour, loc, m, min, month, n, nsec, offset, sec, start, t, unix, utc, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y, year, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; _tuple$7 = $f._tuple$7; abs = $f.abs; d = $f.d; day = $f.day; end = $f.end; hour = $f.hour; loc = $f.loc; m = $f.m; min = $f.min; month = $f.month; n = $f.n; nsec = $f.nsec; offset = $f.offset; sec = $f.sec; start = $f.start; t = $f.t; unix = $f.unix; utc = $f.utc; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$12 = $f.x$12; x$13 = $f.x$13; x$14 = $f.x$14; x$15 = $f.x$15; x$16 = $f.x$16; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; y = $f.y; year = $f.year; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		if (loc === ptrType$2.nil) {
			$panic(new $String("time: missing Location in call to Date"));
		}
		m = ((month >> 0)) - 1 >> 0;
		_tuple = norm(year, m, 12);
		year = _tuple[0];
		m = _tuple[1];
		month = ((m >> 0)) + 1 >> 0;
		_tuple$1 = norm(sec, nsec, 1000000000);
		sec = _tuple$1[0];
		nsec = _tuple$1[1];
		_tuple$2 = norm(min, sec, 60);
		min = _tuple$2[0];
		sec = _tuple$2[1];
		_tuple$3 = norm(hour, min, 60);
		hour = _tuple$3[0];
		min = _tuple$3[1];
		_tuple$4 = norm(day, hour, 24);
		day = _tuple$4[0];
		hour = _tuple$4[1];
		y = ((x$1 = (x$2 = (new $Int64(0, year)), new $Int64(x$2.$high - -69, x$2.$low - 4075721025)), new $Uint64(x$1.$high, x$1.$low)));
		n = $div64(y, new $Uint64(0, 400), false);
		y = (x$3 = $mul64(new $Uint64(0, 400), n), new $Uint64(y.$high - x$3.$high, y.$low - x$3.$low));
		d = $mul64(new $Uint64(0, 146097), n);
		n = $div64(y, new $Uint64(0, 100), false);
		y = (x$4 = $mul64(new $Uint64(0, 100), n), new $Uint64(y.$high - x$4.$high, y.$low - x$4.$low));
		d = (x$5 = $mul64(new $Uint64(0, 36524), n), new $Uint64(d.$high + x$5.$high, d.$low + x$5.$low));
		n = $div64(y, new $Uint64(0, 4), false);
		y = (x$6 = $mul64(new $Uint64(0, 4), n), new $Uint64(y.$high - x$6.$high, y.$low - x$6.$low));
		d = (x$7 = $mul64(new $Uint64(0, 1461), n), new $Uint64(d.$high + x$7.$high, d.$low + x$7.$low));
		n = y;
		d = (x$8 = $mul64(new $Uint64(0, 365), n), new $Uint64(d.$high + x$8.$high, d.$low + x$8.$low));
		d = (x$9 = (new $Uint64(0, (x$10 = month - 1 >> 0, ((x$10 < 0 || x$10 >= daysBefore.length) ? ($throwRuntimeError("index out of range"), undefined) : daysBefore[x$10])))), new $Uint64(d.$high + x$9.$high, d.$low + x$9.$low));
		if (isLeap(year) && month >= 3) {
			d = (x$11 = new $Uint64(0, 1), new $Uint64(d.$high + x$11.$high, d.$low + x$11.$low));
		}
		d = (x$12 = (new $Uint64(0, (day - 1 >> 0))), new $Uint64(d.$high + x$12.$high, d.$low + x$12.$low));
		abs = $mul64(d, new $Uint64(0, 86400));
		abs = (x$13 = (new $Uint64(0, ((($imul(hour, 3600)) + ($imul(min, 60)) >> 0) + sec >> 0))), new $Uint64(abs.$high + x$13.$high, abs.$low + x$13.$low));
		unix = (x$14 = (new $Int64(abs.$high, abs.$low)), new $Int64(x$14.$high + -2147483647, x$14.$low + 3844486912));
		_r = loc.lookup(unix); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$5 = _r;
		offset = _tuple$5[1];
		start = _tuple$5[2];
		end = _tuple$5[3];
		/* */ if (!((offset === 0))) { $s = 2; continue; }
		/* */ $s = 3; continue;
		/* if (!((offset === 0))) { */ case 2:
				utc = (x$15 = (new $Int64(0, offset)), new $Int64(unix.$high - x$15.$high, unix.$low - x$15.$low));
				/* */ if ((utc.$high < start.$high || (utc.$high === start.$high && utc.$low < start.$low))) { $s = 5; continue; }
				/* */ if ((utc.$high > end.$high || (utc.$high === end.$high && utc.$low >= end.$low))) { $s = 6; continue; }
				/* */ $s = 7; continue;
				/* if ((utc.$high < start.$high || (utc.$high === start.$high && utc.$low < start.$low))) { */ case 5:
					_r$1 = loc.lookup(new $Int64(start.$high - 0, start.$low - 1)); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					_tuple$6 = _r$1;
					offset = _tuple$6[1];
					$s = 7; continue;
				/* } else if ((utc.$high > end.$high || (utc.$high === end.$high && utc.$low >= end.$low))) { */ case 6:
					_r$2 = loc.lookup(end); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					_tuple$7 = _r$2;
					offset = _tuple$7[1];
				/* } */ case 7:
			case 4:
			unix = (x$16 = (new $Int64(0, offset)), new $Int64(unix.$high - x$16.$high, unix.$low - x$16.$low));
		/* } */ case 3:
		t = $clone(unixTime(unix, ((nsec >> 0))), Time);
		t.setLoc(loc);
		$s = -1; return t;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Date }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f._tuple$7 = _tuple$7; $f.abs = abs; $f.d = d; $f.day = day; $f.end = end; $f.hour = hour; $f.loc = loc; $f.m = m; $f.min = min; $f.month = month; $f.n = n; $f.nsec = nsec; $f.offset = offset; $f.sec = sec; $f.start = start; $f.t = t; $f.unix = unix; $f.utc = utc; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$12 = x$12; $f.x$13 = x$13; $f.x$14 = x$14; $f.x$15 = x$15; $f.x$16 = x$16; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.y = y; $f.year = year; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Date = Date;
	Time.ptr.prototype.Truncate = function(d) {
		var _tuple, d, r, t;
		t = this;
		t.stripMono();
		if ((d.$high < 0 || (d.$high === 0 && d.$low <= 0))) {
			return t;
		}
		_tuple = div($clone(t, Time), d);
		r = _tuple[1];
		return $clone(t, Time).Add(new Duration(-r.$high, -r.$low));
	};
	Time.prototype.Truncate = function(d) { return this.$val.Truncate(d); };
	Time.ptr.prototype.Round = function(d) {
		var _tuple, d, r, t;
		t = this;
		t.stripMono();
		if ((d.$high < 0 || (d.$high === 0 && d.$low <= 0))) {
			return t;
		}
		_tuple = div($clone(t, Time), d);
		r = _tuple[1];
		if (lessThanHalf(r, d)) {
			return $clone(t, Time).Add(new Duration(-r.$high, -r.$low));
		}
		return $clone(t, Time).Add(new Duration(d.$high - r.$high, d.$low - r.$low));
	};
	Time.prototype.Round = function(d) { return this.$val.Round(d); };
	div = function(t, d) {
		var _q, _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, d, d0, d1, d1$1, neg, nsec, qmod2, r, sec, sec$1, t, tmp, u0, u0x, u1, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		qmod2 = 0;
		r = new Duration(0, 0);
		neg = false;
		nsec = t.nsec();
		sec = t.sec();
		if ((sec.$high < 0 || (sec.$high === 0 && sec.$low < 0))) {
			neg = true;
			sec = new $Int64(-sec.$high, -sec.$low);
			nsec = -nsec;
			if (nsec < 0) {
				nsec = nsec + (1000000000) >> 0;
				sec = (x$1 = new $Int64(0, 1), new $Int64(sec.$high - x$1.$high, sec.$low - x$1.$low));
			}
		}
		if ((d.$high < 0 || (d.$high === 0 && d.$low < 1000000000)) && (x$2 = $div64(new Duration(0, 1000000000), (new Duration(d.$high + d.$high, d.$low + d.$low)), true), (x$2.$high === 0 && x$2.$low === 0))) {
			qmod2 = (((_q = nsec / (((d.$low + ((d.$high >> 31) * 4294967296)) >> 0)), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) >> 0)) & 1;
			r = (new Duration(0, (_r = nsec % (((d.$low + ((d.$high >> 31) * 4294967296)) >> 0)), _r === _r ? _r : $throwRuntimeError("integer divide by zero"))));
		} else if ((x$3 = $div64(d, new Duration(0, 1000000000), true), (x$3.$high === 0 && x$3.$low === 0))) {
			d1 = ((x$4 = $div64(d, new Duration(0, 1000000000), false), new $Int64(x$4.$high, x$4.$low)));
			qmod2 = (((x$5 = $div64(sec, d1, false), x$5.$low + ((x$5.$high >> 31) * 4294967296)) >> 0)) & 1;
			r = (x$6 = $mul64(((x$7 = $div64(sec, d1, true), new Duration(x$7.$high, x$7.$low))), new Duration(0, 1000000000)), x$8 = (new Duration(0, nsec)), new Duration(x$6.$high + x$8.$high, x$6.$low + x$8.$low));
		} else {
			sec$1 = (new $Uint64(sec.$high, sec.$low));
			tmp = $mul64(($shiftRightUint64(sec$1, 32)), new $Uint64(0, 1000000000));
			u1 = $shiftRightUint64(tmp, 32);
			u0 = $shiftLeft64(tmp, 32);
			tmp = $mul64((new $Uint64(sec$1.$high & 0, (sec$1.$low & 4294967295) >>> 0)), new $Uint64(0, 1000000000));
			_tmp = u0;
			_tmp$1 = new $Uint64(u0.$high + tmp.$high, u0.$low + tmp.$low);
			u0x = _tmp;
			u0 = _tmp$1;
			if ((u0.$high < u0x.$high || (u0.$high === u0x.$high && u0.$low < u0x.$low))) {
				u1 = (x$9 = new $Uint64(0, 1), new $Uint64(u1.$high + x$9.$high, u1.$low + x$9.$low));
			}
			_tmp$2 = u0;
			_tmp$3 = (x$10 = (new $Uint64(0, nsec)), new $Uint64(u0.$high + x$10.$high, u0.$low + x$10.$low));
			u0x = _tmp$2;
			u0 = _tmp$3;
			if ((u0.$high < u0x.$high || (u0.$high === u0x.$high && u0.$low < u0x.$low))) {
				u1 = (x$11 = new $Uint64(0, 1), new $Uint64(u1.$high + x$11.$high, u1.$low + x$11.$low));
			}
			d1$1 = (new $Uint64(d.$high, d.$low));
			while (true) {
				if (!(!((x$12 = $shiftRightUint64(d1$1, 63), (x$12.$high === 0 && x$12.$low === 1))))) { break; }
				d1$1 = $shiftLeft64(d1$1, (1));
			}
			d0 = new $Uint64(0, 0);
			while (true) {
				qmod2 = 0;
				if ((u1.$high > d1$1.$high || (u1.$high === d1$1.$high && u1.$low > d1$1.$low)) || (u1.$high === d1$1.$high && u1.$low === d1$1.$low) && (u0.$high > d0.$high || (u0.$high === d0.$high && u0.$low >= d0.$low))) {
					qmod2 = 1;
					_tmp$4 = u0;
					_tmp$5 = new $Uint64(u0.$high - d0.$high, u0.$low - d0.$low);
					u0x = _tmp$4;
					u0 = _tmp$5;
					if ((u0.$high > u0x.$high || (u0.$high === u0x.$high && u0.$low > u0x.$low))) {
						u1 = (x$13 = new $Uint64(0, 1), new $Uint64(u1.$high - x$13.$high, u1.$low - x$13.$low));
					}
					u1 = (x$14 = d1$1, new $Uint64(u1.$high - x$14.$high, u1.$low - x$14.$low));
				}
				if ((d1$1.$high === 0 && d1$1.$low === 0) && (x$15 = (new $Uint64(d.$high, d.$low)), (d0.$high === x$15.$high && d0.$low === x$15.$low))) {
					break;
				}
				d0 = $shiftRightUint64(d0, (1));
				d0 = (x$16 = $shiftLeft64((new $Uint64(d1$1.$high & 0, (d1$1.$low & 1) >>> 0)), 63), new $Uint64(d0.$high | x$16.$high, (d0.$low | x$16.$low) >>> 0));
				d1$1 = $shiftRightUint64(d1$1, (1));
			}
			r = (new Duration(u0.$high, u0.$low));
		}
		if (neg && !((r.$high === 0 && r.$low === 0))) {
			qmod2 = (qmod2 ^ (1)) >> 0;
			r = new Duration(d.$high - r.$high, d.$low - r.$low);
		}
		return [qmod2, r];
	};
	Location.ptr.prototype.get = function() {
		var l, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; l = $f.l; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		l = this;
		if (l === ptrType$2.nil) {
			$s = -1; return utcLoc;
		}
		/* */ if (l === localLoc) { $s = 1; continue; }
		/* */ $s = 2; continue;
		/* if (l === localLoc) { */ case 1:
			$r = localOnce.Do(initLocal); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		/* } */ case 2:
		$s = -1; return l;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Location.ptr.prototype.get }; } $f.l = l; $f.$s = $s; $f.$r = $r; return $f;
	};
	Location.prototype.get = function() { return this.$val.get(); };
	Location.ptr.prototype.String = function() {
		var _r, l, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; l = $f.l; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		l = this;
		_r = l.get(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$s = -1; return _r.name;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Location.ptr.prototype.String }; } $f._r = _r; $f.l = l; $f.$s = $s; $f.$r = $r; return $f;
	};
	Location.prototype.String = function() { return this.$val.String(); };
	FixedZone = function(name, offset) {
		var l, name, offset, x$1;
		l = new Location.ptr(name, new sliceType([new zone.ptr(name, offset, false)]), new sliceType$1([new zoneTrans.ptr(new $Int64(-2147483648, 0), 0, false, false)]), new $Int64(-2147483648, 0), new $Int64(2147483647, 4294967295), ptrType.nil);
		l.cacheZone = (x$1 = l.zone, (0 >= x$1.$length ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + 0]));
		return l;
	};
	$pkg.FixedZone = FixedZone;
	Location.ptr.prototype.lookup = function(sec) {
		var _q, _r, end, hi, l, lim, lo, m, name, offset, sec, start, tx, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, zone$1, zone$2, zone$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; end = $f.end; hi = $f.hi; l = $f.l; lim = $f.lim; lo = $f.lo; m = $f.m; name = $f.name; offset = $f.offset; sec = $f.sec; start = $f.start; tx = $f.tx; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; zone$1 = $f.zone$1; zone$2 = $f.zone$2; zone$3 = $f.zone$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		name = "";
		offset = 0;
		start = new $Int64(0, 0);
		end = new $Int64(0, 0);
		l = this;
		_r = l.get(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		l = _r;
		if (l.zone.$length === 0) {
			name = "UTC";
			offset = 0;
			start = new $Int64(-2147483648, 0);
			end = new $Int64(2147483647, 4294967295);
			$s = -1; return [name, offset, start, end];
		}
		zone$1 = l.cacheZone;
		if (!(zone$1 === ptrType.nil) && (x$1 = l.cacheStart, (x$1.$high < sec.$high || (x$1.$high === sec.$high && x$1.$low <= sec.$low))) && (x$2 = l.cacheEnd, (sec.$high < x$2.$high || (sec.$high === x$2.$high && sec.$low < x$2.$low)))) {
			name = zone$1.name;
			offset = zone$1.offset;
			start = l.cacheStart;
			end = l.cacheEnd;
			$s = -1; return [name, offset, start, end];
		}
		if ((l.tx.$length === 0) || (x$3 = (x$4 = l.tx, (0 >= x$4.$length ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + 0])).when, (sec.$high < x$3.$high || (sec.$high === x$3.$high && sec.$low < x$3.$low)))) {
			zone$2 = (x$5 = l.zone, x$6 = l.lookupFirstZone(), ((x$6 < 0 || x$6 >= x$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + x$6]));
			name = zone$2.name;
			offset = zone$2.offset;
			start = new $Int64(-2147483648, 0);
			if (l.tx.$length > 0) {
				end = (x$7 = l.tx, (0 >= x$7.$length ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + 0])).when;
			} else {
				end = new $Int64(2147483647, 4294967295);
			}
			$s = -1; return [name, offset, start, end];
		}
		tx = l.tx;
		end = new $Int64(2147483647, 4294967295);
		lo = 0;
		hi = tx.$length;
		while (true) {
			if (!((hi - lo >> 0) > 1)) { break; }
			m = lo + (_q = ((hi - lo >> 0)) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) >> 0;
			lim = ((m < 0 || m >= tx.$length) ? ($throwRuntimeError("index out of range"), undefined) : tx.$array[tx.$offset + m]).when;
			if ((sec.$high < lim.$high || (sec.$high === lim.$high && sec.$low < lim.$low))) {
				end = lim;
				hi = m;
			} else {
				lo = m;
			}
		}
		zone$3 = (x$8 = l.zone, x$9 = ((lo < 0 || lo >= tx.$length) ? ($throwRuntimeError("index out of range"), undefined) : tx.$array[tx.$offset + lo]).index, ((x$9 < 0 || x$9 >= x$8.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$8.$array[x$8.$offset + x$9]));
		name = zone$3.name;
		offset = zone$3.offset;
		start = ((lo < 0 || lo >= tx.$length) ? ($throwRuntimeError("index out of range"), undefined) : tx.$array[tx.$offset + lo]).when;
		$s = -1; return [name, offset, start, end];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Location.ptr.prototype.lookup }; } $f._q = _q; $f._r = _r; $f.end = end; $f.hi = hi; $f.l = l; $f.lim = lim; $f.lo = lo; $f.m = m; $f.name = name; $f.offset = offset; $f.sec = sec; $f.start = start; $f.tx = tx; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.zone$1 = zone$1; $f.zone$2 = zone$2; $f.zone$3 = zone$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	Location.prototype.lookup = function(sec) { return this.$val.lookup(sec); };
	Location.ptr.prototype.lookupFirstZone = function() {
		var _i, _ref, l, x$1, x$2, x$3, x$4, x$5, x$6, zi, zi$1;
		l = this;
		if (!l.firstZoneUsed()) {
			return 0;
		}
		if (l.tx.$length > 0 && (x$1 = l.zone, x$2 = (x$3 = l.tx, (0 >= x$3.$length ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + 0])).index, ((x$2 < 0 || x$2 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + x$2])).isDST) {
			zi = (((x$4 = l.tx, (0 >= x$4.$length ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + 0])).index >> 0)) - 1 >> 0;
			while (true) {
				if (!(zi >= 0)) { break; }
				if (!(x$5 = l.zone, ((zi < 0 || zi >= x$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + zi])).isDST) {
					return zi;
				}
				zi = zi - (1) >> 0;
			}
		}
		_ref = l.zone;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			zi$1 = _i;
			if (!(x$6 = l.zone, ((zi$1 < 0 || zi$1 >= x$6.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + zi$1])).isDST) {
				return zi$1;
			}
			_i++;
		}
		return 0;
	};
	Location.prototype.lookupFirstZone = function() { return this.$val.lookupFirstZone(); };
	Location.ptr.prototype.firstZoneUsed = function() {
		var _i, _ref, l, tx;
		l = this;
		_ref = l.tx;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			tx = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), zoneTrans);
			if (tx.index === 0) {
				return true;
			}
			_i++;
		}
		return false;
	};
	Location.prototype.firstZoneUsed = function() { return this.$val.firstZoneUsed(); };
	Location.ptr.prototype.lookupName = function(name, unix) {
		var _i, _i$1, _r, _r$1, _ref, _ref$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, i, i$1, l, nam, name, offset, offset$1, ok, unix, x$1, x$2, x$3, zone$1, zone$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _ref$1 = $f._ref$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; i = $f.i; i$1 = $f.i$1; l = $f.l; nam = $f.nam; name = $f.name; offset = $f.offset; offset$1 = $f.offset$1; ok = $f.ok; unix = $f.unix; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; zone$1 = $f.zone$1; zone$2 = $f.zone$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		offset = 0;
		ok = false;
		l = this;
		_r = l.get(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		l = _r;
		_ref = l.zone;
		_i = 0;
		/* while (true) { */ case 2:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 3; continue; }
			i = _i;
			zone$1 = (x$1 = l.zone, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i]));
			/* */ if (zone$1.name === name) { $s = 4; continue; }
			/* */ $s = 5; continue;
			/* if (zone$1.name === name) { */ case 4:
				_r$1 = l.lookup((x$2 = (new $Int64(0, zone$1.offset)), new $Int64(unix.$high - x$2.$high, unix.$low - x$2.$low))); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple = _r$1;
				nam = _tuple[0];
				offset$1 = _tuple[1];
				if (nam === zone$1.name) {
					_tmp = offset$1;
					_tmp$1 = true;
					offset = _tmp;
					ok = _tmp$1;
					$s = -1; return [offset, ok];
				}
			/* } */ case 5:
			_i++;
		/* } */ $s = 2; continue; case 3:
		_ref$1 = l.zone;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			i$1 = _i$1;
			zone$2 = (x$3 = l.zone, ((i$1 < 0 || i$1 >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + i$1]));
			if (zone$2.name === name) {
				_tmp$2 = zone$2.offset;
				_tmp$3 = true;
				offset = _tmp$2;
				ok = _tmp$3;
				$s = -1; return [offset, ok];
			}
			_i$1++;
		}
		$s = -1; return [offset, ok];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Location.ptr.prototype.lookupName }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._ref$1 = _ref$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f.i = i; $f.i$1 = i$1; $f.l = l; $f.nam = nam; $f.name = name; $f.offset = offset; $f.offset$1 = offset$1; $f.ok = ok; $f.unix = unix; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.zone$1 = zone$1; $f.zone$2 = zone$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Location.prototype.lookupName = function(name, unix) { return this.$val.lookupName(name, unix); };
	ptrType$4.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
	ptrType$5.methods = [{prop: "Stop", name: "Stop", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([Duration], [$Bool], false)}];
	ptrType$6.methods = [{prop: "Stop", name: "Stop", pkg: "", typ: $funcType([], [], false)}];
	Time.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Format", name: "Format", pkg: "", typ: $funcType([$String], [$String], false)}, {prop: "AppendFormat", name: "AppendFormat", pkg: "", typ: $funcType([sliceType$3, $String], [sliceType$3], false)}, {prop: "After", name: "After", pkg: "", typ: $funcType([Time], [$Bool], false)}, {prop: "Before", name: "Before", pkg: "", typ: $funcType([Time], [$Bool], false)}, {prop: "Equal", name: "Equal", pkg: "", typ: $funcType([Time], [$Bool], false)}, {prop: "IsZero", name: "IsZero", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "abs", name: "abs", pkg: "time", typ: $funcType([], [$Uint64], false)}, {prop: "locabs", name: "locabs", pkg: "time", typ: $funcType([], [$String, $Int, $Uint64], false)}, {prop: "Date", name: "Date", pkg: "", typ: $funcType([], [$Int, Month, $Int], false)}, {prop: "Year", name: "Year", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Month", name: "Month", pkg: "", typ: $funcType([], [Month], false)}, {prop: "Day", name: "Day", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Weekday", name: "Weekday", pkg: "", typ: $funcType([], [Weekday], false)}, {prop: "ISOWeek", name: "ISOWeek", pkg: "", typ: $funcType([], [$Int, $Int], false)}, {prop: "Clock", name: "Clock", pkg: "", typ: $funcType([], [$Int, $Int, $Int], false)}, {prop: "Hour", name: "Hour", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Minute", name: "Minute", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Second", name: "Second", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Nanosecond", name: "Nanosecond", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "YearDay", name: "YearDay", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Add", name: "Add", pkg: "", typ: $funcType([Duration], [Time], false)}, {prop: "Sub", name: "Sub", pkg: "", typ: $funcType([Time], [Duration], false)}, {prop: "AddDate", name: "AddDate", pkg: "", typ: $funcType([$Int, $Int, $Int], [Time], false)}, {prop: "date", name: "date", pkg: "time", typ: $funcType([$Bool], [$Int, Month, $Int, $Int], false)}, {prop: "UTC", name: "UTC", pkg: "", typ: $funcType([], [Time], false)}, {prop: "Local", name: "Local", pkg: "", typ: $funcType([], [Time], false)}, {prop: "In", name: "In", pkg: "", typ: $funcType([ptrType$2], [Time], false)}, {prop: "Location", name: "Location", pkg: "", typ: $funcType([], [ptrType$2], false)}, {prop: "Zone", name: "Zone", pkg: "", typ: $funcType([], [$String, $Int], false)}, {prop: "Unix", name: "Unix", pkg: "", typ: $funcType([], [$Int64], false)}, {prop: "UnixNano", name: "UnixNano", pkg: "", typ: $funcType([], [$Int64], false)}, {prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType$3, $error], false)}, {prop: "GobEncode", name: "GobEncode", pkg: "", typ: $funcType([], [sliceType$3, $error], false)}, {prop: "MarshalJSON", name: "MarshalJSON", pkg: "", typ: $funcType([], [sliceType$3, $error], false)}, {prop: "MarshalText", name: "MarshalText", pkg: "", typ: $funcType([], [sliceType$3, $error], false)}, {prop: "Truncate", name: "Truncate", pkg: "", typ: $funcType([Duration], [Time], false)}, {prop: "Round", name: "Round", pkg: "", typ: $funcType([Duration], [Time], false)}];
	ptrType$7.methods = [{prop: "nsec", name: "nsec", pkg: "time", typ: $funcType([], [$Int32], false)}, {prop: "sec", name: "sec", pkg: "time", typ: $funcType([], [$Int64], false)}, {prop: "unixSec", name: "unixSec", pkg: "time", typ: $funcType([], [$Int64], false)}, {prop: "addSec", name: "addSec", pkg: "time", typ: $funcType([$Int64], [], false)}, {prop: "setLoc", name: "setLoc", pkg: "time", typ: $funcType([ptrType$2], [], false)}, {prop: "stripMono", name: "stripMono", pkg: "time", typ: $funcType([], [], false)}, {prop: "setMono", name: "setMono", pkg: "time", typ: $funcType([$Int64], [], false)}, {prop: "mono", name: "mono", pkg: "time", typ: $funcType([], [$Int64], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType$3], [$error], false)}, {prop: "GobDecode", name: "GobDecode", pkg: "", typ: $funcType([sliceType$3], [$error], false)}, {prop: "UnmarshalJSON", name: "UnmarshalJSON", pkg: "", typ: $funcType([sliceType$3], [$error], false)}, {prop: "UnmarshalText", name: "UnmarshalText", pkg: "", typ: $funcType([sliceType$3], [$error], false)}];
	Month.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
	Weekday.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
	Duration.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Nanoseconds", name: "Nanoseconds", pkg: "", typ: $funcType([], [$Int64], false)}, {prop: "Seconds", name: "Seconds", pkg: "", typ: $funcType([], [$Float64], false)}, {prop: "Minutes", name: "Minutes", pkg: "", typ: $funcType([], [$Float64], false)}, {prop: "Hours", name: "Hours", pkg: "", typ: $funcType([], [$Float64], false)}, {prop: "Truncate", name: "Truncate", pkg: "", typ: $funcType([Duration], [Duration], false)}, {prop: "Round", name: "Round", pkg: "", typ: $funcType([Duration], [Duration], false)}];
	ptrType$2.methods = [{prop: "get", name: "get", pkg: "time", typ: $funcType([], [ptrType$2], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "lookup", name: "lookup", pkg: "time", typ: $funcType([$Int64], [$String, $Int, $Int64, $Int64], false)}, {prop: "lookupFirstZone", name: "lookupFirstZone", pkg: "time", typ: $funcType([], [$Int], false)}, {prop: "firstZoneUsed", name: "firstZoneUsed", pkg: "time", typ: $funcType([], [$Bool], false)}, {prop: "lookupName", name: "lookupName", pkg: "time", typ: $funcType([$String, $Int64], [$Int, $Bool], false)}];
	runtimeTimer.init("time", [{prop: "i", name: "i", embedded: false, exported: false, typ: $Int32, tag: ""}, {prop: "when", name: "when", embedded: false, exported: false, typ: $Int64, tag: ""}, {prop: "period", name: "period", embedded: false, exported: false, typ: $Int64, tag: ""}, {prop: "f", name: "f", embedded: false, exported: false, typ: funcType$1, tag: ""}, {prop: "arg", name: "arg", embedded: false, exported: false, typ: $emptyInterface, tag: ""}, {prop: "timeout", name: "timeout", embedded: false, exported: false, typ: ptrType$3, tag: ""}, {prop: "active", name: "active", embedded: false, exported: false, typ: $Bool, tag: ""}]);
	ParseError.init("", [{prop: "Layout", name: "Layout", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Value", name: "Value", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "LayoutElem", name: "LayoutElem", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "ValueElem", name: "ValueElem", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Message", name: "Message", embedded: false, exported: true, typ: $String, tag: ""}]);
	Timer.init("time", [{prop: "C", name: "C", embedded: false, exported: true, typ: chanType$1, tag: ""}, {prop: "r", name: "r", embedded: false, exported: false, typ: runtimeTimer, tag: ""}]);
	Ticker.init("time", [{prop: "C", name: "C", embedded: false, exported: true, typ: chanType$1, tag: ""}, {prop: "r", name: "r", embedded: false, exported: false, typ: runtimeTimer, tag: ""}]);
	Time.init("time", [{prop: "wall", name: "wall", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "ext", name: "ext", embedded: false, exported: false, typ: $Int64, tag: ""}, {prop: "loc", name: "loc", embedded: false, exported: false, typ: ptrType$2, tag: ""}]);
	Location.init("time", [{prop: "name", name: "name", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "zone", name: "zone", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "tx", name: "tx", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "cacheStart", name: "cacheStart", embedded: false, exported: false, typ: $Int64, tag: ""}, {prop: "cacheEnd", name: "cacheEnd", embedded: false, exported: false, typ: $Int64, tag: ""}, {prop: "cacheZone", name: "cacheZone", embedded: false, exported: false, typ: ptrType, tag: ""}]);
	zone.init("time", [{prop: "name", name: "name", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "offset", name: "offset", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "isDST", name: "isDST", embedded: false, exported: false, typ: $Bool, tag: ""}]);
	zoneTrans.init("time", [{prop: "when", name: "when", embedded: false, exported: false, typ: $Int64, tag: ""}, {prop: "index", name: "index", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "isstd", name: "isstd", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "isutc", name: "isutc", embedded: false, exported: false, typ: $Bool, tag: ""}]);
$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = js.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = nosync.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = runtime.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		$r = syscall.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
		localLoc = new Location.ptr("", sliceType.nil, sliceType$1.nil, new $Int64(0, 0), new $Int64(0, 0), ptrType.nil);
		localOnce = new nosync.Once.ptr(false, false);
		zoneSources = new sliceType$2([runtime.GOROOT() + "/lib/time/zoneinfo.zip"]);
		std0x = $toNativeArray($kindInt, [260, 265, 524, 526, 528, 274]);
		longDayNames = new sliceType$2(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
		shortDayNames = new sliceType$2(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
		shortMonthNames = new sliceType$2(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
		longMonthNames = new sliceType$2(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
		atoiError = errors.New("time: invalid number");
		errBad = errors.New("bad value for field");
		errLeadingInt = errors.New("time: bad [0-9]*");
		months = $toNativeArray($kindString, ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
		days = $toNativeArray($kindString, ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
		daysBefore = $toNativeArray($kindInt32, [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]);
		startNano = (x = runtimeNano(), new $Int64(x.$high - 0, x.$low - 1));
		utcLoc = new Location.ptr("UTC", sliceType.nil, sliceType$1.nil, new $Int64(0, 0), new $Int64(0, 0), ptrType.nil);
		$pkg.UTC = utcLoc;
		$pkg.Local = localLoc;
		errLocation = errors.New("time: invalid location name");
		badData = errors.New("malformed time zone information");
		init();
}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["sadislands/internal/domain/game/js"]=(function(){var $pkg={},$init,A,B,C,D,E,G,H,I,L,M,N,O,P,Q,R,S,T,U,V,X;A=$packages["sync"];B=$packages["time"];C=$pkg.Action=$newType(0,$kindStruct,"game.Action",true,"sadislands/internal/domain/game/js",true,function(Type_,Payload_){this.$val=this;if(arguments.length===0){this.Type="";this.Payload=$ifaceNil;return;}this.Type=Type_;this.Payload=Payload_;});D=$pkg.ActionRaw=$newType(0,$kindStruct,"game.ActionRaw",true,"sadislands/internal/domain/game/js",true,function(Type_,Payload_){this.$val=this;if(arguments.length===0){this.Type="";this.Payload="";return;}this.Type=Type_;this.Payload=Payload_;});E=$pkg.State=$newType(0,$kindStruct,"game.State",true,"sadislands/internal/domain/game/js",true,function(Field_,Players_,ActiveItems_,RoundNumber_,RoundTimer_){this.$val=this;if(arguments.length===0){this.Field=O.nil;this.Players=false;this.ActiveItems=P.nil;this.RoundNumber=0;this.RoundTimer=Q.nil;return;}this.Field=Field_;this.Players=Players_;this.ActiveItems=ActiveItems_;this.RoundNumber=RoundNumber_;this.RoundTimer=RoundTimer_;});G=$pkg.Field=$newType(0,$kindStruct,"game.Field",true,"sadislands/internal/domain/game/js",true,function(Cells_,Width_,Height_){this.$val=this;if(arguments.length===0){this.Cells=T.nil;this.Width=0;this.Height=0;return;}this.Cells=Cells_;this.Width=Width_;this.Height=Height_;});H=$pkg.Cell=$newType(0,$kindStruct,"game.Cell",true,"sadislands/internal/domain/game/js",true,function(Row_,Col_,Type_,HasBox_){this.$val=this;if(arguments.length===0){this.Row=0;this.Col=0;this.Type="";this.HasBox=false;return;}this.Row=Row_;this.Col=Col_;this.Type=Type_;this.HasBox=HasBox_;});I=$pkg.Player=$newType(0,$kindStruct,"game.Player",true,"sadislands/internal/domain/game/js",true,function(Id_,X_,Y_,Items_,LoseRound_,Ready_){this.$val=this;if(arguments.length===0){this.Id=new $Uint64(0,0);this.X=0;this.Y=0;this.Items=false;this.LoseRound=U.nil;this.Ready=false;return;}this.Id=Id_;this.X=X_;this.Y=Y_;this.Items=Items_;this.LoseRound=LoseRound_;this.Ready=Ready_;});L=$pkg.InitPlayersPayload=$newType(0,$kindStruct,"game.InitPlayersPayload",true,"sadislands/internal/domain/game/js",true,function(PlayersId_){this.$val=this;if(arguments.length===0){this.PlayersId=X.nil;return;}this.PlayersId=PlayersId_;});M=$pkg.InitPlayerMovePayload=$newType(0,$kindStruct,"game.InitPlayerMovePayload",true,"sadislands/internal/domain/game/js",true,function(PlayerId_,Move_){this.$val=this;if(arguments.length===0){this.PlayerId=new $Uint64(0,0);this.Move="";return;}this.PlayerId=PlayerId_;this.Move=Move_;});N=$pkg.InitPlayerReadyPayload=$newType(0,$kindStruct,"game.InitPlayerReadyPayload",true,"sadislands/internal/domain/game/js",true,function(PlayerId_){this.$val=this;if(arguments.length===0){this.PlayerId=new $Uint64(0,0);return;}this.PlayerId=PlayerId_;});O=$ptrType(G);P=$ptrType(A.Map);Q=$ptrType($Uint64);R=$ptrType(E);S=$mapType($String,I);T=$sliceType(H);U=$ptrType($Int);V=$mapType($String,$Uint64);X=$sliceType($Uint64);E.ptr.prototype.Empty=function(){var a;a=this;if(a.Field===O.nil&&($keys(a.Players).length===0)&&a.ActiveItems===P.nil&&(a.RoundNumber===0)&&a.RoundTimer===Q.nil){return true;}return false;};E.prototype.Empty=function(){return this.$val.Empty();};R.methods=[{prop:"Empty",name:"Empty",pkg:"",typ:$funcType([],[$Bool],false)}];C.init("",[{prop:"Type",name:"Type",embedded:false,exported:true,typ:$String,tag:"json:\"type\""},{prop:"Payload",name:"Payload",embedded:false,exported:true,typ:$emptyInterface,tag:"json:\"payload,omitempty\""}]);D.init("",[{prop:"Type",name:"Type",embedded:false,exported:true,typ:$String,tag:"json:\"type\""},{prop:"Payload",name:"Payload",embedded:false,exported:true,typ:$String,tag:"json:\"payload,omitempty\""}]);E.init("",[{prop:"Field",name:"Field",embedded:false,exported:true,typ:O,tag:"json:\"field,omitempty\""},{prop:"Players",name:"Players",embedded:false,exported:true,typ:S,tag:"json:\"players,omitempty\""},{prop:"ActiveItems",name:"ActiveItems",embedded:false,exported:true,typ:P,tag:"json:\"activeItems,omitempty\""},{prop:"RoundNumber",name:"RoundNumber",embedded:false,exported:true,typ:$Int,tag:"json:\"roundNumber,omitempty\""},{prop:"RoundTimer",name:"RoundTimer",embedded:false,exported:true,typ:Q,tag:"json:\"roundTimer,omitempty\""}]);G.init("",[{prop:"Cells",name:"Cells",embedded:false,exported:true,typ:T,tag:"json:\"cells\""},{prop:"Width",name:"Width",embedded:false,exported:true,typ:$Int,tag:"json:\"width\""},{prop:"Height",name:"Height",embedded:false,exported:true,typ:$Int,tag:"json:\"height\""}]);H.init("",[{prop:"Row",name:"Row",embedded:false,exported:true,typ:$Int,tag:"json:\"row\""},{prop:"Col",name:"Col",embedded:false,exported:true,typ:$Int,tag:"json:\"col\""},{prop:"Type",name:"Type",embedded:false,exported:true,typ:$String,tag:"json:\"type\""},{prop:"HasBox",name:"HasBox",embedded:false,exported:true,typ:$Bool,tag:"json:\"hasBox\""}]);I.init("",[{prop:"Id",name:"Id",embedded:false,exported:true,typ:$Uint64,tag:"json:\"id\""},{prop:"X",name:"X",embedded:false,exported:true,typ:$Int,tag:"json:\"x\""},{prop:"Y",name:"Y",embedded:false,exported:true,typ:$Int,tag:"json:\"y\""},{prop:"Items",name:"Items",embedded:false,exported:true,typ:V,tag:"json:\"items\""},{prop:"LoseRound",name:"LoseRound",embedded:false,exported:true,typ:U,tag:"json:\"lose_round,omitempty\""},{prop:"Ready",name:"Ready",embedded:false,exported:true,typ:$Bool,tag:"json:\"-\""}]);L.init("",[{prop:"PlayersId",name:"PlayersId",embedded:false,exported:true,typ:X,tag:"json:\"playerIds\""}]);M.init("",[{prop:"PlayerId",name:"PlayerId",embedded:false,exported:true,typ:$Uint64,tag:"json:\"playerId\""},{prop:"Move",name:"Move",embedded:false,exported:true,typ:$String,tag:"json:\"move\""}]);N.init("",[{prop:"PlayerId",name:"PlayerId",embedded:false,exported:true,typ:$Uint64,tag:"json:\"playerId\""}]);$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$packages["sadislands/internal/infrastructure/repository/memory/game/js"]=(function(){var $pkg={},$init,F,A,B,C,D,E,G,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,H,I,J,L,M;F=$packages["github.com/cathalgarvey/fmtless/encoding/json"];A=$packages["github.com/gopherjs/gopherjs/js"];B=$packages["sadislands/internal/domain/game/js"];C=$packages["strconv"];D=$packages["sync"];E=$packages["time"];G=$pkg.Engine=$newType(0,$kindStruct,"main.Engine",true,"sadislands/internal/infrastructure/repository/memory/game/js",true,function(Transport_,State_,StateDiff_,PlayersReady_,ProcessActions_,ProcessM_,ReceivedActions_,Ticker_,Timer_){this.$val=this;if(arguments.length===0){this.Transport=Z.nil;this.State=AA.nil;this.StateDiff=AA.nil;this.PlayersReady=new $Uint64(0,0);this.ProcessActions=X.nil;this.ProcessM=AB.nil;this.ReceivedActions=$chanNil;this.Ticker=AC.nil;this.Timer=AD.nil;return;}this.Transport=Transport_;this.State=State_;this.StateDiff=StateDiff_;this.PlayersReady=PlayersReady_;this.ProcessActions=ProcessActions_;this.ProcessM=ProcessM_;this.ReceivedActions=ReceivedActions_;this.Ticker=Ticker_;this.Timer=Timer_;});N=$pkg.Transport=$newType(0,$kindStruct,"main.Transport",true,"sadislands/internal/infrastructure/repository/memory/game/js",true,function(InnerReceiver_,OuterReceiver_){this.$val=this;if(arguments.length===0){this.InnerReceiver=$throwNilPointerError;this.OuterReceiver=$throwNilPointerError;return;}this.InnerReceiver=InnerReceiver_;this.OuterReceiver=OuterReceiver_;});O=$ptrType(B.Field);P=$ptrType(D.Map);Q=$ptrType($Uint64);R=$sliceType(B.Cell);S=$ptrType(B.InitPlayersPayload);T=$ptrType($Int);U=$ptrType(B.InitPlayerReadyPayload);V=$ptrType(B.InitPlayerMovePayload);W=$ptrType(B.Action);X=$sliceType(W);Y=$ptrType(X);Z=$ptrType(N);AA=$ptrType(B.State);AB=$ptrType(D.Mutex);AC=$ptrType(E.Ticker);AD=$ptrType(E.Timer);AE=$sliceType($Uint8);AF=$sliceType($Uint64);AG=$funcType([$String,$String],[],false);AH=$funcType([$emptyInterface],[],false);AI=$funcType([AG],[AH],false);AJ=$ptrType(G);AK=$chanType(W,false,false);AL=$funcType([W],[],false);H=function(){return new B.State.ptr(I(),{},new D.Map.ptr(new D.Mutex.ptr(0,0),new $packages["sync/atomic"].Value.ptr($ifaceNil),false,0),0,Q.nil);};I=function(){var a,b,c,d;a=new B.Field.ptr($makeSlice(R,0,100),10,10);b=0;while(true){if(!(b<10)){break;}c=0;while(true){if(!(c<10)){break;}d=new B.Cell.ptr(b,c,"SAND",false);a.Cells=$append(a.Cells,d);c=c+(1)>>0;}b=b+(1)>>0;}return a;};G.ptr.prototype.setGameStart=function(){var a;a=this;a.State=H();a.StateDiff=a.State;};G.prototype.setGameStart=function(){return this.$val.setGameStart();};G.ptr.prototype.setRoundStart=function(){var a;a=this;a.State.RoundNumber=a.State.RoundNumber+(1)>>0;E.AfterFunc(new E.Duration(2,1410065408),$methodVal(a,"stopRound"));a.State.RoundTimer=$newDataPointer(new $Uint64(0,0),Q);a.State.RoundTimer.$set(new $Uint64(0,10));$go($methodVal(a,"controlRemainingRoundTime"),[]);a.StateDiff.RoundNumber=a.State.RoundNumber;a.StateDiff.RoundTimer=a.State.RoundTimer;};G.prototype.setRoundStart=function(){return this.$val.setRoundStart();};G.ptr.prototype.setRoundTime=function(){var a,b,c;a=this;a.State.RoundTimer.$set((b=a.State.RoundTimer.$get(),c=new $Uint64(0,1),new $Uint64(b.$high-c.$high,b.$low-c.$low)));a.StateDiff.RoundTimer=a.State.RoundTimer;};G.prototype.setRoundTime=function(){return this.$val.setRoundTime();};G.ptr.prototype.setRoundStop=function(){var a,b,c,d,e,f;a=this;b=a.State.Players;c=0;d=$keys(b);while(true){if(!(c<d.length)){break;}e=b[d[c]];if(e===undefined){c++;continue;}f=$clone(e.v,B.Player);f.Ready=false;c++;}a.State.RoundTimer.$set(new $Uint64(0,0));a.StateDiff.RoundTimer=a.State.RoundTimer;};G.prototype.setRoundStop=function(){return this.$val.setRoundStop();};G.ptr.prototype.initPlayers=function(a){var a,b,c,d,e,f,g,h;b=this;c=$assertType(a.Payload,S);d=c.PlayersId;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);g=C.FormatUint(f,10);h=g;(b.State.Players||$throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(h)]={k:h,v:new B.Player.ptr(f,0,0,{},T.nil,false)};e++;}b.StateDiff.Players=b.State.Players;};G.prototype.initPlayers=function(a){return this.$val.initPlayers(a);};G.ptr.prototype.initPlayerReady=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;c=$assertType(a.Payload,U);d=C.FormatUint(c.PlayerId,10);e=(f=b.State.Players[$String.keyFor(d)],f!==undefined?[f.v,true]:[new B.Player.ptr(new $Uint64(0,0),0,0,false,T.nil,false),false]);g=$clone(e[0],B.Player);h=e[1];if(!h){$s=-1;return;}if(g.Ready){$s=-1;return;}g.Ready=true;i=d;(b.State.Players||$throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(i)]={k:i,v:$clone(g,B.Player)};j=b.State.Players;k=0;l=$keys(j);while(true){if(!(k<l.length)){break;}m=j[l[k]];if(m===undefined){k++;continue;}n=$clone(m.v,B.Player);if(!n.Ready){$s=-1;return;}k++;}$r=$send(b.ReceivedActions,new B.Action.ptr("SET_ROUND_START",$ifaceNil));$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.initPlayerReady};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.initPlayerReady=function(a){return this.$val.initPlayerReady(a);};G.ptr.prototype.movePlayer=function(a){var a,b,c,d,e,f,g,h,i,j;b=this;c=$assertType(a.Payload,V);d=C.FormatUint(c.PlayerId,10);e=(f=b.State.Players[$String.keyFor(d)],f!==undefined?[f.v,true]:[new B.Player.ptr(new $Uint64(0,0),0,0,false,T.nil,false),false]);g=$clone(e[0],B.Player);h=e[1];if(!h){return;}i=c.Move;if(i===("RIGHT")){if(g.X===39){return;}g.X=g.X+(1)>>0;}else if(i===("UP")){if(g.Y===0){return;}g.Y=g.Y-(1)>>0;}else if(i===("LEFT")){if(g.X===0){return;}g.X=g.X-(1)>>0;}else if(i===("DOWN")){if(g.Y===39){return;}g.Y=g.Y+(1)>>0;}else{return;}j=d;(b.State.Players||$throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(j)]={k:j,v:$clone(g,B.Player)};};G.prototype.movePlayer=function(a){return this.$val.movePlayer(a);};G.ptr.prototype.controlRemainingRoundTime=function(){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;b=new B.Action.ptr("SET_ROUND_TIME",$ifaceNil);c=E.NewTicker(new E.Duration(0,1000000000));case 1:d=$recv(c.C);$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d[0];if((e=a.State.RoundTimer.$get(),(e.$high===0&&e.$low===2))){$s=4;continue;}$s=5;continue;case 4:$r=$send(a.ReceivedActions,b);$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}c.Stop();$s=-1;return;case 5:$r=$send(a.ReceivedActions,b);$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=1;continue;case 2:$s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.controlRemainingRoundTime};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.controlRemainingRoundTime=function(){return this.$val.controlRemainingRoundTime();};G.ptr.prototype.stopRound=function(){var a,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;$r=$send(a.ReceivedActions,new B.Action.ptr("SET_ROUND_STOP",$ifaceNil));$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.stopRound};}$f.a=a;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.stopRound=function(){return this.$val.stopRound();};J=function(){return new B.State.ptr(O.nil,{},P.nil,0,Q.nil);};G.ptr.prototype.updateState=function(a){var a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=[b];b[0]=this;b[0].StateDiff=J();c=a.$get();d=0;case 1:if(!(d<c.$length)){$s=2;continue;}e=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);f=e.Type;if(f===("INIT_PLAYERS")){$s=4;continue;}if(f===("INIT_PLAYER_READY")){$s=5;continue;}if(f===("INIT_PLAYER_MOVE")){$s=6;continue;}if(f===("SET_ROUND_START")){$s=7;continue;}if(f===("SET_ROUND_TIME")){$s=8;continue;}if(f===("SET_ROUND_STOP")){$s=9;continue;}$s=10;continue;case 4:b[0].setGameStart();b[0].initPlayers(e);$go($methodVal(b[0].Transport,"SendOut"),[new B.Action.ptr("SET_STATE",b[0].State)]);$s=10;continue;case 5:$r=b[0].initPlayerReady(e);$s=11;case 11:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=10;continue;case 6:b[0].movePlayer(e);$s=10;continue;case 7:b[0].setRoundStart();$s=10;continue;case 8:b[0].setRoundTime();$s=10;continue;case 9:b[0].setRoundStop();$go((function(b){return function $b(){var $s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$r=b[0].Transport.SendOut(new B.Action.ptr("SET_STATE",b[0].StateDiff));$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=b[0].Transport.SendOut(new B.Action.ptr("SET_ROUND_STOP",$ifaceNil));$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;}return;}if($f===undefined){$f={$blk:$b};}$f.$s=$s;$f.$r=$r;return $f;};})(b),[]);$s=-1;return;case 10:case 3:d++;$s=1;continue;case 2:if(!b[0].StateDiff.Empty()){$go($methodVal(b[0].Transport,"SendOut"),[new B.Action.ptr("SET_STATE_DIFF",b[0].StateDiff)]);}$s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.updateState};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.updateState=function(a){return this.$val.updateState(a);};G.ptr.prototype.run=function(){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;$go($methodVal(a,"collectActions"),[]);a.Ticker=E.NewTicker(new E.Duration(0,500000000));case 1:b=[b];d=$select([[a.Ticker.C]]);$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;if(c[0]===0){$s=4;continue;}$s=5;continue;case 4:if(a.ProcessActions.$length===0){$s=6;continue;}$s=7;continue;case 6:$s=1;continue;case 7:$r=a.ProcessM.Lock();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}b[0]=$makeSlice(X,a.ProcessActions.$length);$copySlice(b[0],a.ProcessActions);$go($methodVal(a,"updateState"),[(b.$ptr||(b.$ptr=new Y(function(){return this.$target[0];},function($v){this.$target[0]=$v;},b)))]);a.ProcessActions=$makeSlice(X,0,100);$r=a.ProcessM.Unlock();$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 5:$s=1;continue;case 2:$s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.run};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.run=function(){return this.$val.run();};G.ptr.prototype.collectActions=function(){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;case 1:c=$select([[a.ReceivedActions]]);$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;if(b[0]===0){$s=4;continue;}$s=5;continue;case 4:d=b[1][0];$r=a.ProcessM.Lock();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}a.ProcessActions=$append(a.ProcessActions,d);$r=a.ProcessM.Unlock();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 5:$s=1;continue;case 2:$s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.collectActions};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.collectActions=function(){return this.$val.collectActions();};L=function(a){var a,b;b=new G.ptr(new N.ptr($throwNilPointerError,(function $b(b){var b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:if($interfaceIsEqual(b.Payload,$ifaceNil)){$s=1;continue;}$s=2;continue;case 1:$r=a(b.Type,"");$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;case 2:d=F.Marshal(b.Payload);$s=4;case 4:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];$r=a(b.Type,($bytesToString(e)));$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;}return;}if($f===undefined){$f={$blk:$b};}$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;})),AA.nil,AA.nil,new $Uint64(0,0),$makeSlice(X,0,10),new D.Mutex.ptr(0,0),new $Chan(W,100),AC.nil,AD.nil);b.Transport.InnerReceiver=(function $b(c){var c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=[d];d[0]=new B.ActionRaw.ptr("","");e=F.Unmarshal((new AE($stringToBytes($assertType(c,$String)))),d[0]);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;f=new B.Action.ptr(d[0].Type,$ifaceNil);g=$ifaceNil;h=f.Type;if(h===("INIT_PLAYERS")){g=new B.InitPlayersPayload.ptr(AF.nil);}else if(h===("INIT_PLAYER_MOVE")){g=new B.InitPlayerMovePayload.ptr(new $Uint64(0,0),"");}else{$s=-1;return;}i=F.Unmarshal((new AE($stringToBytes(d[0].Payload))),g);$s=2;case 2:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}i;f.Payload=g;$r=$send(b.ReceivedActions,f);$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$s=-1;return;}return;}if($f===undefined){$f={$blk:$b};}$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;});$go($methodVal(b,"run"),[]);return b.Transport.InnerReceiver;};$pkg.InitEngineJS=L;M=function(){$module.exports.initEngine=$externalize(L,AI);};N.ptr.prototype.SendOut=function(a){var a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;if(!(b.OuterReceiver===$throwNilPointerError)){$s=1;continue;}$s=2;continue;case 1:$r=b.OuterReceiver(a);$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 2:$s=-1;return;}return;}if($f===undefined){$f={$blk:N.ptr.prototype.SendOut};}$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};N.prototype.SendOut=function(a){return this.$val.SendOut(a);};N.ptr.prototype.SendInside=function(a){var a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;if(!(b.OuterReceiver===$throwNilPointerError)){$s=1;continue;}$s=2;continue;case 1:$r=b.InnerReceiver(a);$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}case 2:$s=-1;return;}return;}if($f===undefined){$f={$blk:N.ptr.prototype.SendInside};}$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};N.prototype.SendInside=function(a){return this.$val.SendInside(a);};AJ.methods=[{prop:"setGameStart",name:"setGameStart",pkg:"sadislands/internal/infrastructure/repository/memory/game/js",typ:$funcType([],[],false)},{prop:"setRoundStart",name:"setRoundStart",pkg:"sadislands/internal/infrastructure/repository/memory/game/js",typ:$funcType([],[],false)},{prop:"setRoundTime",name:"setRoundTime",pkg:"sadislands/internal/infrastructure/repository/memory/game/js",typ:$funcType([],[],false)},{prop:"setRoundStop",name:"setRoundStop",pkg:"sadislands/internal/infrastructure/repository/memory/game/js",typ:$funcType([],[],false)},{prop:"initPlayers",name:"initPlayers",pkg:"sadislands/internal/infrastructure/repository/memory/game/js",typ:$funcType([W],[],false)},{prop:"initPlayerReady",name:"initPlayerReady",pkg:"sadislands/internal/infrastructure/repository/memory/game/js",typ:$funcType([W],[],false)},{prop:"movePlayer",name:"movePlayer",pkg:"sadislands/internal/infrastructure/repository/memory/game/js",typ:$funcType([W],[],false)},{prop:"controlRemainingRoundTime",name:"controlRemainingRoundTime",pkg:"sadislands/internal/infrastructure/repository/memory/game/js",typ:$funcType([],[],false)},{prop:"stopRound",name:"stopRound",pkg:"sadislands/internal/infrastructure/repository/memory/game/js",typ:$funcType([],[],false)},{prop:"updateState",name:"updateState",pkg:"sadislands/internal/infrastructure/repository/memory/game/js",typ:$funcType([Y],[],false)},{prop:"run",name:"run",pkg:"sadislands/internal/infrastructure/repository/memory/game/js",typ:$funcType([],[],false)},{prop:"collectActions",name:"collectActions",pkg:"sadislands/internal/infrastructure/repository/memory/game/js",typ:$funcType([],[],false)}];Z.methods=[{prop:"SendOut",name:"SendOut",pkg:"",typ:$funcType([W],[],false)},{prop:"SendInside",name:"SendInside",pkg:"",typ:$funcType([$emptyInterface],[],false)}];G.init("",[{prop:"Transport",name:"Transport",embedded:false,exported:true,typ:Z,tag:""},{prop:"State",name:"State",embedded:false,exported:true,typ:AA,tag:""},{prop:"StateDiff",name:"StateDiff",embedded:false,exported:true,typ:AA,tag:""},{prop:"PlayersReady",name:"PlayersReady",embedded:false,exported:true,typ:$Uint64,tag:""},{prop:"ProcessActions",name:"ProcessActions",embedded:false,exported:true,typ:X,tag:""},{prop:"ProcessM",name:"ProcessM",embedded:false,exported:true,typ:AB,tag:""},{prop:"ReceivedActions",name:"ReceivedActions",embedded:false,exported:true,typ:AK,tag:""},{prop:"Ticker",name:"Ticker",embedded:false,exported:true,typ:AC,tag:""},{prop:"Timer",name:"Timer",embedded:false,exported:true,typ:AD,tag:""}]);N.init("",[{prop:"InnerReceiver",name:"InnerReceiver",embedded:false,exported:true,typ:AH,tag:""},{prop:"OuterReceiver",name:"OuterReceiver",embedded:false,exported:true,typ:AL,tag:""}]);$init=function(){$pkg.$init=function(){};var $f,$c=false,$s=0,$r;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:$r=F.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=A.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=B.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=C.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=D.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}$r=E.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}if($pkg===$mainPkg){M();$mainFinished=true;}}return;}if($f===undefined){$f={$blk:$init};}$f.$s=$s;$f.$r=$r;return $f;};$pkg.$init=$init;return $pkg;})();
$synthesizeMethods();
var $mainPkg = $packages["sadislands/internal/infrastructure/repository/memory/game/js"];
$packages["runtime"].$init();
$go($mainPkg.$init, []);
$flushConsole();

}).call(this);
//# sourceMappingURL=js.js.map
