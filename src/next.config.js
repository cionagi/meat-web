const path = require('path')

module.exports = {
    distDir: 'nextjs',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    },
    experimental: {
        sprFlushToDisk: false,
    },
};
