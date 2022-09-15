import React, { forwardRef } from 'react'

const Wheel = forwardRef(({}, ref) => {
  return (
    <svg
      ref={ref}
      id="wheel"
      width="100%"
      height="100%"
      viewBox="0 15 903 865"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="452" cy="447" r="430" fill="#A5A5AC" />
      <circle cx="452" cy="447" r="400" fill="white" />
      <circle
        cx="452"
        cy="447"
        r="360"
        fill="white"
        stroke="#F3F3F7"
        strokeWidth="8"
      />
      <line
        x1="158.649"
        y1="659.97"
        x2="741.141"
        y2="236.765"
        stroke="#F3F3F7"
        strokeWidth="8"
      />
      <line
        x1="93"
        y1="446.501"
        x2="813"
        y2="446.501"
        stroke="#F3F3F7"
        strokeWidth="7"
      />
      <path d="M164 237L746.492 660.205" stroke="#F3F3F7" strokeWidth="7" />
      <path d="M340.5 789L562.992 104.239" stroke="#F3F3F7" strokeWidth="8" />
      <path d="M341 105L563.492 789.761" stroke="#F3F3F7" strokeWidth="8" />
      <defs>
        <filter
          id="filter0_i_15_10"
          x="22"
          y="17"
          width="860"
          height="860"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="52"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_innerShadow_15_10"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_15_10"
          />
        </filter>
        <filter
          id="filter1_d_15_10"
          x="0"
          y="0"
          width="903"
          height="903"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="16"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_15_10"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="19" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.534523 0 0 0 0 0.534523 0 0 0 0 0.579167 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_10"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_10"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
})

export default Wheel
