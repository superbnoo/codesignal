function firstDuplicate(a) {
    let keys = new Array(a.length+1);
    for (var i = 0; i < keys.length; i++) {
      keys[i] = 0;
    }
    var answer = -1;
    for (var i = 0; i < a.length; i++) {
        if (keys[a[i]] > 0) {
            answer = a[i];
            break;
        }
        keys[a[i]] += 1;
    }

    return answer;
}

// answer is 3, because it appears first (rather than 2 - appear later)
console.log(firstDuplicate([2, 1, 3, 5, 3, 2]))
