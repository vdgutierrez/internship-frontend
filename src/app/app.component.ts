import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentsService } from './services/documents/documents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Frontend';

  companyForm!: FormGroup;
  documents!: any;

  constructor(
    private fb: FormBuilder,
    private documentsService: DocumentsService,
    ) {

    }
  ngOnInit(): void {

    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
      department: ['', Validators.required],
    });
    
    this.documentsService.getAllDocuments().subscribe(resp=>{
      this.documents = resp;
      console.log(resp);
    },
    error => {console.error(error)}
    )

  }

  continue() {
    
  }

}
