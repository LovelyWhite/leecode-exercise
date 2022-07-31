import java.lang.reflect.Array;
import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

/*
    迭代算法，主要是利用了栈来保存每次访问过的节点。
 */
class Solution {

    public List<Integer> preorderTraversal(TreeNode root) {
        TreeNode _root = root;
        List<Integer> rt = new ArrayList<>();
        Stack<TreeNode> visit = new Stack<>();
        if(_root == null) return  rt;

        while(_root!=null||!visit.empty()){
            if(_root!=null) {
                rt.add(_root.val);
                visit.push(_root);
                _root = _root.left;
            }
            else{
                _root = visit.pop();
                _root = _root.right;
            }
        }
        return rt;
    }

    public List<Integer> inorderTraversal(TreeNode root) {
        TreeNode _root = root;
        List<Integer> rt = new ArrayList<>();
        Stack<TreeNode> visit = new Stack<>();
        if(_root == null) return  rt;

        while(_root!=null||!visit.empty()){
            if(_root!=null){
                visit.push(_root);
                _root = _root.left;
            }
            else {
                _root = visit.pop();
                rt.add(_root.val);
                _root = _root.right;
            }
        }
        return rt;
    }
    public List<Integer> postorderTraversal(TreeNode root) {
        TreeNode _root = root;
        List<Integer> temp = new ArrayList<>();
        List<Integer> rt = new ArrayList<>();
        Stack<TreeNode> visit = new Stack<>();
        if(_root == null) return  rt;

        while(_root!=null||!visit.empty()){
            if(_root!=null) {
                rt.add(_root.val);
                visit.push(_root);
                _root = _root.right;
            }
            else{
                _root = visit.pop();
                _root = _root.left;
            }
        }
        int size = rt.size();
        while (size>0){
            temp.add(rt.get(size-1));
            size --;
        }
        return temp;
    }

    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> rt = new ArrayList<>();
        Queue<TreeNode> queue = new LinkedList<>();
        if(root==null) return rt;
        queue.offer(root);
        while (queue.size()>0){
            int size = queue.size();
            List<Integer> level = new ArrayList<>();
            for(int i = 0;i<size;i++){
                TreeNode treeNode =  queue.poll();
                if(treeNode!=null){
                    if(treeNode.left!=null){
                        queue.offer(treeNode.left);
                    }
                    if(treeNode.right!=null){
                        queue.offer(treeNode.right);
                    }
                    level.add(treeNode.val);
                }
            }
            rt.add(level);
        }
        return rt;
    }
    public int maxDepth(TreeNode root) {
        if(root==null) return 0;
        int leftDepth = maxDepth(root.left);
        int rightDepth = maxDepth(root.right);
        int deep = Math.max(leftDepth,rightDepth)+1;
        return deep;
    }
    public boolean isSymmetric(TreeNode root) {
        if(root==null){
            return true;
        }
        else {
            return isSame(root.left,root.right);
        }
    }
    public boolean isSame(TreeNode left,TreeNode right){
        if(left==null || right == null){
            return left == null && right == null;
        }
        else {
            return left.val == right.val && isSame(left.left,right.right) && isSame(left.right,right.left);
        }
    }

    //递归减去每个节点值
    public boolean hasPathSum(TreeNode root, int sum) {
        if(root == null) return false;
        int t = sum - root.val;
        if(root.left == null && root.right == null){
            return t == 0;
        }
        return hasPathSum(root.left,t) || hasPathSum(root.right,t);
    }
    //preorder[] 前序遍历数组 inorder[] 中序遍历数组
    public static TreeNode buildTree(int[] preorder, int[] inorder) {
        for (int i = 0; i < inorder.length; i++) {
            if(inorder[i] == preorder[0]){
                TreeNode root = new TreeNode(preorder[0]);
                //构造左子树
                if(i!=0) {
                    int[] _pre = new int[i];
                    int[] _ino = new int[i];
                    for(int j = 0;j<i;j++){
                        _pre[j] = preorder[j+1];
                        _ino[j] = inorder[j];
                    }
                    root.left = buildTree(_pre,_ino);
                }
                //构造右子树
                if(i!=inorder.length-1){
                    int[] _pre = new int[inorder.length-i-1];
                    int[] _ino = new int[inorder.length-i-1];
                    for(int j = 0;j<inorder.length-i-1;j++){
                        _pre[j] = preorder[i+j+1];
                        _ino[j] = inorder[i+j+1];
                    }
                    root.right = buildTree(_pre,_ino);
                }
                return root;
            }
        }
        return null;
    }
    //inorder[] 中序遍历数组 preorder[] 后序遍历数组
    public static TreeNode  buildTree1(int[] inorder, int[] postorder) {
        for (int i = 0; i < inorder.length; i++) {
            if(inorder[i] == postorder[postorder.length-1]){
                TreeNode root = new TreeNode(postorder[postorder.length-1]);
                //构造左子树
                if(i!=0) {
                    int[] _ino = new int[i];
                    int[] _pos = new int[i];
                    for(int j = 0;j< i ;j++){
                        _ino[j] = inorder[j];
                        _pos[j] = postorder[j];
                    }
                    System.out.println(_ino);
                    root.left = buildTree1(_ino,_pos);
                }
                //构造右子树
                if(i!=inorder.length-1){
                    int[] _ino = new int[inorder.length-i-1];
                    int[] _pos = new int[inorder.length-i-1];
                    for(int j = 0;j<inorder.length-i-1;j++){
                        _ino[j] = inorder[i+j+1];
                        _pos[j] = postorder[i+j];

                    }
                    root.right = buildTree1(_ino,_pos);
                }
                return root;
            }
        }
        return null;
    }

    public static void main(String[] args) {
      TreeNode treeNode =   buildTree1(new int[]{9,3,15,20,7},new int[]{9,15,7,20,3});
        System.out.println (treeNode.val);
    }
}