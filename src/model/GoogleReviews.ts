export default class GoogleReviews {
    public id: number;
    public name: string;


    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    public static createFromPayload(payload: any): GoogleReviews
    {
        return new GoogleReviews(
            payload.id,
            payload.name
        )
    }
}