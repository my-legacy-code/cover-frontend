/* tslint:disable:no-unused-variable */
import {TestBed, inject, async} from "@angular/core/testing";
import {ProblemService} from "./problem.service";
import {Http, BaseRequestOptions, Response, RequestMethod} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {mockProblems} from "./problem.mock";
import {environment} from "../../../../../environments/environment";

describe('ProblemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemService, {
        provide: Http,
        useFactory: (mockBackend, options) => new Http(mockBackend, options)
        ,
        deps: [MockBackend, BaseRequestOptions]
      }, MockBackend, BaseRequestOptions]
    });
  });

  it('should get problems list', async(inject([ProblemService, MockBackend],
    (service: ProblemService, backend: MockBackend) => {
      backend.connections.subscribe(c => {
        expect(c.request.method).toEqual(RequestMethod.Get);
        expect(c.request.url).toEqual(`${environment.apiEndpoint}
        /schools/3f456176-62fa-4f53-929e-1652d29770fb
        /courses/1be5da90-d14e-4853-ba6f-2a3289883b71
        /problems`);
        c.mockRespond(new Response(<any>{
          body: mockProblems
        }));
      });

      service.problems.subscribe((problems) => {
        expect(problems);
        expect(problems.length).toBeGreaterThan(0);
      });

      service.getProblems();
    })));
});
