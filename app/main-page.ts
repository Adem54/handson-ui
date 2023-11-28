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

let moreListItems = new ObservableArray(
  [
  { title: 'The Da Vinci Code2' },
    { title: 'Harry Potter and the Chamber of Secrets2' },
    { title: 'The Alchemist2' },
    { title: 'The Godfather2' },
    { title: 'Goodnight Moon2' },
    { title: 'The Hobbit2' }
]);

export function onLoad(args: EventData) {

  const page = args.object as Page;

  // const titlesArray = new ObservableArray(
    let titlesArray = new ObservableArray(
  [
    {id:1, name:'name1', title: 'The Da Vinci Code' },
    {id:2, name:'name2', title: 'Harry Potter and the Chamber of Secrets' },
    { id:3, name:'name3',title: 'The Alchemist' },
    {id:4, name:'name4',  title: 'The Godfather' },
    { id:5, name:'name5', title: 'Goodnight Moon' },
    { id:6, name:'name6',  title: 'The Hobbit' }
  ]);


 let  titlesArray2  =  new ObservableArray(
    [
      { type: 'heading', text: 'Heading 1' },
      { type: 'item', text: 'Item 1' },
      { type: 'item', text: 'Item 2' },
      { type: 'heading', text: 'Heading 2' },
      { type: 'item', text: 'Item 3' },
      { type: 'item', text: 'Item 4' },
    ]
  )

  // vm.titlesArray = titlesArray;
  page.bindingContext = vm;
  vm.set("titlesArray", titlesArray);
  vm.set("titlesArray", titlesArray2);
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


// The event will be raised when the ListView is scrolled so that the last item is visible. LISTE ASAGIDA GORDU SCROLL-KAYDIRILDIGINDA TETIKLENECEK BIR EVENT METHODUDURKI MAKSAT EN ALTTA KALAN ITEM IN DA GORUNEBILIR OLMASINI SAGLAMAKTIR
// This even is intended to be used to add additional data in the ListView.
//BURASI HER SCROLL YAPILDIGINDA TETIKLENECEK BIR METHODDUR ONLOADMOREITEMS EVENTI....
//OBSERVABLE ARRAY ICINDEN SPESIFIK BIR DATAYA NASIL ERISILIR....COK ONEMLI
//AYRICA NEYE DIKKAT..OBSERVABLEARRAY NORMAL BIR ARRAY DEGILDIR DOLAYISI ILE ONUN ICERISINDE BIR DATAYA ERISIRKEN GETITEM(INDEX) PARAMETRESINE INDEX YAZARAK ERISEBILECEGIZ ISTEDGIMZ SPESIFIK BIR ITEM A ERISMEK ISTEDIGMZDE....BU DA COOOK ONEMLIDIR....ASAGIDA DA KULLANICI SCROLL YAPTIKTAN 3 SANIYE SONRA MORELISTITEMS ICINDEKI DATLAR DAN RANDOMN OLARAK INDEX ALINIP O INDEX IN KARSILIK GELDIGI DATA LISTARRAY A YANI MEVCUT LISTEYE PUSH EDILIYOR....
export function onLoadMoreItems(args: ItemEventData) {
  let loadMore = true;
  let listArray = vm.get("titlesArray");
  if (loadMore) {
    console.log('ListView -> LoadMoreItemsEvent')
    setTimeout(() => {
      listArray.push(
        moreListItems.getItem(Math.floor(Math.random() * moreListItems.length))
      )
      listArray.push(
        moreListItems.getItem(Math.floor(Math.random() * moreListItems.length))
      )
      listArray.push(
        moreListItems.getItem(Math.floor(Math.random() * moreListItems.length))
      )
      listArray.push(
        moreListItems.getItem(Math.floor(Math.random() * moreListItems.length))
      )
      listArray.push(
        moreListItems.getItem(Math.floor(Math.random() * moreListItems.length))
      )
    }, 3000)

    loadMore = false
  }
}
