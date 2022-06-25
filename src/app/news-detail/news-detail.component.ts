import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  @Input() data: any;

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  closeModal() {
    this.activeModal.close();
  }

}
