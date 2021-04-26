import Layout from '../components/Layout';
import ProductSale from '../components/Products/ProductSale';
import Sale from '../components/Sale';
import Service from '../components/Service';
import productApi from '../lib/productApi';
import ProductNew from '../components/Products/ProductNew'
export default function Home({ saleProducts, newProducts }) {


  return (
    <Layout title="Home Page">
      <Service />
      <ProductSale productList={saleProducts} />
      <Sale />
      <ProductNew productList={newProducts} />
    </Layout>
  )
}


export const getStaticProps = async (context) => {
  const res = await productApi.getProdustInitial()
  const { saleProducts, newProducts } = res.data
  return {
    props: { saleProducts, newProducts },
  }
}



