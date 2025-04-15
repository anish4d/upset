 // JavaScript (script.js)
 const responses = [
    "I miss you more than I miss pizza. And you *know* how I feel about pizza 🍕❤️",
    "Even Google doesn’t have the answers when you’re upset 😢",
    "I’d fight a dragon just to see you smile again 🐉😊",
    "You’re cuter when you’re not angry… but even now, you're kind of adorable 😅",
    "I promise to always choose your movie—even if it’s horror and I cry first 😭🎬",
    "You're my favorite notification 🥰",
    "My day is incomplete without your smile 🌞",
    "I'm not saying you're perfect… but you're pretty close, and I’m lucky 🍀",
    "No more silly fights. Let's just hug it out 🫂",
    "You are my home, my peace, my chaos, and everything in between 🏡💕",
    "Can I buy your forgiveness with a thousand kisses? 😚",
    "I'd rather lose an argument than lose you. Always. 🙇‍♂️",
    "Even when you frown, you’re still the most beautiful woman I know 😍",
    "I replay your laugh in my head like my favorite song 🎶",
    "Let’s turn the page and start our next cute chapter 📖💖",
    "You're my favorite reason to smile 😊",
    "No storm is scary when I have you 🌈",
    "You + Me = Forever, even when you’re mad 😜",
    "Every minute you're mad = one missed hug. That's a lot of hugs! 🫂",
    "Not even chocolate compares to how sweet you are 🍫❤️",
    "I’m sorry. Now let’s get back to cuddling? 🥺",
    "Your smile is my sunrise and your hug is my sunset 🌅",
    "Can I blame my heart for acting crazy when you’re mad? 💓",
    "You're the spark to my dull day ✨",
    "I'll always say sorry first… unless you beat me to it 😄",
    "You're the only one who can melt my ego instantly 🧊🔥",
    "Life’s too short to be mad. Let’s love more 💑",
    "If making up means seeing you smile again, I’ll do it 1000x 🥰",
    "Your silence is the loudest sound in my world 😞",
    "Without you, even memes aren’t funny 🙃"
  ];
  
  let index = 0;
  let messageTimeout;
  
  function respond(answer) {
    clearTimeout(messageTimeout);
  
    if (answer === 'no') {
      document.getElementById('question').style.display = 'none';
      document.getElementById('buttons').style.display = 'none';
      document.getElementById('message').style.display = 'none';
      document.getElementById('celebration').style.display = 'flex';
      document.getElementById('gallery').style.display = 'flex';
      document.getElementById('message-box').style.display = 'flex';
      document.getElementById('bgm').pause();
      document.getElementById('celebrationMusic').play();
    } else {
      const msg = responses[index % responses.length];
      typeText(msg);
      index++;
      messageTimeout = setTimeout(() => {
        document.querySelector('.typed-text').textContent = '';
        document.getElementById('question').textContent = 'Are you still angry with me?';
      }, 5000);
    }
  }
  
  function typeText(text) {
    const el = document.querySelector('.typed-text');
    el.textContent = '';
    let i = 0;
    const typer = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i === text.length) clearInterval(typer);
    }, 50);
  }
  
  function createHearts() {
    const container = document.getElementById('hearts-container');
    setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (5 + Math.random() * 5) + 's';
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 10000);
    }, 300);
  }
  
  createHearts();
  