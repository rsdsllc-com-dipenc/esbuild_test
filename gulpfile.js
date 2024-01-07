const gulp = require("gulp");
const concat = require("gulp-concat");

// Define an array variable for file paths
const jsFiles = ["alpha.js", "beta.js"];

gulp.task("combine-js", function () {
  return gulp.src(jsFiles).pipe(concat("out-gulp.js")).pipe(gulp.dest("dist"));
});

gulp.task("watch", function () {
  gulp.watch(jsFiles, gulp.series("combine-js"));
});

gulp.task("default", gulp.series("combine-js", "watch"));
