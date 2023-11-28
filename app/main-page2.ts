import {
  EventData,
  fromObject,
  ListView,
  ObservableArray,
  ItemEventData,
  Page,
  Observable
} from '@nativescript/core'

const vm = new Observable()
export function onLoad(args: EventData) {

  const page = args.object as Page;

  let  listArray  =  new ObservableArray(
      [
        { name: 'Name-1', age: 14 },
        { name: 'Name-2', age: 19},
        { name: 'Name-3', age: 15 },
        { name: 'Name-4', age: 20 },
        { name: 'Name-5', age: 16 },
        { name: 'Name-6', age: 21 },
      ]
    )



  // vm.titlesArray = titlesArray;
  page.bindingContext = vm;

  vm.set("listArray", listArray);
}

export function onListViewLoaded(args: EventData) {
  const listView = args.object as ListView
}

// The event will be raise when an item inside the ListView is tapped.
//HARIKA BESTPRACTISE...BIZ LISTE ICINDEKI HERHANGI BIR ITEM DAN TIKLANAN ITEM IN INDEX INE ISTE BU SEKILDE ERISEREK, O INDEX UZERINDEN DIZI ICINDEN O ITEM IN OBJESINI BULUP  O ITEM IN TUM DETAY DATASINA ERISEBILIRIZ CODE BEHINDDA...ISTE BU COOK ONEMLI BIR PRACTISE...
export function onItemTap(args: ItemEventData) {
  const index = args.index
  console.log(`Second ListView item tap ${index}`)
}

//BURDA HARIKA BIR BESTPRACTISE...VAR , LISTE ICINDEKI BIRDEN FAZLA ITEM I LISTELERKEN NASIL YAPACAGMZIZ GORUYORUZ BU ORNEKTE
//AYRICA DA ITEMLAR IN KENDI ICERISINDEKI FARKLI USE-CASE LERINE GORE, DE FARKLI STILLERDE GOSTERMEK ISTEYEDEBILIRIZ BU DURUMDA ISTE ASGIDAKI SELECTITEMTEMPLATEAGE METHOUDU ARACILIGI ILE, ITEM.AGE EGER 18 DEN BUYUK ISE YESIL DEGIL ISE KRIMIZI YAPABILIYORUZ...HARIKA BESTPRACTISE...
export function selectItemTemplateAge(item, index, items) {
  return item.age > 18 ? "green" : "red";
}
