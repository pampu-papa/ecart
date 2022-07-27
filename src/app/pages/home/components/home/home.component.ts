import { Component, OnInit } from '@angular/core';
import { GalleryModalComponent } from 'src/app/modal/gallery-modal/gallery-modal.component';
import {
  NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDateStruct,
  NgbDate,
  NgbModal,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(img:string) {
    //ModalComponent is component name where modal is declare
    const modalRef = this.modalService.open(GalleryModalComponent);
    // modalRef.result.then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // });
    //const modalRef = this.modalService.open(DeletecityCompleteContent);
       modalRef.componentInstance.imgname = img;
    // modalRef.componentInstance.Statecode = this.searchstate;
    // modalRef.componentInstance.moid = this.searchid

  }

}
