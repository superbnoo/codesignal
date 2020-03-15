// Input:
// path: "/home/a/./x/../b//c/"
// Expected Output:
// "/home/a/b/c"

function simplifyPath(path) {
  var paths = path.split("/");
  //console.log(paths);
  var spaths = [];
  for (var i = 0; i < paths.length; i++) {
    if (i == 0) {
      if (paths[i] === '') {
        spaths.push('/');
      } else if (paths[i] === '.') {
      } else if (paths[i] === '..') {
        spaths.push(paths[i]);
      } else {
        spaths.push('/');
        spaths.push(paths[i]);
      }
    } else {
      if (paths[i] === '' || paths[i] === '.') {
      } else if (paths[i] === '..') {
        if (spaths.length > 0) {
          spaths.pop();
        }
      } else {
        spaths.push(paths[i]);
      }
    }
  }
  console.log(spaths);
  //console.log(spaths.join("/").replace("//", "/"));

  var answer = spaths.join("/").replace("//", "/");
  if (!answer.startsWith("/")) {
      answer = "/" + answer;
  }
  return answer;
}
// simplifyPath("/home/a/./x/../b//c/"); // "/home/a/b/c"
simplifyPath("/../"); // "/"
