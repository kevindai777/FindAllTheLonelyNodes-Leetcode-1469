//Java Solution

class Solution {
    
    List<Integer> result;
    public List<Integer> getLonelyNodes(TreeNode root) {
        result = new ArrayList<>();
        dfs(root);
        
        return result;
    }
    
    public void dfs(TreeNode node) {
        if (node == null) {
            return;
        }
        
        if (node.left != null && node.right == null) {
            result.add(node.left.val);
        }
        
        if (node.left == null && node.right != null) {
            result.add(node.right.val);
        }
        
        dfs(node.left);
        dfs(node.right);
    }
}