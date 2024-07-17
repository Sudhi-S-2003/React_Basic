import { memo } from "react"

function Header() {
    console.log("header render")
  return (
    <div>Header</div>
  )
}

export default memo(Header)