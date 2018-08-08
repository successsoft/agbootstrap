
    
$(function(){ 
   
	
	var dt = $('#issueTrackTable').DataTable({
		"processing": true,
		"serverSide": true,
		"ajax": {
			"url": "<?php echo $admin_url;?>php/issue-tracker/",
			"type": "POST",
			"data": function ( d ) {
				return $.extend( {}, d, {
					"addto": $("input[name='radAddTo']:checked").val()
				});
			}
		},
			"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],
			"lengthMenu":  [50, 100, 250, 500, 1000],
		"searching": false,
		"displayLength": 50,
			"pageLength": 50,
		"bInfo":false,
		"lengthChange": false,
		"columns": [
			{ 
				"data" : null,
				"width": "5%",
				"class": "details-control",
				"orderable": false,
				"defaultContent": "" 
			},
			{ "data": "issCode","width":"10%" },
			{ "data": "dtAdd","width":"10%" },
			{ "data": "catIss","width":"15%" },
			{ "data": "dLine","width":"10%"},
			{ "data": "status","width":"10%" },
			{ "data": "addBy", "width":"15%" },
			{ "data": "addTo", "width":"15%","orderable":false, },
			{ "data": "file", "sClass":"dt-center","orderable":false,"width":"10%" }
		],
		"language": {
			"processing": "<img src='<?php echo $admin_url;?>img/ajax-loader-2.gif'>",
			"zeroRecords": "You don't have any tasks. If you wish to see all tasks, click Assign to and change it to All tasks."
		},
		"sort": false,
		"order": [[ 1, "asc" ]],
		"columnDefs": [
			{ 
				"targets": 2,
				"data": "dtAdd",
				"mRender": function ( data, type, row ) {
					return $.fn.my_date_format_dd_M_yyyy(data);
				}
			},
			{ 
				"targets": 3,
				"data": "catIss",
				"mRender": function ( data, type, row ) {
					var cat;
					if(data == 1){
					   cat = 'Update report';
					}else if(data == 2){
					   cat = 'Government Liason ';
					}else if(data == 3){
					   cat = 'Water provison';
					}else if(data == 4){
					   cat = 'Dysfunctional toliet';
					}else if(data == 5){
					   cat = 'Funding';
					}else if(data == 6){
					   cat = 'Other';
					}else{
						cat = '-';
					}
					return cat;
				}
			},
			{ 
				"targets": 4,
				"data": "dLine",
				"mRender": function ( data, type, row ) {
					return $.fn.my_date_format_dd_M_yyyy(data);
				}
			},
			{ 
				"targets": 5,
				"data": "status",
				"mRender": function ( data, type, row ) {
					var status;
					if(data == 'O'){
					   status = 'Open';
					}else if(data == 'C'){
					   status = 'Closed';
					}else if(data == 'R'){
					   status = 'Re open';
					}else{
						status = '-';
					}
					return status;
				}
			},
			{ 
				"targets": 8,
				"data": "utype",
				"mRender": function ( data, type, row ) {
					if(data > 0){
						var sid = new Array();
						var fname = row.fname
						sid = (fname.split(","));
						var urlpathsuss = false;
						var licontent = ''
						var count = 0;
						
						$.each(sid, function(index, value){
							//console.log(value)
							var filename = value;
							$.ajax({
								type: 'POST',
								url: '<?php echo $admin_url;?>php/issue-tracker/check-attachment.html',
								data: {'filename': filename},
								dataType: 'json',
								async: false,
								success: function(data) {
									//return data;
									if(data.error == false){
										count++;
									}
								},  
								error: function() {
									console.log('Error')
								}
							});
						});
						var content = '';
						if(count > 0){
							/** content += '<div class="dropdown">'
								content += '<button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">'+data+' files <span class="caret"></span></button>'
								content += '<ul class="dropdown-menu issuestrackFiles" role="menu" aria-labelledby="menu1">'
									content += licontent
								content += '</ul>'
							content += '</div>' */
							content += count+' files';
						}else{
							content = '-'
						} 

						return content;  
					}else{
						return '-';
					}
					  
				},
			},
		],
		"fnDrawCallback": function (oSettings) {
			$('.tip').tooltip();
		}
	});
	
	function format ( d ) {
		var urlpathsuss = false;
		if(d.fname !== null){
			var sid = new Array();
			var fname = d.fname
			sid = (fname.split(","));
			var licontent = ''
			var count = 1;
			$.each(sid, function(index, value){
				console.log(value)
				var filename = value;
				$.ajax({
					type: 'POST',
					url: '<?php echo $admin_url;?>php/issue-tracker/check-attachment.html',
					data: {'filename': filename},
					dataType: 'json',
					async: false,
					success: function(data) {
						//return data;
						if(data.error == false){
							var iftype = 'fa-file';
							if(data.ext == 'pdf'){
								iftype = 'fa-file-pdf-o';
							}else if(data.ext == 'docx' || data.ext == 'doc'){
								iftype = 'fa-file-word-o';
							}else if(data.ext == 'jpeg' || data.ext == 'jpg' || data.ext == 'png'){
								iftype = 'fa-file-image-o';
							}else if(data.ext == 'xls' || data.ext == 'xlsx'){
								iftype = 'fa-file-excel-o';
							}else if(data.ext == 'zip'){
								iftype = 'fa-file-archive-o';
							}else{
								iftype = 'fa-file';
							}
							licontent += '<li><a tabindex="-1" target="_blank" href="'+data.file_path+'"><i class="fa '+iftype+'" aria-hidden="true"></i> '+data.oname+'</a></li>'
							count++;
							urlpathsuss = true;
						}else{
							urlpathsuss = false;
						}
					},  
					error: function() {
						console.log('Error')
					}
				});
			});
		}
		
		var tablecontent = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px; width: 100%;">'
			tablecontent += '<tbody>'
				tablecontent += '<tr>'
					tablecontent += '<td>Description</td>'
					tablecontent += '<td>'+d.issDesp+'</td>'
				tablecontent += '</tr>'
				tablecontent += '<tr>'
					tablecontent += '<td>Next Step</td>'
					tablecontent += '<td>'+d.issNS+'</td>'
				tablecontent += '</tr>'
				tablecontent += '<tr>'
					tablecontent += '<td style="vertical-align:top;">Schools</td>'
					tablecontent += '<td>'+d.issSName+'</td>'
				tablecontent += '</tr>'
				if(urlpathsuss == true){
					tablecontent += '<tr>'
						tablecontent += '<td>Files</td>'
						tablecontent += '<td><ul class="issuestrackFiles">'+ licontent +'</ul></td>'
					tablecontent += '</tr>'
				}
			tablecontent += '</tbody>'
		tablecontent += '</table>';
		
		if(d.issAddId == '<?php echo $mySession->STMUserId; ?>'){
			tablecontent += '<div id="div-issueEditBtn">'+
				'<div id="issueEdit-'+d.issId+'" class="uploadifive-button btn btn-success img-mdl" style="overflow: hidden; position: relative; text-align: center; float: right; margin-left: 20px;">'+
				'Edit'+
				'<div id="issueEdit" style="display: none;"></div>'+
				'<input style="font-size: 30px; opacity: 0; position: absolute; right: -3px; top: -3px; z-index: 999; cursor: pointer;" type="text">'+
			'</div>'
		}else{
			tablecontent += '<div id="div-issueEditBtn">'+
				'<div id="issueUpdateStatus-'+d.issId+'" class="uploadifive-button btn btn-success img-mdl" style="overflow: hidden; position: relative; text-align: center; float: right; margin-left: 20px;">'+
				'Update Status'+
				'<div id="issueUpdateStatus" style="display: none;"></div>'+
				'<input style="font-size: 30px; opacity: 0; position: absolute; right: -3px; top: -3px; z-index: 999; cursor: pointer;" type="text">'+
			'</div>'
		}
		tablecontent += '<div id="div-issueUpdateBtn">'+
			'<div id="issueAddSubTk-'+d.issId+'" data-status="'+d.status+'" class="uploadifive-button btn btn-success img-mdl" style="overflow: hidden; position: relative; text-align: center; float: left;">'+
			'Add Comments'+
			'<div id="issueAddSubTk" style="display: none;"></div>'+
			'<input style="font-size: 30px; opacity: 0; position: absolute; right: -3px; top: -3px; z-index: 999; cursor: pointer;" type="text">'+
		'</div>';
		
		tablecontent += '<div id="div-repliesList-'+d.issId+'" class="col-md-12" style="margin-top: 15px;"></div>';
		$.fn.replyfn(d.issId)
		return tablecontent;
	}
	var detailRows = [];
	$('#issueTrackTable tbody').on( 'click', 'tr td.details-control', function () {
		var tr = $(this).closest('tr');
		var row = dt.row( tr );
		var idx = $.inArray( tr.attr('id'), detailRows );
 
		if ( row.child.isShown() ) {
			tr.removeClass( 'details' );
			row.child.hide();
 
			// Remove from the 'open' array
			detailRows.splice( idx, 1 );
		}
		else {
			tr.addClass( 'details' );
			row.child( format( row.data() ) ).show();
 
			// Add to the 'open' array
			if ( idx === -1 ) {
				detailRows.push( tr.attr('id') );
			}
		}
	} );
	// On each draw, loop over the `detailRows` array and show any child rows
	dt.on( 'draw', function () {
		$.each( detailRows, function ( i, id ) {
			$('#'+id+' td.details-control').trigger( 'click' );
		} );
	});
	
	
	<input class="form-control" id="rspvFeedSearch" name="rspvFeedSearch" placeholder="Search" style="height: 30px;margin: -3px;border-radius: 3px;" />

	$('#rspvFeedSearch').on( 'keyup', function () {
		momDataTable.search( this.value ).draw();
	});
})
  
    
   