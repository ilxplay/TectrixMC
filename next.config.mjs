// @ts-check
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";
export default (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
    },
  };
  return nextConfig;
};
