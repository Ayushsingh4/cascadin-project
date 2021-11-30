import { Component, OnInit } from '@angular/core';
import { IProduct, Item, ISelectVal, IBrand } from '../interface';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-cascade',
  templateUrl: './cascade.component.html',
  styleUrls: ['./cascade.component.css']
})
export class CascadeComponent implements OnInit {

  productList: IProduct[] = [];
  brandListAll: IBrand[] = [];
  itemsListAll: Item[] = [];

  brandList: IBrand[] = [];
  itemList: Item[] = [];


  selectedValues: ISelectVal[] = [];
  selectedVal: ISelectVal = <ISelectVal>{}; // set all selected values

  // for show / hide 
  isProductSelect: boolean = true; 
  isBrandSelect: boolean = false;
  isItemsSelect: boolean = false;
  textProduct: String;
  textBrand: string;
  brandSelect:boolean =true;
  //Types

  typeItem :string = "Item";
  typeBrand: string = "Brand";
  typeProduct: string = "Product";
  allProductList: any = [];
  productLists: any =[];

  constructor(
    private commonService: ProductService
  ) { }

  ngOnInit(): void {
    this.GetAllData();
    this.allProductList = this.commonService. getproductType();
    this.productLists = this.commonService. getproductType();
    console.log(this.allProductList);
  }
  
  
  GetAllData() {
    this.productList = this.commonService.getProducts();
    this.brandListAll = this.commonService.getBrands();
    this.itemsListAll = this.commonService. getproductType();
  }

  onSelect(val, selectType) {

    this.selectedVal = <ISelectVal>{};

    this.selectedVal.text = val.name;
     this.textProduct  = val.name
    if (selectType == this.typeProduct

) {   
      this.brandList = this.brandListAll.filter(f => f.brandType == val.name); 
      this.isProductSelect = false;
      this.isBrandSelect = true;
      this.selectedVal.type = this.typeProduct;
      this.allProductList = this.productLists.filter(f => f.product == val.name)
      console.log(this.productLists);
      console.log(val);
    }
    else if (selectType == this.typeBrand

) {
      this.allProductList = this.itemsListAll.filter(f => f.productType == val.productTyp); // can make DB call
      this.isBrandSelect = false;
      this.isItemsSelect = true;
      this.selectedVal.type = this.typeBrand
      this.textBrand = val.text
      this.brandSelect = false;
;
    }
    else if (selectType == this.typeItem

) {
      this.isItemsSelect = false;
      this.selectedVal.type = this.typeItem

;
    }
    this.selectedValues.push(this.selectedVal);
  }

  deleteSelects(val, selectType) {

    if (selectType == this.typeProduct

) {
      this.isBrandSelect = false;
      this.isItemsSelect = false;
      this.isProductSelect = true;
    }
    else if (selectType == this.typeBrand

) {
      this.isItemsSelect = false;
      this.isBrandSelect = true;

    }
    else if (selectType == this.typeItem

) {
      this.isItemsSelect = true;
    }

    // remove data from selected list
    let idx = this.selectedValues.findIndex(f => f.type == selectType);
    this.selectedValues.map((cm, i) => {
      if (i >= idx) {
        this.selectedValues.splice(i);
      }
    });
    
  }

}
