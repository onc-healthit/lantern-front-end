import * as loadedConfig from '!val-loader!./config-loader';

export interface IConfig {
    grafana_url: string;
}

export const config = loadedConfig as IConfig;
