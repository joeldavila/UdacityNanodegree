//variables

const gridHeight = document.getElementById("inputHeight")
const gridWidth = document.getElementById("inputWidth")
const pickColor = document.getElementById("colorPicker")
const submit = document.getElementById("submitButton")
const table = document.getElementById("pixelCanvas")
const form = document.getElementById("sizePicker")






submit.addEventListener("click",function(event){
  event.preventDefault()

  table.innerHTML = null
  let gridHeightValue = gridHeight.value
  let gridWidthValue = gridWidth.value
  let pickedColor = pickColor.value


  // table.style.width = (gridWidthValue * gridHeightValue) +"px"
  // table.style.height = (gridHeightValue* gridWidthValue) +"px"


  makeGrid(gridWidthValue,gridHeightValue,pickedColor)


  

  console.log(gridWidthValue,gridHeightValue,pickedColor)







})


// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(width,height,color) {
  
  

  for (let i = 0; i < width; i++) {
    let tr = document.createElement('tr')
    table.appendChild(tr)
        for (let j = 0; j < height; j++) {
          let td = document.createElement('td')
          tr.appendChild(td)
          
          td.addEventListener("click",()=>{
            color = pickColor.value
            td.style.backgroundColor = color
          })
          
          td.addEventListener("dblclick",()=>{
            color = pickColor.value
            td.style.backgroundColor = ""
          })
          
          
        }
  
   
  }




// Your code goes here!

}

