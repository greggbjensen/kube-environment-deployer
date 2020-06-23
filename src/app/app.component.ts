import { Component, HostBinding, OnInit, ViewChild, ElementRef } from '@angular/core';
const VSS = (window as any).VSS;

@Component({
  selector: 'ked-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class.ked-root') public className = true;
  @ViewChild('releaseGrid') public releaseGrid: ElementRef;
  public title = 'kube-environment-deployer';
  public name = ''

  constructor() { }

  public ngOnInit(): void {

    VSS.ready(() => {
      this.name = VSS.getWebContext().user.name;
    });

    // Load Azure DevOps Services controls
    VSS.require(["VSS/Controls", "VSS/Controls/Grids"],
        (Controls, Grids) => {

        // Initialize the grid control with two columns, "key" and "value"
        var dataSource = [];
        dataSource.push({key: "key", value: "value"});

        Controls.create(Grids.Grid, this.releaseGrid.nativeElement, {
            height: "1000px", // Explicit height is required for a Grid control
            columns: [
                // text is the column header text.
                // index is the key into the source object to find the data for this column
                // width is the width of the column, in pixels
                { text: "Property key", index: "key", width: 150 },
                { text: "Property value", index: "value", width: 600 }
            ],
            // This data source is rendered into the Grid columns defined above
            source: dataSource
        });

        VSS.notifyLoadSucceeded();
    });
  }
}
