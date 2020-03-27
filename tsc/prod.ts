console.log('prod');

declare const _: typeof import('lodash');

setup.initializeDay = (): void => {
  State.variables.daily_ap = 0;
};
