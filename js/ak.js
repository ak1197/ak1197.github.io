
const careerStart = new Date(2018, 5, 20)
const comp1Start = new Date(2018, 5, 20)
const comp1End = new Date(2020,9,15)
const comp2Start = new Date(2020,9,19)
const comp2End = new Date(2021,11,1)


$(document).ready(function () {
    document.getElementById('txtExperience').innerHTML = getDuration(careerStart)
    document.getElementById('txtCSSExp').innerHTML = getDuration(comp2Start)
    document.getElementById('txtVCXExp').innerHTML = getDuration(comp1Start, comp1End)
})

$('#feedbackForm').on('submit', function (e) {
    e.preventDefault()
})


function getDuration(startDate, endDate = new Date()){
    let duration = moment.duration(moment(endDate).diff(startDate), 'milliseconds').as('years').toFixed(2)
    return '(' + duration + 'years)'
}