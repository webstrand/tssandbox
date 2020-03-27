/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'jasmine';
import './prod.ts';
import './monsters.ts';
import * as _ from 'lodash'; // Imported so the production code can use it

console.log('spec');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any)._ = _;
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
