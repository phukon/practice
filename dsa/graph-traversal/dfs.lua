--[[ ~ pseudocode ~
-- Recursive

  marked = [False]*G.size()
  def dfs(G, v):
    visit(v)
    marked[v] = True
    for w in G.neighbours(v):
      if not marked[w]:
        dfs(G, w)

-- Iterative

  marked = [False] * G.size()
  def dfs_iter(G, v):
    stack = [v]
    while len(stack) > 0:
      v = stack.pop()
      if not marked[v]:
        visit(v)
        marked[v] = True

        for w in G.neighbours(v):
          if not marked[w]:
            stack.append()

]]

local Graph = {}

function Graph.new()
   
end


local function dfs_iterative(graph, vertex)
  local marked = false * 
end
