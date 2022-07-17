import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import categoryImg01 from '../../../assets/images/category-01.png';
import categoryImg02 from '../../../assets/images/category-02.png';
import categoryImg03 from '../../../assets/images/category-03.png';
import categoryImg04 from '../../../assets/images/category-04.png';
import '../../../styles/category.css'

const categoryData = [
    {
        display: 'Club Kits',
        imgUrl: categoryImg01
    }, 
    {
        display: 'Nation Kits',
        imgUrl: categoryImg02
    },
    {
        display: 'Windbreaker',
        imgUrl: categoryImg04
    },
    {
        display: 'Football Shoes',
        imgUrl: categoryImg03
    },
]
const Category = () => {
  return (
    <Container>
        <Row>
            {categoryData.map((item, index) => (
                <Col lg='3' md='6' sm='6'>
                    <div className="category__item d-flex align-items-center gap-4">
                        <div className="category__img">
                            <img src={item.imgUrl} alt='category__item' />
                        </div>
                        <h6>{item.display}</h6>
                        
                    </div>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default Category