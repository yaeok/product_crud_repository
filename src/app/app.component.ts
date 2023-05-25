import { Component } from '@angular/core';

import { RoutingService } from './core/services/routing.service';
import { UrlConst } from './pages/constants/url-const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'product-manage-site';

  constructor(private routingService: RoutingService) {}

  public isSignInPage(): boolean {
    if (UrlConst.SLASH === this.routingService.router.url) {
      return true;
    }
    if (
      UrlConst.SLASH + UrlConst.PATH_SIGN_IN ===
      this.routingService.router.url
    ) {
      return true;
    }
    return false;
  }
}
