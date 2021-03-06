import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService, ICompany } from '../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactiveform-new',
  templateUrl: './reactiveform-new.component.html',
  styleUrls: ['./reactiveform-new.component.css']
})
export class ReactiveformNewComponent implements OnInit, OnDestroy {

  company!: ICompany;
  subscription$?: Subscription;

  coForm = this.formBuilder.group({
    name: ['', [Validators.required]], //Validators.minLength(10)
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  get f() { return this.coForm.controls; }

  onSubmit() {
    this.company = this.coForm.value;
    this.subscription$ = this.apiService.addCompany(this.company).subscribe({
      error: (err) => console.warn(err)
    })
    this.coForm.reset()
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription$?.unsubscribe();
  }

}