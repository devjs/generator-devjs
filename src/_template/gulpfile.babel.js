import gulp from 'gulp';

<% if (babel) { %>
import babel from 'gulp-babel';
import del from 'del';
gulp.task('clean:javascript', () => del(['out/**.js']))
gulp.task('build:javascript', () => {
  return gulp.src('src/**.js', { base: 'src' })
    .pipe(babel())
    .pipe(gulp.dest('out'));
});
<% } if (eslint) { %>
import eslint from 'gulp-eslint';
gulp.task('lint:javascript', () => {
  return gulp.src('src/**.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
<% } %>