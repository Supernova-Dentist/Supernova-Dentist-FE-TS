# Supernova Dental Website

## Node.js runtime

Use Node.js 24.22.1 or a later 24.x patch. Version 24.22.1 fixes the
[October 2026 security vulnerabilities](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases),
including CVE-2026-111497 in the Brotli decoder. Run `nvm install` and `nvm use`
in this directory to use the version in `.nvmrc` locally.

On Vercel, `engines.node` selects the 24.x release line; Vercel controls the
exact patch version. Deploy the updated commit (or allow Git auto-deploy),
and verify the deployed runtime is at least 24.22.1. The build command prints
`[node-version:build] v...` in Build Logs. The instrumentation hook prints
`[node-version:runtime] v...` when each Node.js server instance starts.
After deployment, visit a server-rendered route such as `/consent-forms` and
search Vercel Runtime Logs for `node-version:runtime`. Static pages may not
start a server instance. The runtime entry confirms the serving process;
the build entry only confirms the build machine. A local version change
alone does not confirm production is patched.

## Pages Overview

### **Home Page**

The homepage of Supernova Dental introduces the practice and provides key details about the services offered. It also highlights current promotions, including the _Smile Brighter_ promotion, which is visually represented on the page. The home page is the most important for SEO, containing strategic keywords and images to attract search engine traffic.

### **Find Us Page**

This page provides information about the Supernova Dental practice location. It includes details such as the address, directions, and possibly a map to help patients find the clinic. This page is optimized for local SEO to ensure people in the surrounding area can easily find the practice online.

### **Pricing Page**

The pricing page outlines the costs of various dental services offered at Supernova Dental. It includes information on pricing for treatments such as checkups, Invisalign, whitening, implants, and emergency care. The page also provides details about available payment plans or special offers for specific treatments.

### **Enquiry Page**

The enquiry page allows visitors to send in their questions or requests for appointments. It contains a contact form that collects details such as name, email, phone number, and the nature of the inquiry. This page is designed to encourage visitors to get in touch with the practice for further information or to book a consultation.

## Sitemap Details

- **Home Page**

  - URL: [https://www.supernovadental.co.uk/](https://www.supernovadental.co.uk/)
  - Last Modified: January 6, 2025
  - Frequency of Updates: Daily
  - Priority: High
  - Image: _Supernova Dental - Smile Brighter Promotion_

- **Find Us Page**

  - URL: [https://www.supernovadental.co.uk/find-us](https://www.supernovadental.co.uk/find-us)
  - Last Modified: January 1, 2025
  - Frequency of Updates: Weekly
  - Priority: Medium

- **Pricing Page**

  - URL: [https://www.supernovadental.co.uk/pricing](https://www.supernovadental.co.uk/pricing)
  - Last Modified: January 1, 2025
  - Frequency of Updates: Weekly
  - Priority: Medium

- **Enquiry Page**
  - URL: [https://www.supernovadental.co.uk/enquiry](https://www.supernovadental.co.uk/enquiry)
  - Last Modified: January 1, 2025
  - Frequency of Updates: Monthly
  - Priority: Low

These pages are structured to help search engines crawl and index the key content of the site, improving SEO and ensuring that visitors can easily find the information they need.
