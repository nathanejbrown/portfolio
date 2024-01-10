import { ApplicationConfig } from '@angular/core';
import { provideRouter, Router } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
