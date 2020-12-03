'use strict'

const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

sass.complier = require('node-sass')

function sassTask() {
    // code goes here
    return src('style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(dest('./'))
}

exports.default = function () {
    watch('*.scss', sassTask)
}

