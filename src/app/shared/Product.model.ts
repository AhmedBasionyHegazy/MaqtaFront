export class Product {
    productId:number=0;
    name :string='';
    price:number=0;
    description :string='';
}

export class ResponseDto{
    isSuccess:boolean=false;
    result:any;
    displayMessage:string='';
    errorMessages:string[]=[];  
}
