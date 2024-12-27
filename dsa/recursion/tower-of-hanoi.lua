local function print_move(start_pos, end_pos)
  print(start_pos, " --> ", end_pos)
end

local function hanoi(n, start_pos, end_pos)
  if n == 1 then
    print_move(start_pos, end_pos)
  else
    local other = 6 - (start_pos + end_pos) -- naming the rods 1 , 2, and 3
    hanoi(n - 1, start_pos, other)
    print_move(start_pos, end_pos)
    hanoi(n -1, other, end_pos)
  end
end


hanoi(3, 1, 3)
