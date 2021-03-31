const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')

return gulp.src([
    './src/css/style.css'
])
.pipe(cleanCSS())
.pipe(gulp.dest('./public/css'))