import react from 'react';
import Layout from '../components/layout';
import { trackVisitor } from '../fetch_logic/fetch_property_data';

const Privacy = () => {

  return (
    <Layout
    metaTitle={"Privacy and Policies : KeyonProperties | Hyderabad Leading Realestate Consultancy"}
        metaDescription={"KeyonProperties Consultans and agency in hyderabad one of the leading website in hyderabad with 30+ A1 projects KeyonProp.com"}
        metaKeywords={"KeyonProperties, KeyonProp, KeyonProp.com, KeyonProperties Consultans, KeyonProperties agency, KeyonProperties hyderabad, KeyonProperties leading website, KeyonProperties 30+ A1 projects"}
    >
      <section class="inner_page_breadcrumb">
        <div class="container">
          <div class="row">
            <div class="col-xl-6">
              <div class="breadcrumb_content">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="{{url('/')}}">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Privacy & policy
                  </li>
                </ol>
                <h1 class="breadcrumb_title">Privacy & policy</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="about-section" style={{paddingTop:'10px'}}>
        <div class="container">
          <p>
            Keyon Properties and solutions operates the web site at
            www.keyonprop.com (“Site”). When you use our website, you trust us
            with your information. Our Privacy Policy is meant to help you
            understand what data we collect, why we collect it, and what we do
            with it. We respect the privacy of each user of the Site (referred
            to as "you" or "a user"), whether you are just beginning your real
            estate search or have previously visited our Site. This Privacy
            Statement gives you specific information about how we protect your
            privacy, how we treat your Personal Information, and how we use
            aggregated information. BY REGISTERING FOR OR USING THE SITE, YOU
            SIGNIFY YOUR ACCEPTANCE OF THIS PRIVACY STATEMENT. We reserve the
            right to modify this Statement at any time by posting a notice on
            the Site's home page.
          </p>
          <p>
            <b style={{textDecoration:"underline"}}>Please Note:</b> The
            information found on this website is conceptual and not a legal
            offering. Keyon Properties and solutions reserves the right to
            change, alter, add or delete any of the specifications mentioned
            herein without prior permission or notice. We do not disclose your
            information to other public bodies or individuals except as
            authorized by law. The content on this website is the exclusive
            property of Keyon Properties and solutions.
          </p>
          <p>
            When you voluntarily send us electronic mail, we will keep a record
            of this information so that we can respond to you. We only collect
            information from you when you register on our site or fill out a
            form. Also, when filling out a form on our site, you may be asked to
            enter your: name, e-mail address or phone number. You may, however,
            visit our site anonymously. In case you have submitted your personal
            information and contact details, we reserve the rights to Call, SMS,
            Email or WhatsApp about our products and offers, even if your number
            has DND activated on it.
          </p>
          <p>
            Also, like most websites, we use cookies to enhance your experience,
            gather general visitor information, and track visits to our website.
          </p>
          <p>
            If you have any questions or concerns about this Privacy Statement,
            please contact us by using the “Contact Us” feature or by visiting
            us at Plot No.22,5th floor,Muncipal No.1,98/9/3/38,Beside ICIC Bank
            ATM,Silicon Vally,Madhapur,Telangana,500081
          </p>
          <h4>Disclaimer</h4>
          <p>
            The information cited in this website is for general purpose and we
            try our best to keep the information up to date and accurate. There
            is no warranty neither from us or any third parties to the
            timeliness, exactness, performance, correctness or totality of the
            information in our site. Any reliance you place on such information
            is strictly at your own risk.
          </p>

          <p>
            In no event we are liable for any loss or damage along with no
            limitation, indirect or consequential loss or damage, or any loss or
            damage whatsoever arising from loss of data or profit, arising out
            of, or in connection with, the use of this website.
          </p>

          <p>
            Through Keyon Properties and solutions site, anyone can link to
            other websites, which are not under our control, because we have no
            control over the nature, content and availability of other sites
            that link us. The inclusion of any links does not necessarily imply
            a recommendation or support the views expressed within them.
          </p>

          <p>
            Every effort is made to keep the website up and running smoothly.
            However, Keyon Properties and solutions Pvt. Ltd., takes no
            responsibility and will not be liable for, the website being
            temporarily unavailable due to technical issues beyond our control.
          </p>

          <p>
            The data, graphics, images and the information published in the
            company blogs, eBooks, and other resources and materials may be
            indicative of the fact or opinion of the writers or experts. Readers
            are expected to use their rationality and judge the information
            carefully. Although references are given wherever possible to prove
            the authenticity of the published information, the Company, under no
            circumstances, will be liable for any expense, loss or damage
            including, without limitation, indirect or consequential loss or
            damage, or any expense whatsoever arising from use, or loss of use,
            of data, arising out of or in connection with the use of this
            website.
          </p>
          <div class="row mt-8">
            <div class="col-md-6 mb-6">
              <div class="media">
                <span class="fs-32 text-primary mr-4">
                  <i class="fa-solid fa-mobile-button fs-30 text-black opacity-75"></i>
                </span>
                <div class="media-body mt-3">
                  <h4 class="fs-16 lh-2 mb-1 text-dark">Contact</h4>
                  <div class="row mb-1">
                    <div class="col-3">
                      <span>Office</span>
                    </div>
                    <div class="col-9">
                      <a
                        href="tel:+919550917866"
                        class="text-heading font-weight-500"
                      >
                        +91-9550917866
                      </a>
                    </div>
                  </div>
                  <div class="row mb-1">
                    <div class="col-3">
                      <span>Mail id</span>
                    </div>
                    <div class="col-9">
                      <a
                        href="mailto:info@Keyonprop.com"
                        class="text-body"
                      >
                        info@Keyonprop.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Privacy;
