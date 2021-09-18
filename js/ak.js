
$(document).ready(function(){
    var startDate = new Date(2018,5,20)
    var duration = moment.duration(moment().diff(startDate),'milliseconds').as('years').toFixed(2)
    document.getElementById('txtExperience').innerHTML = '('+ duration + 'years)'
})

$('#feedbackForm').on('submit', function(e){
    e.preventDefault()
})
