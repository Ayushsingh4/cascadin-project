import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return [
      { id: 1, name: "TV" },
      { id: 2, name: "Laptop" },
      { id: 3, name: "Phone" },
    ]
  }

  getBrands() {
    return [
      { id: 1, brandType: 'TV', name: 'MI', productTyp: 'miTV' },
      { id: 2, brandType: 'TV', name: 'Samsung', productTyp: 'samsungTv' },
      { id: 4, brandType: 'TV', name: 'Apple' , productTyp:'appleTv' },


      { id: 5, brandType: 'Laptop', name: 'Apple' , productTyp:'appleLap' },
      { id: 6, brandType: 'Laptop', name: 'Lenevo', productTyp:'lenvoLap'},

      { id: 8, brandType: 'Phone', name: 'Apple' , productTyp:'appleMob'},
      { id: 9, brandType: 'Phone', name: 'Samsung', productTyp:'samsungMob' },
      { id: 10, brandType: 'Phone', name: 'MI' , productTyp:'miMob'},

    ];
  }

  getproductType() {
    return [
      { id: 1, productType: 'miTV', name: 'Xiaomi Mi TV 4A 40 inch LED Full HD' , product:'TV', image: 'assets/img/mi-tv-4a-40-1300x800-1568712318.jpg', price: '₹21,599' },
      { id: 2, productType: 'miTV', name: 'Xiaomi Mi TV 4X 55 inch LED 4K TV' , product:'TV', image: 'assets/img/mi-55.jpg', price: '₹38,999'},

      { id: 3, productType: 'samsungTv', name: 'Samsung UA50AUE70AK 50 inch UHD Smart LED TV' , product:'TV', image: 'assets/img/samsung-tv1.jpg' , price: '₹58,990' },
      { id: 4, productType: 'samsungTV', name: 'Samsung UA24K4100AR 24 Inch HD Ready LED TV',  product:'TV', image: 'assets/img/samsung-tv2.jpg' , price: '₹14,300'},

      { id: 3, productType: 'appleTv', name: 'Apple TV 4k(32GB)',  product:'TV' ,image: 'assets/img/apple-tv1.jpg', price: '₹19,480' },
      { id: 4, productType: 'appleTv', name: 'Apple TV Plus',  product:'TV', image: 'assets/img/apple-tv-plus.jpg', price: '₹1,55,000'},


      { id: 3, productType: 'appleLap', name: 'Apple MacBook Pro 16-inch' , product:'Laptop',image: 'assets/img/apple-lap16.jpg' , price: '₹2,19,000'},
      { id: 4, productType: 'appleLap', name: 'Apple MacBook Pro 14-inch' ,product:'Laptop',image: 'assets/img/apple-lap14.jpg' , price: '₹1,94,900'},

      { id: 3, productType: 'lenvoLap', name: 'Lenevo V14 Ryzen', product:'Laptop' ,image: 'assets/img/41xyAfykpeL.jpg', price: '₹31,010' },
      { id: 4, productType: 'lenvoLap', name: 'Lenevo IdeaPad Slim 3',  product:'Laptop', image: 'assets/img/a-3-500x500.jpg', price: '₹38,490' },


      { id: 5, productType: 'samsungMob', name: 'Samsung Galaxy M32 5G',  product:'Phone', image: 'assets/img/samsung-m32.jpg', price: '₹20,999' },
      { id: 6, productType: 'samsungMob', name: 'Samsung Galaxy M31',  product:'Phone',  image: 'assets/img/samsung-galaxy-m31-raw-1634130.jpg', price: '₹16,999' },

      { id: 7, productType: 'appleMob', name: 'Apple iphone 13 Pro Max' ,  product:'Phone', image: 'assets/img/iphone-13-pro-family-hero.png', price: '₹139,900' },
      { id: 8, productType: 'appleMob', name: 'Apple iphone 12 mini',  product:'Phone', image: 'assets/img/apple-12mini.jpg' , price: '₹57,900' },

      { id: 3, productType: 'miMob', name: 'Mi 10i 5G',  product:'Phone', image: 'assets/img/Xiaomi-Mi-10i-5G-500x500.jpg', price:'₹23,999' },
      { id: 4, productType: 'miMob', name: 'Redmi Note 10 Lite Aurora Blue',  product:'Phone' ,  image: 'assets/img/mi.jpg', price: '₹15,999' },

    ];
  }

  getAllProducts(){
    
  }
}

