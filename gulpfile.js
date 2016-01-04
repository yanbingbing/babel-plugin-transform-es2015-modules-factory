var babel   = require("gulp-babel");
var gulp    = require("gulp");

gulp.task("default", ["build"]);

gulp.task("build", function () {
  return gulp.src("./src/index.js")
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});