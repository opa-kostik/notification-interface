/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormatContentPipe } from './format-content.pipe';

describe('FormatContentPipe', () => {
  it('create an instance', () => {
    let pipe = new FormatContentPipe();
    expect(pipe).toBeTruthy();
  });

  it('should work with empty string', () => {
    let pipe = new FormatContentPipe();
    expect(pipe.transform('')).toEqual('');
  });
  
  it('should escape new lines', () => {
    let pipe = new FormatContentPipe();
    expect(pipe.transform('wow\nwow')).toEqual('WOW');
  });

});