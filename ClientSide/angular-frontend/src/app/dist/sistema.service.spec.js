"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var sistema_service_1 = require("./sistema.service");
describe('SistemaService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(sistema_service_1.SistemaService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
