import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  add(name: string, item: Object) {
    localStorage.setItem(name, JSON.stringify(item))
  }

  fetch(name: string) {
    return JSON.parse(localStorage.getItem(name) || '{}');
  }

  remove(name: string) {
    localStorage.removeItem(name);
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
