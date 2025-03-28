const API_KEY = "YOUR_OPENAI_API_KEY"; // Replace with your actual API Key

document.getElementById("submitCase").addEventListener("click", function() {
    let userInput = document.getElementById("caseInput").value;
    
    if (!userInput) {
        alert("Please enter a case description!");
        return;
    }

    document.getElementById("sherlockResponse").innerText = "Analyzing... 🔍";

    fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { 
                    role: "system", 
                    content: "You are Sherlock Holmes, the greatest detective. Analyze cases using logical deduction, forensic science, and psychology. Provide structured, detailed responses in Victorian English. Ask for more clues if needed." 
                },
                { role: "user", content: `Case: ${userInput}. What are your deductions?` }
            ],
            temperature: 0.5,
            max_tokens: 200
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("sherlockResponse").innerText = data.choices[0].message.content;
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("sherlockResponse").innerText = "I am unable to deduce at the moment.";
    });
});
