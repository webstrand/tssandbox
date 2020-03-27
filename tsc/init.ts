/* eslint-disable @typescript-eslint/no-explicit-any */
console.log('global');

(window as any).setup = {};

((window as any) as { State: TwineState }).State = {
  variables: {
    daily_ap: 0,
  }
};
