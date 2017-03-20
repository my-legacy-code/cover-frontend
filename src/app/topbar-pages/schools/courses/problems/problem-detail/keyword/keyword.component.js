"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var KeywordComponent = (function () {
    function KeywordComponent(linkService) {
        this.linkService = linkService;
        this.links = [];
    }
    KeywordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.linksStream = this.linkService.linksObservable(this.keyword.id);
        this.linksStream
            .subscribe(function (links) {
            _this.links = links;
        });
    };
    KeywordComponent.prototype.sortedLinks = function () {
        var _this = this;
        return this.links.sort(function (a, b) { return _this.getScore(b) - _this.getScore(a); });
    };
    KeywordComponent.prototype.getScore = function (link) {
        return (link.upvotes + link.downvotes) * (link.upvotes - link.downvotes);
    };
    __decorate([
        core_1.Input()
    ], KeywordComponent.prototype, "keyword", void 0);
    KeywordComponent = __decorate([
        core_1.Component({
            selector: 'app-keyword',
            templateUrl: 'keyword.component.html',
            styleUrls: ['keyword.component.sass']
        })
    ], KeywordComponent);
    return KeywordComponent;
}());
exports.KeywordComponent = KeywordComponent;
