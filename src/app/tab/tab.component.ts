import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./../app.component.css'],
})
export class Tab {
  @Input() data: any;
}
