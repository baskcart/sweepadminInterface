import { Observable, Observer, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuth } from '@okta/okta-auth-js';
import { environment } from '../environments/environment';
import { HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OktaAuthService {

  CLIENT_ID = '0oa4rxtbsoQLzN0wk5d6';
  ISSUER = 'https://dev-7041470.okta.com'
  LOGIN_REDIRECT_URI = environment.LOGIN_REDIRECT_URI
  LOGOUT_REDIRECT_URI = environment.LOGOUT_REDIRECT_URI

  oktaAuth = new OktaAuth({
    clientId: this.CLIENT_ID,
    issuer: this.ISSUER,
    redirectUri: this.LOGIN_REDIRECT_URI,
    pkce: true
  });

  $isAuthenticated: Observable<boolean>;
  private observer: Observer<boolean>;
  constructor(private router: Router) {
    this.$isAuthenticated = new Observable((observer: Observer<boolean>) => {
      this.observer = observer;
      this.isAuthenticated().then(val => {
        observer.next(val);
      });
    });
  }

  async isAuthenticated() {
    // Checks if there is a current accessToken in the TokenManger.
    return !!(await this.oktaAuth.tokenManager.get('accessToken'));
  }

  login(originalUrl) {
    // Save current URL before redirect
    sessionStorage.setItem('okta-app-url', originalUrl || this.router.url);
    // Launches the login redirect.
    this.oktaAuth.token.getWithRedirect({
      scopes: ['openid', 'email', 'groups'],
      idp: '0oa42wvf4szJDrWyA5d6'
    });
  }

  async handleAuthentication() {
    const tokenContainer = await this.oktaAuth.token.parseFromUrl();

    this.oktaAuth.tokenManager.add('idToken', tokenContainer.tokens.idToken);
    this.oktaAuth.tokenManager.add('accessToken', tokenContainer.tokens.accessToken);

    if (await this.isAuthenticated()) {
      this.observer.next(true);
    }

    // Retrieve the saved URL and navigate back
    const url = sessionStorage.getItem('okta-app-url');
    this.router.navigate([url]);
  }

  async logout() {
    await this.oktaAuth.signOut({
      postLogoutRedirectUri: this.LOGOUT_REDIRECT_URI
    });
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private oktaAuthService: OktaAuthService) {
    console.log("interceptor construction")
  }
  debugger
  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercepted");
    return from(this.oktaAuthService.oktaAuth.tokenManager.get("idToken"))
      .pipe(switchMap(idToken => {
        console.log("idToken", idToken.value);

        if (idToken && idToken.value) {
          const cloned = req.clone({
            headers: req.headers.set("Authorization",
              "Bearer " + idToken.value)
          });

          return next.handle(cloned);
        }
        else {
          return next.handle(req);
        }
      }))

  }
}
