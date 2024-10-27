interface Tree {
    value: number;
    child: Tree | null;
}
function createTree(depth: number): Tree | null{
    if (depth === 0) {
        return null;
    }

    return {
        value: depth,
        child: createTree(depth - 1)
    }
}
const tree = createTree(3)
console.log(tree)
