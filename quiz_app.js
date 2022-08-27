var Quiz=[
    {
        question:"how many number of episode marvel's WHAT IF! has",
        a:3,
        b:6,
        c:9,
        d:12,
        correct:"c",
    },
    {
        question:"who is the one cosmic being this series introduces amongst following",
        a:"eternals",
        b:"The Watcher",
        c:"sylvie",
        d:"Scarlet Witch",
        correct:"b",
    },
    {
        question:"What is watchers oath/phylosophy",
        a:"i never interfered,i can't and i will never",
        b:"there was an idea to built a team of such individuals who can serve as Gaurdians Of Galaxy!",
        c:"ignorance can be a bliss",
        d:"you can't get so hung up on where you did rather be,there you forget how to get the most of where you are or to put it in another way,Don't ponder the question WHAT IF!",
        correct:"a",
    },
    {
        question:"Do you think that Doctor Strange had to loose his most beloved to become SOCERRER SUPREME?",
        a:'yes,i do',
        b:"i don't think so",
        correct:"a",
    },
    {
        question:"why in an alternate universe shown by watcher Christine had to loose upon her life again and again",
        a:"it's nothing but what watcher accepts",
        b:"because it had to be",
        c:"since it was something bound to happen by TVA",
        d:"because in this universe Strange's arrogance and ego was lesser",
        correct:"d",
    },
    {
        question:"do you think Strange instead of his hand he had too loose Christine because his love was more than his ego reflected by the fact that his proposal got accepted unlike in maintime-line",
        a: "i believe",
        b:"could be",
        c:"nopez",
        correct:"a",
    },
    {
        question:"What if Strange loved his girlfriend from highschool more",
        a:"their son later would have turned out to be dormamu",
        b:"he would have married her",
        c:"he had to loose her here to go to Qamar Taj",
        d:"he inspite of being desperate would never get to marry her",
        correct:"c",
    }
];
let i=0;
var score= 0;
var select_opt;
console.log('length of quiz: '+Quiz.length);
func_bringMe_quesAndopt();

function func_sbt(){
    // select option first then move ahead
    select_opt= document.querySelectorAll('input');
    select_opt.forEach((e) => {
        if(e.checked){
            func_nextQues(e.id);
        }
    });
}
document.querySelector('button').addEventListener('click',func_sbt);

function func_nextQues(optChoosen){
    if(optChoosen==Quiz[i-1].correct){
        console.log(optChoosen +' :correct');
        score++;
    }
    else{console.log('wrong');}
    // bringing up something when quiz ends
    if(i==Quiz.length){
        alert('you finished the quiz & you scored: '+score+'/7');
        // document.querySelector('#question_box').innerHTML=`you answered ${score} times correctly out of ${Quiz.length} times`;
        document.querySelector('#question_box').innerHTML=`<h2>you answered ${score} times correctly out of ${Quiz.length} times</h2>  <button onclick="location.reload()">reload</button>`;
    }
    else{
        func_bringMe_quesAndopt();
    //clear previous radio selection
    }
    func_deselector();
}
function func_bringMe_quesAndopt(){
    // bringing up questions
        var ques=Quiz[i]['question'];
        document.querySelector('#question_text').textContent=ques;
        console.log(i);//
    // bringing up options
        document.querySelector('#optlabel1').innerText=Quiz[i]['a'];
        document.querySelector('#optlabel2').textContent=Quiz[i]['b'];
        document.querySelector('#optlabel3').textContent=Quiz[i]['c'];
        document.querySelector('#optlabel4').textContent=Quiz[i]['d'];
    
        i++;   
}
function func_deselector(){
    // console.log(select_opt);
    select_opt.forEach((e)=>{
        e.checked =false;
    });
}
// NOTE:
// document.querySelectorAll('.ui')['what to write, how to write?'].addEventListener('click',func_clickedSome_opt);