-- arithmetic         --> https://www.lua.org/pil/13.1.html
-- __index metamethod --> https://www.lua.org/pil/13.4.1.htmL

-- SHARED VALUES
local shared_data = {
  description = "Hello world!"
}

local table1 = {}
local table2 = {}

setmetatable(table1, {__index = shared_data})
setmetatable(table2, {__index = shared_data})

print("table 1: ", table1.description)
print("table 2: ", table2.lol)

-- DEFAULT VALUES
local defaults = { x = 0, y = 0 }

local object = {}
setmetatable(object, { __index = defaults })

print("Value of X: " .. object.x)
print("Value of X: " .. object.y)

object.x = 10
print("Value of X after mutation :" .. object.x)
