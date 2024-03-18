//Methods of String
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);

// console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);


// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const index = 4;

// console.log(
//   `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
//     index,
//   )}`,
// );


// Embedded expressions

const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);

//Using template literals

const fivee = 5;
const tenn = 10;
console.log(`Fifteen is ${fivee + tenn} and not ${2 * fivee + tenn}.`);

// Internationalization

// Date and time formatting

const formatter= new Intl.DateTimeFormat("locale")
// const formatter= new Intl.DateTimeFormat("es")
console.log(formatter.format(new Date()));

const datey= new Intl.DateTimeFormat(undefined,{
    dateStyle:"long"
})
console.log(datey.format(new Date()));

const relati= new Intl.RelativeTimeFormat(undefined)
console.log(relati.format(-43,"minutes"));
console.log(relati.format(-43,"day"));
console.log(relati.format(43,"hour"));
console.log(relati.format(-43,"hour"));

const numformat= new Intl.NumberFormat(undefined,{
    currency:"EUR",
    style:"currency"
})
console.log(numformat.format(234))
const litres= new Intl.NumberFormat(undefined,{
    unit:"liter",
    style:"unit", 
    // notation:"compact",
    minimumFractionDigits:"2"
})
console.log(litres.format(235747364862.0979768))

const letter= new Intl.PluralRules(undefined)
console.log(letter.select(0));


const hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
    style: "currency",
    currency: "CNY",
  });
  
  console.log(hanDecimalRMBInChina.format(1314.25));

  //Collation.
  const names = ["Appalis", "Rosegoldie", "Perry"];

  const dictionary = new Intl.Collator(undefined)
  console.log(names.sort(dictionary.compare).join(","));