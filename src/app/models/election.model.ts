class Election{
    _id?: string;
    election: string;
    desciption: string;
    startAt: string;
    endAt: string;

    constructor(election: string, description: string, startAt: string, endAt:string , id?:string){
        this._id = id;
        this.election = election;
        this.desciption = description;
        this.startAt = startAt;
        this.endAt = endAt;
    }
}

export default Election;