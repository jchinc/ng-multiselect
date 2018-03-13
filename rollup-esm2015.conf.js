export default {
    input: './tmp/esm2015/ng-multiselect.js',
    output: {
        file: './dist/esm2015/ng-multiselect.js',
        format: 'es'
    },
    external:[
        '@angular/core',
        '@angular/common',
        '@angular/forms'
    ]
}