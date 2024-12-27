function Factorial(n)
  if n <= 1 then
    return n
  else
    return n * Factorial(n-1)
  end
end


print(Factorial(4))
