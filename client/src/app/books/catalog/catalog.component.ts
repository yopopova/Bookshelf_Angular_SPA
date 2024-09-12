import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
    constructor(private api: ApiService) {}

    ngOnInit(): void {
        this.api.getAllBooks().subscribe(books => {
            console.log(books);            
        });
    }
}
