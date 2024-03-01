import { Injectable } from '@angular/core';
import { ClientState } from '../modules/client-state.module';
import { Router } from '@angular/router';

type StateRoutes = {
  [key in ClientState]: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private stateRoutes: StateRoutes = {
    [ClientState.MAIN_MENU]: '/main-menu',
    [ClientState.LOGIN]: '/login',
    [ClientState.SERVER_SELECTION]: '/server-selection',
    [ClientState.CONNECTING]: '',
    [ClientState.WAITING_FOR_MATCH]: '',
    [ClientState.IN_MATCH]: '',
    [ClientState.MATCH_SUMMARY]: '',
    [ClientState.SETTINGS]: '',
    [ClientState.ERROR]: '/error'
  };

  constructor(private router: Router){}

  navigateTo(newState: ClientState): void {
    const route = this.stateRoutes[newState];
    if (route) {
      this.router.navigate([route]);
    } else {
      this.router.navigate([ClientState.ERROR])
    }
  }
}
