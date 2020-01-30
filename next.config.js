const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules');
// const withCSS = require('@zeit/next-css');
// const withSass = require('@zeit/next-sass');

module.exports = withPlugins([withTM],{
    exportTrailingSlash:true,
    exportPathMap:()=>{
        console.log("HEYE");
        return {'/':{page:'/'}}
    }
    //transpileModules:[]
})
/*
module.exports = {
    exportTrailingSlash:true,
    exportPathMap:()=>({
        '/':{page:'/'}
    })
}
*/