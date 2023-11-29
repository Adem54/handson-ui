import { Color, EventData, Label, platformNames } from "@nativescript/core";

export function onLoaded(args:EventData)
{
  let label = args.object as Label;

    label.borderColor = new Color("tomato");
    label.color = new Color("#ffff");

  }


