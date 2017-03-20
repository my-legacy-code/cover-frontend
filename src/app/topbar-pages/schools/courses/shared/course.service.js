"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var environment_1 = require("../../../../environments/environment");
var rxjs_1 = require("rxjs");
var initialCourses = [];
var CourseService = (function () {
    function CourseService(http, schoolService) {
        var _this = this;
        this.http = http;
        this.schoolService = schoolService;
        this.operations = new rxjs_1.Subject();
        this.currentCourse = new rxjs_1.BehaviorSubject(null);
        this.currentCourseId = new rxjs_1.BehaviorSubject(null);
        this.index = new rxjs_1.Subject();
        this.show = new rxjs_1.Subject();
        this.courses = this.operations
            .scan(function (courses, operation) {
            return operation(courses);
        }, initialCourses)
            .publishReplay()
            .refCount();
        this.index
            .map(function (schoolId) { return (environment_1.environment.apiEndpoint + "/schools/" + schoolId + "/courses"); })
            .flatMap(function (requestUrl) { return http.get(requestUrl); })
            .map(this.extractData)
            .map(function (newCourses) {
            return function (courses) { return newCourses; };
        })
            .subscribe(this.operations);
        this.schoolService
            .currentSchoolObservable()
            .subscribe(function (school) {
            if (school) {
                _this.index.next(school.id);
            }
        });
        this.show
            .map(function (courseId) { return (environment_1.environment.apiEndpoint + "/courses/" + courseId); })
            .flatMap(function (requestUrl) { return http.get(requestUrl); })
            .map(this.extractData)
            .subscribe(this.currentCourse);
        this.currentCourseId
            .subscribe(function (courseId) {
            if (courseId) {
                _this.show.next(courseId);
            }
        });
    }
    CourseService.prototype.coursesObservable = function () {
        return this.courses;
    };
    CourseService.prototype.currentCourseObservable = function () {
        return this.currentCourse;
    };
    CourseService.prototype.setCurrentCourse = function (course) {
        this.currentCourse.next(course);
    };
    CourseService.prototype.getCourse = function (courseId) {
        this.currentCourseId.next(courseId);
    };
    CourseService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CourseService = __decorate([
        core_1.Injectable()
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
