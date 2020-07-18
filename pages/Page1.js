import Head from 'next/head';

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
        </Head>
        <div className='index'>
            <PageTitle maintitle='Page 1 Content' subtitle='Great Stuff to Come' />
            <IndexCss />
        </div>
        </>
    )
}
