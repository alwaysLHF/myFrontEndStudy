The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.






自上而下思考：
从根节点出发，可以选择偷根节点或者不偷：

偷根节点，最大值为：根节点值 + 从左子树出发最大值（不含左子树）+ 从右子树出发最大值（不含右子树）
不偷根节点，最大值为：从左子树出发最大值（含左子树）+ 从右子树出发最大值（含右子树）
最后比较两者，取较大值。
