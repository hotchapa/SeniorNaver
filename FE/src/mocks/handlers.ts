import { rest } from "msw";

export const handlers = [
  rest.get("/test/places", (req, res, ctx) => {
    console.log("req", req);
    return res(
      ctx.json([
        {
          title: "title 1",
          image: "image 1",
          mapx: "x좌표",
          mapy: "y좌표",
        },
        {
          title: "title 2",
          image: "image 2",
          mapx: "x좌표",
          mapy: "y좌표",
        },
      ]),
      ctx.status(200),
    );
  }),
  rest.get("/test/jobs", (req, res, ctx) => {
    const response = {
      pageNo: 1,
      totalCount: 17,
      items: {
        item: [
          {
            acptKMthd: "이메일",
            deadline: "마감",
            emplymShpNm: "시간제일자리",
            jobId: "RECR_000000000013950",
            jobcls: "A08009",
            jobclsNm: "기타",
            recrtTitle: "[서울시립미술관 르누아르전] 전시장 지킴이 모집",
            workPlaceNm: "중구",
          },
          {
            acptMthd: "이메일",
            deadline: "마감 X",
            emplymShpNm: "시간제일자리",
            jobId: "RECR_000000000013951",
            jobclsNm: "기타",
            recrtTitle: "[서울시립박물관] 화장실 지킴이 모집",
            workPlaceNm: "북구",
          },
        ],
      },
    };
    const response2 = {
      pageNo: 1,
      totalCount: 46948,
      items: {
        item: [
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "K120252311010023",
            jobclsNm: null,
            recrtTitle: "[송도 크레셈] 지식정보단지 *(남녀무관)미화원* 모집",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "K131312311010030",
            jobclsNm: null,
            recrtTitle: "축산물 생산현장직 모집",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "K120252311010006",
            jobclsNm: null,
            recrtTitle: "[나나성형외과] 신논현역 도보1분 인근 성형외과 *워싱담당 미화* 모집 (1명)",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "KJK2002311010005",
            jobclsNm: null,
            recrtTitle: "[해솔1단지]실내 미화원",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "KJAS002311010002",
            jobclsNm: null,
            recrtTitle: "[덕소쌍용스윗닷홈리버] 아파트 경비원 모집",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "K151132311010038",
            jobclsNm: "사무보조",
            recrtTitle: "바른시스템(주) 본사 현장 관리 담당 직원 채용",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "K151152311010068",
            jobclsNm: null,
            recrtTitle: "생산관리 및 조립업무 가능자 모집 (화성정남)",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "KJKZ002311010011",
            jobclsNm: null,
            recrtTitle:
              "의정부 장암현대2차 아파트 경비반장/경비원 채용합니다.(장애인등록증 또는 장애인복지카드 소지자 우대)",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "K120252311010010",
            jobclsNm: null,
            recrtTitle: "[방배노인복지관] 사당역 인근 건물 미화원 1명",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "KJKN002311010011",
            jobclsNm: null,
            recrtTitle: "[망포동] 영통SK VIEW 아파트 분리수거 미화원 모집",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "K170052311010057",
            jobclsNm: "농림어업",
            recrtTitle: "대전대학교 취업지원관 직원 채용 공고",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "K150122311010071",
            jobclsNm: null,
            recrtTitle: "케이엠앤아이 경비직 모집",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "K151152311010124",
            jobclsNm: null,
            recrtTitle: "(주)리썸 에스앤에스 (삼성전자 수원) 주차관리 야간 격일교대 채용",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "K151232311010056",
            jobclsNm: null,
            recrtTitle: "서비스 예약, 상담, CS, 사무 직원 모집",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "K151422311010072",
            jobclsNm: null,
            recrtTitle: "환경 컨설턴트 모집",
            workPlaceNm: null,
          },
          {
            acptMthd: "방문",
            deadline: "접수중",
            emplymShpNm: "CM0105",
            jobId: "K151632311010067",
            jobclsNm: null,
            recrtTitle: "인력관리(경비/미화/시설 등) 및 영업관리 정직원 채용(서울/경기/인천 담당)",
            workPlaceNm: null,
          },
        ],
      },
    };

    // console.log(req.url.searchParams.get("workplace"), req.url.searchParams.get("keyword"));

    // if (req.url.searchParams.get("workplace") && req.url.searchParams.get("keyword"))
    //   return res(ctx.delay(1000), ctx.json(response), ctx.status(200));
    return res(ctx.delay(1000), ctx.json(response2), ctx.status(200));
  }),

  rest.get("/carousel", (req, res, ctx) => {
    return res(
      ctx.json({
        curationImages: [
          "https://newsimg-hams.hankookilbo.com/2023/10/30/20e18974-774c-4f89-b1f4-e3861bdab60f.jpg",
          "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
          "https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-into-the-june-sunflower-background-image_788302.jpg",
          "https://img.freepik.com/free-photo/the-red-or-white-cat-i-on-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=ais",
          "https://media.istockphoto.com/id/510690180/ko/%EC%82%AC%EC%A7%84/%EC%98%81%EA%B5%AD-%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4-%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%83%88%EB%81%BC-3-%EA%B0%9C%EC%9B%94.jpg?s=1024x1024&w=is&k=20&c=L7OQkkO6wurrMo6q294IEY3_g8Dt3VeXDFOKi-lUsrY=",
          "https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg",
          "https://www.shutterstock.com/image-photo/pomeranian-spitz-smiling-lying-house-260nw-2169338377.jpg",
          "https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtzjK-W7Xvt5lOIRBB4Zmvsg_CyzoOD4eqclHLMm-wQafndnqeEOZS7I0ANIHSEU7HEY&usqp=CAU",
          "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
        ],
        curationTexts: [
          "밤 되면 이 가수 공연장에 등장하는 '효도텐트'",
          "2번째 뉴스 기사 제목이 이렇게 길다면 어떡할건데에에에에에에에에ㅔ에에d",
          "3번째 뉴스 기사 제목",
          "4번째 뉴스 기사 제목",
          "5번째 뉴스 기사 제목",
          "6번째 뉴스 기사 제목",
          "7번째 뉴스 기사 제목",
          "8번째 뉴스 기사 제목",
          "9번째 뉴스 기사 제목",
          "10번째 뉴스 기사 제목",
        ],
        mzWords: [
          "탕후루",
          "알잘딱깔센",
          "어쩔티비",
          "어쩔티비4",
          "어쩔티비5",
          "어쩔티비6",
          "어쩔티비7",
          "어쩔티비8",
          "어쩔티비9",
          "어쩔티비10",
        ],
        places: [
          [
            "https://a.cdn-hotels.com/gdcs/production60/d893/3172bd6f-726c-4561-810f-deec13d17a6e.jpg?impolicy=fcrop&w=800&h=533&q=medium",
            "경복궁",
          ],
          [
            "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221214144619159434.jpg",
            "여기가핫풀2",
          ],
          [
            "https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-into-the-june-sunflower-background-image_788302.jpg",
            "여기가핫풀3",
          ],
          [
            "https://img.freepik.com/free-photo/the-red-or-white-cat-i-on-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=ais",
            "여기가핫풀4",
          ],
          [
            "https://media.istockphoto.com/id/510690180/ko/%EC%82%AC%EC%A7%84/%EC%98%81%EA%B5%AD-%EC%87%BC%ED%8A%B8%ED%97%A4%EC%96%B4-%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%83%88%EB%81%BC-3-%EA%B0%9C%EC%9B%94.jpg?s=1024x1024&w=is&k=20&c=L7OQkkO6wurrMo6q294IEY3_g8Dt3VeXDFOKi-lUsrY=",
            "여기가핫풀5",
          ],
          ["https://src.hidoc.co.kr/image/lib/2022/5/12/1652337370806_0.jpg", "여기가핫풀6"],
          [
            "https://www.shutterstock.com/image-photo/pomeranian-spitz-smiling-lying-house-260nw-2169338377.jpg",
            "여기가핫풀7",
          ],
          ["https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg", "여기가핫풀8"],
          [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtzjK-W7Xvt5lOIRBB4Zmvsg_CyzoOD4eqclHLMm-wQafndnqeEOZS7I0ANIHSEU7HEY&usqp=CAU",
            "여기가핫풀9",
          ],
          [
            "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
            "여기가핫풀10",
          ],
        ],
      }),
    );
  }),

  rest.get("/shows", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          pfId: "PF144567",
          pfName: "뮤지컬: 미녀와 야수",
          startDate: "2022-09-01",
          endDate: "2023-02-28",
          theater: "세종문화회관 대극장",
          poster: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF144567_220811_115527.jpg",
          genre: "뮤지컬",
          pfState: "공연예정",
          openRun: "N",
        },
        {
          pfId: "PF144568",
          pfName: "연극: 햄릿",
          startDate: "2022-11-10",
          endDate: "2023-01-08",
          theater: "대학로 올림픽 소극장",
          poster: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF144568_220811_115625.jpg",
          genre: "연극",
          pfState: "공연예정",
          openRun: "N",
        },
        {
          pfId: "PF144569",
          pfName: "뮤지컬: 레드북",
          startDate: "2022-12-20",
          endDate: "2023-01-15",
          theater: "세종문화회관 M 씨어터",
          poster: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF144569_220811_115732.jpg",
          genre: "뮤지컬",
          pfState: "공연예정",
          openRun: "N",
        },
        {
          pfId: "PF144570",
          pfName: "무용: 백조의 호수",
          startDate: "2022-11-15",
          endDate: "2022-12-10",
          theater: "아린아트홀",
          poster: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF144570_220811_115835.jpg",
          genre: "무용",
          pfState: "공연예정",
          openRun: "N",
        },
        {
          pfId: "PF144571",
          pfName: "연극: 블루스 인 더 나잇",
          startDate: "2022-11-25",
          endDate: "2022-12-18",
          theater: "대학로 흰토빈 소극장",
          poster: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF144571_220811_115936.jpg",
          genre: "연극",
          pfState: "공연예정",
          openRun: "N",
        },
        {
          pfId: "PF144572",
          pfName: "뮤지컬: 산타클로스",
          startDate: "2022-12-10",
          endDate: "2022-12-24",
          theater: "세종문화회관 대극장",
          poster: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF144572_220811_120036.jpg",
          genre: "뮤지컬",
          pfState: "공연예정",
          openRun: "N",
        },
        {
          pfId: "PF144573",
          pfName: "뮤지컬: 레미제라블",
          startDate: "2022-12-20",
          endDate: "2023-02-26",
          theater: "예술의 전당 오페라극장",
          poster: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF144573_220811_120138.jpg",
          genre: "뮤지컬",
          pfState: "공연예정",
          openRun: "N",
        },
        {
          pfId: "PF144574",
          pfName: "연극: 벤자민 버튼의 시간은 거꾸로 간다",
          startDate: "2023-01-10",
          endDate: "2023-02-05",
          theater: "세종문화회관 M 씨어터",
          poster: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF144574_220811_120239.jpg",
          genre: "연극",
          pfState: "공연예정",
          openRun: "N",
        },
        {
          pfId: "PF144575",
          pfName: "뮤지컬: 더 포레스토",
          startDate: "2023-01-13",
          endDate: "2023-02-26",
          theater: "씨어터 산",
          poster: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF144575_220811_120339.jpg",
          genre: "뮤지컬",
          pfState: "공연예정",
          openRun: "N",
        },
      ]),
    );
  }),

  rest.get("/showDetail", (req, res, ctx) => {
    return res(
      ctx.json({
        mt20id: "PF144565",
        prfnm: "아기돼지삼형제: 늑대숲 또옹돼지 원정대",
        prfpdfrom: "2018-04-07",
        prfpdto: "2023-11-26",
        fcltynm: "서연아트홀(구. 인아소극장) (서연아트홀(구. 인아소극장))",
        prfcast: " ",
        prfcrew: " ",
        prfruntime: "50분",
        prfage: "24개월 이상",
        entrpsnm: "지니아트랩",
        pcseguidance: "전석 30,000원",
        poster: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF144565_220811_114818.jpg",
        sty: " ",
        area: "서울특별시",
        genrenm: "뮤지컬",
        openrun: "Y",
        prfstate: "공연중",
        styUrlList: [
          "http://www.kopis.or.kr/upload/pfmIntroImage/PF_PF144565_220811_1148183.jpg",
          "http://www.kopis.or.kr/upload/pfmIntroImage/PF_PF144565_220811_1148182.jpg",
          "http://www.kopis.or.kr/upload/pfmIntroImage/PF_PF144565_220811_1148181.jpg",
        ],
        dtguidance:
          "토요일 ~ 일요일(11:20,12:00,12:50,13:30), HOL(11:20,11:30,12:00,12:50,13:30), 월요일(12:00)",
      }),
    );
  }),
];
