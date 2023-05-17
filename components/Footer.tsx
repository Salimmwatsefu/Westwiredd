'use client';

const Footer = () => {


  return (
  <footer className=" h-[50vh] from-gray-300 via-gray-400 to-gray-200 bg-gradient-to-r">
    <div className="md:flex md:gap-96  md:mx-36 pt-14">
      <div>
        <h2 className="md:text-2xl text-xl font-semibold w-48 mx-auto">Connect with us</h2>
      </div>

      <div className="flex md:gap-28 items-center justify-center gap-14 md:mt-0 mt-10">

      <div className="md:text-base text-sm">
        <h3 className="font-semibold mb-5 text-lg">Main Office</h3>
        <p>Nairobi, Kenya</p>
        <p>Westlands, Nairobi</p>
        <p>07000010101</p>
      </div>

      <div className="md:text-base text-sm">
        <h3 className=" font-semibold mb-5 text-lg">Social Media</h3>
        <p >Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
      </div>
    </div>
  </footer>
  )};

  export default Footer