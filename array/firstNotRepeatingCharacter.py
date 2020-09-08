# python dict
# a = {}
# a['t'] = 'hihi'
# print(a)

def firstNotRepeatingCharacter(words):
	charMap = {}
	for char in words:
		if char in charMap:
			charMap[char] = charMap[char] + 1
		else:
			charMap[char] = 1

	answer = "_";
	for char in words:
		if charMap[char] == 1:
			answer = char
			break

	return answer

print(firstNotRepeatingCharacter("abacabad"))


# function firstNotRepeatingCharacter(words){
#
#   const charMap = {};
#   for(var i = 0; i < words.length; i++) {
#     if (charMap.hasOwnProperty(words.charAt(i))) {
#       charMap[words.charAt(i)] += 1;
#     } else {
#       charMap[words.charAt(i)] = 1;
#     }
#   };
#
#   var answer = "_";
#   for(var i = 0; i < words.length; i++) {
#     if (charMap[words.charAt(i)] == 1) {
#       answer = words.charAt(i);
#       break;
#     }
#   };
#   return answer;
# }
