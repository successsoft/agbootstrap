<?php
//print_r($_POST);die;
try{
    ob_start();
    require_once "../../classes/utils.class.php";
    
    //editId
    
    
    $ui_columns = array();
    $ui_columns = array(
        'hidMMId'   => DBCONSTANTS::col_mmail_id,
        'hidLgId'   => DBCONSTANTS::col_mmail_lgid,
        'hidLgTp'   => DBCONSTANTS::col_mmail_lgtp,
        'hidMMAId'  => DBCONSTANTS::col_mmail_aid,
        'hidMMSId'  => DBCONSTANTS::col_mmail_sid,
        'hidMMHId'  => DBCONSTANTS::col_mmail_hodid,
        'txtSub'    => DBCONSTANTS::col_mmail_sub,
        'txtMMCMt'  => DBCONSTANTS::col_mmail_cmt,
		'txtMMCdt'  => DBCONSTANTS::col_mmail_cdate,
        'hidLgUd'   => DBCONSTANTS::col_mmail_lgud,
    );
    //print_r($ui_columns); die;
     
    $searchField_details = array();
    $searchField_details = array(
        'txtUSMEId' => array('db' => DBCONSTANTS::col_mmail_id,  'op' => DBCONSTANTS::op_eq, 'val' => trim($_GET['editId'])),
    );
    
    //print_r($searchField_details);die;
    $search_columns = array();
    UTILS::addSearchColumns2($searchField_details, $search_columns);
    //print_r($search_columns);die;
    $bindings = array();   
    $where = DBUTILS::filter2($search_columns, $bindings);
    //print_r($search_columns);die;
    
    $table = DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_mmail;
    
    //print_r($where);die;
    $query ="SELECT * FROM $table $where ";
    //print_r($query);die;
    
    $response_array['error'] = false;
    $data = DBUTILS::execute_column_query( $ui_columns, $bindings, $query);
    //print_r($data);die;
    if(sizeof($data) > 0){
        $response_array['error']  = false;
		$response_array['msg']  = $data[0];
        $response_array['msg']['txtMMCdt']  = date('D, M d, Y',strtotime($data[0]['txtMMCdt'])).' at '.date('h:i A',strtotime($data[0]['txtMMCdt'])) ;
        $hidMMId = $data[0]['hidMMId'];
        $hidMMAId = $data[0]['hidMMAId'];
        $hidMMSId = $data[0]['hidMMSId'];
        $hidMMHId = $data[0]['hidMMHId'];
        $hidLgUd = $data[0]['hidLgUd'];
        $hidLgId = $data[0]['hidLgId'];
        $hidLgTp = $data[0]['hidLgTp'];
        
        if ($hidLgTp == 'A'){
        	$from = 'Admin';
        }else if ($hidLgTp == 'PS'){
            if($hidLgId == 4){
                $from = 'PS TO CS';
            }else if($hidLgId == 5){
                $from = 'PS TO CS2';
            }else if($hidLgId == 6){
                $from = 'PS TO CS3';
            }else{
            	$from = '-';
            }
        }else if ($hidLgTp == 'CS'){
        	$from = 'Chief Secretary';
        } else if ($hidLgTp == 'DS'){
        	$from = 'Deputy secretary';
        } else if ($hidLgTp == 'G'){
            $ui_columns = array();
            $ui_columns = array(
                'txtAbId'   => DBCONSTANTS::col_ab_id,
                'txtAbDp'   => DBCONSTANTS::col_ab_dept,
                'txtAbPos'  => DBCONSTANTS::col_ab_pos,
                'txtAbNm'   => DBCONSTANTS::col_ab_name,
                'txtAbL2'   => DBCONSTANTS::col_ab_lvl2,
                'txtAbL3'   => DBCONSTANTS::col_ab_lvl3,
                'txtAbUTp'  => DBCONSTANTS::col_ab_utp
             );
            //print_r($ui_columns); die;
             
            $table = DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_ab;
                    
            $searchField_details = array();
            $searchField_details = array(
                'txtUSMEId' => array('db' => DBCONSTANTS::col_ab_id,  'op' => DBCONSTANTS::op_eq, 'val' => $hidLgId),
            );
            
            //print_r($searchField_details);die;
            $search_columns = array();
            UTILS::addSearchColumns2($searchField_details, $search_columns);
            //print_r($search_columns);die;
            $bindings = array();   
            $where = DBUTILS::filter2($search_columns, $bindings);
            //print_r($where);die;
            $query ="SELECT * FROM $table $where ";
            //print_r($query);die;
            
            $response_array['error'] = false;
            $data_2 = DBUTILS::execute_column_query( $ui_columns, $bindings, $query);
            if(sizeof($data_2)){
                $level = '';
                if($data_2[0]['txtAbUTp'] == 'D'){
                    if($hidLgUd == 1){
                        $level = $data_2[0]['txtAbL2'];
                    }else{
                        $level = $data_2[0]['txtAbL3'];
                    }
                    $from = $data_2[0]['txtAbNm'].' - Secretary - '.$level;
                }else if($data_2[0]['txtAbUTp'] == 'H'){
                    if($hidLgUd == 1){
                        $level = $data_2[0]['txtAbL2'];
                    }else{
                        $level = $data_2[0]['txtAbL3'];
                    }
                    $from = $data_2[0]['txtAbNm'].' - HOD - '.$level;
                }else{
                	$from = '-';
                }
            }else{
                $from = '-';
            }
            
        } else{
        	$from = '-';
        }
        $response_array['msg']['from']  = $from;
        /** Admin **/
        $ui_columns = array();
        $ui_columns = array(
            'txtSANm'    => DBCONSTANTS::col_sa_name,
            'txtSATp'    => DBCONSTANTS::col_sa_ltp,
        );
        $searchField_details = array();
        $searchField_details = array(
            'txtUSMEId' => array('db' => DBCONSTANTS::col_sa_id,  'op' => DBCONSTANTS::op_in, 'val' => $hidMMAId),
        );
        
        //print_r($searchField_details);die;
        $search_columns = array();
        UTILS::addSearchColumns2($searchField_details, $search_columns);
        //print_r($search_columns);die;
        $bindings = array();   
        $where = DBUTILS::filter2($search_columns, $bindings);
        
        $table = DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_sa;
        
        $sql_query ="SELECT * FROM $table $where";
    	//echo $sql_query;die;
        
        $data = DBUTILS::execute_column_query($ui_columns, $bindings, $sql_query);
        //print_r($data);die;
        if(sizeof($data) > 0){
            $response_array['erroradmin']  = false;
            $response_array['admin']  = $data;
        }else{
            $response_array['erroradmin']  = true;
        }
        
        /** Nodal Department Secretary **/
        $ui_columns = array();
        $ui_columns = array(
            'txtAbNm'    => DBCONSTANTS::col_ab_name,
            'txtAbDp'    => DBCONSTANTS::col_ab_dept,
            'txtAbPs'    => DBCONSTANTS::col_ab_pos
        );
        $searchField_details = array();
        $searchField_details = array(
            'txtUSMEId' => array('db' => DBCONSTANTS::col_ab_id,  'op' => DBCONSTANTS::op_in, 'val' => $hidMMSId),
        );
        
        //print_r($searchField_details);die;
        $search_columns = array();
        UTILS::addSearchColumns2($searchField_details, $search_columns);
        //print_r($search_columns);die;
        $bindings = array();   
        $where = DBUTILS::filter2($search_columns, $bindings);
        
        $table = DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_ab;
        
        $sql_query ="SELECT * FROM $table $where";
    	//echo $sql_query;die;
        
        $data = DBUTILS::execute_column_query($ui_columns, $bindings, $sql_query);
        //print_r($data);die;
        if(sizeof($data) > 0){
            $response_array['errornsec']  = false;
            $response_array['ndepSec']  = $data;
        }else{
            $response_array['errornsec']  = true;
        }
        
        /** Nodal Department HOD **/
        $ui_columns = array();
        $ui_columns = array(
            'txtAbNm'    => DBCONSTANTS::col_ab_name,
            'txtAbDp'    => DBCONSTANTS::col_ab_dept,
            'txtAbPs'    => DBCONSTANTS::col_ab_pos
        );
        $searchField_details = array();
        $searchField_details = array(
            'txtUSMEId' => array('db' => DBCONSTANTS::col_ab_id,  'op' => DBCONSTANTS::op_in, 'val' => $hidMMHId),
        );
        
        //print_r($searchField_details);die;
        $search_columns = array();
        UTILS::addSearchColumns2($searchField_details, $search_columns);
        //print_r($search_columns);die;
        $bindings = array();   
        $where = DBUTILS::filter2($search_columns, $bindings);
        
        $table = DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_ab;
        
        $sql_query ="SELECT * FROM $table $where";
    	//echo $sql_query;die;
        
        $data = DBUTILS::execute_column_query($ui_columns, $bindings, $sql_query);
        if(sizeof($data) > 0){
            $response_array['errornhod']  = false;
            $response_array['ndepHOD']  = $data;
        }else{
            $response_array['errornhod']  = true;
        }
        
        /** Files **/
        $ui_columns = array();
        $ui_columns = array(
            'txtFName'  => DBCONSTANTS::col_fupd_fname,
            'txtOName'  => DBCONSTANTS::col_fupd_foname,
            'txtExt'    => DBCONSTANTS::col_fupd_ext
        );
        
        $searchField_details = array();
        $searchField_details = array(
            'txtStatus' => array('db' =>  DBCONSTANTS::col_fupd_eid,    'val' => $hidMMId),
            'type'      => array('db' =>  DBCONSTANTS::col_fupd_upfr,   'val' => 'MM')
        );
        
        $search_columns = array();
        UTILS::addSearchColumns3($searchField_details, $search_columns);
        
        $table =  DBCONSTANTS::db_code.DBCONSTANTS::tbl_prefiex.DBCONSTANTS::tbl_fupd.DBCONSTANTS::db_code;
        $bindings = array();   
        $where = DBUTILS::filter2($search_columns,$bindings);
        $sql_query ="SELECT * FROM $table $where ";
        //print_r($sql_query);die;
        
        $data = DBUTILS::execute_column_query($ui_columns, $bindings, $sql_query);
        if(sizeof($data) > 0){
            $response_array['errorat'] = false;
            $response_array['attachment']  = $data;
        }else{
            $response_array['errorat'] = true;
        }
    }else{
        $response_array['error']  = true;
    }
    ob_clean(); //turn off output buffering to decrease cpu usage
    ob_start();    
    //print_r($response_array);
    require_once "../../tcpdf/tcpdf.php";
    
    class MYPDF extends TCPDF {
        public function Footer() {
            
            $this->SetY(-15);
            $this->SetFont('helvetica', 'N', 6);
            $this->Cell(0, 5, date("d/m/Y H\hi:s"), 0, false, 'R', 0, '', 0, false, 'T', 'M');
        }
    }
    
    //$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
    $pdf = new MYPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
    // set document information

    $pdf->SetCreator(PDF_CREATOR);
    $pdf->SetAuthor('CSMS');
    $pdf->SetTitle('CSMS ');
    $pdf->SetSubject('CSMS');
    $pdf->SetKeywords('Veiw, Export, PDF, ExportPDF');
    
    // set header and footer fonts
    $pdf->setPrintHeader(false);
    $pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));
    // set default monospaced font
    $pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);
    
    // set margins

    //$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
    $pdf->SetMargins(PDF_MARGIN_LEFT, 10, PDF_MARGIN_RIGHT);
    //$pdf->SetFooterMargin(0);
    //$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
    $pdf->SetFooterMargin(PDF_MARGIN_FOOTER);
    
    // set auto page breaks
    $pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);
    // set image scale factor
    $pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
    // set some language-dependent strings (optional)
    
    if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
    
    	require_once(dirname(__FILE__).'/lang/eng.php');
    
        global $l;
        $pdf->setLanguageArray($l);
    }
    
    // ---------------------------------------------------------
    // set default font subsetting mode
    $pdf->setFontSubsetting(true);
    
    // Set font
    // dejavusans is a UTF-8 Unicode font, if you only need to
    // print standard ASCII chars, you can use core fonts like
    // helvetica or times to reduce file size.
    $pdf->SetFont('helvetica', '', 12);
    
    // Add a page
    // This method has several options, check the source code documentation for more information.
    $pdf->AddPage();
   
	//print_r($time);die;
    $content = '';
    $base_url = CONFIG::base_url;
    if($response_array['error'] == false){
		//print_r($res_array);die;
		$content .= '<table height="0" border="0" cellpadding="0" cellspacing="0" style="width: 565px;margin: 15px auto;font-family: sans-serif;border:none;">
            <tr style="background-color:#fff;border-bottom:1px solid #000;">
			     <td colspan="" valign="middle" style="padding-left:10px;width:33%;">
				    <b>CSMS</b>
				</td>
				<td style="text-align:center;width:33%;padding-top:10px;padding-bottom:10px;">
				    <img src="'.$base_url.'img/tn_logo.png" style="width:40px;display:inline-block; height:40px;" >
            	</td>
				<td style="text-align:right;padding-right:10px;width:33%;"><b>Office of the<br />Chief Secretary,<br /> Tamil Nadu</b></td>
			</tr>
            <tr>
                <td colspan="3">
                    <table width="560" style="width: 560px;margin: 0 auto;border:none;" cellpadding="3" cellspacing="3">
                        <tr style="background-color:#fff;">
        					<td colspan="" valign="middle" style="padding-left:10px;width:200px;">From</td>
        					<td style="text-align:left;width:360px;">
        						<span>'.$response_array['msg']['from'].'</span>
                            </td>
        				</tr>
                        <tr style="background-color:#fff;">
        					<td colspan="" valign="middle" style="padding-left:10px;width:200px;">To</td>
        					<td style="text-align:left;width:360px;">';
                                $to = array();
                                if($response_array['erroradmin'] == false){
                                    foreach($response_array['admin'] as $admin){
        								$to[] = $admin['txtSANm'].'&nbsp;&nbsp;&nbsp;('.$admin['txtSATp'].')';
        							}
                                }
                                if($response_array['errornsec'] == false){
                                    foreach($response_array['ndepSec'] as $admin){
        								$to[] = $admin['txtAbNm'].'-'.$admin['txtAbDp'].'&nbsp;&nbsp;&nbsp;('.$admin['txtAbPs'].')';
        							}
                                }
                                if($response_array['errornhod'] == false){
                                    foreach($response_array['ndepHOD'] as $admin){
        								$to[] = $admin['txtAbNm'].'-'.$admin['txtAbDp'].'&nbsp;&nbsp;&nbsp;('.$admin['txtAbPs'].')';
        							}
                                }
                                
        						$content .= '<span>'.implode(", ",$to).'</span>
                            </td>
        				</tr>
                        <tr style="background-color:#fff;">
        					<td colspan="" valign="middle" style="padding-left:10px;width:200px;">Date</td>
        					<td style="text-align:left;width:360px;">
        						<span>'.$response_array['msg']['txtMMCdt'].'</span>
                            </td>
        				</tr>
                        <tr style="background-color:#fff;">
        					<td colspan="" valign="middle" style="padding-left:10px;width:200px;">Subject</td>
        					<td style="text-align:left;width:360px;">
        						<span>'.$response_array['msg']['txtSub'].'</span>
                            </td>
        				</tr>
                        <tr style="background-color:#fff;">
        					<td colspan="" valign="middle" style="padding-left:10px;width:200px;">Content</td>
        					<td style="text-align:left;width:360px;">
        						<span>'.htmlspecialchars_decode($response_array['msg']['txtMMCMt'], ENT_QUOTES).'</span>
                            </td>
        				</tr>';
                        
                        if($response_array['errorat'] == false){
                            $content .= '<tr style="background-color:#fff;">
            					<td colspan="" valign="middle" style="padding-left:10px;width:200px;">Attachment</td>
            					<td style="text-align:left;width:360px;">
            						<span>Yes</span>
                                </td>
            				</tr>';
                        }else{
                            $content .= '<tr style="background-color:#fff;">
            					<td colspan="" valign="middle" style="padding-left:10px;width:200px;">Attachment</td>
            					<td style="text-align:left;width:360px;">
            						<span>No</span>
                                </td>
            				</tr>';
                        }
                        
                    $content .= '</table>
                </td>
            </tr>
        </table>';
        $content .= '<table width="600" height="0" border="0" cellpadding="0" cellspacing="0" style="width:700px;margin: 15px auto;font-family: sans-serif;border:none;">
            <tr>
    			<td>
    				<div style="background-color: #fff;">
    					<p style="height: 50px; margin:0;justify;color:#000;font-size: 9px;padding-top: 1em;text-align:justify;font-family: arial;"><strong>Disclaimer:</strong> This message contains confidential information and is intended for CSMS Recipient. If you are not the intended recipient you are notified that disclosing, copying, distributing or taking any action in reliance on the contents of this information is strictly prohibited. E-mail transmission cannot be guaranteed to be secure or error-free as information could be intercepted, corrupted, lost, destroyed, arrive late or incomplete, or contain viruses. The sender therefore does not accept liability for any errors or omissions in the contents of this message, which arise as a result of e-mail transmission. If verification is required, please request a hard-copy version. </p>
    				</div>
    			</td>
    		</tr>
        </table>';
    }else{
        $content .= 'No content';
    }
    //echo $content;die;
    $pdf->writeHTML($content, true, false, false, false, '');
    // ---------------------------------------------------------
    ob_clean();
    // Close and output PDF document ('ID CARD - Report : '.$QNo);
    // This method has several options, check the source code documentation for more information.
    
    
    $file_name = "csms-download-".time().'.pdf';
    $pdf->Output($file_name, 'D');
    
    
}catch(Exception $e){
    $response_array['error'] = true;
    $response_array['msg']  = "Invalid data";    
    echo json_encode($response_array);
    exit();
}

  
?>