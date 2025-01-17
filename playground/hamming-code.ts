/*
 * This code was an attempt to test my understanding of the core algorithm after watching this video by 3blue1brown https://www.youtube.com/watch?v=b3NxrZOu_CE
 */

// const exractBits = {
//   one: (xorValue: number) => xorValue % 10,
//   ten: (xorValue: number) => Math.floor((xorValue % 100) / 10),
//   hundred: (xorValue: number) => Math.floor((xorValue % 1000) / 100),
//   thousand: (xorValue: number) => Math.floor(xorValue / 1000),
// };

function getParityBits(xorValue: number): number[] {
  // const p1: number = 1,
  //   p2: number = 2,
  //   p3: number = 4,
  //   p4: number = 8;
  // let bitArray: number[] = xorValue.toString().split('').map(Number);
  let result: number[] = [];

  if (xorValue & 1) result.push(1);
  if (xorValue & 2) result.push(2);
  if (xorValue & 4) result.push(4);
  if (xorValue & 8) result.push(8);
  return result;
}

function hammingCode() {
  const dataBlock: number[] = [1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1];
  // Array(16)
  //   .fill(0)
  //   .map(() => (Math.random() < 0.5 ? 0 : 1));
  console.log("Data Block: ", dataBlock);

  // storing the indices of the data where the bit is one
  let onePos: number[] = [];

  dataBlock.forEach((value, index) => {
    if (value === 1) onePos.push(index);
  });

  console.log("One Positions: ", onePos);

  const xorValue: number = onePos.reduce((acc, curr) => acc ^ curr, 0);
  console.log(
    "XOR value: ",
    xorValue,
    "\nBinary representation: ",
    parseInt(xorValue.toString(2).padStart(4), 10),
  );

  const parityBits = getParityBits(xorValue);
  console.log("Parity bits that need to be set: ", parityBits);
  let codedData: number[] = [];

  dataBlock.forEach((v, i) => {
    if (parityBits.includes(i)) {
      codedData.push(v ^ 1); // i made a mistake doing a bitwise not `~` resulted in a negative number due to the way numbers are represented in two's complement form
    } else {
      codedData.push(v);
    }
  });

  console.log("Coded Data: ", codedData);

  // XOR the indices of the `1` values in the codedData to check if the coding is successful
  const xorOfIndices = codedData
    .map((value, index) => (value === 1 ? index : -1)) // Only consider indices where the value is 1
    .filter((index) => index !== -1) // Remove -1 values (positions where the value was not 1)
    .reduce((acc, curr) => acc ^ curr, 0); // XOR all the indices

  console.log(
    "Checking if it's been coded properly =====> ",
    `Data coded ${xorOfIndices === 0 ? "successfully" : "unsuccessfully"}`,
  );

  console.log("Contaminating the data: ");
  const contaminatedData: number[] = [...codedData];
  contaminatedData[5] ^= 1;

  console.log(
    "Finding contaminated data",
    "\nFound one at index: ",
    contaminatedData
      .map((value, index) => (value === 1 ? index : -1))
      .filter((v) => v !== -1)
      .reduce((acc, curr) => acc ^ curr, 0),
  );
}

hammingCode();
