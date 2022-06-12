class Vote{
    _id?: string;
    voteFor: string;
    vin: string;
    pollingUnit: string;
    votedParty: string;
    votedAt: string;


    constructor(voteFor:string, vin: string, pollingUnit: string, votedParty: string, votedAt: string , id?:string){
        this._id = id;
        this.voteFor = voteFor;
        this.vin = vin;
        this.pollingUnit = pollingUnit;
        this.votedParty = votedParty;
        this.votedAt = votedAt;
    }
}

export default Vote;