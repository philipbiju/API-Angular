import { DatePipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HighlightDirective } from '../../highlight.directive';
import { product } from '../../product/product.interface';
import { CardComponent } from '../../ui/card/card.component';
import { HttpClient } from '@angular/common/http';

 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, HighlightDirective, CardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  text = Date.now();

  constructor(public http: HttpClient){}

  list: product[] = []

  // ngOnInit() {
  //   http.get<Config>('/api/config').subscribe(config => {
  //     // process the configuration.
  //   });
    
  // }
 
  categorizedProducts: { [key: string]: product[]} = {};
 
  async ngOnInit() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      this.categorizeProducts(data.products);
      console.log(this.categorizedProducts);
    } catch (error) {
      console.log(error);
    }
  }
 
  categorizeProducts(products: product[]) {
    this.categorizedProducts = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {} as { [key: string]: product[] });
  }
  getCategories(): string[] {
    return Object.keys(this.categorizedProducts);
  }
 
  getProductsByCategory(category: string): product[] {
    return this.categorizedProducts[category];
  }
 
  productSelected(product: product){
    alert(`Product ${product.title} selected`);
  }
}