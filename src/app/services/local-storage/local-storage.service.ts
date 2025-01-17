import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  notifier = fromEvent(window, 'storage') as Observable<StorageEvent>;

  getItem<T>(key: string): T | Error | null {
    const str = localStorage.getItem(key) ?? 'null';
    try {
      return JSON.parse(str) as T;
    } catch (err) {
      return new Error(`Error parsing item with key '${key}'`);
    }
  }

  setItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      localStorage.setItem(key, (err as Error).message);
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearAll(): void {
    localStorage.clear();
  }
}
