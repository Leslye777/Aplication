"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SistemaListComponent = void 0;
var core_1 = require("@angular/core");
var SistemaListComponent = /** @class */ (function () {
    function SistemaListComponent(sistemaService, route, router) {
        this.sistemaService = sistemaService;
        this.route = route;
        this.router = router;
        this.atual = 0;
        this.ultima = 0;
        this.url = "http://localhost:4200/sistemas/";
    }
    SistemaListComponent.prototype.arrayOne = function (n) {
        return Array(n);
    };
    SistemaListComponent.prototype.ngOnInit = function () {
        this.pagina = this.route.snapshot.params['pagina'];
        this.getSistemas(this.pagina);
    };
    SistemaListComponent.prototype.getSistemas = function (pagina) {
        var _this = this;
        this.sistemaService.getSistemasList(pagina).subscribe(function (data) {
            _this.page = data;
            pagina = _this.page.number;
            _this.totalPages = _this.page.totalPages;
            _this.atual = _this.page.number;
            _this.sistemas = _this.page.content;
            _this.ultima = _this.totalPages - 1;
            console.log("Pagina atual" + _this.atual);
            console.log("Pagina atual" + _this.totalPages);
        });
    };
    SistemaListComponent.prototype.incrementador = function () {
        this.atual = this.atual + 1;
    };
    SistemaListComponent.prototype.decrementador = function () {
        this.atual = this.atual - 1;
    };
    SistemaListComponent.prototype.updateSistema = function (id) {
        this.router.navigate(['update-sistema', id]);
    };
    SistemaListComponent.prototype.inicial = function () {
        if (this.atual === 0) {
            return "disabled";
        }
        return "";
    };
    SistemaListComponent.prototype.final = function () {
        if (this.atual === this.totalPages - 1) {
            return "disabled";
        }
        return "";
    };
    SistemaListComponent.prototype.comparacao = function (i) {
        if (this.atual === i) {
            return "active";
        }
        return "";
    };
    SistemaListComponent = __decorate([
        core_1.Component({
            selector: 'app-sistema-list',
            templateUrl: './sistema-list.component.html',
            styleUrls: ['./sistema-list.component.css']
        })
    ], SistemaListComponent);
    return SistemaListComponent;
}());
exports.SistemaListComponent = SistemaListComponent;
