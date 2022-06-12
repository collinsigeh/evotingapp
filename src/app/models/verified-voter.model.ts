class verifiedVoter{
    _id?: string;
	votingFor: string;
	vin: string;
	pollingUnit: string;

    constructor(votingFor: string, vin: string, pollingUnit: string, id?: string){
        this._id = id;
        this.votingFor = votingFor;
        this.vin = vin;
        this.pollingUnit = pollingUnit;
    }
}

export default verifiedVoter;