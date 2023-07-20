// 首頁-旅遊攻略
export default function (lang) {
  let ary
  switch (lang) {
    case 'en':
      ary = [
        {
          title: 'Explore the Charm of Tokyo and Taste Japanese Cuisine',
          tag: ['Japan Travel', 'Tokyo', 'Food'],
          date: '2023/6/5',
          img: './images/articles/p1.jpg'
        },
        {
          title: 'Taiwan Adventure: Explore the Night Market Culture in Taipei',
          tag: ['Taiwan Travel', 'Taipei', 'Night Market'],
          date: '2023/6/12',
          img: './images/articles/p2.jpg'
        },
        {
          title: 'Roaming Seoul: Discover the Traditional Beauty of South Korea',
          tag: ['South Korea Travel', 'Seoul', 'Traditional Culture'],
          date: '2023/6/18',
          img: './images/articles/p3.jpg'
        },
        {
          title: 'Culinary Journey: Taste the Unique Snacks of Taichung',
          tag: ['Taiwan Travel', 'Taichung', 'Food'],
          date: '2023/6/25',
          img: './images/articles/p4.jpg'
        },
        {
          title: 'Port Exploration: Discover the Maritime Culture of Macau',
          tag: ['Macau Travel', 'Port Culture', 'Maritime Culture'],
          date: '2023/6/9',
          img: './images/articles/p5.jpg'
        },
        {
          title: 'Japan Adventure: Explore Temples and Gardens in Kyoto',
          tag: ['Japan Travel', 'Kyoto', 'Temples Gardens'],
          date: '2023/6/15',
          img: './images/articles/p6.jpg'
        }
      ]
      break
    case 'kn':
      ary = [
        {
          title: '도쿄의 매력 탐방, 일본 음식 즐기기',
          tag: ['일본 여행', '도쿄', '음식'],
          date: '2023/6/5',
          img: './images/articles/p1.jpg'
        },
        {
          title: '대만 여행: 타이베이의 야시장 문화 탐험',
          tag: ['대만 여행', '타이베이', '야시장'],
          date: '2023/6/12',
          img: './images/articles/p2.jpg'
        },
        {
          title: '서울 돌아다니며 한국의 전통 아름다움 찾기',
          tag: ['한국 여행', '서울', '전통 문화'],
          date: '2023/6/18',
          img: './images/articles/p3.jpg'
        },
        {
          title: '음식 여행: 타이중 특색적인 음식 맛보기',
          tag: ['대만 여행', '타이중', '음식'],
          date: '2023/6/25',
          img: './images/articles/p4.jpg'
        },
        {
          title: '항구 여행: 마카오의 해양 문화 탐험',
          tag: ['마카오 여행', '항구 문화', '해양 문화'],
          date: '2023/6/9',
          img: './images/articles/p5.jpg'
        },
        {
          title: '일본 여행: 교토의 사원과 정원 탐방',
          tag: ['일본 여행', '교토', '사원 정원'],
          date: '2023/6/15',
          img: './images/articles/p6.jpg'
        }
      ]
      break
    case 'ja':
      ary = [
        {
          title: '東京の魅力を探索し、日本の美食を堪能する',
          tag: ['日本旅行', '東京', '美食'],
          date: '2023/6/5',
          img: './images/articles/p1.jpg'
        },
        {
          title: '台湾旅行：台北のナイトマーケット文化を探索する',
          tag: ['台湾旅行', '台北', 'ナイトマーケット'],
          date: '2023/6/12',
          img: './images/articles/p2.jpg'
        },
        {
          title: 'ソウルを散策し、韓国の伝統美を探求する',
          tag: ['韓国旅行', 'ソウル', '伝統文化'],
          date: '2023/6/18',
          img: './images/articles/p3.jpg'
        },
        {
          title: '美食の旅：台中の特色料理を堪能する',
          tag: ['台湾旅行', '台中', '美食'],
          date: '2023/6/25',
          img: './images/articles/p4.jpg'
        },
        {
          title: '港の旅：マカオの海洋文化を探索する',
          tag: ['マカオ旅行', '港の文化', '海洋文化'],
          date: '2023/6/9',
          img: './images/articles/p5.jpg'
        },
        {
          title: '日本の旅：京都の寺院と庭園を探索する',
          tag: ['日本旅行', '京都', '寺院庭園'],
          date: '2023/6/15',
          img: './images/articles/p6.jpg'
        }
      ]
      break
    default:
      ary = [
        {
          title: '探索東京的魅力，品味日本美食',
          tag: ['日本旅遊', '東京', '美食'],
          date: '2023/6/5',
          img: './images/articles/p1.jpg'
        },
        {
          title: '台灣之旅：探索台北的夜市文化',
          tag: ['台灣旅遊', '台北', '夜市'],
          date: '2023/6/12',
          img: './images/articles/p2.jpg'
        },
        {
          title: '漫遊首爾，尋找韓國的傳統之美',
          tag: ['韓國旅遊', '首爾', '傳統文化'],
          date: '2023/6/18',
          img: './images/articles/p3.jpg'
        },
        {
          title: '美食之旅：品味台中的特色小吃',
          tag: ['台灣旅遊', '台中', '美食'],
          date: '2023/6/25',
          img: './images/articles/p4.jpg'
        },
        {
          title: '港口之旅：探索澳門的海洋文化',
          tag: ['澳門旅遊', '港口文化', '海洋文化'],
          date: '2023/6/9',
          img: './images/articles/p5.jpg'
        },
        {
          title: '日本之旅：探索京都的寺廟與庭園',
          tag: ['日本旅遊', '京都', '寺廟庭園'],
          date: '2023/6/15',
          img: './images/articles/p6.jpg'
        }
      ]
      break
  }

  return ary
}
