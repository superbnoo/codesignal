# Python dict
# thisdict = {
#   "brand": "Ford",
#   "model": "Mustang",
#   "year": 1964
# }
# print(thisdict)


# lst = [0] * 5
# print(lst)

def firstDuplicate(a):
	alen = len(a)
	length = alen + 1
	keys = [0] * length
	answer = -1;
	for x in a:
		if keys[x] > 0:
			answer = x
			break
		keys[x] += 1
	return answer

print(firstDuplicate([2, 1, 3, 5, 3, 2]))
