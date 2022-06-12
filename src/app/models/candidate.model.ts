class Candidate{
    _id?: string;
    candidateFor: string;
    party: string;
    partyLogoUrl: string;

    constructor(candidateFor: string, party: string , partyLogoUrl:string, id?: string){
        this._id = id;
        this.candidateFor = candidateFor;
        this.party = party;
        this.partyLogoUrl = partyLogoUrl;
    }
}

export default Candidate;