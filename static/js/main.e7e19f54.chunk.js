(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),r=a.n(c),i=(a(15),a(9)),s=a(1),u=a(6),l=a(7),p={url:/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm,name:/^[a-zA-Z\u0430-\u044f\u0451\u0410-\u042f\u0401 ]*$/},m={baseUrl:"https://mesto.nomoreparties.co/v1/cohort-13",headers:{authorization:"2cf602a9-f630-4a8e-9437-bb139a960cac","Content-Type":"application/json"}},d=new(function(){function e(t){var a=this;Object(u.a)(this,e),this.removeCard=function(e){return fetch("".concat(a._options.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:a._options.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))},this.changeLikeCardStatus=function(e,t){return t?fetch("".concat(a._options.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:a._options.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})):fetch("".concat(a._options.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:a._options.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))},this._options=t}return Object(l.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._options.baseUrl,"/users/me"),{headers:this._options.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._options.baseUrl,"/users/me"),{method:"PATCH",headers:this._options.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._options.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._options.headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._options.baseUrl,"/cards"),{headers:this._options.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setCard",value:function(e){return fetch("".concat(this._options.baseUrl,"/cards"),{method:"POST",headers:this._options.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())(m),_=a(8),f=a.n(_);var h=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:f.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \xab\u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f\xbb",className:"header__logo"}))},b=o.a.createContext();var v=function(e){var t=e.card,a=e.onCardClick,c=e.onCardLike,r=e.onCardDelete,i=Object(n.useContext)(b),s=t.owner._id===i._id,u="trash-button ".concat(s?"trash-button_active":"trash-button_inactive"),l=t.likes.some((function(e){return e._id===i._id})),p="like-button ".concat(l?"like-button_active":"like-button_inactive");return o.a.createElement("li",{className:"cards__element"},o.a.createElement("img",{alt:t.name,className:"cards__image",src:t.link,onClick:function(){a({link:t.link,name:t.name})}}),o.a.createElement("button",{type:"button",className:u,onClick:function(){r(t)}}),o.a.createElement("div",{className:"cards__row"},o.a.createElement("h3",{className:"cards__title"},t.name),o.a.createElement("div",{className:"cards__column"},o.a.createElement("button",{type:"button",className:p,onClick:function(){c(t)}}),o.a.createElement("span",{className:"like-button__amount"},t.likes.length))))};var E=function(e){var t=e.cards,a=e.onEditProfile,c=e.onAddPlace,r=e.onEditAvatar,i=e.onCardClick,s=e.onCardLike,u=e.onCardDelete,l=Object(n.useContext)(b);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar"},o.a.createElement("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",src:l.avatar,className:"profile__image"}),o.a.createElement("button",{type:"button",className:"profile__edit-avatar",onClick:r},o.a.createElement("svg",{className:"profile__edit-avatar_icon",width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M26 3.45351L6.76981 22.7932L3.33585 19.2903L22.517 0L26 3.45351ZM0 26L5.10189 24.4706L1.52075 21.0171L0 26Z",fill:"white"})))),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__row"},o.a.createElement("h1",{className:"profile__title"},l.name),o.a.createElement("button",{type:"button",className:"edit-button",onClick:a},o.a.createElement("svg",{className:"edit-button__icon",width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M10 1.328L2.604 8.767 1.283 7.419 8.66 0 10 1.328zM0 10l1.962-.588L.585 8.083 0 10z",fill:"#fff"})))),o.a.createElement("p",{className:"profile__subtitle"},l.about)),o.a.createElement("button",{type:"button",className:"add-button",onClick:c},o.a.createElement("svg",{className:"add-button__icon",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M22 9.77778H12.2222V0H9.77778V9.77778H0V12.2222H9.77778V22H12.2222V12.2222H22V9.77778Z",fill:"white"})))),o.a.createElement("ul",{className:"cards list"},t.map((function(e){return o.a.createElement(v,{key:e._id,card:e,onCardClick:i,onCardLike:s,onCardDelete:u})}))))};var g=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var k=function(e){var t=e.title,a=e.name,n=e.isOpen,c=e.onClose,r=e.onSubmit,i=e.children;return o.a.createElement("section",{className:"popup popup_".concat(a," ").concat(n?"popup_opened":"")},o.a.createElement("form",{className:"popup__container popup__container_".concat(a),name:a,onSubmit:r,noValidate:!0},o.a.createElement("button",{type:"button",className:"popup__close-button",onClick:c}),o.a.createElement("h3",{className:"popup__title popup__title_".concat(a)},t),i))};var C=function(e){var t=e.isOpen,a=e.onClose,c=e.onUpdateUser,r=e.isLoading,i=Object(n.useState)(""),u=Object(s.a)(i,2),l=u[0],m=u[1],d=Object(n.useState)(""),_=Object(s.a)(d,2),f=_[0],h=_[1],v=Object(n.useState)({name:"",about:""}),E=Object(s.a)(v,2),g=E[0],C=E[1],N=Object(n.useContext)(b);function O(e){var t=e.target.value,a=g;m(t),t.length<2?a.name="\u0422\u0435\u043a\u0441\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 2 \u0441\u0438\u043c\u0432. \u0414\u043b\u0438\u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u0441\u0435\u0439\u0447\u0430\u0441: ".concat(t.length," \u0441\u0438\u043c\u0432."):p.name.test(t)?a.name="":a.name="\u0422\u0435\u043a\u0441\u0442 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u044b.",C(a)}function j(e){var t=e.target.value,a=g;h(t),t.length<2?a.about="\u0422\u0435\u043a\u0441\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 2 \u0441\u0438\u043c\u0432. \u0414\u043b\u0438\u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u0441\u0435\u0439\u0447\u0430\u0441: ".concat(t.length," \u0441\u0438\u043c\u0432."):a.about="",C(a)}return o.a.useEffect((function(){m(N.name),h(N.about),C({name:"",about:""})}),[N,t]),o.a.createElement(k,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),c({name:l,about:f})}},o.a.createElement("fieldset",{className:"popup__set"},o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",value:l||"",onChange:O,onFocus:O,autoComplete:"off",className:"popup__input popup__input_text_name",id:"name-input",name:"nameInput",minLength:"2",maxLength:"40",required:!0,pattern:"[A-Za-z\u0410-\u042f\u0401\u0430-\u044f\u0451 -]{1,}"}),o.a.createElement("span",{className:"popup__input-error popup__input-error_active",id:"name-input-error"},g.name)),o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",value:f||"",onChange:j,onFocus:j,autoComplete:"off",className:"popup__input popup__input_text_description",id:"description-input",name:"descriptionInput",minLength:"2",maxLength:"200",required:!0}),o.a.createElement("span",{className:"popup__input-error popup__input-error_active",id:"description-input-error"},g.about)),o.a.createElement("button",{type:"submit",className:"popup__save-button ".concat(g.name||g.about||l===N.name&&f===N.about?"popup__save-button_inactive":""),disabled:r||g.name||g.about||l===N.name&&f===N.about},r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))};var N=function(e){var t=e.isOpen,a=e.onClose,c=e.onUpdateAvatar,r=e.isLoading,i=Object(n.useRef)(""),u=Object(n.useState)(""),l=Object(s.a)(u,2),m=l[0],d=l[1];function _(e){var t=e.target.value,a=m;a=p.url.test(t)?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL.",d(a)}return o.a.useEffect((function(){i.current.value="",d("")}),[t]),o.a.createElement(k,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),c({avatar:i.current.value})}},o.a.createElement("fieldset",{className:"popup__set"},o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{ref:i,onChange:_,onFocus:_,type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off",className:"popup__input popup__input_text_link",id:"link-avatar-input",name:"avatarInput",required:!0}),o.a.createElement("span",{className:"popup__input-error popup__input-error_active",id:"link-avatar-input-error"},m)),o.a.createElement("button",{type:"submit",className:"popup__save-button ".concat(m||!i.current.value?"popup__save-button_inactive":""),disabled:r||m||!i.current.value},r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))};var O=function(e){var t=e.isOpen,a=e.onClose,c=e.onAddPlace,r=e.isLoading,i=Object(n.useState)(""),u=Object(s.a)(i,2),l=u[0],m=u[1],d=Object(n.useState)(""),_=Object(s.a)(d,2),f=_[0],h=_[1],b=Object(n.useState)({name:"",link:""}),v=Object(s.a)(b,2),E=v[0],g=v[1];function C(e){var t=e.target.value,a=E;h(t),t.length<1?a.name="\u0422\u0435\u043a\u0441\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 1 \u0441\u0438\u043c\u0432. \u0414\u043b\u0438\u043d\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u0441\u0435\u0439\u0447\u0430\u0441: ".concat(t.length," \u0441\u0438\u043c\u0432."):a.name="",g(a)}function N(e){var t=e.target.value,a=E;m(t),p.url.test(t)?a.link="":a.link="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL.",g(a)}return o.a.useEffect((function(){m(""),h(""),g({name:"",link:""})}),[t]),o.a.createElement(k,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),c({name:f,link:l})}},o.a.createElement("fieldset",{className:"popup__set"},o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:f||"",onChange:C,onFocus:C,autoComplete:"off",className:"popup__input popup__input_text_place",id:"place-input",name:"placeInput",minLength:"1",maxLength:"30",required:!0}),o.a.createElement("span",{className:"popup__input-error popup__input-error_active",id:"place-input-error"},E.name)),o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:l||"",onChange:N,onFocus:N,autoComplete:"off",className:"popup__input popup__input_text_link",id:"link-input",name:"linkInput",required:!0}),o.a.createElement("span",{className:"popup__input-error popup__input-error_active",id:"link-input-error"},E.link)),o.a.createElement("button",{type:"submit",className:"popup__save-button ".concat(E.name||E.link||!f||!l?"popup__save-button_inactive":""),disabled:r||E.name||E.link||!(f&&l)},r?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")))};var j=function(e){var t=e.isOpen,a=e.selectedCardLink,n=e.selectedCardName,c=e.onClose;return o.a.createElement("section",{className:"popup ".concat(t&&"popup_opened")},o.a.createElement("figure",{className:"popup__image-container"},o.a.createElement("img",{alt:n,src:a,className:"popup__image"}),o.a.createElement("figcaption",{className:"popup__caption"},n),o.a.createElement("button",{type:"button",className:"popup__close-button",onClick:c})))};var L=function(e){var t=e.isOpen,a=e.onClose,n=e.onConfirm,c=e.isLoading;return o.a.createElement(k,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"trash",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n()}},o.a.createElement("button",{type:"submit",className:"popup__save-button",disabled:c},c?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430"))};var y=function(){var e=o.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],c=o.a.useState(!1),r=Object(s.a)(c,2),u=r[0],l=r[1],p=o.a.useState(!1),m=Object(s.a)(p,2),_=m[0],f=m[1],v=o.a.useState(!1),k=Object(s.a)(v,2),y=k[0],S=k[1],w=o.a.useState(!1),U=Object(s.a)(w,2),x=U[0],P=U[1],A=o.a.useState([]),I=Object(s.a)(A,2),D=I[0],H=I[1],M=o.a.useState({link:"",name:""}),T=Object(s.a)(M,2),V=T[0],q=T[1],z=o.a.useState([]),F=Object(s.a)(z,2),J=F[0],Z=F[1],B=o.a.useState({}),R=Object(s.a)(B,2),$=R[0],G=R[1],K=o.a.useState(!1),Q=Object(s.a)(K,2),W=Q[0],X=Q[1];function Y(){n(!1),l(!1),f(!1),S(!1),P(!1),X(!1)}return o.a.useEffect((function(){d.getUserInfo().then((function(e){G(e)})).catch((function(e){console.log(e)}))}),[]),o.a.useEffect((function(){d.getInitialCards().then((function(e){H(e)})).catch((function(e){console.log(e)}))}),[]),o.a.useEffect((function(){function e(e){"Escape"===e.key&&Y()}function t(e){e.target.classList.contains("popup_opened")&&Y()}return document.addEventListener("click",t),document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e),document.removeEventListener("click",t)}}),[]),o.a.createElement(b.Provider,{value:$},o.a.createElement("div",{className:"page"},o.a.createElement(h,null),o.a.createElement(E,{cards:D,onEditProfile:function(){l(!0)},onAddPlace:function(){f(!0)},onEditAvatar:function(){n(!0)},onCardClick:function(e){S(!0),q({link:e.link,name:e.name})},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===$._id}));d.changeLikeCardStatus(e._id,t).then((function(t){var a=D.map((function(a){return a._id===e._id?t:a}));H(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){Z(e),P(!0)}}),o.a.createElement(N,{isOpen:a,onClose:Y,onUpdateAvatar:function(e){X(!0),d.setUserAvatar(e).then((function(e){G(e)})).then((function(){Y()})).catch((function(e){console.log(e)}))},isLoading:W}),o.a.createElement(C,{isOpen:u,onClose:Y,onUpdateUser:function(e){X(!0),d.setUserInfo(e).then((function(e){G(e)})).then((function(){Y()})).catch((function(e){console.log(e)}))},isLoading:W}),o.a.createElement(O,{isOpen:_,onClose:Y,onAddPlace:function(e){X(!0),d.setCard(e).then((function(e){H([e].concat(Object(i.a)(D)))})).then((function(){Y()})).catch((function(e){console.log(e)}))},isLoading:W}),o.a.createElement(j,{isOpen:y,selectedCardLink:V.link,selectedCardName:V.name,onClose:Y}),o.a.createElement(L,{isOpen:x,onClose:Y,onConfirm:function(){X(!0),d.removeCard(J._id).then((function(){var e=D.filter((function(e){return e._id!==J._id}));H(e)})).then((function(){Y()})).catch((function(e){console.log(e)}))},isLoading:W}),o.a.createElement(g,null)))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/mesto-logo.c6f11019.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.e7e19f54.chunk.js.map