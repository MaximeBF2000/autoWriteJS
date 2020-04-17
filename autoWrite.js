async function autoWrite(selector, options){
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const div = document.querySelector(selector)

  // Options
  const speed = options.speed ?? 100
  const strings_arr = options.strings ?? []
  const loop = options.loop ?? false
  const breakTime = options.breakTime ?? 500


  // Styling & Cursor
  const height = window.getComputedStyle(div).getPropertyValue("font-size") ?? "1rem"
  const cursorColor = `solid 1px ${window.getComputedStyle(div).getPropertyValue("color")}` ?? "solid 1px #1d1d1d"

  div.style.width = "fit-content"
  div.style.height = height
  div.style.borderRight = cursorColor
  div.style.paddingRight = ".2rem"

  
  // Cursor blink
  setInterval(async () => {
    div.style.borderRight = "none"
    await sleep(speed * 2)
    div.style.borderRight = cursorColor
  }, 500)

  
  do{
    for(let sentence of strings_arr){
      if(typeof(sentence) === "string"){
        
        const length = sentence.length
        let count = 0
        while(count < length){
          div.textContent = sentence.slice(0, count + 1)
          count++
          await sleep(speed)
        }
        
        await sleep(breakTime)

        while(count > 0){
          div.textContent = sentence.slice(0, count - 1)
          count--
          await sleep(speed)
        }
  
      } else {
        alert("YOU MUST PUT ONLY STRING ELEMENTS IN THE ARRAY")
        return
      }
    }
  } while(loop)
  
}