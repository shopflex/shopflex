export interface FetchProductParams {
  productCategoryId: number
  pageSize?: number
  pageNum?: number
  status?: number
  // newStatus?: number
}

export interface Product {
  id: number
  price: number
  pic: string
  adminId: number
  albumPics: string
  attrList: [
    {
      key: string
      value: string
    }
  ]
  brandId: number
  brandName: string
  cost: number
  createdTime: number
  currencyCode: string
  deleteStatus: number
  description: string
  detailHtml: string
  disCost: number
  disPrice: number
  hotStatus: number
  id: number
  importNums: number
  keywords: string
  merchantId: string
  mpn: string
  name: string
  newStatus: number
  note: string
  pic: string
  platformProductSku: string
  price: number
  priceStatus: number
  productCategoryId: number
  productCategoryName: string
  productSn: string
  promotionPrice: number
  publishStatus: number
  regionCode: string
  requestStatus: number
  shareUrl: string
  shopCurrCost: number
  skuList: any[]
}

export interface FetchProductListRes {
  list: Product[]
  pageNum: number
  total: number
}
