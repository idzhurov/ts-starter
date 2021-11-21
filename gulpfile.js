const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const debug = require("gulp-debug");
const ts = require("gulp-typescript");


function build(done) {
    const project = ts.createProject("tsconfig.json");
    const reporter = ts.reporter.fullReporter();

    project
        .src()
        .pipe(sourcemaps.init())
        .pipe(debug())
        .pipe(project(reporter))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("lib"));

    done();
}

gulp.task("default", build);
