// keyof is used to get the union of property names (keys) of a type.
// typeof is used to get the type of a variable or value.
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};
for (let key in user) {
    console.log(`${key} : ${user[key]}`);
}
// Suppose agar user type ka interface nahi hota to user ka type find karna hoga
const user2 = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};
// type UserType = typeof user2;
// for (let key in user2) {
//   console.log(`${key} : ${user2[key as keyof UserType]}`);
// }
for (let key in user2) {
    console.log(`${key} : ${user2[key]}`);
}
export {};
