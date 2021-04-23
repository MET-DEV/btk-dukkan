import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productAddedToCart=false
  products:Product[]=[]
  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.productService.getProducts().subscribe(response=>this.products=response.data)
  }
  addToCart(product:Product){
    this.productAddedToCart=false
    this.cartService.add({productId:product.id,userId:6,count:1,id:0}).subscribe(response=>{
      this.productAddedToCart=true
    })
  }
}
