import axios from "axios";
import { ForecastData } from "../models/ForecastData";

class ForecastService {
  
  private URL = "http://api.openweathermap.org/data/2.5/forecast?q={{ city }}&appid=<key>&lang=ja&units=metric";

  public async getForecast(city: string): Promise<ForecastData> {
    const res = await axios.get<ForecastData>(this.URL.replace("{{ city }}", city));
    return res.data;
  }
}

export default new ForecastService()