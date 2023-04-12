export interface account{
    id: number;

    password: string;
    role: string;
    username: string;
}

export const Accounts = [
    {
        id: 1,
        name: 'Bilbo',
        password:'secret',
        role:'developer'
    },
    {
        id: 2,
        name: 'Frodo',
        password:'password',
        role:'consumer'
    }
]