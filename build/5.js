webpackJsonp([5],{1033:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=o(14),i=o.n(s),l=o(141),p=o.n(l),c=o(62),u=o.n(c),m=o(462),b=o(466),d=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),f=function(e){function t(e){n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleSubmit=function(e){e.preventDefault(),e.stopPropagation();var t=o.refs.accountName.value,n=o.refs.loginID.value,a=o.refs.password.value,r=o.refs.password2.value,s=o.state.rememberMe,i=o.state.loginAccount,l=void 0!==o.refs.form[1].files[0];return"import"===o.props.type&&l&&o.fileReader?(o.fileReader.readAsText(o.refs.form[1].files[0]),o.fileReader.onload=function(e){var l=JSON.parse(e.target.result);setTimeout(function(){return o.props.onSubmit(t,a,r,n,s,l,i,void 0)},300)}):setTimeout(function(){return o.props.onSubmit(t,a,r,n,s,void 0,i,void 0)},300),o.setState({msg:"",loginID:void 0,disableInputs:!1}),!1},o.handlePasswordInput=function(e){e.preventDefault(),e.stopPropagation();var t=o.refs.accountName.value,n=o.refs.loginID.value,a=o.refs.password.value,r=o.refs.password2.value,s=o.state.rememberMe;""!==a&&""!==r&&a.length===r.length&&setTimeout(function(){return o.props.onSubmit(t,a,r,n,s,void 0,void 0,function(e){o.setState({loginID:e.loginID,disableInputs:!0,loginAccount:e,submitDisabled:!1})})},300)},o.loginIDCopy=function(e){var t=o.refs.loginIDDisplay;try{t.select(),document.execCommand("copy")}catch(e){console.log(e)}},o.handleSubmit=o.handleSubmit.bind(o),o.handlePasswordInput=o.handlePasswordInput.bind(o),o.loginIDCopy=o.loginIDCopy.bind(o),new FileReader&&(o.fileReader=new FileReader),o.state={msg:o.props.msg,loginID:void 0,rememberMe:o.props.rememberMe,disableInputs:!1,loginAccount:{},submitDisabled:"register"===e.type},o}return r(t,e),d(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({msg:e.msg})}},{key:"render",value:function(){var e=this,t=this.props,o=this.state,n="login"!==t.type&&o.submitDisabled;return i.a.createElement("form",{ref:"form",className:t.className,onSubmit:this.handleSubmit,encType:"multipart/form-data",autoComplete:!0},i.a.createElement("h1",{className:"title"},t.title,t.topLinkText&&i.a.createElement(m.a,{className:"top-link",href:t.topLink.href,onClick:t.topLink.onClick},t.topLinkText)),t.instruction&&i.a.createElement("p",{className:u()("instruction")},t.instruction),o.msg&&i.a.createElement("span",{className:u()("msg",t.msgClass)},o.msg),i.a.createElement("input",{ref:"accountName",className:u()("auth-input",{displayNone:!t.isVisibleName}),type:"text",placeholder:"account name",maxLength:"30",autoFocus:"autofocus",disabled:o.disableInputs}),i.a.createElement("input",{name:"importAccount",className:u()("auth-input",{displayNone:!t.isVisibleFileInput}),type:"file",placeholder:"Import Account",autoFocus:"autofocus"}),t.loginID&&i.a.createElement("textarea",{ref:"loginIDDisplay",className:u()("loginID-generated"),readOnly:!0,value:t.loginID,onClick:this.loginIDCopy}),t.loginID&&i.a.createElement("button",{type:"button",className:u()("button submit-button"),onClick:this.loginIDCopy},"Copy Login ID"),i.a.createElement("input",{name:"username",id:"username",ref:"loginID",className:u()("auth-input",{displayNone:!t.isVisibleID}),type:"text",placeholder:"Login ID",autoFocus:"autofocus",autoComplete:!0,onChange:function(t){return e.setState({loginID:t})},required:t.isVisibleID}),i.a.createElement("input",{name:"password",id:"password",ref:"password",className:u()("auth-input",{displayNone:!t.isVisiblePassword}),type:"password",defaultValue:t.password,placeholder:t.passwordPlaceholder||"password (must be at least 6 characters in length)",maxLength:"256",required:t.isVisiblePassword,autoComplete:!0,disabled:o.disableInputs,onChange:this.handlePasswordInput}),i.a.createElement("input",{ref:"password2",className:u()("auth-input",{displayNone:!t.isVisiblePassword2}),type:"password",placeholder:t.password2Placeholder||"confirm password",maxLength:"256",required:t.isVisiblePassword2,disabled:o.disableInputs,onChange:this.handlePasswordInput}),i.a.createElement("div",{className:u()("instruction",{displayNone:!t.isVisibleRememberMe})},"Select “remember me” to save your account and login automatically next time. (this will only remember your account on this device.)"),i.a.createElement("div",{className:u()("bottom-container")},i.a.createElement(m.a,{className:u()("bottom-link",{displayNone:!t.bottomLink}),href:t.bottomLink.href,onClick:t.bottomLink.onClick},t.bottomLinkText),i.a.createElement(b.a,{className:u()({displayNone:!t.isVisibleRememberMe}),"data-tip":!0,"data-for":"remember-me-tooltip",text:"Remember Me",isChecked:o.rememberMe,onClick:function(){return e.setState({rememberMe:!o.rememberMe})}})),i.a.createElement("input",{className:u()("button","submit-button",t.submitButtonClass),type:"submit",value:t.submitButtonText,disabled:n}),i.a.createElement(m.a,{className:u()("airbitz-button airbitz-button-bottom"),onClick:t.airbitzLink.onClick},t.airbitzLinkText),i.a.createElement(m.a,{type:"button",className:"button x-button unstyled","data-tip":!0,"data-for":"close-link-tooltip",href:t.closeLink.href,onClick:t.closeLink.onClick},i.a.createElement("i",null,"")),i.a.createElement(p.a,{id:"remember-me-tooltip",type:"light",effect:"solid",place:"top"},i.a.createElement("span",{className:"tooltip-text"},"Click here to save your account information in your browser's local storage.")),i.a.createElement(p.a,{id:"close-link-tooltip",type:"light",effect:"solid",place:"top"},i.a.createElement("span",{className:"tooltip-text"},"Back to Markets Page")))}}]),t}(s.Component);f.propTypes={className:s.PropTypes.string,title:s.PropTypes.string,loginID:s.PropTypes.string,type:s.PropTypes.string,rememberMe:s.PropTypes.bool,passwordPlaceholder:s.PropTypes.string,password2Placeholder:s.PropTypes.string,instruction:s.PropTypes.string,isVisibleName:s.PropTypes.bool,isVisiblePassword:s.PropTypes.bool,isVisiblePassword2:s.PropTypes.bool,isVisibleID:s.PropTypes.bool,isVisibleFileInput:s.PropTypes.bool,isVisibleRememberMe:s.PropTypes.bool,msg:s.PropTypes.string,msgClass:s.PropTypes.string,topLinkText:s.PropTypes.string,topLink:s.PropTypes.object,botttomLinkText:s.PropTypes.string,botttomLink:s.PropTypes.object,closeLink:s.PropTypes.object,submitButtonText:s.PropTypes.string,submitButtonClass:s.PropTypes.string,onSubmit:s.PropTypes.func},f.defaultProps={rememberMe:!0},t.a=f},995:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=o(14),i=o.n(s),l=o(62),p=o.n(l),c=o(1033),u=o(462),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},b=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),b(t,[{key:"componentDidMount",value:function(){this.props.authForm.airbitzOnLoad.onLoad()}},{key:"render",value:function(){var e=this.props;return i.a.createElement("section",{id:"auth_view"},i.a.createElement("header",{className:"page-header"},i.a.createElement("span",{className:"big-line"},"Augur is a completely decentralized system")," including user accounts. Your credentials never leave the browser, and you are responsible for keeping them safe.",i.a.createElement("br",null),i.a.createElement("b",null,i.a.createElement("i",{className:"negative"},"It is impossible to recover your account if your credentials get lost!")),i.a.createElement("br",null),"Click ",i.a.createElement(u.a,{className:p()("airbitz-button"),onClick:e.authForm.airbitzLink.onClick},e.authForm.airbitzLinkText)," to create an encrypted and backed up account using a simple username and password."),i.a.createElement(c.a,m({className:"auth-form"},e.authForm)))}}]),t}(i.a.Component);d.propTypes={className:s.PropTypes.string,authForm:s.PropTypes.object},t.default=d}});