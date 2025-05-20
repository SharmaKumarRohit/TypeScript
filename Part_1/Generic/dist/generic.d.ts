declare function printLength<T extends {
    length: number;
}>(item: T): void;
