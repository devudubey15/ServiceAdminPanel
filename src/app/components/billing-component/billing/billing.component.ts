import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_testing_testing_a } from '@angular/platform-browser-dynamic/testing';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor() { }

  billgenerate = false;
  partName = null;
  price = null;
  quantity = null;
  index = 0;
  invoice_number = null;
  date = null;
  total =0;
  tax=0;

  companyData = {
    name: 'Csr Service center',
    email: 'csr@gamil.com',
    address: 'ghanta ghar',
    phone: '123-46-789-01',
    businessNumber: '12345-7895'
  }
  customerData = {
    name: 'Mr. Singh',
    email: 'singh@gamil.com',
    address: 'kidvai nagar',
    phone: '123-46-789-01'

  }
  vehicleData = {
    vehicle_number: 'UP 78 D 0343',
    chechis_number: 'XR10234STY324POI6',
    vehicle_model: 'Royal enfield Classic 350'
  }
  partData: any = [

  ]
  


  addDetails() {
    if (this.partName == null || this.price == null || this.quantity == null) {
      alert("Give right value");
      return
    } else {
      this.partData.push({ partName: this.partName, price: this.price, quantity: this.quantity
       });
      this.partName = null;
      this.price = null;
      this.quantity = null;
    }
  }

  ngOnInit(): void {
  }
  deletedetails(index: any) {
    this.partData.splice(this.index, 1);

  }
  generateBill() {
    if (this.partData.length == 0 || this.invoice_number == null || this.date == null) {
      alert(" PLEASE ENTER THE CORRECT VALUES ");
      return
    }
    this.billgenerate = true;
    for(var i = 0 ; i < this.partData.length; i++ ){
     this.total+=(this.partData[i].price*this.partData[i].quantity);   
    }


    this.tax = (this.total*18)/100;

  }
  
  // title = 'htmltopdf';

  // @ViewChild('pdfTable') pdfTable: ElementRef;

  // public downloadAsPDF() {
  //   const doc = new jsPDF();

  //   const pdfTable = this.pdfTable.nativeElement;

  //   var html = htmlToPdfmake(pdfTable.innerHTML);

  //   const documentDefinition = { content: html };
  //   pdfMake.createPdf(documentDefinition).open();

  // }



}









