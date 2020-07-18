import PageTitle from '../src/components/PageTitle';
import IndexCss from '../src/styles/index.css';
import { branding } from '../src/constants/branding';

export default function Home() {
    return (
        <div className='index'>
            <PageTitle maintitle={ branding.tabTitle } subtitle='Great Stuff to Come' />
            <IndexCss />
        </div>
    )
}
