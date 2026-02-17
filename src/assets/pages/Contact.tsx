const Contact = () => {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-3"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg p-3"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full border rounded-lg p-3"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
