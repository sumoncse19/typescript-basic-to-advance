{
  /*
  <--------- Ternary operator --------->
  */
  const age: number = 15;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not adult");
  }

  console.log("\n<----- With Ternary ----->");
  age >= 18 ? console.log("Adult") : console.log("Not adult");

  /*
  <--------- nullish coalescing operator --------->
  */
  // * We'll use it when we need to make decision depends on null / undefined

  // const isAuthenticate = null;
  // const isAuthenticate = undefined;
  const isAuthenticate = "";

  const result1 = isAuthenticate ?? "Guest"; // When isAuthenticate will be null or undefined
  const result2 = isAuthenticate ? isAuthenticate : "Guest";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Sumon",
    address: {
      city: "Chattogram",
      road: "Mia Khan Nagar",
      presentAddress: "Bakalia",
    },
  };

  // const permanentAddress = user.address.permanentAddress;
  const permanentAddressWithOptional = user?.address?.permanentAddress;
  console.log({ permanentAddressWithOptional }); // { permanentAddress: undefined }
  const permanentAddressWithNullish =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddressWithNullish }); // { permanentAddressWithNullish: 'No Permanent Address' }
}
