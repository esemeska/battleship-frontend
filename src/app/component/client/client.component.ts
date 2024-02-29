import { Component } from '@angular/core';
import { ClientState } from '../../modules/client-state.module';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  currentState: ClientState; 

  constructor(private navigationService: NavigationService){
    this.currentState = ClientState.MAIN_MENU;
  }

  async setState(newState: ClientState): Promise<void> {
    this.currentState = newState;
    this.navigationService.navigateTo(this.currentState);
  }
}
