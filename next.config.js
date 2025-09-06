/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Evita que el build falle si hay errores de ESLint en producción
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Evita que el build falle si hay errores de Typescript en producción
    ignoreBuildErrors: false, // (Pon en true solo si quieres ignorarlos)
  },
};

module.exports = nextConfig;
