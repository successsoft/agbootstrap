<?php 

/** PHP Excel date conversion **/
$first_entry_date = $objWorksheet->getCell("M" . $row)->getValue();
$contact_arr[$id]['first_entry_date'] = date('d-M-Y', PHPExcel_Shared_Date::ExcelToPHP($first_entry_date));