/* eslint-disable @typescript-eslint/no-explicit-any */
export function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={`absolute z-40 -translate-y-1/2 top-1/2 -right-12 cursor-pointer bg-[#EEEEEE33] size-10 rounded-full flex justify-center items-center`}
      onClick={onClick}
    >
      <svg
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.94992 6.36398L0.000120163 11.3137L1.41432 12.7279L7.77832 6.36398L1.41432 0L0.000120163 1.41421L4.94992 6.36398Z"
          fill="#707070"
        />
      </svg>
    </div>
  );
}

export function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={`absolute z-40 -translate-y-1/2 top-1/2 -left-12 cursor-pointer bg-[#EEEEEE33] size-10 rounded-full flex justify-center items-center`}
      onClick={onClick}
    >
      <svg
        width={8}
        height={13}
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.8284 6.36398L7.7782 11.3137L6.364 12.7279L0 6.36398L6.364 0L7.7782 1.41421L2.8284 6.36398Z"
          fill="#707070"
        />
      </svg>
    </div>
  );
}
