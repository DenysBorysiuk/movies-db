import ghPages from 'gulp-gh-pages';

export const gh = () => {
  return app.gulp.src('./dist/**/*').pipe(ghPages());
};
