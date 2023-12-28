import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  implements OnInit{
  allowNewServer:Boolean = false;
  serverCreationStatus:string = 'No server was created!';
  serverName:String = 'TestServer';
  serverCreated = false;
  constructor(){
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit(): void {

  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! And the name is ' + this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
