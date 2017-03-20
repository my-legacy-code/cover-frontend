"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var environment_1 = require("../../../environments/environment");
var initialSchools = [];
var SchoolService = (function () {
    function SchoolService(http) {
        this.http = http;
        this.operations = new rxjs_1.Subject();
        this.currentSchool = new rxjs_1.BehaviorSubject(null);
        this.index = new rxjs_1.Subject();
        this.schools = this.operations
            .scan(function (schools, operation) {
            return operation(schools);
        }, initialSchools);
        this.index
            .map(function () { return (environment_1.environment.apiEndpoint + "/schools"); })
            .flatMap(function (requestUrl) { return http.get(requestUrl); })
            .map(this.extractData)
            .map(function (newSchools) {
            return function (schools) { return newSchools; };
        })
            .subscribe(this.operations);
    }
    SchoolService.prototype.schoolsObservable = function () {
        return this.schools;
    };
    SchoolService.prototype.getSchools = function () {
        this.index.next();
    };
    SchoolService.prototype.setCurrentSchool = function (school) {
        this.currentSchool.next(school);
    };
    SchoolService.prototype.currentSchoolObservable = function () {
        return this.currentSchool;
    };
    SchoolService.prototype.getSchool = function (schoolId) {
        this.currentSchool.next({
            id: 'c3d04441-8322-42e7-ac84-ec9d329ecd1f',
            acronym: 'WPI',
            name: 'Worcester Polytechnic Institute'
        });
    };
    SchoolService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    SchoolService = __decorate([
        core_1.Injectable()
    ], SchoolService);
    return SchoolService;
}());
exports.SchoolService = SchoolService;
