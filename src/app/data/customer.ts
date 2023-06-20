export class Customer {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  phoneNumber:number=0;
  email:string="";
  address:string="";
  gender:string="";

  constructor( id: number, firstName: string, lastName: string,email: string, phoneNumber:number, address: string, gender:string){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.phoneNumber=phoneNumber;
        this.address=address;
        this.gender=address;
    }

}
