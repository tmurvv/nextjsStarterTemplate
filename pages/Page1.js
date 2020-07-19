import Head from 'next/head';
import Product from '../src/components/Product';
import uuid from 'react-uuid';

// internal
import PageTitle from '../src/components/PageTitle';
import IndexCss from '../src/styles/index.css';
import { branding } from '../src/constants/branding';

const Page1 = (props) => {
    console.log('mpl', props.products[0])
    return (
        <>
        <Head>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
            <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="NjgzYTM5MDUtNTQwYy00YmJmLThlMjMtNTExNTViYjAyZGQyNjM3MzA3MDM0MDE0NTM1ODY1" id="snipcart"></script>
            <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        </Head>
        <PageTitle maintitle='Harps for Sale' subtitle='A selection of beautiful harps for you' />
        <div className="product-list" style={{display: 'flex', padding: '50px'}}>
              {/* <Product product={props.products[0]}/> */}
              {props.products.map((product, index) => <Product product={product} key={index}/>)}
        </div>
        </>
    )
}

Page1.getInitialProps = async () => {
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
                name: "Markwood 29 string bronze wire harp", 
                price: 1850.00, 
                image: "static/img/harps/markwood29standing.jpg", 
                description: "Markwood description."
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
export default Page1;


// export default function Page1() {
//     return (
//         <>
//         {/* <Head>
//             <title>{branding.tabTitle} - {branding.additionalPageOne}</title>
//             <meta name="Description" content={`${branding.additionalPageOne} Content`} key="title" />
//             <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css" />
//         </Head> */}
        
//         <div className='index'>
            // <PageTitle maintitle='Harps for Sale' subtitle='A selection of beautiful harps for you' />
            // <div style={{display: flex}}>
            //     <Product
            //         title="Oladion Harp"
            //         price="$1299.00"
            //         image="img/harps/oladion.png"
            //         imagealt="Oladion Harp"
            //         description="Oladion description"
            //     />
            //     <Product
            //         title="Markwood 29 string bronze wire harp"
            //         price="$1850.00"
            //         image="img/harps/markwood29standing.jpg"
            //         imagealt="Markwood 29 string bronze wire harp"
            //     />
            //     <Product
            //         title="Salvi Minerva"
            //         price="$32,000.00"
            //         image="img/harps/minerva-594x1024.jpg"
            //         imagealt="Salvi Minerva"
            //     />
            //     <Product
            //         title="Triplett Nino Harp"
            //         price="$3800.00"
            //         image="img/harps/nino.jpg"
            //         imagealt="Triplett Nino Harp"
            //     />
                
//                     <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
//                     <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="NjgzYTM5MDUtNTQwYy00YmJmLThlMjMtNTExNTViYjAyZGQyNjM3MzA3MDM0MDE0NTM1ODY1" id="snipcart"></script>
//                     <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
//                     {/* <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css" /> */}
                
//             </div>
//             <IndexCss />
//         </div>
//         {/* <div hidden id="snipcart" data-api-key="NjgzYTM5MDUtNTQwYy00YmJmLThlMjMtNTExNTViYjAyZGQyNjM3MzA3MDM0MDE0NTM1ODY1"></div>
//         <script src="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js"></script> */}
//         </>
//     )
// }
