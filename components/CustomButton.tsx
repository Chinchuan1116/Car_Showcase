'use client'
import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled}:CustomButtonProps) => {
  return (
    <button type={btnType || 'button'} className={`custom-btn ${containerStyles}`} onClick={handleClick} disabled={false}>
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6 ">
          <Image src={rightIcon} alt='rightIcon' fill className="object-contain rounded-full"/>
        </div>
      )}
    </button>
  )
}

export default CustomButton