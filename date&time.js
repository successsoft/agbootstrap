/*** Date picker ***/

$(function() {
	jQuery( "#date_of_birth" ).datepicker({
		changeMonth: true,
		changeYear: true,
		yearRange: '1950:' + new Date().getFullYear(),
		dateFormat: 'dd-mm-yy',
		maxDate: "+0D"
	});
    
});
/** DatetimePicker with start and end date **/

 <!-- Jquery Time Date Picker insert css and js -->
<style type="text/css">
.ui-timepicker-div .ui-widget-header { margin-bottom: 8px; }
.ui-timepicker-div dl { text-align: left; }
.ui-timepicker-div dl dt { height: 25px; margin-bottom: -25px; }
.ui-timepicker-div dl dd { margin: 10px 10px 10px 65px; }
.ui-timepicker-div td { font-size: 90%; }
.ui-tpicker-grid-label { background: none; border: none; margin: 0; padding: 0; }
</style>

<script type="text/javascript" src="js/jquery-ui-1.10.3.custom.min.js"></script>
<script type="text/javascript" src="js/jquery-ui-timepicker-addon.js"></script>
<script type="text/javascript" src="js/jquery-ui-sliderAccess.js"></script>

$(function() {
	/*** For date and time picker ***/
	var startDateTextBox = $('#event_start_date');
	var endDateTextBox = $('#event_end_date');

	startDateTextBox.datetimepicker({
		ampm: true,
		changeMonth: true,
		changeYear: true,
		yearRange: "-10:+10",
		dateFormat: 'dd-mm-yy',
		minDateTime: 0,
		onSelect: function (selectedDateTime){
			var time = new Date($(this).datetimepicker('getDate').getTime());
			endDateTextBox.datetimepicker('option', 'minDateTime',time);

			// endDateTextBox.datetimepicker('option', 'minDateTime', startDateTextBox.datetimepicker('getDate') );
		},
		beforeShow: function(){
			startDateTextBox.datetimepicker("option", {
				 maxDate: endDateTextBox.datetimepicker('getDate')
			});
		}
	});
	endDateTextBox.datetimepicker({
		ampm: true,
		changeMonth: true,
		changeYear: true,
		yearRange: "-10:+10",
		dateFormat: 'dd-mm-yy',
		minDateTime: 0,
		onClose: function(dateText, inst) {
			if (startDateTextBox.val() != '') {
				var testStartDate = startDateTextBox.datetimepicker('getDate');
				var testEndDate = endDateTextBox.datetimepicker('getDate');
				if (testStartDate > testEndDate)
					startDateTextBox.datetimepicker('setDate', testEndDate);
			}else {
				startDateTextBox.val(dateText);
			}
		},
		onSelect: function (selectedDateTime){
			var time = new Date($(this).datetimepicker('getDate').getTime());
			startDateTextBox.datetimepicker('option', 'maxDateTime',time);
			//startDateTextBox.datetimepicker('option', 'maxTimeDate', endDateTextBox.datetimepicker('getDate') );
		},
		beforeShow: function(){
			if (startDateTextBox.val() != '') {
				endDateTextBox.datetimepicker("option", {
					minDate: startDateTextBox.datetimepicker('getDate')
				});
			}
		}
	});   	
		

	/** For timepicker only **/
	var time = new Date();
	$('#from').timepicker({
		ampm: true,
		hourMin: 9,
		hourMax: 19,
		timeFormat: 'hh:mm TT',
		onClose: function(dateText, inst) {
			var startDateTextBox = $('#to');
			if (startDateTextBox.val() != '') {
				var testStartDate = new Date(startDateTextBox.val());
				var testEndDate = new Date(dateText);
				if (testStartDate > testEndDate)
					startDateTextBox.val(dateText);
			}
			else {
				startDateTextBox.val(dateText);
			}
		},
		onSelect: function(dateText){
			var time = new Date($(this).datetimepicker('getDate').getTime());
			$('#to').timepicker('option', 'minDateTime',time);
		}
	});
	$('#to').timepicker({
		ampm: true,
		hourMin: 10,
		hourMax: 21,
		timeFormat: 'hh:mm TT',
		onClose: function(dateText, inst) {
			var startDateTextBox = $('#from');
			if (startDateTextBox.val() != '') {
				var testStartDate = new Date(startDateTextBox.val());
				var testEndDate = new Date(dateText);
				if (testStartDate > testEndDate)
					startDateTextBox.val(dateText);
			}
			else {
				startDateTextBox.val(dateText);
			}
		},
		onSelect: function(dateText){
			var time = new Date($(this).datetimepicker('getDate').getTime());
			$('#from').timepicker('option', 'maxDateTime',time);
		}
	});

 /** Date time picker with one date **/
 <script>
    $(function() {
        $('#deal_end_date').datetimepicker({
            changeMonth: true,
			changeYear: true,
            yearRange: "-10:+10",
			dateFormat: 'dd-mm-yy',
				timeFormat: "hh:mm tt",
            minDateTime: 0,// minDate: "+0D",
            ampm: true,
        });
		$("#from_date").datepicker({
			dateFormat: 'dd-mm-yy',
			changeMonth: true,
			changeYear: true,
			maxDate: new Date(),
			onSelect: function(selected) {
				var date = $(this).datepicker('getDate');
				if(date != null){
					date.setDate(date.getDate() + 1); 
					$('#to_date').datepicker('option', 'minDate', date); 
				}
			},
			beforeShow: function(){
				var date = $(this).datepicker('getDate');
				if(date != null){
					date.setDate(date.getDate() + 1); 
					$('#to_date').datepicker('option', 'minDate', date); 
				}
			}
		});
		$("#to_date").datepicker({
			dateFormat: 'dd-mm-yy',
			changeMonth: true,
			changeYear: true,
			maxDate: new Date(),
			onSelect: function(selected) {
				var date = $(this).datepicker('getDate');
				if(date != null){
					date.setDate(date.getDate() - 1); 
					$("#from_date").datepicker("option","maxDate", date)
				}
			},
			beforeShow: function(){
				var date = $(this).datepicker('getDate');
				if(date != null){
					date.setDate(date.getDate() - 1); 
					$("#from_date").datepicker("option","maxDate", date)
				}
			}
		});


    });
</script>

$('#task_start_time').timepicker({
            ampm: true,
	timeFormat: 'hh:mm TT',
});

$('#task_end_time').timepicker({
	ampm: true,
	timeFormat: 'hh:mm TT',
	beforeShow: function(){
		task_start_date = $("#task_start_date").val()
		task_end_date = $("#task_end_date").val()
		if(task_start_date.valueOf() == task_end_date.valueOf()){
			task_start_time = $("#task_start_time").val()
			if(task_start_time == ""){
				var time = new Date();
				$('#task_end_time').timepicker('option', 'minDateTime',time);
			}else{
				var time = new Date($('#task_start_time').datetimepicker('getDate').getTime());
				$('#task_end_time').timepicker('option', 'minDateTime',time);    
			}
		}else{
			var time = new Date($('#task_start_time').datetimepicker("getDate"));
			$('#task_end_time').timepicker('option', 'minDateTime',null);
		}
	}
});

Validation

	var today = new Date();

function parseDMY(value) {
    var date = value.split("/");
    var d = parseInt(date[0], 10),
        m = parseInt(date[1], 10),
        y = parseInt(date[2], 10);
    return new Date(y, m - 1, d);
}
var authorValidator = $("#itemAuthorForm").validate({
    rules: {
        dateOfBirth: {
            required: false,
            dateITA: true,
            dateLessThan: '#expiredDate'
        },
        expiredDate: {
            required: false,
            dateITA: true,
            dateGreaterThan: "#dateOfBirth"
        }
    },
    onfocusout: function (element) {
        if ($(element).val()) {
            $(element).valid();
        }
    }
});

var dateOptionsDOE = {
    maxDate: today,
    dateFormat: "dd/mm/yy",
    changeMonth: true,
    changeYear: true,
    onClose: function (selectedDate) {
        $("#dateOfBirth").datepicker("option", "maxDate", selectedDate);
    }
};
var dateOptionsDOB = {
    maxDate: today,
    dateFormat: "dd/mm/yy",
    changeMonth: true,
    changeYear: true,
    onClose: function (selectedDate) {
        $("#expiredDate").datepicker("option", "minDate", selectedDate);
    }
};

jQuery.validator.addMethod("dateGreaterThan",

function (value, element, params) {
    var theDate = parseDMY(value);
    var paramDate = parseDMY($(params).val());
    if ($(params).val() === "") return true;

    if (!/Invalid|NaN/.test(theDate)) {
        return theDate > paramDate;
    }
    return isNaN(value) && isNaN($(params).val()) || (Number(value) > Number($(params).val()));
    }, 'Must be greater than {0}.');

jQuery.validator.addMethod("dateLessThan",

function (value, element, params) {
    var theDate = parseDMY(value);
    var paramDate = parseDMY($(params).val());
    if ($(params).val() === "") return true;

    if (!/Invalid|NaN/.test(theDate)) {
        return theDate < paramDate;
    }

    return isNaN(value) && isNaN($(params).val()) || (Number(value) < Number($(params).val()));
    }, 'Must be less than {0}.');

$("#expiredDate").datepicker($.extend({}, $.datepicker.regional['en-GB'], dateOptionsDOE));
$("#dateOfBirth").datepicker($.extend({}, $.datepicker.regional['en-GB'], dateOptionsDOB));

function( value, element ) {
	return this.optional(element) || /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(value);
}
//dd-mm-yy
$.validator.addMethod("dateValid", function(value, element) {
	return this.optional(element) || /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(value);
});


my_date_format('2015-07-11')
var my_date_format = function(input){
	//console.log(input)
	var d = new Date(Date.parse(input.replace(/-/g, "/")));
	//console.log(d)
	var month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	//var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	//var date = d.getDate() + "-" + month[d.getMonth()] + "-" + d.getFullYear();
	var date = ("0" + d.getDate()).slice(-2) + "-" + month[d.getMonth()] + "-" + d.getFullYear();
	var time = d.toLocaleTimeString().toLowerCase().replace(/([\d]+:[\d]+):[\d]+(\s\w+)/g, "$1$2");
	//console.log(date)
	return (date);
};

Greater than current date and time
dateHigherThanToday: true
$.validator.addMethod("dateLessThanToday", function(value, element) {
	var date= value;
	var myDate=new Date(date.split("-").reverse().join("-"));
	return myDate < new Date();
});

$.validator.addMethod("dateHigherThanToday", function(value, element) {
	var date= value;
	var myDate=new Date(date.split("-").reverse().join("-"));
	return myDate >= new Date();
});

Greater than current date
function leadingZero(value){
   if(value < 10){
	  return "0" + value.toString();
   }
   return value.toString();    
}
$.validator.addMethod("dateHigherThanToday", function(value, element) {
	var date = value;
	var myDate = new Date(date.split("-").reverse().join("-"));
	console.log(myDate)
	//convert month to 2 digits<p>
	var targetDate = new Date(); 
	targetDate.setDate(targetDate.getDate() ); 
	var dd = targetDate.getDate(); 
	var mm = targetDate.getMonth() + 1;
	var yyyy = targetDate.getFullYear();
	var dateCurrent = leadingZero(dd) + "-" + leadingZero(mm) + "-" + yyyy; 
	dateCurrent = new Date(dateCurrent.split("-").reverse().join("-"));
	console.log(dateCurrent);
	
	return myDate >= dateCurrent;
});
/** +18 validation **/
$.validator.addMethod("check_date_of_birth", function(value, element) {

    var day = $("#dob_day").val();
    var month = $("#dob_month").val();
    var year = $("#dob_year").val();
    var age =  18;

    var mydate = new Date();
    mydate.setFullYear(year, month-1, day);

    var currdate = new Date();
    currdate.setFullYear(currdate.getFullYear() - age);

    return currdate > mydate;

}, "You must be at least 18 years of age.");

PYDOB: {
	required: true,
	date: true,
	check_date_of_birth:true

},
$.validator.addMethod("check_date_of_birth", function(value, element) {

	var dobDate = $("#PYDOB").val();
	var age =  18;
	var mydate = new Date(dobDate);
	var currdate = new Date();
	currdate.setFullYear(currdate.getFullYear() - age);
	return currdate > mydate;

}, "You must be at least 18 years of age.");

$('#PYDOB').datepicker({
	changeMonth: true,
	changeYear: true,
	//yearRange: '1950:' + new Date().getFullYear(),
	dateFormat: 'mm/dd/yy',
	//maxDate: "+0D",
	yearRange: "-115:-18", //18 years or older up until 115yo (oldest person ever, can be sensibly set to something much smaller in most cases)
	maxDate: "-18Y", //Will only allow the selection of dates more than 18 years ago, useful if you need to restrict this
	minDate: "-115Y"
});

var day = $("#dobDay").val();
var month = $("#dobMonth").val();
var year = $("#dobYear").val();
var age = 18;
var mydate = new Date();
mydate.setFullYear(year, month-1, day);

var currdate = new Date();
currdate.setFullYear(currdate.getFullYear() - age);
var output = currdate - mydate
if ((currdate - mydate) > 0){
    // you are not 18
}


/** boostrap */
var from = $('.from').datepicker({ 
	autoclose: true 
}).on('changeDate', function(e){
    $('.to').datepicker({ 
		autoclose: true
	}).datepicker('setStartDate', e.date).focus();
});


//var _startDate = new Date(2012,1,20);
//var _endDate = new Date(2012,1,25);
var _startDate = new Date();
//alert(_startDate);
var _endDate = new Date(_startDate.getTime() + (24 * 60 * 60 * 1000)); //plus 1 day
$('#from').datepicker({
	format: 'mm/dd/yyyy',
	autoclose: true,
	startDate: _startDate,
	todayHighlight: true
}).on('changeDate', function(e){
    _endDate = new Date(e.date.getTime() + (24 * 60 * 60 * 1000)); //set new end date
    $('#to').datepicker('setStartDate', _endDate); //dynamically set new start date for #to
});

$('#to').datepicker({
	format: 'mm/dd/yyyy',
	autoclose: true,
	startDate: _endDate,
	todayHighlight: false
}).on('changeDate', function(e){
    //if current date is bigger than start date
    if (e.date.valueOf() < _startDate.valueOf()){
         alert(e.date.toString()); //called when date is changed
    }
});

$('#txtDateTo').datepicker({
	 autoclose: true,
	 endDate: "today",
	 format: 'dd-M-yyyy',
	 clearBtn: true
}).on('changeDate', function (ev) {
	endDate = new Date(ev.date.getTime() + (24 * 60 * 60 * 1000));
	$('#txtDateFrom').data('datepicker').setStartDate(endDate);
})

$('#txtDateFrom').datepicker({
	 autoclose: true,
	 endDate: "today",
	 format: 'dd-M-yyyy',
	 clearBtn: true
}).on('changeDate', function (ev) {
	startDate = new Date(ev.date.getTime() - (24 * 60 * 60 * 1000));
	$('#txtDateTo').data('datepicker').setEndDate(startDate);
})

/** datetime difference */ 
var fromdate = "2016-05-21 16:07:53";
var todate = "2016-05-21 13:07:53";
fromdate = new Date(Date.parse(fromdate.replace(/-/g, "/")));
todate = new Date(Date.parse(todate.replace(/-/g, "/")));
var min = ( fromdate - todate ) / 1000 / 60;
//var sec = ( fromdate - todate ) / 1000 / 60 / 60;
//var hour = ( fromdate - todate ) / 1000;


/** Converting a datetime string to timestamp in Javascript **/
var dateString = '17-09-2013 10:08',
    dateTimeParts = dateString.split(' '),
    timeParts = dateTimeParts[1].split(':'),
    dateParts = dateTimeParts[0].split('-'),
    date;

date = new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], timeParts[0], timeParts[1]);

console.log(date.getTime()); //1379426880000
console.log(date); //Tue Sep 17 2013 10:08:00 GMT-0400

$('#ftd-Form input[name="selFDD"]:radio').click(function() { //radio button click
	radio_val = $(this).val(); // to get radio button value
	if(radio_val == 'Today'){
		var dt = new Date();
		
		var dt2 = new Date()
		date2 = dt2.getDate();
		month2 = dt2.getMonth();
		year2 = dt2.getFullYear();
		
		var breakfast = "09:00:00";
		breakfastSplit = breakfast.split(':')
		
		var lunch = "12:00:00";
		lunchSplit = lunch.split(':')
		
		var dinner = "19:00:00";
		dinnerSplit = dinner.split(':')
		
		bfDate = new Date(year2, month2, date2, breakfastSplit[0], breakfastSplit[1], breakfastSplit[2]);
		lDate = new Date(year2, month2, date2, lunchSplit[0], lunchSplit[1], lunchSplit[2]);
		DDate = new Date(year2, month2, date2, dinnerSplit[0], dinnerSplit[1], dinnerSplit[2]);
		
		/** console.log(dt.getTime());
		console.log(bfDate.getTime());
		console.log(lDate.getTime());
		console.log(DDate.getTime()); */
		
		if(dt.getTime() > bfDate.getTime()){
			$("#FTDS-selDT option[value='Break Fast']").attr('disabled','disabled');
		}
		
		if(dt.getTime() > lDate.getTime()){
			$("#FTDS-selDT option[value='Lunch']").attr('disabled','disabled');
		}
		
		if(dt.getTime() > DDate.getTime()){
			$("#FTDS-selDT option[value='Dinner']").attr('disabled','disabled');
		}
	}else{
		$('#FTDS-selDT').find("option").removeAttr("disabled");
	}
	$('#FTDS-selDT').removeAttr("disabled");
});


/** current date conversion **/
 $.fn.getFormattedDate = function(date) {
	var year = date.getFullYear();
	var month = (1 + date.getMonth()).toString();
	month = month.length > 1 ? month : '0' + month;
	var day = date.getDate().toString();
	day = day.length > 1 ? day : '0' + day;
	return year + '-' + month + '-' + day;
}//yyy-mm-dd
var date = new Date();
var getdate = $.fn.getFormattedDate(date);
getdate = $.fn.my_date_format_dd_M_yyyy(getdate);
$('#txtRWHDate').val( getdate );


//** Bootstrap datepicker **/
$('#txtWWHDate').datepicker({
	 autoclose: true,
	 endDate: "today",
	 format: 'dd-M-yyyy'
}).on('show', function(e){     
	if($('#txtWWHDate').val()){
		var attval = $.fn.my_date_format_yyyymmdd($('#txtWWHDate').val());
		var setDate = new Date(attval);
		//console.log(setDate)
		$('#txtWWHDate').datepicker('setDate', setDate);
	}
}).on('hide', function(e){     
	if($('#txtWWHDate').val()){
	}else{
		var date = new Date();
		var getdate = $.fn.getFormattedDate(date);
		getdate = $.fn.my_date_format_dd_M_yyyy(getdate);
		$('#txtWWHDate').val( getdate )
	}
});


/*** Time Convertion **/

function tConvert (time) {
	// Check correct time format and split into components
	time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

	if (time.length > 1) { // If time format correct
		time = time.slice (1);  // Remove full string match value
		time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
		time[0] = +time[0] % 12 || 12; // Adjust hours
	}
	return time.join (''); // return adjusted time or original string
}

tConvert ('18:00:00');

var timeString = "18:00:00";
var H = +timeString.substr(0, 2);
var h = (H % 12) || 12;
var ampm = H < 12 ? "AM" : "PM";
timeString = h + timeString.substr(2, 3) + ampm;
document.write(timeString);

/** Bootstrap **/
$.fn.my_date_format_yyyymmdd = function(input){
	//console.log(input)
	var d = new Date(Date.parse(input.replace(/-/g, "/")));
	//console.log(d)
	var month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	var date = d.getFullYear() + "-" + month[d.getMonth()] + "-" + ("0" + d.getDate()).slice(-2);
	return (date);
};

$('#txtDate').datepicker({
	 autoclose: true,
	 endDate: "today",
	 format: 'dd-M-yyyy'
}).on('show', function(e){
	var offset = $('#txtDate').offset();
	
	
	$('.datepicker').css({top: offset.top +"px"})
	
	if($('#txtDate').val()){
		var attval = $.fn.my_date_format_yyyymmdd($('#txtDate').val());
		var setDate = new Date(attval);
		//console.log(setDate)
		$('#txtDate').datepicker('setDate', setDate);
	}
}).on('hide', function(e){     
	//$('#txtA5').focus();
});

/** bootstrap timepicker **/

$('#dtpSTime').datetimepicker({
		format: 'LT',
		stepping: 15,
	}).on("dp.show", function (e) {
		if ($("#dpEdate").val() != '') {
			var dpEdate = $("#dpEdate").val();
			dpEdate = $.fn.date_yyyymmdd(dpEdate);
			dsplit = new Array();
			dsplit = dpEdate.split("-");
			y = dsplit[2];
			m = dsplit[1];
			d = dsplit[0];
			if (Date.parse(new Date()) > Date.parse( new Date(y,m,d) )) { 
				var dt = new Date();
				var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
				$('#dtpSTime').data("DateTimePicker").minDate(moment({hour: dt.getHours(), minute: dt.getMinutes()}));
			}else{
				$('#dtpSTime').data("DateTimePicker").minDate(moment({hour: 00, minute: 00}));
			}
		}
	}).on("dp.change", function (e) {
		if ($("#dpEdate").val() != '') {
			var dpEdate = $("#dpEdate").val();
			dpEdate = $.fn.date_yyyymmdd(dpEdate);
			dsplit = new Array();
			dsplit = dpEdate.split("-");
			y = dsplit[2];
			m = dsplit[1];
			d = dsplit[0];
			if (Date.parse(new Date()) > Date.parse( new Date(y,m,d) )) { 
				var dt = new Date();
				var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
				$('#dtpSTime').data("DateTimePicker").minDate(moment({hour: dt.getHours(), minute: dt.getMinutes()}));
			}else{
				$('#dtpSTime').data("DateTimePicker").minDate(moment({hour: 00, minute: 00}));
			}
		}
	});
	
	$('#dtpETime').datetimepicker({
		format: 'LT',
		stepping: 15,
	}).on("dp.show", function (e) {
		if ($("#dtpSTime").val() != '') {
			var dtpSTime = $("#dtpSTime").val();
			dtpSTime = $.fn.convertTime12to24(dtpSTime)
			dsplit = new Array();
			dsplit = dtpSTime.split(":");
			h = dsplit[0];
			m = dsplit[1];
			$('#dtpETime').data("DateTimePicker").minDate(moment({hour: h, minute: m}));
		}
	});


	/** Current time **/
	var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();


	/** date compare current date **/
	date = 	$("#datepicker").val();
	dsplit = new Array();
	dsplit = dpEdate.split("-");
	y = dsplit[2];
	m = dsplit[1];
	d = dsplit[0];
	if (Date.parse(new Date()) > Date.parse( new Date(y,m,d) )) { 
		console.log('in')
	}else{
		console.log('out')
	}

//$("#dtpSTime").mask("Hh:Mm Pp");
//$("#dtpETime").mask("Hh:Mm Pp");

//$("#dtpSTime").mask("Hh:Mm");
//$("#dtpETime").mask("Hh:Mm");
$.fn.fomartTimeShow = function(time) {
				// Check correct time format and split into components
	time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
	
	if (time.length > 1) { // If time format correct
		time = time.slice (1);  // Remove full string match value
		time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
		time[0] = +time[0] % 12 || 12; // Adjust hours
	}
	return time.join (''); // return adjusted time or original string
}
$.fn.fomartTimeShow2 = function(timeString) {
	var hourEnd = timeString.indexOf(":");
	var H = +timeString.substr(0, hourEnd);
	var h = H % 12 || 12;
	var ampm = H < 12 ? " AM" : " PM";
	timeString = h + timeString.substr(hourEnd, 3) + ampm;
	return timeString;
}

//$("#dtpSTime").mask("Hh:Mm Pp");
//$("#dtpETime").mask("Hh:Mm Pp");
$.mask.definitions['H'] = "[0-1]";
$.mask.definitions['h'] = "[0-9]";
$.mask.definitions['M'] = "[0-5]";
$.mask.definitions['m'] = "[0-9]";
$.mask.definitions['P'] = "[AaPp]";
$.mask.definitions['p'] = "[Mm]";