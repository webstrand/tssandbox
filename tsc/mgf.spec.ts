import 'jasmine';
import './prod.ts';
import './monsters.ts';
import * as _ from 'lodash'; // Imported so the production code can use it

console.log('spec');

(window as unknown as { _: typeof _ })._ = _;

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
