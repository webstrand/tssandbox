export interface TwineState {
    variables: {
        daily_ap: number;
    };
}

declare global {
    interface Window {
        State: TwineState;
    }
    
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface Global {
            State: TwineState;
        }
    }
}

// eslint-disable-next-line no-undef
export const State: TwineState = (window || global).State;

