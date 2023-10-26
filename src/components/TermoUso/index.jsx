import Image from "next/image"
import Link from "next/link";
export default function TermoUso() {
  return (
    <>
      <section className="term-of-use">
        <div className="container-site">
          <div className="term-user">
            <div className="router"><Link href="./" alt="Home">Home</Link> &gt; Termos de uso</div>
            <h4>TERMOS DE SERVIÇO E USO DO SITE</h4>

            <div className="term">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis non voluptatem, sequi iusto nesciunt eligendi laborum debitis atque praesentium aliquam a minima assumenda repudiandae tenetur facilis vitae tempora consequuntur officia.
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
