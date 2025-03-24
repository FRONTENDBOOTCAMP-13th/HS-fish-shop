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
        gnbland: "src/components/gnb-land/gnb-land.html",
        gnblogin: "src/components/gnb-login/gnb-login.html",
        gnbmain: "src/components/gnb-main/gnb-main.html",
        gnbschm: "src/components/gnb-sch-m/gnb-sch-m.html",
        gnbschpc: "src/components/gnb-sch-pc/gnb-sch-pc.html",
        historypage: "src/components/history-page/history-page.html",
        detailcomponents: "src/components/detail-page/detail-components.html",
        profile: "src/components/profile/profile.html",
        profileedit: "src/components/profile-edit/profile-edit.html",
        profileeditsub: "src/components/profile-edit-sub/profile-edit-sub.html",
        landing: "src/components/landing/landing.html",
        clone_modal: "src/components/clone-modal/clone-modal.html",
        // 아래부터 페이지입니다
        myHistory: "src/pages/my-history/my-history.html",
        programDetail: "src/pages/program-detail/program-detail.html",
        mobileSearch: "src/pages/mobile-search/mobile-search.html",
        movie_page: "src/pages/movie-page/movie-page.html",
        drama_page: "src/pages/drama-page/drama-page.html",
        main_page: "src/pages/main-page/main-page.html",
        profile: "src/pages/profile-page/profile-page.html",
        profileedit: "src/pages/profile-edit-page/profile-edit-page.html",
        profileeditsub:
          "src/pages/profile-edit-sub-page/profile-edit-sub-page.html",
        landing: "src/pages/landing-page/landing-page.html",
        login: "src/pages/login-page/login-page.html",
        findPw: "src/pages/findPw-page/findPw-page.html",
        findId: "src/pages/findId-page/findId-page.html",
        singUp: "src/pages/signup-page/signup-page.html",
        intro: "intro.html",
      },
    },
  },
  appType: "mpa", // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
