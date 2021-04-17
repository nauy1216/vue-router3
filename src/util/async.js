/* @flow */

export function runQueue (queue: Array<?NavigationGuard>, fn: Function, cb: Function) {
  const step = index => {
    if (index >= queue.length) { // 结束
      cb()
    } else {
      if (queue[index]) { 
        fn(queue[index], () => {
          step(index + 1)
        })
      } else { // 如果queue[index]不存在， 执行下一轮
        step(index + 1)
      }
    }
  }
  step(0)
}
