/**	Update Status Like Toggle	**/
UPDATE  $table SET STATUS = IF( STATUS =  'A',  'I',  'A' ) WHERE id = $id;
/**	End	**/

/**	Multi dimensional Array Sorting	**/
usort($myArray, function($a, $b) {
    return $a['order'] - $b['order'];
});
print_r($myArray);die;


/**	SQL If the value is Numeric	**/
SELECT colId  FROM $table where concat('',Total * 1) = Total
/** End **/

/** Replace Part Of The String	**/
UPDATE  lco_collection SET  BillNo = REPLACE(  BillNo ,  'LC1703',  'LC170300' );

Result => {LC1703001 to LC170300001}
/**	End **/

/**	Insert From One Table To Another Table**/
INSERT INTO lco_street( StreetCode, StreetName, Area ) SELECT DISTINCT (a.StrSlNO), a.StrName, c.Area FROM  lco_address AS a LEFT JOIN  lco_customer AS c ON a.CodeNo = c.CodeNo
/** End **/

/** IF Data Unavailable then 0	**/
SELECT COALESCE(SUM(IF( concat('',Total * 1) = Total, 1, 0 )),0) AS Amount FROM lco_collection 
/** END **/

/** Brissk user notisication issues query	**/
SELECT `invoice_no`, un.* FROM `sales_1` AS s
LEFT JOIN user_notification AS un ON invoice_no = un.referanceNo AND un.userid = 15 
WHERE `finance` = 'P' AND `status` = 'O' ORDER BY `id` DESC

SELECT GROUP_CONCAT(`invoice_no`) FROM `sales_1` WHERE `finance` = 'P' AND `status` = 'O' AND `id` > '699' ORDER BY `id` DESC

UPDATE  `user_notification` SET  `user_status` =  'Live' WHERE  `userid` =15 AND  `referanceNo` IN 
('S1704020001','S1704040003','S1705060145')
/**	End	**/

/**	In Comma Seperated Value Remove particular value**/
Eg : Column Access => 5,6,2,3 to  Access => 5,2,3

UPDATE lco_street
SET Access = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', Access, ','), ',6,', ','))
WHERE FIND_IN_SET('6', Access)
/**	End	**/

/** Found Date Difference Between 2 dates	**/
SELECT datediff('2017-06-06', '2016-11-07');
/**	Ends	**/

/** update date with particular days	**/
UPDATE $table  SET `created` = DATE_ADD(`created` , INTERVAL 312 DAY), `modified` = DATE_ADD(`modified` , INTERVAL 312 DAY);
/** Ends	**/

/** Update Customer Table Contact information	**/
UPDATE  lco_customer AS a SET  a.Contact = (SELECT group_concat(DISTINCT  c.Number separator '/') FROM lco_contact AS c WHERE c.CodeNo = a.CodeNo)
/**	Ends **/


/**	Tanuvas Member Count	**/
SELECT u.mobile, (SELECT COUNT(mid) FROM `ta_members` AS m WHERE m.uid = u.uid AND m.status = 'A') AS active,
(SELECT COUNT(mid) FROM `ta_members` AS m WHERE m.uid = u.uid AND m.status = 'I') AS inactive FROM `ta_users` AS u GROUP BY u.uid
/**	Ends **/

/**	Update comma seperate value with concat**/
UPDATE  ta_groups SET members = CONCAT( members,  ',',  '2' ) WHERE gid = 1;
/**	Ends	**/

/**	Update Partial value of a column	**/
UPDATE table SET field = REPLACE(field, 'string', 'anothervalue') WHERE field LIKE '%string%';
/**	Ends	**/

/**	Concat With Single Quotes	**/
SELECT GROUP_CONCAT(DISTINCT CONCAT('''', StreetCode, '''')) AS street FROM lco_street WHERE FIND_IN_SET(9,Access) AND StreetCode <> ''
/**	Ends	**/

/**	Get Comma Seperated Value Count	**/
SELECT SUM(LENGTH(members) - LENGTH(REPLACE(members, ',', '')) + 1) FROM sf_groups;
/**	Ends	**/

/**	Split numbers and alphabet from alphanumeric	**/
-- select reverse(cast(reverse('abc123') as unsigned));
SELECT @col :=  'abc123' AS col, @num := REVERSE( CAST( REVERSE( @col ) AS UNSIGNED ) ) AS num, SUBSTRING_INDEX( @col , @num , 1 ) AS word
/**	Ends	**/

/**	Create Trigger Before Insert SET Column Value	**/
DELIMITER $$
CREATE TRIGGER `MyTrigger` BEFORE INSERT ON `lco_transaction`
FOR EACH ROW 
BEGIN
	DECLARE trnno Boolean;
	DECLARE bal decimal(10,2);
    -- Check lco_transaction table
	SELECT CONCAT_WS('-','TRN', DATE_FORMAT(NOW(), "%y%m"),LPAD(IF(COUNT(`tid`) = 0,1,COUNT(`tid`) + 1),3,'0')) INTO @trnno FROM `lco_transaction` WHERE DATE_FORMAT(`date`, "%Y-%m");
    SELECT `balance` FROM `lco_transaction` ORDER BY `tid` DESC LIMIT 1 INTO @bal;

	SET NEW.`trnno` = (@trnno), NEW.`balance` = (IFNULL(@bal,0) + (NEW.`credit` - NEW.`debit`));
END
$$
DELIMITER ;
/**	Ends	**/

/**	Delete Duplicate rows from a table	**/
DELETE n1 FROM lco_contact n1, lco_contact n2 WHERE n1.ConId < n2.ConId AND n1.Number = n2.Number AND n1.CodeNo = n2.CodeNo
/**	Ends	**/

/**	Set row id 1 to name autoinc**/
UPDATE lco_contact, (SELECT @id := 0) dm SET ConId = (@id := @id + 1);
/**	Ends	**/

/**	UPDATE RECORDS FROM ANOTHER TABLE WITH CONCAT	**/
UPDATE  `lco_customer` AS c SET c.Contact = ( SELECT GROUP_CONCAT(  ' ', Number ) AS mobile
FROM  `lco_contact` AS a WHERE a.Sms =  'Yes' AND a.CodeNo = c.CodeNo ) ;
/**	Ends	**/

/**	Remove White Space	**/
UPDATE lco_address SET DoorNo = TRIM(DoorNo);
/**	Ends	**/

/**	Select Datas With Generate Serial NOW	**/
SELECT  @a:=@a+1 serial_number, * FROM table <?IF Joins?>,(SELECT @a:= 0) AS a;
/**	Ends	**/