import { Color, EventData, Label } from "@nativescript/core";

export function onLoaded(args:EventData)
{
  let label = args.object as Label;
  let style = `color:pink; background-color:yellow`;
  (label as any).style = style;
  //Bu sekilde dogrudan code-behinddan style a mudahele edebiliyoruz...DIKKAT EDELIM....

  label.style.height = 200;
  // label.style.border = 2;
  //Dikkat edelim ,hic style kullanmadan direk width e de deger veriyoruz, nerdeyse tum css properties lerini biz, dogrudan label referansindan memberacess ile set edeerek yeni bir deger atayabiliriz ve cok harika dinamik isleri code-behindda yapabiliriz...BU GUCU KULLANMASINI IYI BILELIM!!!!
  label.width = 200;
  label.height=400;
  label.backgroundColor="green";
  label.fontSize = 20;
  label.borderBottomColor = new Color("red");
  //nativescript core icerisinden biz Color class ile de color olusturabiliyoriuz
label.borderBottomWidth = 4;

}
