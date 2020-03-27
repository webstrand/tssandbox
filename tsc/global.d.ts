type CareActivities = 'Converse' | 'Play' | 'Touch' | 'Chores';

interface TwineSetup {
  initializeDay: () => void;
  addmonster: (monsterName: string) => void;
}

interface MonsterData {
  name: string;
}

interface MonsterArray {
  [index: string]: MonsterData;
}

interface TwineState {
  variables: {
    daily_ap: number;
  };
}

declare const State: TwineState
declare const setup: TwineSetup