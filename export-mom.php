<?php
//print_r($_GET);die;
try{
    ob_start();
    require_once "../../classes/utils.class.php";
    
    
    $table =  DBCONSTANTS::db_code.DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_et.DBCONSTANTS::db_code;
    $jTable1 =  DBCONSTANTS::db_code.DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_gp.DBCONSTANTS::db_code;
    
    $ui_columns = array();
    $ui_columns = array(
        'txtEvId'   => array('db' => DBCONSTANTS::col_et_id,    'tb' => $table),
        'txtDpNm'   => array('db' => DBCONSTANTS::col_gp_name,  'tb' => $jTable1),
        'txtEvNm'   => array('db' => DBCONSTANTS::col_et_ename, 'tb' => $table),
        'txtEvCd'   => array('db' => DBCONSTANTS::col_et_no,    'tb' => $table),
        'txtMOMDt'  => array('db' => DBCONSTANTS::col_et_momdt, 'tb' => $table),
        'txtSs'     => array('db' => DBCONSTANTS::col_et_ess,   'tb' => $table),
        'txtESs'    => array('db' => DBCONSTANTS::col_et_etss,  'tb' => $table),
        'txtFwUp'   => array('db' => DBCONSTANTS::col_et_frmk,  'tb' => $table),
    );
    
    
    //print_r($searchField_details);die;
    $search_columns = array();
    
    $bindings = array();   
    $where = DBUTILS::filter2($search_columns, $bindings);
    
    $implodeColumn = array();
    UTILS::implodeColumn($ui_columns, $implodeColumn);
    $sql_query ="SELECT  ".implode(", ", $implodeColumn)." FROM $table
    INNER JOIN $jTable1 ON ( FIND_IN_SET( $jTable1.".DBCONSTANTS::col_gp_id." , $table.".DBCONSTANTS::col_et_dpids." ) )
    $where GROUP BY $table.".DBCONSTANTS::col_et_id." ORDER BY $table.".DBCONSTANTS::col_et_id;
	
    
    
    //echo $sql_query;die;
    $data = DBUTILS::execute_column_query_array($ui_columns, $bindings, $sql_query);
    //print_r($data);die;
    
    
    /** Error reporting */
	error_reporting(E_ALL);
	ini_set('display_errors', TRUE);
	ini_set('display_startup_errors', TRUE);
	
	define('EOL',(PHP_SAPI == 'cli') ? PHP_EOL : '<br />');
	
	date_default_timezone_set('Asia/Singapore');
	
	/** Include PHPExcel */
	require_once '../../PHPExcel/Classes/PHPExcel.php';
	require_once '../../PHPExcel/Classes/PHPExcel/IOFactory.php';
	
	
	/** Create new PHPExcel object **/
	//echo date('H:i:s') , " Create new PHPExcel object" ;
	$objPHPExcel = new PHPExcel();
	
	/** Set document properties **/
	$objPHPExcel->getProperties()->setCreator("CSMS - Excel Report")
								 ->setLastModifiedBy("Ramesh")
								 ->setTitle("CSMS - Excel Report")
								 ->setSubject("CSMS Excel Export in XLSX format")
								 ->setDescription("Test document for Office 2007 XLSX, generated using PHP classes.")
								 ->setKeywords("office 2007 openxml php")
								 ->setCategory("Test result file");
								 
	/** Auto size true **/
	//echo date('H:i:s') , " Auto size true" ;
	$objPHPExcel->getActiveSheet()->getColumnDimension('A')->setAutoSize(true);
	$objPHPExcel->getActiveSheet()->getColumnDimension('B')->setAutoSize(true);
    $objPHPExcel->getActiveSheet()->getColumnDimension('C')->setAutoSize(true);
    $objPHPExcel->getActiveSheet()->getColumnDimension('D')->setAutoSize(true);
    $objPHPExcel->getActiveSheet()->getColumnDimension('E')->setAutoSize(true);
    $objPHPExcel->getActiveSheet()->getColumnDimension('F')->setAutoSize(true);
    
    
    // Add some data
	//$objPHPExcel->getActiveSheet()->getStyle('A1:I1')->getFont()->setBold(true)->getColor()->setRGB('FFFFFF');
    $objPHPExcel->getActiveSheet()->getStyle('A1:F1')->getFont()->setBold(true)->getColor()->setRGB('000000');
	$objPHPExcel->getActiveSheet()->getStyle('A1:F1')->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
	$objPHPExcel->getActiveSheet()->getStyle('A1:F1')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$objPHPExcel->getActiveSheet()->getStyle('A1:F1')->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);
	
	$objPHPExcel->getActiveSheet()->getStyle('A1:F1')->getFill()->setFillType(PHPExcel_Style_Fill::FILL_SOLID);
	//$objPHPExcel->getActiveSheet()->getStyle('A1:I1')->getFill()->getStartColor()->setRGB('337AB7');
    
   
    
    //echo date('H:i:s') , " Set Data" ;
                
    $objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A1', 'S.No')
            ->setCellValue('B1', 'Department')
            ->setCellValue('C1', 'Name of the Meeting')
            ->setCellValue('D1', 'No. of Meeting Minutes Submitted')
            ->setCellValue('E1', 'Meeting Minutes insisted upon ')
            ->setCellValue('F1', 'No. of Meeting Minutes yet to be submitted');
            
    /** $objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A1', 'S.No')
            ->setCellValue('B1', 'Department');
            
    $objPHPExcel->setActiveSheetIndex(0)->mergeCells('C1:F1')->setCellValue('C1','Meeting'); */        
    
    $objPHPExcel->getActiveSheet()->getRowDimension('1')->setRowHeight(40);
    $objPHPExcel->getActiveSheet()->getRowDimension('2')->setRowHeight(40);
    //echo date('H:i:s') , "Setting Valules to cell" ;
    $i=2; /** Starting row **/ 
    $j = 1;   
    
    //print_r($data);die;
    if(sizeof($data) > 0){
        foreach($data as $res){
            //print_r($res);die;
            
            /** Event Total **/
            $table =  DBCONSTANTS::db_code.DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_ums.DBCONSTANTS::db_code;
            $ui_columns = array();
            $ui_columns = array(
                'txtUMSId'   => array('db' => DBCONSTANTS::col_ums_id,    'tb' => $table),
            );
            
            $searchField_details = array();
            $searchField_details = array(
                'txtUMSEId'    => array('db' => DBCONSTANTS::col_ums_mmr,'op' => DBCONSTANTS::op_nq, 'val' => ''),
                'txtUMS'    => array('db' => DBCONSTANTS::col_ums_eid,'op' => DBCONSTANTS::op_eq, 'val' => $res['txtEvId'])
            );
            
            //print_r($searchField_details);die;
            $search_columns = array();
            UTILS::addSearchColumns2($searchField_details, $search_columns);
           
            $bindings = array();   
            $where = DBUTILS::filter2($search_columns, $bindings);
            
            $implodeColumn = array();
            UTILS::implodeColumn($ui_columns, $implodeColumn);
            $sql_query ="SELECT  ".implode(", ", $implodeColumn)." FROM $table $where ";
        	
            //echo $sql_query;die;
            $data_usm = DBUTILS::execute_column_query_array($ui_columns, $bindings, $sql_query);
            //print_r($data_usm);die;
            $mos = sizeof($data_usm);
            
            $table =  DBCONSTANTS::db_code.DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_ums.DBCONSTANTS::db_code;
            $ui_columns = array();
            $ui_columns = array(
                'txtUMSId'   => array('db' => DBCONSTANTS::col_ums_id,    'tb' => $table),
            );
            
            $searchField_details = array();
            $searchField_details = array(
                'txtUMSEId'    => array('db' => DBCONSTANTS::col_ums_mmr,'op' => DBCONSTANTS::op_eq, 'val' => ''),
                'txtUMS'    => array('db' => DBCONSTANTS::col_ums_eid,'op' => DBCONSTANTS::op_eq, 'val' => $res['txtEvId'])
            );
            
            //print_r($searchField_details);die;
            $search_columns = array();
            UTILS::addSearchColumns2($searchField_details, $search_columns);
           
            $bindings = array();   
            $where = DBUTILS::filter2($search_columns, $bindings);
            
            $implodeColumn = array();
            UTILS::implodeColumn($ui_columns, $implodeColumn);
            $sql_query ="SELECT  ".implode(", ", $implodeColumn)." FROM $table $where ";
        	
            //echo $sql_query;die;
            $data_usm = DBUTILS::execute_column_query_array($ui_columns, $bindings, $sql_query);
            //print_r($data_usm);die;
            $moe = sizeof($data_usm);
            
            $objPHPExcel->setActiveSheetIndex(0)
                ->setCellValue('A'.$i, $j)
                ->setCellValue('B'.$i, $res['txtDpNm'])
                ->setCellValue('C'.$i, $res['txtEvNm'])
                ->setCellValue('D'.$i, $mos)
                ->setCellValue('E'.$i, '')
                ->setCellValue('F'.$i, $moe);
                
            $objPHPExcel->getActiveSheet()->getStyle('A'.$i)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
            $objPHPExcel->getActiveSheet()->getStyle('B'.$i)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
            $objPHPExcel->getActiveSheet()->getStyle('C'.$i)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
            $objPHPExcel->getActiveSheet()->getStyle('D'.$i)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
            $objPHPExcel->getActiveSheet()->getStyle('E'.$i)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
            $objPHPExcel->getActiveSheet()->getStyle('F'.$i)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_LEFT);
            
            $i++;
            $j++;
        }       
    }   
    
    $i = $i+3;
    $objPHPExcel->setActiveSheetIndex(0) ->mergeCells('A'.$i.':F'.$i)->setCellValue('A'.$i, date('d-m-Y H:i:s'));
    $objPHPExcel->getActiveSheet()->getStyle('A'.$i)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_RIGHT);
    $objPHPExcel->getActiveSheet()->getStyle('A'.$i)->getFont()->setBold(true)->getColor()->setRGB('000000');
   
   /** Rename worksheet **/ 
	$objPHPExcel->getActiveSheet()->setTitle('csms Report');
	
	/** Set active sheet index to the first sheet, so Excel opens this as the first sheet **/
	$objPHPExcel->setActiveSheetIndex(0);
	
	/** Save Excel 2007 file **/
	#echo date('H:i:s') . " Write to Excel2007 format\n";
	
    
    /**
    $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
	ob_end_clean();
	// Redirect output to a client?s web browser (Excel2007)
	header('Content-Type: application/vnd.ms-excel');
	header('Content-Disposition: attachment;filename="csms-'.time().'.xlsx"');
	
	//$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
	$objWriter->save('php://output');
	exit;    
    */
    
    
    
    // Redirect output to a client’s web browser (Excel2007)
    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    header('Content-Disposition: attachment;filename="csms-'.time().'.xlsx"');
    header('Cache-Control: max-age=0');
    // If you're serving to IE 9, then the following may be needed
    header('Cache-Control: max-age=1');
    
    // If you're serving to IE over SSL, then the following may be needed
    header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
    header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
    header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
    header ('Pragma: public'); // HTTP/1.0
    
    ob_end_clean();
    $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
    $objWriter->save('php://output');
    exit;      
            
}catch(Exception $e){
    $response_array['error'] = true;
    $response_array['msg']  = "Invalid data";    
    echo json_encode($response_array);
    exit();
}
