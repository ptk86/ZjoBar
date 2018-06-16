import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver/FileSaver';

@Component({
  selector: 'app-pay',
  template: `
  <div class="ui-g-2">
    <p-table [columns]="cols" [value]="miesiace">
      <ng-template pTemplate="colgroup" let-columns>
          <colgroup>
              <col *ngFor="let col of columns" [style.width]="col.width">
          </colgroup>
      </ng-template>
      <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{col.header}}
            </th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-m>
          <tr>
              <td align="center">{{m.label}}</td>
              <td align="center" (click)="download(m.value)"> <i class="fa fa-file-pdf-o"></i></td>
          </tr>
      </ng-template>
    </p-table>
  </div>
  `,
  styles: []
})
export class PayComponent implements OnInit {
  miesiace = [
    { label: 'Styczeń', value: 'styczen' },
    { label: 'Luty', value: 'luty' },
    { label: 'Marzec', value: 'marzec' },
    { label: 'Kwiecień', value: 'kwiecien' }
  ];

   cols = [
    { header: 'Miesiąc', width: '80%'},
    { width: '20%'}
  ];

  ngOnInit(): void {
  }
  constructor(private http: HttpClient) { }

  download(miesiac: string) {
    const filename = `${miesiac}.pdf`;
    return this.http.get(filename, { responseType: 'blob' })
                    .subscribe(r => saveAs(r, filename));
  }


}
