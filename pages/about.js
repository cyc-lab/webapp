import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/BannerAbout'

export default () => (
    <Layout>
        <Head>
            <title>C&C Lab - About us</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <Banner/>

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Our North</h2>
                        </header>
                        <p>We</p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic08.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Christian Ferreyra</h3>
                                </header>
                                <p>Working on humanity's knowledge about ourselves. I'm a biomedical enginner and co-founder of BOne. </p>
                                <ul className="actions">
                                    <li><Link href="https://www.linkedin.com/in/christian-ferreyra/"><a className="button">Connect</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic09.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Camila Losada</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Connect</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/*<section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic10.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Sed nunc ligula</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>*/}
                </section>
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Our Values</h2>
                        </header>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
