import React from 'react'
import { forwardRef } from 'react'

const Wheel12 = forwardRef(({}, ref) => {
  return (
    <svg
      ref={ref}
      id="wheel"
      width="100%"
      height="100%"
      viewBox="0 0 903 895"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_15_10)">
        <circle cx="452" cy="447" r="430" fill="#A5A5AC" />
      </g>
      <g filter="url(#filter1_d_15_10)">
        <circle cx="451.5" cy="447.5" r="397.5" fill="white" />
      </g>
      <circle
        cx="452"
        cy="448"
        r="361"
        fill="white"
        stroke="#EBF0F5"
        stroke-width="8"
      />
      <line
        x1="451.5"
        y1="808"
        x2="451.5"
        y2="88"
        stroke="#EBF0F5"
        stroke-width="7"
      />
      <line
        x1="274.8"
        y1="134.481"
        x2="634.8"
        y2="758.02"
        stroke="#EBF0F5"
        stroke-width="7"
      />
      <line
        x1="268.738"
        y1="758.02"
        x2="628.738"
        y2="134.481"
        stroke="#EBF0F5"
        stroke-width="7"
      />
      <line
        x1="141.981"
        y1="264.969"
        x2="765.519"
        y2="624.969"
        stroke="#EBF0F5"
        stroke-width="7"
      />
      <line
        x1="138.25"
        y1="624.969"
        x2="761.788"
        y2="264.969"
        stroke="#EBF0F5"
        stroke-width="7"
      />
      <line
        x1="92"
        y1="444.5"
        x2="812"
        y2="444.5"
        stroke="#EBF0F5"
        stroke-width="7"
      />
      <defs>
        <filter
          id="filter0_i_15_10"
          x="22"
          y="17"
          width="860"
          height="860"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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

export default Wheel12
