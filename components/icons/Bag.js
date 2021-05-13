const Bag = ({ ...props }) => {
  return (
    <svg
      width="15"
      height="20"
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.5" y="5.5" width="14" height="14" rx="0.5" stroke="white"/>
      <path d="M12 5.5C12 3.01472 9.98528 1 7.5 1C5.01472 1 3 3.01472 3 5.5" stroke="white"/>
    </svg>
  )
}

export default Bag