let screen = document.getElementById('disp1')
let mex = document.querySelector('.fig')
let screenx = document.querySelector('.new')
let inp1
let inp2
let operator 
function clic(digit){
    mex.value = digit
    screen.value += mex.value
    inp2 = screen.value
}
function cli() {
    screen.value = screen.value + '.'
}
function clia() {
    screen.value = screen.value * -1
    screenx.value = screenx.value * -1
    screen.value = screen.value
    
}
function opera(press){
    if (operator){ 
        equals()
    }
    screenx.value += inp2 + press
    screen.placeholder = screen.value
    inp1 = screen.value
    screen.value = ''
    operator = press

}
function opra(pres) {
    if (operator){
        inp2 = screen.value
    }
    screenx.value += screen.value + pres
    pres == '%'? screen.value = Number(inp2) / 100:pres == '√'? screen.value = Number(inp2)**(1/2):pres == '²'? screen.value = Number(inp2) ** 2:
    screen.value = 1 / Number(inp2)
    inp2 = screen.value
    // screenx.value = inp2
}
function equals() {   
    operator == '+'?screen.value = Number(inp1) + Number(inp2):operator == '*'? screen.value = Number(inp1) * Number(inp2):
    operator == '/'? screen.value = Number(inp1) / Number(inp2):
    screen.value = Number(inp1) - Number(inp2)
    // screenx.value += inp2 + press
}
function c(){
    screenx.value = ''
    screen.value = ''
    screen.placeholder = 0
    operator = ''
}
function ce(){
    screen.value = ''
    screen.placeholder = 0
}
function del(){
   screen.value = screen.value.slice(0,-1);
}
