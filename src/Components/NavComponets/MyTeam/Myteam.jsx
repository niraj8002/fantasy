import React from 'react';
import './Myteam.css';

const MyTeam = () => {
  return (
    <>
      <div className="myteam-landing">
        <nav className="myteam-navbar">
        </nav>

        <div className="myteam-content">
          <div className="myteam-left">
            <h2>SOCCER LIFE</h2>
            <h4><span className="highlight">20 GOALS</span> YOU WILL <span className="highlight">NEVER SEE AGAIN</span></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>

            <div className="email-subscribe">
              <input type="email" placeholder="Email" />
              <button>SEND</button>
            </div>

            <div className="team-badge">
              <img src="../../../../public/TEAM1.jpg" alt="Team Badge" />
            </div>
          </div>
          <div className="myteam-right">
          </div>
        </div>
      </div>


      <div className="bg-teal-700 text-white py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-10 items-center">

          {/*  TOP IMAGE SECTION */}
          <div className="flex justify-center">
            <img
              src="/A1.jpg"
              alt="Tennis Tournament"
              className="rounded-xl w-full max-w-md shadow-xl"
            />
          </div>

          {/*  TEXT SECTION BELOW IMAGE */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
              ABOUT TENNISKHELO
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-center md:text-left">
              At TennisKhelo, our mission is simple but powerful: to grow tennis in India and provide a platform where both players and academies can thrive. Recognized as the best tennis website in India, TennisKhelo isn’t just a tournament management app—it’s a comprehensive solution offering features like league management, player rankings, nearby academy search, and even the ability to book a court.
            </p>

            {/* EXPANDABLE SECTION */}
            <details className="bg-white text-teal-700 p-4 rounded-lg shadow-md cursor-pointer">
              <summary className="font-semibold text-lg hover:underline hover:text-teal-900 transition-all">
                EXPLORE MORE ABOUT TENNISKHELO
              </summary>
              <div className="mt-4 space-y-6 text-gray-800">
                <img
                  src="/banner (1).png"
                  alt="Technical Team"
                  className="rounded-xl w-full max-w-md shadow-lg mb-4"
                />
                <h3 className="text-xl font-bold">Behind TennisKhelo</h3>
                <p>The Technical Team Powering India’s Top Tennis App...</p>
                <h3 className="text-xl font-bold">The Journey Behind TennisKhelo</h3>
                <p>At TennisKhelo, we’ve built more than just an app...</p>

                <h3 className="text-xl font-bold">From Dream to Reality</h3>
                <p>The story began with a simple dream—to make tennis accessible...</p>

                <h3 className="text-xl font-bold">The Learning Curve</h3>
                <p>We tested every tennis scenario—from local tournaments to major leagues...</p>

                <h3 className="text-xl font-bold">Our Biggest Challenges</h3>
                <p>Integrating AITA rankings and real-time tournament tracking was tough...</p>

                <h3 className="text-xl font-bold">Core Features</h3>
                <ul className="list-disc list-inside">
                  <li>Tournament Management</li>
                  <li>League Management</li>
                  <li>Academy Finder</li>
                  <li>Book a Court</li>
                </ul>

                <h3 className="text-xl font-bold">The Heart of TennisKhelo</h3>
                <p>We are developers, but also tennis lovers...</p>

                <h3 className="text-xl font-bold">What the Future Holds</h3>
                <p>TennisKhelo aims to be India’s go-to tennis platform...</p>

                <h3 className="text-xl font-bold">Contact & More</h3>
                <ul className="list-disc list-inside">
                  <li>Phone: +91 9090833334</li>
                  <li>Email: info@tenniskhelo.com</li>
                  <li>Blogs, Rankings, and Opportunities</li>
                  <li>Developed by Future Profilez Pvt. Ltd.</li>
                </ul>
                {/* continue other sections */}
              </div>
            </details>

            {/* DIFFERENTIATOR BOX */}
            <div className="mt-10 bg-teal-600 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">What Makes Us Different?</h3>
              <ul className="list-disc list-inside text-base space-y-1">
                <li>Real-time tournament tracking</li>
                <li>AI-based player performance analysis</li>
                <li>Integration with national ranking systems</li>
                <li>Custom academy and coach profiles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[350px] w-full flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('../../../../public/A1.jpg')] bg-cover bg-center z-0"></div>


        {/* Black Blur Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10 pointer-events-none"></div>

        {/* Foreground Content */}
        <div className="relative z-20 px-4 text-white">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-3">ACE YOUR GAME TODAY!</h1>
          <p className="text-xs md:text-base mb-5 max-w-xl mx-auto">
            Ready to hit the courts and elevate your tennis skills? Book your tennis court now and enjoy seamless access to top-notch facilities!
          </p>
          <a
            href="https://tenniskhelo.com/court/lists"
            className="inline-block bg-white text-black font-semibold px-5 py-2 rounded shadow hover:bg-gray-100 transition z-30"
          >
            BOOK A COURT
          </a>

        </div>
      </div>


      <div className="relative bg-gray-900 text-white py-12 px-6 md:px-16 rounded-xl overflow-hidden mt-10">

        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/fantasy-bg.jpg')" }} // ✅ Replace with your fantasy background image
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">Fantasy Team Insights</h2>
          <p className="text-sm mb-6 text-gray-300">
            Build your dream fantasy tennis team, track live player stats, and compete in weekly challenges.
          </p>

          {/* Fantasy Info Blocks */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-green-400">🏆 Team Lineup</h4>
              <p className="text-sm text-gray-300">
                Select top players based on real-time stats. Get insights to help you build a champion lineup.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-green-400">📈 Player Performance</h4>
              <p className="text-sm text-gray-300">
                Live updates and past performance trends help you make better picks and substitutions.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-green-400">💰 Earn Rewards</h4>
              <p className="text-sm text-gray-300">
                Compete in tournaments and win exciting prizes as your team climbs the leaderboard!
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-green-400">📅 Match Calendar</h4>
              <p className="text-sm text-gray-300">
                Stay updated with upcoming matches so your team never misses a scoring opportunity.
              </p>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <a
            href="/dashboard"
            className="inline-block px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition rounded"
          >
            LEARN MORE..
          </a>
        </div>
      </div> 


{/* Wrapper must have a set height for h-full to work */}
<div className="flex flex-col md:flex-row bg-black text-white rounded-xl overflow-hidden mt-10 md:h-[400px]">
  {/* Text Section */}
  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
      PLAY AND COMPETE IN THRILLING TOURNAMENTS NEARBY
    </h2>
    <p className="text-gray-300 mb-6">
      Compete against the best players and see your name soar through the ranks. Track your progress, surpass records,
      and establish yourself as a tennis champion. Are you ready to dominate the leaderboard?
    </p>
    <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition rounded w-fit">
      NEARBY TOURNAMENTS
    </button>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 h-[300px] md:h-full">
    <img
      src="../../../../public/l1.jpg"
      alt="Tennis Tournament"
      className="w-full h-full object-cover"
    />
  </div>
</div>

<div className="flex flex-col md:flex-row-reverse bg-black text-white rounded-xl overflow-hidden mt-10 md:h-[400px]">
  {/* Text Section */}
  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
      PLAY AND COMPETE IN THRILLING TOURNAMENTS NEARBY
    </h2>
    <p className="text-gray-300 mb-6">
      Compete against the best players and see your name soar through the ranks. Track your progress, surpass records,
      and establish yourself as a tennis champion. Are you ready to dominate the leaderboard?
    </p>
    <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition rounded w-fit">
      NEARBY TOURNAMENTS
    </button>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 h-[300px] md:h-full">
    <img
      src="../../../../public/tweener-vue-terrain-image.webp"
      alt="Tennis Tournament"
      className="w-full h-full object-cover"
    />
  </div>
</div>











      <div className="team-details-container">
        <div className="team-card">
          <img src="../../../../public/s10.jpg" alt="FC Barcelona" className="team-img" />
          <div className="team-info">
            <h2>Virat Kohli</h2>
            <p>One of the most successful Cricketor clubs in the world.</p>
            <ul className="team-stats">
              <li><strong>Country:</strong>India</li>
              <li><strong>League:</strong>Premium Leage</li>
              <li><strong>Trophies:</strong>76</li>
            </ul>
            <button className="join-btn">Join Team</button>
          </div>
        </div>

        <div className="team-card">
          <img src="../../../../public/S9.jpg" alt="Manchester United" className="team-img" />
          <div className="team-info">
            <h2>Manchester United</h2>
            <p>Historic English club with millions of fans.</p>
            <ul className="team-stats">
              <li><strong>Country:</strong> England</li>
              <li><strong>League:</strong> Premier League</li>
              <li><strong>Trophies:</strong> 88</li>
            </ul>
            <button className="join-btn">Join Team</button>
          </div>
        </div>

        <div className="team-card">
          <img src="../../../../public/s11.jpg" alt="Juventus" className="team-img" />
          <div className="team-info">
            <h2>Juventus</h2>
            <p>Top Italian club with a rich history.</p>
            <ul className="team-stats">
              <li><strong>Country:</strong> Italy</li>
              <li><strong>League:</strong> Serie A</li>
              <li><strong>Trophies:</strong> 70</li>
            </ul>
            <button className="join-btn">Join Team</button>
          </div>
        </div>

        <div className="team-card">
          <img src="../../../../public/s12.jpg" alt="Bayern Munich" className="team-img" />
          <div className="team-info">
            <h2>Bayern Munich</h2>
            <p>Germany’s most dominant football club.</p>
            <ul className="team-stats">
              <li><strong>Country:</strong> Germany</li>
              <li><strong>League:</strong> Bundesliga</li>
              <li><strong>Trophies:</strong> 78</li>
            </ul>
            <button className="join-btn">Join Team</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center bg-white">
        {/* Background Image Section */}
        <div style={{ backgroundImage: 'cover' }}>
          <img src="../../../../public/t2.jpg" ></img>
          <div>
            {/* अन्य सामग्री यहाँ */}
          </div>

        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 p-6 text-center md:text-left">
          <h4 className="text-sm font-semibold text-gray-600 uppercase mb-2">
            What Do We Do
          </h4>
          <h2 className="text-3xl font-bold text-black mb-4">
            Transforming Fantasy Sports Strategy with <br />
            <span className="text-indigo-600">AI-Powered Insights</span>
          </h2>
          <p className="text-gray-700 mb-2">
            BeatFantasy is where we revolutionize the way sports fans engage with fantasy sports.
            Our platform, powered by advanced AI and analytics, empowers users to turn their passion for sports into a smart investment strategy.
          </p>
          <p className="text-gray-700">
            We understand that fantasy sports enthusiasts are not just looking for entertainment but also want to make informed decisions that can yield profitable results.
            That's why we have developed a cutting-edge platform that utilizes AI and analytics to provide users with valuable insights and recommendations.
          </p>
        </div>
      </div>


      <div className="myteam-hero relative w-full h-screen bg-cover bg-center text-white">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-16 py-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Our platform helps users use AI and<br /> analytics to make informed decisions
            </h2>
            <div className="h-1 w-16 bg-red-600"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mt-4">
              <div className="p-4 border border-white rounded-md backdrop-blur-sm bg-white/10">
                <h3 className="text-lg font-semibold">Player selection</h3>
                <p className="text-sm">BeatFantasy AI powered player selection</p>
              </div>
              <div className="p-4 border border-white rounded-md backdrop-blur-sm bg-white/10">
                <h3 className="text-lg font-semibold">Detailed Stats</h3>
                <p className="text-sm">Statistics to make data-driven decision when choosing teams</p>
              </div>
              <div className="p-4 border border-white rounded-md backdrop-blur-sm bg-white/10 col-span-1 md:col-span-2">
                <h3 className="text-lg font-semibold">Fantasy Experts</h3>
                <p className="text-sm">BeatFantasy’s experts help you to choose right teams for high winning possibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="myteam-hero text-white">
        <div className="overlay"></div>

        <div className="relative z-10 py-16 px-4 md:px-16">
          <div className="stats flex flex-col md:flex-row justify-around items-center text-center mb-12">
            <div>
              <p className="text-lg font-medium">Grand League winners</p>
              <p className="text-2xl font-bold text-red-500">67k+</p>
            </div>
            <div>
              <p className="text-lg font-medium">Small League winners</p>
              <p className="text-2xl font-bold text-red-500">1cr+</p>
            </div>
            <div>
              <p className="text-lg font-medium">Total Winning</p>
              <p className="text-2xl font-bold text-red-500">7cr+</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            How <span className="text-red-500">BeatFantasy</span> helped people to choose a winning team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="testimonial-box">
              <div className="testimonial-header">
                <div className="initials">RS</div>
                <div>
                  <h4 className="font-semibold">Ravi Sharma</h4>
                  <p className="text-sm">Pune, Maharashtra</p>
                </div>
              </div>
              <p className="win-amount">WON ₹12,50,000</p>
              <p className="testimonial-text">
                BeatFantasy made it so easy to generate winning teams! I had always struggled to figure out the best picks, but now with this tool, I feel confident about my choices. Winning ₹12.5 lakhs is just amazing! Highly recommended.
              </p>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-header">
                <div className="initials">SV</div>
                <div>
                  <h4 className="font-semibold">Sangeeta Verma</h4>
                  <p className="text-sm">Jaipur, Rajasthan</p>
                </div>
              </div>
              <p className="win-amount">WON ₹9,80,000</p>
              <p className="testimonial-text">
                I never thought I'd win so much playing fantasy sports, but BeatFantasy proved me wrong! It's incredibly accurate in predicting the best players, and the user-friendly interface makes it a breeze to use. Winning nearly ₹10 lakhs has been a life-changer!
              </p>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-header">
                <div className="initials">VR</div>
                <div>
                  <h4 className="font-semibold">Vikram Rao</h4>
                  <p className="text-sm">Hyderabad, Telangana</p>
                </div>
              </div>
              <p className="win-amount">WON ₹14,00,000</p>
              <p className="testimonial-text">
                The AI tool is so smart! I followed its suggestions for a couple of weeks, and I've already won ₹14 lakhs. The team-building process is so much faster and more efficient now.
              </p>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-header">
                <div className="initials">KS</div>
                <div>
                  <h4 className="font-semibold">Karan Singh</h4>
                  <p className="text-sm">Lucknow, Uttar Pradesh</p>
                </div>
              </div>
              <p className="win-amount">WON ₹10,30,000</p>
              <p className="testimonial-text">
                BeatFantasy has taken my fantasy game to the next level! It’s like having a personal coach for your team. The best part? I won ₹10.3 lakhs last month, and I’m excited to keep playing!
              </p>
            </div>
          </div>
        </div>
      </div>



    </>

  );
};
export default MyTeam;

