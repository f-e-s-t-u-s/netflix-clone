
// var faqContent = document.getElementsByClassName('faq-question')
// const faqAnswer = document.getElementsByClassName('faq-answer')
// console.log(faqContent.length);
// for(let i = 0; i < faqContent.length; i++) {
//     faqContent[i].addEventListener('click', function () {
//         this.classList.toggle('active')

//         var body = this.nextElementSibling
//         if (body.style.display === 'block'){
//             body.style.display = 'none'
//         }
//         else{
//             body.style.display = 'block'
//         }
//     })



const faqQuestions = document.querySelectorAll('.faq-question');
const faqAnswer = document.querySelectorAll('.faq-answer')

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    if (answer.classList.contains('active_div')) {
      answer.classList.remove('active_div');

    } else {
      answer.classList.toggle('active_div');
    }
  });
});

console.log(faqAnswer)

//menu popup
const xmark = document.querySelector('.xmark');
const menucontent = document.querySelector('.menucontent')
const menu = document.getElementById('menu')

menu.addEventListener('onclick', function(){
  menucontent.classList.toggle('active')
}
)

xmark.onclick = ()=>{
  menucontent.classList.toggle('active')
}