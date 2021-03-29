const express = require('express')
const port = 3000

const { getData } = require('./public/js/api')
// const { loading } = require('./public/js/loader')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('public'))

app.get('/', function(req, res) {
	res.render('home', {
		pageTitle: `Home`
	})
})

app.get('/Curiosity', function(req, res) {
	// loading('active')
	getData('Curiosity')
		.then(d => {
			res.render('overview', { data: d } )
		})
})

app.get('/Curiosity/:id', function(req, res) {
	getData('Curiosity')
		.then(d => {
			res.render('detail', { 
				data: d,
				selectedImage: parseInt(req.params.id)
			} )
		})
})

app.get('/Perseverance', function(req, res) {
	// loading('active')
	getData('Perseverance')
		.then(d => {
			res.render('overview', { data: d } )
		})
})

app.get('/Perseverance/:id', function(req, res) {
	getData('Perseverance')
		.then(d => {
			res.render('detail', { 
				data: d,
				selectedImage: parseInt(req.params.id)
			} )
		})
})

app.get('/Spirit', function(req, res) {
	getData('Spirit')
		.then(d => {
			res.render('overview', { data: d } )
		})
})

app.get('/Opportunity', function(req, res) {
	getData('Opportunity')
		.then(d => {
			res.render('overview', { data: d } )
		})
})
app.get('/offline', function(req, res) {
			res.render('offline')
})

app.listen(port, function() {
	console.log(`Application started on port: ${port}`)
})
