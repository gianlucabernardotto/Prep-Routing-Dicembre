import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { FoodfactsService } from '../foodfacts.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
routeObs: Observable<ParamMap>;
  obsfood: Observable<Object>;
  food: any;

  constructor(
    private route: ActivatedRoute,
    private service: FoodfactsService,
    private location: Location ) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let id = params.get('id');
    console.log (id);

    this.obsfood = this.service.getFood(id) ;
    this.obsfood.subscribe((data)=>this.food = data)
  }

    back() : void
    {
        this.location.back();
    }

}
