/**
 * _____________THE GIVEN PROBLEM 🤔_____________
 * !__1) Slugify Function
 * @desc |  Write a function called slugify that takes a string as input and converts it into a slug. A slug is a URL-friendly string where spaces are replaced with hyphens, and all characters are converted to lowercase. The slugified string should only contain lowercase alphabets, numbers, and hyphens.
 * ??? | For example, given the input string "Hello World, How are you?", the slugified output should be "hello-world-how-are-you".
 * TODO | Requirements
  - The slugified output should only contain lowercase alphabets, numbers, and hyphens. All other characters (such as spaces, punctuation marks, and special characters) should be removed.
  - If there are multiple consecutive spaces in the input string, they should be replaced with a single hyphen in the slugified output.
  - Leading and trailing spaces should be trimmed from the input string before slugification.
  - You can assume that the input string will always be a valid string (non-empty).
 */

//_____________LET'S SOLVE IT 🔧🔑_____________//
/*
INPUT "   Hello @, FRoM |   StreEt *12*  " ==> RESULT_EXPECTED "hello-from-street-12"
to reach to the expected result we need 
1) remove any punctuation marks, and special characters
2) remove spaces from the start and the end
3) convert the input string to lowercase
4) replace spaces between words by hyphens "-"
*/
function slugify(str) {
  //_CHECK_STRING_IS_EXIST
  if (!str) throw new Error("Please enter a valid string");

  // 1) remove any punctuation marks, and special characters
  // I search for regular expressions to remove punctuation marks, special characters and underscores
  // * @desc [^\w\s] ==> the matched punctuation marks, special characters
  // * @desc _ ==> the matched underscores
  // str = str.replace(/[^\w\s]|_/g, "");

  // 2) convert to lowercase and remove spaces from the start and the end
  // str = str.toLowerCase().trim();

  // 3) replace long spaces between words (Collapse spaces) with "-"
  // I search for regular expressions to remove long spaces between words
  // * @desc /\s+/g ==> matches one or more whitespace characters in a string
  // str = str.replace(/\s+/g, "-");

  return str
    .replace(/[^\w\s]|_/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}

console.log(
  "|" +
    slugify(
      "  H!!!el?lo @, F%!Ro!#M |  $%&^*(*&()) StreEt *12*  ? ?! __ #  _ Ca_iro "
    ) +
    "|"
); // hello-from-street-12-cairo

slugify(""); // Please enter a valid string
// slugify(); // Please enter a valid string
