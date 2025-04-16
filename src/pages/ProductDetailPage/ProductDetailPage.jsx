import React from 'react'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'

const ProductDetailPage = () => {
  return (
    <div style={{padding: '0 120px', background: '#efefef', height: '1000px'}}>
      <p style={{marginTop: 0, fontSize: '13px'}}>Trang chủ</p>
      <ProductDetailsComponent/>
    </div>
  )
}

export default ProductDetailPage