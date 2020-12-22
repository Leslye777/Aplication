"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var search_sistema_component_1 = require("./search-sistema/search-sistema.component");
var update_sistema_component_1 = require("./update-sistema/update-sistema.component");
var create_sistema_component_1 = require("./create-sistema/create-sistema.component");
var sistema_list_component_1 = require("./sistema-list/sistema-list.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    { path: "search-sistema/:pagina/:descricao/:sigla", component: search_sistema_component_1.SearchSistemaComponent },
    { path: "search-sistema/:pagina/:descricao", component: search_sistema_component_1.SearchSistemaComponent },
    { path: "search-sistema", component: search_sistema_component_1.SearchSistemaComponent },
    { path: 'create-sistema', component: create_sistema_component_1.CreateSistemaComponent },
    { path: "sistemas/:pagina", component: sistema_list_component_1.SistemaListComponent },
    { path: 'update-sistema/:id', component: update_sistema_component_1.UpdateSistemaComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
