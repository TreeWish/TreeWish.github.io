---
title: 元组
date: 2023.7.5
---

元组是一种特殊的数组类型，它具有以下特征

<!-- more -->

1.  元组中的每个子元素类型都是确定的
2.  有预定义的长度

    ```ts
    type StringNumberPair = [string, number]
    const tuple: StringNumberPair
    function doSomething(pair: StringNumberPair) {
      const a = pair[0]
      const b = pair[1]
    }

    doSomething(["hello", 42])
    ```

```

```
