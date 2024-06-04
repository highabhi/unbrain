/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole: true,
    }
};

module.exports = withContentlayer({ ...nextConfig });
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     compiler: {
//       removeConsole: true,
//     },
//   };
  
//   module.exports = nextConfig;