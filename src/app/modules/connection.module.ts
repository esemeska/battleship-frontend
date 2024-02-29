export class Connection {
    private serverUrl: string;
    private isConnected: boolean;
  
    constructor(serverUrl: string) {
      this.serverUrl = serverUrl;
      this.isConnected = false;
    }
  
    connect(): Promise<void> {
      return new Promise((resolve, reject) => {
        console.log(`Подключение к ${this.serverUrl}...`);
  
        setTimeout(() => {
          this.isConnected = true;
          console.log('Подключено');
          resolve();
        }, 1000);
      });
    }
  
    checkConnection(): boolean {
      return this.isConnected;
    }
  
    disconnect(): void {
      if (this.isConnected) {
        console.log('Соединение разорвано');
        this.isConnected = false;
      }
    }
  }