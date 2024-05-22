import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { NotguardsService } from './notguards.service';
import { NottrimsPipe } from './notpipe/nottrims.pipe';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    // NottrimsPipe
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
