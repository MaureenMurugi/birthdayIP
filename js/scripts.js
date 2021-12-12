const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element =document.querySelector('.date-picker .dates .month .mth');
const next_mth_element =document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element =document.querySelector('.date-picker .dates .month .prev-mth');


//Event Listener
date_picker_element.addEventListener('click', toggleDatePicker);

//Functions
function toggleDatePicker (e) {
    console.log(e.path);

    if(!checkEventPathForClass(e.path, 'dates')) {
        dates_element.classList.toggle('active');
    }
}

//Helper functions
function checkEventPathForClass (path, selector) {
    for (let i = 0; i < path.length; i++) {
       if (path[i].classList && path[i].classList.contains(selector)) {
           return true;
       }
    }

    return false;
}