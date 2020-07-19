import Head from 'next/head';
import Product from '../src/components/Product';

// internal
import PageTitle from '../src/components/PageTitle';
import IndexCss from '../src/styles/index.css';
import { branding } from '../src/constants/branding';

export default function Page1() {
    return (
        <>
        <Head>
            <title>{branding.tabTitle} - {branding.additionalPageOne}</title>
            <meta name="Description" content={`${branding.additionalPageOne} Content`} key="title" />
            <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css" />
        </Head>
        <div className='index'>
            <PageTitle maintitle='Harps for Sale' subtitle='A selection of beautiful harps for you' />
            <div className="flex-sb">
                <Product
                    title="Oladion Harp"
                    price="$1299.00"
                    image="img/harps/oladion.png"
                    imagealt="Oladion Harp"
                />
                <Product
                    title="Markwood 29 string bronze wire harp"
                    price="$1850.00"
                    image="img/harps/markwood29standing.jpg"
                    imagealt="Markwood 29 string bronze wire harp"
                />
                <Product
                    title="Salvi Minerva"
                    price="$32,000.00"
                    image="img/harps/minerva-594x1024.jpg"
                    imagealt="Salvi Minerva"
                />
                <Product
                    title="Triplett Nino Harp"
                    price="$3800.00"
                    image="img/harps/nino.jpg"
                    imagealt="Triplett Nino Harp"
                />
            </div>
            <IndexCss />
        </div>
        <div hidden id="snipcart" data-api-key="NjgzYTM5MDUtNTQwYy00YmJmLThlMjMtNTExNTViYjAyZGQyNjM3MzA3MDM0MDE0NTM1ODY1"></div>
        <script src="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js"></script>
        </>
    )
}
