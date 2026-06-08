// ================================
// 목 데이터 - 영화 목록
// ================================

import type { Movie } from "../types";

export const movies: Movie[] = [
  {
    id: 1,
    title: "인터스텔라",
    genre: "SF / 어드벤처",
    year: 2014,
    rating: 8.6,
    description:
      "지구 환경이 점점 악화되어 식량난에 허덕이는 가까운 미래, NASA의 전직 우주비행사 쿠퍼는 우연히 중력 이상 현상으로 비밀 NASA 기지를 발견하고 새로운 행성을 찾기 위한 우주 탐험대의 임무를 맡게 된다.",
    poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop",
    director: "크리스토퍼 놀란",
    cast: ["매튜 맥커너히", "앤 해서웨이", "제시카 차스테인"],
    runtime: 169,
  },
  {
    id: 2,
    title: "기생충",
    genre: "드라마 / 스릴러",
    year: 2019,
    rating: 8.5,
    description:
      "전원 백수인 기택 가족. 장남 기우는 우연한 기회로 부유한 박 사장 집 딸의 영어 과외 선생님으로 취업하게 된다. 이를 발판 삼아 온 가족이 박 사장 집에 취업하지만, 예상치 못한 사건이 벌어진다.",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
    director: "봉준호",
    cast: ["송강호", "이선균", "조여정", "최우식"],
    runtime: 132,
  },
  {
    id: 3,
    title: "어벤져스: 엔드게임",
    genre: "액션 / SF",
    year: 2019,
    rating: 8.4,
    description:
      "타노스의 핑거 스냅 이후 5년, 살아남은 어벤져스는 모든 것을 되돌릴 단 하나의 방법을 찾아낸다. 인류의 마지막 희망을 건 최후의 전쟁이 시작된다.",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop",
    director: "안소니 루소, 조 루소",
    cast: ["로버트 다우니 주니어", "크리스 에반스", "마크 러팔로"],
    runtime: 181,
  },
  {
    id: 4,
    title: "조커",
    genre: "드라마 / 스릴러",
    year: 2019,
    rating: 8.4,
    description:
      "고담시에서 코미디언을 꿈꾸는 아서 플렉. 정신 질환을 앓고 있는 그는 사회에 적응하지 못하고 도시 곳곳에서 무시와 냉대를 받는다. 점점 무너져 가는 그는 결국 악의 아이콘 조커로 변신한다.",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
    director: "토드 필립스",
    cast: ["호아킨 피닉스", "로버트 드니로", "재지 비츠"],
    runtime: 122,
  },
  {
    id: 5,
    title: "해리 포터와 마법사의 돌",
    genre: "판타지 / 어드벤처",
    year: 2001,
    rating: 7.6,
    description:
      "고아로 자라며 이모 가족에게 학대받던 해리 포터는 11세 생일에 마법사라는 사실을 알게 되고 호그와트 마법 학교에 입학한다. 학교에서 우정을 쌓고 마법을 배우며 어두운 세계의 비밀을 마주하게 된다.",
    poster: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop",
    director: "크리스 콜럼버스",
    cast: ["다니엘 래드클리프", "엠마 왓슨", "루퍼트 그린트"],
    runtime: 152,
  },
  {
    id: 6,
    title: "타이타닉",
    genre: "로맨스 / 드라마",
    year: 1997,
    rating: 7.8,
    description:
      "1912년 타이타닉 호에 승선한 귀족 처녀 로즈와 가난한 화가 잭이 사랑에 빠진다. 하지만 선박이 빙산과 충돌하며 비극이 시작된다.",
    poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=600&fit=crop",
    director: "제임스 카메론",
    cast: ["레오나르도 디카프리오", "케이트 윈슬렛"],
    runtime: 194,
  },
  {
    id: 7,
    title: "매트릭스",
    genre: "SF / 액션",
    year: 1999,
    rating: 8.7,
    description:
      "평범한 프로그래머 네오는 자신이 살고 있는 세계가 실제가 아닌 컴퓨터 프로그램에 의해 만들어진 가상 현실이라는 충격적인 사실을 알게 된다.",
    poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop",
    director: "워쇼스키 자매",
    cast: ["키아누 리브스", "로렌스 피시번", "캐리앤 모스"],
    runtime: 136,
  },
  {
    id: 8,
    title: "라라랜드",
    genre: "뮤지컬 / 로맨스",
    year: 2016,
    rating: 8.0,
    description:
      "꿈을 향해 나아가는 재즈 피아니스트 세바스찬과 배우 지망생 미아가 LA에서 사랑에 빠진다. 그러나 각자의 꿈을 쫓으면서 두 사람은 갈림길에 서게 된다.",
    poster: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=600&fit=crop",
    director: "다미엔 셔젤",
    cast: ["라이언 고슬링", "엠마 스톤"],
    runtime: 128,
  },
];

export const genres = ["전체", "SF", "액션", "드라마", "로맨스", "판타지", "스릴러", "어드벤처", "뮤지컬"];
