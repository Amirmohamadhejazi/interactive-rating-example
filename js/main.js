let starLevel = null

let Div1 = `
<div class="iconStar flex-center bg_MediumGrey">
    <img src="./pic/icon-star.svg" width="40%"  height="40%" alt="star">
</div>
<p class="c_White fwBold mt-3">How did we Do?</p>
<p class="c_MediumGrey manualFontsize fwlight  mt-3">Please let know how we did with your Support request. All feedback is appreciated to help us improve our offering!</p>
<div class="w-100 d-flex flex-row flex-wrap">
    <div class="w-100 d-flex flex-row justify-content-between flex-wrap mt-3 c_White" id="Starsmap"/>
</div>
<div class="submitBtn flex-center mt-3" onclick="SubmitFunc()">
Submit
</div>
<h1 id="starLevelValue"></h1>`

let Div2 = `
    <div class="flex-center d-flex flex-column ">
        <img src="./pic/illustration-thank-you.svg" alt="">
        <div class="boxUnderImg c_orange d-flex justify-content-center mt-3"><p id="numberOfStar"/></div>
        <h4 class="c_White mt-3">Thank you!</h4>
        <p class="textJustify text-center manualFontsizeMini c_White">We appreciate you taking the time to give a rating if you ever need more support, dont hesitate to get in touch!</p>
    </div>`

document.getElementById('divDetail').innerHTML = Div1

let StarsDetail = [
{name:1 , keys:"itemNumb0" , active:false},
{name:2 , keys:"itemNumb1" , active:false},
{name:3 , keys:"itemNumb2" , active:false},
{name:4 , keys:"itemNumb3" , active:false},
{name:5 , keys:"itemNumb4" , active:false},
]

document.getElementById('Starsmap').innerHTML = StarsDetail.map(item =>
`<div class="iconNumb bgIconNotActive flex-center"  onclick='NumbFunc(${item.name},${item.keys})' id='${item.keys}' >
${item.name}
</div>`
).join('')

function NumbFunc(Name , keys){
    StarsDetail.map((item)=>{
        document.getElementById(item.keys).classList.remove("bgIconActive");
        document.getElementById(item.keys).classList.add("bgIconNotActive");
    })
    keys.classList.remove("bgIconNotActive");
    keys.classList.add("bgIconActive");
    starLevel = Name
}

function SubmitFunc(){
    if(starLevel){
        document.getElementById('divDetail').innerHTML = Div2
        document.getElementById('numberOfStar').innerHTML = "You Selected " + starLevel + " out of 5"
    }
}
function ToggleDarkFunc(){

    document.body.classList.toggle("bg_VeryDarkBlue");

}

