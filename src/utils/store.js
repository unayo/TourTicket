// 首頁-店家資訊*8
export function utilsTopstore(lang) {
  let ary
  switch (lang) {
    case 'en':
      ary = [
        {
          name: 'Snack Paradise',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: 'No. 1, Zhongshan Road, Zhongzheng District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Specialty Snack Shop',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: 'No. 2, Anle Road, Anle District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Food Paradise',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: 'No. 3, Xinyi Road, Xinyi District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Souvenir Store',
          category: 'Souvenirs',
          phone: '02-4567-8901',
          img: './images/store/2-1.jpg',
          addr: "No. 4, Ren'ai Road, Ren'ai District, Keelung City",
          url: 'https://www.example.com'
        },
        {
          name: 'Gift Shop',
          category: 'Souvenirs',
          phone: '02-5678-9012',
          img: './images/store/2-2.jpg',
          addr: 'No. 5, Zhongshan Road, Zhongshan District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Specialty Souvenir Shop',
          category: 'Souvenirs',
          phone: '02-6789-0123',
          img: './images/store/2-3.jpg',
          addr: 'No. 6, Anle Road, Anle District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Ticket Sales for Attractions',
          category: 'Tickets',
          phone: '02-7890-1234',
          img: './images/store/3-1.jpg',
          addr: 'No. 7, Xinyi Road, Xinyi District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Ticket Center',
          category: 'Tickets',
          phone: '02-8901-2345',
          img: './images/store/3-2.jpg',
          addr: "No. 8, Ren'ai Road, Ren'ai District, Keelung City",
          url: 'https://www.example.com'
        },
        {
          name: 'Tourist Attraction Ticket Store',
          category: 'Tickets',
          phone: '02-9012-3456',
          img: './images/store/3-3.jpg',
          addr: 'No. 9, Zhongzheng Road, Zhongzheng District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Transportation Ticket Center',
          category: 'Traffic',
          phone: '02-0123-4567',
          img: './images/store/4-1.jpg',
          addr: 'No. 10, Anle Road, Anle District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Public Transportation Services',
          category: 'Traffic',
          phone: '02-1234-5678',
          img: './images/store/4-2.jpg',
          addr: 'No. 11, Xinyi Road, Xinyi District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Ticket Sales Point',
          category: 'Traffic',
          phone: '02-2345-6789',
          img: './images/store/4-3.jpg',
          addr: "No. 12, Ren'ai Road, Ren'ai District, Keelung City",
          url: 'https://www.example.com'
        }
      ]
      break
    case 'kn':
      ary = [
        {
          name: '간식의 낙원',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: '기릉시 중정구 중산로 1번지',
          url: 'https://www.example.com'
        },
        {
          name: '특색있는 간식 가게',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: '기릉시 안락구 안락로 2번지',
          url: 'https://www.example.com'
        },
        {
          name: '음식 천국',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: '기릉시 신의구 신의로 3번지',
          url: 'https://www.example.com'
        },
        {
          name: '기념품 전문점',
          category: 'Souvenirs',
          phone: '02-4567-8901',
          img: './images/store/2-1.jpg',
          addr: '기릉시 인애구 인애로 4번지',
          url: 'https://www.example.com'
        },
        {
          name: '기념품 가게',
          category: 'Souvenirs',
          phone: '02-5678-9012',
          img: './images/store/2-2.jpg',
          addr: '기릉시 중산구 중산로 5번지',
          url: 'https://www.example.com'
        },
        {
          name: '특색있는 기념품 상점',
          category: 'Souvenirs',
          phone: '02-6789-0123',
          img: './images/store/2-3.jpg',
          addr: '기릉시 안락구 안락로 6번지',
          url: 'https://www.example.com'
        },
        {
          name: '관광티켓 전문점',
          category: 'Tickets',
          phone: '02-7890-1234',
          img: './images/store/3-1.jpg',
          addr: '기릉시 신의구 신의로 7번지',
          url: 'https://www.example.com'
        },
        {
          name: '티켓 센터',
          category: 'Tickets',
          phone: '02-8901-2345',
          img: './images/store/3-2.jpg',
          addr: '기릉시 인애구 인애로 8번지',
          url: 'https://www.example.com'
        },
        {
          name: '관광지 티켓 판매',
          category: 'Tickets',
          phone: '02-9012-3456',
          img: './images/store/3-3.jpg',
          addr: '기릉시 중정구 중산로 9번지',
          url: 'https://www.example.com'
        },
        {
          name: '교통티켓 센터',
          category: 'Traffic',
          phone: '02-0123-4567',
          img: './images/store/4-1.jpg',
          addr: '기릉시 안락구 안락로 10번지',
          url: 'https://www.example.com'
        },
        {
          name: '공공 교통 서비스',
          category: 'Traffic',
          phone: '02-1234-5678',
          img: './images/store/4-2.jpg',
          addr: '기릉시 신의구 신의로 11번지',
          url: 'https://www.example.com'
        },
        {
          name: '차표 판매소',
          category: 'Traffic',
          phone: '02-2345-6789',
          img: './images/store/4-3.jpg',
          addr: '기릉시 인애구 인애로 12번지',
          url: 'https://www.example.com'
        }
      ]
      break
    case 'ja':
      ary = [
        {
          name: 'スナックパラダイス',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: '基隆市中正区中山路1号',
          url: 'https://www.example.com'
        },
        {
          name: '特色軽食店',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: '基隆市安樂区安樂路2号',
          url: 'https://www.example.com'
        },
        {
          name: 'フードパラダイス',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: '基隆市信義区信義路3号',
          url: 'https://www.example.com'
        },
        {
          name: '記念品専門店',
          category: 'Souvenirs',
          phone: '02-4567-8901',
          img: './images/store/2-1.jpg',
          addr: '基隆市仁愛区仁愛路4号',
          url: 'https://www.example.com'
        },
        {
          name: 'お土産ショップ',
          category: 'Souvenirs',
          phone: '02-5678-9012',
          img: './images/store/2-2.jpg',
          addr: '基隆市中山区中山路5号',
          url: 'https://www.example.com'
        },
        {
          name: '特色記念品店',
          category: 'Souvenirs',
          phone: '02-6789-0123',
          img: './images/store/2-3.jpg',
          addr: '基隆市安樂区安樂路6号',
          url: 'https://www.example.com'
        },
        {
          name: '観光地チケット専門店',
          category: 'Tickets',
          phone: '02-7890-1234',
          img: './images/store/3-1.jpg',
          addr: '基隆市信義区信義路7号',
          url: 'https://www.example.com'
        },
        {
          name: 'チケットセンター',
          category: 'Tickets',
          phone: '02-8901-2345',
          img: './images/store/3-2.jpg',
          addr: '基隆市仁愛区仁愛路8号',
          url: 'https://www.example.com'
        },
        {
          name: '観光スポットのチケット販売',
          category: 'Tickets',
          phone: '02-9012-3456',
          img: './images/store/3-3.jpg',
          addr: '基隆市中正区中山路9号',
          url: 'https://www.example.com'
        },
        {
          name: '交通チケットセンター',
          category: 'Traffic',
          phone: '02-0123-4567',
          img: './images/store/4-1.jpg',
          addr: '基隆市安樂区安樂路10号',
          url: 'https://www.example.com'
        },
        {
          name: '公共交通サービス',
          category: 'Traffic',
          phone: '02-1234-5678',
          img: './images/store/4-2.jpg',
          addr: '基隆市信義区信義路11号',
          url: 'https://www.example.com'
        },
        {
          name: '切符販売所',
          category: 'Traffic',
          phone: '02-2345-6789',
          img: './images/store/4-3.jpg',
          addr: '基隆市仁愛区仁愛路12号',
          url: 'https://www.example.com'
        }
      ]
      break
    default:
      ary = [
        {
          name: '小吃樂園',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: '基隆市中正區中山路1號',
          url: 'https://www.example.com'
        },
        {
          name: '特色小吃坊',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: '基隆市安樂區安樂路2號',
          url: 'https://www.example.com'
        },
        {
          name: '美食天地',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: '基隆市信義區信義路3號',
          url: 'https://www.example.com'
        },
        {
          name: '紀念品專賣店',
          category: 'Souvenirs',
          phone: '02-4567-8901',
          img: './images/store/2-1.jpg',
          addr: '基隆市仁愛區仁愛路4號',
          url: 'https://www.example.com'
        },
        {
          name: '伴手禮商店',
          category: 'Souvenirs',
          phone: '02-5678-9012',
          img: './images/store/2-2.jpg',
          addr: '基隆市中山區中山路5號',
          url: 'https://www.example.com'
        },
        {
          name: '特色紀念品店',
          category: 'Souvenirs',
          phone: '02-6789-0123',
          img: './images/store/2-3.jpg',
          addr: '基隆市安樂區安樂路6號',
          url: 'https://www.example.com'
        },
        {
          name: '景點門票專賣',
          category: 'Tickets',
          phone: '02-7890-1234',
          img: './images/store/3-1.jpg',
          addr: '基隆市信義區信義路7號',
          url: 'https://www.example.com'
        },
        {
          name: '票券中心',
          category: 'Tickets',
          phone: '02-8901-2345',
          img: './images/store/3-2.jpg',
          addr: '基隆市仁愛區仁愛路8號',
          url: 'https://www.example.com'
        },
        {
          name: '旅遊景點售票',
          category: 'Tickets',
          phone: '02-9012-3456',
          img: './images/store/3-3.jpg',
          addr: '基隆市中正區中山路9號',
          url: 'https://www.example.com'
        },
        {
          name: '交通票券中心',
          category: 'Traffic',
          phone: '02-0123-4567',
          img: './images/store/4-1.jpg',
          addr: '基隆市安樂區安樂路10號',
          url: 'https://www.example.com'
        },
        {
          name: '公共交通服務',
          category: 'Traffic',
          phone: '02-1234-5678',
          img: './images/store/4-2.jpg',
          addr: '基隆市信義區信義路11號',
          url: 'https://www.example.com'
        },
        {
          name: '車票售賣點',
          category: 'Traffic',
          phone: '02-2345-6789',
          img: './images/store/4-3.jpg',
          addr: '基隆市仁愛區仁愛路12號',
          url: 'https://www.example.com'
        }
      ]
      break
  }

  return ary
}

// 首頁-店家資訊 all
export function utilsStoreAll(lang) {
  let ary
  switch (lang) {
    case 'en':
      ary = [
        {
          name: 'Snack Paradise',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: 'No. 1, Zhongshan Road, Zhongzheng District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Specialty Snack Shop',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: 'No. 2, Anle Road, Anle District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Food Paradise',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: 'No. 3, Xinyi Road, Xinyi District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Snack Paradise',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: 'No. 1, Zhongshan Road, Zhongzheng District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Specialty Snack Shop',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: 'No. 2, Anle Road, Anle District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Food Paradise',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: 'No. 3, Xinyi Road, Xinyi District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Specialty Snack Shop',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: 'No. 2, Anle Road, Anle District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Food Paradise',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: 'No. 3, Xinyi Road, Xinyi District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Souvenir Store',
          category: 'Souvenirs',
          phone: '02-4567-8901',
          img: './images/store/2-1.jpg',
          addr: "No. 4, Ren'ai Road, Ren'ai District, Keelung City",
          url: 'https://www.example.com'
        },
        {
          name: 'Gift Shop',
          category: 'Souvenirs',
          phone: '02-5678-9012',
          img: './images/store/2-2.jpg',
          addr: 'No. 5, Zhongshan Road, Zhongshan District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Specialty Souvenir Shop',
          category: 'Souvenirs',
          phone: '02-6789-0123',
          img: './images/store/2-3.jpg',
          addr: 'No. 6, Anle Road, Anle District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Ticket Sales for Attractions',
          category: 'Tickets',
          phone: '02-7890-1234',
          img: './images/store/3-1.jpg',
          addr: 'No. 7, Xinyi Road, Xinyi District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Ticket Center',
          category: 'Tickets',
          phone: '02-8901-2345',
          img: './images/store/3-2.jpg',
          addr: "No. 8, Ren'ai Road, Ren'ai District, Keelung City",
          url: 'https://www.example.com'
        },
        {
          name: 'Tourist Attraction Ticket Store',
          category: 'Tickets',
          phone: '02-9012-3456',
          img: './images/store/3-3.jpg',
          addr: 'No. 9, Zhongzheng Road, Zhongzheng District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Transportation Ticket Center',
          category: 'Traffic',
          phone: '02-0123-4567',
          img: './images/store/4-1.jpg',
          addr: 'No. 10, Anle Road, Anle District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Public Transportation Services',
          category: 'Traffic',
          phone: '02-1234-5678',
          img: './images/store/4-2.jpg',
          addr: 'No. 11, Xinyi Road, Xinyi District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Ticket Sales Point',
          category: 'Traffic',
          phone: '02-2345-6789',
          img: './images/store/4-3.jpg',
          addr: "No. 12, Ren'ai Road, Ren'ai District, Keelung City",
          url: 'https://www.example.com'
        }
      ]
      break
    case 'kn':
      ary = [
        {
          name: '간식의 낙원',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: '기릉시 중정구 중산로 1번지',
          url: 'https://www.example.com'
        },
        {
          name: '특색있는 간식 가게',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: '기릉시 안락구 안락로 2번지',
          url: 'https://www.example.com'
        },
        {
          name: '음식 천국',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: '기릉시 신의구 신의로 3번지',
          url: 'https://www.example.com'
        },
        {
          name: '기념품 전문점',
          category: 'Souvenirs',
          phone: '02-4567-8901',
          img: './images/store/2-1.jpg',
          addr: '기릉시 인애구 인애로 4번지',
          url: 'https://www.example.com'
        },
        {
          name: '기념품 가게',
          category: 'Souvenirs',
          phone: '02-5678-9012',
          img: './images/store/2-2.jpg',
          addr: '기릉시 중산구 중산로 5번지',
          url: 'https://www.example.com'
        },
        {
          name: '특색있는 기념품 상점',
          category: 'Souvenirs',
          phone: '02-6789-0123',
          img: './images/store/2-3.jpg',
          addr: '기릉시 안락구 안락로 6번지',
          url: 'https://www.example.com'
        },
        {
          name: '관광티켓 전문점',
          category: 'Tickets',
          phone: '02-7890-1234',
          img: './images/store/3-1.jpg',
          addr: '기릉시 신의구 신의로 7번지',
          url: 'https://www.example.com'
        },
        {
          name: '티켓 센터',
          category: 'Tickets',
          phone: '02-8901-2345',
          img: './images/store/3-2.jpg',
          addr: '기릉시 인애구 인애로 8번지',
          url: 'https://www.example.com'
        },
        {
          name: '관광지 티켓 판매',
          category: 'Tickets',
          phone: '02-9012-3456',
          img: './images/store/3-3.jpg',
          addr: '기릉시 중정구 중산로 9번지',
          url: 'https://www.example.com'
        },
        {
          name: '교통티켓 센터',
          category: 'Traffic',
          phone: '02-0123-4567',
          img: './images/store/4-1.jpg',
          addr: '기릉시 안락구 안락로 10번지',
          url: 'https://www.example.com'
        },
        {
          name: '공공 교통 서비스',
          category: 'Traffic',
          phone: '02-1234-5678',
          img: './images/store/4-2.jpg',
          addr: '기릉시 신의구 신의로 11번지',
          url: 'https://www.example.com'
        },
        {
          name: '차표 판매소',
          category: 'Traffic',
          phone: '02-2345-6789',
          img: './images/store/4-3.jpg',
          addr: '기릉시 인애구 인애로 12번지',
          url: 'https://www.example.com'
        }
      ]
      break
    case 'ja':
      ary = [
        {
          name: 'スナックパラダイス',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: '基隆市中正区中山路1号',
          url: 'https://www.example.com'
        },
        {
          name: '特色軽食店',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: '基隆市安樂区安樂路2号',
          url: 'https://www.example.com'
        },
        {
          name: 'フードパラダイス',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: '基隆市信義区信義路3号',
          url: 'https://www.example.com'
        },
        {
          name: '記念品専門店',
          category: 'Souvenirs',
          phone: '02-4567-8901',
          img: './images/store/2-1.jpg',
          addr: '基隆市仁愛区仁愛路4号',
          url: 'https://www.example.com'
        },
        {
          name: 'お土産ショップ',
          category: 'Souvenirs',
          phone: '02-5678-9012',
          img: './images/store/2-2.jpg',
          addr: '基隆市中山区中山路5号',
          url: 'https://www.example.com'
        },
        {
          name: '特色記念品店',
          category: 'Souvenirs',
          phone: '02-6789-0123',
          img: './images/store/2-3.jpg',
          addr: '基隆市安樂区安樂路6号',
          url: 'https://www.example.com'
        },
        {
          name: '観光地チケット専門店',
          category: 'Tickets',
          phone: '02-7890-1234',
          img: './images/store/3-1.jpg',
          addr: '基隆市信義区信義路7号',
          url: 'https://www.example.com'
        },
        {
          name: 'チケットセンター',
          category: 'Tickets',
          phone: '02-8901-2345',
          img: './images/store/3-2.jpg',
          addr: '基隆市仁愛区仁愛路8号',
          url: 'https://www.example.com'
        },
        {
          name: '観光スポットのチケット販売',
          category: 'Tickets',
          phone: '02-9012-3456',
          img: './images/store/3-3.jpg',
          addr: '基隆市中正区中山路9号',
          url: 'https://www.example.com'
        },
        {
          name: '交通チケットセンター',
          category: 'Traffic',
          phone: '02-0123-4567',
          img: './images/store/4-1.jpg',
          addr: '基隆市安樂区安樂路10号',
          url: 'https://www.example.com'
        },
        {
          name: '公共交通サービス',
          category: 'Traffic',
          phone: '02-1234-5678',
          img: './images/store/4-2.jpg',
          addr: '基隆市信義区信義路11号',
          url: 'https://www.example.com'
        },
        {
          name: '切符販売所',
          category: 'Traffic',
          phone: '02-2345-6789',
          img: './images/store/4-3.jpg',
          addr: '基隆市仁愛区仁愛路12号',
          url: 'https://www.example.com'
        }
      ]
      break
    default:
      ary = [
        {
          name: '小吃樂園',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: '基隆市中正區中山路1號',
          url: 'https://www.example.com'
        },
        {
          name: '特色小吃坊',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: '基隆市安樂區安樂路2號',
          url: 'https://www.example.com'
        },
        {
          name: '美食天地',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: '基隆市信義區信義路3號',
          url: 'https://www.example.com'
        },{
          name: '小吃樂園',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: '基隆市中正區中山路1號',
          url: 'https://www.example.com'
        },
        {
          name: '特色小吃坊',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: '基隆市安樂區安樂路2號',
          url: 'https://www.example.com'
        },
        {
          name: '小吃樂園',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: '基隆市中正區中山路1號',
          url: 'https://www.example.com'
        },
        {
          name: '特色小吃坊',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: '基隆市安樂區安樂路2號',
          url: 'https://www.example.com'
        },
        {
          name: '美食天地',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: '基隆市信義區信義路3號',
          url: 'https://www.example.com'
        },
        {
          name: '紀念品專賣店',
          category: 'Souvenirs',
          phone: '02-4567-8901',
          img: './images/store/2-1.jpg',
          addr: '基隆市仁愛區仁愛路4號',
          url: 'https://www.example.com'
        },
        {
          name: '伴手禮商店',
          category: 'Souvenirs',
          phone: '02-5678-9012',
          img: './images/store/2-2.jpg',
          addr: '基隆市中山區中山路5號',
          url: 'https://www.example.com'
        },
        {
          name: '特色紀念品店',
          category: 'Souvenirs',
          phone: '02-6789-0123',
          img: './images/store/2-3.jpg',
          addr: '基隆市安樂區安樂路6號',
          url: 'https://www.example.com'
        },
        {
          name: '景點門票專賣',
          category: 'Tickets',
          phone: '02-7890-1234',
          img: './images/store/3-1.jpg',
          addr: '基隆市信義區信義路7號',
          url: 'https://www.example.com'
        },
        {
          name: '票券中心',
          category: 'Tickets',
          phone: '02-8901-2345',
          img: './images/store/3-2.jpg',
          addr: '基隆市仁愛區仁愛路8號',
          url: 'https://www.example.com'
        },
        {
          name: '旅遊景點售票',
          category: 'Tickets',
          phone: '02-9012-3456',
          img: './images/store/3-3.jpg',
          addr: '基隆市中正區中山路9號',
          url: 'https://www.example.com'
        },
        {
          name: '交通票券中心',
          category: 'Traffic',
          phone: '02-0123-4567',
          img: './images/store/4-1.jpg',
          addr: '基隆市安樂區安樂路10號',
          url: 'https://www.example.com'
        },
        {
          name: '公共交通服務',
          category: 'Traffic',
          phone: '02-1234-5678',
          img: './images/store/4-2.jpg',
          addr: '基隆市信義區信義路11號',
          url: 'https://www.example.com'
        },
        {
          name: '車票售賣點',
          category: 'Traffic',
          phone: '02-2345-6789',
          img: './images/store/4-3.jpg',
          addr: '基隆市仁愛區仁愛路12號',
          url: 'https://www.example.com'
        }
      ]
      break
  }

  return ary
}

// 首頁-商品資訊 all
// 航空旅遊 Airport / 飯店住宿 Hotel / 美食餐券、伴手禮 Others
export function utilsItemAll(lang) {
  let ary
  switch (lang) {
    case 'en':
      ary = [
        {
          name: 'Snack Paradise',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: 'No. 1, Zhongshan Road, Zhongzheng District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Specialty Snack Shop',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: 'No. 2, Anle Road, Anle District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Food Paradise',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: 'No. 3, Xinyi Road, Xinyi District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Snack Paradise',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: 'No. 1, Zhongshan Road, Zhongzheng District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Specialty Snack Shop',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: 'No. 2, Anle Road, Anle District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Food Paradise',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: 'No. 3, Xinyi Road, Xinyi District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Specialty Snack Shop',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: 'No. 2, Anle Road, Anle District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Food Paradise',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: 'No. 3, Xinyi Road, Xinyi District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Souvenir Store',
          category: 'Souvenirs',
          phone: '02-4567-8901',
          img: './images/store/2-1.jpg',
          addr: "No. 4, Ren'ai Road, Ren'ai District, Keelung City",
          url: 'https://www.example.com'
        },
        {
          name: 'Gift Shop',
          category: 'Souvenirs',
          phone: '02-5678-9012',
          img: './images/store/2-2.jpg',
          addr: 'No. 5, Zhongshan Road, Zhongshan District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Specialty Souvenir Shop',
          category: 'Souvenirs',
          phone: '02-6789-0123',
          img: './images/store/2-3.jpg',
          addr: 'No. 6, Anle Road, Anle District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Ticket Sales for Attractions',
          category: 'Tickets',
          phone: '02-7890-1234',
          img: './images/store/3-1.jpg',
          addr: 'No. 7, Xinyi Road, Xinyi District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Ticket Center',
          category: 'Tickets',
          phone: '02-8901-2345',
          img: './images/store/3-2.jpg',
          addr: "No. 8, Ren'ai Road, Ren'ai District, Keelung City",
          url: 'https://www.example.com'
        },
        {
          name: 'Tourist Attraction Ticket Store',
          category: 'Tickets',
          phone: '02-9012-3456',
          img: './images/store/3-3.jpg',
          addr: 'No. 9, Zhongzheng Road, Zhongzheng District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Transportation Ticket Center',
          category: 'Traffic',
          phone: '02-0123-4567',
          img: './images/store/4-1.jpg',
          addr: 'No. 10, Anle Road, Anle District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Public Transportation Services',
          category: 'Traffic',
          phone: '02-1234-5678',
          img: './images/store/4-2.jpg',
          addr: 'No. 11, Xinyi Road, Xinyi District, Keelung City',
          url: 'https://www.example.com'
        },
        {
          name: 'Ticket Sales Point',
          category: 'Traffic',
          phone: '02-2345-6789',
          img: './images/store/4-3.jpg',
          addr: "No. 12, Ren'ai Road, Ren'ai District, Keelung City",
          url: 'https://www.example.com'
        }
      ]
      break
    case 'kn':
      ary = [
        {
          name: '간식의 낙원',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: '기릉시 중정구 중산로 1번지',
          url: 'https://www.example.com'
        },
        {
          name: '특색있는 간식 가게',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: '기릉시 안락구 안락로 2번지',
          url: 'https://www.example.com'
        },
        {
          name: '음식 천국',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: '기릉시 신의구 신의로 3번지',
          url: 'https://www.example.com'
        },
        {
          name: '기념품 전문점',
          category: 'Souvenirs',
          phone: '02-4567-8901',
          img: './images/store/2-1.jpg',
          addr: '기릉시 인애구 인애로 4번지',
          url: 'https://www.example.com'
        },
        {
          name: '기념품 가게',
          category: 'Souvenirs',
          phone: '02-5678-9012',
          img: './images/store/2-2.jpg',
          addr: '기릉시 중산구 중산로 5번지',
          url: 'https://www.example.com'
        },
        {
          name: '특색있는 기념품 상점',
          category: 'Souvenirs',
          phone: '02-6789-0123',
          img: './images/store/2-3.jpg',
          addr: '기릉시 안락구 안락로 6번지',
          url: 'https://www.example.com'
        },
        {
          name: '관광티켓 전문점',
          category: 'Tickets',
          phone: '02-7890-1234',
          img: './images/store/3-1.jpg',
          addr: '기릉시 신의구 신의로 7번지',
          url: 'https://www.example.com'
        },
        {
          name: '티켓 센터',
          category: 'Tickets',
          phone: '02-8901-2345',
          img: './images/store/3-2.jpg',
          addr: '기릉시 인애구 인애로 8번지',
          url: 'https://www.example.com'
        },
        {
          name: '관광지 티켓 판매',
          category: 'Tickets',
          phone: '02-9012-3456',
          img: './images/store/3-3.jpg',
          addr: '기릉시 중정구 중산로 9번지',
          url: 'https://www.example.com'
        },
        {
          name: '교통티켓 센터',
          category: 'Traffic',
          phone: '02-0123-4567',
          img: './images/store/4-1.jpg',
          addr: '기릉시 안락구 안락로 10번지',
          url: 'https://www.example.com'
        },
        {
          name: '공공 교통 서비스',
          category: 'Traffic',
          phone: '02-1234-5678',
          img: './images/store/4-2.jpg',
          addr: '기릉시 신의구 신의로 11번지',
          url: 'https://www.example.com'
        },
        {
          name: '차표 판매소',
          category: 'Traffic',
          phone: '02-2345-6789',
          img: './images/store/4-3.jpg',
          addr: '기릉시 인애구 인애로 12번지',
          url: 'https://www.example.com'
        }
      ]
      break
    case 'ja':
      ary = [
        {
          name: 'スナックパラダイス',
          category: 'Foods',
          phone: '02-1234-5678',
          img: './images/store/1-1.jpg',
          addr: '基隆市中正区中山路1号',
          url: 'https://www.example.com'
        },
        {
          name: '特色軽食店',
          category: 'Foods',
          phone: '02-2345-6789',
          img: './images/store/1-2.jpg',
          addr: '基隆市安樂区安樂路2号',
          url: 'https://www.example.com'
        },
        {
          name: 'フードパラダイス',
          category: 'Foods',
          phone: '02-3456-7890',
          img: './images/store/1-3.jpg',
          addr: '基隆市信義区信義路3号',
          url: 'https://www.example.com'
        },
        {
          name: '記念品専門店',
          category: 'Souvenirs',
          phone: '02-4567-8901',
          img: './images/store/2-1.jpg',
          addr: '基隆市仁愛区仁愛路4号',
          url: 'https://www.example.com'
        },
        {
          name: 'お土産ショップ',
          category: 'Souvenirs',
          phone: '02-5678-9012',
          img: './images/store/2-2.jpg',
          addr: '基隆市中山区中山路5号',
          url: 'https://www.example.com'
        },
        {
          name: '特色記念品店',
          category: 'Souvenirs',
          phone: '02-6789-0123',
          img: './images/store/2-3.jpg',
          addr: '基隆市安樂区安樂路6号',
          url: 'https://www.example.com'
        },
        {
          name: '観光地チケット専門店',
          category: 'Tickets',
          phone: '02-7890-1234',
          img: './images/store/3-1.jpg',
          addr: '基隆市信義区信義路7号',
          url: 'https://www.example.com'
        },
        {
          name: 'チケットセンター',
          category: 'Tickets',
          phone: '02-8901-2345',
          img: './images/store/3-2.jpg',
          addr: '基隆市仁愛区仁愛路8号',
          url: 'https://www.example.com'
        },
        {
          name: '観光スポットのチケット販売',
          category: 'Tickets',
          phone: '02-9012-3456',
          img: './images/store/3-3.jpg',
          addr: '基隆市中正区中山路9号',
          url: 'https://www.example.com'
        },
        {
          name: '交通チケットセンター',
          category: 'Traffic',
          phone: '02-0123-4567',
          img: './images/store/4-1.jpg',
          addr: '基隆市安樂区安樂路10号',
          url: 'https://www.example.com'
        },
        {
          name: '公共交通サービス',
          category: 'Traffic',
          phone: '02-1234-5678',
          img: './images/store/4-2.jpg',
          addr: '基隆市信義区信義路11号',
          url: 'https://www.example.com'
        },
        {
          name: '切符販売所',
          category: 'Traffic',
          phone: '02-2345-6789',
          img: './images/store/4-3.jpg',
          addr: '基隆市仁愛区仁愛路12号',
          url: 'https://www.example.com'
        }
      ]
      break
    default:
      ary = [
        {
          cover_image: 'https://images.unsplash.com/photo-1522878129833-838a904a0e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
          name: '大理石峽谷',
          min_price: '2000',
          category: 'Airport'
        },
        {
          cover_image: 'https://images.unsplash.com/photo-1509024644558-2f56ce76c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
          name: '羅馬',
          min_price: '2000',
          category: 'Airport'
        },
        {
          cover_image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
          name: '特雷維溫泉',
          min_price: '2000',
          category: 'Airport'
        },
        {
          cover_image: 'https://images.unsplash.com/flagged/photo-1575834678162-9fd77151f40b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
          name: '泰國濤島',
          min_price: '2000',
          category: 'Airport'
        },
        {
          cover_image: 'https://images.unsplash.com/photo-1677126123251-f269246095f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
          name: '阿威羅鹽場',
          min_price: '2000',
          category: 'Airport'
        },
        {
          cover_image: 'https://images.unsplash.com/photo-1497608288787-c166040dbf73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80',
          name: '阿馬爾非日落',
          min_price: '2000',
          category: 'Airport'
        },
        {
          cover_image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80',
          name: '梵蒂岡城',
          min_price: '2000',
          category: 'Airport'
        },
        {
          cover_image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80',
          name: '梵蒂岡山頂',
          min_price: '2000',
          category: 'Airport'
        },
      ]
      break
  }

  return ary
}