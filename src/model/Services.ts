export default class Services {
    id: number
    name: string
    content: string

    constructor(data: any) {
        this.id = data.id
        this.name = data.name
        this.content = data.content
    }
}

