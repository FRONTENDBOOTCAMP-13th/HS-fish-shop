import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "index.html", // 기본 index.html
        landing: "src/components/landing/landing.html",
        profile: "src/components/profile/profile.html",
        profile-edit: "src/components/profile-edit/profile-edit.html",
        profile-edit-sub: "src/components/profile-edit-sub/profile-edit-sub.html",
      },
    },
  },
  appType: "mpa", // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
