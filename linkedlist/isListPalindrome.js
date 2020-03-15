// Singly-linked lists are already defined with this interface:
function ListNode(value) {
  this.value = value;
  this.next = null;
};

function createList(input) {
  var head;
  var cur;
  for (var i = 0; i < input.length; i++) { // in: array, of: dictionary
    const node = new ListNode(input[i]);
    if (head == null) {
      head = node;
    }
    if (cur != null) {
      cur.next = node;
    }
    cur = node;
  }

  return head;
}

function printList(l) {
  var head = l;
  while (head != null) {
    console.log(head.value);
    head = head.next;
  }
}

function isListPalindrome(l) {
  var forward = "";
  var backward = "";
  var head = l;
  while (head != null) {
    forward = forward + head.value;
    backward = head.value + backward;
    head = head.next;
  }
  //forward = forward + head.value;
  //backward = head.value + backward;
  console.log(forward);
  console.log(backward);
  return forward === backward;
}

// var node = new ListNode(1);
// console.log(node);
var head = createList([1, 2, 2, 3]);
printList(head);
console.log(isListPalindrome(head));
