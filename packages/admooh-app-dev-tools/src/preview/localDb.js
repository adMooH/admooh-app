const _db_key = '_fake_db';

export default class LocalDb {
  constructor(){
    this.storage = window.localStorage;
    const db = this.storage.getItem(_db_key);
    if(db === undefined || db === null){
      this.storage.setItem(_db_key, JSON.stringify({}))
    }
  }
  set(key, data){
    const db = JSON.parse(this.storage.getItem(_db_key));
    db[key] = data;
    this.storage.setItem(_db_key, JSON.stringify(db));
  }
  get(key){
    const db = JSON.parse(this.storage.getItem(_db_key));
    return db[key];
  }
  clear(key){
    this.storage.setItem(_db_key, JSON.stringify({}));
  }
}
