import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ClientState } from '../../modules/client-state.module';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  constructor(private clientService: ClientService) {}
  onAccountClick() {
    this.clientService.setState(ClientState.LOGIN);
  }
}
