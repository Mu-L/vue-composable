(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{341:function(e,o,t){},420:function(e,o,t){"use strict";var r=t(341);t.n(r).a},437:function(e,o,t){"use strict";t.r(o);var r=t(103),n=t(316),s=Object(r.d)({name:"css-variables-example",setup:function(){var e=Object(r.o)(null),o=Object(n.l)({foreground:{name:"color-foreground",value:"red"}},e),t=(o.supported,o.stop),s=o.resume;return{textDiv:e,observing:o.observing,stop:t,resume:s,foreground:o.foreground}}}),u=(t(420),t(27)),i=Object(u.a)(s,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("div",[e._m(0),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.foreground,expression:"foreground"}],attrs:{type:"text",id:"foreground-value"},domProps:{value:e.foreground},on:{input:function(o){o.target.composing||(e.foreground=o.target.value)}}})]),e._v(" "),t("div",{ref:"textDiv",staticClass:"text",staticStyle:{color:"var(--color-foreground)"}},[e.observing?t("span",[e._v("I am a text with the following color:")]):t("span",[e._v("My color will be updated but not my label:")]),e._v("\n    "+e._s(e.foreground)+"\n  ")]),e._v(" "),t("div",[t("button",{attrs:{type:"button",disabled:!e.observing},on:{click:e.stop}},[e._v("\n      Stop observing\n    ")]),e._v(" "),t("button",{attrs:{type:"button",disabled:e.observing},on:{click:e.resume}},[e._v("\n      Resume observing\n    ")])])])}),[function(){var e=this.$createElement,o=this._self._c||e;return o("label",{attrs:{for:"foreground-value"}},[this._v("\n      Override the value for\n      "),o("code",[this._v("--color-foreground")]),this._v(":\n    ")])}],!1,null,"409de5be",null);o.default=i.exports}}]);