const set_of_words = ["Rabindranath Tagore was a Bengali polymath – poet, writer, playwright, composer, philosopher, social reformer and painter.He reshaped Bengali literature and music, as well as Indian art with Contextual Modernism in the late 19th and early 20th centuries.Poet Rabindranath Tagore won the Nobel Prize for Literature in 1913 for his collection Gitanjali published in London in 1912. The prize gained even more significance by being given to an Indian for the first time.This honour established Tagore's literary reputation worldwide.",

    "William Shakespeare was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist.[2][3][4] He is often called England's national poet and the 'Bard of Avon'  His extant works, including collaborations, consist of some 39 plays,154 sonnets, three long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright.[7] They also continue to be studied and reinterpreted.",

    "Subhas Chandra Boses was an Indian nationalist whose defiant patriotism made him a hero in India,but whose attempts during World War II to rid India of British rule with the help of Nazi Germany and Imperial Japan left a troubled legacy.The honorific Netaji (Hindustani: 'Respected Leader' was first applied to Bose in Germany in early 1942—by the Indian soldiers of the Indische Legion and by the German and Indian officials in the Special Bureau for India in Berlin. It is now used throughout India.",

    "Bidhan Chandra Roy was an Indian physician, educationist, philanthropist, freedom fighter and statesman who served as the Chief Minister of West Bengal from 1948 until his death in 1962. Bidhan Roy is often considered the Maker of Modern West Bengal[due to his key role in the founding of several institutions and five eminent cities, Durgapur, Kalyani, Bidhannagar, Ashokenagar and Habra. He is one of the few people in history to have obtained F.R.C.S. and M.R.C.P. degrees simultaneously. In India, the National Doctors' Day is celebrated in his memory every year on 1 July. He was awarded Bharat Ratna on 4 February 1961, India's highest civilian honour.",

    "Khudiram Bose (also spelled Khudiram Basu or Kshudiram Bose) was an Indian revolutionary from Bengal Presidency who opposed British rule of India. For his role in the Muzaffarpur Conspiracy Case, along with Prafulla Chaki, he was sentenced to death and subsequently executed, making him one of the youngest martyrs of the Indian Independence Movement."

];

let dummy_para = document.getElementById("dummy_para");
let para = document.getElementById("para");
let startBtn = document.getElementById("start");
let heading2 = document.getElementById("heading2");


let startTime, endTime, netTime;
let random_Number;
let final_msg;

// PLAY GAME
const playGame = () => {
    heading2.innerText = "";
    random_Number = Math.floor(Math.random() * set_of_words.length);


    // SET CSS OF DUMMY PARA BEFORE TEST..
    dummy_para.style.height = "20vh";
    dummy_para.style.backgroundColor = "transparent";
    dummy_para.style.borderRadius = "1.3rem";
    dummy_para.style.lineHeight = "21px";
    dummy_para.style.fontSize = "17px";
    dummy_para.style.backgroundColor = "rgb(174, 173, 233)";
    dummy_para.style.borderRadius = "1.3rem";
    dummy_para.style.boxShadow = " 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.193)";

    dummy_para.innerText = set_of_words[random_Number];

    let date = new Date();
    startTime = date.getTime();

}
const wordCounter = (str) => {

    let written_para = str.split(" ");

    return written_para.length;
}

// COMPARE dummy_para value AND para_Written
const compare = (dummy_para_value, para_Written) => {

    console.log(dummy_para_value)
    console.log(para_Written);

    let words_1 = dummy_para_value.split(" ");
    let words_2 = para_Written.split(" ");

    let count_words = 0;
    words_1.forEach(function(word,index) {
        if(word == words_2[index]){
            count_words++;
        }
    });

    let error_words_number = (words_1.length - count_words);
    return ("  "+ count_words +" "+ "words are correct out of"+" "+ words_1.length+" "+"words.");


}


// END GAME
const endGame = () => {
    heading2.innerText = "Yayy!!! You have finished your test. You can restart again.";

    let date = new Date();
    endTime = date.getTime();


    netTime = Math.floor(((endTime - startTime) / 1000));
    console.log(netTime);

    // THINGS WRITTEN BY USER.
    let para_Written = para.value;

    let word_count = wordCounter(para_Written);

    let speed = Math.round(word_count / netTime) * 60;

    // RESULT
    let result1 = "You typed" + " " + word_count + " " + "words" + " " + netTime + " " + "seconds..." + " ";
    let result2 = "Your speed is" + " " + speed + " " + "words per minute.";

    // CHANGE CSS AFTER THE TEST.
    dummy_para.style.fontSize = "20px";
    dummy_para.style.backgroundColor = "rgb(174, 173, 233)";
    dummy_para.style.height = "3.3rem";
    dummy_para.style.borderRadius = "1.3rem";

    // SHOW RESULT
    final_msg = compare(dummy_para.innerText, para_Written);

    // SHOW FINAL RESULT
    dummy_para.innerText = result1 + result2 + final_msg;

}

startBtn.addEventListener("click", function () {

    if (this.innerText == 'START') {
        para.disabled = false;
        this.innerText = "END";

        playGame();
    }


    else if (this.innerText == "END") {
        para.disabled = true;
        this.innerText = "START";

        endGame()

    }


})