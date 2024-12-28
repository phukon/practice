--[[
   Level - Hard
   For more information, please see the following video:
   https://www.youtube.com/watch?v=ngCos392W4w

   Write a function that counts the number of ways you can partition n objects using parts upto m.
   Assuming m >= 0

   n = 6, m = 4

   o o o o | o o
   o o o o | o | o
   o o o | o o o
   o o o | o o | o
   o o o | o | o | o
   o o | o o | o o
   o o | o o | o | o
   o o | o | o | o | o
   o | o | o | o | o | o

   Ans -> 9 partitions
--]]

-- What's the simplest possible input??
-- count_partitions(n ,m) -> 1 if n = 0
-- count_partitions( 0, 0) -> 1
-- count_partitions( 0, 1) -> 1
-- count_partitions( 0, 2) -> 1
--
-- but count_partitions(1, 0) is impossible, we need atleast one part
-- count_partitions(n, m) -> 0 if m = 0
--
--
--
-- ANSWER
-- count_partitions(a, b) = count_partitions(n - m, m) + count_partitions(n, m - 1)
-- So the algorithm is count_partitions(n , m) = 1 if n = 0
--                                               0 if m = 0 or n < 0 (negative after n - m if n < m)



-- write the code by combining the recursive pattern with the base case
local function count_partitions(n, m)
  if n == 0 then
    return 1
  elseif m == 0 or n < 0 then
    return 0
  else
    return count_partitions(n - m, m) + count_partitions(n , m - 1)
  end
end


print("There are " .. count_partitions(9, 5) .. " partitions")
