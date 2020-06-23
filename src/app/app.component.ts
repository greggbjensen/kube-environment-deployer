import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kube-environment-deployer';

  constructor() {
    const VSS: any = (window as any).VSS;

    VSS.ready(() => {
      console.log(VSS.getWebContext().user.name);
    });
  }
}
