<?php

    require_once('config.php');
    require_once('connection.php');

    $projectsRS = mysql_query('SELECT * FROM projects');
    $selectedRS = mysql_query("SELECT image, overview, tech, device, link FROM `projects`");

    $numProds = mysql_num_rows($projectsRS);

    $projectsRow = mysql_fetch_assoc($projectsRS);

    include('header.php');

?>

    <section class="header clearfix"> <!-- Start of Header -->

        <article class="tagline">
            
            <h1>&lt; WEB DESIGN &amp; DEVELOPMENT /&gt;</h1>

        </article>

    </section> <!-- End of Header -->

    <section class="about clearfix"> <!-- Start of About -->

        <aside class="icons clearfix">

            <img class="icon" src="img/info.png" alt="info">

        </aside>

        <aside class="profile clearfix">

            <img class="my-profile" src="img/profile.jpg" alt="Jeremy Prowse">

            <div class="flip-li flip-profile">

                <a class="li-front first" href="http://www.linkedin.com/profile/view?id=265979543&amp;trk=nav_responsive_tab_profile" target="_blank"></a>

                <a class="li-back second" href="http://www.linkedin.com/profile/view?id=265979543&amp;trk=nav_responsive_tab_profile" target="_blank"></a>

            </div>

            <div class="flip-cv flip-profile">

                <a class="cv-front first" href="#" target="_blank"></a>

                <a class="cv-back second" href="#" target="_blank"></a>

            </div>

        </aside>

        <aside class="bio clearfix">
            <p>Hi, my name is Jeremy, I’m a 21 year old web designer and developer based in Auckland New Zealand. I specialise in simple and minimal design, combined with intuitive web interfaces to produce unique, timeless websites. I have built up my skills as a designer and developer at Media Design School. Completing both the Diploma of Graphic Design and the Diploma of Digital Media. I am very passionate about my work and strive to improve my skills (both design and web development) however I can. I always strive to create simple and clean code. If you like what you see please get in contact.</p>
            <img src="img/sig.png" alt="Jeremy Prowse Sig">
        </aside>

    </section> <!-- Start of About -->

    <section class="work"> <!-- Start of Work -->

        <section class="projects clerfix">

            <h2>WHAT I'VE DONE</h2>

            <?php while ($projectsRow = mysql_fetch_assoc($selectedRS)) {?>

                <article class="project clearfix">

                    <aside class="website clearfix">

                        <a class="launch" href="<?php echo $projectsRow['link']?>" target="_blank">LAUNCH</a>

                        <div class="mask clearfix">
                            <img class="screenshot" src="img/<?php echo $projectsRow['image']?>" alt="<?php echo $projectsRow['image']?>">
                        </div>

                        <a class="launch-mobile" href="<?php echo $projectsRow['link']?>" target="_blank">LAUNCH</a>

                    </aside>

                    <aside class="icons clearfix">

                        <img class="icon" src="img/info.png" alt="info">

                        <img class="icon tech-icon" src="img/tech.png" alt="tech">

                        <img class="icon dev-icon" src="img/dev.png" alt="dev">

                    </aside>

                    <aside class="overview clearfix">
                        
                        <p><?php echo $projectsRow['overview']?></p>

                    </aside>

                    <aside class="tech clearfix">

                        <p><?php echo $projectsRow['tech']?></p>
                        
                    </aside>

                    <aside class="device clearfix">

                        <img class="devices" src="img/<?php echo $projectsRow['device']?>" alt="<?php echo $projectsRow['device']?>">
                        
                    </aside>

                </article>

            <?php };?>

            <span class="next-btn">NEXT</span>

            <span class="prev-btn">PREV</span>

        </section>

    </section> <!-- End of Work -->

    <section class="skills clearfix"> <!-- Start of Skills -->

        <h2>WHAT I KNOW</h2>

        <aside class="skill">
            <div class="full clearfix">
                <div class="nine"></div>
            </div>
            <p>HTML/CSS</p>
        </aside>
        <aside class="skill">
            <div class="full clearfix">
                <div class="eight"></div>
            </div>
            <p>JAVASCRIPT</p>
        </aside>
        <aside class="skill">
            <div class="full clearfix">
                <div class="eight"></div>
            </div>
            <p>JQUERY</p>
        </aside>
        <aside class="skill">
            <div class="full clearfix">
                <div class="seven"></div>
            </div>
            <p>PHP</p>
        </aside>
        <aside class="skill">
            <div class="full clearfix">
                <div class="eight"></div>
            </div>
            <p>WORDPRESS</p>
        </aside>
        <aside class="skill">
            <div class="full clearfix">
                <div class="eight"></div>
            </div>
            <p>SUBLIME</p>
        </aside>
        <aside class="skill">
            <div class="full clearfix">
                <div class="eight"></div>
            </div>
            <p>PHOTOSHOP</p>
        </aside>
        <aside class="skill">
            <div class="full clearfix">
                <div class="nine"></div>
            </div>
            <p>ILLUSTRATOR</p>
        </aside>
        <aside class="skill">
            <div class="full clearfix">
                <div class="eight"></div>
            </div>
            <p>INDESIGN</p>
        </aside>
        
    </section> <!-- End of Skills -->

    <section class="infographic clearfix"> <!-- Start of Infographic -->

        <h2>WHAT I DO</h2>

        <img src="img/infographic.png" alt="infographic">
        
    </section> <!-- End of Infographic -->

    <section class="map"> <!-- Start of Map -->

        <h2>GET IN TOUCH</h2>
        
        <div class="map-dissable"></div>
        <div id="map-canvas"></div>

        <div class="contact-form clearfix">

            <form class="form clearfix" method="post">
                <p id="status"></p>

                <div class="left clearfix">

                    <input type="text" id="name" placeholder="Name" name="name" />

                    <input type="text" id="email" placeholder="Email" name="email" />

                    <input type="text" id="subject" placeholder="Subject" name="subject" />

                </div>

                <div class="right clearfix">

                    <textarea id="message" placeholder="Message" name="message"></textarea>

                    <input id="submit" type="submit" value="Send" />
                    <input id="reset" type="reset" value="Reset" />

                    <input id="spam" class="hidden" name="spam" type="text" value="" />

                </div>

            </form>

        </div>

    </section> <!-- End of Map -->

<?php

    include('footer.php');

?>