export interface account{
    id: number;
    name: string;
    password: string;
    role: string;
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