{
  /*
  <--------- type assertion --------->
  */

  let anything: any;
  anything = 10;
  anything = "Sumon";
  anything = true;

  // (anything as number).
  // (anything as string).
  // (anything as boolean).

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;

  type CustomError = {
    message: string;
  };

  try {
    console.log("From try");
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
