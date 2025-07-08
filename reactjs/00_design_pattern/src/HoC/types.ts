export type DogsImagesProps = {
  data: {
    message: string[]
    status: string
  }
  hovering?: boolean
  onMouseEnter: ()=> void
  onMouseLeave: ()=> void
}