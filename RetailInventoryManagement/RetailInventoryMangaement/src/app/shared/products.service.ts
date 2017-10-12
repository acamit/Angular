import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Product } from "./product/product";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductService {
    productUrl:string="http://localhost:61549/api/productapi";

  constructor(private _http:Http) { }

  addNewProduct(product:Product):Observable<any>{
    console.log(product);
    let body:string = JSON.stringify(product);
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.productUrl,body, options )
                      .map(this.extractData)
                      .catch(this.throwError);
  }
  
  searchProducts(searchText:string):Observable<Product[]> {
    if(searchText){
      return this._http.get(this.productUrl + "/search/"+searchText)
              .map(response => response.json() as Product[]);
  
    }else{
      return this._http.get(this.productUrl)
              .map(response => response.json() as Product[]);

    }
    
  }

  searchProductById(id:number):Observable<Product> {
    return this._http.get(this.productUrl+"/getbyid/"+id)
              .map(response => response.json() as Product);

  }

  updateProduct(product:Product):Observable<any>{
    let body:string = JSON.stringify(product);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.productUrl + "/" + product.Id,body, options )
                      .map(this.extractData)
                      .catch(this.throwError);
  }

  DeleteProduct(id:number):Observable<any>{
      return this._http.delete(this.productUrl + "/" + id )
                      .map(this.extractData)
                      .catch(this.throwError);
  }

  extractData(res:Response){
    let body = res.json();
    return body;
  }

  throwError(error:any){
    console.error('post Error :', error );
    return Observable.throw(error.statusText);
  }

}
