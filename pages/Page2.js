import Head from 'next/head';

// internal
import PageTitle from '../src/components/PageTitle';
import IndexCss from '../src/styles/index.css';
import { branding } from '../src/constants/branding';

export default function Page2() {
    return (
        <>
            <Head>
                <title>{branding.tabTitle} - {branding.pageTwoTitle}</title>
                <meta name="Description" content={`${branding.pageTwoSub} Content`} key="title" />
            </Head>
            <div className='index'>
                <PageTitle maintitle={ branding.pageTwoTitle } subtitle={ branding.pageTwoSub } />
                <IndexCss />
            </div>
        </>
    )
}
