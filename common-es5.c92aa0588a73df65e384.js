!function(){function e(t,n){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,n)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=i(e);if(t){var c=i(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return n(this,r)}}function n(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8SCG":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("fXoL"),a=n("ofXK"),s=n("NFeN");function o(e,t){if(1&e&&(i.Nc(0,"div",6),i.Nc(1,"mat-icon"),i.yd(2,"attach_file"),i.Mc(),i.Nc(3,"a",7),i.yd(4),i.Mc(),i.Mc()),2&e){var n=t.$implicit;i.wc(3),i.dd("href",n.downloadUrl,i.qd),i.wc(1),i.Ad(" ",n.name," ")}}function u(e,t){if(1&e&&(i.Nc(0,"div"),i.Nc(1,"div",4),i.xd(2,o,5,2,"div",5),i.Mc(),i.Mc()),2&e){var n=i.Xc(2);i.wc(2),i.dd("ngForOf",n.valueAsArray)}}function d(e,t){if(1&e&&(i.Nc(0,"div",1),i.Nc(1,"div",2),i.yd(2),i.Mc(),i.xd(3,u,3,1,"div",3),i.Mc()),2&e){var n=i.Xc();i.wc(2),i.Ad(" ",n.label," "),i.wc(1),i.dd("ngIf",n.value&&n.value.length)}}var l=function(){var e=function(){function e(){r(this,e)}return c(e,[{key:"isEmpty",get:function(){return!this.valueAsArray.length}},{key:"valueAsArray",get:function(){var e=this.value;return e?Array.isArray(e)?e:[e]:[]}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Bc({type:e,selectors:[["app-view-item-files"]],inputs:{label:"label",value:"value"},decls:1,vars:1,consts:[["class","view-item",4,"ngIf"],[1,"view-item"],[1,"view-item--label"],[4,"ngIf"],[1,"view-item-file-list"],["class","view-item-file-list-item",4,"ngFor","ngForOf"],[1,"view-item-file-list-item"],["target","_blank","download","",1,"view-item-file-list-item-name",3,"href"]],template:function(e,t){1&e&&i.xd(0,d,4,2,"div",0),2&e&&i.dd("ngIf",!t.isEmpty)},directives:[a.k,a.j,s.a],encapsulation:2}),e}()},AKtp:function(n,i,a){"use strict";a.d(i,"a",(function(){return p}));var s=a("gfiE"),o=a("Yo9n"),u=a("3WK+"),d=a("9Lsv"),l=a("dCvk"),f=a("Vbab");function h(e){return Object(f.d)("tenant.fields."+e)}var v={id:new u.a("id",h("id")),name:new d.a("name",h("name"),{required:!0,max:50}),tenantName:new d.a("name",h("tenantName"),{required:!0,max:50}),url:new d.a("url",h("url"),{required:!0,max:50}),tenantUrl:new d.a("url",h("tenantUrl"),{required:!0,max:50}),plan:new d.a("plan",h("plan")),tenantId:new u.a("id",h("tenantId")),createdAt:new s.a("createdAt",h("createdAt")),updatedAt:new s.a("updatedAt",h("updatedAt")),createdAtRange:new o.a("createdAtRange",h("createdAtRange"))},p=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(a,n);var i=t(a);function a(){return r(this,a),i.apply(this,arguments)}return c(a,null,[{key:"fields",get:function(){return v}}]),a}(l.a)},Ddwb:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var i=n("qXBG"),a=n("fXoL"),s=n("ofXK"),o=n("tyNb"),u=function(e){return[e]};function d(e,t){if(1&e&&(a.Nc(0,"a",3),a.yd(1),a.Mc()),2&e){var n=a.Xc().$implicit,i=a.Xc(2);a.dd("routerLink",a.hd(2,u,i.urlWithId(n))),a.wc(1),a.zd(i.display(n))}}function l(e,t){if(1&e&&(a.Nc(0,"span"),a.yd(1),a.Mc()),2&e){var n=a.Xc().$implicit,i=a.Xc(2);a.wc(1),a.zd(i.display(n))}}function f(e,t){if(1&e&&(a.Nc(0,"div"),a.xd(1,d,2,4,"a",2),a.xd(2,l,2,1,"span",0),a.Mc()),2&e){var n=a.Xc(2);a.wc(1),a.dd("ngIf",n.hasPermissionToRead),a.wc(1),a.dd("ngIf",!n.hasPermissionToRead)}}function h(e,t){if(1&e&&(a.Nc(0,"div"),a.xd(1,f,3,2,"div",1),a.Mc()),2&e){var n=a.Xc();a.wc(1),a.dd("ngForOf",n.value)}}var v=function(){var e=function(){function e(t){r(this,e),this.authService=t}return c(e,[{key:"urlWithId",value:function(e){return"".concat(this.url,"/").concat(e.id)}},{key:"display",value:function(e){return e.label}},{key:"hasPermissionToRead",get:function(){return this.authService.hasPermission(this.permission)}},{key:"isEmpty",get:function(){return!this.value||!this.value.length}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Hc(i.a))},e.\u0275cmp=a.Bc({type:e,selectors:[["app-table-item-relation-to-many"]],inputs:{value:"value",url:"url",permission:"permission"},decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["class","app-link",3,"routerLink",4,"ngIf"],[1,"app-link",3,"routerLink"]],template:function(e,t){1&e&&a.xd(0,h,2,1,"div",0),2&e&&a.dd("ngIf",!t.isEmpty)},directives:[s.k,s.j,o.e],encapsulation:2}),e}()},E99N:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n("qXBG"),a=n("fXoL"),s=n("ofXK"),o=n("tyNb"),u=function(e){return[e]};function d(e,t){if(1&e&&(a.Nc(0,"a",5),a.yd(1),a.Mc()),2&e){var n=a.Xc(2);a.dd("routerLink",a.hd(2,u,n.urlWithId)),a.wc(1),a.zd(n.display)}}function l(e,t){if(1&e&&(a.Nc(0,"span"),a.yd(1),a.Mc()),2&e){var n=a.Xc(2);a.wc(1),a.zd(n.display)}}function f(e,t){if(1&e&&(a.Nc(0,"div",1),a.Nc(1,"div",2),a.yd(2),a.Mc(),a.xd(3,d,2,4,"a",3),a.xd(4,l,2,1,"span",4),a.Mc()),2&e){var n=a.Xc();a.wc(2),a.Ad(" ",n.label," "),a.wc(1),a.dd("ngIf",n.hasPermissionToRead),a.wc(1),a.dd("ngIf",!n.hasPermissionToRead)}}var h=function(){var e=function(){function e(t){r(this,e),this.authService=t}return c(e,[{key:"hasPermissionToRead",get:function(){return this.authService.hasPermission(this.permission)}},{key:"isEmpty",get:function(){return!this.value||!this.value.id}},{key:"urlWithId",get:function(){return"".concat(this.url,"/").concat(this.value.id)}},{key:"display",get:function(){return this.value.label}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Hc(i.a))},e.\u0275cmp=a.Bc({type:e,selectors:[["app-view-item-relation-to-one"]],inputs:{label:"label",value:"value",url:"url",permission:"permission"},decls:1,vars:1,consts:[["class","view-item",4,"ngIf"],[1,"view-item"],[1,"view-item--label"],["class","app-link",3,"routerLink",4,"ngIf"],[4,"ngIf"],[1,"app-link",3,"routerLink"]],template:function(e,t){1&e&&a.xd(0,f,5,3,"div",0),2&e&&a.dd("ngIf",!t.isEmpty)},directives:[s.k,o.e],encapsulation:2}),e}()},ER6R:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n("mrSG"),a=n("anNb"),s=n("qXBG"),o=n("QmLB"),u=n("zkTT"),d=n("ZSv9"),l=n("Vbab"),f=n("St/f"),h=n("fXoL"),v=n("tyNb"),p=function(){var e=function(){function e(t,n,i,a,c){r(this,e),this.authService=t,this.errorService=n,this.tenantListService=i,this.snackbar=a,this.router=c,this.loading=!1,this.warningMessage=null}return c(e,[{key:"invitationToken",value:function(e){var t=this.authService.currentUser;if(!t||!t.tenants)return!1;var n=t.tenants.find((function(t){return t.tenant.id===e.id&&"invited"===t.status}));return n?n.invitationToken:null}},{key:"doAcceptFromAuth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!this.loading){n.next=3;break}return n.abrupt("return");case 3:if(this.authService.isSignedIn){n.next=5;break}return n.abrupt("return",(a.a.set(e),void this.router.navigate(["/auth/signup"])));case 5:return this.warningMessage=null,this.loading=!0,n.next=8,d.a.acceptInvitation(e,t);case 8:return i=n.sent,n.next=11,this.authService.doSelectTenant(i);case 11:this.warningMessage=null,this.loading=!1,n.next=22;break;case 15:if(n.prev=15,n.t0=n.catch(0),404!==this.errorService.errorCode(n.t0)){n.next=19;break}return n.abrupt("return",(this.warningMessage=null,this.loading=!1,void this.router.navigate([""])));case 19:if(400!==this.errorService.errorCode(n.t0)){n.next=21;break}return n.abrupt("return",(this.warningMessage=this.errorService.selectMessage(n.t0),void(this.loading=!1)));case 21:this.errorService.handle(n.t0),this.warningMessage=null,this.loading=!1,this.router.navigate([""]);case 22:case"end":return n.stop()}}),n,this,[[0,15]])})))}},{key:"doAccept",value:function(e){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,d.a.acceptInvitation(e);case 4:return n=t.sent,t.next=7,this.authService.doSelectTenant(n);case 7:this.loading=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.errorService.handle(t.t0),this.loading=!1;case 13:case"end":return t.stop()}}),t,this,[[0,10]])})))}},{key:"doDecline",value:function(e){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,d.a.declineInvitation(e);case 4:return t.next=6,this.tenantListService.doFetch(this.tenantListService.filter);case 6:return t.next=8,this.authService.doRefreshCurrentUser();case 8:this.snackbar.success(Object(l.d)("tenant.invitation.declined")),this.loading=!1,this.router.navigate(["/tenant"]),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),this.errorService.handle(t.t0),this.loading=!1;case 16:case"end":return t.stop()}}),t,this,[[0,13]])})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(h.Rc(s.a),h.Rc(o.a),h.Rc(f.a),h.Rc(u.a),h.Rc(v.b))},e.\u0275prov=h.Dc({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},"St/f":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("mrSG"),a=n("ZSv9"),s=n("QmLB"),o=n("0EQZ"),u=n("fXoL"),d=function(){var e=function(){function e(t){r(this,e),this.errorService=t,this.rows=[],this.count=0,this.loading=!1,this.filter={},this._pagination={},this.sorter={},this.selectedKeys=new o.c(!0,[]),this.unlimited=!1}return c(e,[{key:"doResetSelectedKeys",value:function(){this.selectedKeys=new o.c(!0,[])}},{key:"doReset",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.rows=[],this.count=0,this.loading=!1,this.filter={},this._pagination={},this.sorter={},this.doResetSelectedKeys(),this.doFetch()));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"doChangePagination",value:function(e){this._pagination=e,this.doFetch(this.filter,!0)}},{key:"doChangeSort",value:function(e){this.sorter=e?{columnKey:e.active,order:e.direction}:{},this.doFetch(this.filter,!0)}},{key:"doFetch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,this.loading=!0,this.rows=[],this.count=0,t||(this._pagination={}),this.filter=e||{},this.doResetSelectedKeys(),n.next=4,a.a.list(e,this.orderBy,this.limit,this.offset);case 4:i=n.sent,this.rows=i.rows,this.count=i.count,this.loading=!1,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),this.errorService.handle(n.t0),this.loading=!1,this.rows=[],this.count=0;case 11:case"end":return n.stop()}}),n,this,[[0,8]])})))}},{key:"hasRows",get:function(){return this.count>0}},{key:"orderBy",get:function(){var e=this.sorter;return e&&e.columnKey?"".concat(e.columnKey,"_").concat("desc"===e.order?"DESC":"ASC"):null}},{key:"limit",get:function(){if(this.unlimited)return 0;var e=this._pagination;return e&&e.pageSize?e.pageSize:10}},{key:"offset",get:function(){if(this.unlimited)return 0;var e=this._pagination;return e&&e.pageSize?e.pageIndex*e.pageSize:0}},{key:"pagination",get:function(){return!this.unlimited&&Object.assign(Object.assign({},this._pagination),{total:this.count,showSizeChanger:!0})}},{key:"paginationPageSize",get:function(){return this._pagination&&this._pagination.pageSize?this._pagination.pageSize:10}},{key:"paginationPageIndex",get:function(){return this._pagination&&this._pagination.pageIndex?this._pagination.pageIndex:0}},{key:"selectedRows",get:function(){var e=this;return this.rows.filter((function(t){return e.selectedKeys.isSelected(t.id)}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Rc(s.a))},e.\u0275prov=u.Dc({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},XG4R:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("fXoL"),a=n("ofXK");function s(e,t){if(1&e&&(i.Nc(0,"div",5),i.Nc(1,"div",6),i.Nc(2,"a",7),i.Ic(3,"img",8),i.Mc(),i.Mc(),i.Mc()),2&e){var n=t.$implicit;i.wc(2),i.dd("href",n.downloadUrl,i.qd),i.wc(1),i.dd("src",n.downloadUrl,i.qd)("alt",n.name)}}function o(e,t){if(1&e&&(i.Nc(0,"div",1),i.Nc(1,"div",2),i.yd(2),i.Mc(),i.Nc(3,"div",3),i.xd(4,s,4,3,"div",4),i.Mc(),i.Mc()),2&e){var n=i.Xc();i.wc(2),i.Ad(" ",n.label," "),i.wc(2),i.dd("ngForOf",n.valueAsArray)}}var u=function(){var e=function(){function e(){r(this,e)}return c(e,[{key:"isEmpty",get:function(){return!this.valueAsArray.length}},{key:"valueAsArray",get:function(){var e=this.value;return e?Array.isArray(e)?e:[e]:[]}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Bc({type:e,selectors:[["app-view-item-images"]],inputs:{label:"label",value:"value"},decls:1,vars:1,consts:[["class","view-item",4,"ngIf"],[1,"view-item"],[1,"view-item--label"],[1,"row"],["class","col-xs-6",4,"ngFor","ngForOf"],[1,"col-xs-6"],[1,"view-item-image-container"],["target","_blank",3,"href"],[1,"view-item-image",3,"src","alt"]],template:function(e,t){1&e&&i.xd(0,o,5,2,"div",0),2&e&&i.dd("ngIf",!t.isEmpty)},directives:[a.k,a.j],encapsulation:2}),e}()},YGpq:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var i=n("qXBG"),a=n("fXoL"),s=n("ofXK"),o=n("tyNb"),u=function(e){return[e]};function d(e,t){if(1&e&&(a.Nc(0,"a",6),a.yd(1),a.Mc()),2&e){var n=a.Xc().$implicit,i=a.Xc(2);a.dd("routerLink",a.hd(2,u,i.urlWithId(n))),a.wc(1),a.zd(i.display(n))}}function l(e,t){if(1&e&&(a.Nc(0,"span"),a.yd(1),a.Mc()),2&e){var n=a.Xc().$implicit,i=a.Xc(2);a.wc(1),a.zd(i.display(n))}}function f(e,t){if(1&e&&(a.Nc(0,"div"),a.xd(1,d,2,4,"a",4),a.xd(2,l,2,1,"span",5),a.Mc()),2&e){var n=a.Xc(2);a.wc(1),a.dd("ngIf",n.hasPermissionToRead),a.wc(1),a.dd("ngIf",!n.hasPermissionToRead)}}function h(e,t){if(1&e&&(a.Nc(0,"div",1),a.Nc(1,"div",2),a.yd(2),a.Mc(),a.xd(3,f,3,2,"div",3),a.Mc()),2&e){var n=a.Xc();a.wc(2),a.Ad(" ",n.label," "),a.wc(1),a.dd("ngForOf",n.value)}}var v=function(){var e=function(){function e(t){r(this,e),this.authService=t}return c(e,[{key:"urlWithId",value:function(e){return"".concat(this.url,"/").concat(e.id)}},{key:"display",value:function(e){return e.label}},{key:"hasPermissionToRead",get:function(){return this.authService.hasPermission(this.permission)}},{key:"isEmpty",get:function(){return!this.value||!this.value.length}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Hc(i.a))},e.\u0275cmp=a.Bc({type:e,selectors:[["app-view-item-relation-to-many"]],inputs:{label:"label",value:"value",url:"url",permission:"permission"},decls:1,vars:1,consts:[["class","view-item",4,"ngIf"],[1,"view-item"],[1,"view-item--label"],[4,"ngFor","ngForOf"],["class","app-link",3,"routerLink",4,"ngIf"],[4,"ngIf"],[1,"app-link",3,"routerLink"]],template:function(e,t){1&e&&a.xd(0,h,4,2,"div",0),2&e&&a.dd("ngIf",!t.isEmpty)},directives:[s.k,s.j,o.e],encapsulation:2}),e}()},YHaZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n("mrSG"),a=n("ZSv9"),s=n("QmLB"),o=n("zkTT"),u=n("Vbab"),d=n("qXBG"),l=n("fXoL"),f=n("tyNb"),h=function(){var e=function(){function e(t,n,i,a){r(this,e),this.errorService=t,this.snackbar=n,this.router=i,this.authService=a,this.initLoading=!1,this.saveLoading=!1,this.record=null}return c(e,[{key:"doInit",value:function(e){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.record=null,this.initLoading=!0,t.t0=e,!t.t0){t.next=8;break}return t.next=7,a.a.find(e);case 7:this.record=t.sent;case 8:this.initLoading=!1,t.next=14;break;case 11:t.prev=11,t.t1=t.catch(0),this.errorService.handle(t.t1),this.record=null,this.initLoading=!0,this.router.navigate(["/tenant"]);case 14:case"end":return t.stop()}}),t,this,[[0,11]])})))}},{key:"doCreate",value:function(e){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.saveLoading=!0,t.next=4,a.a.create(e);case 4:return n=t.sent,t.next=7,this.authService.doRefreshCurrentUser();case 7:return this.saveLoading=!1,t.next=10,this.authService.doSelectTenant(n);case 10:this.snackbar.success(Object(u.d)("tenant.create.success")),this.router.navigate([""]),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),this.errorService.handle(t.t0),this.saveLoading=!1;case 17:case"end":return t.stop()}}),t,this,[[0,14]])})))}},{key:"doUpdate",value:function(e,t){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,this.saveLoading=!0,n.next=4,a.a.update(e,t);case 4:return i=n.sent,this.saveLoading=!1,n.next=8,this.authService.doSelectTenant(i);case 8:this.snackbar.success(Object(u.d)("tenant.update.success")),this.router.navigate([""]),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),this.errorService.handle(n.t0),this.saveLoading=!1;case 15:case"end":return n.stop()}}),n,this,[[0,12]])})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(l.Rc(s.a),l.Rc(o.a),l.Rc(f.b),l.Rc(d.a))},e.\u0275prov=l.Dc({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},inre:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n("qXBG"),a=n("fXoL"),s=n("ofXK"),o=n("tyNb"),u=function(e){return[e]};function d(e,t){if(1&e&&(a.Nc(0,"a",2),a.yd(1),a.Mc()),2&e){var n=a.Xc(2);a.dd("routerLink",a.hd(2,u,n.urlWithId)),a.wc(1),a.zd(n.display)}}function l(e,t){if(1&e&&(a.Nc(0,"span"),a.yd(1),a.Mc()),2&e){var n=a.Xc(2);a.wc(1),a.zd(n.display)}}function f(e,t){if(1&e&&(a.Nc(0,"div"),a.xd(1,d,2,4,"a",1),a.xd(2,l,2,1,"span",0),a.Mc()),2&e){var n=a.Xc();a.wc(1),a.dd("ngIf",n.hasPermissionToRead),a.wc(1),a.dd("ngIf",!n.hasPermissionToRead)}}var h=function(){var e=function(){function e(t){r(this,e),this.authService=t}return c(e,[{key:"hasPermissionToRead",get:function(){return this.authService.hasPermission(this.permission)}},{key:"isEmpty",get:function(){return!this.value||!this.value.id}},{key:"urlWithId",get:function(){return"".concat(this.url,"/").concat(this.value.id)}},{key:"display",get:function(){return this.value.label}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Hc(i.a))},e.\u0275cmp=a.Bc({type:e,selectors:[["app-table-item-relation-to-one"]],inputs:{value:"value",url:"url",permission:"permission"},decls:1,vars:1,consts:[[4,"ngIf"],["class","app-link",3,"routerLink",4,"ngIf"],[1,"app-link",3,"routerLink"]],template:function(e,t){1&e&&a.xd(0,f,3,2,"div",0),2&e&&a.dd("ngIf",!t.isEmpty)},directives:[s.k,o.e],encapsulation:2}),e}()}}])}();