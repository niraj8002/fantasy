import React from 'react';
import './Myteam.css';

const MyTeam = () => {
  return (
    <>


      <div className="min-h-screen px-4 py-8 bg-[url('../../../../public/banner1.png')] bg-cover bg-center bg-no-repeat">
        <nav className="mb-6">
          {/* Your navbar content can go here */}
        </nav>

        <div className="p-6 rounded-xl shadow-lg">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-8">

            {/* Left Content */}
            <div className="w-full md:w-1/2 space-y-4 text-white">
              <h2 className="text-3xl md:text-4xl font-bold">SOCCER LIFE</h2>
              <h4 className="text-xl md:text-2xl font-semibold">
                <span className="text-green-400 font-bold">20 GOALS</span> YOU WILL <span className="text-green-400 font-bold">NEVER SEE AGAIN</span>
              </h4>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
              </p>

              {/* Email Subscribe */}
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 border border-white bg-transparent text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto"
                />
                <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                  SEND
                </button>
              </div>

              {/* Team Badge */}
              <div className="mt-4">
                <img
                  src="/TEAM1.jpg"
                  alt="Team Badge"
                  className="w-40 h-40 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2">
              {/* Optional: Add an image or animation */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-12 px-6 md:px-20">
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
            <h2 className="w-100% h-300px">
              ABOUT TENNISKHELO
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-center md:text-left">
              At TennisKhelo, our mission is simple but powerful: to grow tennis in India and provide a platform where both players and academies can thrive. Recognized as the best tennis website in India, TennisKhelo isn’t just a tournament management app—it’s a comprehensive solution offering features like league management, player rankings, nearby academy search, and even the ability to book a court.
            </p>

            {/* EXPANDABLE SECTION */}
            <details className="bg-gray-800 text-teal-300 p-4 rounded-lg shadow-md cursor-pointer">
              <summary className="font-semibold text-lg hover:underline hover:text-teal-100 transition-all">
                EXPLORE MORE ABOUT TENNISKHELO
              </summary>
              <div className="mt-4 space-y-6 text-grey-200">
                <img
                  src="/banner (1).png"
                  alt="Technical Team"
                  className="rounded-xl w-full max-w-md shadow-lg mb-8"
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

      <div className="w-full flex flex-col items-center gap-y-10 py-10 bg-gray-900">
        {/* Section 1 */}
        <div className="relative w-11/12 md:w-5/6 flex flex-col md:flex-row items-center justify-center text-center overflow-hidden rounded-lg shadow-lg bg-gray-800 h-auto md:h-[350px]">
          {/* Left Image */}
          <div className="w-full md:w-1/2 h-64 md:h-full">
            <img
              src="/india-football.jpg"
              alt="Tennis Court"
              className="object-cover w-full h-full md:rounded-l-lg"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 p-6 text-white flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-3">
              ACE YOUR GAME TODAY!
            </h1>
            <p className="text-sm sm:text-base mb-5 max-w-xl mx-auto">
              Ready to hit the courts and elevate your tennis skills? Book your tennis court now and enjoy seamless access to top-notch facilities!
            </p>
            <a
              href="/create-team"
              className="inline-block bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 transition"
            >
              CREATE TEAM
            </a>
          </div>
        </div>

        {/* Section 2 */}
        <div className="relative w-11/12 md:w-5/6 flex flex-col md:flex-row items-center justify-center text-center overflow-hidden rounded-lg shadow-lg bg-gray-800 h-auto md:h-[350px]">
          {/* Left Image */}
          <div className="w-full md:w-1/2 h-64 md:h-full">
            <img
              src="../../../../public/player.jpg"
              alt="Tennis Court"
              className="object-cover w-full h-full md:rounded-l-lg"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 p-6 text-white flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-3">
              What Do We Do
            </h1>
            <p className="text-sm sm:text-base mb-5 max-w-xl mx-auto">
              BeatFantasy is where we revolutionize the way sports fans engage with fantasy sports.
              Our platform, powered by advanced AI and analytics, empowers users to turn their passion for sports into a smart investment strategy.
              We understand that fantasy sports enthusiasts are not just looking for entertainment but also want to make informed decisions that can yield profitable results.
              That's why we have developed a cutting-edge platform that utilizes AI and analytics to provide users with valuable insights and recommendations.
            </p>
          </div>
        </div>
      </div>


      <div className="bg-gray-900 text-white py-10 px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold uppercase">OUR TEAM</h2>
          <p className="text-gray-300 mt-2">
            Explore fun and exciting events at our tournaments and academies
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Blog Card 1 */}
          <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
            <img src="../../../../public/f1.jpg" alt="Casper Ruud" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Casper Ruud Wins The Biggest Title Of...</h3>
              <p className="text-sm text-gray-300 mb-3">
                Casper Ruud has just made tennis history in a way that's going to stick with him for a long time...
              </p>
              <a href="#" className="text-green-400 font-semibold hover:underline">READ THE WHOLE STORY</a>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
            <img src="../../../../public/f2.jpg" alt="Dream House Academy" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">How Dream House Tennis Academy Is...</h3>
              <p className="text-sm text-gray-300 mb-3">
                Dream House Tennis Academy – Nurturing the Stars of Tomorrow. If you're in Jaipur and love...
              </p>
              <a href="#" className="text-green-400 font-semibold hover:underline">READ THE WHOLE STORY</a>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
            <img src="../../../../public/f3.jpg" alt="Novak Djokovic" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Novak Djokovic Faces An Early Exit...</h3>
              <p className="text-sm text-gray-300 mb-3">
                Madrid: A Signal of a New Reality in His Tennis Career. Novak Djokovic’s career has been a...
              </p>
              <a href="#" className="text-green-400 font-semibold hover:underline">READ THE WHOLE STORY</a>
            </div>
          </div>

          <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
            <img src="../../../../public/f4.jpg" alt="Novak Djokovic" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Novak Djokovic Faces An Early Exit...</h3>
              <p className="text-sm text-gray-300 mb-3">
                Madrid: A Signal of a New Reality in His Tennis Career. Novak Djokovic’s career has been a...
              </p>
              <a href="#" className="text-green-400 font-semibold hover:underline">READ THE WHOLE STORY</a>
            </div>
          </div>

          <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
            <img src="../../../../public/f5.jpg" alt="Novak Djokovic" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Novak Djokovic Faces An Early Exit...</h3>
              <p className="text-sm text-gray-300 mb-3">
                Madrid: A Signal of a New Reality in His Tennis Career. Novak Djokovic’s career has been a...
              </p>
              <a href="#" className="text-green-400 font-semibold hover:underline">READ THE WHOLE STORY</a>
            </div>
          </div>

          <div className="bg-gray-800 rounded overflow-hidden shadow-lg">
            <img src="../../../../public/f6.jpg" alt="Novak Djokovic" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Novak Djokovic Faces An Early Exit...</h3>
              <p className="text-sm text-gray-300 mb-3">
                Madrid: A Signal of a New Reality in His Tennis Career. Novak Djokovic’s career has been a...
              </p>
              <a href="#" className="text-green-400 font-semibold hover:underline">READ THE WHOLE STORY</a>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-gray-900 text-white py-12 px-4 md:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="../../../../public/player3.jpeg" // <-- Make sure this image is in your public folder
            alt="Tennis Tournament"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-400">Why Choose TennisKhelo?</h2>
          <p className="mb-6 text-gray-300">
            TennisKhelo offers seamless tournament management, from planning and promotion to real-time updates and post-event highlights.
            Our expertise ensures a smooth and memorable experience for players and organizers alike.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-3">
              <img src="../../../../public/Icon1 (1).png" alt="End-to-End" className="w-6 h-6" />
              <div>
                <h4 className="font-semibold text-white">End-to-End Management</h4>
                <p className="text-sm text-gray-400">From registration to results!</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3">
              <img src="../../../../public/Icon2.png" alt="Engagement" className="w-6 h-6" />
              <div>
                <h4 className="font-semibold text-white">Engagement-Driven</h4>
                <p className="text-sm text-gray-400">Boost participation effectively!</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-3">
              <img src="../../../../public/Icon3.png" alt="Custom" className="w-6 h-6" />
              <div>
                <h4 className="font-semibold text-white">Customizable Strategy</h4>
                <p className="text-sm text-gray-400">Tailored to your needs.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-3">
              <img src="../../../../public/Icon4.png" alt="Scheduling" className="w-6 h-6" />
              <div>
                <h4 className="font-semibold text-white">Hassle-Free Scheduling</h4>
                <p className="text-sm text-gray-400">Seamless and simple process.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start gap-3">
              <img src="../../../../public/Icon5.png" alt="Live Streaming" className="w-6 h-6" />
              <div>
                <h4 className="font-semibold text-white">Live Streaming</h4>
                <p className="text-sm text-gray-400">Watch events in real-time.</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex items-start gap-3">
              <img src="../../../../public/Icon9.png" alt="Archive" className="w-6 h-6" />
              <div>
                <h4 className="font-semibold text-white">Permanent Archive</h4>
                <p className="text-sm text-gray-400">Keep past events accessible.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="/plan-tournament"
              className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-green-600 transition"
            >
              Plan Your Custom Tournament Now
            </a>
          </div>
        </div>
      </div>


      <div className="relative h-[300px] md:h-[350px] px-4 py-6 bg-[url('../../../../public/vi.avif')] bg-cover bg-center bg-no-repeat">
        <nav className="mb-4">
          {/* Your navbar content can go here */}
        </nav>

        <div className="p-4 rounded-xl shadow-lg bg-transparent">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-5xl mx-auto gap-6">

            {/* Left Content */}
            <div className="w-full md:w-1/2 space-y-3 text-white">
              <h2 className="text-2xl md:text-3xl font-bold">Create Buzz & Attract
                More Players!</h2>
              <h4 className="text-lg md:text-xl font-semibold">
              </h4>
              <p className="text-sm md:text-base text-gray-100">
                Boost your tennis tournament's visibility with professionally designed banners, teasers, and ads. Engage players,
                attract sponsors, and build excitement before the first serve!
              </p>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2">
              {/* Optional: Add an image or animation */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 px-4 py-10">
        <div className="w-full max-w-4xl mx-auto space-y-10">

          {/* Header */}
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-green-400">
              Top-Rated Tennis Academies in Jaipur
            </h1>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Welcome to the foremost Tennis Academy in Jaipur, where passion meets precision! Whether you seek professional tennis training or wish to improve your game, Jaipur’s diverse range of tennis academies ensures a perfect match for your tennis aspirations.
            </p>
          </div>

          {/* Filters - Responsive */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-6 px-4 w-full">

            {/* State Filter */}
            <div className="w-full md:w-1/3">
              <label className="text-sm text-gray-400 md:hidden mb-1 block">Filter By State</label>
              <select className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white shadow-sm">
                <option value="">Filter By State</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Delhi">Delhi</option>
                <option value="Maharashtra">Maharashtra</option>
              </select>
            </div>

            {/* City Filter */}
            <div className="w-full md:w-1/3">
              <label className="text-sm text-gray-400 md:hidden mb-1 block">Filter By City</label>
              <select className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white shadow-sm">
                <option value="">Filter By City</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Jodhpur">Jodhpur</option>
                <option value="Udaipur">Udaipur</option>
              </select>
            </div>

            {/* Court Filter */}
            <div className="w-full md:w-1/3">
              <label className="text-sm text-gray-400 md:hidden mb-1 block">Filter By Court</label>
              <select className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white shadow-sm">
                <option value="">Filter By Courts</option>
                <option value="Clay">Clay</option>
                <option value="Hard">Hard</option>
                <option value="Grass">Grass</option>
              </select>
            </div>
          </div>

          {/* Academy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            <div className="bg-gray-800 p-4 rounded-xl shadow-md border border-gray-700 text-center">
              <h3 className="text-lg font-semibold text-green-400">Jaipur Tennis Club</h3>
              <p className="text-sm text-gray-300 mt-2">Location: Jaipur, Rajasthan</p>
              <p className="text-sm text-gray-300">Court Type: Clay</p>
            </div>
          </div>

        </div>
      </div>


      <div className="bg-gray-900 py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">

          {/* Left Sidebar (Player Team Info) */}
          <div className="w-full lg:w-1/4 space-y-4">
            <h3 className="text-xl font-semibold text-white">Player Teams</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="hover:text-green-400 cursor-pointer">Team Aces</li>
              <li className="hover:text-green-400 cursor-pointer">Smash Masters</li>
              <li className="hover:text-green-400 cursor-pointer">Baseline Warriors</li>
              <li className="hover:text-green-400 cursor-pointer">Topspin Titans</li>
              <li className="hover:text-green-400 cursor-pointer">Rally Kings</li>
            </ul>
          </div>

          {/* Center Content */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-green-400">
              Discover how <span className="text-white">TennisKhelo</span> has helped leagues thrive and players excel
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              From grassroots tournaments to national leagues, TennisKhelo provides the tools, visibility, and support that leagues and players need to succeed on and off the court.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/4">
            <div className="transform md:-skew-x-6 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/player7.jpg" // Update image path correctly
                alt="Tennis League Success"
                className="w-full h-auto object-cover transform md:skew-x-6"
              />
            </div>
          </div>

        </div>
      </div>

     
     <div className="bg-gray-900 text-white px-4 py-16">
  <div className="max-w-5xl w-full mx-auto space-y-16">

    <div className="text-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold text-green-400">Create or Join a Fantasy Tennis League</h2>
      <p className="text-gray-300 max-w-3xl mx-auto">
        Whether you're a seasoned player or just starting, TennisKhelo gives you a platform to create private leagues or join public ones and enjoy competitive tennis-based fantasy action!
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Create League Card */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg space-y-4">
        <h3 className="text-2xl font-semibold text-green-300">Create a League</h3>
        <p className="text-gray-300 text-sm">
          You're the league manager here. Set up a private league to play with your family and friends!
        </p>

        <div className="space-y-2">
          <label className="block text-sm">League Name</label>
          <input type="text" className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white" placeholder="Enter League Name" />
        </div>

        <div className="space-y-2">
          <label className="block text-sm">Number of Teams</label>
          <input type="number" min="2" max="20" className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white" placeholder="e.g. 10" />
        </div>

        <div className="space-y-2">
          <label className="block text-sm">Experience Level</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="experience" className="accent-green-500" />
              Pro
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="experience" className="accent-green-500" />
              Beginner
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm">Scoring</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="scoring" className="accent-green-500" />
              PPR (Points per Reception)
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="scoring" className="accent-green-500" />
              No PPR
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm">Draft Type</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="draftType" className="accent-green-500" />
              Snake
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="draftType" className="accent-green-500" />
              Salary Cap
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm">Draft Date & Time</label>
          <input type="datetime-local" className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white" />
        </div>

        <button className="mt-4 w-full bg-green-500 hover:bg-green-600 transition py-2 px-4 rounded-md font-medium">
          Create League
        </button>
      </div>

      {/* Join Public League Card */}
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg space-y-4">
        <h3 className="text-2xl font-semibold text-green-300">Join a Public League</h3>
        <p className="text-gray-300 text-sm">
          Hop into one of our public leagues and we will find people for you to play with!
        </p>

        <div className="space-y-4 overflow-y-auto max-h-96 pr-2">
          <div className="bg-gray-700 rounded-md p-4 text-sm">
            <p><span className="text-green-400 font-semibold">League:</span> National Smashers</p>
            <p><span className="text-green-400 font-semibold">Teams:</span> 12</p>
            <p><span className="text-green-400 font-semibold">Type:</span> Snake Draft</p>
          </div>

          <div className="bg-gray-700 rounded-md p-4 text-sm">
            <p><span className="text-green-400 font-semibold">League:</span> Rising Rallies</p>
            <p><span className="text-green-400 font-semibold">Teams:</span> 8</p>
            <p><span className="text-green-400 font-semibold">Type:</span> Salary Cap</p>
          </div>

          <div className="bg-gray-700 rounded-md p-4 text-sm">
            <p><span className="text-green-400 font-semibold">League:</span> Weekend Warriors</p>
            <p><span className="text-green-400 font-semibold">Teams:</span> 10</p>
            <p><span className="text-green-400 font-semibold">Type:</span> Snake Draft</p>
          </div>
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 transition py-2 px-4 rounded-md font-medium">
          Join a League
        </button>
      </div>

    </div>
  </div>
</div>



   
    


    </>

  );
};
export default MyTeam;

