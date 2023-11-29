import { Application, Color, EventData, Label, platformNames } from "@nativescript/core";
import * as app from '@nativescript/core/application'


export function onLoaded(args:EventData)
{
  let label = args.object as Label;

  //Platform a gore nasil check yapabiliriz...
  if(platformNames.android)
  {
    // label.backgroundColor = new Color("#a9a9a9");
    // label.backgroundColor = new Color("pink");
    // label.color = new Color("#000");


      //BU ESKI SURUME GORE BOYLE YAPILMIS AMA ARTIK GECERLI DEGIL...muhtemelen app yerine Application i kullanmak gerek ve gerisi de artik ona gore dokumandan bulunup ayarlanabilir...BUNMLARI IYI OGRENMEK GEREK
      //BU OTOMATIK OLARAK, STATUSBAR I DARK OLMAYA ZORLAYACAK
      const window = app.android.startActivity.getWindow();
      const decorView = window.getDecorView();
      decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
      //App_Resources altindaki Android/src/res/values/colors.xml de ise    <color name="ns_primaryDark">#fefefe</color> kismin coor ini seklinde degistiririz...ve bu sekilde arka plan beyyyaz.....color yazi rengi ise dark olmus olacaktir androidde!!!!!


    }else if(platformNames.ios)
  {
    label.borderColor = new Color("tomato");

  }


}
