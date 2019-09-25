enum NodeTypeEnum {
    ImageFile = 'image',
    TextFile = 'text',
    Folder = 'folder',
}

// Node抽象类
export abstract class AbstractNode {
    protected name: string;
    protected type: NodeTypeEnum;
    protected children: AbstractNode[];

    public abstract add(node: AbstractNode): AbstractNode;
    public abstract getFileDeep(name: string): AbstractNode;
}
// 文件基础类
export abstract class BasicFile extends AbstractNode {
    public add (file: BasicFile): BasicFile {
        console.error('文件类型不支持添加');
        return this;
    }

    public getFileDeep (name: string): BasicFile {
        if (name === this.name) {
            return this;
        }
        return null;
    }
}

// 文件夹基础类
export abstract class BasicFolder extends AbstractNode {
    protected constructor () {
        super();
        this.type = NodeTypeEnum.Folder;
        this.children = [];
    }

    public add (file: AbstractNode): BasicFolder {
        this.children.push(file);
        return this;
    }

    public getFileDeep (name: string): AbstractNode {
        if (this.name === name) {
            return this;
        }
        for (let index = 0; index < this.children.length; index++) {
            const node = this.children[index].getFileDeep(name);
            if (node) {
                return node;
            }
        }
        return null;
    }
}

export default class SystemFolder extends BasicFolder{
    constructor(name){
        super();
        this.name = name;
    }
}

// 图片
export class ImageFile extends BasicFile {
    constructor (name: string) {
        super();
        this.name = name;
        this.type = NodeTypeEnum.ImageFile;
    }
}

// 文本
export class TextFile extends BasicFile {
    constructor (name: string) {
        super();
        this.name = name;
        this.type = NodeTypeEnum.TextFile;
    }
}


const initTree  = function(): SystemFolder {
    const root: SystemFolder = new SystemFolder('根文件夹');
    const folder2: SystemFolder = new SystemFolder('图像文件夹');
    const folder3: SystemFolder = new SystemFolder('文本文件夹');

    const image1: ImageFile = new ImageFile('a.jpg');
    const image2: ImageFile = new ImageFile('b.jpg');

    const text1: TextFile = new TextFile('a.txt');
    const text2: TextFile = new TextFile('b.txt');

    folder2.add(image1).add(image2);
    folder3.add(text1).add(text2);
    root.add(folder2).add(folder3);

    return root;
}

{
    const tree = initTree();
    const aJpg = tree.getFileDeep(`a.jpg`);
    console.log(aJpg);
}
