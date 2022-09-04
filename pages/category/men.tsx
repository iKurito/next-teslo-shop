import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { useProducts } from '../../hooks/userProducts';
import { ShopLayout } from '../../components/layouts';
import { FullScreenLoading } from '../../components/ui';
import { ProductList } from '../../components/products';



const MenPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?gender=men');

  return (
    <ShopLayout 
      title='Teslo-Shop - Men'
      pageDescription='Encuentra los mejores productos de Teslo para ellos'
    >
      <Typography variant='h1' component='h1'>Hombres</Typography>
      <Typography variant='h2' sx={{mb: 1}}>Productos para ellos</Typography>
      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList
              products={products}
            />
      }      
    </ShopLayout>
  )
}

export default MenPage;
