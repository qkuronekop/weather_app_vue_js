export {};

declare global {
  interface String {
    toIconUrl(): string;
  }
}

String.prototype.toIconUrl = function() {
  const name = (this as String).valueOf();
  return "http://openweathermap.org/img/wn/" + name + "@2x.png"
}