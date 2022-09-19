const quiz = [
    {
      question: '特許出願でよく使われるルートの名前は次の内どれ？',
      answers: [ '特になし', 'PET', 'PCT', 'ETC'],
      correct: 'PCT'
    }, {
      question: '日本国内のクライアントを何と呼ぶか？',
      answers: [ '在外', '在内', '国内', 'ジャパン'],
      correct: '在内'
    }, {
      question: '日本で特許が成立すれば、有効期間は何年か？',
      answers: [ '3年', '10年', '20年', '30年'],
      correct: '20年'
    }
  ];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
 while(buttonIndex < buttonLength){
   $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
   buttonIndex++;
 }
}
setupQuiz ();

const clicKHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
  } else {
        window.alert('不正解！'); 
  }

  quizIndex++;
  
  if(quizIndex < quizLength){
  
    setupQuiz();
   } else {
   window.alert('終了');  
 }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clicKHandler(e);
  });
  handlerIndex++;
}
