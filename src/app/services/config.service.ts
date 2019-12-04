import { Injectable } from '@angular/core';
import { config } from 'config/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configuration = config;

  constructor() { }

  public getConfig() {
    return this.configuration;
  }
}
