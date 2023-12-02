import { Injectable } from '@angular/core';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor() { }

  generarPDF(){
    const element:any= document.getElementById('pdfContent');
    html2canvas(element).then((canvas)=>{

      const imgData=canvas.toDataURL('imgpng');
      const pdf= new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfwidth =  pdf.internal.pageSize.getHeight();
      const pdfHeight = (imgProps.height * pdfwidth)/imgProps.width;

      pdf.addImage(imgData,'PNG',0,0,pdfwidth,pdfHeight);
      pdf.save('report.pdf');
    })
  }
}
