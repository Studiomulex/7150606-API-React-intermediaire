import createError from 'http-errors'
import express, { json, urlencoded} from 'express'
import { join } from 'path'
import cookieParser from 'cookie-parser'
import indexRouter from './routes/index'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
const app = express()

import cors from 'cors'

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors())
// view engine setup
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(join(__dirname, 'public')))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())
app.use((join(__dirname, 'public')))

app.use(function(req, res, next){
	setTimeout(next, Math.floor( ( Math.random() * 2000 ) + 100 ) )
});

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404))
})

// error handler
app.use(function (err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render('error')
})

export default app
