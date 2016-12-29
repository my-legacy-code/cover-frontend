/* tslint:disable:no-unused-variable */

import {TestBed, inject, async} from '@angular/core/testing';
import {Http, ConnectionBackend, RequestOptions, BaseRequestOptions, Response, RequestMethod} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {UserService} from "./user.service";
import {environment} from "../../environments/environment";
import {User} from "./user.model";

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, {
        provide: Http,
        useFactory: (mockBackend, options) => new Http(mockBackend, options),
        deps: [MockBackend, BaseRequestOptions]
      }, MockBackend, BaseRequestOptions]
    });
  });

  afterEach();

  it('signs in user 0', async(inject(
    [UserService, MockBackend],
    function(service: UserService, backend: MockBackend) {

      backend.connections.subscribe(function(connection) {
        expect(connection.request.method).toEqual(RequestMethod.Get);
        expect(connection.request.url).toEqual(`${environment.apiEndpoint}/users/0`);
        connection.mockRespond(new Response(<any>{
          body: mockUsers
        }));
      });

      service
        .signIn('user@example.com', '123456')
        .then(function getCurrentUser(service) {
          return service.getUser();
        })
        .then(function checkCurrentUserInfo(currentUser: User) {
          expect(currentUser);
          expect(currentUser.id).toEqual('0');
          expect(currentUser.email).toEqual('user@example.com');
          expect(currentUser.password).toEqual(null);
          expect(currentUser.school).toEqual('WPI');
          expect(currentUser.classOfGraduation).toEqual(2017);
        });
    }
  )));

  it('modifies up user 0', async(inject(
    [UserService, MockBackend],
    function(service: UserService, backendL: MockBackend) {

      service
        .modify({
          'user@example.com',
          '123456'})
        .then(function getCurrentUser(service) {
          return service.getUser();
        })
        .then(function checkCurrentUserInfo(currentUser: User) {
          expect(currentUser);
          expect(currentUser.id).toEqual('0');
          expect(currentUser.email).toEqual('user@example.com');
          expect(currentUser.password).toEqual(null);
          expect(currentUser.school).toEqual('WPI');
          expect(currentUser.classOfGraduation).toEqual(2017);
        });

    }
  )));

  it('deletes user 0', async(inject(
    [UserService, MockBackend],
    function(service: UserService, backendL: MockBackend) {
      service
        .signIn('user@example.com', '123456')
        .then(function getCurrentUser(service) {
          return service.getUser();
        })
        .then(function checkCurrentUserInfo(currentUser: User) {
          expect(currentUser);
          expect(currentUser.id).toEqual('0');
          expect(currentUser.email).toEqual('user@example.com');
          expect(currentUser.password).toEqual(null);
          expect(currentUser.school).toEqual('WPI');
          expect(currentUser.classOfGraduation).toEqual(2017);
        });
    }
  )));

});


mockUsers = {

};
