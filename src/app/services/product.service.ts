import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:44314/api/products/"
  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ListResponseModel<Product>>{
    let api=this.apiUrl+"getall"
    return this.httpClient.get<ListResponseModel<Product>>(api)
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let api=this.apiUrl+"getbycategory?categoryId="
    return this.httpClient.get<ListResponseModel<Product>>(api+categoryId)
  }
  add(product:Product):Observable<ResponseModel>{
    let api=this.apiUrl+"add"
    return this.httpClient.post<ResponseModel>(api,product)
  }
}
