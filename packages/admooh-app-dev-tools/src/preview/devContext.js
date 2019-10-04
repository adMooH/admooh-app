import LocalDb from "./localDb";
import X2JS from "x2js";

export default class DevContext {
  constructor(){
    this._localDb = new LocalDb();
  }

  download(url) {
    return new Promise((resolve, _) => {
      resolve(url);
    });
  }

  setData(key, data) {
    const context = this;
    return new Promise((resolve, _) => {
      context._localDb.set(key,data);
      resolve(true);
    });
  }

  getData(key) {
    const context = this;
    const value =  context._localDb.get(key);
    return new Promise((resolve, _) => {
      resolve(value);
    });
  }

  clearData(key){
    this._localDb.clear(key);
    return new Promise((resolve, _) => {
      resolve();
    });
  }

  convertXml(xml){
    const x2js = new X2JS();
    const doc = x2js.xml2js(xml);
    return new Promise((resolve, _) => {
      resolve(doc);
    });
  }
}
