http://coderexample.com/datatable-search-by-datepicker/
$('#allTable').dataTable().fnFilter(''); // empty the search input
$('#allTable').dataTable().fnDraw();// redraw the table

$('#example').dataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": false,
    "bAutoWidth": false });
});

/** Data Table **/
1) $('#productTable').dataTable( {
	"aLengthMenu": [[10,25,50,100,200,-1],[10,25,50,100,200,"ALL"]],  
	"sPaginationType": "full_numbers", 
	"aoColumns": [{ "sWidth": "25%"}, { "sWidth": "25%"}, { "sWidth": "15%"} , { "sWidth": "15%"} , { "bSortable": false, "sClass":"center", "sWidth": "10%" }, { "bSortable": false, "sClass":"center", "sWidth": "10%" }],
	"iDisplayLength": 20,
	"sPaginationType": "full_numbers",
	"bProcessing": true,
	"bServerSide": true,
	"sAjaxSource": "scripts/buyer_deal_jsonp.php",
	"sServerMethod": "POST",
	"aaSorting": [[ 1, "desc" ]],
	
});
2) $('#productTable').dataTable( {
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
<?php require "../config.php";
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Easy set variables
	 */
	
	/* Array of database columns which should be read and sent back to DataTables. Use a space where
	 * you want to insert a non-database field (for example a counter or static image)
	 */
    $aColumns = array('B.awb','B.parcel_type','B.price','U.username','B.created','B.id');
    $aColumnFields = array('B.awb','B.parcel_type','B.price','U.username','B.created','B.send_using','B.id');
    
	/* Indexed column (used for fast and accurate table cardinality) */
	$sIndexColumn = "id";
	
	/* DB table to use */
	$sTable = "bookings B";
	

	/* Database connection information */
	$gaSql['user']       = $user;
	$gaSql['password']   = $pwd;
	$gaSql['db']         = $db;
	$gaSql['server']     = $host; 
	
	/** $gaSql['server'] = "localhost";
    $gaSql['user']  = "rgassoci_cmuser";
    $gaSql['password'] = "C!7S;JN}R.QL";
    $gaSql['db'] = "rgassoci_cmdatabase";*/
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * If you just want to use the basic configuration for DataTables with PHP server-side, there is
	 * no need to edit below this line
	 */
	
	/* 
	 * Local functions
	 */
	function fatal_error ( $sErrorMessage = '' )
	{
		header( $_SERVER['SERVER_PROTOCOL'] .' 500 Internal Server Error' );
		die( $sErrorMessage );
	}

	
	/* 
	 * MySQL connection
	 */
	if ( ! $gaSql['link'] = mysql_pconnect( $gaSql['server'], $gaSql['user'], $gaSql['password']  ) )
	{
		fatal_error( 'Could not open connection to server' );
	}

	if ( ! mysql_select_db( $gaSql['db'], $gaSql['link'] ) )
	{
		fatal_error( 'Could not select database ' );
	}
	
	
	/* 
	 * Paging
	 */
	$sLimit = "";
	if ( isset( $_POST['iDisplayStart'] ) && $_POST['iDisplayLength'] != '-1' )
	{
		$sLimit = "LIMIT ".intval( $_POST['iDisplayStart'] ).", ".
			intval( $_POST['iDisplayLength'] );
	}
	
	
	/*
	 * Ordering
	 */
	if ( isset( $_POST['iSortCol_0'] ) )
	{
		$sOrder = "ORDER BY  ";
		for ( $i=0 ; $i<intval( $_POST['iSortingCols'] ) ; $i++ )
		{
			if ( $_POST[ 'bSortable_'.intval($_POST['iSortCol_'.$i]) ] == "true" )
			{
				$sOrder .= "".$aColumns[ intval( $_POST['iSortCol_'.$i] ) ]." ".
				 	($_POST['sSortDir_'.$i]==='asc' ? 'asc' : 'desc') .", ";
			}
		}
		
		$sOrder = substr_replace( $sOrder, "", -2 );
		if ( $sOrder == "ORDER BY" )
		{
			$sOrder = "";
		}
	}
	
	
	/* 
	 * Filtering
	 * NOTE this does not match the built-in DataTables filtering which does it
	 * word by word on any field. It's possible to do here, but concerned about efficiency
	 * on very large tables, and MySQL's regex functionality is very limited
	 */
	$sWhere = "";
	if ( $_POST['sSearch'] != "" )
	{
		$sWhere = "WHERE (";
		for ( $i=0 ; $i<count($aColumns) ; $i++ )
		{
			if ( isset($_POST['bSearchable_'.$i]) && $_POST['bSearchable_'.$i] == "true" )
			{
				$sWhere .= $aColumns[$i]." LIKE '%".mysql_real_escape_string( $_POST['sSearch'] )."%' OR ";
			}
		}
		$sWhere = substr_replace( $sWhere, "", -3 );
		$sWhere .= ')';
	}else{
	   $sWhere = "WHERE 1";
	}
	
	/* Individual column filtering */
	for ( $i=0 ; $i<count($aColumns) ; $i++ )
	{
		if ( $_POST['bSearchable_'.$i] == "true" && $_POST['sSearch_'.$i] != '' )
		{
			if ( $sWhere == "" )
			{
				$sWhere = "WHERE ";
			}
			else
			{
				$sWhere .= " AND ";
			}
			$sWhere .= $aColumns[$i]." LIKE '%".mysql_real_escape_string($_POST['sSearch_'.$i])."%' ";
		}
	}
	
	
	/*
	 * SQL queries
	 * Get data to display
	 */
    $sJoin = " LEFT JOIN users U ON U.id = B.editor_id";
    $sCond = " AND (B.parcel_type = 'D' OR B.parcel_type = 'ND')";
    $sQuery = "
		SELECT SQL_CALC_FOUND_ROWS ".str_replace(" , ", " ", implode(", ", $aColumnFields))."
		FROM   $sTable
        $sJoin
        $sWhere $sCond
        $sOrder
		$sLimit
	";
	$rResult = mysql_query( $sQuery, $gaSql['link'] ) or fatal_error( 'MySQL Error: ' . mysql_error() );
	
	/* Data set length after filtering */
	$sQuery = "
		SELECT FOUND_ROWS()
	";
	$rResultFilterTotal = mysql_query( $sQuery, $gaSql['link'] ) or fatal_error( 'MySQL Error: ' . mysql_error() );
	$aResultFilterTotal = mysql_fetch_array($rResultFilterTotal);
	$iFilteredTotal = $aResultFilterTotal[0];
	
	/* Total data set length */
	$sQuery = "
		SELECT COUNT(".$sIndexColumn.")
		FROM   $sTable WHERE (B.parcel_type = 'D' OR B.parcel_type = 'ND')
	";
	$rResultTotal = mysql_query( $sQuery, $gaSql['link'] ) or fatal_error( 'MySQL Error: ' . mysql_error() );
	$aResultTotal = mysql_fetch_array($rResultTotal);
	$iTotal = $aResultTotal[0];
	
	
	/*
	 * Output
	 */
	$sOutput = '{';
	$sOutput .= '"sEcho": '.intval($_POST['sEcho']).', ';
	$sOutput .= '"iTotalRecords": '.$iTotal.', ';
	$sOutput .= '"iTotalDisplayRecords": '.$iFilteredTotal.', ';
	$sOutput .= '"aaData": [ ';
	while ( $aRow = mysql_fetch_array( $rResult ) )
	{  
		$sOutput .= "[";
        
        $sOutput .= '"'.str_replace('"', '\"',$aRow['awb']).'",';
        if($aRow['parcel_type'] == 'D')
            $parcel_type = "DOC";
        else
            $parcel_type = "N-DOC";
        $sOutput .= '"'.str_replace('"', '\"', $parcel_type).'",';
        $sOutput .= '"'.str_replace('"', '\"', $aRow['price']).'",';
        
        if($aRow['send_using'] == 'A')
            $sOutput .= '"'.str_replace('"', '\"', 'Admin').'",';
        else
            $sOutput .= '"'.str_replace('"', '\"', $aRow['username']).'",';
        
        $created = date("d-m-Y",strtotime($aRow['created']));
        $sOutput .= '"'.str_replace('"', '\"', $created).'",';
        
        $action = '<a href="edit_booking.php?id='.$aRow['id'].'" title="Edit"><img class="icon-img" src="../images/icons/edit-icon-dt.png" title="Edit" alt="Edit" /></a>';
        $action .= '<a id="DelBook" data-bookingid="'.$aRow['id'].'" href="javascript:void(0);" title="Delete"><img class="icon-img" src="../images/icons/delete-icon.png" title="Delete" alt="Delete" /></a>';
        $action .= '<a href="print_booking.php?id='.$aRow['id'].'" target="_blank" title="Print"><img class="icon-img" src="../images/icons/printer-icon.png" title="Print" alt="Print" /></a>';
        $sOutput .= '"'.str_replace('"', '\"', $action).'",';	
		/*
		 * Optional Configuration:
		 * If you need to add any extra columns (add/edit/delete etc) to the table, that aren't in the
		 * database - you can do it here
		 */
		
		
		$sOutput = substr_replace( $sOutput, "", -1 );
		$sOutput .= "],";
	}
	$sOutput = substr_replace( $sOutput, "", -1 );
	$sOutput .= '] }';
	
	echo $sOutput;

?>

3) $('#allTable').dataTable( {
	"aoColumns": [
		{ "sWidth": "10%","mData": "sno"}, 
		{ "sWidth": "30%","mData": "username"}, 
		{ "sWidth": "15%","mData": "company"}, 
		{ "sWidth": "30%","mData": "mobile_number"}, 
		{ "sWidth": "15%","mData": "personal_email"}
	],
	"iDisplayLength": 20,
	"bPaginate":false,
	"bSort":false,
	"bInfo":false,
	"bLengthChange" : false, 
	"bFilter" : false,
	"sScrollY": "180px",
	"bScrollCollapse": true,
	"bDestroy" : true,
	"bProcessing": true,
	"bServerSide": true,
	"sAjaxSource": "scripts/dtPagination.php",
	"sServerMethod": "POST",
	"fnServerParams": function ( aoData ) {
		aoData.push( 
			{ "name": "filter", "value":  $("#ll-filter").val()},
			{ "name": "group_name", "value": "all"}
		);
	}
	"fnInitComplete": function(settings) {
		$("#record-count").html(settings._iRecordsDisplay)
		$(".record-count").show()
	}
})
$('.a-all-filter').click(function() { 
	filter_val = $(this).attr('id');
	$("#ll-filter").val(filter_val) 
	$("#allTable").dataTable().fnFilter('');// empty the search box
	$("#allTable").dataTable().fnDraw();
});  

<?php require "../config.php";
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Easy set variables
	 */
	
	/* Array of database columns which should be read and sent back to DataTables. Use a space where
	 * you want to insert a non-database field (for example a counter or static image)
	 */
    $aColumns = array('id','first_name','company','mobile_number','personal_email');
    $aColumnFields = array('id','first_name','last_name','company','mobile_number','personal_email');
    /* Indexed column (used for fast and accurate table cardinality) */
	$sIndexColumn = "id";
	
	/* DB table to use */
	$sTable = "person_data";
	

	/* Database connection information */
	$gaSql['user']       = $username;
	$gaSql['password']   = $password;
	$gaSql['db']         = $db_name;
	$gaSql['server']     = $server; 
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * If you just want to use the basic configuration for DataTables with PHP server-side, there is
	 * no need to edit below this line
	 */
	
	/* 
	 * Local functions
	 */
	function fatal_error ( $sErrorMessage = '' )
	{
		header( $_SERVER['SERVER_PROTOCOL'] .' 500 Internal Server Error' );
		die( $sErrorMessage );
	}

	
	/* 
	 * MySQL connection
	 */
	if ( ! $gaSql['link'] = mysql_pconnect( $gaSql['server'], $gaSql['user'], $gaSql['password']  ) )
	{
		fatal_error( 'Could not open connection to server' );
	}

	if ( ! mysql_select_db( $gaSql['db'], $gaSql['link'] ) )
	{
		fatal_error( 'Could not select database ' );
	}
	
	
	/* 
	 * Paging
	 */
	$sLimit = "";
	if ( isset( $_POST['iDisplayStart'] ) && $_POST['iDisplayLength'] != '-1' )
	{
		$sLimit = "LIMIT ".intval( $_POST['iDisplayStart'] ).", ".
		intval( $_POST['iDisplayLength'] );
	}
	
	
	/*
	 * Ordering
	 */
	if ( isset( $_POST['iSortCol_0'] ) )
	{
		$sOrder = "ORDER BY  ";
		for ( $i=0 ; $i<intval( $_POST['iSortingCols'] ) ; $i++ )
		{
			if ( $_POST[ 'bSortable_'.intval($_POST['iSortCol_'.$i]) ] == "true" )
			{
				$sOrder .= "".$aColumns[ intval( $_POST['iSortCol_'.$i] ) ]." ".
				 	($_POST['sSortDir_'.$i]==='asc' ? 'asc' : 'desc') .", ";
			}
		}
		
		$sOrder = substr_replace( $sOrder, "", -2 );
		if ( $sOrder == "ORDER BY" )
		{
			$sOrder = "";
		}
	}
	
	
	/* 
	 * Filtering
	 * NOTE this does not match the built-in DataTables filtering which does it
	 * word by word on any field. It's possible to do here, but concerned about efficiency
	 * on very large tables, and MySQL's regex functionality is very limited
	 */
	$sWhere = "";
	if ( $_POST['sSearch'] != "" )
	{
		$sWhere = "WHERE (";
		for ( $i=0 ; $i<count($aColumns) ; $i++ )
		{
			if ( isset($_POST['bSearchable_'.$i]) && $_POST['bSearchable_'.$i] == "true" )
			{
				$sWhere .= $aColumns[$i]." LIKE '%".mysql_real_escape_string( $_POST['sSearch'] )."%' OR ";
			}
		}
		$sWhere = substr_replace( $sWhere, "", -3 );
		$sWhere .= ')';
	}else{
	   $sWhere = "WHERE 1";
	}
	
	/* Individual column filtering */
	for ( $i=0 ; $i<count($aColumns) ; $i++ )
	{
		if ( $_POST['bSearchable_'.$i] == "true" && $_POST['sSearch_'.$i] != '' )
		{
			if ( $sWhere == "" )
			{
				$sWhere = "WHERE ";
			}
			else
			{
				$sWhere .= " AND ";
			}
			$sWhere .= $aColumns[$i]." LIKE '%".mysql_real_escape_string($_POST['sSearch_'.$i])."%' ";
		}
	}
	
	
	/*
	 * SQL queries
	 * Get data to display
	 */
    $filter = $_REQUEST['filter'];
    $group_name = $_REQUEST['group_name'];
    if($group_name != 'all'):
    	$sCond = " AND group_name = '$group_name'";
        $sOrderby = "order by first_name";
        if($filter == "all"):
    		$sQuery = "SELECT SQL_CALC_FOUND_ROWS ".str_replace(" , ", " ", implode(", ", $aColumnFields))."
        		FROM $sTable
                $sWhere $sCond
                $sOrderby
                $sLimit	";
        elseif($filter == "0-9"):
            $sQuery = "SELECT SQL_CALC_FOUND_ROWS ".str_replace(" , ", " ", implode(", ", $aColumnFields))."
            	FROM $sTable
                $sWhere $sCond
                $sOrderby
                $sLimit ";
        else:
            $sFilter = " AND first_name like '$filter%'";
            $sQuery = "SELECT SQL_CALC_FOUND_ROWS ".str_replace(" , ", " ", implode(", ", $aColumnFields))."
            	FROM $sTable
                $sWhere $sCond $sFilter
                $sOrderby
                $sLimit ";
        endif;
    else:
        $sOrderby = "order by first_name";
        if($filter == "all"):
    		$sQuery = "SELECT SQL_CALC_FOUND_ROWS ".str_replace(" , ", " ", implode(", ", $aColumnFields))."
        		FROM $sTable
                $sWhere
                $sOrderby
                $sLimit	";
        elseif($filter == "0-9"):
            $sQuery = "SELECT SQL_CALC_FOUND_ROWS ".str_replace(" , ", " ", implode(", ", $aColumnFields))."
            	FROM $sTable
                $sWhere
                $sOrderby
                $sLimit ";
        else:
            $sFilter = " AND first_name like '$filter%'";
            $sQuery = "SELECT SQL_CALC_FOUND_ROWS ".str_replace(" , ", " ", implode(", ", $aColumnFields))."
            	FROM $sTable
                $sWhere $sFilter
                $sOrderby
                $sLimit ";
        endif;
    endif;
     
     
	$rResult = mysql_query( $sQuery, $gaSql['link'] ) or fatal_error( 'MySQL Error: ' . mysql_error() );
	
	/* Data set length after filtering */
	$sQuery = "
		SELECT FOUND_ROWS()
	";
	$rResultFilterTotal = mysql_query( $sQuery, $gaSql['link'] ) or fatal_error( 'MySQL Error: ' . mysql_error() );
	$aResultFilterTotal = mysql_fetch_array($rResultFilterTotal);
	$iFilteredTotal = $aResultFilterTotal[0];
	
	/* Total data set length */
    if($group_name != 'all'):
    	$sQuery = "
    		SELECT COUNT(".$sIndexColumn.")
    		FROM   $sTable 
                $sWhere $sCond ";
    else:
        $sQuery = "
    		SELECT COUNT(".$sIndexColumn.")
    		FROM   $sTable 
                $sWhere ";
    endif;
	$rResultTotal = mysql_query( $sQuery, $gaSql['link'] ) or fatal_error( 'MySQL Error: ' . mysql_error() );
	$aResultTotal = mysql_fetch_array($rResultTotal);
	$iTotal = $aResultTotal[0];
	
	
    /*
	 * Output
	 */
	$output = array(
		"sEcho" => intval($_REQUEST['sEcho']),
		"iTotalRecords" => $iTotal,
		"iTotalDisplayRecords" => $iFilteredTotal,
		"aaData" => array()
	);
	
    $i = 1; 
	while ( $aRow = mysql_fetch_array( $rResult ) ){
		$row = array();
		
		// Add the row ID and class to the object
		$row['DT_RowId'] = 'row_'.$aRow['id'];
        //$row['DT_RowClass'] = 'grade'.$aRow['grade'];
		$row['sno'] = $i;
        $row['username'] = $aRow['first_name'].' '.$aRow['last_name'];
        if(strlen($aRow['company']) > 40):
            $company = '<input type="hidden" name="list_data_id" id="list_data_id" value="'.$aRow['id'].'"/>'.substr($aRow['company'],0,40).'...';
        else:
            $company = '<input type="hidden" name="list_data_id" id="list_data_id" value="'.$aRow['id'].'"/>'.$aRow['company'];
        endif;
        $row['company'] = $company;
        $row['mobile_number'] = $aRow['mobile_number']; 
        $row['personal_email'] = $aRow['personal_email'];
        
        $output['aaData'][] = $row;
        
        $i++;
	}
	
	echo json_encode( $output );

?>

"columnDefs": [{ 
	"mRender": function ( data, type, row ) {
		//console.log(row)
		return '<div style="text-algin:center;"> <a id="'+row[0]+'" data-status="'+row[9]+'" href="javascript:void(0)"> '+row[9]+'</a> </div>';
	},
"targets": 9,
}]

/*** server side false load data using json **/
$('#tbManageFormReportResults').dataTable({
		"displayLength": 50,
		"info":false,
		"processing": true,
		"serverSide": false,
		"searching":false,
		"scrollY":   500,
		"scrollCollapse": true,
		"data":myData,
		"order": [[1, 'desc']],
		"bLengthChange": false,
		"columns": [
			{ "title": "LARR-ID" },
			{ "title": "Name of Head Of Household" },
			{ "title": "District" },
			{ "title": "Taluk" },
			{ "title": "Village" },
			{ "title": "Road No" },
			{ "title": "Chainage" },
			{ "title": "Actions","sorting":false }
		],
});		

$('#blogTable').DataTable({
	"processing": true,
	"serverSide": true,
	"ajax": {
		"url": "scripts/",
		"type": "POST"
	},
	'destroy'   : true,
	"columns": [
		{ "data": "Title", "width": "20%" },
		{ "data": "Date", "sClass":"dt-center", "width": "15%" },
		{ "data": "PublierName", "width": "15%" },
		{ "data": "CategoryName", "width": "10%" },
		{ "data": "Content", "sClass":"dt-justify", "width": "25%" },
		{ "data": "MediaType", "sClass":"dt-center", "orderable":false, "width": "5%" },
		{ "data": "edit", "sClass":"dt-center", "width": "5%"  },
		{ "data": "delete", "sClass":"dt-center", "orderable":false, "width": "5%"  }
	],
	"order": [[ 1, "desc" ],[ 6, "desc" ]],
	"columnDefs": [
		{
			"targets": [ 1 ],
			"data": "edit",
			"render": function ( data, type, full ) {
				if(data == '0000-00-00 00:00:00'){
					return '-';
				}else{
					return my_date_format(data);    
				}
			}//2015-09-15 13:43:00
		},
		{
			"targets": [ 2 ],
			"data": "edit",
			"render": function ( data, type, full ) {
				if(data === null){
					return 'Admin';
				}else{
					return data;
				}
				
			}
		},
		{
			"targets": [ 4 ],
			"data": "Content",
			"render": function ( data, type, full ) {
				//console.log(data)
				var contentData = data.replace(/(<([^>]+)>)/ig,"");
				//console.log(data)
				var contentLength = contentData.match(/\S+/g).length
				//console.log(contentLength)  
				if(contentLength > 20){
					var expString = contentData.split(/\s+/,20);
					var theNewString = expString.join(" ");
					theNewString = theNewString+' ...'
					return theNewString;
				}else{
					return contentData;
				}                       
			}
		},
		{
			"targets": [ 5 ],
			"data": "edit",
			"render": function ( data, type, full ) {
				if(data == 'I'){
					return '<i class="fa fa-picture-o fa-2x"></i>';
				}else if(data == 'A'){
					return '<i class="fa fa-microphone fa-2x"></i>';
				}else if(data == 'V'){
					return '<i class="fa fa-video-camera fa-2x"></i>';
				}else{
					return '<img src="../assets/img/no-media.png" alt="No Media" title="No Media">';
				}
			}
		},
		{
			"targets": [ 6 ],
			"data": "edit",
			"render": function ( data, type, full ) {
				return '<button id="editId-'+data+'" class="btn btn-primary"><i class="fa fa-edit "></i> Edit </button>';
				
			}
		},
		{
			"targets": [ 7 ],
			"data": "delete",
			"render": function ( data, type, full ) {
				return '<button id="removeId-'+data+'" data-publishname="" class="btn btn-warning"><i class="fa fa-trash-o"></i> Remove</button>';
			}
		}
	],
	"fnDrawCallback": function (oSettings) {
		$('.tip').tooltip();
		
	}
});


search:
oTable.columns(1).search(ui.item.city).draw();

"data": function ( d ) {
	return $.extend( {}, d, {
		"city": $('#city').val()
	});
}
$('#areaTable').dataTable().fnDraw(); or oTable.draw();


"info":false,
"order": [[ 1, "desc" ]],
"searching": false,
"lengthChange": false,
"paging" : false,
"pagingType" : "full_numbers",
"language": {
	 "zeroRecords": "Trash Empty"
}
"ordering": false
"oLanguage": {
	"sProcessing": "<img src='"+admin_url+"/dist/img/ajax-loader.gif'>",
	"sSearch": "",
	"sSearchPlaceholder": "Search"
},
"createdRow": function ( row, data, index ) {
   $('td', row).eq(7).attr('id', 'td-' + data.action); //adding id to td
},


/** Sum footer **/
 "footerCallback": function ( row, data, start, end, display ) {
            var api = this.api(), data;
 
            // converting to interger to find total
            var intVal = function ( i ) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '')*1 :
                    typeof i === 'number' ?
                        i : 0;
            };
 
            // computing column Total of the complete result 
            /* var monTotal = api
                .column( 1 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );*/
				
	        var tueTotal = api
                .column( 2 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 ); 
				
            var wedTotal = api
                .column( 3 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
				
            var thuTotal = api
                .column( 4 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
				
            var friTotal = api
                .column( 5 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
			
				
            // Update footer by showing the total with the reference of the column index 
            //$( api.column( 0 ).footer() ).html('Total');
            //$( api.column( 1 ).footer() ).html(monTotal);
            $( api.column( 2 ).footer() ).html(tueTotal);
            $( api.column( 3 ).footer() ).html(wedTotal);
            $( api.column( 4 ).footer() ).html(thuTotal);
            $( api.column( 5 ).footer() ).html(friTotal);
        },




/** PHP Date validation **/
<?php
function validateDateTime($date, $format)
{
    date_default_timezone_set('UTC');
    $d = DateTime::createFromFormat($format, $date);
    if($d && $d->format($format) === $date) {

        return true;
    } else {

        return false;
    }
}
validateDateTime('2001-03-10 17:16:18', 'Y-m-d H:i:s');                             // true
validateDateTime('2001-03-10', 'Y-m-d');                                            // true
validateDateTime('2001', 'Y');                                                      // true
validateDateTime('Mon', 'D');                                                       // true
validateDateTime('March 10, 2001, 5:16 pm', 'F j, Y, g:i a');                       // true
validateDateTime('March 10, 2001, 5:16 pm', 'F j, Y, g:i a');                       // true
validateDateTime('03.10.01', 'm.d.y');                                              // true
validateDateTime('10, 3, 2001', 'j, n, Y');                                         // true
validateDateTime('20010310', 'Ymd');                                                // true
validateDateTime('05-16-18, 10-03-01', 'h-i-s, j-m-y');                             // true
validateDateTime('Monday 8th of August 2005 03:12:46 PM', 'l jS \of F Y h:i:s A');  // true
validateDateTime('Wed, 25 Sep 2013 15:28:57', 'D, d M Y H:i:s');                    // true
validateDateTime('17:03:18 is the time', 'H:m:s \i\s \t\h\e \t\i\m\e');             // true
validateDateTime('17:16:18', 'H:i:s');                                              // true

// Will fail
validateDateTime('2001-03-10 17:16:18', 'Y-m-D H:i:s'); // false
validateDateTime('2001', 'm');                          // false
validateDateTime('Mon', 'D-m-y');                       // false
validateDateTime('Mon', 'D-m-y');                       // false
validateDateTime('2001-13-04', 'Y-m-d');                // false
?>

/** Bootstrap date picker **/ 
$('#dob').datepicker('setDate', new Date(2006, 11, 24));
$('#dob').datepicker('update');
$('#dob').val('');

/** add id **/
array(
        'db' => 'id',
        'dt' => 'DT_RowId',
        'formatter' => function( $d, $row ) {
            // Technically a DOM id cannot start with an integer, so we prefix
            // a string. This can also be useful if you have multiple tables
            // to ensure that the id is unique with a different prefix
            return 'row_'.$d;
        }
    ),