/** Wrapper for config-loader to enforce typing */

// Webpack pre-processes the config-loader so the configuration information is
// read into the project correctly.
import * as loadedConfig from '!val-loader!./config-loader';

export interface IConfig {
    grafana_url: string;
}

export const config = loadedConfig as IConfig;
