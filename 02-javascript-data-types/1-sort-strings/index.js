/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
	let collator = new Intl.Collator(undefined, {
	caseFirst: "upper"
});
    arr.sort(function(a, b) {
  return collator.compare(a, b);
});
}


let arr = ['b', 'a', 'c'];
 sortStrings(arr, param = 'asc');

 

 arr = ['абрикос','Абрикос','яблоко','Яблоко','ёжик','Ёжик'];
 sortStrings(arr, param = 'asc');

