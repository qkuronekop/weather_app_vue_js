import { Clouds } from "./Clouds";
import { Main } from "./Main";
import { Sys } from "./Sys";
import { Weather } from "./Weather";
import { Wind } from "./Wind";

export interface Forecast {
  dt: number,
  main: Main,
  weather: Weather[],
  coluds: Clouds,
  wind: Wind,
  visibility: number,
  pop: 0,
  sys: Sys,
  dt_txt: string,
}