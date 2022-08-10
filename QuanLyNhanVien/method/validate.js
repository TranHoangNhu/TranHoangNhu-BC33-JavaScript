function checkNullValid(value, selectorError, name){
    var input = document.querySelector(selectorError);
    if(value === ''){
        input.value = name + ' không được bỏ trống';
        input.style.color = '#ffc107';
        return false;
    }
    input.value = '';
    return true;
} 

function checkValidAccount(value, selectorError, name) { 
    var input = document.querySelector(selectorError);
    var regex = /^[A-Za-z]+$/;
    if(regex.test(value)){
       input.value = '';
       return true;
    }
    input.value = name + ' phải là chữ cái!';
    input.style.color = '#ffc107';
    return false;
} 
function checkValidAccount2(value, selectorError, name) { 
    var input = document.querySelector(selectorError);
    var regex = /^[A-Za-z]{4,6}$/;
    // var regex = /^[0-9]{4,6}$/;
    if(regex.test(value)){
       input.value = '';
       return true;
    }
    input.value = name + ' tối đa 4 -6 ký số!';
    input.style.color = '#ffc107';
    return false;
} 