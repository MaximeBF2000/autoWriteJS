# AutoWriteJS : Lightweight Typing effect

### What is AutoWriteJS ?
- Lightweight
- Easy to use
- Typing effect for website

### How to use ?
- Download the file
- Create a HTML div

```html
...
<script src="./autowrite.js"></script>
<script>
  autoWrite(".your_div_class", {
    strings: [
      "1st sentence",
      "2nd sentence",
      "3rd sentence",
      "..."
    ],
    speed: 60,
    breakTime: 1000,
    loop: true
  })
</script>
```

### Options
- strings : array of sentences (or array of one sentence)
- speed : determine the type speed in miliseconds
  - Default : 100
- breakTime : determine the pause time before deleting caracteres
  - Default : 500
- loop : determine if the effect loop infinitly or not
  - Default : false

[Download Here](./autowrite.js)