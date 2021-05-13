import React, { useEffect } from 'react'

import { Progress, Carousel } from 'antd';
const ThirdSection = (props) => {

    return (
        <section id="skills" class="skills section-bg">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Skills</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div class="row skills-content">

                    <div class="col-lg-6">

                        <div class="progress">
                            <span class="skill">HTML
                                        <Progress percent={50} status="active" /> </span>

                        </div>

                        <div class="progress">
                            <span class="skill">CSS
                                        <Progress percent={50} status="active" />
                            </span>

                        </div>

                        <div class="progress">
                            <span class="skill">JavaScript
                                        <Progress percent={50} status="active" />
                            </span>

                        </div>

                    </div>

                    <div class="col-lg-6">

                        <div class="progress">
                            <span class="skill">PHP
                                        <Progress percent={50} status="active" />
                            </span>

                        </div>

                        <div class="progress">
                            <span class="skill">WordPress/CMS
                                        <Progress percent={50} status="active" />
                            </span>
                        </div>

                        <div class="progress">
                            <span class="skill">Photoshop
                                        <Progress percent={50} status="active" />
                            </span>

                        </div>

                    </div>

                </div>

            </div>
        </section>

    )
}

export default ThirdSection
