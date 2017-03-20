"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var environment_1 = require("../../../../../../environments/environment");
var initialKeywords = [];
var KeywordService = (function () {
    function KeywordService(problemService, http) {
        var _this = this;
        this.problemService = problemService;
        this.http = http;
        this.operations = new rxjs_1.Subject();
        this.index = new rxjs_1.Subject();
        this.keywords = this.operations
            .scan(function (keywords, operation) { return operation(keywords); }, initialKeywords)
            .publishReplay(1)
            .refCount();
        this.index
            .flatMap(function (requestUrl) { return http.get(requestUrl); })
            .map(this.extractData)
            .combineLatest(problemService.currentProblemObservable(), function (newKeywords, problem) {
            return function (keywords) {
                return Object.assign([], newKeywords.map(function (k) {
                    return Object.assign({}, k, { content: problem.body.substr(k.start, k.length) });
                }));
            };
        })
            .subscribe(this.operations);
        problemService
            .currentProblemObservable()
            .subscribe(function (problem) {
            if (problem)
                _this.index.next(environment_1.environment.apiEndpoint + "/problems/" + problem.id + "/keywords");
        });
    }
    KeywordService.prototype.keywordsObservable = function () {
        return this.keywords;
    };
    KeywordService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    KeywordService = __decorate([
        core_1.Injectable()
    ], KeywordService);
    return KeywordService;
}());
exports.KeywordService = KeywordService;
