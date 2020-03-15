
// Given a binary tree t and an integer s, determine whether there is a root
// to leaf path in t such that the sum of vertex values equals s.

// Sample
// t: {
//     "value": 4,
//     "left": {
//         "value": 1,
//         "left": {
//             "value": -2,
//             "left": null,
//             "right": {
//                 "value": 3,
//                 "left": null,
//                 "right": null
//             }
//         },
//         "right": null
//     },
//     "right": {
//         "value": 3,
//         "left": {
//             "value": 1,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "value": 2,
//             "left": {
//                 "value": -4,
//                 "left": null,
//                 "right": null
//             },
//             "right": {
//                 "value": -3,
//                 "left": null,
//                 "right": null
//             }
//         }
//     }
// }
// s: 7

// ouput: false

//
// Binary trees are already defined with this interface:
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function hasPathWithGivenSum(t, s) {
    if (t == null) {
        return false;
    }
    if (t.value === s && t.left == null && t.right == null) {
        return true;
    }
    return hasPathWithGivenSum(t.left, s - t.value) || hasPathWithGivenSum(t.right, s - t.value);
}
