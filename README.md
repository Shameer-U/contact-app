>>>     To avoid the util related issue in uuidv4
        in "node_modules > react_scripts > config > webpack.config.js"  inside "resolve"  add this line

        fallback: {
                "util": require.resolve("util/")
        },

        and run "npm install util"


>>>    "server-api" folder contains the code for "json-server". To make this project (i.e, contact-app) work,
        move the "server-api"  folder outside and run the "server-api" also with "npm start"
