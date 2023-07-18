
import './Footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">

                <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                    <a href="#">Scanfcode</a>.
                </p>

                <ul className="social-icons">
                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>

        </footer>
    );
}