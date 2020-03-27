import { State } from "./state";
import * as _ from "lodash";

export function initializeDay(): void {
  State.variables.daily_ap = 0;
}