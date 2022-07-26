var sample = function () {
    // var a = (b = 3);
    // By Value: string, number, boolean,
    // Memory stack:  a ---> 0011 (3 decimal)
    // Memory stack:  b ---> 0011 (3 decimal)
    var a = (b = [3, 4]);
    // By Reference: array, object
    // a ---> {array starting address} ---> {8, pointer to next} --> {4, pointer to next}
    // b ---> {array starting address} -^
  
  
    console.log(`Local a: ${a}`);
    console.log(`Local b: ${b}`);
    console.log("----");
    b[0] = a[0] + 5;
    console.log(`Local a: ${a}`);
    console.log(`Local b: ${b}`);
  };
  sample();
  console.log("Is a defined?", typeof a !== "undefined");
  console.log("Is b defined?", typeof b !== "undefined");