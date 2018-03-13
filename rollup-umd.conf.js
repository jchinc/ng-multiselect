export default {
    name: 'ngMultiselect',
    input: './tmp/esm5/ng-multiselect.js',
    output: {
        file: './dist/bundles/ng-multiselect.umd.js',
        format: 'umd',
        globals: {
            '@angular/core': 'ng.core',
            '@angular/common': 'ng.common',
            '@angular/forms': 'ng.forms'
        }
    },
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/forms'
    ]
}