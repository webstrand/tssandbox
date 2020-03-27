import { initializeDay } from "./prod";
import { addmonster } from "./monsters";

export interface TwineSetup {
    initializeDay: () => void;
    addmonster: (monsterName: string) => void;
}

declare global {
    interface Window {
        setup: TwineSetup;
    }
    
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface Global {
            setup: TwineSetup;
        }
    }
}


// eslint-disable-next-line no-undef
export const setup: TwineSetup = Object.assign((window || global).setup, {
    initializeDay,
    addmonster
});
