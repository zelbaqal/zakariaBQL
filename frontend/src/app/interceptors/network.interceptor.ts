import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoadingService } from "../services/divers/loader.service";

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  constructor(private loader: LoadingService) {}

  intercept(
request: HttpRequest<unknown>,
next: HttpHandler
): Observable<HttpEvent<unknown>> {
    this.loader.show();
    console.log("intercept");
    return next.handle(request).pipe(
      finalize(() => {
        this.loader.hide();
      })
    );
  }
}