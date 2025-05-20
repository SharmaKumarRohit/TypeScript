interface userData {
    name: string;
    city: string;
}
interface userInfo {
    id: number;
    email: string;
}
declare let data1: userData | userInfo;
declare let data2: userData | userInfo;
declare function checkDetail(data: userData | userInfo): void;
