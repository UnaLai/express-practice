# express-practice
## 目的：練習使用 express 處理不同 route 的請求
## 大致步驟如下：
1. 初始化專案
  包含 npm init、.gitignore、nodemon 安裝等
2. 安裝 express 並使用
3. 使用 use function 創建基本的 req 處理
  * use function 可以傳入一個 function，當作 callback ，被觸發時，會執行
  * function 有三個參數 -> req,res,next
4. 加入 router 處理
