import {
  Component,
  OnInit
} from '@angular/core';
import {  NgForm } from "@angular/forms";
import {  ActivatedRoute, Router } from "@angular/router";
import {  ProductService } from "../../shared/products.service";
import {  Product } from "../../shared/product/product";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  buttonText:string = "Add Product";
  buttonAction:boolean = true;

  constructor(private _product: ProductService, private _router: ActivatedRoute , private _route:Router) {}

  ngOnInit() {
    console.log("On init " + JSON.stringify( this.product));
    let productId = this._router.snapshot.params["id"];
    if (productId) {
      this.buttonText = "Update Product";
      this.buttonAction = false;
      this._product.searchProductById(productId).subscribe(data => {
        data = JSON.parse(JSON.stringify(data));
        this.product = data[0]
      }, error => console.log(error));
    }
  }

  addNewProduct(productAddForm: NgForm) {
    
    //validations
    console.log("value = "+  productAddForm.value);
   console.log("product = " + this.product)
    if(this.buttonAction){
    this._product.addNewProduct(this.product)
      .subscribe(
        data =>{console.log('success : ' + data);
        this._route.navigate(['/admin']);
    },
        error => console.log('error : ' + error)
      );
    }else{
       this._product.updateProduct(this.product)
      .subscribe(
        data => {console.log('success : ' + data);
        this._route.navigate(['/admin']);
    },
        error => console.log('error : ' + error)
      );
    }
  }

  CancelUpdate(form:NgForm){
    if(form.dirty){
      let confirmation = confirm("All changes will be lost");
      if(!confirmation){
        return;
      }
    }

    this._route.navigate(['/admin']);
  }

  DeleteProduct(id:number){
    let confirmation = confirm("Product will be deleted");
      if(!confirmation){
        return;
      }

      this._product.DeleteProduct(id).subscribe(
        data=>{
          console.log(data);
          this._route.navigate(['/admin']);
        },
        error=>{ 
          console.log(error);
          alert("Internal Server Error");
        }
      )
  }


}
