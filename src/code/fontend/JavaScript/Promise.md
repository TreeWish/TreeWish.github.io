---
date: 2023-7-14
category:
  - 前端
tag:
  - JavaScript
  - Promise

---

# Promise 总结

## 1.  promise 的三种状态

> promise 只有三种状态，`状态一旦改变无法更改`。也就是初始化之后 promise 不是 resolved 就是 rejected

1. pending 

   - 准备

   - pending 只有初始打印的时候才能看到

2. resolved 

   - 成功

   - resolved  的结果 只能被 then 调用

3. rejected

   - 失败

   - rejected 的结果只能被 catch 调用

## 2. then、catch 方法

> then 和 catch 方法都会返回一个`新的 promise` ，新的 promise 的状态根据 then/catch 的执行结果确定。
>
> 只要 then/catch 方法中`没有报错`，那么返回的 promise  状态都为 resolved，反正则为 rejected。

```js
script start
async1 start 
async2
script end
async1 end
async3
async 1 and 2
```

