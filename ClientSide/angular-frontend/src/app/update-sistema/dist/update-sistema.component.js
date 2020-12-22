"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateSistemaComponent = void 0;
var core_1 = require("@angular/core");
var sistema_1 = require("../models/sistema");
var UpdateSistemaComponent = /** @class */ (function () {
    function UpdateSistemaComponent(sistemaService, route, router) {
        this.sistemaService = sistemaService;
        this.route = route;
        this.router = router;
        this.sistema = new sistema_1.Sistema();
    }
    UpdateSistemaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.sistemaService.getSistemaById(this.id).subscribe(function (data) {
            _this.sistema = data;
        }, function (error) { return console.log(error); });
    };
    UpdateSistemaComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sistemaService.UpdateSistema(this.id, this.sistema).subscribe(function (data) {
            _this.goToSistemaList();
        }, function (error) { return console.log(error); });
    };
    UpdateSistemaComponent.prototype.goToSistemaList = function () {
        alert("Operação realizada com sucesso!");
        this.router.navigate(['/']);
    };
    UpdateSistemaComponent = __decorate([
        core_1.Component({
            selector: 'app-update-sistema',
            templateUrl: './update-sistema.component.html',
            styleUrls: ['./update-sistema.component.css']
        })
    ], UpdateSistemaComponent);
    return UpdateSistemaComponent;
}());
exports.UpdateSistemaComponent = UpdateSistemaComponent;
