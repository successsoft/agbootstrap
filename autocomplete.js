/** Autocomplete  100000775674527 **/

	
		var BASE_PATH = jQuery('#base_path').val();
		var no_image = BASE_PATH+"images/nophoto.jpg";
	1)	$("#q").autocomplete({
		    minLength: 0,
		    delay:5,
		    limit: 20,
		    source: BASE_PATH+"movies/search_short_films",
		    focus: function( event, ui ) {
				jQuery("#q").val( ui.item.title );
				jQuery("#slug").val( ui.item.slug );
				return false;
		    },
			response: function(event, ui) {
				if (ui.content.length === 0) {
					$("#from_loc").val( "" );
					$("#to_loc").val( "" );
				} 
            },
			select: function( event, ui ) {
				jQuery("#q").val( ui.item.title );
				jQuery("#slug").val( ui.item.slug );
				var q = jQuery('#q').val();    
				var s = jQuery('#s').val();
				var slug = jQuery('#slug').val();
				window.location.href = BASE_PATH+"movies/search/?q="+q+"&slug="+slug+"&s="+s;
				return false;
		    }
		}).data("uiAutocomplete")._renderItem = function( ul, item ) {
		    return jQuery("<li></li>")
			.data( "item.autocomplete", item )
			.append( "<a>" + "<img class='imdbImage' width='50px' height='50px' src='" + item.image + "' />" + "<span class='imdbTitle'>" + item.title + "</span>" + (item.cast?"<br /><span class='imdbCast'>Cast: " + item.cast + "</span>":"")+ (item.director?"<br /><span class='imdbDirector'>Director: " + item.director + "</span>":"") + "<div class='clear'></div></a>" )
			.appendTo( ul );
		};

		json file
	$short_film_json = json_encode($short_film_arr);
	echo $short_film_json;

	[{"title":"Kurangu","value":"10","slug":"kurangu_silent_shortfilm___best_shortfilm_nominee_vijay_awards_7r5806hj","cast":"Sathya | Karthik | Rajasekar | Sowmya | ","director":"Sathya","image":"\/short_films\/images\/1377082867_Kuran.jpg"},{"title":"Kuviyam","value":"103","slug":"kuviyam","cast":"Sattya , Shamili , Janan Jacob , Anand","director":"Kishore N","image":"\/short_films\/images\/1374568470_downl.jpg"}]

	2)	$('#service').autocomplete({
            minLength: 3,
            //source: "autocomplete_service.php",
            source: function(request, response) {
                $.ajax({
                    url: "autocomplete_service.php",
                    dataType: "json",
                    data: {
                        term : request.term,
                        category_id : $("#category_id").val()
                    },
                    success: function(data) {
                        response(data);
                    }
                });
            },
            delay: 300,
            focus: function( event, ui ) {
                $("#service").val( ui.item.service );
                return false;
            },
            select: function( event, ui ) {
                $("#service").val( ui.item.service );
                return false;
            }
        }).data("uiAutocomplete")._renderItem = function( ul, item ) {
            return jQuery("<li></li>")
                .data( "item.autocomplete", item )
                .append( "<a>" + item.service + "<div class='clear'></div></a>" )
                .appendTo( ul );
        }; 
	});

	[{"service":"Web Design"},{"service":" Web Development"},{"service":" Web Application"},{"service":" Software Development"},{"service":"web design and development"},{"service":"mobile application development"},{"service":"iphone application development"},{"service":"industry verticals"},{"service":"Web Development"}]

	


	3)	$('#service').autocomplete({
		minLength: 3,
		limit: 10,
		//source: "autocomplete_service.php?category_id="+$("#company_id").val(),
		source: function(request, response) {
			$.ajax({
				url: "autocomplete_service.php",
				dataType: "json",
				data: {
					term : request.term,
					category_id : $("#category_id").val()
				},
				success: function(data) {
					response(data);
				}
			});
		},
		delay: 300,
		focus: function( event, ui ) {
			$("#service").val( ui.item.value );
			return false;
		},
		select: function( event, ui ) {
			$("#service").val( ui.item.value );
			return false;
		}
	}).data("uiAutocomplete")._renderItem = function( ul, item ) {
		return jQuery("<li></li>")
			.data( "item.autocomplete", item )
			.append( "<a>" + item.value + "<div class='clear'></div></a>" )
			.appendTo( ul );
	}; 

	$q = trim($_REQUEST['term']);
	$category_id = trim($_REQUEST['category_id']);
	if(!empty($category_id))
		$search_result = mysql_query("SELECT DISTINCT(service) FROM company_details WHERE category_id = '$category_id' AND service REGEXP '[[:<:]]$q'");
	else
		$search_result = mysql_query("SELECT DISTINCT(service) FROM company_details WHERE  service REGEXP '[[:<:]]$q'");
	$search_arr = array();
	$auto_complete_count = mysql_num_rows($search_result);
	if($auto_complete_count > 0):
		$i = 0;
		while($result = mysql_fetch_assoc($search_result)):
			if(!empty($result['service'])):
				$service_exp = explode(",",$result['service']);
				foreach($service_exp as $servie):
					if(in_array($servie, $search_arr)):
						break;
					else:
						$search_arr[$i]['service'] = $servie;
						$i++;
					endif;
				endforeach;
			endif;
		endwhile;
	endif;
	echo json_encode($search_arr);
	["web design and development","mobile application development","iphone application development","industry verticals"]

	
	
	4) /** With comma seprator **/ //Clojure, JavaScript, 
	function split( val ) {
		return val.split( /,\s*/ );
	}
	function extractLast( term ) {
		return split( term ).pop();
	}   
	$( "#service" ).bind( "keydown", function( event ) {
		if ( event.keyCode === $.ui.keyCode.TAB &&
			$( this ).data( "ui-autocomplete" ).menu.active ) {
			event.preventDefault();
		}
	}).autocomplete({
		minLength: 3,
		limit: 10,
		//source: "autocomplete_service.php?category_id="+$("#company_id").val(),
		source: function(request, response) {
			$.ajax({
				url: "autocomplete_service.php",
				dataType: "json",
				data: {
					term : extractLast( request.term ),
					category_id : $("#category_id").val()
				},
				success: function(data) {
					response(data);
				}
			});
		},
		delay: 300,
		focus: function( event, ui ) {
			//$("#service").val( ui.item.value );
			return false;
		},
		select: function( event, ui ) {
			//$("#service").val( ui.item.value );
			var terms = split( this.value );
			// remove the current input
			terms.pop();
			// add the selected item
			terms.push( ui.item.value );
			// add placeholder to get the comma-and-space at the end
			terms.push( "" );
			this.value = terms.join( ", " );
			return false;
			//return false;
		}
	});
	$q = trim($_REQUEST['term']);
	$category_id = trim($_REQUEST['category_id']);
	if(!empty($category_id))
		$search_result = mysql_query("SELECT DISTINCT(service) FROM company_details WHERE category_id = '$category_id' AND service REGEXP '[[:<:]]$q'");
	else
		$search_result = mysql_query("SELECT DISTINCT(service) FROM company_details WHERE service REGEXP '[[:<:]]$q'");
	$search_arr = array();
	$auto_complete_count = mysql_num_rows($search_result);
	if($auto_complete_count > 0):
		$i = 0;
		while($result = mysql_fetch_assoc($search_result)):
			if(!empty($result['service'])):
				$service_exp = explode(",",$result['service']);
				foreach($service_exp as $servie):
					if(in_array($servie, $search_arr)):
						break;
					else:
						$search_arr[$i] = trim($servie);
						$i++;
					endif;
				endforeach;
			endif;
		endwhile;
	endif;
	echo json_encode($search_arr);
	
	

	6)	$('#bag_number').autocomplete({
		limit: 10,
		source: "ajax/autocomplete_barcode.php",
		delay: 300,
		select: function( event, ui ) {
			$("#bag_number").val( ui.item.ref_no );
			$("#from_loc").val( ui.item.sender_city );
			$("#to_loc").val( ui.item.receiver_city );
			return false;
		},
		response: function(event, ui) {
			if (ui.content.length === 0) {
				$("#from_loc").val( "" );
				$("#to_loc").val( "" );
			} 
		},
		focus: function( event, ui ) {
			return false;
		},
		open: function( event, ui ) {
			$("#from_loc").val( "" );
			$("#to_loc").val( "" );
		}
		minLength: 0
	}).on('focus', function() { 
		$(this).keydown();  //$(this).autocomplete("search");
    }).data("ui-autocomplete")._renderItem = function( ul, item ) {
		return $("<li></li>")
			.data( "item.autocomplete", item )
			.append( "<a>" + item.ref_no + "<div class='clear'></div></a>" )
			.appendTo( ul );
	};

	$q = trim($_REQUEST['term']);
	$search_result = mysql_query("SELECT ref_no, sender_city, city FROM bookings WHERE ref_no REGEXP '[[:<:]]$q' AND parcel_type = 'MB' AND status = 'A'") or die(mysql_error());
	$search_arr = array();
	$auto_complete_count = mysql_num_rows($search_result);
	if($auto_complete_count > 0):
		$i = 0;
		while($result = mysql_fetch_assoc($search_result)):
			
			$search_arr[$i]['ref_no'] = $result['ref_no'];
			$search_arr[$i]['sender_city'] = $result['sender_city'];
			$search_arr[$i]['receiver_city'] = $result['city'];
			$i++;
		endwhile;
	endif;
	echo json_encode($search_arr);



	$('#txtUnit').autocomplete({
            minLength: 0,
            //source: "autocomplete_service.php",
            source: function(request, response) {
                $.ajax({
                    url: "<?php echo $admin_url?>php/autocomplete_unit.php",
                    dataType: "json",
                    data: {
                        term : request.term,
                        selZone : $("#selZone").val()
                    },
                    success: function(data) {
                        response(data);
                    }
                });
            },
            delay: 300,
            focus: function( event, ui ) {
                $("#txtUnit").val( ui.item.txtUnit );
                return false;
            },
            select: function( event, ui ) {
                $("#txtUnit").val( ui.item.txtUnit );
                return false;
            }
        }).focus(function () {
            $(this).autocomplete("search");
        }).data("ui-autocomplete")._renderItem = function( ul, item ) {
            return jQuery("<li></li>")
                .data( "item.autocomplete", item )
                .append( "<a>" + item.txtUnit + "<div class='clear'></div></a>" )
                .appendTo( ul );
        }; 