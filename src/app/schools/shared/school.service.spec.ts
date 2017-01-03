/* tslint:disable:no-unused-variable */
import {TestBed, async, inject} from "@angular/core/testing";
import {SchoolService} from "./school.service";
import {Http, BaseRequestOptions, RequestMethod, Response} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {environment} from "../../../environments/environment";
import {mockSchools} from "./schools.mock";
import {School} from "./school.model";

describe('SchoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolService, {
        provide: Http,
        useFactory: (mockBackend, options) => new Http(mockBackend, options),
        deps: [MockBackend, BaseRequestOptions]
      },
      MockBackend,
      BaseRequestOptions],

    });
  });

  it('should get list of schools', async(inject([SchoolService, MockBackend],
    (service: SchoolService, backend: MockBackend) => {
      expect(service).toBeTruthy();

      backend.connections.subscribe(c => {
        expect(c.request.method).toBe(RequestMethod.Get);
        expect(c.request.url).toBe(`${environment.apiEndpoint}/schools`);

        c.mockRespond(new Response(<any>{
          body: mockSchools
        }))
      });

      service.schoolsObservable().subscribe((schools) => {
        expect(schools).toBeTruthy();
        expect(schools.length).toBeGreaterThan(0);
      });

      service.getSchools();
    })));

  it('should get current school', async(inject([SchoolService, MockBackend],
    (service: SchoolService) => {
      expect(service).toBeTruthy();

      let school: School = {
        id: 'eae00a58-9bd2-4a73-baec-02c656010131',
        name: 'Worcester Polytechnic Institute',
        acronym: 'WPI'
      };

      service.currentSchoolObservable().subscribe((school: School) => {
        expect(school).toBeTruthy();
        expect(school).toEqual(school);
      });

      service.setCurrentSchool(school);
    })));
});
