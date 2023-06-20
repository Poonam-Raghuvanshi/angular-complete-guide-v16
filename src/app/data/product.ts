export class Product{
    id: number = 0;
    name: string = '';
    brand: string = '';
    productionDate: Date = new Date();
    expiryDate: Date=new Date();

    constructor( id: number,name: string, brand: string,productionDate: Date,expiryDate: Date){
        this.id=id;
        this.name=name;
        this.brand=brand;
        this.productionDate=productionDate;
        this.expiryDate=expiryDate;
    }
}