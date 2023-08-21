// display the button content calculator screen
function display(content){
    result.value+=content
}
function allclear(){
    result.value=""
}
function exprEval(){
    try{
    result.value=eval(result.value)
    }
    catch{
        result.value="invalid expression"
    }
}
function removelast(){
    result.value=result.value.slice(0,-1)
}