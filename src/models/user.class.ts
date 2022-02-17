export class User{
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    email: string;

    constructor(object?: any){
        this.firstName = object ? object.firstName : '';
        this.lastName = object ? object.lastName : '';
        this.birthDate = object ? object.birthDate : 0;
        this.street = object ? object.street : '';
        this.zipCode = object ? object.zipCode : '';
        this.city = object ? object.city : '';
        this.email = object ? object.email : '';
    }

    toJSON(){
        return {
            firstName:  this.firstName,
         lastName: this.lastName,
         email: this.email,
        birthDate:  this.birthDate,
        street: this.street,
        zipCode: this.zipCode,
        city : this.city,
        }
    }
}