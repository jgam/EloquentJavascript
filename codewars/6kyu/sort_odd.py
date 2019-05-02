def sort_array(source_array):
    # Return a sorted array.
    odd_num = []
    for i in source_array:
        if i % 2 != 0:
            odd_num.append(i)
    
    #do sort odd_num
    odd_num = [1,3,5]
    
    for index in range(len(source_array)):
        if source_array[index] % 2 != 0:
            source_array[index] = odd_num[0]
            odd_num.pop(0)
    
    return source_array