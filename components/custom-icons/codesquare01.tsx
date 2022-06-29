import { Icon } from "@chakra-ui/react";

interface Props {
  svgColor: string
}

export function Codesquare01({svgColor}: Props) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" boxSize={8}>
      <path
        fill="none"
        d="m14.5 15 3-3-3-3m-5 0-3 3 3 3m-1.7 6h8.4c1.6802 0 2.5202 0 3.162-.327.5645-.2876 1.0234-.7465 1.311-1.311C21 18.7202 21 17.8802 21 16.2V7.8c0-1.68016 0-2.52024-.327-3.16197-.2876-.56449-.7465-1.02343-1.311-1.31105C18.7202 3 17.8802 3 16.2 3H7.8c-1.68016 0-2.52024 0-3.16197.32698-.56449.28762-1.02343.74656-1.31105 1.31105C3 5.27976 3 6.11984 3 7.8v8.4c0 1.6802 0 2.5202.32698 3.162.28762.5645.74656 1.0234 1.31105 1.311C5.27976 21 6.11984 21 7.8 21Z"
        stroke={svgColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

