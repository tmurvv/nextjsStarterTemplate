// packages
import uuid from 'react-uuid';
import Head from 'next/head';

// internal
import Product from '../src/components/Product';
import PageTitle from '../src/components/PageTitle';
import Cart from '../src/components/Cart';
import IndexCss from '../src/styles/index.css';


const Store = (props) => {
    
    return (
        <>
        <Head>
            
        </Head>
        <div className='index' style={{height: 'fit-content'}}>
            <PageTitle maintitle='Harps for Sale' subtitle='A selection of beautiful harps for you' />
            <div className="product-list" style={{display: 'flex', flexWrap: 'wrap', padding: '50px'}}>
                {props.products_cds.map((product, index) => <Product product={product} key={index}/>)}
            </div>
        </div>
        <IndexCss />
        </>
    )
}

Store.getInitialProps = () => {
    return {
        products_harps: [
            {
                id: uuid(), 
                name: "Dusty Strings FH36B", 
                price: 4300.00, 
                image: "img/orrDustyStringsFH36B.jpg", 
                description: "Can ship to US or Canada. Contact Tisha to hear and see this extrodinary harp over Zoom/Skype/Facetime. This is an outstanding instrument. Rarely have I heard such a beautiful, even, present sound in an instrument. Built in 1996."
            },
            {
                id: uuid(), 
                name: "Markwood Wire Harp", 
                price: 1600.00, 
                image: "img/markwood29standing.jpg", 
                description: "Markwood 29-string bronze wire harp. Can ship to US or Canada. Contact Tisha to see and hear this harp played over Zoom/Skype/Facetime. Take home a classic! Built by Mark Bolles in 1988. The sound of a wire-strung harp takes you immediately to a different time and place. Beautiful cover with real sheepswool lining. Blade levers."
            },
            {
                id: uuid(), 
                name: "Pilgrim Ashdown Harp", 
                price: 1950.00, 
                image: "img/pilgrim.jpg", 
                description: "Can ship to US or Canada. 1994 Pilgrim Ashdown harp made in Wales. Price reduced due to structural crack in neck. Purchase at your own risk. Beautiful, mellow, soft, sweet tone. Pilgrim levers have a reversed technology, down is engaged, up is disengaged."
            },
            {
                id: uuid(), 
                name: "Pierpont Irish Style 29 strings", 
                price: 1400.00, 
                image: "img/pierpont.jpg", 
                description: "Can ship to US or Canada. Contact seller to see and hear this harp played over Zoom/Skype/Facetime. Nice, big sound. Tuning key, cover, legs included. Legs added by first owner. An excellent instrument!"
            },
            {
                id: uuid(), 
                name: "Lindeman Semi-Grand", 
                price: 1500.00, 
                image: "img/Lindeman.jpg", 
                description: "A fixer-upper. This harp is not playable. Can ship to US or Canada. Contact seller to see this historically important harp over Zoom/Skype/Facetime. Gold is flaked off in a few places. Extreme cracking in the sound-board. Can not be pulled up to pitch. Pedals work okay. 44 Strings."
            },
            {
                id: uuid(), 
                name: "Zebrawood 25-string Lap Harp", 
                price: 450.00, 
                image: "img/unknownwinset.jpg", 
                description: "A beautiful sounding lap-harp. Significant crack in the neck (see inset). Purchase at your own risk. Partially levered (Cs, Fs). Maker unknown."
            }
        ],   
        products_cds: [
            {
                id: uuid(), 
                name: "If Brahms Wrote For Harp CD", 
                price: 15.00, 
                image: "img/IfBrahmsWrote.webp", 
                description: "“Stunning Presentation of the music of Johannes Brahms” - The HarpColumn, Jan. ‘04. 11 Intermezzi and a Rhapsody Arranged and performed by Tisha Murvihill, harp."
            },
            {
                id: uuid(), 
                name: "A Quiet Afternoon CD", 
                price: 15.00, 
                image: "img/QuietAfternoon.webp", 
                description: "Winner, Instrumental Album of the Year, GMAC. Fourteen beautiful arrangements of some of our most beautiful worship melodies, including: I Exalt Thee; Oh, How He Loves You and Me; Fairest Lord Jesus; As the Deer; Jesus, Name Above All Names."
            },
            {
                id: uuid(), 
                name: "Come Just As You Are CD", 
                price: 15.00, 
                image: "img/ComeJustAs.webp", 
                description: "Nominee, Instrumental Album of the Year, GMAC​​.Come Just As You Are is a follow-up CD to Tisha’s award winning CD, A Quiet Afternoon. The CD features 14 inspirational praise and worship songs including Amazing Grace, Draw Me Close to You, Lord Be Glorified, and You Are My All in All."
            },
        ],  
        products_music: [
            {
                id: uuid(), 
                name: "Coming Soon", 
                price: 15.00, 
                image: "/img/sheetmusic/placeholder.jpg", 
                description: "Great Preowned Sheet Music Coming."
            },
            {
                id: uuid(), 
                name: "Coming Soon", 
                price: 15.00, 
                image: "/img/sheetmusic/placeholder.jpg", 
                description: "Great Preowned Sheet Music Coming."
            },
            {
                id: uuid(), 
                name: "Coming Soon", 
                price: 15.00, 
                image: "/img/sheetmusic/placeholder.jpg", 
                description: "Great Preowned Sheet Music Coming."
            },
            {
                id: uuid(), 
                name: "Coming Soon", 
                price: 15.00, 
                image: "/img/sheetmusic/placeholder.jpg", 
                description: "Great Preowned Sheet Music Coming."
            },
            {
                id: uuid(), 
                name: "Coming Soon", 
                price: 15.00, 
                image: "/img/sheetmusic/placeholder.jpg", 
                description: "Great Preowned Sheet Music Coming."
            }
        ]   
    }
}
export default Store;
