import React from 'react'
import { useTranslation } from 'react-i18next';
import Button from '../../components/ui/button/Button';

export const TopButtonSection = () => {
    const { t } = useTranslation();
  const buttons = [
    {
      label: t("HOME.CURRENCY_EXCHANGE"),
      backgroundColor: "rgba(209, 209, 255, 1)",
      textColor: "#1E40AF",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.16602 13.24V11.51C3.16602 9.44001 4.85601 7.75 6.92601 7.75H18.406C20.476 7.75 22.166 9.44001 22.166 11.51V12.95H20.146C19.586 12.95 19.076 13.17 18.706 13.55C18.286 13.96 18.046 14.55 18.106 15.18C18.196 16.26 19.186 17.05 20.266 17.05H22.166V18.24C22.166 20.31 20.476 22 18.406 22H12.926"
            stroke="#29296D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.16602 12.4093V7.83937C3.16602 6.64937 3.89601 5.58933 5.00601 5.16933L12.946 2.16933C14.186 1.69933 15.516 2.61936 15.516 3.94936V7.74934"
            stroke="#29296D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.2248 13.9692V16.0292C23.2248 16.5792 22.7848 17.0292 22.2248 17.0492H20.2648C19.1848 17.0492 18.1948 16.2592 18.1048 15.1792C18.0448 14.5492 18.2848 13.9592 18.7048 13.5492C19.0748 13.1692 19.5848 12.9492 20.1448 12.9492H22.2248C22.7848 12.9692 23.2248 13.4192 23.2248 13.9692Z"
            stroke="#29296D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.66602 12H14.666"
            stroke="#29296D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.66602 16.5H9.00601C9.64601 16.5 10.166 17.02 10.166 17.66V18.94"
            stroke="#29296D"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.88602 15.2793L3.66602 16.4993L4.88602 17.7192"
            stroke="#29296D"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.166 21.7798H4.82602C4.18602 21.7798 3.66602 21.2598 3.66602 20.6198V19.3398"
            stroke="#29296D"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.94727 22.9986L10.1673 21.7786L8.94727 20.5586"
            stroke="#29296D"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: t("HOME.TRANSFER_CURRENCY"),
      backgroundColor: "rgba(200, 250, 205, 1)",
      textColor: "#047857",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 17.0605H12.5"
            stroke="#005249"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.71997 13.5H10.28C12.06 13.5 12.5 13.94 12.5 15.7V19.81C12.5 21.57 12.06 22.01 10.28 22.01H4.71997C2.93997 22.01 2.5 21.57 2.5 19.81V15.7C2.5 13.94 2.93997 13.5 4.71997 13.5Z"
            stroke="#005249"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5 15C22.5 18.87 19.37 22 15.5 22L16.55 20.25"
            stroke="#005249"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.5 9C2.5 5.13 5.63 2 9.5 2L8.45001 3.75"
            stroke="#005249"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 11C21.4853 11 23.5 8.98528 23.5 6.5C23.5 4.01472 21.4853 2 19 2C16.5147 2 14.5 4.01472 14.5 6.5C14.5 8.98528 16.5147 11 19 11Z"
            stroke="#005249"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: t("HOME.ADD_CUSTOMER"),
      backgroundColor: "rgba(255, 231, 217, 1)",
      textColor: "#BE123C",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.333 19.5H15.333"
            stroke="#7A0C2E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.333 21.5V17.5"
            stroke="#7A0C2E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.9926 10.87C12.8926 10.86 12.7726 10.86 12.6626 10.87C10.2826 10.79 8.39262 8.84 8.39262 6.44C8.38262 3.99 10.3726 2 12.8226 2C15.2726 2 17.2626 3.99 17.2626 6.44C17.2626 8.84 15.3626 10.79 12.9926 10.87Z"
            stroke="#7A0C2E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.823 21.8097C11.003 21.8097 9.19305 21.3497 7.81305 20.4297C5.39305 18.8097 5.39305 16.1697 7.81305 14.5597C10.563 12.7197 15.073 12.7197 17.823 14.5597"
            stroke="#7A0C2E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: t("HOME.ADD_CONTRACT"),
      backgroundColor: "rgba(255, 247, 205, 1)",
      textColor: "#92400E",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.666 8.25V18C20.666 21 18.876 22 16.666 22H8.66602C6.45602 22 4.66602 21 4.66602 18V8.25C4.66602 5 6.45602 4.25 8.66602 4.25C8.66602 4.87 8.91599 5.43 9.32599 5.84C9.73599 6.25 10.296 6.5 10.916 6.5H14.416C15.656 6.5 16.666 5.49 16.666 4.25C18.876 4.25 20.666 5 20.666 8.25Z"
            stroke="#7A4F01"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.666 4.25C16.666 5.49 15.656 6.5 14.416 6.5H10.916C10.296 6.5 9.73599 6.25 9.32599 5.84C8.91599 5.43 8.66602 4.87 8.66602 4.25C8.66602 3.01 9.67602 2 10.916 2H14.416C15.036 2 15.596 2.25 16.006 2.66C16.416 3.07 16.666 3.63 16.666 4.25Z"
            stroke="#7A4F01"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.66602 13H12.666"
            stroke="#7A4F01"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.66602 17H16.666"
            stroke="#7A4F01"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: t("HOME.ADD_AGENCY"),
      backgroundColor: "rgba(222, 255, 150, 1)",
      textColor: "#365314",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 22H22.5"
            stroke="#426100"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 2H7.5C4.5 2 3.5 3.79 3.5 6V22H21.5V6C21.5 3.79 20.5 2 17.5 2Z"
            stroke="#426100"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 16.5H10.5"
            stroke="#426100"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5 16.5H17.5"
            stroke="#426100"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 12H10.5"
            stroke="#426100"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5 12H17.5"
            stroke="#426100"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 7.5H10.5"
            stroke="#426100"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5 7.5H17.5"
            stroke="#426100"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: t("HOME.CONTACT_SUPPORT"),
      backgroundColor: "rgba(208, 242, 255, 1)",
      textColor: "#1D4ED8",
      icon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.333 18.8597H17.573C16.773 18.8597 16.013 19.1697 15.453 19.7297L13.743 21.4198C12.963 22.1898 11.693 22.1898 10.913 21.4198L9.203 19.7297C8.643 19.1697 7.87301 18.8597 7.08301 18.8597H6.33301C4.67301 18.8597 3.33301 17.5298 3.33301 15.8898V4.97974C3.33301 3.33974 4.67301 2.00977 6.33301 2.00977H18.333C19.993 2.00977 21.333 3.33974 21.333 4.97974V15.8898C21.333 17.5198 19.993 18.8597 18.333 18.8597Z"
            stroke="#04297A"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.33301 9.16077C7.33301 8.23077 8.09301 7.4707 9.02301 7.4707C9.95301 7.4707 10.713 8.23077 10.713 9.16077C10.713 11.0408 8.043 11.2408 7.453 13.0308C7.333 13.4008 7.643 13.7708 8.033 13.7708H10.713"
            stroke="#04297A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.3728 13.7608V8.05088C16.3728 7.79088 16.2028 7.56083 15.9528 7.49083C15.7028 7.42083 15.4328 7.52083 15.2928 7.74083C14.5728 8.90083 13.7928 10.2208 13.1128 11.3808C13.0028 11.5708 13.0028 11.8208 13.1128 12.0108C13.2228 12.2008 13.4328 12.3208 13.6628 12.3208H17.3328"
            stroke="#04297A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className='col-span-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4'>
        {buttons.map((btn, index) => (
            <Button
              key={index}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium"
              style={{
                backgroundColor: btn.backgroundColor,
                color: btn.textColor,
              }}
            >
              <span>{btn.icon}</span>
              <span>{btn.label}</span>
            </Button>
          ))}
    </div>
  )
}
