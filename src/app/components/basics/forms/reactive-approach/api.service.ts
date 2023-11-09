import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface ICompany {
  id?: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private subject$ = new BehaviorSubject<ICompany[]>([]);
  private companies: ICompany[] = [];
  private url =
    'https://nmondo-9533b-default-rtdb.europe-west1.firebasedatabase.app/companies.json';

  private http = inject(HttpClient);

  refresh() {
    this.subject$.next(this.companies); // informs subscribers that new data has arrived and passes it to them
  }

  //GET REQ
  getCompanies() {
    this.http.get<ICompany>(this.url).subscribe({
      next: (data) => {
        if (!data) return;
        const companies: ICompany[] = Object.entries(data).map(
          ([id, company]) => {
            return {
              id: id,
              ...company,
            };
          },
        );
        this.companies = companies;
        console.log(this.companies);
        this.refresh();
      },
      error: (err) => console.log(err),
    });
  }

  //POST REQ
  addCompany(company: ICompany) {
    return this.http.post<ICompany>(this.url, company).pipe(
      //TODO -ne radi- tap((company) => this.companies.push(company)),
      tap(() => this.getCompanies()), //gets the updated list of companies (with just submitted)
    );
  }

  $Company() {
    return this.subject$.asObservable();
  }
}
