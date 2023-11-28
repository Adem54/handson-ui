import { Observable } from '@nativescript/core'

export class HelloWorldModel extends Observable {
  private _counter: number
  private _message: string
  private _longText:string;
  private _isChecked:boolean;

  /*
    let text = "Hello this is my long text, and I check this text. I think, this is very useful!"
  vm.set("longText", text);
  vm.set("isChecked", false);
  */

  constructor() {
    super()

    // Initialize default values.
    this._counter = 42;
    this._longText = "Hello this is my long text, and I check this text. I think, this is very useful!";
    this._isChecked=false;
    this.updateMessage();
  }

  get longText():string {
    return this._longText;
  }

  set longText(value:string){
    if(value !== this._longText)
     {
        this._longText = value;
        this.notifyPropertyChange("longText", value);
     }

  }

  get isChecked():boolean
  {
    return this._isChecked;
  }

  set isChecked(value:boolean)
  {
    if(this._isChecked !== value)
    {
      this._isChecked = value;
      this.notifyPropertyChange("isChecked", value);
    }
  }

  get message(): string {
    return this._message
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value
      this.notifyPropertyChange('message', value)
    }
  }

  onTap() {
    this._counter--
    this.updateMessage()
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!'
    } else {
      this.message = `${this._counter} taps left`
    }
  }
}
