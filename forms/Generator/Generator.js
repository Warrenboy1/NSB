        var limit = 0
        Hamburger1.onclick = function(s)
        {
        	if (typeof(s) == "object")
        	{
        		return;
        	}
        	if (s === "Form")
        	{
        		// switch the view to Home
        		ChangeForm(Form1);
        	}
        	if (s === "Lister")
        	{
        		// switch the view to Form2
        		ChangeForm(Lister);
        	}
        	if (s === "Home Generator")
        	{
        		// switch the view to Form2
        		ChangeForm(Generator);
        	}
        };
        Generator.onshow = function()
        {
        	NSBPage.appendChild(HeaderGlobal)
        }
        GoRandom.onclick = function()
        {
        	Label1.value = "Having a think..." // loads text string into Label1
        	Image.src = "Pictures\loader1.gif" // loads gif into Image
        	setTimeout(generator, 2000); // sets a timeout for 2 seconds then loads function
        }

        function generator()
        {
        	let lower = 'abcdefghijklmnopqrstuvwxyz'; // The string for Characters in Lower case
        	let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // The string for Characters in Upper case
        	let num = "0123456789"; // Integers for the numbers    
        	var generator = lower + upper + num;
        	generatedPassword = ""; // empty generated password
        	if (limit == 5)
        	{
        		console.log("no.");
        	}
        	else
        	{
        		count = generator.length; // length of the generator using all strings and integers
        		//Slider1.getValue() = length;
        		//length = 9;
        		//localStorage.clear()
        		for (let i = 0; i < length; i++)
        		{
        			randomNum = Math.floor(Math.random() * count); 
// create a random number max amount using length from generator
        			console.log(randomNum);
        			var selected = generator.charAt(randomNum);
        			generatedPassword += selected; // stored as concatenation
        		}
        		const finalPassword = generatedPassword.slice(0, length);
        		console.log(finalPassword);
        		Label1.value = generatedPassword;
        		localStorage.setItem('1', 'localStorage.savedDetails');
        		var savedDetails = localStorage.getItem('1');
        		limit++;
        		var myPasswordDetails = finalPassword + "<br/>";
        		console.log(localStorage.savedDetails)
        		localStorage.savedDetails += myPasswordDetails;
        		console.log(myPasswordDetails);
        	}
        }
        length1.onkeyup = function()
        {
        	length = length1.value;
        }
        // get rid of the undefined before first password - done
        // set a limit of 5 passwords
        Copy.onclick = function()
        {
        	var copyText = document.getElementById("Label1"); // Get the text field
        	// Select the text field
        	navigator.clipboard.writeText(copyText.value); // Copy the text inside the text field
        	alert("Copied the text: " + copyText.value);
        }
