import { State } from "./state";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _ from "lodash";

export function initializeDay(): void {
  State.variables.daily_ap = 0;
}