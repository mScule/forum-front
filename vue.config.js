//import apiConfig from "@/api/api-config";

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { proxy: "http://localhost:8081/" }
})
