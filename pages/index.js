import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/insp-1.jpg')`}}>
                        <header className="major">
                            <h3>About Us</h3>
                            <p>Know your north</p>
                        </header>
                        <Link href="/about"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/hand-1.jpg')`}}>
                        <header className="major">
                            <h3>Projects</h3>
                            <p>See how our ideas come true</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    {/*<article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Magna</h3>
                            <p>Lorem etiam nullam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                        <header className="major">
                            <h3>Ipsum</h3>
                            <p>Nisl sed aliquam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic05.jpg')`}}>
                        <header className="major">
                            <h3>Consequat</h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic06.jpg')`}}>
                        <header className="major">
                            <h3>Etiam</h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>*/}
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Building the future</h2>
                        </header>
                        <p>No se q poner</p>
                        {/*<ul className="actions">
                            <li><Link href="/landing"><a className="button next">Get Started</a></Link></li>
                        </ul>*/}
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
