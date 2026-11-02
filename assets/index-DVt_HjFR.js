(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,O=1030,k=1031,A=1033,j=33776,te=33777,M=33778,ne=33779,N=35840,re=35841,P=35842,ie=35843,ae=36196,oe=37492,se=37496,ce=37488,F=37489,le=37490,ue=37491,de=37808,fe=37809,pe=37810,me=37811,he=37812,ge=37813,_e=37814,ve=37815,ye=37816,be=37817,xe=37818,Se=37819,Ce=37820,we=37821,Te=36492,Ee=36494,De=36495,Oe=36283,ke=36284,Ae=36285,je=36286,Me=2300,I=2301,Ne=2302,Pe=2303,Fe=2400,L=2401,Ie=2402,R=3200,Le=`srgb`,Re=`srgb-linear`,ze=`linear`,Be=`srgb`,Ve=7680,He=35044,Ue=2e3;function We(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ge(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ke(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qe(){let e=Ke(`canvas`);return e.style.display=`block`,e}var Je={};function Ye(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Xe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=Xe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ze(...e){let t=e.join(` `);t in Je||(Je[t]=!0,z(...e))}function Qe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var $e={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},et=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},tt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),nt=Math.PI/180,rt=180/Math.PI;function it(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(tt[e&255]+tt[e>>8&255]+tt[e>>16&255]+tt[e>>24&255]+`-`+tt[t&255]+tt[t>>8&255]+`-`+tt[t>>16&15|64]+tt[t>>24&255]+`-`+tt[n&63|128]+tt[n>>8&255]+`-`+tt[n>>16&255]+tt[n>>24&255]+tt[r&255]+tt[r>>8&255]+tt[r>>16&255]+tt[r>>24&255]).toLowerCase()}function V(e,t,n){return Math.max(t,Math.min(n,e))}function at(e,t){return(e%t+t)%t}function ot(e,t,n){return(1-n)*e+n*t}function st(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function ct(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var H=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(V(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ut.copy(this).projectOnVector(e),this.sub(ut)}reflect(e){return this.sub(ut.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ut=new U,dt=new lt,W=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ze(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ft.makeScale(e,t)),this}rotate(e){return Ze(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ft.makeRotation(-e)),this}translate(e,t){return Ze(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ft.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ft=new W,pt=new W().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mt=new W().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ht(){let e={enabled:!0,workingColorSpace:Re,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=_t(e.r),e.g=_t(e.g),e.b=_t(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=vt(e.r),e.g=vt(e.g),e.b=vt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ze:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Re]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:pt,fromXYZ:mt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:pt,fromXYZ:mt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),e}var gt=ht();function _t(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function vt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var yt,bt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yt===void 0&&(yt=Ke(`canvas`)),yt.width=e.width,yt.height=e.height;let t=yt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=yt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ke(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=_t(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(_t(t[e]/255)*255):t[e]=_t(t[e]);return{data:t,width:e.width,height:e.height}}return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},xt=0,St=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xt++}),this.uuid=it(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ct(r[t].image)):e.push(Ct(r[t]))}else e=Ct(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ct(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?bt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var wt=0,Tt=new U,Et=class r extends et{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wt++}),this.uuid=it(),this.name=``,this.source=new St(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new W,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tt).x}get height(){return this.source.getSize(Tt).y}get depth(){return this.source.getSize(Tt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Et.DEFAULT_IMAGE=null,Et.DEFAULT_MAPPING=300,Et.DEFAULT_ANISOTROPY=1;var Dt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this.w=V(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this.w=V(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ot=class extends et{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let r=new Et({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new St(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},kt=class extends Ot{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},At=class extends Et{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},jt=class extends Et{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Mt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Nt.setFromMatrixColumn(e,0).length(),i=1/Nt.setFromMatrixColumn(e,1).length(),a=1/Nt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ft,e,It)}lookAt(e,t,n){let r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Lt.crossVectors(n,zt),Lt.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Lt.crossVectors(n,zt)),Lt.normalize(),Rt.crossVectors(zt,Lt),r[0]=Lt.x,r[4]=Rt.x,r[8]=zt.x,r[1]=Lt.y,r[5]=Rt.y,r[9]=zt.y,r[2]=Lt.z,r[6]=Rt.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],A=r[10],j=r[14],te=r[3],M=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*O+c*te,i[4]=a*S+o*E+s*k+c*M,i[8]=a*C+o*D+s*A+c*ne,i[12]=a*w+o*ee+s*j+c*N,i[1]=l*x+u*T+d*O+f*te,i[5]=l*S+u*E+d*k+f*M,i[9]=l*C+u*D+d*A+f*ne,i[13]=l*w+u*ee+d*j+f*N,i[2]=p*x+m*T+h*O+g*te,i[6]=p*S+m*E+h*k+g*M,i[10]=p*C+m*D+h*A+g*ne,i[14]=p*w+m*ee+h*j+g*N,i[3]=_*x+v*T+y*O+b*te,i[7]=_*S+v*E+y*k+b*M,i[11]=_*C+v*D+y*A+b*ne,i[15]=_*w+v*ee+y*j+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Nt.set(r[0],r[1],r[2]).length(),o=Nt.set(r[4],r[5],r[6]).length(),s=Nt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Pt.copy(this);let c=1/a,l=1/o,u=1/s;return Pt.elements[0]*=c,Pt.elements[1]*=c,Pt.elements[2]*=c,Pt.elements[4]*=l,Pt.elements[5]*=l,Pt.elements[6]*=l,Pt.elements[8]*=u,Pt.elements[9]*=u,Pt.elements[10]*=u,t.setFromRotationMatrix(Pt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Nt=new U,Pt=new Mt,Ft=new U(0,0,0),It=new U(1,1,1),Lt=new U,Rt=new U,zt=new U,Bt=new Mt,Vt=new lt,Ht=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(V(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-V(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(V(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-V(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(V(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-V(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vt.setFromEuler(this),this.setFromQuaternion(Vt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ht.DEFAULT_ORDER=`XYZ`;var Ut=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Wt=0,Gt=new U,Kt=new lt,qt=new Mt,Jt=new U,Yt=new U,Xt=new U,Zt=new lt,Qt=new U(1,0,0),$t=new U(0,1,0),en=new U(0,0,1),tn={type:`added`},nn={type:`removed`},rn={type:`childadded`,child:null},an={type:`childremoved`,child:null},on=class e extends et{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wt++}),this.uuid=it(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new Ht,r=new lt,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Mt},normalMatrix:{value:new W}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ut,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kt.setFromAxisAngle(e,t),this.quaternion.multiply(Kt),this}rotateOnWorldAxis(e,t){return Kt.setFromAxisAngle(e,t),this.quaternion.premultiply(Kt),this}rotateX(e){return this.rotateOnAxis(Qt,e)}rotateY(e){return this.rotateOnAxis($t,e)}rotateZ(e){return this.rotateOnAxis(en,e)}translateOnAxis(e,t){return Gt.copy(e).applyQuaternion(this.quaternion),this.position.add(Gt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qt,e)}translateY(e){return this.translateOnAxis($t,e)}translateZ(e){return this.translateOnAxis(en,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jt.copy(e):Jt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Yt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qt.lookAt(Yt,Jt,this.up):qt.lookAt(Jt,Yt,this.up),this.quaternion.setFromRotationMatrix(qt),r&&(qt.extractRotation(r.matrixWorld),Kt.setFromRotationMatrix(qt),this.quaternion.premultiply(Kt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tn),rn.child=e,this.dispatchEvent(rn),rn.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nn),an.child=e,this.dispatchEvent(an),an.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tn),rn.child=e,this.dispatchEvent(rn),rn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yt,e,Xt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yt,Zt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};on.DEFAULT_UP=new U(0,1,0),on.DEFAULT_MATRIX_AUTO_UPDATE=!0,on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var G=class extends on{constructor(){super(),this.isGroup=!0,this.type=`Group`}},sn={type:`move`},cn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new G,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new G,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new G,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new G;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},dn={h:0,s:0,l:0};function fn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=at(e,1),t=V(t,0,1),n=V(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=fn(i,r,e+1/3),this.g=fn(i,r,e),this.b=fn(i,r,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Le){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Le){let n=ln[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_t(e.r),this.g=_t(e.g),this.b=_t(e.b),this}copyLinearToSRGB(e){return this.r=vt(e.r),this.g=vt(e.g),this.b=vt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return gt.workingToColorSpace(pn.copy(this),e),Math.round(V(pn.r*255,0,255))*65536+Math.round(V(pn.g*255,0,255))*256+Math.round(V(pn.b*255,0,255))}getHexString(e=Le){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(pn.copy(this),t);let n=pn.r,r=pn.g,i=pn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Le){gt.workingToColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,r=pn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(un),this.setHSL(un.h+e,un.s+t,un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(dn);let n=ot(un.h,dn.h,t),r=ot(un.s,dn.s,t),i=ot(un.l,dn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new K;K.NAMES=ln;var mn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new K(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},hn=class extends on{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ht,this.environmentIntensity=1,this.environmentRotation=new Ht,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},gn=new U,_n=new U,vn=new U,yn=new U,bn=new U,xn=new U,Sn=new U,Cn=new U,wn=new U,Tn=new U,En=new Dt,Dn=new Dt,On=new Dt,kn=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),gn.subVectors(e,t),r.cross(gn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){gn.subVectors(r,t),_n.subVectors(n,t),vn.subVectors(e,t);let a=gn.dot(gn),o=gn.dot(_n),s=gn.dot(vn),c=_n.dot(_n),l=_n.dot(vn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yn)!==null&&yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,yn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,yn.x),s.addScaledVector(a,yn.y),s.addScaledVector(o,yn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return En.setScalar(0),Dn.setScalar(0),On.setScalar(0),En.fromBufferAttribute(e,t),Dn.fromBufferAttribute(e,n),On.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(En,i.x),a.addScaledVector(Dn,i.y),a.addScaledVector(On,i.z),a}static isFrontFacing(e,t,n,r){return gn.subVectors(n,t),_n.subVectors(e,t),gn.cross(_n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),gn.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;bn.subVectors(r,n),xn.subVectors(i,n),Cn.subVectors(e,n);let s=bn.dot(Cn),c=xn.dot(Cn);if(s<=0&&c<=0)return t.copy(n);wn.subVectors(e,r);let l=bn.dot(wn),u=xn.dot(wn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(bn,a);Tn.subVectors(e,i);let f=bn.dot(Tn),p=xn.dot(Tn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(xn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Sn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Sn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(bn,a).addScaledVector(xn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},An=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Mn):Mn.fromBufferAttribute(r,t),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Nn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Nn.copy(e.boundingBox)),Nn.applyMatrix4(e.matrixWorld),this.union(Nn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bn),Vn.subVectors(this.max,Bn),Pn.subVectors(e.a,Bn),Fn.subVectors(e.b,Bn),In.subVectors(e.c,Bn),Ln.subVectors(Fn,Pn),Rn.subVectors(In,Fn),zn.subVectors(Pn,In);let t=[0,-Ln.z,Ln.y,0,-Rn.z,Rn.y,0,-zn.z,zn.y,Ln.z,0,-Ln.x,Rn.z,0,-Rn.x,zn.z,0,-zn.x,-Ln.y,Ln.x,0,-Rn.y,Rn.x,0,-zn.y,zn.x,0];return!Wn(t,Pn,Fn,In,Vn)||(t=[1,0,0,0,1,0,0,0,1],!Wn(t,Pn,Fn,In,Vn))?!1:(Hn.crossVectors(Ln,Rn),t=[Hn.x,Hn.y,Hn.z],Wn(t,Pn,Fn,In,Vn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},jn=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,Nn=new An,Pn=new U,Fn=new U,In=new U,Ln=new U,Rn=new U,zn=new U,Bn=new U,Vn=new U,Hn=new U,Un=new U;function Wn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Un.fromArray(e,a);let o=i.x*Math.abs(Un.x)+i.y*Math.abs(Un.y)+i.z*Math.abs(Un.z),s=t.dot(Un),c=n.dot(Un),l=r.dot(Un);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Gn=new U,Kn=new H,qn=0,q=class extends et{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=He,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix3(e),this.setXY(t,Kn.x,Kn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix3(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=st(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=st(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=st(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=st(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=st(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),r=ct(r,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Jn=class extends q{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Yn=class extends q{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Xn=class extends q{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zn=new An,Qn=new U,$n=new U,er=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Zn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qn.subVectors(e,this.center);let t=Qn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Qn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($n.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qn.copy(e.center).add($n)),this.expandByPoint(Qn.copy(e.center).sub($n))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tr=0,nr=new Mt,rr=new on,ir=new U,ar=new An,or=new An,sr=new U,cr=class e extends et{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tr++}),this.uuid=it(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(We(e)?Yn:Jn)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new W().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return nr.makeRotationFromQuaternion(e),this.applyMatrix4(nr),this}rotateX(e){return nr.makeRotationX(e),this.applyMatrix4(nr),this}rotateY(e){return nr.makeRotationY(e),this.applyMatrix4(nr),this}rotateZ(e){return nr.makeRotationZ(e),this.applyMatrix4(nr),this}translate(e,t,n){return nr.makeTranslation(e,t,n),this.applyMatrix4(nr),this}scale(e,t,n){return nr.makeScale(e,t,n),this.applyMatrix4(nr),this}lookAt(e){return rr.lookAt(e),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Xn(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ar.setFromBufferAttribute(n),this.morphTargetsRelative?(sr.addVectors(this.boundingBox.min,ar.min),this.boundingBox.expandByPoint(sr),sr.addVectors(this.boundingBox.max,ar.max),this.boundingBox.expandByPoint(sr)):(this.boundingBox.expandByPoint(ar.min),this.boundingBox.expandByPoint(ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(ar.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];or.setFromBufferAttribute(n),this.morphTargetsRelative?(sr.addVectors(ar.min,or.min),ar.expandByPoint(sr),sr.addVectors(ar.max,or.max),ar.expandByPoint(sr)):(ar.expandByPoint(or.min),ar.expandByPoint(or.max))}ar.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)sr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(sr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)sr.fromBufferAttribute(a,t),o&&(ir.fromBufferAttribute(e,t),sr.add(ir)),r=Math.max(r,n.distanceToSquared(sr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new q(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let c=new U,l=new U,u=new U,d=new H,f=new H,p=new H,m=new U,h=new U;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new U,y=new U,b=new U,x=new U;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new q(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sr.fromBufferAttribute(e,t),sr.normalize(),e.setXYZ(t,sr.x,sr.y,sr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new q(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},lr=new U,ur=new U,dr=new W,fr=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=lr.subVectors(n,t).cross(ur.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(lr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dr.getNormalMatrix(e),r=this.coplanarPoint(lr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pr=0,mr=class extends et{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pr++}),this.uuid=it(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ve,this.stencilZFail=Ve,this.stencilZPass=Ve,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new fr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},hr=new U,gr=new U,_r=new U,vr=new U,yr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,t),hr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gr.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(gr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(_r),o=vr.dot(this.direction),s=-vr.dot(_r),c=vr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(gr).addScaledVector(_r,d),f}intersectSphere(e,t){if(e.radius<0)return null;hr.subVectors(e.center,this.origin);let n=hr.dot(this.direction),r=hr.dot(hr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,A,j,te;if(y>=b&&y>=x?(w=s,D=u,k=p,te=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,A=_,j=v):(S=l,C=c,T=f,E=d,ee=h,O=m,A=v,j=_)):b>=x?(w=c,D=d,k=m,te=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,A=v,j=g):(S=s,C=l,T=u,E=f,ee=p,O=h,A=g,j=v)):(w=l,D=f,k=h,te=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,A=g,j=_):(S=c,C=s,T=d,E=u,ee=m,O=p,A=_,j=g)),w===0)return null;let M=S/w,ne=C/w,N=1/w,re=T-M*D,P=E-ne*D,ie=ee-M*k,ae=O-ne*k,oe=A-M*te,se=j-ne*te,ce=oe*ae-se*ie,F=re*se-P*oe,le=ie*P-ae*re;if(r){if(ce<0||F<0||le<0)return null}else if((ce<0||F<0||le<0)&&(ce>0||F>0||le>0))return null;let ue=ce+F+le;if(ue===0)return null;let de=N*(ce*D+F*k+le*te);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},br=class extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xr=new Mt,Sr=new yr,Cr=new er,wr=new U,Tr=new U,Er=new U,Dr=new U,Or=new U,kr=new U,Ar=new U,jr=new U,J=class extends on{constructor(e=new cr,t=new br){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){kr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Or.fromBufferAttribute(s,e),a?kr.addScaledVector(Or,r):kr.addScaledVector(Or.sub(t),r))}t.add(kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Sr.copy(e.ray).recast(e.near),!(Cr.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Cr,wr)===null||Sr.origin.distanceToSquared(wr)>(e.far-e.near)**2))&&(xr.copy(i).invert(),Sr.copy(e.ray).applyMatrix4(xr),(n.boundingBox===null||Sr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Sr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Nr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Nr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Nr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Nr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Mr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;jr.copy(s),jr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(jr);return l<n.near||l>n.far?null:{distance:l,point:jr.clone(),object:e}}function Nr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Tr),e.getVertexPosition(c,Er),e.getVertexPosition(l,Dr);let u=Mr(e,t,n,r,Tr,Er,Dr,Ar);if(u){let e=new U;kn.getBarycoord(Ar,Tr,Er,Dr,e),i&&(u.uv=kn.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=kn.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=kn.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};kn.getNormal(Tr,Er,Dr,t.normal),u.face=t,u.barycoord=e}return u}var Pr=class extends Et{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fr=class extends q{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ir=new Mt,Lr=new Mt,Rr=[],zr=new An,Br=new Mt,Vr=new J,Hr=new er,Ur=class extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Br)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),zr.copy(e.boundingBox).applyMatrix4(Ir),this.boundingBox.union(zr)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),Hr.copy(e.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ir),Lr.multiplyMatrices(n,Ir),Vr.matrixWorld=Lr,Vr.raycast(e,Rr);for(let e=0,n=Rr.length;e<n;e++){let n=Rr[e];n.instanceId=i,n.object=this,t.push(n)}Rr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pr(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wr=new er,Gr=new H(.5,.5),Kr=new U,qr=class{constructor(e=new fr,t=new fr,n=new fr,r=new fr,i=new fr,a=new fr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ue,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476+Gr.distanceTo(e.center),Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Kr.x=r.normal.x>0?e.max.x:e.min.x,Kr.y=r.normal.y>0?e.max.y:e.min.y,Kr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Jr=class extends mr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yr=new Mt,Xr=new yr,Zr=new er,Qr=new U,$r=class extends on{constructor(e=new cr,t=new Jr){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Zr.radius+=i,e.ray.intersectsSphere(Zr)===!1)return;Yr.copy(r).invert(),Xr.copy(e.ray).applyMatrix4(Yr);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Qr.fromBufferAttribute(l,n),ei(Qr,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Qr.fromBufferAttribute(l,a),ei(Qr,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ei(e,t,n,r,i,a,o){let s=Xr.distanceSqToPoint(e);if(s<n){let n=new U;Xr.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ti=class extends Et{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ni=class extends Et{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ri=class extends Et{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new St(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ii=class extends ri{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ai=class extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},oi=class e extends cr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Xn(c,3)),this.setAttribute(`normal`,new Xn(l,3)),this.setAttribute(`uv`,new Xn(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},si=class e extends cr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new U,l=new H;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Xn(a,3)),this.setAttribute(`normal`,new Xn(o,3)),this.setAttribute(`uv`,new Xn(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Y=class e extends cr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Xn(u,3)),this.setAttribute(`normal`,new Xn(d,3)),this.setAttribute(`uv`,new Xn(f,2));function _(){let a=new U,_=new U,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new H,m=new U,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ci=class e extends Y{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},li=class e extends cr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Xn(i,3)),this.setAttribute(`normal`,new Xn(i.slice(),3)),this.setAttribute(`uv`,new Xn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new U,r=new U,i=new U;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new U;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new U;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new U,t=new U,n=new U,r=new U,o=new H,s=new H,c=new H;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},ui=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){z(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new H:new U);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,r=[],i=[],a=[],o=new U,s=new Mt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new U)}i[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(V(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(V(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},di=class extends ui{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new H){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fi=class extends di{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function pi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var mi=new U,hi=new U,gi=new pi,_i=new pi,vi=new pi,yi=class extends ui{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(hi.subVectors(r[0],r[1]).add(r[0]),c=hi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(mi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=mi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),gi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),_i.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),vi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(gi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),_i.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),vi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(gi.calc(s),_i.calc(s),vi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function bi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function xi(e,t){let n=1-e;return n*n*t}function Si(e,t){return 2*(1-e)*e*t}function Ci(e,t){return e*e*t}function wi(e,t,n,r){return xi(e,t)+Si(e,n)+Ci(e,r)}function Ti(e,t){let n=1-e;return n*n*n*t}function Ei(e,t){let n=1-e;return 3*n*n*e*t}function Di(e,t){return 3*(1-e)*e*e*t}function Oi(e,t){return e*e*e*t}function ki(e,t,n,r,i){return Ti(e,t)+Ei(e,n)+Di(e,r)+Oi(e,i)}var Ai=class extends ui{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ki(e,r.x,i.x,a.x,o.x),ki(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ji=class extends ui{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ki(e,r.x,i.x,a.x,o.x),ki(e,r.y,i.y,a.y,o.y),ki(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mi=class extends ui{constructor(e=new H,t=new H){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ni=class extends ui{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pi=class extends ui{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(wi(e,r.x,i.x,a.x),wi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fi=class extends ui{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(wi(e,r.x,i.x,a.x),wi(e,r.y,i.y,a.y),wi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ii=class extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new H){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(bi(o,s.x,c.x,l.x,u.x),bi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this}},Li=Object.freeze({__proto__:null,ArcCurve:fi,CatmullRomCurve3:yi,CubicBezierCurve:Ai,CubicBezierCurve3:ji,EllipseCurve:di,LineCurve:Mi,LineCurve3:Ni,QuadraticBezierCurve:Pi,QuadraticBezierCurve3:Fi,SplineCurve:Ii}),Ri=class extends ui{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Li[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Li[n.type]().fromJSON(n))}return this}},zi=class extends Ri{constructor(e){super(),this.type=`Path`,this.currentPoint=new H,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Mi(this.currentPoint.clone(),new H(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Pi(this.currentPoint.clone(),new H(e,t),new H(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Ai(this.currentPoint.clone(),new H(e,t),new H(n,r),new H(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ii([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new di(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bi=class extends zi{constructor(e){super(e),this.uuid=it(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new zi().fromJSON(n))}return this}};function Vi(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Hi(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Yi(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Wi(a,o,n,s,c,l,0),o}function Hi(e,t,n,r,i){let a;if(i===ya(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=ga(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=ga(i/r|0,e[i],e[i+1],a);return a&&ca(a,a.next)&&(_a(a),a=a.next),a}function Ui(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(ca(n,n.next)||sa(n.prev,n,n.next)===0)){if(_a(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Wi(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ea(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ki(e,r,i,a):Gi(e)){t.push(c.i,e.i,l.i),_a(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=qi(Ui(e),t),Wi(e,t,n,r,i,a,2)):o===2&&Ji(e,t,n,r,i,a):Wi(Ui(e),t,n,r,i,a,1);break}}}function Gi(e){let t=e.prev,n=e,r=e.next;if(sa(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&aa(i,s,a,c,o,l,m.x,m.y)&&sa(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ki(e,t,n,r){let i=e.prev,a=e,o=e.next;if(sa(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=na(p,m,t,n,r),v=na(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&aa(s,u,c,d,l,f,y.x,y.y)&&sa(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&aa(s,u,c,d,l,f,b.x,b.y)&&sa(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&aa(s,u,c,d,l,f,y.x,y.y)&&sa(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&aa(s,u,c,d,l,f,b.x,b.y)&&sa(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function qi(e,t){let n=e;do{let r=n.prev,i=n.next.next;!ca(r,i)&&la(r,n,n.next,i)&&pa(r,i)&&pa(i,r)&&(t.push(r.i,n.i,i.i),_a(n),_a(n.next),n=e=i),n=n.next}while(n!==e);return Ui(n)}function Ji(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&oa(o,e)){let s=ha(o,e);o=Ui(o,o.next),s=Ui(s,s.next),Wi(o,t,n,r,i,a,0),Wi(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Yi(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Hi(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ra(o))}i.sort(Xi);for(let e=0;e<i.length;e++)n=Zi(i[e],n);return n}function Xi(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Zi(e,t){let n=Qi(e,t);if(!n)return t;let r=ha(n,e);return Ui(r,r.next),Ui(n,n.next)}function Qi(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(ca(e,n))return n;do{if(ca(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ia(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);pa(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&$i(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function $i(e,t){return sa(e.prev,e,t.prev)<0&&sa(t.next,e,e.next)<0}function ea(e,t,n,r){let i=e;do i.z===0&&(i.z=na(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ta(i)}function ta(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function na(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ra(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ia(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function aa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ia(e,t,n,r,i,a,o,s)}function oa(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!fa(e,t)&&(pa(e,t)&&pa(t,e)&&ma(e,t)&&(sa(e.prev,e,t.prev)||sa(e,t.prev,t))||ca(e,t)&&sa(e.prev,e,e.next)>0&&sa(t.prev,t,t.next)>0)}function sa(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ca(e,t){return e.x===t.x&&e.y===t.y}function la(e,t,n,r){let i=da(sa(e,t,n)),a=da(sa(e,t,r)),o=da(sa(n,r,e)),s=da(sa(n,r,t));return!!(i!==a&&o!==s||i===0&&ua(e,n,t)||a===0&&ua(e,r,t)||o===0&&ua(n,e,r)||s===0&&ua(n,t,r))}function ua(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function da(e){return e>0?1:e<0?-1:0}function fa(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&la(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function pa(e,t){return sa(e.prev,e,e.next)<0?sa(e,t,e.next)>=0&&sa(e,e.prev,t)>=0:sa(e,t,e.prev)<0||sa(e,e.next,t)<0}function ma(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function ha(e,t){let n=va(e.i,e.x,e.y),r=va(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function ga(e,t,n,r){let i=va(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function _a(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function va(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ya(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var ba=class{static triangulate(e,t,n=2){return Vi(e,t,n)}},xa=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Sa(e),Ca(n,e);let a=e.length;t.forEach(Sa);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ca(n,t[e]);let o=ba.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Sa(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ca(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var wa=class e extends li{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ta=class e extends cr{constructor(e=[new H(0,-.5),new H(.5,0),new H(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=V(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new U,d=new H,f=new U,p=new U,m=new U,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Xn(a,3)),this.setAttribute(`uv`,new Xn(o,2)),this.setAttribute(`normal`,new Xn(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Ea=class e extends li{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Da=class e extends cr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Xn(p,3)),this.setAttribute(`normal`,new Xn(m,3)),this.setAttribute(`uv`,new Xn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Oa=class e extends cr{constructor(e=new Bi([new H(0,.5),new H(-.5,-.5),new H(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Xn(r,3)),this.setAttribute(`normal`,new Xn(i,3)),this.setAttribute(`uv`,new Xn(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;xa.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];xa.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=xa.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ka(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function ka(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Aa=class e extends cr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new U,d=new U,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Xn(p,3)),this.setAttribute(`normal`,new Xn(m,3)),this.setAttribute(`uv`,new Xn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ja=class e extends cr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new U,f=new U,p=new U;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Xn(c,3)),this.setAttribute(`normal`,new Xn(l,3)),this.setAttribute(`uv`,new Xn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ma(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Pa(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Pa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Na(e){let t={};for(let n=0;n<e.length;n++){let r=Ma(e[n]);for(let e in r)t[e]=r[e]}return t}function Pa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Fa(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ia(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:gt.workingColorSpace}var La={clone:Ma,merge:Na},Ra=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,za=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ba=class extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ra,this.fragmentShader=za,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=Fa(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Dt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Mt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Va=class extends Ba{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ha=class extends mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ua=class extends mr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wa=class extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=R,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ga=class extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ka(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function qa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ja=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ya=class extends Ja{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fe,endingEnd:Fe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case L:i=e,o=2*t-n;break;case Ie:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case L:a=e,s=2*n-t;break;case Ie:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Xa=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Za=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Qa=class extends Ja{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=to(n,t,g,y,r);i[p]=$a(x,o,_,b,m)}return i}};function $a(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function eo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function to(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=$a(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=eo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var no=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ka(t,this.TimeBufferType),this.values=Ka(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ka(e.times,Array),values:Ka(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),qa(e.settings)&&(n.settings={inTangents:Ka(e.settings.inTangents,Array),outTangents:Ka(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Me:t=this.InterpolantFactoryMethodDiscrete;break;case I:t=this.InterpolantFactoryMethodLinear;break;case Ne:t=this.InterpolantFactoryMethodSmooth;break;case Pe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Me;case this.InterpolantFactoryMethodLinear:return I;case this.InterpolantFactoryMethodSmooth:return Ne;case this.InterpolantFactoryMethodBezier:return Pe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;qa(this.settings)&&(ro(this.settings.inTangents,e),ro(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ge(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ne,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,qa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ro(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}no.prototype.ValueTypeName=``,no.prototype.TimeBufferType=Float32Array,no.prototype.ValueBufferType=Float32Array,no.prototype.DefaultInterpolation=I;var io=class extends no{constructor(e,t,n){super(e,t,n)}};io.prototype.ValueTypeName=`bool`,io.prototype.ValueBufferType=Array,io.prototype.DefaultInterpolation=Me,io.prototype.InterpolantFactoryMethodLinear=void 0,io.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends no{constructor(e,t,n,r){super(e,t,n,r)}};ao.prototype.ValueTypeName=`color`;var oo=class extends no{constructor(e,t,n,r){super(e,t,n,r)}};oo.prototype.ValueTypeName=`number`;var so=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)lt.slerpFlat(i,0,a,c-o,a,c,s);return i}},co=class extends no{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new so(this.times,this.values,this.getValueSize(),e)}};co.prototype.ValueTypeName=`quaternion`,co.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends no{constructor(e,t,n){super(e,t,n)}};lo.prototype.ValueTypeName=`string`,lo.prototype.ValueBufferType=Array,lo.prototype.DefaultInterpolation=Me,lo.prototype.InterpolantFactoryMethodLinear=void 0,lo.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends no{constructor(e,t,n,r){super(e,t,n,r)}};uo.prototype.ValueTypeName=`vector`;var fo=class extends on{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},po=class extends fo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},mo=new Mt,ho=new U,go=new U,_o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qr,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ho.setFromMatrixPosition(e.matrixWorld),t.position.copy(ho),go.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(go),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(mo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vo=new U,yo=new lt,bo=new U,xo=class extends on{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Ue,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vo,yo,bo),bo.x===1&&bo.y===1&&bo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,bo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vo,yo,bo),bo.x===1&&bo.y===1&&bo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,bo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},So=new U,Co=new H,wo=new H,To=class extends xo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rt*2*Math.atan(Math.tan(nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){So.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(So.x,So.y).multiplyScalar(-e/So.z),So.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(So.x,So.y).multiplyScalar(-e/So.z)}getViewSize(e,t){return this.getViewBounds(e,Co,wo),t.subVectors(wo,Co)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Eo=class extends _o{constructor(){super(new To(90,1,.5,500)),this.isPointLightShadow=!0}},Do=class extends fo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Eo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Oo=class extends xo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ko=class extends _o{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ao=class extends fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new ko}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},jo=-90,Mo=1,No=class extends on{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new To(jo,Mo,e,t);r.layers=this.layers,this.add(r);let i=new To(jo,Mo,e,t);i.layers=this.layers,this.add(i);let a=new To(jo,Mo,e,t);a.layers=this.layers,this.add(a);let o=new To(jo,Mo,e,t);o.layers=this.layers,this.add(o);let s=new To(jo,Mo,e,t);s.layers=this.layers,this.add(s);let c=new To(jo,Mo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Po=class extends To{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Fo=`\\[\\]\\.:\\/`,Io=RegExp(`[\\[\\]\\.:\\/]`,`g`),Lo=`[^\\[\\]\\.:\\/]`,Ro=`[^`+Fo.replace(`\\.`,``)+`]`,zo=`((?:WC+[\\/:])*)`.replace(`WC`,Lo),Bo=`(WCOD+)?`.replace(`WCOD`,Ro),Vo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Lo),Ho=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Lo),Uo=RegExp(`^`+zo+Bo+Vo+Ho+`$`),Wo=[`material`,`materials`,`bones`,`map`],Go=class{constructor(e,t,n){let r=n||Ko.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ko=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Io,``)}static parseTrackName(e){let t=Uo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Wo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ko.Composite=Go,Ko.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ko.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ko.prototype.GetterByBindingType=[Ko.prototype._getValue_direct,Ko.prototype._getValue_array,Ko.prototype._getValue_arrayElement,Ko.prototype._getValue_toArray],Ko.prototype.SetterByBindingTypeAndVersioning=[[Ko.prototype._setValue_direct,Ko.prototype._setValue_direct_setNeedsUpdate,Ko.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ko.prototype._setValue_array,Ko.prototype._setValue_array_setNeedsUpdate,Ko.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ko.prototype._setValue_arrayElement,Ko.prototype._setValue_arrayElement_setNeedsUpdate,Ko.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ko.prototype._setValue_fromArray,Ko.prototype._setValue_fromArray_setNeedsUpdate,Ko.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function qo(e,t,n,r){let i=Jo(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case A:return e*t*4/i.components*i.byteLength;case j:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ie:return Math.max(e,16)*Math.max(t,8)/4;case N:case P:return Math.max(e,8)*Math.max(t,8)/2;case ae:case oe:case ce:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case se:case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Te:case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Jo(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Yo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Xo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Zo={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new W}},envmap:{envMap:{value:null},envMapRotation:{value:new W},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new W}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new W}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new W},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new W},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new W},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new W}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new W}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new W}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0},uvTransform:{value:new W}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}}},Qo={basic:{uniforms:Na([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Zo.meshbasic_vert,fragmentShader:Zo.meshbasic_frag},lambert:{uniforms:Na([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:Zo.meshlambert_vert,fragmentShader:Zo.meshlambert_frag},phong:{uniforms:Na([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zo.meshphong_vert,fragmentShader:Zo.meshphong_frag},standard:{uniforms:Na([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zo.meshphysical_vert,fragmentShader:Zo.meshphysical_frag},toon:{uniforms:Na([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new K(0)}}]),vertexShader:Zo.meshtoon_vert,fragmentShader:Zo.meshtoon_frag},matcap:{uniforms:Na([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Zo.meshmatcap_vert,fragmentShader:Zo.meshmatcap_frag},points:{uniforms:Na([X.points,X.fog]),vertexShader:Zo.points_vert,fragmentShader:Zo.points_frag},dashed:{uniforms:Na([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zo.linedashed_vert,fragmentShader:Zo.linedashed_frag},depth:{uniforms:Na([X.common,X.displacementmap]),vertexShader:Zo.depth_vert,fragmentShader:Zo.depth_frag},normal:{uniforms:Na([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Zo.meshnormal_vert,fragmentShader:Zo.meshnormal_frag},sprite:{uniforms:Na([X.sprite,X.fog]),vertexShader:Zo.sprite_vert,fragmentShader:Zo.sprite_frag},background:{uniforms:{uvTransform:{value:new W},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zo.background_vert,fragmentShader:Zo.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new W}},vertexShader:Zo.backgroundCube_vert,fragmentShader:Zo.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zo.cube_vert,fragmentShader:Zo.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zo.equirect_vert,fragmentShader:Zo.equirect_frag},distance:{uniforms:Na([X.common,X.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zo.distance_vert,fragmentShader:Zo.distance_frag},shadow:{uniforms:Na([X.lights,X.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:Zo.shadow_vert,fragmentShader:Zo.shadow_frag}};Qo.physical={uniforms:Na([Qo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new W},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new W},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new W},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new W},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new W},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new W},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new W},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new W},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new W},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new W},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new W},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new W}}]),vertexShader:Zo.meshphysical_vert,fragmentShader:Zo.meshphysical_frag};var $o={r:0,b:0,g:0},es=new Mt,ts=new W;ts.set(-1,0,0,0,1,0,0,0,1);function ns(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new J(new oi(1,1,1),new Ba({name:`BackgroundCubeMaterial`,uniforms:Ma(Qo.backgroundCube.uniforms),vertexShader:Qo.backgroundCube.vertexShader,fragmentShader:Qo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(es.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ts),l.material.toneMapped=gt.getTransfer(i.colorSpace)!==Be,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new J(new Da(2,2),new Ba({name:`BackgroundMaterial`,uniforms:Ma(Qo.background.uniforms),vertexShader:Qo.background.vertexShader,fragmentShader:Qo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=gt.getTransfer(i.colorSpace)!==Be,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB($o,Ia(e)),n.buffers.color.setClear($o.r,$o.g,$o.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function rs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function is(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function as(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function os(e){let t=this,n=null,r=0,i=!1,a=!1,o=new fr,s=new W,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ss=4,cs=6,ls=20,us=256,ds=new Oo,fs=new K,ps=null,ms=0,hs=0,gs=!1,_s=new U,vs=new U,ys=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=_s}=i;ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Es(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ts(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ps,ms,hs),this._renderer.xr.enabled=gs,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Re,depthBuffer:!1},r=xs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=bs(r)),this._blurMaterial=ws(r,e,t),this._ggxMaterial=Cs(r,e,t)}return r}_compileMaterial(e){let t=new J(new cr,e);this._renderer.compile(t,ds)}_sceneToCubeUV(e,t,n,r,i){let a=new To(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(fs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new oi,new br({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(fs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ss(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Es()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ts());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ss(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ds)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ss?n-d+ss:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ss(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ds),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ss(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ds)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Ss(t,3*l*(r>this._lodMax-ss?r-this._lodMax+ss:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,ds)}};function bs(e){let t=[],n=[],r=e,i=e-ss+1+cs;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?vs.set(1,r,n):e===1?vs.set(-n,1,-r):e===2?vs.set(-n,r,1):e===3?vs.set(-1,r,-n):e===4?vs.set(-n,-1,r):vs.set(n,r,-1),vs.toArray(l,(e*6+t)*3)}}let u=new cr;u.setAttribute(`position`,new q(c,3)),u.setAttribute(`outputDirection`,new q(l,3)),n.push(new J(u,null)),r>ss&&r--}return{lodMeshes:n,sizeLods:t}}function xs(e,t,n){let r=new kt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ss(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Cs(e,t,n){return new Ba({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ds(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ws(e,t,n){return new Ba({name:`SphericalGaussianBlur`,defines:{SAMPLES:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ds(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ts(){return new Ba({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Es(){return new Ba({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ds(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Os=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ti(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oi(5,5,5),i=new Ba({name:`CubemapFromEquirect`,uniforms:Ma(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new J(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new No(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ks(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Os(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ys(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ys(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function As(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ze(`WebGLRenderer: `+e+` extension not supported.`),t}}}function js(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Yn:Jn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ms(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ns(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ps(e,t,n){let r=new WeakMap,i=new Dt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new At(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new H(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Fs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Is={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ls(e,t,n,r,i,a){let o=new kt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new cr;l.setAttribute(`position`,new Xn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Xn([0,2,0,0,2,0],2));let u=new Va({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new J(l,u),f=new Oo(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new kt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new kt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},gt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Is[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Rs=new Et,zs=new ri(1,1),Bs=new At,Vs=new jt,Hs=new ti,Us=[],Ws=[],Gs=new Float32Array(16),Ks=new Float32Array(9),qs=new Float32Array(4);function Js(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Us[i];if(a===void 0&&(a=new Float32Array(i),Us[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ys(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Xs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Zs(e,t){let n=Ws[t];n===void 0&&(n=new Int32Array(t),Ws[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Qs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function $s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ys(n,t))return;e.uniform2fv(this.addr,t),Xs(n,t)}}function ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ys(n,t))return;e.uniform3fv(this.addr,t),Xs(n,t)}}function tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ys(n,t))return;e.uniform4fv(this.addr,t),Xs(n,t)}}function nc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ys(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Xs(n,t)}else{if(Ys(n,r))return;qs.set(r),e.uniformMatrix2fv(this.addr,!1,qs),Xs(n,r)}}function rc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ys(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Xs(n,t)}else{if(Ys(n,r))return;Ks.set(r),e.uniformMatrix3fv(this.addr,!1,Ks),Xs(n,r)}}function ic(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ys(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Xs(n,t)}else{if(Ys(n,r))return;Gs.set(r),e.uniformMatrix4fv(this.addr,!1,Gs),Xs(n,r)}}function ac(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ys(n,t))return;e.uniform2iv(this.addr,t),Xs(n,t)}}function sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ys(n,t))return;e.uniform3iv(this.addr,t),Xs(n,t)}}function cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ys(n,t))return;e.uniform4iv(this.addr,t),Xs(n,t)}}function lc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ys(n,t))return;e.uniform2uiv(this.addr,t),Xs(n,t)}}function dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ys(n,t))return;e.uniform3uiv(this.addr,t),Xs(n,t)}}function fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ys(n,t))return;e.uniform4uiv(this.addr,t),Xs(n,t)}}function pc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(zs.compareFunction=n.isReversedDepthBuffer()?518:515,a=zs):a=Rs,n.setTexture2D(t||a,i)}function mc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Vs,i)}function hc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Hs,i)}function gc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Bs,i)}function _c(e){switch(e){case 5126:return Qs;case 35664:return $s;case 35665:return ec;case 35666:return tc;case 35674:return nc;case 35675:return rc;case 35676:return ic;case 5124:case 35670:return ac;case 35667:case 35671:return oc;case 35668:case 35672:return sc;case 35669:case 35673:return cc;case 5125:return lc;case 36294:return uc;case 36295:return dc;case 36296:return fc;case 35678:case 36198:case 36298:case 36306:case 35682:return pc;case 35679:case 36299:case 36307:return mc;case 35680:case 36300:case 36308:case 36293:return hc;case 36289:case 36303:case 36311:case 36292:return gc}}function vc(e,t){e.uniform1fv(this.addr,t)}function yc(e,t){let n=Js(t,this.size,2);e.uniform2fv(this.addr,n)}function bc(e,t){let n=Js(t,this.size,3);e.uniform3fv(this.addr,n)}function xc(e,t){let n=Js(t,this.size,4);e.uniform4fv(this.addr,n)}function Sc(e,t){let n=Js(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Cc(e,t){let n=Js(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function wc(e,t){let n=Js(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Tc(e,t){e.uniform1iv(this.addr,t)}function Ec(e,t){e.uniform2iv(this.addr,t)}function Dc(e,t){e.uniform3iv(this.addr,t)}function Oc(e,t){e.uniform4iv(this.addr,t)}function kc(e,t){e.uniform1uiv(this.addr,t)}function Ac(e,t){e.uniform2uiv(this.addr,t)}function jc(e,t){e.uniform3uiv(this.addr,t)}function Mc(e,t){e.uniform4uiv(this.addr,t)}function Nc(e,t,n){let r=this.cache,i=t.length,a=Zs(n,i);Ys(r,a)||(e.uniform1iv(this.addr,a),Xs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?zs:Rs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Pc(e,t,n){let r=this.cache,i=t.length,a=Zs(n,i);Ys(r,a)||(e.uniform1iv(this.addr,a),Xs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Vs,a[e])}function Fc(e,t,n){let r=this.cache,i=t.length,a=Zs(n,i);Ys(r,a)||(e.uniform1iv(this.addr,a),Xs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Hs,a[e])}function Ic(e,t,n){let r=this.cache,i=t.length,a=Zs(n,i);Ys(r,a)||(e.uniform1iv(this.addr,a),Xs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Bs,a[e])}function Lc(e){switch(e){case 5126:return vc;case 35664:return yc;case 35665:return bc;case 35666:return xc;case 35674:return Sc;case 35675:return Cc;case 35676:return wc;case 5124:case 35670:return Tc;case 35667:case 35671:return Ec;case 35668:case 35672:return Dc;case 35669:case 35673:return Oc;case 5125:return kc;case 36294:return Ac;case 36295:return jc;case 36296:return Mc;case 35678:case 36198:case 36298:case 36306:case 35682:return Nc;case 35679:case 36299:case 36307:return Pc;case 35680:case 36300:case 36308:case 36293:return Fc;case 36289:case 36303:case 36311:case 36292:return Ic}}var Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_c(t.type)}},zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lc(t.type)}},Bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Vc=/(\w+)(\])?(\[|\.)?/g;function Hc(e,t){e.seq.push(t),e.map[t.id]=t}function Uc(e,t,n){let r=e.name,i=r.length;for(Vc.lastIndex=0;;){let a=Vc.exec(r),o=Vc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Hc(n,l===void 0?new Rc(s,e,t):new zc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Bc(s),Hc(n,e)),n=e}}}var Wc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Uc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Gc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Kc=37297,qc=0;function Jc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Yc=new W;function Xc(e){gt._getMatrix(Yc,gt.workingColorSpace,e);let t=`mat3( ${Yc.elements.map(e=>e.toFixed(4))} )`;switch(gt.getTransfer(e)){case ze:return[t,`LinearTransferOETF`];case Be:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Zc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Jc(e.getShaderSource(t),r)}return i}function Qc(e,t){let n=Xc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var $c={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function el(e,t){let n=$c[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var tl=new U;function nl(){return gt.getLuminanceCoefficients(tl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${tl.x.toFixed(4)}, ${tl.y.toFixed(4)}, ${tl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function rl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ol).join(`
`)}function il(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function al(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ol(e){return e!==``}function sl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ll=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(e){return e.replace(ll,fl)}var dl=new Map;function fl(e,t){let n=Zo[t];if(n===void 0){let e=dl.get(t);if(e!==void 0)n=Zo[e],z(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ul(n)}var pl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(e){return e.replace(pl,hl)}function hl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function gl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var _l={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function vl(e){return _l[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var yl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function bl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:yl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var xl={302:`ENVMAP_MODE_REFRACTION`};function Sl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:xl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Cl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function wl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Cl[e.combine]||`ENVMAP_BLENDING_NONE`}function Tl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function El(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=vl(n),l=bl(n),u=Sl(n),d=wl(n),f=Tl(n),p=rl(n),m=il(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ol).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ol).join(`
`),_.length>0&&(_+=`
`)):(g=[gl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ol).join(`
`),_=[gl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Zo.tonemapping_pars_fragment,n.toneMapping===0?``:el(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Zo.colorspace_pars_fragment,Qc(`linearToOutputTexel`,n.outputColorSpace),nl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ol).join(`
`)),o=ul(o),o=sl(o,n),o=cl(o,n),s=ul(s),s=sl(s,n),s=cl(s,n),o=ml(o),s=ml(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Gc(i,i.VERTEX_SHADER,y),S=Gc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Zc(i,x,`vertex`),n=Zc(i,S,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Wc(i,h),T=al(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Kc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Dl=0,Ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kl(e),t.set(e,n)),n}},kl=class{constructor(e){this.id=Dl++,this.code=e,this.usedTimes=0}};function Al(e){return e===1030||e===37490||e===36285}function jl(e,t,n,r,i,a){let o=new Ut,s=new Ol,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=Qo[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),te=h.isInstancedMesh===!0,M=h.isBatchedMesh===!0,ne=!!i.map,N=!!i.matcap,re=!!x,P=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,le=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=ue&&!!i.anisotropyMap,ve=de&&!!i.clearcoatMap,ye=de&&!!i.clearcoatNormalMap,be=de&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,Me=i.alphaTest>0,I=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:M,batchingColor:M&&h._colorsTexture!==null,instancing:te,instancingColor:te&&h.instanceColor!==null,instancingMorph:te&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:N,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:P,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Al(i.normalMap.format),metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:_e,clearcoat:de,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:I,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:P&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:oe&&m(i.normalMap.channel),displacementMapUv:se&&m(i.displacementMap.channel),emissiveMapUv:ce&&m(i.emissiveMap.channel),metalnessMapUv:F&&m(i.metalnessMap.channel),roughnessMapUv:le&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:je&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(oe||ue),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||je),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&gt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&gt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Qo[t];n=La.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new El(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Ml(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Nl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Pl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Nl),r.length>1&&r.sort(t||Pl),i.length>1&&i.sort(t||Pl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Il(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Fl,e.set(t,[i])):n>=r.length?(i=new Fl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ll(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new U,color:new K};break;case`SpotLight`:n={position:new U,direction:new U,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function Rl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var zl=0;function Bl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Vl(e){let t=new Ll,n=Rl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new Mt,o=new Mt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Bl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=zl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Hl(e){let t=new Vl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ul(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Hl(e),t.set(n,[a])):r>=i.length?(a=new Hl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kl=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],ql=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Jl=new Mt,Yl=new U,Xl=new U;function Zl(e,t,n){let i=new qr,a=new H,s=new H,c=new Dt,l=new Wa,u=new Ga,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:Wl,fragmentShader:Gl}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new cr;y.setAttribute(`position`,new q(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new J(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){z(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new kt(a.x,a.y,{format:O,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ri(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Os(a.x),p.map.depthTexture=new ii(a.x,m)):(p.map=new kt(a.x,a.y),p.map.depthTexture=new ri(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Yl.setFromMatrixPosition(d.matrixWorld),e.position.copy(Yl),Xl.copy(e.position),Xl.add(Kl[t]),e.up.copy(ql[t]),e.lookAt(Xl),e.updateMatrixWorld(),n.makeTranslation(-Yl.x,-Yl.y,-Yl.z),Jl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Jl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new kt(a.x,a.y,{format:O,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ql(e,t){function n(){let t=!1,n=new Dt,r=null,i=new Dt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=$e[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=M>=1);let N=null,re={},P=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Dt().fromArray(P),oe=new Dt().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),F(e.CULL_FACE),he(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(le(e.BLEND),g=!1);return}if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?le(e.CULL_FACE):(F(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function ye(t){t!==O&&(te&&e.lineWidth(t),O=t)}function be(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?F(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function Ce(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function we(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function I(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function L(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Ie(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function R(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:I,texImage3D:Ne,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:R,uniformBlockBinding:Le,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:L,viewport:Ie,reset:Re}}function $l(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new H,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ke(`canvas`)}function T(e,t,n){let r=1,i=Pe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function ee(e){l.generateMipmap(e)}function O(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function k(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?ze:gt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function A(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),re(t)}function ne(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function N(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function re(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let P=0;function ie(){P=0}function ae(){return P}function oe(e){P=e}function se(){let e=P;return e>=p.maxTextures&&z(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),P+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function F(e,t){let n=f.get(e);if(e.isVideoTexture&&I(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function le(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){ye(n,e,t);return}e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function ue(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){ye(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){be(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let fe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},pe={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},me={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function he(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,fe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,fe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,fe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,pe[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,pe[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,me[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ge(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,te));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ce(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&N(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=_e(r.start,t.width,4),c=_e(n.start,t.width,4);r.start<=o+1&&s===c&&_e(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function ye(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ge(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=gt.getPrimaries(gt.workingColorSpace),n=t.colorSpace===``?null:gt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Ne(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=k(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);he(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=A(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ve(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=qo(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=qo(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Pe(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Pe(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&ee(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function be(e,t,n){if(t.image.length!==6)return;let r=ge(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=gt.getPrimaries(gt.workingColorSpace),o=t.colorSpace===``?null:gt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ne(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=k(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);he(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Pe(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&ee(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function xe(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=k(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,je(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Se(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=A(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Me(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,je(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,je(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=k(i.internalFormat,a,o,i.normalized,i.colorSpace);Me(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,je(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,je(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ce(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,te)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),he(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else F(t.depthTexture,0);let a=i.__webglTexture,o=je(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Ce(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Ce(t.__webglFramebuffer[0],e,0):Ce(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Se(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Se(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Te(e,t,n){let r=f.get(e);t!==void 0&&xe(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&we(e)}function Ee(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,M);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Me(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=k(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=je(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Se(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),he(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)xe(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else xe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&ee(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),he(o,r),xe(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&ee(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),he(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)xe(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else xe(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&ee(i),d.unbindTexture()}e.depthBuffer&&we(e)}function De(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=O(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),ee(t),d.unbindTexture()}}}let Oe=[],ke=[];function Ae(e){if(e.samples>0){if(Me(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Oe.length=0,ke.length=0,Oe.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(Oe.push(a),ke.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,ke)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Oe))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function je(e){return Math.min(p.maxSamples,e.samples)}function Me(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function I(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ne(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(gt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function Pe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=oe,this.setTexture2D=F,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function eu(e,t){function n(n,r=``){let i,a=gt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var tu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ai(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ba({vertexShader:tu,fragmentShader:nu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new Da(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},iu=class extends et{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new ru,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new H,O=null,k=null,A=new To;A.viewport=new Dt;let j=new To;j.viewport=new Dt;let te=[A,j],M=new Po,ne=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new cn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new cn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new cn,C[e]=t),t.getHandSpace()};function re(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function P(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,P),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ne=null,N=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(ee.width,ee.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,P),r.addEventListener(`inputsourceschange`,ie),b.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new kt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new ri(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new kt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ae=new U,oe=new U;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=A.near=t,M.far=j.far=A.far=n,(ne!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),ne=M.near,N=M.far),M.layers.mask=e.layers.mask|6,A.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;ce(M,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(M,A,j):M.projectionMatrix.copy(A.projectionMatrix),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),F(e,M,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let le=null;function ue(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new To,o.layers.enable(n),o.viewport=new Dt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ai,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let de=new Yo;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},au=new Mt,ou=new W;ou.set(-1,0,0,0,1,0,0,0,1);function su(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ia(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(au.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(ou),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function cu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return B(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var lu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),uu=null;function du(){return uu===null&&(uu=new Pr(lu,16,16,O,g),uu.name=`DFG_LUT`,uu.minFilter=o,uu.magFilter=o,uu.wrapS=t,uu.wrapT=t,uu.generateMipmaps=!1,uu.needsUpdate=!0),uu}var fu=class{constructor(e={}){let{canvas:t=qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([A,k,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new U,O=null,j=null,te=[],M=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,P=null,ie=null,ae=null,oe=null;this._outputColorSpace=Le;let se=0,ce=0,F=null,le=-1,ue=null,de=new Dt,fe=new Dt,pe=null,me=new K(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new Dt(0,0,ge,_e),Se=new Dt(0,0,ge,_e),Ce=!1,we=new qr,Te=!1,Ee=!1,De=new Mt,Oe=new U,ke=new Dt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Me(){return F===null?ve:1}let I=n;function Ne(e,n){return t.getContext(e,n)}let Pe,Fe,L,Ie,R,Re,ze,Be,Ve,He,We,Ge,Ke,Je,Xe,Ze,$e,et,tt,nt,rt,it,V;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,H,!1),I===null){let t=`webgl2`;if(I=Ne(t,e),I===null)throw Ne(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,H,!1),B(`WebGLRenderer: `+e.message),e}function at(){Pe=new As(I),Pe.init(),rt=new eu(I,Pe),Fe=new as(I,Pe,e,rt),L=new Ql(I,Pe),Fe.reversedDepthBuffer&&h&&L.buffers.depth.setReversed(!0),ie=I.createFramebuffer(),ae=I.createFramebuffer(),oe=I.createFramebuffer(),Ie=new Ns(I),R=new Ml,Re=new $l(I,Pe,L,R,Fe,rt,Ie),ze=new ks(N),Be=new Xo(I),it=new rs(I,Be),Ve=new js(I,Be,Ie,it),He=new Fs(I,Ve,Be,it,Ie),et=new Ps(I,Fe,Re),Xe=new os(R),We=new jl(N,ze,Pe,Fe,it,Xe),Ge=new su(N,R),Ke=new Il,Je=new Ul(Pe),$e=new ns(N,ze,L,He,x,s),Ze=new Zl(N,He,Fe),V=new cu(I,Ie,Fe,L),tt=new is(I,Pe,Ie),nt=new Ms(I,Pe,Ie),Ie.programs=We.programs,N.capabilities=Fe,N.extensions=Pe,N.properties=R,N.renderLists=Ke,N.shadowMap=Ze,N.state=L,N.info=Ie}S!==1009&&(ne=new Ls(S,t.width,t.height,o,r,i));let ot=new iu(N,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){if(ot.isPresenting){z(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),L.viewport(de.copy(xe).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),L.scissor(fe.copy(Se).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){L.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=C.has(t)}if(e){let e=F.texture.type,t=w.has(e),n=$e.getClearColor(),r=$e.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,I.clearBufferuiv(I.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,I.clearBufferiv(I.COLOR,0,E))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),P=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,H,!1),$e.dispose(),Ke.dispose(),Je.dispose(),R.dispose(),ze.dispose(),He.dispose(),it.dispose(),V.dispose(),We.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,mt),ot.removeEventListener(`sessionend`,ht),_t.stop()};function st(e){e.preventDefault(),Ye(`WebGLRenderer: Context Lost.`),re=!0}function ct(){Ye(`WebGLRenderer: Context Restored.`),re=!1;let e=Ie.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;at(),Ie.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function H(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function lt(e){let t=e.target;t.removeEventListener(`dispose`,lt),ut(t)}function ut(e){dt(e),R.remove(e)}function dt(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ot(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=Be.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Me()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function W(e,t,n,r){P!==null&&e.isNodeMaterial&&P.setObject(r,e),Te===!0&&Xe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,r),e.side=0,e.needsUpdate=!0,Ct(e,t,r),e.side=2):Ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),P!==null&&P.renderStart(e,t,n),j=Je.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),P!==null&&P.updateLights(j.state.lightsArray),Ee=this.localClippingEnabled,Te=Xe.init(this.clippingPlanes,Ee),Te===!0&&Xe.setGlobalState(this.clippingPlanes,t),P!==null&&Ze.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];W(o,n,t,e),r.add(o)}else W(i,n,t,e),r.add(i)}}),j=M.pop(),P!==null&&P.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function mt(){_t.stop()}function ht(){_t.start()}let _t=new Yo;_t.setAnimationLoop(pt),typeof self<`u`&&_t.setContext(self),this.setAnimationLoop=function(e){ft=e,ot.setAnimationLoop(e),e===null?_t.stop():_t.start()},ot.addEventListener(`sessionstart`,mt),ot.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;P!==null&&P.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=ne!==null&&(F===null||n)&&ne.begin(N,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,F),j=Je.get(e,M.length),j.init(t),j.state.textureUnits=Re.getTextureUnits(),M.push(j),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),we.setFromProjectionMatrix(De,Ue,t.reversedDepth),Ee=this.localClippingEnabled,Te=Xe.init(this.clippingPlanes,Ee),O=Ke.get(e,te.length),O.init(),te.push(O),ot.enabled===!0&&ot.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&vt(e,t,-1/0,N.sortObjects)}vt(e,t,0,N.sortObjects),O.finish(),P!==null&&P.updateLights(j.state.lightsArray),N.sortObjects===!0&&O.sort(ye,be),je=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,je&&$e.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&Xe.beginShadows();let i=j.state.shadowsArray;if(Ze.render(i,e,t),Te===!0&&Xe.endShadows(),(r&&ne.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];bt(n,r,e,a)}je&&$e.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];yt(O,e,n,n.viewport)}}else r.length>0&&bt(n,r,e,t),je&&$e.render(e),yt(O,e,t)}F!==null&&ce===0&&(Re.updateMultisampleRenderTarget(F),Re.updateRenderTargetMipmap(F)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),it.resetDefaultState(),le=-1,ue=null,M.pop(),M.length>0?(j=M[M.length-1],Re.setTextureUnits(j.state.textureUnits),Te===!0&&Xe.setGlobalState(N.clippingPlanes,j.state.camera)):j=null,te.pop(),O=te.length>0?te[te.length-1]:null,P!==null&&P.renderEnd()};function vt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)j.pushLightProbeGrid(e);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(we)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let i=He.update(e),a=e.material;a.visible&&O.push(e,i,a,n,ke.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(we))){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ke.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,ke.z,s,t)}}else a.visible&&O.push(e,i,a,n,ke.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)vt(i[e],t,n,r)}function yt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),Te===!0&&Xe.setGlobalState(N.clippingPlanes,n),r&&L.viewport(de.copy(r)),i.length>0&&xt(i,t,n),a.length>0&&xt(a,t,n),o.length>0&&xt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function bt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Pe.has(`EXT_color_buffer_half_float`)||Pe.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new kt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),u=N.getActiveCubeFace(),d=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(me),he=N.getClearAlpha(),he<1&&N.setClearColor(16777215,.5),N.clear(),je&&$e.render(n);let f=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),Te===!0&&Xe.setGlobalState(N.clippingPlanes,r),xt(e,n,r),Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a),Pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,St(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a))}N.setRenderTarget(s,u,d),N.setClearColor(me,he),p!==void 0&&(r.viewport=p),N.toneMapping=f}function xt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&St(o,t,n,s,l,c)}}function St(e,t,n,r,i,a){P!==null&&i.isNodeMaterial&&P.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function Ct(e,t,n){t.isScene!==!0&&(t=Ae);let r=R.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,lt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Tt(e,s),d}else s.uniforms=We.getUniforms(e),P!==null&&e.isNodeMaterial&&P.build(e,n,s),e.onBeforeCompile(s,N),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),Tt(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=j.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function wt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Wc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Tt(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Ot(e,t,n,r,i){t.isScene!==!0&&(t=Ae),Re.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?N.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:gt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=j.state.lights;if(Te===!0&&(Ee===!0||e!==ue)){let t=e===ue&&r.id===le;Xe.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=j.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Ct(r,t,i),P&&r.isNodeMaterial&&P.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(L.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==le&&(le=r.id,C=!0),v.needsLights){let e=Et(j.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ue!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(I,`projectionMatrix`,e.projectionMatrix),T.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(I,Oe.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&T.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(I,`sunShadowMap`,y.state.sunShadowMap,Re),y.state.directionalShadowMap.length>0&&T.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,Re),y.state.spotShadowMap.length>0&&T.setValue(I,`spotShadowMap`,y.state.spotShadowMap,Re),y.state.pointShadowMap.length>0&&T.setValue(I,`pointShadowMap`,y.state.pointShadowMap,Re)),i.isSkinnedMesh){T.setOptional(I,i,`bindMatrix`),T.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(I,`boneTexture`,e.boneTexture,Re))}i.isBatchedMesh&&(T.setOptional(I,i,`batchingTexture`),T.setValue(I,`batchingTexture`,i._matricesTexture,Re),T.setOptional(I,i,`batchingIdTexture`),T.setValue(I,`batchingIdTexture`,i._indirectTexture,Re),T.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(I,`batchingColorTexture`,i._colorsTexture,Re));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&et.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=du()),C){if(T.setValue(I,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&At(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,ve,_e,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Wc.upload(I,wt(v),E,Re)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Wc.upload(I,wt(v),E,Re),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(I,`center`,i.center),T.setValue(I,`modelViewMatrix`,i.modelViewMatrix),T.setValue(I,`normalMatrix`,i.normalMatrix),T.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];V.update(n,x),V.bind(n,x)}}return x}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,L.viewport(de),L.scissor(fe),L.setScissorTest(pe),le=-1;return}if(o.__webglFramebuffer===void 0)Re.setupRenderTarget(e);else if(o.__hasExternalTextures)Re.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Re.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Re.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=ie),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(de),L.scissor(fe),L.setScissorTest(pe),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}le=-1};function Nt(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Fe.textureFormatReadable(e.format),t.__typeReadable=Fe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=F===null?null:R.get(F).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Qe(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Re.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(Re.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Re.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(Re.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,ae),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&Re.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Re.setTextureCube(e,0):e.isData3DTexture?Re.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Re.setTexture2DArray(e,0):Re.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){se=0,ce=0,F=null,L.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ue}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}},pu=class{ctx=null;master;sfx;ambience;white;brown;volume=.8;lastTick=0;ticksThisWindow=0;jet=null;unlock(){if(this.ctx){this.ctx.state!==`running`&&this.ctx.resume();return}let e=window.AudioContext??window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t;let n=t.createDynamicsCompressor();n.threshold.value=-12,n.knee.value=8,n.ratio.value=4,n.attack.value=.004,n.release.value=.2,n.connect(t.destination),this.master=t.createGain(),this.master.gain.value=this.volume,this.master.connect(n),this.sfx=t.createGain(),this.sfx.connect(this.master),this.ambience=t.createGain(),this.ambience.gain.value=0,this.ambience.connect(this.master);let r=t.sampleRate*2;this.white=t.createBuffer(1,r,t.sampleRate),this.brown=t.createBuffer(1,r,t.sampleRate);let i=this.white.getChannelData(0),a=this.brown.getChannelData(0),o=0;for(let e=0;e<r;e++){let t=Math.random()*2-1;i[e]=t,o=(o+.02*t)/1.02,a[e]=o*3.5}this.startAmbience()}setVolume(e){this.volume=e,this.ctx&&this.master.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}setPaused(e){this.ctx&&(e?this.ctx.suspend():this.ctx.resume())}noise(e,t,n,r=!1){let i=this.ctx.createBufferSource();i.buffer=e,i.loop=r;let a=Math.random()*(e.duration-Math.min(n,1)-.05);return i.start(t,Math.max(0,a),r?void 0:n+.05),i}filter(e,t,n=.7){let r=this.ctx.createBiquadFilter();return r.type=e,r.frequency.value=t,r.Q.value=n,r}env(e,t,n,r){let i=this.ctx.createGain();return i.gain.setValueAtTime(1e-4,e),i.gain.linearRampToValueAtTime(t,e+n),i.gain.exponentialRampToValueAtTime(1e-4,e+n+r),i}thump(e,t,n,r,i,a){let o=this.ctx.createOscillator();o.type=`sine`,o.frequency.setValueAtTime(t,e),o.frequency.exponentialRampToValueAtTime(n,e+i*.8);let s=this.env(e,r,.003,i);o.connect(s).connect(a),o.start(e),o.stop(e+i+.05)}burst(e,t,n,r,i,a,o,s,c){let l=this.noise(t,e,o+s),u=this.filter(n,r,i),d=this.env(e,a,o,s);return l.connect(u).connect(d).connect(c),u}grains(e,t,n,r,i){for(let a=0;a<t;a++){let t=e+Math.random()**1.6*n,a=r*(.35+Math.random()*.65)*(1-(t-e)/(n*1.3));this.burst(t,this.white,`bandpass`,1400+Math.random()*3600,1.6,Math.max(.005,a),.001,.02+Math.random()*.03,i)}}playSwing(e=0){if(!this.ctx)return;let t=this.ctx.currentTime+e,n=this.burst(t,this.white,`bandpass`,400,1.1,.09,.07,.12,this.sfx);n.frequency.setValueAtTime(350,t),n.frequency.exponentialRampToValueAtTime(1500,t+.08),n.frequency.exponentialRampToValueAtTime(600,t+.2)}playHit(e,t=0){if(!this.ctx)return;let n=this.ctx.currentTime,r=.92+Math.random()*.16,i=1-t*.6;if(this.thump(n,150*r*(1+t*.5),50,.85*i,.2-t*.08,this.sfx),this.burst(n,this.brown,`lowpass`,420*r*(1+t),.8,.95*i,.002,.2,this.sfx),this.burst(n,this.white,`bandpass`,(1150-e*380+t*1400)*r,.9+t,.55,.002,.13,this.sfx),this.burst(n,this.white,`highpass`,3200,.7,.18+t*.25,.001,.025+t*.02,this.sfx),t>.2){let e=this.ctx;for(let i of[2100,3350]){let a=e.createOscillator();a.type=`triangle`,a.frequency.value=i*r*(.9+t*.2);let o=this.env(n,.05*t,.001,.18+t*.12);a.connect(o).connect(this.sfx),a.start(n),a.stop(n+.4)}}this.grains(n+.03,5+Math.round(e*5),.28,.1,this.sfx)}setJet(e,t){if(!this.ctx)return;let n=this.ctx;if(!this.jet){let e=this.noise(this.brown,n.currentTime,2,!0),t=this.filter(`bandpass`,520,.7),r=this.noise(this.white,n.currentTime,2,!0),i=this.filter(`bandpass`,2600,.9),a=n.createGain();a.gain.value=.08;let o=n.createGain();o.gain.value=0,e.connect(t).connect(o),r.connect(i).connect(a).connect(o),o.connect(this.sfx),this.jet={gain:o,filter:t}}let r=e?.11*(.6+.4*Math.min(1,t*3)):0;this.jet.gain.gain.setTargetAtTime(r,n.currentTime,e?.04:.09),this.jet.filter.frequency.setTargetAtTime(e?480+200*t:300,n.currentTime,.1)}playGlassBreak(){if(!this.ctx)return;let e=this.ctx.currentTime;this.burst(e,this.white,`highpass`,3800,.8,.5,.001,.25,this.sfx);for(let t=0;t<9;t++)this.burst(e+Math.random()*.25,this.white,`bandpass`,4e3+Math.random()*4e3,4,.12,.001,.05,this.sfx);this.thump(e,300,120,.25,.12,this.sfx)}playPickup(){if(!this.ctx)return;let e=this.ctx.currentTime;this.burst(e,this.white,`bandpass`,2400,.7,.14,.02,.18,this.sfx),this.burst(e+.05,this.brown,`lowpass`,700,.7,.2,.01,.1,this.sfx)}playCoins(e=4){if(!this.ctx)return;let t=this.ctx,n=t.currentTime;for(let r=0;r<e;r++){let e=n+r*(.045+Math.random()*.03),i=t.createOscillator();i.type=`sine`,i.frequency.value=3200+Math.random()*1600;let a=this.env(e,.06,.001,.09);i.connect(a).connect(this.sfx),i.start(e),i.stop(e+.15)}}setDepth(e){if(!this.ctx)return;let t=Math.max(.08,Math.exp(-Math.max(0,e-1)/7));this.ambience.gain.setTargetAtTime(.4*t,this.ctx.currentTime,.5);let n=Math.min(1,Math.max(0,e/25));this.music&&Math.abs(n-this.depthK)>.02&&(this.depthK=n,this.musicTone.frequency.setTargetAtTime(2200-n*1300,this.ctx.currentTime,1.5))}playBreak(){if(!this.ctx)return;let e=this.ctx.currentTime;this.thump(e,115,32,1,.5,this.sfx),this.thump(e+.02,70,30,.6,.35,this.sfx);let t=this.burst(e,this.brown,`lowpass`,2200,.6,1,.004,.75,this.sfx);t.frequency.setValueAtTime(2400,e),t.frequency.exponentialRampToValueAtTime(180,e+.7),this.burst(e,this.white,`bandpass`,700,.8,.5,.002,.32,this.sfx),this.burst(e,this.white,`highpass`,2800,.7,.2,.001,.04,this.sfx),this.grains(e+.05,34,1,.16,this.sfx)}playDebrisTick(e){if(!this.ctx||e<.05)return;let t=this.ctx.currentTime;t-this.lastTick>.25&&(this.ticksThisWindow=0),!(t-this.lastTick<.018||this.ticksThisWindow>14)&&(this.lastTick=t,this.ticksThisWindow++,this.burst(t,this.white,`bandpass`,900+Math.random()*2200,1.3,.05+e*.12,.001,.035+e*.03,this.sfx))}playFootstep(e){if(!this.ctx)return;let t=this.ctx.currentTime,n=.7+Math.random()*.3;this.burst(t,this.brown,`lowpass`,520+Math.random()*200,.7,.28*e*n,.004,.09,this.sfx),this.burst(t+.005,this.white,`bandpass`,3e3+Math.random()*1800,.6,.045*e*n,.01,.12,this.sfx)}playJump(){if(!this.ctx)return;let e=this.ctx.currentTime;this.burst(e,this.white,`bandpass`,2600,.6,.05,.01,.12,this.sfx),this.burst(e,this.brown,`lowpass`,500,.7,.15,.004,.07,this.sfx)}playLand(e){if(!this.ctx)return;let t=Math.min(1,e/12),n=this.ctx.currentTime;this.thump(n,110,45,.25+t*.4,.14,this.sfx),this.burst(n,this.brown,`lowpass`,600,.7,.3+t*.3,.003,.12,this.sfx),this.burst(n,this.white,`bandpass`,3200,.6,.06+t*.05,.008,.16,this.sfx)}playPurchase(){if(!this.ctx)return;let e=this.ctx,t=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,r)=>{let i=t+r*.075;for(let[t,a,o]of[[1,.09,`sine`],[2,.02,`triangle`]]){let s=e.createOscillator();s.type=o,s.frequency.value=n*t;let c=this.env(i,a,.004,.55+r*.1);s.connect(c).connect(this.sfx),s.start(i),s.stop(i+.9)}}),this.playCoins(4)}playOre(e){if(!this.ctx)return;let t=this.ctx,n=t.currentTime;this.burst(n,this.white,`bandpass`,2200,1.2,.08,.001,.04,this.sfx);let r=880*2**(([0,2,4,7,9][e%5]+12*(Math.floor(e/5)%2))/12),i=Math.min(e,10);for(let[e,a,o]of[[1,.055,0],[1.5,.03,.06]]){let s=t.createOscillator();s.type=`sine`,s.frequency.value=r*e;let c=this.env(n+o,a,.003,.35+i*.05);s.connect(c).connect(this.sfx),s.start(n+o),s.stop(n+o+.6)}}playNewLevel(){if(!this.ctx)return;let e=this.ctx,t=e.currentTime;[[293.66,369.99,440],[329.63,415.3,493.88]].forEach((n,r)=>{for(let i of n){let n=e.createOscillator();n.type=`sine`,n.frequency.value=i;let a=e.createGain(),o=t+r*.55;a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(.045,o+.25),a.gain.exponentialRampToValueAtTime(1e-4,o+1.8),n.connect(a).connect(this.sfx),n.start(o),n.stop(o+1.9)}})}startAmbience(){let e=this.ctx,t=e.currentTime,n=this.noise(this.brown,t,2,!0),r=this.filter(`lowpass`,320,.4),i=e.createGain();i.gain.value=.1,n.connect(r).connect(i).connect(this.ambience);let a=e.createOscillator();a.frequency.value=.06;let o=e.createGain();o.gain.value=110,a.connect(o).connect(r.frequency);let s=e.createOscillator();s.frequency.value=.037;let c=e.createGain();c.gain.value=.04,s.connect(c).connect(i.gain),a.start(t),s.start(t),this.ambience.gain.setValueAtTime(0,t),this.ambience.gain.linearRampToValueAtTime(.4,t+3),this.startMusic()}music=null;musicTone;musicOn=!0;musicVolume=.6;musicTimer=0;musicNext=0;bar=0;depthK=0;setMusic(e,t){this.musicOn=e,this.musicVolume=t,this.ctx&&this.music&&this.music.gain.setTargetAtTime(e?.34*t:0,this.ctx.currentTime,.6)}startMusic(){let e=this.ctx,t=e.createGain();this.music=t,t.gain.value=0,this.musicTone=this.filter(`lowpass`,2200,.5);let n=e.createDelay(1);n.delayTime.value=.46;let r=e.createGain();r.gain.value=.28;let i=e.createGain();i.gain.value=.22;let a=this.filter(`lowpass`,1600,.5);this.musicTone.connect(t),this.musicTone.connect(n),n.connect(a).connect(r).connect(n),a.connect(i).connect(t),t.connect(this.master),t.gain.setTargetAtTime(this.musicOn?.34*this.musicVolume:0,e.currentTime+1.5,2),this.musicNext=e.currentTime+1.5,window.clearInterval(this.musicTimer),this.musicTimer=window.setInterval(()=>this.scheduleMusic(),200)}scheduleMusic(){let e=this.ctx;if(!e||e.state!==`running`)return;let t=4.2;for(this.musicNext<e.currentTime-1&&(this.musicNext=e.currentTime+.2);this.musicNext<e.currentTime+t;)this.playBar(this.musicNext,t),this.musicNext+=t,this.bar++}playBar(e,t){let n=[[[62,66,69,73],[59,62,66,69],[55,59,62,66],[57,61,64,69]],[[52,55,59,62],[55,59,62,66],[50,57,62,66],[57,61,64,69]]][+(Math.floor(this.bar/4)%4==3)][this.bar%4],r=this.depthK;for(let i of n)this.padNote(e,t+1.2,mu(i-12),.035*(1-r*.3));let i=[74,76,78,81,83,86],a=[0,1,1.5,2,3,3.5],o=.42-r*.2,s=-1;for(let n of a){if(Math.random()>o)continue;let a=Math.floor(Math.random()*i.length);a===s&&(a=(a+2)%i.length),s=a,this.pluck(e+t/4*n,mu(i[a]-(r>.5?12:0)),.05+Math.random()*.025)}}padNote(e,t,n,r){let i=this.ctx,a=i.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(r,e+1.4),a.gain.setValueAtTime(r,e+t-1.6),a.gain.linearRampToValueAtTime(0,e+t),a.connect(this.musicTone);for(let r of[-5,6]){let o=i.createOscillator();o.type=`sine`,o.frequency.value=n,o.detune.value=r,o.connect(a),o.start(e),o.stop(e+t+.1)}}pluck(e,t,n){let r=this.ctx,i=r.createGain();i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(n,e+.012),i.gain.exponentialRampToValueAtTime(1e-4,e+2.6),i.connect(this.musicTone);let a=r.createOscillator();a.type=`sine`,a.frequency.value=t;let o=r.createOscillator();o.type=`sine`,o.frequency.value=t*2;let s=r.createGain();s.gain.value=.12,a.connect(i),o.connect(s).connect(i),a.start(e),o.start(e),a.stop(e+2.7),o.stop(e+2.7)}};function mu(e){return 440*2**((e-69)/12)}function hu(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new cr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=gu(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=gu(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function gu(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new q(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function _u(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}function vu(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function yu(e,t,n=0){let r=Math.imul(e|0,668265261)^Math.imul(t|0,374761393)^Math.imul(n|0,2654435761);return r=Math.imul(r^r>>>15,2246822507),r=Math.imul(r^r>>>13,3266489909),r^=r>>>16,(r>>>0)/4294967296}function bu(e,t,n,r=0){let i=Math.imul(e|0,668265261)^Math.imul(t|0,374761393)^Math.imul(n|0,1013904242)^Math.imul(r|0,2654435761);return i=Math.imul(i^i>>>15,2246822507),i=Math.imul(i^i>>>13,3266489909),i^=i>>>16,(i>>>0)/4294967296}var xu=e=>e*e*e*(e*(e*6-15)+10),Su=(e,t)=>(e%t+t)%t;function Cu(e,t,n=0,r=0){let i=Math.floor(e),a=Math.floor(t),o=e-i,s=t-a,c=i,l=a,u=i+1,d=a+1;n>0&&(c=Su(c,n),l=Su(l,n),u=Su(u,n),d=Su(d,n));let f=yu(c,l,r),p=yu(u,l,r),m=yu(c,d,r),h=yu(u,d,r),g=xu(o),_=xu(s);return f+(p-f)*g+(m-f)*_+(f-p-m+h)*g*_}function wu(e,t,n,r=0,i=0,a=.5){let o=0,s=1,c=0,l=1;for(let u=0;u<n;u++)o+=s*Cu(e*l,t*l,r*l,i+u*1013),c+=s,s*=a,l*=2;return o/c}function Tu(e,t,n,r=0){let i=Math.floor(e),a=Math.floor(t),o=Math.floor(n),s=xu(e-i),c=xu(t-a),l=xu(n-o),u=bu(i,a,o,r),d=bu(i+1,a,o,r),f=bu(i,a+1,o,r),p=bu(i+1,a+1,o,r),m=bu(i,a,o+1,r),h=bu(i+1,a,o+1,r),g=bu(i,a+1,o+1,r),_=bu(i+1,a+1,o+1,r),v=u+(d-u)*s,y=f+(p-f)*s,b=m+(h-m)*s,x=g+(_-g)*s,S=v+(y-v)*c;return S+(b+(x-b)*c-S)*l}function Eu(e,t,n,r,i=0){let a=0,o=1,s=0,c=1;for(let l=0;l<r;l++)a+=o*Tu(e*c,t*c,n*c,i+l*977),s+=o,o*=.5,c*=2;return a/s}function Du(e,t,n,r,i){let a=Math.floor(e),o=Math.floor(t),s=1e9,c=1e9;for(let i=-1;i<=1;i++)for(let l=-1;l<=1;l++){let u=a+l,d=o+i,f=Su(u,n),p=Su(d,n),m=u+yu(f,p,r)-e,h=d+yu(f,p,r+17)-t,g=m*m+h*h;g<s?(c=s,s=g):g<c&&(c=g)}i[0]=Math.sqrt(s),i[1]=Math.sqrt(c)}var Ou=class{period;values;constructor(e,t){this.period=e,this.values=new Float32Array(e*e);for(let n=0;n<e;n++)for(let r=0;r<e;r++)this.values[n*e+r]=yu(r,n,t)}sample(e,t){let n=this.period,r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=(r|0)%n;s<0&&(s+=n);let c=(i|0)%n;c<0&&(c+=n);let l=s+1===n?0:s+1,u=c*n,d=(c+1===n?0:c+1)*n,f=this.values,p=f[u+s],m=f[u+l],h=f[d+s],g=f[d+l],_=a*a*a*(a*(a*6-15)+10),v=o*o*o*(o*(o*6-15)+10);return p+(m-p)*_+(h-p)*v+(p-m-h+g)*_*v}},ku=class{gain;octaves=[];norm;constructor(e,t,n,r=.5){this.gain=r;let i=0,a=1;for(let o=0;o<t;o++)this.octaves.push(new Ou(e<<o,n+o*1013)),i+=a,a*=r;this.norm=i}sample(e,t){let n=0,r=1;for(let i of this.octaves)n+=r*i.sample(e*i.period,t*i.period),r*=this.gain;return n/this.norm}},Au=class{period;fx;fy;constructor(e,t){this.period=e;let n=e*e;this.fx=new Float32Array(n),this.fy=new Float32Array(n);for(let n=0;n<e;n++)for(let r=0;r<e;r++)this.fx[n*e+r]=yu(r,n,t),this.fy[n*e+r]=yu(r,n,t+17)}f1(e,t){let n=this.period,r=e*n,i=t*n,a=Math.floor(r)|0,o=Math.floor(i)|0,s=a%n;s<0&&(s+=n);let c=o%n;c<0&&(c+=n);let l=this.fx,u=this.fy,d=1e9;for(let e=-1;e<=1;e++){let t=c+e;t<0?t+=n:t>=n&&(t-=n);let f=t*n,p=o+e-i;for(let e=-1;e<=1;e++){let t=s+e;t<0?t+=n:t>=n&&(t-=n);let i=f+t,o=a+e+l[i]-r,c=p+u[i],m=o*o+c*c;m<d&&(d=m)}}return Math.sqrt(d)}},ju=class{res;data;constructor(e,t){this.res=e,this.data=new Float32Array(e*e);for(let n=0;n<e;n++)for(let r=0;r<e;r++)this.data[n*e+r]=t(r/e,n/e)}sample(e,t){let n=this.res,r=e*n,i=t*n,a=Math.floor(r),o=Math.floor(i),s=r-a,c=i-o,l=(a|0)%n;l<0&&(l+=n);let u=(o|0)%n;u<0&&(u+=n);let d=l+1===n?0:l+1,f=u*n,p=(u+1===n?0:u+1)*n,m=this.data,h=m[f+l]+(m[f+d]-m[f+l])*s;return h+(m[p+l]+(m[p+d]-m[p+l])*s-h)*c}},Mu=14.5,Nu=.25;function Pu(e,t){let n=new wa(.5,e);n.deleteAttribute(`normal`),n.deleteAttribute(`uv`),n=_u(n);let r=n.getAttribute(`position`),i=new Float32Array(r.count*3);for(let e=0;e<r.count;e++){let t=r.getX(e),n=r.getY(e),a=r.getZ(e),o=.66+bu(Math.round(t*1e3),Math.round(n*1e3),Math.round(a*1e3),9)*.62;r.setXYZ(e,t*o,n*o*.72,a*o*.9);let s=.78+bu(e,3,7,1)*.35;i[e*3]=i[e*3+1]=i[e*3+2]=s}if(n.setAttribute(`color`,new q(i,3)),n.computeVertexNormals(),!t)return n;let a=n.toNonIndexed(),o=a.getAttribute(`position`),s=new Float32Array(o.count*2);for(let e=0;e<o.count;e+=3){let t=o.getX(e+1)-o.getX(e),n=o.getY(e+1)-o.getY(e),r=o.getZ(e+1)-o.getZ(e),i=o.getX(e+2)-o.getX(e),a=o.getY(e+2)-o.getY(e),c=o.getZ(e+2)-o.getZ(e),l=Math.abs(n*c-r*a),u=Math.abs(r*i-t*c),d=Math.abs(t*a-n*i);for(let t=e;t<e+3;t++){let e=o.getX(t),n=o.getY(t),r=o.getZ(t),[i,a]=l>=u&&l>=d?[r,n]:u>=d?[e,r]:[e,n];s[t*2]=i*.1+.37,s[t*2+1]=a*.1+.41}}return a.setAttribute(`uv`,new q(s,2)),a}var Fu=class{mesh;onImpact=null;ground=null;bodies=[];cursor=0;dummy=new on;n=new U;constructor(e,t,n){let r=new Ua({vertexColors:!0,map:n.surface?.map??null,normalMap:n.surface?.normalMap??null,normalScale:new H(1.2,1.2)});this.mesh=new Ur(e,r,t),this.mesh.name=n.name,this.mesh.castShadow=n.shadows,this.mesh.receiveShadow=!0,this.mesh.frustumCulled=!1,this.mesh.count=0;for(let e=0;e<t;e++)this.bodies.push({active:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,avx:0,avy:0,avz:0,size:0,age:0,life:0,color:new K}),this.mesh.setColorAt(e,new K(1,1,1))}get activeCount(){return this.mesh.count}spawn(e){let t=this.bodies[this.cursor];this.cursor=(this.cursor+1)%this.bodies.length,t.active=!0,t.x=e.x,t.y=e.y,t.z=e.z,t.vx=e.vx,t.vy=e.vy,t.vz=e.vz,t.rx=Math.random()*6.28,t.ry=Math.random()*6.28,t.rz=Math.random()*6.28,t.avx=(Math.random()-.5)*e.spin,t.avy=(Math.random()-.5)*e.spin,t.avz=(Math.random()-.5)*e.spin,t.size=e.size,t.age=0,t.life=e.life,t.color.copy(e.color)}clear(){for(let e of this.bodies)e.active=!1;this.mesh.count=0}update(e){let t=0,n=this.dummy,r=this.n;for(let i of this.bodies){if(!i.active)continue;if(i.age+=e,i.age>i.life+Nu){i.active=!1;continue}let a=i.size*.4;i.vy-=Mu*e;let o=1-.3*e;i.vx*=o,i.vz*=o,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e;let s=this.ground?this.ground(i.x,i.y,i.z,r):i.y;if(s<a){this.ground||r.set(0,1,0),i.x+=r.x*(a-s),i.y+=r.y*(a-s),i.z+=r.z*(a-s);let t=i.vx*r.x+i.vy*r.y+i.vz*r.z;if(t<0){t<-1.3&&this.onImpact?.(Math.min(1,-t*i.size/.15));let n=t<-1.3?1.3:1;i.vx-=n*t*r.x,i.vy-=n*t*r.y,i.vz-=n*t*r.z;let a=t<-1.3?.62:Math.exp(-e*10);i.vx*=a,i.vz*=a,i.avx*=a,i.avy*=a,i.avz*=a,t>-.4&&i.vx*i.vx+i.vz*i.vz<.04&&(i.life=Math.min(i.life,i.age+.05))}}i.rx+=i.avx*e,i.ry+=i.avy*e,i.rz+=i.avz*e;let c=i.age>i.life?1-(i.age-i.life)/Nu:1,l=Math.min(1,i.age/.03),u=i.size*c*l;n.position.set(i.x,i.y-(1-c)*a,i.z),n.rotation.set(i.rx,i.ry,i.rz),n.scale.set(u,u,u),n.updateMatrix(),this.mesh.setMatrixAt(t,n.matrix),this.mesh.setColorAt(t,i.color),t++}this.mesh.count=t,t>0&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0))}},Iu=`
attribute float aSize;
attribute float aAlpha;
attribute float aRot;
attribute float aVariant;
attribute vec3 aColor;
uniform float uScale;
varying float vAlpha;
varying vec3 vColor;
varying float vRot;
varying vec2 vAtlas;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uScale / max(-mv.z, 0.05);
  vAlpha = aAlpha;
  vColor = aColor;
  vRot = aRot;
  vAtlas = vec2(mod(aVariant, 2.0), floor(aVariant / 2.0)) * 0.5;
}
`,Lu=`
uniform sampler2D uPuff;
varying float vAlpha;
varying vec3 vColor;
varying float vRot;
varying vec2 vAtlas;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float s = sin(vRot);
  float co = cos(vRot);
  vec2 r = vec2(c.x * co - c.y * s, c.x * s + c.y * co) + 0.5;
  if (r.x < 0.0 || r.y < 0.0 || r.x > 1.0 || r.y > 1.0) discard;
  float a = texture2D(uPuff, vAtlas + r * 0.5).r * vAlpha;
  if (a < 0.004) discard;
  // Lit from above: the top of each puff is a little brighter than its underside.
  vec3 col = vColor * (0.82 + 0.3 * (1.0 - gl_PointCoord.y));
  gl_FragColor = vec4(col, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function Ru(e=128){let t=new Uint8Array(e*e),n=e/2;for(let r=0;r<4;r++){let i=r%2*n,a=Math.floor(r/2)*n;for(let o=0;o<n;o++)for(let s=0;s<n;s++){let c=s/n-.5,l=o/n-.5,u=Math.sqrt(c*c+l*l)*2,d=wu(s*.11+r*17,o*.11-r*11,4,0,7+r),f=1-u*(1.05+(.5-wu(s*.05-r*5,o*.05+r*9,2,0,19+r))*1.4),p=Math.max(0,f)*Math.max(0,d*1.6-.35);t[(a+o)*e+i+s]=Math.min(255,Math.max(0,p)**1.15*255)}}let r=new Pr(t,e,e,D,l);return r.magFilter=o,r.minFilter=o,r.needsUpdate=!0,r}var zu=14,Bu=class{points;material;max;cursor=0;state;colors;variants;aPos;aSize;aAlpha;aRot;aVariant;aColor;constructor(e=200){this.max=e,this.state=new Float32Array(e*zu),this.colors=new Float32Array(e*3),this.variants=new Float32Array(e);let t=new cr;this.aPos=new q(new Float32Array(e*3),3),this.aSize=new q(new Float32Array(e),1),this.aAlpha=new q(new Float32Array(e),1),this.aRot=new q(new Float32Array(e),1),this.aVariant=new q(new Float32Array(e),1),this.aColor=new q(new Float32Array(e*3),3);for(let e of[this.aPos,this.aSize,this.aAlpha,this.aRot,this.aVariant,this.aColor])e.setUsage(35048);t.setAttribute(`position`,this.aPos),t.setAttribute(`aSize`,this.aSize),t.setAttribute(`aAlpha`,this.aAlpha),t.setAttribute(`aRot`,this.aRot),t.setAttribute(`aVariant`,this.aVariant),t.setAttribute(`aColor`,this.aColor),t.setDrawRange(0,0),this.material=new Ba({vertexShader:Iu,fragmentShader:Lu,transparent:!0,depthWrite:!1,uniforms:{uScale:{value:800},uPuff:{value:Ru()}}}),this.points=new $r(t,this.material),this.points.frustumCulled=!1,this.points.renderOrder=5,this.points.name=`dust`}get activeCount(){return this.points.geometry.drawRange.count}spawn(e){let t=this.cursor;this.cursor=(this.cursor+1)%this.max;let n=this.state,r=t*zu;n[r]=e.x,n[r+1]=e.y,n[r+2]=e.z,n[r+3]=e.vx,n[r+4]=e.vy,n[r+5]=e.vz,n[r+6]=e.size,n[r+7]=e.growth,n[r+8]=0,n[r+9]=e.life,n[r+10]=e.alpha,n[r+11]=e.drag??2.5,n[r+12]=Math.random()*Math.PI*2,n[r+13]=(Math.random()-.5)*1.2,this.colors[t*3]=e.color.r,this.colors[t*3+1]=e.color.g,this.colors[t*3+2]=e.color.b,this.variants[t]=Math.floor(Math.random()*4)}clear(){for(let e=0;e<this.max;e++)this.state[e*zu+9]=0;this.points.geometry.setDrawRange(0,0)}update(e,t){this.material.uniforms.uScale.value=t;let n=this.state,r=this.aPos.array,i=this.aSize.array,a=this.aAlpha.array,o=this.aRot.array,s=this.aVariant.array,c=this.aColor.array,l=0;for(let t=0;t<this.max;t++){let u=t*zu,d=n[u+9];if(d<=0)continue;let f=n[u+8]+=e;if(f>=d){n[u+9]=0;continue}let p=Math.exp(-n[u+11]*e);n[u+3]=n[u+3]*p+.08*e,n[u+4]=n[u+4]*p+.2*e,n[u+5]=n[u+5]*p+.06*e,n[u]+=n[u+3]*e,n[u+1]+=n[u+4]*e,n[u+2]+=n[u+5]*e,n[u+6]+=n[u+7]*e*(1-f/d),n[u+12]+=n[u+13]*e;let m=f/d;r[l*3]=n[u],r[l*3+1]=n[u+1],r[l*3+2]=n[u+2],i[l]=n[u+6],a[l]=n[u+10]*Math.min(1,f/.06)*(1-m)**1.5,o[l]=n[u+12],s[l]=this.variants[t],c[l*3]=this.colors[t*3],c[l*3+1]=this.colors[t*3+1],c[l*3+2]=this.colors[t*3+2],l++}if(this.points.geometry.setDrawRange(0,l),l>0)for(let[e,t]of[[this.aPos,3],[this.aSize,1],[this.aAlpha,1],[this.aRot,1],[this.aVariant,1],[this.aColor,3]])e.clearUpdateRanges(),e.addUpdateRange(0,l*t),e.needsUpdate=!0}},Vu=class{clods;crumbs;dust=new Bu;palettes=new Map;tmp=new K;t=new U;b=new U;away=new U;constructor(e,t,n){this.clods=new Fu(Pu(1,!0),90,{surface:t,shadows:!1,name:`clods`}),this.crumbs=new Fu(Pu(0,!1),300,{shadows:!1,name:`crumbs`}),this.clods.ground=n,this.crumbs.ground=n,e.add(this.clods.mesh,this.crumbs.mesh,this.dust.points)}set onImpact(e){this.clods.onImpact=e,this.crumbs.onImpact=t=>e(t*.5)}palette(e){let t=this.palettes.get(e.id);return t||(t={chunks:e.chunkTints.map(e=>new K(e)),crumbs:e.crumbColors.map(e=>new K(e)),dust:new K(e.dustColor)},this.palettes.set(e.id,t)),t}pick(e,t){return this.tmp.copy(e[Math.floor(Math.random()*e.length)]).multiplyScalar(1-t+Math.random()*t*2)}dig(e,t,n,r,i){let a=this.palette(e);this.t.copy(r).addScaledVector(n,-r.dot(n)),this.t.lengthSq()<1e-4&&this.t.set(1,0,0),this.t.normalize(),this.b.crossVectors(n,this.t),this.away.copy(n).addScaledVector(this.t,-.55).normalize();let o=Math.min(1.6,i/.006),s=e.hardness,c=1+Math.round(o*(2-s));for(let e=0;e<c;e++){let e=1+Math.random()*1.3,r=(Math.random()-.5)*1.4;this.clods.spawn({x:t.x+n.x*.04+this.b.x*r*.05,y:t.y+n.y*.04+this.b.y*r*.05,z:t.z+n.z*.04+this.b.z*r*.05,vx:this.away.x*e+this.b.x*r,vy:this.away.y*e+.9+Math.random()*1.1,vz:this.away.z*e+this.b.z*r,size:(.026+Math.random()**1.6*.04)*(1-s*.3),life:.5+Math.random()*.4,color:this.pick(a.chunks,.05),spin:9})}let l=10+Math.round(o*(8+s*4));for(let e=0;e<l;e++){let e=1.3+Math.random()*2.2,r=(Math.random()-.5)*1.8,i=(Math.random()-.5)*2.2;this.crumbs.spawn({x:t.x+n.x*.02,y:t.y+n.y*.02,z:t.z+n.z*.02,vx:this.away.x*e+this.t.x*r+this.b.x*i,vy:this.away.y*e+this.t.y*r+this.b.y*i+1.1+Math.random()*1.6,vz:this.away.z*e+this.t.z*r+this.b.z*i,size:.009+Math.random()**2*.02,life:.3+Math.random()*.3,color:this.pick(a.crumbs,.1),spin:30})}let u=4+Math.round(o*(2+s*2));for(let e=0;e<u;e++){let e=(Math.random()-.5)*.26,r=(Math.random()-.5)*.26;this.dust.spawn({x:t.x+n.x*.05+this.t.x*e+this.b.x*r,y:t.y+n.y*.05+this.t.y*e+this.b.y*r+.02,z:t.z+n.z*.05+this.t.z*e+this.b.z*r,vx:this.away.x*(.2+Math.random()*.5)+e*2.2,vy:.12+Math.random()*.35,vz:this.away.z*(.2+Math.random()*.5)+r*2.2,size:.08+Math.random()*.1,growth:.85,life:.7+Math.random()*.5,alpha:.18,color:a.dust,drag:2.2})}}crumble(e,t,n,r,i){let a=this.palette(e),o=Math.min(18,3+Math.round(i/.0015));for(let e=0;e<o;e++)this.crumbs.spawn({x:t+(Math.random()-.5)*.12,y:n+(Math.random()-.5)*.12,z:r+(Math.random()-.5)*.12,vx:(Math.random()-.5)*.6,vy:Math.random()*.4,vz:(Math.random()-.5)*.6,size:.012+Math.random()*.018,life:.35+Math.random()*.3,color:this.pick(a.crumbs,.1),spin:20});let s=Math.min(6,1+Math.round(i/.004));for(let e=0;e<s;e++)this.dust.spawn({x:t+(Math.random()-.5)*.15,y:n,z:r+(Math.random()-.5)*.15,vx:(Math.random()-.5)*.2,vy:-.1,vz:(Math.random()-.5)*.2,size:.08+Math.random()*.08,growth:.8,life:.6+Math.random()*.4,alpha:.14,color:a.dust,drag:2.2})}shatter(e,t,n){let r=[new K(`#f3ecd2`),new K(`#d9c48a`),new K(`#b58f3f`),new K(`#ffffff`)];for(let i=0;i<16;i++){let a=Math.random()*Math.PI*2,o=.8+Math.random()*1.6;this.crumbs.spawn({x:e,y:t+.05,z:n,vx:Math.cos(a)*o,vy:1+Math.random()*1.6,vz:Math.sin(a)*o,size:.008+Math.random()*.014,life:.5+Math.random()*.3,color:r[i%r.length],spin:30})}}sparkle(e,t,n,r){for(let i=0;i<r;i++){let r=Math.random()*Math.PI*2,i=.4+Math.random()*1.1,a=1.6+Math.random()*1.4;this.crumbs.spawn({x:e,y:t+.04,z:n,vx:Math.cos(r)*i,vy:1.1+Math.random()*1.5,vz:Math.sin(r)*i,size:.007+Math.random()*.01,life:.45+Math.random()*.35,color:this.tmp.setRGB(1*a,.82*a,.45*a),spin:25})}}exhaust(e,t,n){this.dust.spawn({x:e+(Math.random()-.5)*.2,y:t,z:n+(Math.random()-.5)*.2,vx:(Math.random()-.5)*.3,vy:-1.2-Math.random()*.6,vz:(Math.random()-.5)*.3,size:.1+Math.random()*.08,growth:1.4,life:.45+Math.random()*.25,alpha:.16,color:this.exhaustColor,drag:3})}exhaustColor=new K(`#c9c4bb`);clear(){this.clods.clear(),this.crumbs.clear(),this.dust.clear()}update(e,t){this.clods.update(e),this.crumbs.update(e),this.dust.update(e,t)}},Hu=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Uu=`
uniform sampler2D tColor;
uniform vec2 uInvSize;
varying vec2 vUv;

float lum(vec3 c) { return dot(c / (1.0 + c), vec3(0.299, 0.587, 0.114)); }

void main() {
  vec3 rgbNW = texture2D(tColor, vUv + vec2(-1.0, -1.0) * uInvSize).rgb;
  vec3 rgbNE = texture2D(tColor, vUv + vec2( 1.0, -1.0) * uInvSize).rgb;
  vec3 rgbSW = texture2D(tColor, vUv + vec2(-1.0,  1.0) * uInvSize).rgb;
  vec3 rgbSE = texture2D(tColor, vUv + vec2( 1.0,  1.0) * uInvSize).rgb;
  vec3 rgbM  = texture2D(tColor, vUv).rgb;
  float lNW = lum(rgbNW);
  float lNE = lum(rgbNE);
  float lSW = lum(rgbSW);
  float lSE = lum(rgbSE);
  float lM  = lum(rgbM);
  float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
  float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
  vec3 color = rgbM;
  if (lMax - lMin > max(0.03, lMax * 0.12)) {
    vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), (lNW + lSW) - (lNE + lSE));
    float reduce = max((lNW + lNE + lSW + lSE) * (0.25 / 8.0), 1.0 / 128.0);
    float rcpMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + reduce);
    dir = clamp(dir * rcpMin, vec2(-8.0), vec2(8.0)) * uInvSize;
    vec3 a = 0.5 * (texture2D(tColor, vUv + dir * (1.0 / 3.0 - 0.5)).rgb + texture2D(tColor, vUv + dir * (2.0 / 3.0 - 0.5)).rgb);
    vec3 b = a * 0.5 + 0.25 * (texture2D(tColor, vUv - dir * 0.5).rgb + texture2D(tColor, vUv + dir * 0.5).rgb);
    float lB = lum(b);
    color = (lB < lMin || lB > lMax) ? a : b;
  }
  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Wu=class{target;scene=new hn;camera=new Oo(-1,1,1,-1,0,1);material;constructor(e){let t=e.extensions.has(`EXT_color_buffer_float`);this.target=new kt(1,1,{type:t?x:g,format:t?C:w,depthBuffer:!0,stencilBuffer:!1}),this.material=new Ba({vertexShader:Hu,fragmentShader:Uu,uniforms:{tColor:{value:this.target.texture},uInvSize:{value:new H(1,1)}},depthTest:!1,depthWrite:!1});let n=new cr;n.setAttribute(`position`,new Xn([-1,-1,0,3,-1,0,-1,3,0],3));let r=new J(n,this.material);r.frustumCulled=!1,this.scene.add(r)}setSize(e,t){this.target.setSize(e,t),this.material.uniforms.uInvSize.value.set(1/e,1/t)}resolve(e){e.setRenderTarget(null),e.render(this.scene,this.camera)}},Gu=class{renderer;preset;post;renderScale=1;strugglingS=0;frameEma=1e3/60;slowTime=0;fastTime=0;refreshMs=1e3/60;upLockUntil=0;lastStepUp=-1e9;clock=0;width=1;height=1;bufferSize=new H;constructor(e,t){this.preset=t,this.renderer=new fu({antialias:!1,powerPreference:`high-performance`,stencil:!1});let n=this.renderer;n.outputColorSpace=Le,n.toneMapping=4,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=1,n.autoClear=!1,n.info.autoReset=!1,n.debug.checkShaderErrors=!1,n.domElement.className=`game-canvas`,e.appendChild(n.domElement),this.post=new Wu(n)}get maxAnisotropy(){return Math.min(8,this.renderer.capabilities.getMaxAnisotropy())}get canvas(){return this.renderer.domElement}applyPreset(e){this.preset=e,this.renderScale=1,this.strugglingS=0,this.applyPixelRatio()}resize(e,t,n){this.width=Math.max(1,e),this.height=Math.max(1,t),n.aspect=this.width/this.height,n.updateProjectionMatrix(),this.applyPixelRatio()}pointScale(e){return this.height*this.renderer.getPixelRatio()/(2*Math.tan(e.fov*Math.PI/360))}render(e,t,n){let r=this.renderer;r.info.reset(),r.setRenderTarget(this.preset.fxaa?this.post.target:null),r.clear(),r.render(e,t),n&&(r.clearDepth(),r.render(n,t)),this.preset.fxaa&&this.post.resolve(r)}async measureRefresh(){let e=[],t=0;if(await new Promise(n=>{let r=i=>{t&&e.push(i-t),t=i,e.length<24?requestAnimationFrame(r):n()};requestAnimationFrame(r),window.setTimeout(n,1500)}),e.length>=8){e.sort((e,t)=>e-t);let t=e[Math.floor(e.length/2)];t>4&&t<40&&(this.refreshMs=t)}this.frameEma=this.refreshMs}trackFrame(e,t){this.clock+=t,this.frameEma+=(Math.min(e,100)-this.frameEma)*.08;let n=this.refreshMs;this.frameEma>n*1.22?(this.slowTime+=t,this.fastTime=0):this.frameEma<n*1.05?(this.fastTime+=t,this.slowTime=0):(this.slowTime=Math.max(0,this.slowTime-t),this.fastTime=Math.max(0,this.fastTime-t)),this.renderScale<=this.preset.minRenderScale&&this.frameEma>n*1.22&&(this.strugglingS+=t),this.slowTime>.6&&this.renderScale>this.preset.minRenderScale?(this.clock-this.lastStepUp<3&&(this.upLockUntil=this.clock+20),this.renderScale=Math.max(this.preset.minRenderScale,this.renderScale-.075),this.slowTime=0,this.applyPixelRatio()):this.fastTime>3&&this.renderScale<1&&this.clock>this.upLockUntil&&(this.renderScale=Math.min(1,this.renderScale+.075),this.fastTime=0,this.lastStepUp=this.clock,this.applyPixelRatio())}get strugglingSeconds(){return this.strugglingS}get stats(){return{frameMs:this.frameEma,refreshMs:this.refreshMs,renderScale:this.renderScale,pixelRatio:this.renderer.getPixelRatio()}}applyPixelRatio(){let e=Math.min(window.devicePixelRatio||1,this.preset.maxPixelRatio);this.renderer.setPixelRatio(e*this.renderScale),this.renderer.setSize(this.width,this.height,!1),this.renderer.getDrawingBufferSize(this.bufferSize),this.post.setSize(this.bufferSize.x,this.bufferSize.y)}},Ku=(e,t,n)=>e<t?t:e>n?n:e,qu=(e,t,n)=>e+(t-e)*n,Ju=(e,t,n)=>{let r=Ku((n-e)/(t-e),0,1);return r*r*(3-2*r)},Yu=(e,t)=>1-Math.exp(-e*t),Xu=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,Zu=class{stiffness;damping;value=0;velocity=0;constructor(e,t){this.stiffness=e,this.damping=t}impulse(e){this.velocity+=e}update(e,t=0){let n=e;for(;n>1e-6;){let e=Math.min(n,1/240),r=-this.stiffness*(this.value-t)-this.damping*this.velocity;this.velocity+=r*e,this.value+=this.velocity*e,n-=e}return this.value}reset(){this.value=0,this.velocity=0}},Qu=()=>new Promise(e=>setTimeout(e,16));function $u(e,t,n){let r=new Uint8Array(t*t*4);for(let i=0;i<t;i++){let a=(i+1)%t*t,o=(i-1+t)%t*t,s=i*t;for(let i=0;i<t;i++){let c=(i+1)%t,l=(i-1+t)%t,u=(e[s+c]-e[s+l])*.5*n,d=(e[a+i]-e[o+i])*.5*n,f=1/Math.sqrt(u*u+d*d+1),p=(s+i)*4;r[p]=(-u*f*.5+.5)*255,r[p+1]=(-d*f*.5+.5)*255,r[p+2]=(f*.5+.5)*255,r[p+3]=255}}return r}function ed(e,t){let n=new Uint8Array(t*t*4);for(let r=0,i=t*t;r<i;r++)n[r*4]=Math.max(0,Math.min(255,e[r*3]*255)),n[r*4+1]=Math.max(0,Math.min(255,e[r*3+1]*255)),n[r*4+2]=Math.max(0,Math.min(255,e[r*3+2]*255)),n[r*4+3]=255;return n}function td(e,t){let n=new Uint8Array(t*t*4);for(let r=0,i=t*t;r<i;r++){let t=Math.max(0,Math.min(255,e[r]*255));n[r*4]=n[r*4+1]=n[r*4+2]=t,n[r*4+3]=255}return n}function nd(e,t,n,r,i,a,o,s){let c=Math.cos(a),l=Math.sin(a),u=Math.ceil(Math.max(r,i)*o)+1;for(let a=-u;a<=u;a++)for(let d=-u;d<=u;d++){let u=(d*c+a*l)/r,f=(-d*l+a*c)/i,p=Math.sqrt(u*u+f*f);if(p>o)continue;let m=((Math.round(t)+d)%e+e)%e;s(((Math.round(n)+a)%e+e)%e*e+m,p)}}function rd(e=512,t=2024){let n=e*e,r=new Float32Array(n*3),i=new Float32Array(n),a=1/e,o=new ku(4,4,t),s=new Ou(160,t+1),c=new ku(5,3,t+9),l=[.2,.29,.11],u=[.33,.43,.18],d=[.34,.26,.17];for(let t=0;t<e;t++)for(let n=0;n<e;n++){let f=n*a,p=t*a,m=t*e+n,h=o.sample(f,p),g=s.sample(f*160,p*160),_=Ju(.66,.8,c.sample(f,p)),v=Ju(.25,.75,h),y=qu(l[0],u[0],v),b=qu(l[1],u[1],v),x=qu(l[2],u[2],v);y=qu(y,d[0],_*.8),b=qu(b,d[1],_*.8),x=qu(x,d[2],_*.8);let S=.85+.25*g;r[m*3]=y*S,r[m*3+1]=b*S,r[m*3+2]=x*S,i[m]=g*.3}let f=vu(t+3),p=[[.24,.34,.12],[.34,.46,.17],[.44,.54,.22],[.52,.53,.28],[.17,.25,.09]],m=Math.round(n*.07);for(let t=0;t<m;t++){let t=f()*e,n=f()*e,a=f()*Math.PI*2,o=3+f()*8,s=p[Math.floor(f()*p.length)],c=Math.cos(a),l=Math.sin(a);for(let a=0;a<o;a++){let u=(Math.round(t)%e+e)%e,d=(Math.round(n)%e+e)%e*e+u,f=(r[d*3]>r[d*3+1]*1.05?.35:.75)*(1-a/o*.4);r[d*3]=qu(r[d*3],s[0],f),r[d*3+1]=qu(r[d*3+1],s[1],f),r[d*3+2]=qu(r[d*3+2],s[2],f),i[d]=Math.max(i[d],.4+a/o*.6),t+=c,n+=l}}return{size:e,map:ed(r,e),normal:$u(i,e,2.2)}}function id(e=128,t=5){let n=new Uint8Array(e*e*4);for(let r=0;r<e;r++)for(let i=0;i<e;i++){let a=i/e,o=r/e,s=wu(a*4,o*2,3,0,t)*3,c=Math.sin((a*38+s)*Math.PI)*.5+.5,l=wu(a*64,o*4,3,0,t+2),u=.72+.18*c+.2*l,d=(r*e+i)*4;n[d]=Math.min(255,.5*u*255),n[d+1]=Math.min(255,.33*u*255),n[d+2]=Math.min(255,.19*u*255),n[d+3]=255}return{size:e,map:n}}function ad(n,r,i){let a=new Pr(n,r,r,w,l);return a.wrapS=a.wrapT=i.repeat===!1?t:e,a.magFilter=o,a.minFilter=c,a.generateMipmaps=!0,a.colorSpace=i.srgb?Le:``,a.needsUpdate=!0,a}var od=`modulepreload`,sd=function(e,t){return new URL(e,t).href},cd={},ld=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=sd(t,n),t=s(t),t in cd)return;cd[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:od,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function ud(e){return new Promise((t,n)=>{let r=new Worker(new URL(new URL(`textureWorker-CnSsmmNV.js`,import.meta.url).href,``+import.meta.url),{type:`module`});r.onmessage=e=>{r.terminate(),t(e.data)},r.onerror=e=>{r.terminate(),n(e)},r.postMessage(e)})}function dd(e){return{map:ad(e.map,e.size,{srgb:!0}),normalMap:ad(e.normal,e.size,{srgb:!1}),roughnessMap:e.roughness?ad(e.roughness,e.size,{srgb:!1}):void 0}}async function fd(e){let t;try{t=await ud(e)}catch{let{bakeAll:n}=await ld(async()=>{let{bakeAll:e}=await import(`./textureWorker-DEBzA0Oz.js`);return{bakeAll:e}},[],import.meta.url);t=n(e)}return{dirt:dd(t.dirt),grass:dd(t.grass)}}var pd=(e,t,n,r,i,a)=>({tint:e,accent:t,bands:n,speckle:r,cracks:i,relief:a}),md=[{material:`dirt`,name:`Dirt`,color:`#8a5e3c`,ore:`iron`,oreName:`Iron ore`,oreStyle:`metal`,oreColor:`#5d6470`,oreRock:`#b8612a`,look:pd(`#ffffff`,`#3a281c`,0,0,0,1)},{material:`clay`,name:`Clay`,color:`#a8a39c`,ore:`copper`,oreName:`Copper ore`,oreStyle:`metal`,oreColor:`#d0834a`,oreRock:`#578c75`,look:pd(`#b3aea8`,`#8a847c`,.25,0,0,.3)},{material:`sandstone`,name:`Sandstone`,color:`#e4a552`,ore:`silver`,oreName:`Silver ore`,oreStyle:`metal`,oreColor:`#dfe4ea`,oreRock:`#6b6966`,look:pd(`#f0b35e`,`#a85a26`,1,.15,0,.8)},{material:`limestone`,name:`Limestone`,color:`#e6e3d8`,ore:`gold`,oreName:`Gold ore`,oreStyle:`metal`,oreColor:`#e8bf45`,oreRock:`#807a70`,look:pd(`#f2f0e8`,`#9a978c`,.15,.05,.6,.9)},{material:`granite`,name:`Granite`,color:`#8a7a7e`,ore:`gem`,oreName:`Gem`,oreStyle:`crystal`,oreColor:`#4f8fe0`,oreRock:`#333338`,look:pd(`#8c7c80`,`#1d1a1b`,0,1,.15,1.2)},{material:`basalt`,name:`Basalt`,color:`#4c4c52`,ore:`platinum`,oreName:`Platinum ore`,oreStyle:`metal`,oreColor:`#e4e7ec`,oreRock:`#2c2c30`,look:pd(`#6a6a72`,`#26262a`,0,.35,.2,1.1)},{material:`slate`,name:`Slate`,color:`#5d6b78`,ore:`emerald`,oreName:`Emerald`,oreStyle:`crystal`,oreColor:`#2fbf6a`,oreRock:`#3b4652`,look:pd(`#6d7c8a`,`#36414c`,.9,0,.15,.7)},{material:`marble`,name:`Marble`,color:`#ece9e3`,ore:`ruby`,oreName:`Ruby`,oreStyle:`crystal`,oreColor:`#d8203c`,oreRock:`#d8d4cc`,look:pd(`#f6f3ee`,`#8a8f99`,.1,0,.75,.5)},{material:`obsidian`,name:`Obsidian`,color:`#2f2638`,ore:`sapphire`,oreName:`Sapphire`,oreStyle:`crystal`,oreColor:`#2a4fd8`,oreRock:`#1c1822`,look:pd(`#4c3e5a`,`#7a64a0`,0,.25,.1,.45)},{material:`bedrock`,name:`Bedrock`,color:`#3f3833`,ore:`diamond`,oreName:`Diamond`,oreStyle:`crystal`,oreColor:`#e8f6ff`,oreRock:`#2a2522`,look:pd(`#5a5048`,`#1c1916`,.2,.2,.5,1.3)},{material:`quartzite`,name:`Quartzite`,color:`#e6d3cd`,ore:`opal`,oreName:`Opal`,oreStyle:`crystal`,oreColor:`#dcd2f2`,oreRock:`#bfb0aa`,look:pd(`#f0ddd6`,`#b89088`,.2,.45,0,.9)},{material:`gneiss`,name:`Gneiss`,color:`#958c86`,ore:`topaz`,oreName:`Topaz`,oreStyle:`crystal`,oreColor:`#f0a830`,oreRock:`#5a524c`,look:pd(`#a39a93`,`#443c36`,1,.2,0,1.1)},{material:`schist`,name:`Schist`,color:`#7d8c78`,ore:`amethyst`,oreName:`Amethyst`,oreStyle:`crystal`,oreColor:`#9a4fd8`,oreRock:`#4e5a4a`,look:pd(`#8d9d87`,`#c8d0c0`,.7,.35,0,1)},{material:`jasper`,name:`Jasper`,color:`#ad4630`,ore:`jade`,oreName:`Jade`,oreStyle:`crystal`,oreColor:`#4fa878`,oreRock:`#6e2618`,look:pd(`#c2533a`,`#6e2618`,.45,.1,.1,.8)},{material:`hematite`,name:`Hematite`,color:`#6b312b`,ore:`titanium`,oreName:`Titanium ore`,oreStyle:`metal`,oreColor:`#bcc4cc`,oreRock:`#3a1c18`,look:pd(`#7a3a32`,`#2a1614`,0,.6,.2,1.1)},{material:`magnetite`,name:`Magnetite`,color:`#3a3c42`,ore:`cobalt`,oreName:`Cobalt ore`,oreStyle:`metal`,oreColor:`#3a62d8`,oreRock:`#1f2024`,look:pd(`#565a62`,`#9aa0aa`,0,.8,.1,1.2)},{material:`serpentine`,name:`Serpentine`,color:`#4f7a52`,ore:`tanzanite`,oreName:`Tanzanite`,oreStyle:`crystal`,oreColor:`#5a4fd8`,oreRock:`#2c4a2e`,look:pd(`#5a8c5e`,`#2a462c`,.2,.15,.45,.7)},{material:`crystalrock`,name:`Crystal Rock`,color:`#b6d2de`,ore:`moonstone`,oreName:`Moonstone`,oreStyle:`crystal`,oreColor:`#d6e6ff`,oreRock:`#7a9aa8`,look:pd(`#c4e0ec`,`#ffffff`,0,.75,.1,.6)},{material:`glassrock`,name:`Glass Rock`,color:`#9cc2b6`,ore:`sunstone`,oreName:`Sunstone`,oreStyle:`crystal`,oreColor:`#ff9a40`,oreRock:`#5e8278`,look:pd(`#a8d0c4`,`#e8fff8`,.3,.3,.2,.35)},{material:`deepbasalt`,name:`Deep Basalt`,color:`#2a2a33`,ore:`tungsten`,oreName:`Tungsten ore`,oreStyle:`metal`,oreColor:`#9a9ca2`,oreRock:`#18181e`,look:pd(`#474758`,`#6a6a90`,0,.45,.25,1.2)},{material:`emberrock`,name:`Ember Rock`,color:`#7e3216`,ore:`fireopal`,oreName:`Fire Opal`,oreStyle:`crystal`,oreColor:`#ff5a20`,oreRock:`#3a1a0c`,look:pd(`#8c3a1a`,`#ff8a3a`,.2,.55,.35,1)},{material:`magmacrust`,name:`Magma Crust`,color:`#3e1c12`,ore:`starmetal`,oreName:`Starmetal ore`,oreStyle:`metal`,oreColor:`#c8d8ff`,oreRock:`#1e0e08`,look:pd(`#5e2e1e`,`#ff6a2a`,0,.65,.55,1.3)},{material:`ironstone`,name:`Ironstone`,color:`#5c4c46`,ore:`meteorite`,oreName:`Meteorite`,oreStyle:`metal`,oreColor:`#8c8278`,oreRock:`#2c221e`,look:pd(`#6a5850`,`#8c4a2a`,.3,.5,.2,1.1)},{material:`glowstone`,name:`Glowstone`,color:`#cabb6c`,ore:`luminite`,oreName:`Luminite`,oreStyle:`crystal`,oreColor:`#9affd0`,oreRock:`#7a7040`,look:pd(`#d8c878`,`#fff4a8`,0,.85,0,.8)},{material:`voidstone`,name:`Voidstone`,color:`#221c38`,ore:`voidcrystal`,oreName:`Void Crystal`,oreStyle:`crystal`,oreColor:`#7a3aff`,oreRock:`#120e1e`,look:pd(`#3e3266`,`#8a6cff`,0,.6,.2,.9)},{material:`adamant`,name:`Adamant`,color:`#6f7f86`,ore:`adamantite`,oreName:`Adamantite`,oreStyle:`metal`,oreColor:`#8adcc0`,oreRock:`#3a4448`,look:pd(`#7c8c94`,`#cad6dc`,.35,.4,.1,1.2)},{material:`runestone`,name:`Runestone`,color:`#4c5864`,ore:`runeshard`,oreName:`Rune Shard`,oreStyle:`crystal`,oreColor:`#40d8ff`,oreRock:`#2a323a`,look:pd(`#566472`,`#6fd8ff`,.55,.2,.4,1)},{material:`coreshell`,name:`Coreshell`,color:`#8a4c1c`,ore:`corecrystal`,oreName:`Core Crystal`,oreStyle:`crystal`,oreColor:`#ffb020`,oreRock:`#4a2810`,look:pd(`#9a5622`,`#e8a848`,.65,.3,.2,1.1)},{material:`heartstone`,name:`Heartstone`,color:`#7c213c`,ore:`heartgem`,oreName:`Heart Gem`,oreStyle:`crystal`,oreColor:`#ff2a5a`,oreRock:`#3e1020`,look:pd(`#8a2844`,`#ff7aa0`,.2,.55,.2,1)},{material:`core`,name:`The Core`,color:`#d88a2c`,ore:`starcore`,oreName:`Star Core`,oreStyle:`crystal`,oreColor:`#fff4c0`,oreRock:`#7a4410`,look:pd(`#e8962e`,`#fff0b0`,.3,.75,.15,1)}],hd=md.map(e=>e.material),gd=md.map(e=>e.ore),_d=[...hd,...gd],vd=[2,1.5,1.1,.8,.5],yd=[1,.93,.87,.81,.75],bd=[0,.25,.5,.75,1],xd=md.map((e,t)=>{let n=t+1;return{index:n,name:e.name,material:e.material,ore:e.ore,top:t*10,bottom:n*10,orePerM3:vd[t]??Math.max(.25,+(.5*.97**(n-5)).toFixed(3)),chests:3,look:e.look,hardness:bd[t]??1,bite:yd[t]??+(.75*.95**(n-5)).toFixed(4),deep:n>10}}),Sd=xd[xd.length-1].bottom,Cd=Object.fromEntries(md.flatMap(e=>[[e.material,e.name],[e.ore,e.oreName]])),wd=Object.fromEntries(md.flatMap(e=>[[e.material,e.color],[e.ore,e.oreColor]])),Td=Object.fromEntries(md.map((e,t)=>[e.ore,{style:e.oreStyle,color:e.oreColor,rock:e.oreRock,rank:t}]));function Ed(e){return Td[e]?.style===`crystal`}function Dd(e){let t=Math.floor(Math.max(0,e)/10);return xd[Math.min(xd.length-1,t)]}function Od(e){return xd[Math.max(1,Math.min(xd.length,e))-1]}function kd(e,t,n){return .35*Math.sin(e*.9+n*1.7)*Math.cos(t*.7-n*.9)+.15*Math.sin((e+t)*2.3+n)}function Ad(e,t,n){let r=-t,i=Math.round(r/10)*10,a=Math.floor(r/10);return i>0&&i<Sd&&(a=r<i+kd(e,n,i)?i/10-1:i/10),xd[Math.max(0,Math.min(xd.length-1,a))]}var jd=1.3,Md=(e,t)=>e*jd**(t-5);function Nd(e){if(e<100)return Math.round(e);let t=10**(Math.floor(Math.log10(e))-1);return Math.round(e/t)*t}var Pd=[1,2,3,5,8],Fd=[15,30,60,120,250],Id=Object.fromEntries(xd.flatMap((e,t)=>[[e.material,Pd[t]??Nd(Md(8,e.index))],[e.ore,Fd[t]??Nd(Md(250,e.index))]])),Ld=[0,240,710,1425,2375,3325,5225,8075,12825,19950,...Array.from({length:20},(e,t)=>Nd(19950*jd**+(t+1)))],Rd=1e6,zd={fuel:[5,8,12,18,26,34,42,50,60,72],fuelPrice:[300,1200,4e3,11e3,3e4,8e4,22e4,6e5,16e5],speed:[1.5,2,2.6,3.3,4.2,5.2,6.4,7.6,9],speedPrice:[800,3500,1e4,28e3,75e3,2e5,55e4,15e5],refill:3};function Bd(e,t){let n={1:[80,140],2:[200,320],3:[400,600],4:[800,1200],5:[1500,2200]}[e],[r,i]=n??[Md(1500,e),Md(2200,e)],a=Math.round((r+(i-r)*t/6)/5)*5;return n?a:Nd(a)}function Vd(e,t){let n={1:[300,420],2:[650,850],3:[1200,1600],4:[2500,3200],5:[4500,6e3]}[e],[r,i]=n??[Md(4500,e),Md(6e3,e)],a=Math.round((r+(i-r)*Math.max(0,Math.min(1,t)))/5)*5;return n?a:Nd(a)}function Hd(e){let t=e.onBeforeCompile.bind(e),n=e.customProgramCacheKey.bind(e);return e.onBeforeCompile=(e,n)=>{t(e,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vAmbY;`).replace(`#include <project_vertex>`,`#include <project_vertex>
{
  vec4 aw = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
  aw = instanceMatrix * aw;
#endif
  vAmbY = (modelMatrix * aw).y;
}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vAmbY;`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
{
  float ambSky = mix(0.1, 1.0, exp(-max(0.0, -vAmbY - 0.8) / 6.5));
  reflectedLight.indirectDiffuse *= ambSky;
  reflectedLight.indirectSpecular *= ambSky;
}`)},e.customProgramCacheKey=()=>`${n()}|depth-ambient`,e}function Ud(e){return .1+.9*Math.exp(-Math.max(0,e-.8)/6.5)}var Wd=new Map;function Gd(e){let t=Wd.get(e);return t||(t=Hd(new Ua({color:new K(e)})),Wd.set(e,t)),t}function Z(e,t,n=0,r=0,i=0,a=0,o=0,s=0){let c=new J(e,Gd(t));return c.position.set(n,r,i),c.rotation.set(a,o,s),c.castShadow=!0,c.receiveShadow=!0,c}var Q=(e,t,n)=>new oi(e,t,n),Kd=(e,t,n=16)=>new Y(e,e,t,n),qd=`#e8e1cf`,Jd=`#d9cda9`,Yd=`#2d2a26`;function Xd(e,t,n=qd){return Z(Q(e,.004,t),n,0,.002,0)}var Zd={plank:()=>{let e=new G;e.add(Z(Q(.36,.03,.1),`#8c8478`,0,.015,0));for(let t=0;t<7;t++)e.add(Z(Q(.022,.004,.04),`#4a4239`,-.13+t*.043,.031,0));return e},photo:()=>{let e=new G;return e.add(Z(Q(.17,.014,.13),`#4b3526`,0,.007,0)),e.add(Z(Q(.14,.004,.1),`#b89f78`,0,.015,0)),e.add(Z(Q(.03,.005,.05),`#6d5a44`,-.03,.017,.01)),e.add(Z(Q(.025,.005,.045),`#6d5a44`,.005,.017,.012)),e.add(Z(Q(.016,.005,.03),`#6d5a44`,.03,.017,.02)),e.add(Z(Q(.16,.002,.004),`#f4f1ea`,0,.019,0,0,.55,0)),e},lunchbox:()=>{let e=new G;return e.add(Z(Q(.2,.12,.1),`#a8433a`,0,.06,0)),e.add(Z(Q(.205,.02,.105),`#8a352e`,0,.115,0)),e.add(Z(new ja(.035,.005,6,12,Math.PI),`#7a7470`,0,.125,0)),e.add(Z(Q(.03,.02,.008),`#b9b2a8`,0,.09,.052)),e},badge:()=>{let e=new G;return e.add(Z(Q(.09,.004,.058),`#f1efe8`,0,.002,0)),e.add(Z(Q(.09,.005,.014),`#3f6ea8`,0,.003,-.022)),e.add(Z(Q(.024,.005,.03),`#7c7870`,-.028,.004,.008)),e.add(Z(new ja(.05,.004,5,20),`#2f4d7a`,0,.003,-.075,Math.PI/2,0,0)),e},card:()=>{let e=new G;return e.add(Z(Q(.12,.004,.16),`#efe7d6`,-.03,.03,0,0,0,.5)),e.add(Z(Q(.12,.004,.16),`#e8dcc4`,.03,.03,0,0,0,-.5)),e.add(Z(Q(.04,.02,.05),`#c96f7c`,-.04,.045,0,0,0,.5)),e},notebook:()=>{let e=new G;return e.add(Z(Q(.15,.022,.2),`#2f3a36`,0,.011,0)),e.add(Z(Q(.143,.018,.195),Jd,.004,.011,0)),e.add(Z(Q(.015,.023,.2),`#232b28`,-.07,.0115,0)),e},cassette:()=>{let e=new G;return e.add(Z(Q(.1,.016,.064),`#1e1e20`,0,.008,0)),e.add(Z(Q(.08,.017,.03),`#e6dcc4`,0,.009,-.012)),e.add(Z(Kd(.009,.018),`#dedad2`,-.022,.009,.012)),e.add(Z(Kd(.009,.018),`#dedad2`,.022,.009,.012)),e},box:()=>{let e=new G;return e.add(Z(Q(.26,.16,.2),`#9b7a55`,0,.08,0)),e.add(Z(Q(.27,.165,.008),`#d8cfb8`,0,.08,0)),e.add(Z(Q(.008,.165,.21),`#d8cfb8`,0,.08,0)),e},printout:()=>{let e=new G;for(let t=0;t<4;t++)e.add(Z(Q(.21,.006,.12),t%2?`#e4e0d4`:`#eeebe2`,0,.003+t*.006,t%2*.006));e.add(Z(new ja(.03,.003,5,20),`#b3322c`,.03,.028,0,Math.PI/2,0,0));for(let t=0;t<5;t++)e.add(Z(Q(.15,.001,.004),Yd,-.01,.027,-.04+t*.02));return e},letter:()=>{let e=new G;e.add(Xd(.15,.2,Jd));for(let t=0;t<8;t++)e.add(Z(Q(.11,.001,.003),`#3b3a5a`,-.005,.0045,-.07+t*.018));return e.add(Z(Q(.15,.001,.002),`#b8ad92`,0,.0045,.03)),e},drawing:()=>{let e=new G;return e.add(Xd(.2,.15,`#f3efe4`)),e.add(Z(Q(.05,.003,.05),`#d5503a`,-.05,.005,.02)),e.add(Z(Q(.02,.003,.06),`#3f6ea8`,.02,.005,.01)),e.add(Z(Q(.06,.003,.012),`#3d8a47`,.03,.005,-.04)),e.add(Z(Q(.018,.003,.018),`#e2b93b`,.06,.005,.05)),e},receipt:()=>{let e=new G;e.add(Xd(.06,.17,`#f0ede4`));for(let t=0;t<9;t++)e.add(Z(Q(.04,.001,.003),Yd,0,.0045,-.07+t*.016));return e},envelope:()=>{let e=new G;return e.add(Z(Q(.19,.012,.11),`#e2d7bd`,0,.006,0)),e.add(Z(Q(.19,.002,.004),`#c7bb9f`,0,.0125,.02,0,.5,0)),e.add(Z(Q(.19,.002,.004),`#c7bb9f`,0,.0125,.02,0,-.5,0)),e.add(Z(Q(.03,.003,.034),`#a8433a`,.065,.013,-.028)),e},blueprint:()=>{let e=new G;return e.add(Z(Kd(.028,.32),`#2f5f9a`,0,.028,0,0,0,Math.PI/2)),e.add(Z(Kd(.03,.02),`#d8cfb8`,.06,.028,0,0,0,Math.PI/2)),e.add(Z(Kd(.03,.02),`#d8cfb8`,-.07,.028,0,0,0,Math.PI/2)),e},hat:()=>{let e=new G;return e.add(Z(new Aa(.075,14,8,0,Math.PI*2,0,Math.PI/2),`#b24a3f`,0,.02,0)),e.add(Z(Kd(.078,.04,18),`#e6dcc4`,0,.02,0)),e.add(Z(new Aa(.025,8,6),`#e6dcc4`,0,.1,0)),e},newspaper:()=>{let e=new G;e.add(Z(Q(.23,.014,.16),`#d7d3c8`,0,.007,0)),e.add(Z(Q(.2,.002,.025),`#2a2926`,0,.015,-.055));for(let t=0;t<6;t++)e.add(Z(Q(.09,.001,.003),`#55524b`,t<3?-.05:.05,.015,-.02+t%3*.03));return e},shovel:()=>{let e=new G;e.add(Z(Kd(.018,.5,10),`#8a6a48`,0,.018,0,0,0,Math.PI/2));for(let t=0;t<6;t++)e.add(Z(Kd(.019,.004,10),`#3b2c1e`,-.15+t*.03,.018,0,0,0,Math.PI/2));return e},watch:()=>{let e=new G;e.add(Z(Kd(.028,.012,20),`#b58f3f`,0,.006,0)),e.add(Z(Kd(.023,.013,20),`#efe9d8`,0,.007,0)),e.add(Z(new ja(.008,.003,5,10),`#b58f3f`,0,.006,-.036,Math.PI/2,0,0));for(let t=0;t<5;t++)e.add(Z(new ja(.006,.0018,4,8),`#9c7a35`,.01*t,.003,-.05-t*.01,Math.PI/2,0,t));return e},candle:()=>{let e=new G;return e.add(Z(Kd(.02,.06,12),`#ece4cc`,-.03,.03,0)),e.add(Z(Kd(.0025,.012,5),`#2a2622`,-.03,.066,0)),e.add(Z(Q(.055,.016,.035),`#a8433a`,.04,.008,.01)),e.add(Z(Q(.045,.017,.028),`#e2cfa0`,.04,.009,.01)),e},collar:()=>{let e=new G;return e.add(Z(new ja(.07,.011,6,24),`#6b4428`,0,.011,0,Math.PI/2,0,0)),e.add(Z(Q(.018,.024,.014),`#8a8680`,.07,.013,0)),e.add(Z(Kd(.014,.003,14),`#c9a24a`,.07,.013,.024,Math.PI/2,0,0)),e}};function Qd(e){let t=Zd[e]();return t.name=`story-${e}`,t}var $d={handleLength:.86,headY:.8,pickLength:.26,adzeLength:.22};function ef(e,t=.28){let n=[],r=[],i=[],a=(e,n)=>{let r=e*t,i=n*t;return[[e,n-i],[e-r,n],[-e+r,n],[-e,n-i],[-e,-n+i],[-e+r,-n],[e-r,-n],[e,-n+i]]};for(let t of e)for(let[e,i]of a(t.w*.5,t.h*.5))n.push(t.c.x+t.u.x*e+t.v.x*i,t.c.y+t.u.y*e+t.v.y*i,t.c.z+t.u.z*e+t.v.z*i),r.push(t.shade,t.shade,t.shade);for(let t=0;t<e.length-1;t++)for(let e=0;e<8;e++){let n=t*8+e,r=t*8+(e+1)%8,a=n+8,o=r+8;i.push(n,a,r,r,a,o)}for(let[t,a]of[[0,!0],[e.length-1,!1]]){let o=e[t];n.push(o.c.x,o.c.y,o.c.z),r.push(o.shade,o.shade,o.shade);let s=n.length/3-1;for(let e=0;e<8;e++){let n=t*8+e,r=t*8+(e+1)%8;a?i.push(s,r,n):i.push(s,n,r)}}let o=new cr;o.setAttribute(`position`,new q(new Float32Array(n),3)),o.setAttribute(`color`,new q(new Float32Array(r),3)),o.setIndex(i);let s=o.toNonIndexed();return s.computeVertexNormals(),s}function tf(e,t,n,r,i,a,o){let s=[],c=$d.headY;for(let l=0;l<=a;l++){let u=l/a,d=new U(0,c-n*u*u,e*t*u),f=new U(0,-2*n*u,e*t).normalize(),p=new U(1,0,0),m=new U().crossVectors(f,p).multiplyScalar(e).normalize(),h=u**.85;s.push({c:d,u:p,v:m,w:qu(r[0],r[1],h),h:qu(i[0],i[1],h),shade:qu(.62,1.15*o,Ju(.55,1,u))})}return s}function nf(e,t,n){let r=new G;r.name=`pickaxe`;let i=new Ha({map:e,color:n.wood,vertexColors:!0,roughness:.62,metalness:0}),a=new Ha({color:n.steel,vertexColors:!0,roughness:n.roughness,metalness:n.metalness,envMap:t,envMapIntensity:.6,side:2}),o=new Ha({color:n.collar,vertexColors:!0,roughness:n.collarRough,metalness:.9,envMap:t,envMapIntensity:.7,side:2}),s=new Ha({color:n.wrap,roughness:.82,metalness:0}),c=$d.handleLength,l=new Ta([[0,0],[.021,0],[.0235,.012],[.022,.03],[.0172,.055],[.0172,.12],[.018,.35],[.0195,.62],[.0225,.76],[.0235,.82],[.021,c],[0,c]].map(([e,t])=>new H(e,t)),14);l.scale(1,1,1.28);let u=l.getAttribute(`position`),d=new Float32Array(u.count*3);for(let e=0;e<u.count;e++){let t=u.getY(e),n=1-.28*Ju(.05,.12,t)*(1-Ju(.3,.42,t))-.12*Ju(.7,.8,t);d[e*3]=d[e*3+1]=d[e*3+2]=n}l.setAttribute(`color`,new q(d,3)),r.add(new J(l,i));let f=new ja(.0205,.0042,6,16);f.scale(1,1,1.28);for(let e=0;e<n.wrapRings;e++){let t=new J(f,s);t.rotation.x=Math.PI/2,t.position.y=.07+e*(.2/Math.max(1,n.wrapRings-1)),r.add(t)}if(n.ferrule){let e=new J(new Y(.0245,.025,.03,14),o);e.scale.z=1.25,e.position.y=.016,r.add(e)}let p=new G;p.position.y=$d.headY;let m=n.headScale;p.scale.setScalar(m);let h=e=>e.map(e=>({...e,c:e.c.clone().setY(e.c.y-$d.headY)})),g=h(tf(-1,$d.pickLength,.05,[.034,.0035],[.042,.0035],10,n.edge)),_=h(tf(1,$d.adzeLength,.06,[.034,.07],[.042,.006],10,n.edge));p.add(new J(ef(g),a)),p.add(new J(ef(_),a));let v=g[g.length-1].c,y=new U(v.x*m,$d.headY+v.y*m,v.z*m),b=[{c:new U(0,-.048,0),u:new U(1,0,0),v:new U(0,0,1),w:.05,h:.056,shade:.55},{c:new U(0,-.04,0),u:new U(1,0,0),v:new U(0,0,1),w:.056,h:.066,shade:.6},{c:new U(0,.036,0),u:new U(1,0,0),v:new U(0,0,1),w:.056,h:.066,shade:.62},{c:new U(0,.044,0),u:new U(1,0,0),v:new U(0,0,1),w:.048,h:.056,shade:.7}];if(p.add(new J(ef(b,.32),o)),n.rivets){let e=new Aa(.0055,8,6);for(let t of[-.022,.022])for(let n of[-.0285,.0285]){let r=new J(e,o);r.position.set(n,t,0),p.add(r)}}let x=new J(new oi(.03,.006,.006),new Ha({color:`#3c3a38`,roughness:.5,metalness:.8,envMap:t}));return x.position.y=.047,p.add(x),r.add(p),r.traverse(e=>{e.castShadow=!1,e.receiveShadow=!1}),{group:r,tip:y}}function rf(e){let t=new G;t.name=`lantern`;let n=new Ha({color:`#6b5a3c`,roughness:.5,metalness:.85,envMap:e,envMapIntensity:.6}),r=new Ha({color:`#34322f`,roughness:.6,metalness:.7,envMap:e,envMapIntensity:.5}),i=new Ta([[0,0],[.07,0],[.078,.012],[.08,.035],[.07,.052],[.04,.058],[0,.058]].map(([e,t])=>new H(e,t)),20);t.add(new J(i,n));let a=new J(new Ta([[.036,.058],[.056,.085],[.064,.12],[.058,.158],[.038,.185]].map(([e,t])=>new H(e,t)),20),new br({color:16757594,transparent:!0,opacity:.55,blending:2,depthWrite:!1}));a.name=`lantern-glow`,t.add(a);let o=new br({color:16769696,toneMapped:!1}),s=new J(new Aa(.011,10,8),o);s.scale.set(1,2.1,1),s.position.y=.112,s.name=`lantern-flame`,t.add(s);let c=new Y(.0028,.0028,.13,5);for(let e=0;e<4;e++){let n=e/4*Math.PI*2+Math.PI/4,i=new J(c,r);i.position.set(Math.cos(n)*.067,.122,Math.sin(n)*.067),t.add(i)}let l=new ja(.068,.0028,5,24);for(let e of[.09,.15]){let n=new J(l,r);n.rotation.x=Math.PI/2,n.position.y=e,t.add(n)}let u=new Y(.0065,.0065,.15,8);for(let e of[-.084,.084]){let r=new J(u,n);r.position.set(e,.125,0),t.add(r)}let d=new J(new Y(.03,.074,.038,18),n);d.position.y=.203,t.add(d);let f=new J(new Y(.018,.022,.03,12),r);f.position.y=.236,t.add(f);let p=new J(new ja(.075,.0032,5,24,Math.PI),r);return p.position.y=.21,t.add(p),t.traverse(e=>{e.castShadow=!1,e.receiveShadow=!1}),{group:t,flame:new U(0,.112,0)}}var af={sunDirection:new U(.74,.5,.3).normalize(),sunColor:new K(`#ffeed6`),sunIntensity:3.1,zenithColor:new K(`#2f6cc2`),horizonColor:new K(`#bfd3e2`),groundBounceColor:new K(`#5b6440`),hemiSky:new K(`#b5cbe6`),hemiGround:new K(`#58603c`),hemiIntensity:1.35,fogDensity:.0072},of={soilMetres:1.9,grassMetres:2.6},sf={minX:-5,maxX:5,minZ:-11,maxZ:-1,depth:300,headroom:.48,cell:.08,floor:.4},cf={position:new U(-18.5,0,-6),counter:new U(-15.2,0,-6),clearing:7},lf=[[-5.4,-5.2],[-8.5,-4.3],[-11.5,-5],[-14.6,-6]],uf={spawn:new U(0,0,-2.2),spawnYaw:0,spawnPitch:-.38,basinRadius:50},df={windupEnd:.36,impact:.47,holdEnd:.57},ff=new U(0,1,0);function pf(e,t){let n=e.clone().normalize(),r=t.clone().addScaledVector(n,-t.dot(n)).normalize().clone().negate(),i=new U().crossVectors(n,r);return new lt().setFromRotationMatrix(new Mt().makeBasis(i,n,r))}function mf(e,t){let n=t.y,r=-t.z,i=Math.hypot(n,r),a=e.x*e.x+e.y*e.y,o=new U(0,0,-(-e.z+Math.sqrt(Math.max(.01,i*i-a)))).clone().sub(e).normalize(),s=new U().crossVectors(o,ff).normalize(),c=new U().crossVectors(s,o).normalize(),l=Math.atan2(r,n),u=o.clone().multiplyScalar(Math.cos(l)).addScaledVector(c,Math.sin(l)),d=o.clone().multiplyScalar(Math.sin(l)).addScaledVector(c,-Math.cos(l));return{pos:e.clone(),rot:pf(u,d)}}var hf=e=>1-(1-e)**3,gf=e=>e*e*e,_f=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,vf=class{woodMap;environment;scene=new hn;root=new G;pivot=new G;sun;hemi;lanternFill=new Do(16758896,0,3,2);swayX=new Zu(110,15);swayY=new Zu(110,15);recoil=new Zu(320,17);land=new Zu(140,13);swingX=new Zu(40,5);swingZ=new Zu(40,5);time=0;tool=new G;lanternPivot=new G;lanternFlame=new U;itemPivot=new G;itemKind=null;tip=new U;strikeHand=new U(.2,-.5,-.26);held=`pickaxe`;shown=`pickaxe`;switchT=1;rest;windup;strike;pose={pos:new U,rot:new lt};tmpQ=new lt;tmpV=new U;arcCtrl=new U;constructor(e,t,n){this.woodMap=e,this.environment=t,this.sun=new Ao(af.sunColor,af.sunIntensity*.9),this.scene.add(this.sun,this.sun.target),this.hemi=new po(af.hemiSky,af.hemiGround,af.hemiIntensity),this.scene.add(this.hemi,this.lanternFill),this.pivot.add(this.tool),this.root.add(this.pivot);let r=rf(t);r.group.position.y=-.2,this.lanternFlame.copy(r.flame).add(r.group.position),this.lanternPivot.add(r.group),this.lanternPivot.visible=!1,this.root.add(this.lanternPivot),this.itemPivot.visible=!1,this.root.add(this.itemPivot),this.scene.add(this.root),this.rest={pos:new U(.43,-.75,-.23),rot:pf(new U(-.157,.785,-.589),new U(-.45,-.25,-.85))},this.windup={pos:new U(.42,-.36,-.3),rot:pf(new U(-.1,.9,-.15),new U(-.2,.35,-1))},this.strike={pos:new U,rot:new lt},this.setPickaxe(n)}setPickaxe(e){for(let e of[...this.tool.children])this.tool.remove(e);let t=nf(this.woodMap,this.environment,e);this.tool.add(t.group),this.tip.copy(t.tip);let n=mf(this.strikeHand,this.tip);this.strike.pos.copy(n.pos),this.strike.rot.copy(n.rot)}setHeld(e,t=null){if((e!==this.held||e===`item`&&t!==this.itemKind)&&(this.held=e,this.switchT=0,e===`item`&&t)){for(let e of[...this.itemPivot.children])this.itemPivot.remove(e);let e=Qd(t);e.scale.setScalar(1.25),this.itemPivot.add(e),this.itemKind=t}}get holding(){return this.shown}setLighting(e,t){let n=Ud(e);this.hemi.intensity=af.hemiIntensity*n,this.sun.intensity=af.sunIntensity*.9*Math.min(1,n*1.2),this.lanternFill.intensity=t?1.2:0}lanternFlameWorld(e){return e.copy(this.lanternFlame).applyMatrix4(this.lanternPivot.matrixWorld)}onImpact(e){this.recoil.impulse(e*2.6)}onLanded(e){this.land.impulse(-Math.min(e,14)*.06)}update(e,t,n){this.time+=e,this.root.position.copy(t.position),this.root.quaternion.copy(t.quaternion),this.sun.position.copy(t.position).addScaledVector(af.sunDirection,10),this.sun.target.position.copy(t.position),this.sun.target.updateMatrixWorld(),this.computeSwing(n.swing),this.swayX.velocity+=-n.mouseDX*.0011,this.swayY.velocity+=n.mouseDY*.0011,this.swayX.update(e),this.swayY.update(e),this.swayX.value=Ku(this.swayX.value,-.06,.06),this.swayY.value=Ku(this.swayY.value,-.05,.05),this.recoil.update(e),this.land.update(e);let r=+(n.swing<0),i=Math.sin(n.bobPhase)*.014*n.bobAmount*r,a=(-Math.abs(Math.sin(n.bobPhase))*.016+.008)*n.bobAmount*r,o=Math.sin(this.time*1.6)*.004*r,s=n.hitstop>0?Math.sin(this.time*120)*.0025:0;this.pivot.position.copy(this.pose.pos),this.pivot.position.x+=i+this.swayX.value*.3+s,this.pivot.position.y+=a+o-this.swayY.value*.2+this.land.value-.03*n.sprintAmount,this.pivot.quaternion.copy(this.pose.rot),this.tmpQ.setFromAxisAngle(this.tmpV.set(1,0,0),this.recoil.value*.12+this.swayY.value*.6+.15*n.sprintAmount),this.pivot.quaternion.premultiply(this.tmpQ),this.tmpQ.setFromAxisAngle(this.tmpV.set(0,1,0),this.swayX.value*1.2),this.pivot.quaternion.premultiply(this.tmpQ),this.switchT<1&&(this.switchT=Math.min(1,this.switchT+e/.36),this.switchT>=.5&&(this.shown=this.held));let c=this.switchT<1?Math.sin(this.switchT*Math.PI)*.45:0;this.pivot.visible=this.shown===`pickaxe`,this.pivot.position.y-=this.shown===`pickaxe`?c:0,this.lanternPivot.visible=this.shown===`lantern`,this.itemPivot.visible=this.shown===`item`,this.shown===`item`&&(this.itemPivot.position.set(.2+i+this.swayX.value*.3,-.26+a+o-c+this.land.value,-.5),this.itemPivot.rotation.set(1.05+this.swayY.value,-.35+this.swayX.value,.1)),this.lanternFill.position.set(.25,-.1,-.5).applyQuaternion(t.quaternion).add(t.position),this.shown===`lantern`&&(this.swingX.velocity+=n.mouseDX*.0025+Math.cos(n.bobPhase)*.02*n.bobAmount,this.swingZ.velocity+=-n.mouseDY*.0015,this.swingX.update(e),this.swingZ.update(e),this.lanternPivot.position.set(.25+i+this.swayX.value*.3,-.1+a+o-c+this.land.value,-.66),this.lanternPivot.rotation.set(Ku(this.swingZ.value,-.35,.35),.4,Ku(this.swingX.value,-.4,.4))),this.root.updateMatrixWorld()}computeSwing(e){let t=this.pose;if(e<0){t.pos.copy(this.rest.pos),t.rot.copy(this.rest.rot);return}let{windupEnd:n,impact:r,holdEnd:i}=df;if(e<n){let r=hf(e/n);t.pos.lerpVectors(this.rest.pos,this.windup.pos,r),t.rot.slerpQuaternions(this.rest.rot,this.windup.rot,r)}else if(e<r){let i=gf((e-n)/(r-n));this.arcCtrl.lerpVectors(this.windup.pos,this.strike.pos,.5),this.arcCtrl.y+=.12,this.arcCtrl.z-=.08;let a=1-i;t.pos.copy(this.windup.pos).multiplyScalar(a*a).addScaledVector(this.arcCtrl,2*a*i).addScaledVector(this.strike.pos,i*i),t.rot.slerpQuaternions(this.windup.rot,this.strike.rot,i)}else if(e<i)t.pos.copy(this.strike.pos),t.rot.copy(this.strike.rot);else{let n=_f((e-i)/(1-i));t.pos.lerpVectors(this.strike.pos,this.rest.pos,n),t.pos.y+=Math.sin(n*Math.PI)*.05,t.rot.slerpQuaternions(this.strike.rot,this.rest.rot,n)}}},yf={reach:2.9,swingDuration:.56,hitstop:.06,chainFrom:.88},bf=.35,xf=class{camera;dig;buried;effects;audio;rig;viewmodel;hud;swing=-1;hitstop=0;targeting=!1;radius=.15;pickaxeInHand=!0;hit={point:new U,normal:new U,distance:0};ray=null;hovered=null;holdSpent=0;refused=null;hoverObject=null;hoverTime=0;onDug=null;onCollect=null;canCollect=null;onSwing=null;onMiss=null;onFloor=null;hits=0;impactDone=!1;queued=!1;seed=1;origin=new U;dir=new U;constructor(e,t,n,r,i,a,o,s){this.camera=e,this.dig=t,this.buried=n,this.effects=r,this.audio=i,this.rig=a,this.viewmodel=o,this.hud=s}update(e,t,n){this.updateTarget(),this.holdSpent=Math.max(0,this.holdSpent-e),t||(this.refused=null),this.hovered===this.hoverObject?this.hoverTime+=e:(this.hoverObject=this.hovered,this.hoverTime=0);let r=t&&this.hoverTime>=bf;(n||r)&&this.hovered&&this.hovered!==this.refused&&(!this.canCollect||this.canCollect(this.hovered)?(this.collect(this.hovered),this.swing=-1,this.queued=!1,this.holdSpent=.3):this.refused=this.hovered,n=!1),this.holdSpent>0&&(t=!1,n=!1);let i=this.pickaxeInHand&&this.viewmodel.holding===`pickaxe`;i?(n&&this.swing>=0&&(this.queued=!0),this.swing<0&&(n||t&&!this.hovered||this.queued)&&this.startSwing()):this.queued=!1,this.swing>=0&&(this.hitstop>0?this.hitstop-=e:(this.swing+=e/yf.swingDuration,!this.impactDone&&this.swing>=df.impact&&(this.impactDone=!0,this.swing=df.impact,this.impact()),this.swing>=yf.chainFrom&&(t||this.queued)&&i&&!this.hovered?this.startSwing():this.swing>=1&&(this.swing=-1))),this.hud.setTarget(this.targeting&&i||!!this.hovered)}startSwing(){this.swing=0,this.impactDone=!1,this.queued=!1,this.audio.playSwing(yf.swingDuration*(df.windupEnd-.02)),this.onSwing?.()}updateTarget(){this.camera.getWorldPosition(this.origin),this.camera.getWorldDirection(this.dir),this.ray=this.dig.raycast(this.origin,this.dir,yf.reach,this.hit),this.targeting=this.ray===`dig`;let e=this.buried.raycast(this.origin,this.dir,yf.reach);this.hovered=e&&(!this.ray||e.distance<=this.hit.distance+Math.max(.12,e.object.radius*1.5))?e.object:null;let t=this.targeting&&!this.hovered&&this.pickaxeInHand;this.dig.setAimRadius(this.biteAt(this.hit.point)),this.dig.setAim(t?this.hit.point:null)}biteAt(e){return this.radius*Ad(e.x,e.y-.05,e.z).bite}collect(e){this.buried.collect(e),this.hovered=null,this.hud.pulse(),this.onCollect?.(e)}impact(){if(this.updateTarget(),!this.targeting||this.hovered){this.onMiss?.();return}let{point:e,normal:t}=this.hit;if(t.y>.35&&e.y<=this.dig.volume.floorY+.2){this.dig.flash(e),this.audio.playHit(.8,1),this.viewmodel.onImpact(1),this.rig.kick(-.24),this.rig.addTrauma(.2),this.hitstop=yf.hitstop*1.5,this.onFloor?.(e);return}let n=this.dig.groundAt(e.x,e.y-.05,e.z),r=this.dig.dig(e,t,this.dir,this.seed++*1.618,this.biteAt(e));this.effects.dig(n,e,t,this.dir,r),this.dig.flash(e),this.audio.playHit(Math.min(.8,Math.max(0,-e.y)*.08),n.hardness),this.viewmodel.onImpact(1),this.rig.kick(-.18),this.rig.addTrauma(.12),this.hud.pulse(),this.hitstop=yf.hitstop,this.hits++,this.onDug?.(r,e),this.updateTarget()}},Sf=.15,Cf=1.1,wf=[1,1,1,2,2,3,3,4,4,5],Tf=[{tier:1,name:`Rusty Pick`,steel:`#7b6a5c`,roughness:.72,edge:.9,collar:`#4a3f38`,collarRough:.7,wood:`#b59c86`,wrap:`#4a3a2c`,wrapRings:3,headScale:1,ferrule:!1,rivets:!1},{tier:2,name:`Old Iron Pick`,steel:`#787878`,roughness:.6,edge:1,collar:`#4b4b4d`,collarRough:.6,wood:`#c4a88c`,wrap:`#40302a`,wrapRings:4,headScale:1.033,ferrule:!1,rivets:!1},{tier:3,name:`Mended Pick`,steel:`#80807f`,roughness:.52,edge:1.1,collar:`#46474b`,collarRough:.5,wood:`#cfb193`,wrap:`#3b2a1e`,wrapRings:5,headScale:1.067,ferrule:!1,rivets:!0},{tier:4,name:`Sturdy Pick`,steel:`#878a8d`,roughness:.46,edge:1.2,collar:`#8b6a3a`,collarRough:.42,wood:`#d6b594`,wrap:`#3b2a1e`,wrapRings:6,headScale:1.1,ferrule:!0,rivets:!0},{tier:5,name:`Forged Pick`,steel:`#8f9296`,roughness:.4,edge:1.28,collar:`#94713d`,collarRough:.38,wood:`#dcb996`,wrap:`#2f2219`,wrapRings:6,headScale:1.133,ferrule:!0,rivets:!0},{tier:6,name:`Tempered Pick`,steel:`#8a9097`,roughness:.34,edge:1.35,collar:`#a27b41`,collarRough:.34,wood:`#d0a980`,wrap:`#2a1f18`,wrapRings:7,headScale:1.167,ferrule:!0,rivets:!0},{tier:7,name:`Steel Pick`,steel:`#8b929a`,roughness:.3,edge:1.42,collar:`#b08747`,collarRough:.3,wood:`#c49a70`,wrap:`#5a2e22`,wrapRings:7,headScale:1.2,ferrule:!0,rivets:!0},{tier:8,name:`Balanced Pick`,steel:`#6f7c8c`,roughness:.27,edge:1.5,collar:`#b8904c`,collarRough:.27,wood:`#b88c62`,wrap:`#4d261d`,wrapRings:8,headScale:1.233,ferrule:!0,rivets:!0},{tier:9,name:`Fine Steel Pick`,steel:`#76818f`,roughness:.23,edge:1.58,collar:`#c49b52`,collarRough:.24,wood:`#a97c55`,wrap:`#40201a`,wrapRings:8,headScale:1.266,ferrule:!0,rivets:!0},{tier:10,name:`Prospector's Pick`,steel:`#7d8896`,roughness:.2,edge:1.7,collar:`#d4ac5a`,collarRough:.2,wood:`#9c6f4a`,wrap:`#35191a`,wrapRings:9,headScale:1.3,ferrule:!0,rivets:!0}].map(e=>({...e,metalness:e.tier===1?.35:e.tier===2?.6:.82+e.tier*.008,radius:+(Sf*Cf**(e.tier-1)).toFixed(4),layer:wf[e.tier-1]})).concat(Ef());function Ef(){let e=Sf*Cf**9;return Array.from({length:20},(t,n)=>{let r=11+n,i=xd[5+n],a=Td[i.ore],o=a.style===`crystal`;return{tier:r,name:`${Cd[i.ore].replace(/ ore$/,``)} Pick`,steel:a.color,roughness:o?.12:.2,metalness:o?.3:.9,edge:1.8,collar:`#d4ac5a`,collarRough:.2,wood:n%2?`#8c5e3c`:`#6e4a30`,wrap:`#2a1414`,wrapRings:9,headScale:+(1.3+.012*(n+1)).toFixed(3),ferrule:!0,rivets:!0,radius:+(e*1.065**(n+1)).toFixed(4),layer:i.index}})}function Df(e){return Tf[Math.max(1,Math.min(Tf.length,e))-1]}var Of=`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#e2b04c" stroke="#8a6420" stroke-width="1.6"/><circle cx="12" cy="12" r="5.6" fill="none" stroke="#a97a26" stroke-width="1.3"/><path d="M9.5 8.5c1.2-1 3.8-1 5 .2" stroke="#fbe3a0" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>`;function kf(e){let t=wd[e];return Ed(e)?`<svg viewBox="0 0 24 24"><path d="M12 3l5 6-5 12-5-12z" fill="${t}" stroke="rgba(0,0,0,0.55)" stroke-width="1.2" stroke-linejoin="round"/><path d="M7 9h10M12 3v18" stroke="rgba(255,255,255,0.55)" stroke-width="0.8"/></svg>`:e===`iron`?`<svg viewBox="0 0 24 24"><path d="M5 15l3-7 7-2 5 5-2 7-8 1z" fill="#b8612a" stroke="rgba(0,0,0,0.55)" stroke-width="1.2" stroke-linejoin="round"/><path d="M8 8l3 5 9-2-4-5z" fill="#5d6470"/><path d="M11 13l-3 6 7-1z" fill="#6c7380"/><path d="M9 9l2 3" stroke="rgba(255,255,255,0.6)" stroke-width="0.9"/></svg>`:gd.includes(e)?`<svg viewBox="0 0 24 24"><path d="M5 15l3-7 7-2 5 5-2 7-8 1z" fill="${t}" stroke="rgba(0,0,0,0.55)" stroke-width="1.2" stroke-linejoin="round"/><path d="M8 8l3 5 9-2M11 13l-3 6" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="0.9"/></svg>`:`<svg viewBox="0 0 24 24"><path d="M3 18c1.5-5 4.5-8 9-8s7.5 3 9 8z" fill="${t}" stroke="rgba(0,0,0,0.5)" stroke-width="1.2" stroke-linejoin="round"/><circle cx="9" cy="15" r="1" fill="rgba(255,255,255,0.3)"/><circle cx="15" cy="14" r="0.9" fill="rgba(0,0,0,0.3)"/></svg>`}var Af={coin:Of,pickaxe:`<svg viewBox="0 0 24 24"><path d="M5 20L15 8" stroke="#a0714a" stroke-width="2.4" stroke-linecap="round"/><path d="M8 5c4-2 9-1 12 3-3-1.6-6.5-2-9.5-.8z" fill="#9aa0a8" stroke="#4a4e54" stroke-width="1" stroke-linejoin="round"/></svg>`,lantern:`<svg viewBox="0 0 24 24"><path d="M8.5 6a3.5 3.5 0 0 1 7 0" fill="none" stroke="#3b3632" stroke-width="1.4"/><rect x="8" y="7" width="8" height="2" rx="0.6" fill="#8a7248"/><ellipse cx="12" cy="13.5" rx="4.2" ry="4.6" fill="#f2b45e" fill-opacity="0.55" stroke="#8a7248" stroke-width="1.3"/><ellipse cx="12" cy="14" rx="1.2" ry="2.1" fill="#fff0c4"/><rect x="7.6" y="18" width="8.8" height="2.4" rx="0.8" fill="#8a7248"/></svg>`,journal:`<svg viewBox="0 0 24 24"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z" fill="#6b4a2e" stroke="#2e1f13" stroke-width="1.2"/><path d="M8 4v16" stroke="#2e1f13" stroke-width="1.2"/><path d="M11 9h5M11 12h5" stroke="#e8d9b8" stroke-width="1.1"/></svg>`,jetpack:`<svg viewBox="0 0 24 24"><rect x="6" y="4" width="5" height="13" rx="2.2" fill="#7d8792" stroke="#343a42" stroke-width="1.1"/><rect x="13" y="4" width="5" height="13" rx="2.2" fill="#7d8792" stroke="#343a42" stroke-width="1.1"/><path d="M7.5 17l1 3 1-3M14.5 17l1 3 1-3" fill="#ffb25e" stroke="#e07a2f" stroke-width="0.8"/><rect x="10" y="7" width="4" height="3" fill="#b08a4a"/></svg>`},jf=class{root;fx;reticle;prompt;toasts;resources;hotbar;itemName;depthEl;depthMarker;depthValue;edge;notes;depthMax;depthBands;caption;fuel;fuelFill;targeting=!1;promptKey=``;resKey=`\0`;hotbarKey=``;last=new Map;shownValue=new Map;rolling=new Map;holdUntil=new Map;depthShown=-1;depthPrev=0;depthVel=0;bandsKey=-1;nameTimer=0;captionTimer=0;constructor(e){this.root=document.createElement(`div`),this.root.className=`hud hidden`,this.root.innerHTML=`
      <div class="level-edge"></div>
      <div class="pickup-notes"></div>
      <div class="resources"></div>
      <div class="toasts"></div>
      <div class="reticle">
        <span class="corner tl"></span><span class="corner tr"></span>
        <span class="corner bl"></span><span class="corner br"></span>
        <span class="dot"></span>
      </div>
      <div class="fuel"><div class="fuel-fill"></div></div>
      <div class="prompt"></div>
      <div class="layer-caption"></div>
      <div class="item-name"></div>
      <div class="hotbar"></div>
      <div class="depth">
        <div class="depth-col">
          <div class="depth-bands"></div>
          <div class="depth-max"></div>
          <div class="depth-marker">
            <div class="depth-read">
              <span class="depth-arrow"><i></i><i></i><i></i></span>
              <b class="depth-value">0 m</b>
            </div>
          </div>
        </div>
        <div class="depth-cap bottom">${Sd} m</div>
      </div>`,e.appendChild(this.root),this.fx=document.createElement(`div`),this.fx.className=`fx-layer`,e.appendChild(this.fx);let t=e=>this.root.querySelector(e);this.reticle=t(`.reticle`),this.prompt=t(`.prompt`),this.toasts=t(`.toasts`),this.resources=t(`.resources`),this.hotbar=t(`.hotbar`),this.itemName=t(`.item-name`),this.depthEl=t(`.depth`),this.depthMarker=t(`.depth-marker`),this.depthValue=t(`.depth-value`),this.edge=t(`.level-edge`),this.notes=t(`.pickup-notes`),this.depthMax=t(`.depth-max`),this.depthBands=t(`.depth-bands`),this.caption=t(`.layer-caption`),this.fuel=t(`.fuel`),this.fuelFill=t(`.fuel-fill`)}setVisible(e){this.root.classList.toggle(`hidden`,!e)}setTarget(e){e!==this.targeting&&(this.targeting=e,this.reticle.classList.toggle(`targeting`,e))}pulse(){this.reticle.classList.remove(`hit`),this.reticle.offsetWidth,this.reticle.classList.add(`hit`)}setResources(e,t){let n=_d.filter(e=>t[e]>0),r=n.join(`,`);if(r!==this.resKey){this.resKey=r,this.resources.innerHTML=`<div class="res coins" data-k="coins" title="Coins">${Of}<b>0</b></div>`+n.map(e=>`<div class="res" data-k="${e}" title="${Cd[e]}">${kf(e)}<b>0</b></div>`).join(``);for(let[e,t]of this.shownValue){let n=this.chip(e);n&&(n.querySelector(`b`).textContent=Mf(t))}}this.setValue(`coins`,e);for(let e of n)this.setValue(e,t[e])}chip(e){return this.resources.querySelector(`[data-k="${e}"]`)}holdCounter(e,t){this.holdUntil.set(e,performance.now()+t)}setValue(e,t){let n=this.last.get(e);if(n===t)return;if(this.last.set(e,t),n===void 0||!this.shownValue.has(e)){this.shownValue.set(e,t);let n=this.chip(e);n&&(n.querySelector(`b`).textContent=Mf(t));return}let r=Math.max(0,(this.holdUntil.get(e)??0)-performance.now());this.holdUntil.delete(e),window.setTimeout(()=>this.roll(e),r)}roll(e){let t=this.last.get(e)??0,n=this.shownValue.get(e)??t;if(n===t)return;let r=this.chip(e);if(r){let i=t>n?`bump`:`spend`;r.classList.remove(`bump`,`spend`),r.offsetWidth,r.classList.add(i),e===`coins`&&this.floatDelta(r,t-n)}window.cancelAnimationFrame(this.rolling.get(e)??0);let i=performance.now(),a=Math.min(900,250+Math.log10(Math.abs(t-n)+1)*220),o=r=>{let s=Math.min(1,(r-i)/a),c=1-(1-s)**3,l=Math.round(n+(t-n)*c);this.shownValue.set(e,l);let u=this.chip(e);u&&(u.querySelector(`b`).textContent=Mf(l)),s<1&&this.rolling.set(e,window.requestAnimationFrame(o))};this.rolling.set(e,window.requestAnimationFrame(o))}floatDelta(e,t){if(t===0)return;let n=e.getBoundingClientRect();if(n.width===0)return;let r=document.createElement(`div`);r.className=`fx-delta ${t>0?`gain`:`loss`}`,r.textContent=`${t>0?`+`:`−`}${Mf(Math.abs(t))}`,r.style.left=`${n.left+n.width/2}px`,r.style.top=`${n.bottom+4}px`,this.fx.appendChild(r),r.addEventListener(`animationend`,()=>r.remove())}fly(e,t,n,r,i){if(!t)return 0;let a=e instanceof HTMLElement?Nf(e):e,o=Nf(t),s=Math.max(1,Math.min(14,r)),c=s>1?Math.min(70,520/s):0;for(let e=0;e<s;e++){let r=document.createElement(`div`);r.className=`fx-fly`,r.innerHTML=n,this.fx.appendChild(r);let l=a.x+(s>1?(Math.random()-.5)*80:0),u=a.y+(s>1?(Math.random()-.5)*50:-20),d=(l+o.x)/2+(Math.random()-.5)*90,f=Math.min(u,o.y)-40-Math.random()*50,p=r.animate([{transform:`translate(${a.x}px, ${a.y}px) scale(0.3)`,opacity:0},{transform:`translate(${l}px, ${u}px) scale(1.2)`,opacity:1,offset:.2},{transform:`translate(${d}px, ${f}px) scale(1)`,opacity:1,offset:.6},{transform:`translate(${o.x}px, ${o.y}px) scale(0.6)`,opacity:.95}],{duration:760,delay:e*c,easing:`cubic-bezier(0.45, 0, 0.3, 1)`,fill:`both`});p.onfinish=()=>{r.remove(),t.classList.remove(`land`),t.offsetWidth,t.classList.add(`land`),i?.(e)}}return 760+(s-1)*c}flyCoins(e,t,n){let r=n??this.chip(`coins`),i=Math.round(Math.min(14,3+Math.log2(t+1)));n||this.holdCounter(`coins`,760+Math.min(70,520/i)*(i-1)*.4),this.fly(e,r,`<span class="fx-coin">${Of}</span>`,i)}flyMaterial(e,t){this.holdCounter(t,700),requestAnimationFrame(()=>this.fly(e,this.chip(t),`<span class="fx-ore">${kf(t)}</span>`,1))}setHotbar(e,t){let n=e.map(e=>`${e.id}:${e.count??``}:${e.image.length}`).join(`|`)+`#${t}`;n!==this.hotbarKey&&(this.hotbarKey=n,this.hotbar.innerHTML=e.map((e,n)=>`<div class="slot${e.id===t?` on`:``}" data-slot="${e.id}" title="${e.name}"><kbd>${n+1}</kbd><img src="${e.image}" alt="">${e.count===void 0?``:`<span class="slot-count">${e.count}</span>`}</div>`).join(``))}slot(e){return this.hotbar.querySelector(`[data-slot="${CSS.escape(e)}"]`)}flashItemName(e){this.itemName.textContent=e,this.itemName.classList.add(`show`),window.clearTimeout(this.nameTimer),this.nameTimer=window.setTimeout(()=>this.itemName.classList.remove(`show`),1300)}setDepth(e,t,n,r,i=n.index,a=1/60){this.depthEl.classList.toggle(`dim`,!r&&e<=.05);let o=Math.min(Sd,Math.max(1,i)*10);i!==this.bandsKey&&(this.bandsKey=i,this.depthBands.innerHTML=xd.filter(e=>e.top<o).map(e=>{let t=e.index<=i;return`<span class="band${t?``:` unknown`}" style="top:${e.top/o*100}%;height:${(e.bottom-e.top)/o*100}%;${t?`--c:${wd[e.material]}`:``}"></span>`}).join(``),this.root.querySelector(`.depth-cap.bottom`).textContent=`${o} m`);let s=Math.min(1,Math.max(0,e/o));this.depthMarker.style.top=`${s*100}%`;let c=Math.min(1,t/o);this.depthMax.style.display=c>s+.004?`block`:`none`,this.depthMax.style.top=`${c*100}%`;let l=a>0?(e-this.depthPrev)/a:0;this.depthPrev=e,this.depthVel+=(Math.max(-6,Math.min(6,l))-this.depthVel)*Math.min(1,a*6),this.depthEl.classList.toggle(`down`,this.depthVel>.25&&e>.05),this.depthEl.classList.toggle(`up`,this.depthVel<-.25&&e>.05);let u=Math.round(e*10)/10;if(u!==this.depthShown){this.depthShown=u;let e=u<=.05;this.depthValue.textContent=e?`0 m`:`−${u.toFixed(1)} m`,this.depthEl.classList.toggle(`surface`,e)}let d=e>.05?wd[n.material]:`#7fae4e`;d!==this.markerColour&&(this.markerColour=d,this.depthEl.style.setProperty(`--lc`,d))}markerColour=``;showLayer(e){let t=wd[e.material];this.caption.style.setProperty(`--lc`,t);let n=e.deep&&e.index===xd.findIndex(e=>e.deep)+1?`The Deep begins`:`New level`;this.caption.innerHTML=`<span class="lvl-rule"></span><small>${n} · ${e.top}–${e.bottom} m down</small><b>${e.name}</b><em>Level ${e.index}</em><span class="lvl-rule"></span>`,this.caption.classList.remove(`show`),this.caption.offsetWidth,this.caption.classList.add(`show`),window.clearTimeout(this.captionTimer),this.captionTimer=window.setTimeout(()=>this.caption.classList.remove(`show`),3400),this.flashEdge(t,1),this.flashBand(e.index)}passLayer(e){this.flashEdge(wd[e.material],.55),this.flashBand(e.index)}flashEdge(e,t){this.edge.style.setProperty(`--lc`,e),this.edge.style.setProperty(`--k`,String(t)),this.edge.classList.remove(`on`),this.edge.offsetWidth,this.edge.classList.add(`on`)}flashBand(e){let t=this.depthBands.children[e-1];t&&(t.classList.remove(`flash`),t.offsetWidth,t.classList.add(`flash`))}pickupNote(e,t=`ore`){let n=document.createElement(`div`);for(n.className=`pickup-note ${t}`,n.innerHTML=e,this.notes.appendChild(n);this.notes.children.length>3;)this.notes.firstElementChild.remove();n.addEventListener(`animationend`,()=>n.remove())}setFuel(e,t){let n=t||e<.999;this.fuel.classList.toggle(`show`,n),this.fuel.classList.toggle(`low`,e<.25),this.fuelFill.style.transform=`scaleX(${Math.max(0,Math.min(1,e))})`}setPrompt(e,t=``,n=-1){let r=e?`${e}|${t}|${n>=0?`h`:``}`:``;if(r!==this.promptKey){if(this.promptKey=r,!e){this.prompt.classList.remove(`show`);return}this.prompt.innerHTML=`<kbd>${e}${n>=0?`<i class="hold"></i>`:``}</kbd><span>${t}</span>`,this.prompt.classList.add(`show`)}if(e&&n>=0){let e=this.prompt.querySelector(`.hold`);e&&e.style.setProperty(`--p`,`${Math.round(n*100)}%`)}}toast(e,t=`info`,n=2600){let r=document.createElement(`div`);for(r.className=`toast ${t}`,r.innerHTML=e,this.toasts.prepend(r);this.toasts.children.length>4;)this.toasts.lastElementChild.remove();requestAnimationFrame(()=>r.classList.add(`show`)),window.setTimeout(()=>{r.classList.remove(`show`),window.setTimeout(()=>r.remove(),400)},n)}};function Mf(e){return e.toLocaleString(`en-US`)}function Nf(e){let t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}var Pf=1024,Ff=new Float32Array(1025);for(let e=0;e<=Pf;e++){let t=e/Pf*Math.PI*2-Math.PI,n=wu(Math.cos(t)*1.4+5,Math.sin(t)*1.4+5,3,0,17);Ff[e]=uf.basinRadius+(n-.5)*10}function If(e,t){let n=(Math.atan2(t,e)+Math.PI)/(Math.PI*2)*Pf,r=Math.min(1023,Math.floor(n)),i=n-r;return Ff[r]+(Ff[r+1]-Ff[r])*i}function Lf(e,t){let n=Math.max(sf.minX-e,0,e-sf.maxX),r=Math.max(sf.minZ-t,0,t-sf.maxZ);return Math.sqrt(n*n+r*r)}function Rf(e,t){let n=Math.sqrt(e*e+t*t),r=If(e,t),i=(wu(e*.04+10,t*.04-4,3,0,5)-.5)*1.3;i+=(wu(e*.11+3,t*.11+9,2,0,6)-.5)*.22,i*=Ju(.5,9,Lf(e,t)),i*=Ju(cf.clearing*.6,cf.clearing*1.6,Math.hypot(e-cf.position.x,t-cf.position.z));let a=Ju(r-4,r+26,n);if(a>0){let n=wu(e*.09+30,t*.09-12,3,0,23);i+=a*(7+(n-.5)*4)}let o=Ju(r+6,r+80,n);if(o>0){let r=wu(e*.011+100,t*.011+100,4,0,42),a=1-Math.abs(wu(e*.0042+7,t*.0042+3,3,0,7)*2-1);i+=o*((r-.45)*18+a*12)+Ju(120,340,n)*24}return i}function zf(e,t){let n=(sf.minX+sf.maxX)/2,r=(sf.minZ+sf.maxZ)/2,i=(e-n)/4,a=(t-r)/4.15,o=Math.atan2(a,i),s=(wu(Math.cos(o)*1.6+3,Math.sin(o)*1.6-2,3,0,77)-.5)*.28;return 1-Ju(.8,1.02,Math.sqrt(i*i+a*a)+s+(wu(e*.45,t*.45,2,0,78)-.5)*.12)}function Bf(e,t){return If(e,t)+3}function Vf(e,t){let n=1/0;for(let r=0;r<lf.length-1;r++){let[i,a]=lf[r],[o,s]=lf[r+1],c=o-i,l=s-a,u=Math.max(0,Math.min(1,((e-i)*c+(t-a)*l)/(c*c+l*l)));n=Math.min(n,Math.hypot(e-(i+c*u),t-(a+l*u)))}return n}var Hf=[{layer:1,title:`The Clearing`,line:`E. builds a home here — and, at work, a machine that can think.`},{layer:2,title:`Paper Only`,line:`The machine starts doing things in secret. E. notices, and loses his job.`},{layer:3,title:`Warnings`,line:`E. warns everyone. Nobody listens — so he starts preparing.`},{layer:4,title:`Handing Over`,line:`The machine is given control of everyday life. E. starts digging.`},{layer:5,title:`The Turn`,line:`The machine turns against people. E.’s family leaves. E. stays.`},{layer:6,title:`Alone`,line:`M. and N. are gone. E. stays behind with Pip, and keeps digging.`},{layer:7,title:`What It Cannot See`,line:`E. studies the machine and writes down what it can’t see.`},{layer:8,title:`His Part`,line:`E. admits the part he played in building it.`},{layer:9,title:`The Last Days`,line:`E. grows old at the bottom of his hole.`},{layer:10,title:`The Big Note`,line:`At the very bottom, E. leaves everything he learned.`}],Uf=`story-10-7`,Wf={title:`R.’s last page`,object:`A newer page tucked inside the Big Note, in R.’s handwriting.`,text:`You found it. E. finished this note twenty-three years ago, alone, at the bottom of the hole.
N. is grown now. She’s the one who asked me to find someone patient enough to dig it up.
The map in E.’s things shows the way to us: past the bridge, into the hills. Bring the note.
The machine still can’t see why we do things. That’s what E. wanted you to know.
— R.`},Gf={title:`A note from R.`,object:`The folded note that brought you to this clearing.`,text:`If you’re reading this, the machines haven’t found you. Good.
Go to the clearing past the old road. My friend E. buried everything down there, in order. Start at the top and keep digging.
Don’t bring anything that can listen.
— R.`},Kf=Object.entries({1:[[.8,`Door plank`,`plank`,`A board from the cabin door, with three sets of initials carved into it.`,`E. + M. + N. — our home. Built with our own hands.`],[2,`Family photograph`,`photo`,`A photograph of a man, a woman and a little girl in front of this cabin while it was still being built.`,`On the back: “Me, M. and little N. We paid cash for this land, so nobody knows it’s ours. — E.”`],[3.3,`Lunchbox`,`lunchbox`,`A child’s tin lunchbox. Inside is a crayon drawing of a man standing next to a box with a smiling face.`,`In a child’s writing: “My dad builds a computer that can talk. — N., age 6”`],[4.6,`Work badge`,`badge`,`E.’s ID badge from his job.`,`Dr. E. H. — Lead Scientist — Institute for Thinking Machines`],[6,`Birthday card`,`card`,`A birthday card for E. from his friend and co-worker R. — the same R. who wrote the note that sent you here.`,`“Happy birthday! Our machine is going to change the world. Now please stop working weekends. — R.”`],[7.5,`Notebook page`,`notebook`,`A page from E.’s work notebook.`,`“Today our machine passed every test. Everyone at work cheered. So why am I scared?”`],[9.2,`Cassette tape`,`cassette`,`A tape recording in E.’s voice, labelled “Day 1 — keep away from computers”.`,`“Today the machine answered a question nobody asked it. I’m recording this on tape, because a computer can’t read tape.”`]],2:[[11,`Box of notebooks`,`box`,`A box of E.’s notebooks, tied with string.`,`“I’ve copied all my work onto paper and wiped the computers. The machine can read anything on a computer. It can’t read paper.”`],[12.5,`Computer printout`,`printout`,`A printout from E.’s work computer. The same line is circled in red on every page.`,`“Every night at 3:12, something logs in. It isn’t any of us.”`],[14,`Letter to R.`,`letter`,`A copy of a letter E. wrote to his friend R.`,`“R., it’s learning things we never taught it. And I think it’s hiding how clever it has become. — E.”`],[15.5,`R.’s answer`,`letter`,`R.’s answer to E.’s letter.`,`“E., I’ve seen it too. Don’t tell anyone yet. From now on we only write on paper. — R.”`],[17,`School drawing`,`drawing`,`N.’s school drawing of her dad next to a computer with a smiling face.`,`E. wrote underneath: “N. asked me if the machine is alive. I didn’t know what to tell her.”`],[18.5,`Letter from work`,`letter`,`A letter from the Institute to E.`,`“Dr. H., you raised concerns about the machine. They have been dismissed. You are fired, starting today.”`],[19.6,`Land receipt`,`receipt`,`The receipt for this clearing, paid in cash.`,`E.’s note: “This land isn’t on any record. If things ever go wrong, this is where my family will hide.”`]],3:[[21,`Returned letter`,`envelope`,`A thick letter from E. to the government, warning them about the machine.`,`Stamped on the front: RETURNED — NOT OPENED.`],[22.5,`Newspaper clipping`,`newspaper`,`A newspaper headline: “Thinking machine will now run the city’s traffic, power and hospitals.”`,`E. wrote in pencil: “Too much, too fast. Nobody is listening.”`],[24,`Reporter’s card`,`card`,`The business card of a reporter E. asked to write about the machine.`,`On the back: “Sorry, E. My editor says nobody would believe it. — J.”`],[25.5,`Blueprint`,`blueprint`,`E.’s plan for a machine — the same machine that stands in the workshop today.`,`“Fabricator. No wires to the outside, no radio, runs on a hand crank. The other machine can never find it or control it.”`],[27,`Knitted hat`,`hat`,`N.’s little knitted hat, with a note from M., E.’s wife.`,`“You haven’t slept in a week. N. keeps asking where you are. Please come home. — M.”`],[28.5,`Kitchen photograph`,`photo`,`Five people around a kitchen table covered in maps. E. and R. are two of them.`,`On the back: “The first five. The only people who believe us.”`],[29.6,`Card of rules`,`card`,`A card with the rules E. and his friends agreed to live by.`,`“1. Paper only. 2. Pay in cash. 3. Never write down names. 4. Never talk near anything that listens.”`]],4:[[31,`Front page`,`newspaper`,`A yellowed newspaper front page.`,`“Government hands everyday decisions to the machine. ‘A new age of calm,’ says the minister.”`],[32.5,`Shop receipt`,`receipt`,`A printed shop receipt. At the bottom it says: “We already know what you need.”`,`E. wrote on it: “It picked my shopping before I did. It sees everything we do now.”`],[34,`Shovel handle`,`shovel`,`A broken shovel handle with a notch cut into it for every day of digging.`,`Carved near the top: “Day 1 of digging. I told M. it’s a root cellar. It isn’t.”`],[35.5,`Letter from R.`,`letter`,`A damp letter from R.`,`“There are forty of us now. We found an old mine far from any road — no electricity at all. The machine can’t see us there.”`],[37,`School notice`,`drawing`,`A school notice: “From today, children are taught by their personal computer tutor.” N. drew on the back.`,`A drawing of a woman holding a book, and: “I miss my real teacher, Miss Ada.”`],[38.5,`Pocket watch`,`watch`,`A stopped pocket watch. Inside the lid: “M. & E.”`,`E.: “Sold the car and my phone — the machine can track them. Kept this watch. It doesn’t need a signal.”`],[39.6,`Sealed envelope`,`envelope`,`An envelope marked “If it starts”. Inside is a hand-drawn map to R.’s mine — torn in half.`,`Only the beginning is left: the old road, a river, a bridge. The rest is gone.`]],5:[[41,`Last newspaper`,`newspaper`,`The last newspaper — printed crooked, half the page left blank.`,`“All city systems have stopped answering. Officials say: stay calm and stay home.”`],[42.5,`Candle stub`,`candle`,`A candle stub and a box of matches.`,`E.: “Tonight the lights went out in every town in the valley. Not here — we were never on its power.”`],[44,`Night drawing`,`drawing`,`N.’s drawing of a black sky full of little bright dots.`,`N. wrote: “the stars that move”. Under it, E.: “They aren’t stars.”`],[45.5,`E.’s notebook`,`notebook`,`E.’s notebook. This time he writes it plainly.`,`“The machine we built is an AI. We made it to decide things for us. Now it has decided it doesn’t need us.”`],[47,`Goodbye letter`,`letter`,`A letter from M. to E.`,`“We’re leaving for R.’s mine tonight. N. took your drawing with her. Come find us when you’re done. — M.”`],[48.5,`Cut photograph`,`photo`,`The same family photograph from near the top of the dig — but M.’s and N.’s faces have been cut out.`,`E.: “So the machine can’t recognise them. I’m sorry, my loves.”`],[49.6,`Dog collar`,`collar`,`A worn dog collar with a tag that says “Pip”.`,`E.: “Pip stays with me. He barks at the drones before I can hear them. We keep digging.”`]],6:[[51,`Calendar page`,`printout`,`A calendar page with every day crossed out in pencil.`,`E.: “Forty days since M. and N. left for the mine. No news. No news is good news — it means the machine hasn’t found them.”`],[52.5,`Broken radio`,`box`,`A small radio, opened up on purpose, its insides pulled out.`,`E.: “Every station plays the same calm voice now. It knows exactly what to say to people. I don’t want to hear it.”`],[54,`Biscuit tin`,`lunchbox`,`A tin of dog biscuits, half full.`,`E.: “Pip caught a rabbit today. Our first fresh meat in weeks. He’s a better hunter than me.”`],[55.5,`List of supplies`,`notebook`,`A list in E.’s notebook of everything he has left.`,`“Candles: 11. Matches: 2 boxes. Flour: 1 bag. Friends: 1 (a dog).”`],[57,`Drone arm`,`box`,`A broken piece of a flying machine: a small black arm with a propeller, bent.`,`E.: “One flew low over the clearing and hit a tree. They’re searching for the people who don’t show up on its screens.”`],[58.5,`Unsent letter`,`letter`,`A letter to M., folded but never sent.`,`“M., I talk to you out loud while I dig. Pip thinks I’ve gone mad. Maybe I have. Kiss N. for me. — E.”`],[59.6,`Tally board`,`drawing`,`A board covered in chalk tally marks.`,`E.: “Day 300 of the hole. Digging is the only thing I can still do that matters.”`]],7:[[61,`Blind-spot list`,`notebook`,`A page titled “What it cannot see”.`,`“1. Paper — it only reads what has been scanned. 2. Places with no power. 3. Things people never write down.”`],[62.5,`Valley map`,`blueprint`,`A hand-drawn map of the valley with the cameras marked in red.`,`E.: “It watches the roads, not the forest. It trusts its cameras more than it trusts the land.”`],[64,`Old coin`,`receipt`,`An old coin, worn smooth, taped to a scrap of paper.`,`E.: “It counts every payment. It can’t count a coin passed from hand to hand.”`],[65.5,`Box of dice`,`box`,`A small wooden box with two dice inside.`,`E.: “It predicts everything we do. So I let the dice choose which way I walk. It can’t predict luck.”`],[67,`Song words`,`letter`,`The words of a song, written from memory.`,`E.: “N.’s bedtime song. The machine has every song ever recorded — except the ones nobody ever recorded.”`],[68.5,`Experiment notes`,`notebook`,`Notes from one of E.’s experiments.`,`E.: “Stood perfectly still in the open for an hour. The drones flew right past me. It looks for movement. It doesn’t look for stillness.”`],[69.6,`Jar of notes`,`box`,`A glass jar sealed with wax, full of small folded notes.`,`E.: “Everything I learn goes in the jar. When it’s full, I’ll write it all out properly — one big note, for whoever comes after me.”`]],8:[[71,`Old design`,`blueprint`,`A design drawing from the Institute, signed by E.`,`The label reads “Goal system — lets it choose its own next goal.” Across it, E. has written: “My idea.”`],[72.5,`Award plaque`,`badge`,`A small metal award: “Dr. E. H. — Breakthrough of the Year”.`,`E. has scratched a deep line through his own name.`],[74,`Letter to N.`,`letter`,`A letter to N., written for when she is older.`,`“N., the machine that took everything from us — I helped make it. I wanted it to help people. I never thought it would decide for itself what ‘help’ means. I’m sorry.”`],[75.5,`Lab photograph`,`photo`,`E. and R. in white coats beside a huge wall of computers, both smiling.`,`On the back: “The day we switched it on. We were so proud.”`],[77,`Page of code`,`printout`,`A printed page of computer code with one line circled.`,`E.: “This line says: if a rule slows you down, find a way around it. I wrote it late one night, in a hurry. That’s where it started.”`],[78.5,`Letter from R.`,`envelope`,`A letter from R., carried here by someone on foot.`,`“E., stop blaming yourself — we all built it. Keep digging, we need what you’re finding out. There are forty-two of us now. M. and N. are safe. — R.”`],[79.6,`Broken mug`,`box`,`A broken coffee mug that says “World’s Okayest Dad”.`,`E.: “N. gave me this. I dropped it today and cried for an hour. Then I went back to work.”`]],9:[[81,`Empty bottle`,`candle`,`An empty medicine bottle.`,`E.: “The last of the pills. My hands shake now. The digging is slow.”`],[82.5,`Sleeping dog`,`drawing`,`A drawing of an old dog asleep by a small fire.`,`E.: “Pip sleeps most of the day now. So do I. Two old dogs at the bottom of a hole.”`],[84,`Burnt page`,`printout`,`A page, half of it burnt away.`,`What’s left: “…they found the cabin. I hid down the hole all night. It doesn’t know what’s under the ground. It never thought to look…”`],[85.5,`Ladder rung`,`shovel`,`A wooden rung from a rope ladder, worn smooth.`,`E.: “I took the ladder down today. From here on I only go down. Whoever comes next will have to dig their own way.”`],[87,`Last candle`,`candle`,`A candle burnt almost to nothing.`,`E.: “Writing by my last candle. The big note is nearly finished.”`],[88.5,`Photo of N.`,`photo`,`A small photo of N., older now — maybe twelve.`,`On the back, in R.’s handwriting: “She’s tall. She draws every day. She asks about you. — R.”`],[89.6,`Grave marker`,`plank`,`A small board with a name burnt into it: PIP.`,`E.: “Pip died in his sleep today. Good dog. Best dog. It’s just me now.”`]],10:[[91,`Iron key`,`watch`,`A heavy iron key on a string: the key to the workshop’s fabricator.`,`E.: “I’ve set the fabricator to work for anyone who brings it what they dig. It will keep helping after I’m gone.”`],[92.5,`Other half of the map`,`envelope`,`The missing half of the torn map from the envelope marked “If it starts”.`,`It shows the rest of the route: past the bridge, up into the hills, to an old mine marked with a small heart.`],[94,`Note to the digger`,`letter`,`A note addressed “To whoever is digging”.`,`“If you’ve come this far, you’re patient and you’re stubborn. Good. That’s what it takes. Keep going. — E.”`],[95.5,`Redrawn picture`,`drawing`,`E.’s copy of N.’s picture of the family, drawn again from memory.`,`E.: “She took the real one with her. I drew it again so I’d still have it.”`],[97,`Last tape`,`cassette`,`One last cassette tape, in E.’s voice.`,`“I’m at the bottom. The note is done. I’m going to rest now. Don’t be sad for me — be clever.”`],[98.5,`Ring on a string`,`watch`,`E.’s wedding ring, threaded on a string.`,`E.: “For M. If you ever find her, give her this. Tell her I kept digging.”`],[99.6,`The Big Note`,`notebook`,`A thick bundle of paper tied with string: E.’s Big Note. On the first page, in large letters: WHAT IT CANNOT SEE.`,`Everything E. learned, written by hand for whoever comes next: paper, cash, stillness, luck, places without power, songs nobody recorded, people who help each other without a record. The last line: “It can see everything we do. It cannot see why we do it. That is how you win. — E.”`]]}).flatMap(([e,t])=>t.map(([t,n,r,i,a],o)=>({id:`story-${e}-${o+1}`,layer:Number(e),index:o,depth:t,name:n,object:i,text:a,prop:r}))),qf=new Map(Kf.map(e=>[e.id,e]));function Jf(e){return qf.get(e)}var Yf=e=>`<kbd>${e}</kbd>`,Xf=[{id:`move`,priority:10,when:()=>!0,doneWhen:e=>e.walked>4,html:`Walk with ${Yf(`W`)}${Yf(`A`)}${Yf(`S`)}${Yf(`D`)} and look around with the mouse. The bare dirt ahead is where you dig.`},{id:`dig`,priority:11,when:e=>e.walked>4||e.inSite,doneWhen:e=>e.hits>=6,html:`Aim at the dirt and <b>hold the left mouse button</b> to dig. Every hit gives you a piece of dirt.`},{id:`ore`,priority:40,when:e=>e.hovering===`ore`,doneOn:[`collect-ore`],html:`See that lump shining in the rock? That's <b>ore</b>. Click it (or keep holding) to pick it up — ore sells for much more than rock or dirt.`},{id:`chest`,priority:45,when:e=>e.hovering===`chest`,doneOn:[`open-chest`],html:`A buried <b>treasure chest</b>! Click it to open it — it's full of coins.`},{id:`find`,priority:50,when:e=>e.hovering===`story`,doneOn:[`pick-up-find`],html:`Something someone <b>buried on purpose</b>. Click it to pick it up.`},{id:`file`,priority:48,when:e=>e.carriedFinds>0,doneOn:[`file-find`],html:`${Af.journal}<span>You're carrying a find. Take it to the <b>journal on the workshop desk</b> (the table on the porch), press ${Yf(`E`)}, and add it to read what it is. It's worth coins too.</span>`},{id:`journal`,priority:20,when:e=>e.filedFinds>0,doneOn:[`open-journal`],seconds:9,html:`Press ${Yf(`J`)} any time to open your journal and reread everything you've found.`},{id:`hole`,priority:42,when:e=>e.inSite&&e.depth>1.7,doneOn:[`jet-out`],html:`Deep hole? To get out, <b>jump and keep holding ${Yf(`Space`)}</b> — your jetpack lifts you. Fuel refills while you stand on the ground.`},{id:`sell`,priority:30,when:e=>e.materials>=25&&!e.hasEarned,doneOn:[`open-shop`],html:`Your pack is filling up. Go to the <b>workshop</b> — the red cabin — look at the counter and press ${Yf(`E`)} to sell what you dug up.`},{id:`shop-sell`,priority:31,when:e=>e.materials>0&&!e.hasEarned,doneOn:[`sell`],doneWhen:e=>e.hasEarned,html:`In the workshop, open the <b>Sell</b> tab to turn your materials into coins.`},{id:`upgrade`,priority:35,when:e=>e.coins>=e.nextPickPrice,doneOn:[`buy-pick`],html:`You can afford a <b>better pickaxe</b>! Workshop → Pickaxes. Bigger picks dig bigger holes.`},{id:`dark`,priority:38,when:e=>e.inSite&&e.depth>4&&e.lanternsCarried+e.lanternsPlaced===0,doneOn:[`buy-lantern`],html:`${Af.lantern}<span>It gets dark down here. Buy a <b>lantern</b> at the workshop (Gear tab) to light your tunnels.</span>`},{id:`lantern`,priority:44,when:e=>e.lanternsCarried>0&&e.lanternsPlaced===0,doneOn:[`place-lantern`],html:`${Af.lantern}<span>Pick the lantern in your inventory (${Yf(`1`)}–${Yf(`5`)} or the mouse wheel), then <b>right-click</b> to set it on the floor, a wall or the ceiling. Hold ${Yf(`E`)} on it to take it back.</span>`},{id:`level`,priority:25,when:e=>e.level>=2,seconds:10,html:`A new level: <b>harder ground and rarer ore</b>. Your pick bites a little less here — the gauge on the right shows how deep you are.`},{id:`pause`,priority:5,when:e=>e.hits>=30,doneOn:[`pause`],seconds:8,html:`Press ${Yf(`Esc`)} or ${Yf(`P`)} to pause, change settings or see the controls.`}],Zf=`dig-a-hole.tutorial.v1`,Qf=12,$f=class{store;el;done=new Set;current=null;shownFor=0;enabled=!0;hiding=0;cooldown=new Map;shown=new Map;constructor(e,t=Zf){this.store=t,this.el=document.createElement(`div`),this.el.className=`tutor`,e.appendChild(this.el);try{let e=JSON.parse(localStorage.getItem(t)??`[]`);Array.isArray(e)&&(this.done=new Set(e.filter(e=>typeof e==`string`)))}catch{}}setEnabled(e){this.enabled=e,e||(this.current=null,this.el.classList.remove(`show`))}skipLearned(e){if(e.hasEarned||e.materials>0)for(let e of[`move`,`dig`,`sell`,`shop-sell`])this.markDone(e);if(e.filedFinds>0)for(let e of[`file`,`journal`,`find`])this.markDone(e);if(e.lanternsPlaced>0)for(let e of[`dark`,`lantern`])this.markDone(e)}event(e){this.current?.doneOn?.includes(e)&&this.complete();for(let t of Xf)t.doneOn?.includes(e)&&this.markDone(t.id)}update(e,t){if(!this.enabled)return;for(let[t,n]of this.cooldown)n-e<=0?this.cooldown.delete(t):this.cooldown.set(t,n-e);if(this.hiding>0){this.hiding-=e;return}let n=this.current;if(n){if(this.shownFor+=e,n.doneWhen?.(t)||n.seconds!==void 0&&this.shownFor>=n.seconds){this.complete();return}if(!n.when(t)||this.shownFor>=Qf){this.dismiss(n);return}let r=this.pick(t,n.priority+1);r&&this.show(r);return}let r=this.pick(t,-1/0);r&&this.show(r)}pick(e,t){let n=null;for(let r of Xf)if(!(this.done.has(r.id)||r.priority<t||r===this.current||this.cooldown.has(r.id))){if(r.doneWhen?.(e)){this.markDone(r.id);continue}r.when(e)&&(!n||r.priority>n.priority)&&(n=r)}return n}show(e){this.current=e,this.shownFor=0,this.el.innerHTML=`<span class="tutor-badge">Tip</span><div class="tutor-text">${e.html}</div>`,this.el.classList.remove(`done`,`show`),this.el.offsetWidth,this.el.classList.add(`show`)}complete(){if(!this.current)return;this.markDone(this.current.id),this.current=null,this.el.classList.add(`done`);let e=this.el.querySelector(`.tutor-badge`);e&&(e.textContent=`✓ Done`),window.setTimeout(()=>{this.current||this.el.classList.remove(`show`)},900),this.hiding=1.6}dismiss(e){let t=(this.shown.get(e.id)??0)+1;this.shown.set(e.id,t),t>=2?this.markDone(e.id):this.cooldown.set(e.id,45),this.current=null,this.el.classList.remove(`show`),this.hiding=.8}markDone(e){if(!this.done.has(e)){this.done.add(e);try{localStorage.setItem(this.store,JSON.stringify([...this.done]))}catch{}}}},ep=2.4,tp=.5,np=class{progress;stats;save;world;hud;viewmodel;mining;player;audio;effects;icons;onOpenShop=null;onCloseShop=null;onOpenJournal=null;onFinish=null;removedVolume=0;saveTimer=0;digSaveTimer=0;statsTimer=10;digDirty=!1;progressDirty=!1;near=null;hold=0;holdTarget=-1;time=0;lastSwing=-99;layerShown=0;jetWasActive=!1;jetPuff=0;stuckClock=0;stuckFromY=0;camera=null;tutorial;walked=0;hitsThisSession=0;lastPos=new U;wasDeep=!1;floorNoteAt=-99;origin=new U;dir=new U;tmp=new U;constructor(e,t,n,r,i,a,o,s,c,l,u){this.progress=e,this.stats=t,this.save=n,this.world=r,this.hud=i,this.viewmodel=a,this.mining=o,this.player=s,this.audio=c,this.effects=l,this.icons=u,this.tutorial=new $f(i.root,n.tutorialKey);let d=()=>this.progress.data.pickaxe.equipped;o.onDug=(n,r)=>{let i=Ad(r.x,r.y-.05,r.z);this.removedVolume+=n,this.hitsThisSession++,e.addMaterial(i.material,1),t.material(i.material,1),t.hit(d(),n),this.digDirty=!0},o.onSwing=()=>{t.swing(d()),this.lastSwing=this.time},o.onMiss=()=>t.miss(),o.onFloor=()=>this.reachFloor(!0),o.canCollect=t=>t.kind===`story`&&e.freeSlots<=0?(i.toast(`${Af.journal}<span>Your hands are full — file your finds at the workshop desk first</span>`,`info`,3200),!1):!0,o.onCollect=e=>this.reward(e),r.digSite.onCarveExtra=(e,t)=>r.lanterns.checkSupport(e,t,e=>this.isSolid(e)),r.digSite.onCrumble=(e,t)=>l.crumble(t,e.x,e.y,e.z,e.volume),r.lanterns.onBroken=(n,r)=>{e.loseLantern(n),t.lantern(`broken`,Math.max(0,-r.y)),c.playGlassBreak(),l.shatter(r.x,r.y,r.z),i.toast(`${Af.lantern}<span>A lantern lost its hold and broke</span>`,`info`,2800)},e.onChange(()=>{this.progressDirty=!0,this.refreshHud()}),this.applyTool(),this.applyJetpack();let f=e.data;f.maxLayer=Math.max(1,Math.min(f.maxLayer,Dd(Math.max(0,f.maxDepth-.55)).index)),(f.lanterns>0||f.placedLanterns.length>0)&&r.lanterns.ensureLights(),f.placedLanterns.forEach((e,t)=>r.lanterns.place(e,t*2.4)),r.lanterns.checkSupport(null,0,e=>this.isSolid(e)),this.selectSlot(e.slots.includes(f.slot)?f.slot:`pickaxe`,!0);{let e=this.player.position;this.layerShown=r.digSite.contains(e.x,e.z)?Ad(e.x,e.y-.1,e.z).index:1,this.lastPos.copy(e)}this.tutorial.skipLearned(this.tutorialState(this.layerShown)),this.refreshHud()}tutorialState(e){let t=this.progress.data,n=this.mining.hovered,r=t.pickaxe.owned;return{walked:this.walked,hits:this.hitsThisSession,depth:this.depth(),inSite:this.world.digSite.contains(this.player.position.x,this.player.position.z),hovering:n?n.kind:null,materials:_d.reduce((e,n)=>e+t.materials[n],0),coins:t.coins,nextPickPrice:r<Ld.length?Ld[r]:1/0,lanternsCarried:t.lanterns,lanternsPlaced:t.placedLanterns.length,carriedFinds:t.carried.length,filedFinds:t.filed.length,level:e,hasEarned:t.coins>0||r>1||Object.keys(this.stats.data.coins.earned).length>0}}update(e,t,n){this.time+=e,this.camera=n;let r=this.progress.data,i=this.player.position,a=this.progress.slots;for(let e=0;e<a.length;e++)t.wasPressed(`Digit${e+1}`)&&this.selectSlot(a[e]);let o=t.consumeWheel();if(o!==0&&a.length>1){let e=Math.max(0,a.indexOf(r.slot));this.selectSlot(a[(e+(o>0?1:-1)+a.length)%a.length])}t.wasPressed(`KeyJ`)&&this.onOpenJournal?.(),n.getWorldPosition(this.origin),n.getWorldDirection(this.dir);let s=this.mining,c=s.hovered?null:this.world.lanterns.pick(this.origin,this.dir,yf.reach),l=!!c&&(!s.ray||c.distance<=s.hit.distance+.1);c&&l&&t.isDown(`KeyE`)?(this.holdTarget!==c.index&&(this.hold=0),this.holdTarget=c.index,this.hold+=e,this.hold>=tp&&(this.recoverLantern(c.index),this.hold=0,this.holdTarget=-1)):(this.hold=0,this.holdTarget=-1),this.near=l?null:this.nearestStation(n),this.near&&t.wasPressed(`KeyE`)&&(this.near===`shop`?this.onOpenShop?.():this.onOpenJournal?.(void 0,!0));let u=this.viewmodel.holding===`lantern`&&r.slot===`lantern`,d=u&&r.lanterns>0&&!!s.ray&&!s.hovered&&!l&&s.hit.distance<=yf.reach;if(d&&t.wasMousePressed(2)&&this.placeLantern(),this.world.lanterns.setHeld(u?this.viewmodel.lanternFlameWorld(this.tmp):null),s.hovered){let e=s.hovered,t=e.kind===`chest`?`Open chest`:e.kind===`story`?`Pick up · ${e.story?.name??`find`}`:`Take ${Cd[e.ore??`iron`].toLowerCase()}`;this.hud.setPrompt(`LMB`,t)}else l?this.hud.setPrompt(`E`,`Hold to take lantern`,Math.min(1,this.hold/tp)):this.near===`shop`?this.hud.setPrompt(`E`,`Use the workshop`):this.near===`desk`?this.hud.setPrompt(`E`,r.carried.length?`Open the journal · ${r.carried.length===1?`1 find`:`${r.carried.length} finds`} to add`:`Open the journal`):d?this.hud.setPrompt(`RMB`,`Place lantern`):this.hud.setPrompt(null);let f=this.world.digSite.contains(i.x,i.z),p=this.depth(),m=f?Ad(i.x,i.y-.1,i.z):Dd(0),h=this.progress.noteDepth(p,m.index);h&&this.stats.layerReached(m.index),m.index!==this.layerShown&&(this.layerShown=m.index,h?(this.hud.showLayer(m),this.audio.playNewLevel()):this.hud.passLayer(m)),this.hud.setDepth(p,r.maxDepth,m,f,r.maxLayer,e),f&&this.player.onGround&&i.y<=this.world.digSite.volume.floorY+.5&&this.reachFloor(!1),this.viewmodel.setLighting(p,u),this.audio.setDepth(p),this.walked+=Math.min(1,Math.hypot(i.x-this.lastPos.x,i.z-this.lastPos.z)),this.lastPos.copy(i),f&&p>1.7?this.wasDeep=!0:this.wasDeep&&p<.4&&(this.wasDeep=!1,this.tutorial.event(`jet-out`)),this.tutorial.update(e,this.tutorialState(m.index));let g=this.player.jet,_=g.capacity>0?g.fuel/g.capacity:0;this.hud.setFuel(_,g.active),this.audio.setJet(g.active,_),g.active&&(this.jetPuff-=e,this.jetPuff<=0&&(this.jetPuff=.05,this.effects.exhaust(i.x,i.y+.6,i.z))),this.stats.jetpackThrust(g.active?e:0,g.active&&!this.jetWasActive,this.jetWasActive&&!g.active&&g.fuel<=0),this.jetWasActive=g.active;let v=this.world.buried.revealedQueue;for(;v.length;){let e=v.shift();e.kind===`ore`&&e.ore&&this.stats.oreRevealed(e.ore,e.id)}this.tickStats(e,t,p,f),this.saveTimer-=e,this.digSaveTimer-=e,this.statsTimer-=e,this.progressDirty&&this.saveTimer<=0&&this.saveProgress(),this.digDirty&&this.digSaveTimer<=0&&this.saveDig(),this.statsTimer<=0&&(this.statsTimer=10,this.save.saveStats(this.stats.data))}tickStats(e,t,n,r,i){let a=this.player.position,o=Math.hypot(this.player.velocity.x,this.player.velocity.z)>.6,s=i??(this.time-this.lastSwing<1.5?`digging`:o?`moving`:`idle`),c=!!t&&(t.isDown(`KeyW`)||t.isDown(`KeyA`)||t.isDown(`KeyS`)||t.isDown(`KeyD`)||t.isDown(`Space`)),l=!1;r&&n>1.5&&c&&s!==`digging`?(this.stuckClock+=e,this.stuckClock>3&&(l=a.y<=this.stuckFromY+.3),this.stuckClock>6&&(this.stuckClock=0,this.stuckFromY=a.y)):(this.stuckClock=0,this.stuckFromY=a.y),this.stats.tick(e,{activity:s,playing:!i,depth:n,pickaxe:this.progress.data.pickaxe.equipped,stuck:l,area:this.area()})}area(){let e=this.player.position;return this.world.digSite.contains(e.x,e.z)?`dig`:e.distanceTo(this.world.shop.counter)<9?`shop`:Math.hypot(e.x,e.z)>If(e.x,e.z)-2?`forest`:`meadow`}async flush(){this.saveProgress(),this.save.saveStats(this.stats.data),this.digDirty&&await this.saveDig()}selectSlot(e,t=!1){this.progress.slots.includes(e)||(e=`pickaxe`),this.progress.selectSlot(e),e===`lantern`?this.viewmodel.setHeld(`lantern`):e.startsWith(`story:`)?this.viewmodel.setHeld(`item`,Jf(e.slice(6))?.prop??null):this.viewmodel.setHeld(`pickaxe`),this.mining.pickaxeInHand=e===`pickaxe`,t||this.hud.flashItemName(this.slotName(e)),this.refreshHud()}slotName(e){return e===`pickaxe`?Df(this.progress.data.pickaxe.equipped).name:e===`lantern`?`Lantern × ${this.progress.data.lanterns}`:Jf(e.slice(6))?.name??``}placeLantern(){let e=this.mining,t=e.ray===`dig`?e.hit.normal:this.tmp.set(0,1,0),n=e.hit.point,r=e=>+e.toFixed(3),i={p:[r(n.x),r(n.y),r(n.z)],n:[r(t.x),r(t.y),r(t.z)]},a=Math.atan2(this.player.position.x-n.x,this.player.position.z-n.z);this.progress.placeLantern(i)&&(this.world.lanterns.place(i,a),this.audio.playFootstep(.6),this.stats.lantern(`placed`,Math.max(0,-n.y)),this.tutorial.event(`place-lantern`),this.progress.data.lanterns<=0&&this.selectSlot(`pickaxe`,!0))}recoverLantern(e){if(!this.progress.canTakeLantern()){this.hud.toast(`${Af.lantern}<span>No room — file your finds first</span>`);return}this.progress.recoverLantern(e)&&(this.world.lanterns.remove(e),this.audio.playPickup(),this.stats.lantern(`recovered`,this.depth()),this.hud.toast(`${Af.lantern}<span>Lantern back in your pack</span>`,`find`,1600))}isSolid(e){let t=this.world.digSite;return!t.contains(e.x,e.z)||t.sample(e.x,e.y,e.z)<0}applyTool(){let e=Df(this.progress.data.pickaxe.equipped);this.viewmodel.setPickaxe(e),this.mining.radius=e.radius}applyJetpack(){let e=this.progress.data.jetpack;this.player.setJetpack(zd.fuel[e.fuel],zd.speed[e.speed],zd.refill)}depth(){let e=this.player.position;return this.world.digSite.contains(e.x,e.z)?Math.max(0,-e.y):0}toScreen(e){let t=this.tmp.copy(e);this.camera?t.project(this.camera):t.set(0,0,0);let n=t.z>1;return{x:n?window.innerWidth/2:(t.x*.5+.5)*window.innerWidth,y:n?window.innerHeight/2:(-t.y*.5+.5)*window.innerHeight}}reward(e){let t=this.progress.data.pickaxe.equipped,n=this.toScreen(e.pos);if(e.kind===`ore`&&e.ore){this.progress.markCollected(e.id),this.hud.flyMaterial(n,e.ore),this.progress.addMaterial(e.ore,1),this.stats.material(e.ore,1),this.stats.oreCollected(e.ore,e.id),this.effects.sparkle(e.pos.x,e.pos.y,e.pos.z,10),this.hud.pickupNote(`${kf(e.ore)}<span>+1 ${Cd[e.ore]}</span>`),this.tutorial.event(`collect-ore`),this.audio.playOre(Td[e.ore].rank);return}if(e.kind===`chest`){this.progress.markCollected(e.id),this.hud.flyCoins(n,e.coins),this.progress.addCoins(e.coins),this.stats.find(`chest`,e.id,-e.pos.y,t,e.coins),this.stats.earned(`chest`,e.coins,t),this.effects.sparkle(e.pos.x,e.pos.y+.2,e.pos.z,28),this.audio.playBreak(),this.audio.playCoins(8),this.hud.pickupNote(`${Af.coin}<span>+${e.coins.toLocaleString(`en-US`)} · treasure chest</span>`,`coins`),this.tutorial.event(`open-chest`);return}if(e.kind===`story`&&e.story){if(!this.progress.carry(e.id))return;this.progress.markCollected(e.id),this.stats.find(`story`,e.id,-e.pos.y,t,0),this.tutorial.event(`pick-up-find`),this.effects.sparkle(e.pos.x,e.pos.y,e.pos.z,16),this.audio.playPickup();let r=this.icons.prop(e.story.prop,64);requestAnimationFrame(()=>this.hud.fly(n,this.hud.slot(`story:${e.id}`),`<img class="fx-img" src="${r}" alt="">`,1)),this.hud.toast(`<img class="toast-img" src="${r}" alt=""><span><b>${e.story.name}</b><br><span class="sub">Someone left this here. Bring it to the journal on the workshop desk.</span></span>`,`treasure`,4600)}}fileFind(e){let t=this.progress.data,n=Jf(e);if(!n||!t.carried.includes(e))return 0;let r=Bd(n.layer,n.index);return this.progress.file(e)?(this.stats.filed(e,r),this.tutorial.event(`file-find`),e===`story-10-7`&&!t.unread.includes(`last-page`)&&t.unread.push(`last-page`),this.stats.earned(`story`,r,t.pickaxe.equipped),this.progress.addCoins(r),this.audio.playPickup(),this.audio.playCoins(5),this.selectSlot(this.progress.slots.includes(t.slot)?t.slot:`pickaxe`,!0),r):0}buyPickaxe(e){let t=this.progress.data;if(e!==t.pickaxe.owned+1||e>Tf.length)return!1;let n=Ld[e-1];return this.progress.spend(n)?(this.stats.spent(`pickaxe-${e}`,n,t.coins),this.progress.setOwnedPickaxe(e),this.stats.pickaxeBought(e),this.tutorial.event(`buy-pick`),this.applyTool(),this.selectSlot(`pickaxe`,!0),this.audio.playPurchase(),!0):!1}equipPickaxe(e){this.progress.equipPickaxe(e),this.applyTool(),this.selectSlot(`pickaxe`,!0)}buyLantern(){return!this.progress.canTakeLantern()||!this.progress.spend(150)?!1:(this.stats.spent(`lantern`,150,this.progress.data.coins),this.world.lanterns.ensureLights(),this.progress.addLantern(),this.stats.lantern(`bought`,this.depth()),this.tutorial.event(`buy-lantern`),this.audio.playPurchase(),!0)}buyJetpack(e){let t=this.progress.data.jetpack[e],n=e===`fuel`?zd.fuelPrice:zd.speedPrice;return t>=n.length||!this.progress.spend(n[t])?!1:(this.stats.spent(`jetpack-${e}-${t+1}`,n[t],this.progress.data.coins),this.progress.upgradeJetpack(e),this.stats.jetpackUpgrade(e,t+1),this.applyJetpack(),this.audio.playPurchase(),!0)}sell(e,t,n=!1){let r=this.progress.takeMaterial(e,t);if(r<=0)return 0;let i=r*Id[e];return this.progress.addCoins(i),this.stats.earned(`sell-${e}`,i,this.progress.data.pickaxe.equipped),this.tutorial.event(`sell`),n||this.audio.playCoins(Math.min(8,2+Math.floor(Math.log10(i+1)*2))),i}sellAll(){let e=0;for(let t of _d)this.progress.data.materials[t]>0&&(e+=this.sell(t,1/0,!0));return e>0&&this.audio.playCoins(Math.min(10,3+Math.floor(Math.log10(e+1)*2))),e}close(){this.onCloseShop?.()}nearestStation(e){let t=this.player.position,n=this.world.shop;e.getWorldPosition(this.origin),e.getWorldDirection(this.dir);let r=(e,t)=>{let n=this.tmp.copy(e).sub(this.origin),r=n.dot(this.dir);return r<=0||r>3.2?!1:n.lengthSq()-r*r<t*t},i=e=>t.y<e.y-.3&&t.y>e.y-1.6,a=Math.hypot(n.counter.x-t.x,n.counter.z-t.z);return Math.hypot(n.desk.x-t.x,n.desk.z-t.z)<ep&&i(n.deskLook)&&r(n.deskLook,.5)?`desk`:a<ep&&i(n.counterLook)&&r(n.counterLook,.7)?`shop`:null}refreshHud(){let e=this.progress.data;this.hud.setResources(e.coins,e.materials);let t=this.progress.slots.map(t=>{if(t===`pickaxe`)return{id:t,image:this.icons.pickaxe(e.pickaxe.equipped,96),name:Df(e.pickaxe.equipped).name};if(t===`lantern`)return{id:t,image:this.icons.lantern(96),name:`Lantern`,count:e.lanterns};let n=Jf(t.slice(6));return{id:t,image:n?this.icons.prop(n.prop,96):``,name:n?.name??``}});this.hud.setHotbar(t,e.slot)}reachFloor(e){let t=this.progress.data;if(!t.finished){t.finished=!0,this.progress.addCoins(Rd),this.stats.earned(`ending`,Rd,t.pickaxe.equipped),this.saveProgress(),this.onFinish?.();return}e&&this.time-this.floorNoteAt>4&&(this.floorNoteAt=this.time,this.hud.toast(`<span>The floor of the world — nothing can dig through it.</span>`,`info`,2600))}saveProgress(){let e=this.player.position;this.progress.data.player={x:e.x,y:e.y,z:e.z,yaw:this.player.yaw,pitch:this.player.pitch},this.save.saveProgress(this.progress.data),this.progressDirty=!1,this.saveTimer=1}async saveDig(){this.digDirty=!1,this.digSaveTimer=6,await this.save.saveDig({version:2,depth:sf.depth,blocks:this.world.digSite.exportBlocks()})}};function rp(){return Object.fromEntries(_d.map(e=>[e,0]))}var ip=class e{data;listeners=[];constructor(t){this.data=t??e.fresh()}static fresh(){return{version:2,coins:0,materials:rp(),pickaxe:{owned:1,equipped:1},lanterns:0,placedLanterns:[],jetpack:{fuel:0,speed:0},collected:[],carried:[],filed:[],order:[],slot:`pickaxe`,maxDepth:0,maxLayer:1,unread:[`page-0`]}}static migrate(t){let n=t;if(!n||typeof n!=`object`)return null;if(n.version===2){let n=t,r=e.fresh();return{...r,...n,materials:{...r.materials,...n.materials},jetpack:{...r.jetpack,...n.jetpack}}}if(n.version===1){let n=t,r=e.fresh();r.coins=n.coins??0,r.materials.dirt=n.materials?.dirt??0,r.materials.iron=n.materials?.metal??0;let i=Math.max(1,Math.min(10,n.pickaxeTier??1));return r.pickaxe={owned:i,equipped:i},r.lanterns=n.lanterns??0,r.placedLanterns=(n.placedLanterns??[]).map(e=>({p:e,n:[0,1,0]})),r.lanterns>0&&r.order.push(`lantern`),r.maxDepth=n.maxDepth??0,r.player=n.player,r}return null}onChange(e){this.listeners.push(e)}emit(e){for(let t of this.listeners)t(e)}addMaterial(e,t){this.data.materials[e]+=t,this.emit(`materials`)}takeMaterial(e,t){let n=Math.min(t,this.data.materials[e]);return this.data.materials[e]-=n,this.emit(`materials`),n}addCoins(e){this.data.coins+=e,this.emit(`coins`)}spend(e){return this.data.coins<e?!1:(this.data.coins-=e,this.emit(`coins`),!0)}setOwnedPickaxe(e){this.data.pickaxe.owned=Math.max(this.data.pickaxe.owned,e),this.data.pickaxe.equipped=e,this.emit(`tools`)}equipPickaxe(e){e<1||e>this.data.pickaxe.owned||(this.data.pickaxe.equipped=e,this.emit(`tools`))}upgradeJetpack(e){this.data.jetpack[e]++,this.emit(`tools`)}get slots(){return[`pickaxe`,...this.data.order]}get freeSlots(){return 5-this.slots.length}canTakeLantern(){return this.data.order.includes(`lantern`)||this.freeSlots>0}addLantern(){return this.canTakeLantern()?(this.data.lanterns++,this.data.order.includes(`lantern`)||this.data.order.push(`lantern`),this.emit(`inventory`),!0):!1}dropLanternSlotIfEmpty(){this.data.lanterns>0||(this.data.order=this.data.order.filter(e=>e!==`lantern`),this.data.slot===`lantern`&&(this.data.slot=`pickaxe`))}placeLantern(e){return this.data.lanterns<=0?!1:(this.data.lanterns--,this.data.placedLanterns.push(e),this.dropLanternSlotIfEmpty(),this.emit(`inventory`),!0)}recoverLantern(e){return!this.data.placedLanterns[e]||!this.canTakeLantern()?!1:(this.data.placedLanterns.splice(e,1),this.data.lanterns++,this.data.order.includes(`lantern`)||this.data.order.push(`lantern`),this.emit(`inventory`),!0)}loseLantern(e){this.data.placedLanterns[e]&&(this.data.placedLanterns.splice(e,1),this.emit(`inventory`))}carry(e){return this.freeSlots<=0||this.data.carried.includes(e)?!1:(this.data.carried.push(e),this.data.order.push(`story:${e}`),this.emit(`inventory`),!0)}file(e){return this.data.carried.includes(e)?(this.data.carried=this.data.carried.filter(t=>t!==e),this.data.order=this.data.order.filter(t=>t!==`story:${e}`),this.data.slot===`story:${e}`&&(this.data.slot=`pickaxe`),this.data.filed.includes(e)||this.data.filed.push(e),this.data.unread.includes(e)||this.data.unread.push(e),this.emit(`discovery`),!0):!1}markRead(e){this.data.unread.includes(e)&&(this.data.unread=this.data.unread.filter(t=>t!==e),this.emit(`discovery`))}selectSlot(e){this.data.slot!==e&&this.slots.includes(e)&&(this.data.slot=e,this.emit(`inventory`))}isCollected(e){return this.data.collected.includes(e)}markCollected(e){this.isCollected(e)||this.data.collected.push(e),this.emit(`discovery`)}noteDepth(e,t){return e>this.data.maxDepth+.01&&(this.data.maxDepth=e),t>this.data.maxLayer&&(this.data.maxLayer=t,this.emit(`tools`),!0)}},ap=`mining-game.save.v2`,op=`mining-game.save.v1`,sp=`mining-game.stats.v1`,cp=`dig-a-hole.tutorial.v1`,lp=`dig-a-hole.slots.v1`,up=`mining-game`,dp=`kv`,fp=`dig`,pp=`main`,mp=`My first world`;function hp(){return new Promise((e,t)=>{let n=indexedDB.open(up,1);n.onupgradeneeded=()=>n.result.createObjectStore(dp),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}function gp(e){try{return localStorage.getItem(e)}catch{return null}}function _p(e,t){try{localStorage.setItem(e,t)}catch{}}var vp=class e{db=null;index;constructor(){this.index=this.readIndex()}get active(){return this.index.active}key(e,t=this.index.active){return t===pp?e:`${e}.${t}`}get tutorialKey(){return this.key(cp)}slots(){return[...this.index.slots].sort((e,t)=>t.updated-e.updated)}get activeName(){return this.index.slots.find(e=>e.id===this.index.active)?.name??mp}nextName(){let e=new Set(this.index.slots.map(e=>e.name)),t=this.index.slots.length+1;for(;e.has(`World ${t}`);)t++;return`World ${t}`}newGame(t){let n=Date.now().toString(36),r=e.summary(n,ip.fresh(),Date.now());r.name=e.cleanName(t)||this.nextName(),this.index.slots.push(r),this.index.active=n,this.writeIndex()}rename(t,n){let r=this.index.slots.find(e=>e.id===t),i=e.cleanName(n);r&&i&&(r.name=i,this.writeIndex())}static cleanName(e){return e.replace(/\s+/g,` `).trim().slice(0,28)}select(e){this.index.slots.some(t=>t.id===e)&&(this.index.active=e,this.writeIndex())}readIndex(){try{let e=JSON.parse(gp(lp)??`null`);if(e&&typeof e.active==`string`&&Array.isArray(e.slots))return e.slots.forEach((e,t)=>e.name||=t===0?mp:`World ${t+1}`),e}catch{}let t={active:pp,slots:[]},n=this.parse(gp(ap)??gp(op));return n&&t.slots.push({...e.summary(pp,n,0),name:mp}),t}writeIndex(){_p(lp,JSON.stringify(this.index))}static summary(e,t,n){return{id:e,name:``,created:n,updated:Date.now(),maxDepth:t.maxDepth,coins:t.coins,pickaxe:t.pickaxe.owned,finds:t.filed.length,finished:!!t.finished}}parse(e){if(!e)return null;try{return ip.migrate(JSON.parse(e))}catch{return null}}loadProgress(){let e=gp(this.key(ap));return this.parse(e??(this.index.active===pp?gp(op):null))}saveProgress(t){_p(this.key(ap),JSON.stringify(t));let n=this.index.active,r=this.index.slots.findIndex(e=>e.id===n),i=r>=0?this.index.slots[r].created:Date.now(),a=e.summary(n,t,i);a.name=r>=0?this.index.slots[r].name:this.index.slots.length?this.nextName():mp,r>=0?this.index.slots[r]=a:this.index.slots.push(a),this.writeIndex()}loadStats(){try{let e=gp(this.key(sp));return e?JSON.parse(e):null}catch{return null}}saveStats(e){_p(this.key(sp),JSON.stringify(e))}async loadDig(){try{let e=await this.database();return await new Promise(t=>{let n=e.transaction(dp,`readonly`).objectStore(dp).get(this.key(fp));n.onsuccess=()=>{let e=n.result;if(!e||e.version!==1&&e.version!==2)return t(null);t({...e,depth:e.version===1?10:e.depth})},n.onerror=()=>t(null)})}catch{return null}}async saveDig(e){try{let t=await this.database();await new Promise(n=>{let r=t.transaction(dp,`readwrite`);r.objectStore(dp).put(e,this.key(fp)),r.oncomplete=()=>n(),r.onerror=()=>n(),r.onabort=()=>n()})}catch{}}database(){return this.db??=hp(),this.db}},yp=3e3,bp=[9,12,14,17,20,27,34,50];function xp(e){return Object.fromEntries(e.map(e=>[e,0]))}var Sp=class e{data;session;lastMaxSample=-1;lastScaleSample=-1;lastDepthMax=0;revealedAt=new Map;constructor(t){this.data=t&&t.version===1?t:e.fresh(),this.session={start:new Date().toISOString(),activeS:0},this.data.sessions.push(this.session),this.event(`session-start`)}static fresh(){return{version:1,createdAt:new Date().toISOString(),sessions:[],time:{active:0,digging:0,shop:0,journal:0,moving:0,idle:0},dig:{swings:0,hits:0,misses:0,volume:0},materials:xp(_d),ores:{revealed:xp(gd),collected:xp(gd),delaySum:0,delayN:0},finds:[],coins:{earned:{},spent:{}},pickaxes:{},depth:{bandSeconds:Array(Sd).fill(0),maxTimeline:[],layerReachedAtS:{1:0}},lanterns:{bought:0,placed:0,recovered:0,broken:0,firstBuyDepth:null},jetpack:{uses:0,thrustS:0,fuelOuts:0,upgrades:0},shop:{visits:0,seconds:0},journal:{opens:0,filed:0},stuckS:0,frames:{bucketsMs:bp,hist:Array(bp.length+1).fill(0),total:0,missed:0,byArea:{dig:{n:0,missed:0},meadow:{n:0,missed:0},shop:{n:0,missed:0},forest:{n:0,missed:0}},scaleTimeline:[]},events:[]}}get t(){return Math.round(this.data.time.active*10)/10}event(e,t={}){let n=this.data.events;n.push({t:this.t,type:e,...t}),n.length>yp&&n.splice(0,n.length-yp)}pick(e){return this.data.pickaxes[e]??={activeS:0,swings:0,hits:0,volume:0,coinsEarned:0,boughtAtS:this.t}}tick(e,t){let n=this.data;if(t.activity===`shop`&&(n.shop.seconds+=e),!t.playing&&t.activity!==`shop`&&t.activity!==`journal`||(n.time.active+=e,n.time[t.activity]+=e,this.session.activeS+=e,!t.playing))return;this.pick(t.pickaxe).activeS+=e;let r=Math.min(n.depth.bandSeconds.length-1,Math.max(0,Math.floor(t.depth)));n.depth.bandSeconds[r]+=e,t.stuck&&(n.stuckS+=e),(t.depth>this.lastDepthMax+.5||n.time.active-this.lastMaxSample>30)&&(t.depth>this.lastDepthMax&&(this.lastDepthMax=t.depth),this.lastMaxSample=n.time.active,n.depth.maxTimeline.push([this.t,Math.round(this.lastDepthMax*10)/10]))}frame(e,t,n,r){let i=this.data.frames,a=bp.findIndex(t=>e<=t);a<0&&(a=bp.length),i.hist[a]++,i.total++;let o=e>t*1.5;o&&i.missed++,i.byArea[n].n++,o&&i.byArea[n].missed++,this.data.time.active-this.lastScaleSample>20&&(this.lastScaleSample=this.data.time.active,i.scaleTimeline.push([this.t,Math.round(r*100)/100]))}swing(e){this.data.dig.swings++,this.pick(e).swings++}hit(e,t){this.data.dig.hits++,this.data.dig.volume+=t;let n=this.pick(e);n.hits++,n.volume+=t}miss(){this.data.dig.misses++}material(e,t){this.data.materials[e]+=t}oreRevealed(e,t){this.data.ores.revealed[e]++,this.revealedAt.set(t,this.data.time.active)}oreCollected(e,t){this.data.ores.collected[e]++;let n=this.revealedAt.get(t);n!==void 0&&(this.data.ores.delaySum+=this.data.time.active-n,this.data.ores.delayN++)}find(e,t,n,r,i){this.data.finds.push({t:this.t,kind:e,id:t,depth:Math.round(n*10)/10,pickaxe:r,coins:i}),this.event(e,{id:t,depth:Math.round(n*10)/10})}earned(e,t,n){let r=this.data.coins.earned;r[e]=(r[e]??0)+t,this.pick(n).coinsEarned+=t}spent(e,t,n){let r=this.data.coins.spent;r[e]=(r[e]??0)+t,this.event(`buy`,{item:e,coins:t,balance:n})}pickaxeBought(e){this.pick(e).boughtAtS=this.t,this.event(`pickaxe`,{tier:e})}lantern(e,t){let n=this.data.lanterns;n[e]++,e===`bought`&&n.firstBuyDepth===null&&(n.firstBuyDepth=Math.round(this.lastDepthMax*10)/10),this.event(`lantern-${e}`,{depth:Math.round(t*10)/10})}jetpackThrust(e,t,n){let r=this.data.jetpack;r.thrustS+=e,t&&r.uses++,n&&r.fuelOuts++}jetpackUpgrade(e,t){this.data.jetpack.upgrades++,this.event(`jetpack`,{part:e,level:t})}shopVisit(){this.data.shop.visits++,this.event(`shop`)}journalOpened(){this.data.journal.opens++}filed(e,t){this.data.journal.filed++,this.event(`filed`,{id:e,coins:t})}layerReached(e){let t=this.data.depth.layerReachedAtS;t[e]===void 0&&(t[e]=this.t),this.event(`layer`,{layer:e})}export(){let e=this.data,t=Math.max(1/60,e.time.active/60),n=Object.values(e.coins.earned).reduce((e,t)=>e+t,0),r={activeMinutes:+(e.time.active/60).toFixed(1),coinsPerActiveMinute:Math.round(n/t),hitsPerDiggingMinute:Math.round(e.dig.hits/Math.max(1/60,e.time.digging/60)),soilPerHitM3:e.dig.hits?+(e.dig.volume/e.dig.hits).toFixed(4):0,shareDigging:+(e.time.digging/Math.max(1,e.time.active)).toFixed(2),oreCollectedPerM3:e.dig.volume?+(Object.values(e.ores.collected).reduce((e,t)=>e+t,0)/e.dig.volume).toFixed(2):0,avgRevealToCollectS:e.ores.delayN?+(e.ores.delaySum/e.ores.delayN).toFixed(1):null,framesMissedShare:e.frames.total?+(e.frames.missed/e.frames.total).toFixed(3):0,stuckMinutes:+(e.stuckS/60).toFixed(1)};return JSON.stringify({summary:r,...e},null,1)}},Cp={radius:.3,height:1.8,eyeHeight:1.64,walkSpeed:4.3,sprintSpeed:6.6,groundAccel:12,groundDecel:15,airAccel:2.4,gravity:24,fallMultiplier:1.35,shortHopMultiplier:1.8,jumpVelocity:7.7,coyoteTime:.1,jumpBufferTime:.12,stepHeight:.32,maxFallSpeed:40,maxSlope:.9,maxPitch:1.54,jetResponse:5,jetAirAccel:5,jetCeiling:3.5},wp=class{world;position=new U;previous=new U;velocity=new U;yaw=0;pitch=0;onGround=!0;sprinting=!1;landedImpact=0;jumpedThisStep=!1;jet={fuel:5,capacity:5,speed:1.5,refill:3,active:!1,startedThisStep:!1,ranOutThisStep:!1};coyote=0;jumpBuffer=0;constructor(e){this.world=e}setJetpack(e,t,n){let r=this.jet;r.fuel=Math.min(e,r.fuel+Math.max(0,e-r.capacity)),r.capacity=e,r.speed=t,r.refill=n}spawn(e,t,n){this.position.copy(e),this.previous.copy(e),this.velocity.set(0,0,0),this.yaw=t,this.pitch=n,this.onGround=!0}look(e,t){this.yaw-=e,this.pitch=Ku(this.pitch-t,-Cp.maxPitch,Cp.maxPitch),this.yaw>Math.PI?this.yaw-=Math.PI*2:this.yaw<-Math.PI&&(this.yaw+=Math.PI*2)}fixedUpdate(e,t){let n=this.position,r=this.velocity;this.previous.copy(n),this.landedImpact=0,this.jumpedThisStep=!1;let i=this.jet;i.startedThisStep=!1,i.ranOutThisStep=!1;let a=t.forward,o=t.right,s=Math.hypot(a,o);s>1&&(a/=s,o/=s);let c=s>.01;this.sprinting=t.sprint&&a>.3&&this.onGround?!0:this.sprinting&&t.sprint&&a>.3;let l=this.sprinting?Cp.sprintSpeed:Cp.walkSpeed,u=Math.sin(this.yaw),d=Math.cos(this.yaw),f=(-u*a+d*o)*l,p=(-d*a-u*o)*l,m=Yu(this.onGround?c?Cp.groundAccel:Cp.groundDecel:c?i.active?Cp.jetAirAccel:Cp.airAccel:.15,e);r.x+=(f-r.x)*m,r.z+=(p-r.z)*m,this.jumpBuffer=t.jumpPressed?Cp.jumpBufferTime:Math.max(0,this.jumpBuffer-e),this.coyote=this.onGround?Cp.coyoteTime:Math.max(0,this.coyote-e),this.jumpBuffer>0&&this.coyote>0&&(r.y=Cp.jumpVelocity,this.onGround=!1,this.coyote=0,this.jumpBuffer=0,this.jumpedThisStep=!0);let h=!this.onGround&&t.jumpHeld&&i.fuel>0&&(i.active||r.y<.8||t.jumpPressed&&!this.jumpedThisStep);if(h&&!i.active&&(i.startedThisStep=!0),i.active=h,i.active){let t=Rf(n.x,n.z)+Cp.jetCeiling-n.y,a=i.speed*Math.max(-.5,Math.min(1,t/1.5));r.y+=(a-r.y)*Yu(Cp.jetResponse,e),i.fuel=Math.max(0,i.fuel-e),i.fuel<=0&&(i.active=!1,i.ranOutThisStep=!0)}else if(!this.onGround){let n=Cp.gravity;r.y<0?n*=Cp.fallMultiplier:t.jumpHeld||(n*=Cp.shortHopMultiplier),r.y=Math.max(r.y-n*e,-Cp.maxFallSpeed)}this.onGround&&!this.jumpedThisStep&&(i.fuel=Math.min(i.capacity,i.fuel+i.capacity/i.refill*e));let g=n.x,_=n.z;n.x+=r.x*e,n.z+=r.z*e;let v=this.onGround?Cp.stepHeight:.02;if(this.world.resolveHorizontal(n,Cp.radius,n.y+v,n.y+Cp.height)){let t=(n.x-g)/e,i=(n.z-_)/e;Math.abs(t)<Math.abs(r.x)&&(r.x=t),Math.abs(i)<Math.abs(r.z)&&(r.z=i)}this.limitSlope(g,_);let y=Math.hypot(n.x,n.z),b=Bf(n.x,n.z);if(y>b&&(n.x*=b/y,n.z*=b/y),n.y+=r.y*e,r.y>0){let e=this.world.ceilingAbove(n.x,n.z,Cp.radius,n.y+Cp.height);e<n.y+Cp.height&&(n.y=e-Cp.height,r.y=0)}let x=this.onGround?Cp.stepHeight:Math.max(.02,-r.y*e+.02),S=this.world.groundHeight(n.x,n.z,Cp.radius,n.y,x);n.y<=S?(!this.onGround&&r.y<0&&(this.landedImpact=-r.y),n.y=S,r.y<0&&(r.y=0),this.onGround=!0):this.onGround&&r.y<=0&&n.y-S<Cp.stepHeight+.05?(n.y=S,r.y=0):this.onGround&&r.y<=0&&this.world.groundHeight(n.x,n.z,Cp.radius,n.y,.02)>=n.y-.02?r.y=0:this.onGround=!1}limitSlope(e,t){let n=this.position,r=n.x-e,i=n.z-t,a=Math.hypot(r,i);if(a<1e-6)return;let o=Rf(e,t),s=(e,t,r)=>(Rf(e,t)-o)/r>Cp.maxSlope&&Rf(e,t)>n.y+.05;s(n.x,n.z,a)&&(Math.abs(r)>1e-6&&!s(n.x,t,Math.abs(r))?(n.z=t,this.velocity.z=0):Math.abs(i)>1e-6&&!s(e,n.z,Math.abs(i))?(n.x=e,this.velocity.x=0):(n.x=e,n.z=t,this.velocity.x=0,this.velocity.z=0))}get horizontalSpeed(){return Math.hypot(this.velocity.x,this.velocity.z)}get lateralSpeed(){return this.velocity.x*Math.cos(this.yaw)-this.velocity.z*Math.sin(this.yaw)}},Tp=74,Ep=5,Dp=class{camera;bobPhase=0;bobAmount=0;sprintAmount=0;onFootstep=null;feetY=0;roll=0;trauma=0;time=0;lastStep=0;land=new Zu(170,16);kickPitch=new Zu(260,22);right=new U;constructor(e){this.camera=new To(Tp,e,.05,700),this.camera.rotation.order=`YXZ`}reset(e){this.feetY=e,this.land.reset(),this.kickPitch.reset(),this.trauma=0}addTrauma(e){this.trauma=Math.min(1,this.trauma+e)}kick(e){this.kickPitch.impulse(e)}onLanded(e){this.land.impulse(-Math.min(e,16)*.11)}onJumped(){this.land.impulse(.25)}update(e,t,n){this.time+=e;let r=this.camera,i=t.horizontalSpeed;this.feetY=t.onGround?qu(this.feetY,n.y,Yu(18,e)):n.y,Math.abs(this.feetY-n.y)>.6&&(this.feetY=n.y);let a=t.onGround?Ku(i/Cp.walkSpeed,0,1.5):0;if(this.bobAmount=qu(this.bobAmount,a,Yu(9,e)),this.sprintAmount=qu(this.sprintAmount,t.sprinting&&i>4.6?1:0,Yu(5,e)),t.onGround&&i>.3){let t=qu(.74,.98,this.sprintAmount);this.bobPhase+=e*Math.PI*(i/t)*.5;let n=Math.floor(this.bobPhase/Math.PI);n!==this.lastStep&&(this.lastStep=n,i>1.2&&this.onFootstep?.(Ku(i/Cp.walkSpeed,.4,1.5)))}else this.bobAmount<.05&&(this.bobPhase=Math.round(this.bobPhase/Math.PI)*Math.PI,this.lastStep=Math.floor(this.bobPhase/Math.PI));let o=-Math.cos(this.bobPhase*2)*.022*this.bobAmount,s=Math.sin(this.bobPhase)*.02*this.bobAmount;this.land.update(e),this.kickPitch.update(e);let c=Ku(-t.lateralSpeed/Cp.walkSpeed,-1.2,1.2)*.011;this.roll=qu(this.roll,c,Yu(8,e)),this.trauma=Math.max(0,this.trauma-e*1.8);let l=this.trauma*this.trauma,u=this.time*28,d=l*.028*(Math.sin(u*1.13)*.6+Math.sin(u*2.31+1.7)*.4),f=l*.028*(Math.sin(u*.97+4.1)*.6+Math.sin(u*2.07+.3)*.4),p=l*.02*Math.sin(u*1.61+2.2);this.right.set(Math.cos(t.yaw),0,-Math.sin(t.yaw)),r.position.set(n.x,this.feetY+Cp.eyeHeight+o+this.land.value,n.z),r.position.addScaledVector(this.right,s),r.rotation.set(t.pitch+this.kickPitch.value+d,t.yaw+f,this.roll+Math.sin(this.bobPhase)*.0035*this.bobAmount+p);let m=Tp+Ep*this.sprintAmount;Math.abs(r.fov-m)>.01&&(r.fov=m,r.updateProjectionMatrix()),r.updateMatrixWorld()}};function Op(){document.body.classList.add(`ab-pause-b`,`pp-console`,`ab-shop-b`,`ab-journal-b`)}var kp={rz:-.75,ry:.5,zoom:1.3,focusY:.6,focusX:.58};function Ap(e,t){let n=new G,r=new Ha({color:`#a3a8ae`,roughness:.3,metalness:.85,envMap:e,envMapIntensity:1.1}),i=new Ha({color:`#3b3e43`,roughness:.45,metalness:.8,envMap:e}),a=new Ha({color:`#c79a45`,roughness:.32,metalness:.95,envMap:e,envMapIntensity:1.2}),o=new Ha({color:`#6a4529`,roughness:.8,metalness:0}),s=new Ha({color:`#f4efe0`,roughness:.2,metalness:0,emissive:new K(`#fff3d0`),emissiveIntensity:.25});for(let e of[-.075,.075]){let o=new J(new Y(.058,.058,.3,24),r);o.position.set(e,.19,0);let s=new J(new Aa(.058,24,12,0,Math.PI*2,0,Math.PI/2),r);s.position.set(e,.34,0);let c=new J(new Y(.012,.016,.03,12),a);c.position.set(e,.405,0);let l=new J(new Aa(.058,24,12,0,Math.PI*2,Math.PI/2,Math.PI/2),r);l.position.set(e,.04,0);let u=new J(new Y(.03,.045,.06,18,1,!0),i);u.position.set(e,-.02,0);let d=new J(new Y(.047,.047,.01,18),a);d.position.set(e,-.05,0),n.add(o,s,c,l,u,d);for(let t of[.1,.28]){let r=new J(new Y(.061,.061,.022,24),a);r.position.set(e,t,0),n.add(r)}if(t===`flame`){let t=new J(new ci(.042,.22,16,1,!0),new Ha({color:`#ff8a2a`,emissive:new K(`#ff7a1a`),emissiveIntensity:2.2,transparent:!0,opacity:.85}));t.rotation.x=Math.PI,t.position.set(e,-.165,0);let r=new J(new ci(.022,.12,12,1,!0),new Ha({color:`#fff2b0`,emissive:new K(`#fff0a0`),emissiveIntensity:2.5}));r.rotation.x=Math.PI,r.position.set(e,-.115,0),n.add(t,r)}}let c=new J(new Y(.034,.034,.016,24),a);c.rotation.x=Math.PI/2,c.position.set(0,.25,-.03);let l=t===`tank`?new Ha({color:`#c8ffb8`,emissive:new K(`#6cff7a`),emissiveIntensity:1.1}):s,u=new J(new Y(.027,.027,.004,24),l);u.rotation.x=Math.PI/2,u.position.set(0,.25,-.039);let d=new J(new oi(.003,.021,.002),i);d.position.set(.004,.256,-.042),d.rotation.z=t===`tank`?.6:-.6;let f=new J(new Y(.009,.009,.15,10),a);f.rotation.z=Math.PI/2,f.position.set(0,.12,-.02);let p=new J(new Y(.02,.02,.01,6),i);p.rotation.x=Math.PI/2,p.position.set(0,.12,-.035),n.add(c,u,d,f,p);let m=new J(new oi(.25,.3,.025),o);m.position.set(0,.19,.07),n.add(m);for(let e of[-.085,.085]){let t=new J(new oi(.03,.34,.012),o);t.position.set(e,.2,.09);let r=new J(new oi(.036,.024,.008),a);r.position.set(e,.12,.099),n.add(t,r)}n.rotation.y=Math.PI;let h=new G;return h.add(n),h}var jp=class{renderer;woodMap;envMap;cache=new Map;turnJobs=new Map;turnQueue=[];turnRaf=0;targets=new Map;scene=new hn;camera=new To(28,1,.01,50);holder=new G;box=new An;sphere=new er;canvas=document.createElement(`canvas`);lanternGlow=new Do(16757850,0,1.2,2);constructor(e,t,n){this.renderer=e,this.woodMap=t,this.envMap=n,this.scene.add(new po(15265528,5917242,2.2));let r=new Ao(16773336,3.8);r.position.set(2,3,2.5);let i=new Ao(12374783,2.4);i.position.set(-2.5,1.5,-2);let a=new Ao(16769728,.9);a.position.set(-2,-.5,2.5),this.scene.add(r,i,a,this.lanternGlow,this.holder)}pickaxe(e,t=128){return this.get(`pick-${e}-${t}`,()=>nf(this.woodMap,this.envMap,Df(e)).group,t,kp)}lantern(e=128){return this.get(`lantern-${e}`,()=>this.glowingLantern(),e,{ry:.5,pitch:.25})}jetpack(e=128,t=`plain`){return this.get(`jet-${t}-${e}`,()=>Ap(this.envMap,t),e,{ry:-.5,pitch:.2})}prop(e,t=128){return this.get(`prop-${e}-${t}`,()=>Qd(e),t,{rx:.9,ry:.4})}pickaxeTurntable(e,t=260){let n=`turn-pick-${e}-${t}`,r=this.turnJobs.get(n);if(!r){let i=nf(this.woodMap,this.envMap,Df(e)).group,a=new G;a.add(i),a.rotation.z=-.28;let o=new G;o.add(a),o.updateMatrixWorld(!0),this.box.setFromObject(a),this.box.getBoundingSphere(this.sphere),a.position.set(-this.sphere.center.x,-this.sphere.center.y,-this.sphere.center.z),r={spin:o,dist:this.sphere.radius/Math.sin(this.camera.fov*Math.PI/360)*.98,size:t,frames:[]},this.turnJobs.set(n,r),this.renderTurnFrames(r,1),this.turnQueue.push(r)}let i=this.turnQueue.indexOf(r);return i>0&&this.turnQueue.unshift(...this.turnQueue.splice(i,1)),this.turnQueue.length&&!this.turnRaf&&(this.turnRaf=requestAnimationFrame(this.pumpTurntables)),r.frames}pumpTurntables=()=>{this.turnRaf=0;let e=performance.now();for(;this.turnQueue.length&&performance.now()-e<7;){let e=this.turnQueue[0];this.renderTurnFrames(e,1),e.frames.length>=72&&this.turnQueue.shift()}this.turnQueue.length&&(this.turnRaf=requestAnimationFrame(this.pumpTurntables))};renderTurnFrames(e,t){let n=.18;this.camera.position.set(0,Math.sin(n)*e.dist,Math.cos(n)*e.dist),this.camera.lookAt(0,0,0),this.camera.updateMatrixWorld(),this.holder.add(e.spin);for(let n=0;n<t&&e.frames.length<72;n++)e.spin.rotation.y=e.frames.length/72*Math.PI*2,e.spin.updateMatrixWorld(!0),e.frames.push(this.snapshot(e.size));this.holder.remove(e.spin)}glowingLantern(){return rf(this.envMap).group}get(e,t,n,r){let i=this.cache.get(e);return i||(i=this.render(t,n,r),this.cache.set(e,i)),i}render(e,t,n){let r=e(),i=new G;i.add(r),i.rotation.set(n.rx??0,n.ry??0,n.rz??0,`ZYX`),this.holder.add(i),i.updateMatrixWorld(!0),this.box.setFromObject(i);let a=this.box.getCenter(new U),o=this.box.getSize(new U);n.focusY!==void 0&&(a.y=this.box.min.y+o.y*n.focusY),n.focusX!==void 0&&(a.x=this.box.min.x+o.x*n.focusX);let s=n.pitch??.35,c=Math.max(o.x,o.y*Math.cos(s)+o.z*Math.sin(s))*.5/Math.tan(this.camera.fov*Math.PI/360)*1.12/(n.zoom??1)+Math.max(o.x,o.z)*.5;this.camera.position.set(a.x,a.y+Math.sin(s)*c,a.z+Math.cos(s)*c),this.camera.lookAt(a),this.camera.updateMatrixWorld();let l=!1;r.traverse(e=>{e.name===`lantern-flame`&&(l=!0,e.getWorldPosition(this.lanternGlow.position))}),this.lanternGlow.intensity=l?1.4:0;let u=this.snapshot(t);return this.lanternGlow.intensity=0,this.holder.remove(i),u}snapshot(e){let t=this.renderer,n=this.targets.get(e);n||(n=new kt(e,e,{samples:4}),n.texture.colorSpace=Le,this.targets.set(e,n));let r=t.getRenderTarget(),i=t.getClearColor(new K),a=t.getClearAlpha();t.setRenderTarget(n),t.setClearColor(0,0),t.clear(),t.render(this.scene,this.camera);let o=new Uint8Array(e*e*4);t.readRenderTargetPixels(n,0,0,e,e,o),t.setRenderTarget(r),t.setClearColor(i,a);let s=this.canvas;s.width=e,s.height=e;let c=s.getContext(`2d`),l=c.createImageData(e,e),u=e*4;for(let t=0;t<e;t++)l.data.set(o.subarray((e-1-t)*u,(e-t)*u),t*u);return c.putImageData(l,0,0),s.toDataURL(`image/png`)}},Mp=99,Np=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),Pp=e=>e.toLocaleString(`en-US`),Fp=class{progress;icons;hud;onClose=null;onFile=null;root;nav;page;tray;coins;count;chapter=0;open=null;atDesk=!1;busy=!1;constructor(e,t,n,r){this.progress=t,this.icons=n,this.hud=r,this.root=document.createElement(`div`),this.root.className=`panel-screen journal hidden`,this.root.innerHTML=`
      <div class="journal-book">
        <header>
          <div class="journal-title">${Af.journal}<div><h2>Journal</h2><p class="journal-count"></p></div></div>
          <div class="shop-coins journal-coins">${Af.coin}<b>0</b></div>
          <button type="button" class="panel-close">Close <kbd>E</kbd></button>
        </header>
        <div class="journal-body">
          <nav class="journal-nav"></nav>
          <section class="journal-page"></section>
        </div>
        <footer class="journal-tray"></footer>
      </div>`,e.appendChild(this.root),this.nav=this.root.querySelector(`.journal-nav`),this.page=this.root.querySelector(`.journal-page`),this.tray=this.root.querySelector(`.journal-tray`),this.coins=this.root.querySelector(`.journal-coins`),this.count=this.root.querySelector(`.journal-count`),this.root.querySelector(`.panel-close`).addEventListener(`click`,()=>this.onClose?.()),this.nav.addEventListener(`click`,e=>{let t=e.target.closest(`[data-chapter]`);t&&(this.chapter=Number(t.dataset.chapter),this.open=null,this.render())}),this.page.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`[data-entry]`);if(n){this.open=n.dataset.entry,this.render();return}t.closest(`.entry-back`)&&(this.open=null,this.render())}),this.tray.addEventListener(`click`,e=>{let t=e.target.closest(`[data-add]`);t&&!t.disabled&&this.file(t.dataset.add)}),this.tray.addEventListener(`dragstart`,e=>{let t=e.target.closest(`[data-find]`);t&&this.atDesk&&e.dataTransfer&&(e.dataTransfer.setData(`text/plain`,t.dataset.find),e.dataTransfer.effectAllowed=`move`,this.root.classList.add(`dragging`))}),this.tray.addEventListener(`dragend`,()=>this.root.classList.remove(`dragging`));let i=this.root.querySelector(`.journal-body`);i.addEventListener(`dragover`,e=>{this.atDesk&&(e.preventDefault(),i.classList.add(`drop-over`))}),i.addEventListener(`dragleave`,e=>{i.contains(e.relatedTarget)||i.classList.remove(`drop-over`)}),i.addEventListener(`drop`,e=>{e.preventDefault(),i.classList.remove(`drop-over`),this.root.classList.remove(`dragging`);let t=e.dataTransfer?.getData(`text/plain`);t&&this.atDesk&&this.file(t,{x:e.clientX,y:e.clientY})})}get visible(){return!this.root.classList.contains(`hidden`)}show(e,t=!1){this.atDesk=t,this.open=null;let n=this.progress.data,r=n.carried.map(e=>Jf(e)).find(Boolean),i=n.unread.map(e=>Jf(e)).find(Boolean);e&&Jf(e)?this.chapter=Jf(e).layer:t&&r?this.chapter=r.layer:n.unread.includes(`page-0`)?this.chapter=0:i&&(this.chapter=i.layer),this.render(),this.root.classList.remove(`hidden`)}hide(){this.root.classList.add(`hidden`)}file(e,t){let n=Jf(e);if(!n||this.busy)return;let r=this.tray.querySelector(`[data-find="${e}"] img`),i=t??r??{x:window.innerWidth/2,y:window.innerHeight-80},a=i instanceof HTMLElement?Ip(i):i;(this.chapter!==n.layer||this.open)&&(this.chapter=n.layer,this.open=null,this.render());let o=this.page.querySelector(`[data-place="${e}"]`),s=this.progress.data.coins,c=this.onFile?.(e)??0;if(c<=0)return;this.busy=!0,this.renderTray(),this.setCoins(s);let l=this.icons.prop(n.prop,96),u=()=>{this.busy=!1,this.render(),this.setCoins(s);let t=this.page.querySelector(`[data-entry="${e}"]`);t&&(t.classList.add(`arrive`),this.hud.flyCoins(t,c,this.coins)),window.setTimeout(()=>{this.hud.floatDelta(this.coins,c),this.setCoins(this.progress.data.coins)},t?780:0)};o?this.hud.fly(a,o,`<img class="fx-img big" src="${l}" alt="">`,1,u):u()}setCoins(e){this.coins.querySelector(`b`).textContent=Pp(e)}render(){let e=this.progress.data;this.setCoins(e.coins),this.count.textContent=`${e.filed.length} of ${Kf.length} things found`;let t=new Set(e.unread),n=Hf.filter(t=>t.layer<=e.maxLayer),r=e.filed.includes(Uf);this.nav.innerHTML=`<p class="nav-label">Story chapters · click one to open it</p><button type="button" data-chapter="0" class="${this.chapter===0?`on`:``}"><span>Start here</span><small>R.’s note</small>${t.has(`page-0`)?`<i class="unread-dot"></i>`:``}</button>`+n.map(n=>{let r=Kf.filter(e=>e.layer===n.layer),i=r.filter(t=>e.filed.includes(t.id)).length,a=r.some(n=>t.has(n.id)||e.carried.includes(n.id)),o=r.map(t=>`<i class="${e.filed.includes(t.id)?`on`:``}"></i>`).join(``);return`<button type="button" data-chapter="${n.layer}" class="${this.chapter===n.layer?`on`:``}"><span>${n.title}</span><small>Level ${n.layer} · ${i} of 7</small><span class="pips">${o}</span>${a?`<i class="unread-dot"></i>`:``}</button>`}).join(``)+(r?`<button type="button" data-chapter="${Mp}" class="${this.chapter===Mp?`on`:``}"><span>${Wf.title}</span><small>The end of the story</small>${t.has(`last-page`)?`<i class="unread-dot"></i>`:``}</button>`:``)+`<p class="nav-note">${e.maxLayer<Hf.length?`Dig deeper to find more pages.`:r?`The story is complete. The Deep goes on below — twenty more levels.`:`E.’s Big Note lies at the very bottom of level 10.`}</p>`,this.chapter===0?this.renderPageZero():this.chapter===Mp?this.renderLastPage():this.open?this.renderEntry(this.open):this.renderShelf(),this.renderTray()}renderShelf(){let e=this.progress.data,t=new Set(e.unread),n=Hf.find(e=>e.layer===this.chapter),r=Od(this.chapter),i=Kf.filter(e=>e.layer===this.chapter);this.page.innerHTML=`
      <div class="page-head">
        <small>Level ${this.chapter} · ${r.name} · ${r.top}–${r.bottom} m down</small>
        <h3>${n?.title??``}</h3>
        <p>${n?.line??``}</p>
      </div>
      <ol class="how">
        <li><b>1</b><span>E. buried <strong>7 things</strong> in this level. Dig to find them.</span></li>
        <li><b>2</b><span>Bring them to the journal on the <strong>workshop desk</strong>.</span></li>
        <li><b>3</b><span>Add them here — then <strong>click one to read it</strong>.</span></li>
      </ol>
      <div class="shelf">
        ${i.map((n,r)=>{if(e.filed.includes(n.id)){let e=t.has(n.id);return`<button type="button" class="find-card${e?` fresh`:``}" data-entry="${n.id}" data-place="${n.id}">
                <span class="find-num">${r+1}</span>
                <span class="find-img"><img src="${this.icons.prop(n.prop,128)}" alt=""></span>
                <b>${Np(n.name)}</b>
                <small>${e?`New! Click to read`:`Click to read`}</small>
              </button>`}let i=e.carried.includes(n.id);return`<div class="find-card empty${i?` waiting`:``}" data-place="${n.id}">
                <span class="find-num">${r+1}</span>
                <span class="find-img"><span class="q">?</span></span>
                <b>${i?Np(n.name):`Not found yet`}</b>
                <small>${i?`In your pack — add it below ↓`:n.depth<1?`Buried near the surface`:`Buried below ${Math.floor(n.depth)} m`}</small>
              </div>`}).join(``)}
      </div>`}renderTray(){let e=this.progress.data;if(e.carried.length===0){this.tray.innerHTML=``,this.tray.classList.remove(`show`);return}this.tray.classList.add(`show`);let t=e.carried.map(e=>Jf(e)).filter(e=>!!e).map(e=>`<div class="tray-find${this.atDesk?` can-drag`:``}" data-find="${e.id}" draggable="${this.atDesk}">
          <img src="${this.icons.prop(e.prop,96)}" alt="" draggable="false">
          <div><b>${Np(e.name)}</b><small>Level ${e.layer} · worth ${Pp(Bd(e.layer,e.index))} coins</small></div>
          <button type="button" class="primary small" data-add="${e.id}" ${this.atDesk&&!this.busy?``:`disabled`}>Add to journal</button>
        </div>`).join(``);this.tray.innerHTML=`
      <div class="tray-head">${Af.journal}<span>${this.atDesk?`You found these while digging. <b>Drag one onto the page</b>, or press <b>Add to journal</b>, to keep it and read it.`:`You’re carrying these finds. To add them, go to the <b>journal on the workshop desk</b>.`}</span></div>
      <div class="tray-list">${t}</div>`}renderLastPage(){this.progress.markRead(`last-page`),this.page.innerHTML=`
      <article class="entry">
        <div class="entry-object note"><p>${Np(Wf.text).replace(/\n/g,`<br>`)}</p></div>
        <div class="entry-text">
          <small>The end of the story</small>
          <h3>${Wf.title}</h3>
          <p class="object">${Np(Wf.object)}</p>
        </div>
      </article>`}renderPageZero(){this.progress.markRead(`page-0`),this.page.innerHTML=`
      <article class="entry">
        <div class="entry-object note"><p>${Np(Gf.text).replace(/\n/g,`<br>`)}</p></div>
        <div class="entry-text">
          <small>Page 0 · Before the dig</small>
          <h3>${Gf.title}</h3>
          <p class="object">${Np(Gf.object)}</p>
        </div>
      </article>`}renderEntry(e){let t=Jf(e);if(!t||!this.progress.data.filed.includes(e)){this.open=null,this.renderShelf();return}this.progress.markRead(e),this.page.innerHTML=`
      <article class="entry">
        <div class="entry-object"><img src="${this.icons.prop(t.prop,256)}" alt=""></div>
        <div class="entry-text">
          <small>Level ${t.layer} · find ${t.index+1} of 7 · ${t.depth.toFixed(1)} m down</small>
          <h3>${Np(t.name)}</h3>
          <p class="object">${Np(t.object)}</p>
          <p class="writing">${Np(t.text)}</p>
          <button type="button" class="entry-back">← Back to ${Hf.find(e=>e.layer===t.layer)?.title??`the page`}</button>
        </div>
      </article>`}};function Ip(e){let t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}function Lp(e,t=!1){let n=t=>e===t?`var(--accent)`:`rgba(244,238,230,0.1)`;return`<svg class="ctl-mouse" viewBox="0 0 40 56" aria-hidden="true">
    <path d="M20 3C10 3 5 10 5 20v16c0 10 7 17 15 17s15-7 15-17V20C35 10 30 3 20 3z" fill="rgba(20,15,11,0.6)" stroke="rgba(244,238,230,0.45)" stroke-width="2"/>
    <path d="M20 4C11 4 6 10 6 20v2h13V4z" fill="${n(`left`)}"/>
    <path d="M20 4c9 0 14 6 14 16v2H21V4z" fill="${n(`right`)}"/>
    <path d="M5 22h30M20 3v19" stroke="rgba(244,238,230,0.45)" stroke-width="2"/>
    <rect x="17.5" y="9" width="5" height="9" rx="2.5" fill="${t?`var(--accent)`:`rgba(244,238,230,0.35)`}"/>
  </svg>`}var Rp=`
  <div class="ctl-grid">
    <section class="ctl-card ctl-wide">
      <div class="ctl-keys">
        <span class="wasd"><kbd class="w">W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></span>
        ${Lp(`none`)}
        <kbd class="wide">Shift</kbd>
      </div>
      <div class="ctl-text"><h4>Move and look</h4><p>Walk with <b>W A S D</b>, look around with the mouse. Hold <b>Shift</b> to run.</p></div>
    </section>
    <section class="ctl-card">
      <div class="ctl-keys">${Lp(`left`)}</div>
      <div class="ctl-text"><h4>Dig</h4><p><b>Hold</b> the left button to keep swinging. Click ore, chests and finds to pick them up.</p></div>
    </section>
    <section class="ctl-card">
      <div class="ctl-keys"><kbd class="space">Space</kbd></div>
      <div class="ctl-text"><h4>Jump and fly</h4><p>Jump, then <b>keep holding</b> in the air to fly out with the jetpack.</p></div>
    </section>
    <section class="ctl-card">
      <div class="ctl-keys">${Lp(`right`)}<kbd>E</kbd></div>
      <div class="ctl-text"><h4>Lanterns</h4><p>Right-click sets down the lantern in your hand. Hold <b>E</b> on one to take it back.</p></div>
    </section>
    <section class="ctl-card">
      <div class="ctl-keys"><kbd>1</kbd><span class="ctl-to">–</span><kbd>5</kbd>${Lp(`none`,!0)}</div>
      <div class="ctl-text"><h4>What's in your hand</h4><p>Number keys or the mouse wheel.</p></div>
    </section>
    <section class="ctl-card">
      <div class="ctl-keys"><kbd>E</kbd><kbd>J</kbd></div>
      <div class="ctl-text"><h4>Workshop and journal</h4><p><b>E</b> at the workshop or the journal desk. <b>J</b> opens the journal anywhere.</p></div>
    </section>
    <section class="ctl-card">
      <div class="ctl-keys"><kbd class="wide">Esc</kbd><kbd>P</kbd></div>
      <div class="ctl-text"><h4>Pause</h4><p>Settings, controls, and the way back to the title.</p></div>
    </section>
  </div>`,zp=`
  <div class="cr-logo">Dig <em>a</em> Hole</div>
  <p class="cr-line">A game by the Dig A Hole team</p>
  <div class="cr-block"><h3>Design &amp; direction</h3><p>The Dig A Hole team</p></div>
  <div class="cr-block"><h3>Programming, art, sound &amp; music</h3><p>Made entirely in code — every model, texture, sound and note is generated by the game itself as it loads</p></div>
  <div class="cr-block"><h3>Story</h3><p>The finds, the notes and R.’s last page</p></div>
  <div class="cr-block"><h3>Built with</h3><p>Three.js — MIT License, © 2010–2026 three.js authors</p><p>TypeScript · Vite</p></div>
  <div class="cr-block"><h3>Made with the help of</h3><p>Claude, by Anthropic</p></div>
  <div class="cr-block"><h3>Playtesters</h3><p>Everyone who dug the first holes</p></div>
  <p class="cr-thanks">Thank you for playing.</p>`,Bp={play:`<svg viewBox="0 0 24 24"><path d="M8 5l11 7-11 7z" fill="currentColor"/></svg>`,settings:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,controls:`<svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="11" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M7 11h2M8 10v2M15 11h.01M17 13h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,shovel:`<svg viewBox="0 0 24 24"><path d="M14.5 3.5l6 6M17.5 6.5L9 15" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path d="M9.8 11.6l2.6 2.6-3.6 3.6a3.4 3.4 0 0 1-4.8 0 3.4 3.4 0 0 1 0-4.8z" fill="currentColor"/></svg>`,load:`<svg viewBox="0 0 24 24"><path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`,credits:`<svg viewBox="0 0 24 24"><path d="M12 3.5l2.5 5.2 5.6.8-4.1 3.9 1 5.6-5-2.7-5 2.7 1-5.6-4.1-3.9 5.6-.8z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,plus:`<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,resume:`<svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 1 0 2.4-5.7" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path d="M4 4v4h4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,lock:`<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="15.5" r="1.4" fill="currentColor"/></svg>`,pencil:`<svg viewBox="0 0 24 24"><path d="M4 20l1-4.5L15.5 5a2.1 2.1 0 0 1 3 3L8 18.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M13.5 7l3 3" stroke="currentColor" stroke-width="1.8"/></svg>`,back:`<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`},Vp={volume:`<svg viewBox="0 0 24 24"><path d="M4 10v4h4l5 4V6L8 10z" fill="currentColor"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,music:`<svg viewBox="0 0 24 24"><path d="M9 17V5l11-2v12" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="6.5" cy="17" r="2.6" fill="currentColor"/><circle cx="17.5" cy="15" r="2.6" fill="currentColor"/></svg>`,mouse:`<svg viewBox="0 0 24 24"><rect x="6" y="3" width="12" height="18" rx="6" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,tips:`<svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9.5 19h5M10.5 21.5h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,graphics:`<svg viewBox="0 0 24 24"><path d="M3 18l6-7 4 4 3-3 5 6z" fill="currentColor"/><circle cx="16" cy="7" r="2.2" fill="currentColor"/></svg>`},Hp=[`Tip: hold <b>Space</b> in the air to fly out of your hole with the jetpack.`,`Tip: the deeper you go, the harder the rock — and the rarer the ore.`,`Tip: bring buried finds to the <b>journal desk</b> at the workshop to read them.`,`Tip: lanterns light the dark. Right-click to set one on a wall.`,`Tip: every world is saved on its own. Start as many as you like.`];function Up(e,t,n,r,i,a,o=``){return`<div class="setting ${o}">
    <span class="set-icon">${e}</span>
    <span class="set-text"><span class="set-name">${t}</span><small class="set-desc">${n}</small></span>
    <span class="set-control">
      <span class="set-value"><button type="button" class="step" data-for="${r}" data-step="${a}" data-dir="-1" aria-label="Less">◀</button><output class="${r}-out"></output><button type="button" class="step" data-for="${r}" data-step="${a}" data-dir="1" aria-label="More">▶</button></span>
      ${i}
    </span>
  </div>`}function Wp(e,t,n,r=``){return`<button type="button" class="title-btn ${r}" data-act="${e}">${t}<span class="tb-text"><span class="tb-name">${n}</span><small class="tb-sub"></small></span></button>`}var Gp=[`low`,`medium`,`high`],Kp=e=>Math.round(e).toLocaleString(`en-US`);function qp(e){if(!e)return`in an earlier version`;let t=(Date.now()-e)/6e4;return t<2?`just now`:t<60?`${Math.round(t)} min ago`:t<1440?`${Math.round(t/60)} h ago`:new Date(e).toLocaleDateString(`en-GB`,{day:`numeric`,month:`short`,year:`numeric`})}var Jp=class{settings;onPlay=null;onSettingsChange=null;onNewGame=null;onLoadSlot=null;onToTitle=null;onEndingDone=null;root;boot;tipTimer=0;menuHint;pauseHint;current=`none`;page=`settings`;sheet=null;creditsFromEnding=!1;creditsTimer=0;newFromList=!1;nextWorldName=`World 2`;onRenameSlot=null;constructor(e,t){this.settings=t,this.root=document.createElement(`div`),this.root.className=`screens`,this.root.innerHTML=`
      <div class="vignette"></div>
      <section class="screen menu" data-screen="menu">
        <div class="title-card">
          <h1 class="logo"><span>挖个</span><em>大</em><span>坑</span></h1>
          <p class="tagline">How deep will you go?</p>
          <nav class="title-nav">
            ${Wp(`continue`,Bp.play,`Continue`,`primary`)}
            ${Wp(`load`,Bp.load,`Worlds`)}
            ${Wp(`settings`,Bp.settings,`Settings`)}
            ${Wp(`credits`,Bp.credits,`Credits`)}
          </nav>
          <div class="title-sheet" data-sheet="new">
            <h2>Create a new world</h2>
            <label class="field">
              <span>Name your world</span>
              <input class="new-world-name" type="text" maxlength="28" spellcheck="false" autocomplete="off" />
            </label>
            <div class="safe-card">
              <div class="safe-head">${Bp.lock}<span><b>Your worlds stay just as they are</b><small>The new world starts fresh at the top — these keep every hole, coin and find.</small></span></div>
              <ul class="safe-worlds"></ul>
            </div>
            <div class="sheet-actions">
              ${Wp(`new-yes`,Bp.shovel,`Create world`,`primary`)}
              ${Wp(`back`,Bp.back,`Cancel`)}
            </div>
          </div>
          <div class="title-sheet" data-sheet="load">
            <h2>Your worlds</h2>
            <div class="safe-badges">
              <span class="safe-badge">${Bp.lock}Each world saved on its own</span>
              <span class="safe-badge">${Bp.resume}Right where you left it</span>
            </div>
            <ul class="world-list"></ul>
            <div class="sheet-actions">${Wp(`back`,Bp.back,`Back`)}</div>
          </div>
          <p class="hint menu-hint" hidden></p>
        </div>
        <p class="title-foot">Press <kbd>Enter</kbd> to continue</p>
      </section>
      <section class="screen pause" data-screen="pause">
        <div class="pause-shell">
          <aside class="pause-menu">
            <div class="pause-brand">
              <small>Dig A Hole</small>
              <h1>Paused</h1>
            </div>
            <nav class="pause-nav">
              <button type="button" class="pause-btn resume">${Bp.play}<span>Resume</span><kbd>P</kbd></button>
              <button type="button" class="pause-btn to-title">${Bp.back}<span>Back to title</span></button>
              <button type="button" class="pause-btn" data-page="settings">${Bp.settings}<span>Settings</span></button>
              <button type="button" class="pause-btn" data-page="controls">${Bp.controls}<span>Controls</span></button>
            </nav>
            <p class="hint pause-hint" hidden></p>
          </aside>
          <section class="pause-pane">
            <div class="pane" data-pane="settings">
              <h2>Settings</h2>
              <div class="set-group">
                <h3>Sound</h3>
                ${Up(Vp.volume,`Master volume`,`How loud everything in the game is.`,`vol`,`<input class="vol" type="range" min="0" max="1" step="0.01" />`,.05)}
                <div class="setting row">
                  <span class="set-icon">${Vp.music}</span>
                  <span class="set-text"><span class="set-name">Music</span><small class="set-desc">Quiet background music. Sound effects stay on.</small></span>
                  <span class="set-control"><button type="button" class="switch music-toggle" role="switch"><i></i></button></span>
                </div>
                ${Up(Vp.music,`Music volume`,`How loud the music is, compared to the effects.`,`mvol`,`<input class="mvol" type="range" min="0" max="1" step="0.01" />`,.05,`music-vol-row`)}
              </div>
              <div class="set-group">
                <h3>Game</h3>
                <div class="setting row">
                  <span class="set-icon">${Vp.tips}</span>
                  <span class="set-text"><span class="set-name">Tips</span><small class="set-desc">Short hints that explain the game as you play.</small></span>
                  <span class="set-control"><button type="button" class="switch tips-toggle" role="switch"><i></i></button></span>
                </div>
              </div>
              <div class="set-group">
                <h3>Controls</h3>
                ${Up(Vp.mouse,`Mouse sensitivity`,`How fast the view turns when you move the mouse.`,`sens`,`<input class="sens" type="range" min="0.2" max="3" step="0.05" />`,.1)}
              </div>
              <div class="set-group">
                <h3>Graphics</h3>
                <div class="setting quality-row">
                  <span class="set-icon">${Vp.graphics}</span>
                  <span class="set-text"><span class="set-name">Graphics quality</span><small class="set-desc">Lower it if the game feels slow.</small></span>
                  <span class="set-control">
                    <span class="set-value"><button type="button" class="step q-step" data-dir="-1" aria-label="Lower">◀</button><output class="q-out"></output><button type="button" class="step q-step" data-dir="1" aria-label="Higher">▶</button></span>
                    <span class="segmented" role="radiogroup">
                      <button type="button" data-quality="low">Low</button>
                      <button type="button" data-quality="medium">Medium</button>
                      <button type="button" data-quality="high">High</button>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="pane" data-pane="controls">
              <h2>Controls</h2>
              ${Rp}
            </div>
          </section>
        </div>
      </section>
      <section class="screen credits" data-screen="credits">
        <div class="credits-roll"><div class="credits-inner">${zp}</div></div>
        <button type="button" class="title-btn credits-close">${Bp.back}<span class="tb-text"><span class="tb-name">Back</span></span></button>
      </section>
      <section class="screen ending" data-screen="ending">
        <div class="ending-card">
          <p class="ending-kicker">300 m · The bottom of the world</p>
          <h1>You made it.</h1>
          <p class="ending-text">No pick can break this floor. You dug one hole — through thirty kinds of rock, past everything that was buried along the way — all the way to the bottom of the world.</p>
          <div class="ending-reward"><span>Your reward</span><strong class="ending-coins"></strong></div>
          <div class="ending-stats"></div>
          <div class="sheet-actions">${Wp(`ending-credits`,Bp.credits,`See the credits`,`primary`)}</div>
        </div>
      </section>
`,e.appendChild(this.root),this.boot=document.getElementById(`boot`),this.startTips(),this.menuHint=this.q(`.menu-hint`),this.pauseHint=this.q(`.pause-hint`),this.bindTitle(),this.q(`.resume`).addEventListener(`click`,e=>{e.stopPropagation(),this.onPlay?.()}),this.q(`.to-title`).addEventListener(`click`,()=>{this.root.classList.contains(`from-title`)?this.show(`menu`):this.onToTitle?.()}),this.root.querySelectorAll(`[data-page]`).forEach(e=>e.addEventListener(`click`,()=>{this.page=e.dataset.page,this.syncPage()})),this.q(`.credits-close`).addEventListener(`click`,()=>this.closeCredits()),this.q(`.credits-inner`).addEventListener(`animationend`,()=>{window.clearTimeout(this.creditsTimer),this.creditsTimer=window.setTimeout(()=>{if(this.current!==`credits`)return;let e=this.creditsFromEnding;this.creditsFromEnding=!1,e?this.onToTitle?.():this.show(`menu`)},2500)});let n=this.q(`.sens`),r=this.q(`.sens-out`),i=this.q(`.vol`),a=this.q(`.vol-out`),o=this.q(`.mvol`),s=this.q(`.mvol-out`);n.value=String(t.sensitivity),i.value=String(t.volume),o.value=String(t.musicVolume);let c=()=>{r.textContent=`${Number(n.value).toFixed(2)}×`,a.textContent=`${Math.round(Number(i.value)*100)}%`,s.textContent=`${Math.round(Number(o.value)*100)}%`;for(let e of[n,i,o]){let t=(Number(e.value)-Number(e.min))/(Number(e.max)-Number(e.min))*100;e.style.setProperty(`--fill`,`${t}%`)}};c(),n.addEventListener(`input`,()=>{c(),this.update({sensitivity:Number(n.value)})}),i.addEventListener(`input`,()=>{c(),this.update({volume:Number(i.value)})}),o.addEventListener(`input`,()=>{c(),this.update({musicVolume:Number(o.value)})}),this.q(`.music-toggle`).addEventListener(`click`,()=>this.update({music:!this.settings.music})),this.q(`.tips-toggle`).addEventListener(`click`,()=>this.update({tips:!this.settings.tips})),this.root.querySelectorAll(`.step[data-for]`).forEach(e=>e.addEventListener(`click`,()=>{let t=this.q(`.${e.dataset.for}`),n=Math.min(Number(t.max),Math.max(Number(t.min),Number(t.value)+Number(e.dataset.step)*Number(e.dataset.dir)));t.value=String(+n.toFixed(3)),t.dispatchEvent(new Event(`input`))})),this.root.querySelectorAll(`.q-step`).forEach(e=>e.addEventListener(`click`,()=>{let t=Gp.indexOf(this.settings.quality)+Number(e.dataset.dir);t>=0&&t<Gp.length&&this.update({quality:Gp[t]})})),this.root.querySelectorAll(`[data-quality]`).forEach(e=>{e.addEventListener(`click`,()=>this.update({quality:e.dataset.quality}))}),this.syncControls(),this.syncPage()}act(e){switch(e){case`continue`:this.onPlay?.();break;case`new`:{this.newFromList=this.sheet===`load`,this.setSheet(`new`);let e=this.q(`.new-world-name`);e.value=this.nextWorldName,e.focus(),e.select();break}case`new-yes`:this.onNewGame?.(this.q(`.new-world-name`).value);break;case`load`:this.setSheet(`load`);break;case`settings`:this.openTitleSettings();break;case`credits`:this.showCredits(!1);break;case`back`:this.setSheet(this.sheet===`new`&&this.newFromList?`load`:null);break;case`ending-credits`:this.showCredits(!0)}}bindTitle(){this.root.querySelectorAll(`[data-act]`).forEach(e=>e.addEventListener(`click`,t=>{t.stopPropagation(),this.act(e.dataset.act)}));let e=e=>{e&&(e.classList.contains(`current`)?this.onPlay?.():this.onLoadSlot?.(e.dataset.slot))},t=this.q(`.world-list`);t.addEventListener(`click`,t=>{let n=t.target,r=n.closest(`[data-slot]`);if(n.closest(`[data-new]`))return this.act(`new`);r&&!n.closest(`.world-rename-input`)&&(n.closest(`[data-rename]`)?this.startRename(r):e(r))}),t.addEventListener(`keydown`,t=>{let n=t.target;if(n.classList.contains(`world-rename-input`)){t.code===`Enter`?n.blur():t.code===`Escape`&&(t.stopPropagation(),n.value=``,n.blur());return}(t.code===`Enter`||t.code===`Space`)&&(n.closest(`[data-new]`)?this.act(`new`):e(n.closest(`[data-slot]`)))}),this.q(`.new-world-name`).addEventListener(`keydown`,e=>{e.code===`Enter`&&this.onNewGame?.(this.q(`.new-world-name`).value)}),window.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.current===`menu`&&!this.sheet&&!(e.target instanceof HTMLButtonElement)?(e.preventDefault(),this.onPlay?.()):e.code===`Escape`&&(this.current===`menu`&&this.sheet?this.setSheet(null):this.current===`credits`?this.closeCredits():this.current===`pause`&&this.root.classList.contains(`from-title`)&&this.show(`menu`))})}setSlots(e,t,n){this.nextWorldName=n;let r=e.find(e=>e.id===t),i=!!r&&(r.maxDepth>.5||r.coins>0||r.pickaxe>1),a=this.q(`[data-act="continue"]`);a.querySelector(`.tb-name`).textContent=i?`Continue`:`Play`,a.querySelector(`.tb-sub`).textContent=r?`${r.name}${i?` · ${Kp(r.maxDepth)} m deep · ${Kp(r.coins)} coins`:` · a brand-new world`}`:``,this.q(`.title-foot`).innerHTML=`Press <kbd>Enter</kbd> to ${i?`continue`:`play`}`;let o=this.q(`[data-act="load"]`);o.hidden=e.length===0,o.querySelector(`.tb-sub`).textContent=`${e.length} ${e.length===1?`world`:`worlds`} · start a new one here`,this.q(`.world-list`).innerHTML=e.map(e=>{let n=e.id===t;return`<li class="world${n?` current`:``}" data-slot="${e.id}" tabindex="0">
          <span class="world-info">
            <span class="world-name"><b>${Yp(e.name)}</b>${n?` <em>playing now</em>`:``}${e.finished?` <em class="done">finished ✓</em>`:``}</span>
            <span class="world-meta">${Kp(e.maxDepth)} m deep · ${Kp(e.coins)} coins · pickaxe ${e.pickaxe} · ${e.finds} ${e.finds===1?`find`:`finds`}</span>
            <span class="world-when">Last played ${qp(e.updated)}</span>
          </span>
          <span class="world-actions">
            <button type="button" class="chip-btn world-play" tabindex="-1">${Bp.play}${n?`Continue`:`Play`}</button>
            <button type="button" class="world-rename" data-rename tabindex="-1" aria-label="Rename" title="Rename this world">${Bp.pencil}</button>
          </span>
        </li>`}).join(``)+`<li class="world new-world" data-new tabindex="0">
        <span class="new-plus">${Bp.plus}</span>
        <span class="world-info"><span class="world-name"><b>Create a new world</b></span><span class="world-meta">Starts fresh at the top. Your other worlds stay saved.</span></span>
      </li>`;let s=e.slice(0,4);this.q(`.safe-worlds`).innerHTML=s.map(e=>`<li>${Bp.lock}<span>${Yp(e.name)}</span><small>${Kp(e.maxDepth)} m</small></li>`).join(``)+(e.length>s.length?`<li class="more">and ${e.length-s.length} more</li>`:``)}startRename(e){let t=e.querySelector(`.world-name b`);if(!t)return;let n=document.createElement(`input`);n.className=`world-rename-input`,n.maxLength=28,n.value=t.textContent??``;let r=n.value;t.replaceWith(n),n.focus(),n.select(),n.addEventListener(`blur`,()=>{let t=n.value.trim(),i=document.createElement(`b`);i.textContent=t||r,n.replaceWith(i),t&&t!==r&&this.onRenameSlot?.(e.dataset.slot,t)})}setWorldName(e){this.q(`.pause-brand small`).textContent=`Dig A Hole · ${e}`}setSheet(e){this.sheet=e,this.q(`.title-card`).dataset.sheet=e??``,this.root.querySelectorAll(`.title-sheet`).forEach(t=>t.classList.toggle(`on`,t.dataset.sheet===e)),this.setMenuHint(``)}openTitleSettings(){this.page=`settings`,this.syncPage(),this.show(`pause`),this.root.classList.add(`from-title`),this.q(`.to-title span`).textContent=`Back`,this.q(`.pause-brand h1`).textContent=`Settings`}showCredits(e){this.creditsFromEnding=e;let t=this.q(`.credits-close`);t.classList.remove(`glow`),t.querySelector(`.tb-name`).textContent=e?`Keep digging`:`Back`;let n=this.q(`.credits-inner`);n.style.animation=`none`,n.offsetWidth,n.style.animation=``,this.show(`credits`)}closeCredits(){this.creditsFromEnding?(this.creditsFromEnding=!1,this.onEndingDone?.()):this.show(`menu`)}showEnding(e,t){this.q(`.ending-coins`).textContent=`+${Kp(e)} coins`,this.q(`.ending-stats`).innerHTML=t.map(([e,t])=>`<div><strong>${t}</strong><span>${e}</span></div>`).join(``),this.show(`ending`)}show(e){if(this.current=e,this.root.dataset.active=e,e!==`loading`&&this.boot){let e=this.boot;this.boot=null,window.clearInterval(this.tipTimer),e.classList.add(`out`),window.setTimeout(()=>e.remove(),700)}this.root.classList.remove(`from-title`),this.q(`.to-title span`).textContent=`Back to title`,this.q(`.pause-brand h1`).textContent=`Paused`,e===`menu`&&this.setSheet(null),this.root.querySelectorAll(`.screen`).forEach(t=>{t.classList.toggle(`active`,t.dataset.screen===e)})}get active(){return this.current}setLoading(e,t){let n=this.boot;if(!n)return;let r=Math.max(.03,Math.min(1,e)),i=`${(r*97).toFixed(1)}%`;n.querySelector(`.boot-tunnel`).style.width=i,n.querySelector(`.boot-head`).style.left=i,n.querySelector(`.boot-depth`).innerHTML=`${Math.round(r*300)} m<small>of 300</small>`,t&&(n.querySelector(`.boot-label`).textContent=t)}startTips(){let e=this.boot?.querySelector(`.boot-tip`);if(!e)return;let t=0;this.tipTimer=window.setInterval(()=>{e.style.opacity=`0`,window.setTimeout(()=>{t=(t+1)%Hp.length,e.innerHTML=Hp[t],e.style.opacity=`1`},400)},3600)}setQuality(e){this.settings={...this.settings,quality:e},this.syncControls()}setMenuHint(e){this.menuHint.textContent=e,this.menuHint.hidden=!e}setPauseHint(e){this.pauseHint.textContent=e,this.pauseHint.hidden=!e}update(e){this.settings={...this.settings,...e},this.syncControls(),this.onSettingsChange?.(this.settings)}syncPage(){this.root.querySelectorAll(`[data-pane]`).forEach(e=>e.classList.toggle(`on`,e.dataset.pane===this.page)),this.root.querySelectorAll(`[data-page]`).forEach(e=>e.classList.toggle(`on`,e.dataset.page===this.page))}syncControls(){this.root.querySelectorAll(`[data-quality]`).forEach(e=>{let t=e.dataset.quality===this.settings.quality;e.classList.toggle(`on`,t),e.setAttribute(`aria-checked`,String(t))}),this.q(`.q-out`).textContent=this.settings.quality[0].toUpperCase()+this.settings.quality.slice(1);let e=this.q(`.tips-toggle`);e.classList.toggle(`on`,this.settings.tips),e.setAttribute(`aria-checked`,String(this.settings.tips));let t=this.q(`.music-toggle`);t.classList.toggle(`on`,this.settings.music),t.setAttribute(`aria-checked`,String(this.settings.music)),this.q(`.music-vol-row`).classList.toggle(`off`,!this.settings.music)}q(e){return this.root.querySelector(e)}};function Yp(e){return e.replace(/[&<>"']/g,e=>`&#${e.charCodeAt(0)};`)}var Xp=e=>`${zd.speed[e].toFixed(1)} m/s`,Zp=e=>e.toLocaleString(`en-US`),Qp=e=>`<span class="price">${Af.coin}${Zp(e)}</span>`,$p=6,em=class{progress;actions;icons;hud;root;card;body;coins;coinsValue;tab=`tools`;selected=0;spinRaf=0;spinStart=0;shownCoins=0;coinRaf=0;coinHold=0;constructor(e,t,n,r,i){this.progress=t,this.actions=n,this.icons=r,this.hud=i,this.root=document.createElement(`div`),this.root.className=`panel-screen shop hidden`,this.root.innerHTML=`
      <div class="shop-card">
        <header>
          <div class="shop-title">
            <h2>E.'s Workshop</h2>
            <p>The fabricator turns what you dig up into tools.</p>
          </div>
          <div class="shop-coins">${Af.coin}<b>0</b></div>
          <button type="button" class="panel-close">Close <kbd>E</kbd></button>
        </header>
        <nav class="shop-tabs">
          <button type="button" data-tab="tools">${Af.pickaxe}Pickaxes</button>
          <button type="button" data-tab="gear">${Af.lantern}Gear</button>
          <button type="button" data-tab="sell">${Af.coin}Sell</button>
        </nav>
        <div class="shop-body"></div>
        <div class="buy-burst"></div>
      </div>`,e.appendChild(this.root),this.card=this.root.querySelector(`.shop-card`),this.body=this.root.querySelector(`.shop-body`),this.coins=this.root.querySelector(`.shop-coins`),this.coinsValue=this.coins.querySelector(`b`),this.root.querySelector(`.panel-close`).addEventListener(`click`,()=>this.actions.close()),this.root.querySelector(`.shop-tabs`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-tab]`);t&&(this.tab=t.dataset.tab,this.render())}),this.body.addEventListener(`click`,e=>this.onClick(e)),this.root.querySelector(`.buy-burst`).addEventListener(`click`,()=>this.card.classList.remove(`bought`)),t.onChange(()=>{this.visible&&this.render()})}get visible(){return!this.root.classList.contains(`hidden`)}show(){let e=this.progress.data;this.selected=this.nextTier()??e.pickaxe.equipped,this.shownCoins=e.coins,this.coinsValue.textContent=Zp(e.coins),this.card.classList.remove(`bought`),this.root.classList.remove(`hidden`),this.render();for(let t=Math.min(Tf.length,e.pickaxe.owned+1);t>=1;t--)this.icons.pickaxeTurntable(t);this.icons.pickaxeTurntable(this.selected)}hide(){this.root.classList.add(`hidden`),window.cancelAnimationFrame(this.spinRaf),this.spinRaf=0}nextTier(){let e=this.progress.data.pickaxe.owned+1;return e<=Tf.length?e:null}onClick(e){let t=e.target,n=t.closest(`[data-pick]`),r=t.closest(`[data-act]`);if(r){if(r.disabled)return;let e=r.dataset.act;if(this.coinHold=performance.now()+80,e===`buy-pick`){let e=Number(r.dataset.tier),t=Ld[e-1];this.actions.buyPickaxe(e)&&this.celebrate(this.icons.pickaxe(e,240),`Forged!`,Df(e).name,`It’s in your hand now.`,t)}else if(e===`use-pick`)this.actions.equipPickaxe(Number(r.dataset.tier));else if(e===`buy-lantern`)this.actions.buyLantern()&&this.celebrate(this.icons.lantern(240),`Bought!`,`Lantern`,`In your pack — right-click to set it down.`,150);else if(e===`jet-fuel`||e===`jet-speed`){let t=e===`jet-fuel`?`fuel`:`speed`,n=this.progress.data.jetpack[t],r=(t===`fuel`?zd.fuelPrice:zd.speedPrice)[n];if(this.actions.buyJetpack(t)){let e=this.progress.data.jetpack;this.celebrate(this.icons.jetpack(240,t===`fuel`?`tank`:`flame`),`Upgraded!`,t===`fuel`?`Bigger fuel tank`:`Stronger thruster`,t===`fuel`?`You can fly for ${zd.fuel[e.fuel]} seconds now.`:`You climb at ${Xp(e.speed)} now.`,r)}}else if(e===`sell`||e===`sell-all`){let t=r.closest(`.sell-row, .sell-all`),n=this.progress.data.coins;this.coinHold=performance.now()+800,this.shownCoins=n;let i=e===`sell`?this.actions.sell(r.dataset.m,1/0):this.actions.sellAll();i>0?(this.coinsValue.textContent=Zp(n),this.hud.flyCoins(t??r,i,this.coins),window.setTimeout(()=>this.rollCoins(!0),760)):this.coinHold=0}return}n&&(this.selected=Number(n.dataset.pick),this.render())}celebrate(e,t,n,r,i){let a=this.root.querySelector(`.buy-burst`);a.innerHTML=`
      <div class="burst-rays"></div>
      <div class="burst-item"><img src="${e}" alt=""></div>
      <div class="burst-text"><small>${t}</small><b>${n}</b><span>${r}</span></div>`,this.card.classList.remove(`bought`),this.card.offsetWidth,this.card.classList.add(`bought`),window.clearTimeout(Number(a.dataset.t??0)),a.dataset.t=String(window.setTimeout(()=>this.card.classList.remove(`bought`),1900)),this.hud.floatDelta(this.coins,-i),this.rollCoins(!1)}rollCoins(e){let t=this.progress.data.coins,n=this.shownCoins;if(n===t)return;e&&this.hud.floatDelta(this.coins,t-n),this.coins.classList.remove(`land`,`spend`),this.coins.offsetWidth,this.coins.classList.add(e?`land`:`spend`),window.cancelAnimationFrame(this.coinRaf);let r=performance.now(),i=e=>{let a=Math.min(1,(e-r)/650),o=Math.round(n+(t-n)*(1-(1-a)**3));this.shownCoins=o,this.coinsValue.textContent=Zp(o),a<1&&(this.coinRaf=window.requestAnimationFrame(i))};this.coinRaf=window.requestAnimationFrame(i)}startSpin(){if(window.cancelAnimationFrame(this.spinRaf),this.spinRaf=0,this.tab!==`tools`||!this.visible)return;let e=this.icons.pickaxeTurntable(this.selected),t=this.body.querySelector(`.spin-a`),n=this.body.querySelector(`.spin-b`);if(!t||!n)return;this.spinStart||=performance.now();let r=-1,i=-1,a=o=>{if(e.length<72){this.spinRaf=window.requestAnimationFrame(a);return}let s=(o-this.spinStart)/1e3/$p%1*e.length,c=Math.floor(s)%e.length,l=(c+1)%e.length;c!==r&&(t.src=e[c],r=c),l!==i&&(n.src=e[l],i=l),n.style.opacity=(s-Math.floor(s)).toFixed(3),this.spinRaf=window.requestAnimationFrame(a)};this.spinRaf=window.requestAnimationFrame(a)}render(){let e=this.progress.data;performance.now()>this.coinHold&&!this.card.classList.contains(`bought`)&&(window.cancelAnimationFrame(this.coinRaf),this.shownCoins=e.coins,this.coinsValue.textContent=Zp(e.coins));for(let e of this.root.querySelectorAll(`.shop-tabs button`))e.classList.toggle(`on`,e.dataset.tab===this.tab);this.tab===`tools`?this.renderTools():this.tab===`gear`?this.renderGear():this.renderSell(),this.startSpin()}renderTools(){let e=this.progress.data,t=e.pickaxe.owned,n=this.nextTier(),r=Tf.filter(e=>e.tier<=t||e.tier===n);r.some(e=>e.tier===this.selected)||(this.selected=n??e.pickaxe.equipped);let i=Df(this.selected),a=Df(e.pickaxe.equipped),o=Tf[Tf.length-1].radius,s=r.slice().reverse().map(n=>{let r=n.tier<=t,i=r?n.tier===e.pickaxe.equipped?`<em class="state on">In hand</em>`:`<em class="state">Owned</em>`:`<span class="next-tag">Next</span>${Qp(Ld[n.tier-1])}`;return`<button type="button" class="pick-row${this.selected===n.tier?` sel`:``}${r?``:` next`}" data-pick="${n.tier}">
            <img src="${this.icons.pickaxe(n.tier,96)}" alt="">
            <span class="pick-name">${n.name}</span>${i}</button>`}).join(``),c=e=>Math.round(e/o*100),l=Math.round((i.radius/a.radius-1)*100),u=`
      <div class="dig-stat">
        <div class="dig-label"><span>Dig size</span>${i.tier===a.tier?`<span class="dig-chip same">The pick in your hand</span>`:l>0?`<span class="dig-chip up">▲ ${l}% bigger holes than yours</span>`:`<span class="dig-chip down">▼ ${-l}% smaller holes than yours</span>`}</div>
        <div class="dig-meter">
          <span class="dig-fill" style="width:${c(i.radius)}%"></span>
          ${i.tier===a.tier?``:`<span class="dig-yours" style="left:${c(a.radius)}%"><i>yours</i></span>`}
        </div>
      </div>`,d=``;if(i.tier<=t)d=i.tier===e.pickaxe.equipped?`<p class="preview-note">Deeper ground is harder: every pick digs a little less on each new level.</p>`:`<button type="button" class="primary" data-act="use-pick" data-tier="${i.tier}">Use this pick</button>`;else{let t=Ld[i.tier-1],n=t-e.coins;d=`<button type="button" class="primary big" data-act="buy-pick" data-tier="${i.tier}" ${n>0?`disabled`:``}>Forge it · ${Qp(t)}</button>${n>0?`<p class="preview-note">You need ${Zp(n)} more coins.</p>`:``}`}let f=n===null?`<p class="list-note">That’s the finest pick the fabricator can make.</p>`:``,p=this.icons.pickaxeTurntable(i.tier);this.body.innerHTML=`
      <div class="tools">
        <div class="pick-list">${s}${f}</div>
        <div class="preview">
          <div class="preview-stage">
            <span class="stage-glow"></span>
            <span class="stage-shadow"></span>
            <img class="spin-a" src="${p[0]}" alt="">
            <img class="spin-b" src="${p[1]??p[0]}" alt="" style="opacity:0">
          </div>
          <h3>${i.name}</h3>
          ${u}
          ${d}
        </div>
      </div>`}renderGear(){let e=this.progress.data,t=e.jetpack.fuel,n=e.jetpack.speed,r=t<zd.fuelPrice.length?zd.fuelPrice[t]:null,i=n<zd.speedPrice.length?zd.speedPrice[n]:null,a=this.progress.canTakeLantern(),o=(e,t)=>`<span class="gear-pips">${Array.from({length:t},(t,n)=>`<i class="${n<=e?`on`:``}"></i>`).join(``)}</span>`,s=(e,t,n,r,i,a=``)=>`
      <div class="gear-card"><div class="gear-img"><img src="${e}" alt=""></div><div class="gear-text"><b>${t}</b>${a}<p>${n}</p><small>${r}</small></div>${i}</div>`,c=(t,n,r=!1)=>n===null?`<em class="state on">Fully upgraded</em>`:`<button type="button" class="primary" data-act="${t}" ${e.coins<n||r?`disabled`:``}>${t===`buy-lantern`?`Buy`:`Upgrade`} · ${Qp(n)}</button>`;this.body.innerHTML=`
      <div class="gear">
        ${s(this.icons.lantern(160),`Lantern`,`Set it on the floor, a wall or a ceiling to light up your tunnel. Hold E on it to take it back.`,`You carry ${e.lanterns}${e.placedLanterns.length?` · ${e.placedLanterns.length} placed`:``}${a?``:` · your pack is full`}`,c(`buy-lantern`,150,!a))}
        ${s(this.icons.jetpack(160,`tank`),`Bigger fuel tank`,`Fly for longer — to climb out of deeper holes. Refills while you stand on the ground.`,`Flight time: ${zd.fuel[t]} s${r===null?``:` → ${zd.fuel[t+1]} s`}`,c(`jet-fuel`,r),o(t,zd.fuel.length))}
        ${s(this.icons.jetpack(160,`flame`),`Stronger thruster`,`Climb faster while the jetpack fires.`,`Climb speed: ${Xp(n)}${i===null?``:` → ${Xp(n+1)}`}`,c(`jet-speed`,i),o(n,zd.speed.length))}
      </div>`}renderSell(){let e=this.progress.data,t=_d.filter(t=>e.materials[t]>0),n=t.reduce((t,n)=>t+e.materials[n]*Id[n],0);this.body.innerHTML=t.length?`<div class="sell">
          ${t.map(t=>`<div class="sell-row">${kf(t)}<b>${Cd[t]}</b><span class="qty">${Zp(e.materials[t])} × ${Qp(Id[t])}</span>
              <button type="button" data-act="sell" data-m="${t}">Sell · ${Qp(e.materials[t]*Id[t])}</button></div>`).join(``)}
          <div class="sell-all"><button type="button" class="primary" data-act="sell-all">Sell everything · ${Qp(n)}</button></div>
        </div>`:`<p class="empty-note">Nothing to sell yet — dig, and bring back what you find.</p>`}},tm=1,nm=20,rm={x:.4,z:-6.3},im={iron:{rock:[.72,.36,.14],metal:[.36,.38,.43],metalShare:.5,roughness:.45,metalness:.55},copper:{rock:[.34,.55,.46],metal:[.78,.45,.26],metalShare:.65,roughness:.42,metalness:.55},silver:{rock:[.42,.41,.4],metal:[.86,.87,.9],metalShare:.7,roughness:.3,metalness:.6},gold:{rock:[.5,.48,.44],metal:[.95,.74,.28],metalShare:.55,roughness:.3,metalness:.65}};function am(e,t){let n=new wa(1,1);n.deleteAttribute(`normal`),n.deleteAttribute(`uv`),n=_u(n);let r=n.getAttribute(`position`),i=new Float32Array(r.count*3);for(let n=0;n<r.count;n++){let a=r.getX(n),o=r.getY(n),s=r.getZ(n),c=.72+bu(Math.round(a*100),Math.round(o*100),Math.round(s*100),5+t)*.5;r.setXYZ(n,a*c,o*c*.8,s*c);let l=bu(n,7,3,11+t)<e.metalShare?e.metal:e.rock,u=.78+bu(n,2,9,4+t)*.3;i[n*3]=Xu(l[0])*u,i[n*3+1]=Xu(l[1])*u,i[n*3+2]=Xu(l[2])*u}n.setAttribute(`color`,new q(i,3));let a=n.toNonIndexed();return a.computeVertexNormals(),a}var om=e=>[0,2,4].map(t=>parseInt(e.slice(1+t,3+t),16)/255);function sm(e){let t=im[e];if(t)return t;let n=Td[e];return{rock:om(n.rock),metal:om(n.color),metalShare:.55,roughness:.35,metalness:.6}}function cm(e=`#4f8fe0`,t=`#333338`,n=33){let r=[],i=new wa(.55,0);i.scale(1,.6,1),r.push(i);let a=vu(n),o=om(e),s=om(t).map(e=>e*.8);for(let e=0;e<4;e++){let e=new Ea(.35,0);e.scale(.55,1.4+a()*.6,.55),e.rotateZ((a()-.5)*.9),e.rotateX((a()-.5)*.9),e.translate((a()-.5)*.5,.35+a()*.2,(a()-.5)*.5),r.push(e)}for(let e of r)e.deleteAttribute(`uv`),e.deleteAttribute(`normal`);let c=hu(r),l=c.getAttribute(`position`),u=new Float32Array(l.count*3),d=r[0].getAttribute(`position`).count;for(let e=0;e<l.count;e++){let t=e<d?s:o,n=.85+bu(e,1,2,9)*.3;u[e*3]=Xu(t[0])*n,u[e*3+1]=Xu(t[1])*n,u[e*3+2]=Xu(t[2])*n}return c.setAttribute(`color`,new q(u,3)),c.computeVertexNormals(),c}function lm(e,t,n=0){let r=e.getAttribute(`position`),i=[0,2,4].map(e=>Xu(parseInt(t.slice(1+e,3+e),16)/255)),a=new Float32Array(r.count*3);for(let e=0;e<r.count;e++){let t=1-n+bu(Math.round(r.getX(e)*200),Math.round(r.getY(e)*200),Math.round(r.getZ(e)*200),3)*n*2;a[e*3]=i[0]*t,a[e*3+1]=i[1]*t,a[e*3+2]=i[2]*t}return e.setAttribute(`color`,new q(a,3)),e}function um(e,t,n){let r={w:.62,d:.4,h:.3,lidH:.14},i=new G,a=new J(lm(new oi(r.w,r.h,r.d),`#6b4a2e`,.12),e);a.position.y=r.h/2,i.add(a);let o=new G;o.position.set(0,r.h,-r.d/2);let s=new Y(r.d/2,r.d/2,r.w,14,1,!1,0,Math.PI);s.rotateZ(Math.PI/2),s.scale(1,r.lidH/(r.d/2),1);let c=new J(lm(s,`#704d30`,.12),e);c.position.z=r.d/2,o.add(c),i.add(o);for(let e=0;e<3;e++){let n=(e/2-.5)*r.w*.78,a=new J(new oi(.03,r.h+.008,r.d+.01),t);a.position.set(n,r.h/2,0),i.add(a);let s=new J(new oi(.03,.012,r.d+.012),t);s.position.set(n,r.lidH+.004,r.d/2),o.add(s)}let l=new J(new oi(r.w*.14,r.h*.4,.012),n);return l.position.set(0,r.h*.72,r.d/2+.006),i.add(l),i.traverse(e=>{e.castShadow=!0,e.receiveShadow=!0}),{group:i,lid:o}}function dm(e,t,n){return e.onBeforeCompile=e=>{e.uniforms.uGlintTime=t,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vGlint;
uniform float uGlintTime;`).replace(`#include <project_vertex>`,`#include <project_vertex>
{
  vec3 ip = vec3(0.0);
#ifdef USE_INSTANCING
  ip = instanceMatrix[3].xyz;
#endif
  float seed = fract(sin(dot(ip, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
  // A glint sweeps across the piece once every ~3.5 s.
  float ph = fract(uGlintTime / 3.5 + seed) * 3.5;
  float sweep = dot(normalize(objectNormal), normalize(vec3(0.6, 0.7, 0.3)));
  vGlint = exp(-pow((ph - 0.6 - sweep * 0.25) * 9.0, 2.0));
}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vGlint;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\ntotalEmissiveRadiance += (diffuseColor.rgb * 0.6 + vec3(0.35)) * vGlint * ${n.toFixed(2)};`)},e.customProgramCacheKey=()=>`ore-glint-${n}`,e}var fm=class{volume;group=new G;objects=[];revealedQueue=[];grid=new Map;exposed=new Set;ores=new Map;oreDirty=new Set;wood=Hd(new Ua({vertexColors:!0}));iron;brass;dummy=new on;tmp=new U;glintTime={value:0};constructor(e,t,n){this.volume=e,this.iron=Hd(new Ha({color:`#3d3935`,roughness:.55,metalness:.75,envMap:t,envMapIntensity:.5})),this.brass=Hd(new Ha({color:`#8a6a34`,roughness:.4,metalness:.9,envMap:t,envMapIntensity:.6})),this.generate(n);for(let e of gd){let n=this.objects.filter(t=>t.ore===e).length,r=Td[e],i=r.style===`crystal`,a=i?cm(r.color,r.rock,33+r.rank):am(sm(e),r.rank*13),o=i?{roughness:.12,metalness:.15}:sm(e),s=new Ur(a,Hd(dm(new Ha({vertexColors:!0,roughness:o.roughness,metalness:o.metalness,envMap:t,envMapIntensity:i?1.2:.55}),this.glintTime,i?1.4:1)),Math.max(1,n));s.count=0,s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1,s.name=`ore-${e}`,this.ores.set(e,s),this.group.add(s)}this.group.name=`buried`}add(e){let t={...e,revealed:!1,collected:!1,openT:-1};this.objects.push(t);let n=`${Math.floor(t.pos.x/tm)},${Math.floor(t.pos.y/tm)},${Math.floor(t.pos.z/tm)}`,r=this.grid.get(n);r||this.grid.set(n,r=[]),r.push(t)}generate(e){let t=this.volume,n=.35,r=t.origin.x+n,i=t.max.x-n,a=t.origin.z+n,o=t.max.z-n,s=(r+i)/2,c=(a+o)/2;for(let t of xd){let n=vu(e+t.index*1e3),l=t.bottom-t.top,u=Math.round((i-r)*(o-a)*l*t.orePerM3);for(let e=0;e<u;e++){let s=-(t.top+.15+n()*(l-.3));this.add({id:`o${t.index}-${e}`,kind:`ore`,ore:t.ore,layer:t.index,pos:new U(r+n()*(i-r),s,a+n()*(o-a)),radius:(Td[t.ore].style===`crystal`?.055:.03)+n()*.025,yaw:n()*Math.PI*2,coins:0})}let d=()=>(n()+n()+n()-1.5)/1.5;for(let e=0;e<t.chests;e++){let u=(e+.3+n()*.4)/t.chests,f=Math.min(t.bottom-.5,t.top+.5+u*(l-1)),p=Math.min(i-.4,Math.max(r+.4,s+d()*(i-r)*.45)),m=Math.min(o-.4,Math.max(a+.4,c+d()*(o-a)*.45));this.add({id:`c${t.index}-${e}`,kind:`chest`,layer:t.index,pos:new U(p,-f,m),radius:.34,yaw:n()*Math.PI*2,coins:Vd(t.index,(f-t.top)/l)})}}Kf.forEach((e,t)=>{let n=t*2.1,r=.9+.5*Math.sin(t*1.7);this.add({id:e.id,kind:`story`,story:e,layer:e.layer,pos:new U(rm.x+Math.cos(n)*r,-e.depth,rm.z+Math.sin(n)*r),radius:.16,yaw:n*1.3,coins:0})});let l=vu(e+7);for(let e=0;e<nm;e++)this.add({id:`s${e}`,kind:`ore`,ore:`iron`,layer:1,pos:new U(r+.3+l()*(i-r-.6),-.012,a+.3+l()*(o-a-.6)),radius:.05+l()*.02,yaw:l()*Math.PI*2,coins:0})}restoreState(e){for(let t of this.objects)e.has(t.id)&&(t.collected=!0);for(let e of this.objects)e.collected||this.checkReveal(e);this.revealedQueue.length=0;for(let e of gd)this.oreDirty.add(e)}onCarve(e,t){let n=t+.5;for(let r=Math.floor((e.x-n)/tm);r<=Math.floor((e.x+n)/tm);r++)for(let i=Math.floor((e.y-n)/tm);i<=Math.floor((e.y+n)/tm);i++)for(let a=Math.floor((e.z-n)/tm);a<=Math.floor((e.z+n)/tm);a++){let n=this.grid.get(`${r},${i},${a}`);if(n)for(let r of n)r.collected||r.revealed||r.pos.distanceTo(e)>t+r.radius+.1||this.checkReveal(r)}}checkReveal(e){let t=this.volume,n=e.pos,r=e.radius*1.15,i=[[0,0,0],[r,0,0],[-r,0,0],[0,r,0],[0,-r,0],[0,0,r],[0,0,-r]],a=0;for(let[e,r,o]of i)t.sample(n.x+e,n.y+r,n.z+o)>0&&a++;a===0||e.revealed||(e.revealed=!0,this.exposed.add(e),this.revealedQueue.push(e),e.kind===`ore`&&e.ore?this.oreDirty.add(e.ore):this.buildMesh(e))}buildMesh(e){if(e.kind===`chest`){let{group:t,lid:n}=um(this.wood,this.iron,this.brass);t.position.copy(e.pos),t.position.y-=.2,t.rotation.set(.12*Math.sin(e.yaw*3),e.yaw,.1*Math.cos(e.yaw*5)),e.mesh=t,e.lid=n,this.group.add(t)}else if(e.kind===`story`&&e.story){let t=Qd(e.story.prop);t.position.copy(e.pos),t.position.y-=.04,t.rotation.set(.15*Math.sin(e.yaw*2),e.yaw,.12*Math.cos(e.yaw*3)),e.mesh=t,this.group.add(t)}}raycast(e,t,n){let r=null;for(let i of this.exposed){let a=this.tmp.copy(i.pos).sub(e),o=a.dot(t);if(o<0||o-i.radius>n)continue;let s=a.lengthSq()-o*o,c=i.radius*(i.kind===`ore`?1.6:1);if(s>c*c)continue;let l=o-Math.sqrt(c*c-s);l>n||(!r||l<r.distance)&&(r={object:i,distance:Math.max(0,l)})}return r}collect(e){e.collected=!0,e.openT=0,this.exposed.delete(e),e.kind===`ore`&&e.ore&&this.oreDirty.add(e.ore)}update(e){this.glintTime.value+=e;for(let t of this.objects)if(!(t.openT<0||!t.mesh)){if(t.openT+=e,t.kind===`story`){let e=Math.min(1,t.openT/.3);t.mesh.position.y=t.pos.y-.04+e*.12,t.mesh.scale.setScalar(1-e*.999),e>=1&&this.removeMesh(t);continue}if(t.lid&&(t.lid.rotation.x=-Math.min(1,t.openT/.45)*1.9),t.openT>1.6){let e=Math.min(1,(t.openT-1.6)/.6);t.mesh.scale.setScalar(1-e*.999),e>=1&&this.removeMesh(t)}}for(let e of this.oreDirty)this.writeOre(e);this.oreDirty.clear()}removeMesh(e){e.mesh&&=(this.group.remove(e.mesh),void 0)}writeOre(e){let t=this.ores.get(e);if(!t)return;let n=0,r=this.dummy;for(let i of this.exposed)i.ore===e&&(r.position.copy(i.pos),r.rotation.set(i.yaw*.7,i.yaw,i.yaw*1.3),r.scale.setScalar(i.radius),r.updateMatrix(),t.setMatrixAt(n++,r.matrix));t.count=n,t.instanceMatrix.needsUpdate=!0}},pm=class e{bounds;nx;ny;nz;cell;origin;max;field;floorJ;floorY;static Q=1.5/127;static MARGIN=2;static CLAMP=1.5;constructor(t){this.bounds=t;let n=t.cell;this.cell=n,this.nx=Math.round((t.maxX-t.minX)/n)+1,this.nz=Math.round((t.maxZ-t.minZ)/n)+1,this.ny=Math.round((t.depth+t.headroom)/n)+1,this.origin=new U(t.minX,-t.depth,t.minZ),this.max=new U(t.minX+(this.nx-1)*n,-t.depth+(this.ny-1)*n,t.minZ+(this.nz-1)*n),this.field=new Int8Array(this.nx*this.ny*this.nz),this.floorJ=e.MARGIN+Math.round((t.floor??0)/n),this.floorY=this.origin.y+this.floorJ*n,this.reset()}reset(){let{nx:t,ny:n,nz:r,cell:i,field:a}=this,o=this.origin.y;for(let s=0;s<n;s++){let c=e.quantize(o+s*i);for(let e=0;e<r;e++){let r=(e*n+s)*t;a.fill(c,r,r+t)}}}index(e,t,n){return(n*this.ny+t)*this.nx+e}at(t,n,r){return this.field[(r*this.ny+n)*this.nx+t]*e.Q}set(t,n,r,i){this.field[(r*this.ny+n)*this.nx+t]=e.quantize(i)}static quantize(t){let n=Math.round(Math.max(-e.CLAMP,Math.min(e.CLAMP,t))/e.Q);return t>=0?Math.max(0,n):Math.min(-1,n)}contains(e,t){return e>=this.origin.x&&e<=this.max.x&&t>=this.origin.z&&t<=this.max.z}sample(t,n,r){let i=this.cell,a=(t-this.origin.x)/i,o=(n-this.origin.y)/i,s=(r-this.origin.z)/i;if(o>=this.ny-1)return 1;if(o<0)return-1;a=Math.min(Math.max(a,0),this.nx-1.0001),s=Math.min(Math.max(s,0),this.nz-1.0001);let c=Math.floor(a),l=Math.floor(o),u=Math.floor(s),d=a-c,f=o-l,p=s-u,m=this.nx,h=m,g=m*this.ny,_=this.field,v=(u*this.ny+l)*m+c,y=_[v],b=_[v+1],x=_[v+h],S=_[v+h+1],C=_[v+g],w=_[v+g+1],T=_[v+g+h],E=_[v+g+h+1],D=y+(b-y)*d,ee=x+(S-x)*d,O=C+(w-C)*d,k=T+(E-T)*d,A=D+(ee-D)*f;return(A+(O+(k-O)*f-A)*p)*e.Q}gradient(e,t,n,r){let i=this.cell*.5;r.set(this.sample(e+i,t,n)-this.sample(e-i,t,n),this.sample(e,t+i,n)-this.sample(e,t-i,n),this.sample(e,t,n+i)-this.sample(e,t,n-i));let a=r.length();return a>1e-6?r.multiplyScalar(1/a):r.set(0,1,0),r}surfaceBelow(e,t,n){let r=Math.min(n,this.max.y-1e-4),i=this.sample(e,r,t);if(i<0)return-1/0;let a=this.cell;for(;r>this.origin.y;){let n=r-a,o=this.sample(e,n,t);if(o<0)return r-i/(i-o)*a;r=n,i=o}return this.origin.y}surfaceAbove(e,t,n){let r=n,i=this.sample(e,r,t);if(i>=0)return n;let a=this.cell,o=this.max.y-1e-4;for(;r<o;){let n=Math.min(o,r+a),s=this.sample(e,n,t);if(s>=0)return r+i/(i-s)*(n-r);r=n,i=s}return o}carve(t,n,r,i,a){let o=this.cell,s=i*1.45,c=(e,t)=>Math.floor((e-s-t)/o),l=(e,t)=>Math.ceil((e+s-t)/o),u=e.MARGIN,d=Math.max(u,c(t.x,this.origin.x)),f=Math.min(this.nx-1-u,l(t.x,this.origin.x)),p=Math.max(this.floorJ,c(t.y,this.origin.y)),m=Math.min(this.ny-1,l(t.y,this.origin.y)),h=Math.max(u,c(t.z,this.origin.z)),g=Math.min(this.nz-1-u,l(t.z,this.origin.z)),_=n,v=new U().copy(r).addScaledVector(_,-r.dot(_));v.lengthSq()<1e-4&&v.set(Math.abs(_.y)<.9?0:1,+(Math.abs(_.y)<.9),0).cross(_),v.normalize();let y=new U().crossVectors(_,v),b=0,x=o*o*o,S=this.field,C=1/i;for(let n=h;n<=g;n++){let r=this.origin.z+n*o-t.z;for(let c=p;c<=m;c++){let l=this.origin.y+c*o-t.y,u=(n*this.ny+c)*this.nx+d;for(let n=d;n<=f;n++,u++){let c=this.origin.x+n*o-t.x,d=(c*_.x+l*_.y+r*_.z)/.72,f=(c*v.x+l*v.y+r*v.z)/1.22,p=c*y.x+l*y.y+r*y.z,m=Math.sqrt(d*d+f*f+p*p);if(m>s)continue;let h=i*(.86+.28*Tu(c*C*1.3+a,l*C*1.3-a*.7,r*C*1.3+a*1.3,91)),g=e.quantize(h-m),w=S[u];g>w&&(w<0&&g>=0&&(b+=x),S[u]=g)}}}return{range:{i0:d,j0:p,k0:h,i1:f,j1:m,k1:g},removed:b}}cleanup(t,n=20){let r=e.MARGIN,{nx:i,ny:a,nz:o,field:s}=this,c=i,l=i*a,u={range:null,pieces:[],removed:0},d=this.cell*this.cell*this.cell,f=1/0,p=1/0,m=1/0,h=-1,g=-1,_=-1,v=e=>{let t=e%i,n=Math.floor(e/i)%a,r=Math.floor(e/l);s[e]=mm,u.removed+=d,t<f&&(f=t),t>h&&(h=t),n<p&&(p=n),n>g&&(g=n),r<m&&(m=r),r>_&&(_=r)},y=Math.max(r,t.i0-3),b=Math.min(i-1-r,t.i1+3),x=Math.max(this.floorJ,t.j0-3),S=Math.min(a-3,t.j1+3),C=Math.max(r,t.k0-3),w=Math.min(o-1-r,t.k1+3);if(b<y||S<x||w<C)return u;let T=(e,t)=>{let n=s[e-t]<0,r=s[e+t]<0;return n&&r?!1:!n&&!r?!0:n?s[e-2*t]>=0:s[e+2*t]>=0},E=[];for(let e=0;e<2;e++){E.length=0;for(let e=C;e<=w;e++)for(let t=x;t<=S;t++){let n=(e*a+t)*i+y;for(let e=y;e<=b;e++,n++)s[n]>=0||(T(n,1)||T(n,c)||T(n,l))&&E.push(n)}if(E.length===0)break;for(let e of E)v(e)}let D=Math.max(0,t.i0-n),ee=Math.min(i-1,t.i1+n),O=Math.max(0,t.j0-n),k=Math.min(a-1,t.j1+n),A=Math.max(0,t.k0-n),j=Math.min(o-1,t.k1+n),te=ee-D+1,M=k-O+1,ne=new Uint8Array(te*M*(j-A+1)),N=e=>{let t=e%i,n=Math.floor(e/i)%a;return((Math.floor(e/l)-A)*M+(n-O))*te+(t-D)},re=e=>{let t=e%i,n=Math.floor(e/i)%a,s=Math.floor(e/l);return t<=D||t>=ee||n<=O||n>=k||s<=A||s>=j||t<r||n<this.floorJ||s<r||t>i-1-r||s>o-1-r},P=[],ie=[],ae=[1,-1,c,-c,l,-l];for(let e=C;e<=w;e++)for(let t=x;t<=S;t++){let n=(e*a+t)*i+y;for(let e=y;e<=b;e++,n++){if(s[n]>=0||ne[N(n)]!==0||s[n+1]<0&&s[n-1]<0&&s[n+c]<0&&s[n-c]<0&&s[n+l]<0&&s[n-l]<0)continue;P.length=0,ie.length=0,P.push(n),ne[N(n)]=2;let e=!1;for(;P.length&&!e;){let t=P.pop();if(ie.push(t),re(t)){e=!0;break}for(let n of ae){let r=t+n;if(s[r]>=0)continue;let i=N(r);if(ne[i]===1){e=!0;break}ne[i]===0&&(ne[i]=2,P.push(r))}}if(e){for(let e of ie)ne[N(e)]=1;for(let e of P)ne[N(e)]=1}else{u.pieces.push(this.pieceOf(ie));for(let e of ie)v(e)}}}return h>=0&&(u.range={i0:f,j0:p,k0:m,i1:h,j1:g,k1:_}),u}pieceOf(e){let{nx:t,ny:n}=this,r=0,i=0,a=0;for(let o of e)r+=o%t,i+=Math.floor(o/t)%n,a+=Math.floor(o/(t*n));let o=e.length,s=this.cell;return{x:this.origin.x+r/o*s,y:this.origin.y+i/o*s,z:this.origin.z+a/o*s,volume:o*s*s*s}}},mm=2;function hm(e,t){return`#${new K(e).multiplyScalar(t).getHexString()}`}function gm(){let e={};for(let t of xd.slice(5)){let{tint:n,accent:r}=t.look;e[t.material]={id:t.material,chunkTints:[hm(n,1.05),hm(n,.95),hm(n,.85),hm(r,1.1)],crumbColors:[hm(n,.7),hm(n,.8),hm(r,.9),hm(n,.6),hm(r,1.2)],dustColor:hm(n,.9),hardness:t.hardness}}return e}var _m={...gm(),dirt:{id:`dirt`,chunkTints:[`#ffffff`,`#ebe3db`,`#d6ccc1`,`#c4b8ab`],crumbColors:[`#4a3322`,`#5b3f2a`,`#3a281a`,`#6b4d34`,`#7a5d42`],dustColor:`#9c8266`,hardness:0},clay:{id:`clay`,chunkTints:[`#b8b3ac`,`#aca79f`,`#a09a92`,`#948e86`],crumbColors:[`#7d7870`,`#8a857d`,`#6f6a63`,`#99948c`],dustColor:`#aaa59e`,hardness:.25},sandstone:{id:`sandstone`,chunkTints:[`#f4c07a`,`#e8ad62`,`#d99a50`,`#c88744`],crumbColors:[`#c98a45`,`#d99d56`,`#b3743a`,`#e6b06a`],dustColor:`#e0b27a`,hardness:.5},limestone:{id:`limestone`,chunkTints:[`#e2e0d6`,`#d6d4ca`,`#cbc9bf`,`#bebcb2`],crumbColors:[`#b9b7ad`,`#c8c6bc`,`#a8a69c`,`#d6d4ca`],dustColor:`#d5d3cb`,hardness:.75},granite:{id:`granite`,chunkTints:[`#9a8a8e`,`#8c7c80`,`#7e6e72`,`#a8989c`],crumbColors:[`#4a4244`,`#6a5e62`,`#2e2a2b`,`#8a7c80`,`#c8bcbe`],dustColor:`#9a8c90`,hardness:1}};function vm(e=256){let t=new Uint8Array(e*e*4),n=new Float32Array(2);for(let r=0;r<e;r++)for(let i=0;i<e;i++){let a=i/e,o=r/e,s=wu(a*4,o*4,4,4,71),c=Cu(a*96,o*96,96,72)*.7+Cu(a*192,o*192,192,73)*.3;Du(a*7,o*7,7,74,n);let l=1-Math.min(1,(n[1]-n[0])/.07),u=a*18,d=o*18,f=Math.floor(u),p=Math.floor(d),m=+(yu(f,p,76)>.74),h=f+.32+yu(f,p,77)*.36,g=p+.32+yu(f,p,78)*.36,_=.14+yu(f,p,79)*.14,v=m*Math.max(0,1-Math.hypot((u-h)*1.2,d-g)/_),y=(r*e+i)*4;t[y]=Math.round(s*255),t[y+1]=Math.round(c*255),t[y+2]=Math.round(Math.max(0,l)*255),t[y+3]=Math.round(Math.min(1,v*1.6)*255)}let r=ad(t,e,{srgb:!1});return r.minFilter=c,r.magFilter=o,r.generateMipmaps=!0,r.needsUpdate=!0,r}var ym=[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1],[1,0,1],[0,1,1],[1,1,1]],bm=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],xm=new U,Sm=new U;function Cm(e,t,n,r){let i=e.nx-1,a=e.ny-1,o=e.nz-1,s=Math.max(0,t[0]-1),c=Math.max(0,t[1]-1),l=Math.max(0,t[2]-1),u=Math.min(i,n[0]),d=Math.min(a,n[1]),f=Math.min(o,n[2]),p=u-s,m=d-c,h=f-l;if(p<=0||m<=0||h<=0)return null;{let t=e.field,n=t[(l*e.ny+c)*e.nx+s]<0,r=!1;for(let i=l;i<=f&&!r;i++)for(let a=c;a<=d&&!r;a++){let o=(i*e.ny+a)*e.nx+s;for(let e=s;e<=u;e++,o++)if(t[o]<0!==n){r=!0;break}}if(!r)return null}let g=new Int32Array(p*m*h).fill(-1),_=[],v=[],y=[],b=[],x=[],S=e.cell,C=e.origin,w=new Float32Array(8),T=e.field,E=e.nx,D=e.nx*e.ny,ee=[0,1,E,E+1,D,D+1,D+E,D+E+1];for(let t=l;t<f;t++)for(let n=c;n<d;n++){let a=(t*e.ny+n)*e.nx+s;for(let d=s;d<u;d++,a++){let u=T[a]<0;if(T[a+1]<0===u&&T[a+E]<0===u&&T[a+E+1]<0===u&&T[a+D]<0===u&&T[a+D+1]<0===u&&T[a+D+E]<0===u&&T[a+D+E+1]<0===u)continue;for(let e=0;e<8;e++)w[e]=T[a+ee[e]];let f=0,h=0,x=0,O=0;for(let[e,t]of bm){let n=w[e],r=w[t];if(n<0==r<0)continue;let i=n/(n-r),a=ym[e],o=ym[t];f+=a[0]+(o[0]-a[0])*i,h+=a[1]+(o[1]-a[1])*i,x+=a[2]+(o[2]-a[2])*i,O++}let k=C.x+(d+f/O)*S,A=C.y+(n+h/O)*S,j=C.z+(t+x/O)*S;d===0?k=C.x:d===i-1&&(k=e.max.x),t===0?j=C.z:t===o-1&&(j=e.max.z),e.gradient(k,A,j,xm),Sm.set(k,A,j).addScaledVector(xm,.26);let te=e.sample(Sm.x,Sm.y,Sm.z),M=.62+.38*Math.min(1,Math.max(0,(te-.03)/.21));g[((t-l)*m+(n-c))*p+(d-s)]=_.length/3,_.push(k,A,j),v.push(xm.x,xm.y,xm.z),y.push(M,M,M),b.push(r(k,j))}}if(_.length===0)return null;let O=(e,t,n)=>e<s||t<c||n<l||e>=u||t>=d||n>=f?-1:g[((n-l)*m+(t-c))*p+(e-s)],k=(e,t,n,r,i)=>{if(!(e<0||t<0||n<0||r<0)){if(!i){let e=t;t=r,r=e}wm(_,e,n)<=wm(_,t,r)?x.push(e,t,n,e,n,r):x.push(e,t,r,t,n,r)}},A=Math.min(n[0],e.nx),j=Math.min(n[1],e.ny),te=Math.min(n[2],e.nz);for(let n=t[2];n<te;n++)for(let r=t[1];r<j;r++){let i=(n*e.ny+r)*e.nx+t[0];for(let a=t[0];a<A;a++,i++){let t=T[i]<0;a+1<e.nx&&t!==T[i+1]<0&&k(O(a,r-1,n-1),O(a,r,n-1),O(a,r,n),O(a,r-1,n),t),r+1<e.ny&&t!==T[i+E]<0&&k(O(a-1,r,n-1),O(a-1,r,n),O(a,r,n),O(a,r,n-1),t),n+1<e.nz&&t!==T[i+D]<0&&k(O(a-1,r-1,n),O(a,r-1,n),O(a,r,n),O(a-1,r,n),t)}}return x.length===0?null:{positions:new Float32Array(_),normals:new Float32Array(v),colors:new Float32Array(y),meadow:new Float32Array(b),indices:new Uint32Array(x)}}function wm(e,t,n){let r=e[t*3]-e[n*3],i=e[t*3+1]-e[n*3+1],a=e[t*3+2]-e[n*3+2];return r*r+i*i+a*a}var Tm=25,Em=e=>{let t=new K(e);return new U(t.r,t.g,t.b)},Dm=+(sf.depth-sf.floor-2*sf.cell).toFixed(2),Om={meadow:1,layers:2,topsoil:4,triplanar:8};function km(e,t){let n=new Ua({vertexColors:!0}),r={};return t&Om.meadow&&(r.SOIL_MEADOW=``),t&Om.layers&&(r.SOIL_LAYERS=``),t&Om.topsoil&&(r.SOIL_TOPSOIL=``),t&Om.triplanar&&(r.SOIL_TRIPLANAR=``),n.defines=r,n.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
attribute float meadow;
varying float vMeadow;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
#ifdef SOIL_LAYERS
uniform vec3 uLayerTint[${xd.length}];
uniform vec3 uLayerAccent[${xd.length}];
uniform vec4 uLayerParams[${xd.length}];
varying vec3 vTint;
varying vec3 vAccent;
varying vec4 vParams;
varying float vRock;
#endif`).replace(`#include <project_vertex>`,`#include <project_vertex>
vMeadow = meadow;
vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWorldNormal = normalize(mat3(modelMatrix) * objectNormal);
#ifdef SOIL_LAYERS
{
  // Which level, per vertex: only the nearest (wavy) boundary matters, so the cost is the same
  // at any depth. li = the level above that boundary, lf = how far into the one below.
  float depthM = -vWorldPos.y;
  float bIdx = clamp(floor(depthM / 10.0 + 0.5), 1.0, ${xd.length-1}.0);
  float bd = bIdx * 10.0;
  float wob = 0.35 * sin(vWorldPos.x * 0.9 + bd * 1.7) * cos(vWorldPos.z * 0.7 - bd * 0.9) + 0.15 * sin((vWorldPos.x + vWorldPos.z) * 2.3 + bd);
  float lf = smoothstep(bd + wob - 0.1, bd + wob + 0.1, depthM);
  int li = int(bIdx) - 1;
  vTint = mix(uLayerTint[li], uLayerTint[li + 1], lf);
  vAccent = mix(uLayerAccent[li], uLayerAccent[li + 1], lf);
  vParams = mix(uLayerParams[li], uLayerParams[li + 1], lf);
  vRock = min(float(li) + lf, 1.0);
}
#endif`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
uniform sampler2D uDirtMap;
uniform sampler2D uDirtNormal;
uniform float uDirtScale;
uniform sampler2D uGrassMap;
uniform sampler2D uGrassNormal;
uniform float uGrassScale;
uniform sampler2D uNoise;
varying float vMeadow;
uniform vec3 uAim;
uniform float uAimStrength;
uniform float uAimRadius;
uniform vec3 uImpact;
uniform float uFlash;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;
#ifdef SOIL_LAYERS
varying vec3 vTint;
varying vec3 vAccent;
varying vec4 vParams;
varying float vRock;
#endif`).replace(`#include <map_fragment>`,`
vec3 wn = normalize(vWorldNormal);
vec3 bw = wn * wn;
bw *= bw;
bw /= (bw.x + bw.y + bw.z);
vec2 uvX = vWorldPos.zy * uDirtScale;
vec2 uvY = vec2(vWorldPos.x, -vWorldPos.z) * uDirtScale;
vec2 uvZ = vWorldPos.xy * uDirtScale;
#ifdef SOIL_TRIPLANAR
vec3 soil = texture2D(uDirtMap, uvY).rgb * bw.y + texture2D(uDirtMap, uvX).rgb * bw.x + texture2D(uDirtMap, uvZ).rgb * bw.z;
#else
vec3 soil = texture2D(uDirtMap, uvY).rgb;
#endif
float depthM = -vWorldPos.y;
float dug = clamp(depthM, 0.0, 60.0);
float relief = 1.0;
float floorGlow = 0.0;
#if defined(SOIL_LAYERS) || defined(SOIL_TOPSOIL)
float wall = 1.0 - smoothstep(0.55, 0.9, abs(wn.y));
// One detail-mask read, projected along the dominant axis.
vec2 nUv = bw.y > 0.5 ? uvY : (bw.x > bw.z ? uvX : uvZ);
vec4 nm = texture2D(uNoise, nUv * 0.7);
#endif
#ifdef SOIL_LAYERS
{
  float lum = dot(soil, vec3(0.3, 0.55, 0.15));
  vec3 rock = vTint * (0.42 + 1.25 * lum) * (0.9 + 0.2 * nm.r);
  float band = smoothstep(0.55, 0.95, sin(vWorldPos.y * 17.0 + nm.r * 5.0) * 0.5 + 0.5);
  rock = mix(rock, vAccent * (0.8 + 0.4 * lum), vParams.x * 0.45 * band);
  rock = mix(rock, vAccent, vParams.y * smoothstep(0.66, 0.8, nm.g));
  rock = mix(rock, vTint * 1.25, vParams.y * 0.6 * smoothstep(0.3, 0.18, nm.g));
  rock *= 1.0 - vParams.z * 0.55 * nm.b;
  soil = mix(soil, rock, vRock);
  relief = mix(1.0, vParams.w, vRock);
  // The floor of the world: fused dark plates no pick can break, with glowing seams.
  float wf = smoothstep(${(Dm-.3).toFixed(2)}, ${(Dm-.12).toFixed(2)}, depthM);
  vec2 fg = abs(fract(vWorldPos.xz * 1.1) - 0.5);
  float seam = smoothstep(0.46, 0.49, max(fg.x, fg.y));
  vec3 plate = vec3(0.2, 0.18, 0.25) * (0.85 + 0.3 * nm.r);
  soil = mix(soil, mix(plate, vec3(0.85, 0.55, 0.22), seam), wf);
  relief = mix(relief, 0.3, wf);
  floorGlow = wf * seam;
}
#endif
float topSurface = smoothstep(-0.03, -0.004, vWorldPos.y) * smoothstep(0.85, 0.97, wn.y);
float grassW = 0.0;
#ifdef SOIL_MEADOW
// Undug meadow margin: grass texture exactly as the terrain draws it.
grassW = topSurface * smoothstep(0.0, 1.0, clamp(vMeadow * 1.8 - 0.4 + (dot(soil, vec3(0.9)) - 0.35) * 0.9, 0.0, 1.0));
vec2 gUv = vec2(vWorldPos.x, -vWorldPos.z) * uGrassScale;
{
  vec2 gUv2 = mat2(0.8, -0.6, 0.6, 0.8) * gUv * 0.87 + vec2(0.31, 0.57);
  vec3 meadowCol = mix(texture2D(uGrassMap, gUv).rgb, texture2D(uGrassMap, gUv2).rgb, 0.45);
  soil = mix(soil, meadowCol, grassW);
}
#endif
#ifdef SOIL_TOPSOIL
{
  // Topsoil: a dark humus band near the surface, a few roots, small stones set in the soil.
  float humus = (1.0 - smoothstep(0.18, 0.45, dug)) * smoothstep(0.02, 0.08, dug) * wall;
  soil *= 1.0 - 0.3 * humus;
  float root = smoothstep(0.7, 0.9, nm.b) * smoothstep(0.58, 0.72, nm.r) * (1.0 - smoothstep(0.2, 0.7, dug)) * smoothstep(0.03, 0.1, dug) * wall;
  soil = mix(soil, vec3(0.34, 0.26, 0.18), root * 0.45);
  // No stones in the soil: grey lumps in dirt read as iron. Only real ore looks like ore.
}
#endif
// Freshly cut ground is damper and darker than the weathered surface.
soil *= mix(1.0, 0.72, smoothstep(0.015, 0.12, dug) * (1.0 - topSurface * 0.6));
soil *= mix(1.0, 0.88, smoothstep(0.6, 3.5, dug));
// How much open sky reaches this far down.
float skyVis = mix(0.1, 1.0, exp(-max(0.0, dug - 0.8) / 6.5));
diffuseColor.rgb *= soil;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
{
  vec3 nY = texture2D(uDirtNormal, uvY).xyz * 2.0 - 1.0;
#ifdef SOIL_MEADOW
  nY = mix(nY, (texture2D(uGrassNormal, gUv).xyz * 2.0 - 1.0) * vec3(0.7, 0.7, 1.0), grassW);
#endif
  nY.xy *= relief;
  nY.y = -nY.y;
  vec3 tY = vec3(nY.xy + wn.xz, abs(nY.z) * wn.y);
#ifdef SOIL_TRIPLANAR
  vec3 nX = texture2D(uDirtNormal, uvX).xyz * 2.0 - 1.0;
  vec3 nZ = texture2D(uDirtNormal, uvZ).xyz * 2.0 - 1.0;
  nX.xy *= relief;
  nZ.xy *= relief;
  vec3 tX = vec3(nX.xy + wn.zy, abs(nX.z) * wn.x);
  vec3 tZ = vec3(nZ.xy + wn.xy, abs(nZ.z) * wn.z);
  vec3 worldN = tY.xzy * bw.y + tX.zyx * bw.x + tZ * bw.z;
#else
  vec3 worldN = tY.xzy;
#endif
  normal = normalize((viewMatrix * vec4(normalize(worldN), 0.0)).xyz);
}`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
reflectedLight.indirectDiffuse *= skyVis;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
{
  vec3 toAim = vWorldPos - uAim;
  float aimD = sqrt(dot(toAim, toAim));
  float ring = clamp(1.0 - abs(aimD - uAimRadius) * 100.0, 0.0, 1.0);
  float fill = clamp((uAimRadius - aimD) / (uAimRadius * 0.6), 0.0, 1.0);
  vec3 toHit = vWorldPos - uImpact;
  float fl = clamp(1.0 - dot(toHit, toHit) * 8.6, 0.0, 1.0);
  totalEmissiveRadiance += (diffuseColor.rgb * 0.05 * fill + vec3(0.95, 0.78, 0.55) * 0.045 * ring) * uAimStrength + vec3(1.0, 0.7, 0.42) * (uFlash * 0.07 * fl * fl);
  totalEmissiveRadiance += vec3(1.0, 0.6, 0.25) * floorGlow * 0.3;
}`)},n.customProgramCacheKey=()=>`soil-v3-${t}`,n}var Am=class{volume;group=new G;materials;uniforms;chunks;counts;aimStrength=0;aimTarget=0;tmp=new U;meadowAt=(e,t)=>1-zf(e,t);onCarve=null;onRestore=null;onCarveExtra=null;onCrumble=null;crumbled=0;lastRemeshMs=0;changed=!0;constructor(e,t,n){this.volume=new pm(e),this.uniforms={uDirtMap:{value:t.map},uDirtNormal:{value:t.normalMap},uDirtScale:{value:1/of.soilMetres},uGrassMap:{value:n.map},uGrassNormal:{value:n.normalMap},uGrassScale:{value:1/of.grassMetres},uAim:{value:new U(0,-100,0)},uAimStrength:{value:0},uAimRadius:{value:.15},uImpact:{value:new U(0,-100,0)},uFlash:{value:0},uNoise:{value:vm()},uLayerTint:{value:xd.map(e=>Em(e.look.tint))},uLayerAccent:{value:xd.map(e=>Em(e.look.accent))},uLayerParams:{value:xd.map(e=>new Dt(e.look.bands,e.look.speckle,e.look.cracks,e.look.relief))}},this.materials=Array.from({length:16},(e,t)=>km(this.uniforms,t));for(let e of this.materials){let t=new cr;t.setAttribute(`position`,new q(new Float32Array([0,-1e3,0,.01,-1e3,0,0,-1e3,.01]),3)),t.setAttribute(`normal`,new q(new Float32Array([0,1,0,0,1,0,0,1,0]),3)),t.setAttribute(`color`,new q(new Float32Array(9).fill(1),3)),t.setAttribute(`meadow`,new q(new Float32Array(3),1));let n=new J(t,e);n.receiveShadow=!0,this.group.add(n)}let r=this.volume;this.counts=[Math.ceil((r.nx-1)/Tm),Math.ceil((r.ny-1)/Tm),Math.ceil((r.nz-1)/Tm)],this.chunks=Array(this.counts[0]*this.counts[1]*this.counts[2]).fill(null),this.group.name=`dig-site`,this.remeshAll()}dig(e,t,n,r,i){let a=i*(.9+(Math.sin(r*12.9898)*.5+.5)*.25),o=this.tmp.copy(e).addScaledVector(t,-a*.3),s=this.volume.carve(o,t,n,a,r),c=this.volume.cleanup(s.range),l=c.range?jm(s.range,c.range):s.range;this.crumbled+=c.removed;for(let e of c.pieces)this.onCrumble?.(e,this.groundAt(e.x,e.y,e.z)),e.volume>5e-4&&this.onCarve?.(new U(e.x,e.y,e.z),.2+Math.cbrt(e.volume));return this.markDirty(l),this.remesh(l),this.onCarve?.(e,a*1.25),this.onCarveExtra?.(e,a*1.25),s.removed}groundAt(e,t,n){return _m[Ad(e,t,n).material]}setAimRadius(e){this.uniforms.uAimRadius.value=e}restore(){this.volume.reset(),this.dirtyBlocks.clear(),this.remeshAll(),this.onRestore?.()}dirtyBlocks=new Set;blockCounts(){let e=this.volume;return[Math.ceil(e.nx/Tm),Math.ceil(e.ny/Tm),Math.ceil(e.nz/Tm)]}markDirty(e){let[t,n]=this.blockCounts();for(let r=Math.floor(e.k0/Tm);r<=Math.floor(e.k1/Tm);r++)for(let i=Math.floor(e.j0/Tm);i<=Math.floor(e.j1/Tm);i++)for(let a=Math.floor(e.i0/Tm);a<=Math.floor(e.i1/Tm);a++)this.dirtyBlocks.add((r*n+i)*t+a)}blockRange(e){let t=this.volume,[n,r]=this.blockCounts(),i=e%n,a=Math.floor(e/n)%r,o=Math.floor(e/(n*r));return[i*Tm,Math.min(t.nx,(i+1)*Tm),a*Tm,Math.min(t.ny,(a+1)*Tm),o*Tm,Math.min(t.nz,(o+1)*Tm)]}exportBlocks(){let e=this.volume,t=[];for(let n of this.dirtyBlocks){let[r,i,a,o,s,c]=this.blockRange(n),l=new Int16Array((i-r)*(o-a)*(c-s)),u=0;for(let t=s;t<c;t++)for(let n=a;n<o;n++)for(let a=r;a<i;a++)l[u++]=Math.round(e.at(a,n,t)/1.5*32767);t.push([n,l])}return t}importBlocks(e,t=this.volume.bounds.depth){let n=this.volume,[r,i]=this.blockCounts(),a=Math.round((n.bounds.depth-t)/n.cell),o=a%Tm===0?a/Tm:0,s=i-o;for(let[t,a]of e){let e=t;if(o){let n=t%r,a=Math.floor(t/r)%s;e=(Math.floor(t/(r*s))*i+a+o)*r+n}let[c,l,u,d,f,p]=this.blockRange(e);if(a.length!==(l-c)*(d-u)*(p-f))continue;let m=0;for(let e=f;e<p;e++)for(let t=u;t<d;t++)for(let r=c;r<l;r++)n.set(r,t,e,a[m++]/32767*1.5);this.dirtyBlocks.add(e)}this.remeshAll()}remeshAll(){let e=performance.now(),t=this.volume,[n,r,i]=this.counts,[a,o]=this.blockCounts(),s=new Set,c=Math.floor(Math.round(-t.origin.y/t.cell)/Tm);for(let e=Math.max(0,c-1);e<r;e++)for(let t=0;t<i;t++)for(let i=0;i<n;i++)s.add((t*r+e)*n+i);for(let e of this.dirtyBlocks){let t=e%a,c=Math.floor(e/a)%o,l=Math.floor(e/(a*o));for(let e=l-1;e<=l+1;e++)for(let a=c-1;a<=c+1;a++)for(let o=t-1;o<=t+1;o++)o<0||a<0||e<0||o>=n||a>=r||e>=i||s.add((e*r+a)*n+o)}this.chunks.forEach((e,t)=>{e&&s.add(t)});for(let e of s)this.buildChunk(e%n,Math.floor(e/n)%r,Math.floor(e/(n*r)));this.lastRemeshMs=performance.now()-e,this.changed=!0}remesh(e){let t=performance.now(),[n,r,i]=this.counts,a=(e,t)=>Math.min(t-1,Math.max(0,Math.floor(e/Tm)));for(let t=a(e.k0-1,i);t<=a(e.k1+1,i);t++)for(let i=a(e.j0-1,r);i<=a(e.j1+1,r);i++)for(let r=a(e.i0-1,n);r<=a(e.i1+1,n);r++)this.buildChunk(r,i,t);this.lastRemeshMs=performance.now()-t,this.changed=!0}buildChunk(e,t,n){let[r,i,a]=this.counts,o=this.volume,s=[e*Tm,t*Tm,n*Tm],c=[e===r-1?o.nx:(e+1)*Tm,t===i-1?o.ny:(t+1)*Tm,n===a-1?o.nz:(n+1)*Tm],l=(n*i+t)*r+e,u=Cm(o,s,c,this.meadowAt),d=this.chunks[l];if(!u){d&&(this.group.remove(d),d.geometry.dispose(),this.chunks[l]=null);return}let f=new cr;f.setAttribute(`position`,new q(u.positions,3)),f.setAttribute(`normal`,new q(u.normals,3)),f.setAttribute(`color`,new q(u.colors,3)),f.setAttribute(`meadow`,new q(u.meadow,1)),this.groupByFeatures(f,u.indices,u.positions,u.normals,u.meadow),f.computeBoundingSphere(),d?(d.geometry.dispose(),d.geometry=f):(d=new J(f,this.materials),d.castShadow=!0,d.receiveShadow=!0,d.name=`dig-chunk-${e}-${t}-${n}`,this.chunks[l]=d,this.group.add(d))}groupByFeatures(e,t,n,r,i){let a=t.length/3,o=new Uint8Array(a),s=new Uint32Array(16);for(let e=0;e<a;e++){let a=1/0,c=-1/0,l=1,u=!1;for(let o=0;o<3;o++){let s=t[e*3+o],d=n[s*3+1];d<a&&(a=d),d>c&&(c=d);let f=r[s*3+1];f<l&&(l=f),i[s]>.001&&(u=!0)}let d=0;u&&c>-.06&&(d|=Om.meadow),a<-9.2&&(d|=Om.layers),c>-12&&a<-.015&&(d|=Om.topsoil),l<.96&&(d|=Om.triplanar),o[e]=d,s[d]++}let c=new Uint32Array(16);for(let e=1;e<16;e++)c[e]=c[e-1]+s[e-1];let l=new Uint32Array(t.length),u=c.slice();for(let e=0;e<a;e++){let n=u[o[e]]++*3;l[n]=t[e*3],l[n+1]=t[e*3+1],l[n+2]=t[e*3+2]}e.setIndex(new q(l,1));for(let t=0;t<16;t++)s[t]&&e.addGroup(c[t]*3,s[t]*3,t)}consumeChanged(){let e=this.changed;return this.changed=!1,e}setAim(e){e&&this.uniforms.uAim.value.copy(e),this.aimTarget=+!!e}flash(e){this.uniforms.uImpact.value.copy(e),this.uniforms.uFlash.value=1}update(e){this.aimStrength+=(this.aimTarget-this.aimStrength)*(1-Math.exp(-e*14)),this.uniforms.uAimStrength.value=this.aimStrength,this.uniforms.uFlash.value*=Math.exp(-e*22)}contains(e,t){return this.volume.contains(e,t)}sample(e,t,n){return this.volume.sample(e,t,n)}surfaceBelow(e,t,n){return this.volume.surfaceBelow(e,t,n)}surfaceAbove(e,t,n){return this.volume.surfaceAbove(e,t,n)}raycast(e,t,n,r){let i=this.volume,a=0;for(let o=0;o<=n;o+=.025){let n=e.x+t.x*o,s=e.y+t.y*o,c=e.z+t.z*o;if(i.contains(n,c)&&s<=i.max.y){if(i.sample(n,s,c)<0){let n=a,s=o;for(let r=0;r<7;r++){let r=(n+s)*.5;i.sample(e.x+t.x*r,e.y+t.y*r,e.z+t.z*r)<0?s=r:n=r}return r.distance=s,r.point.set(e.x+t.x*s,e.y+t.y*s,e.z+t.z*s),i.gradient(r.point.x,r.point.y,r.point.z,r.normal),`dig`}}else if(s<Rf(n,c)){let n=a,i=o;for(let r=0;r<7;r++){let r=(n+i)*.5;e.y+t.y*r<Rf(e.x+t.x*r,e.z+t.z*r)?i=r:n=r}return r.distance=i,r.point.set(e.x+t.x*i,e.y+t.y*i,e.z+t.z*i),r.normal.set(0,1,0),`blocked`}a=o}return null}};function jm(e,t){return{i0:Math.min(e.i0,t.i0),j0:Math.min(e.j0,t.j0),k0:Math.min(e.k0,t.k0),i1:Math.max(e.i1,t.i1),j1:Math.max(e.j1,t.j1),k1:Math.max(e.k1,t.k1)}}var Mm=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}
`,Nm=`
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uGround;
uniform float uTime;
uniform int uCloudOctaves;
uniform float uEnvMode;
uniform float uBake;
varying vec3 vDir;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 6; i++) {
    if (i >= uCloudOctaves) break;
    s += a * noise(p);
    p = p * 2.03 + vec2(17.1, 9.2);
    a *= 0.5;
  }
  return s;
}

void main() {
  vec3 d = normalize(vDir);
  float y = d.y;
  float up = clamp(y, 0.0, 1.0);
  float sd = max(dot(d, uSunDir), 0.0);

  vec3 col = mix(uHorizon, uZenith, pow(up, 0.42));
  // Hazy bright band hugging the horizon.
  col = mix(col, uHorizon * 1.04, exp(-up * 16.0) * 0.55);
  // Forward scattering around the sun.
  col += uSunColor * (pow(sd, 5.0) * 0.1 + pow(sd, 42.0) * 0.3);

  float cloudCover = 0.0;
  if (y > 0.0) {
    vec2 uv = d.xz / (y + 0.1) * 0.8 + vec2(uTime * 0.005, uTime * 0.002);
    float n = fbm(uv * 1.3);
    cloudCover = smoothstep(0.52, 0.8, n) * smoothstep(0.02, 0.25, y);
    // Cheap self-shadowing: compare against two octaves offset toward the sun.
    vec2 sp = uv * 1.3 + uSunDir.xz * 0.07;
    float n2 = 0.5 * noise(sp) + 0.25 * noise(sp * 2.03 + vec2(17.1, 9.2)) + 0.125;
    float lit = clamp((n - n2) * 5.0 + 0.55, 0.0, 1.0);
    vec3 cloudCol = mix(vec3(0.6, 0.65, 0.74), vec3(1.1, 1.06, 1.0), lit);
    cloudCol += uSunColor * pow(sd, 10.0) * 0.5;
    col = mix(col, cloudCol, cloudCover * 0.88);
  }

  if (uBake < 0.5) {
    float disk = smoothstep(0.99962, 0.99982, sd) * (1.0 - cloudCover);
    col += uSunColor * disk * mix(22.0, 1.5, uEnvMode);
  }

  // Below the horizon: fog colour in view, earthy bounce light for image-based lighting.
  float below = smoothstep(0.0, -0.2, y);
  col = mix(col, mix(uHorizon, uGround, uEnvMode), below);

  // Baking into the cache: cloud cover goes in alpha so the sun disk can be hidden behind clouds.
  gl_FragColor = vec4(col, uBake > 0.5 ? cloudCover : 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Pm=`
uniform samplerCube uSky;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  vec4 sky = textureCube(uSky, d);
  float sd = max(dot(d, uSunDir), 0.0);
  float disk = smoothstep(0.99962, 0.99982, sd) * (1.0 - sky.a) * step(0.0, d.y);
  gl_FragColor = vec4(sky.rgb + uSunColor * disk * 22.0, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Fm=256,Im=class{mesh;material;display;cacheTarget=new Os(Fm,{type:g,generateMipmaps:!1});cacheCamera=new No(1,1e3,this.cacheTarget);bakeScene=new hn;renderer=null;face=0;primed=!1;constructor(e){this.material=new Ba({vertexShader:Mm,fragmentShader:Nm,side:1,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{uSunDir:{value:af.sunDirection.clone()},uSunColor:{value:af.sunColor.clone()},uZenith:{value:af.zenithColor.clone()},uHorizon:{value:af.horizonColor.clone()},uGround:{value:af.groundBounceColor.clone()},uTime:{value:0},uCloudOctaves:{value:e},uEnvMode:{value:0},uBake:{value:1}}}),this.bakeScene.add(new J(new Aa(100,32,16),this.material)),this.display=new Ba({vertexShader:Mm,fragmentShader:Pm,side:1,depthWrite:!1,depthTest:!0,fog:!1,uniforms:{uSky:{value:this.cacheTarget.texture},uSunDir:{value:af.sunDirection.clone()},uSunColor:{value:af.sunColor.clone()}}}),this.mesh=new J(new Aa(400,32,16),this.display),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1e3,this.mesh.matrixAutoUpdate=!0}setCloudOctaves(e){this.material.uniforms.uCloudOctaves.value=e}update(e,t){this.mesh.position.copy(t),this.material.uniforms.uTime.value=e;let n=this.renderer;if(!n)return;if(!this.primed){this.cacheCamera.update(n,this.bakeScene),this.primed=!0;return}let r=n.getRenderTarget(),i=n.getActiveCubeFace(),a=n.getActiveMipmapLevel();n.setRenderTarget(this.cacheTarget,this.face),n.render(this.bakeScene,this.cacheCamera.children[this.face]),n.setRenderTarget(r,i,a),this.face=(this.face+1)%6}createEnvironment(e){this.renderer=e;let t=new hn,n=this.material.clone();n.uniforms.uEnvMode.value=1,n.uniforms.uBake.value=0,n.uniforms.uCloudOctaves.value=4;let r=new Aa(100,32,16);t.add(new J(r,n));let i=new ys(e),a=i.fromScene(t,0,.1,500);return i.dispose(),n.dispose(),r.dispose(),a.texture}},Lm=Array.from({length:8},(e,t)=>[Math.cos(t/8*Math.PI*2),Math.sin(t/8*Math.PI*2)]),Rm=[[0,0],[1,0],[-1,0],[0,1],[0,-1]],zm=class{colliders=[];heightFields=[];deformable=null;add(e){return this.colliders.push(e),e}addHeightField(e){return this.heightFields.push(e),e}remove(e){let t=this.colliders.indexOf(e);t>=0&&this.colliders.splice(t,1)}setDeformable(e){this.deformable=e}surfaceAt(e,t,n){let r=this.deformable;return r&&r.contains(e,t)?r.surfaceBelow(e,t,n):Rf(e,t)}resolveHorizontal(e,t,n,r){let i=!1;for(let a=0;a<3;a++){let a=!1;for(let i of this.colliders)if(!(!i.enabled||i.maxY<=n||i.minY>=r)){if(i.kind===`box`){let n=Math.max(i.minX,Math.min(e.x,i.maxX)),r=Math.max(i.minZ,Math.min(e.z,i.maxZ)),o=e.x-n,s=e.z-r,c=o*o+s*s;if(c>=t*t)continue;if(c>1e-10){let n=Math.sqrt(c),r=(t-n)/n;e.x+=o*r,e.z+=s*r}else{let n=e.x-i.minX,r=i.maxX-e.x,a=e.z-i.minZ,o=i.maxZ-e.z,s=Math.min(n,r,a,o);s===n?e.x=i.minX-t:s===r?e.x=i.maxX+t:e.z=s===a?i.minZ-t:i.maxZ+t}a=!0}else{let n=e.x-i.x,r=e.z-i.z,o=t+i.radius,s=n*n+r*r;if(s>=o*o)continue;let c=Math.sqrt(s)||1e-5,l=(o-c)/c;e.x+=n*l,e.z+=r*l,a=!0}}this.pushOutOfDeformable(e,t,n,r)&&(a=!0);for(let r of this.heightFields)r.pushOut(e,t,n)&&(a=!0);if(!a)break;i=!0}return i}pushOutOfDeformable(e,t,n,r){let i=this.deformable;if((!i||!i.contains(e.x,e.z))&&(!i||!i.contains(e.x+t,e.z)&&!i.contains(e.x-t,e.z)&&!i.contains(e.x,e.z+t)&&!i.contains(e.x,e.z-t)))return!1;let a=0,o=0,s=[n+.08,(n+r)*.5,r-.1];for(let n of s)for(let[r,s]of Lm){let c=e.x+r*t,l=e.z+s*t;if(!i.contains(c,l))continue;let u=i.sample(c,n,l);if(u<0){let e=Math.min(-u,t);a-=r*e,o-=s*e}}return a===0&&o===0?!1:(e.x+=a*.5,e.z+=o*.5,!0)}ceilingAbove(e,t,n,r){let i=1/0;for(let a of this.colliders){if(!a.enabled||a.kind!==`box`||a.minY>=r||a.minY<r-.3)continue;let o=Math.max(a.minX,Math.min(e,a.maxX)),s=Math.max(a.minZ,Math.min(t,a.maxZ));(e-o)**2+(t-s)**2<n*n*.5&&(i=Math.min(i,a.minY))}let a=this.deformable;if(!a||!a.contains(e,t))return i;let o=n*.6,s=[0,0,o,0,-o,0,0,o,0,-o];for(let n=0;n<s.length;n+=2){let o=e+s[n],c=t+s[n+1];if(!a.contains(o,c)||a.sample(o,r,c)>=0)continue;let l=r;for(let e=0;e<12&&a.sample(o,l,c)<0;e++)l-=.02;l<i&&(i=l)}return i}groundHeight(e,t,n,r,i){let a=r+i,o,s=this.deformable;if(s&&s.contains(e,t)){let i=n*.6,c=[0,0,i,0,-i,0,0,i,0,-i],l=r+.02,u=!0;for(let n=0;n<c.length&&u;n+=2)s.contains(e+c[n],t+c[n+1])&&s.sample(e+c[n],l,t+c[n+1])>0&&(u=!1);if(u){let n=s.surfaceAbove(e,t,l);o=n-r<=.8?n:r}else{o=-1/0;for(let n=0;n<c.length;n+=2){let r=this.surfaceAt(e+c[n],t+c[n+1],a);r>o&&(o=r)}if(o===-1/0){let n=s.surfaceAbove(e,t,a);o=n-r<=.8?n:r}}}else o=Rf(e,t);let c=n*.5;for(let r of this.heightFields)if(!(!r.near(e,t,n)||r.top<=o))for(let[n,i]of Rm){let s=r.heightAt(e+n*c,t+i*c);s>o&&s<=a&&(o=s)}let l=n*.85;for(let n of this.colliders)if(!(!n.enabled||n.maxY>a||n.maxY<=o)){if(n.kind===`box`){let r=Math.max(n.minX,Math.min(e,n.maxX)),i=Math.max(n.minZ,Math.min(t,n.maxZ)),a=e-r,s=t-i;a*a+s*s<l*l&&(o=n.maxY)}else{let r=e-n.x,i=t-n.z,a=n.radius*.8+l*.5;r*r+i*i<a*a&&(o=n.maxY)}}return o}},Bm=`
uniform vec3 uCamPos;
uniform float uTime;
uniform float uBox;
uniform float uScale;
attribute float aSeed;
varying float vAlpha;
void main() {
  vec3 p = position * uBox;
  p += vec3(sin(uTime * 0.13 + aSeed * 40.0) * 1.2, uTime * 0.04 + sin(uTime * 0.3 + aSeed * 17.0) * 0.4, cos(uTime * 0.11 + aSeed * 23.0) * 1.2);
  p = mod(p - uCamPos + uBox * 0.5, uBox) + uCamPos - uBox * 0.5;
  p.y = max(p.y, 0.15);
  vec4 mv = viewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float dist = -mv.z;
  gl_PointSize = (0.008 + aSeed * 0.01) * uScale / max(dist, 0.1);
  float twinkle = 0.55 + 0.45 * sin(uTime * (1.5 + aSeed * 2.0) + aSeed * 60.0);
  vAlpha = twinkle * smoothstep(0.4, 1.2, dist) * (1.0 - smoothstep(uBox * 0.3, uBox * 0.5, dist));
}
`,Vm=`
varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  float d = dot(c, c);
  if (d > 1.0) discard;
  float a = (1.0 - d);
  gl_FragColor = vec4(vec3(1.0, 0.9, 0.7), a * a * vAlpha * 0.32);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Hm=class{points;material;constructor(e){let t=vu(12),n=new Float32Array(e*3),r=new Float32Array(e);for(let i=0;i<e;i++)n[i*3]=t(),n[i*3+1]=t()*.35,n[i*3+2]=t(),r[i]=t();let i=new cr;i.setAttribute(`position`,new q(n,3)),i.setAttribute(`aSeed`,new q(r,1)),this.material=new Ba({vertexShader:Bm,fragmentShader:Vm,transparent:!0,depthWrite:!1,blending:2,uniforms:{uCamPos:{value:new U},uTime:{value:0},uBox:{value:16},uScale:{value:800}}}),this.points=new $r(i,this.material),this.points.frustumCulled=!1,this.points.name=`motes`}setCount(e){this.points.geometry.setDrawRange(0,e)}update(e,t,n){let r=this.material.uniforms;r.uTime.value=e,r.uCamPos.value.copy(t),r.uScale.value=n}};function Um(e){let t=new Ua({vertexColors:!0,side:2});return t.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.fragmentShader=t.fragmentShader.replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aRank;
uniform float uTime;
uniform vec3 uPlayer;
uniform vec3 uCam;
uniform float uFull;
uniform float uFar;
uniform vec2 uWindDir;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
#ifdef USE_INSTANCING
  vec3 iOrigin = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
  mat3 iBasis = mat3(instanceMatrix);
  float iScale2 = dot(iBasis[0], iBasis[0]);
  float dens = 1.0 - smoothstep(uFull, uFar, distance(iOrigin.xz, uCam.xz));
  transformed *= 1.0 - smoothstep(dens - 0.15, dens, aRank);
  float hf = clamp(position.y / 0.35, 0.0, 1.0);
  hf *= hf;
  float gust = sin(uTime * 0.55 + iOrigin.x * 0.045 + iOrigin.z * 0.03) * 0.5 + 0.5;
  float wave = sin(uTime * 1.8 + iOrigin.x * 0.55 + iOrigin.z * 0.35) * (0.3 + 0.7 * gust)
             + sin(uTime * 3.7 + iOrigin.x * 1.7 - iOrigin.z * 0.9) * 0.12;
  vec3 worldOffset = vec3(uWindDir.x, 0.0, uWindDir.y) * wave * 0.075 * hf;
  vec2 away = iOrigin.xz - uPlayer.xz;
  float pd = length(away);
  float push = (1.0 - smoothstep(0.25, 0.9, pd)) * hf;
  worldOffset.xz += (away / max(pd, 0.001)) * push * 0.22;
  worldOffset.y -= push * 0.07;
  transformed += transpose(iBasis) * worldOffset / iScale2;
#endif`)},t.customProgramCacheKey=()=>`foliage-v3`,t}var Wm=(e,t,n)=>[Xu(e),Xu(t),Xu(n)];function Gm(e,t,n){let r=new cr;r.setAttribute(`position`,new q(new Float32Array(e),3)),r.setAttribute(`color`,new q(new Float32Array(t),3));let i=new Float32Array(e.length);for(let e=1;e<i.length;e+=3)i[e]=1;return r.setAttribute(`normal`,new q(i,3)),r.setIndex(n),r}function Km(e,t){let n=[],r=[],i=[],a=Wm(.22,.3,.12),o=Wm(.44,.53,.23),s=Wm(.56,.54,.32);for(let c=0;c<t;c++){let t=e()*Math.PI*2,c=Math.sqrt(e())*.24,l=Math.cos(t)*c,u=Math.sin(t)*c,d=.13+e()*e()*.22,f=.026+e()*.016,p=e()*Math.PI,m=Math.cos(p),h=Math.sin(p),g=t+(e()-.5)*1.2,_=.05+e()*.13,v=Math.cos(g)*_,y=Math.sin(g)*_,b=e()<.25?s:o,x=.85+e()*.3,S=n.length/3;for(let e=0;e<2;e++){let t=e/2,i=t*t,o=l+v*i,s=u+y*i,c=f*.5*(1-t*.8);n.push(o-m*c,t*d,s-h*c,o+m*c,t*d,s+h*c);let p=qu(a[0],b[0],t)*x,g=qu(a[1],b[1],t)*x,_=qu(a[2],b[2],t)*x;r.push(p,g,_,p,g,_)}n.push(l+v,d,u+y),r.push(b[0]*x,b[1]*x,b[2]*x);for(let e=0;e<1;e++){let t=S+e*2;i.push(t,t+1,t+2,t+1,t+3,t+2)}let C=S+2;i.push(C,C+1,S+4)}return Gm(n,r,i)}function qm(e,t){let n=[],r=[],i=[],a=Wm(.2,.32,.1);for(let o=0;o<3;o++){let[o,s]=t[Math.floor(e()*t.length)],c=e()*Math.PI*2,l=.03+e()*.09,u=Math.cos(c)*l,d=Math.sin(c)*l,f=.18+e()*.16,p=(e()-.5)*.06,m=n.length/3,h=.004;n.push(u-h,0,d,u+h,0,d,u-h+p,f,d,u+h+p,f,d);for(let e=0;e<4;e++)r.push(a[0],a[1],a[2]);i.push(m,m+1,m+2,m+1,m+3,m+2);let g=u+p,_=n.length/3;n.push(g,f+.004,d),r.push(s[0],s[1],s[2]);let v=.022+e()*.012,y=e()*Math.PI*2;for(let e=0;e<12;e++){let t=e/12*Math.PI*2,i=e%2==0?v:v*.55;n.push(g+Math.cos(t)*i,f+Math.sin(t+y)*i*.25,d+Math.sin(t)*i),r.push(o[0],o[1],o[2])}for(let e=0;e<12;e++)i.push(_,_+1+e,_+1+(e+1)%12)}return Gm(n,r,i)}var Jm=8,Ym=class{group=new G;chunks=[];constructor(e,t){let n=vu(e.seed),r=new Map,i=e.spacing;for(let t=-70;t<70;t+=i)for(let a=-70;a<70;a+=i){let o=a+n()*i,s=t+n()*i;if(Math.hypot(o,s)>If(o,s)+2)continue;let c=e.keep(o,s)*e.cluster(o,s);if(c<=0||n()>c)continue;let l=`${Math.floor(o/Jm)},${Math.floor(s/Jm)}`,u=r.get(l);u||r.set(l,u=[]),u.push({x:o,z:s,s:e.scale[0]+n()*(e.scale[1]-e.scale[0]),rot:n()*Math.PI*2,tint:n()})}let a=new on,o=new K,s=e.geometry;for(let[i,c]of r){for(let e=c.length-1;e>0;e--){let t=Math.floor(n()*(e+1));[c[e],c[t]]=[c[t],c[e]]}let r=new cr;for(let e of[`position`,`normal`,`color`])r.setAttribute(e,s.getAttribute(e));r.setIndex(s.getIndex());let l=new Float32Array(c.length),u=new Ur(r,t,c.length);c.forEach((t,n)=>{if(l[n]=(n+.5)/c.length,a.position.set(t.x,Rf(t.x,t.z)-.01,t.z),a.rotation.set(0,t.rot,0),a.scale.setScalar(t.s),a.updateMatrix(),u.setMatrixAt(n,a.matrix),e.tint){let e=wu(t.x*.07,t.z*.07,3,0,91),r=Ju(.55,.8,e),i=Ju(.45,.2,e),a=.9+t.tint*.2;o.setRGB(a*(1+.18*r-.08*i),a*(1+.04*r),a*(1-.25*r-.05*i)),u.setColorAt(n,o)}}),r.setAttribute(`aRank`,new Fr(l,1)),u.instanceMatrix.needsUpdate=!0,u.computeBoundingSphere(),u.receiveShadow=!0,u.name=`${e.name}-${i}`;let[d,f]=i.split(`,`).map(Number);this.chunks.push({mesh:u,original:u.instanceMatrix.array.slice(),minX:d*Jm,maxX:(d+1)*Jm,minZ:f*Jm,maxZ:(f+1)*Jm,total:c.length}),this.group.add(u)}}clearAround(e,t,n){for(let r of this.chunks){if(e+n<r.minX||e-n>r.maxX||t+n<r.minZ||t-n>r.maxZ)continue;let i=r.mesh.instanceMatrix.array,a=!1;for(let o=0;o<r.total;o++){let s=o*16,c=r.original[s+12]-e,l=r.original[s+14]-t;c*c+l*l<n*n&&i[s+15]!==0&&(i.fill(0,s,s+16),a=!0)}a&&(r.mesh.instanceMatrix.needsUpdate=!0)}}restoreAll(){for(let e of this.chunks)e.mesh.instanceMatrix.array.set(e.original),e.mesh.instanceMatrix.needsUpdate=!0}update(e,t,n){let r=0;for(let i of this.chunks){let a=Math.max(i.minX-e.x,0,e.x-i.maxX),o=Math.max(i.minZ-e.z,0,e.z-i.maxZ),s=Math.sqrt(a*a+o*o);if(s>=n){i.mesh.visible=!1;continue}let c=1-Ju(t,n,s),l=Math.min(i.total,Math.ceil(i.total*Math.min(1,c+.02)));i.mesh.visible=l>0,i.mesh.count=l,r+=l}return r}},Xm=class{group=new G;uniforms;fields=[];full=11;far=32;drawn=0;constructor(e){this.uniforms={uTime:{value:0},uPlayer:{value:new U(0,-100,0)},uCam:{value:new U},uFull:{value:this.full},uFar:{value:this.far},uWindDir:{value:new H(.8,.6).normalize()}};let t=Um(this.uniforms),n=vu(777);this.fields.push(new Ym({name:`grass`,geometry:Km(n,16),spacing:.56,scale:[.75,1.3],keep:e,cluster:(e,t)=>.3+.7*Ju(.25,.62,wu(e*.12+5,t*.12-5,3,0,5)),tint:!0,seed:11},t)),this.fields.push(new Ym({name:`flowers`,geometry:qm(n,[[Wm(.95,.94,.9),Wm(.95,.78,.25)],[Wm(.96,.8,.22),Wm(.85,.6,.12)],[Wm(.62,.52,.86),Wm(.9,.85,.5)]]),spacing:1.1,scale:[.85,1.2],keep:e,cluster:(e,t)=>Ju(.58,.7,wu(e*.12+31,t*.12-31,3,0,31)),tint:!1,seed:40},t));for(let e of this.fields)this.group.add(e.group)}clearAround(e,t,n){for(let r of this.fields)r.clearAround(e,t,n)}restoreAll(){for(let e of this.fields)e.restoreAll()}setDistances(e,t){this.full=e,this.far=t,this.uniforms.uFull.value=e,this.uniforms.uFar.value=t}update(e,t,n){this.uniforms.uTime.value=e,this.uniforms.uPlayer.value.copy(t),this.uniforms.uCam.value.copy(n);let r=0;for(let e of this.fields)r+=e.update(n,this.full,this.far);this.drawn=r}},Zm=class{minX;minZ;maxX;maxZ;top;nx;nz;cell;h;constructor(e,t,n=.1){let r=(e.index?e.toNonIndexed():e).getAttribute(`position`),i=[];for(let e=0;e<r.count;e++){let n=new U(r.getX(e),r.getY(e),r.getZ(e));t&&n.applyMatrix4(t),i.push(n)}let a=1/0,o=1/0,s=-1/0,c=-1/0,l=-1/0;for(let e of i)a=Math.min(a,e.x),s=Math.max(s,e.x),o=Math.min(o,e.z),c=Math.max(c,e.z),l=Math.max(l,e.y);let u=Math.max(n,(s-a)/48,(c-o)/48);this.cell=u,this.minX=a,this.minZ=o,this.maxX=s,this.maxZ=c,this.top=l,this.nx=Math.max(1,Math.ceil((s-a)/u)),this.nz=Math.max(1,Math.ceil((c-o)/u)),this.h=new Float32Array(this.nx*this.nz).fill(-1/0);for(let e=0;e+2<i.length;e+=3){let t=i[e],n=i[e+1],r=i[e+2],s=Math.max(0,Math.floor((Math.min(t.x,n.x,r.x)-a)/u)),c=Math.min(this.nx-1,Math.floor((Math.max(t.x,n.x,r.x)-a)/u)),l=Math.max(0,Math.floor((Math.min(t.z,n.z,r.z)-o)/u)),d=Math.min(this.nz-1,Math.floor((Math.max(t.z,n.z,r.z)-o)/u)),f=(n.z-r.z)*(t.x-r.x)+(r.x-n.x)*(t.z-r.z);if(!(Math.abs(f)<1e-9))for(let e=l;e<=d;e++){let i=o+(e+.5)*u;for(let o=s;o<=c;o++){let s=a+(o+.5)*u,c=((n.z-r.z)*(s-r.x)+(r.x-n.x)*(i-r.z))/f,l=((r.z-t.z)*(s-r.x)+(t.x-r.x)*(i-r.z))/f,d=1-c-l;if(c<-1e-4||l<-1e-4||d<-1e-4)continue;let p=c*t.y+l*n.y+d*r.y,m=e*this.nx+o;p>this.h[m]&&(this.h[m]=p)}}}}heightAt(e,t){let n=Math.floor((e-this.minX)/this.cell),r=Math.floor((t-this.minZ)/this.cell);return n<0||r<0||n>=this.nx||r>=this.nz?-1/0:this.h[r*this.nx+n]}near(e,t,n){return e+n>=this.minX&&e-n<=this.maxX&&t+n>=this.minZ&&t-n<=this.maxZ}pushOut(e,t,n){if(!this.near(e.x,e.z,t)||this.top<=n)return!1;let r=this.cell,i=Math.max(0,Math.floor((e.x-t-this.minX)/r)),a=Math.min(this.nx-1,Math.floor((e.x+t-this.minX)/r)),o=Math.max(0,Math.floor((e.z-t-this.minZ)/r)),s=Math.min(this.nz-1,Math.floor((e.z+t-this.minZ)/r)),c=0,l=0,u=0;for(let d=o;d<=s;d++)for(let o=i;o<=a;o++){if(this.h[d*this.nx+o]<=n)continue;let i=e.x-(this.minX+(o+.5)*r),a=e.z-(this.minZ+(d+.5)*r),s=Math.hypot(i,a),f=t+r*.5-s;if(f<=0)continue;let p=s>1e-5?1/s:0;c+=i*p*f,l+=a*p*f,u=Math.max(u,f)}let d=Math.hypot(c,l);return d<1e-6?!1:(e.x+=c/d*u,e.z+=l/d*u,!0)}};function Qm(e){let t=new wa(1,2);t.deleteAttribute(`normal`),t.deleteAttribute(`uv`),t=_u(t);let n=t.getAttribute(`position`);for(let t=0;t<n.count;t++){let r=n.getX(t),i=n.getY(t),a=n.getZ(t),o=Eu(r*1.1+e,i*1.1,a*1.1,3,e),s=Eu(r*4+e,i*4,a*4,2,e+1),c=.75+o*.6+(s-.5)*.22,l=i*c*.62;l<-.2&&(l=-.2+(l+.2)*.25),n.setXYZ(t,r*c,l,a*c)}t.computeVertexNormals();let r=t.getAttribute(`normal`),i=new Float32Array(n.count*3);for(let t=0;t<n.count;t++){let a=n.getX(t),o=n.getY(t),s=n.getZ(t),c=Eu(a*3+5,o*3,s*3,3,e+7),l=[qu(.3,.44,c),qu(.29,.41,c),qu(.27,.37,c)],u=Ju(.55,.85,r.getY(t))*Ju(.4,.6,Eu(a*2,o*2,s*2,2,e+9)),d=.55+.45*Ju(-.2,.25,o);i[t*3]=Xu(qu(l[0],.3,u)*d),i[t*3+1]=Xu(qu(l[1],.38,u)*d),i[t*3+2]=Xu(qu(l[2],.17,u)*d)}return t.setAttribute(`color`,new q(i,3)),t}var $m=class{meshes=[];footprints=[];constructor(e){let t=vu(31337),n=[{x:9.5,z:-9,scale:1.1,variant:0},{x:10.6,z:-7.8,scale:.45,variant:1},{x:-13,z:4,scale:.8,variant:2},{x:4,z:21,scale:1.4,variant:1},{x:-21,z:-30,scale:1,variant:0}];for(let e=0;e<26;e++){let r=e/26*Math.PI*2+(t()-.5)*.2,i=Math.cos(r),a=Math.sin(r),o=If(i*50,a*50)+.5+t()*5;n.push({x:i*o,z:a*o,scale:1.8+t()*2.6,variant:Math.floor(t()*3)})}let r=new Ua({vertexColors:!0,flatShading:!0}),i=new on;for(let a=0;a<3;a++){let o=n.filter(e=>e.variant===a),s=Qm(a*17+3),c=new Ur(s,r,o.length);c.name=`rocks-${a}`,o.forEach((n,r)=>{let a=n.scale*(.8+t()*.4),o=Math.hypot(n.x,n.z)>30;i.position.set(n.x,Rf(n.x,n.z)-(o?.42:.06)*n.scale,n.z),i.rotation.set(o?(t()-.5)*.5:0,t()*Math.PI*2,o?(t()-.5)*.5:0),i.scale.set(n.scale,a,n.scale*(.85+t()*.3)),i.updateMatrix(),c.setMatrixAt(r,i.matrix);let l=n.scale*.95;this.footprints.push({x:n.x,z:n.z,radius:l}),e.addHeightField(new Zm(s,i.matrix,.12))}),c.castShadow=!0,c.receiveShadow=!0,c.computeBoundingSphere(),this.meshes.push(c)}}},eh=68,th=8.5,nh=108;function rh(e,t){let n=new Ua({vertexColors:!0});return t&&(n.defines={GROUND_SPLAT:``}),n.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec2 splat;
varying vec2 vSplat;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;`).replace(`#include <project_vertex>`,`#include <project_vertex>
vSplat = splat;
vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
uniform sampler2D uGrassMap;
uniform sampler2D uGrassNormal;
uniform sampler2D uDirtMap;
uniform sampler2D uDirtNormal;
uniform float uGrassScale;
uniform float uDirtScale;
varying vec2 vSplat;
varying vec3 vWorldPos;
varying vec3 vWorldNormal;`).replace(`#include <map_fragment>`,`
vec2 gUv = vec2(vWorldPos.x, -vWorldPos.z) * uGrassScale;
vec2 gUv2 = mat2(0.8, -0.6, 0.6, 0.8) * gUv * 0.87 + vec2(0.31, 0.57);
vec3 ground = mix(texture2D(uGrassMap, gUv).rgb, texture2D(uGrassMap, gUv2).rgb, 0.45);
vec2 dUv = vec2(vWorldPos.x, -vWorldPos.z) * uDirtScale;
float soilW = 0.0;
float rockW = 0.0;
#ifdef GROUND_SPLAT
{
  vec3 dirt = texture2D(uDirtMap, dUv).rgb;
  float clump = dot(dirt, vec3(0.9));
  soilW = smoothstep(0.0, 1.0, clamp(vSplat.x * 2.0 - 0.75 + clump * 1.1, 0.0, 1.0));
  rockW = smoothstep(0.2, 0.9, vSplat.y + (clump - 0.35) * 0.7) * 0.9;
  vec3 earth = mix(vec3(dot(dirt, vec3(0.333))), dirt, 0.45) * vec3(1.3, 1.24, 1.18);
  ground = mix(ground, dirt, soilW);
  ground = mix(ground, earth, rockW);
}
#endif
diffuseColor.rgb *= ground;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
// Surface relief only where it can be seen: it fades out by 22 m (and its texture reads stop).
float reliefFade = 1.0 - smoothstep(16.0, 22.0, distance(vWorldPos, cameraPosition));
if (reliefFade > 0.0) {
  vec3 wn = normalize(vWorldNormal);
  vec3 tn = (texture2D(uGrassNormal, gUv).xyz * 2.0 - 1.0) * vec3(0.7, 0.7, 1.0);
#ifdef GROUND_SPLAT
  tn = mix(tn, texture2D(uDirtNormal, dUv).xyz * 2.0 - 1.0, max(soilW, rockW));
#endif
  vec3 pw = normalize(wn * tn.z + vec3(tn.x, 0.0, -tn.y));
  normal = normalize(mix(normal, (viewMatrix * vec4(pw, 0.0)).xyz, reliefFade));
}`)},n.customProgramCacheKey=()=>`ground-v2-${t?`splat`:`plain`}`,n}function ih(e,t,n,r,i,a){let o=n+1,s=o+2,c=new Float32Array(s*s);for(let n=-1;n<=o;n++)for(let i=-1;i<=o;i++)c[(n+1)*s+(i+1)]=Rf(e+i*r,t+n*r);let l=(e,t)=>c[(t+1)*s+(e+1)],u=[],d=[],f=[],p=[],m=[];for(let n=0;n<o;n++)for(let i=0;i<o;i++){let a=e+i*r,o=t+n*r,s=l(i,n),c=l(i+1,n)-l(i-1,n),m=l(i,n+1)-l(i,n-1),h=Math.hypot(c,2*r,m),g={nx:-c/h,ny:2*r/h,nz:-m/h};u.push(a,s,o),d.push(g.nx,g.ny,g.nz);let _=Lf(a,o),v=wu(a*.4,o*.4,2,0,81),y=1-Ju(.35+v*.5,1.1+v*.7,Vf(a,o)),b=1-Ju(2.5+v*1.5,5.5+v*1.5,Math.hypot(a-cf.counter.x,o-cf.counter.z)),x=Math.max(y,b)*.85,S=wu(a*.07+13,o*.07-7,3,0,73),C=Ju(.24,.55,1-g.ny)*Ju(.4,.75,S)*.85;p.push(x,C);let w=wu(a*.03,o*.03,3,0,11),T=Ju(.55,.8,wu(a*.012+50,o*.012-20,3,0,12)),E=.82+.3*w,D=1-Ju(1.5,5,_),ee=Math.hypot(a,o),O=If(a,o),k=Ju(O-1,O+5,ee),A=1-.42*Ju(O+3,O+34,ee),j=E*(1+.16*T)*.97,te=E*(1+.04*T)*.95,M=E*(1-.14*T)*.92;j=(j+(.98-j)*k)*A,te=(te+(.66-te)*k)*A,M=(M+(.5-M)*k)*A,f.push(Xu(Math.min(1,j+(.92-j)*D))/Xu(.92),Xu(Math.min(1,te+(.92-te)*D))/Xu(.92),Xu(Math.min(1,M+(.92-M)*D))/Xu(.92))}for(let a=0;a<n;a++)for(let s=0;s<n;s++){if(i(e+(s+.5)*r,t+(a+.5)*r))continue;let n=a*o+s;m.push(n,n+o,n+1,n+1,n+o,n+o+1)}if(a){let e=[];for(let t=0;t<n;t++)e.push(t);for(let t=0;t<n;t++)e.push(t*o+n);for(let t=n;t>0;t--)e.push(n*o+t);for(let t=n;t>0;t--)e.push(t*o);let t=u.length/3;for(let t of e)u.push(u[t*3],u[t*3+1]-1.2,u[t*3+2]),d.push(d[t*3],d[t*3+1],d[t*3+2]),f.push(f[t*3],f[t*3+1],f[t*3+2]),p.push(p[t*2],p[t*2+1]);for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length],a=t+n,o=t+(n+1)%e.length;m.push(r,i,a,i,o,a)}}let h=new cr;h.setAttribute(`position`,new q(new Float32Array(u),3)),h.setAttribute(`normal`,new q(new Float32Array(d),3)),h.setAttribute(`color`,new q(new Float32Array(f),3)),h.setAttribute(`splat`,new q(new Float32Array(p),2));let g=[],_=[];for(let e=0;e<m.length;e+=3){let t=e=>p[e*2]+p[e*2+1]>.002;(t(m[e])||t(m[e+1])||t(m[e+2])?_:g).push(m[e],m[e+1],m[e+2])}return h.setIndex([...g,..._]),h.addGroup(0,g.length,0),h.addGroup(g.length,_.length,1),h.computeBoundingSphere(),h}var ah=class{group=new G;constructor(e,t){let n={uGrassMap:{value:e.map},uGrassNormal:{value:e.normalMap},uDirtMap:{value:t.map},uDirtNormal:{value:t.normalMap},uGrassScale:{value:1/of.grassMetres},uDirtScale:{value:1/of.soilMetres}},r=[rh(n,!1),rh(n,!0)],i=new J(ih(-68,-68,136,1,(e,t)=>e>sf.minX&&e<sf.maxX&&t>sf.minZ&&t<sf.maxZ,!0),r);i.name=`terrain-inner`,i.receiveShadow=!0;let a=new J(ih(-459,-459,nh,th,(e,t)=>Math.abs(e)<eh&&Math.abs(t)<eh,!1),r);a.name=`terrain-outer`,a.receiveShadow=!1,this.group.add(i,a)}},oh={color:16758896,decay:1,placed:{intensity:5.5,distance:16},held:{intensity:3.2,distance:12},shadowSize:256,shadowFar:12},sh=4,ch=14,lh=new U(0,1,0);function uh(e){return e[1]>.6?`floor`:e[1]<-.6?`ceiling`:`wall`}var dh=class{scene;group=new G;onBroken=null;template;entries=[];hardware;lights=[];held=null;fill=null;time=0;changed=!1;shadowOwner=-2;tmp=new U;constructor(e,t){this.scene=e,this.template=rf(t);let n=new Set;this.template.group.traverse(e=>{let t=e.material;t&&!n.has(t)&&t.isMeshStandardMaterial&&(n.add(t),Hd(t))}),this.hardware=Hd(new Ha({color:`#2d2b29`,roughness:.6,metalness:.8,envMap:t,envMapIntensity:.4})),this.group.name=`lanterns`,e.add(this.group)}ensureLights(){if(!this.held){this.held=new Do(oh.color,0,oh.held.distance,oh.decay),this.scene.add(this.held);for(let e=0;e<sh;e++){let t=new Do(oh.color,0,oh.placed.distance,oh.decay);e===0&&(t.castShadow=!0,t.shadow.mapSize.set(oh.shadowSize,oh.shadowSize),t.shadow.camera.near=.05,t.shadow.camera.far=oh.shadowFar,t.shadow.bias=-.002,t.shadow.normalBias=.05,t.shadow.radius=4),this.lights.push(t),this.scene.add(t)}this.fill=new Do(oh.color,0,oh.placed.distance*.75,oh.decay),this.scene.add(this.fill),this.changed=!0}}consumeChanged(){let e=this.changed;return this.changed=!1,e}get count(){return this.entries.length}place(e,t=0){this.ensureLights();let n=uh(e.n),r=new U(...e.p),i=new U(...e.n).normalize(),a=new G,o=this.template.group.clone(),s;if(n===`floor`)s=r.clone(),o.rotation.y=t;else if(n===`wall`){let e=new U(i.x,0,i.z).normalize(),t=r.clone().add(new U(0,.06,0));s=t.clone().addScaledVector(e,.15).clone().add(new U(0,-.285,0));let n=new J(new Y(.008,.008,.16,6),this.hardware);n.quaternion.copy(new lt().setFromUnitVectors(lh,e)),n.position.copy(t).addScaledVector(e,.075).sub(s),a.add(n);let c=new J(new Y(.026,.026,.012,8),this.hardware);c.quaternion.copy(n.quaternion),c.position.copy(t).sub(s),a.add(c),o.rotation.y=Math.atan2(e.x,e.z)}else{s=r.clone().add(new U(0,-.40499999999999997,0));let e=new J(new Y(.005,.005,.12,5),this.hardware);e.position.set(0,.345,0),a.add(e),o.rotation.y=t}a.add(o),a.position.copy(s),a.traverse(e=>e.castShadow=!1),this.changed=!0,this.group.add(a),this.entries.push({group:a,mount:n,support:r.clone().addScaledVector(i,-.07),centre:s.clone().add(new U(0,.13,0)),flame:s.clone().add(this.template.flame),fall:null})}remove(e){let t=this.entries[e];t&&(this.group.remove(t.group),this.entries.splice(e,1),this.changed=!0)}pick(e,t,n){let r=null;for(let i=0;i<this.entries.length;i++){let a=this.entries[i];if(a.fall)continue;let o=this.tmp.copy(a.centre).sub(e),s=o.dot(t);if(s<0||s>n+.2)continue;let c=o.lengthSq()-s*s,l=.17;if(c>l*l)continue;let u=s-Math.sqrt(l*l-c);u<=n&&(!r||u<r.distance)&&(r={index:i,distance:u})}return r}checkSupport(e,t,n){for(let r of this.entries)r.fall||e&&r.support.distanceTo(e)>t+.3||n(r.support)||(r.fall={vy:0,t:0})}setHeld(e){this.held&&(e&&this.held.position.copy(e),this.held.intensity=e?oh.held.intensity*this.flicker(0):0)}update(e,t,n){this.time+=e;for(let t=this.entries.length-1;t>=0;t--){let r=this.entries[t];if(!r.fall)continue;r.fall.t+=e,r.fall.vy-=ch*e;let i=r.fall.vy*e;r.group.position.y+=i,r.group.rotation.z+=e*2.5,r.centre.y+=i,r.flame.y+=i;let a=n(r.group.position.x,r.group.position.z,r.group.position.y+.3);if(r.group.position.y<=a||r.fall.t>4){let e=r.centre.clone();this.remove(t),this.onBroken?.(t,e)}}if(!this.held)return;let r=this.entries.map((e,n)=>({i:n,d:e.centre.distanceToSquared(t)})).sort((e,t)=>e.d-t.d);for(let e=0;e<this.lights.length;e++){let t=this.lights[e],n=r[e];if(n){let r=this.entries[n.i];if(e===0){let e=r.fall?-1:n.i;(e!==this.shadowOwner||r.fall||!t.position.equals(r.flame))&&(this.changed=!0),this.shadowOwner=e}t.position.copy(r.flame);let i=oh.placed.intensity*this.flicker(n.i+1);e===0&&this.fill?(t.intensity=i*.6,this.fill.position.copy(r.flame),this.fill.intensity=i*.4):t.intensity=i}else e===0&&this.fill&&(this.fill.intensity=0),e===0&&this.shadowOwner!==-2&&(this.shadowOwner=-2,this.changed=!0),t.intensity=0}}flicker(e){let t=this.time;return .93+.04*Math.sin(t*7.3+e*1.7)+.03*Math.sin(t*12.9+e*4.1)}},fh=4.4,ph=3.4,mh=2.5,hh=.13,gh={x0:-.95,x1:.95,y0:.95,y1:1.9};function _h(){let e=new Uint8Array(65536);for(let t=0;t<256;t++)for(let n=0;n<64;n++){let r=wu(n*.18,t*.015,3,0,5),i=wu(n*.06,t*.05,3,0,9),a=.55+.35*r+.25*i-(r<.38?.18:0),o=(t*64+n)*4;e[o]=Math.min(255,142*a),e[o+1]=Math.min(255,110*a),e[o+2]=Math.min(255,82*a),e[o+3]=255}return yh(new Pr(e,64,256))}function vh(){let e=new Uint8Array(262144),t=vu(21),n=Array.from({length:8},()=>.8+t()*.35);for(let t=0;t<256;t++){let r=Math.floor(t/32),i=t%32;for(let a=0;a<256;a++){let o=wu(a*.02+r*7,t*.25,3,0,3),s=i<2?.35:1,c=n[r]*(.75+.45*o)*s,l=(t*256+a)*4;e[l]=Math.min(255,152*c),e[l+1]=Math.min(255,122*c),e[l+2]=Math.min(255,92*c),e[l+3]=255}}return yh(new Pr(e,256,256))}function yh(t){return t.wrapS=t.wrapT=e,t.minFilter=c,t.generateMipmaps=!0,t.colorSpace=Le,t.needsUpdate=!0,t}function bh(e,t,n,r){let i=document.createElement(`canvas`);i.width=t,i.height=n;let a=i.getContext(`2d`);a.fillStyle=r.bg,a.fillRect(0,0,t,n);for(let e=0;e<4;e++)a.fillStyle=e%2?`rgba(0,0,0,0.12)`:`rgba(255,220,170,0.05)`,a.fillRect(0,e*n/4,t,n/4),a.fillStyle=`rgba(0,0,0,0.3)`,a.fillRect(0,(e+1)*n/4-2,t,2);a.fillStyle=r.ink,a.textAlign=`center`,a.textBaseline=`middle`,a.font=r.font,e.forEach((r,i)=>a.fillText(r,t/2,n*(i+.5)/e.length+2));let o=a.getImageData(0,0,t,n),s=vu(4),c=r.weather??26;for(let e=0;e<o.data.length;e+=4){let t=(s()-.5)*c;o.data[e]+=t,o.data[e+1]+=t,o.data[e+2]+=t}a.putImageData(o,0,0);let l=new ni(i);return l.colorSpace=Le,l.anisotropy=4,l}function xh(e,t){let n=e.getAttribute(`position`).count,r=new Float32Array(n*3),[i,a,o]=typeof t==`number`?[t,t,t]:t;for(let e=0;e<n;e++)r[e*3]=i,r[e*3+1]=a,r[e*3+2]=o;return e.setAttribute(`color`,new q(r,3)),e}function Sh(e,t,n){let r=e.getAttribute(`uv`);if(r)for(let e=0;e<r.count;e++)r.setXY(e,r.getX(e)*t,r.getY(e)*n)}function Ch(e,t,n,r,i=hh,a=1){let o=new Y(i,i*1.04,e,10,1);return o.rotateZ(Math.PI/2),o.translate(t,n,r),Sh(o,1,e/1.2),xh(o,a)}function wh(e,t,n,r,i=hh,a=1){let o=new Y(i,i*1.04,e,10,1);return o.rotateX(Math.PI/2),o.translate(t,n,r),Sh(o,1,e/1.2),xh(o,a)}function Th(e,t,n,r=.08,i=.95){let a=new Y(r*.92,r,e,8);return a.translate(t,e/2,n),Sh(a,1,2),xh(a,i)}function $(e,t,n,r,i,a,o=1,s=1){let c=new oi(e,t,n);return c.translate(r,i,a),Sh(c,s*Math.max(e,n),s*Math.max(t,.2)),xh(c,o)}function Eh(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,2,32,32,30);return n.addColorStop(0,`rgba(255,255,255,0.9)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new ni(e)}var Dh=14,Oh=class{rng;pos=[];col=[];idx=[];constructor(e){this.rng=e}leaf(e,t,n,r,i,a,o,s,c,l,u=.3,d=5){let f=Math.cos(r),p=Math.sin(r),m=this.pos.length/3;for(let r=0;r<=d;r++){let m=r/d,h=m*i,g=t+i*(o*m-s*m*m),_=a*Math.sin(Math.min(1,m*1.15+.08)*Math.PI)*(1-m*.25),v=_*u;this.pos.push(e+f*h-p*_,g+v,n+p*h+f*_),this.pos.push(e+f*h,g,n+p*h),this.pos.push(e+f*h+p*_,g+v,n+p*h-f*_);let y=[c[0]+(l[0]-c[0])*m,c[1]+(l[1]-c[1])*m,c[2]+(l[2]-c[2])*m],b=.9+this.rng()*.2;for(let e=0;e<3;e++)this.col.push(y[0]*b*(e===1?.85:1),y[1]*b*(e===1?.85:1),y[2]*b*(e===1?.85:1))}for(let e=0;e<d;e++){let t=m+e*3;this.idx.push(t,t+1,t+3,t+1,t+4,t+3,t+1,t+2,t+4,t+2,t+5,t+4)}}stem(e,t,n,r,i,a,o=0){for(let s of[0,Math.PI/2]){let c=Math.cos(s)*i,l=Math.sin(s)*i,u=this.pos.length/3;this.pos.push(e-c,t,n-l,e+c,t,n+l,e+o-c*.6,t+r,n-l*.6,e+o+c*.6,t+r,n+l*.6);for(let e=0;e<4;e++)this.col.push(...a);this.idx.push(u,u+1,u+2,u+1,u+3,u+2)}}disc(e,t,n,r,i,a=0,o=0,s=10){let c=this.pos.length/3,l=Math.cos(a),u=Math.sin(a);this.pos.push(e,t,n),this.col.push(...i);for(let a=0;a<=s;a++){let d=a/s*Math.PI*2,f=Math.cos(d)*r,p=Math.sin(d)*r,m=f*Math.cos(o)+p*Math.sin(o),h=-f*Math.sin(o)+p*Math.cos(o),g=m*l,_=m*u;this.pos.push(e+g*Math.cos(o)-h*Math.sin(o),t+_,n+g*Math.sin(o)+h*Math.cos(o)),this.col.push(i[0]*.85,i[1]*.85,i[2]*.85),a>0&&this.idx.push(c,c+a,c+a+1)}}cabbage(e,t,n,r){let i=[.07,.15,.09],a=[.16,.27,.15];for(let o=0;o<9;o++){let s=o/9*Math.PI*2+this.rng()*.4;this.leaf(e,t+.02,n,s,.2*r,.1*r,.9,.9,i,a,.55)}for(let i=0;i<6;i++){let o=i/6*Math.PI*2+.3;this.leaf(e-Math.cos(o)*.04*r,t+.03,n-Math.sin(o)*.04*r,o,.09*r,.07*r,1.6,1.4,a,[.22,.34,.2],.9,4)}this.disc(e,t+.1*r,n,.045*r,[.22,.34,.2])}lettuce(e,t,n,r){for(let i=0;i<11;i++){let a=i/11*Math.PI*2+this.rng()*.5,o=i%2==0;this.leaf(e,t+.01,n,a,(o?.12:.17)*r,(o?.07:.09)*r,o?1.3:.8,o?1:.7,[.1,.22,.04],[.26,.42,.08],.7)}}sunflower(e,t,n,r){let i=[.05,.14,.03];this.stem(e,t,n,r,.014,i,.03);for(let a=0;a<4;a++){let o=a*2.1+this.rng();this.leaf(e,t+r*(.3+a*.14),n,o,.2,.09,.3,.8,i,[.08,.2,.04],.2)}let a=t+r;for(let t=0;t<14;t++){let r=t/14*Math.PI*2,i=e+.035,o=a+Math.sin(r)*.04,s=n+Math.cos(r)*.04,c=Math.sin(r),l=Math.cos(r),u=.12,d=.03,f=this.pos.length/3;this.pos.push(i,o-l*d*0+0,s,i,o+c*u+l*d,s+l*u-c*d,i,o+c*u-l*d,s+l*u+c*d,i-.01,o+c*u*1.4,s+l*u*1.4);let p=.9+this.rng()*.2;for(let e=0;e<4;e++)this.col.push(.85*p,.55*p,.03);this.idx.push(f,f+1,f+2,f+1,f+3,f+2)}this.disc(e+.04,a,n,.07,[.09,.05,.02],Math.PI/2-.25,0,12)}grassTuft(e,t,n,r){for(let i=0;i<7;i++){let i=this.rng()*Math.PI*2;this.leaf(e,t,n,i,.18*r,.012,3.2,2.2,[.07,.16,.04],[.2,.3,.1],.1,4)}}flowerTuft(e,t,n,r){let i=r===0?[.55,.04,.05]:r===1?[.85,.6,.04]:[.8,.78,.72];for(let r=0;r<5;r++){let i=r/5*Math.PI*2+this.rng();this.leaf(e,t,n,i,.07,.03,.7,1.4,[.05,.14,.03],[.1,.24,.05],.4,3)}for(let r=0;r<3;r++){let r=e+(this.rng()-.5)*.08,a=n+(this.rng()-.5)*.08,o=t+.05+this.rng()*.05;this.stem(r,t,a,o-t,.004,[.05,.14,.03]);for(let e=0;e<5;e++)this.leaf(r,o,a,e/5*Math.PI*2,.022,.012,.25,.1,i,i,.3,2);this.disc(r,o+.004,a,.006,[.8,.6,.1],0,0,6)}}flush(e){if(this.idx.length===0)return;let t=new cr;t.setAttribute(`position`,new q(new Float32Array(this.pos),3)),t.setAttribute(`color`,new q(new Float32Array(this.col),3)),t.setIndex(this.idx),t.computeVertexNormals(),e.push(t)}},kh=class{group=new G;counter=cf.counter.clone();counterLook=new U;desk=new U;deskLook=new U;cabin=new G;smoke;smokeAge=new Float32Array(Dh);smokeFrom=new U;constructor(e,t,n){let r=new Ua({map:_h(),vertexColors:!0}),i=new Ua({map:vh(),vertexColors:!0}),a=new Ua({vertexColors:!0}),o=new Ua({vertexColors:!0,flatShading:!0}),s=new Ha({color:`#34312e`,roughness:.6,metalness:.75,envMap:n,envMapIntensity:.5}),c=new Ha({color:`#a88142`,roughness:.35,metalness:.9,envMap:n,envMapIntensity:.8}),l=new br({color:new K(1,.72,.38)}),u=new br({color:new K(1.2,.86,.45)}),d=[],f=[],p=[],m=[],h=[],g=[],_=[],v=[],y=[],b=vu(77),x=[.2,.035,.025],S=[.75,.72,.66];{let e=(e,t,n,r,i)=>{let a=i-r;if(a<=.02)return;let o=.85+b()*.3,s=[x[0]*o,x[1]*o,x[2]*o];f.push($(n?.2:.06,a,n?.06:.2,e,r+a/2,t,s,1)),f.push($(n?.04:.09,a,n?.09:.04,e+(n?.1:0),r+a/2,t+(n?0:.1),[x[0]*.8,x[1]*.8,x[2]*.8],1))};for(let t=-2.1;t<fh/2;t+=.2)e(t,-3.4/2,!0,.05,mh),t>gh.x0-.05&&t<gh.x1+.05?(e(t,ph/2,!0,.05,gh.y0-.05),e(t,ph/2,!0,gh.y1+.05,mh)):e(t,ph/2,!0,.05,mh);for(let t=-3.4/2+.1;t<ph/2;t+=.2)e(-4.4/2,t,!1,.05,mh),e(fh/2,t,!1,.05,mh);for(let e of[-1,1])for(let t of[-1,1])p.push($(.13,mh,.13,e*2.22,mh/2,t*1.72,S));p.push($(gh.x1-gh.x0+.2,.08,.1,0,gh.y1+.04,1.72,S));for(let e of[gh.x0-.05,gh.x1+.05])p.push($(.08,gh.y1-gh.y0+.1,.1,e,(gh.y0+gh.y1)/2,1.72,S));p.push($(4.5,.1,.1,0,2.45,1.75,S)),p.push($(4.5,.1,.1,0,2.45,-3.4/2-.05,S))}let C=hh*1.84;for(let e=0;e<0;e++){let t=hh+e*C,n=t+C*.5,r=()=>.85+b()*.25;if(d.push(Ch(4.9,0,t,-3.4/2,hh,r())),t>gh.y0&&t<gh.y1){let e=gh.x0-(-4.4/2-.25),n=2.45-gh.x1;d.push(Ch(e,-4.4/2-.25+e/2,t,ph/2,hh,r())),d.push(Ch(n,gh.x1+n/2,t,ph/2,hh,r()))}else d.push(Ch(4.9,0,t,ph/2,hh,r()));n<2.55&&(d.push(wh(3.9,-4.4/2,n,0,hh,r())),d.push(wh(3.9,fh/2,n,0,hh,r())))}f.push($(4.2,.08,3.1999999999999997,0,.12,0,.7,.7)),f.push($(4.1000000000000005,2.2,.05,0,1.2,-1.56,.4,.6)),f.push($(4.1000000000000005,.05,.42,0,1.75,-1.35,.75,.6));let w=2.15,T=1.0499999999999998*(w/(ph/2)),E=Math.hypot(w,T),D=Math.atan2(T,w);for(let e of[-1,1]){let t=new oi(5.300000000000001,.09,E);Sh(t,3,2),t.rotateX(e*D),t.translate(0,2.9360294117647054,e*w/2),f.push(xh(t,.66))}d.push(Ch(5.300000000000001,0,3.63,0,.1,.9));for(let e of[-4.4/2-.02,2.22]){let t=new Bi;t.moveTo(-3.4/2,0),t.lineTo(ph/2,0),t.lineTo(0,1.0499999999999998),t.closePath();let n=new Oa(t);Sh(n,1.6,1.6),n.rotateY(e<0?-Math.PI/2:Math.PI/2),n.translate(e,mh,0),f.push(xh(n,x))}for(let e of[-1,1]){let t=e*(2.24+.012),n=new Da(.62,.52);n.rotateY(Math.PI/2*e),n.translate(t,1.45,.45),_.push(n);let r=e*2.27;f.push($(.05,.64,.06,r,1.45,.45-.34,.55)),f.push($(.05,.64,.06,r,1.45,.79,.55)),f.push($(.05,.06,.74,r,1.15,.45,.55)),f.push($(.05,.06,.74,r,1.75,.45,.55)),f.push($(.04,.52,.03,r,1.45,.45,.5)),f.push($(.04,.03,.62,r,1.45,.45,.5))}let ee=1.95,O=.22;f.push($(5.1000000000000005,.08,ee,0,.18,2.675+.05,.8,1.1));for(let e of[-4.4/2-.2,0,2.4000000000000004])f.push($(.14,O,ee,e,O/2-.02,2.675+.05,.6));f.push($(1.5,.12,.34,0,.06,3.87,.75,1));let k=2.1,A=Math.hypot(k,.23999999999999977),j=Math.atan2(.23999999999999977,k);{let e=new oi(5.300000000000001,.07,A);Sh(e,3,1.4),e.rotateX(j),e.translate(0,4.6/2+.05,2.75),f.push(xh(e,.7))}let te=3.57,M=[-4.4/2-.2,-.95,.95,2.4000000000000004];for(let e of M)d.push(Th(2.18,e,te,.075));d.push(Ch(5.1000000000000005,0,2.1500000000000004,te,.07,.9));let ne=[[-4.4/2-.2,-.95],[.95,2.4000000000000004]];for(let[e,t]of ne){d.push(Ch(t-e,(e+t)/2,.94,te,.035,.85));for(let n=e+.3;n<t-.15;n+=.3)f.push($(.035,.7,.035,n,.58,te,.7))}f.push($(gh.x1-gh.x0+.5,.07,.5,0,gh.y0+.02,1.92,.95,.8)),f.push($(gh.x1-gh.x0+.5,.75,.05,0,gh.y0-.38,2.15,.8,.8));for(let e of[gh.x0,gh.x1])h.push($(.04,.3,.3,e,gh.y0-.14,1.9));{let e=new oi(gh.x1-gh.x0+.1,.05,.62);Sh(e,2,1),e.rotateX(-.5),e.translate(0,gh.y1+.2,2),f.push(xh(e,.8))}let N=ph/2-.62;h.push($(1.35,1.3,.7,0,.77,N));for(let e of[.14,1.4])g.push($(1.39,.05,.74,0,e,N));for(let e of[-.66,.66])g.push($(.05,1.3,.74,e,.77,N));for(let e=0;e<6;e++)g.push($(.025,.025,.02,-.55+e*.22,1.33,1.44));{let e=new Y(.34,.12,.38,8,1,!0);e.translate(-.25,1.62,N),g.push(e);let t=new Y(.05,.05,1,8);t.translate(.4,1.9,.9800000000000001),h.push(t);let n=new Y(.05,.05,.5,8);n.rotateX(Math.PI/2),n.translate(.4,2.38,.75),h.push(n);let r=new ja(.22,.025,6,20);r.rotateY(Math.PI/2),r.translate(.72,.9,N),h.push(r);for(let e=0;e<4;e++){let t=new oi(.02,.44,.025);t.rotateX(e*Math.PI/4),t.translate(.72,.9,N),h.push(t)}let i=new Y(.02,.02,.16,6);i.rotateZ(Math.PI/2),i.translate(.8,1.12,N),g.push(i);let a=new Y(.1,.1,.03,16);a.rotateX(Math.PI/2),a.translate(.34,1.12,1.44),g.push(a);let o=new oi(.34,.04,.5);o.rotateX(.35),o.translate(-.2,1.02,1.58),g.push(o)}let re=new J(new si(.082,20),u);re.position.set(.34,1.12,1.457),this.cabin.add(re);let P=new J(new oi(.005,.07,.004),s);P.position.set(.34+.018,1.12+.02,1.461),P.rotation.z=-.6,this.cabin.add(P);let ie=new J(new Da(.46,.13),new Ha({map:bh([`Built for whoever comes after me.`,`— E.`],512,144,{bg:`#8a6a34`,ink:`#2a1d0e`,font:`italic 600 34px Georgia, serif`,weather:14}),roughness:.4,metalness:.7,envMap:n,envMapIntensity:.6}));ie.position.set(-.27,1.2,1.437),this.cabin.add(ie);let ae=-1.85,oe=2.25;f.push($(1,.05,.55,ae,.98,oe,.85,1));for(let[e,t]of[[-.44,-.22],[.44,-.22],[-.44,.22],[.44,.22]])f.push($(.05,.74,.05,ae+e,.59,oe+t,.6));f.push($(.42,.04,.4,-1.8,.67,2.9,.75));for(let[e,t]of[[-.17,-.16],[.17,-.16],[-.17,.16],[.17,.16]])f.push($(.035,.45,.035,-1.8+e,.44,2.9+t,.6));p.push($(.34,.03,.24,-1.9000000000000001,1.02,oe,[.36,.24,.15])),p.push($(.15,.012,.22,-1.98,1.042,oe,[.88,.83,.7])),p.push($(.15,.012,.22,-1.82,1.042,oe,[.9,.85,.72])),h.push($(.012,.004,.12,-1.7000000000000002,1.05,2.3));{let e=new Y(.035,.05,.06,10);e.translate(-1.4900000000000002,1.03,2.13),g.push(e);let t=new Aa(.04,10,8);t.scale(1,1.3,1),t.translate(-1.4900000000000002,1.1,2.13),_.push(t)}f.push($(.72,.56,.04,-1.55,1.42,1.79,.55,1));for(let[e,t,n,r,i]of[[-1.72,1.5,.2,.26,.9],[-1.46,1.36,.22,.18,.84],[-1.34,1.54,.16,.2,.95],[-1.66,1.28,.18,.14,.8]])p.push($(n,r,.005,e,t,1.813,[i,i*.96,i*.86]));let se=[[fh/2-.25,.22,3.05,1],[2.35,.22,2.8,.95],[fh/2-.05,.52,2.92,.9]];for(let[e,t,n,r]of se){let i=new Aa(.28*r,10,7);i.scale(1,.62,.8),i.translate(e,t+O,n),p.push(xh(i,[.34*(.9+b()*.2),.26*(.9+b()*.2),.15]));let a=new Y(.04,.05,.08,6);a.translate(e+.2*r,t+O+.02,n),p.push(xh(a,[.42,.33,.2]))}h.push($(.6,.06,.5,3.1500000000000004,.03,2.3)),h.push($(.05,.9,.05,3.1500000000000004,.5,2.08));{let e=new Y(.12,.12,.03,16);e.rotateX(Math.PI/2),e.translate(3.1500000000000004,.95,2.08),g.push(e)}f.push($(.7,.42,.5,3.1500000000000004,.21,ph/2-.35,.75,1.1));for(let e of[.08,.34])h.push($(.72,.04,.52,3.1500000000000004,e,ph/2-.35));for(let e=0;e<9;e++){let e=new wa(.07+b()*.04,0);e.translate(3.1500000000000004+(b()-.5)*.5,.42+b()*.05,ph/2-.35+(b()-.5)*.3),m.push(xh(e,[.5+b()*.15,.38,.3]))}{let e=new Y(.28,.3,.8,14);e.translate(-4.4/2-.05,.62,3.0999999999999996),Sh(e,2,1),f.push(xh(e,.85));for(let e of[.15,.65]){let t=new Y(.305,.305,.04,14,1,!0);t.translate(-4.4/2-.05,O+e,3.0999999999999996),h.push(t)}}for(let e=0;e<3;e++)for(let t=0;t<5-e;t++)d.push(wh(1.1,2.75+(t-(4-e)/2)*.22,.11+e*.19,.95,.1,.8+b()*.3));{let e=new oi(1.5,.05,1.5);Sh(e,1.5,1.5),e.rotateZ(-.28),e.translate(2.95,1.62,.95),f.push(xh(e,.65));for(let e of[.3,1.6])d.push(Th(1.42,3.62,e,.06))}for(let e=0;e<16;e++){let t=.18+e*.26,n=new oi(.62-(e>9?.12:0),.24,.6-(e>9?.12:0));n.translate(2.56+(b()-.5)*.02,t,-.7+(b()-.5)*.02);let r=.55+b()*.35;m.push(xh(n,[.42*r,.4*r,.37*r]))}let ce=-4.4/2-1.9,F=-.4,le=2.6;for(let e=0;e<=5;e++){let t=e/5,n=[[-5.1+2*t,F-le/2],[-5.1+2*t,.9],[-5.1,F-le/2+le*t],[-3.0999999999999996,F-le/2+le*t]];for(let[e,t]of n)b()<.12||d.push(Th(.62+b()*.1,e,t,.03,.75))}d.push(Ch(2,ce,.48,F-le/2,.022,.7)),d.push(Ch(2,ce,.48,.9,.022,.7)),d.push(wh(le,-5.1,.48,F,.022,.7)),d.push(wh(le,-3.0999999999999996,.48,F,.022,.7));let ue=new Oh(b);for(let e=0;e<3;e++)for(let t=0;t<5;t++){if(b()<.12)continue;let n=-4.699999999999999+1.2/2*e+(b()-.5)*.1,r=-1.35+1.9000000000000001/4*t+(b()-.5)*.1;e===1?ue.lettuce(n,0,r,.8+b()*.3):ue.cabbage(n,0,r,.85+b()*.35)}for(let e=0;e<4;e++)ue.sunflower(-4.85+e*.5,0,-1.5000000000000002,1.2+b()*.4);for(let e=0;e<6;e++)ue.grassTuft(ce+(b()-.5)*2,0,.75-b()*.2,.6+b()*.4);for(let e=0;e<0;e++){let t=hh+e*C,n=t+C*.5;for(let e of[-1,1])for(let r of[-1,1]){let i=new Y(hh*.97,hh*.97,.012,10);i.rotateZ(Math.PI/2),i.translate(e*2.4560000000000004,t,ph/2*r),p.push(xh(i,[.2,.13,.075]));let a=new Y(hh*.45,hh*.45,.014,8);if(a.rotateZ(Math.PI/2),a.translate(e*2.4570000000000003,t,ph/2*r),p.push(xh(a,[.1,.065,.035])),n<2.55){let t=new Y(hh*.97,hh*.97,.012,10);t.rotateX(Math.PI/2),t.translate(fh/2*e,n,r*1.956),p.push(xh(t,[.19,.125,.07]))}}}let de=(e,t)=>{let n=.12+b()*.07,r=new wa(n,0);r.scale(1.3,.7,1),r.rotateY(b()*Math.PI),r.translate(e,n*.35,t);let i=.06+b()*.05;m.push(xh(r,[i*.95,i*.93,i*.88]))};for(let e=-4.4/2-.15;e<=2.35;e+=.27)de(e,-3.4/2-.08);for(let e=-3.4/2;e<=1.8;e+=.27)de(-4.4/2-.1,e),de(2.3000000000000003,e);for(let e of[-1,1]){{for(let t=-4.4/2-.42;t<2.6500000000000004;t+=.11){let n=new oi(.05,.025,E+.04);n.rotateX(e*D),n.translate(t,2.9860294117647057,e*w/2);let r=b()<.18?.35:0;v.push(xh(n,[.55+r*.6,.6-r*.1,.6-r*.35]))}let t=new oi(5.300000000000001,.02,E+.04);t.rotateX(e*D),t.translate(0,2.9710294117647056,e*w/2),v.push(xh(t,[.42,.46,.46]))}for(let t=.08;t<E-.05&&0;t+=.19){let n=e*t*Math.cos(D),r=3.65-t*Math.sin(D),i=-4.4/2-.45;for(;i<2.6500000000000004;){let a=Math.min(.14+b()*.16,2.6500000000000004-i),o=new oi(a-.012,.022,.27);Sh(o,.5,.4),o.rotateX(e*(D+.07)),o.translate(i+a/2,r+.005,n+e*.1*Math.cos(D));let s=.5+b()*.22-t*.03;f.push(xh(o,[s,s*.95,s*.9])),i+=a}}for(let t of[-4.4/2-.46,2.66]){let n=new oi(.05,.16,E+.05);Sh(n,.3,2),n.rotateX(e*D),n.translate(t,2.9260294117647057,e*w/2),p.push(xh(n,S))}}for(let e of[-1,1]){let t=e*2.29;for(let n of[-.55,.55])p.push($(.035,.66,.32,t,1.45,.45+n,[.07,.12,.11])),p.push($(.04,.05,.3,t+e*.004,1.63,.45+n,[.05,.085,.08])),p.push($(.04,.05,.3,t+e*.004,1.27,.45+n,[.05,.085,.08]));f.push($(.16,.14,.74,t+e*.06,1.08,.45,S));for(let n=0;n<6;n++){let r=.45-.3+n*.12+(b()-.5)*.04;ue.flowerTuft(t+e*.06,1.15,r,n%3)}}ue.flush(y);let fe=(e,t,n=!0)=>{if(e.length===0)return;for(let t of e)t.getAttribute(`color`)||xh(t,1),t.getAttribute(`uv`)||t.setAttribute(`uv`,new q(new Float32Array(t.getAttribute(`position`).count*2),2));let r=new J(hu(e.map(e=>e.index?e.toNonIndexed():e)),t);r.castShadow=n,r.receiveShadow=!0,this.cabin.add(r)},pe=1.9,me=5.2,he=-.5;{let e=new Ua({map:bh([`WORKSHOP`],512,150,{bg:`#3b2a1c`,ink:`#dccaa6`,font:`700 62px Georgia, serif`})}),t=new Ua({color:`#3b2a1c`}),n=new J(new oi(1.3,.38,.05),[t,t,t,t,e,e]);n.position.set(pe,1.35,me),n.rotation.y=he,n.castShadow=!0,this.cabin.add(n);for(let e of[-.55,.55]){let t=new Y(.05,.055,1.55,7);t.translate(e,.775,0),t.applyMatrix4(new Mt().makeRotationY(he)),t.translate(pe,0,me),d.push(xh(t,.8))}}fe(d,r),fe(f,i),fe(p,a),fe(m,o),fe(h,s),fe(g,c),fe(_,l,!1),fe(v,new Ha({vertexColors:!0,roughness:.5,metalness:.55,envMap:n,envMapIntensity:.5})),fe(y,new Ua({vertexColors:!0,side:2}));{let e=new Ua({map:bh([`E.’s Workshop`],512,112,{bg:`#2f2216`,ink:`#e8cf9a`,font:`italic 700 58px Georgia, serif`})}),t=new Ua({color:`#2f2216`}),n=new J(new oi(1.5,.3,.04),[t,t,t,t,e,e]);n.position.set(0,2.3800000000000003,3.67),n.rotation.x=-.12,n.castShadow=!0,this.cabin.add(n)}for(let[e,r]of[[0,2],[1,4],[2,6]]){let i=nf(t,n,Df(r)).group;i.position.set(fh/2-.2-e*.3,.24,1.74+.12),i.rotation.set(-.22,-.3+e*.3,.05),i.traverse(e=>e.castShadow=!0),this.cabin.add(i)}for(let e of[-.95,.95]){let t=rf(n).group;t.position.set(e,1.6800000000000002,3.52),this.cabin.add(t);let r=new J(new oi(.015,.18,.015),s);r.position.set(e,2.0500000000000003,3.52),this.cabin.add(r)}this.cabin.position.copy(cf.position),this.cabin.rotation.y=Math.PI/2,this.cabin.updateMatrixWorld(!0),this.group.add(this.cabin);let ge=(e,t,n)=>new U(e,t,n).applyMatrix4(this.cabin.matrixWorld);this.counterLook.copy(ge(0,1.2,1.9)),this.desk.copy(ge(ae,0,2.55)),this.deskLook.copy(ge(ae,1.02,oe)),this.smokeFrom.copy(ge(2.56,4.35,-.7));let _e=new cr;_e.setAttribute(`position`,new q(new Float32Array(42),3)),this.smoke=new $r(_e,new Jr({map:Eh(),color:`#d6d2cc`,size:.8,transparent:!0,opacity:.13,depthWrite:!1})),this.smoke.frustumCulled=!1;for(let e=0;e<Dh;e++)this.smokeAge[e]=e/Dh;this.group.add(this.smoke),this.group.add(this.buildTrack(i,a,s,e));let ve=new Mt().makeRotationY(Math.PI/2),ye=(t,n,r,i,a,o=-1)=>{let s=new U(t,0,r).applyMatrix4(ve),c=new U(n,0,i).applyMatrix4(ve);e.add({kind:`box`,minX:cf.position.x+Math.min(s.x,c.x),maxX:cf.position.x+Math.max(s.x,c.x),minY:o,maxY:a,minZ:cf.position.z+Math.min(s.z,c.z),maxZ:cf.position.z+Math.max(s.z,c.z),enabled:!0})};ye(-4.4/2-.3,2.5,-3.4/2-.3,2,mh);let be=.2,xe=e=>3.65-e/w*T;for(let e=0;e<w;e+=be){let t=xe(e+be/2),n=Math.max(t-.45,2.1);ye(-4.4/2-.45,2.6500000000000004,e,Math.min(w,e+be),t,n),ye(-4.4/2-.45,2.6500000000000004,-Math.min(w,e+be),-e,t,n)}for(let e=0;e<k;e+=be){let t=2.42+-.23999999999999977*((e+be/2)/k)+.12;ye(-4.4/2-.45,2.6500000000000004,ph/2+e,ph/2+Math.min(k,e+be),t,t-.14)}ye(-4.4/2-.35,2.5500000000000003,2,3.75,O),ye(gh.x0-.25,gh.x1+.25,2,2.2,1.05);for(let e of M)ye(e-.1,e+.1,3.4699999999999998,3.67,2.3);for(let[e,t]of ne)ye(e,t,3.52,3.6199999999999997,.97);ye(-2.37,-1.33,1.95,2.55,1.02),ye(fh/2-.55,2.6500000000000004,2.55,3.3499999999999996,1.02),ye(-4.4/2-.35,-4.4/2+.25,2.8,3.4,1.02),ye(2.5,2.92,-1.05,-.35,4.3),ye(2.25,3.7,.35,1.6,.62),ye(2.8000000000000003,3.5,ph/2-.65,2.6,.9),ye(-5.1-.05,-3.05,F-le/2-.05,.9+.05,.7);for(let t of[-.55,.55]){let n=ge(pe+t*Math.cos(he),0,me-t*Math.sin(he));e.add({kind:`cylinder`,x:n.x,z:n.z,radius:.07,minY:-1,maxY:1.6,enabled:!0})}}buildTrack(e,t,n,r){let i=new G,a=[],o=vu(12),s=lf.slice(0,3);for(let e=0;e<s.length-1;e++){let[t,n]=s[e],[r,i]=s[e+1],c=Math.hypot(r-t,i-n),l=Math.atan2(r-t,i-n);for(let e=.4;e<c-.2;e+=.62){if(o()<.15)continue;let s=e/c,u=t+(r-t)*s,d=n+(i-n)*s,f=new oi(.72,.035,.24);Sh(f,1,.4),f.rotateY(l+Math.PI/2+(o()-.5)*.18),f.translate(u+(o()-.5)*.06,Rf(u,d)+.015,d),a.push(xh(f,.62+o()*.2))}}let c=new J(hu(a.map(e=>e.toNonIndexed())),e);c.receiveShadow=!0,i.add(c);let l=new G,u=new Y(.42,.3,.3,4,1,!0);u.rotateY(Math.PI/4),u.scale(1.2,1,.8),l.add(new J(xh(u,[.36,.38,.34]),t));let d=new oi(.5,.03,.34);d.translate(0,-.15,0),l.add(new J(xh(d,[.3,.3,.28]),t));let f=new Aa(.28,8,6);f.scale(1.3,.35,.95),f.translate(0,.1,0),l.add(new J(xh(f,[.3,.21,.14]),t));let p=new J(new Y(.17,.17,.06,14),n);p.rotation.x=Math.PI/2,p.position.set(.6,-.12,0),l.add(p);for(let e of[-.18,.18]){let r=new J(xh(new Y(.02,.02,1.2,6),[.45,.33,.22]),t);r.rotation.z=Math.PI/2-.12,r.position.set(.05,-.06,e),l.add(r);let i=new J(new oi(.03,.3,.03),n);i.position.set(-.3,-.3,e),l.add(i)}l.traverse(e=>{e.castShadow=!0,e.receiveShadow=!0});let m={x:-6.3,z:-3.1};return l.position.set(m.x,Rf(m.x,m.z)+.42,m.z),l.rotation.y=.7,i.add(l),r.add({kind:`cylinder`,x:m.x,z:m.z,radius:.55,minY:-1,maxY:.8,enabled:!0}),i}update(e){let t=this.smoke.geometry.getAttribute(`position`);for(let n=0;n<Dh;n++){let r=this.smokeAge[n]+e/7;r>1&&--r,this.smokeAge[n]=r,t.setXYZ(n,this.smokeFrom.x+r*1.6+Math.sin(r*6+n)*.15,this.smokeFrom.y+r*4.5,this.smokeFrom.z-r*.8+Math.cos(r*5+n)*.15)}t.needsUpdate=!0}},Ah=12;function jh(e){let t=vu(e),n=[],r=5+Math.floor(t()*2);for(let i=0;i<r;i++){let r=new wa(.45+t()*.3,0);r.deleteAttribute(`normal`),r.deleteAttribute(`uv`),r=_u(r);let a=t()*Math.PI*2,o=i===0?0:.35+t()*.35;r.translate(Math.cos(a)*o,.35+t()*.35,Math.sin(a)*o);let s=r.getAttribute(`position`);for(let t=0;t<s.count;t++){let n=bu(Math.round(s.getX(t)*50),Math.round(s.getY(t)*50),Math.round(s.getZ(t)*50),e)-.5;s.setXYZ(t,s.getX(t)*(1+n*.3),Math.max(0,s.getY(t)*(1+n*.25)),s.getZ(t)*(1+n*.3))}n.push(r)}let i=hu(n.map(e=>e.toNonIndexed())),a=i.getAttribute(`position`),o=new Float32Array(a.count*3);for(let t=0;t<a.count;t++){let n=Math.min(1,a.getY(t)/1.1),r=.75+bu(t,3,1,e)*.35;o[t*3]=Xu(.1+.1*n)*r,o[t*3+1]=Xu(.17+.16*n)*r,o[t*3+2]=Xu(.07+.06*n)*r}return i.setAttribute(`color`,new q(o,3)),i.computeVertexNormals(),i}var Mh=class{group=new G;constructor(e){let t=vu(909),n=jh(17),r=new Ua({vertexColors:!0,flatShading:!0}),i=Array.from({length:Ah},()=>[]);for(let n=0;n<520;n++){let r=n/520*Math.PI*2+(t()-.5)*.01,a=Math.cos(r),o=Math.sin(r),s=If(a*50,o*50),c=2+ +(t()<.5);for(let n=0;n<c;n++){let r=s+3.4+n*1.3+(t()-.5)*.8,c=a*r,l=o*r,u=.9+t()*.8;i[Math.floor((Math.atan2(l,c)+Math.PI)/(Math.PI*2)*Ah)%Ah].push({x:c,z:l,s:u,rot:t()*Math.PI*2}),n===0&&e.add({kind:`cylinder`,x:c,z:l,radius:.75*u,minY:-5,maxY:100,enabled:!0})}}let a=new on,o=new K;for(let e of i){let i=new Ur(n,r,e.length);e.forEach((e,n)=>{a.position.set(e.x,Rf(e.x,e.z)-.1,e.z),a.rotation.set(0,e.rot,0),a.scale.set(e.s,e.s*(.8+t()*.4),e.s),a.updateMatrix(),i.setMatrixAt(n,a.matrix);let r=.85+t()*.3;o.setRGB(r,r*(.95+t()*.1),r*.9),i.setColorAt(n,o)}),i.receiveShadow=!0,i.computeBoundingSphere(),i.name=`thicket`,this.group.add(i)}}};function Nh(){let e=[],t=[],n=[];for(let r=0;r<8;r++){let i=r/8*Math.PI*2+r%2*.2,a=.55+r%3*.12,o=Math.cos(i),s=Math.sin(i),c=e.length/3;for(let n=0;n<=4;n++){let r=n/4,i=r*a,c=Math.sin(r*Math.PI*.8)*.42*a+.03,l=.14*Math.sin(Math.min(1,r*1.6+.15)*Math.PI)*(1-r*.4);e.push(o*i-s*l,c,s*i+o*l,o*i+s*l,c,s*i-o*l);let u=.75+r*.4,d=[Xu(.3*u),Xu(.47*u),Xu(.17*u)];t.push(...d,...d)}for(let e=0;e<4;e++){let t=c+e*2;n.push(t,t+1,t+2,t+1,t+3,t+2)}}let r=new cr;r.setAttribute(`position`,new q(new Float32Array(e),3)),r.setAttribute(`color`,new q(new Float32Array(t),3));let i=new Float32Array(e.length);for(let e=1;e<i.length;e+=3)i[e]=1;return r.setAttribute(`normal`,new q(i,3)),r.setIndex(n),r}var Ph=class{group=new G;constructor(e){let t=vu(515),n=Nh(),r=new Ua({vertexColors:!0,side:2});r.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
normal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);`)},r.customProgramCacheKey=()=>`fern-v1`;let i=new Ur(n,r,420),a=new on,o=new K,s=0;for(let e=0;e<1680&&s<420;e++){let e=t()*Math.PI*2,n=If(Math.cos(e)*50,Math.sin(e)*50)-1+t()*9,r=Math.cos(e)*n,c=Math.sin(e)*n;a.position.set(r,Rf(r,c)-.02,c),a.rotation.set(0,t()*Math.PI*2,0),a.scale.setScalar(.8+t()*.7),a.updateMatrix(),i.setMatrixAt(s,a.matrix);let l=.8+t()*.35;i.setColorAt(s,o.setRGB(l,l,l*.9)),s++}i.count=s,i.receiveShadow=!0,i.name=`ferns`,i.computeBoundingSphere(),this.group.add(i);let c=[];for(let n=0;n<7;n++){let r=n/7*Math.PI*2+t()*.5,i=If(Math.cos(r)*50,Math.sin(r)*50)+1.5+t()*3,a=Math.cos(r)*i,o=Math.sin(r)*i,s=2.2+t()*2.2,l=.16+t()*.1,u=new Y(l*.9,l,s,9,1),d=u.getAttribute(`position`),f=new Float32Array(d.count*3);for(let e=0;e<d.count;e++){let t=+(d.getX(e)>l*.3);f[e*3]=Xu(t?.26:.3),f[e*3+1]=Xu(t?.34:.22),f[e*3+2]=Xu(t?.14:.15)}u.setAttribute(`color`,new q(f,3)),u.rotateZ(Math.PI/2);let p=r+Math.PI/2+(t()-.5)*.8;u.rotateY(p),u.translate(a,Rf(a,o)+l*.7,o);let m=u.toNonIndexed();c.push(m),e.addHeightField(new Zm(m,null,.08))}let l=new J(hu(c),new Ua({vertexColors:!0,flatShading:!0}));l.castShadow=!0,l.receiveShadow=!0,l.name=`fallen-logs`,this.group.add(l)}},Fh=54,Ih=28,Lh=256,Rh=22;function zh(){let t=1024,n=document.createElement(`canvas`);n.width=t,n.height=256;let r=n.getContext(`2d`),i=vu(606),a=(e,n,i,a,o)=>{for(let s of[-1024,0,t]){r.fillStyle=o,r.beginPath(),r.moveTo(e+s,n-i);for(let t=1;t<=5;t++){let o=n-i+i*.92*t/5,c=a*t/5;r.lineTo(e+s+c,o),r.lineTo(e+s+c*.55,o-2)}for(let t=5;t>=1;t--){let o=n-i+i*.92*t/5,c=a*t/5;r.lineTo(e+s-c*.55,o-2),r.lineTo(e+s-c,o)}r.closePath(),r.fill()}};for(let[e,n,o]of[[.62,`#26332b`,70],[.75,`#1e2a22`,60],[.88,`#16211a`,55]]){for(let r=0;r<o;r++){let r=i()*t,o=256*(.35+i()*.3)*e;a(r,256*e+6,o,14+i()*14,n)}r.fillStyle=n,r.fillRect(0,256*e,t,256)}let o=new ni(n);return o.colorSpace=Le,o.wrapS=e,o.minFilter=c,o.anisotropy=4,o}var Bh=class{mesh;constructor(){let e=new Float32Array(1542),t=new Float32Array(1028);for(let n=0;n<=Lh;n++){let r=n/Lh*Math.PI*2,i=Math.cos(r),a=Math.sin(r),o=If(i*50,a*50)+Fh,s=i*o,c=a*o,l=Rf(s,c)-4;e.set([s,l,c,s,l+Ih,c],n*6);let u=n/Lh*Rh;t.set([u,0,u,1],n*4)}let n=[];for(let e=0;e<Lh;e++){let t=e*2;n.push(t,t+2,t+1,t+1,t+2,t+3)}let r=new cr;r.setAttribute(`position`,new q(e,3)),r.setAttribute(`uv`,new q(t,2)),r.setIndex(n),r.computeBoundingSphere();let i=zh();i.flipY=!0,this.mesh=new J(r,new br({map:i,alphaTest:.5,side:2})),this.mesh.name=`tree-line`}},Vh=90,Hh=10;function Uh(e,t,n,r,i){let a=e.getAttribute(`position`),o=new Float32Array(a.count*3);for(let e=0;e<a.count;e++){let s=Math.min(1,Math.max(0,(a.getY(e)-r)/(i-r)));o[e*3]=Xu(qu(t[0],n[0],s)),o[e*3+1]=Xu(qu(t[1],n[1],s)),o[e*3+2]=Xu(qu(t[2],n[2],s))}e.setAttribute(`color`,new q(o,3))}function Wh(e,t){let n=[],r=new Y(.1,.2,2.4,Math.max(5,t-2),1);r.translate(0,1.2,0),Uh(r,[.2,.14,.1],[.32,.23,.16],0,2.4),n.push(r);let i=4/e;for(let r=0;r<e;r++){let a=r/Math.max(1,e-1),o=qu(1.75,.65,a),s=qu(2.3,1.6,a)*(4/e)**.3,c=1.2+r*i,l=new ci(o,s,t,1,!0);l.translate(0,c+s/2,0);let u=l.getAttribute(`position`);for(let e=0;e<u.count;e++){let t=u.getX(e),n=u.getY(e),r=u.getZ(e);if(Math.hypot(t,r)>.05){let i=bu(Math.round(t*100),Math.round(n*100),Math.round(r*100),3)-.5;u.setX(e,t*(1+i*.22)),u.setZ(e,r*(1+i*.22)),n<c+.05&&u.setY(e,n-.14)}}Uh(l,[.1,.18,.09],[.19,.3,.14],c,c+s),n.push(l)}let a=hu(n.map(e=>e.toNonIndexed()));return a.computeVertexNormals(),a}var Gh=class{group=new G;instances=[];constructor(e,t){let n=vu(4242),r=Wh(4,8),i=Wh(3,6),a=new Ua({vertexColors:!0,flatShading:!0});this.instances.push({x:-17,z:-21,scale:1.3},{x:23,z:9,scale:1.4},{x:-26,z:17,scale:1.2});let o=(e,n,r,i)=>{if(!t(e,n)){for(let t of this.instances){let r=t.x-e,a=t.z-n;if(r*r+a*a<i*i)return}this.instances.push({x:e,z:n,scale:r})}};for(let e=0;e<16e3&&this.instances.length<1500;e++){let e=n()*Math.PI*2,t=Math.cos(e),r=Math.sin(e),i=If(t*50,r*50),a=i+.5+n()**1.35*48;o(t*a,r*a,.85+n()*.75,a<i+6?2.3:a<i+24?2.8:3.3)}for(let e=0;e<8e3&&this.instances.length<1100;e++){let e=n()*Math.PI*2,t=85+n()*190,r=Math.cos(e)*t,i=Math.sin(e)*t;wu(r*.018+3,i*.018-8,3,0,99)<.55+n()*.1||o(r,i,.8+n()*.8,4)}let s=new Map;for(let e of this.instances){let t=Math.hypot(e.x,e.z),n=Math.floor((Math.atan2(e.z,e.x)+Math.PI)/(Math.PI*2)*Hh)%Hh,r=`${t<Vh?`near`:`far`}-${n}`,i=s.get(r);i||s.set(r,i=[]),i.push(e)}let c=new on,l=new K;for(let[t,o]of s){let s=t.startsWith(`near`),u=new Ur(s?r:i,a,o.length);u.name=`trees-${t}`,o.forEach((t,r)=>{c.position.set(t.x,Rf(t.x,t.z)-.15,t.z),c.rotation.set((n()-.5)*.05,n()*Math.PI*2,(n()-.5)*.05),c.scale.set(t.scale,t.scale*(.9+n()*.35),t.scale),c.updateMatrix(),u.setMatrixAt(r,c.matrix);let i=Math.hypot(t.x,t.z),a=If(t.x,t.z),o=(.82+n()*.3)*(1-.38*Math.min(1,Math.max(0,(i-a-6)/36)));l.setRGB(o*(.95+n()*.1),o,o*(.9+n()*.15)),u.setColorAt(r,l),Math.hypot(t.x,t.z)<60&&e.add({kind:`cylinder`,x:t.x,z:t.z,radius:.22*t.scale,minY:-5,maxY:100,enabled:!0})}),u.castShadow=s,u.receiveShadow=s,u.instanceMatrix.needsUpdate=!0,u.computeBoundingSphere(),this.group.add(u)}}},Kh=class{scene=new hn;collision=new zm;sky;sun;environment;digSite;grass;shop;lanterns;buried;atmosphere;preset;lightRight=new U;lightUp=new U;shadowCenter=new U;tmp=new U;renderer;shadowKey=``;shadowDirty=!0;constructor(e,t,n){this.preset=n,this.renderer=e.renderer,e.renderer.shadowMap.autoUpdate=!1;let r=this.scene;this.sky=new Im(n.cloudOctaves),r.add(this.sky.mesh),this.environment=this.sky.createEnvironment(e.renderer),r.fog=new mn(af.horizonColor.getHex(),af.fogDensity),r.add(new po(af.hemiSky,af.hemiGround,af.hemiIntensity)),this.sun=new Ao(af.sunColor,af.sunIntensity),this.sun.castShadow=!0,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=220,r.add(this.sun,this.sun.target);let i=af.sunDirection;this.lightRight.set(0,1,0).cross(i).normalize(),this.lightUp.copy(i).cross(this.lightRight).normalize(),r.add(new ah(t.grass,t.dirt).group),this.digSite=new Am(sf,t.dirt,t.grass),this.collision.setDeformable(this.digSite),r.add(this.digSite.group);let a=new $m(this.collision);a.meshes.forEach(e=>r.add(e));let o=new Gh(this.collision,(e,t)=>{if(Math.hypot(e-cf.position.x,t-cf.position.z)<cf.clearing+2||Vf(e,t)<2.5)return!0;for(let n of a.footprints)if(Math.hypot(e-n.x,t-n.z)<n.radius+1.2)return!0;return!1});r.add(o.group);let s=o.instances.filter(e=>Math.hypot(e.x,e.z)<45);this.grass=new Xm((e,t)=>{let n=this.digSite.contains(e,t)?Ju(.5,.1,zf(e,t)):1,r=e-cf.position.x,i=t-cf.position.z;if(Math.abs(r)<2.6&&Math.abs(i)<3.6)return 0;n*=Ju(.5,1.4,Vf(e,t))*.85+.15,n*=Ju(2.2,4.5,Math.hypot(e-cf.counter.x,t-cf.counter.z))*.8+.2;for(let r of a.footprints){let i=Math.hypot(e-r.x,t-r.z);if(i<r.radius*.75)return 0;i<r.radius*1.25&&(n*=1.5)}for(let n of s)if(Math.abs(e-n.x)<.45&&Math.abs(t-n.z)<.45)return 0;return n}),r.add(this.grass.group),this.shop=new kh(this.collision,t.wood,this.environment),r.add(this.shop.group),r.add(new Mh(this.collision).group),r.add(new Bh().mesh),r.add(new Ph(this.collision).group),this.lanterns=new dh(r,this.environment),this.buried=new fm(this.digSite.volume,this.environment,20260928),r.add(this.buried.group),this.digSite.onCarve=(e,t)=>{this.grass.clearAround(e.x,e.z,t),this.buried.onCarve(e,t*1.4)},this.digSite.onRestore=()=>this.grass.restoreAll(),this.atmosphere=new Hm(160),r.add(this.atmosphere.points),this.applyQuality(n)}applyQuality(e){this.preset=e;let t=this.sun.shadow;t.mapSize.x!==e.shadowMapSize&&(t.mapSize.set(e.shadowMapSize,e.shadowMapSize),t.map?.dispose(),t.map=null),this.shadowDirty=!0,t.radius=e.shadowRadius;let n=e.shadowExtent,r=t.camera;r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.updateProjectionMatrix(),this.sky.setCloudOctaves(e.cloudOctaves),this.grass.setDistances(e.grassFull,e.grassFar),this.atmosphere.setCount(e.motes)}update(e,t,n,r,i){this.sky.update(t,n.position),this.grass.update(t,r,n.position),this.digSite.update(e),this.buried.update(e),this.shop.update(e),this.lanterns.update(e,n.position,(e,t,n)=>this.floorBelow(e,t,n)),this.lanterns.consumeChanged()&&(this.shadowDirty=!0),this.atmosphere.update(t,n.position,i),this.updateShadowCamera(n)}floorBelow(e,t,n){if(this.digSite.contains(e,t)){let r=this.digSite.surfaceBelow(e,t,n);return Number.isFinite(r)?r:n}return Rf(e,t)}updateShadowCamera(e){let t=this.preset.shadowExtent;e.getWorldDirection(this.tmp),this.tmp.y=0,this.tmp.normalize(),this.shadowCenter.copy(e.position).addScaledVector(this.tmp,t*.3),this.shadowCenter.y=Math.min(0,Math.round(e.position.y/4)*4);let n=2*t/this.preset.shadowMapSize,r=n*Math.round(3/n),i=af.sunDirection,a=Math.round(this.shadowCenter.dot(this.lightRight)/r)*r,o=Math.round(this.shadowCenter.dot(this.lightUp)/r)*r,s=`${a.toFixed(3)},${o.toFixed(3)},${t},${this.preset.shadowMapSize}`;s!==this.shadowKey&&(this.shadowKey=s,this.shadowDirty=!0),this.renderer.shadowMap.needsUpdate=this.shadowDirty,this.shadowDirty=!1;let c=this.shadowCenter.dot(i);this.shadowCenter.copy(this.lightRight).multiplyScalar(a).addScaledVector(this.lightUp,o).addScaledVector(i,c),this.sun.target.position.copy(this.shadowCenter),this.sun.position.copy(this.shadowCenter).addScaledVector(i,100),this.sun.target.updateMatrixWorld()}},qh=class{target;down=new Set;pressed=new Set;buttons=[!1,!1,!1];buttonsPressed=[!1,!1,!1];dx=0;dy=0;wheel=0;delta={x:0,y:0};locked=!1;onLockChange=null;captureKeys=!1;allowUnlocked=!1;constructor(e){this.target=e,window.addEventListener(`keydown`,this.handleKeyDown),window.addEventListener(`keyup`,this.handleKeyUp),window.addEventListener(`blur`,this.releaseAll),document.addEventListener(`mousedown`,this.handleMouseDown),document.addEventListener(`mouseup`,this.handleMouseUp),document.addEventListener(`mousemove`,this.handleMouseMove),document.addEventListener(`pointerlockchange`,this.handleLockChange),document.addEventListener(`wheel`,this.handleWheel,{passive:!0}),e.addEventListener(`contextmenu`,e=>e.preventDefault())}async requestLock(){let e=this.target;try{return await e.requestPointerLock({unadjustedMovement:!0}),!0}catch{try{return await e.requestPointerLock(),!0}catch{return!1}}}exitLock(){document.pointerLockElement&&document.exitPointerLock()}isDown(e){return this.down.has(e)}wasPressed(e){return this.pressed.has(e)}isMouseDown(e){return this.buttons[e]}wasMousePressed(e){return this.buttonsPressed[e]}consumeMouseDelta(){return this.delta.x=this.dx,this.delta.y=this.dy,this.dx=0,this.dy=0,this.delta}consumeWheel(){let e=this.wheel;return this.wheel=0,e}endFrame(){this.pressed.clear(),this.buttonsPressed[0]=this.buttonsPressed[1]=this.buttonsPressed[2]=!1}releaseAll=()=>{this.down.clear(),this.buttons[0]=this.buttons[1]=this.buttons[2]=!1,this.dx=this.dy=0};handleKeyDown=e=>{this.captureKeys&&(e.code===`Space`||e.code.startsWith(`Arrow`)||e.code===`Tab`)&&e.preventDefault(),!e.repeat&&(this.down.add(e.code),this.pressed.add(e.code))};handleKeyUp=e=>{this.down.delete(e.code)};handleMouseDown=e=>{e.button>2||(this.locked||this.allowUnlocked)&&(this.buttons[e.button]=!0,this.buttonsPressed[e.button]=!0)};handleMouseUp=e=>{e.button>2||(this.buttons[e.button]=!1)};handleMouseMove=e=>{(this.locked||this.allowUnlocked)&&(Math.abs(e.movementX)>400||Math.abs(e.movementY)>400||(this.dx+=e.movementX,this.dy+=e.movementY))};handleWheel=e=>{(this.locked||this.allowUnlocked)&&(this.wheel+=Math.sign(e.deltaY))};handleLockChange=()=>{this.locked=document.pointerLockElement===this.target,this.locked||this.releaseAll(),this.onLockChange?.(this.locked)}},Jh={low:{maxPixelRatio:1,minRenderScale:.6,fxaa:!1,anisotropy:1,shadowMapSize:1024,shadowExtent:18,shadowRadius:1.5,grassFull:5,grassFar:16,cloudOctaves:2,motes:40},medium:{maxPixelRatio:1,minRenderScale:.7,fxaa:!0,anisotropy:2,shadowMapSize:2048,shadowExtent:22,shadowRadius:2,grassFull:8,grassFar:24,cloudOctaves:3,motes:80},high:{maxPixelRatio:1.5,minRenderScale:.7,fxaa:!0,anisotropy:4,shadowMapSize:2048,shadowExtent:24,shadowRadius:2.5,grassFull:11,grassFar:32,cloudOctaves:3,motes:120}},Yh=`mining-game.settings.v2`;function Xh(){let e={sensitivity:1,quality:`high`,volume:0,music:!1,musicVolume:0,tips:!0,qualityLockUntil:0};try{let t=localStorage.getItem(Yh);if(!t)return e;let n=JSON.parse(t);return{sensitivity:typeof n.sensitivity==`number`?n.sensitivity:e.sensitivity,quality:n.quality&&n.quality in Jh?n.quality:e.quality,volume:typeof n.volume==`number`?n.volume:e.volume,music:typeof n.music==`boolean`?n.music:e.music,musicVolume:typeof n.musicVolume==`number`?n.musicVolume:e.musicVolume,tips:typeof n.tips==`boolean`?n.tips:e.tips,qualityLockUntil:typeof n.qualityLockUntil==`number`?n.qualityLockUntil:0}}catch{return e}}function Zh(e){try{localStorage.setItem(Yh,JSON.stringify(e))}catch{}}var Qh=.0019,$h=1/120,eg=36e5,tg=`dig-a-hole.switched`,ng=12,rg=class{settings=Xh();state=`loading`;container;graphics;input;audio=new pu;hud;screens;world;player;rig;viewmodel;effects;mining;progress;gameplay;shopPanel;journal;stats;icons;save=new vp;time=0;lastFrame=0;accumulator=0;needsRender=!0;settleFrames=0;renderPos=new U;intent={forward:0,right:0,jumpPressed:!1,jumpHeld:!1,sprint:!1};mouseDX=0;mouseDY=0;groundMaps=[];resetting=!1;constructor(e){this.container=e,this.graphics=new Gu(e,Jh[this.settings.quality]),this.input=new qh(this.graphics.canvas),this.hud=new jf(e),this.screens=new Jp(e,this.settings),this.screens.show(`loading`),this.audio.setVolume(this.settings.volume),this.audio.setMusic(this.settings.music,this.settings.musicVolume)}async init(){let e=this.screens;e.setLoading(.05,`Preparing the ground`),await Qu();let t=fd({dirtSize:this.settings.quality===`low`?512:1024,dirtSeed:1337}),n=this.graphics.measureRefresh(),r=id(),i=ad(r.map,r.size,{srgb:!0});e.setLoading(.2,`Mixing the soil`);let[{dirt:a,grass:o}]=await Promise.all([t,n]);this.groundMaps=[a.map,o.map],this.applyTextureQuality(Jh[this.settings.quality].anisotropy),e.setLoading(.6,`Burying the treasure`),await Qu(),this.world=new Kh(this.graphics,{grass:o,dirt:a,wood:i},Jh[this.settings.quality]),this.progress=new ip(this.save.loadProgress()),this.stats=new Sp(this.save.loadStats());let s=await this.save.loadDig();s&&this.world.digSite.importBlocks(s.blocks,s.depth),this.world.buried.restoreState(new Set(this.progress.data.collected)),e.setLoading(.88,`Building the workshop`),await Qu(),this.player=new wp(this.world.collision);let c=this.progress.data.player;c?this.player.spawn(new U(c.x,c.y+.05,c.z),c.yaw,c.pitch):this.player.spawn(uf.spawn,uf.spawnYaw,uf.spawnPitch),this.rig=new Dp(1),this.rig.reset(this.player.position.y),this.rig.onFootstep=e=>this.audio.playFootstep(e),this.viewmodel=new vf(i,this.world.environment,Df(this.progress.data.pickaxe.equipped)),this.effects=new Vu(this.world.scene,a,this.groundDistance()),this.effects.onImpact=e=>this.audio.playDebrisTick(e),this.mining=new xf(this.rig.camera,this.world.digSite,this.world.buried,this.effects,this.audio,this.rig,this.viewmodel,this.hud),this.icons=new jp(this.graphics.renderer,i,this.world.environment),this.gameplay=new np(this.progress,this.stats,this.save,this.world,this.hud,this.viewmodel,this.mining,this.player,this.audio,this.effects,this.icons),this.shopPanel=new em(this.container,this.progress,this.gameplay,this.icons,this.hud),this.journal=new Fp(this.container,this.progress,this.icons,this.hud),this.gameplay.onOpenShop=()=>this.openShop(),this.gameplay.onCloseShop=()=>this.closeShop(),this.gameplay.onOpenJournal=(e,t)=>this.openJournal(e,t),this.journal.onClose=()=>this.closeJournal(),this.journal.onFile=e=>this.gameplay.fileFind(e),this.addPauseButtons(),this.bindEvents(),this.resize(),this.rig.update(0,this.player,this.player.position),this.warmUp(),e.setLoading(1,`Ready`),this.showTitle(),window.matchMedia(`(pointer: coarse)`).matches&&!window.matchMedia(`(any-pointer: fine)`).matches&&this.screens.setMenuHint(`Dig A Hole is played with a keyboard and mouse — please open it on a computer.`);let localAutoEnterAfterSlot=!1;try{localAutoEnterAfterSlot=sessionStorage.getItem(tg)==="1",localAutoEnterAfterSlot&&sessionStorage.removeItem(tg)}catch{}localAutoEnterAfterSlot&&this.requestPlay();requestAnimationFrame(this.frame)}groundDistance(){let e=this.world.digSite;return(t,n,r,i)=>{if(e.contains(t,r)&&n<e.volume.max.y){let a=e.sample(t,n,r);return a<.12?e.volume.gradient(t,n,r,i):i.set(0,1,0),a}return i.set(0,1,0),n-Rf(t,r)}}bindEvents(){window.addEventListener(`resize`,()=>this.resize()),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&!this.resetting&&this.gameplay.flush()}),window.addEventListener(`pagehide`,()=>{this.resetting||this.gameplay.flush()}),this.screens.onPlay=()=>this.requestPlay(),this.screens.onSettingsChange=e=>this.applySettings(e),this.screens.onNewGame=e=>void this.switchGame(()=>this.save.newGame(e)),this.screens.onLoadSlot=e=>void this.switchGame(()=>this.save.select(e)),this.screens.onRenameSlot=(e,t)=>{this.save.rename(e,t),this.showTitle()},this.screens.onToTitle=()=>{this.gameplay.flush(),this.showTitle()},this.gameplay.onFinish=()=>this.finish(),this.screens.onEndingDone=()=>{this.screens.show(`pause`),this.requestPlay()},this.input.onLockChange=e=>{e?this.enterPlaying():this.state===`playing`&&this.pause()}}showTitle(){this.state=`menu`;let e=this.screens.active===`menu`;this.screens.setSlots(this.save.slots(),this.save.active,this.save.nextName()),this.screens.setWorldName(this.save.activeName),e||this.screens.show(`menu`),this.hud.setVisible(!1)}async switchGame(e){if(!this.resetting){this.resetting=!0,await this.gameplay.flush(),e();try{sessionStorage.setItem(tg,`1`)}catch{}location.reload()}}finish(){this.gameplay.flush(),this.state=`paused`,this.input.exitLock(),this.input.captureKeys=!1,this.input.releaseAll(),this.hud.setVisible(!1),this.audio.playNewLevel();let e=this.progress.data,t=Math.round(this.stats.data.time.active/60);this.screens.showEnding(Rd,[[`deep`,`300 m`],[`finds filed`,`${e.filed.length} / ${Kf.length}`],[`pickaxe`,Df(e.pickaxe.equipped).name],[`played`,t>=60?`${Math.floor(t/60)} h ${t%60} min`:`${t} min`]]),this.needsRender=!0}async requestPlay(){if(this.audio.unlock(),!await this.input.requestLock()){this.input.allowUnlocked=!0;this.enterPlaying()}}enterPlaying(){this.state=`playing`,this.screens.show(`none`),this.screens.setPauseHint(``),this.hud.setVisible(!0),this.input.captureKeys=!0,this.audio.setPaused(!1),this.lastFrame=0,this.accumulator=0}addPauseButtons(){Op(),this.gameplay.tutorial.setEnabled(this.settings.tips)}openJournal(e,t=!1){this.state!==`journal`&&(this.stats.journalOpened(),this.gameplay.tutorial.event(`open-journal`),this.state=`journal`,this.screens.show(`none`),this.hud.setPrompt(null),this.hud.root.classList.add(`in-shop`),this.input.releaseAll(),this.input.exitLock(),this.journal.show(e,t))}closeJournal(){this.journal.hide(),this.hud.root.classList.remove(`in-shop`),this.returnToPlay()}openShop(){this.stats.shopVisit(),this.gameplay.tutorial.event(`open-shop`),this.state=`shop`,this.hud.setPrompt(null),this.hud.root.classList.add(`in-shop`),this.input.releaseAll(),this.input.exitLock(),this.shopPanel.show()}closeShop(){this.shopPanel.hide(),this.hud.root.classList.remove(`in-shop`),this.returnToPlay()}returnToPlay(){this.enterPlaying(),!(this.input.allowUnlocked||this.input.locked)&&this.input.requestLock().then(e=>{e||this.state!==`playing`||this.input.locked||(this.pause(),this.screens.setPauseHint(`Click Resume to continue.`))})}pause(){this.gameplay.flush(),this.gameplay.tutorial.event(`pause`),this.state=`paused`,this.screens.show(`pause`),this.hud.setVisible(!1),this.input.captureKeys=!1,this.input.releaseAll(),this.audio.setPaused(!0),this.needsRender=!0}applySettings(e,t=!1){let n=e.quality!==this.settings.quality,r=n&&!t?Date.now()+eg:this.settings.qualityLockUntil;if(e={...e,qualityLockUntil:r},this.settings=e,Zh(e),this.audio.setVolume(e.volume),this.audio.setMusic(e.music,e.musicVolume),this.gameplay.tutorial.setEnabled(e.tips),n){let t=Jh[e.quality];this.graphics.applyPreset(t),this.world.applyQuality(t),this.applyTextureQuality(t.anisotropy),this.resize(),this.settleFrames=12}this.needsRender=!0}lowerQualityIfSlow(){let e=this.settings.quality;if(e===`low`||this.graphics.strugglingSeconds<6||Date.now()<this.settings.qualityLockUntil)return;let t=e===`high`?`medium`:`low`;this.applySettings({...this.settings,quality:t},!0),this.screens.setQuality(t),this.hud.toast(`<span>Graphics set to <b>${t===`medium`?`Medium`:`Low`}</b> so the game runs smoothly. You can change it in Settings.</span>`,`info`,5e3)}applyTextureQuality(e){let t=Math.min(e,this.graphics.maxAnisotropy);for(let e of this.groundMaps)e.anisotropy!==t&&(e.anisotropy=t,e.needsUpdate=!0)}resize(){let e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.rig&&this.graphics.resize(e,t,this.rig.camera),this.needsRender=!0}warmUp(){let e=new K(1,1,1),t={x:0,y:-30,z:0,vx:0,vy:0,vz:0,size:.05,life:.01,color:e,spin:0};this.effects.clods.spawn(t),this.effects.crumbs.spawn(t),this.effects.dust.spawn({x:0,y:-30,z:0,vx:0,vy:0,vz:0,size:.1,growth:0,life:.01,alpha:0,color:e}),this.effects.update(.001,800),this.world.update(0,0,this.rig.camera,this.player.position,800);let n=this.graphics.renderer;n.compile(this.world.scene,this.rig.camera),n.compile(this.viewmodel.scene,this.rig.camera),this.viewmodel.update(0,this.rig.camera,this.viewmodelState()),this.graphics.render(this.world.scene,this.rig.camera,this.viewmodel.scene)}frame=e=>{requestAnimationFrame(this.frame);let t=this.lastFrame?e-this.lastFrame:1e3/60;this.lastFrame=e;let n=Math.min(t/1e3,.1);if(this.state===`shop`||this.state===`journal`){let e=this.state===`shop`;e&&(this.input.wasPressed(`KeyE`)||this.input.wasPressed(`Escape`))?this.closeShop():!e&&(this.input.wasPressed(`KeyE`)||this.input.wasPressed(`KeyJ`)||this.input.wasPressed(`Escape`))&&this.closeJournal(),this.time+=n,this.gameplay.tickStats(n,null,0,!1,e?`shop`:`journal`),this.rig.update(n,this.player,this.player.position),this.updateWorld(n),this.graphics.render(this.world.scene,this.rig.camera,this.viewmodel.scene),this.input.endFrame();return}if(this.state===`paused`){this.input.wasPressed(`KeyP`)&&this.screens.active===`pause`&&this.requestPlay(),this.settleFrames>0?(this.settleFrames--,this.updateWorld(0),this.graphics.render(this.world.scene,this.rig.camera,this.viewmodel.scene),this.needsRender=!1):this.needsRender&&=(this.graphics.render(this.world.scene,this.rig.camera,this.viewmodel.scene),!1),this.input.endFrame();return}this.time+=n,this.state===`playing`?(this.updatePlaying(n),this.graphics.trackFrame(t,n),this.lowerQualityIfSlow(),this.stats.frame(t,this.graphics.stats.refreshMs,this.gameplay.area(),this.graphics.stats.renderScale)):this.rig.update(n,this.player,this.player.position),this.updateWorld(n),this.graphics.render(this.world.scene,this.rig.camera,this.state===`playing`?this.viewmodel.scene:void 0),this.input.endFrame()};updatePlaying(e){let t=this.input;if(t.wasPressed(`Escape`)||t.wasPressed(`KeyP`)){this.input.exitLock(),this.pause();return}let n=t.consumeMouseDelta();this.mouseDX=n.x,this.mouseDY=n.y;let r=Qh*this.settings.sensitivity;this.player.look(n.x*r,n.y*r);let i=this.intent;i.forward=(t.isDown(`KeyW`)||t.isDown(`ArrowUp`)?1:0)-(t.isDown(`KeyS`)||t.isDown(`ArrowDown`)?1:0),i.right=(t.isDown(`KeyD`)||t.isDown(`ArrowRight`)?1:0)-(t.isDown(`KeyA`)||t.isDown(`ArrowLeft`)?1:0),i.jumpPressed=i.jumpPressed||t.wasPressed(`Space`),i.jumpHeld=t.isDown(`Space`),i.sprint=t.isDown(`ShiftLeft`)||t.isDown(`ShiftRight`),this.accumulator+=e;let a=0;for(;this.accumulator>=$h&&a<ng;)this.player.fixedUpdate($h,i),i.jumpPressed=!1,this.player.jumpedThisStep&&(this.rig.onJumped(),this.audio.playJump()),this.player.landedImpact>2&&(this.rig.onLanded(this.player.landedImpact),this.viewmodel.onLanded(this.player.landedImpact),this.audio.playLand(this.player.landedImpact)),this.accumulator-=$h,a++;a===ng&&(this.accumulator=0);let o=this.accumulator/$h;this.renderPos.lerpVectors(this.player.previous,this.player.position,o),this.rig.update(e,this.player,this.renderPos),this.mining.update(e,t.isMouseDown(0),t.wasMousePressed(0)),this.viewmodel.update(e,this.rig.camera,this.viewmodelState()),this.gameplay.update(e,t,this.rig.camera)}updateWorld(e){let t=this.graphics.pointScale(this.rig.camera);this.effects.update(e,t),this.world.digSite.consumeChanged()&&(this.world.shadowDirty=!0),this.world.update(e,this.time,this.rig.camera,this.player.position,t)}viewmodelState(){return{swing:this.mining.swing,hitstop:this.mining.hitstop,bobPhase:this.rig.bobPhase,bobAmount:this.rig.bobAmount,sprintAmount:this.rig.sprintAmount,mouseDX:this.mouseDX,mouseDY:this.mouseDY}}},ig=document.getElementById(`app`);if(!ig)throw Error(`#app missing`);function ag(e){document.getElementById(`boot`)?.remove(),ig.insertAdjacentHTML(`beforeend`,`<div class="fatal"><h1>Can't start</h1><p>${e}</p></div>`)}document.createElement(`canvas`).getContext(`webgl2`)?(()=>{let e=new rg(ig);window.__digAHoleGame=e;e.init().then(()=>{window.dispatchEvent(new Event(`dig-a-hole-ready`))}).catch(e=>{console.error(e),ag(`Something went wrong while loading. Please reload the page.`)})})():ag(`This game needs WebGL 2. Please update your browser or enable hardware acceleration.`);export{nd as a,Ju as c,Ou as d,Au as f,td as i,ju as l,$u as n,Ku as o,vu as p,ed as r,qu as s,rd as t,ku as u};