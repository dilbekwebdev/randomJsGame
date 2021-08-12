let confirmation = confirm("O'yinimizda qatnashish uchun rozilik berasizmi? ")

if(confirmation){
    let s = 0;
    let gameScore = Math.round(Math.random() * 20);
    while(1){
        let userScore = prompt("Men oylagan son nechi deb oylaysiz? ");
        s++;
        if(userScore == gameScore){
            alert(`Tabriklayman siz meni yutdingiz, men rostdan ham ${gameScore} sonini o'ylagandim
            Siz ${s} ta urinishda toptingiz, Barakalla!`)
            break;
        }
        else if(userScore >  gameScore){
            alert(`Siz men oylagan sondan katta son kiritingiz!`);
        }
        else{
            alert(`Siz men oylagan sondan kichik son kiritingiz!`);
        }
    }
}

else{
    window.location.href = "https://fulfiledu.uz";
}