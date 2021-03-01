import Head from "next/head"

import Layout from '../../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>C&C Lab - Cconsciente</title>
            <meta name="description" content="Generic Page" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Cconsciente</h1>
                    </header>
                    <span className="image main"><img src="/static/images/cconsciente-dashboard.png" alt="" /></span>
                    <p>Web app for EEG signal processing.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                    <a href="https://github.com/chrisferreyra13/CConsciente" className="icon alt fa-github"><span className="label">GitHub</span></a>
                </div>
            </section>
        </div>
    </Layout>
)
