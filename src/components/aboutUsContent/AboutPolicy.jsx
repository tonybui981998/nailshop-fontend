import React from "react";
import logo from "../../assets/logo.jpg";
import "./AboutPolicy.scss";

const AboutPolicy = () => {
  return (
    <div className="aboutPolicy">
      <div className="about-us">
        <div className="title">Introduction</div>
        <div className="img">
          <img src={logo} />
        </div>

        <div className="p">
          Serene and inviting—Aivy Beauty welcomes you into a world of
          relaxation and refinement. Nestled in the heart of the city, our salon
          is a retreat from the bustling streets, where time slows down and
          beauty flourishes. Every visit is more than just a service; it is an
          experience, a moment to unwind, recharge, and embrace self-care.
        </div>
        <div className="p">
          At Aivy Beauty, we believe that true beauty is cultivated with
          patience, mindfulness, and high-quality care. Our philosophy is
          simple: lasting elegance over fleeting trends. By integrating the
          finest natural ingredients with expert techniques, we ensure that
          every treatment nourishes not just the skin, but the soul.
        </div>
        <div className="p">
          Inspired by the timeless wisdom that beauty should be nurtured daily,
          we focus on treatments that enhance your natural glow—lifting,
          sculpting, and rejuvenating without the need for invasive methods.
          Through skillful hands, warm energy, and carefully curated organic
          elements, we craft an experience that restores balance, enhances
          radiance, and leaves a lasting impression.
        </div>
        <div className="p">
          In a world of quick fixes, Aivy Beauty remains a place of authenticity
          and grace. Like a woman of quiet confidence and timeless allure, we do
          not rush, nor do we conform. Instead, we celebrate beauty in its
          purest form, offering a haven where guests return time and again to
          rediscover their glow.
        </div>
      </div>
      <div className="line-about"></div>
      <div className="policy">Aivy Beauty Policy</div>
      <div className="p">
        At Aivy Beauty, we are committed to providing a relaxing and
        high-quality experience for all our clients. To ensure smooth service,
        please review our policies below:
      </div>
      <div className="p">
        Appointments & Cancellations: We encourage booking in advance to secure
        your preferred time. If you need to reschedule or cancel, please notify
        us at least 24 hours in advance. Late cancellations or no-shows may be
        subject to a fee.
      </div>
      <div className="p">
        Punctuality: Please arrive on time for your appointment. Late arrivals
        may result in a shortened service time.
      </div>
      <div className="p">
        Hygiene & Safety: We prioritize cleanliness and adhere to strict
        sanitation procedures for all tools and equipment.
      </div>
      <div className="p">
        Payment & Refunds: We accept various payment methods. All services and
        products are non-refundable, but we are happy to address any concerns
        within 48 hours of your visit.
      </div>
      <div className="p">
        Respectful Environment: To maintain a peaceful ambiance, we kindly ask
        that you keep noise to a minimum and set phones to silent mode.
      </div>
      <div className="p">
        Thank you for choosing Aivy Beauty. Your satisfaction is our priority!
        💖
      </div>
    </div>
  );
};

export default AboutPolicy;
