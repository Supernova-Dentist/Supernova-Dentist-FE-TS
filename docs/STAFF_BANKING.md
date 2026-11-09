# Staff admin hub and cash handovers

The team can bookmark `/admin` and unlock it with the existing consent forms
staff passcode. Patient consent forms are now under `/admin/consent-forms`.
The old consent form URLs still redirect. Consent submission and email delivery
use the existing endpoints.

## How to record a handover

1. Open **Cash handover & banking**. Both people count the cash, together or
   separately, and agree the amount before signing. Enter that amount. The PDF
   records the source as **Reception till**. The person handing over the cash
   selects their name and signs.
2. The recipient selects their name and signs to accept responsibility for the
   cash. The form records the UK date and time of each signature automatically.
   Select **Save and email signed PDF**.
   The PDF is sent to enquiries@supernovadental.co.uk using the consent forms'
   email service. The confirmation offers a PDF download and an email retry if
   delivery is unconfirmed.

If you are taking cash yourself, select **Taking cash directly from the till**,
enter the amount, select Adam, Scott or **Other team member**, and sign once.
The PDF records you as the collector and is emailed to the same inbox.

## Deployment settings

Deploy the enquiry backend before the frontend. Set these values in the
deployment environment:

| Setting | Where | Purpose |
| --- | --- | --- |
| `BANKING_API_SECRET` | Frontend and backend | The same random server-to-server secret, at least 32 characters. Keep it out of all public environment variables. |

Keep the existing frontend consent passcode and session secret configured.
The frontend proxies banking to the existing enquiry backend URL. Set
`BANKING_BACKEND_URL` on the frontend only if banking should use a different
backend, such as a test service. The backend
requires Firestore Admin access to the `cashHandovers` collection, including
its `files` subcollections. Use server credentials and keep those records
unavailable to direct clients in Firestore security rules.

On a test deployment, sign a handover with synthetic data, check for the PDF
in the inbox and confirm it can be downloaded from the confirmation. Check that
a browser without the staff session cannot download the PDF.
