<?php
//print_r($_POST);die;
try{
    require_once "../../../classes/utils.class.php";
    require_once "../../../classes/textbook.class.php";
    
    header('Content-type: application/json');
    
    $response_array['error'] = false;
    $formFieldDetails  = array();
    
    $table = DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_tbk;
    $formFieldDetails = TBOOKUTILS::getFormFields();
    
	$pdf_name = $_POST['pdffname'];
	$rppdf_name = str_replace("../","", $pdf_name);
	$_POST['pdffname'] = $rppdf_name;
	//print_r($_POST);die;
    $response_array = TBOOKUTILS::saveForm( $table, $formFieldDetails);
    $tbk_id = $response_array['tbk_id'];
    
   
}catch(Exception $e){
    $statusCode = 405;
    $response_array['error'] = true;
    $response_array['data']['msg']  = $e->getMessage();
}
echo json_encode($response_array);
exit();