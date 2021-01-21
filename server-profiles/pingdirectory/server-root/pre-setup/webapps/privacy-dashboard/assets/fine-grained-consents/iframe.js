(function(e,t,i){var n=0,a={},s={identity:null,initializeCallback:i.Deferred(),sendMessage:function(t){e.parent.postMessage(JSON.stringify(t),"*")},saveConsentDetails:function(e){this.sendMessage({action:"set:details",data:e,identity:this.identity})},getJSON:function(e,t){var s=++n,r=a[s]=i.Deferred()
return this.sendMessage({action:"xhr:json",data:{xhrId:s,url:e,queryParams:t},identity:this.identity}),r},resize:function(){var e=t.getElementById("consent-container")
e.parentElement&&(e=e.parentElement)
var i=e.getBoundingClientRect()
this.sendMessage({action:"set:dimensions",data:i,identity:this.identity})},receiveMessage:function(e){var t=JSON.parse(e.data)
if("set:details"==t.action){var n=t.data;(void 0===n||i.isPlainObject(n)||i.isArray(n))&&this.initializeCallback.resolve(n)}else if("get:dimensions"==t.action)this.resize()
else if("xhr:json"===t.action){var s=t.data,r=s.xhrId,d=s.data,o=s.status,l=s.error,c=a[r]
c?(delete a[r],200===o?c.resolve(d,o):c.reject(l,o)):console.warn("Unmatched XMLHttpRequest")}},onInitialize:function(e){this.initializeCallback.then(e)}}
if(e.App=s,e.location.hash)for(var r=e.location.hash.substring(1).split("&"),d=0;d<r.length;d++){var o=r[d].split("=")
if("iframe"===o[0]){s.identity=o[1]
break}}if(null===s.identity)throw"Error parsing identity from iframe URL"
e.addEventListener("message",function(e){s.receiveMessage(e)}),t.addEventListener("DOMContentLoaded",function(){s.sendMessage({action:"ready",identity:s.identity})})
var l=null
e.addEventListener("resize",function(e){var i=t.getElementById("consent-container")
i.parentElement&&(i=i.parentElement)
var n=i.scrollHeight,a=n-(l||0)
Math.abs(a)>5&&(l=n,s.resize())})})(window,document,window.$)
