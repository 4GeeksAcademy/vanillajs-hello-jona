import "bootstrap";
import "./style.css";


  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  function generateExcuse() {
      const randomElement = arr => arr[Math.floor(Math.random() * arr.length)];
      return `${randomElement(who)} ${randomElement(action)} ${randomElement(what)} ${randomElement(when)}.`;
    }

    document.getElementById('excuse').innerText = generateExcuse();


 


