import copy

def addElementToArray(ele, array):
	for x in array:
  		x.append(ele)
# unit tests addElementToArray
# mylist = [[1],[2]] #[[]];
# addElementToArray( 3, mylist );
# print "Values outside the function: ", mylist


def removeEntryAleadyWithK(k, array, answer):
	newArray = []
	for x in array:
		if (len(x) == k):
			answer.append(x)
		else:
  			newArray.append(x)

	return newArray
# unit test for removeEntryAlreadyWithK
# answer = [];
# remainSet = removeEntryAleadyWithK(3, [[1,2,3], [1,2], [1,3]], answer);
# print "answer: ", answer
# print "remainSet: ", remainSet

def arrayChooseK(k, array):
	answer = []
	tmpStore = [[]]
	for x in array:
		cloneTmp = copy.deepcopy(tmpStore)
		addElementToArray(x, cloneTmp)
		newTmp = removeEntryAleadyWithK(k, cloneTmp, answer)
		tmpStore = newTmp + tmpStore
	return answer

a = [1, 2, 3, 4]
k = 3
answer = arrayChooseK(k, a)
print "array choose 3: ", answer # [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 1, 3, 4 ], [ 1, 2, 4 ] ]
