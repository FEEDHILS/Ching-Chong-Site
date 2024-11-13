const Title = document.getElementsByClassName("title")[0];
let ResizeDiv = document.getElementById("resizable");

ready();
// addEventListener("resize", () => {
//     changeTextHeight(Title.clientHeight);
// });


function ready() {
    let BaseText = Title.innerHTML;
    let height = Title.clientHeight;
    Title.innerHTML = "";
    Title.style.minHeight = height+"px";

    let timing = 0;
    for(let i = 0; i < BaseText.length; i++)
    {
        timing = BaseText[i] == " " ? timing : timing+1;
        setTimeout(() => {
            Title.innerHTML += BaseText[i];
        }, Math.abs(timing * 50));
    }

    // Убираем minHeight после того как весь текст был написан.
    setTimeout(() => {
        Title.style.minHeight = "initial";
    }, (BaseText.length-1) * 50);
}

// function changeTextHeight(height)
// {
//     console.log("Resized! " + height);
//     Title.style.minHeight = height+"px";
// }