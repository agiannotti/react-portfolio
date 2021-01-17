import './App.css';
import foliage from '../images/b-w-foliage.jpg';
import headshot from '../images/headshot-soho.jpg';

function App() {
  return (
    <div className='App'>
      <header>
        <div class='nameplate'>Anthony Giannotti</div>
        <nav>
          <ul id='menu'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#portfolio'>Portfolio</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <div class='group'>
            <div class='item'>
              <img
                src={headshot}
                alt='soho-headshot'
                width='290'
                class='img-circle'
              />
            </div>
            <div>
              <h1>Hi there</h1>
              <p>
                I'm a Chicago-based web developer, here are a few of my current
                ambitions:
              </p>
              <ul>
                <li>
                  Develop a comprehensive understanding of front-end and
                  back-end integration.
                </li>
                <li>Collaborate with others to pursue meaningful projects.</li>
                <li>Cultivate a livelihood in the tech industry.</li>
              </ul>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div class='group'>
            <div class='item'>
              <h2>Details</h2>
              <p>
                I've always had a fascination with technology. From building and
                repairing computers, to installing my first Linux distro. As a
                kid I'd tinker with custom firmware and homebrew emulation,
                turning my phone into a GameBoy and getting non-western JRPGs on
                my NA PSP.
              </p>
              <p>
                Over the past decade, my career has been in the culinary field.
                I worked my way into Michelin-starred kitchens, and have spent
                years as a chef. My expertise eventually settled within
                sourdough and laminated pastries.
              </p>
              <p>
                Now, it's time for something new. I'm pursuing an underlying
                passion for web development and programming. My plan is to take
                the determination and the attention to detail that I've honed in
                the kitchen, and apply them software engineering.
              </p>
              <h3>What I can do for you</h3>
              <p>
                I'd like to provide a diligent and reliable source of
                functional, clean code. Front-end and back-end integration. From
                me, you can expect organized, and thoughtful production. Like
                many developers, I value the appearance, layout, and
                functionality of a website just as importantly as I do lines of
                code. It's imperative to me to maintain the ambition to learn,
                and take on new ideas. I immerse myself in my projects, and
                unrelentingly push until the job is done right.{' '}
              </p>
            </div>
          </div>
        </section>
        <hr />
        <section class='background'>
          <h4>Portfolio</h4>
          <div class='group2'>
            <div class='item'>
              <p>
                Description of projectBrunch mustache meditation hammock
                taxidermy. Aesthetic bespoke everyday carry flannel kickstarter
                deep v, readymade hashtag raw denim iPhone craft beer.
              </p>
              <img src={foliage} alt='live project #1' class='roundme' />
              <p>skills / relevant stack information here. </p>
              <p>
                <a
                  target='_blank'
                  href='https://www.google.com'
                  rel='noreferrer'
                >
                  Project #1
                </a>
              </p>
              <p>
                <a
                  target='_blank'
                  href='https://www.google.com'
                  rel='noreferrer'
                >
                  GitHub Repo
                </a>
              </p>
              <hr />
            </div>
            <div class='item'>
              <p>
                Squid pitchfork actually, fixie cornhole meditation migas salvia
                succulents. Lyft bitters everyday carry chicharrones glossier
                helvetica lomo crucifix cornhole. Ethical williamsburg hot
                chicken scenester normcore hoodie.
              </p>
              <img src={foliage} alt='live project #2' class='roundme' />
              <p>skills / relevant stack information here. </p>
              <p>
                <a
                  target='_blank'
                  href='https://www.google.com'
                  rel='noreferrer'
                >
                  Project #2
                </a>
              </p>
              <p>
                <a
                  target='_blank'
                  href='https://www.google.com'
                  rel='noreferrer'
                >
                  GitHub Repo
                </a>
              </p>
              <hr />
            </div>
          </div>
          <div class='group2'>
            <div class='item'>
              <p>
                Vaporware fingerstache iceland shoreditch artisan asymmetrical.
                Cliche VHS hoodie, gastropub intelligentsia hot chicken bespoke
                ennui readymade palo santo tofu PBR&B semiotics.
              </p>
              <img src={foliage} alt='live project #3' class='roundme' />
              <p>skills / relevant stack information here. </p>
              <p>
                <a
                  target='_blank'
                  href='https://www.google.com'
                  rel='noreferrer'
                >
                  Project #3
                </a>
              </p>
              <p>
                <a
                  target='_blank'
                  href='https://www.google.com'
                  rel='noreferrer'
                >
                  GitHub Repo
                </a>
              </p>
              <hr />
            </div>
            <div class='item'>
              <p>
                Disrupt chambray neutra everyday carry 3 wolf moon edison bulb
                tacos waistcoat DIY butcher jean shorts. Put a bird on it
                hashtag venmo, kinfolk asymmetrical neutra unicorn you probably
                haven't heard of them.
              </p>
              <img src={foliage} alt='live project #4' class='roundme' />
              <p>skills / relevant stack information here. </p>
              <p>
                <a
                  target='_blank'
                  href='https://www.google.com'
                  rel='noreferrer'
                >
                  Project #4
                </a>
              </p>
              <p>
                <a
                  target='_blank'
                  href='https://www.google.com'
                  rel='noreferrer'
                >
                  GitHub Repo
                </a>
              </p>
              <hr />
            </div>
          </div>
        </section>

        <section>
          <div class='group'>
            <div class='item'>
              <p>Interested in working together?</p>
              <ul>
                <li>
                  <a
                    target='_blank'
                    href='https://github.com/okaysame/'
                    rel='noreferrer'
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://www.linkedin.com/in/agiannotti/'
                    rel='noreferrer'
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='mailto:aj.gianno@gmail.com'
                    rel='noreferrer'
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <form action='https://formspree.io/f/mleolezp' method='POST'>
                <label>
                  <input type='text' name='_replyto' placeholder='Email' />
                </label>
                <label>
                  <textarea name='message' placeholder='Message'></textarea>
                </label>
                <button type='submit'>Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <nav>
          <p>
            <a href='#home'>Top</a>
          </p>
        </nav>
        <p>© Anthony Giannotti</p>
      </footer>
    </div>
  );
}

export default App;
