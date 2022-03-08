To avoid the util related issue in uuidv4
in "node_modules > react_scripts > config > webpack.config.js"  inside "resolve"  add this line

fallback: {
        "util": require.resolve("util/")
},

and run "npm install util"