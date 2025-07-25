
type SvgProps = React.SVGProps<SVGSVGElement>

export function OptionsIcon(props: SvgProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
      <path d='M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
      <path d='M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />
    </svg>
  );
}
