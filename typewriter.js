const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
  console.log(char);
  setTimeout(() => {
    
  }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.
}
