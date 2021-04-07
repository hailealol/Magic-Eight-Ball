function magicResponse() {
    let userQuestion = document.getElementById('userQuestion').value;
    document.getElementById('question').innerHTML = userQuestion;
    let randomNumber = Math.floor(Math.random() * 11); 
    var answer = ""

    switch(randomNumber) {
        case 1:
            answer = "It is guaranteed."
            document.getElementById('response').innerHTML = answer;
            break;
        case 2:
            answer = "It is not guaranteed."
            document.getElementById('response').innerHTML = answer;
            break;            
        case 3:
            answer = "Signs point to yes."
            document.getElementById('response').innerHTML = answer;
            break;
        case 4:
            answer = "Outlook not so good."
            document.getElementById('response').innerHTML = answer;
            break;
        case 5:
            answer = "My sources say no."
            document.getElementById('response').innerHTML = answer;
            break;
        case 6:
            answer = "Do not count on it."
            document.getElementById('response').innerHTML = answer;
            break;
        case 7:
            answer = "Cannot predict now."
            document.getElementById('response').innerHTML = answer;
            break;
        case 8:
            answer = "Reply hazy. Try again."
            document.getElementById('response').innerHTML = answer;
            break;
        case 9:
            answer = "It is decidedly so."
            document.getElementById('response').innerHTML = answer;
            break;
        case 10:
            answer = "It is certain."
            document.getElementById('response').innerHTML = answer;
            break;
    };

    if (userQuestion == "") {
        alert('Please ask a question in the text box.');
        document.getElementById('response').innerHTML = "...";
        document.getElementById('question').innerHTML = "...";
    };

}