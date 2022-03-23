import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoadingService } from "../divers/loader.service";
import { TokenStorageService } from "../token-storage/tokenStorage.service";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  constructor(private loader: LoadingService, private token: TokenStorageService) {}

  intercept(
            request: HttpRequest<unknown>,
            next: HttpHandler
        ): Observable<HttpEvent<unknown>> {
          
          
          const token = this.token.getToken();

          if (token != null) {
            request = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
          }
          
          this.loader.show();
          return next.handle(request).pipe(
            finalize(() => {
              this.loader.hide();
            })
          );
          }
}