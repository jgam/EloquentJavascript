def done_or_not(board): #board[i][j]
  # your solution here
  # ..
  # return 'Finished!'
  # ..
  # or return 'Try again!'
  
  #checking three things 
  #가로
  #세로
  three_three = {1:[],2:[],3:[]}
  count = 0
  cmp_dict = {1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[]}
  for column in board:
      #garo
      if sum(column) == 45 and len(set(column))==9:
          #가로 is fine lets do sero
          #3x3 박스
          three_three[1] += column[:3]
          three_three[2] += column[3:6]
          three_three[3] += column[6:]
          count += 1
          if count == 3:
              count = 0
              for key in three_three:
                  if sum(three_three[key]) == 45 and len(set(three_three[key]))==9:
                      three_three[key] = []
                  else:
                      return "Try again!"
          #sero setup            
          for index in range(1, len(column)+1):
              cmp_dict[index].append(column[index-1])
          continue
      else:
          return "Try again!"
  #sero
  for i in cmp_dict:
      if sum(cmp_dict[i]) == 45 and len(set(cmp_dict[i]))==9:
          continue
      else:
          return "Try again!"
  return "Finished!"