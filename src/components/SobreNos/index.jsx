import Image from "next/image"
import Link from "next/link";
import img1 from '@/public/image-1.jpg'
export default function SobreNos() {
  return (
    <>
      <section className="about-section">
        <div className="container-site">
          <div className="about-company">
            <div className="router"><Link href="./" alt="Home">Home</Link> &gt; Sobre nós</div>
            <div className="about-info">
              <div className="img-about"><Image src={img1} alt="Nossa empresa" /></div>
              <div className="about">
                <h2>Sobre nós</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
