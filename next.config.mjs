// @ts-check

 import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";
 export default (phase) => {
   const isDev = phase === PHASE_DEVELOPMENT_SERVER;
 @@ -9,12 +8,6 @@ export default (phase) => {
     experimental: {
       forceSwcTransforms: true,
     },
     output: "export",
     basePath: isDev ? undefined : "/TectrixMC",
     assetPrefix: isDev ? undefined : "/TectrixMC",
     images: {
       unoptimized: true,
     },
   };
   return nextConfig;
 };
