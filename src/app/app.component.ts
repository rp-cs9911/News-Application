import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsServiceService } from './services/news-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  params!: any;
  dataSub!: Subscription;
  rowData: any = [];

  form!: UntypedFormGroup;
  constructor(
    private newsSvc: NewsServiceService,
    private ngbModal: NgbModal
  ) {}

  ngOnInit() {
    this.initForm();
    this.getNewsData();
  }

  initForm(){
    this.form = new UntypedFormGroup({
      email :  new UntypedFormControl('', [Validators.required]),
      password :  new UntypedFormControl('', [Validators.required]),
    });
  }

  getNewsData() {
    this.dataSub = this.newsSvc.getData().subscribe((res: any) => {
      console.log(res);
      this.rowData = res ? res.articles : [];
    })
  }

  columnDefs = [
    {
      headerName: 'Title',
      field: 'title',
    },
    {
      headerName: 'Author',
      field: 'author',
    },
    {
      headerName: 'Content',
      field: 'content',
    },
    {
      headerName: 'Description',
      field: 'description',
    },
    {
      headerName: 'PublishedAt',
      field: 'publishedAt',
    },
  ]

  defaultColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,
    filterParams: {
      buttons: ['reset']
    }
  }

  onGridReady(params: any) {
    this.params = params;
  }

  onRowClick({data}: any) {
    const ngbRef = this.ngbModal.open(NewsDetailComponent, {
      size: 'xl', centered: true
    });

    ngbRef.componentInstance.data = data;
  }

  ngOnDestroy(): void {
    if (this.dataSub) this.dataSub.unsubscribe();
  }
}
