import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "index.html", // 기본 index.html
        main_visual: "src/components/main-visual/main-visual.html",
        main_card: "src/components/main-card/main-card.html",
        footer: "src/components/footer/footer.html",
        category_contnet_page:
          "src/components/category-contnet-page/category-contnet-page.html",
        main_test: "src/components/main-nav/main-nav.html",
      },
    },
  },
  appType: "mpa", // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
