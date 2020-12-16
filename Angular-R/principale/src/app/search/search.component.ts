import { Component, OnInit } from '@angular/core';
import { FoodfactsService } from '../foodfacts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string;
  title = 'first-routed-app';
  obsfood: Observable<Object>;
  results: any;

  constructor(public food: FoodfactsService) {

  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsfood = this.food.searchFood(this.query);
    this.obsfood.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.products && res.products) {
      this.results = res.products;
    }
  }

}
