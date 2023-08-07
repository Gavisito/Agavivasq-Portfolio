const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact">
      <div className="Contact-Form">
        <h2>Contact Me</h2>
        <form>
          <div className="fm-row-one">
            <div>
              <input type="text" name="from_name" placeholder="Enter Your Name" required />
            </div>
            <div>
              <input type="email" name="from_email" placeholder="Enter Your Email" required />
            </div>
          </div>
          <div className="fm-row-two">
            <div>
              <textarea name="message" placeholder="Write your message about any particular inquiries you have" required />
            </div>
          </div>
          <div>
            <input type="submit" name="submitbtn" value="Send Message" required />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
