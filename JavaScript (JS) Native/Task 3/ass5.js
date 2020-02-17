var input = prompt("Enter any statment : ");
counter = 0;
for (i=0 ; i<input.length ; i++)
    {
        if(input[i]=='e')
            counter++;
    }
document.write("number of e = "+counter);