# taro-dev
taro开发调研

### 注意事项
```javascript
1、不要在调用 this.setState 时使用 this.state
this.setState({
  value: this.state.value + 1
})   // ✗ 错误

this.setState(prevState => ({ value: prevState.value + 1 }))    // ✓ 正确
```