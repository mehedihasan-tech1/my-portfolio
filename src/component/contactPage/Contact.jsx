import { TbFileAi } from "react-icons/tb";
const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="p-12 mb-28 lg:flex justify-between items-center gap-1">
        {/* left side contact info */}
        <div className="p-4 w-full mb-18">
          <h1 className="text-2xl font-semibold mb-6">Let's Contact me</h1>

          <p className="mb-6">I'm currently open for new opportunities</p>
          <p className="mb-6">and I am looking for your message.</p>
          <div className="mt-8 py-4 md:flex gap-2">
            <div className="w-full h-24 mb-2 bg-white/5 rounded-xl md:w-40">
              <h1 className="py-4 px-3 text-md flex items-center gap-2.5">
                <TbFileAi />
                Email
              </h1>
              <p className="px-4 text-left text-sm overflow-hidden">
                mehedi172191@gmail.com
              </p>
            </div>
            <div className="w-full h-24 mb-2 bg-white/5 rounded-xl md:w-40">
              <h1 className="py-4 px-3 text-md flex items-center gap-2.5">
                <TbFileAi />
                Location
              </h1>
              <p className="px-4 text-left text-sm">Dhaka, Bangladesh</p>
            </div>
            <div className="w-full h-24 bg-white/5 rounded-xl md:w-40">
              <h1 className="py-4 px-3 text-md flex items-center gap-2.5">
                <TbFileAi />
                Availability
              </h1>
              <p className="px-4 text-left text-sm">Full Time</p>
            </div>
          </div>
        </div>
        {/* contact side */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="p-4 w-full md:w-96 rounded-xl outline-0 bg-white/5 outline-indigo-400/30 focus:outline-1"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 w-full md:w-96 rounded-xl outline-0 bg-white/5 outline-indigo-400/30 focus:outline-1"
          />
          <textarea
            name="name"
            id="messageBody"
            placeholder="Your Message"
            className="px-4 py-0.5 w-full md:w-96 h-28 outline-0 rounded-xl bg-white/5 resize-none outline-indigo-400/30 focus:outline-1"></textarea>
          <button
            type="submit"
            name="submit"
            id="submit"
            className="w-full md:w-96 px-4 py-2 flex items-center justify-around gap-2 rounded-xl bg-linear-to-br from-blue-700 to-purple-500 from-50% hover:cursor-pointer">
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
