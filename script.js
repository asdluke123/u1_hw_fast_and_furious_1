let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
   document.querySelector('#main-title').innerText = 'Welcome to DOMS homepage'
  // Part 2
  document.querySelector('body').style.backgroundColor = '#386196'
  // Part 3
  const list = document.querySelector('#favorite-things').querySelectorAll('li')
  list[5].innerText = ''   
  
  // Part 4
    const arr = document.querySelectorAll('.special-title')
    arr.forEach((e) =>{
      e.style.fontSize = '2rem';
    })
  // Part 5
    const arr1 = document.querySelector('#past-races').querySelectorAll('li')
    arr1.forEach((e)=>{
      if(e.innerText === 'Chicago')
          e.innerText = '';
    })
  // Part 6
    let newLi = document.createElement('li').innerText = 'Frankfurt'
    document.querySelector('#past-races').append(newLi);

  // Part 7
  const newBlog = document.createElement('div')
    newBlog.classList.add('blog-post')
    newBlog.classList.add('purple')
  let newH1 = document.createElement('h1')
    newH1.innerText = 'Frankfurt'
  let newP = document.createElement('p')
  newP.innerText= 'I JUST HAD A PRETZEL WITH A HEINEKEN IN GERMANY HOLYYYYY'
  newBlog.append(newH1)
  newBlog.append(newP)
  document.querySelector('.main').append(newBlog)
  

}
