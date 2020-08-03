import PageTitle from '../src/components/PageTitle';
import IndexCss from '../src/styles/index.css';
import { branding } from '../src/constants/branding';

const Home = () => {
    return (
        <>   
            <div className='index'>
                <PageTitle maintitle={ branding.landingPageTitle } subtitle={ branding.landingPageSub } />
                <IndexCss />
            </div>
        </>
    )
}

export default Home
