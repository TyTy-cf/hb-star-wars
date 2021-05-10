import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  getRandomFromMinMax(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min) + min);
  }
}
