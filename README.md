# taro-dev
taro开发调研

### 注意事项
```javascript
如果要修改state中的值并且依赖之前state中的值时要怎么做

例如：
this.setState({
  value: this.state.value + 1
})   // ✗ 错误

this.setState(prevState => ({ value: prevState.value + 1 }))    // ✓ 正确
```
