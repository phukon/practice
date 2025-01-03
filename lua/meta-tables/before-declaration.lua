-- Generate a random UUID (version 4)
function generateUUID()
    local template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    local function randomHex()
        return string.format('%x', math.random(0, 15))
    end

    -- Generate the UUID by replacing x's and y's in the template
    return string.gsub(template, '[xy]', function(c)
        local r = (c == 'x') and randomHex() or randomHex() .. randomHex()
        return r
    end)
end

-- Example usage:
math.randomseed(os.time())  -- Set random seed based on current time
local uuid = generateUUID()
print(uuid)
