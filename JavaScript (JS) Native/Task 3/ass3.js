var input = prompt("Enter a palindrome word");

// Start from leftmost and rightmost corners of str 
var l = 0; 
var h = input.length - 1; 
var flag= 0;

// Keep comparing characters while they are same 
while (h > l) 
{ 
    if (input[l++] != input[h--]) 
    { 
        document.write(input+" is Not Palindrome. "); 
        l=h;
        flag++;
    } 
} 
if(!flag)
    document.write(input+" is palindrome."); 