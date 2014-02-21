
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    pandoc = require('gulp-pandoc');


gulp.task('default',
    function() {
        gulp.src('./index.md')
            .pipe(pandoc({
                from: 'markdown',
                to: 'slidy',
                ext: '.html',
                args: [
                        '--standalone',
                        '--include-in-header=include-head',
                        '--include-after-body=include-end',
                        '--highlight-style', 'zenburn'
                   ]
            }))
            .pipe(gulp.dest('./'));
    }
);

workingFiles = [
    './index.md',
    './scripts/**/*',
    './styles/**/*'
];

gulp.task('dev', ['default'], function() {
    gulp.watch(workingFiles,['default']);
});
