<?php 
function make_comparer() {
	// Normalize criteria up front so that the comparer finds everything tidy
	$criteria = func_get_args();
	foreach ($criteria as $index => $criterion) {
		$criteria[$index] = is_array($criterion)
			? array_pad($criterion, 3, null)
			: array($criterion, SORT_ASC, null);
	}
 
	return function($first, $second) use ($criteria) {
		foreach ($criteria as $criterion) {
			// How will we compare this round?
			list($column, $sortOrder, $projection) = $criterion;
			$sortOrder = $sortOrder === SORT_DESC ? -1 : 1;
 
			// If a projection was defined project the values now
			if ($projection) {
				$lhs = call_user_func($projection, $first[$column]);
				$rhs = call_user_func($projection, $second[$column]);
			}
			else {
				$lhs = $first[$column];
				$rhs = $second[$column];
			}
 
			// Do the actual comparison; do not return if equal
			if ($lhs < $rhs) {
				return -1 * $sortOrder;
			}
			else if ($lhs > $rhs) {
				return 1 * $sortOrder;
			}
		}
 
		return 0; // tiebreakers exhausted, so $first == $second
	};
}
$data = array(
    array('zz', 'name' => 'Jack', 'number' => 22, 'birthday' => '12/03/1980'),
    array('xx', 'name' => 'Adam', 'number' => 16, 'birthday' => '01/12/1979'),
    array('aa', 'name' => 'Paul', 'number' => 16, 'birthday' => '03/11/1987'),
    array('cc', 'name' => 'Helen', 'number' => 44, 'birthday' => '24/06/1967'),
);
usort($data, make_comparer('name'));
usort($data, make_comparer(['name', SORT_DESC]));
usort($data, make_comparer(['number', SORT_DESC], ['name', SORT_DESC]));