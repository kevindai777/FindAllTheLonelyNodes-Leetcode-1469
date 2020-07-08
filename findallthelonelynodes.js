//Objective is to find all the lonely nodes, or nodes who do not have siblings.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(3)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 7)
tree.addLeftNode(tree.root.right, 15)


//O(n) solution that does a dfs traversal through the graph and checks 
//each parent's children to see if they're singular

let result = []
function dfs(node) {
    if (!node) {
        return
    }
        
    if (node.left && !node.right) {
        result.push(node.left.val)
    }
        
    if (!node.left && node.right) {
        result.push(node.right.val)
    }
        
    dfs(node.left)
    dfs(node.right)
}
dfs(root)
    
return result