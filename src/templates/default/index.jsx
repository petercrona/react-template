import Header from './header';
import Content from './content';
import Footer from './footer';

require('./style.less');

export default function Default({ ...props }) {
    return (
        <div>
            <Header />
            <Content {...props} />
            <Footer />
        </div>
    );
}
