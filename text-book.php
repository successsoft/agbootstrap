<?php
//print_r($_POST);die;
try{
    header('Content-type: application/json');
    if(!isset($req)){
        require_once "../../../classes/utils.class.php"; 
        $epubTgPat = '../../../../reader/bookshelf/';
        $bcTgPat = '../../../../uploads/cover/';
        //$pdfTgPat = '../../../../uploads/pdf-files/';
		$pdfTgPat = '../../../../';
        $lang = trim($_GET['lang']);
        $cls = trim($_GET['cls']);
        $sub = trim($_GET['sub']);
    }else{
        $epubTgPat = '../reader/bookshelf/';
        $bcTgPat = '../uploads/cover/';
        $pdfTgPat = '../uploads/pdf-files/';
    }
    
    $base_url = CONFIG::base_url;
    
    $ui_columns = array();
    $ui_columns = array(
        'hidTBkId'   => DBCONSTANTS::col_tbk_id,
        'taDesp'    => DBCONSTANTS::col_tbk_desp,
        'fdname'    => DBCONSTANTS::col_tbk_fdnm,
        'oname'     => DBCONSTANTS::col_tbk_fonm,
        'fname'     => DBCONSTANTS::col_tbk_fsnm,
        'ext'       => DBCONSTANTS::col_tbk_ftp,
        'size'      => DBCONSTANTS::col_tbk_fsz,
        'bcfname'   => DBCONSTANTS::col_tbk_bkcv,
        'pdffname'  => DBCONSTANTS::col_tbk_pdf
    );
    //print_r($ui_columns); die;
    
    $searchField_details = array();
    $searchField_details = array(
        'lang'  => array('db' => DBCONSTANTS::col_tbk_langgid,  'val' => $lang),
        'cls'   => array('db' => DBCONSTANTS::col_tbk_clsid,    'val' => $cls),
        'sub'   => array('db' => DBCONSTANTS::col_tbk_subid,    'val' => $sub),
        //'tm'    => array('db' => DBCONSTANTS::col_tbk_tmid,     'val' => $tm),
        'ss'    => array('db' => DBCONSTANTS::col_tbk_ss,       'val' => 'A')
    );
    
    $search_columns = array();
    UTILS::addSearchColumns2($searchField_details, $search_columns);
    //print_r($search_columns);die;
    
    $table = DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_tbk;
    $bindings = array();
    $where = DBUTILS::filter2( $search_columns,$bindings);
    //print_r($where);die;
    $query ="SELECT * FROM $table $where ";
    //print_r($query);die;
    
    $response_array['error'] = false;
    $data = DBUTILS::execute_column_query( $ui_columns, $bindings, $query);
    //print_r($data);die;
    if(sizeof($data) > 0){
        $response_array['error']  = false;
        $response_array['msg']  = $data[0];
        
        $epub = $data[0]['fdname'];
        if($epub){
            if(strlen($epub) > 0){
                //echo $epubTgPat.$epub;die;
                if(file_exists($epubTgPat.$epub)){
                    $response_array['msg']['fdname']  = $base_url.'reader/i/?book='.$epub;
                }
            }
        }
        
        $bookCover = $data[0]['bcfname'];
        if($bookCover){
            if(strlen($bookCover) > 0){
                //echo $bcTgPat.$bookCover;die;
                if(file_exists($bcTgPat.$bookCover)){
                    $response_array['msg']['bcfname']  = $base_url.'uploads/cover/'.$bookCover;
                }
            }
        }
        $pdf = $data[0]['pdffname'];
        if($pdf){
            if(strlen($pdf) > 0){
                if(file_exists($pdfTgPat.$pdf)){
                    //$response_array['msg']['pdffname']  = $base_url.'uploads/pdf-files/'.$pdf;
					$response_array['msg']['pdffname']  = $base_url.'/'.$pdf;
                }
            }
        }
    }else{
        $response_array['error']  = true;
    }
    $statusCode = 200;
}catch(Exception $e){
    $response_array['error'] = true;
    $response_array['msg']  = $e->getMessage();
    $statusCode = 405;
}
if(!isset($req)){
    echo json_encode($response_array);
    exit();
}else{
    
}
