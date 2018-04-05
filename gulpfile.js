const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', done => {
  gulp.src('*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
  done()
});

gulp.task('log', done => {
  console.log("DONE")
  done()
});

gulp.task('watch', () => {
  gulp.watch('*.scss', gulp.series('sass','log'));
})

gulp.task("default",
  gulp.series(
    'watch'
  )
);
