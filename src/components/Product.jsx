import {styled} from 'styled-components'
import {popularProducts} from '../data'


const Container = styled.div`
    padding: 20px;
    display: flex;
    
`

const Product = () => {
    <Container>
        {popularProducts.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </Container>
}

export default Product;