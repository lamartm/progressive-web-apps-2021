const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

return gulp.src([
    './src/images/*.jpg'
])
.pipe(imagemin())
.pipe(gulp.dest('./public/images'))