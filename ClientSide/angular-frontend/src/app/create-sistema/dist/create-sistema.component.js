"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateSistemaComponent = void 0;
var sistema_1 = require("../models/sistema");
var core_1 = require("@angular/core");
var CreateSistemaComponent = /** @class */ (function () {
    function CreateSistemaComponent(sistemaService, router) {
        this.sistemaService = sistemaService;
        this.router = router;
        this.sistema = new sistema_1.Sistema();
        this.dataAtual = new Date();
    }
    CreateSistemaComponent.prototype.ngOnInit = function () {
    };
    CreateSistemaComponent.prototype.saveSistema = function () {
        var _this = this;
        this.sistemaService.createSistema(this.sistema).subscribe(function (data) {
            console.log(data);
            _this.goToSistemaList();
        }, function (error) { return console.log(error); });
    };
    CreateSistemaComponent.prototype.goToSistemaList = function () {
        this.router.navigate(['/sistemas']);
    };
    CreateSistemaComponent.prototype.onSubmit = function () {
        this.sistema.status = "Ativo";
        this.sistema.alteracaoJust = "inicial";
        this.sistema.dataAlteracao = this.dataAtual;
        this.sistema.usuarioNome = "user";
        console.log(this.sistema);
        this.saveSistema();
    };
    CreateSistemaComponent = __decorate([
        core_1.Component({
            selector: 'app-create-sistema',
            templateUrl: './create-sistema.component.html',
            styleUrls: ['./create-sistema.component.css']
        })
    ], CreateSistemaComponent);
    return CreateSistemaComponent;
}());
exports.CreateSistemaComponent = CreateSistemaComponent;
