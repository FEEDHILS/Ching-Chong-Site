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
        if (isNaN(parseInt(selects[i].value)))
            score += selects[i].value.length > 0 ? 1 : 0; // Добавляю доп. балл если юзер че-то написал в поля.
        else
            score += parseInt(selects[i].value);
    }

    result[result.length-1].innerHTML = "Итоговый результат: " + score;
    // Куда нибудь сюда запихать ajax запрос 
});
