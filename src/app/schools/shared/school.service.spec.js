"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var school_service_1 = require("../../shared/school.service");
var http_1 = require("@angular/http");
var testing_2 = require("@angular/http/testing");
var environment_1 = require("../../../environments/environment");
var schools_mock_1 = require("./schools.mock");
describe('SchoolService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [school_service_1.SchoolService, {
                    provide: http_1.Http,
                    useFactory: function (mockBackend, options) { return new http_1.Http(mockBackend, options); },
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                },
                testing_2.MockBackend,
                http_1.BaseRequestOptions],
        });
    });
    it('should get list of schools', testing_1.async(testing_1.inject([school_service_1.SchoolService, testing_2.MockBackend], function (service, backend) {
        expect(service).toBeTruthy();
        backend.connections.subscribe(function (c) {
            expect(c.request.method).toBe(http_1.RequestMethod.Get);
            expect(c.request.url).toBe(environment_1.environment.apiEndpoint + "/schools");
            c.mockRespond(new http_1.Response({
                body: schools_mock_1.mockSchools
            }));
        });
        service.schoolsObservable().subscribe(function (schools) {
            expect(schools).toBeTruthy();
            expect(schools.length).toBeGreaterThan(0);
        });
        service.getSchools();
    })));
    it('should get current school', testing_1.async(testing_1.inject([school_service_1.SchoolService, testing_2.MockBackend], function (service) {
        expect(service).toBeTruthy();
        var school = {
            id: 'eae00a58-9bd2-4a73-baec-02c656010131',
            name: 'Worcester Polytechnic Institute',
            acronym: 'WPI'
        };
        service.currentSchoolObservable().subscribe(function (school) {
            expect(school).toBeTruthy();
            expect(school).toEqual(school);
        });
        service.setCurrentSchool(school);
    })));
});
