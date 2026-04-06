import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">

      {/* 🔥 HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-500 mt-2">
          We'd love to hear from you. Reach out to us anytime!
        </p>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* 📩 LEFT SIDE */}
        <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Get In Touch
          </h2>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <p className="text-gray-600">Blantyre, Malawi</p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-blue-600 text-xl" />
            <p className="text-gray-600">+265 999 000 000</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-xl" />
            <p className="text-gray-600">stjoseph@gmail.com</p>
          </div>

          {/* 🔥 FORM */}
          <form className="space-y-4 mt-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* 🗺️ MAP */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.053759473609!2d35.1689637!3d-15.801119099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d84b383787c45f%3A0x8e4c8c5b0e0a9bcc!2sSt.%20Josephs%20College%20of%20Nursing%20and%20Midwifery!5e0!3m2!1sen!2smw!4v1775399579466!5m2!1sen!2smw"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="location map"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default Contact;