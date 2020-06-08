export class User {
    id: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
    Balance: number;
    CurrentSubscription: any = {
        Packs: Array,
        Channels: Array,
        Services: Array
    };
}

