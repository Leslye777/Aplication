"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SistemaService = void 0;
var core_1 = require("@angular/core");
var SistemaService = /** @class */ (function () {
    function SistemaService(HttpClient) {
        this.HttpClient = HttpClient;
        this.baseURL = "http://localhost:8080/api/v1/sistemas";
    }
    SistemaService.prototype.getSistemasList = function (pagina) {
        return this.HttpClient.get(this.baseURL + "?pagina=" + pagina);
    };
    SistemaService.prototype.getSistemasListTeste = function (pagina, descricao, sigla) {
        return this.HttpClient.get(this.baseURL + "?pagina=" + pagina + "&descricao=" + descricao + "&sigla=" + sigla);
    };
    SistemaService.prototype.getSistemaById = function (id) {
        return this.HttpClient.get(this.baseURL + "/" + id);
    };
    SistemaService.prototype.createSistema = function (sistema) {
        return this.HttpClient.post("" + this.baseURL, sistema);
    };
    SistemaService.prototype.UpdateSistema = function (id, sistema) {
        return this.HttpClient.put(this.baseURL + "/" + id, sistema);
    };
    SistemaService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SistemaService);
    return SistemaService;
}());
exports.SistemaService = SistemaService;
