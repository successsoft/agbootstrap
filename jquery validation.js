http://jsfiddle.net/jquerydeveloper/LmHkD/
http://jquery-plugins.net/tag/input-format

JQuery User defines validation:

unique edit: 

remote: {
	url: "ajax_emailid_exists.php",
	type: "post",
	data: {
		member_mail: function(){
			return $("#member_mail").val()
		},
		id: function(){
			return $("#id").val()
		}
	}
}

/** jquery elements **/
//set this to false if you don't what to set focus on the first invalid input
focusInvalid: false,
//by default validation will run on input keyup and focusout
//set this to false to validate on submit only
onkeyup: false,
onfocusout: false,
//by default the error elements is a <label>
errorElement: "div",
//place all errors in a <div id="errors"> element

/** Range Validation **/
rangelength: [6,16],


Letter Only:
	jQuery.validator.addMethod("lettersonly", function(value, element) {
		  return this.optional(element) || /^[a-z A-Z]+$/i.test(value);
    }); 

 Alpha Numeric

    $.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[a-z A-Z 0-9]+$/i.test(value);
    }); 

Price Validation 

	$.validator.addMethod('Decimal', function(value, element) {
    	return this.optional(element) || /^[0-9,]+(\.\d{0,2})?$/i.test(value); 
	}, "Invalid price format");

	$.validator.addMethod('decimal_val', function(value, element) {
            return this.optional(element) || /^((0|[1-9]\d?)(\.\d{1,2})?|100(\.00?)?)$/i.test(value); 
	});

	$.validator.addMethod('decimal_val', function(value, element) {
		return this.optional(element) || /^((0|[1-9]\d{1,5}?)(\.\d{1,2})?|100(\.00?)?)$/i.test(value); 
	});/**xxxx.xx**/

	$.validator.addMethod("username",function(value,element){
		return this.optional(element) || /^[a-zA-Z0-9._]{3,16}$/i.test(value);
	},"Please enter the valid Username");

	$.validator.addMethod("password",function(value,element){
		return this.optional(element) || /^[A-Za-z0-9!#$%&()*+,-./:;<=>?@[\]^_`{|}~]+$/i.test(value);
	},"Please enter the valid Password");

	$.validator.addMethod("alphanumeric",function(value,element){
			return this.optional(element) || /^[A-Za-z0-9&,-./:!;\_'\?\ ]+$/i.test(value);
	},"Please enter the valid short film name");
	
	exactlength: 10
	$.validator.addMethod("exactlength", function(value, element, param) {
        return this.optional(element) || value.length == param;
    }); //exactlength:10

	$.validator.addMethod("startrestrict", function(phone_number, element) {
		phone_number = phone_number.replace(/\s+/g, ""); 
		return this.optional(element) || !phone_number.match(/^0\d{0,10}$/);
	}); /** Phone should not start with zero**/

	$.validator.addMethod("ifsc_code",function(value,element){
		return this.optional(element) || /^[^\s]{4}\d{7}$/i.test(value);  // /^[a-zA-Z\-]{3,4}\d+$/ /^[A-Za-z]{4}\d{4}$/ /^[a-z]{4}\d{4}$/ /^[0-9]{4}[a-z]{2}$/
	}); /** IFSC Code  4 chars + 7 digits First 3 or 4 charater and numbers  **/


/** url validation: **/

$.validator.addMethod("complete_url", function(value, element) {
	return this.optional(element) || /^((http:\/\/www\.)|(http:\/\/)|(https:\/\/www\.) |(https:\/\/)|(ftp:\/\/www\.) |(ftp:\/\/)|(www\.))[a-z0-9._-]+([\-\.]{1}[a-z0-9._-]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(value);
});
$.validator.addMethod("FacebookUrl", function(value, element) {
	return this.optional(element) || /^(https?:\/\/)?((w{3}\.)?)facebook\.com\/[a-z0-9_.]+$/i.test(value);
});
$.validator.addMethod("TwitterUrl", function(value, element) {
	return this.optional(element) || /^(https?:\/\/)?((w{3}\.)?)twitter\.com\/(#!\/)?[a-z0-9_.]+$/i.test(value);
});

/** Exactly one alphabet and one digit **/

jQuery.validator.addMethod("alphanumeric", function(value, element) { 
	return this.optional(element) || /^\w*(?=\w*\d)(?=\w*[a-z A-Z])\w*$/.test(value); 
}, "Driving License should contain at least 1 alphabet and 1 digit.");

group validation
	groups: {
		  price: "property_price price_type",
		  plotarea: "plot_area plot_area_sizename",
		  builduparea: "built_up_area built_up_area_sizename",
		}

Check unique:
remote: {
		url: "<?php echo ADMIN_BASE_PATH;?>users/check_email",//required path
		type: "POST",
		data: {
			email: function() {
				return $("#email").val();
			},
			id: function() {
				return $("#id").val();
			}
		}
 }

 /** Validate hidden**/
ignore: [],
ignore: "input[type='text']:hidden",

Onkey up numbers

$(".digitsonly").keydown(function (e) {
	// Allow: backspace, delete, tab, escape, enter and .
	if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
		 // Allow: Ctrl+A
		(e.keyCode == 65 && e.ctrlKey === true) || 
		 // Allow: home, end, left, right
		(e.keyCode >= 35 && e.keyCode <= 39)) {
			 // let it happen, don't do anything
			 return;
	}
	// Ensure that it is a number and stop the keypress
	if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		e.preventDefault();
	}
});

Replace space by underscore:
var key=jQuery("#txt_search").val();
 key=key.replace(/ /g,"_");

Radio button validation using depends
ignore: ":hidden:not(select)" 
script_code: {
    required: {
		depends: function() {
			return $('input[name=banner_type]:checked').val() == 'S';
			//return (($('#door_no').val() == '')&&($('#street').val() == '')&&($('#landmark').val() == ''));
		}
	}
}

Select box validation using depends
required: {
	depends: function() {
				return($('select[name=display_ads_in] option:selected').val() == "R");
	 }
}

$('#fancyForgotPassword').validate({
	ignore: [],
	rules: {   
		mobile: {
			require_from_group: [1, '.datagroup'],
			digits: true,
		},
		email: {
			require_from_group: [1, '.datagroup'],
			email: true,
		}
	},
	messages: {
		mobile: {
			require_from_group: "Please enter email or mobile number",
			digits: "Invalid mobile number",
		},
		email: {
			require_from_group: "Please enter email or mobile number",
			email: "Invalid email id",
		}
	}
});


Longitude and latitude validation 
$.validator.addMethod("lngVal", function(value, element) {
	return this.optional(element) || /^-?((1?[0-7]?|[0-9]?)[0-9]|180)\.[0-9]{1,18}$/i.test(value);
});

$.validator.addMethod("latVal", function(value, element) {
	return this.optional(element) || /^-?([0-8]?[0-9]|90).[0-9]{1,18}$/i.test(value);
});

/** Round off in jquery  **/
save_amt.toFixed(2)

/** value less than and greater than two text box **/
$.validator.addMethod('le', function(value, element, param) {
	  return this.optional(element) || value <= $(param).val();
}, 'Invalid value');//le: '#greaterthan'
$.validator.addMethod('ge', function(value, element, param) {
	  return this.optional(element) || value >= $(param).val();
}, 'Invalid value'); //ge: '#lessthan'
$('form').validate({rules: {
            fieldName1: {le: '#fieldID2'},
            fieldName2: {ge: '#fieldID1'},
      },
      messages: {
            fieldName1: {le: 'Must be less than or equal to field 2'},
            fieldName2: {ge: 'Must be greater than or equal to field 1'},
      }
});

errorPlacement: function(error, element) {
	 if (element.attr("name") == "editor_access") {   
		//error.insertAfter($(element).closest("table"));
		error.appendTo('#label-editor_access');
	} else {
		error.insertAfter(element);
	}

	element.attr("placeholder",error.text());
}

/** Price percentage calculation **/
$.validator.addMethod('percal', function(value, element, param) {
	perresult = false;
	val1= value;
	val2 = $(param).val();
	//console.log(val2.length)
	if(val2.length > 0){
		R1 = val1 - val2;
		R1 = Math.abs(R1)
		R2 = ((+val1 + +val2)/2);
		R3 = (R1 / R2) * 100
		R3 = R3.toFixed(2);
		if(R3 <= 10){
			perresult = true;
		}else if(R3 == 0){
			perresult = false;
		}else{
			perresult = false;
		}
	}else{
		perresult = true;
	}
	return this.optional(element) || perresult;
}, 'Invalid value');

/** Price less than greater than validation **/
$.validator.addMethod('le', function(value, element, param) {
	  return this.optional(element) || value <= $(param).val();
}, 'Invalid value');
$.validator.addMethod('ge', function(value, element, param) {
	  return this.optional(element) || value >= $(param).val();
}, 'Invalid value');

/** inline */
<input id="cemail" name="email" data-rule-required="true" data-rule-email="true" data-msg-email="Please enter a valid email address">

/** Validate first 2 characters of a textfield */
var postcode = $('#post_code');
if(postcode.val() != '' && postcode.val().length > 2){
	var shortPostCode = postcode.val().substring(0,2);
	var validPostCode = /^(EH|KY)/;
	if(!shortPostCode.match(validPostCode)){
		postcode.after('<span class="error">Post code must start with EH</span>');
		dataValid = false;
	}
}

var mobile_prefix = $('#mob').subsubstr(0,2);
	$('#validate').click(function(){
	if (mobile_prefix == 44||55||65||78) {
		alert('correct');
	}
	else {
		alert('incorrect');
	}
});

jQuery.validator.addMethod("lettersonly", function(value, element) {
	return this.optional(element) || /^[a-z \s\'.,]+$/i.test(value);
}, "Letters, single quotes, space and dot");

jQuery.validator.addMethod("greaterThanZero", function(value, element) {
    return this.optional(element) || (parseFloat(value) > 0);
}, "* Amount must be greater than zero");

//And then applying this like so:

$('validatorElement').validate({
    rules : {
        amount : { greaterThanZero : true }
    }
});

/** Revalidation ***/

$('#txtWBCost').each(function() {
	$(this).rules("add", 
		{
			required: false
		})
});

/**  Form Button ***/
$.fn.validfn();
$.fn.validfn = function(){
	var areSomeFieldsEmpty = false;
	$('#isForm').find('.valid-input').each(function(i, v){
		if ($(v).val().length <= 0){
			areSomeFieldsEmpty = true;
		}
	});

	if (!areSomeFieldsEmpty){
		$('#btnSubmit').prop('disabled', false);
	}else{
		$('#btnSubmit').prop('disabled', 'disabled');
	}

}

/** bootstrap **/
$('#frmAffectedAssets').bootstrapValidator('revalidateField', 'txtLandUsage');

/** bootstrap Submit Handler **/
$('#frmRemarks').bootstrapValidator({
        framework: 'bootstrap',
        fields: {
            txtDOH: {
                validators: {
                    callback: {
                        callback: function(value, validator, $field) {
                            var txtGrievStatus = $('#txtGrievStatus').val();
                            return (txtGrievStatus !== 'U') ? true : (value !== '');
                        }
                    }
                }
            },
            txtDOD: {
                validators: {
                    callback: {
                        callback: function(value, validator, $field) {
                            var txtGrievStatus = $('#txtGrievStatus').val();
                            return (txtGrievStatus !== 'C') ? true : (value !== '');
                        }
                    }
                }
            },
            txtSOD: {
                validators: {
                    callback: {
                        callback: function(value, validator, $field) {
                            var txtGrievStatus = $('#txtGrievStatus').val();
                            return (txtGrievStatus !== 'U' && txtGrievStatus !== 'C') ? true : (value !== '');
                        }
                    }
                }
            },
            txtDOC: {
                validators: {
                    callback: {
                        callback: function(value, validator, $field) {
                            var txtGrievStatus = $('#txtGrievStatus').val();
                            return (txtGrievStatus !== 'C') ? true : (value !== '');
                        }
                    }
                }
            },
            txtRemark: {
                validators: {
                    callback: {
                        callback: function(value, validator, $field) {
                            var txtGrievStatus = $('#txtGrievStatus').val();
                            return (txtGrievStatus !== 'U' && txtGrievStatus !== 'C') ? true : (value !== '');
                        }
                    }
                }
            },
        }
    }).on('change', '[name="txtGrievStatus"]', function(e) {
        $('#frmRemarks').bootstrapValidator('revalidateField', 'txtDOH');
        $('#frmRemarks').bootstrapValidator('revalidateField', 'txtDOD');
        $('#frmRemarks').bootstrapValidator('revalidateField', 'txtSOD');
        $('#frmRemarks').bootstrapValidator('revalidateField', 'txtDOC');
        $('#frmRemarks').bootstrapValidator('revalidateField', 'txtRemark');
        
        //console.log($(this).val())
        if($(this).val() == 'U'){
            $('.sel-c').fadeOut(200);
            $('.sel-ur').delay(200).fadeIn(200);
        }else if($(this).val() == 'C'){
            $('.sel-ur').fadeOut(200);
            $('.sel-c').delay(200).fadeIn();
        }else{
            $('.sel-c .sel-ur').fadeOut(200);
        }
    }).on('error.form.bv', function(e) {
        
    }).on('success.form.bv', function(e, data) {
        
        $('#frmRemarks').bootstrapValidator('revalidateField', 'txtDOH');
        $('#frmRemarks').bootstrapValidator('revalidateField', 'txtDOD');
        $('#frmRemarks').bootstrapValidator('revalidateField', 'txtSOD');
        $('#frmRemarks').bootstrapValidator('revalidateField', 'txtDOC');
        $('#frmRemarks').bootstrapValidator('revalidateField', 'txtRemark');
        
        var button=$(e.target).data('bootstrapValidator').getSubmitButton();
        var $form = $(e.target);
        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');
        // Use Ajax to submit form data
        e.preventDefault();
        if (bv.getInvalidFields().length > 0) {    // There is invalid field
            bv.disableSubmitButtons(true);
        }else{
            $.ajax({
                type: 'POST',
                url: baseurl+'/php/griev-remark-save.php',
                data: $('#frmRemarks').serialize(),
                success: function(result) {
                    if(result.error == false){
                        $('#statusUpdate').removeClass('alert-danger').addClass('alert-success');
                        $('#statusUpdate strong').html('Grievance Status update successfully!')
                        $('#statusUpdate').fadeIn(200)
                        setTimeout(function() {
                        	//window.location.href = baseurl+"/pages/grievance-redressal/"
                        }, 3000)
                    }else{
                        $('#statusUpdate').fadeIn(200)
                        $('#statusUpdate').removeClass('alert-success').addClass('alert-danger');
                        $('#statusUpdate strong').html(result.msg)
                    }
                },
                complete: function(){
                    $('#btnGrievStatus').prop("disabled", false);
                }
            });
        }
    });


	/** Uploadifive validation **/
	/** 'fileType'          : ["image\/jpeg","image\/jpg","image\/png","application\/pdf","application\/msword","application\/vnd.openxmlformats-officedocument.wordprocessingml.document",
							"application\/excel","application\/vnd.ms-excel","application\/x-excel","application\/x-msexcel",
							"application\/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/x-rar-compressed"],*/
	'fileType'          : ["*.jpeg","*.jpg","*.png","*.pdf","*.docx","*.doc","*.xls","*.xlsx","*.zip","*.rar"],
	'customizeExt'      : true,