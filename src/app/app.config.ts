import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {loadingInterceptor} from "./core/interceptors/loading.interceptor";
import {errorHandlerInterceptor} from "./core/interceptors/error-handler.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient(withInterceptors([loadingInterceptor, errorHandlerInterceptor]))],
};
