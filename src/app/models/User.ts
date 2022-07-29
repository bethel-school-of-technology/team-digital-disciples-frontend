export class User {
    private id: number;
    private firstName: string;
    private lastName: string;
    private username: string;
    private token: string;

    constructor(id: number, firstName: string, lastName: string, username: string, token: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.token = token;
    }
}