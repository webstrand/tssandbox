import { TwineState } from "./state";
import { TwineSetup } from "./setup";

// We make window available. A better solution would be to use `window`,
// `jsdom`, or `browser-env` combined with `Proxy` to more completely simulate a
// browser environment. 
// eslint-disable-next-line no-undef
(global as unknown as { window: unknown }).window = global;

// Even though global.d.ts declares State and setup, they're not declared on the
// window object. We make them temporarily available here, for convenience. You
// can safely move this into global.d.ts if so desired.
declare global {
  interface Window {
    State: TwineState;
    setup: TwineSetup;
  }
}

window.setup = {} as TwineSetup;

window.State = {
  variables: {
    daily_ap: 0,
  }
};