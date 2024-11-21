import { Injectable, Provider } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from './../environments/environment.development';

const { apiUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    API = '/api';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);

        if (req.url.startsWith(this.API)) {
            req = req.clone({
                url: req.url.replace(this.API, apiUrl),
                withCredentials: true,
            });
        }

        console.log(req);
        
        return next.handle(req);
    }
}

export const appInterceptorProvider: Provider = {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS,
}