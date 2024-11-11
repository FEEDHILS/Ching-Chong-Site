const Title = document.getElementsByClassName("title")[0];
console.log(Title);
let BaseText = Title.innerHTML;
Title.innerHTML = "";

let timing = 0;
for(let i = 0; i < BaseText.length; i++)
{
    timing = BaseText[i] == " " ? timing : timing+1;
    setTimeout(() => {
        Title.innerHTML += BaseText[i];
    }, Math.abs(timing * 50));
}