export {};

declare global {
  interface String {
    toCityKey(): string;
  }
}

String.prototype.toCityKey = function() {
  switch(this as string) {
    case "青森":
      return "Aomori";
    case "岩手":
      return "Iwate";
    case "山形":
      return "Yamagata";
    case "秋田":
      return "Akita";
    case "福島":
      return "Fukushima";
    case "宮城":
      return "Miyagi";
    case "茨城":
      return "Ibaraki";
    case "栃木":
      return "Tochigi";
    case "群馬":
      return "Gunma";
    case "千葉":
      return "Chiba";
    case "神奈川":
      return "Kanagawa";
    case "埼玉":
      return "Saitama";
    case "東京":
      return "Tokyo";
    case "山梨":
      return "Yamanashi";
    case "静岡":
      return "Shizuoka";
    case "新潟":
      return "Niigata";
    default:
      return "Tokyo";
  }
}