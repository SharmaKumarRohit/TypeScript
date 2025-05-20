type userData = {
    id: number;
    name: string;
    age: number;
    readonly [key: string]: number | string;
};
declare const person: userData;
