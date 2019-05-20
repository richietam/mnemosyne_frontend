import Lightbox from 'react-images'
import React, { Component } from 'react'

const images = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
  },
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
  }
]

class AlbumGallery2 extends Component {

  render () {
    return (
      <Lightbox
       images={this.images}
       // isOpen={this.state.lightboxIsOpen}
       onClickPrev={this.gotoPrevious}
       onClickNext={this.gotoNext}
       onClose={this.closeLightbox}
     />
   )
  }
}

export default AlbumGallery2
