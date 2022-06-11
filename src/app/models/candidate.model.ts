class Candidate{
    _id: string;
    name: string;
    address: string;
    age: number;
    imageUrl?: string;

    constructor(id: string, name: string, address: string, age: number , imageUrl?:string){
        this._id = id;
        this.name = name;
        this.address = address;
        this.age = age;
        this.imageUrl = imageUrl;
    }
}

export default Candidate;