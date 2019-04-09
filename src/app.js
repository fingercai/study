import express from 'express'
import config from './config'
import nunjucks from 'nunjucks'
import indexRouter from './routes/index'
import advertRouter from './routes/advert'
import queryString from 'querystring'
import bodyParser from './middlewares/body-parser'
import errLog from './middlewares/error-log'

const app = express()

app.use('/node_modules', express.static(config.node_modules_path))
app.use('/public', express.static(config.public_path))

// 配置使用 nunjucks 模板引擎
// nunjucks 模板引擎没有对模板文件名的后缀名做特定限制
// 如果文件名是 a.html 则渲染的时候就需要传递 a.html
// 如果文件名是 b.nujs 则传递 b.nujs
// nunjucks 模板引擎默认会缓存输出过的文件
// 这里为了开发方便，所以把缓存禁用掉，可以实时的看到模板文件修改的变化
nunjucks.configure(config.viewPath, {
  autoescape: true,
  express: app,
  noCache: true
})

// 挂载解析表单 POST 请求体中间件
app.use(bodyParser)

// 挂载路由容器（路由容器中组织了网站功能处理路由中间件）
app.use(indexRouter)
app.use(advertRouter)

// 挂载全局错误处理中间件
app.use(errLog)

app.listen(3000, () => {
  console.log('server is running at port 3000...')
})
