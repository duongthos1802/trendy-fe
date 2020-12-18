import Document, { Head, Html, Main, NextScript } from "next/document"
import React from "react"
import { CONFIG } from "../config"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta httpEquiv='X-UA-Compatible' content='IE=EmulateIE9' />
          <meta httpEquiv='X-UA-Compatible' content='IE=EmulateIE10' />
          <meta httpEquiv='X-UA-Compatible' content='IE=EmulateIE11' />
          {/* <!-- Favicon Icon --> */}
          <link
            rel='shortcut icon'
            type='image/x-icon'
            href='/static/assets/images/favicon.png'
          />
          {/* <!-- Animation CSS --> */}
          <link rel='stylesheet' href='/static/assets/css/animate.css' />
          {/* <!-- Latest Bootstrap min CSS --> */}
          <link
            rel='stylesheet'
            href='/static/assets/bootstrap/css/bootstrap.min.css'
          />
          {/* <!-- Icon Font CSS --> */}
          <link rel='stylesheet' href='/static/assets/css/all.min.css' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
            integrity='sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=='
            crossorigin='anonymous'
          />
          <link rel='stylesheet' href='/static/assets/css/ionicons.min.css' />
          <link rel='stylesheet' href='/static/assets/css/themify-icons.css' />
          <link rel='stylesheet' href='/static/assets/css/linearicons.css' />
          <link rel='stylesheet' href='/static/assets/css/flaticon.css' />
          {/* <!--- owl carousel CSS--> */}
          <link
            rel='stylesheet'
            href='/static/assets/owlcarousel/css/owl.carousel.min.css'
          />
          <link
            rel='stylesheet'
            href='/static/assets/owlcarousel/css/owl.theme.css'
          />
          <link
            rel='stylesheet'
            href='/static/assets/owlcarousel/css/owl.theme.default.min.css'
          />
          {/* <!-- Slick CSS --> */}
          <link rel='stylesheet' href='/static/assets/css/slick.css' />
          <link rel='stylesheet' href='/static/assets/css/slick-theme.css' />
          {/* <!-- Magnific Popup CSS --> */}
          <link rel='stylesheet' href='/static/assets/css/magnific-popup.css' />
          {/* <!-- DatePicker CSS --> */}
          <link href='/static/assets/css/datepicker.min.css' rel='stylesheet' />
          {/* <!-- TimePicker CSS --> */}
          <link
            href='/static/assets/css/mdtimepicker.min.css'
            rel='stylesheet'
          />
          {/* <!-- Style CSS --> */}
          <link rel='stylesheet' href='/static/assets/css/style.css' />
          <link rel='stylesheet' href='/static/assets/css/responsive.css' />
          <link
            id='layoutstyle'
            rel='stylesheet'
            href='/static/assets/color/theme-red.css'
          />

          {/* <!-- Google Font --> */}
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Fugaz+One&family=Open+Sans&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
            rel='stylesheet'
          />
        </Head>
        <Main />
        <NextScript />
        <script src="/static/assets/js/jquery-1.12.4.min.js"></script>
        {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script> */}

        <script src='/static/assets/bootstrap/js/bootstrap.min.js'></script>
        <script src='/static/assets/owlcarousel/js/owl.carousel.min.js'></script>
        <script src='/static/assets/js/magnific-popup.min.js'></script>
        <script src='/static/assets/js/waypoints.min.js'></script>
        <script src='/static/assets/js/parallax.js'></script>
        <script src='/static/assets/js/jquery.countdown.min.js'></script>
        <script src='/static/assets/js/jquery.countTo.js'></script>
        <script src='/static/assets/js/imagesloaded.pkgd.min.js'></script>
        <script src='/static/assets/js/isotope.min.js'></script>
        <script src='/static/assets/js/jquery.appear.js'></script>
        <script src='/static/assets/js/jquery.dd.min.js'></script>
        <script src='/static/assets/js/slick.min.js'></script>
        <script src='/static/assets/js/datepicker.min.js'></script>
        <script src='/static/assets/js/mdtimepicker.min.js'></script>
        <script src='/static/assets/js/scripts.js'></script>

        <script src='https://code.iconify.design/1/1.0.7/iconify.min.js'></script>
      </Html>
    )
  }
}

export default MyDocument
