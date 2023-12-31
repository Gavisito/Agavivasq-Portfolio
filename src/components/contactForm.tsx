const ContactForm: React.FC = () => {
  return (
      <div className="Contact-Form">
        <h2>Contact Me</h2>
        <form>
          <div className="fm-row-one">
            <div className="inputs_section">
              <label htmlFor="from_name">Name:</label>
              <input type="text" name="from_name" placeholder="Enter Your Name" required />
            </div>
            <div className="inputs_section">
              <label htmlFor="from_email">Email:</label>
              <input type="email" name="from_email" placeholder="Enter Your Email" required />
            </div>
          </div>
          <div className="fm-row-two">
          <div className="inputs_section">
              <label htmlFor="message">Message:</label>
              <textarea name="message" placeholder="Write your inquires, comments, and concerns here. Thank you!" required />
            </div>
          </div>
          <div>
            <input type="submit" name="submitbtn" value="Send Message" required />
          </div>
        </form>
      </div>
  );
};

export default ContactForm;