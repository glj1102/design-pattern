class TreeNode {
    private _name: string;
    private _parent: TreeNode;
    private _children: Array<TreeNode> = new Array<TreeNode>();

    constructor(name: string) {
        this._name = name;
    }

    public get name() {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get parent() {
        return this._parent;
    }

    public set parent(parent: TreeNode) {
        this._parent = parent;
    }
    
    public add(node: TreeNode) {
        this._children.push(node);
    }

    public remove(node: TreeNode) {
        this._children.splice(this._children.indexOf(node));
    }

    public getChildren() {
        return this._children;
    }
}

class Tree {
    public root: TreeNode;

    constructor(name: string) {
        this.root = new TreeNode(name);
    }
}

{
    const tree: Tree = new Tree(`A`);
    const nodeB: TreeNode = new TreeNode(`B`);
    const nodeC: TreeNode = new TreeNode(`C`);

    nodeB.add(nodeC);
    tree.root.add(nodeB);

    console.log(`build the tree finished`);
    console.log(`tree.root:====`);
    console.log(tree.root);
    console.log(`nodeB:====`);
    console.log(nodeB);
}