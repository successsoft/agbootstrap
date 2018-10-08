<?php 
try{
    require_once "../include/classes/utils.class.php";
    
    
    $table = DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_se;
    $jTable1 = DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_cat;
    $jTable2 = DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_oinfo;
    $ui_column = array();
    $ui_column = array(
        'txtSEId'       => array('db' => DBCONSTANTS::col_se_id,   'tb' => $table),
        'txtSEName'     => array('db' => DBCONSTANTS::col_se_name),
        'txtSEPrice'    => array('db' => DBCONSTANTS::col_oinfo_pr),
        'txtSETitle'    => array('db' => DBCONSTANTS::col_oinfo_tit),
        'txtSEAva'      => array('db' => DBCONSTANTS::col_oinfo_cava),
        'txtSETName'    => array('db' => DBCONSTANTS::col_se_tname),
        'txtCATNm'      => array('db' => DBCONSTANTS::col_cat_cnm),
        'txtCATTNm'     => array('db' => DBCONSTANTS::col_cat_ctnm) 
    );
    
    $searchField_details = array();
    $searchField_details = array(
        'txtSESs'   => array('db' => $table.".".DBCONSTANTS::col_se_ss,'val' => 'A'),
    );
    
    $search_columns = array();
    UTILS::addSearchColumns2($searchField_details, $search_columns);
    //print_r($search_columns);die;
    
    $bindings = array();   
    $where = DBUTILS::filter2($search_columns, $bindings);
    
    $joinTable = "LEFT JOIN $jTable1 ON $table.".DBCONSTANTS::col_se_pid." = $jTable1.".DBCONSTANTS::col_cat_id."
    LEFT JOIN $jTable2 ON $table.".DBCONSTANTS::col_se_id." = $jTable2.".DBCONSTANTS::col_oinfo_sid." AND $jTable2.".DBCONSTANTS::col_oinfo_info." = 'P'";
        
    $implode_column = array();
    UTILS::implodeColumn($ui_column, $implode_column);
    //print_r($implode_column);die;
    $sql_query ="SELECT ".implode(", ",$implode_column)." FROM $table $joinTable $where";
    //print_r($sql_query);die;
    
    $data = DBUTILS::execute_column_query_array($ui_column, $bindings, $sql_query);
    
    //print_r($data);die;
    date_default_timezone_set('Asia/Kolkata');
    
    /** Include PHPExcel */
    require_once '../include/PHPExcel/Classes/PHPExcel.php';
    require_once '../include/PHPExcel/Classes/PHPExcel/IOFactory.php';
    
    /** Create new PHPExcel object **/
    //echo date('H:i:s') , " Create new PHPExcel object" ;
    $objPHPExcel = new PHPExcel();
    
    /** Set document properties **/
    $objPHPExcel->getProperties()->setCreator("Farmmarkt")
        ->setLastModifiedBy("Farmmart - Product download")
        ->setTitle("Product download List")
        ->setSubject("Product download List Export in XLSX format")
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
   
    
    $objPHPExcel->getActiveSheet()->getProtection()->setSheet(false);
        
    $objPHPExcel->getActiveSheet()->getStyle('A1:F1')->getFont()->setBold(true)->getColor()->setRGB('FFFFFF');
	$objPHPExcel->getActiveSheet()->getStyle('A1:F1')->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
	$objPHPExcel->getActiveSheet()->getStyle('A1:F1')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$objPHPExcel->getActiveSheet()->getStyle('A1:F1')->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);
	
	$objPHPExcel->getActiveSheet()->getStyle('A1:F1')->getFill()->setFillType(PHPExcel_Style_Fill::FILL_SOLID);
	$objPHPExcel->getActiveSheet()->getStyle('A1:F1')->getFill()->getStartColor()->setRGB('337AB7');
    $objPHPExcel->getActiveSheet()->getStyle("A1:F1")->getFont()->setSize(20);
    
    $objPHPExcel->setActiveSheetIndex(0)
        ->mergeCells('A1:F1')->setCellValue('A1','FarmMart');
        
    $objPHPExcel->getActiveSheet()->getStyle('A2:F2')->getFont()->setBold(true)->getColor()->setRGB('FFFFFF');
	$objPHPExcel->getActiveSheet()->getStyle('A2:F2')->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
	$objPHPExcel->getActiveSheet()->getStyle('A2:F2')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$objPHPExcel->getActiveSheet()->getStyle('A2:F2')->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);
	
	$objPHPExcel->getActiveSheet()->getStyle('A2:F2')->getFill()->setFillType(PHPExcel_Style_Fill::FILL_SOLID);
	$objPHPExcel->getActiveSheet()->getStyle('A2:F2')->getFill()->getStartColor()->setRGB('337AB7');
    $objPHPExcel->getActiveSheet()->getStyle("A2:F2")->getFont()->setSize(18);
    $objPHPExcel->setActiveSheetIndex(0)
        ->mergeCells('A2:F2')->setCellValue('A2','Stock list as on '.date('d-M-Y'));
    
    $objPHPExcel->getActiveSheet()->getStyle('A3:F3')->getFont()->setBold(true)->getColor()->setRGB('FFFFFF');
	$objPHPExcel->getActiveSheet()->getStyle('A3:F3')->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
	$objPHPExcel->getActiveSheet()->getStyle('A3:F3')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$objPHPExcel->getActiveSheet()->getStyle('A3:F3')->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);
	
	$objPHPExcel->getActiveSheet()->getStyle('A3:F3')->getFill()->setFillType(PHPExcel_Style_Fill::FILL_SOLID);
	$objPHPExcel->getActiveSheet()->getStyle('A3:F3')->getFill()->getStartColor()->setRGB('337AB7');
    
    $objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('A3', 'S.No')
            ->setCellValue('B3', 'Name')
            ->setCellValue('C3', 'பெயர்')
            ->setCellValue('D3', 'Price')
            ->setCellValue('E3', 'Kg/Item')
            ->setCellValue('F3', 'Available');
    		 
            
    $objPHPExcel->getActiveSheet()->getRowDimension('1')->setRowHeight(40);
    $objPHPExcel->getActiveSheet()->getRowDimension('2')->setRowHeight(30);
    $objPHPExcel->getActiveSheet()->getRowDimension('3')->setRowHeight(25);
    
    $i = 4;
    if(sizeof($data)){
        foreach($data as $row){
            $objPHPExcel->setActiveSheetIndex(0)
                ->setCellValue('A'.$i, $row['txtSEId'])          
                ->setCellValue('B'.$i, $row['txtSEName'])
                ->setCellValue('C'.$i, $row['txtSETName'])
                ->setCellValue('D'.$i, number_format($row['txtSEPrice'], 2, '.', '')) 
                ->setCellValue('E'.$i, $row['txtSETitle'])
                ->setCellValue('F'.$i, 0);
                
                
            $objValidation = $objPHPExcel->getActiveSheet()->getCell('E'.$i)->getDataValidation();
            $objValidation->setType( PHPExcel_Cell_DataValidation::TYPE_LIST );
            $objValidation->setErrorStyle( PHPExcel_Cell_DataValidation::STYLE_INFORMATION );
            $objValidation->setAllowBlank(false);
            $objValidation->setShowInputMessage(true);
            $objValidation->setShowErrorMessage(true);
            $objValidation->setShowDropDown(true);
            $objValidation->setErrorTitle('Input error');
            $objValidation->setError('Value is not in list.');
            $objValidation->setPromptTitle('Pick from list');
            $objValidation->setPrompt('Please pick a value from the drop-down list.');
            $objValidation->setFormula1('"Kg,Item"');	// Make sure to put the list items between " and "  !!!
            
            
            $objPHPExcel->getActiveSheet()->getProtection()->setSheet(true);	
            $objPHPExcel->getActiveSheet()->protectCells('A'.$i.':C'.$i, 'PHPExcel');
            
            $objPHPExcel->getActiveSheet()->getStyle('D'.$i.':F'.$i)->getProtection()->setLocked(PHPExcel_Style_Protection::PROTECTION_UNPROTECTED);
            
            $objPHPExcel->getActiveSheet()->getStyle('E'.$i)->getNumberFormat()->setFormatCode('0.00');
            
            /** Borders for heading */
            $objPHPExcel->getActiveSheet()->getRowDimension($i)->setRowHeight(20);
            
            $i++;
        }
    }else{
        $objPHPExcel->getActiveSheet()->mergeCells("A$i:F$i");
        $objPHPExcel->setActiveSheetIndex(0)
                ->setCellValue('A'.$i, 'No Records Found!!!');
                
        /** Borders for heading */
        $objPHPExcel->getActiveSheet()->getStyle("A$i:F$i")->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);   
        $objPHPExcel->getActiveSheet()->getStyle("A$i:F$i")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
        $objPHPExcel->getActiveSheet()->getStyle('A'.$i.':F'.$i)->getBorders()->getAllBorders()->setBorderStyle(PHPExcel_Style_Border::BORDER_THIN);
        $objPHPExcel->getActiveSheet()->getRowDimension($i)->setRowHeight(20);
    }
    /** Rename worksheet **/ 
    $objPHPExcel->getActiveSheet()->setTitle('Report');
            
    /** Set active sheet index to the first sheet, so Excel opens this as the first sheet **/
    $objPHPExcel->setActiveSheetIndex(0);
    
    /** Save Excel 2007 file **/
     // Redirect output to a client’s web browser (Excel2007)
    header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    header('Content-Disposition: attachment;filename="FarmMart'.date('ymdhi').'.xlsx"');
    header('Cache-Control: max-age=0');
    // If you're serving to IE 9, then the following may be needed
    header('Cache-Control: max-age=1');
    
    // If you're serving to IE over SSL, then the following may be needed
    header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
    header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
    header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
    header ('Pragma: public'); // HTTP/1.0
    
    //ob_end_clean();
    
     while (ob_get_level() > 0) {
        ob_end_clean();
    }
    flush();
    
    $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
    $objWriter->save('php://output');
    exit;
}catch(Exception $e){
    $response_array['error'] = true;
    $response_array['msg']  = "Invalid data";    
    echo json_encode($response_array);
    exit();
}
    
?>