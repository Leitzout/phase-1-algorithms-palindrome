function isPalindrome(word) {
  // Write your algorithm here
  let w = word.length -1;
  for( let i = 0 ; i < w/2 ;i++)
  {
    let x = word[i] ;//forward character
    let y = word[w-i];//backward character
    if( x != y)
    {
      return false;
    }
  }
  return true;

}

/*
  Add written explanation of your solution here
- iterate over the string, forwards and backwards
- See if letters match forwards and backwards - true
- Does not matches - false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
