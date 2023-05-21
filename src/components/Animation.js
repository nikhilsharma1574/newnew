import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
    AOS.init({
      // your AOS options here
    });
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
