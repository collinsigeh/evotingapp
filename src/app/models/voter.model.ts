class Voter{
    _id?: string;
	voterFor: string;
	firstName: string;
	lastName: string;
	middleName?: string;
	gender: string;
	dob: string;
	imageURL?: string;
	imageCode?: string;
	fingPrintURL?: string;
	fingPrintCode?: string;
	vin: number;
	pollingUnit: string;
	isVerified: boolean;
	lastVerifiedAt: string;

    constructor(voterFor: string, firstName: string, lastName: string, gender: string, dob: string, vin: number, pollingUnit: string, isVerified: boolean, lastVerifiedAt: string,  fingerPrintUrl?: string, fingerPrintCode?: string, imageUrl?: string, imageCode?: string, middleName?: string, id?: string){
        this._id = id;
        this.voterFor = voterFor;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.gender = gender;
        this.dob = dob;
        this.imageURL = imageUrl;
        this.imageCode = imageCode;
        this.vin = vin;
        this.pollingUnit = pollingUnit;
        this.isVerified = isVerified;
        this.lastVerifiedAt = lastVerifiedAt;
    }
}

export default Voter;