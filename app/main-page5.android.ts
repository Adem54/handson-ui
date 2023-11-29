import { Color, EventData, Label, platformNames } from "@nativescript/core";

export function onLoaded(args:EventData)
{
  let label = args.object as Label;

  //Platform a gore nasil check yapabiliriz...
  if(platformNames.android)
  {
    label.backgroundColor = new Color("#a9a9a9");
    label.backgroundColor = new Color("pink");
    label.color = new Color("#000");
  }else if(platformNames.ios)
  {
    label.borderColor = new Color("tomato");

  }

}
