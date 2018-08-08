<?php // /usr/local/bin/php -q /home/yarlmart/public_html/admin/wallet_cronjob.php (cron job path)
	/** Php move image **/ 
	$org_image_name = $_FILES['scanned_copy']['name'];
	$upload="../gfx/scanned_copy/";
    if (!file_exists($upload)) {
		mkdir($upload);
	}
	$upload_path = $upload.$org_image_name;
	move_uploaded_file($_FILES["scanned_copy"]["tmp_name"], $upload_path);
	
	/** Check array or not **/
	$arraycheck = is_array($_GET['viewfile']) ? 'Array' : 'not an Array';
	
	/** Select random in array **/
	$random_slugs = array('eventvalue', 'events','newevents','eventnew','eventfolder');
	echo $rand_slug = $random_slugs[array_rand($random_slugs)];

	/** Get first array detail only in array list **/
	$new_array = current($product['ProductDetail']);
	pr($new_array);
    
	/** Get Array Count **/
	$array_count = count($product['ProductDetail']);
	
	/** get first 3 array **/
	$response_array = array_slice($response_array, 0, 3);
	
	/** Array explode **/
	$sale_type = 1_PI
	$sale_type_explode = explode("_",$sale_type); //implode("_",$sale_type)

	$implode = "'".implode("', '", $_POST['checkVal'])."'";
	pr($sale_type_explode);
	output: (
		[0] => 1
		[1] => PI
	)
    
	/** Round off **/
	$price = round($price, 2);
	
	/** File extension **/
	$path = $_FILES['image']['name'];
	$ext = pathinfo($path, PATHINFO_EXTENSION);

	// Validate the file type
	$fileTypes = array('jpg','jpeg','gif','png','JPG','JPEG','GIF','PNG'); // File extensions
	$product_image = $_FILES['Filedata']['name'];
	$fileParts = pathinfo($product_image);
	if (in_array($fileParts['extension'],$fileTypes)) {
		$product_image = $product_image;
	} else {
		$error++;
		$error_msg .= "<br />Invaild image foramt in Row:". $row;
	}

	/** unlink the file **/
	$file_path = "img/test.jpg";
	unlink($file_path);
	
	/** Array key exists **/
	$search_array = array('first' => 1, 'second' => 4);
	if (array_key_exists('first', $search_array)) {
		echo "The 'first' element is in the array";
	}

	/** Adding 0's front **/
	$parent_count = str_pad($parent_count, 3, "0", STR_PAD_LEFT); //1 to 0001, 0089

	/** Adding 0 in decimail **/
	$money = 12345;
	number_format($money, 2, '.', ''); //12345.00
	
	/** Adding no of days **/
	$package_days = 2;
	date('Y-m-d', strtotime('+'.$package_days.' days'));
	 echo date("Y-m-d H:i:s", strtotime("+1 years", strtotime('2014-05-22 10:35:10'))); //2015-05-22 10:35:10
	 echo date("Y-m-d H:i:s", strtotime("+1 months", strtotime('2014-05-22 10:35:10')));//2014-06-22 10:35:10
	 echo date("Y-m-d H:i:s", strtotime("+1 days", strtotime('2014-05-22 10:35:10')));//2014-05-23 10:35:10
	 echo date("Y-m-d H:i:s", strtotime("+1 hours", strtotime('2014-05-22 10:35:10')));//2014-05-22 11:35:10
	 echo date("Y-m-d H:i:s", strtotime("+1 minutes", strtotime('2014-05-22 10:35:10')));//2014-05-22 10:36:10
	 echo date("Y-m-d H:i:s", strtotime("+1 seconds", strtotime('2014-05-22 10:35:10')));//2014-05-22 10:35:11

	/** Date Time Format **/
	$date = date_create('2000-01-01');
	echo date_format($date, 'Y-m-d H:i:s');

	$date = new DateTime('2000-01-01');
	echo $date->format('Y-m-d H:i:s');

	echo $date = date('Y-m-d H:i:s', strtotime($date));
	
	/** Arr match **/
	$property_document_verify_status = array('Y' => 'Yes', 'N' => 'No');
	$allowed = array($business['Business']['property_document_verify_status']); 
	$property_document_verify_status = array_intersect_key($property_document_verify_status, array_flip($allowed)); 
	foreach($property_document_verify_status as $verify_status)
 		echo $verify_status; 

	/** Match using key **/
	$group_arr = array('Y' => 'Yes', 'N' => 'No');
	$category_group_id = 'Y';
	if(array_key_exists($category_group_id,$group_arr))
                $group_name = $group_arr[$category_group_id]; 

	/** Remove file extension **/
	$product_name = preg_replace('/\\.[^.\\s]{3,4}$/', '', $image);
				
 /** Remove img tags **/
 preg_replace("/<img[^>]+\>/i", "(image)", $right_side['description']);
 /** Remove html tags **/
 strip_tags(); 

 /** sub string using complete word **/
if (strlen($string) > 500):
	$string = substr($string,0,500);
	$string = substr($string,0,strrpos($string," "));
		echo $string;
else:
	echo $string;
endif;

$property_description = $product_detail_arr['Product']['product_description'];
$your_desired_width = 100;
if (strlen($property_description) > $your_desired_width){
	$string = wordwrap($property_description, 100);
	$i = strpos($string, "\n");
	if ($i) {
		$string = substr($string, 0, $i);
		$pro_desp = $string."...";
	}
}else{
	$pro_desp = $property_description;    
}

function substr_close_tags($value, $limit = 300) {
	if (mb_strwidth($value, 'UTF-8') <= $limit) {
		return $value;
	}
	
	// Strip text with HTML tags, sum html len tags too.
	// Is there another way to do it?
	do {
		$len          = mb_strwidth($value, 'UTF-8');
		$len_stripped = mb_strwidth(strip_tags($value), 'UTF-8');
		$len_tags     = $len - $len_stripped;
	
		$value = mb_strimwidth($value, 0, $limit + $len_tags, '', 'UTF-8');
	} while ($len_stripped > $limit);
	
	// Load as HTML ignoring errors
	$dom = new DOMDocument();
	@$dom->loadHTML('<?xml encoding="utf-8" ?>'.$value, LIBXML_HTML_NODEFDTD);
	
	// Fix the html errors
	$value = $dom->saveHtml($dom->getElementsByTagName('body')->item(0));
	
	// Remove body tag
	$value = mb_strimwidth($value, 6, mb_strwidth($value, 'UTF-8') - 13, '', 'UTF-8'); // <body> and </body>
	// Remove empty tags
	return preg_replace('/<(\w+)\b(?:\s+[\w\-.:]+(?:\s*=\s*(?:"[^"]*"|"[^"]*"|[\w\-.:]+))?)*\s*\/?>\s*<\/\1\s*>/', '', $value);
	
}
/** Text highlighter in word **/

$string = "The monkey hangs from the door";
$keyword = "the";
echo highlightkeyword($string, $keyword);

function highlightkeyword($str, $search) {
    $highlightcolor = "#daa732";
    $occurrences = substr_count(strtolower($str), strtolower($search));
    $newstring = $str;
    $match = array();
 
    for ($i=0;$i<$occurrences;$i++) {
        $match[$i] = stripos($str, $search, $i);
        $match[$i] = substr($str, $match[$i], strlen($search));
        $newstring = str_replace($match[$i], '[#]'.$match[$i].'[@]', strip_tags($newstring));
    }
 
    $newstring = str_replace('[#]', '<span style="color: '.$highlightcolor.';">', $newstring);
    $newstring = str_replace('[@]', '</span>', $newstring);
    return $newstring;
 
}

/** string contains specific words **/
$findme    = 'are';
$mystring1 = 'how are you';
$mystring2 = 'how you';
$pos1 = stripos($mystring1, $findme);
$pos2 = stripos($mystring2, $findme);

if ($pos1 === false) {
    echo "The string '$findme' was not found in the string '$mystring1'";
}
if ($pos2 !== false) {
    echo "We found '$findme' in '$mystring2' at position $pos2";
}

 /** Time difference **/
$date1 = $new_release['ShortFilm']['created'];
$date2 = date('Y-m-d H:i:s');

$diff = abs(strtotime($date2) - strtotime($date1));

$years = floor($diff / (365*60*60*24));
$months = floor(($diff - $years * 365*60*60*24) / (30*60*60*24));
$days = floor(($diff - $years * 365*60*60*24 - $months*30*60*60*24)/ (60*60*24));

$hours = floor($diff / (60 * 60));
$diff -= $hours * (60 * 60);

$minutes = floor($diff / 60);
$diff -= $minutes * 60;

$seconds = floor($diff);
$diff -= $seconds;

$hours = str_pad($hours, 2, "0", STR_PAD_LEFT);
$minutes = str_pad($minutes, 2, "0", STR_PAD_LEFT);
$seconds = str_pad($seconds, 2, "0", STR_PAD_LEFT);

echo $years." year ago "; 
echo $months." months ago ";
echo $days." days ago ";  
echo "{$hours} hours ago ";
echo "{$minutes} minutes ago ";
echo "{$seconds} seconds ago";


function timeAgo($time_ago){
    $time_ago = strtotime($time_ago);
    $cur_time   = time();
    $time_elapsed   = $cur_time - $time_ago;
    $seconds    = $time_elapsed ;
    $minutes    = round($time_elapsed / 60 );
    $hours      = round($time_elapsed / 3600);
    $days       = round($time_elapsed / 86400 );
    $weeks      = round($time_elapsed / 604800);
    $months     = round($time_elapsed / 2600640 );
    $years      = round($time_elapsed / 31207680 );
    // Seconds
    if($seconds <= 60){
        return "just now";
    }
    //Minutes
    else if($minutes <=60){
        if($minutes==1){
            return "one minute ago";
        }
        else{
            return "$minutes minutes ago";
        }
    }
    //Hours
    else if($hours <=24){
        if($hours==1){
            return "an hour ago";
        }else{
            return "$hours hrs ago";
        }
    }
    //Days
    else if($days <= 7){
        if($days==1){
            return "yesterday";
        }else{
            return "$days days ago";
        }
    }
    //Weeks
    else if($weeks <= 4.3){
        if($weeks==1){
            return "a week ago";
        }else{
            return "$weeks weeks ago";
        }
    }
    //Months
    else if($months <=12){
        if($months==1){
            return "a month ago";
        }else{
            return "$months months ago";
        }
    }
    //Years
    else{
        if($years==1){
            return "one year ago";
        }else{
            return "$years years ago";
        }
    }
}

/** new Line **/
echo nl2br("\n",false);


/** Password **/
$password = make_password(8, 4, 4, 4, 4);
function make_password($password_min_length, $password_min_alpha, $password_min_uppercase, $password_min_numeric, $password_min_special){
	$lowercase="abcdefghijklmnopqrstuvwxyz";
	$uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	$alpha=$uppercase . $lowercase;
	$numeric="0123456789";
	$special="!@$%^&*().?";
	
	$password="";
	
	# Add alphanumerics
	for ($n=0;$n<$password_min_alpha;$n++){
		$password.=substr($alpha,rand(0,strlen($alpha)-1),1);
	}
	
	# Add upper case
	for ($n=0;$n<$password_min_uppercase;$n++){
		$password.=substr($uppercase,rand(0,strlen($uppercase)-1),1);
	}
	
	# Add numerics
	for ($n=0;$n<$password_min_numeric;$n++){
		$password.=substr($numeric,rand(0,strlen($numeric)-1),1);
	}
	
	# Add special
	for ($n=0;$n<$password_min_special;$n++){
		$password.=substr($special,rand(0,strlen($special)-1),1);
	}

	# Pad with lower case
	$padchars=$password_min_length-strlen($password);
	for ($n=0;$n<$padchars;$n++){
		$password.=substr($lowercase,rand(0,strlen($lowercase)-1),1);
	}
		
	# Shuffle the password.
	$password=str_shuffle($password);
	
	$password = substr($password,0,$password_min_length);
    return $password;
}
$password =  generateRandomString(8);
function generateRandomString($length) {
	$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$randomString = '';
	for ($i = 0; $i < $length; $i++) {
		$randomString .= $characters[rand(0, strlen($characters) - 1)];
	}
	return $randomString;
}

//PHP DATE validation
$date_regex = '/^(0[1-9]|[12][0-9]|3[01])[\-\/.](0[1-9]|1[012])[\-\/.](19|20)\d\d$/';
$hiredate = '20-12-2004';
if (!preg_match($date_regex, $hiredate)){ echo "True"; }else{ echo "False"; }

// PHP Add  day in date
$old_expiry_date = date("d-m-Y");
$old_expiry_date=date_create($old_expiry_date);
$new_expriy_date = date_add($old_expiry_date,date_interval_create_from_date_string("1 day")); // days or month or year
$new_expriy_date = date_format($new_expriy_date,"d-m-Y");

/** Getting mismatch array not exits **/
$exp_input_group_old = explode(",",$_REQUEST['old_select_val']);
$exp_input_group_4 = explode(",",$input_group);
$delet_datas = array_diff($exp_input_group_old,$exp_input_group_4);

/** Matching array **/
$array1 = array("a" => "green", "red", "blue");
$array2 = array("b" => "green", "yellow", "red");
$result = array_intersect($array1, $array2);

/** Email validation **/
function isValidEmail($email){ 
     $pattern = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$"; 

     if (eregi($pattern, $email)){ 
        return true; 
     } 
     else { 
        return false; 
     }    
}

/** A B C D **/
$alphas = range('A', 'Z');

/** Convert hr, min, sec to seconds **/
$total_duration = "00:08:08";
$total_duration = preg_replace("/^([\d]{1,2})\:([\d]{2})$/", "00:$1:$2", $total_duration);
sscanf($total_duration, "%d:%d:%d", $td_hours, $td_minutes, $td_seconds);
$td_seconds = $td_hours * 3600 + $td_minutes * 60 + $td_seconds;

$new_rank_array(2 => "A",1 => "C",3 => "B")
array_key_exists("3",$new_rank_array)
$ranking =  array_search("3", array_keys($new_rank_array));

/** Distance calculation **/
function calculateDistance($latitude1, $longitude1, $latitude2, $longitude2) {
    $theta = $longitude1 - $longitude2;
    $miles = (sin(deg2rad($latitude1)) * sin(deg2rad($latitude2))) + (cos(deg2rad($latitude1)) * cos(deg2rad($latitude2)) * cos(deg2rad($theta)));
    $miles = acos($miles);
    $miles = rad2deg($miles);
    $miles = $miles * 60 * 1.1515;
    return $miles; 
}

// Latitude and Longitude of the two places 
$point1_lat ='36.114646';
$point1_lng ='-115.172816';
$point2_lat ='36.030082';
$point2_lng ='-114.980292';
 
//Function call with the coordinates.
$miles = calculateDistance($point1_lat, $point1_lng, $point2_lat,$point2_lng);
 
echo 'Miles ='.$miles;
echo '<br>Nautical Miles : '.$nautical_miles = $miles * 0.868976;
echo '<br>Kilometers : '.$kilometers = $miles * 1.609344;
echo '<br>Meters : '.$meters = $miles * 1609.34;
echo '<br>Yards : '.$yards = number_format(($miles * 1760),4);
echo '<br>Feet : '.$feet = number_format(($miles * 5280),4);
echo '<br>inches : '.$inches = number_format(($miles * 63360),4);


/** Getting image Latitude and Longitude **/

$exif=exif_read_data('outside.jpg', 0, true); //sets a variable with all the EXIF data 

    if((isset($details['GPSLatitude']))&&(isset($details['GPSLongitude']))){ 
          $lat_ref = $exif['GPS']['GPSLatitudeRef']; 
          $lat = $exif['GPS']['GPSLatitude']; //sets a variable equal to the Latitude
          list($num, $dec) = explode('/', $lat[0]); //calculates the Degrees
          $lat_s = $num / $dec;
          list($num, $dec) = explode('/', $lat[1]); //calculates the Minutes
          $lat_m = $num / $dec;
          list($num, $dec) = explode('/', $lat[2]); //calculates the Seconds
          $lat_v = $num / $dec;

          $lon_ref = $exif['GPS']['GPSLongitudeRef'];
          $lon = $exif['GPS']['GPSLongitude']; //sets the variable for the longitude
          list($num, $dec) = explode('/', $lon[0]); //puts the degrees into a variable
          $lon_s = $num / $dec;
          list($num, $dec) = explode('/', $lon[1]); //puts the minutes into a variable
          $lon_m = $num / $dec;
          list($num, $dec) = explode('/', $lon[2]); //puts the seconds into a variable
          $lon_v = $num / $dec;

          //Calculates the GPS location in decimal form.
          $gps_int = array($lat_s + $lat_m / 60.0 + $lat_v / 3600.0, $lon_s
                     + $lon_m / 60.0 + $lon_v / 3600.0);
          print_r( $gps_int; ) //returns the coordinates
		  die;
     }


/** Search array by values and return keys **/
$filterLevel = "Upper Primary with \n secondary and higher secondary(6-12)";
$level = array('0' => 'No Level Assigned', '1' => 'Primary only (1-5)', '2' => 'Primary with Upper Primary(1-8)', '3' => 'Secondary and Higher Secondary(1-12)',
'4' => 'Upper Primary only (6-8)', '5' => "Upper Primary with \n secondary and higher secondary(6-12)", '6' => "Classes 1-7" , '7' => "Classes 6-7" , 
'8' => "Classes 8-10");
echo $key = array_search($filterLevel, $level);


/** search in multidimensional **/

function in_multiarray($elem, $array,$field)
{
    $top = sizeof($array) - 1;
    $bottom = 0;
    while($bottom <= $top)
    {
        if($array[$bottom][$field] == $elem)
            return true;
        else 
            if(is_array($array[$bottom][$field]))
                if(in_multiarray($elem, ($array[$bottom][$field])))
                    return true;

        $bottom++;
    }        
    return false;
}
$array = array(
  array("name" => "Robert", "Age" => "22", "Place" => "TN"), 
  array("name" => "Henry", "Age" => "21", "Place" => "TVL")
);
echo in_multiarray("22", $array,"Age");

function in_multiarray($elem, $array,$field)
{
    $top = sizeof($array) - 1;
    $bottom = 0;
    while($bottom <= $top)
    {
        if($array[$bottom][$field] == $elem){
            $response_array['key'] = $bottom;
            $response_array['array'] = $array[$bottom];
            return $response_array;
        }else{ 
            if(is_array($array[$bottom][$field])){
                if(in_multiarray($elem, ($array[$bottom][$field]))){
                    $response_array['key'] = $bottom;
                    $response_array['array'] = $array[$bottom];
                    return $response_array;
                }
            }
        }
        $bottom++;
    }        
    return false;
}
$array = array(
  array("name" => "Robert", "Age" => "22", "Place" => "TN"), 
  array("name" => "Henry", "Age" => "21", "Place" => "TVL")
);
print_r( in_multiarray("22", $array,"Age"));

function array_find_deep($array, $search, $keys = array())
{
    foreach($array as $key => $value) {
        if (is_array($value)) {
            $sub = array_find_deep($value, $search, array_merge($keys, array($key)));
            if (count($sub)) {
                return $sub;
            }
        } elseif ($value === $search) {
            return array_merge($keys, array($key));
        }
    }

    return array();
}

$a = array(
    'key1' => array(
        'key2' => array(
            'key3' => 'value',
            'key4' => array(
                'key5' => 'value2'
            )
        )
    )
);

var_dump(array_find_deep($a, 'value'));
/*
array
  0 => string 'key1' (length=4)
  1 => string 'key2' (length=4)
  2 => string 'key3' (length=4)
*/

var_dump(array_find_deep($a, 'value2'));
/*
array
  0 => string 'key1' (length=4)
  1 => string 'key2' (length=4)
  2 => string 'key4' (length=4)
  3 => string 'key5' (length=4)
*/

var_dump(array_find_deep($a, 'value3'));
/*
array
  empty
*/

/*** search in single dimensional array ***/
function in_array_r($needle, $haystack) {
    $found = false;
    foreach ($haystack as $item) {
    if ($item === $needle) { 
            $found = true; 
            break; 
        } elseif (is_array($item)) {
            $found = in_array_r($needle, $item); 
            if($found) { 
                break; 
            } 
        }    
    }
    return $found;
}
$cityexp = Array ( '0' => 61, '1' => 45, '2' => 31, '4' => 10 ) ; 
$found = in_array_r('31', $cityexp);

/**** Display the category tree in a dropdown list **/
function fetchCategoryTree($parent = 0, $spacing = '', $user_tree_array = '') {

    if (!is_array($user_tree_array))
        $user_tree_array = array();
    
    $sql = "SELECT `id`, `category_name`, `parent_id` FROM `category` WHERE 1 AND `parent_id` = $parent AND status = 'A' ORDER BY id ASC";
    $query = mysql_query($sql) or die(mysql_error());
    if (mysql_num_rows($query) > 0) {
        while ($row = mysql_fetch_object($query)) {
            $user_tree_array[] = array("id" => $row->id, "name" => $spacing . $row->category_name);
            $user_tree_array = fetchCategoryTree($row->id, $spacing . '&nbsp;&nbsp;', $user_tree_array);
        }
    }
    return $user_tree_array;
}
$categoryList = fetchCategoryTree();
print_r($categoryList);die;
echo '<select>';
foreach($categoryList as $cl) { 
  echo '<option value="'.$cl["id"].'">'.$cl["name"].'</option>';
 } 
echo '</select>';



/** Displaying Category tree in list format **/
function fetchCategoryTreeList($parent = 0, $user_tree_array = '') {

    if (!is_array($user_tree_array))
    $user_tree_array = array();

  $sql = "SELECT `cid`, `name`, `parent` FROM `category` WHERE 1 AND `parent` = $parent ORDER BY cid ASC";
  $query = mysql_query($sql);
  if (mysql_num_rows($query) > 0) {
     $user_tree_array[] = "<ul>";
    while ($row = mysql_fetch_object($query)) {
	  $user_tree_array[] = "<li>". $row->name."</li>";
      $user_tree_array = fetchCategoryTreeList($row->cid, $user_tree_array);
    }
	$user_tree_array[] = "</ul>";
  }
  return $user_tree_array;
}
echo '<ul>';
$res = fetchCategoryTreeList();
foreach ($res as $r) {
    echo  $r;
}
echo '</ul>';


/** is array or not **/
$arraycheck = is_array($_GET['viewfile']) ? 'Array' : 'not an Array';

/** Getting parent info form child **/
function fetchCategoryTree($parent = 0, $spacing = '', $user_tree_array = '') {
    if (!is_array($user_tree_array))
        $user_tree_array = array();
    
    $sql = "SELECT `cat_id`, `cat_name`, `pid` FROM `tbl_cat` WHERE 1 AND `pid` = $parent AND cat_status = 'Y' ORDER BY cat_id ASC";
    $query = mysql_query($sql) or die(mysql_error());
    if (mysql_num_rows($query) > 0) {
        while ($row = mysql_fetch_object($query)) {
            $user_tree_array[] = array("id" => $row->cat_id, "name" => $row->cat_name, "pid" =>$row->pid);
            $user_tree_array = fetchCategoryTree($row->cat_id, $spacing . '--&nbsp;', $user_tree_array);
        }
    }
    return $user_tree_array;
}
$categoryList = fetchCategoryTree();
//print_r($categoryList);die;
function find_pat($a, $n, $key='id' ){
    $out = array();
    foreach ($a as $r){
        if ($r[$key] == $n){
            $out = find_pat($a, $r['pid'], 'id');
            $out[]=$r;
        }
    }
    return $out;
}
$a = find_pat($categoryList, $target); //$target = 5;

$hierarchy=array();
$hierarchy[]=array('id' => 1, 'parent_id'  => 0, 'name' => 'root1');
$hierarchy[] = array('id' => 2, 'parent_id' => 0, 'name' => 'root2');
$hierarchy[] = array('id' => 3, 'parent_id' => 1, 'name' => 'root1-1');
$hierarchy[] = array('id' => 4, 'parent_id' => 1, 'name' => 'root1-2');
$hierarchy[] = array('id' => 5, 'parent_id' => 3, 'name' => 'root1-1-1');
$hierarchy[] = array('id' => 6, 'parent_id' => 2, 'name' => 'root2-1');
function find_pat($a, $n, $key='name' ){
    $out = array();
    foreach ($a as $r){
        if ($r[$key] == $n){
            $out = find_pat($a, $r['parent_id'],'id');
            $out[]=$r;
        }
    }
    return $out;
}
$a = find_pat($hierarchy, 'root1-1-1');
print_r($a);


/** price validation **/
$lprice = 10; $lprice = 10.00; $lprice = 10.0045; $lprice = 10.5
$pattern = '/^(?:0|[1-9]\d*)(?:\.\d{2})?$/';
if (preg_match($pattern, $lprice) == '0') {
   echo "ERROR";
}else{
	 echo "Yes";
}

$preturndays = 10.001; $preturndays = 10;
$number_patten = '/^[0-9]*$/';
if (preg_match($number_patten, $preturndays) == '0') {
	echo "Error:";
} else {
	echo "Continue";
}


/** Create array for category **/
function getTree($data){
	$itemsByReference = array();

	// Build array of item references:
	foreach($data as $key => &$item) {
	   $itemsByReference[$item['id']] = &$item;
	   // Children array:
	   $itemsByReference[$item['id']]['children'] = array();
	   // Empty data class (so that json_encode adds "data: {}" ) 
	   //$itemsByReference[$item['id']]['data'] = new StdClass();
	}

	// Set items as children of the relevant parent item.
	foreach($data as $key => &$item){
		if($item['parent_id'] && isset($itemsByReference[$item['parent_id']])){
			$itemsByReference [$item['parent_id']]['children'][] = &$item;
		}
	}
	   

	// Remove items that were added to parents elsewhere:
	$count = 0;
	foreach($data as $key => &$item) {
		if(empty($item['children'])) {
			//unset($item['children']);
		}
		if($item['parent_id'] && isset($itemsByReference[$item['parent_id']])){
			unset($data[$key]);
		}
		  
	}
	return $data;
}

/** finding child under particular parent **/
function fetch_recursive($tree, $parent_id, $parentfound = false, $list = array())
{
	foreach($tree as $k => $v) {
		if($parentfound || $v['id'] == $parent_id)
		{
			$rowdata = array();
			foreach($v as $field => $value)
				if($field != 'children')
					$rowdata[$field] = $value;
			$list[] = $rowdata;
			if($v['children'])
				$list = array_merge($list, fetch_recursive($v['children'], $parent_id, true));
		}
		elseif($v['children'])
			$list = array_merge($list, fetch_recursive($v['children'], $parent_id));
	}
	return $list;
}

$query = "SELECT * FROM `category order by id asc";
$sql = mysql_query( $query )or die(mysql_error());
if(mysql_num_rows($sql) > 0){
	while( $row = mysql_fetch_assoc($sql) ) { 
		$data_1[] = $row;
	}
	
	$data_2 = getTree($data_1);
	$data_3 = fetch_recursive($data_2, 2);
	$data_4 = getTree($data_3);
	print_r($data_4);die;
}

/** Get month form current month **/

$Y = date('Ym', mktime(0, 0, 0, date("m")-3, 1));
$Z = date('Ym', mktime(0, 0, 0, date("m")-2, 1));
$AA = date('Ym', mktime(0, 0, 0, date("m")-1, 1));


/** Cron Job Path  To write txt file **/
$path  = $_SERVER['HOME']."/public_html/admin/cronjob/log.txt";

/usr/local/bin/php -q /home/yarlmart/public_html/admin/wallet_cronjob.php  // cron path

php -q /home/wideindia/public_html/lco/includes/php/admin/cron //cron path google cloud

/** CWP7 **/
/usr/local/bin/php /home/demo/public_html/elites1.0/cronjob/cron.php

/**** Image conditions ***/
if(file_exists($targetPath)){
	echo "yes";
}else{
	echo "no";
}
/** directory permisssion **/
if (is_dir($targetPath) && is_writable($targetPath)) {
	// do upload logic here
	echo $targetPath;
} else {
	echo 'Upload directory is not writable, or does not exist.';
}

/** try catch for image move upload **/
try {
//throw exception if can't move the file
	if (!move_uploaded_file( $tempFile, $targetFile )) {
		throw new Exception('Could not move file');
	}

	//do some more things with the file which may also throw an exception
	//...

	//ok if got here
	echo "Upload Complete!";
} catch (Exception $e) {
	die ('File did not upload: ' . $e->getMessage());
}

/** Checking image moved or not **/
if (move_uploaded_file($tempFile,$targetFile)) {
	echo "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.";
} else {
	echo "Sorry, there was an error uploading your file.";
}

/** json return huge amount of data loading issue **/
function utf8ize($d) {
	if (is_array($d)) {
		foreach ($d as $k => $v) {
			$d[$k] = utf8ize($v);
		}
	} else if (is_string ($d)) {
		return utf8_encode($d);
	}
	return $d;
}
echo json_encode( utf8ize($output) );


/** Range Week Modnday to saturday  **/
function rangeWeek($datestr) {
	date_default_timezone_set(date_default_timezone_get());
	$dt = strtotime($datestr);
	$res['start'] = date('N', $dt)==1 ? date('Y-m-d', $dt) : date('Y-m-d', strtotime('last monday', $dt));
	$res['end'] = date('N', $dt)==7 ? date('Y-m-d', $dt) : date('Y-m-d', strtotime('next sunday', $dt));
	return $res;
}

/** Get all date between two date **/
function getDatesFromRange($strDateFrom,$strDateTo){
	// takes two dates formatted as YYYY-MM-DD and creates an
	// inclusive array of the dates between the from and to dates.

	// could test validity of dates here but I'm already doing
	// that in the main script

	$aryRange=array();

	$iDateFrom=mktime(1,0,0,substr($strDateFrom,5,2),     substr($strDateFrom,8,2),substr($strDateFrom,0,4));
	$iDateTo=mktime(1,0,0,substr($strDateTo,5,2),     substr($strDateTo,8,2),substr($strDateTo,0,4));

	if ($iDateTo>=$iDateFrom)
	{
		array_push($aryRange,date('Y-m-d',$iDateFrom)); // first entry
		while ($iDateFrom<$iDateTo)
		{
			$iDateFrom+=86400; // add 24 hours
			array_push($aryRange,date('Y-m-d',$iDateFrom));
		}
	}
	return $aryRange;
}

/** current day **/
$current_day = date("l");
$d = strtotime("today");
$start_week = strtotime("last sunday midnight",$d);
if($current_day == 'Sunday'){
$end_week = strtotime("sunday",$d);
}

$end_week = strtotime("next saturday",$d);
if($current_day == 'Saturday'){
$end_week = strtotime("saturday",$d);
}

$start = date("Y-m-d",$start_week); 
$end = date("Y-m-d",$end_week);  
$this_week_range = getDatesFromRange( $start, $end );

/** Number short **/
static function number_shorten($number, $precision = 3, $divisors = null) {

	// Setup default $divisors if not provided
	if (!isset($divisors)) {
		$divisors = array(
			pow(1000, 0) => '', // 1000^0 == 1
			pow(1000, 1) => 'K', // Thousand
			pow(1000, 2) => 'M', // Million
			pow(1000, 3) => 'B', // Billion
			pow(1000, 4) => 'T', // Trillion
			pow(1000, 5) => 'Qa', // Quadrillion
			pow(1000, 6) => 'Qi', // Quintillion
		);    
	}

	// Loop through each $divisor and find the
	// lowest amount that matches
	foreach ($divisors as $divisor => $shorthand) {
		if (abs($number) < ($divisor * 1000)) {
			// We found a match!
			break;
		}
	}

	// We found our match, or there were no matches.
	// Either way, use the last defined value for $divisor.
	return number_format($number / $divisor, $precision) . $shorthand;
}



/** PHP Excel date conversion **/
$first_entry_date = $objWorksheet->getCell("M" . $row)->getValue();
$contact_arr[$id]['first_entry_date'] = date('d-M-Y', PHPExcel_Shared_Date::ExcelToPHP($first_entry_date));

/** Active cell **/
$objWorksheet = $objPHPExcel->setActiveSheetIndex(0);
$objWorksheet = $objPHPExcel->getActiveSheet();

/** Data Table **/
array('db' => DBCONSTANTS::col_mem_dob,   'dt' => 'mdate',
	'formatter' => function( $d, $row ) {
		return date( 'd-M-Y', strtotime($d));    
	}
),

/** Price fixed **/
function PriceFormat2fix($get,$digit=0)
{
	$get = ($get) ? number_format($get,$digit,'.','') : "0.00";
	$num=explode('.',$get);
	$price=$num[0];
	
	$explrestunits = "";
	if(strlen($price)>3){
		$lastthree = substr($price, strlen($price)-3, strlen($price));
		$restunits = substr($price, 0, strlen($price)-3);
		$restunits = (strlen($restunits)%2 == 1)?"0".$restunits:
		$restunits;
		$expunit = str_split($restunits, 2);
		for($i=0; $i<sizeof($expunit); $i++){
			if($i==0)
			{
				$explrestunits .= (int)$expunit[$i].",";
			}else{
				$explrestunits .= $expunit[$i].",";
			}
		}
		$thecash = $explrestunits.$lastthree;
	} else {
		$thecash = $price;
	}
	
	if($digit==0){ $final_cash=$thecash; }else{ if(strlen($num[1])>=1){ $final_cash=$thecash.".".$num[1]; }else{ $final_cash=$thecash; } }
	
	return $final_cash;
}

htmlspecialchars($value, ENT_QUOTES, 'UTF-8'); > to &gt
echo htmlspecialchars_decode($event_content);  &gt to >
htmlspecialchars_decode($str, ENT_QUOTES);

/** Get month and day list **/
$list=array();
$month = 12;
$year = 2017;

$count = 0;
for($d=1; $d<=31; $d++){
	$time = mktime(12, 0, 0, $month, $d, $year);          
	if (date('m', $time)==$month){
		$list[$count]['date'] = date('Y-m-d-D', $time);
		$list[$count]['day'] = date('d', $time);
		$list[$count]['fullday'] = date('l', $time);
		
	}
	$count++;   
}
$response_array['daylist'] = $list;



/** File Size Conversion    **/
static function formatSizeUnits($bytes){
	if ($bytes >= 1073741824){
		$bytes = number_format($bytes / 1073741824, 2) . ' GB';
	}elseif ($bytes >= 1048576){
		$bytes = number_format($bytes / 1048576, 2) . ' MB';
	}elseif ($bytes >= 1024){
		$bytes = number_format($bytes / 1024, 2) . ' KB';
	}elseif ($bytes > 1){
		$bytes = $bytes . ' bytes';
	}elseif ($bytes == 1){
		$bytes = $bytes . ' byte';
	}else{
		$bytes = '0 bytes';
	}

	return $bytes;
}


'txtITm'    => array('db' => 'CASE WHEN '.DBCONSTANTS::col_sch_itm.' = "00:00:00" THEN  "0"  ELSE DATE_FORMAT( '.$table.'.'.DBCONSTANTS::col_sch_itm.', "%h-%i %p" ) END'),   
'txtITm'    => array('db' => 'DATE_FORMAT( '.$table.'.'.DBCONSTANTS::col_sch_itm.', "%h-%i %p"'),  

'txtMDt'    => array('db' => 'CASE WHEN '.DBCONSTANTS::col_sch_mdt.' = "0000-00-00" THEN  "0"  ELSE DATE_FORMAT( '.$table.'.'.DBCONSTANTS::col_sch_mdt.', "%d-%b-%Y" ) END')
'txtMDt'    => array('db' => 'DATE_FORMAT( '.$table.'.'.DBCONSTANTS::col_sch_mdt.', "%d-%b-%Y")') 


/** get lat long **/

function getUserIP(){
	$client  = @$_SERVER['HTTP_CLIENT_IP'];
	$forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
	$remote  = $_SERVER['REMOTE_ADDR'];

	if(filter_var($client, FILTER_VALIDATE_IP))
	{
		$ip = $client;
	}
	elseif(filter_var($forward, FILTER_VALIDATE_IP))
	{
		$ip = $forward;
	}
	else
	{
		$ip = $remote;
	}

	return $ip;
}

$ipAddr = getUserIP();
$geoIP  = json_decode(file_get_contents("http://freegeoip.net/json/$ipAddr"), true);
//print_r($geoIP);
$new_arr[]= unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip='.$ipAddr));
//print_r($new_arr);