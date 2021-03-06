const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element =document.querySelector('.date-picker .dates .month .mth');
const next_mth_element =document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element =document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');
const gender_element = document.querySelector('.gender-details .category .dot-1','dot-2');

const months = ['January','February','March','April','May','June','July','August','September',
'October','November','December'];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const femaleName = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + '' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates ();

//Event Listener
date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);
gender_element.addEventListener('Click', nameGender);


//Functions
function toggleDatePicker (e) {
    console.log(e.path);

    if(!checkEventPathForClass(e.path, 'dates')) {
        dates_element.classList.toggle('active');
    }
}

function goToNextMonth (e) {
    month++;
    if (month > 11){
        month = 0;
        year++;
    }
    mth_element.textContent = months[month] + '' + year;
    populateDates ();
}

function goToPrevMonth (e) {
    month--;
    if (month < 0){
        month = 11;
        year--;
    }
    mth_element.textContent = months[month] + '' + year;
    populateDates ();
}

function populateDates (e) {
    days_element.innerHTML = '';
    let amount_days = 31;

    if (month == 1) {
        amount_days = 28;
    }

    for (let i = 0; i < amount_days; i++) {
        const day_element = document.createElement('div');
        day_element.classList.add('day');
        day_element.textContent = i + 1;

        if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
            day_element.classList.add('selected');
        }

        day_element.addEventListener('click', function () {
            selectedDate = new Date(year + '-' + (month + 1) + '-' + (i +1));
            selectedDay = (i + 1);
            selectedMonth = month;
            selectedYear = year;

            selected_date_element.textContent = formatDate(selectedDate);
            selected_date_element.dataset.value = selectedDate;
            
            populateDates ();
        
        });

        days_element.appendChild(day_element);
        
    }
}

function nameGender (e) {
    if(document.getElementById("gender-details").checked) {
        const femaleName = "dot-2"
    }else{
        const maleNames = "dot-1"
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
function formatDate (d) {
    let day = d.getDate();
    if (day < 10) {
        day = '0' + day;

    }

    let month = d.getMonth() +1;
    if (month < 10) {
        month = '0' + month;
    }
    
    let year = d.getFullYear();

    return day + '/' + month + '/' + year;
}