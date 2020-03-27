import { State } from "./state";
console.log('monsters');


export interface MonsterData {
  name: string;
}

export interface MonsterArray {
  [index: string]: MonsterData;
}

export type CareActivities = 'Converse' | 'Play' | 'Touch' | 'Chores';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function addmonster(monsterName: string): void {
  State.variables.daily_ap = 5;
}