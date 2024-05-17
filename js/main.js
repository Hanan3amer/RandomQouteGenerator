var qoute = [
    {
        qoute_text: ' “Be yourself; everyone else is already taken.” ',
        auther_name: " ― Oscar Wilde"
    },
    {
        qoute_text: ' “Be who you are and say what you feel, because those who mind don`t matter, and those who matter don`t mind.” ',
        auther_name: " ― Bernard M. Baruch"
    },
    {
        qoute_text: ' “Be the change that you wish to see in the world.” ',
        auther_name: " ― Mahatma Gandhi"
    },
    {
        qoute_text: ' “In three words I can sum up everything I`ve learned about life: it goes on.”',
        auther_name: " ― Robert Frost"
    },
    {
        qoute_text: ' “Live as if you were to die tomorrow. Learn as if you were to live forever.”',
        auther_name: " ― Mahatma Gandhi"
    },
    {
        qoute_text: ' “It is better to be hated for what you are than to be loved for what you are not.”',
        auther_name: "― Andre Gide, Autumn Leaves"
    },
    {
        qoute_text: '“Two things are infinite: the universe and human stupidity; and I`m not sure about the universe.”',
        auther_name: "― Albert Einstein"
    },
    {
        qoute_text: '“It is better to be hated for what you are than to be loved for what you are not.”',
        auther_name: "― Andre Gide, Autumn Leaves"
    }
];
var btnele = document.getElementById('r-btn');
var authername = document.getElementById('author');
var qoute_content = document.getElementById('text');

let repeated = 0;

btnele.onclick = function () {
    var random;
    do {
        random = Math.floor(Math.random() * qoute.length);
    } while(random == repeated); 

    repeated = random; 

    qoute_content.innerHTML = qoute[random].qoute_text;
    authername.innerHTML = qoute[random].auther_name;
};