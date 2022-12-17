import axios from "axios";
import { WeatherData } from "../models/WeatherData";

class WeatherService {
  
  private URL = "https://api.openweathermap.org/data/2.5/weather?q={{ city }},JP&appid=<your key>&lang=ja&units=metric";

  public async getWeather(city: string): Promise<WeatherData> {
    console.log(city);
    const res = await axios.get<WeatherData>(this.URL.replace("{{ city }}", city));
    return res.data;
  }
}

export default new WeatherService()