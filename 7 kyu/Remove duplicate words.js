// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//
//     Example:
//
// Input:
//
//     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
//
// Output:
//
//     'alpha beta gamma delta'

function removeDuplicateWords (s) {
    let arr = s.split(' ');
    return arr.filter(function (elem, index) {
        return arr.indexOf(elem) === index

    })
}
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));