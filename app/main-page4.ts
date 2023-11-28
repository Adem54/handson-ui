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

/*
inline style always override, .css file's style
.custom css file always override global css file
.ts code icindeki label.height ile verilen css ise inline style i override eder tum css lerin uzerindedir, her zaman
css icinde de ornegin label secisi ile verdgmiz css properties leri, label widget i icindeki css class i ile verilen css ozellikleri tarafindan override edilecektir!!
label widget inin id attributu uzerinden verilen css ise class uzerinden verilen css propertieslerini override edecektir...cunku id nin specifity si daha yuksektir..!!Ayni web mantigindaki gibi!!!!css de ayni specificty kurali gecerlidir!!!

*/
