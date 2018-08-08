http://www.degraeve.com/reference/specialcharacters.php

Redirect:
	window.location.href = "<?php echo $site_url;?>";
Reload: 
	 window.location.reload();

//during popup reload
window.parent.top.location.reload();

window.close(); window.opener.location.href="'.$page_url.'";

var win = window.open('filesystem.html', '_blank');

/** Object length **/
Object.keys(response).length

//in php 
echo '<script language="javascript">window.close(); window.opener.location.href="'.$url.'";</script>';

// Scroll Top
$("html, body").animate({ scrollTop: 0 }, "slow");
// Scroll bottom
$("html, body").animate({ scrollTop: $(document).height() }, 1000);

/** Get id for attribut **/
<a href="javascript:void(0);" id="addtobag_1" class="remove-link"></a>
$("body").on("click","[id^='addtobag_']", function(event){
	var id = this.id;
	var sid = new Array();
	sid = (id.split("_"));
	product_id = sid[sid.length-1];
)}

<a href="javascript:void(0);"  class="remove-link" data-productid='1'></a>
$("body").on("click",".remove-link", function(event){
	product_id = $(this).data('productid');
)}

<a href="javascript:void(0);"  class="remove-link" id='1'></a>
$("body").on("click",".remove-link", function(event){
	$( ".remove-link" ).attr( "id" ); //$( this ).attr( "id" );
)}

/** Fetch current input value **/
data: function (params) {
  return {
	q: params.term, // search term
	page: params.page
  };
},

/** submit handler **/

  $("#login-form").validate({
	  submitHandler: function(form) {
            var email = document.getElementById("email_id").value;
            var password = document.getElementById("password").value;
            jQuery.ajax({
                type: "POST",
                url: BASE_PATH+"users/login",
                data: "email="+email+"&password="+password,
                success: function(arr){    
                    if(arr == "error"){
                        jQuery('#email_login_error').show();
                        jQuery('#email_login_error').text('Invalid Username/Password.');
                        return false;
                    }if(arr == "locked"){
                        jQuery('#email_login_error').show();
                        jQuery('#email_login_error').text('Your account has been locked.');
                        return false;
                    }else {
                        window.location.href = arr;                  
                    }
                }
            });
            return false;
        },
		rules: {
            email_id: {
                required: true,
                email: true
            },
            password: {
				required:true
            }
	    },
		messages: {
	    	email_id: {
                required: "Please enter the Email Id",
                email: "Invalid Email Id"
            },
            password: {
				required: "Please enter the Password"				
			}
               	
	    }
    });

	$("#person_details").validate({
		submitHandler: function(form) {
			$.ajax({ 
                type: "POST",
                dataType: "json",
                url: "useraddedit.php",
                data: $("#person_details").serialize(),
    			enctype: 'multipart/form-data',
                processData: false,
    			cache: false,
    			success: function(data){
					console.log(data)
				},
                error: function (xhr, ajaxOptions, thrownError) {
            	    console.log(xhr.responseText);
            	    console.log(xhr.status);
            	    console.log(thrownError);
            	}
			});
            return false;
        },
			rules:{
            display_name: {
                required: true
            },
            copy_group_id: {
                required: true
            },
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "display_name") { 
                $("#span-error-disp-name").html('Fill Name, ');
            }else if (element.attr("name") == "copy_group_id") { 
                $(".ui-multiselect ").addClass('error');
                $("#span-error-group").html('Select a group ');
            }else if((element.attr("name") == "emp_password")||(element.attr("name") == "emp_username")||(element.attr("name") == "sel_acc_gp_id")){
                $("#span-error-group").html('Custom field error ');
                if(element.attr("name") == "sel_acc_gp_id"){
                    $(".ui-multiselect ").addClass('error');
                }
            }
    		$('.error-msg').show();
        }
    })

/** label content null **/
	jQuery('label.error').hide();

/** open fancy box **/
	jQuery.fancybox({
              href: '#dialog_film_success_top_'+film_id,
         });

	 div content
	  
	 <div id="dialog_film_success_rand_<?php echo $random_movie['ShortFilm']['id'];?>">
	    <div class="alert-head">
		<h2> Success Alert</h2>
	    </div> 
	    <div class="alert-content">
		<strong><?php echo ucfirst(strtolower(str_replace('&','&amp;',$random_movie['ShortFilm']['title']))); ?></strong> successfully added to your favourite list. <br />
		<input type="button" class="button_blue comment_close" onclick="jQuery.fancybox.close()"  value="OK" style="margin-left: 70%;" />
	    </div>
	</div>



/** Autocomplete for state **/

/** Autocomplete for Department **/	
    function log_department(event, data, formatted) { 
        $('#department').val(data[1]);  
    }
    
    $("#department_id").autocomplete("<?php echo BASE_PATH;?>users/searchbydepartment", {
			width: 200,
			selectFirst: false,
            mustMatch: true
	});
    
    $("#department_id").result(log_department).next().click(function() {
	   $(this).prev().search();
    });

    $("#clear").click(function() {
	$(":input").unautocomplete();
    });

    function searchbydistrict($state_id='') {
       $this->autoRender = false;
       $q = $_REQUEST['q'];
       $districts = $this->District->find('all',array('fields' => array('id','district'),'conditions' => array('state_id' => $state_id, 'district LIKE' => $q.'%')));
       foreach($districts as $district){ 
          echo $district['District']['district']."|".$district['District']['id']."\n";			
	   }

	}

/** radio & check box **/
disable radio button
$("input[name='residential[]']").attr('disabled', 'disabled');for single(name='residential')

enable radio button
$("input[name='residential[]']").attr('disabled', false);

uncheck all selected check box
$("input[name='commercial[]']").prop('checked', false);

To get multiple checked value under common name
var property_bhk = jQuery("input[name='property_bhk[]']:checked").map(function(_, el) {
	return jQuery(el).val();
}).get();alert(property_bhk); or console.log(property_bhk);

on click radio  button get value
$('input[name="parent"]:radio').click(function() { //radio button click
        radio_val = $(this).val(); // to get radio button value
});

$("input[name='residential[]']").click( function () { //checked box click
	var radio_val = $("input[name='parent']:checked").val(); // get radio & check box value button value
)};

$("input[name='ad_type']:checked").val(); // checked value during on load

radio button checked value: /* test this */

if($("input[type='radio'].radioBtnClass").is(':checked')) {
    var card_type = $("input[type='radio'].radioBtnClass:checked").val();
    alert(card_type);
} 
or

if($("input[type='radio'].radioBtnClass").is(':checked')) {
        var card_type = $(this).val();
        alert(card_type);
}

$("input:radio[name=theme]").click(function() {
    var value = $(this).val(); or  var val = $('input:radio[name=theme]:checked').val();
});


var numberOfChecked = $('input:checkbox[name="theme"]:checked').length;
var totalCheckboxes = $('input:checkbox[name="theme"]').length;
var numberNotChecked = $('input:checkbox[name="theme"]:not(":checked")').length;

// Radio button checked using id
$('input:radio[name="user_access"][id="user_access_view"]').prop('checked', true);
/* test upto this */


select box
$("#user_type").bind("change", function () {
	$(this).val(); or $('#user_type :selected').val(); //$('#some_select_box option:selected').remove(); remove selected option
});

$("select[name=mySelections] option:selected").val() // selected value during on load

$("#selProduct option:selected").prop("selected", false)
$("select option[value='"+ $variable + "']").attr('disabled', true ); 


/* jquery function: get id form li, a, etc.. */ 
<a class="next-month" href='javascript:void(0);' data-day="<?php echo $i;?>" data-month="<?php echo $change_month_next; ?>" data-year="<?php echo $change_year_next; ?>" title='<?php echo $i." ".$month_name;?>' rel='day_view'>
$(function(){
        
	$('a.last-month').on('click', function() {
	    $.fn.lastmonth($(this).data('day') , $(this).data('month'), $(this).data('year'));
	});

	$.fn.lastmonth = function(day,month,year) { 
            $.colorbox.open({
                href: "<?php echo BASE_PATH ."calendar_events/day_view";?>?day="+day+"&month="+month+"&year="+year,
                type : 'iframe',
                padding : 5
            });
        }
});

<a title="View" href="javascript:void(0);" data-id="1" data-days="10" data-months="10" class="view">View</a><br />
$('a.view').on('click', function() {
    currentElemID = $(this).data('id') // or you can use this.id
    currentElemDAY = $(this).data('days')
    $.fancybox.open({
		href : 'value.html',
		type : 'iframe',
		padding : 5,
		closeClick : true,
	});
});

<a class="btn btn-danger" title="Delete Agent" href="javascript:void(0);" id="10"></a>
$('a.btn-danger').click(function(event) {
        var currentElemID = $(this).attr("id") // or you can use this.id
        $('#myModal_'+currentElemID).modal('show');
});
 <li class="citySelectOption" data-value="all_cities">All Cities</li>
 $('li.citySelectOption').click(function() {
 list_value = $(this).data('value')
            $.ajax({
                type: "post",
                url: "<?php echo BASE_PATH; ?>cities/selected_city",
                data: "list_value="+list_value,  
                success: function(arr){
                    window.location.reload();
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.responseText);
                    alert(xhr.status);
                    alert(thrownError);
                }
        	});     
        });

function showcity(str2){
    if (str2 == "") {
	document.getElementById("city").innerHTML = "";
	return;
    }
    if (window.XMLHttpRequest) {
	// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    document.getElementById("city").innerHTML = xmlhttp.responseText;
	}
    }
    xmlhttp.open("GET", "district.php?state=" + str2, true);
    xmlhttp.send();
}

/** Jquery add more & remove input box **/

<script type="text/javascript">
    $(document).ready(function() {
        var MaxInputs		= 8;
        var InputsWrapper 	= $("#InputsWrapper"); 
        var AddButton	 	= $("#AddMoreFileBox");
        var x = InputsWrapper.length;
        var FieldCount=1; 
        $("#AddMoreFileBox").live('click', function() {
    		if(x <= MaxInputs){
    			FieldCount++; 
    			$(InputsWrapper).append('<div><div class="span2"><input type="text" name="product_max_price_'+ FieldCount +'" id="product_max_price_'+ FieldCount +'" value="Text '+ FieldCount +'"/></div><div class="span2"><select id="product_weight_'+ FieldCount +'" name="product_weight_'+ FieldCount +'" class="" >option value="product_weight">-- Select Weight --</option></select></div><div class="span2"><a href="#" class="removeclass">&times;</a></div></div>');
    			x++; 
    		}
            return false;
        });
        //$("body").on("click",".removeclass", function(event){
        $('.removeclass').live('click', function() { 
    		if( x > 1 ) {
				$(this).parent('div').parent().remove();
				//$(this).parent('li').parent().remove();
				x--;
    		}
            return false;
        }) 
    });
</script>

<div id="InputsWrapper">
	<p style="margin-left: 20px;">
		<div class="span2">
			<?php echo $this->Form->input('product_max_price_1',array('type' => 'text', 'name' => 'product_max_price_1', 'id' => 'product_max_price_1')); ?>
		</div>
		<div class="span2">
			<?php echo $this->Form->input('product_weight_1',array('type' => 'select', 'name' => 'product_weight_1','empty' => '-- Select Weight --', 'class' => 'product_weight' ,'id' => 'product_weight_1')); ?>
		</div>
	</p>
</div>
<div>
	<a class="btn btn-info" id="AddMoreFileBox" href="#">Add More Field</a>
</div>

/*****Disable the selected value in select box****/

$(function(){
	$('.product_detail_id').live('change', function () {
		$.fn.disableSelectedOption(); /** Function call to disable the selected **/
	});
	
	$('.product_detail_id').live('click', function () {
		$.fn.disableSelectedOption(); /** Function call to remove disabled value **/
	});
	
	$.fn.disableSelectedOption = function() { 
		$('.product_detail_id > option').each(function () {
		   $(this).removeAttr('disabled'); 
		});
		$('.product_detail_id > option:selected').each(function () {
			var disableOption = $(this).val();
			// console.log(disableOption)
			$('.product_detail_id > option:not(:selected)').each (function () {
				if (disableOption === $(this).val()) {
				   $(this).attr('disabled', 'disabled');   
				}                      
			});
		});    
	} 
});
/*****End****/    
/** Jquer CSS Properties*//
/** Multiple font-size to fontSize **/ 
$(".cIconSmall").css({
    float: "left", 
    width: "59px", 
    background: "transparent url('http://download.com/47.jpg') no-repeat scroll -132px -1px" 
});

/** single **/
$("#id").css("display", "none");

/*** JSON Select2 ***/

$("#del_store_id").select2({
	allowClear: true,
	width:'100%',
	placeholder: "Search a store",
	minimumInputLength: 2,
	ajax: {
		url: base_path+"carts/get_store",
		dataType: 'json',
		data: function (term, page) {
			return {
				q: term
			};
		},
		results: function (data, page) {
			return { results: data.strloc };
		}
	},
	formatResult: storelocatorFormatResult, // omitted for brevity, see the source of this page
	formatSelection: storelocatorFormatSelection,
});

$("#del_store_id").on('select2-removed', function(e){
	$("#store-address").empty()
});
    
/** Select2 get value **/
$("#mail_ids").on("change", function(e) {
	seleted_ids = $("#mail_ids").select2("val")
	$("#seleted_ids").val(seleted_ids)
})

function storelocatorFormatResult(strloc) {
    var markup = "<div class='movie-title'>" + strloc.location_name + "</div>";
    if (strloc.details !== undefined) {
        markup += "<div class='movie-synopsis'>" + strloc.details + "</div>";
    }
    return markup;
}

function storelocatorFormatSelection(strloc) {
    return strloc.location_name;
}


/** Youtube index issue **/
$("embed").attr("wmode","opaque");
    
$("embed[src*='youtube.com']").each(function(){
	var url = $(this).attr('src');
	$(this).attr('src',url+'?wmode=transparent');
});

$("iframe").attr("wmode","opaque");
    
$("iframe[src*='youtube.com']").each(function(){
	var url = $(this).attr('src');
	$(this).attr('src',url+'?wmode=transparent');
});

/** Error replacement code **/

errorPlacement: function(label, element) {
	// position error label after generated textarea
	if (element.attr("name") == "video_location") {
		element.parents("#video-loc").append(label);
		 //label.insertAfter(element.next())
	}else {
		label.insertAfter(element)
	}
} 
(or)
errorPlacement: function(error, element) {
	 if (element.attr("name") == "editor_access") {   
		//error.insertAfter($(element).closest("table"));
		error.appendTo('#label-editor_access');
	} else {
		error.insertAfter(element);
	}
}
(or)
errorPlacement: function(error, element) {
	if (element.attr("name") == "reg_first_name") { 
		if(error.text()=="Invalid first name"){
			element.val("");
		}
		element.attr("placeholder",error.text());
	}else{
		element.attr("placeholder",error.text());
	}
}
/** Sum in jquery **/
var a = $('input[name=service_price]').val();
var b = $('input[name=modem_price]').val();
var total = +a + +b;

var a = parseInt($('input[name=service_price]').val());
var b = parseInt($('input[name=modem_price]').val());
var total = a+b;

/** Tiny MCE Editor **/
tinyMCE.get('message').setContent(template_description); // set content to editor
message = tinyMCE.get('message').getContent(); // get content from editor

/** Toggol class used for likes **/
$('.not-ul').toggleClass('display');

/** Image not found or error **/
<img alt="test" title="test" src="images/product.png"  onerror="this.onerror=null;this.src='images/no-found.png';"/>

/** Data Table **/
$('#productTable').dataTable( {
	"aLengthMenu": [[10,25,50,100,200,-1],[10,25,50,100,200,"ALL"]],  
	"sPaginationType": "full_numbers", 
	"aoColumns": [{ "sWidth": "25%"}, { "sWidth": "25%"}, { "sWidth": "15%"} , { "sWidth": "15%"} , { "bSortable": false, "sClass":"center", "sWidth": "10%" }, { "bSortable": false, "sClass":"center", "sWidth": "10%" }],
	"iDisplayLength": 20,
	"sPaginationType": "full_numbers",
	"bProcessing": true,
	"bServerSide": true,
	"sAjaxSource": "scripts/buyer_deal_jsonp.php",
	"sServerMethod": "POST",
	"fnServerParams": function ( aoData ) {
		aoData.push( { "name": "SellerId", "value":  $("#SellerId").val()} );
	}
});

/** Jquery clearing form input **/
$("input[type=text], textarea").val("");

$(':input','#myform').not(':button, :submit, :reset, :hidden').val('') .removeAttr('checked') .removeAttr('selected');

$('#myform')[0].reset();

/** To apply value in data **/
$('#a-delete').data('userid', "working")
$('#a-delete').attr('data-block', 'something');
$('#a-delete').attr('id', '1');

/** Toggle close **/
$('#showMore').toggle(function() {
    $(this).text('Before');
}, function() {
    $(this).text('After');
});

/** jquery array push **/
var quesArray = [];
if ($.inArray(quesid, quesArray) > -1){ // checking array exists
	return false;
}else{
	quesArray.push( quesid );
}

/** Select2 **/
$("#host_port_id").bind('change',function(){
	mulval = $("#host_port_id").val()
	$("#selectedVal").val(mulval)
})
$("#agent_ids").on("change", function(e)  { 
	var new_select_id = e.added.id
	$("#agent_ids").select2("val", "")
	$("#agent_ids").select2("val", [new_select_id])
});

/** Multi check box true false **/
<input class="checkall" name="checkall" type="checkbox" id="checkall" />

<input type="checkbox" value="10406" id="inpcheckbox" name="inpcheckbox" class="inpcheckbox">
<input type="checkbox" value="10407" id="inpcheckbox" name="inpcheckbox" class="inpcheckbox">
<input type="checkbox" value="10408" id="inpcheckbox" name="inpcheckbox" class="inpcheckbox">
$("body").on("change","#checkall", function(event){
	if ($(this).prop('checked')) {
		//checked
		$("input[name='inpcheckbox']").prop('checked', true);
	}
	else {
		//not checked
		$("input[name='inpcheckbox']").prop('checked', false);
	}
});


/***  li length ***/
var liLength = $('.ms-selection .ms-list li').length
var liDisplayNone = $('.ms-selection .ms-list li[style*="display: none"]').length


/**** Word Count ****/

function wordCount( val ){
    return {
        charactersNoSpaces : val.replace(/\s+/g, '').length,
        characters         : val.length,
        words              : val.match(/\S+/g).length,
        lines              : val.split(/\r*\n/).length
    }
}



var $div = $('div');

$('textarea').on('input', function(){
    
  var c = wordCount( this.value );
    
  $div.html(
      "<br>Characters (no spaces): "+ c.charactersNoSpaces +
      "<br>Characters (and spaces): "+ c.characters +
      "<br>Words: "+ c.words +
      "<br>Lines: "+ c.lines
  );
    
});

setTimeout(function() {
	window.location.href = baseurl+"/pages/users/";
}, 3000);

/***** Recalulate serial number *****/
<table border="1" id="staff">
	<tbody>
		<tr class="prototype">
			<td><input type="text" name="id[]" value="0" class="id"></td>
			<td><input type="text" name="name[]" value=""></td>
			<td><input type="text" name="col4[]" value=""></td>
			<td><input type="text" name="col3[]" value=""></td>
		</tr>
		<tr class="2 item">
			<td><input type="text" name="id[]" value="0" class="id"></td>
			<td><input type="text" name="name[]" value=""></td>
			<td><input type="text" name="col4[]" value=""></td>
			<td><input type="text" name="col3[]" value=""></td>
			<td><button class="remove">Remove</button></td>
		</tr>
		<tr class="3 item">
			<td><input type="text" name="id[]" value="0" class="id"></td>
			<td><input type="text" name="name[]" value=""></td>
			<td><input type="text" name="col4[]" value=""></td>
			<td><input type="text" name="col3[]" value=""></td>
			 
		<td><button class="remove">Remove</button></td></tr>
	</tbody> 
</table>

$(document).ready(function() {
	$("table.dynatable button.remove").live("click", function() {
		$(this).parents("tr").remove();
		recalcId();
		id--;
	});
});

function recalcId(){
    $.each($("table tr.item"),function (i,el){
        $(this).find("td:first input").val(i + 1); // Simply couse the first "prototype" is not counted in the list
    })
}

/** Enable and disable button **/
$('#ccSelectForm input').on('keyup blur', function () {
	if ($('#ccSelectForm').valid()) {
		$('button.btn').prop('disabled', false);
	} else {
		$('button.btn').prop('disabled', 'disabled');
	}
});

/** get Url Parameter **/
var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};

var searchvalue = getUrlParameter('value');
var searchword = getUrlParameter('searchword');

function getUrlParams(){
	var sPageURL = window.location.search.substring(1);
	return sPageURL;
   // alert(sPageURL);
}

var urlParams = getUrlParams();
if (urlParams!=null && urlParams!='') {
	loadUserForm(urlParams);
}else{
	//loadNewUserForm();
}


/*** Find class ***/
var active_sub_menu = $(this).hasClass('toggle-up');
console.log(active_sub_menu)

$("#table1").find('tr td').each(function(i) {
	$(this).css('border','10px solid blue');
});
$( "ul.ui-multiselect-checkboxes" ).find( "li.nofound" ).show();

/** on foucs get id **/
$("#formid").find("input,textarea,select").on('focus', function () {
	alert(this.id);
});

$('#foo').click(function() {
    var lastfieldsid = $('#formid input').last().attr('id');
    //do evil things here
});

/**  price Formate add zero after decimal     **/
 $('body').on('focus','.price',function(){
		var id = $(this).val();
		if(id == '' || id == null){
			$(this).val('');
		}else{
			var id = $(this).val();
			var sid = new Array();
			sid = (id.split("."));
			var fac_id = sid[sid.length-1];
			if(fac_id != "00"){
				var amount = $(this).val().replace(/^\s+|\s+$/g, '');
				$(this).val( parseFloat(amount).toFixed(2));
			}else{
				var amount = $(this).val().replace(/^\s+|\s+$/g, '');
				$(this).val( parseFloat(amount).toFixed(0));
			}
		}
 });
 
 $('body').on('blur','.price', function() {
	var amount = $(this).val().replace(/^\s+|\s+$/g, '');
	if( ($(this).val() != '') && (!amount.match(/^$/) )){
		$(this).val( parseFloat(amount).toFixed(2));
	}else{
		
	}
 });

 /** Add  zero for decimal value	 */

$("#price").blur(function(){
	var val = $(this).val();
	if(val == '') {
		$(this).val('0.00');
	} else if(val.indexOf('.') == -1) {
		$(this).val(val + '.00');
	} else if(val.length - val.indexOf('.') == 1) {
		$(this).val(val + '00');
	} else if(val.length - val.indexOf('.') == 2) {
		$(this).val(val + '0');
	}
});


/*** Search during key up ***/
<input type="text" id="#txtFilter" />
<div class="indSaleBox">
	<span class="filter">new</span>
</div>
$('body').on('keyup click input', '#txtFilter', function () {
	if (this.value.length > 0) {
		$('.filter').closest('.indSaleBox').hide().filter(function () {
			return $(this).text().toLowerCase().indexOf($('#txtFilter').val().toLowerCase()) != -1;
		}).show();
	}else {
		$('.filter').closest('.indSaleBox').show();
	}
});


$.fn.indconvert(12345652457.10);
$.fn.indconvert = function(x){
	x=x.toString();
	var afterPoint = '';
	if(x.indexOf('.') > 0)
	   afterPoint = x.substring(x.indexOf('.'),x.length);
	x = Math.floor(x);
	x=x.toString();
	var lastThree = x.substring(x.length-3);
	var otherNumbers = x.substring(0,x.length-3);
	if(otherNumbers != '')
		lastThree = ',' + lastThree;
	var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
	if(res == '') {
		res = '0.00';
	} else if(res.indexOf('.') == -1) {
		res = res + '.00';
	} else if(res.length - res.indexOf('.') == 1) {
		res = res + '00';
	} else if(res.length - res.indexOf('.') == 2) {
		res = res + '0';
	}
	return res;
}

/** Convert form data to JavaScript object with jQuery **/
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(function() {
    $('form').submit(function() {
        $('#result').text(JSON.stringify($('form').serializeObject()));
        return false;
    });
});

var selUsId = $('#hidselDed').val( );
var sid = new Array();
sid = (selUsId.split(","));
//console.log(sid)
var removeItem = selectedValue;
y = jQuery.grep(sid, function(value) {
  return value != removeItem;
});
$('#hidselDed').val( y );

/** Remove value form array **/
y = [1,3,2,5,6]
var removeItem = 3;
y = jQuery.grep(sid, function(value) {
  return value != removeItem;
});

 var arr = ["jQuery","JavaScript","HTML","Ajax","Css"];
var itemtoRemove = "HTML";
arr.splice($.inArray(itemtoRemove, arr),1);

/** value exist in array **/
var arr = "2012,2016,1008"
var myarray = new Array();
myarray = (arr.split(","));
console.log(myarray)
if($.inArray(shId, myarray) != -1) {
	console.log("is in array");
} else {
	console.log("is NOT in array");
} 


/** li alread exist in ul **/
<ul>
 <li id='1'>this</li>
 <li id='2'>that</li>
</ul>

<ul>
 <li id='1'>this</li>
</ul>
var a = $(this).find("#" + $(ui.draggable).attr('id'));
if (a.length === 0) {
	console.log("li not found");
}else{
	console.log("li found");
}

/*** Trigger map ***/
$('#MapPage').delay(200).fadeIn(200, function() {
	// Trigger a map resize
	google.maps.event.trigger(map, 'resize');
	addMarker(lat, lng, map);
});


/** get li or div count using class **/
$("#ul-tab").find('.addtabcount').each(function(i) {
	//$(this).css('border','10px solid blue');
	if($(this).css('display') != 'none'){
		addTabCnt++;    
	}
});

/** Remove concation **/
removeMot = $("#removeDomain").val()
if(removeMot.length > 0){
	concatfield = removeMot+','+custFieldId
	$("#removeDomain").val(concatfield)
}else{
	$("#removeDomain").val(custFieldId)
}

	/** remote **/
	remote: {
		url: '<?php echo $admin_url;?>php/exists/user.php',
		type: "POST",
		data: {  
			editStatus: function() {
				return jQuery("#editStatus").val();
			},
			txtUid: function() {
				return jQuery("#txtUid").val();
			}
		}
	}


/** Print Order **/
$('body').on('click', '#btnPrint', function(){
	var printOrderId = $('#printOrderId').val();
	/** Print & Export **/
	
	var divContents = $("#printBody").html();
	var printWindow = window.open('', '', 'height=400,width=850');
	printWindow.document.write('<html><head><title>Print Order</title>');
	printWindow.document.write('</head><body >');
	printWindow.document.write('<link href="<?php echo $admin_url;?>bootstrap/css/bootstrap.min.css" rel="stylesheet" />');
	printWindow.document.write('<link href="<?php echo $admin_url;?>dist/css/font-awesome.css" rel="stylesheet" />');
	
	printWindow.document.write('<link href="<?php echo $admin_url;?>dist/css/AdminLTE.min.css" rel="stylesheet" />');
	printWindow.document.write('<link href="<?php echo $admin_url;?>dist/css/style.css" rel="stylesheet" />');
	
	printWindow.document.write(divContents);
	printWindow.document.write('</body></html>');
	printWindow.document.close();
	
	
	myDelay = setInterval(checkReadyState, 10);
	function checkReadyState() {
		if (printWindow.document.readyState == "complete") {
			clearInterval(myDelay);
			printWindow.focus(); // necessary for IE >= 10
			printWindow.print();
			printWindow.close();
		}
	}
	return true;
})

/*** Scroll to particular position ***/

$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		//console.log(target);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		//console.log(target);
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});

/** round(100.23656,2)  **/
function round(value, exp) {
	if (typeof exp === 'undefined' || +exp === 0)
	return Math.round(value);

	value = +value;
	exp = +exp;

	if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
	return NaN;

	// Shift
	value = value.toString().split('e');
	value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

	// Shift back
	value = value.toString().split('e');
	return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}

/*** Add and remove **/

if(selectedChecked == true){
	var usId = selectedValue;
	var hidselPartDel = $("#hidselPartDel").val()
	if(hidselPartDel.length > 0){
		var myarray = new Array();
		myarray = (hidselPartDel.split(","));
		if($.inArray(usId, myarray) != -1) {
			//console.log("is in array");
		} else {
			//console.log("is NOT in array");
			concatfield = hidselPartDel+','+usId
			$("#hidselPartDel").val(concatfield)
		} 
	}else{
		$("#hidselPartDel").val(usId)
	}
}else{
	
	var selUsId = $('#hidselPartDel').val( );
	var sid = new Array();
	sid = (selUsId.split(","));
	//console.log(sid)
	var removeItem = selectedValue;
	y = jQuery.grep(sid, function(value) {
	  return value != removeItem;
	});
	$('#hidselPartDel').val( y );
}

/** Tooltip **/
$(function(){
	var options = {
	    placement: function (context, element) {
	        var position = $(element).position();
	        console.log(position.top - $(window).scrollTop());
	        if (position.top - $(window).scrollTop() < 110){
	            return "bottom";
	        }
	        return "top";
	    }, trigger: "hover"
	};
	$(".btn").tooltip(options);
});

if(response.msg.txtUt == 'CLUSTER'){
	$('#selDistrict').select2('enable', false);
	$('#selBlock').select2('enable', false);
}else{
	$('#selDistrict').select2('enable', true);
	$('#selBlock').select2('enable', true);
}

/** Jquer array push **/
var arr = [];
$.getJSON("displayjson.php",function (data) {
    $.each(data.news, function (i, news) {
        arr.push({
            title: news.title, 
            link:  news.link
        });
    });                      
});