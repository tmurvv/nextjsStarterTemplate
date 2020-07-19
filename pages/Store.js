// packages
import Head from 'next/head';
import uuid from 'react-uuid';

// internal
import Product from '../src/components/Product';
import PageTitle from '../src/components/PageTitle';
import IndexCss from '../src/styles/index.css';

const Store = (props) => {
    return (
        <>
        <Head>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
            <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="NjgzYTM5MDUtNTQwYy00YmJmLThlMjMtNTExNTViYjAyZGQyNjM3MzA3MDM0MDE0NTM1ODY1" id="snipcart"></script>
            <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        </Head>
        <div className='index' style={{height: 'fit-content'}}>
            <PageTitle maintitle='Harps for Sale' subtitle='A selection of beautiful harps for you' />
            <div className="product-list" style={{display: 'flex', flexWrap: 'wrap', padding: '50px'}}>
                {props.products.map((product, index) => <Product product={product} key={index}/>)}
            </div>
        </div>
        <IndexCss />
        </>
    )
}

Store.getInitialProps = async () => {
    return {
        products: [
            {
                id: uuid(), 
                name: "Oladion Harp", 
                price: 1299.00, 
                image: "static/img/harps/Oladion.png", 
                description: "Oladian description."
            },
            {
                id: uuid(), 
                name: "Markwood Wire Harp", 
                price: 1850.00, 
                image: "static/img/harps/markwood29standing.jpg", 
                description: "Markwood 29-string bronze wire harp."
            },
            {
                id: uuid(), 
                name: "Salvi Minerva", 
                price: 32000.00, 
                image: "static/img/harps/minerva-594x1024.jpg", 
                description: "Salvi Minerva description."
            },
            {
                id: uuid(), 
                name: "Triplett Nino Harp", 
                price: 3800.00, 
                image: "static/img/harps/nino.jpg", 
                description: "Triplett Nino Harp description"
            },
        ]   
    }
}
export default Store;
