
function isPalindrome(inputString){
  // strip non-alpha characters: 
  var alphaOnly = "";
  for (var index = 0; index < inputString.length; index++){
    var char = inputString[index];
  // only add a-z and A-Z to new string
    if ((char >= 'a' && char <= 'z' ) || (char >= 'A' && char <= 'Z')) {
      alphaOnly += char.toLowerCase();
    }
  }
  // check first letter against last letter, second against second last, etc
  // i must be same as length - 1 - i
  for (var index = 0; index < Math.ceil(alphaOnly.length / 2); index++){
    var first = alphaOnly[index];
    var second = alphaOnly[alphaOnly.length - 1 - index];
    if (first !== second){
      // if any don't match return false, otherwise it's a palindrome
      return false;
    }
  }
  return true;
}


console.log("Palindrome Test:");
var palindromeTest = ["otto", 
  "Glenelg",
  "Race car",
  "Stressed desserts",
  "Stressed deserts",
  "Is this a palindrome? Probably not eh?",
  "A man a plan a canal panama",
  "I love palindromes but this isn't one",
  "Go hang a salami, I'm a lasagna hog",
  "Are we not drawn onward to new era?",
  "Regal draught?! Ron, plug it. I gulp North Guard Lager.",
  "Eva can I stab bats in a cave?",
  "Bats it is. I sit. I stab.",
  "Dammit I'm mad. Evil is a deed as I live. God, am I reviled? I rise, my bed on a sun, I melt. To be not one man emanating is sad. I piss. Alas, it is so late. Who stops to help? Man, it is hot. I'm in it. I tell. I am not a devil. I level \"Mad Dog\". Ah, say burning is, as a deified gulp, In my halo of a mired rum tin. I erase many men. Oh, to be man, a sin. Is evil in a clam? In a trap? No. It is open. On it I was stuck. Rats peed on hope. Elsewhere dips a web. Be still if I fill its ebb. Ew, a spider… eh? We sleep. Oh no! Deep, stark cuts saw it in one position. Part animal, can I live? Sin is a name. Both, one… my names are in it. Murder? I'm a fool. A hymn I plug, deified as a sign in ruby ash, A Goddam level I lived at. On mail let it in. I'm it. Oh, sit in ample hot spots. Oh wet! A loss it is alas (sip). I'd assign it a name. Name not one bottle minus an ode by me: \"Sir, I deliver. I'm a dog\"Evil is a deed as I live. Dammit I'm mad."
  ];

for (p in palindromeTest){
  var pal = palindromeTest[p]
  console.log(pal, isPalindrome(pal));  
}



