export default {
    input: './tmp/esm5/ng-multiselect.js',
    output: {
        file: './dist/esm5/ng-multiselect.js',
        format: 'es'
    },
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/forms'
    ]
}