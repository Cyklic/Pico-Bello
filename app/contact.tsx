import classes from "./contact.module.css";

export default function Contact() {
  return (
    <div className={classes.contact}>
      <div className={classes.contTitle}>
        <h2>Contact Us</h2>
      </div>
      <div className={classes.contText}>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page.
        </p>
      </div>
      <div className={classes.formm}>
        <form action="">
          <div className={classes.row}>
            <div className={classes.inGroup}>
              <p>Full Name</p>
              <input type="text" id="name" />
              <label htmlFor="name">Enter your full name</label>
            </div>

            <div className={classes.inGroup}>
              <p>Email</p>
              <input type="text" id="email" />
              <label htmlFor="email">Enter your email address</label>
            </div>
          </div>

          <div className={classes.row}>
            <div className={classes.inGroup}>
              <p>Project Scope</p>
              <input type="text" id="proScope" />
              <label htmlFor="proScope">Enter project Title and scope </label>
            </div>

            <div className={classes.inGroup}>
              <p>Project Category</p>
              <input type="text" id="proCate" />
              <label htmlFor="proCate">Please Choose</label>
            </div>
          </div>

          <div className={classes.inGroup}>
            <p>More Info</p>
            <textarea id="message" rows={16}></textarea>
            <label htmlFor="message">
              Please write us additional information about your request
            </label>
          </div>
          <button type="submit" className={classes.sumBtn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
