import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/BannerProjects'

export default () => (
    <Layout>
        <Head>
            <title>C&C Lab - Projects</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <Banner />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Selection</h2>
                        </header>
                        <p>We work on projects that have the purpose of improving knowledge about ourselves, providing people with the necessary tools to achieve that well-being that allows them to fully develop in their day to day life.</p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <div className="image">
                            <img src="/static/images/cconsciente-workflow.png" alt="" />
                        </div>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Cconsciente</h3>
                                </header>
                                <p>Web app development for cloud computing EEG processing. We diagram the signal processing workflow to be more intuitive.</p>
                                <ul className="actions">
                                    <li><Link href="/project/cconsciente"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/*<section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic09.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Cami project</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic10.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Project 3</h3>
                                </header>
                                <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>*/}
                </section>
            </div>

        </div>
    </Layout>
)
