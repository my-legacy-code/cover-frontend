/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CourseService } from './course.service';
import {Http, BaseRequestOptions, Response, RequestMethod} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {environment} from "../../../../environments/environment";
import {mockCourses} from "./courses.mock";

describe('CourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseService, {
        provide: Http,
        useFactory: (mockBackend, options) => new Http(mockBackend, options),
        deps: [MockBackend, BaseRequestOptions]
      },
        MockBackend,
        BaseRequestOptions],

    });
  });

  it('should get list of courses under specific school', inject([CourseService, MockBackend],
    (service: CourseService, backend: MockBackend) => {
    expect(service).toBeTruthy();

    backend.connections.subscribe(c => {
      expect(c.request.method).toBe(RequestMethod.Get);
      expect(c.request.url).toContain(`${environment.apiEndpoint}/schools/eae00a58-9bd2-4a73-baec-02c656010131/courses`);

      c.mockRespond(new Response(<any>{
        body: mockCourses
      }));

      service.coursesObservable().subscribe((courses) => {
        expect(courses).toBeTruthy();
        expect(courses.length).toBeGreaterThan(0);
      });

      service.getCourses('eae00a58-9bd2-4a73-baec-02c656010131');
    });
  }));
});
