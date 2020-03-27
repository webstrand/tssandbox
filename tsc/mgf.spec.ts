import 'jasmine';
import { setup } from "./setup";
import { State } from "./state";
import * as _ from 'lodash';

describe('Main', () => {
  describe('initializeDay()', () => {
    it('should initialize variables', () => {
      setup.addmonster('Mia');
      State.variables.daily_ap = 13;

      setup.initializeDay();

      expect(State.variables.daily_ap).toBe(0);
    
    });
  });  
});
