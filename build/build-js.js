const gulp = require('gulp')
const uglify = require('gulp-uglify')

return gulp.src([
    './src/js/*.js'
])

.pipe(uglify())
.pipe(gulp.dest('./public/js'))