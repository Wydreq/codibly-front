
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import {ErrorToastService} from "../../shared/components/error-toast/error-toast.service";

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const errorToastService = inject(ErrorToastService);
  return next(req).pipe(
    catchError((err) => {
      errorToastService.showErrorToast(err.message);
      return throwError(err);
    })
  );
};
