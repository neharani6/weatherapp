export interface WeatherDataValue {
    lat: number
    lon: number
    data: Daum[]
    timezone: string
    city_name: string
    country_code: string
    state_code: string
  }
  
  export interface Daum {
    wind_gust_spd: number
    pop: number
    ozone: number
    clouds_hi: number
    clouds_low: number
    clouds_mid: number
    timestamp_utc: string
    snow_depth: number
    timestamp_local: string
    wind_cdir: string
    rh: number
    pod: string
    pres: number
    clouds: number
    vis: number
    wind_spd: number
    wind_cdir_full: string
    slp: number
    datetime: string
    ts: number
    dewpt: number
    uv: number
    wind_dir: number
    ghi: number
    dhi: number
    precip: number
    weather: Weather
    temp: number
    app_temp: number
    snow: number
    solar_rad: number
    dni: number
  }
  
  export interface Weather {
    icon: string
    description: string
    code: number
  }
  