import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "index.html", // 기본 index.html
        ldgnb: "src/components/ldgnb/ldgnb.html",
        mgnb: "src/components/mgnb/mgnb.html",
        gnbsch: "src/components/gnb-sch/gnb-sch.html",
      },
    },
  },
  appType: "mpa", // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
