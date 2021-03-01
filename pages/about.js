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
                        <p>We are engineers who are passionate about creating things that can balance nature and people's life.<br/>
                       Focused on innovative projects that can change ways of thinking.</p>
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
                                <p>I'm a biomedical engineer working on humanity's knowledge about ourselves.</p>
                                <ul className="actions">
                                    <li><Link href="https://www.linkedin.com/in/christian-ferreyra/"><a className="button">Connect</a></Link></li>
                                    <li><a href="https://github.com/chrisferreyra13" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="image">
                            <img src="/static/images/cami-pp-1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Camila Losada</h3>
                                </header>
                                <p>Biomedical engineer working on the development of tools that allow people to fully exploit their capabilities, achieving that well-being that allows them to fully develop in their day to day.</p>
                                <ul className="actions">
                                    <li><Link href="https://www.linkedin.com/in/camilosadaa/"><a className="button">Connect</a></Link></li>
                                    <li><a href="https://github.com/camilosada" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
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
                        <p>Disruption of knowledge, search for the alternative way, doing things with love.</p>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
