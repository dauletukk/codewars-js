// Simple, given a string of words, return the length of the shortest word(s).
//
//     String will never be empty and you do not need to account for different data types.
// Test.describe("Example tests",_=>{
//     Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//     Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3);
// });

function findShort(s) {
    s = s.split(' ').map(function (elem) {
        return elem = elem.length
    })
    console.log(s)
    console.log(Math.min(...s))


}
findShort("bitcoin take over the world maybe who knows perhaps");