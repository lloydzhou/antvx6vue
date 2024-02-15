## Antv X6 Vue
演示重复载入的问题

### 如何复现
1. git clone https://github.com/songday/antvx6vue.git
2. cd antvx6vue
3. npm i
4. npm run dev
5. 打开浏览器，并请求
6. 启用浏览器的`检查模式`
7. 点击页面上的`Go to Graph`按钮，跳转到另外一个页面，能看到`node loaded`显示了一次
8. 点击页面上的`Go to Home`按钮，返回
9. 再点击页面上的`Go to Graph`按钮，跳转到另外一个页面，能看到`node loaded`显示了多次
10. 点击页面上的`Go to Home`按钮，返回
11. 再点击页面上的`Go to Graph`按钮，跳转到另外一个页面，能看到`node loaded`显示了更多次
12. 以此往复，会看到到达`Graph`页面，打印`node loaded`的次数会成倍增加

