import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "index.html", // 기본 index.html
        gnbland: "src/components/gnb-land/gnb-land.html",
        gnblogin: "src/components/gnb-login/gnb-login.html",
        gnbmain: "src/components/gnb-main/gnb-main.html",
        gnbschm: "src/components/gnb-sch-m/gnb-sch-m.html",
        gnbschpc: "src/components/gnb-sch-pc/gnb-sch-pc.html",
        historypage: "src/components/history-page/history-page.html",
        detailcomponents: "src/components/detail-page/detail-coponents.html",
      },
    },
  },
  appType: "mpa", // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
