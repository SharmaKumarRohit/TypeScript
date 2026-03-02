interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website?: string;
  company: Company;
}

const user: User = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  //   website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

// Partial<T> is a built-in utility type that makes all properties of a type optional.
type PartialUser = Partial<User>;
const user2: PartialUser = {
  id: 1,
  name: "myname",
};

// Required<T> is a built-in utility type that makes all properties of a type required. It is useful when you want to ensure that no property is optional.
type StrictUser = Required<User>;
const user3: StrictUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
console.log(user3);

// Readonly utility
type ReadonlyUser = Readonly<User>;
const user4: ReadonlyUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
// user4.name = "Rohit"

// Pick<T, K> is a built-in utility type that creates a new type by selecting specific properties (K) from an existing type (T).
type PickUser = Pick<User, "name" | "email">;
const user5: PickUser = {
  name: "Rohit",
  email: "rohit@gmail.com",
};

// Omit<T, K> is a built-in utility type that creates a new type by removing specific properties (K) from an existing type (T).
type OmitUser = Omit<User, "address" | "company">;
const user6: OmitUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  phone: "1-770-736-8031 x56442",
  // website: "hildegard.org",
};

// Record<K, T> is a built-in utility type that creates an object type with specific keys (K) and value type (T). It is useful for defining objects with known key types.
type UserRole = "admin" | "editor" | "viewer";
type UserPermissions = Record<UserRole, boolean>;
const permissions: UserPermissions = {
  admin: true,
  editor: false,
  viewer: true,
};

// Exclude<T, U> is a built-in utility type that removes from type T all types that are assignable to type U. It is mainly used with union types.
type Roles = "admin" | "user" | "guest";
type NonGuestRole = Exclude<Roles, "guest">;

// ReturnType<T> is a built-in utility type that extracts the return type of a function type T. It helps reuse and infer function return types.
function getUser() {
  return { id: 1, name: "Rohit", age: 24 };
}
type UserReturn = ReturnType<typeof getUser>;
