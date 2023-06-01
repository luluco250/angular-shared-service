import { AfterContentInit, Component } from '@angular/core';
import { PropertyBagService } from 'example-lib';

@Component({
  selector: 'app-root',
  template: `
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let entry of entries">
          <td>{{entry[0]}}</td>
          <td>{{entry[1]}}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class AppComponent implements AfterContentInit {
  public entries: [string, unknown][] = [];

  public constructor(
    public readonly propertyBag: PropertyBagService,
  ) {}

  public ngAfterContentInit(): void {
    this.entries = [...this.propertyBag.entries()];
  }
}
