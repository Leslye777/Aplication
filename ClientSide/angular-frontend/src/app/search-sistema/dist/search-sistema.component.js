"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchSistemaComponent = void 0;
var core_1 = require("@angular/core");
var SearchSistemaComponent = /** @class */ (function () {
    function SearchSistemaComponent(sistemaService, route, router) {
        this.sistemaService = sistemaService;
        this.route = route;
        this.router = router;
        this.atual = 0;
        this.ultima = 0;
        this.url = "http://localhost:4200/search-sistema/";
    }
    SearchSistemaComponent.prototype.arrayOne = function (n) {
        return Array(n);
    };
    SearchSistemaComponent.prototype.ngOnInit = function () {
        this.pagina = 0;
    };
    SearchSistemaComponent.prototype.getSistemasTeste = function (pagina, descricao, sigla) {
        var _this = this;
        descricao = this.verificaUndefined(descricao);
        sigla = this.verificaUndefined(sigla);
        this.sistemaService.getSistemasListTeste(pagina, descricao, sigla).subscribe(function (data) {
            _this.page = data;
            pagina = _this.page.number;
            _this.totalPages = _this.page.totalPages;
            _this.atual = _this.page.number;
            _this.sistemas = _this.page.content;
            _this.ultima = _this.totalPages - 1;
            _this.isEmpty();
            console.log("Descricao " + descricao + " Pagina " + pagina + " Sigla " + sigla);
        });
    };
    SearchSistemaComponent.prototype.incrementador = function () {
        this.atual = this.atual + 1;
    };
    SearchSistemaComponent.prototype.decrementador = function () {
        this.atual = this.atual - 1;
    };
    SearchSistemaComponent.prototype.updateSistema = function (id) {
        this.router.navigate(['update-sistema', id]);
    };
    SearchSistemaComponent.prototype.inicial = function () {
        if (this.atual === 0) {
            return "disabled";
        }
        return "";
    };
    SearchSistemaComponent.prototype.final = function () {
        if (this.atual === this.totalPages - 1) {
            return "disabled";
        }
        return "";
    };
    SearchSistemaComponent.prototype.comparacao = function (i) {
        if (this.atual === i) {
            return "active";
        }
        return "";
    };
    SearchSistemaComponent.prototype.isEmpty = function () {
        if (this.totalPages === 0) {
            alert("Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!");
        }
    };
    SearchSistemaComponent.prototype.teste = function (pagina) {
        this.getSistemasTeste(pagina, this.descricao, this.sigla);
    };
    SearchSistemaComponent.prototype.onSearch = function () {
        this.getSistemasTeste(this.pagina, this.descricao, this.sigla);
    };
    SearchSistemaComponent.prototype.verificaUndefined = function (campo) {
        if (campo === "") {
            return undefined;
        }
        return campo;
    };
    SearchSistemaComponent = __decorate([
        core_1.Component({
            selector: 'app-search-sistema',
            templateUrl: './search-sistema.component.html',
            styleUrls: ['./search-sistema.component.css']
        })
    ], SearchSistemaComponent);
    return SearchSistemaComponent;
}());
exports.SearchSistemaComponent = SearchSistemaComponent;
