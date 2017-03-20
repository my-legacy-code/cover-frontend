"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var environment_1 = require("../../../../../environments/environment");
var initialProblems = [];
var ProblemService = (function () {
    function ProblemService(http, courseService) {
        var _this = this;
        this.http = http;
        this.courseService = courseService;
        this.currentProblem = new rxjs_1.BehaviorSubject(null);
        this.currentProblemId = new rxjs_1.BehaviorSubject(null);
        this.operations = new rxjs_1.Subject();
        this.index = new rxjs_1.Subject();
        this.show = new rxjs_1.Subject();
        this.problems = this.operations
            .scan(function (problems, operation) {
            return operation(problems);
        }, initialProblems)
            .publishReplay(1)
            .refCount();
        this.index
            .map(function (courseId) { return (environment_1.environment.apiEndpoint + "/courses/" + courseId + "/problems"); })
            .flatMap(function (requestUrl) { return _this.http.get(requestUrl); })
            .map(this.extractData)
            .map(function (newProblems) {
            return function (problems) { return newProblems; };
        })
            .subscribe(this.operations);
        courseService.currentCourseObservable()
            .subscribe(function (course) {
            if (course) {
                _this.index.next(course.id);
            }
        });
        this.show
            .map(function (problemId) { return (environment_1.environment.apiEndpoint + "/problems/" + problemId); })
            .flatMap(function (requestUrl) { return _this.http.get(requestUrl); })
            .map(this.extractData)
            .subscribe(this.currentProblem);
        this.currentProblemId
            .subscribe(function (problemId) {
            if (problemId) {
                _this.show.next(problemId);
            }
        });
    }
    ProblemService.prototype.problemsObservable = function () {
        return this.problems;
    };
    ProblemService.prototype.currentProblemObservable = function () {
        return this.currentProblem;
    };
    ProblemService.prototype.setCurrentProblem = function (problem) {
        this.currentProblemId.next(problem.id);
    };
    ProblemService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProblemService = __decorate([
        core_1.Injectable()
    ], ProblemService);
    return ProblemService;
}());
exports.ProblemService = ProblemService;
