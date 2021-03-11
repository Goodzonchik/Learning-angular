import { Injectable } from '@angular/core';

@Injectable()
export class ListCacheService {
  private data;

  constructor() {
    this.data = new Map();
  }

  setData<T>(page: number, value: T): void {
    this.data.set(page, value);
  }

  getData<T>(page: number): T | null {
    return this.data.has(page) ? this.data.get(page) : null;
  }
}
