import { City } from "./City";
import { Forecast } from "./Forecast";

export interface ForecastData {
  cod: string,
  message: number,
  cnt: number,
  list: Forecast[],
  city: City,
}