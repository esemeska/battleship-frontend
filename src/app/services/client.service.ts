import { Injectable } from '@angular/core';
import { ClientState } from '../modules/client-state.module';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  currentState: ClientState; 

  constructor(){
    this.currentState = ClientState.MAIN_MENU;
  }

  async getState(): Promise<ClientState> {
    return this.currentState;
  }

  async setState(newState: ClientState): Promise<void> {
    this.currentState = newState;
  }
}
