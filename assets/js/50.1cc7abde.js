(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{470:function(e,t,a){"use strict";a.r(t);var n=a(316),r=a(103),o={name:"storage-example",setup:function(){var e="__vue_storage_example",t=Object(r.o)(!1),a=Object(r.o)(!0),o=Object(n.R)(e,1),s=o.supported,c=o.storage,p=o.setSync,l=o.remove;return Object(r.s)(t,(function(e){!1===p(e)&&(a.value=!1)})),{key:e,supported:s,supportedSync:a,tabSync:t,storage:c,remove:l}}},s=a(27),c=Object(s.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n  storage: "+e._s(e.storage)+"\n  "),a("p",[e._v("\n    supported:\n    "),a("b",{class:{green:e.supported,red:!e.supported}},[e._v(e._s(e.supported))])]),e._v(" "),a("p",[a("b",[e._v("Check the value in the dev tools: `"+e._s(e.key)+"`")])]),e._v(" "),a("label",{attrs:{for:"storage"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.storage,expression:"storage"}],attrs:{name:"storage"},domProps:{value:e.storage},on:{input:function(t){t.target.composing||(e.storage=t.target.value)}}})]),e._v(" "),a("div",[a("p",[e._v("Sync supported: "+e._s(e.supportedSync))]),e._v(" "),a("p",[e._v("Enable tab sync? "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tabSync,expression:"tabSync"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.tabSync)?e._i(e.tabSync,null)>-1:e.tabSync},on:{change:function(t){var a=e.tabSync,n=t.target,r=!!n.checked;if(Array.isArray(a)){var o=e._i(a,null);n.checked?o<0&&(e.tabSync=a.concat([null])):o>-1&&(e.tabSync=a.slice(0,o).concat(a.slice(o+1)))}else e.tabSync=r}}})]),e._v(" "),e.tabSync?a("p",[e._v("\n      Now this tab is listening for changes, please change the storage value\n      in other tab\n    ")]):e._e()]),e._v(" "),a("div",[a("button",{on:{click:e.remove}},[e._v("Remove")])])])}),[],!1,null,null,null);t.default=c.exports}}]);