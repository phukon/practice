local t1 = {value = 10}
local t2 = {value = 20}

local mt = {
  __add = function(a, b)
    return {value = a.value + b.value}
  end
}

setmetatable(t1, mt)
setmetatable(t2, mt)

local t3 = t1 + t2
print("Value " .. t3.value)
print("\n")

-- =========================================

local vector_mt = {}

-- This block might seem unusual at first, but what we're doing is returning a new table with the same metatable
-- as the original ones. This allows us to continue performing operations (like addition) on the newly created table.
-- It's similar to instantiating a new object or class by setting a metatable on the resulting table.
vector_mt.__add = function (left, right)
    return setmetatable({
        left[1] + right[1],
        left[2] + right[2],
        left[3] + right[3],
    }, vector_mt)
end

local v1 = setmetatable({3, 1, 5}, vector_mt)
local v2 = setmetatable({-3, 3, 4}, vector_mt)
local v3 = v1 + v2
print("Value of v3 vector: ", v3[1], v3[2], v3[3])

print("Adding v3 vector with itself")
local v4 = v3 + v3
print("Value of v4 vector: ", v4[1], v4[2], v4[3])

-- Similar JavaScript code for vector addition using classes:
--[[
class Vector {
    constructor(x, y, z) {
        this.coords = [x, y, z];
    }

    add(other) {
        return new Vector(
            this.coords[0] + other.coords[0],
            this.coords[1] + other.coords[1],
            this.coords[2] + other.coords[2]
        );
    }
}

const v1 = new Vector(3, 1, 5);
const v2 = new Vector(-3, 3, 4);

const v3 = v1.add(v2);  // Equivalent to v1 + v2 in Lua
console.log(v3.coords); // Outputs: [0, 4, 9]
]]
