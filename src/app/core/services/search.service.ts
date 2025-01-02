import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class SearchService {
    private searchSubject = new BehaviorSubject<string>(""); //stock the current value
    search$ = this.searchSubject.asObservable();

    setSearch(value: string) {
        this.searchSubject.next(value); //update value
    }
}