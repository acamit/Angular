export class IRequest {
  requestId: string = "";
  firstName: string = "";
  lastName: string = "";
  vehicleRegNumber: number;
  mobileNumber: number;
  address: string = "";
  pickupDate: Date;
  returnDate: Date;

  fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}
