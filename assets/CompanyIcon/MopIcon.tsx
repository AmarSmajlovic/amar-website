import React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  center?: boolean;
}

const MopIcon = ({ center, ...props }: Props) => {
  return (
    <svg
      {...props}
      width="170"
      height="70"
      style={{ alignSelf: center ? "center" : undefined }}
      viewBox="0 0 401 128"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="Header__StyledHorizontalLogo-sc-1yp3bsp-2 cQDkej"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59 0C52.7157 0 47.8837 2.69468 38.2198 8.08405C35.1444 9.79917 32.1297 11.5533 29.5 13.2102C26.4171 15.1526 22.9098 17.4873 19.456 19.8431C10.9067 25.6748 6.63208 28.5906 3.88946 33.4475C1.14683 38.3044 0.876633 43.3114 0.336236 53.3255C0.135594 57.0436 0 60.7562 0 64C0 67.2438 0.135594 70.9564 0.336235 74.6745C0.876633 84.6886 1.14683 89.6956 3.88946 94.5525C6.63207 99.4094 10.9067 102.325 19.4559 108.157C22.9097 110.513 26.4171 112.847 29.5 114.79C32.1297 116.447 35.1444 118.201 38.2199 119.916C47.8837 125.305 52.7157 128 59 128C65.2843 128 70.1163 125.305 79.7802 119.916C82.8556 118.201 85.8703 116.447 88.5 114.79C91.5829 112.847 95.0902 110.513 98.544 108.157C107.093 102.325 111.368 99.4094 114.111 94.5525C116.853 89.6956 117.123 84.6886 117.664 74.6745C117.864 70.9564 118 67.2438 118 64C118 60.7562 117.864 57.0436 117.664 53.3255C117.123 43.3114 116.853 38.3044 114.111 33.4475C111.368 28.5906 107.093 25.6748 98.544 19.8431C95.0902 17.4873 91.5829 15.1526 88.5 13.2102C85.8703 11.5533 82.8556 9.79917 79.7801 8.08405C70.1163 2.69468 65.2843 0 59 0ZM57.6759 36.5805L53.6275 40.6888C52.8676 41.4642 52.8676 42.7187 53.6275 43.49L57.6759 47.6003C58.0406 47.9758 58.5188 48.1666 58.997 48.1808C59.4792 48.1666 59.9574 47.9738 60.3221 47.6003L64.3685 43.49C65.1303 42.7187 65.1303 41.4642 64.3685 40.6888L60.3221 36.5805C59.9554 36.205 59.4792 36.0122 58.997 36C58.5188 36.0122 58.0406 36.207 57.6759 36.5805ZM21.2585 51.1119L24.6463 52.4211C25.6554 52.8088 26.7799 52.2973 27.1609 51.2722L28.4516 47.8297C28.8345 46.8067 28.33 45.6598 27.3209 45.2742L23.9331 43.965C22.9261 43.5732 21.7995 44.0888 21.4185 45.1118L20.1278 48.5543C19.7449 49.5794 20.2514 50.7222 21.2585 51.1119ZM85.0178 89.8141L92.0285 57.4205C92.5168 55.1025 90.1482 53.2777 88.1118 54.4469L78.08 61.9449C77.2735 62.4077 76.307 62.4199 75.4884 61.9774L60.2552 52.3744C59.8622 52.1593 59.4306 52.0517 58.999 52.0497C58.5674 52.0517 58.1378 52.1613 57.7427 52.3744L42.5116 61.9774C41.693 62.422 40.7265 62.4077 39.92 61.9449L29.8882 54.4469C27.8518 53.2777 25.4791 55.1005 25.9715 57.4205L32.9863 89.8141C33.2558 91.0807 34.6397 92.1342 35.9081 91.986C37.525 91.7932 42.6413 90.4779 42.6413 90.4779C44.6209 89.8142 47.0544 88.9677 47.0544 87.1064V81.7193L57.7164 90.6687C58.2027 91.0077 58.6059 91.2005 59.001 91.2513C59.3961 91.2005 59.8014 91.0077 60.2856 90.6687L70.9497 81.7193V87.1064C70.9497 88.9657 73.3832 89.8142 75.3628 90.4779C75.3628 90.4779 80.477 91.7952 82.0939 91.986C83.3644 92.1342 84.7483 91.0828 85.0178 89.8141ZM93.3516 52.4211L96.7415 51.1119C97.7486 50.7222 98.2551 49.5794 97.8722 48.5543L96.5815 45.1118C96.2005 44.0888 95.0739 43.5732 94.0669 43.965L90.6791 45.2742C89.67 45.6619 89.1675 46.8067 89.5484 47.8297L90.8391 51.2722C91.2201 52.2973 92.3446 52.8068 93.3516 52.4211Z"
        fill="#ED2130"
      ></path>
      <path
        d="M177.878 55.24H183.851V35.0059H177.878V55.24Z"
        fill="currentColor"
      ></path>
      <path
        d="M180.865 24C182.899 24 184.541 25.5165 184.541 27.5092C184.541 29.5019 182.899 31.0641 180.865 31.0641C178.832 31.0641 177.1 29.5019 177.1 27.5092C177.1 25.5165 178.832 24 180.865 24Z"
        fill="currentColor"
      ></path>
      <path
        d="M160.866 44.5373V55.2402H154.85V44.3201C154.808 41.7635 153.25 40.4223 151.52 40.4223C149.702 40.4223 148.016 41.4606 148.016 44.5373V55.2402H142V35.0061H148.016V37.9514C148.967 35.8291 151.129 34.6155 153.294 34.6155C156.496 34.6155 158.659 35.8291 159.783 38.1685C161.732 35.0061 164.414 34.5736 165.841 34.5736C170.645 34.5736 173.63 37.6484 173.63 43.7581V55.2402H167.658V44.4516C167.658 41.8092 166.102 40.4223 164.327 40.4223C162.422 40.4223 160.866 41.592 160.866 44.5373Z"
        fill="currentColor"
      ></path>
      <path
        d="M188.308 55.24H194.324V44.5371C194.324 41.4623 195.926 40.4221 198.046 40.4221C200.078 40.4221 201.55 41.7652 201.55 44.4514V55.24H207.564V43.1502C207.564 37.3892 204.708 34.5735 200.165 34.5735C197.785 34.5735 195.405 35.9147 194.324 37.9512V35.0059H188.308V55.24Z"
        fill="currentColor"
      ></path>
      <path
        d="M211.811 55.24H217.783V35.0059H211.811V55.24Z"
        fill="currentColor"
      ></path>
      <path
        d="M214.796 24C216.83 24 218.473 25.5165 218.473 27.5092C218.473 29.5019 216.83 31.0641 214.796 31.0641C212.762 31.0641 211.031 29.5019 211.031 27.5092C211.031 25.5165 212.762 24 214.796 24Z"
        fill="currentColor"
      ></path>
      <path
        d="M221.419 40.3349C221.375 42.1981 221.419 45.273 227.477 46.9209L230.115 47.6143C231.586 48.0049 232.105 48.4793 232.105 49.3461C232.105 50.3882 230.981 50.994 229.64 51.0359C227.996 51.0359 226.696 49.8662 226.655 48.6964H221.029C221.072 53.2039 225.357 55.6729 229.467 55.6729C233.707 55.6729 238.207 53.6364 238.207 49.3461C238.207 48.0468 237.602 44.7986 232.712 43.4536L229.293 42.5449C228.082 42.242 227.562 41.6361 227.518 41.0284C227.477 40.1197 228.342 39.5119 229.64 39.5119C230.593 39.5119 231.889 39.771 231.932 41.2894H237.602C237.558 36.3495 233.317 34.572 229.293 34.572C225.055 34.572 221.461 37.3458 221.419 40.3349Z"
        fill="currentColor"
      ></path>
      <path
        d="M253.487 35.0061V39.7707H249.246V55.2401H243.276V39.7707H239.599V35.0061H243.276V27.2485H249.246V35.0061H253.487Z"
        fill="currentColor"
      ></path>
      <path
        d="M255.677 55.24H261.693V48.1778C261.693 42.8473 263.249 40.1192 266.71 40.1192C267.663 40.1192 268.702 40.2049 269.784 40.725L270.865 35.3088C269.912 34.8326 268.831 34.5735 267.404 34.5735C265.327 34.5735 262.731 36.1318 261.693 39.902V35.0059H255.677V55.24Z"
        fill="currentColor"
      ></path>
      <path
        d="M280.649 65.1622H274.288L279.136 53.1619L271.347 35.0063H277.751L282.207 46.4883L286.708 35.0063H293.11L280.649 65.1622Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M312.002 34.5735C306.291 34.5735 301.531 38.6885 301.531 45.0572C301.531 51.4279 306.291 55.5867 312.002 55.5867C317.714 55.5867 322.518 51.4279 322.518 45.0572C322.518 38.6885 317.714 34.5735 312.002 34.5735ZM312.002 40.4659C314.512 40.4659 316.589 42.3291 316.589 45.0572C316.589 47.8749 314.512 49.6943 312.002 49.6943C309.537 49.6943 307.459 47.8749 307.459 45.0572C307.459 42.3291 309.537 40.4659 312.002 40.4659Z"
        fill="currentColor"
      ></path>
      <path
        d="M338.921 29.7634H336.714C334.639 29.7634 333.644 31.2361 333.644 33.6194V35.0063H337.711V39.7728H333.644V55.2404H327.586V39.7728H323.779V35.0063H327.586V33.6194C327.586 27.424 330.917 24.0005 336.714 24.0005H338.921V29.7634Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M147.97 75.6565V73.1437H142V103.299H147.97V90.9088C148.967 92.772 151.389 93.8122 153.899 93.8122C159.093 93.8122 163.678 89.6952 163.678 83.195C163.678 76.8263 159.093 72.7113 153.899 72.7113C151.389 72.7113 148.967 73.7953 147.97 75.6565ZM157.447 83.3246C157.447 86.2279 155.328 88.135 152.774 88.135C150.309 88.135 148.102 86.3594 148.102 83.3246C148.102 80.4212 150.263 78.4304 152.774 78.4304C155.328 78.4304 157.447 80.3355 157.447 83.3246Z"
        fill="currentColor"
      ></path>
      <path
        d="M172.988 93.3778H166.972V73.1437H172.988V78.0398C174.027 74.2696 176.622 72.7113 178.699 72.7113C180.128 72.7113 181.207 72.9704 182.16 73.4466L181.079 78.8628C179.997 78.3427 178.958 78.257 178.005 78.257C174.544 78.257 172.988 80.9851 172.988 86.3156V93.3778Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M193.112 72.7113C187.4 72.7113 182.64 76.8263 182.64 83.195C182.64 89.5657 187.4 93.7245 193.112 93.7245C198.823 93.7245 203.627 89.5657 203.627 83.195C203.627 76.8263 198.823 72.7113 193.112 72.7113ZM193.112 78.6037C195.621 78.6037 197.699 80.4669 197.699 83.195C197.699 86.0127 195.621 87.832 193.112 87.832C190.646 87.832 188.568 86.0127 188.568 83.195C188.568 80.4669 190.646 78.6037 193.112 78.6037Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M216.223 98.0576C220.81 98.0576 222.064 94.8952 221.805 90.8659C220.854 92.7272 218.257 93.8112 215.747 93.8112C210.555 93.8112 205.666 89.6961 205.666 83.3255C205.666 76.8253 210.555 72.7103 215.747 72.7103C218.257 72.7103 220.81 73.7943 221.805 75.6555V73.1446H227.646V90.5611C227.646 99.2712 223.407 103.472 216.223 103.472C211.767 103.472 207.96 100.961 206.273 97.1908C207.012 96.8302 207.825 96.4287 208.639 96.0262C209.49 95.6057 210.343 95.1842 211.117 94.8075C211.811 96.6707 214.189 98.0576 216.223 98.0576ZM216.786 78.4294C214.233 78.4294 211.938 80.3364 211.938 83.194C211.938 86.2289 214.233 88.134 216.786 88.134C219.252 88.134 221.676 86.1431 221.676 83.194C221.676 80.163 219.296 78.4294 216.786 78.4294Z"
        fill="currentColor"
      ></path>
      <path
        d="M232.108 93.3778H238.124V86.3156C238.124 80.9851 239.68 78.257 243.141 78.257C244.094 78.257 245.133 78.3427 246.216 78.8628L247.296 73.4466C246.343 72.9704 245.263 72.7113 243.836 72.7113C241.758 72.7113 239.163 74.2696 238.124 78.0398V73.1437H232.108V93.3778Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M263.959 91.0817C262.662 93.0306 259.633 93.7678 258.075 93.7678C252.926 93.7678 247.776 89.7385 247.776 83.2383C247.776 76.74 252.926 72.7108 258.075 72.7108C259.372 72.7108 262.401 73.1451 263.959 75.3969V73.1451H269.93V93.3773H263.959V91.0817ZM259.07 88.0487C261.535 88.0487 263.959 86.2732 263.959 83.2383C263.959 80.2073 261.535 78.4299 259.07 78.4299C256.56 78.4299 254.007 80.335 254.007 83.2383C254.007 86.1417 256.56 88.0487 259.07 88.0487Z"
        fill="currentColor"
      ></path>
      <path
        d="M293.26 93.3783V82.6754C293.26 79.7302 294.816 78.5604 296.721 78.5604C298.496 78.5604 300.052 79.9473 300.052 82.5897V93.3783H306.024V81.8962C306.024 75.7866 303.039 72.7118 298.235 72.7118C296.808 72.7118 294.126 73.1442 292.177 76.3067C291.053 73.9672 288.89 72.7537 285.688 72.7537C283.523 72.7537 281.361 73.9672 280.41 76.0895V73.1442H274.394V93.3783H280.41V82.6754C280.41 79.5987 282.096 78.5604 283.915 78.5604C285.644 78.5604 287.202 79.9016 287.244 82.4583V93.3783H293.26Z"
        fill="currentColor"
      ></path>
      <path
        d="M329.139 82.6754V93.3783H323.123V82.4583C323.081 79.9016 321.523 78.5604 319.794 78.5604C317.975 78.5604 316.289 79.5987 316.289 82.6754V93.3783H310.273V73.1442H316.289V76.0895C317.241 73.9672 319.402 72.7537 321.567 72.7537C324.769 72.7537 326.932 73.9672 328.057 76.3067C330.005 73.1442 332.688 72.7118 334.114 72.7118C338.918 72.7118 341.904 75.7866 341.904 81.8962V93.3783H335.931V82.5897C335.931 79.9473 334.375 78.5604 332.6 78.5604C330.696 78.5604 329.139 79.7302 329.139 82.6754Z"
        fill="currentColor"
      ></path>
      <path
        d="M352.123 93.3781H346.151V73.144H352.123V93.3781Z"
        fill="currentColor"
      ></path>
      <path
        d="M352.816 65.6476C352.816 63.6548 351.172 62.1384 349.138 62.1384C347.104 62.1384 345.373 63.6548 345.373 65.6476C345.373 67.6403 347.104 69.2006 349.138 69.2006C351.172 69.2006 352.816 67.6403 352.816 65.6476Z"
        fill="currentColor"
      ></path>
      <path
        d="M362.599 93.3778H356.583V73.1437H362.599V76.089C363.68 74.0525 366.06 72.7113 368.44 72.7113C372.983 72.7113 375.839 75.527 375.839 81.288V93.3778H369.825V82.5892C369.825 79.903 368.353 78.5599 366.321 78.5599C364.201 78.5599 362.599 79.6001 362.599 82.6749V93.3778Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M395.012 90.8659C395.271 94.8952 394.017 98.0576 389.43 98.0576C387.396 98.0576 385.018 96.6707 384.323 94.8075C383.55 95.1842 382.697 95.6057 381.846 96.0262C381.032 96.4287 380.219 96.8302 379.479 97.1908C381.167 100.961 384.974 103.472 389.43 103.472C396.614 103.472 400.853 99.2712 400.853 90.5611V73.1446H395.012V75.6555C394.017 73.7943 391.464 72.7103 388.954 72.7103C383.762 72.7103 378.872 76.8253 378.872 83.3255C378.872 89.6961 383.762 93.8112 388.954 93.8112C391.464 93.8112 394.061 92.7272 395.012 90.8659ZM385.145 83.194C385.145 80.3364 387.44 78.4294 389.993 78.4294C392.502 78.4294 394.883 80.163 394.883 83.194C394.883 86.1431 392.459 88.134 389.993 88.134C387.44 88.134 385.145 86.2289 385.145 83.194Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default MopIcon;