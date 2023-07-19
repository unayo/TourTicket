// 千分位
export function useComma(data) {
  if (data) {
    const comma = /\B(?=(\d{3})+(?!\d))/g
    return data.toString().replace(comma, ',')
  } else {
    return data
  }
}
