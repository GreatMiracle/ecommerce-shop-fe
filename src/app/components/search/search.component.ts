import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.doSearch();
  }

  // tslint:disable-next-line:typedef ban-types
  doSearch(value: String) {
    this.router.navigateByUrl(`/search/${value}`);
  }
}
