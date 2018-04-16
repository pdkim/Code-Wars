//double values with map solution
function double(array) {
  return array.map(x => x*2);
}

double([1, 2, 3, 4]);

//list filtering solution
function filter_list(l) {
  return l.filter(num => typeof num === 'number');
}

filter_list([1, 'one', 'two', 2, '3', 3]);

//calculate average solution
function find_average(array) {
  let total = array.reduce((acc, current) => acc + current)
  return total/array.length;
}

find_average([1, 2, 3, 4]);