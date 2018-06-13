
var userChoice = proccess.argv[2];
var computerChoice = Math.floor(Math.random() * 100);
if (proccess.arr[2].length === 1) {
    userChoice = proccess.arr[2] * 10;
} else if(proccess.arr[2].length === 2) {
    userChoice = proccess.arr[2];
} else {
    userChoice = proccess.arr[2] / 10;
}
if (computerChoice < 34) {
    computerChoice = "камень";
} else if(computerChoice <= 67) {
    computerChoice = "бумага";
} else {
    computerChoice = "ножницы";
}
if (userChoice < 34) {
    userChoice = "камень";
} else if(userChoice <= 67) {
    userChoice = "бумага";
} else {
    userChoice = "ножницы";
}
process.stdout.write("Выбор пользователя: " + userChoice);
process.stdout.write("Выбор компьютера: " + computerChoice);
compare(userChoice, computerChoice);
var compare = function (choice1, choice2)
{if (choice1 === choice2)
{ process.stdout.write("Ничья!");
} else if (choice1 === "камень") {
    if (choice2 === "ножницы") {
        process.stdout.write("Вы выиграли.");
    }
    else if (choice2 === "бумага") {
        process.stdout.write("Вы проиграли.");
    }
} else if (choice1 === "бумага") {
    if (choice2 === "камень") {
        process.stdout.write("Вы выиграли.");
    }
    else if (choice2 === "ножницы") {
        process.stdout.write("Вы проиграли.");
    }
} else if (choice1 === "ножницы") {
    if (choice2 === "камень") {
        process.stdout.write("Вы проиграли.");
    }
    else if (choice2 === "бумага") {
        process.stdout.write("Вы выиграли.");
    }
} 
}

