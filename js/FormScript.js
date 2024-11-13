// alert("Эта форма пока что не работает... (Но выглядет неплохо)")

addEventListener("submit", (e) => { 
    e.preventDefault();
    const result = document.querySelectorAll("#resultWrapper .result");
    const selects = document.querySelectorAll("form select, input");
    let score = 0;
    document.getElementById("resultWrapper").style.display = "block";
    

    for(let i = 0; i < (result.length-1); i++)
    {
        result[i].innerHTML = (i+1) + ". " + selects[i].value;
        console.log(selects[i].nodeName);
        if (selects[i].nodeName == "INPUT")
        {
            let length = selects[i].value.trim().length;
            console.log(length);
            score += length > 0 ? 1 : 0;
        }
        else
            score += Number(selects[i].value);
    }

    result[result.length-1].innerHTML = "Итоговый результат: " + score;
    // Куда нибудь сюда запихать ajax запрос 
});
