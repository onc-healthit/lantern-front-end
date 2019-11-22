import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigService = TestBed.get(ConfigService);
    expect(service).toBeTruthy();
  });

  it('configuration should exist ', () => {
    const service: ConfigService = TestBed.get(ConfigService);
    const configuration = service.getConfig();
    expect(configuration).toBeTruthy();
  });

  it('grafana_url in config should exist', () => {
    const service: ConfigService = TestBed.get(ConfigService);
    const grafana_url = service.getConfig().grafana_url;
    expect(grafana_url).toBeTruthy();
  });
});
