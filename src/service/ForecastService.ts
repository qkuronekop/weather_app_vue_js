import axios from "axios";
import { ForecastData } from "../models/ForecastData";

class ForecastService {
  
  private URL = "https://api.openweathermap.org/data/2.5/forecast?q={{ city }}&appid=c68304c3b515d42cd3422342169ea924&lang=ja&units=metric";

  public async getForecast(city: string): Promise<ForecastData> {
    const res = await axios.get<ForecastData>(this.URL.replace("{{ city }}", city));
    return res.data;
  }
}

export default new ForecastService()