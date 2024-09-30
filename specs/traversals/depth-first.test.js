// -> Call our method (let's call it preorderTraverse) on the root node, 8.
// -> Add 8 to our array.
// -> Call preorderTraverse on the left child, 3.
// -> Add 3 to our array.
// -> Call preorderTraverse on the left child, 1.
// -> Add 1 to our array.
// -> Has no children, returns.
// -> Going back up the tree, we'll call preorderTraverse on 6.
// -> Add 6 to our array.
// -> Call preorderTraverse on the left child, 4.
// -> Add 4 to our array.
// -> No children, returns.
// -> Going back up the tree, we'll call preorderTraverse on 7.
// -> Add 7 to the array.
// -> So on and so forth.


// Giving back an array and the difference is the order that you give the values back ing 
// Preorder:
// valuing left first till lowest left then right potentially on the way up but not necessarily

// preorder
// [8, 3, 1, 6, 4, 7, 10, 14, 13]

// inorder
// [1, 3, 5, 6, 7, 8, 10, 13, 14]

// postorder
// [1, 4, 7, 6, 3, 13, 14, 10, 8]

const preorderTraverse = (node, array) => {
  array.push(node.value);

  if(node.left) {
    preorderTraverse(node.left, array);
  }

  if(node.right) {
    preorderTraverse(node.right, array);
  }

  return array;
};

const inorderTraverse = (node, array) => {
  if(node.left) {
    inorderTraverse(node.left, array);
  }
  
  array.push(node.value)

  if(node.right) {
    inorderTraverse(node.right, array);
  }

  return array;
};

const postorderTraverse = (node, array) => {
  if(node.left) {
    postorderTraverse(node.left, array);
  }

  if(node.right) {
    postorderTraverse(node.right, array);
  }

  array.push(node.value);


  return array;
};

// unit tests
// do not modify the below code

describe("depth-first traversals", function () {
  const tree = {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: 12,
      left: {
        value: 10,
        left: {
          value: 9,
          left: null,
          right: null
        },
        right: {
          value: 11,
          left: null,
          right: null
        }
      }
    }
  };

  it("preorderTraverse", () => {
    expect(preorderTraverse(tree, [])).toEqual([
      8,
      4,
      3,
      2,
      5,
      7,
      6,
      12,
      10,
      9,
      11
    ]);
  });

  it("inorderTraverse", () => {
    expect(inorderTraverse(tree, [])).toEqual([
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ]);
  });

  it("postorderTraverse", () => {
    expect(postorderTraverse(tree, [])).toEqual([
      2,
      3,
      6,
      7,
      5,
      4,
      9,
      11,
      10,
      12,
      8
    ]);
  });
});
