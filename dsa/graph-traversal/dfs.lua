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

Graph = {}
Graph.__index = Graph

function Graph:new()
  local instance = setmetatable({}, self )
  instance.map = {}
  return instance
end

function Graph:_add_vertex(vertex)
  if self.map[vertex] == nil then
    self.map[vertex] = {}
  end
end

function Graph:add_edge(v1, v2)
  self:_add_vertex(v1)
  self:_add_vertex(v2)

  table.insert(self.map[v1], v2)
  table.insert(self.map[v2], v1)
end

function Graph:print_graph()
  for i, v in pairs(self.map) do
    print(i .. "-->" .. table.concat(v, ", "))
  end
end


local gr = Graph:new()
gr:add_edge("a", "b")
gr:add_edge("a", "c")
gr:add_edge("a", "d")
print(" ----- ")
gr:print_graph()
