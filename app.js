

////////// Select one CUT option

const cutType = document.getElementsByClassName('haircut-option');
const textCutType = document.getElementById('summary-cut');
const days = document.getElementById('days');

function selectCutType(cutChosen) {
    for (let i = 0; i < cutType.length; i++) {
        cutType[i].checked = false;
        cutType[i].style.background = "white";
        cutType[i].style.color = "black";
    };
    cutChosen.checked = true;
    if (cutChosen.checked) {
        textCutType.innerHTML = cutChosen.parentElement.innerText;
        cutChosen.parentElement.style.background = "black";
        cutChosen.parentElement.style.color = "white";
        days.style.pointerEvents = "all";
        days.style.textDecoration = "none";
    };
};


////////// Select one DAY option

const day = document.getElementsByClassName('day');
const textDay = document.getElementById('summary-day');

const timeSlots = document.getElementById('time-slots');

function selectDay(dayChosen) {
    for (let i = 0; i < day.length; i++) {
        day[i].checked = false;
        day[i].style.background = "white";
        day[i].style.color = "black";
    };
    dayChosen.checked = true;
    if (dayChosen.checked) {
        textDay.innerHTML = dayChosen.parentElement.innerText;
        dayChosen.parentElement.style.background = "black";
        dayChosen.parentElement.style.color = "white";
        timeSlots.style.pointerEvents = "all";
        timeSlots.style.textDecoration = "none";
    };
};

////////// Select one TIME option

const timeSlot = document.getElementsByClassName('slot');
const textTime = document.getElementById('summary-time');

const details = document.getElementById('details');

function selectTime(timeChosen) {
    for (let i = 0; i < timeSlot.length; i++) {
        timeSlot[i].checked = false;
        timeSlot[i].style.background = "white";
        timeSlot[i].style.color = "black";
    };
    timeChosen.checked = true;
    if (timeChosen.checked) {
        textTime.innerHTML = timeChosen.parentElement.innerText;
        timeChosen.parentElement.style.background = "black";
        timeChosen.parentElement.style.color = "white";
        details.style.pointerEvents = "all";
        details.style.textDecoration = "none";
    };
};



////////// add information / details to booking modal via confirm button
const confirmBookingBtn = document.getElementById('confirm-booking-button');
const confirmBtn = document.getElementById('confirm-button');
confirmBtn.addEventListener('click', e => {
        ///// add the staff member
        document.getElementById('summary-barber').innerHTML = document.getElementById('staff-members').value;
        ///// add customer name
        document.getElementById('summary-name').innerHTML = document.getElementById('name').value;
        ///// add customer email
        document.getElementById('summary-email').innerHTML = document.getElementById('email').value;

        ///// open final booking modal
        const modal = document.getElementById('modal');
        modal.style.display = "block";
        ///// close modal by clicking outside of it
        window.onclick = e => {
            if (e.target == modal) {
                modal.style.display = "none";
            };
        };
        
        ////////// make sure the personal details are filled out and
        //         Confirm Booking button refreshes the page
        if ((document.getElementById('summary-name').innerHTML.length < "1")
                && (document.getElementById('summary-email').innerHTML.length < "1")) {
                modal.style.display = "none";
                details.style.border = "dotted red";
            }   else {
                modal.style.display = "block";
                confirmBookingBtn.addEventListener('click', e => {
                    window.location.reload();
                })
               
            };

});







