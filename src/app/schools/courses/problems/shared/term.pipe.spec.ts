/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TermPipe } from './term.pipe';
import {Term} from "../../../../shared/term.enum";

describe('TermPipe', () => {
  it('should translate enum to term string', () => {
    let pipe = new TermPipe();
    expect(pipe).toBeTruthy();

    expect(pipe.transform(Term.A)).toEqual('A');
    expect(pipe.transform(Term.B)).toEqual('B');
    expect(pipe.transform(Term.C)).toEqual('C');
    expect(pipe.transform(Term.D)).toEqual('D');
    expect(pipe.transform(Term.E)).toEqual('E');
    expect(pipe.transform(Term.F)).toEqual('F');

  });
});
