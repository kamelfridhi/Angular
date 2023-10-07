import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Invoice} from "../models/invoice";
import {InvoiceListComponent} from "../invoice-list/invoice-list.component";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit{
  facture : Invoice|undefined;
  constructor(private ar : ActivatedRoute) {
  }
ngOnInit() {
    let id=this.ar.snapshot.queryParams['id'] ;
    this.facture=InvoiceListComponent.FList.find((f) =>
      f.idFacture==id)


}
  retourPagePrecedente()
  {
    window.history.back();
  }

}
